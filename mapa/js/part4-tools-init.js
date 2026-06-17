function saveExtents(){
  const data = {};
  for(const [k,d] of Object.entries(REF_LAYERS_DATA)) data[k] = d.ext;
  try { localStorage.setItem(GEOREF_LS_KEY, JSON.stringify(data)); } catch(e){}
}

async function saveGeorefToServer(){
  const out = {};
  for(const [k,d] of Object.entries(REF_LAYERS_DATA)){
    out[k] = d.ext.map(v=>+v.toFixed(4));
  }
  const btn = event.currentTarget;
  btn.textContent = '…';
  btn.disabled = true;
  try {
    const r = await fetch('/api/georef/save', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(out)
    });
    const d = await r.json();
    btn.textContent = '✓ Guardado';
    setTimeout(()=>{ btn.textContent='💾 Guardar extents'; btn.disabled=false; }, 2000);
  } catch(e) {
    btn.textContent = '✗ Error';
    btn.disabled = false;
  }
}

function resetGeorefExtents(){
  if(!confirm('Restaurar todos los extents a los valores originales?')) return;
  const defaults = {
    ref_baillie:      [117.5,-6.5,130.5, 5.0],
    ref_serhalawan:   [117.0,-6.0,130.0, 5.5],
    ref_nataw:        [118.5,-3.5,121.5, 2.5],
    ref_nataw_inland: [119.2,-1.8,120.8, 0.8],
    ref_socquet:      [113.0,-5.0,132.0,10.0],
    ref_lukman:       [119.5,-4.5,126.0,-0.5],
  };
  for(const [k,ext] of Object.entries(defaults)){
    if(REF_LAYERS_DATA[k]){ REF_LAYERS_DATA[k].ext = [...ext]; applyRefExtent(k); }
  }
  try { localStorage.removeItem(GEOREF_LS_KEY); } catch(e){}
}

function applyRefExtent(key) {
  const d = REF_LAYERS_DATA[key];
  const e = d.ext;
  const ext3857 = ol.proj.transformExtent(e, 'EPSG:4326', 'EPSG:3857');
  layerObjs[key].setSource(new ol.source.ImageStatic({
    url: d.url, imageExtent: ext3857, projection: 'EPSG:3857'
  }));
  saveExtents();
  const hud = document.getElementById('georef-hud');
  if (hud && activeRefKey === key) {
    document.getElementById('georef-name').textContent = d.label;
    document.getElementById('georef-ext').textContent =
      `[${e[0].toFixed(3)}, ${e[1].toFixed(3)}, ${e[2].toFixed(3)}, ${e[3].toFixed(3)}]`;
  }
}

function activateGeoref(key) {
  // Apagar cualquier otra capa de referencia que haya quedado activa antes de prender la nueva
  if (activeRefKey && activeRefKey !== key && layerObjs[activeRefKey]) {
    layerObjs[activeRefKey].setVisible(false);
    const prevChk = document.getElementById('chk-' + activeRefKey);
    if (prevChk) { prevChk.classList.remove('on'); prevChk.textContent = ''; }
  }
  activeRefKey = key;
  const d = REF_LAYERS_DATA[key];
  const e = d.ext;
  document.getElementById('georef-name').textContent = d.label;
  document.getElementById('georef-ext').textContent =
    `[${e[0].toFixed(3)}, ${e[1].toFixed(3)}, ${e[2].toFixed(3)}, ${e[3].toFixed(3)}]`;
  document.getElementById('georef-hud').style.display = 'block';
  // Highlight active row
  document.querySelectorAll('.lr[data-t^="ref_"]').forEach(r => {
    r.style.outline = r.dataset.t === key ? '1px solid var(--accent)' : '';
  });
}

function deactivateGeoref() {
  if (activeRefKey && layerObjs[activeRefKey]) {
    layerObjs[activeRefKey].setVisible(false);
    const chk = document.getElementById('chk-' + activeRefKey);
    if (chk) { chk.classList.remove('on'); chk.textContent = ''; }
  }
  activeRefKey = null;
  document.getElementById('georef-hud').style.display = 'none';
  document.querySelectorAll('.lr[data-t^="ref_"]').forEach(r => r.style.outline = '');
}

document.addEventListener('keydown', e => {
  if (!activeRefKey) return;
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  const d = REF_LAYERS_DATA[activeRefKey];
  const ext = [...d.ext];
  // Paso de traslación — 4 niveles
  const step = e.ctrlKey && e.shiftKey ? 0.0001   // ~10 m  ultra-fino
             : e.ctrlKey               ? 0.001    // ~100 m fino
             : e.shiftKey              ? 0.5      // ~50 km grande
             :                           0.05;    // ~5 km  normal
  // Factor de escala — 4 niveles
  const sf  = e.ctrlKey && e.shiftKey ? 0.001   // 0.1%  ultra-fino
            : e.ctrlKey               ? 0.005   // 0.5%  fino
            : e.shiftKey              ? 0.10    // 10%   grande
            :                           0.03;   // 3%    normal
  const sfE = 1 + sf, sfS = 1 - sf;
  let handled = true;

  if (e.altKey) {
    // Alt+flechas → escalar por eje (simétricamente desde el centro)
    switch(e.key) {
      case 'ArrowLeft': {                          // achicar horizontal
        const cx=(ext[0]+ext[2])/2, hw=(ext[2]-ext[0])/2*sfS;
        ext[0]=cx-hw; ext[2]=cx+hw; break;
      }
      case 'ArrowRight': {                         // expandir horizontal
        const cx=(ext[0]+ext[2])/2, hw=(ext[2]-ext[0])/2*sfE;
        ext[0]=cx-hw; ext[2]=cx+hw; break;
      }
      case 'ArrowUp': {                            // expandir vertical
        const cy=(ext[1]+ext[3])/2, hh=(ext[3]-ext[1])/2*sfE;
        ext[1]=cy-hh; ext[3]=cy+hh; break;
      }
      case 'ArrowDown': {                          // achicar vertical
        const cy=(ext[1]+ext[3])/2, hh=(ext[3]-ext[1])/2*sfS;
        ext[1]=cy-hh; ext[3]=cy+hh; break;
      }
      default: handled=false;
    }
  } else {
    switch(e.key) {
      case 'ArrowLeft':  ext[0]-=step; ext[2]-=step; break;
      case 'ArrowRight': ext[0]+=step; ext[2]+=step; break;
      case 'ArrowUp':    ext[1]+=step; ext[3]+=step; break;
      case 'ArrowDown':  ext[1]-=step; ext[3]-=step; break;
      case '+': case '=': {                        // escalar uniforme
        const cx=(ext[0]+ext[2])/2, cy=(ext[1]+ext[3])/2;
        const hw=(ext[2]-ext[0])/2*sfE, hh=(ext[3]-ext[1])/2*sfE;
        ext[0]=cx-hw;ext[2]=cx+hw;ext[1]=cy-hh;ext[3]=cy+hh; break;
      }
      case '-': case '_': {                        // reducir uniforme
        const cx=(ext[0]+ext[2])/2, cy=(ext[1]+ext[3])/2;
        const hw=(ext[2]-ext[0])/2*sfS, hh=(ext[3]-ext[1])/2*sfS;
        ext[0]=cx-hw;ext[2]=cx+hw;ext[1]=cy-hh;ext[3]=cy+hh; break;
      }
      case 'c': case 'C': {
        const txt=`[${ext[0].toFixed(3)},${ext[1].toFixed(3)},${ext[2].toFixed(3)},${ext[3].toFixed(3)}]`;
        navigator.clipboard.writeText(txt).catch(()=>{});
        const el=document.getElementById('georef-ext');
        const prev=el.textContent; el.textContent='✓ Copiado!';
        setTimeout(()=>el.textContent=prev, 1200);
        return;
      }
      case 'Escape': deactivateGeoref(); return;
      default: handled=false;
    }
  }

  if(handled) {
    e.preventDefault();
    d.ext = ext;
    applyRefExtent(activeRefKey);
    // Mostrar paso activo brevemente en el HUD
    const stepLabel = e.ctrlKey && e.shiftKey ? '10 m'
                    : e.ctrlKey               ? '100 m'
                    : e.shiftKey              ? '50 km'
                    :                           '5 km';
    const nameEl = document.getElementById('georef-name');
    const prev = nameEl.textContent;
    nameEl.textContent = `${d.label}  [paso: ${stepLabel}]`;
    clearTimeout(nameEl._t);
    nameEl._t = setTimeout(() => nameEl.textContent = prev, 900);
  }
});

