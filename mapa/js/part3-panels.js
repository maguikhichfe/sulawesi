function openGeothPanel(feat){
  const name=feat.get('geoth_name')||'Campo geotérmico';
  const status=feat.get('geoth_status')||'—';
  const mwe=feat.get('geoth_mwe');
  const note=feat.get('geoth_note')||'';
  const col=status==='operacional'?'#f59e0b':status==='prospecto'?'#a78bfa':'#22d3ee';
  document.getElementById('pt').textContent='Campo geotérmico';
  document.getElementById('pt').style.color=col;
  document.getElementById('pti').textContent=name;
  const html=`<div class="ptags">
    <span class="ptag" style="color:${col};border-color:${col}40;background:${col}12">${status}</span>
    ${mwe?`<span class="ptag" style="color:#444;border-color:#44444440;background:#44444412">${mwe} MWe</span>`:''}
  </div>
  ${note?`<div class="psec">Descripción</div><div class="pdesc" style="font-size:.65rem">${note}</div>`:''}
  <div class="psec">Fuente</div>
  ${renderPaper({ref:'Pratama, B. B. et al. (2025)',title:'Probabilistic Feasibility Assessment (PFA) of Geothermal Resources in Sulawesi, Indonesia',journal:'SSRN preprint. doi:10.2139/ssrn.5104034',find:'Inventario de campos geotérmicos operacionales y prospectos en Sulawesi. Capacidad instalada, operador y estado de desarrollo. Fig. 4b/4c.'})}`;
  document.getElementById('pb').innerHTML=html;
  document.getElementById('panel').classList.remove('closed');
}


function openManifPanel(feat){
  const name=feat.get('manif_name')||'Manifestación geotérmica';
  const typ=feat.get('manif_type')||'—';
  const arm=feat.get('manif_arm')||'—';
  const typeLabels={'fumarola':'Fumarola','mofeta':'Mofeta/CO₂','termal':'Manantial termal','solfatara':'Solfatara','hot_spring':'Manantial termal'};
  const lbl=typeLabels[typ]||typ;
  document.getElementById('pt').textContent='Manifestación geotérmica';
  document.getElementById('pt').style.color='#fb923c';
  document.getElementById('pti').textContent=name;
  const html=`<div class="ptags">
    <span class="ptag" style="color:#fb923c;border-color:#fb923c40;background:#fb923c12">${lbl}</span>
    <span class="ptag" style="color:#444;border-color:#44444440;background:#44444412">Brazo ${arm}</span>
  </div>
  <div class="psec">Fuente</div>
  ${renderPaper({ref:'Pratama, B. B. et al. (2025)',title:'Probabilistic Feasibility Assessment (PFA) of Geothermal Resources in Sulawesi, Indonesia',journal:'SSRN preprint. doi:10.2139/ssrn.5104034',find:'Inventario de manifestaciones geotérmicas superficiales en Sulawesi por brazo. Tipos: fumarola, mofeta, solfatara, manantial termal. Fig. 4a.'})}`;
  document.getElementById('pb').innerHTML=html;
  document.getElementById('panel').classList.remove('closed');
}


function openDileoSKSPanel(feat){
  const sta=feat.get('station_name')||feat.get('id')||'?';
  const fast=feat.get('fast_axis_deg');
  const dt=feat.get('delay_time_s');
  const style=feat.get('flow_style')||'—';
  const name=feat.get('feat_name')||sta;
  const styleLabels={'corner_flow':'Corner flow — cuña mantélica','lateral_extrusion':'Extrusión lateral Molucas','toroidal_slab_edge':'Flujo toroidal — borde de losa'};
  document.getElementById('pt').textContent='Splitting SKS — Di Leo et al. (2012)';
  document.getElementById('pt').style.color='#a78bfa';
  document.getElementById('pti').textContent=`Estación ${sta}`;
  const html=`<div class="ptags">
    <span class="ptag" style="color:#a78bfa;border-color:#a78bfa40;background:#a78bfa12">SKS splitting</span>
    ${dt!=null?`<span class="ptag" style="color:#444;border-color:#44444440;background:#44444412">dt = ${dt} s</span>`:''}
    ${fast!=null?`<span class="ptag" style="color:#444;border-color:#44444440;background:#44444412">φ = ${fast}°</span>`:''}
  </div>
  <div class="psec">Interpretación</div>
  <div class="pdesc" style="font-size:.65rem">${name}<br><span style="color:var(--dim)">${styleLabels[style]||style}</span></div>
  <div class="psec">Fuente</div>
  ${renderPaper({ref:'Di Leo et al. (2012)',title:'Mantle flow in regions of complex tectonics: Insights from Indonesia',journal:'Geochem. Geophys. Geosyst., 13, Q12008. doi:10.1029/2012GC004417',find:`Splitting SKS estación ${sta}: φ=${fast!=null?fast+'°':'nd'}, dt=${dt!=null?dt+' s':'nd'}. Patrón de flujo mantélico = ${styleLabels[style]||style}.`})}`;
  document.getElementById('pb').innerHTML=html;
  document.getElementById('panel').classList.remove('closed');
}

function openSlabPanel(feat){
  const region=feat.get('slab_region')||'—';
  const depth=feat.get('slab_depth');
  document.getElementById('pt').textContent='Slab2 — Contorno de losa';
  document.getElementById('pt').style.color='#00cfff';
  document.getElementById('pti').textContent=`${region} · ${depth!=null?depth+' km':'—'}`;
  const html=`<div class="ptags">
    <span class="ptag" style="color:#00cfff;border-color:#00cfff40;background:#00cfff12">${region}</span>
    ${depth!=null?`<span class="ptag" style="color:#444;border-color:#44444440;background:#44444412">${depth} km profundidad</span>`:''}
  </div>
  <div class="psec">Fuente</div>
  ${renderPaper({ref:'Hayes, G. P. et al. (2018)',title:'Slab2, a comprehensive subduction zone geometry model',journal:'Science, 362(6410), 58-61. doi:10.1126/science.aat4723',find:`Contorno de losa ${region} a ${depth!=null?depth:' '}km de profundidad. Modelo Slab2 de geometría de zonas de subducción a escala global.`})}`;
  document.getElementById('pb').innerHTML=html;
  document.getElementById('panel').classList.remove('closed');
}

function openHikmyPanel(feat){
  const name=feat.get('feat_name')||'Estructura — brazo este';
  const sr=feat.get('slip_rate');
  const ur=feat.get('uplift_rate');
  const ft=feat.get('fault_type')||'—';
  document.getElementById('pt').textContent='Brazo este — Hikmy & Isbram (2025)';
  document.getElementById('pt').style.color='#ff8844';
  document.getElementById('pti').textContent=name;
  const html=`<div class="ptags">
    ${sr?`<span class="ptag" style="color:#444;border-color:#44444440;background:#44444412">slip rate ${sr} mm/yr</span>`:''}
    ${ur?`<span class="ptag" style="color:#444;border-color:#44444440;background:#44444412">uplift ${ur} mm/yr</span>`:''}
    ${ft!=='—'?`<span class="ptag" style="color:#444;border-color:#44444440;background:#44444412">${ft}</span>`:''}
  </div>
  <div class="psec">Fuente</div>
  ${renderPaper({ref:'Hikmy & Isbram (2025)',title:'Analisis geomorfologi tektonik segmen timur Sulawesi',journal:'Jurnal Geologi Indonesia [aceptado 2025]',find:`${name}. Análisis geomorfológico tectónico del brazo este de Sulawesi: Batui Thrust, Pasini Thrust, Lobu-Balolang FZ. Índices IAT clase 1-2 confirman actividad neotectónica.`})}`;
  document.getElementById('pb').innerHTML=html;
  document.getElementById('panel').classList.remove('closed');
}

function openYuanPanel(feat){
  const name=feat.get('feat_name')||'Flujo mantélico — Yuan et al.';
  const az=feat.get('azimuth');
  document.getElementById('pt').textContent='Flujo mantélico — Yuan et al. (2024)';
  document.getElementById('pt').style.color='#34d399';
  document.getElementById('pti').textContent=name;
  const html=`<div class="ptags">
    ${az!=null?`<span class="ptag" style="color:#444;border-color:#44444440;background:#44444412">azimuth ${az}°</span>`:''}
  </div>
  <div class="psec">Fuente</div>
  ${renderPaper({ref:'Yuan et al. (2024)',title:'Mantle flow in the Molucca Sea region and its tectonic implications',journal:'J. Geophys. Res. Solid Earth, 129, e2023JB028021. doi:10.1029/2023JB028021',find:`${name}. Patrón de flujo mantélico inferido de anisotropía SKS y tomografía en el Mar de Molucas.`})}`;
  document.getElementById('pb').innerHTML=html;
  document.getElementById('panel').classList.remove('closed');
}


// ── PANEL HELPERS — URL y renderizado de referencias
function paperUrl(p){
  if(p.url)return p.url;
  if(p.doi)return'https://doi.org/'+p.doi;
  const jt=(p.journal||'');
  let m=jt.match(/https?:\/\/[^\s,)>]+/);
  if(m)return m[0].replace(/[.,;]$/,'');
  m=jt.match(/\bdoi:\s*(10\.[^\s,)]+)/i);
  if(m)return'https://doi.org/'+m[1].replace(/[.,;]$/,'');
  m=jt.match(/doi\.org\/(10\.[^\s,)]+)/i);
  if(m)return'https://doi.org/'+m[1].replace(/[.,;]$/,'');
  m=jt.match(/github\.com\/[^\s,)]+/);
  if(m)return'https://'+m[0].replace(/[.,;]$/,'');
  return null;
}
function renderPaper(p){
  const url=paperUrl(p);
  const t=url?`<a href="${url}" target="_blank" rel="noopener" class="plink">${p.title}</a>`:p.title;
  return`<div class="paper"><div class="pref">${p.ref}</div><div class="ptitle">${t}</div><div class="pjour">${p.journal}</div><div class="pfind">${p.find}</div></div>`;
}

// PANEL FUNCTIONS
function openPanel(id){
  const db=DB[id];if(!db)return;
  document.getElementById('pt').textContent=db.type;
  document.getElementById('pt').style.color='#111';
  document.getElementById('pti').textContent=db.title;
  let html='';
  if(db.tags&&db.tags.length){html+='<div class="ptags">';db.tags.forEach(t=>html+=`<span class="ptag" style="color:#444;border-color:#44444440;background:#44444412">${t}</span>`);html+='</div>';}
  if(db.section_img_url){
    const imgPath=db.section_img_url;
    html+=`<div class="psec"><span>Figura del paper</span></div>`;
    html+=`<div style="margin:6px 0 2px;text-align:center">
      <img src="${imgPath}?t=${Date.now()}" style="max-width:100%;border-radius:4px;border:1px solid var(--border);cursor:zoom-in" onclick="window.open('${imgPath}','_blank')" title="Click para abrir en nueva pestaña" id="panel-img-${imgPath.replace(/[^a-z0-9]/gi,'_')}">
    </div>`;
    if(db.section_caption){html+=`<div style="font-family:monospace;font-size:.6rem;color:var(--dim);text-align:center;margin-bottom:4px">${db.section_caption}</div>`;}
  }
  html+='<div class="psec">Descripción</div>';
  html+=`<div class="pdesc">${db.desc}</div>`;
  if(db.papers&&db.papers.length){html+='<div class="psec">Referencias Científicas</div>';db.papers.forEach(p=>{html+=renderPaper(p);});}
  document.getElementById('pb').innerHTML=html;
  document.getElementById('panel').classList.remove('closed');
}

// ── fe_9: Panel canonical con debate de fuentes ──────────────────────────
const FEAT_TO_CANONICAL={
  // PKF
  palu_koro:'canon_5', fault_serhalawan_2024_1:'canon_5',
  // Matano
  matano_w:'canon_19', matano_e:'canon_19', matano_sula:'canon_19', central_sulawesi:'canon_19',
  // Sorong
  sorong_main:'canon_1921', sorong_s:'canon_1929',
  // NST (GEM f19-f24 en tectSubLayer — evita routing erróneo a Sangihe por getSubzone)
  f19:'canon_364', f20:'canon_364', f21:'canon_364', f22:'canon_364', f23:'canon_364', f24:'canon_364',
  // Subducción norte
  sang_custom:'canon_369', halm_custom:'canon_805',
  subduction_zone_serhalawan_2024_1:'canon_364', nst_seismic_gap:'canon_364',
  // MST
  mst_north:'canon_286', mst_central_north:'canon_287', mst_mamuju:'canon_288', mst_somba:'canon_289',
  // Gorontalo / Tolo
  gorontalo:'canon_789', tolo_thrust:'canon_1010',
  // Fallas secundarias
  ewf:'canon_1927', batui_thrust:'canon_205',
  balantak_fault:'canon_1933', buton_thrust:'canon_1928',
  lawanopo_fault:'canon_100', kolaka_fault:'canon_116',
  // S7 — Terranes (fuentes Surono/Satyana — solo en DB, sin capa raw propia)
  terrane_surono_2012_2:        'canon_terrane_bsm',
  terrane_surono_2012_3:        'canon_terrane_btb',
  terrane_satyana_ipa_2011_1:   'canon_terrane_bsm',
  terrane_satyana_ipa_2011_2:   'canon_terrane_btb',
  // S7 — Arcos volcánicos (Satyana IAGI)
  volcanic_arc_satyana_iagi_1:  'canon_nsarc',
  volcanic_arc_satyana_iagi_2:  'canon_wsip',
  // S7 — Metamorfismo Satyana IAGI
  metamorphic_satyana_iagi_5:   'canon_pmc',
  // Clusters Jibran (S2)
  structure_jibran_2025_cluster01:'canon_jib_01',
  structure_jibran_2025_cluster02:'canon_jib_02',
  structure_jibran_2025_cluster03:'canon_jib_03',
  structure_jibran_2025_cluster04:'canon_jib_04',
  structure_jibran_2025_cluster05:'canon_jib_05',
  structure_jibran_2025_cluster06:'canon_jib_06',
  structure_jibran_2025_cluster07:'canon_jib_07',
  structure_jibran_2025_cluster08:'canon_jib_08',
  structure_jibran_2025_cluster09:'canon_jib_09',
  structure_jibran_2025_cluster10:'canon_jib_10',
};

