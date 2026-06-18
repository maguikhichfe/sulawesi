// Cargar borradores de perfiles desde localStorage al inicio
(function loadProfileDrafts(){
  try{
    // Limpiar borradores legacy (v1 → v2)
    if(!localStorage.getItem('profile_drafts_v2')){
      localStorage.removeItem('profile_drafts');
      localStorage.setItem('profile_drafts_v2','1');
    }
    const raw=JSON.parse(localStorage.getItem('profile_drafts')||'[]');
    // Deduplicar por id (conservar la última ocurrencia de cada id)
    const seen=new Set();
    const unique=raw.slice().reverse().filter(d=>{if(seen.has(d.id))return false;seen.add(d.id);return true;}).reverse();
    if(unique.length!==raw.length)localStorage.setItem('profile_drafts',JSON.stringify(unique));
    unique.forEach(d=>{
      const cfg=DRAFT_PROFILE_CONFIGS[d.name.trim().toLowerCase()];
      DB[d.id]=cfg
        ?{type:'PERFIL TOMOGRÁFICO',title:cfg.title,desc:cfg.desc,
          section_img_url:cfg.section_img_url,section_caption:cfg.section_caption,
          papers:cfg.papers,tags:cfg.tags}
        :{type:'PERFIL TOMOGRÁFICO',title:d.name,
          desc:d.notes||'[Pendiente: pasá el contexto del paper a Claude para completar esta descripción]',
          section_img_url:d.img||null,section_caption:'',papers:[],tags:['borrador']};
      const f=new ol.Feature({
        geometry:new ol.geom.LineString(d.coords.map(c=>ol.proj.fromLonLat(c))),
        feat_type:'tomo_profile', feat_id:d.id, feat_name:cfg?cfg.title:d.name,
        category:'cross_section', section_img_url:(cfg?cfg.section_img_url:null)||d.img||null
      });
      tomoProfileSource.addFeature(f);
    });
  }catch(e){}
})();

// Teclado: Enter confirma, Escape cancela cuando hay traza lista
document.addEventListener('keydown',e=>{
  if(!document.getElementById('profile-draw-panel') || document.getElementById('profile-draw-panel').style.display==='none') return;
  if(e.key==='Escape'){cancelProfileDraw();}
  if(e.key==='Enter'){
    const finish=document.getElementById('profile-draw-finish');
    if(finish.style.display!=='none') finishProfileDraw();
  }
});

// ── Etiquetas de perfiles — colocación manual ─────────────────────────
let _plLabelMode=false;   // modo "colocar etiqueta"
let _pleFeature=null;     // etiqueta siendo editada
let _plePendingCoord=null;// coordenada donde se va a colocar la nueva etiqueta

function toggleProfileLabelMode(){
  _plLabelMode=!_plLabelMode;
  const btn=document.getElementById('profile-label-add-btn');
  if(_plLabelMode){
    btn.style.borderColor='var(--accent)'; btn.style.color='var(--accent)';
    btn.textContent='✕ Cancelar';
    map._editModeActive=true;
    map.getTargetElement().style.cursor='crosshair';
  } else {
    btn.style.borderColor=''; btn.style.color=''; btn.textContent='⊕ Etiquetar';
    map._editModeActive=false;
    map.getTargetElement().style.cursor='';
    closeLabelEditor();
  }
}

function _showLabelEditor(coord, existingFeat, screenX, screenY){
  _pleFeature=existingFeat||null;
  _plePendingCoord=existingFeat?null:coord;
  const ed=document.getElementById('profile-label-editor');
  const inp=document.getElementById('ple-input');
  const title=document.getElementById('ple-title');
  title.textContent=existingFeat?'Editar etiqueta':'Nueva etiqueta — escribí y confirmá';
  inp.value=existingFeat?existingFeat.get('pl_text'):'';
  const vw=window.innerWidth, vh=window.innerHeight;
  let x=screenX+12, y=screenY-40;
  if(x+185>vw) x=screenX-195;
  if(y+75>vh) y=screenY-75;
  if(y<0) y=10;
  ed.style.left=x+'px'; ed.style.top=y+'px'; ed.style.display='';
  inp.focus(); inp.select();
}

function closeLabelEditor(){
  document.getElementById('profile-label-editor').style.display='none';
  _pleFeature=null; _plePendingCoord=null;
  if(_plLabelMode) toggleProfileLabelMode(); // desactivar modo tras confirmar/cancelar
}

function confirmLabelEdit(){
  const txt=document.getElementById('ple-input').value.trim();
  document.getElementById('profile-label-editor').style.display='none';
  if(_pleFeature){
    // Editar etiqueta existente
    if(txt) _pleFeature.set('pl_text',txt);
    else profileLabelSource.removeFeature(_pleFeature);
  } else if(_plePendingCoord && txt){
    // Nueva etiqueta en coordenada pendiente
    const f=new ol.Feature({
      geometry:new ol.geom.Point(_plePendingCoord),
      feat_type:'profile_label', pl_text:txt, pl_id:Date.now()
    });
    profileLabelSource.addFeature(f);
  }
  _pleFeature=null; _plePendingCoord=null;
  _saveAllProfileLabels();
  if(_plLabelMode){
    // Mantener modo activo para seguir colocando etiquetas
    const btn=document.getElementById('profile-label-add-btn');
    btn.style.borderColor='var(--accent)'; btn.style.color='var(--accent)';
    btn.textContent='✕ Cancelar';
    map._editModeActive=true;
  }
}

// Click en modo etiqueta → colocar nueva; click en etiqueta existente → editar
map.on('singleclick',evt=>{
  const mapRect=map.getTargetElement().getBoundingClientRect();
  const sx=evt.pixel[0]+mapRect.left, sy=evt.pixel[1]+mapRect.top;
  // Primero verificar si hay etiqueta existente en el punto
  const hit=map.forEachFeatureAtPixel(evt.pixel,f=>f,{layerFilter:l=>l===profileLabelLayer,hitTolerance:12});
  if(hit&&hit.get('feat_type')==='profile_label'){
    _showLabelEditor(null,hit,sx,sy);
    evt.stopPropagation(); return;
  }
  if(!_plLabelMode) return;
  _showLabelEditor(evt.coordinate,null,sx,sy);
  evt.stopPropagation();
});

// Cursor hover sobre etiqueta existente
map.on('pointermove',evt=>{
  if(evt.dragging||_plLabelMode) return;
  const hit=map.forEachFeatureAtPixel(evt.pixel,f=>f,{layerFilter:l=>l===profileLabelLayer,hitTolerance:12});
  if(hit) map.getTargetElement().style.cursor='text';
});

document.getElementById('ple-input')?.addEventListener('keydown',e=>{
  if(e.key==='Enter'){e.preventDefault();confirmLabelEdit();}
  if(e.key==='Escape'){closeLabelEditor();}
});

// ── Modal de recorte de imágenes ──────────────────────────────────────
let _cropImg=null, _cropPath='', _cropSel={x:0,y:0,w:0,h:0};
let _cropDrag=null;  // {mode:'draw'|'move'|'resize', sx,sy,ox,oy,ow,oh}

function openCropModal(imgPath){
  _cropPath=imgPath;
  const modal=document.getElementById('crop-modal');
  const canvas=document.getElementById('crop-canvas');
  const title=document.getElementById('crop-modal-title');
  const sizeEl=document.getElementById('crop-modal-size');

  modal.style.display='flex';
  title.textContent='Recortar: '+imgPath.split('/').pop();

  _cropImg=new Image();
  _cropImg.onload=()=>{
    const maxW=Math.min(860, window.innerWidth*0.85);
    const scale=Math.min(1, maxW/_cropImg.naturalWidth);
    canvas.width=Math.round(_cropImg.naturalWidth*scale);
    canvas.height=Math.round(_cropImg.naturalHeight*scale);
    canvas._scale=scale;
    // Selección inicial = imagen completa
    _cropSel={x:0,y:0,w:_cropImg.naturalWidth,h:_cropImg.naturalHeight};
    sizeEl.textContent=`${_cropImg.naturalWidth}×${_cropImg.naturalHeight} px`;
    _cropDraw();
  };
  _cropImg.src=imgPath+'?t='+Date.now();
}

function closeCropModal(){
  document.getElementById('crop-modal').style.display='none';
  const btn=document.getElementById('crop-save-btn');
  if(btn){btn.textContent='✓ Guardar recorte';btn.disabled=false;}
  _cropImg=null; _cropPath=''; _cropDrag=null;
}