document.querySelectorAll('.lr').forEach(row=>{
  row.addEventListener('click',()=>{
    const key=row.dataset.t,lyr=layerObjs[key];
    const chk=document.getElementById('chk-'+key);
    if(!lyr||!chk)return;

    const _altBaseOn=()=>gebcoColor.getVisible()||esriHybridBase.getVisible()||openTopoLayer.getVisible();
    const _forceSentinel=()=>{esriSat.setVisible(true);const sc=document.getElementById('chk-satellite');if(sc){sc.classList.add('on');sc.textContent='✓';}};
    const _offSentinel=()=>{esriSat.setVisible(false);const sc=document.getElementById('chk-satellite');if(sc){sc.classList.remove('on');sc.textContent='';}};
    // Mutex Sentinel: solo apagable si hay otro fondo activo
    if(key==='satellite'&&lyr.getVisible()){
      if(!_altBaseOn())return;
    }
    // Mutex bases alternativas: al activar apagan Sentinel; al apagar lo restauran si no hay otro
    if((key==='esri_hybrid'||key==='open_topo')){
      if(!lyr.getVisible()){
        _offSentinel();
      } else {
        if(!gebcoColor.getVisible()&&!esriHybridBase.getVisible()&&!openTopoLayer.getVisible())_forceSentinel();
      }
    }
    // Mutex GEBCO: si se apaga y no hay otro fondo, activar Sentinel
    if(key==='gebco_color'&&lyr.getVisible()){
      if(!esriSat.getVisible()&&!esriHybridBase.getVisible()&&!openTopoLayer.getVisible())_forceSentinel();
    }

    const v=lyr.getVisible();lyr.setVisible(!v);
    document.querySelectorAll('[id^="chk-'+key+'"]').forEach(c=>{c.classList.toggle('on',!v);c.textContent=!v?'✓':'';});

    // Georref: activar/desactivar editor al toggler capa de referencia
    if(key.startsWith('ref_')&&REF_LAYERS_DATA[key]){
      if(!v){ activateGeoref(key); }
      else { if(activeRefKey===key) deactivateGeoref(); }
    }

    // Acciones especiales al activar
    if(key==='seismicity'){
      const sf=document.getElementById('seism-filters');
      if(sf) sf.style.display=!v?'block':'none';
      // Cargar GCMT la primera vez
      if(!v&&cmtLayer.getSource().getFeatures().length===0){
        fetch('fuentes/cmt_events.json').then(r=>r.json()).then(data=>{
          cmtLayer.getSource().addFeatures(data.map(e=>{
            const ft=e.ft||faultType(e.r1);
            return new ol.Feature({geometry:new ol.geom.Point(fromLL([e.lo,e.la])),feat_id:'cmt',feat_type:'cmt',cmt_data:e,cmt_ft:ft});
          }));
        }).catch(()=>{});
        fetch('fuentes/gcmt55_sulawesi.json').then(r=>r.json()).then(data=>{
          cmtLayer.getSource().addFeatures(data.map(e=>{
            const ft=e.ft||faultType(e.r1);
            return new ol.Feature({geometry:new ol.geom.Point(fromLL([e.lo,e.la])),feat_id:'cmt',feat_type:'cmt',cmt_data:e,cmt_ft:ft});
          }));
        }).catch(()=>{});
      }
    }
    if(key==='slab_layer'&&!v)loadSlabs();

    // Actualizar lock de Sentinel
    updateSentinelLock();
    updateFloatingLegend();
  });
});
document.querySelectorAll('.leg').forEach(el=>{
  el.addEventListener('click',()=>{
    const key=el.dataset.l,lyr=layerObjs[key];
    if(!lyr)return;
    const v=lyr.getVisible();lyr.setVisible(!v);
    el.classList.toggle('off',v);
    const chk=document.getElementById('chk-'+key);
    if(chk){chk.classList.toggle('on',!v);chk.textContent=!v?'✓':'';}
    updateFloatingLegend();
  });
});
document.getElementById('lb').addEventListener('click',()=>document.getElementById('lp').classList.toggle('open'));
document.addEventListener('click',e=>{if(!e.target.closest('#lb')&&!e.target.closest('#lp'))document.getElementById('lp').classList.remove('open');});
document.getElementById('pc').addEventListener('click',()=>document.getElementById('panel').classList.add('closed'));

// ── Toggle beachballs en mapa
document.getElementById('toggle-bb').addEventListener('change',function(){
  cmtLayer.setStyle(this.checked ? cmtBBStyle : cmtDotStyle);
});

// Visibilidad inicial: solo fondo + base tectónica ON; todo lo demás OFF
const THEMATIC_KEYS=[
  'vel_s1',
  'seismicity','gaps','clusters',
  'srh_secs',
  'grav_bouguer','grav_freeair',
  'volcanoes','geothermal',
  'new_faults','hikmy_structs',
  'gebco_color',
];
THEMATIC_KEYS.forEach(k=>{ if(layerObjs[k]) layerObjs[k].setVisible(false); });

// ── fe_1: Group-toggle por tipo tectónico ──────────────────────────────
const TIPO_KEYS={
  A:['tect_sub','tect_key'],
  B:['new_faults','hikmy_structs'],
  D:['clusters'],
  E:['vel_s1'],
};
function toggleTipo(tipo){
  const keys=TIPO_KEYS[tipo]||[];
  const chk=document.getElementById('chk-tipo-'+tipo);
  if(!chk)return;
  const nowOn=chk.classList.contains('on');
  // toggle: si estaba ON → apagar; si OFF → encender
  const newState=!nowOn;
  keys.forEach(k=>{
    const lyr=layerObjs[k];
    if(!lyr)return;
    lyr.setVisible(newState);
    const el=document.getElementById('chk-'+k);
    if(el){if(newState){el.classList.add('on');el.textContent='✓';}else{el.classList.remove('on');el.textContent='';}}
  });
  if(newState){chk.classList.add('on');chk.textContent='✓';}else{chk.classList.remove('on');chk.textContent='';}
}
// Tipo A ON por defecto — tect_sub y tect_key ya están ON por defecto; actualizar chk-tipo-A
document.addEventListener('DOMContentLoaded',()=>{
  const aChk=document.getElementById('chk-tipo-A');
  if(aChk){aChk.classList.add('on');aChk.textContent='✓';}
  hookHostLayerRefresh();
  // profileLabelLayer sigue visibilidad de srh_secs
  srhSecLayer.on('change:visible',()=>profileLabelLayer.setVisible(srhSecLayer.getVisible()));
  profileLabelLayer.setVisible(srhSecLayer.getVisible());
});