const CANONICAL_KINEMATICS={
  fault:'Falla activa', subduction_zone:'Zona de subducción',
  fold_thrust_belt:'Cinturón de pliegues y cabalgamientos',
  structure:'Unidad tectónica', geological_unit:'Unidad geológica',
  ophiolite:'Ofiolita', terrane:'Terreno tectónico', volcanic_arc:'Arco volcánico',
  metamorphic_complex:'Complejo metamórfico', slab_geometry:'Losa mantélica',
  basin:'Cuenca sedimentaria', igneous_body:'Cuerpo ígneo',
};
// Nombres en español para el panel UI (DB permanece en inglés)
const CANON_NOMBRE_ES={
  canon_5:   'Falla Palu-Koro (PKF)',
  canon_19:  'Falla Matano',
  canon_364: 'Subducción de la Placa del Mar de Célebes — Norte de Sulawesi',
  canon_369: 'Subducción de Sangihe',
  canon_805: 'Subducción de Halmahera',
  canon_286: 'Cabalgamiento del Estrecho de Makassar — Norte (MST-N)',
  canon_287: 'Cabalgamiento del Estrecho de Makassar — Centro-Norte',
  canon_288: 'Cabalgamiento del Estrecho de Makassar — Mamuju',
  canon_289: 'Cabalgamiento del Estrecho de Makassar — Somba',
  canon_1921:'Zona de Falla Sorong — Oeste',
  canon_1922:'Transformante NE de Sulawesi / Sula',
  canon_1929:'Sorong Fault System — Ramal Sur',

  canon_1927:'Falla Este-Oeste (EWF)',
  canon_1928:'Cabalgamiento de Buton',

  canon_1934:'Subducción de Banda — Placa Indo-Australiana bajo Sunda/Arco de Banda',
  canon_205: 'Cabalgamiento Batui',
  canon_eso: 'Ofiolita de Sulawesi Este (ESO)',
  canon_nsarc:'Arco Volcánico del Brazo Norte',
  canon_wsip: 'Provincia Ígnea del Oeste de Sulawesi (WSIP)',
  canon_terrane_bsm:'Microcontinente Banggai-Sula',
  canon_terrane_btb:'Microcontinente Buton-Tukang Besi',
  canon_pmc:  'Complejo Metamórfico de Palu (PMC)',
  canon_csmb: 'Cinturón Metamórfico de Sulawesi Central (CSMB)',
  canon_mmc:  'Complejo Metamórfico de Malino (MMC)',
  canon_basin_gorontalo:'Golfo de Gorontalo (Tomini)',
  canon_basin_mak:'Estrecho de Makassar',
  canon_basin_bone:'Golfo de Bone',
  canon_basin_palu:'Cuenca Pull-Apart de Palu',
  canon_1910: 'Sistema de Falla Sorong',
  canon_1919: 'Subducción de Cotabato',
  canon_1933: 'Zona de Falla Balantak',
};