function _cropDraw(){
  const canvas=document.getElementById('crop-canvas');
  const ctx=canvas.getContext('2d');
  const sc=canvas._scale||1;
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.drawImage(_cropImg,0,0,canvas.width,canvas.height);

  // Oscurecer afuera del recorte
  const {x,y,w,h}=_cropSel;
  ctx.fillStyle='rgba(0,0,0,0.45)';
  ctx.fillRect(0,0,canvas.width,y*sc);
  ctx.fillRect(0,(y+h)*sc,canvas.width,canvas.height-(y+h)*sc);
  ctx.fillRect(0,y*sc,x*sc,h*sc);
  ctx.fillRect((x+w)*sc,y*sc,canvas.width-(x+w)*sc,h*sc);

  // Borde naranja
  ctx.strokeStyle='#cc785c';
  ctx.lineWidth=2;
  ctx.strokeRect(x*sc,y*sc,w*sc,h*sc);

  // Handles en las esquinas
  const hs=7;
  [[x,y],[x+w,y],[x,y+h],[x+w,y+h]].forEach(([hx,hy])=>{
    ctx.fillStyle='#cc785c';
    ctx.fillRect(hx*sc-hs/2,hy*sc-hs/2,hs,hs);
  });

  // Actualizar label
  document.getElementById('crop-coords').textContent=
    `x=${Math.round(x)} y=${Math.round(y)} w=${Math.round(w)} h=${Math.round(h)}`;
}

function cropReset(){
  if(!_cropImg) return;
  _cropSel={x:0,y:0,w:_cropImg.naturalWidth,h:_cropImg.naturalHeight};
  _cropDraw();
}
function cropApplyAll(){cropReset();}

// Mouse interactions en el canvas
(function(){
  const canvas=()=>document.getElementById('crop-canvas');
  function getPos(e){
    const cv=canvas();
    const r=cv.getBoundingClientRect();
    const sc=cv._scale||1;
    return {x:(e.clientX-r.left)/sc, y:(e.clientY-r.top)/sc};
  }
  function hitHandle(p){
    const {x,y,w,h}=_cropSel;
    const hs=10/(canvas()._scale||1);
    const corners=[{n:'tl',cx:x,cy:y},{n:'tr',cx:x+w,cy:y},{n:'bl',cx:x,cy:y+h},{n:'br',cx:x+w,cy:y+h}];
    for(const c of corners){
      if(Math.abs(p.x-c.cx)<hs&&Math.abs(p.y-c.cy)<hs) return c.n;
    }
    return null;
  }
  function inSel(p){
    const {x,y,w,h}=_cropSel;
    return p.x>=x&&p.x<=x+w&&p.y>=y&&p.y<=y+h;
  }
  document.addEventListener('mousedown',e=>{
    const cv=canvas();
    if(!_cropImg||e.target!==cv) return;
    e.preventDefault();
    const p=getPos(e);
    const handle=hitHandle(p);
    if(handle){
      _cropDrag={mode:'resize',handle,sx:p.x,sy:p.y,ox:_cropSel.x,oy:_cropSel.y,ow:_cropSel.w,oh:_cropSel.h};
    } else if(inSel(p)){
      _cropDrag={mode:'move',sx:p.x,sy:p.y,ox:_cropSel.x,oy:_cropSel.y};
    } else {
      _cropDrag={mode:'draw',sx:p.x,sy:p.y};
    }
  });
  document.addEventListener('mousemove',e=>{
    if(!_cropDrag||!_cropImg) return;
    const p=getPos(e);
    const iw=_cropImg.naturalWidth, ih=_cropImg.naturalHeight;
    const clamp=(v,lo,hi)=>Math.max(lo,Math.min(hi,v));
    if(_cropDrag.mode==='draw'){
      const x=clamp(Math.min(_cropDrag.sx,p.x),0,iw);
      const y=clamp(Math.min(_cropDrag.sy,p.y),0,ih);
      const w=clamp(Math.abs(p.x-_cropDrag.sx),1,iw-x);
      const h=clamp(Math.abs(p.y-_cropDrag.sy),1,ih-y);
      _cropSel={x,y,w,h};
    } else if(_cropDrag.mode==='move'){
      const dx=p.x-_cropDrag.sx, dy=p.y-_cropDrag.sy;
      _cropSel.x=clamp(_cropDrag.ox+dx,0,iw-_cropSel.w);
      _cropSel.y=clamp(_cropDrag.oy+dy,0,ih-_cropSel.h);
    } else if(_cropDrag.mode==='resize'){
      const {handle,sx,sy,ox,oy,ow,oh}=_cropDrag;
      const dx=p.x-sx, dy=p.y-sy;
      let {x,y,w,h}={x:ox,y:oy,w:ow,h:oh};
      if(handle.includes('r')) w=clamp(ow+dx,1,iw-ox);
      if(handle.includes('b')) h=clamp(oh+dy,1,ih-oy);
      if(handle.includes('l')){x=clamp(ox+dx,0,ox+ow-1);w=ow-(x-ox);}
      if(handle.includes('t')){y=clamp(oy+dy,0,oy+oh-1);h=oh-(y-oy);}
      _cropSel={x,y,w,h};
    }
    _cropDraw();
  });
  document.addEventListener('mouseup',()=>{_cropDrag=null;});
})();

// Teclado para el crop modal
document.addEventListener('keydown',e=>{
  if(!_cropImg||document.getElementById('crop-modal').style.display==='none') return;
  if(e.key==='Escape'){closeCropModal();return;}
  const step=e.shiftKey?10:1;
  const iw=_cropImg.naturalWidth, ih=_cropImg.naturalHeight;
  const clamp=(v,lo,hi)=>Math.max(lo,Math.min(hi,v));
  if(e.key==='ArrowLeft') {e.preventDefault();
    if(e.ctrlKey) _cropSel.w=clamp(_cropSel.w-step,1,iw);
    else _cropSel.x=clamp(_cropSel.x-step,0,iw-_cropSel.w);}
  if(e.key==='ArrowRight'){e.preventDefault();
    if(e.ctrlKey) _cropSel.w=clamp(_cropSel.w+step,1,iw-_cropSel.x);
    else _cropSel.x=clamp(_cropSel.x+step,0,iw-_cropSel.w);}
  if(e.key==='ArrowUp')   {e.preventDefault();
    if(e.ctrlKey) _cropSel.h=clamp(_cropSel.h-step,1,ih);
    else _cropSel.y=clamp(_cropSel.y-step,0,ih-_cropSel.h);}
  if(e.key==='ArrowDown') {e.preventDefault();
    if(e.ctrlKey) _cropSel.h=clamp(_cropSel.h+step,1,ih-_cropSel.y);
    else _cropSel.y=clamp(_cropSel.y+step,0,ih-_cropSel.h);}
  if(e.key==='Enter'){saveCrop();return;}
  _cropDraw();
});

async function saveCrop(){
  if(!_cropPath){alert('No hay imagen cargada');return;}
  const {x,y,w,h}=_cropSel;
  if(w<2||h<2){alert('Selección demasiado pequeña');return;}
  const btn=document.getElementById('crop-save-btn');
  if(btn){btn.textContent='Guardando…';btn.disabled=true;}
  let data;
  try{
    const r=await fetch('/api/crop-image',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({path:_cropPath,x:Math.round(x),y:Math.round(y),w:Math.round(w),h:Math.round(h)})
    });
    data=await r.json();
    if(!r.ok) throw new Error(data.detail||JSON.stringify(data));
  }catch(err){
    alert('Error al guardar: '+err.message);
    if(btn){btn.textContent='✓ Guardar recorte';btn.disabled=false;}
    return;
  }
  // Recargar imagen en el panel si está visible
  const safeId=_cropPath.replace(/[^a-z0-9]/gi,'_');
  const panelImg=document.getElementById('panel-img-'+safeId);
  if(panelImg) panelImg.src=_cropPath+'?t='+Date.now();
  closeCropModal();
}

// ── fe_16: Conclusiones por sección ────────────────────────────────────
let activeSection='';

const SEC_NAMES={
  '1':'Descripción general del área',
  '2':'Distribución de la sismicidad',
  '3':'Estructura del manto',
  '4':'Campo gravitatorio',
  '5':'Flujo calórico',
  '6':'Estructura — fallas activas y deformación',
  '7':'Petrotectónica y Metamorfismo'
};