// Mutex Sentinel ↔ GEBCO: Sentinel solo se puede apagar si GEBCO está activo
function updateSentinelLock(){
  const gebcoOn=gebcoColor.getVisible();
  const hybridOn=esriHybridBase.getVisible();
  const lockEl=document.getElementById('sentinel-lock');
  if(lockEl) lockEl.style.display=(gebcoOn||hybridOn)?'none':'inline';
  const row=document.getElementById('lr-sentinel');
  if(row) row.style.opacity=(gebcoOn||hybridOn)?'1':'0.7';
}
updateSentinelLock();

updateFloatingLegend();

// ── Zoom-based visibility (fe_13) ─────────────────────────────────────────
// maxResolution=X → capa visible cuando resolution < X  (zoom > umbral)
// *1.01 para incluir el zoom exacto (la condición OL es estricta <, no <=)
const RES_Z4 = 156543 / Math.pow(2, 4) * 1.01;  // desde zoom 4  (~9800 m/px)
const RES_Z6 = 156543 / Math.pow(2, 6) * 1.01;  // desde zoom 6  (~2450 m/px)
const RES_Z7 = 156543 / Math.pow(2, 7) * 1.01;  // desde zoom 7  (~1225 m/px)
const RES_Z8 = 156543 / Math.pow(2, 8) * 1.01;  // desde zoom 8  (~610 m/px)

// Escala regional — visibles desde zoom 4 (plate boundaries, velocity vectors, clusters)
[jibranLayer, srhGapLayer, srhClusterLayer,
 gpsLayer, plateVelLayer,
].forEach(l => l.setMaxResolution(RES_Z4));

// Fallas activas secundarias — visibles desde zoom 6
[newFaultLayer, srhSecLayer,
].forEach(l => l.setMaxResolution(RES_Z6));

// Estructuras locales (Hikmy) — visibles desde zoom 7
[hikmyFaultLayer, hikmyBeltLayer, hikmyPointLayer,
].forEach(l => l.setMaxResolution(RES_Z7));

// Detalle local: estaciones sismológicas — solo desde zoom 8+
[stationLayer
].forEach(l => l.setMaxResolution(RES_Z8));

// ── Filtro por sección S1-S8 (fe_4) ─────────────────────────────────────
const SECTION_KEYS={
  '1':['tect_sub','tect_key'],
  '2':['seismicity','gaps','clusters'],
  '3':['srh_secs'],
  '4':['grav_bouguer','grav_freeair','height_anom'],
  '5':['volcanoes','manif_pratama','cpd_pratama','geothermal'],
  '6':['vel_s1','tect_key','tect_sub','canon_labels','palu_basin'],
  '7':['ref_baillie','ofiolitas','core_complexes'],
};
const BASE_ALWAYS=['satellite','gebco_color'];
function activateSection(s){
  activeSection=s;
  const concBtn=document.getElementById('conc-btn');
  if(concBtn){concBtn.classList.toggle('has-content',!!(s&&CONCLUSIONS[s]?.length));concBtn.textContent=s?'S'+s+' Síntesis':'Síntesis';}
  document.querySelectorAll('.sec-btn').forEach(b=>b.classList.toggle('active',b.dataset.s===s));
  if(!s)return;
  Object.keys(layerObjs).forEach(k=>{
    if(BASE_ALWAYS.includes(k))return;
    if(!layerObjs[k])return;
    layerObjs[k].setVisible(false);
    document.querySelectorAll('[id^="chk-'+k+'"]').forEach(c=>{c.classList.remove('on');c.textContent='';});
  });
  (SECTION_KEYS[s]||[]).forEach(k=>{
    if(!layerObjs[k])return;
    layerObjs[k].setVisible(true);
    document.querySelectorAll('[id^="chk-'+k+'"]').forEach(c=>{c.classList.add('on');c.textContent='✓';});
    if(k==='seismicity'){
      document.getElementById('seism-filters').style.display='block';
      if(cmtLayer.getSource().getFeatures().length===0){
        fetch('fuentes/cmt_events.json').then(r=>r.json()).then(d=>{cmtLayer.getSource().addFeatures(d.map(e=>new ol.Feature({geometry:new ol.geom.Point(fromLL([e.lo,e.la])),feat_id:'cmt',feat_type:'cmt',cmt_data:e,cmt_ft:e.ft||faultType(e.r1)})));}).catch(()=>{});
        fetch('fuentes/gcmt55_sulawesi.json').then(r=>r.json()).then(d=>{cmtLayer.getSource().addFeatures(d.map(e=>new ol.Feature({geometry:new ol.geom.Point(fromLL([e.lo,e.la])),feat_id:'cmt',feat_type:'cmt',cmt_data:e,cmt_ft:e.ft||faultType(e.r1)})));}).catch(()=>{});
      }
    }
    if(k==='slab_layer')loadSlabs();
  });
  updateFloatingLegend();
}
document.querySelectorAll('.sec-btn').forEach(b=>b.addEventListener('click',()=>activateSection(b.dataset.s)));
document.getElementById('sb-all').classList.add('active');

// ── Perfil gravimétrico (fe_6) ────────────────────────────────────────────
let gravChart=null;
let gravDrawInter=null;
const gravDrawSource=new ol.source.Vector();
const gravDrawLayer=new ol.layer.Vector({
  source:gravDrawSource,
  style:new ol.style.Style({stroke:new ol.style.Stroke({color:'#facc15',width:2,lineDash:[6,4]}),
    image:new ol.style.Circle({radius:4,fill:new ol.style.Fill({color:'#facc15'})})})
});
map.addLayer(gravDrawLayer);

// Referencia al DoubleClickZoom para deshabilitarlo durante el dibujo
const dblClickZoom=map.getInteractions().getArray()
  .find(i=>i instanceof ol.interaction.DoubleClickZoom);

function stopGravDraw(){
  if(gravDrawInter){map.removeInteraction(gravDrawInter);gravDrawInter=null;}
  if(dblClickZoom)dblClickZoom.setActive(true);
  gravDrawSource.clear();
  document.getElementById('grav-profile-btn').classList.remove('active');
  document.getElementById('grav-finish-btn').style.display='none';
  map.getViewport().style.cursor='';
}

function startGravDraw(){
  if(gravDrawInter){stopGravDraw();return;}
  gravDrawSource.clear();
  document.getElementById('grav-modal').style.display='none';

  // Deshabilitar DoubleClickZoom para que el doble-click no haga zoom
  if(dblClickZoom)dblClickZoom.setActive(false);

  gravDrawInter=new ol.interaction.Draw({
    source:gravDrawSource,
    type:'LineString',
    stopClick:true,          // no propaga clicks al mapa mientras dibuja
    condition:ol.events.condition.primaryAction,
    freehandCondition:ol.events.condition.never,
  });
  map.addInteraction(gravDrawInter);
  map.getViewport().style.cursor='crosshair';
  document.getElementById('grav-profile-btn').classList.add('active');
  document.getElementById('grav-finish-btn').style.display='block';

  gravDrawInter.on('drawend',evt=>{
    const coords=evt.feature.getGeometry().getCoordinates()
      .map(c=>ol.proj.toLonLat(c));
    // Limpiar estado de dibujo antes del fetch
    setTimeout(()=>{
      if(dblClickZoom)dblClickZoom.setActive(true);
      map.removeInteraction(gravDrawInter);gravDrawInter=null;
      document.getElementById('grav-profile-btn').classList.remove('active');
      document.getElementById('grav-finish-btn').style.display='none';
      map.getViewport().style.cursor='';
    },50);
    fetchGravProfile(coords);
  });
}