// Debate científico por canonical — {adopta:{desc,data,refs[]}, debate:[{desc,refs[]}]}
const CANONICAL_DEBATES={
  'canon_5':{
    adopta:{
      desc:'Segmentación LiDAR en 4 segmentos: Tanimbaya (offshore norte) → Donggala → Palu → Saluki (inland sur). Ruptura 2018 Mw 7.5 fue supershear (~4.1 km/s) y multisegmento, cubriendo los cuatro segmentos en propagación bilateral desde Donggala.',
      data:[
        {lbl:'Slip rate',val:'35 mm/yr (Socquet 2006)'},
        {lbl:'Longitud total',val:'~420 km'},
        {lbl:'Cinemática',val:'Sinistral (casi vertical)'},
        {lbl:'Ruptura 2018',val:'Mw 7.5 · supershear · 4 segmentos'},
        {lbl:'Profundidad sismogénica',val:'< 20 km'},
      ],
      refs:[
        {ref:'Natawidjaja, D. H. et al. (2020)',title:'The 2018 Mw7.5 Palu Earthquake Sequence',journal:'Seismol. Res. Lett., 91(5), 2524–2535. doi:10.1785/0220190380',find:'4 segmentos (Tanimbaya/Donggala/Palu/Saluki) con trazas LiDAR. Ruptura bilateral desde Donggala; slip máximo en segmento Palu (~6 m).'},
        {ref:'Natawidjaja, D. H. et al. (2021)',title:'Supershear rupture of the 2018 Lake Palu earthquake',journal:'Geophys. Res. Lett., 48, e2021GL094561. doi:10.1029/2021GL094561',find:'Velocidad de ruptura 4.1 km/s (supershear). Traza LiDAR + batimetría define geometría canónica.'},
        {ref:'Socquet et al. (2006)',title:'India and Sunda plates motion and deformation along their boundary in Myanmar',journal:'J. Geophys. Res., 111, B05406. doi:10.1029/2005JB003877',find:'Slip rate PKF: 35 mm/yr medido por GPS en referencia ITRF2000. Particionamiento de la convergencia oblicua entre PKF (sinestral) y NST (thrust).'},
      ]
    },
    debate:[
      {
        desc:'Slip rate: Walpersdorf et al. (1998) obtienen 40–45 mm/yr (GPS norte Sulawesi, ITRF96) — valor mayor que Socquet et al. 2006 (35 mm/yr, ITRF2000). La discrepancia ~5–10 mm/yr puede reflejar diferencias en el marco de referencia, período de medición, o heterogeneidad a lo largo de la falla. Este mapa adopta el valor de Socquet 2006 como más reciente y con mayor cobertura espacial.',
        refs:[
          {ref:'Walpersdorf et al. (1998)',title:'Monitoring of the Palu-Koro Fault (Sulawesi) by GPS',journal:'Geophys. Res. Lett., 25(13), 2313–2316. doi:10.1029/98GL01503',find:'Slip rate 40–45 mm/yr medido con red GPS norte Sulawesi. Marco de referencia ITRF96. Período 1994–1997.'},
        ]
      },
      {
        desc:'Extensión norte offshore: Yang et al. (2026) detectan mediante OBS un segmento offshore que prolonga la PKF en la bahía de Donggala. GPlates topology y Serhalawan (2024) colocan el junction PKF–NST en [119.30°E, 1.21°N]; otros papers difieren. La conexión precisa norte no está resuelta sin batimetría de alta resolución.',
        refs:[
          {ref:'Yang et al. (2025)',title:'Crustal structure along the Palu-Koro Fault Zone (PKF)',journal:'EGUsphere preprint (2025). doi:10.5194/egusphere-2025-3105',find:'Perfiles OBS: diferencia de velocidad cortical a ambos lados de PKF. Extensión offshore hacia la bahía de Donggala.'},
        ]
      },
    ]
  },

  'canon_19':{
    adopta:{
      desc:'Falla dextral E-W activa que conecta la PKF (oeste, triple junction [120.54°E, -3.32°N]) con el sistema Sorong (este, triple junction [122.05°E, -3.34°N]). Junto con PKF define el límite sur del bloque del brazo norte. Laguna Matano es un pull-apart dextral controlado por esta falla.',
      data:[
        {lbl:'Cinemática',val:'Dextral (Lukman 2016)'},
        {lbl:'Longitud',val:'~200 km'},
        {lbl:'Slip rate',val:'No determinado directamente'},
        {lbl:'Laguna Matano',val:'Pull-apart dextral ~35 km'},
      ],
      refs:[
        {ref:'Lukman, A. et al. (2016)',title:'Morphotectonic features of the Matano Fault',journal:'IOP Conf. Ser.: Earth Environ. Sci., 29, 012004. doi:10.1088/1755-1315/29/1/012004',find:'Cinemática dextral confirmada por análisis morfotectónico. Laguna Matano es una cuenca pull-apart dextral de ~35 km de longitud y ~2 km de profundidad.'},
        {ref:'Baillie, P. W., & Decker, J. (2022)',title:'Tectonic evolution of Sulawesi, Indonesia',journal:'Berita Sedimentologi, 48(1). doi:10.51835/bsed.2022.48.1.388',find:'Matano Fault: límite sur del bloque norte. Cinemática mixta (dextral + reversa en zonas transpresivas en el segmento central).'},
      ]
    },
    debate:[
      {
        desc:'Cinemática: dextral puro (Lukman 2016) vs dextral con componente reversa transpresiva (Baillie & Decker 2022). Algunas fuentes (Bird 2003, Serhalawan 2024) la clasifican como sinistral en ciertos segmentos — posible error de clasificación o reflejo de segmentos con geometría local distinta. El debate en torno a la cinemática del segmento central (zona de inflexión) no está resuelto.',
        refs:[
          {ref:'Serhalawan & Chen (2024)',title:'Seismotectonics of Sulawesi, Indonesia',journal:'Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366',find:'Matano Fault con variante sinistral en algunas secciones — posible ambigüedad en el segmento de inflexión este.'},
        ]
      },
    ]
  },

  'canon_364':{
    adopta:{
      desc:'Megathrust del Mar de Célebes (Sulawesi Sea) subductando bajo el brazo norte. Inicio ~8–9 Ma. La variación de azimut del vector de deslizamiento (de NNE en el oeste a N en el este) se explica por contrastes de energía potencial gravitatoria (GPE), NO por geometría 3D del slab (Greenfield 2021). Gap sísmico central 121–121.7°E: sin terremotos interplaca Mw≥6.5 documentados.',
      data:[
        {lbl:'Convergencia',val:'~50–55 mm/yr (Socquet 2006)'},
        {lbl:'Longitud',val:'~700 km'},
        {lbl:'Elastic thickness litosfera',val:'10 (+6/–24) km (Greenfield 2021)'},
        {lbl:'Inicio subducción',val:'~8–9 Ma'},
        {lbl:'Gap sísmico',val:'121–121.7°E (Serhalawan 2024)'},
      ],
      refs:[
        {ref:'Greenfield, T. et al. (2021)',title:'The seismicity and tectonics of the northern Sulawesi subduction zone',journal:'Tectonics, 40, e2020TC006573. doi:10.1029/2020TC006573',find:'Variación de azimut del slip vector explicada por GPE contrasts — hipótesis de curvatura horizontal del slab rechazada (sin evidencia en EHB <40 km). Elastic thickness: 10 (+6/–24) km.'},
        {ref:'Serhalawan & Chen (2024)',title:'Seismotectonics of Sulawesi, Indonesia',journal:'Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366',find:'Gap NST central 121–121.7°E: ausencia de sismos interplaca Mw≥6.5. Tres hipótesis: bajo acoplamiento, deslizamiento asísmico, o zona de gran sismo futuro.'},
      ]
    },
    debate:[
      {
        desc:'Causa de la variación de azimut del slip vector: Greenfield (2021) rechaza la geometría 3D del slab como explicación (sin variación detectable de curvatura horizontal en EHB <40 km) y propone GPE contrasts. La hipótesis alternativa —geometría del slab— predice una variación de dirección de convergencia entre el Mar de Célebes y Sulawesi, lo cual no se observa en datos GPS. El GPE model predice el patrón de deformación E-W en el norte que sí se observa.',
        refs:[
          {ref:'Greenfield, T. et al. (2021)',title:'The seismicity and tectonics of the northern Sulawesi subduction zone',journal:'Tectonics, 40, e2020TC006573. doi:10.1029/2020TC006573',find:'Test directo: sin variación de curvatura horizontal del slab en catálogo EHB <40 km. GPE contrasts predicen la deformación E-W observada en Sulawesi norte.'},
        ]
      },
      {
        desc:'Gap sísmico central: Serhalawan & Chen (2024) identifican ausencia de terremotos interplaca Mw≥6.5 en 121–121.7°E. Tres hipótesis en debate: (a) bajo acoplamiento (como gap de Shumagin), (b) deslizamiento asísmico (como Guerrero), (c) zona bloqueada con potencial de gran sismo futuro. Solo geodesia de alta precisión puede discriminar. El mapa muestra el gap como zona de amenaza asociada al NST, no como canonical independiente.',
        refs:[
          {ref:'Serhalawan & Chen (2024)',title:'Seismotectonics of Sulawesi, Indonesia',journal:'Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366',find:'Gap NST central: sin sismos interplaca Mw≥6.5 en 121-121.7°E. Requiere validación geodésica para discriminar hipótesis.'},
        ]
      },
    ]
  },

  'canon_205':{
    adopta:{
      desc:'Cabalgamiento thin-skinned NW-vergente activo en el frente de colisión Banggai-Sula (área de Luwuk, brazo este). Husein (2014) documenta 3 compartimentos N-S: extensión al norte (bloque ofiolítico Balantak), compresión thin-skinned al centro (Anticlinorio Salodik), deslizamientos gravitacionales al sur (molasa Kemumu).',
      data:[
        {lbl:'Cinemática',val:'Thrust NW-vergente (thin-skinned)'},
        {lbl:'Sismicidad',val:'Baja — sin soluciones GCMT'},
        {lbl:'Último M>5 registrado',val:'1981'},
        {lbl:'Edad inicio compresión',val:'Mioceno Tardío – Plioceno'},
      ],
      refs:[
        {ref:'Husein et al. (2014)',title:'Geological structures and tectonic reconstruction of Luwuk, East Sulawesi',journal:'Proc. IPA, 38th Conv. IPA 14-G-137',find:'Batui/Salodik Thrust: thin-skinned NW-vergente en Anticlinorio Salodik. ESO actúa como bloque rígido. Deformación polifásica: inversión Mioceno Tardío (Balantak Fault) + compresión Plioceno Tardío (Sorong Fault).'},
        {ref:'Hikmy & Isbram (2025)',title:'Analisis geomorfologi tektonik segmen timur Sulawesi',journal:'Jurnal Geologi Indonesia [2025]',find:'Batui Thrust Belt — geomorfología tectónica confirma actividad neotectónica. Índices IAT clase 1-2 en el frente de thrust.'},
      ]
    },
    debate:[
      {
        desc:'Actividad actual: Husein (2014) describe la compresión principal en el Plioceno Tardío. Serhalawan & Chen (2024) lo clasifican como thrust activo de baja sismicidad con M>5 documentado en 1981 pero sin soluciones GCMT. La distinción entre "activo con largo período de recurrencia" y "posiblemente inactivo" requiere datos paleosísmicos aún no disponibles para este segmento.',
        refs:[
          {ref:'Serhalawan & Chen (2024)',title:'Seismotectonics of Sulawesi, Indonesia',journal:'Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366',find:'Batui Thrust: low seismicity. Último M>5 en 1981. Sin soluciones GCMT. Clasificado activo de bajo nivel en mapa sismotectónico.'},
        ]
      },
    ]
  },

  'canon_286':{
    adopta:{
      desc:'Makassar Strait Thrust Norte — segmento norte del sistema MST, límite compresivo Sunda/bloque Sulawesi. Cuatro segmentos del sistema MST (N/CN/Mamuju/Somba) con niveles de sismicidad distintos. El segmento Mamuju registró Mw 6.2 en 2021 y Mw 6.7 en 1984 — confirma actividad reciente.',
      data:[
        {lbl:'Slip rate sistema MST',val:'5–11 mm/yr (Serhalawan 2024)'},
        {lbl:'Profundidad sismogénica',val:'< 25 km'},
        {lbl:'Episodio reciente',val:'Mw 6.2 Mamuju–Majene 2021'},
      ],
      refs:[
        {ref:'Serhalawan & Chen (2024)',title:'Seismotectonics of Sulawesi, Indonesia',journal:'Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366',find:'MST Norte: least seismically active segment. Slip rate 5-11 mm/yr. Mamuju: Mw 6.7 (1984), Mw 6.2 (2021). Somba: Mw 7.1 (1969), silencio sísmico desde 1970.'},
      ]
    },
    debate:[
      {
        desc:'Segmentación: modelo de 4 segmentos (Serhalawan 2024) vs modelos anteriores con 2-3 segmentos. El segmento CN (Central-Norte) fue identificado por Hutchings & Mooney (2021) a partir de sismicidad moderada — su existencia como estructura independiente vs. transición del segmento norte no está confirmada por mapeo de campo.',
        refs:[
          {ref:'Serhalawan & Chen (2024)',title:'Seismotectonics of Sulawesi, Indonesia',journal:'Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366',find:'4 segmentos MST identificados. Segmento CN: recién identificado por Hutchings & Mooney (2021) a partir de sismicidad moderada, sin datos de campo directos.'},
        ]
      },
    ]
  },

  'canon_369':{
    adopta:{
      desc:'Zona de subducción oeste-dipping del Mar de Molucas bajo el arco Sangihe. Componente occidental de la doble subducción opuesta del Mar de Molucas. El slab de Sangihe alcanza ~600 km de profundidad según tomografía (Hua 2023), siendo el slab más profundo del sistema Molucas. La anisotropía SKS indica flujo mantélico trench-parallel a lo largo del slab (Yuan 2024). Convergencia del Mar de Molucas hacia el oeste: ~70 mm/yr (Socquet 2006).',
      data:[
        {lbl:'Vergencia',val:'Oeste-dipping (hacia arco Sangihe)'},
        {lbl:'Profundidad slab',val:'~600 km (Hua 2023)'},
        {lbl:'Flujo mantélico',val:'Trench-parallel (Yuan 2024)'},
        {lbl:'Convergencia',val:'~70 mm/yr (Socquet 2006)'},
      ],
      refs:[
        {ref:'Hua, Y. et al. (2023)',title:'Tomography of the Banda arc and surrounding regions',journal:'JGR Solid Earth, 128, e2022JB025600. doi:10.1029/2022JB025600',find:'Slab Sangihe: ~600 km profundidad. Slab Halmahera: ~275 km. Asimetría clara en profundidad de penetración — Sangihe penetra más profundo en el manto inferior.'},
        {ref:'Yuan, T. et al. (2024)',title:'Multiple Slabs and Complex Mantle Flows in the Molucca Sea Subduction Zone',journal:'Geochemistry, Geophysics, Geosystems, 25, e2024GC011500. doi:10.1029/2024GC011500',find:'Anisotropía SKS indica flujo mantélico trench-parallel a lo largo del slab Sangihe. Flujo controlado por geometría de la doble subducción opuesta del Mar de Molucas.'},
        {ref:'Socquet, A. et al. (2006)',title:'Microblock rotations and fault coupling in SE Asia triple junction (Sulawesi, Indonesia) from GPS and earthquake slip vector data',journal:'JGR Solid Earth, 111, B08409. doi:10.1029/2005JB003963',find:'Convergencia Mar de Molucas: ~70 mm/yr hacia el oeste. Rotación del bloque Molucas en contexto de triple unión.'},
      ]
    },
    debate:[
      {
        desc:'<b>Debate fundamental de polaridad:</b> el modelo estándar postula que el Mar de Molucas es la placa subductante y subducta hacia AFUERA en ambos sentidos — hacia el oeste bajo Sangihe y hacia el este bajo Halmahera. Hall & Spakman (2015) proponen el modelo <b>inverso</b>: son los propios arcos de Sangihe y Halmahera los que subductan hacia ADENTRO del Mar de Molucas, de modo que el Mar de Molucas actúa como placa cabalgante en ambos flancos. En este modelo alternativo el slab bajo el arco de Sangihe no es el piso de Molucas yendo al oeste sino el arco de Sangihe buceando hacia el este (E-dipping); el slab bajo Halmahera no es el piso de Molucas yendo al este sino el arco de Halmahera buceando hacia el oeste (W-dipping). Ambas subducciones son en sentido estrictamente contrario al modelo mayoritario. Esta inversión de polaridad cambia fundamentalmente quién es la placa subductante, el mecanismo que impulsa la convergencia y la dinámica futura de la colisión arc-arc. La mayoría de la comunidad (Yuan 2024, Supendi 2024, Kesumastuti 2025, Di Leo 2012) trabaja con el modelo estándar, pero la tomografía de alta resolución todavía no resuelve unívocamente la polaridad real porque ambos modelos producen anomalías de alta velocidad similares en posición.',
        refs:[
          {ref:'Hall, R. & Spakman, W. (2015)',title:'Mantle structure and tectonic history of SE Asia',journal:'Tectonophysics, 658. doi:10.1016/j.tecto.2015.07.003',find:'Modelo de inversión de polaridad: arcos de Sangihe y Halmahera subductando hacia el Mar de Molucas (inward), en oposición al modelo estándar donde el Mar de Molucas subduce hacia afuera (outward). Las anomalías tomográficas de alta velocidad son compatibles con ambas geometrías.'},
          {ref:'Yuan, T. et al. (2024)',title:'Multiple Slabs and Complex Mantle Flows in the Molucca Sea Subduction Zone',journal:'Geochemistry, Geophysics, Geosystems, 25, e2024GC011500. doi:10.1029/2024GC011500',find:'Adopta el modelo estándar (Molucas outward-subducting). El patrón de flujo mantélico registrado (Features A–E) es consistente con W-dipping bajo Sangihe y E-dipping bajo Halmahera como placa subductante, no con el modelo invertido.'},
          {ref:'Kesumastuti, A. et al. (2025)',title:'Multiple slab subduction beneath Sulawesi',journal:'Geophysical Research Letters. doi:10.1029/2025GL115393',find:'Trabaja en el marco estándar: slabs H1–H3 corresponden al Mar de Molucas subductando outward. No confronta directamente el modelo de inversión de Hall & Spakman.'},
        ]
      },
      {
        desc:'Hall & Spakman (2015) proponen además, bajo el norte de Sulawesi, un slab de dirección N-dipping independiente ("Sula slab") relacionado con la colisión del Microcontinente Banggai-Sula. Cao et al. (2024) adoptan el mismo modelo. Kesumastuti et al. (2025) no encuentran evidencia tomográfica de este slab al oeste de 122.5°E: la anomalía H2 podría ser una flexión del slab de Sangihe o artefacto de resolución. Supendi et al. (2024) confirman el slab W-dipping en perfiles E-O pero sus perfiles no están orientados para resolver la componente N-dipping.',
        refs:[
          {ref:'Hall, R. & Spakman, W. (2015)',title:'Mantle structure and tectonic history of SE Asia',journal:'Tectonophysics, 658. doi:10.1016/j.tecto.2015.07.003',find:'Fig. 15: Sula slab N-dipping como estructura independiente evolucionando a casi vertical al presente.'},
          {ref:'Cao, L. et al. (2024)',title:'Slab subduction and mantle dynamics beneath Sulawesi',journal:'JGR: Solid Earth. doi:10.1029/2024JB029012',find:'Fig. 7 (cartoon 3D): Sula slab como cuerpo separado con dirección diferente al slab de Sangihe.'},
          {ref:'Kesumastuti, A. et al. (2025)',title:'Multiple slab subduction beneath Sulawesi',journal:'Geophysical Research Letters. doi:10.1029/2025GL115393',find:'Sin evidencia del Sula slab al oeste de 122.5°E; H2 es posiblemente flexión del slab de Sangihe.'},
          {ref:'Supendi, P. et al. (2024)',title:'Slab geometry beneath Sulawesi from regional seismicity',journal:'JGR: Solid Earth. doi:10.1029/2023JB027989',find:'Perfiles Fig. 3A-B y 3C-D (E-O): W-dipping confirmado pero no resuelve componente N-S del posible Sula slab.'},
        ]
      },,
      {
        desc:'Asimetría Sangihe–Halmahera: Hua (2023) documenta que el slab de Sangihe (~600 km) penetra ~2× más profundo que el slab de Halmahera (~275 km). El mecanismo de esta asimetría — diferencia en edad litosférica, velocidad de convergencia, o dinámica de rollback — no está resuelto. Yuan (2024) propone que el flujo mantélico trench-parallel retroalimenta la asimetría al modificar la presión dinámica en la cuña mantélica.',
        refs:[
          {ref:'Hua, Y. et al. (2023)',title:'Tomography of the Banda arc and surrounding regions',journal:'JGR Solid Earth, 128, e2022JB025600. doi:10.1029/2022JB025600',find:'Slab Sangihe ~600 km vs Halmahera ~275 km. Asimetría documentada en tomografía Vp y Vs. Sin consenso sobre causa dinámica.'},
          {ref:'Yuan, T. et al. (2024)',title:'Multiple Slabs and Complex Mantle Flows in the Molucca Sea Subduction Zone',journal:'Geochemistry, Geophysics, Geosystems, 25, e2024GC011500. doi:10.1029/2024GC011500',find:'Flujo mantélico trench-parallel Sangihe — posible mecanismo de retroalimentación en asimetría de profundidad slab.'},
        ]
      },
    ]
  },

  'canon_805':{
    adopta:{
      desc:'Zona de subducción este-dipping del Mar de Molucas bajo el arco Halmahera. Componente de la doble subducción opuesta del Mar de Molucas. El slab de Halmahera alcanza aproximadamente 275 km de profundidad según tomografía (Hua 2023), considerablemente menos profundo que el slab de Sangihe.',
      data:[
        {lbl:'Vergencia',val:'Este-dipping (hacia arco Halmahera)'},
        {lbl:'Profundidad slab',val:'~275 km (Hua 2023)'},
      ],
      refs:[
        {ref:'Hua et al. (2023)',title:'P and S wave anisotropic tomography of the Banda subduction zone',journal:'Geophys. Res. Lett., 50, e2023GL105611. doi:10.1029/2023GL105611',find:'Halmahera E-dipping hasta ~275 km — significativamente menos profundo que Sangihe (~660 km).'},
      ]
    },
    debate:[
      {
        desc:'<b>Debate fundamental de polaridad (vinculado al debate de Sangihe):</b> en el modelo estándar el Mar de Molucas subduce HACIA EL ESTE bajo el arco de Halmahera (E-dipping). Hall & Spakman (2015) proponen la inversión: es el arco de Halmahera el que subduce hacia el OESTE, dentro del Mar de Molucas (W-dipping), siendo el Mar de Molucas la placa cabalgante. Esta inversión es simétrica al debate de Sangihe: ambos arcos subductan hacia adentro en el modelo de Hall & Spakman, en lugar del Mar de Molucas subductando hacia afuera en el modelo estándar. La distinción observacional entre ambos modelos es difícil porque las anomalías de alta velocidad son compatibles con cualquiera de las dos geometrías — lo que distingue los modelos es la interpretación de qué material forma la anomalía (arco vs. piso oceánico) y el patrón de flujo mantélico esperado en cada caso.',
        refs:[
          {ref:'Hall, R. & Spakman, W. (2015)',title:'Mantle structure and tectonic history of SE Asia',journal:'Tectonophysics, 658. doi:10.1016/j.tecto.2015.07.003',find:'Modelo de inversión de polaridad para el Mar de Molucas: Halmahera subducta hacia el oeste (W-dipping), con el Mar de Molucas como placa superior. Simétrico al modelo invertido para Sangihe.'},
          {ref:'Yuan, T. et al. (2024)',title:'Multiple Slabs and Complex Mantle Flows in the Molucca Sea Subduction Zone',journal:'Geochemistry, Geophysics, Geosystems, 25, e2024GC011500. doi:10.1029/2024GC011500',find:'Adopta el modelo estándar (E-dipping bajo Halmahera). Las Features mantélicas C–E son consistentes con Molucas subductando outward hacia el este, no con Halmahera subductando inward.'},
        ]
      },
      {
        desc:'Dentro del modelo estándar (E-dipping), Yuan et al. (2024) documentan un fragmento detached o slab edge libre en el segmento norte del slab de Halmahera, generando flujo toroidal alrededor del extremo (Feature E). Implica que la dirección de hundimiento no es uniforme a lo largo del arco: el segmento central es E-dipping canónico, pero el segmento norte es más complejo. Di Leo et al. (2012) registran en la estación TERN ejes SKS trench-parallel, incompatibles con una subducción E-dipping puramente ortogonal — apuntan a flujo de escape lateral. Liu et al. (2026) muestran en la isosuperficie 3D variaciones laterales de dip direction entre segmentos del slab de Halmahera.',
        refs:[
          {ref:'Yuan, T. et al. (2024)',title:'Multiple Slabs and Complex Mantle Flows in the Molucca Sea Subduction Zone',journal:'Geochemistry, Geophysics, Geosystems, 25, e2024GC011500. doi:10.1029/2024GC011500',find:'Feature E: flujo toroidal alrededor del extremo N del slab de Halmahera — fragmento detached o slab edge libre con dirección de hundimiento variable.'},
          {ref:'Di Leo, J. F. et al. (2012)',title:'Mantle flow in regions of complex tectonics: Insights from Indonesia',journal:'Geochemistry, Geophysics, Geosystems, 13(12). doi:10.1029/2012GC004417',find:'TERN: fast axes trench-parallel en zona Halmahera; incompatible con subducción E-dipping ortogonal simple.'},
          {ref:'Liu, H. et al. (2026)',title:'S-wave tomography of the Indonesian subduction system',journal:'JGR: Solid Earth. doi:10.1029/2025JB031000',find:'Isosuperficie 3D: variaciones laterales de dip direction en el slab de Halmahera que exceden el descriptor simple E-dipping.'},
        ]
      },,
      {
        desc:'Profundidad del slab y continuación en el manto: la diferencia en profundidad entre Halmahera (~275 km) y Sangihe (~660 km) es llamativa. Puede reflejar que el slab de Halmahera es más joven o que su subducción empezó más recientemente que Sangihe. Los datos de flujo mantélico (Yuan 2024) sugieren que el flujo toroidal entre ambas cuñas está influenciado por esta asimetría.',
        refs:[
          {ref:'Yuan et al. (2024)',title:'Mantle flow in the Molucca Sea region',journal:'J. Geophys. Res. Solid Earth, 129, e2023JB028021. doi:10.1029/2023JB028021',find:'Flujo toroidal entre cuñas de Sangihe y Halmahera — asimetría de profundidad de slabs como driver geodinámico.'},
        ]
      },
    ]
  },

  'canon_1921':{
    adopta:{
      desc:'Falla de desgarre dextral E-W, la más rápida del sistema regional (~120 mm/yr). Conecta la triple junction Matano–Sorong–SST ([122.05°E, -3.34°N]) al oeste con el extremo NW de Bird\'s Head al este. Limita el bloque del Bird\'s Head/placa del Pacífico al norte del Mar de Banda/plataforma australiana. Consta de una rama principal (Sorong s.s.) y una rama sur (Sorong S). El desplazamiento total acumulado supera los 200 km (estimaciones Oligoceno–Presente).',
      data:[
        {lbl:'Cinemática',val:'Dextral E-W (right-lateral)'},
        {lbl:'Slip rate',val:'~120 mm/yr (Socquet et al. 2006)'},
        {lbl:'Longitud',val:'~1200 km (rama principal)'},
        {lbl:'Desplazamiento total',val:'>200 km (Oligoceno–Presente)'},
      ],
      refs:[
        {ref:'Socquet et al. (2006)',title:'India and Sunda plates motion and deformation along their boundary in Myanmar',journal:'J. Geophys. Res., 111, B05406. doi:10.1029/2005JB003877',find:'Slip rate Sorong: ~120 mm/yr (GPS), la falla de desgarre más rápida de SE Asia. Particionamiento entre Sorong (sinistral) y sistemas thrust del borde sur del Bird\'s Head.'},
        {ref:'Baillie, P. W., & Decker, J. (2022)',title:'Tectonic evolution of Sulawesi, Indonesia',journal:'Berita Sedimentologi, 48(1). doi:10.51835/bsed.2022.48.1.388',find:'Sorong conecta con Matano en la triple junction [122.05°E, -3.34°N]. Inicio del movimiento actual en el Mioceno Tardío–Plioceno, desplazamiento total >200 km.'},
      ]
    },
    debate:[
      {
        desc:'Inicio del movimiento: el inicio del slip sinistral/dextral principal se estima en el Oligoceno Tardío–Mioceno Temprano (Hall 2002, ~25 Ma) o más tarde en el Mioceno Tardío–Plioceno (Baillie & Decker 2022). La ambigüedad refleja en parte la dificultad de distinguir la historia de Sorong s.s. de las estructuras más antiguas del sistema Sorong lato sensu.',
        refs:[
          {ref:'Baillie, P. W., & Decker, J. (2022)',title:'Tectonic evolution of Sulawesi, Indonesia',journal:'Berita Sedimentologi, 48(1). doi:10.51835/bsed.2022.48.1.388',find:'Inicio del movimiento Sorong actual: Mioceno Tardío–Plioceno. Desplazamiento total por resolver — estimaciones varían entre 100 y >300 km según distintos autores.'},
        ]
      },
      {
        desc:'Continuación oeste: GPlates (topología presente) asigna el segmento "PNG transform seg 1-3" a canon_1921. Otros estudios colocan la junction Sorong–Matano en distintas coordenadas [122.0–122.1°E, -3.3–-3.4°N]. La geometría de la triple junction no tiene resolución de campo de alta precisión.',
        refs:[
          {ref:'Socquet et al. (2006)',title:'India and Sunda plates motion and deformation along their boundary in Myanmar',journal:'J. Geophys. Res., 111, B05406. doi:10.1029/2005JB003877',find:'Triple junction Matano–Sorong–SST: [122.05°E, -3.34°N]. Particionamiento de velocidades en los tres sistemas de falla.'},
        ]
      },
    ]
  },


  'canon_287':{
    adopta:{
      desc:'MST Central-Norte — segmento identificado recientemente por Hutchings & Mooney (2021) en Serhalawan & Chen (2024). Zona de sismicidad moderada entre los segmentos Norte y Mamuju. Slip rate dentro del rango sistémico 5–11 mm/yr. Ver también debate del sistema MST en canon_286.',
      data:[
        {lbl:'Slip rate',val:'5–11 mm/yr (Serhalawan 2024)'},
        {lbl:'Estado',val:'Recién identificado — sin datos de campo directos'},
      ],
      refs:[
        {ref:'Serhalawan & Chen (2024)',title:'Seismotectonics of Sulawesi, Indonesia',journal:'Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366',find:'Segmento CN identificado por sismicidad moderada entre Norte y Mamuju. Hutchings & Mooney (2021) como primera referencia.'},
      ]
    },
    debate:[{desc:'Existencia como segmento independiente no confirmada por mapeo de campo. Ver debate completo en MST Norte (canon_286).',refs:[]}]
  },

  'canon_288':{
    adopta:{
      desc:'MST Mamuju — el segmento más sísmicamente activo del sistema MST. Max Mw 6.7 (1984). El sismo de Mamuju–Majene 2021 (Mw 6.2) confirmó la actividad reciente y fue altamente destructivo. Slip rate 5–11 mm/yr.',
      data:[
        {lbl:'Slip rate',val:'5–11 mm/yr (Serhalawan 2024)'},
        {lbl:'Sismo mayor',val:'Mw 6.7 (1984) · Mw 6.2 (2021)'},
        {lbl:'Daño 2021',val:'Alta destrucción urbana Mamuju–Majene'},
      ],
      refs:[
        {ref:'Serhalawan & Chen (2024)',title:'Seismotectonics of Sulawesi, Indonesia',journal:'Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366',find:'MST Mamuju: max Mw 6.7 (1984), terremoto Mamuju-Majene 2021 Mw 6.2 — alta actividad sísmica del segmento.'},
      ]
    },
    debate:[{desc:'Profundidad del plano de despegue: modelos de inversión del sismo 2021 sugieren un plano de falla poco profundo (~15 km) pero la geometría detallada del segmento en profundidad no está resuelta.',refs:[]}]
  },

  'canon_289':{
    adopta:{
      desc:'MST Somba — segmento sur del sistema MST. Max Mw 7.1 (1969). Silencio sísmico notable desde 1970 — posible acumulación de estrés. Junto con el gap sísmico, representa un riesgo potencial para la región sur de Sulawesi Occidental.',
      data:[
        {lbl:'Slip rate',val:'5–11 mm/yr (Serhalawan 2024)'},
        {lbl:'Sismo mayor',val:'Mw 7.1 (1969)'},
        {lbl:'Silencio sísmico',val:'Sin M>5 desde 1970'},
      ],
      refs:[
        {ref:'Serhalawan & Chen (2024)',title:'Seismotectonics of Sulawesi, Indonesia',journal:'Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366',find:'MST Somba: max Mw 7.1 (1969), silencio sísmico desde 1970. Posible acumulación de estrés — riesgo no cuantificado.'},
      ]
    },
    debate:[{desc:'El silencio sísmico puede indicar: (a) bajo acoplamiento interseísmo, (b) slip asísmico, o (c) ciclo sísmico largo con sismo eventual >Mw 7. Sin datos geodésicos de alta resolución para el segmento Somba, no es posible discriminar.',refs:[]}]
  },

  'canon_789':{
    adopta:{
      desc:'Falla de Gorontalo — falla dextral NE-SW en el Golfo de Gorontalo, brazo norte de Sulawesi. Controla la subsidencia del Golfo de Gorontalo como cuenca pull-apart o de tipo half-graben. Presenta sismicidad moderada documentada en catálogos ISC/GCMT.',
      data:[
        {lbl:'Cinemática',val:'Dextral NE-SW'},
        {lbl:'Contexto',val:'Pull-apart / half-graben Golfo de Gorontalo'},
      ],
      refs:[
        {ref:'Serhalawan & Chen (2024)',title:'Seismotectonics of Sulawesi, Indonesia',journal:'Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366',find:'Gorontalo Fault: dextral NE-SW, controla la cuenca del Golfo de Gorontalo.'},
      ]
    },
    debate:[]
  },

  'canon_1010':{
    adopta:{
      desc:'Tolo Thrust — cabalgamiento de vergencia sur en el Golfo de Tolo (Teluk Tolo), extremo oriental del brazo este. Asociado a la compresión N-S en la zona de colisión Banggai-Sula. Presenta soluciones focales de tipo reverse en el catálogo instrumental.',
      data:[
        {lbl:'Cinemática',val:'Thrust S-vergente'},
        {lbl:'Contexto',val:'Frente compresivo este del brazo este'},
      ],
      refs:[
        {ref:'Serhalawan & Chen (2024)',title:'Seismotectonics of Sulawesi, Indonesia',journal:'Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366',find:'Tolo Thrust: asociado a sismicidad thrust en el Golfo de Tolo. Compresión N-S en la zona de colisión este.'},
      ]
    },
    debate:[]
  },

  'canon_1927':{
    adopta:{
      desc:'East Walane Fault (EWF) — segmento este del Walane Fault System (WFS) en el brazo sur de Sulawesi. Cinemática compleja: thrust east-dipping en el segmento norte, con componente sinestral en el segmento sur. Es el segmento más sísmicamente activo del WFS, con mayor frecuencia de eventos que el WWF.',
      data:[
        {lbl:'Cinemática N',val:'Thrust east-dipping'},
        {lbl:'Cinemática S',val:'Sinistral (left-lateral)'},
        {lbl:'Slip rate sistema',val:'~0.5 mm/yr (Serhalawan 2024)'},
        {lbl:'Longitud',val:'~200 km'},
      ],
      refs:[
        {ref:'Serhalawan & Chen (2024)',title:'Seismotectonics of Sulawesi, Indonesia',journal:'Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366',find:'EWF: thrust east-dipping al norte, left-lateral al sur. Más activo sísmicamente que el WWF. Slip rate ~0.5 mm/yr para el sistema WFS.'},
      ]
    },
    debate:[
      {
        desc:'La transición cinemática a lo largo de la traza (thrust N → sinestral S) no está completamente documentada con datos de campo. La conexión geométrica y cinemática entre EWF y WWF — y si constituyen un sistema conjugado o estructuras independientes — no está resuelta. Jaya (2014) propone que el EWF y WWF actúan en conjunto como límite tectónico del brazo sur.',
        refs:[
          {ref:'Serhalawan & Chen (2024)',title:'Seismotectonics of Sulawesi, Indonesia',journal:'Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366',find:'EWF y WWF como componentes del Walane Fault System. Relación estructural entre ambos segmentos requiere mapeo de campo adicional.'},
        ]
      },
    ]
  },


  'canon_1933':{
    adopta:{
      desc:'Falla Balantak — falla dextral transtensional NE-SW en el extremo NE del brazo este (zona de Luwuk). Husein et al. (2014) la interpretan como estructuralmente distinta del Batui Thrust: controla la apertura transtensional del Valle de Siuna (Gulf of Poh) desde el Mioceno Tardío. El bloque de ofiolita Balantak actúa como elemento rígido que particiona la deformación: thrust al SW (Batui) y transtensión al NE (Balantak).',
      data:[
        {lbl:'Cinemática',val:'Dextral transtensional NE-SW'},
        {lbl:'Contexto',val:'Controls apertura Valle Siuna / Gulf of Poh'},
        {lbl:'Inicio',val:'Mioceno Tardío'},
      ],
      refs:[
        {ref:'Husein et al. (2014)',title:'Geological structures and tectonic reconstruction of Luwuk, East Sulawesi',journal:'Proc. IPA, 38th Conv. IPA 14-G-137',find:'Balantak Fault dextral transtensional; controla apertura Gulf of Poh (Valle de Siuna) desde Mioceno Tardío. La ofiolita Balantak actúa como bloque rígido — particiona la deformación entre thrust (SW) y transtensión (NE).'},
      ]
    },
    debate:[
      {
        desc:'Simandjuntak (1986) la cartografía como right-lateral simple sin componente transtensional; Husein (2014) revisa esta interpretación y documenta la transtensión a partir de gabros cizallados en Pagimana. La extensión y conectividad de la falla fuera del área de mapeo de Husein (hacia el NE, offshore) no está documentada.',
        refs:[
          {ref:'Husein et al. (2014)',title:'Geological structures and tectonic reconstruction of Luwuk, East Sulawesi',journal:'Proc. IPA, 38th Conv. IPA 14-G-137',find:'Revisión de Simandjuntak 1986: análisis cinemático de gabro cizallado en Pagimana confirma transtensión dextral, no right-lateral simple.'},
        ]
      },
    ]
  },

  'canon_1928':{
    adopta:{
      desc:'Buton Thrust — cabalgamiento de vergencia norte en el extremo sur del brazo SE, asociado a la colisión del microcontinente Buton-Tukang Besi con el brazo sureste. Baja sismicidad instrumental: pocos eventos thrust cerca del extremo sur, sin soluciones GCMT disponibles. Serhalawan & Chen (2024) lo clasifican como activo de bajo nivel.',
      data:[
        {lbl:'Cinemática',val:'Thrust N-vergente'},
        {lbl:'Contexto',val:'Frente de colisión Buton-Tukang Besi'},
        {lbl:'Sismicidad',val:'Baja — sin soluciones GCMT'},
      ],
      refs:[
        {ref:'Serhalawan & Chen (2024)',title:'Seismotectonics of Sulawesi, Indonesia',journal:'Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366',find:'Buton Thrust: low seismicity, pocos eventos thrust cerca del extremo sur. Activo de bajo nivel.'},
        {ref:'Satyana & Purwaningsih (2011)',title:'Tectonic evolution of Sulawesi — IPA paper',journal:'Proc. IPA, 35th Conv. IPA11-G-219',find:'Buton-Tukang Besi: microcontinente de afinidad australiana, colisión con el brazo SE. Buton Thrust como frente de colisión activo.'},
      ]
    },
    debate:[
      {
        desc:'La cronología exacta del inicio de la actividad del Buton Thrust no está bien constrenida — estimaciones van desde el Mioceno Tardío hasta el Plioceno-Cuaternario. Sin datos paleosísmicos directos, es difícil discriminar si es "activo con largo período de recurrencia" o si la actividad principal ya cesó.',
        refs:[
          {ref:'Satyana & Purwaningsih (2011)',title:'Tectonic evolution of Sulawesi — IPA paper',journal:'Proc. IPA, 35th Conv. IPA11-G-219',find:'Colisión Buton-Tukang Besi: inicio ~Mioceno-Plioceno. Cronología del thrust frontal requiere dataciones de campo adicionales.'},
        ]
      },
    ]
  },

  'canon_100':{
    adopta:{
      desc:'Falla Lawanopo — falla sinestral ENE-WSW en el brazo SE de Sulawesi. Conecta con la Hamilton Fault al este (continuación offshore). Slip rate geodésico no constrained (Socquet et al. 2006 clasifican la falla como acoplada pero con escasa cobertura GPS); estudios geomorfológicos sugieren actividad sinestral activa a tasas probablemente subrayadas por la geodesia disponible.',
      data:[
        {lbl:'Cinemática',val:'Sinistral (left-lateral) ENE-WSW'},
        {lbl:'Slip rate',val:'No constrained (Socquet et al. 2006 — cobertura GPS escasa)'},
        {lbl:'Continuación E',val:'Hamilton Fault (offshore)'},
        {lbl:'Longitud',val:'~250 km'},
      ],
      refs:[
        {ref:'Watkinson & Hall (2017)',title:'Fault systems of the eastern Indonesian triple junction',journal:'Geol. Soc. Lond. Spec. Publ., 441. doi:10.1144/SP441.8',find:'Lawanopo Fault: sinestral ENE-WSW en el SE Arm. Conecta con Hamilton Fault al este (offshore). Parte del sistema de fallas de la triple junction E Indonesia.'},
        {ref:'Socquet et al. (2006)',title:'Microblock rotations and fault coupling in SE Asia triple junction (Sulawesi, Indonesia)',journal:'JGR: Solid Earth, 111, B08409. doi:10.1029/2005JB003963',find:'Lawanopo Fault: clasificada como acoplada interseísmicamente; slip rate pobremente constrained por escasez de estaciones GPS en el brazo SE. La falla se conecta al oeste con la Palu-Koro.'},
      ]
    },
    debate:[
      {
        desc:'El slip rate de la Lawanopo está pobremente constrained (Socquet et al. 2006 documentan cobertura GPS insuficiente para el brazo SE). Tres hipótesis: (a) deslizamiento mayormente asísmico, (b) el período de observación GPS (pocos años) no captura ciclos largos, (c) la falla está realmente inactiva y la deformación se transfiere a otras estructuras. Baillie & Decker (2022) y Watkinson & Hall (2017) la mantienen como activa basándose en geomorfología, pero la geodesia no confirma slip rápido.',
        refs:[
          {ref:'Socquet et al. (2006)',title:'Microblock rotations and fault coupling in SE Asia triple junction (Sulawesi, Indonesia)',journal:'JGR: Solid Earth, 111, B08409. doi:10.1029/2005JB003963',find:'Lawanopo Fault pobremente constrained geodésicamente; el modelo bloque-falla de Socquet et al. (2006) cubre el brazo SE pero con menor densidad de sitios GPS que el brazo O. La falla figura como acoplada pero con incertidumbre alta.'},
        ]
      },
    ]
  },

  'canon_116':{
    adopta:{
      desc:'Falla Kolaka — falla de rumbo dextral en el brazo SE de Sulawesi. La cinemática es dominantemente dextral, con componente normal en el segmento central y extremo sur que genera un step-over transtensional. El bloque downthrown está al sur. Sismo Mw 6.1 (2011) documentado en la unión con Hamilton Fault.',
      data:[
        {lbl:'Cinemática',val:'Dextral con componente normal (centro-S)'},
        {lbl:'Contexto',val:'Pull-apart / step-over transtensional'},
        {lbl:'Sismo mayor',val:'Mw 6.1 (2011) en unión con Hamilton Fault'},
        {lbl:'Longitud',val:'~200 km'},
      ],
      refs:[
        {ref:'Watkinson & Hall (2017)',title:'Fault systems of the eastern Indonesian triple junction',journal:'Geol. Soc. Lond. Spec. Publ., 441. doi:10.1144/SP441.8',find:'Kolaka: transcurrente dominante, componente normal en centro. Downthrown side al sur. Sismo Mw 6.1 (2011) en la unión con Hamilton Fault.'},
        {ref:'Serhalawan & Chen (2024)',title:'Seismotectonics of Sulawesi, Indonesia',journal:'Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366',find:'Kolaka Fault: dextral con componente normal. Mecansimos focales confirman slip mixto en el segmento central.'},
      ]
    },
    debate:[
      {
        desc:'La componente normal en el segmento central puede reflejar (a) un step-over genuino que genera una cuenca pull-apart, o (b) variación en la orientación de la falla respecto al campo de esfuerzos regional. Baillie & Decker (2022) la clasifican principalmente como dextral sin enfatizar la componente normal; Watkinson & Hall (2017) documentan la extensión central basándose en morfología y mecanismos focales.',
        refs:[
          {ref:'Baillie, P. W., & Decker, J. (2022)',title:'Tectonic evolution of Sulawesi, Indonesia',journal:'Berita Sedimentologi, 48(1). doi:10.51835/bsed.2022.48.1.388',find:'Kolaka Fault: dextral principal. La extensión del segmento central interpretada como pull-apart por Watkinson & Hall, pero morfología consistente con dextral dominante.'},
        ]
      },
    ]
  },

  'canon_basin_palu':{
    adopta:{
      desc:'Cuenca transtensional formada por un releasing bend de la Falla Palu-Koro (PKF). El retraso geométrico genera subsidencia localizada a lo largo de dos sectores contiguos: el Golfo de Palu (sector submarino al norte) y el Valle de Palu (sector continental al sur). El relleno cuaternario — abanicos aluviales, depósitos lacustres, prodelta del Río Palu — hizo que el sismo de 2018 produjera licuefacción catastrófica en los barrios de Petobo y Balaroa. El Complejo Metamórfico de Palu (PMC), expuesto en el flanco occidental, es el footwall del mismo régimen transtensional.',
      data:[
        {lbl:'Longitud (N-S)',val:'~150 km'},
        {lbl:'Golfo de Palu',val:'sector submarino, ~450 m de profundidad'},
        {lbl:'Relleno',val:'Cuaternario: aluvial, lacustre, prodelta'},
        {lbl:'Mecanismo',val:'Releasing bend de la PKF (sinestral)'},
      ],
      refs:[
        {ref:'Socquet et al. (2006)',title:'Microblock rotations and fault coupling in SE Asia triple junction',journal:'JGR: Solid Earth, 111(B8). doi:10.1029/2005JB003963',find:'PKF ~42 mm/año sinestral. Pull-apart transtensivo genera la cuenca de Palu. El releasing bend es responsable de la subsidencia del Valle de Palu.'},
        {ref:'Natawidjaja, D. H. et al. (2020)',title:'Palu earthquake sequence and fault segmentation',journal:'Seismological Research Letters, 91(5). doi:10.1785/0220190380',find:'Segmento Palu de la PKF controla la geometría de la cuenca. Licuefacción 2018 condicionada por presencia de sedimentos saturados del relleno cuaternario.'},
        {ref:'Natawidjaja, D. H. et al. (2021)',title:'Supershear rupture of the 2018 Lake Palu earthquake',journal:'Geophysical Research Letters, 48, e2021GL094561. doi:10.1029/2021GL094561',find:'Batimetría de la Bahía de Palu revela morfología de releasing bend activo. Ruptura supershear controlada por la geometría del releasing bend de la cuenca.'},
      ]
    }
  },

  'canon_eso':{
    adopta:{
      desc:'Ofiolita tectónicamente desmembrada con suite completa de litologías — peridotita residual de manto y cumulados máfico-ultramáficos en la base, gabro estratificado a isotrópico en el medio, doleritas en lámina y volcánicas basálticas de composición MORB en el tope. Intercalada con sedimentos pelágicos cretácicos/mesozoicos. Emplazada por obducción dirigida al noroeste durante la colisión del Sula Spur (promontorio del bloque Banggai-Sula, afinidad australiana) con el North Arm, en el Mioceno Temprano.',
      data:[
        {lbl:'Edad protolito',val:'~100 Ma'},
        {lbl:'Edad emplazamiento',val:'~28 Ma (Oligoceno medio-tardío)'},
        {lbl:'Extensión',val:'Una de las 3 ofiolitas más grandes del mundo — Sulawesi Central a Buton/Muna'},
        {lbl:'Cinemática obducción',val:'NW-directed — colisión Sula Spur–North Arm'},
      ],
      refs:[
        {ref:'Baillie, P., & Decker, J. (2022)',title:'Enigmatic Sulawesi: The Tectonic Collage',journal:'Berita Sedimentologi, 48(1), 1–30. doi:10.51835/bsed.2022.48.1.388',find:'Suite ofiolítica completa, composición MORB. Edades metamórficas 28–32 Ma en rocas sobreyacidas sugieren emplazamiento Oligoceno medio-tardío. En el Mioceno Temprano, el ESO fue emplazado por obducción dirigida al noroeste durante la colisión del Sula Spur con el North Arm.'},
        {ref:'Faturrakhman et al. (2024)',title:'ESO Asera — complejo ultramáfico Konawe Utara',journal:'(ver DB geophysical_point/structure asociados)',find:'Complejo ultramáfico cretácico del ESO en Asera, Konawe Utara — exposición sureste del cinturón.'},
      ]
    },
    debate:[
      {
        desc:'Origen tectónico: los datos geoquímicos muestran disparidad peridotita-basalto y relación no cogenética corteza-manto en varios sitios, lo cual es consistente tanto con un origen como plateau oceánico cretácico (Kadarusman et al. 2004) como con formación en zona de subducción seguida de sobreimpresión magmática en distintos ambientes. Baillie & Decker (2022) señalan esta ambigüedad explícitamente — confidence medio en la interpretación genética.',
        refs:[]
      }
    ]
  },

  'canon_pmc':{
    adopta:{
      desc:'Cinturón metamórfico de presión media (clorita a estaurolita) expuesto inmediatamente adyacente a la Falla Palu — footwall del mismo régimen transtensional que genera la Cuenca de Palu. Litologías dominantes: gneis y esquisto de biotita, con anfibolita, granulita, migmatita, peridotita, calcosilicatos y meta-granitoides subordinados, varias parcialmente fundidas a migmatitas. Edades de enfriamiento Early–Late Plioceno; granitos S-type intruidos de edad similar — ambos indican exhumación muy rápida. Por qué: la exhumación responde a extensión y adelgazamiento cortical localizado, con dos motores superpuestos — la transtensión de la propia PKF (igual mecanismo que abre la Cuenca de Palu en superficie) y el rollback del North Sulawesi Trench, que añade un componente extensional regional al sistema.',
      data:[
        {lbl:'Grado metamórfico',val:'Clorita–estaurolita (presión media)'},
        {lbl:'Edad enfriamiento',val:'Plioceno temprano–tardío'},
        {lbl:'Tasa exhumación',val:'0.75–0.9 mm/año (termocronología de apatito)'},
        {lbl:'Corteza removida',val:'~2 km desde el Plioceno Medio'},
        {lbl:'Causa (por qué)',val:'Transtensión PKF + rollback NST → extensión/adelgazamiento cortical'},
      ],
      refs:[
        {ref:'Baillie, P., & Decker, J. (2022)',title:'Enigmatic Sulawesi: The Tectonic Collage',journal:'Berita Sedimentologi, 48(1), 1–30. doi:10.51835/bsed.2022.48.1.388',find:'PMC: cinturón de presión media adyacente a la Falla Palu. Exhumación 0.75–0.9 mm/yr, ~2 km de corteza removida desde el Plioceno Medio, consecuente de extensión y adelgazamiento cortical asociado a la PKF y al rollback del NST. Granitos S-type Pliocenos coetáneos con el enfriamiento (Hennig et al. 2017).'},
      ]
    },
    debate:[
      {
        desc:'Marco temporal: Satyana et al. (2011, IAGI) enmarcan la metamorfosis del PMC como un evento de core complex del Mioceno, contemporáneo con la apertura extensional de Gorontalo Bay y Bone Gulf — distinto del enfriamiento Plioceno que adopta este mapa (Baillie & Decker 2022). No son necesariamente contradictorios: pico metamórfico Mioceno vs. enfriamiento/exhumación Plioceno son etapas distintas de la misma trayectoria P-T-t, pero la literatura no resuelve explícitamente la transición entre ambos eventos.',
        refs:[
          {ref:'Satyana, A. H., & Purwaningsih, M. E. M. (2011)',title:'Sulawesi collision tectonics: evolution and overview',journal:'Proc. JCM Makassar 2011, 36th HAGI / 40th IAGI Annual Convention',find:'Metamorfismo de core complex Mioceno en N Sulawesi, contemporáneo con la extensión post-colisional que abre Gorontalo Bay y Bone Gulf.'},
        ]
      }
    ]
  },

  'canon_csmb':{
    adopta:{
      desc:'Cinturón metamórfico de alta presión confinado a la parte central del brazo este, que incluye el Pompangeo Schist Complex y un complejo de mélange asociado. Resultado de la colisión entre fragmentos de origen Gondwana y el margen asiático activo en el Oligoceno tardío o Mioceno temprano — complejo de acreción formado durante el Cretácico y Paleógeno, sutura entre las partes occidental y oriental de Sulawesi. Los afloramientos forman masifs corrugados tipo core complex (Pompangeo Mountains y Tokorondo Mountains, ~2000 km², hasta 2.5 km de elevación) — footwalls desnudos de fallas de detachment extensional, visibles en SRTM. Por qué: el brazo norte se deforma por contrastes de energía potencial gravitatoria; el rollback hacia el norte de la losa del Mar de Célebes (subducción iniciada ~8 Ma) genera extensión de retroarco, con exhumación rápida de estos metamórficos sincrónica a la subsidencia rápida del Golfo de Gorontalo — proceso activo hoy, confirmado por GPS.',
      data:[
        {lbl:'Grado metamórfico',val:'Alta presión (HP)'},
        {lbl:'Edad emplazamiento',val:'~28 Ma'},
        {lbl:'Mecanismo',val:'Extensión Neógena (no colisión) — detachment extensional'},
        {lbl:'Litología',val:'Mármol, filita, esquisto cuarzo-micáceo, meta-conglomerado'},
        {lbl:'Causa (por qué)',val:'Rollback losa Mar de Célebes (~8 Ma) → extensión de retroarco'},
      ],
      refs:[
        {ref:'Baillie, P., & Decker, J. (2022)',title:'Enigmatic Sulawesi: The Tectonic Collage',journal:'Berita Sedimentologi, 48(1), 1–30. doi:10.51835/bsed.2022.48.1.388',find:'CSMB incluye Pompangeo Schist Complex + mélange (Parkinson 1998). Análisis SRTM revela masifs corrugados (Pompangeo, Tokorondo) interpretados como core complexes activos (Spencer 2010, 2011) — extensión, no colisión, es el mecanismo de formación de los domos. El brazo norte se deforma por contrastes de energía potencial gravitatoria: subducción del Mar de Célebes iniciada ~8 Ma (Hall, 2011), cuyo rollback hacia el norte causa extensión de retroarco y subsidencia rápida del Golfo de Gorontalo sincrónica con la exhumación rápida de estos metamórficos (Pholbud et al. 2012; Pezzati et al. 2014). GPS confirma que el proceso sigue activo (Hall, 2011).'},
        {ref:'Chen, K., & Serhalawan, Y. (2024)',title:'Seismotectonics of Sulawesi, Indonesia',journal:'Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366',find:'El Central Sulawesi Metamorphic Belt agrupa al Pompangeo Schist Complex (PSC) y al Mekongga Metamorphic Complex (MkMC) como sus componentes occidentales, de afinidad continental australiana, junto a un mélange ofiolítico en la juntura de los brazos Este y Sureste.'},
      ]
    }
  },

  'canon_mmc':{
    adopta:{
      desc:'Complejo metamórfico en la parte occidental del North Arm, cerca de Gorontalo Bay. Predominantemente esquisto y gneis cuarzo-feldespático, con intercalaciones de cuarcita, esquisto grafítico, marga y anfibolita; envuelto por una selvage discontinua de esquistos verdes. Interpretado como metamorphic core complex con extensión litosférica en el Mioceno Temprano–Medio (23–11 Ma); segunda fase de uplift extensional acomodada por fallas frágiles desde el Mioceno Tardío–Plioceno en adelante. Protolitos ígneos y sedimentarios son corteza continental antigua, probablemente de derivación australiana. Por qué: mismo motor que el CSMB — el North Arm se deforma por contrastes de energía potencial gravitatoria asociados al rollback de la losa del Mar de Célebes (subducción iniciada ~8 Ma), generando extensión de retroarco; la segunda fase de fallas frágiles Mioceno Tardío-Plioceno marca la continuación de ese mismo proceso extensional hasta el presente.',
      data:[
        {lbl:'Grado metamórfico',val:'Anfibolita'},
        {lbl:'Edad metamorfismo',val:'23–11 Ma (Mioceno Temprano–Medio)'},
        {lbl:'Mecanismo',val:'Core complex — extensión litosférica + 2ª fase de fallas frágiles'},
        {lbl:'Afinidad',val:'Continental, probable derivación australiana'},
        {lbl:'Causa (por qué)',val:'Rollback losa Mar de Célebes (~8 Ma) → extensión de retroarco'},
      ],
      refs:[
        {ref:'Baillie, P., & Decker, J. (2022)',title:'Enigmatic Sulawesi: The Tectonic Collage',journal:'Berita Sedimentologi, 48(1), 1–30. doi:10.51835/bsed.2022.48.1.388',find:'MMC: esquisto/gneis cuarzo-feldespático con selvage de esquistos verdes. Core complex con extensión litosférica Mioceno Temprano-Medio (23-11 Ma), segunda fase de uplift extensional Mioceno Tardío-Plioceno — misma extensión de retroarco por rollback del Mar de Célebes que afecta al CSMB. Protolitos de corteza continental antigua, probable derivación australiana (Advokaat et al. 2017).'},
      ]
    }
  },


  'canon_1919':{
    adopta:{
      desc:'La Placa del Mar de Filipinas subduce hacia el oeste bajo el Philippine Mobile Belt. La Fosa de Cotabato (sur de Mindanao, ~6.500 m) es la terminación meridional del sistema y el límite norte que condiciona la cinemática del extremo NE de Sulawesi. La oblicuidad de la convergencia genera la Philippine Fault Zone — falla transcurrente dextral de ~1.300 km que acomoda la componente paralela al arco (~25–35 mm/año). El bloque Manado (norte de Sulawesi) registra rotación horaria inducida por esta convergencia.',
      data:[
        {lbl:'Polaridad',val:'W-dipping — Philippine Sea Plate subduce hacia el oeste'},
        {lbl:'Tasa convergencia',val:'~80 mm/año (Socquet et al. 2006)'},
        {lbl:'Philippine Fault Zone',val:'Dextral, ~25–35 mm/año slip'},
        {lbl:'Profundidad máx. sismicidad',val:'~200 km (segmento Cotabato)'},
        {lbl:'Influencia en Sulawesi',val:'Rotación horaria bloque Manano; componente compresiva NE'},
      ],
      refs:[
        {ref:'Socquet et al. (2006)',title:'Microblock rotations and fault coupling in SE Asia triple junction (Sulawesi, Indonesia)',journal:'JGR: Solid Earth, 111(B8). doi:10.1029/2005JB003963',find:'Placa Filipinas: convergencia ~80 mm/año oblicua hacia el W. Philippine Fault Zone acomoda componente trench-parallel. Bloque Manado (norte Sulawesi) rota en sentido horario por efecto de la convergencia oblicua.'},
        {ref:'GEM Foundation (2023)',title:'GEM Global Active Faults Database',journal:'github.com/GEMScienceTools/gem-global-active-faults',find:'Fosa de Cotabato y sistema de subducción de Filipinas — zonas de subducción activas cuaternarias. Traza canónica utilizada en este mapa.'},
      ]
    },
    debate:[
      {desc:'Continuidad N-S del sistema: la Fosa de Cotabato (S Mindanao) y la Philippine Trench (E Filipinas) son frecuentemente tratadas como un sistema continuo, pero la geometría del slab y las tasas de convergencia difieren entre segmentos. El segmento Cotabato es menos estudiado que el Philippine Trench propiamente dicho.',refs:[
        {ref:'Socquet et al. (2006)',title:'Microblock rotations and fault coupling in SE Asia triple junction',journal:'JGR: Solid Earth, 111(B8). doi:10.1029/2005JB003963',find:'Modelo GPS diferencia el bloque Mindanao del Philippine Mobile Belt; la cinemática del segmento Cotabato es difícil de separar del movimiento del bloque Mindanao.'},
      ]},
    ],
  },
  'canon_1934':{
    adopta:{
      desc:'La Placa Indo-Australiana subduce hacia el norte bajo el Arco de Banda (Arco interno) y el bloque Sunda. La losa Banda tiene una curvatura excepcional de ~180° (spoon-shape), está confinada al manto superior con una sección subhorizontal a profundidad intermedia, e incluye material oceánico y subcontinental delaminado. El rollback del arco desde el Mioceno Medio (~15 Ma) generó la extensión del Mar de Banda y la apertura de la cuenca trasarco.',
      data:[
        {lbl:'Polaridad',val:'N-dipping — Indo-Australiana subduce hacia el norte'},
        {lbl:'Tasa convergencia',val:'~6–7 cm/año (hacia el NNE)'},
        {lbl:'Curvatura del arco',val:'~180° (spoon-shape, única en el mundo)'},
        {lbl:'Profundidad máx. slab',val:'~600+ km (Hall & Spakman 2015)'},
        {lbl:'Inicio rollback',val:'~15 Ma (Mioceno Medio)'},
        {lbl:'Inversión de polaridad',val:'Timor: N-dipping / Seram: S-dipping (Hua et al. 2023)'},
      ],
      refs:[
        {ref:'Hall & Spakman (2015)',title:'Mantle structure and tectonic history of SE Asia',journal:'Tectonophysics, 658, 14–45. doi:10.1016/j.tecto.2015.07.003',find:'Losa Banda confinada al manto superior; sección plana a profundidad intermedia incluye litósfera subcontinental delaminada. Tear prominente bajo Buru y Seram Oeste. Rollback en Banda embayment jurásico desde el Mioceno Medio.'},
        {ref:'Hua et al. (2023)',title:'P and S wave anisotropic tomography of the Banda subduction zone',journal:'Geophysical Research Letters, 50, e2023GL105611. doi:10.1029/2023GL105611',find:'Perfil B-B\' N-S: inversión de polaridad entre Timor (subducción N) y Seram (subducción S). Las dos ramas de la losa se unen en la zona de transición del manto formando estructura en cuña.'},
      ]
    },
    debate:[
      {desc:'Naturaleza del material subductado: la losa Banda incluye tanto litósfera oceánica como material continental delaminado de la margen australiana. Hall & Spakman (2015) identifican litósfera subcontinental en la sección subhorizontal a ~200–400 km; Hua et al. (2023) interpreta la inversión de polaridad Timor/Seram como dos ramas del mismo slab o como una discontinuidad mayor.',refs:[
        {ref:'Hall & Spakman (2015)',title:'Mantle structure and tectonic history of SE Asia',journal:'Tectonophysics, 658, 14–45. doi:10.1016/j.tecto.2015.07.003',find:'Sección plana a ~200–400 km: posible litósfera subcontinental australiana delaminada. El rollback en cuña embayment genera geometría de slab anómala respecto a otros arcos.'},
        {ref:'Hua et al. (2023)',title:'P and S wave anisotropic tomography of the Banda subduction zone',journal:'Geophysical Research Letters, 50, e2023GL105611. doi:10.1029/2023GL105611',find:'Dos ramas de la losa en contacto en la MTZ: ambigüedad sobre si representan un slab continuo con inversión de buzamiento o dos estructuras separadas.'},
      ]},
      {desc:'Estado actual de la subducción: hay debate sobre si la subducción activa de litósfera oceánica ha cesado (slab remnant) o continúa con material subcontinental australiano colisionando activamente. El frente de colisión Timor-Tanimbar documenta el avance de la margen australiana al arco.',refs:[
        {ref:'Hall & Spakman (2015)',title:'Mantle structure and tectonic history of SE Asia',journal:'Tectonophysics, 658, 14–45. doi:10.1016/j.tecto.2015.07.003',find:'Rollback Banda embayment: proceso activo o en transición a colisión. Análisis cinemático sugiere desaceleración del rollback por aproximación de litósfera continental australiana.'},
      ]},
    ],
  },

};