const CONCLUSIONS={
  '1':[
    {text:'Sulawesi es una isla formada por acreción sucesiva de distintos terrenos (microcontinentes, arcos volcánicos y ofiolitas) sobre el margen oriental de Sunda — un orógeno acrecional. Ocupa la intersección de tres sistemas de placas mayores: la Indo-Australiana, la de Filipinas/Pacífico y la Euroasiática/Sunda, y su forma de cuatro brazos resulta de esas colisiones sucesivas desde el Oligoceno.',ref:'Socquet et al. (2006); Baillie & Decker (2022)'},
    {text:'La Falla Palu-Koro (PKF) constituye el principal límite cinemático intra-isla con desplazamiento sinestral activo, conectando el NST al norte con la Falla Matano al sur en una triple junction.',ref:'Socquet et al. (2006); Walpersdorf et al. (1998)'},
    {text:'La colisión del microcontinente Banggai-Sula con el brazo este es el evento tectónico más reciente y controla activamente la sismicidad, el alzamiento y la geomorfología del brazo este.',ref:'Satyana & Purwaningsih (2011); Husein et al. (2014); Hikmy & Isbram (2025)'},
    {text:'La doble subducción opuesta en el Mar de Molucas (Sangihe W-dipping + Halmahera E-dipping) es única a escala global y genera el Molucca Sea Collision Complex como producto activo de acreción entre ambos arcos.',ref:'Yuan et al. (2024); Hall & Spakman (2015)'},
  ],
  '2':[
    {text:'El sismo de Palu 2018 fue un evento supershear multisegmento sobre la PKF, con propagación hacia el sur a velocidad superior a la de la onda S, documentando la primera ruptura supershear confirmada en una falla continental sinestral activa.',ref:'Natawidjaja, D. H. et al. (2021)'},
    {text:'El gap sísmico central del NST no ha producido sismos interplaca significativos. Tres hipótesis compiten: bajo acoplamiento, deslizamiento asísmico, o acumulación de estrés para un futuro gran sismo.',ref:'Serhalawan & Chen (2024)'},
    {text:'El análisis de mecanismos focales identifica múltiples regímenes de esfuerzo en Sulawesi, reflejando la partición de la deformación en un sistema de microplacas con cinemática diferenciada entre el brazo norte, la PKF y el brazo este.',ref:'Jibran & Rafie (2025)'},
    {text:'El plano de ruptura difiere por estructura: la PKF, falla transcurrente continental casi vertical, alcanza la isoterma sismogénica a poca profundidad (<20 km) y produce sismos someros; la subducción del NST, plano inclinado, permite rupturas más profundas y de mayor magnitud potencial — distinción clave para evaluar la amenaza de cada sistema.',ref:'Natawidjaja et al. (2021); Serhalawan & Chen (2024)'},
    {text:'La Batui Thrust exhibe actividad confirmada por morfometría tectónica, directamente ligada al frente de avance del microcontinente Banggai-Sula sobre la plataforma de Sulawesi.',ref:'Hikmy & Isbram (2025)'},
  ],
  '3':[
    {text:'La tomografía global y regional confirma múltiples slabs activos bajo Sulawesi y sus mares adyacentes: Sangihe (W-dipping, Celebes Sea), Halmahera (E-dipping), Banda (rollback desde el Mioceno Medio) y Sula (N-dipping, posiblemente remanente pre-Mioceno).',ref:'Kesumastuti et al. (2025); Hall & Spakman (2015)'},
    {text:'La anomalía de baja Vp bajo el brazo este se interpreta como delaminación litosférica post-colisión Banggai-Sula o como ventana mantélica por slab break-off — el remanente de litósfera pierde su slab-pull y deja una ventana por donde asciende manto caliente, coherente con la secuencia cinemática del Sula slab.',ref:'Kesumastuti et al. (2025); Hall & Spakman (2015)'},
    {text:'Los vectores de fast SKS en Sulawesi y el Mar de Molucas revelan flujo mantélico toroidal alrededor de los bordes de slabs, con extrusión lateral en la cuña mantélica de Banda — patrón sin análogo conocido en otros sistemas de subducción.',ref:'Di Leo et al. (2012); Hua et al. (2023); Yuan et al. (2024)'},
    {text:'El espesor cortical varía significativamente entre el Mar de Célebes (litosfera oceánica delgada) y el norte de Sulawesi (corteza continental engrosada), con la PKF actuando como límite abrupto en su segmento offshore.',ref:'Yang et al. (2026)'},
  ],
  '4':[
    {text:'La anomalía de Bouguer negativa sobre el brazo sur–central indica déficit de densidad en profundidad — raíz cortical compensada isostáticamente por Airy bajo la West Sulawesi Igneous Province y el arco Eoceno-Oligoceno. La anomalía de Bouguer positiva sobre el Mar de Célebes indica litosfera oceánica delgada y joven (sin raíz).',ref:'Bonvalot et al. (2012); Shih et al. (2026)'},
    {text:'La campaña de gravimetría aérea sobre Sulawesi permitió mejorar la precisión del modelo geoidal local a nivel decimétrico, estableciendo una referencia geodésica de alta resolución para el monitoreo de deformación activa.',ref:'Shih et al. (2026)'},
    {text:'La fosa del NST exhibe la firma gravimétrica típica de zona de subducción: anomalía de aire libre fuertemente negativa (topografía succionada dinámicamente, sin equilibrio isostático) con Bouguer positiva sobre la fosa. El arco volcánico del brazo norte muestra aire libre positiva — el contraste fosa/arco es coherente con subducción activa del Mar de Célebes.',ref:'Bonvalot et al. (2012)'},
  ],
  '5':[
    {text:'La Curie Point Depth (CPD) es significativamente más somera en el brazo norte que en el brazo sur, reflejando el contraste entre el arco volcánico activo asociado al NST y el basamento cratónico frío del brazo SW.',ref:'Pratama et al. (2025)'},
    {text:'Los campos geotérmicos de Lahendong y Leilem-Tompaso se sitúan en la caldera Tondano, directamente sobre el arco volcánico activo del NST, con un potencial geotérmico regional considerable.',ref:'Pratama et al. (2025)'},
    {text:'La manifestación de hidrógeno natural en Tanjung Api está espacialmente controlada por la Falla Ampana, sugiriendo que la deformación activa puede ser fuente de H₂ abiogénico en zonas de falla transpresivas.',ref:'Faturrakhman et al. (2025)'},
  ],
  '6':[
    {text:'El campo de velocidades GPS muestra partición de la deformación (strain partition) en bloques discretos: el brazo norte se desplaza hacia el SE mientras el sistema PKF-Matano absorbe la componente sinestral de la convergencia oblicua.',ref:'Socquet et al. (2006); Walpersdorf et al. (1998)'},
    {text:'La PKF exhibe una segmentación geomorfológica en cuatro sectores (Tanimbaya, Donggala, Palu, Saluki), con la ruptura de 2018 documentando que múltiples segmentos pueden activarse en un único evento supershear.',ref:'Natawidjaja, D. H. et al. (2021)'},
  ],
  '7':[
    {text:'El East Sulawesi Ophiolite (ESO) es litosfera oceánica del Cretácico Temprano obductada sobre el microcontinente Banggai-Sula durante el Neógeno tardío. Su presencia define el brazo este como un terreno fundamentalmente oceánico.',ref:'Husein et al. (2014); Faturrakhman et al. (2024)'},
    {text:'Los dos sistemas de arco de Sulawesi son de tipo distinto: el North Arm Volcanic Arc es un arco de islas (subducción océano-océano del Mar de Célebes), mientras la West Sulawesi Igneous Province es magmatismo de arco continental sobre corteza engrosada. Documentan episodios separados en tiempo y espacio, reflejando la migración del frente subductante.',ref:'Baillie & Decker (2022); Satyana et al. (2011)'},
    {text:'El Molucca Sea Collision Complex (MSCC) entre los arcos Sangihe y Halmahera es un ejemplo activo de acreción por colisión de arcos, con material ofiolítico y pelágico deformado entre dos sistemas de subducción opuestos.',ref:'Yuan et al. (2024)'},
    {text:'Los microcontinentes Banggai-Sula y Buton-Tukang Besi tienen afinidad gondwánica (australiana), evidenciada por fauna fósil y litologías de plataforma carbonática — su acreción sobre Sulawesi oriental marca el cierre definitivo del brazo este.',ref:'Satyana & Purwaningsih (2011)'},
    {text:'El espectro metamórfico expuesto en Sulawesi central abarca desde anfibolita (PMC, adyacente a la PKF) hasta esquisto verde (CSMB/Pompangeo y MMC), siguiendo el esquema de facies y pares metamórficos de Miyashiro-Ernst: paragénesis de baja presión y alta temperatura junto al arco y de mayor presión sobre los planos de acreción.',ref:'Baillie & Decker (2022); Chen & Serhalawan (2024)'},
    {text:'La secuencia metamórfica registra la acreción progresiva de bloques continentales y oceánicos sobre el núcleo de Sulawesi: el CSMB (Pompangeo Schist + mélange) se forma como complejo de acreción Cretácico-Paleógeno, y los core complexes (PMC, MMC) se exhuman en el Mioceno-Plioceno por extensión ligada al rollback del Mar de Célebes.',ref:'Baillie & Decker (2022)'},
  ],
  'general':[
    {text:'Sulawesi es el nodo de convergencia de tres sistemas de placas mayores — Indo-Australiana, Pacífica/Filipinas y Euroasiática/Sunda. Esta triple confluencia, activa desde el Oligoceno tardío, produce la morfología de cuatro brazos y una tasa de sismicidad entre las más altas del planeta para su extensión territorial.',ref:'Socquet et al. (2006); Baillie & Decker (2022); Argus et al. (2011)'},
    {text:'El ensamblaje de Sulawesi (orógeno acrecional) involucra al menos tres episodios tectónicos distintos registrados estratigráfica y metamórficamente: formación y obducción de la litósfera oceánica del ESO (Cretácico–Mioceno Temprano), inicio de subducción del NST en el Mioceno Tardío, y colisión del microcontinente Banggai-Sula en el Plioceno. Cada episodio deja una firma en el registro metamórfico, geoquímico y cinemático de la isla.',ref:'Baillie & Decker (2022); Satyana et al. (2011); Kesumastuti et al. (2025)'},
    {text:'La deformación activa muestra partición de la deformación (strain partition) en bloques discretos por un sistema de fallas de primer orden: PKF (sinestral), Matano (dextral, E-W), Sorong (dextral) y NST (megathrust). La partición varía por segmento: el NST presenta al menos un gap sísmico sin ruptura histórica significativa, mientras la PKF demostró en 2018 que puede romper múltiples segmentos en un evento supershear único.',ref:'Jibran & Rafie (2025); Serhalawan & Chen (2024); Natawidjaja et al. (2021)'},
    {text:'El sistema mantélico bajo Sulawesi es uno de los más complejos globalmente: múltiples slabs activos (Sangihe, Halmahera, Banda, Sula) con geometrías y edades distintas, flujo toroidal alrededor de los bordes de slab, y la doble subducción opuesta del Mar de Molucas como estructura geotectónica sin análogo conocido en el planeta.',ref:'Yuan et al. (2024); Kesumastuti et al. (2025); Di Leo et al. (2012); Hall & Spakman (2015)'},
    {text:'La amenaza sísmica, el potencial geotérmico y las manifestaciones de H₂ natural son consecuencia directa de la geodinámica activa y no pueden interpretarse sin ella: el sismo de Palu 2018 (supershear), los campos de Lahendong-Tompaso y la emisión de Tanjung Api son expresiones en superficie de procesos mantélicos y corticales que este mapa documenta en sus siete secciones.',ref:'Natawidjaja et al. (2021); Pratama et al. (2025); Faturrakhman et al. (2025)'},
  ],
};