function fetchGravProfile(coords){
  document.getElementById('grav-info').textContent='Calculando…';
  document.getElementById('grav-modal').style.display='block';
  fetch('/api/gravity/profile',{method:'POST',headers:{'Content-Type':'application/json'},
    body:JSON.stringify({coords,n_points:150})})
  .then(r=>{
    if(!r.ok)return r.json().then(j=>{throw new Error('HTTP '+r.status+' — '+(j.detail||''));}).catch(()=>{throw new Error('HTTP '+r.status);});
    return r.json();
  })
  .then(d=>{renderGravChart(d);})
  .catch(e=>{
    document.getElementById('grav-info').textContent='Error: '+e.message;
  });
}

function renderGravChart(d){
  const ctx=document.getElementById('grav-chart').getContext('2d');
  if(gravChart)gravChart.destroy();
  const labels=d.dist_km.map(v=>v.toFixed(1));
  gravChart=new Chart(ctx,{
    type:'line',
    data:{
      labels,
      datasets:[
        {label:'Bouguer (mGal)',data:d.bouguer,borderColor:'#3b82f6',backgroundColor:'rgba(59,130,246,0.08)',
         borderWidth:1.5,pointRadius:0,tension:0.3,spanGaps:true},
        {label:'Aire libre (mGal)',data:d.freeair,borderColor:'#ef4444',backgroundColor:'rgba(239,68,68,0.08)',
         borderWidth:1.5,pointRadius:0,tension:0.3,spanGaps:true},
      ]
    },
    options:{
      responsive:true,animation:false,
      plugins:{legend:{labels:{color:'#f5f0eb',font:{family:'monospace',size:10}}},
        tooltip:{mode:'index',intersect:false,callbacks:{label:ctx=>`${ctx.dataset.label}: ${ctx.parsed.y?.toFixed(1)} mGal`}}},
      scales:{
        x:{ticks:{color:'#7c7470',font:{size:9},maxTicksLimit:8,callback:(v,i)=>labels[i]+' km'},
           grid:{color:'rgba(204,120,92,0.06)'}},
        y:{ticks:{color:'#7c7470',font:{size:9}},grid:{color:'rgba(204,120,92,0.06)'},
           title:{display:true,text:'mGal',color:'#7c7470',font:{size:9}}}
      }
    }
  });
  document.getElementById('grav-info').textContent=
    `Longitud total: ${d.total_km} km · ${d.n} puntos · Fuente: WGM2012 (Bonvalot et al. 2012)`;
}

document.getElementById('grav-profile-btn').addEventListener('click',startGravDraw);
document.getElementById('grav-finish-btn').addEventListener('click',e=>{
  e.stopPropagation();
  if(gravDrawInter)gravDrawInter.finishDrawing();
});
document.getElementById('grav-close').addEventListener('click',()=>{
  document.getElementById('grav-modal').style.display='none';
  stopGravDraw();
});
document.getElementById('grav-dl').addEventListener('click',()=>{
  if(!gravChart)return;
  const a=document.createElement('a');
  a.href=gravChart.toBase64Image();
  a.download=`perfil_grav_${new Date().toISOString().slice(0,10)}.png`;
  a.click();
});

// ── s2_fe2: Perfil interactivo de hipocentros ─────────────────────────────
let hypoChart = null;
let hypoDrawInter = null;
let lastHypoCoords = null;
let lastHypoPoints = null;
const hypoDrawSource = new ol.source.Vector();
const hypoDrawLayer = new ol.layer.Vector({
  source: hypoDrawSource,
  style: f => {
    const gt = f.getGeometry().getType();
    if(gt === 'Polygon')
      return new ol.style.Style({
        fill:   new ol.style.Fill({color:'rgba(255,96,96,0.10)'}),
        stroke: new ol.style.Stroke({color:'rgba(255,96,96,0.45)', width:1, lineDash:[5,4]})
      });
    return new ol.style.Style({
      stroke: new ol.style.Stroke({color:'#ff6060', width:2, lineDash:[7,4]}),
      image:  new ol.style.Circle({radius:4, fill:new ol.style.Fill({color:'#ff6060'})})
    });
  }
});
map.addLayer(hypoDrawLayer);

function closeHypoModal(){
  document.getElementById('hypo-modal').style.display='none';
  stopHypoDraw();
}

function stopHypoDraw(){
  if(hypoDrawInter){map.removeInteraction(hypoDrawInter);hypoDrawInter=null;}
  if(dblClickZoom)dblClickZoom.setActive(true);
  hypoDrawSource.clear();
  document.getElementById('hypo-profile-btn').classList.remove('active');
  map.getViewport().style.cursor='';
}

function startHypoProfileDraw(){
  if(hypoDrawInter){stopHypoDraw();return;}
  hypoDrawSource.clear();
  document.getElementById('hypo-modal').style.display='none';
  if(dblClickZoom)dblClickZoom.setActive(false);
  hypoDrawInter=new ol.interaction.Draw({
    source:hypoDrawSource, type:'LineString', stopClick:true,
    condition:ol.events.condition.primaryAction,
    freehandCondition:ol.events.condition.never,
  });
  map.addInteraction(hypoDrawInter);
  map.getViewport().style.cursor='crosshair';
  document.getElementById('hypo-profile-btn').classList.add('active');
  hypoDrawInter.on('drawend',evt=>{
    const coords=evt.feature.getGeometry().getCoordinates().map(c=>ol.proj.toLonLat(c));
    setTimeout(()=>{
      if(dblClickZoom)dblClickZoom.setActive(true);
      map.removeInteraction(hypoDrawInter); hypoDrawInter=null;
      document.getElementById('hypo-profile-btn').classList.remove('active');
      map.getViewport().style.cursor='';
    },50);
    fetchHypoProfile(coords);
  });
}

function buildCorridor(lon1,lat1,lon2,lat2,hwKm){
  const latMid=(lat1+lat2)/2;
  const cosLat=Math.cos(latMid*Math.PI/180);
  const ux=(lon2-lon1)*111*cosLat, uy=(lat2-lat1)*111;
  const L=Math.sqrt(ux*ux+uy*uy)||1;
  const nx=-uy/L, ny=ux/L; // perpendicular unit vector in km
  const dlon=nx/111/cosLat*hwKm, dlat=ny/111*hwKm;
  const ring=[
    fromLL([lon1+dlon, lat1+dlat]),
    fromLL([lon2+dlon, lat2+dlat]),
    fromLL([lon2-dlon, lat2-dlat]),
    fromLL([lon1-dlon, lat1-dlat]),
    fromLL([lon1+dlon, lat1+dlat]),
  ];
  const feat=new ol.Feature({geometry:new ol.geom.Polygon([ring])});
  hypoDrawSource.addFeature(feat);
}

function fetchHypoProfile(coords){
  if(coords.length < 2) return;
  lastHypoCoords = coords;
  const [lon1,lat1]=coords[0];
  const [lon2,lat2]=coords[coords.length-1];
  const hw=parseFloat(document.getElementById('hypo-hw').value)||30;
  hypoDrawSource.clear();
  buildCorridor(lon1,lat1,lon2,lat2,hw);
  const url=`/api/earthquakes/profile?lon1=${lon1}&lat1=${lat1}&lon2=${lon2}&lat2=${lat2}&halfWidth=${hw}&minMag=4`;
  document.getElementById('hypo-profile-info').textContent='Calculando…';
  document.getElementById('hypo-modal').style.display='block';
  fetch(url).then(r=>{if(!r.ok)throw new Error('HTTP '+r.status);return r.json();})
    .then(d=>renderHypoChart(d,lon1,lat1,lon2,lat2))
    .catch(e=>{document.getElementById('hypo-profile-info').textContent='Error: '+e.message;});
}