async function openCanonicalPanel(featId, fallbackFn){
  const canonId=FEAT_TO_CANONICAL[featId]||featId;
  if(!canonId||!canonId.startsWith('canon_')){if(fallbackFn)fallbackFn();return;}

  try{
    const [rCan, rFeats]=await Promise.all([
      fetch('/api/geodata/canonical?layerType='),
      fetch(`/api/geodata/canonical/${canonId}/features`)
    ]);
    const canData=await rCan.json();
    const featsData=await rFeats.json();

    const canon=(canData.features||[]).find(f=>f.properties.id===canonId);
    const nameEn=canon?.properties?.name||canonId;
    const nameEs=CANON_NOMBRE_ES[canonId]||nameEn;
    const lt=canon?.properties?.layer_type||'fault';
    const hasGeom=!!canon?.geometry;
    const sources=[...new Set((featsData.features||[]).map(f=>f.properties.source).filter(Boolean))];

    document.getElementById('pt').textContent=CANONICAL_KINEMATICS[lt]||lt;
    document.getElementById('pt').style.color='#c89040';
    document.getElementById('pti').textContent=nameEs;

    const debate=CANONICAL_DEBATES[canonId];
    let html=`${nameEs!==nameEn?`<div style="font-size:.55rem;color:var(--dim);margin:-4px 0 8px;font-style:italic">${nameEn}</div>`:''}
    <div class="ptags">
      <span class="ptag" style="color:#c89040;border-color:#c8904040;background:#c8904012">${sources.length} fuente${sources.length!==1?'s':''}</span>
      <span class="ptag" style="color:${hasGeom?'#22c55e':'#ef4444'};border-color:${hasGeom?'#22c55e40':'#ef444440'};background:${hasGeom?'#22c55e12':'#ef444412'}">${hasGeom?'✓ Geometría canónica':'✗ Sin geometría canónica'}</span>
    </div>`;

    if(debate){
      // "Este mapa adopta" — interpretación principal
      html+=`<div class="psec" style="color:#22c55e;border-color:#22c55e40">Este mapa adopta</div>
        <div class="pdesc" style="font-size:.63rem;line-height:1.6;margin-bottom:6px">${debate.adopta.desc}</div>`;

      if(debate.adopta.data?.length){
        html+=`<div style="display:grid;grid-template-columns:auto 1fr;gap:2px 8px;margin:6px 0 8px;font-family:monospace">`;
        debate.adopta.data.forEach(d=>{
          html+=`<div style="font-size:.59rem;color:var(--dim)">${d.lbl}</div>
            <div style="font-size:.59rem;color:var(--text);font-weight:bold">${d.val}</div>`;
        });
        html+=`</div>`;
      }

      if(debate.adopta.refs?.length){
        html+=`<div class="psec">Referencias</div>`;
        debate.adopta.refs.forEach(r=>html+=renderPaper(r));
      }

      if(debate.debate?.length){
        html+=`<button onclick="const b=document.getElementById('canon-debate-block');const op=b.style.display!=='none';b.style.display=op?'none':'block';this.querySelector('.dbtn-arrow').textContent=op?'▶':'▼';this.style.background=op?'rgba(249,115,22,0.08)':'rgba(249,115,22,0.18)'" style="width:100%;text-align:left;background:rgba(249,115,22,0.08);border:1px solid rgba(249,115,22,0.35);border-radius:4px;padding:6px 10px;cursor:pointer;font-family:monospace;font-size:.65rem;color:#f97316;margin:8px 0 4px;display:flex;align-items:center;gap:7px"><span class="dbtn-arrow">▶</span>En debate<span style="margin-left:auto;background:rgba(249,115,22,0.22);border-radius:3px;padding:1px 6px;font-size:.6rem">${debate.debate.length}</span></button>`;
        html+=`<div id="canon-debate-block" style="display:none">`;
        debate.debate.forEach((d,i)=>{
          html+=`<div style="margin-bottom:10px;padding:6px 8px;background:rgba(249,115,22,0.06);border-radius:4px;border-left:3px solid #f97316">
            <div style="font-size:.63rem;color:var(--text);line-height:1.6;margin-bottom:5px">${d.desc}</div>`;
          d.refs?.forEach(r=>html+=renderPaper(r));
          html+=`</div>`;
        });
        html+=`</div>`;
      }
    }

    // Fuentes cartográficas
    if(sources.length){
      html+=`<div class="psec">Fuentes cartográficas (${sources.length})</div>`;
      const COLS=['#60a5fa','#34d399','#f472b6','#a78bfa','#fb923c','#38bdf8','#e879f9'];
      sources.forEach((src,i)=>{
        const col=COLS[i%7];
        html+=`<div style="margin-bottom:4px;padding:4px 8px;background:var(--bg3);border-radius:4px;border-left:3px solid ${col}">
          <div style="font-size:.6rem;color:${col};font-family:monospace">${src}</div>
        </div>`;
      });
    }

    document.getElementById('pb').innerHTML=html;
    document.getElementById('panel').classList.remove('closed');
  }catch(e){
    console.warn('openCanonicalPanel:',e);
    if(fallbackFn)fallbackFn();
  }
}