function openConcModal(key){
  const s=key||activeSection;
  const data=CONCLUSIONS[s];
  const isGeneral=s==='general';
  const name=isGeneral?'Síntesis general — Sulawesi':(SEC_NAMES[s]||'Todas las secciones');
  document.getElementById('conc-sec-tag').textContent=isGeneral?'★':(s?'S'+s:'—');
  document.getElementById('conc-title').textContent=name;
  const body=document.getElementById('conc-body');
  if(!s){
    body.innerHTML='<div id="conc-empty">Seleccioná una sección (S1–S7) para ver sus conclusiones.</div>';
  } else if(!data||!data.length){
    body.innerHTML='<div id="conc-empty">Sin conclusiones cargadas para esta sección.</div>';
  } else {
    body.innerHTML=data.map((c,i)=>`<div class="conc-item">
      <span class="conc-num">${i+1}</span>
      <span class="conc-text">${c.text}<em class="conc-ref">${c.ref}</em></span>
    </div>`).join('');
  }
  document.getElementById('conc-modal').classList.add('open');
  document.getElementById('conc-overlay').classList.add('open');
}

function closeConcModal(){
  document.getElementById('conc-modal').classList.remove('open');
  document.getElementById('conc-overlay').classList.remove('open');
}

document.getElementById('conc-overlay').addEventListener('click',closeConcModal);

// ── Citation anchors for corpus papers without direct panel DB entries ──────
DB['ref_lestari']={papers:[{ref:'Lestari et al. (2021)',title:'P-wave velocity structure beneath Sulawesi and surrounding seas',journal:'Pure and Applied Geophysics, 178, 4491-4511. doi:10.1007/s00024-021-02887-5',find:'Tomografía P-wave Estrecho de Makassar: alta velocidad → cuña litosférica continental; baja velocidad en cuencas sedimentarias. Apoya modelo de rift abortado.'}]};
DB['ref_liu']={papers:[{ref:'Liu et al. (2026)',title:'S-wave velocity structure of the Indonesian archipelago from ambient noise and earthquake tomography',journal:'Journal of Geophysical Research: Solid Earth, [en prensa]. doi:[en prensa]',find:'Tomografía S-wave alta resolución: slabs bajo Sulawesi y Banda resueltos con mayor detalle. Rollback Banda arc e imagen del slab gap bajo East Java.'}]};
DB['ref_shih']={papers:[{ref:'Shih et al. (2026)',title:'Airborne gravity survey over Sulawesi Island and surrounding seas',journal:'Journal of Geodesy. doi:[en prensa]',find:'Gravimetría aérea de alta resolución sobre Sulawesi: anomalías Bouguer y Free-air calibradas para estructura cortical. Constrains densidad y espesor cortical por brazo.'}]};
DB['ref_heryandoko']={papers:[{ref:'Heryandoko et al. (2024)',title:'Ambient noise tomography reveals crustal structure of Sulawesi Island',journal:'Geophysical Journal International, [en prensa]. doi:[en prensa]',find:'ANT Sulawesi: variación espesor cortical entre brazos. Baja velocidad en el graben de Palu y bajo la cuenca de Gorontalo. Contraste cortical Brazo Norte vs. Sur.'}]};
// ── fe_17: Bibliografía completa ────────────────────────────────────────
const BIB_STATIC=[
  {ref:'Argus, D. F., Gordon, R. G., & DeMets, C. (2011)',title:'Geologically current motion of 56 plates relative to the no-net-rotation reference frame',journal:'Geochemistry, Geophysics, Geosystems, 12(11). doi:10.1029/2011GC003751',find:'NNR-MORVEL56 — velocidades absolutas de placas'},
  {ref:'Bird, P. (2003)',title:'An updated digital model of plate boundaries',journal:'Geochemistry, Geophysics, Geosystems, 4(3), 1027. doi:10.1029/2001GC000252',find:'Límites globales de placa Bird 2003'},
  {ref:'Bonvalot et al. (2012)',title:'World Gravity Map',journal:'BGI-CGMW-CNES-IRD, Paris. doi:10.1080/01490419.2012.718232',find:'WGM2012 — anomalías Bouguer y Free-air'},
  {ref:'Copernicus / EOX (2021)',title:'Sentinel-2 cloudless mosaic 2021',journal:'EOX IT Services GmbH. https://s2maps.eu',find:'Fondo satelital Sentinel-2'},
  {ref:'Förste et al. (2014)',title:'EIGEN-6C4 — The latest combined global gravity field model',journal:'GFZ Data Services. doi:10.5880/icgem.2015.1',find:'EIGEN-6C4 — anomalía de altura geoidal'},
  {ref:'GEBCO Compilation Group (2024)',title:'GEBCO 2024 Grid',journal:'GEBCO. doi:10.5285/1c44ce99-0a0d-5f4f-e063-7086abc0ea0f',find:'Batimetría GEBCO'},
  {ref:'Global Volcanism Program (2025)',title:'Volcanoes of the World, v.5.3.5',journal:'Smithsonian Institution. doi:10.5479/si.GVP.VOTW5-2025.5.3',find:'Catálogo volcanes Holocenos GVP'},
  {ref:'Hayes et al. (2018)',title:'Slab2, a comprehensive subduction zone geometry model',journal:'Science, 362(6410), 58–61. doi:10.1126/science.aat4723',find:'Slab2 — contornos de slabs'},
  {ref:'Müller, R. D. et al. (2019)',title:'A global plate model including lithospheric deformation along major rifts and orogens',journal:'Tectonics, 38(6), 1884–1907. doi:10.1029/2018TC005462',find:'GPlates MULLER2019 — topología presente'},
  {ref:'Styron, R., & Pagani, M. (2020)',title:'The GEM Global Active Faults Database',journal:'Earthquake Spectra, 36(S1), 160–180. https://github.com/GEMScienceTools/gem-global-active-faults',find:'GEM Global Active Faults'},
  {ref:'Advokaat et al. (2017)',title:'Eocene and Oligocene subduction and obduction in western Sulawesi',journal:'Tectonics, 36(8), 1593–1619. doi:10.1029/2017TC004504',find:'Cronología metamórfica Sulawesi — S8'},
];
let _bibAll=[];
function collectBib(){
  const seen=new Map();   // ref → {ref,title,journal,uses}
  const usageCount=new Map();
  for(const entry of Object.values(DB)){
    if(!entry?.papers)continue;
    for(const p of entry.papers){
      if(!p?.ref)continue;
      usageCount.set(p.ref,(usageCount.get(p.ref)||0)+1);
      if(!seen.has(p.ref))seen.set(p.ref,{ref:p.ref,title:p.title||'',journal:p.journal||'',url:p.url||undefined});
    }
  }
  for(const p of BIB_STATIC){if(!seen.has(p.ref))seen.set(p.ref,p);}
  // Contar también apariciones en CONCLUSIONS (refs cortas → match por año + autor inicial)
  const allRefs=[...seen.keys()];
  if(typeof CONCLUSIONS!=='undefined'){
    Object.values(CONCLUSIONS).forEach(items=>{
      if(!Array.isArray(items))return;
      items.forEach(item=>{
        if(!item?.ref)return;
        item.ref.split(';').forEach(r=>{
          r=r.trim();
          const ym=r.match(/\((\d{4}[a-z]?)\)/);if(!ym)return;
          const yr=ym[1];
          const au=(r.match(/^([\wÁÉÍÓÚáéíóú\-]+)/)||[])[1]||'';
          const match=allRefs.find(fr=>fr.includes('('+yr+')')&&fr.toLowerCase().startsWith(au.slice(0,4).toLowerCase()));
          if(match)usageCount.set(match,(usageCount.get(match)||0)+1);
        });
      });
    });
  }
  const arr=[...seen.values()].sort((a,b)=>a.ref.localeCompare(b.ref,'es',{sensitivity:'base'}));
  arr.forEach(p=>{ p._uses=usageCount.get(p.ref)||0; });
  return arr;
}
function renderBibList(papers){
  const list=document.getElementById('bib-list');
  if(!papers.length){list.innerHTML='<div style="font-size:.65rem;color:var(--dim);padding:12px 0">Sin resultados.</div>';return;}
  list.innerHTML=papers.map(p=>{
    const url=paperUrl(p);
    const t=url?`<a href="${url}" target="_blank" rel="noopener" class="plink">${p.title}</a>`:p.title;
    const badge=p._uses?`<span style="font-size:.55rem;background:rgba(204,120,92,.15);color:var(--accent);border:1px solid rgba(204,120,92,.3);border-radius:10px;padding:1px 6px;margin-left:6px;vertical-align:middle">${p._uses}×</span>`:'';
    return`<div class="bib-entry"><div class="bib-ref">${p.ref}${badge}</div>${p.title?`<div class="bib-title">${t}</div>`:''}${p.journal?`<div class="bib-journal">${p.journal}</div>`:''}</div>`;
  }).join('');
}
function openBibModal(){
  _bibAll=collectBib();
  document.getElementById('bib-hdr-count').textContent=`${_bibAll.length} fuentes`;
  document.getElementById('bib-q').value='';
  renderBibList(_bibAll);
  document.getElementById('bib-modal').classList.add('open');
  document.getElementById('bib-overlay').classList.add('open');
  setTimeout(()=>document.getElementById('bib-q').focus(),50);
}
function closeBibModal(){
  document.getElementById('bib-modal').classList.remove('open');
  document.getElementById('bib-overlay').classList.remove('open');
}
function filterBib(q){
  const ql=q.toLowerCase();
  const filtered=ql?_bibAll.filter(p=>(p.ref+p.title+p.journal).toLowerCase().includes(ql)):_bibAll;
  document.getElementById('bib-hdr-count').textContent=`${filtered.length} / ${_bibAll.length} fuentes`;
  renderBibList(filtered);
}
function exportBib(){
  const q=(document.getElementById('bib-q').value||'').toLowerCase();
  const list=q?_bibAll.filter(p=>(p.ref+p.title+p.journal).toLowerCase().includes(q)):_bibAll;
  const txt=list.map(p=>[p.ref,p.title,p.journal].filter(Boolean).join('. ')+'.').join('\n\n');
  const a=document.createElement('a');
  a.href=URL.createObjectURL(new Blob([txt],{type:'text/plain;charset=utf-8'}));
  a.download='bibliografia_sulawesi_'+new Date().toISOString().slice(0,10)+'.txt';
  a.click();URL.revokeObjectURL(a.href);
}
document.getElementById('bib-overlay').addEventListener('click',closeBibModal);
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(document.getElementById('bib-modal').classList.contains('open'))closeBibModal();if(document.getElementById('conc-modal').classList.contains('open'))closeConcModal();}});