function _depthColor(d){ return depthColor(d); }

function renderHypoChart(d, lon1, lat1, lon2, lat2){
  const ctx=document.getElementById('hypo-chart-canvas').getContext('2d');
  if(hypoChart){hypoChart.destroy();hypoChart=null;}
  const pts=d.points;
  const hw=parseFloat(document.getElementById('hypo-hw').value)||30;
  document.getElementById('hypo-profile-info').textContent=
    `${d.profile_km} km · ±${hw} km · ${d.count} eventos`;
  if(!pts||!pts.length){
    document.getElementById('hypo-profile-info').textContent='Sin datos en el perfil';
    return;
  }
  lastHypoPoints = pts;
  // Build scatter dataset
  const data = pts.map(p=>({x:p.dist_km, y:p.depth, mw:p.mw, ft:p.ft, depth:p.depth, lon:p.lon, lat:p.lat}));
  hypoChart=new Chart(ctx,{
    type:'scatter',
    data:{
      datasets:[{
        data,
        pointBackgroundColor: data.map(p=>_depthColor(p.depth)),
        pointBorderColor:'rgba(0,0,0,0.3)',
        pointBorderWidth:0.6,
        pointRadius: data.map(p=>Math.max(2.5, (p.mw-4)*2.5)),
        pointHoverRadius: data.map(p=>Math.max(4, (p.mw-4)*3)),
      }]
    },
    options:{
      responsive:true, maintainAspectRatio:false, animation:false,
      onClick:(evt,els)=>{ if(els.length) openHypoEqPanel(lastHypoPoints[els[0].index]); },
      plugins:{
        legend:{display:false},
        tooltip:{callbacks:{
          label:ctx=>{
            const p=ctx.raw;
            return `${p.dist_km?.toFixed(0)||ctx.parsed.x.toFixed(0)} km | ${p.depth?.toFixed(0)||ctx.parsed.y.toFixed(0)} km | Mw ${p.mw} | ${p.ft||'?'}`;
          }
        },backgroundColor:'rgba(30,24,20,0.9)',titleFont:{family:'monospace',size:9},bodyFont:{family:'monospace',size:9}}
      },
      scales:{
        x:{
          title:{display:true,text:'Distancia a lo largo del perfil (km)',color:'#7c7470',font:{family:'monospace',size:9}},
          ticks:{color:'#7c7470',font:{size:9}},grid:{color:'rgba(204,120,92,0.07)'},
          min:0, max:d.profile_km
        },
        y:{
          title:{display:true,text:'Profundidad (km)',color:'#7c7470',font:{family:'monospace',size:9}},
          ticks:{color:'#7c7470',font:{size:9}},grid:{color:'rgba(204,120,92,0.07)'},
          reverse:true, min:0
        }
      }
    }
  });
}

function openHypoEqPanel(p){
  if(!p||p.lon==null) return;
  const coord = fromLL([p.lon, p.lat]);
  // Pan to event
  map.getView().animate({center:coord, duration:400});
  // Find matching feature in cmtLayer (same source used by singleclick handler)
  const src = cmtLayer.getSource();
  const closest = src.getClosestFeatureToCoordinate(coord);
  if(closest){
    const type = closest.get('feat_type');
    if(type==='cmt') { openCMTPanel(closest.get('cmt_data')); return; }
  }
}

function exportHypoProfile(){
  if(!hypoChart) return;
  const a=document.createElement('a');
  a.href=hypoChart.toBase64Image();
  a.download=`perfil_hipocentros_${new Date().toISOString().slice(0,10)}.png`;
  a.click();
}

// ── s3_fe3: Selector de profundidad — Supendi tomography slices ──────────
const SUPENDI_DEPTHS=[
  {km:10,key:'ref_sup_010'},{km:20,key:'ref_sup_020'},{km:40,key:'ref_sup_040'},
  {km:60,key:'ref_sup_060'},{km:80,key:'ref_sup_080'},{km:100,key:'ref_sup_100'},
  {km:120,key:'ref_sup_120'},{km:150,key:'ref_sup_150'},{km:200,key:'ref_sup_200'},
];
let supendiActive=false;
let supendiActiveKey=null;

// Construir botones de profundidad
(function(){
  const container=document.getElementById('supendi-btns');
  SUPENDI_DEPTHS.forEach(d=>{
    const btn=document.createElement('button');
    btn.className='sup-depth-btn';
    btn.textContent=d.km+' km';
    btn.dataset.key=d.key;
    btn.onclick=e=>{e.stopPropagation();selectSupendiDepth(d.key);};
    container.appendChild(btn);
  });
})();

function selectSupendiDepth(key){
  supendiActiveKey=key;
  SUPENDI_DEPTHS.forEach(d=>{
    const lyr=layerObjs[d.key];
    if(lyr)lyr.setVisible(d.key===key);
    const chk=document.getElementById('chk-'+d.key);
    if(chk){chk.classList.toggle('on',d.key===key);chk.textContent=d.key===key?'✓':'';}
  });
  document.querySelectorAll('.sup-depth-btn').forEach(b=>{
    b.classList.toggle('active',b.dataset.key===key);
  });
}

function toggleSupendi(){
  supendiActive=!supendiActive;
  const chk=document.getElementById('chk-supendi');
  const depths=document.getElementById('supendi-depths');
  chk.classList.toggle('on',supendiActive);
  chk.textContent=supendiActive?'✓':'';
  depths.style.display=supendiActive?'block':'none';
  if(supendiActive){
    if(!supendiActiveKey)selectSupendiDepth('ref_sup_040'); // default 40 km
    else selectSupendiDepth(supendiActiveKey);
  } else {
    SUPENDI_DEPTHS.forEach(d=>{
      const lyr=layerObjs[d.key];
      if(lyr)lyr.setVisible(false);
      const chk2=document.getElementById('chk-'+d.key);
      if(chk2){chk2.classList.remove('on');chk2.textContent='';}
    });
  }
}

// ── s3_yuan_anis: Selector de profundidad — Yuan (2024) anisotropy slices ─────
const YUAN_ANIS_DEPTHS=[
  {km:100,key:'ref_yuan_100'},{km:200,key:'ref_yuan_200'},{km:300,key:'ref_yuan_300'},
  {km:400,key:'ref_yuan_400'},{km:500,key:'ref_yuan_500'},{km:600,key:'ref_yuan_600'},
];
let yuanAnisActive=false;
let yuanAnisActiveKey=null;

(function(){
  const container=document.getElementById('yuan-anis-btns');
  YUAN_ANIS_DEPTHS.forEach(d=>{
    const btn=document.createElement('button');
    btn.className='sup-depth-btn';
    btn.textContent=d.km+' km';
    btn.dataset.key=d.key;
    btn.onclick=e=>{e.stopPropagation();selectYuanAnisDepth(d.key);};
    container.appendChild(btn);
  });
})();

function selectYuanAnisDepth(key){
  yuanAnisActiveKey=key;
  YUAN_ANIS_DEPTHS.forEach(d=>{
    const lyr=layerObjs[d.key];
    if(lyr)lyr.setVisible(d.key===key);
    const chk=document.getElementById('chk-'+d.key);
    if(chk){chk.classList.toggle('on',d.key===key);chk.textContent=d.key===key?'✓':'';}
  });
  document.querySelectorAll('#yuan-anis-btns .sup-depth-btn').forEach(b=>{
    b.classList.toggle('active',b.dataset.key===key);
  });
}