function openSubPanel(feat){
  const sz=(feat&&feat.get?feat.get('subzone'):null)||'generic';
  const info=SUBZONE_INFO[sz]||SUBZONE_INFO['generic'];
  document.getElementById('pt').textContent=info.name;
  document.getElementById('pt').style.color='#111';
  document.getElementById('pti').textContent=info.subducting+' → '+info.overriding;
  let html=`<div class="ptags"><span class="ptag" style="color:#444;border-color:#44444440;background:#44444412">Zona de subducción</span><span class="ptag" style="color:#444;border-color:#44444440;background:#44444412">Simbología IUGS</span></div>
  <div class="psec">Placa subducente → Placa superior</div>
  <div class="pdesc"><b>${info.subducting}</b><br><span style="font-size:.75rem;color:var(--dim)">subduce ${info.direction} bajo</span><br><b>${info.overriding}</b></div>
  <div class="psec">Descripción</div>
  <div class="pdesc">${info.desc}</div>
  <div class="psec">Fuentes</div>`;
  (info.papers||[]).forEach(p=>{html+=renderPaper(p);});
  document.getElementById('pb').innerHTML=html;
  document.getElementById('panel').classList.remove('closed');
}

function openVolcPanel(feat){
  const pt=feat.get('volc_pvmbg')||'C';
  const ptDesc={A:'Tipo A — muy activo, registros históricos de erupción',B:'Tipo B — fumarolas/actividad hidrotérmica presente',C:'Tipo C — sin actividad histórica registrada'};
  const ptColor={A:'#ef4444',B:'#f97316',C:'#94a3b8'};
  document.getElementById('pt').textContent='Volcán — GVP + PVMBG';
  document.getElementById('pt').style.color=ptColor[pt];
  document.getElementById('pti').textContent=feat.get('volc_name');
  const html=`<div class="ptags">
    <span class="ptag" style="color:${ptColor[pt]};border-color:${ptColor[pt]}40;background:${ptColor[pt]}12">${ptDesc[pt]}</span>
    <span class="ptag" style="color:#ff6b35;border-color:#ff6b3540;background:#ff6b3512">${feat.get('volc_type')}</span>
    <span class="ptag" style="color:#ff6b35;border-color:#ff6b3540;background:#ff6b3512">Arco: ${feat.get('volc_arc')}</span>
    <span class="ptag" style="color:#ff6b35;border-color:#ff6b3540;background:#ff6b3512">Elev: ${feat.get('volc_elev')}m</span>
  </div>
  ${(()=>{
    const gc=CLOR_BY_VOLC[feat.get('volc_name')];
    if(!gc) return '';
    const sBar=gc.pct_S!=null?`<div style="margin:6px 0 2px;font-size:.6rem;color:var(--dim)">%S magmático-hidrotérmico</div>
      <div style="background:var(--bg3);border-radius:3px;height:6px;overflow:hidden;margin-bottom:4px">
        <div style="width:${gc.pct_S}%;height:100%;background:linear-gradient(90deg,#22d3ee,#ef4444)"></div>
      </div>
      <div style="font-size:.6rem;color:var(--dim);text-align:right">${gc.pct_S}%</div>`:'';
    const d15nLine=gc.d15N!=null?`<div style="font-size:.65rem;color:var(--dim);margin-top:4px">δ¹⁵N = ${gc.d15N}‰</div>`:'';
    return `<div class="psec">Geoquímica — Clor et al. (2005)</div>
    <div style="font-size:.65rem;color:var(--text);margin-bottom:6px">${gc.note}</div>
    ${sBar}${d15nLine}`;
  })()}
  <div class="psec">Fuentes</div>
  ${renderPaper({ref:'Global Volcanism Program (2025)',title:'Volcanoes of the World, v.5.3.5',journal:'Smithsonian Institution. doi:10.5479/si.GVP.VOTW5-2025.5.3',find:'Catálogo global de volcanes Holocenos. Posición, tipo, arco volcánico y registro eruptivo.'})}
  ${renderPaper({ref:'Pratama, B. B. et al. (2025)',title:'Probabilistic Feasibility Assessment (PFA) of Geothermal Resources in Sulawesi, Indonesia',journal:'SSRN preprint. doi:10.2139/ssrn.5104034',find:'Clasificación PVMBG (Tipos A/B/C) de volcanes de Sulawesi según actividad histórica y potencial geotérmico. Figura 4c.'})}
  ${CLOR_BY_VOLC[feat.get('volc_name')]?renderPaper({ref:'Clor, L. E. et al. (2005)',title:'Volcanic emissions and degassing styles at persistently active calderas: Perspectives from Ijen and Kelut volcanoes, Java, Indonesia',journal:'Geochemistry, Geophysics, Geosystems, 6(6). doi:10.1029/2005GC000870',find:'Geoquímica de gases volcánicos (H₂S, SO₂, CO₂, δ¹⁵N) en arcos Sangihe y Halmahera. %S como indicador del cociente magmático/meteórico del fluido.'}):''}`;
  document.getElementById('pb').innerHTML=html;
  document.getElementById('panel').classList.remove('closed');
}