// ── fe_15: Herramienta Draw merged_geom ──────────────────────────────────
let mgDrawInter=null;
let mgDrawCurrentCanonical=null;
const mgDrawSource=new ol.source.Vector();
const mgDrawLayer=new ol.layer.Vector({
  source:mgDrawSource,
  style:new ol.style.Style({
    stroke:new ol.style.Stroke({color:'#f59e0b',width:2.5,lineDash:[6,3]}),
    image:new ol.style.Circle({radius:4,fill:new ol.style.Fill({color:'#f59e0b'}),stroke:new ol.style.Stroke({color:'#000',width:1})})
  }),
  zIndex:999
});
map.addLayer(mgDrawLayer);

const TYPE_LABELS={
  fault:'Tipo A/B — Fallas',
  subduction_zone:'Tipo A — Subducción',
  fold_thrust_belt:'Tipo B — Cinturones',
  structure:'Tipo H — Unidades geológicas',
  geological_unit:'Tipo H — Unidades geológicas'
};
const LINE_TYPES=['fault','subduction_zone','fold_thrust_belt'];

// source DB → ref layer keys calibradas
const SOURCE_TO_REFS={
  'baillie_2022_sulawesi':                         ['ref_baillie'],
  'socquet_2006_gps_kinematics':                   ['ref_socquet'],
  'walpersdorf_1998_n_sulawesi_gps':               ['ref_walpersdorf'],
  'satyana_2011_ipa_collision':                    ['ref_satyana_ipa'],
  'satyana_2011_iagi_evolution':                   ['ref_satyana_iagi'],
  'surono_2012_tectonoestratigrafia':              ['ref_surono'],
  'serhalawan_chen_2024_sulawesi_seismotectonics': ['ref_serhalawan'],
  'serhalawan_2024_sulawesi':                      ['ref_serhalawan'],
  'cipta_2016_sulawesi_psha':                      ['ref_cipta'],
  'jibran_2025_sulawesi_tectonic_regimes':         ['ref_jibran'],
  'natawidjaja_2021_pkf_lidar':                    ['ref_nataw','ref_nataw_inland'],
  'natawidjaja_2020_palu_rupture':                 ['ref_nataw2020'],
  'greenfield_2021_n_sulawesi_megathrust':         ['ref_greenfield'],
  'jayadi_2023_pkf_tomo':                          ['ref_jayadi'],
  'lukman_2016_matano':                            ['ref_lukman'],
  'pratama_2025_pfa_geothermal':                   ['ref_pratama'],
  'shih_2026_geoid_sulawesi':                      ['ref_shih'],
  'hua2023_banda_sulawesi':                        ['ref_hua'],
  'hua_2023_banda_anisotropy':                     ['ref_hua'],
  'cao_2024_sula_mantle':                          ['ref_cao'],
  'yuan_2024_molucca_mantle_flow':                 ['ref_yuan'],
  'yuan_2024_molucca_mantle_flows':                ['ref_yuan'],
  'heryandoko_2024_ant_crustal':                   ['ref_heryandoko'],
  'dileo_2012_indonesia_mantle':                   ['ref_dileo'],
  'lestari_2021_pwave_tomo':                       ['ref_lestari'],
  'liu_2026_indonesia_swave_tomo':                 ['ref_liu'],
};

let _mgRefActive=[];

// Etiquetas legibles para los ref layers
const REF_LABELS={
  ref_baillie:'Baillie 2022',ref_socquet:'Socquet 2006',ref_walpersdorf:'Walpersdorf 1998',
  ref_satyana_ipa:'Satyana 2011 IPA',ref_satyana_iagi:'Satyana 2011 IAGI',ref_surono:'Surono 2012',ref_serhalawan:'Serhalawan 2024',
  ref_cipta:'Cipta 2016',ref_jibran:'Jibran 2025',ref_nataw:'Nataw 2021 Fig.3',
  ref_nataw_inland:'Nataw 2021 Fig.6',ref_nataw2020:'Nataw 2020',ref_greenfield:'Greenfield 2021',
  ref_jayadi:'Jayadi 2023',ref_lukman:'Lukman 2016',
  ref_pratama:'Pratama 2025',ref_shih:'Shih 2026',ref_hua:'Hua 2023',ref_cao:'Cao 2024',
  ref_yuan:'Yuan 2024',ref_heryandoko:'Heryandoko 2024',ref_dileo:'Di Leo 2012',
  ref_lestari:'Lestari 2021',ref_liu:'Liu 2026',
};

function activateMgRefs(sources){
  _mgRefActive=[];
  const keys=new Set();
  sources.forEach(s=>(SOURCE_TO_REFS[s]||[]).forEach(k=>keys.add(k)));
  keys.forEach(key=>{
    const lyr=layerObjs[key];
    if(!lyr||lyr.getVisible())return;
    lyr.setVisible(true);
    const chk=document.getElementById('chk-'+key);
    if(chk){chk.classList.add('on');chk.textContent='✓';}
    _mgRefActive.push(key);
  });
  // Mostrar accesos directos a calibrar en el modal
  const existing=document.getElementById('mgdraw-ref-btns');
  if(existing)existing.remove();
  if(!_mgRefActive.length)return;
  const container=document.createElement('div');
  container.id='mgdraw-ref-btns';
  container.style.cssText='margin-top:8px;padding:6px 8px;background:var(--bg3);border-radius:4px;border:1px solid var(--border)';
  container.innerHTML='<div style="font-size:.58rem;color:var(--dim);text-transform:uppercase;margin-bottom:5px">Referencias activas — click para calibrar</div>'
    +_mgRefActive.map(k=>`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:3px">
      <span style="font-size:.63rem;color:var(--text)">${REF_LABELS[k]||k}</span>
      <button onclick="calibrateMgRef('${k}')" style="font-family:monospace;font-size:.58rem;padding:2px 6px;background:var(--bg2);border:1px solid var(--accent);color:var(--accent);border-radius:3px;cursor:pointer">✏ Calibrar</button>
    </div>`).join('');
  document.getElementById('mgdraw-list').appendChild(container);
}