function toggleYuanAnis(){
  yuanAnisActive=!yuanAnisActive;
  const chk=document.getElementById('chk-yuan-anis');
  const depths=document.getElementById('yuan-anis-depths');
  chk.classList.toggle('on',yuanAnisActive);
  chk.textContent=yuanAnisActive?'✓':'';
  depths.style.display=yuanAnisActive?'block':'none';
  if(yuanAnisActive){
    if(!yuanAnisActiveKey)selectYuanAnisDepth('ref_yuan_200');
    else selectYuanAnisDepth(yuanAnisActiveKey);
  } else {
    YUAN_ANIS_DEPTHS.forEach(d=>{
      const lyr=layerObjs[d.key];
      if(lyr)lyr.setVisible(false);
      const chk2=document.getElementById('chk-'+d.key);
      if(chk2){chk2.classList.remove('on');chk2.textContent='';}
    });
  }
}

// ── Carga desde DB: todos los layers que antes eran hardcodeados ──────────────

async function loadLayersFromDB(){
  const fmt=new ol.format.GeoJSON();
  const load=async(url,onFeat)=>{
    try{
      const r=await fetch(url);
      if(!r.ok) return;
      const fc=await r.json();
      const feats=fmt.readFeatures(fc,{featureProjection:'EPSG:3857'});
      feats.forEach(f=>{
        f.set('feat_id', f.get('id'));  // id numérico → editable en modo edición
        onFeat(f);
      });
    }catch(e){console.warn('loadLayersFromDB:',url,e);}
  };

  // Jibran clusters — features estáticos (propiedades completas) + geom desde canonical merged_geom
  {
    const jibFmt=new ol.format.GeoJSON();
    // 1. Cargar merged_geoms de canonicals Jibran
    const canonGeoms={};
    try{
      const cr=await fetch('/api/geodata/canonical?layerType=structure');
      const cfc=await cr.json();
      jibFmt.readFeatures(cfc,{featureProjection:'EPSG:3857'})
        .filter(f=>f.getGeometry()&&(f.get('id')||'').startsWith('canon_jib_'))
        .forEach(f=>{ canonGeoms[f.get('id')]=f.getGeometry(); });
    }catch(e){console.warn('jibran canonical geoms:',e);}
    // 2. Leer features estáticos y reemplazar geom si existe canonical trazado
    jibFmt.readFeatures({type:'FeatureCollection',features:JIBRAN_2025.features},{featureProjection:'EPSG:3857'})
      .forEach(f=>{
        const cid=FEAT_TO_CANONICAL[f.get('feat_id')||''];
        if(cid&&canonGeoms[cid]) f.setGeometry(canonGeoms[cid]);
        jibranSource.addFeature(f);
      });
  }

  // Hikmy 2025 — brazo este
  await load('/api/geodata/features?source=hikmy_2025_east_arm_sulawesi',f=>{
    const lt=f.get('layer_type');
    const gt=f.getGeometry()&&f.getGeometry().getType();
    if(lt==='fault')               {f.set('feat_type','hikmy_fault');hikmyFaultSource.addFeature(f);}
    else if(lt==='geophysical_point'){f.set('feat_type','hikmy_point');hikmyPointSource.addFeature(f);}
    else                            {f.set('feat_type','hikmy_belt'); hikmyBeltSource.addFeature(f);}
  });


  // Gaps sísmicos — desde serhalawan hazard_zone; construye DB dinámicamente
  await load('/api/geodata/features?source=serhalawan_2024_sulawesi&layerType=hazard_zone',f=>{
    const p=f.getProperties();
    const uid='seismic_gap_'+p.id;
    f.set('feat_id',uid);
    f.set('feat_type','hazard_zone');
    const conc=(p.conclusions&&p.conclusions.length)?p.conclusions[0].text:'';
    DB[uid]={
      type:'GAP SÍSMICO',color:'#ffaa00',
      title:p.name||uid,
      tags:[p.region_paper||'S2','Hazard',p.gap_length_km?p.gap_length_km+' km gap':''].filter(Boolean),
      desc:(p.evidence||'')+(conc?'<br><br><b>Interpretación:</b> '+conc:''),
      papers:[{ref:'Serhalawan & Chen (2024)',
        title:'Seismotectonics of Sulawesi, Indonesia',
        journal:'Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366',
        find:p.evidence||''}]
    };
    seismicGapSource.addFeature(f);
  });
}

loadLayersFromDB();

// ── fe_15: Capa merged_geom (canonicals resueltos) ───────────────────────

const COVERED_BY_CANON=new Set(); // feat_ids cubiertos por canonical con merged_geom — suprimidos en capas raw

async function loadMergedGeoms(){
  try{
    const r=await fetch('/api/geodata/canonical');
    const fc=await r.json();
    mergedGeomSource.clear();
    canonLabelSource.clear();
    const fmt=new ol.format.GeoJSON();
    const allFeats=fmt.readFeatures(fc,{featureProjection:'EPSG:3857'});

    // Canonicals que realmente tienen merged_geom en la DB
    const canonIdsWithGeom=new Set(allFeats.filter(f=>f.getGeometry()!=null).map(f=>f.get('id')));

    // Construir COVERED_BY_CANON: feat_ids cuyo canonical existe en DB con geom
    COVERED_BY_CANON.clear();
    Object.entries(FEAT_TO_CANONICAL).forEach(([featId,canonId])=>{
      if(canonIdsWithGeom.has(canonId)) COVERED_BY_CANON.add(featId);
    });

    // Refrescar capas raw para que sus style functions relean COVERED_BY_CANON
    [tectKeyLayer,birdKeyFaultLayer,tectSubLayer,newFaultLayer].forEach(l=>l.changed());

    allFeats.filter(f=>f.getGeometry()!=null).forEach(f=>{
      const gt=f.getGeometry().getType();
      const lt=f.get('layer_type')||'';
      const pointSymbolTypes=['volcano','geophysical_point','igneous_body','ophiolite','metamorphic_complex','terrane','volcanic_arc','basin'];
      if(gt==='Point' && !pointSymbolTypes.includes(lt)){
        f.set('canon_name', f.get('name')||f.get('id')||'');
        canonLabelSource.addFeature(f);
      } else {
        f.set('feat_type','canonical');
        f.set('feat_id', f.get('id'));
        mergedGeomSource.addFeature(f);
      }
    });
  }catch(e){console.warn('loadMergedGeoms:',e);}
}
loadMergedGeoms();

// Refrescar mergedGeomLayer cuando cambie la visibilidad de cualquier capa anfitriona
// Se ejecuta después de que layerObjs esté definido (ver abajo — referencia diferida OK)
function hookHostLayerRefresh(){
  const hostKeys=new Set(Object.values(CANON_HOST_LAYER));
  hostKeys.forEach(key=>{
    const h=layerObjs[key];
    if(!h) return;
    const layers=typeof h.getLayers==='function'?h.getLayers().getArray():
                 typeof h.getLayersArray==='function'?h.getLayersArray():[h];
    layers.forEach(l=>{
      if(l&&l.on) l.on('change:visible',()=>mergedGeomLayer.changed());
    });
  });
}

// ── Edición interactiva de perfiles tomográficos ──────────────────────
let profileDrawActive=false;
let profileDrawInter=null;
let profileDrawTarget=null;   // feature que se está redibujando
let profileDrawPreview=null;  // source temporal para la nueva geometría