function openCMTPanel(e){
  const ft=e.ft||faultType(e.r1);
  const ftN={T:'Thrust / Inversa',N:'Normal',S:'Transcurrente',O:'Oblicua'};
  const col=depthHex(e.de),dep=e.de;
  const grp=dep<33?'Cortical (<33 km)':dep<70?'Cortical (33–70 km)':dep<150?'Intermedio (70–150 km)':dep<300?'Intermedio (150–300 km)':'Profundo (>300 km)';
  document.getElementById('pt').textContent='Mecanismo Focal — GlobalCMT';
  document.getElementById('pt').style.color=col;
  document.getElementById('pti').textContent=`M${e.mw} · ${e.yr?e.yr+' · ':''}${e.label||'GlobalCMT'}`;
  let html=`<div class="ptags">
    <span class="ptag" style="color:${col};border-color:${col}40;background:${col}12">${ftN[ft]}</span>
    <span class="ptag" style="color:${col};border-color:${col}40;background:${col}12">${grp}</span>
    <span class="ptag" style="color:${col};border-color:${col}40;background:${col}12">M${e.mw}</span>
    ${e.mw>=7.8?'<span class="ptag" style="color:white;border-color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.1)">⚠ Evento Mayor</span>':''}
  </div>
  <div class="psec">Mecanismo Focal</div>
  <div style="display:flex;justify-content:center;margin:10px 0 16px">
    <canvas id="bb-canvas" width="140" height="140" style="border-radius:50%"></canvas>
  </div>
  <div class="psec">Planos Nodales</div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:12px;font-family:monospace;font-size:.6rem;color:var(--dim)">
    <div>Plano 1</div><div>Plano 2</div>
    <div style="color:var(--text)">Strike ${e.s1}°</div><div style="color:var(--text)">Strike ${e.s2}°</div>
    <div style="color:var(--text)">Dip ${e.d1}°</div><div style="color:var(--text)">Dip ${e.d2}°</div>
    <div style="color:var(--text)">Rake ${e.r1}°</div><div style="color:var(--text)">Rake ${e.r2}°</div>
  </div>
  <div class="psec">Localización</div>
  <div style="font-family:monospace;font-size:.6rem;color:var(--dim);margin-bottom:12px">
    ${e.yr?e.yr+' · ':''}${e.la>=0?e.la+'°N':Math.abs(e.la)+'°S'} · ${e.lo}°E · ${e.de} km prof.
  </div>
  ${renderPaper({ref:'Dziewonski et al. (1981) · Ekström et al. (2012)',title:'Global CMT Catalog',url:'https://www.globalcmt.org',journal:'JGR 86(B4); Phys. Earth Planet. Int. 200-201',find:'Catálogo GlobalCMT estándar desde 1976. M≥6.0.'})}
  ${e.srh?renderPaper({ref:'Serhalawan & Chen (2024)',title:'Seismotectonics of Sulawesi, Indonesia',journal:'Tectonophysics, 883, 230366. doi:10.1016/j.tecto.2024.230366',find:'Sismo histórico destacado en el análisis sismotectónico de Sulawesi. Coulomb stress transfer y contexto sismogénico regional.'}):''}`;
  document.getElementById('pb').innerHTML=html;
  document.getElementById('panel').classList.remove('closed');
  requestAnimationFrame(()=>{
    const cv=document.getElementById('bb-canvas');
    if(cv)drawBeachballPanel(cv,e.s1,e.d1,e.r1,depthColor(e.de));
  });
}