function calibrateMgRef(key){
  // Abrir verificación y activar el georref editor para esa capa
  const body=document.getElementById('verif-body');
  const arrow=document.getElementById('verif-arrow');
  if(body){body.style.display='block';if(arrow)arrow.textContent='▼';}
  const lyr=layerObjs[key];
  if(lyr&&!lyr.getVisible()){lyr.setVisible(true);const chk=document.getElementById('chk-'+key);if(chk){chk.classList.add('on');chk.textContent='✓';}}
  if(typeof activateGeoref==='function'&&typeof REF_LAYERS_DATA!=='undefined'&&REF_LAYERS_DATA[key]){activateGeoref(key);}
  // Cerrar el modal de draw y abrir el panel de capas para que vea los controles
  closeMgDrawModal();
  document.getElementById('lp').classList.add('open');
  setTimeout(()=>{const el=document.getElementById('chk-'+key);if(el)el.scrollIntoView({behavior:'smooth',block:'center'});},150);
}

function deactivateMgRefs(){
  _mgRefActive.forEach(key=>{
    const lyr=layerObjs[key];
    if(lyr){lyr.setVisible(false);}
    const chk=document.getElementById('chk-'+key);
    if(chk){chk.classList.remove('on');chk.textContent='';}
  });
  _mgRefActive=[];
  const btns=document.getElementById('mgdraw-ref-btns');
  if(btns)btns.remove();
}

async function openMgDrawModal(){
  document.getElementById('mgdraw-modal').style.display='block';
  document.getElementById('mgdraw-btn').classList.add('active');
  await loadMgDrawList();
}

function closeMgDrawModal(){
  document.getElementById('mgdraw-modal').style.display='none';
  document.getElementById('mgdraw-btn').classList.remove('active');
}

let _mgDrawAll=false;
function toggleMgDrawAll(){
  _mgDrawAll=!_mgDrawAll;
  const btn=document.getElementById('mgdraw-all-btn');
  if(btn){btn.style.color=_mgDrawAll?'var(--accent)':'var(--dim)';btn.style.borderColor=_mgDrawAll?'var(--accent)':'var(--border)';}
  loadMgDrawList();
}
async function loadMgDrawList(){
  const url='/api/geodata/canonical/pending'+(_mgDrawAll?'?all=1':'');
  const res=await fetch(url);
  const data=await res.json();
  const canonicals=data.canonicals||[];
  const groups={};
  canonicals.forEach(c=>{
    const t=c.layer_type||'other';
    if(!groups[t])groups[t]=[];
    groups[t].push(c);
  });
  let html='';
  if(!canonicals.length){
    html='<div style="color:var(--dim);font-size:.55rem;padding:8px 0;text-align:center">✓ Todos los canonicals tienen merged_geom</div>';
  } else {
    const label=_mgDrawAll?`${canonicals.length} canonicals (modo redibujar)`:`${canonicals.length} canonicals sin geometría canónica`;
    html+=`<div style="color:var(--dim);font-size:.63rem;margin-bottom:8px">${label}</div>`;
    Object.entries(groups).forEach(([type,items])=>{
      html+=`<div class="mgdraw-group">${TYPE_LABELS[type]||type}</div>`;
      items.forEach(c=>{
        const hint=LINE_TYPES.includes(c.layer_type)?'LineString':'Polygon';
        const existsMark=c.has_geom?'<span style="color:var(--accent);margin-left:3px" title="Ya tiene geometría">✎</span>':'';
        html+=`<div class="mgdraw-item" data-id="${c.id}" data-name="${(c.name||c.id).replace(/"/g,'&quot;')}" data-lt="${c.layer_type}" data-hint="${hint}"
          onclick="selectMgCanonical(this,'${c.id}','${(c.name||c.id).replace(/'/g,'\\u0027')}','${c.layer_type}','${hint}')">
          <span class="mg-name">${c.name||c.id}${existsMark}</span>
          <span class="mg-meta">${c.feature_count} feat · ${hint}</span>
        </div>`;
      });
    });
  }
  document.getElementById('mgdraw-list').innerHTML=html;
}