const PROFILE_STORAGE_KEY='tomo_profile_coords_v1';

// Cargar coords guardadas en localStorage y aplicarlas al source
(function loadSavedProfileCoords(){
  try{
    const saved=JSON.parse(localStorage.getItem(PROFILE_STORAGE_KEY)||'{}');
    if(!Object.keys(saved).length) return;
    const tryApply=()=>{
      const feats=tomoProfileSource.getFeatures().filter(f=>saved[f.get('feat_id')]);
      if(feats.length===0){setTimeout(tryApply,300);return;}
      feats.forEach(f=>{
        const coords=saved[f.get('feat_id')];
        if(coords) f.setGeometry(new ol.geom.LineString(coords.map(c=>ol.proj.fromLonLat(c))));
      });
    };
    setTimeout(tryApply,500);
  }catch(e){}
})();

function saveProfileCoords(){
  const saved={};
  tomoProfileSource.getFeatures().filter(f=>f.get('feat_type')==='tomo_profile').forEach(f=>{
    const coords=f.getGeometry().getCoordinates().map(c=>ol.proj.toLonLat(c).map(v=>Math.round(v*10000)/10000));
    saved[f.get('feat_id')]=coords;
  });
  localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(saved));
  return saved;
}

function copyProfileCoords(){
  const saved=saveProfileCoords();
  const lines=Object.entries(saved).map(([id,coords])=>{
    const pts=coords.map(c=>`[${c[0]},${c[1]}]`).join(',');
    return `  {id:'${id}',coords:[${pts}],...}`;
  });
  const text=lines.join('\n');
  navigator.clipboard.writeText(text).then(()=>{
    const btn=document.getElementById('profile-copy-btn');
    const orig=btn.textContent;
    btn.textContent='✓';
    setTimeout(()=>{btn.textContent=orig;},1500);
  });
}

// Capa temporal para previsualizar la nueva traza durante el dibujo
const profilePreviewSource=new ol.source.Vector();
const profilePreviewLayer=new ol.layer.Vector({
  source:profilePreviewSource,
  zIndex:55,
  style:new ol.style.Style({stroke:new ol.style.Stroke({color:'#cc785c',width:2,lineDash:[6,4]})})
});
map.addLayer(profilePreviewLayer);

function openProfileDrawPanel(){
  const panel=document.getElementById('profile-draw-panel');
  const sel=document.getElementById('profile-selector');
  panel.style.display='';
  sel.innerHTML='';

  // Todos los perfiles con category=cross_section del source unificado
  const profiles=tomoProfileSource.getFeatures().filter(f=>f.get('category')==='cross_section');
  if(profiles.length===0){
    sel.innerHTML='<span style="font-size:.55rem;color:var(--dim)">No hay perfiles cargados aún (esperá que cargue el fetch de Serhalawan).</span>';
    return;
  }
  // Ordenar por feat_name
  profiles.sort((a,b)=>(a.get('feat_name')||'').localeCompare(b.get('feat_name')||''));
  profiles.forEach(f=>{
    const nm=f.get('feat_name')||f.get('feat_id')||'?';
    const btn=document.createElement('button');
    btn.style.cssText='width:100%;text-align:left;background:var(--bg3);border:1px solid var(--border);color:var(--dim);padding:3px 6px;border-radius:3px;font-family:monospace;font-size:.58rem;cursor:pointer';
    btn.textContent=nm;
    btn.onclick=()=>startProfileDraw(f, btn);
    sel.appendChild(btn);
  });

  // Activar capa si estaba apagada
  const srhLayer=layerObjs['srh_secs'];
  if(srhLayer&&!srhLayer.getVisible()){
    srhLayer.setVisible(true);
    const chk=document.getElementById('chk-srh_secs');
    if(chk){chk.classList.add('on');chk.textContent='✓';}
  }
}

function startProfileDraw(feat, btnEl){
  // Si ya había un dibujo activo, cancelarlo primero
  if(profileDrawInter){map.removeInteraction(profileDrawInter);profileDrawInter=null;}
  profilePreviewSource.clear();
  profileDrawTarget=feat;
  profileDrawActive=true;
  map._editModeActive=true;

  // Resaltar botón seleccionado
  document.querySelectorAll('#profile-selector button').forEach(b=>{
    b.style.borderColor='';b.style.color='var(--dim)';
  });
  if(btnEl){btnEl.style.borderColor='var(--accent)';btnEl.style.color='var(--accent)';}

  // Estado
  const status=document.getElementById('profile-draw-status');
  const finish=document.getElementById('profile-draw-finish');
  status.textContent='Hacé click en el mapa para trazar la nueva línea. Doble-click para terminar.';
  finish.style.display='none';

  // Interacción Draw LineString
  profileDrawInter=new ol.interaction.Draw({
    source:profilePreviewSource,
    type:'LineString',
    style:new ol.style.Style({
      stroke:new ol.style.Stroke({color:'#cc785c',width:2.5}),
      image:new ol.style.Circle({radius:5,fill:new ol.style.Fill({color:'#cc785c'}),stroke:new ol.style.Stroke({color:'#fff',width:1})})
    })
  });
  profileDrawInter.on('drawend',e=>{
    // La feature queda en profilePreviewSource temporalmente
    profileDrawActive=false;
    map.removeInteraction(profileDrawInter);
    profileDrawInter=null;
    map._editModeActive=false;

    // Mostrar coordenadas de la nueva traza
    const coords=e.feature.getGeometry().getCoordinates().map(c=>ol.proj.toLonLat(c).map(v=>Math.round(v*1000)/1000));
    status.innerHTML=`Traza: [${coords[0]}] → [${coords[coords.length-1]}]<br><span style="color:var(--accent)">Confirmá para aplicar o volvé a seleccionar un perfil para descartar.</span>`;
    finish.style.display='';
  });
  map.addInteraction(profileDrawInter);
}

function finishProfileDraw(){
  const previewFeats=profilePreviewSource.getFeatures();
  if(!profileDrawTarget||previewFeats.length===0) return;

  // Aplicar la nueva geometría al feature original en tomoProfileSource
  const newGeom=previewFeats[previewFeats.length-1].getGeometry().clone();
  profileDrawTarget.setGeometry(newGeom);
  profilePreviewSource.clear();

  saveProfileCoords();

  // Reset UI
  document.getElementById('profile-draw-status').textContent='✓ Perfil actualizado y guardado.';
  document.getElementById('profile-draw-finish').style.display='none';
  document.querySelectorAll('#profile-selector button').forEach(b=>{
    b.style.borderColor='';b.style.color='var(--dim)';
  });
  profileDrawTarget=null;
}

function cancelProfileDraw(){
  if(profileDrawInter){map.removeInteraction(profileDrawInter);profileDrawInter=null;}
  profilePreviewSource.clear();
  profileDrawTarget=null;
  profileDrawActive=false;
  map._editModeActive=false;
  document.getElementById('profile-draw-panel').style.display='none';
}

// ── Agregar perfil nuevo ─────────────────────────────────────────────────
let _addProfileDrawCoords=null;
let _addProfileDrawInter=null;

function openAddProfilePanel(){
  document.getElementById('profile-add-panel').style.display='block';
  document.getElementById('profile-draw-panel').style.display='none';
  document.getElementById('pa-draw-status').textContent='';
  _addProfileDrawCoords=null;
}