// LAYER TOGGLES
function multiLayer(layers){
  return{
    getVisible(){return layers.some(l=>l.getVisible());},
    setVisible(v){layers.forEach(l=>l.setVisible(v));},
    getLayersArray(){return layers;}
  };
}
const layerObjs={
  // Fondo
  satellite:   esriSat,
  esri_hybrid: multiLayer([esriHybridBase,esriHybridLabels]),
  open_topo:   openTopoLayer,
  gebco_color: gebcoColor,
  // Base tectónica
  canon_labels: canonLabelLayer,
  tect_sub:  tectSubLayer,
  tect_key:  multiLayer([tectKeyLayer,birdKeyFaultLayer]),
  // S1
  vel_s1:    multiLayer([gpsLayer,plateVelLayer]),
  gps_vel:   gpsLayer,
  plate_vel: plateVelLayer,
  // S2
  seismicity:  cmtLayer,
  gaps:        seismicGapLayer,
  clusters:    multiLayer([jibranLayer,srhClusterLayer]),
  // S3
  srh_secs:    srhSecLayer,
  // S4
  grav_bouguer:gravBouguerLayer,
  grav_freeair:gravFreeairLayer,
  height_anom: heightAnomLayer,
  // S5
  volcanoes:     volcLayer,
  manif_pratama: manifLayer,
  cpd_pratama:   cpdLayer,
  ref_cpd_pratama: cpdLayer,
  geothermal:    geothLayer,
  // S6
  new_faults:    newFaultLayer,
  hikmy_structs: multiLayer([hikmyFaultLayer,hikmyBeltLayer,hikmyPointLayer]),
  palu_basin:{getVisible(){return _paluBasinVis;},setVisible(v){_paluBasinVis=v;mergedGeomLayer.changed();}},
  ofiolitas:{getVisible(){return _ofiolitasVis;},setVisible(v){_ofiolitasVis=v;mergedGeomLayer.changed();}},
  core_complexes:{getVisible(){return _coreComplexVis;},setVisible(v){_coreComplexVis=v;mergedGeomLayer.changed();}},
  // Verificación S1
  ref_baillie:refBaillieLayer, ref_socquet:refSocquetLayer, ref_walpersdorf:refWalpersdorfLayer,
  ref_satyana_ipa:refSatyanaIpaLayer, ref_satyana_iagi:refSatyanaIagiLayer, ref_surono:refSuronoLayer,
  // Verificación S2
  ref_serhalawan:refSerhalawanLayer, ref_cipta:refCiptaLayer, ref_jibran:refJibranLayer,
  ref_nataw:refNatawLayer, ref_nataw_inland:refNatawInlandLayer, ref_nataw2020:refNataw2020Layer,
  ref_greenfield:refGreenfieldLayer, ref_jayadi:refJayadiLayer,
  // Verificación S3
  ref_hua:refHuaLayer, ref_cao:refCaoLayer, ref_yuan:refYuanLayer,
  ref_heryandoko:refHeryandokoLayer,
  ref_sup_010:refSup010Layer, ref_sup_020:refSup020Layer, ref_sup_040:refSup040Layer,
  ref_sup_060:refSup060Layer, ref_sup_080:refSup080Layer, ref_sup_100:refSup100Layer,
  ref_sup_120:refSup120Layer, ref_sup_150:refSup150Layer, ref_sup_200:refSup200Layer,
  ref_yuan_100:refYuanAnis100Layer, ref_yuan_200:refYuanAnis200Layer, ref_yuan_300:refYuanAnis300Layer,
  ref_yuan_400:refYuanAnis400Layer, ref_yuan_500:refYuanAnis500Layer, ref_yuan_600:refYuanAnis600Layer,
  ref_liu:refLiuLayer, ref_dileo:refDileoLayer, ref_lestari:refLestariLayer,
  // Verificación S4/S5/S6
  ref_shih:refShihLayer, ref_pratama:refPratamaLayer,
  ref_lukman:refLukmanLayer,
};