async function selectMgCanonical(el,id,name,layerType,geomHint){
  document.querySelectorAll('.mgdraw-item').forEach(e=>e.classList.remove('selected'));
  el.classList.add('selected');
  mgDrawCurrentCanonical={id,name,layerType,geomHint};

  const old=document.getElementById('mgdraw-type-sel');
  if(old)old.remove();
  const sel=document.createElement('div');
  sel.id='mgdraw-type-sel';
  sel.innerHTML=`<div class="mg-sel-name">${name}</div><div style="font-size:.6rem;color:var(--dim);margin:4px 0 6px">Cargando features…</div>`;
  document.getElementById('mgdraw-list').appendChild(sel);
  sel.scrollIntoView({behavior:'smooth',block:'nearest'});

  canonPreviewSource.clear();
  deactivateMgRefs();
  _previewColorIdx=0;

  try{
    const r=await fetch(`/api/geodata/canonical/${id}/features`);
    const fc=await r.json();
    const feats=fc.features||[];

    // Colores por source
    const sourceColors={};
    feats.forEach(f=>{
      const src=f.properties.source||'';
      if(!sourceColors[src]){sourceColors[src]=PREVIEW_COLORS[_previewColorIdx%PREVIEW_COLORS.length];_previewColorIdx++;}
      f.properties._color=sourceColors[src];
    });

    // Render features en mapa
    if(feats.length){
      const fmt=new ol.format.GeoJSON();
      canonPreviewSource.addFeatures(fmt.readFeatures(fc,{featureProjection:'EPSG:3857'}));
      const sources=[...new Set(feats.map(f=>f.properties.source).filter(Boolean))];
      activateMgRefs(sources);
      const ext=canonPreviewSource.getExtent();
      if(ext&&isFinite(ext[0]))map.getView().fit(ext,{padding:[80,300,80,300],duration:600,maxZoom:10});
    }

    // Construir selector con ambas opciones
    let featListHtml='';
    if(feats.length){
      featListHtml=`<div class="mg-sel-section">Features asignados</div>`;
      feats.forEach(f=>{
        const col=sourceColors[f.properties.source||'']||'#60a5fa';
        const label=f.properties.source||'sin fuente';
        const fname=f.properties.name||'';
        const fid=f.properties.id;
        featListHtml+=`<div class="mg-feat-item" style="border-left:3px solid ${col}">
          <div style="display:flex;align-items:center;gap:4px">
            <div class="mg-feat-label" onclick="adoptExistingFeature('${id}',${fid})" title="Adoptar esta geometría">
              <span style="color:${col};font-weight:bold">${label}</span>
              ${fname?`<span style="color:var(--dim);font-size:.6rem"> — ${fname}</span>`:''}
            </div>
            <div class="mg-feat-actions">
              <button class="move-btn" onclick="toggleMoveInput(${fid})" title="Mover a otro canonical">→</button>
              <button onclick="removeFeatFromCanonical(${fid},'${id}')" title="Desasignar del canonical">✗</button>
            </div>
          </div>
          <div id="mg-move-${fid}" style="display:none;margin-top:4px" class="mg-move-input">
            <input id="mg-move-input-${fid}" placeholder="canonical_id destino (ej: canon_19)" onkeydown="if(event.key==='Enter')confirmMoveFeat(${fid},this.value,'${id}')">
            <button onclick="confirmMoveFeat(${fid},document.getElementById('mg-move-input-${fid}').value,'${id}')">✓</button>
          </div>
        </div>`;
      });
    }

    sel.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
        <div class="mg-sel-name" style="margin:0">${name}</div>
        <button onclick="deleteCanonical('${id}','${name}')" style="font-family:monospace;font-size:.6rem;padding:2px 6px;border-radius:3px;cursor:pointer;background:var(--bg2);border:1px solid #ef4444;color:#ef4444" title="Borrar canonical y desasignar todos sus features">🗑</button>
      </div>
      ${featListHtml}
      <div class="mg-sel-section">Geometría canónica</div>
      <div class="mg-sel-btns">
        <button onclick="startMgDraw('LineString')" class="${geomHint==='LineString'?'suggested':''}">→ Línea</button>
        <button onclick="startMgDraw('Polygon')" class="${geomHint==='Polygon'?'suggested':''}">⬡ Polígono</button>
        <button onclick="startMgDraw('Point')" title="Colocar etiqueta — ideal para bahías/cuencas">· Punto</button>
      </div>`;

  }catch(e){
    console.warn('canonPreview:',e);
    sel.innerHTML=`<div class="mg-sel-name">${name}</div>
      <div class="mg-sel-section">Trazar nueva geometría</div>
      <div class="mg-sel-btns">
        <button onclick="startMgDraw('LineString')" class="${geomHint==='LineString'?'suggested':''}">→ Línea</button>
        <button onclick="startMgDraw('Polygon')" class="${geomHint==='Polygon'?'suggested':''}">⬡ Polígono</button>
        <button onclick="startMgDraw('Point')" title="Colocar etiqueta — ideal para bahías/cuencas">· Punto</button>
      </div>`;
  }
}

async function adoptExistingFeature(canonicalId,featureId){
  const r=await fetch(`/api/geodata/canonical-groups/${canonicalId}/resolve?chosenId=${featureId}`,{method:'POST'});
  if(r.ok){
    canonPreviewSource.clear();
    deactivateMgRefs();
    loadMergedGeoms();
    openMgDrawModal();
  } else {
    alert(`Error al adoptar: ${r.status}`);
  }
}

function toggleMoveInput(featId){
  const el=document.getElementById(`mg-move-${featId}`);
  if(!el)return;
  const open=el.style.display!=='none'&&el.style.display!=='';
  el.style.display=open?'none':'flex';
  if(!open)document.getElementById(`mg-move-input-${featId}`)?.focus();
}

async function removeFeatFromCanonical(featId, canonicalId){
  if(!confirm(`Desasignar feature ${featId} del canonical ${canonicalId}?`))return;
  const r=await fetch(`/api/geodata/features/${featId}/canonical`,{
    method:'PATCH',headers:{'Content-Type':'application/json'},
    body:JSON.stringify({canonical_id:null})
  });
  if(r.ok){
    await selectMgCanonical(
      document.querySelector('.mgdraw-item.selected'),
      mgDrawCurrentCanonical.id, mgDrawCurrentCanonical.name,
      mgDrawCurrentCanonical.layerType, mgDrawCurrentCanonical.geomHint
    );
  } else alert(`Error: ${r.status}`);
}

async function confirmMoveFeat(featId, targetCanonicalId, fromCanonicalId){
  const tid=(targetCanonicalId||'').trim();
  if(!tid){alert('Ingresá un canonical_id destino');return;}
  const r=await fetch(`/api/geodata/features/${featId}/canonical`,{
    method:'PATCH',headers:{'Content-Type':'application/json'},
    body:JSON.stringify({canonical_id:tid})
  });
  if(r.ok){
    await selectMgCanonical(
      document.querySelector('.mgdraw-item.selected'),
      mgDrawCurrentCanonical.id, mgDrawCurrentCanonical.name,
      mgDrawCurrentCanonical.layerType, mgDrawCurrentCanonical.geomHint
    );
  } else alert(`Error: ${r.status}`);
}

async function deleteCanonical(canonicalId, name){
  if(!confirm(`Borrar canonical "${name}" (${canonicalId}) y desasignar todos sus features?`))return;
  const r=await fetch(`/api/geodata/canonical/${canonicalId}`,{method:'DELETE'});
  if(r.ok){
    canonPreviewSource.clear();
    deactivateMgRefs();
    loadMergedGeoms();
    openMgDrawModal();
  } else alert(`Error: ${r.status}`);
}

function startMgDraw(geomType){
  if(!mgDrawCurrentCanonical)return;
  closeMgDrawModal();
  document.getElementById('mgdraw-controls').style.display='block';
  document.getElementById('mgdraw-ctrl-name').textContent=mgDrawCurrentCanonical.name;
  const hint=document.getElementById('mgdraw-ctrl-hint');
  const finBtn=document.getElementById('mgdraw-finish-btn');
  if(geomType==='Point'){
    hint.textContent='Click para colocar la etiqueta';
    finBtn.style.display='none';
  } else {
    hint.innerHTML='Click → vértice &nbsp;·&nbsp; Doble-click → finalizar';
    finBtn.style.display='';
  }
  if(dblClickZoom)dblClickZoom.setActive(false);
  mgDrawSource.clear();
  if(mgDrawInter){map.removeInteraction(mgDrawInter);mgDrawInter=null;}
  mgDrawInter=new ol.interaction.Draw({
    source:mgDrawSource,
    type:geomType,
    stopClick:true,
    condition:ol.events.condition.primaryAction,
    freehandCondition:ol.events.condition.never,
  });
  map.addInteraction(mgDrawInter);
  map.getViewport().style.cursor='crosshair';
  mgDrawInter.on('drawend',evt=>{
    setTimeout(()=>saveMergedGeom(evt.feature,geomType),50);
  });
}

function stopMgDraw(){
  if(mgDrawInter){map.removeInteraction(mgDrawInter);mgDrawInter=null;}
  if(dblClickZoom)dblClickZoom.setActive(true);
  mgDrawSource.clear();
  map.getViewport().style.cursor='';
  document.getElementById('mgdraw-controls').style.display='none';
}

async function saveMergedGeom(feature,geomType){
  stopMgDraw();
  document.getElementById('mgdraw-finish-btn').style.display='';
  const geom=feature.getGeometry();
  let coordinates;
  if(geomType==='Point'){
    coordinates=ol.proj.toLonLat(geom.getCoordinates());
  } else if(geomType==='LineString'){
    coordinates=geom.getCoordinates().map(c=>ol.proj.toLonLat(c));
  } else {
    coordinates=geom.getCoordinates().map(ring=>ring.map(c=>ol.proj.toLonLat(c)));
  }
  const geometry={type:geomType,coordinates};
  try{
    const r=await fetch(`/api/geodata/canonical/${mgDrawCurrentCanonical.id}/merged_geom`,{
      method:'PATCH',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({geometry,name:mgDrawCurrentCanonical.name,layer_type:mgDrawCurrentCanonical.layerType})
    });
    if(r.ok){
      canonPreviewSource.clear();
      deactivateMgRefs();
      loadMergedGeoms();
      // Marcar item como done en la lista antes de recargar
      const item=document.querySelector(`.mgdraw-item[data-id="${mgDrawCurrentCanonical.id}"]`);
      if(item){item.classList.add('done');item.innerHTML=`<span class="mg-name" style="color:#22c55e">✓ ${mgDrawCurrentCanonical.name}</span>`;}
      openMgDrawModal();
    } else {
      alert(`Error al guardar: ${r.status}`);
      openMgDrawModal();
    }
  } catch(e){
    alert('Error de conexión');
    openMgDrawModal();
  }
}

document.getElementById('mgdraw-finish-btn')?.addEventListener('click',()=>{
  if(mgDrawInter)mgDrawInter.finishDrawing();
});
document.getElementById('mgdraw-cancel-btn')?.addEventListener('click',()=>{
  stopMgDraw();
  canonPreviewSource.clear();
  deactivateMgRefs();
  openMgDrawModal();
});
document.getElementById('mgdraw-close')?.addEventListener('click',()=>{
  closeMgDrawModal();
  stopMgDraw();
  canonPreviewSource.clear();
  deactivateMgRefs();
});
const closeBtn = document.getElementById('mgdraw-close');

if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    closeMgDrawModal();
    stopMgDraw();
    canonPreviewSource.clear();
    deactivateMgRefs();
  });
}

map.on('pointermove',evt=>{
  const ll=toLL(evt.coordinate);
  const lat=ll[1]>=0?`${ll[1].toFixed(3)}°N`:`${Math.abs(ll[1]).toFixed(3)}°S`;
  document.getElementById('coords').textContent=`${lat}  ${ll[0].toFixed(3)}°E`;
});

const pinSource=new ol.source.Vector();
map.addLayer(new ol.layer.Vector({source:pinSource,zIndex:999,style:new ol.style.Style({
  image:new ol.style.Circle({radius:7,fill:new ol.style.Fill({color:'rgba(255,255,255,.9)'}),stroke:new ol.style.Stroke({color:'rgba(255,255,255,.4)',width:1.5})})
})}));

// Botón de perfil gravimétrico está en S4 del panel (#grav-profile-btn)
// — el listener ya está registrado en el bloque fe_6 más arriba

// ── MODO EDICIÓN DE ESTRUCTURAS ──────────────────────────────────────────────
// Permite mover (Translate) y editar vértices (Modify) de cualquier feature vectorial.
// Solo features con id numérico (geo_features DB) pueden guardarse en el backend.
// Features hardcodeados (YUAN, HUA, etc.) pueden moverse visualmente pero no persistirse.

let editMode = false;
let editInteractSelect = null;
let editInteractTranslate = null;
let editInteractModify = null;
const editedFeatures = new Map();  // feature_id (number) → original GeoJSON geometry

function _featureDBId(f) {
  if(f.get('feat_type')==='canonical') return null; // canónicos van por otro endpoint
  const id = f.get('id') ?? f.get('feat_id');
  return (typeof id === 'number' || (typeof id === 'string' && /^\d+$/.test(id))) ? parseInt(id) : null;
}

function _featureCanonicalId(f) {
  if(f.get('feat_type') !== 'canonical') return null;
  const id = f.get('id') || f.get('feat_id');
  return (typeof id === 'string' && id.length > 0 && isNaN(Number(id))) ? id : null;
}

function _olGeomToGeoJSON(geom) {
  const type = geom.getType();
  const toLL = c => ol.proj.toLonLat(c);
  const roundPair = ([x,y]) => [Math.round(x*100000)/100000, Math.round(y*100000)/100000];
  if (type === 'Point') {
    return {type:'Point', coordinates: roundPair(toLL(geom.getCoordinates()))};
  }
  if (type === 'LineString') {
    return {type:'LineString', coordinates: geom.getCoordinates().map(c => roundPair(toLL(c)))};
  }
  if (type === 'Polygon') {
    return {type:'Polygon', coordinates: [geom.getCoordinates()[0].map(c => roundPair(toLL(c)))]};
  }
  if (type === 'MultiLineString') {
    return {type:'MultiLineString', coordinates: geom.getCoordinates().map(ring => ring.map(c => roundPair(toLL(c))))};
  }
  return null;
}

function _markEdited(feature) {
  const dbId = _featureDBId(feature);
  if (!editedFeatures.has(dbId ?? feature.ol_uid)) {
    // Guardar geometría original (clon)
    const orig = feature.getGeometry().clone();
    editedFeatures.set(dbId ?? feature.ol_uid, {feature, originalGeom: orig, dbId});
  }
  updateEditCount();
}

function updateEditCount() {
  const n = editedFeatures.size;
  const el = document.getElementById('edit-count');
  if (el) { el.textContent = n > 0 ? `${n} cambio${n>1?'s':''}` : ''; }
  document.getElementById('edit-save-btn').style.display = n > 0 ? '' : 'none';
}

function toggleEditMode() {
  editMode ? deactivateEditMode() : activateEditMode();
}

function activateEditMode() {
  editMode = true;
  document.getElementById('edit-mode-btn').classList.add('active');
  document.getElementById('edit-mode-btn').textContent = '✏ Editando';
  document.getElementById('edit-cancel-btn').style.display = '';
  document.getElementById('map').classList.add('edit-active');

  // Recolectar todas las features editables de todas las VectorLayers visibles
  const editColl = new ol.Collection();
  map.getLayers().forEach(l => {
    if (l instanceof ol.layer.Vector && l.getSource) {
      const src = l.getSource();
      if (src && src.getFeatures) src.getFeatures().forEach(f => editColl.push(f));
    }
  });

  // Select
  editInteractSelect = new ol.interaction.Select({
    condition: ol.events.condition.click,
    style: f => {
      const base = f.getGeometry().getType();
      if (base === 'Point') return new ol.style.Style({image:new ol.style.Circle({radius:8,fill:new ol.style.Fill({color:'rgba(245,158,11,0.9)'}),stroke:new ol.style.Stroke({color:'#fff',width:2})})});
      return new ol.style.Style({stroke:new ol.style.Stroke({color:'#f59e0b',width:3,lineDash:[6,3]}),fill:new ol.style.Fill({color:'rgba(245,158,11,0.15)'})});
    }
  });

  // Translate — arrastra features seleccionadas
  editInteractTranslate = new ol.interaction.Translate({
    features: editInteractSelect.getFeatures()
  });
  editInteractTranslate.on('translateend', e => {
    e.features.forEach(f => _markEdited(f));
  });

  // Modify — edita vértices de la geometría
  editInteractModify = new ol.interaction.Modify({
    features: editInteractSelect.getFeatures()
  });
  editInteractModify.on('modifyend', e => {
    e.features.forEach(f => _markEdited(f));
  });

  map.addInteraction(editInteractSelect);
  map.addInteraction(editInteractTranslate);
  map.addInteraction(editInteractModify);

  // Desactivar click-panel mientras se edita
  map._editModeActive = true;
}

function deactivateEditMode() {
  editMode = false;
  document.getElementById('edit-mode-btn').classList.remove('active');
  document.getElementById('edit-mode-btn').textContent = '✏ Editar';
  document.getElementById('edit-cancel-btn').style.display = 'none';
  document.getElementById('edit-save-btn').style.display = 'none';
  document.getElementById('edit-count').style.display = 'none';
  document.getElementById('map').classList.remove('edit-active');
  if(editInteractSelect)  { map.removeInteraction(editInteractSelect);   editInteractSelect=null; }
  if(editInteractTranslate){ map.removeInteraction(editInteractTranslate); editInteractTranslate=null; }
  if(editInteractModify)  { map.removeInteraction(editInteractModify);   editInteractModify=null; }
  map._editModeActive = false;
}

function cancelEdits() {
  // Revertir todas las geometrías originales
  editedFeatures.forEach(({feature, originalGeom}) => {
    feature.setGeometry(originalGeom.clone());
  });
  editedFeatures.clear();
  updateEditCount();
  deactivateEditMode();
}

async function saveEdits() {
  const entries = [...editedFeatures.values()];
  const geoFeats  = entries.filter(e => e.dbId !== null);
  const canonFeats = entries.filter(e => e.dbId === null && _featureCanonicalId(e.feature) !== null);
  const hardcoded  = entries.filter(e => e.dbId === null && _featureCanonicalId(e.feature) === null);

  if(geoFeats.length === 0 && canonFeats.length === 0 && hardcoded.length > 0){
    alert(`${hardcoded.length} feature(s) modificado(s) son datos hardcodeados que aún no están en la DB.\n\nExportá el GeoJSON y compartí las nuevas coordenadas para que las incorpore.`);
    return;
  }

  const total = geoFeats.length + canonFeats.length;
  const msg = `Guardar ${total} cambio(s) en la DB?${hardcoded.length>0?`\n(${hardcoded.length} features hardcodeados no se guardarán)`: ''}`;
  if(!confirm(msg)) return;

  document.getElementById('edit-save-btn').textContent = '⏳ Guardando...';
  let ok = 0, failed = 0;

  // geo_features → PATCH /api/geodata/features/{numericId}
  for(const {feature, dbId} of geoFeats) {
    const geom = _olGeomToGeoJSON(feature.getGeometry());
    if(!geom){ failed++; continue; }
    try {
      const r = await fetch(`/api/geodata/features/${dbId}`, {
        method:'PATCH', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({geometry: geom})
      });
      if(r.ok) ok++; else { console.error('PATCH geo_feature', dbId, await r.text()); failed++; }
    } catch(e){ console.error(e); failed++; }
  }

  // canonical merged_geom → PATCH /api/geodata/canonical/{canonId}/merged_geom
  for(const {feature} of canonFeats) {
    const canonId = _featureCanonicalId(feature);
    const geom = _olGeomToGeoJSON(feature.getGeometry());
    if(!geom){ failed++; continue; }
    try {
      const r = await fetch(`/api/geodata/canonical/${canonId}/merged_geom`, {
        method:'PATCH', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({geometry: geom})
      });
      if(r.ok){ ok++; } else { console.error('PATCH canonical', canonId, await r.text()); failed++; }
    } catch(e){ console.error(e); failed++; }
  }

  document.getElementById('edit-save-btn').textContent = '💾 Guardar cambios';

  if(failed > 0) alert(`Guardados: ${ok}  ·  Fallidos: ${failed}`);
  else {
    editedFeatures.clear();
    updateEditCount();
    deactivateEditMode();
    loadMergedGeoms(); // recargar merged_geoms para reflejar el cambio
    const n = document.createElement('div');
    n.textContent = `✓ ${ok} estructura${ok>1?'s':''} guardada${ok>1?'s':''} en la DB`;
    Object.assign(n.style,{position:'fixed',top:'60px',right:'12px',background:'#166534',border:'1px solid #22c55e',color:'#22c55e',padding:'8px 14px',borderRadius:'6px',fontFamily:'monospace',fontSize:'.55rem',zIndex:9999,transition:'opacity .4s'});
    document.body.appendChild(n);
    setTimeout(()=>{n.style.opacity='0';setTimeout(()=>n.remove(),400);}, 2500);
  }
}

map.on('singleclick', e => { if(map._editModeActive) e.stopPropagation(); });

// ── Welcome overlay (fe_ux1) ────────────────────────────────────────────
(function(){
  const LS_KEY='sulawesi_welcome_dismissed_v2';
  const overlay=document.getElementById('welcome-overlay');
  if(!overlay)return;
  if(localStorage.getItem(LS_KEY)==='1'){overlay.classList.add('hidden');return;}
})();
function dismissWelcome(permanent){
  const overlay=document.getElementById('welcome-overlay');
  if(!overlay)return;
  if(permanent)localStorage.setItem('sulawesi_welcome_dismissed_v2','1');
  overlay.classList.add('hidden');
  if(typeof activateSection==='function') activateSection('1');
}