function startAddProfileDraw(){
  if(_addProfileDrawInter){map.removeInteraction(_addProfileDrawInter);_addProfileDrawInter=null;}
  profilePreviewSource.clear();
  _addProfileDrawCoords=null;
  const drawSrc=new ol.source.Vector();
  _addProfileDrawInter=new ol.interaction.Draw({source:drawSrc,type:'LineString',maxPoints:20});
  _addProfileDrawInter.on('drawend',evt=>{
    const coords=evt.feature.getGeometry().getCoordinates().map(c=>{const ll=ol.proj.toLonLat(c);return [Math.round(ll[0]*10000)/10000,Math.round(ll[1]*10000)/10000];});
    _addProfileDrawCoords=coords;
    document.getElementById('pa-coords').value=JSON.stringify(coords);
    document.getElementById('pa-draw-status').textContent='✓ '+coords.length+' puntos — listo para guardar';
    document.getElementById('pa-draw-finish-btn').style.display='none';
    map.removeInteraction(_addProfileDrawInter);_addProfileDrawInter=null;
    map._editModeActive=false;
  });
  _addProfileDrawInter.on('drawstart',()=>{
    document.getElementById('pa-draw-finish-btn').style.display='inline-block';
  });
  map.addInteraction(_addProfileDrawInter);
  map._editModeActive=true;
  document.getElementById('pa-draw-status').textContent='Clic: agregar punto. Doble clic o ↵ Finalizar para terminar.';
}

function finishAddProfileDraw(){
  if(_addProfileDrawInter) _addProfileDrawInter.finishDrawing();
}

function saveNewProfile(){
  const name=document.getElementById('pa-name').value.trim();
  const img=document.getElementById('pa-img').value.trim();
  const coordsRaw=document.getElementById('pa-coords').value.trim();
  if(!name){alert('Ingresá el nombre del perfil');return;}
  if(!coordsRaw){alert('Dibujá la traza en el mapa o pegá las coordenadas JSON antes de guardar.');return;}
  let coords;
  try{coords=JSON.parse(coordsRaw);}catch(e){alert('Coordenadas JSON inválidas.\nFormato esperado: [[lon1,lat1],[lon2,lat2]]\nSi dibujaste en el mapa, asegurate de haber hecho doble clic o clic en ↵ Finalizar para terminar el trazo.');return;}
  if(!Array.isArray(coords)||coords.length<2){alert('Se necesitan al menos 2 puntos [[lon,lat],[lon,lat]]');return;}
  const id='draft_profile_'+Date.now();
  DB[id]={type:'PERFIL TOMOGRÁFICO',title:name,
    desc:'[Pendiente: pasá el contexto del paper a Claude para completar esta descripción]',
    section_img_url:img||null,section_caption:'',papers:[],tags:['borrador']};
  // Agregar al mapa inmediatamente
  const f=new ol.Feature({
    geometry:new ol.geom.LineString(coords.map(c=>ol.proj.fromLonLat(c))),
    feat_type:'tomo_profile', feat_id:id, feat_name:name,
    category:'cross_section', section_img_url:img||null
  });
  tomoProfileSource.addFeature(f);
  // Guardar en localStorage
  const drafts=JSON.parse(localStorage.getItem('profile_drafts')||'[]');
  drafts.push({id,name,img,coords,ts:new Date().toISOString()});
  localStorage.setItem('profile_drafts',JSON.stringify(drafts));
  // Mostrar resumen en elemento separado (no en el textarea de coords)
  if(_addProfileDrawInter){map.removeInteraction(_addProfileDrawInter);_addProfileDrawInter=null;}
  const resumen=`NUEVO PERFIL\nNombre: ${name}\nImagen: ${img||'(sin imagen)'}\nCoords: ${JSON.stringify(coords)}\nID: ${id}`;
  document.getElementById('pa-draw-status').innerHTML=`✓ Guardado — <button onclick="navigator.clipboard.writeText(${JSON.stringify(resumen)}).then(()=>this.textContent='copiado')" style="font-family:monospace;font-size:.54rem;padding:1px 6px;background:var(--bg3);border:1px solid var(--border);color:var(--dim);border-radius:3px;cursor:pointer">copiar resumen</button>`;
  document.getElementById('pa-name').value='';
  document.getElementById('pa-img').value='';
  document.getElementById('pa-coords').value='';
  document.getElementById('pa-draw-finish-btn').style.display='none';
}

// Configuraciones canónicas para perfiles nombrados — imagen, desc y bibliografía
const DRAFT_PROFILE_CONFIGS={
  'a-b':{
    title:'Perfil A-B — Cao et al. (2024)',
    desc:'Sección tomográfica W-E (120°–126°E, Fig. 1b izquierdo) a través del norte de Sulawesi y el arco de Sangihe. Muestra simultáneamente el slab del Mar de Célebes (CSS) subductando hacia el sur bajo el NST y el slab de Sangihe convergiendo desde el este. Los dos cuerpos de alta Vp (azul) se intersectan aproximadamente a 124°E / 200 km de profundidad. Los sismos del plano de Wadati-Benioff (puntos blancos, M>3, USGS 1990–2020) delimitan ambos slabs. Anomalía Vp referenciada al modelo IASP91 via Amaru (2007).',
    section_img_url:'data/sections/cao_2024_sula_mantle/cao_2024_fig1_map_sections.png',
    section_caption:'Fig. 1b (panel izq.) — Sección W-E: slab del Mar de Célebes y slab de Sangihe (Cao et al., 2024)',
    papers:[{ref:'Cao et al. (2024)',title:'Mantle Flow Induced by the Interplay of Downgoing Slabs in the North Sulawesi Subduction Zone',journal:'JGR: Solid Earth. doi:10.1029/2023JB028110',find:'Fig. 1b, sección a-b (W-E 120°–126°E): dos cuerpos de alta Vp correspondientes al CSS y al slab de Sangihe intersectados a ~124°E. La disposición doble explica la complejidad del campo de flujo mantélico inferido de los ejes rápidos SKS medidos en la región.'}],
    tags:['S3','tomografía Vp','CSS','Sangihe','NST','slab']
  },
  'c-d':{
    title:'Perfil C-D — Cao et al. (2024)',
    desc:'Sección tomográfica N-S (2°S–2°N, Fig. 1b derecho) a través del Mar de Molucas y el arco de Sangihe. Muestra el slab del Mar de Célebes (CSS, líneas continuas) con cuerpo de alta Vp bien definido y el "Sula slab?" (líneas discontinuas) con anomalía positiva más débil e incierta. La incertidumbre en el Sula slab es característica de la tomografía regional: la resolución a estos ángulos de incidencia no permite distinguir con confianza si el cuerpo Vp+ corresponde al slab subductante o a una heterogeneidad litosférica antigua.',
    section_img_url:'data/sections/cao_2024_sula_mantle/cao_2024_fig1_map_sections.bak.png',
    section_caption:'Fig. 1b (panel der.) — Sección N-S: slab del Mar de Célebes y Sula slab? (Cao et al., 2024)',
    papers:[{ref:'Cao et al. (2024)',title:'Mantle Flow Induced by the Interplay of Downgoing Slabs in the North Sulawesi Subduction Zone',journal:'JGR: Solid Earth. doi:10.1029/2023JB028110',find:'Fig. 1b, sección c-d (N-S, 2°S–2°N): CSS como cuerpo Vp+ definido; Sula slab marcado con líneas punteadas y signo "?" reflejando incertidumbre sobre su existencia como slab subductante discreto vs. anomalía litosférica relicta.'}],
    tags:['S3','tomografía Vp','CSS','Sula slab','Molucas','slab']
  }
};