// FLOATING LEGEND — muestra caracterización de colores/trazas solo para capas activas
const _L=s=>`<span class="fleg-line" style="background:${s}"></span>`;
const _D=s=>`<span class="fleg-dot" style="background:${s}"></span>`;
const _S=(s,o='.35')=>`<span class="fleg-sq" style="background:${s};opacity:${o}"></span>`;
const _G=(a,b)=>`<span style="display:inline-block;width:90px;height:8px;border-radius:2px;background:linear-gradient(to right,${a})"></span>`;
const LEGEND_DEF={
  petrotect:{title:'S7 — Unidades petrotectónicas',rows:[
    {s:`<span style="display:inline-block;width:12px;height:12px;background:#2d6a2728;border:1.5px solid #2d6a27;border-radius:2px"></span>`,l:'Ofiolita'},
    {s:`<span style="display:inline-block;width:12px;height:12px;background:#8b202028;border:1.5px solid #8b2020;border-radius:2px"></span>`,l:'Arco volcánico'},
    {s:`<span style="display:inline-block;width:12px;height:12px;background:#8a6d0028;border:1.5px solid #8a6d00;border-radius:2px"></span>`,l:'Terreno continental'},
    {s:`<span style="display:inline-block;width:12px;height:12px;background:#5b2c6f28;border:1.5px solid #5b2c6f;border-radius:2px"></span>`,l:'Complejo metamórfico'},
  ]},
  tect_sub:{title:'S1 — Subducción (IUGS)',rows:[
    {s:'<svg viewBox="0 0 22 10" width="22" height="10"><line x1="0" y1="5" x2="22" y2="5" stroke="#111" stroke-width="2"/><polygon points="5,5 9,1 9,9" fill="#111"/><polygon points="15,5 19,1 19,9" fill="#111"/></svg>',l:'Zona de subducción'}
  ]},
  tect_key:{title:'S1 — Fallas límite de placa (IUGS)',rows:[
    {s:_L('#111'),l:'Falla de rumbo (PKF · Matano)'},
    {s:'<svg viewBox="0 0 22 10" width="22" height="10"><line x1="0" y1="5" x2="22" y2="5" stroke="#111" stroke-width="1.5"/><polygon points="4,5 8,1 8,9" fill="none" stroke="#111" stroke-width="1"/><polygon points="18,5 14,1 14,9" fill="none" stroke="#111" stroke-width="1"/></svg>',l:'Thrust (Tolo)'}
  ]},
  vel_s1:{title:'S1 — Velocidades de placa',rows:[
    {s:_D('rgba(34,197,94,0.92)'),l:'GPS medidas — Socquet (2006) · Walpersdorf (1998) · Irsyam (2020)'},
    {s:_D('rgba(56,189,248,0.84)'),l:'MORVEL56 relativo a Sundaland — DeMets et al. (2010)'},
  ]},
  seismicity:{title:'S2 — Sismicidad (GCMT)',rows:[
    {s:_D('#ffdd2c'),l:'< 33 km'},{s:_D('#e47820'),l:'33–70 km'},{s:_D('#28b460'),l:'70–150 km'},{s:_D('#3088dc'),l:'150–300 km'},{s:_D('#aa44c8'),l:'> 300 km'}
  ]},
  gaps:{title:'S2 — Gaps sísmicos',rows:[
    {s:_S('#ffaa00','.4'),l:'Gap NST'},{s:_S('#c85040','.3'),l:'Gap interplaca'}
  ]},
  clusters:{title:'S2 — Regímenes tectónicos (Jibran 2025)',rows:[
    {s:_S('#c85040','.25'),l:'Compresional'},{s:_S('#c89040','.25'),l:'Transformante'},{s:_S('#4888cc','.25'),l:'Extensional'}
  ]},
  srh_secs:{title:'S3 — Perfiles tomográficos (Serhalawan, Hua, Hall, Supendi)',rows:[
    {s:_L('#7060b0',1.8,'6,4'),l:'Perfil tomográfico'}
  ]},
  grav_bouguer:{title:'S4 — Bouguer WGM2012',rows:[
    {s:_G('#053061,#2166ac,#92c5de,#f7f7f7,#f4a582,#d6604d,#b2182b'),l:''},{s:'',l:'−261 ← 0 → +486 mGal'}
  ]},
  grav_freeair:{title:'S4 — Aire libre EGM2008',rows:[
    {s:_G('#053061,#2166ac,#92c5de,#f7f7f7,#f4a582,#d6604d,#b2182b'),l:''},{s:'',l:'−285 ← 0 → +579 mGal'}
  ]},
  height_anom:{title:'S4 — Geoide INAGEOID2020',rows:[
    {s:_G('#2166ac,#92c5de,#f7f7f7,#f4a582,#b2182b'),l:''},{s:'',l:'−63 m (azul) → 0 m (blanco) → +88 m (rojo) sobre GRS80'}
  ]},
  volcanoes:{title:'S5 — Volcanes Holocenos GVP · Clasificación PVMBG',rows:[
    {s:'<svg viewBox="0 0 10 10" width="10" height="10"><polygon points="5,0 10,10 0,10" fill="#ef4444"/></svg>',l:'Tipo A — muy activo, registros históricos'},
    {s:'<svg viewBox="0 0 10 10" width="10" height="10"><polygon points="5,0 10,10 0,10" fill="#f97316"/></svg>',l:'Tipo B — fumarolas / hidrotérmico activo'},
    {s:'<svg viewBox="0 0 10 10" width="10" height="10"><polygon points="5,0 10,10 0,10" fill="#94a3b8"/></svg>',l:'Tipo C — sin actividad registrada (GVP Holoceno)'}
  ]},
  manif_pratama:{title:'S5 — Manifestaciones geotérmicas (Pratama 2025)',rows:[
    {s:_D('#ef4444'),l:'Fumarola + Terma (6 puntos)'},
    {s:_D('#60a5fa'),l:'Terma (23 puntos)'}
  ]},
  cpd_pratama:{title:'S5 — Curie Point Depth (Pratama 2025)',rows:[
    {s:_G('#053061,#2166ac,#4393c3,#92c5de,#f7f7f7,#fdd49e,#ef6548,#b2182b'),l:''},{s:'',l:'Somero (caliente) ← → Profundo (frío)'}
  ]},
  geothermal:{title:'S5 — Campos geotérmicos',rows:[
    {s:'<svg viewBox="0 0 10 10" width="10" height="10"><rect x="2" y="2" width="6" height="6" fill="#f59e0b" transform="rotate(45,5,5)"/></svg>',l:'Operacional'},
    {s:'<svg viewBox="0 0 10 10" width="10" height="10"><rect x="2" y="2" width="6" height="6" fill="#a78bfa" transform="rotate(45,5,5)"/></svg>',l:'Prospecto'}
  ]},
  new_faults:{title:'S6 — Fallas activas Serhalawan & Chen 2024',rows:[
    {s:_L('#c84070'),l:'Thrust (MST · Batui)'},{s:_L('#c89040'),l:'Transcurrente'}
  ]},
  hikmy_structs:{title:'S6 — Brazo este (Hikmy 2025)',rows:[
    {s:_S('#8a6d00','.3'),l:'Cinturón Batui'},{s:_L('#111'),l:'Thrust activo'},
    {s:'<svg viewBox="0 0 24 12" width="24" height="12"><line x1="0" y1="6" x2="24" y2="6" stroke="#111" stroke-width="1.8"/><line x1="8" y1="6" x2="8" y2="12" stroke="#111" stroke-width="1.6"/><line x1="16" y1="6" x2="16" y2="12" stroke="#111" stroke-width="1.6"/></svg>',l:'Falla normal (Lobu-Balolang)'},
    {s:'<svg viewBox="0 0 10 10" width="10" height="10"><circle cx="5" cy="5" r="4" fill="#60a5fa"/></svg>',l:'Tasa de uplift'}
  ]},
};
function updateFloatingLegend(){
  const ORDER=[
    'tect_sub','tect_key','vel_s1',
    'seismicity','gaps','clusters',
    'srh_secs',
    'grav_bouguer','grav_freeair','height_anom',
    'volcanoes','manif_pratama','cpd_pratama','geothermal',
    'new_faults','hikmy_structs',
  ];
  let html='';
  for(const key of ORDER){
    const lyr=layerObjs[key],def=LEGEND_DEF[key];
    if(!lyr||!def||!lyr.getVisible())continue;
    html+=`<div class="fleg-sec"><div class="fleg-title">${def.title}</div>`;
    for(const row of def.rows)html+=`<div class="fleg-row">${row.s}<span>${row.l}</span></div>`;
    html+='</div>';
  }
  const fleg=document.getElementById('fleg');
  fleg.innerHTML=html;fleg.style.display=html?'block':'none';
}

// ── GEOREF INTERACTIVO — mover capas de referencia con teclado ───────────────
const REF_LAYERS_DATA = {
  ref_baillie:      {url:'data/sections/baillie_2022_sulawesi/baillie_2022_fig2_geo_map.png',              ext:[...D.ref_baillie],      label:'Baillie 2022'},
  ref_socquet:      {url:'data/sections/socquet_2006_gps_kinematics/socquet_2006_fig1_tectonic.png',       ext:[...D.ref_socquet],      label:'Socquet 2006'},
  ref_walpersdorf:  {url:'data/sections/walpersdorf_1998_n_sulawesi_gps/walpersdorf_1998_n_sulawesi_gps_fig1_map.png', ext:[...D.ref_walpersdorf], label:'Walpersdorf 1998'},
  ref_satyana_ipa:  {url:'data/sections/satyana_2011_ipa_collision/satyana_2011_ipa_collision_fig1_map.png', ext:[...D.ref_satyana_ipa], label:'Satyana 2011 IPA'},
  ref_satyana_iagi: {url:'data/sections/satyana_2011_iagi_evolution/satyana_2011_iagi_evolution_fig2_map.png', ext:[...D.ref_satyana_iagi], label:'Satyana 2011 IAGI'},
  ref_surono:       {url:'data/sections/surono_2012_tectonoestratigrafia/surono_2012_tectonoestratigrafia_fig1_map.png', ext:[...D.ref_surono], label:'Surono 2012'},
  ref_serhalawan:   {url:'data/sections/serhalawan_chen_2024/serhalawan_2024_fig1b_sulawesi.png',           ext:[...D.ref_serhalawan],   label:'Serhalawan 2024'},
  ref_cipta:        {url:'data/sections/cipta_2016_sulawesi_psha/cipta_2016_sulawesi_psha_fig1_map.png',    ext:[...D.ref_cipta],        label:'Cipta 2016'},
  ref_jibran:       {url:'data/sections/jibran_2025_sulawesi_tectonic_regimes/jibran_2025_sulawesi_tectonic_regimes_fig1_map.png', ext:[...D.ref_jibran], label:'Jibran 2025'},
  ref_nataw:        {url:'data/sections/natawidjaja_2021_pkf_lidar/natawidjaja_2021_fig3_fault_map.png',    ext:[...D.ref_nataw],        label:'Natawidjaja 2021 Fig.3'},
  ref_nataw_inland: {url:'data/sections/natawidjaja_2021_pkf_lidar/natawidjaja_2021_fig6_inland.png',       ext:[...D.ref_nataw_inland], label:'Natawidjaja 2021 Fig.6'},
  ref_nataw2020:    {url:'data/sections/natawidjaja_2020_palu_rupture/natawidjaja_2020_palu_rupture_fig1_map.png', ext:[...D.ref_nataw2020], label:'Natawidjaja 2020'},
  ref_greenfield:   {url:'data/sections/greenfield_2021_n_sulawesi_megathrust/greenfield_2021_n_sulawesi_megathrust_fig1_map.png', ext:[...D.ref_greenfield], label:'Greenfield 2021'},
  ref_jayadi:       {url:'data/sections/jayadi_2023_pkf_tomo/jayadi_2023_pkf_tomo_fig1_map.png',            ext:[...D.ref_jayadi],       label:'Jayadi 2023'},
  ref_hua:          {url:'data/sections/hua2023_banda_sulawesi/hua_panel_a_2005x824.png',                    ext:[...D.ref_hua],          label:'Hua 2023 panel-a'},
  ref_cao:          {url:'data/sections/cao_2024_sula_mantle/cao_2024_sula_mantle_fig1_map.png',             ext:[...D.ref_cao],          label:'Cao 2024'},
  ref_yuan:         {url:'data/sections/yuan_2024_molucca_mantle_flow/yuan_2024_molucca_mantle_flow_fig1_map.png', ext:[...D.ref_yuan],   label:'Yuan 2024'},
  ref_yuan_100:     {url:'data/sections/yuan_2024_molucca_mantle_flow/yuan_2024_fig9_slice_100km.webp', ext:[...D.ref_yuan_100], label:'Yuan 2024 100 km'},
  ref_yuan_200:     {url:'data/sections/yuan_2024_molucca_mantle_flow/yuan_2024_fig9_slice_200km.webp', ext:[...D.ref_yuan_200], label:'Yuan 2024 200 km'},
  ref_yuan_300:     {url:'data/sections/yuan_2024_molucca_mantle_flow/yuan_2024_fig9_slice_300km.webp', ext:[...D.ref_yuan_300], label:'Yuan 2024 300 km'},
  ref_yuan_400:     {url:'data/sections/yuan_2024_molucca_mantle_flow/yuan_2024_fig9_slice_400km.webp', ext:[...D.ref_yuan_400], label:'Yuan 2024 400 km'},
  ref_yuan_500:     {url:'data/sections/yuan_2024_molucca_mantle_flow/yuan_2024_fig9_slice_500km.webp', ext:[...D.ref_yuan_500], label:'Yuan 2024 500 km'},
  ref_yuan_600:     {url:'data/sections/yuan_2024_molucca_mantle_flow/yuan_2024_fig9_slice_600km.webp', ext:[...D.ref_yuan_600], label:'Yuan 2024 600 km'},
  ref_heryandoko:   {url:'data/sections/heryandoko_2024_ant_crustal/heryandoko_2024_ant_crustal_fig1_map.png', ext:[...D.ref_heryandoko], label:'Heryandoko 2024'},
  ref_sup_010:{url:'data/sections/supendi_2024_sulawesi_tomo/slice_010km.webp',ext:[...D.ref_sup_010],label:'Supendi  10 km'},
  ref_sup_020:{url:'data/sections/supendi_2024_sulawesi_tomo/slice_020km.webp',ext:[...D.ref_sup_020],label:'Supendi  20 km'},
  ref_sup_040:{url:'data/sections/supendi_2024_sulawesi_tomo/slice_040km.webp',ext:[...D.ref_sup_040],label:'Supendi  40 km'},
  ref_sup_060:{url:'data/sections/supendi_2024_sulawesi_tomo/slice_060km.webp',ext:[...D.ref_sup_060],label:'Supendi  60 km'},
  ref_sup_080:{url:'data/sections/supendi_2024_sulawesi_tomo/slice_080km.webp',ext:[...D.ref_sup_080],label:'Supendi  80 km'},
  ref_sup_100:{url:'data/sections/supendi_2024_sulawesi_tomo/slice_100km.webp',ext:[...D.ref_sup_100],label:'Supendi 100 km'},
  ref_sup_120:{url:'data/sections/supendi_2024_sulawesi_tomo/slice_120km.webp',ext:[...D.ref_sup_120],label:'Supendi 120 km'},
  ref_sup_150:{url:'data/sections/supendi_2024_sulawesi_tomo/slice_150km.webp',ext:[...D.ref_sup_150],label:'Supendi 150 km'},
  ref_sup_200:{url:'data/sections/supendi_2024_sulawesi_tomo/slice_200km.webp',ext:[...D.ref_sup_200],label:'Supendi 200 km'},
  ref_liu:          {url:'data/sections/liu_2026_indonesia_swave_tomo/liu_2026_indonesia_swave_tomo_fig1_map.png', ext:[...D.ref_liu],    label:'Liu 2026'},
  ref_dileo:        {url:'data/sections/di_leo_2012_indonesia_mantle/di_leo_2012_indonesia_mantle_fig1_map.png', ext:[...D.ref_dileo],   label:'Di Leo 2012'},
  ref_lestari:      {url:'data/sections/lestari_2021_pwave_tomo/lestari_2021_pwave_tomo_fig1_map.png',      ext:[...D.ref_lestari],      label:'Lestari 2021'},
  ref_shih:         {url:'data/sections/shih_2026_geoid_sulawesi/shih_2026_geoid_sulawesi_fig1_map.png',     ext:[...D.ref_shih],         label:'Shih 2026'},
  ref_pratama:      {url:'data/sections/pratama_2025_pfa_geothermal/pratama_2025_pfa_geothermal_fig1_map.png', ext:[...D.ref_pratama],  label:'Pratama 2025'},
  ref_cpd_pratama:  {url:'data/sections/pratama_2025/cpd_panel_d_only.png', ext:[...D.ref_cpd_pratama], label:'CPD Pratama 2025 (panel d)'},
  ref_lukman:       {url:'data/sections/lukman_2016_matano/lukman_2016_fig1_map.png',                        ext:[...D.ref_lukman],       label:'Lukman 2016'},
};

let activeRefKey = null;
const GEOREF_LS_KEY = 'sulawesi_georef_extents_v1';

// Cargar extents al iniciar: primero intenta el archivo JSON, luego localStorage
(function loadSavedExtents(){
  // 1. Intentar localStorage (cambios de la sesión actual)
  try {
    const saved = JSON.parse(localStorage.getItem(GEOREF_LS_KEY)||'{}');
    for(const [k,ext] of Object.entries(saved)){
      if(REF_LAYERS_DATA[k]) REF_LAYERS_DATA[k].ext = ext;
    }
  } catch(e){}
  // 2. Si existe el archivo guardado, tiene prioridad (sobreescribe localStorage)
  fetch('data/georef_extents.json', {cache:'no-cache'})
    .then(r => r.ok ? r.json() : null)
    .then(data => {
      if(!data) return;
      for(const [k,v] of Object.entries(data)){
        const ext = Array.isArray(v) ? v : v.ext;
        if(REF_LAYERS_DATA[k] && ext) {
          REF_LAYERS_DATA[k].ext = ext;
          applyRefExtent(k);  // re-aplicar si la capa ya existe
        }
      }
    })
    .catch(()=>{});
})();

