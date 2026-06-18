// Capa de previsualización de features por canonical (fe_15)
const canonPreviewSource=new ol.source.Vector();
const PREVIEW_COLORS=['#60a5fa','#34d399','#f472b6','#a78bfa','#fb923c','#38bdf8','#e879f9'];
let _previewColorIdx=0;
const canonPreviewLayer=new ol.layer.Vector({
  source:canonPreviewSource,
  style:feat=>{
    const col=feat.get('_color')||'#60a5fa';
    const lbl=feat.get('source')||'';
    const gt=feat.getGeometry()&&feat.getGeometry().getType();
    const isLine=gt==='LineString'||gt==='MultiLineString';
    return[
      new ol.style.Style({
        stroke:new ol.style.Stroke({color:col,width:1.8}),
        image:new ol.style.Circle({radius:4,fill:new ol.style.Fill({color:col})})
      }),
      new ol.style.Style({text:new ol.style.Text({
        text:lbl,font:'bold 9px monospace',
        fill:new ol.style.Fill({color:col}),
        stroke:new ol.style.Stroke({color:'rgba(0,0,0,.85)',width:3}),
        overflow:true,placement:isLine?'line':'point',offsetY:isLine?0:-12
      })})
    ];
  },
  zIndex:60
});
// NEW FAULTS LAYER — Serhalawan & Chen (2024)
const newFaultFeatures = Object.values(NEW_FAULTS)
  .filter(f => f.type !== 'hazard_zone' && !DEDUP_HIDDEN.has(f.id))
  .map(f => {
    const feat = new ol.Feature({
      geometry: new ol.geom.LineString(lc(f.coords)),
      feat_id: f.id, feat_type: f.sym === 'thrust' ? 'new_thrust' : 'new_fault',
      fault_id: f.id, slip_type: f.type,
      feat_name: f.name, sym: f.sym || 'strikeslip',
      fault_color: f.color, fault_flip: f.flip || false,
      fault_width: f.width || 1.8
    });
    return feat;
  });

const newFaultLayer = new ol.layer.Vector({
  visible:false,
  source: new ol.source.Vector({features: newFaultFeatures}),
  style: newFaultStyleFn
});// SEISMIC GAP LAYER

const seismicGapSource = new ol.source.Vector();
const seismicGapLayer = new ol.layer.Vector({
  visible:false,
  source: seismicGapSource,
  style: new ol.style.Style({
    fill: new ol.style.Fill({color: 'rgba(255,170,0,0.12)'}),
    stroke: new ol.style.Stroke({color: '#ffaa00', width: 1.5, lineDash: [6,4]})
  })
});

// ── YUAN 2024 — fuentes/ inlined ─────────────────────────────────────────────

const YUAN_2024 = {type:"FeatureCollection",features:[
  {type:"Feature",geometry:{type:"Point",coordinates:[125.0,1.5]},properties:{id:"aniso_yuan_2024_featureA",feat_type:"yuan_point",feat_name:"Flujo Sangihe — trench-normal",azimuth:90}},
  {type:"Feature",geometry:{type:"LineString",coordinates:[[129.0,-4.5],[127.5,-2.5],[126.5,-1.0],[125.5,0.5]]},properties:{id:"aniso_yuan_2024_featureB",feat_type:"yuan_flow",feat_name:"Flujo NW — extrusión Banda arc",azimuth:315}},
  {type:"Feature",geometry:{type:"LineString",coordinates:[[130.5,-3.5],[129.0,-2.5],[127.5,-1.5],[126.0,-0.5],[124.5,0.5]]},properties:{id:"aniso_yuan_2024_featureC",feat_type:"yuan_flow",feat_name:"Flujo E-W — Seram-Buru-Sulawesi",azimuth:90}},
  {type:"Feature",geometry:{type:"Point",coordinates:[121.0,-1.5]},properties:{id:"aniso_yuan_2024_featureD",feat_type:"yuan_point",feat_name:"Convección BMW — Java → Sangihe",azimuth:0}},
  {type:"Feature",geometry:{type:"Point",coordinates:[128.5,1.0]},properties:{id:"aniso_yuan_2024_featureE",feat_type:"yuan_point",feat_name:"Flujo toroidal — losa Halmahera",azimuth:270}},
  {type:"Feature",geometry:{type:"Point",coordinates:[124.2,1.8]},properties:{id:"geo_yuan_2024_celebes_barrier",feat_type:"yuan_point",feat_name:"Losa Célebes — barrera mantélica"}}
]};

function hikmyStyleFn(feature, resolution) {
  const geomType = feature.getGeometry().getType();
  if (geomType === 'Polygon') {
    // Cinturón de cabalgamientos — marrón-oliva cartográfico (conv. fold-thrust belt)
    return new ol.style.Style({
      fill:   new ol.style.Fill({color:'rgba(138,109,0,0.10)'}),
      stroke: new ol.style.Stroke({color:'#8a6d00', width:1.2, lineDash:[5,4]})
    });
  }
  if (geomType === 'Point') {
    // Tasa de levantamiento — azul (dato geomorfológico, distinto de fallas)
    return new ol.style.Style({
      image: new ol.style.Circle({radius:7,
        fill:   new ol.style.Fill({color:'#60a5fa'}),
        stroke: new ol.style.Stroke({color:'rgba(0,0,0,0.55)', width:1})})
    });
  }
  const ft    = feature.get('fault_type') || 'thrust';
  const styles = [new ol.style.Style({stroke: new ol.style.Stroke({color:'#111', width:2.2, lineCap:'round'})})];
  const coords = feature.getGeometry().getCoordinates();
  if (ft === 'thrust') {
    const sz    = resolution * 10;
    const step  = Math.max(1, Math.round(coords.length / 3));
    for (let i = 0; i < coords.length - 1; i += step) {
      const poly = toothPolygon(coords[i], coords[i+1], sz, false);
      if (poly) styles.push(new ol.style.Style({
        geometry: new ol.geom.Polygon([poly]),
        fill:   new ol.style.Fill({color:'rgba(0,0,0,0)'}),
        stroke: new ol.style.Stroke({color:'#111', width:1.2})
      }));
    }
  } else if (ft === 'normal') {
    const flip = feature.get('fault_flip') || false;
    styles.push(...normalTicks(coords, resolution, flip));
  }
  return styles;
}

function yuanStyleFn(feature, resolution) {
  const geomType = feature.getGeometry().getType();
  const color = '#7060b0';
  if (geomType === 'Point') {
    return new ol.style.Style({
      image: new ol.style.Circle({radius:6,
        fill:   new ol.style.Fill({color:'rgba(112,96,176,0.85)'}),
        stroke: new ol.style.Stroke({color:'rgba(0,0,0,0.4)', width:1})})
    });
  }
  const coords = feature.getGeometry().getCoordinates();
  const styles = [new ol.style.Style({stroke: new ol.style.Stroke({color, width:2, lineDash:[8,5], lineCap:'round'})})];
  if (coords.length >= 2) {
    const poly = toothPolygon(coords[coords.length-2], coords[coords.length-1], resolution*13, false);
    if (poly) styles.push(new ol.style.Style({
      geometry: new ol.geom.Polygon([poly]),
      fill:   new ol.style.Fill({color}),
      stroke: new ol.style.Stroke({color, width:1})
    }));
  }
  return styles;
}

function buildFeature(f) {
  const p = f.properties, g = f.geometry;
  let geom;
  if      (g.type === 'Point')      geom = new ol.geom.Point(fromLL(g.coordinates));
  else if (g.type === 'LineString') geom = new ol.geom.LineString(lc(g.coordinates));
  else                              geom = new ol.geom.Polygon([lc(g.coordinates[0])]);
  return new ol.Feature(Object.assign({geometry: geom}, p));
}

const hikmyBeltSource  = new ol.source.Vector();
const hikmyFaultSource = new ol.source.Vector();
const hikmyPointSource = new ol.source.Vector();
// ── Por tipo de geometría: Polígonos ─────────────────────────────────────────
const hikmyBeltLayer = new ol.layer.Vector({visible:false,source:hikmyBeltSource,style:hikmyStyleFn});
// ── Líneas ───────────────────────────────────────────────────────────────────
const hikmyFaultLayer = new ol.layer.Vector({visible:false,source:hikmyFaultSource,style:hikmyStyleFn});
const yuanFlowLayer = new ol.layer.Vector({
  visible: false,
  source: new ol.source.Vector({features: YUAN_2024.features
    .filter(f => f.properties.feat_type === 'yuan_flow').map(buildFeature)}),
  style: yuanStyleFn
});
// ── Puntos ───────────────────────────────────────────────────────────────────
const hikmyPointLayer = new ol.layer.Vector({visible:false,source:hikmyPointSource,style:hikmyStyleFn});
const yuanPointLayer = new ol.layer.Vector({
  visible: false,
  source: new ol.source.Vector({features: YUAN_2024.features
    .filter(f => f.properties.feat_type === 'yuan_point').map(buildFeature)}),
  style: yuanStyleFn
});

// ── DI LEO 2012 — SKS splitting stations ─────────────────────────────────────
const DI_LEO_2012 = {type:"FeatureCollection",features:[
  {type:"Feature",geometry:{type:"Point",coordinates:[120.27,-4.44]},properties:{id:"dileo_2012_kapi",feat_type:"dileo_sks",station_name:"KAPI",fast_axis_deg:90,delay_time_s:1.13,flow_style:"corner_flow",feat_name:"KAPI — corner flow SW Sulawesi (dt=1.13 s)"}},
  {type:"Feature",geometry:{type:"Point",coordinates:[122.52,-3.97]},properties:{id:"dileo_2012_kdi",feat_type:"dileo_sks",station_name:"KDI",fast_axis_deg:45,delay_time_s:1.35,flow_style:"corner_flow",feat_name:"KDI — corner flow SE Sulawesi (dt=1.35 s)"}},
  {type:"Feature",geometry:{type:"Point",coordinates:[120.79,1.12]},properties:{id:"dileo_2012_toli",feat_type:"dileo_sks",station_name:"TOLI",fast_axis_deg:null,delay_time_s:1.25,flow_style:"lateral_extrusion",feat_name:"TOLI — extrusión lateral Molucas N Sulawesi (dt=1.25 s)"}},
  {type:"Feature",geometry:{type:"Point",coordinates:[122.79,-0.93]},properties:{id:"dileo_2012_luwi",feat_type:"dileo_sks",station_name:"LUWI",fast_axis_deg:null,delay_time_s:1.30,flow_style:"lateral_extrusion",feat_name:"LUWI — extrusión lateral Molucas brazo E (dt=1.30 s)"}},
  {type:"Feature",geometry:{type:"Point",coordinates:[119.85,-0.52]},properties:{id:"dileo_2012_pci",feat_type:"dileo_sks",station_name:"PCI",fast_axis_deg:null,delay_time_s:0.98,flow_style:"toroidal_slab_edge",feat_name:"PCI — toroidal borde SE losa Célebes (dt=0.98 s)"}}
]};

function diLeoStyleFn(feature) {
  const deg = feature.get('fast_axis_deg');
  const dt  = feature.get('delay_time_s') || 1.0;
  const known = deg != null;
  const styles = [new ol.style.Style({
    image: new ol.style.Circle({
      radius: 5,
      fill:   new ol.style.Fill({color: known ? '#7060b0' : 'rgba(112,96,176,0.40)'}),
      stroke: new ol.style.Stroke({color: '#fff', width: 1.2})
    })
  })];
  if (known) {
    const coord  = feature.getGeometry().getCoordinates();
    const ll     = ol.proj.toLonLat(coord);
    const rad    = deg * Math.PI / 180;
    const half   = dt * 0.55;
    const cosLat = Math.cos(ll[1] * Math.PI / 180);
    const dlon   = cosLat > 0.01 ? half * Math.sin(rad) / cosLat : half * Math.sin(rad);
    const dlat   = half * Math.cos(rad);
    const p1 = ol.proj.fromLonLat([ll[0] - dlon, ll[1] - dlat]);
    const p2 = ol.proj.fromLonLat([ll[0] + dlon, ll[1] + dlat]);
    styles.push(new ol.style.Style({
      geometry: new ol.geom.LineString([p1, p2]),
      stroke:   new ol.style.Stroke({color: '#7060b0', width: 2.8, lineCap: 'round'})
    }));
  }
  return styles;
}

const diLeoLayer = new ol.layer.Vector({
  visible: false,
  zIndex: 295,
  source: new ol.source.Vector({features: DI_LEO_2012.features.map(buildFeature)}),
  style: diLeoStyleFn
});

// ── s3_fe2: GALERÍA MODELOS 3D TOMOGRAFÍA ────────────────────────────────────
const TOMO3D_STUDIES=[
  {id:'tomo3d_cao',ref:'Cao et al. (2024)',short:'CAO',c:[126.5,1.0],
   imgs:[{url:'data/sections/cao_2024_sula_mantle/cao_2024_fig7_cartoon.png',cap:'Fig. 7 — Esquema 3D de subducción múltiple: Celebes Sea slab (azul), Sangihe slab (verde) y Sula slab (amarillo) bajo el NST'}],
   conc:'El modelo 3D integra las tres losas del sistema Molucas: CSS (S-dipping, ~200 km), Sangihe (W-dipping, hasta MTZ) y Sula (N-dipping, ~300–400 km, inclinación oblicua). La interacción geométrica entre los tres slabs fuerza flujo mantélico toroidal documentado por la anisotropía SKS. La terminación del Sula slab actúa como barrera que deflecta el flujo hacia el NO, conectando la dinámica Molucas con la cuña mantélica bajo el brazo norte de Sulawesi.'},
  {id:'tomo3d_dileo',ref:'Di Leo et al. (2012)',short:'DIL',c:[122.0,-5.5],
   imgs:[{url:'data/sections/di_leo_2012_indonesia_mantle/di_leo_2012_fig10_cartoon.png',cap:'Fig. 10 — Cartoon 3D del flujo mantélico en la zona de subducción de Banda: flujo toroidal y extrusión lateral alrededor del slab enrollado'}],
   conc:'El flujo mantélico bajo Banda no sigue el corner flow ortodoxo. El slab enrollado (spoon shape, ~180° de curvatura) fuerza flujo trench-parallel en la cuña y flujo toroidal en los bordes. La extrusión lateral de material mantélico hacia el N corresponde a la Feature C de Yuan et al. (2024) y confirma la conexión dinámica entre la subducción Banda y el sistema Molucas. Primer estudio sistemático de anisotropía mantélica regional con cobertura Indonesia-Filipinas.'},
  {id:'tomo3d_hall',ref:'Hall & Spakman (2015)',short:'HAL',c:[125.0,-2.0],
   imgs:[{url:'data/sections/hall_spakman_2015/hall_2015_fig11_3d_cartoon.png',cap:'Fig. 11 — Vista 3D de las zonas de subducción en Filipinas–Indonesia oriental: Sunda, Australiana, Philippine Sea plate y Molucca Sea plate'},
         {url:'data/sections/hall_spakman_2015/hall_2015_fig13_3d_cartoon.png',cap:'Fig. 13 — Isosuperficies Vp e interpretación 3D de slabs en el Norte de Sulawesi y Mar de Molucas: Sangihe, Sula y Celebes'},
         {url:'data/sections/hall_spakman_2015/hall_2015_fig15_sula_slab.png',cap:'Fig. 15 — Secuencia temporal N-S de desarrollo del Sula slab (20 Ma → Presente): colisión Sula Spur, extensión, inclinación por Sangihe, delaminación y geometría vertical actual'}],
   conc:'Compilación regional UU-P07 que documenta gaps (ventanas mantélicas) en las losas de Celebes, Banda y Halmahera, interpretados como zonas de slab breakoff o migración lateral. El slab gap bajo Sulawesi central (~300–500 km) es coherente con la anomalía de baja Vp reportada por Kesumastuti (2025). La secuencia cinemática del Sula slab (Fig. 15) explica la delaminación parcial (~5 Ma) que introduce material mantélico caliente bajo el brazo norte, generando la anomalía de baja velocidad cortical documentada por Heryandoko (2024). Los slabs acumulados en la MTZ contribuyen a la anomalía de Bouguer positiva del arco Banda.'},
  {id:'tomo3d_hua',ref:'Hua et al. (2023)',short:'HUA',c:[128.0,-4.0],
   imgs:[{url:'data/sections/hua2023_banda_sulawesi/hua_2023_fig4_3d_slab.png',cap:'Fig. 4 — Dos modelos extremos de flujo mantélico: (a) corner flow trench-normal clásico vs. (b) flujo trench-parallel + material extruído, estructura spoon-shape del slab de Banda'}],
   conc:'La geometría spoon-shape del slab de Banda (curvatura ~180°, estancado en la MTZ a ~450 km) fuerza flujo trench-parallel en lugar del corner flow clásico. El modelo (b) es el más consistente con las mediciones SKS y la distribución de sismicidad. El material mantélico extruído bajo el slab de Banda (~300–400 km) corresponde a la Feature C de Yuan et al. (2024). Primera tomografía anisótropa P+S de la región: doble subducción asimétrica (Sangihe→MTZ, Halmahera→~275 km) y flujo toroidal único en la cuña de Banda.'},
  {id:'tomo3d_kesuma',ref:'Kesumastuti et al. (2025)',short:'KES',c:[122.5,0.5],
   imgs:[{url:'data/sections/kesumastuti_2025_sulawesi_tomo/kesumastuti_2025_fig4a_3d_tomo.png',cap:'Fig. 4a — Imagen tomográfica 3D: isosuperficies de alta Vp mostrando la geometría de slabs múltiples bajo Sulawesi'},
         {url:'data/sections/kesumastuti_2025_sulawesi_tomo/kesumastuti_2025_fig4b_slab_cartoon.png',cap:'Fig. 4b — Modelo conceptual 3D: configuración de CSS (S-dipping) y Sula slab (N-dipping) en la región norte de Sulawesi'}],
   conc:'Primer modelo de triple subducción en Sulawesi con resolución suficiente para discriminar las tres losas: CSS (S-dipping, ~200 km), Sula slab (N-dipping, ~350–400 km) y Sangihe (hasta MTZ). La anomalía de baja Vp bajo el brazo E indica delamination litosférica post-colisión Banggai-Sula o ventana mantélica por slab breakoff, coherente con la secuencia cinemática de Hall & Spakman (2015, Fig. 15). El constraste de dip entre CSS (S) y Sula slab (N) implica subducción vergente en sentidos opuestos en el mismo sistema, fenómeno único a escala regional.'},
  {id:'tomo3d_liu',ref:'Liu et al. (2026)',short:'LIU',c:[123.0,-7.0],
   imgs:[{url:'data/sections/liu_2026_indonesia_swave_tomo/liu_2026_fig13_3d_isosurface.png',cap:'Fig. 13 — Isosuperficie 3D de anomalía de alta Vs (+2.5%) y seis secciones verticales: estructura de subducción a 20–330 km bajo el arco indonesio'}],
   conc:'Tomografía S-wave de alta resolución (joint surface wave + ambient noise) con cobertura 10°S–0°, 120°–135°E. La isosuperficie 3D resuelve la discontinuidad del slab de Banda en la MTZ (slab gap) y separa geométricamente el sistema Sulawesi Norte del sistema Sula-Sangihe. Los seis perfiles verticales documentan la variación lateral de la anomalía de alta Vs entre 120° y 135°E, con el núcleo del Banda slab estancado a ~450 km en la MTZ. Mejor resolución que Supendi (2024) en profundidades >200 km.'},
  {id:'tomo3d_yuan',ref:'Yuan et al. (2024)',short:'YUA',c:[127.0,1.0],
   imgs:[{url:'data/sections/yuan_2024_molucca_mantle_flow/yuan_2024_fig11_3d_fvp_views.png',cap:'Fig. 11 — Vistas 3D de los FVPs (fast polarization vectors) de la zona de subducción del Mar de Molucas y áreas adyacentes desde distintos puntos de vista (a–d), con Features A–E señaladas; (e) marcadores circulares de color indican otras features anisótropas'},
         {url:'data/sections/yuan_2024_molucca_mantle_flow/yuan_2024_fig12_schematic_flow.png',cap:'Fig. 12 — Esquema simplificado del flujo mantélico en el Mar de Molucas: trench-normal flow, flujo generado por slab roll-back, ambiente extensional y material mantélico extruído alrededor de los slabs de Célebes, Molucas e Indo-Australiano'}],
   conc:'Modelo sintético de flujo mantélico 3D en el sistema Molucas, respaldado por tomografía anisótropa de tilting-axis (Fig. 9, profundidades 100–600 km). Feature A: flujo toroidal alrededor del extremo N del Sangihe slab. Feature B: flujo entre Sangihe y Halmahera (paralelo al NST). Feature C: flujo de baja Vp bajo el slab de Banda (~300–400 km), extruído hacia el NO y coherente con el cartoon de Di Leo (2012, Fig. 10) y el modelo de Hua (2023, Fig. 4b). La orientación de FVPs pasa de normal al NST (~200 km) a paralela al trench en profundidades mayores, evidenciando la transición de corner flow a flujo toroidal.'},
];

// tomo3dLayer eliminado — galería accesible via botón panel S3 (openTomo3dModal)

function _tomoGetDrafts(){return JSON.parse(localStorage.getItem('tomo_drafts')||'[]');}
function _tomoSaveDrafts(arr){localStorage.setItem('tomo_drafts',JSON.stringify(arr));}

function _tomoRenderNav(activeId){
  const drafts=_tomoGetDrafts();
  const nav=document.getElementById('tomo3d-nav');
  const btnStyle=(active,draft)=>`font-family:monospace;font-size:.59rem;padding:2px 7px;border-radius:3px;cursor:pointer;background:${active?(draft?'rgba(251,191,36,.15)':'rgba(167,139,250,.15)'):'var(--bg3)'};border:1px solid ${active?(draft?'rgba(251,191,36,.5)':'rgba(167,139,250,.5)'):'var(--border)'};color:${active?(draft?'#fbbf24':'#a78bfa'):'var(--dim)'}`;
  const staticBtns=TOMO3D_STUDIES.map(x=>`<button onclick="openTomo3dModal('${x.id}')" style="${btnStyle(x.id===activeId,false)}">${x.short}</button>`).join('');
  const draftBtns=drafts.map(d=>`<button onclick="openTomoDraft('${d.id}')" style="${btnStyle(d.id===activeId,true)}" title="Borrador — ${d.ref}">✦${d.short}</button>`).join('');
  const addBtn=`<button onclick="openTomoAddForm()" style="font-family:monospace;font-size:.59rem;padding:2px 7px;border-radius:3px;cursor:pointer;background:var(--bg3);border:1px dashed var(--border);color:var(--dim);margin-left:4px" title="Agregar estudio">+</button>`;
  nav.innerHTML=staticBtns+draftBtns+addBtn;
}

function openTomo3dModal(studyId){
  const s=TOMO3D_STUDIES.find(x=>x.id===studyId)||TOMO3D_STUDIES[0];
  document.getElementById('tomo3d-ref').textContent=s.ref;
  _tomoRenderNav(s.id);
  const imgs=s.imgs.map(img=>`<div style="margin-bottom:12px"><img src="${img.url}" style="max-width:100%;border-radius:4px;border:1px solid var(--border);cursor:zoom-in" onclick="window.open(this.src,'_blank')" onerror="this.parentNode.style.display='none'"><div style="font-size:.65rem;color:var(--dim);margin-top:4px;line-height:1.5">${img.cap}</div></div>`).join('');
  document.getElementById('tomo3d-body').innerHTML=`${imgs}<div style="margin-top:8px;padding:8px 10px;background:rgba(167,139,250,.06);border-left:3px solid rgba(167,139,250,.5);border-radius:3px"><div style="font-size:.6rem;color:#a78bfa;text-transform:uppercase;margin-bottom:4px">Conclusión</div><div style="font-size:.72rem;line-height:1.75;color:var(--text)">${s.conc}</div></div>`;
  document.getElementById('tomo3d-modal').style.display='flex';
}

function openTomoAddForm(){
  document.getElementById('tomo3d-ref').textContent='Nuevo estudio — borrador';
  _tomoRenderNav('__add__');
  const inp=(id,ph,extra='')=>`<input id="${id}" placeholder="${ph}" ${extra} style="font-family:monospace;font-size:.62rem;padding:4px 7px;background:var(--bg3);border:1px solid var(--border);border-radius:3px;color:var(--text);width:100%;box-sizing:border-box">`;
  const lbl=(t)=>`<div style="font-size:.6rem;color:var(--dim);text-transform:uppercase;margin:10px 0 3px">${t}</div>`;
  document.getElementById('tomo3d-body').innerHTML=`
    <div style="font-size:.62rem;color:var(--dim);margin-bottom:10px;line-height:1.6">Completá los campos disponibles. Claude configurará bibliografía, conclusión y trazo canónico a partir de estos datos.</div>
    ${lbl('Referencia del paper')}${inp('td-ref','Autor et al. (año) — título corto')}
    ${lbl('Código corto (3-4 chars)')}${inp('td-short','HUA','maxlength="4" style="width:80px;font-family:monospace;font-size:.62rem;padding:4px 7px;background:var(--bg3);border:1px solid var(--border);border-radius:3px;color:var(--text)"')}
    ${lbl('Imagen 1 — ruta relativa')}${inp('td-img0-url','data/sections/autor_año/fig1.png')}
    ${lbl('Caption imagen 1')}${inp('td-img0-cap','Fig. N — descripción')}
    <div id="td-extra-imgs"></div>
    <button onclick="tomoAddImgRow()" style="font-family:monospace;font-size:.6rem;padding:2px 8px;margin-top:6px;background:var(--bg3);border:1px dashed var(--border);color:var(--dim);border-radius:3px;cursor:pointer">+ imagen</button>
    ${lbl('Trazo en el mapa — coordenadas JSON')}
    <textarea id="td-coords" placeholder='[[lon1,lat1],[lon2,lat2]]  ← inicio y fin del perfil (o array completo)' style="font-family:monospace;font-size:.58rem;padding:5px 7px;background:var(--bg3);border:1px solid var(--border);border-radius:3px;color:var(--text);width:100%;box-sizing:border-box;height:54px;resize:vertical"></textarea>
    ${lbl('Nombre del trazo en el mapa')}${inp('td-tname','Perfil A-A\' — descripción')}
    ${lbl('Notas para Claude (opcional)')}${inp('td-notes','contexto, fuente, qué mostrár...')}
    <div style="margin-top:14px;display:flex;gap:8px">
      <button onclick="saveTomoDraft()" style="font-family:monospace;font-size:.55rem;padding:4px 14px;background:rgba(251,191,36,.15);border:1px solid rgba(251,191,36,.4);color:#fbbf24;border-radius:3px;cursor:pointer;flex:1">Guardar borrador</button>
      <button onclick="openTomo3dModal(TOMO3D_STUDIES[0].id)" style="font-family:monospace;font-size:.55rem;padding:4px 14px;background:var(--bg3);border:1px solid var(--border);color:var(--dim);border-radius:3px;cursor:pointer">Cancelar</button>
    </div>`;
  document.getElementById('tomo3d-modal').style.display='flex';
}

function tomoAddImgRow(){
  const c=document.getElementById('td-extra-imgs');
  const n=c.children.length+1;
  const inp=(id,ph)=>`<input id="${id}" placeholder="${ph}" style="font-family:monospace;font-size:.62rem;padding:4px 7px;background:var(--bg3);border:1px solid var(--border);border-radius:3px;color:var(--text);width:100%;box-sizing:border-box;margin-top:4px">`;
  const div=document.createElement('div');
  div.innerHTML=`<div style="font-size:.6rem;color:var(--dim);text-transform:uppercase;margin-top:10px">Imagen ${n+1} — ruta</div>${inp('td-img'+n+'-url','data/sections/autor_año/fig'+n+'.png')}<div style="font-size:.6rem;color:var(--dim);text-transform:uppercase;margin-top:4px">Caption imagen ${n+1}</div>${inp('td-img'+n+'-cap','Fig. — descripción')}`;
  c.appendChild(div);
}

function saveTomoDraft(){
  const ref=document.getElementById('td-ref').value.trim();
  const short=(document.getElementById('td-short').value.trim()||'DRF').substring(0,4).toUpperCase();
  if(!ref){alert('Ingresá la referencia del paper');return;}
  const imgs=[];
  let i=0;
  while(document.getElementById('td-img'+i+'-url')){
    const url=document.getElementById('td-img'+i+'-url').value.trim();
    const cap=document.getElementById('td-img'+i+'-cap').value.trim();
    if(url) imgs.push({url,cap:cap||'Sin caption'});
    i++;
  }
  const coordsRaw=document.getElementById('td-coords').value.trim();
  const tname=document.getElementById('td-tname').value.trim();
  const notes=document.getElementById('td-notes').value.trim();
  const id='draft_'+Date.now();
  const draft={id,ref,short,imgs,coordsRaw,tname,notes,ts:new Date().toISOString()};
  const drafts=_tomoGetDrafts();
  drafts.push(draft);
  _tomoSaveDrafts(drafts);
  openTomoDraft(id);
}

function openTomoDraft(draftId){
  const drafts=_tomoGetDrafts();
  const d=drafts.find(x=>x.id===draftId);
  if(!d){openTomo3dModal(TOMO3D_STUDIES[0].id);return;}
  document.getElementById('tomo3d-ref').textContent=d.ref+' [borrador]';
  _tomoRenderNav(draftId);
  const imgs=d.imgs.length?d.imgs.map(img=>`<div style="margin-bottom:12px"><img src="${img.url}" style="max-width:100%;border-radius:4px;border:1px solid var(--border);cursor:zoom-in" onclick="window.open(this.src,'_blank')" onerror="this.style.display='none'"><div style="font-size:.65rem;color:var(--dim);margin-top:4px">${img.cap}</div></div>`).join(''):'<div style="font-size:.6rem;color:var(--dim);margin-bottom:12px">Sin imágenes cargadas</div>';
  const resumen=`BORRADOR TOMOGRAFÍA\nPaper: ${d.ref}\nShort: ${d.short}\nImágenes:\n${d.imgs.map((x,i)=>`  [${i+1}] ${x.url}\n       ${x.cap}`).join('\n')}\nTrazo: ${d.coordsRaw||'(sin trazo)'}\nNombre trazo: ${d.tname||'(sin nombre)'}\nNotas: ${d.notes||'(sin notas)'}\nID borrador: ${d.id}`;
  document.getElementById('tomo3d-body').innerHTML=`
    ${imgs}
    <div style="margin-top:12px;padding:8px 10px;background:rgba(251,191,36,.06);border-left:3px solid rgba(251,191,36,.4);border-radius:3px">
      <div style="font-size:.6rem;color:#fbbf24;text-transform:uppercase;margin-bottom:6px">Resumen para Claude</div>
      <pre id="tomo-resumen-txt" style="font-family:monospace;font-size:.58rem;color:var(--text);white-space:pre-wrap;margin:0;line-height:1.6">${resumen}</pre>
      <button onclick="navigator.clipboard.writeText(document.getElementById('tomo-resumen-txt').textContent)" style="margin-top:8px;font-family:monospace;font-size:.6rem;padding:2px 10px;background:var(--bg3);border:1px solid var(--border);color:var(--dim);border-radius:3px;cursor:pointer">Copiar</button>
    </div>
    <div style="margin-top:10px;display:flex;gap:8px">
      <button onclick="openTomoAddForm()" style="font-family:monospace;font-size:.6rem;padding:3px 10px;background:var(--bg3);border:1px solid var(--border);color:var(--dim);border-radius:3px;cursor:pointer">Editar</button>
      <button onclick="deleteTomoDraft('${d.id}')" style="font-family:monospace;font-size:.6rem;padding:3px 10px;background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.3);color:#ef4444;border-radius:3px;cursor:pointer">Eliminar borrador</button>
    </div>`;
  document.getElementById('tomo3d-modal').style.display='flex';
}

function deleteTomoDraft(draftId){
  const drafts=_tomoGetDrafts().filter(x=>x.id!==draftId);
  _tomoSaveDrafts(drafts);
  openTomo3dModal(TOMO3D_STUDIES[0].id);
}

// ── JIBRAN 2025 + HUA 2023 + HALL 2015 + FATURRAKHMAN 2025 + BIRD 2003 ──
const JIBRAN_2025={features:[
  {type:"Feature",geometry:{type:"Polygon",coordinates:[[[119.5,1.0],[121.5,1.0],[121.5,2.5],[119.5,2.5],[119.5,1.0]]]},properties:{id:"structure_jibran_2025_cluster01",feat_type:"jibran_cluster",feat_id:"structure_jibran_2025_cluster01",feat_name:"Cluster 01 — Compresional NST Oeste",tectonic_regime:"compressional",n_events:49}},
  {type:"Feature",geometry:{type:"Polygon",coordinates:[[[121.5,1.0],[124.0,1.0],[124.0,2.5],[121.5,2.5],[121.5,1.0]]]},properties:{id:"structure_jibran_2025_cluster02",feat_type:"jibran_cluster",feat_id:"structure_jibran_2025_cluster02",feat_name:"Cluster 02 — Compresional NST Este",tectonic_regime:"compressional",n_events:81}},
  {type:"Feature",geometry:{type:"Polygon",coordinates:[[[119.0,-1.5],[120.5,-1.5],[120.5,0.5],[119.0,0.5],[119.0,-1.5]]]},properties:{id:"structure_jibran_2025_cluster03",feat_type:"jibran_cluster",feat_id:"structure_jibran_2025_cluster03",feat_name:"Cluster 03 — Transformante PKF",tectonic_regime:"transform",n_events:62}},
  {type:"Feature",geometry:{type:"Polygon",coordinates:[[[121.0,-1.5],[123.0,-1.5],[123.0,0.0],[121.0,0.0],[121.0,-1.5]]]},properties:{id:"structure_jibran_2025_cluster04",feat_type:"jibran_cluster",feat_id:"structure_jibran_2025_cluster04",feat_name:"Cluster 04 — Extensional Lalanga-Tongian",tectonic_regime:"extensional",n_events:16}},
  {type:"Feature",geometry:{type:"Polygon",coordinates:[[[122.0,-0.8],[123.5,-0.8],[123.5,0.3],[122.0,0.3],[122.0,-0.8]]]},properties:{id:"structure_jibran_2025_cluster05",feat_type:"jibran_cluster",feat_id:"structure_jibran_2025_cluster05",feat_name:"Cluster 05 — Compresional North-Vergent Thrust",tectonic_regime:"compressional",n_events:24}},
  {type:"Feature",geometry:{type:"Polygon",coordinates:[[[121.0,-3.5],[122.5,-3.5],[122.5,-2.0],[121.0,-2.0],[121.0,-3.5]]]},properties:{id:"structure_jibran_2025_cluster06",feat_type:"jibran_cluster",feat_id:"structure_jibran_2025_cluster06",feat_name:"Cluster 06 — Transformante Falla Matano",tectonic_regime:"transform",n_events:19}},
  {type:"Feature",geometry:{type:"Polygon",coordinates:[[[124.0,2.5],[126.5,2.5],[126.5,4.5],[124.0,4.5],[124.0,2.5]]]},properties:{id:"structure_jibran_2025_cluster07",feat_type:"jibran_cluster",feat_id:"structure_jibran_2025_cluster07",feat_name:"Cluster 07 — Compresional West Sangihe Trench",tectonic_regime:"compressional",n_events:18}},
  {type:"Feature",geometry:{type:"Polygon",coordinates:[[[126.0,-1.5],[129.0,-1.5],[129.0,2.0],[126.0,2.0],[126.0,-1.5]]]},properties:{id:"structure_jibran_2025_cluster08",feat_type:"jibran_cluster",feat_id:"structure_jibran_2025_cluster08",feat_name:"Cluster 08 — Compresional Molucca Sea (742 ev.)",tectonic_regime:"compressional",n_events:742}},
  {type:"Feature",geometry:{type:"Polygon",coordinates:[[[127.0,0.5],[130.0,0.5],[130.0,2.5],[127.0,2.5],[127.0,0.5]]]},properties:{id:"structure_jibran_2025_cluster09",feat_type:"jibran_cluster",feat_id:"structure_jibran_2025_cluster09",feat_name:"Cluster 09 — Compresional Molucca Sea Norte",tectonic_regime:"compressional",n_events:30}},
  {type:"Feature",geometry:{type:"Polygon",coordinates:[[[119.0,-7.5],[122.0,-7.5],[122.0,-5.5],[119.0,-5.5],[119.0,-7.5]]]},properties:{id:"structure_jibran_2025_cluster10",feat_type:"jibran_cluster",feat_id:"structure_jibran_2025_cluster10",feat_name:"Cluster 10 — Compresional Nusa Tenggara Back Arc",tectonic_regime:"compressional",n_events:33}}
]};

const HUA_2023={features:[
  {type:"Feature",geometry:{type:"LineString",coordinates:[[108.5,-7.5],[112.0,-9.0],[114.5,-9.5],[118.0,-10.0],[120.5,-10.2],[122.5,-10.0],[124.5,-10.5],[126.5,-10.8],[128.5,-9.5],[130.0,-6.5],[131.5,-4.0],[132.0,-2.5]]},properties:{id:"subduction_zone_hua2023_01",feat_type:"hua_feature",feat_id:"subduction_zone_hua2023_01",feat_name:"Banda Slab — curvatura 180°",category:"subduction_zone"}},
  {type:"Feature",geometry:{type:"LineString",coordinates:[[124.0,4.0],[124.5,2.5],[125.0,1.0],[125.2,0.0],[125.5,-1.0],[126.0,-2.0]]},properties:{id:"subduction_zone_hua2023_02",feat_type:"hua_feature",feat_id:"subduction_zone_hua2023_02",feat_name:"Sangihe Trench — hasta MTZ",category:"subduction_zone"}},
  {type:"Feature",geometry:{type:"LineString",coordinates:[[128.5,2.0],[128.8,0.5],[129.0,-0.5],[129.5,-2.0]]},properties:{id:"subduction_zone_hua2023_03",feat_type:"hua_feature",feat_id:"subduction_zone_hua2023_03",feat_name:"Halmahera Trench — losa ~275 km",category:"subduction_zone"}},
  {type:"Feature",geometry:{type:"LineString",coordinates:[[123.0,1.5],[131.0,1.5]]},properties:{id:"cross_section_hua2023_01",feat_type:"hua_feature",feat_id:"cross_section_hua2023_01",feat_name:"Perfil A-A' — doble subducción Molucas",category:"cross_section",section_img_url:"data/sections/hua2023_banda_sulawesi/hua_2023_fig3_seccion_AA.png"}},
  {type:"Feature",geometry:{type:"LineString",coordinates:[[128.5,0.5],[128.5,-11.0]]},properties:{id:"cross_section_hua2023_02",feat_type:"hua_feature",feat_id:"cross_section_hua2023_02",feat_name:"Perfil B-B' — Banda spoon shape",category:"cross_section",section_img_url:"data/sections/hua2023_banda_sulawesi/hua_2023_fig3_seccion_BB.png"}},
  {type:"Feature",geometry:{type:"Point",coordinates:[127.5,-5.5]},properties:{id:"anisotropy_hua2023_01",feat_type:"hua_feature",feat_id:"anisotropy_hua2023_01",feat_name:"Flujo trench-parallel — cuña Banda",category:"anisotropy"}},
  {type:"Feature",geometry:{type:"Point",coordinates:[130.5,-0.5]},properties:{id:"anisotropy_hua2023_02",feat_type:"hua_feature",feat_id:"anisotropy_hua2023_02",feat_name:"Flujo semi-toroidal — borde norte losa Banda",category:"anisotropy"}},
  {type:"Feature",geometry:{type:"Point",coordinates:[119.0,-9.0]},properties:{id:"anisotropy_hua2023_03",feat_type:"hua_feature",feat_id:"anisotropy_hua2023_03",feat_name:"Fossil anisotropy — losa bajo Java-Sumba",category:"anisotropy"}}
]};

const HALL_2015={features:[
  {type:"Feature",geometry:{type:"LineString",coordinates:[[120.8,0.3],[121.5,1.0],[122.5,1.5],[123.3,1.8],[124.2,2.0],[124.5,1.8]]},properties:{id:"subduction_zone_hall2015_01",feat_type:"hall_feature",feat_id:"subduction_zone_hall2015_01",feat_name:"North Sulawesi Trench — losa Celebes S-dipping",category:"subduction_zone"}},
  {type:"Feature",geometry:{type:"LineString",coordinates:[[121.5,-0.5],[122.0,0.0],[122.5,0.5],[123.0,1.0],[123.5,0.5]]},properties:{id:"subduction_zone_hall2015_02",feat_type:"hall_feature",feat_id:"subduction_zone_hall2015_02",feat_name:"Sula slab — tercera losa N-dipping (tentativa)",category:"subduction_zone"}},
  {type:"Feature",geometry:{type:"Polygon",coordinates:[[[111.0,-6.5],[115.0,-6.5],[115.0,-9.5],[111.0,-9.5],[111.0,-6.5]]]},properties:{id:"hazard_zone_hall2015_01",feat_type:"hall_feature",feat_id:"hazard_zone_hall2015_01",feat_name:"Slab hole Java Este — gap 250–500 km",category:"hazard_zone"}},
  {type:"Feature",geometry:{type:"Polygon",coordinates:[[[116.5,-7.5],[119.0,-7.5],[119.0,-9.5],[116.5,-9.5],[116.5,-7.5]]]},properties:{id:"hazard_zone_hall2015_02",feat_type:"hall_feature",feat_id:"hazard_zone_hall2015_02",feat_name:"Slab hole Sumbawa — gap 200–400 km",category:"hazard_zone"}},
  {type:"Feature",geometry:{type:"LineString",coordinates:[[98.5,0.5],[98.8,2.0],[99.0,4.0]]},properties:{id:"structure_hall2015_01",feat_type:"hall_feature",feat_id:"structure_hall2015_01",feat_name:"Sumatra slab tear — NNE bajo Toba",category:"structure"}},
  {type:"Feature",geometry:{type:"LineString",coordinates:[[118.0,-9.5],[120.5,-10.2],[122.0,-10.5],[124.5,-10.5],[126.5,-10.8],[128.5,-9.5],[130.0,-6.5],[131.5,-4.0],[129.5,-2.5]]},properties:{id:"subduction_zone_hall2015_03",feat_type:"hall_feature",feat_id:"subduction_zone_hall2015_03",feat_name:"Banda slab — rollback ~15 Ma",category:"subduction_zone"}}
]};



// Lookup geoquímica Clor 2005 por nombre de volcán (para openVolcPanel)
const CLOR_BY_VOLC={
  'Awu':         {pct_S:null, d15N:-3.3, note:'δ¹⁵N = −3.3‰ → señal de fusión de slab (MORB-like)'},
  'Ruang':       {pct_S:26,   d15N:null, note:'%S = 26% — aporte magmático moderado'},
  'Lokon-Empung':{pct_S:31,   d15N:null, note:'%S = 31% — aporte magmático moderado'},
  'Lahendong':   {pct_S:70,   d15N:null, note:'%S = 70% — fluido geotérmico, alta madurez'},
  'Ambang':      {pct_S:84,   d15N:null, note:'%S = 84% — fluido maduro, dominado por componente meteórico'},
};

const FATURRAKHMAN_2025={features:[
  {type:"Feature",geometry:{type:"Point",coordinates:[122.745,-0.557]},properties:{id:"geophysical_point_faturrakhman2025_1",feat_type:"fat25_h2seep",feat_id:"geophysical_point_faturrakhman2025_1",feat_name:"H2 seep Tanjung Api — >1000 ppm",h2_ppm:">1000",flow_rate:"1000-1400 m³/día"}},
  {type:"Feature",geometry:{type:"Point",coordinates:[122.775,-0.585]},properties:{id:"geophysical_point_faturrakhman2025_2",feat_type:"fat25_h2seep",feat_id:"geophysical_point_faturrakhman2025_2",feat_name:"H2 seep Pulodalagan — 144-197 ppm",h2_ppm:"144-197",flow_rate:"termal spring"}},
  {type:"Feature",geometry:{type:"Polygon",coordinates:[[[122.600,-0.420],[123.000,-0.420],[123.000,-0.950],[122.600,-0.950],[122.600,-0.420]]]},properties:{id:"structure_faturrakhman2025_3",feat_type:"fat25_area",feat_id:"structure_faturrakhman2025_3",feat_name:"Área estudio Tanjung Api"}},
  {type:"Feature",geometry:{type:"LineString",coordinates:[[122.600,-0.700],[122.750,-0.620],[122.900,-0.540],[123.050,-0.480]]},properties:{id:"fault_faturrakhman2025_4",feat_type:"fat25_fault",feat_id:"fault_faturrakhman2025_4",feat_name:"Ampana Fault — NW-SE"}},
  {type:"Feature",geometry:{type:"LineString",coordinates:[[122.300,-0.950],[122.500,-0.800],[122.700,-0.700],[122.850,-0.640]]},properties:{id:"fault_faturrakhman2025_5",feat_type:"fat25_fault",feat_id:"fault_faturrakhman2025_5",feat_name:"Toili Fault — NW-SE"}}
]};

// STYLE FUNCTIONS
function jibranStyleFn(f){
  // regime desde propiedad directa (geo_features) o inferido del nombre (canonicals)
  const r=f.get('tectonic_regime')||(()=>{
    const nm=(f.get('name')||'').toLowerCase();
    return nm.includes('compresional')||nm.includes('compressional')?'compressional':
           nm.includes('transformante')||nm.includes('transform')?'transform':'extensional';
  })();
  const c=r==='compressional'?'#c85040':r==='transform'?'#c89040':'#4888cc';
  return new ol.style.Style({fill:new ol.style.Fill({color:c+'28'}),stroke:new ol.style.Stroke({color:c,width:1.5,lineDash:[5,3]})});
}
function huaStyleFn(f){
  const cat=f.get('category');
  if(cat==='cross_section') return null; // → tomoProfileLayer
  if(cat==='subduction_zone') return new ol.style.Style({stroke:new ol.style.Stroke({color:'#7060b0',width:2,lineDash:[8,4]})});
  return new ol.style.Style({image:new ol.style.Circle({radius:6,fill:new ol.style.Fill({color:'#7060b0'}),stroke:new ol.style.Stroke({color:'#fff',width:1.5})})});
}
function hallStyleFn(f){
  const cat=f.get('category');
  if(cat==='cross_section') return null; // → tomoProfileLayer
  if(cat==='hazard_zone')     return new ol.style.Style({fill:new ol.style.Fill({color:'rgba(200,80,64,0.13)'}),stroke:new ol.style.Stroke({color:'#c85040',width:1.5,lineDash:[6,3]})});
  if(cat==='subduction_zone') return new ol.style.Style({stroke:new ol.style.Stroke({color:'#7060b0',width:2,lineDash:[8,4]})});
  return new ol.style.Style({stroke:new ol.style.Stroke({color:'#6a7888',width:1.5,lineDash:[4,4]})});
}
function fat25StyleFn(f){
  const ft=f.get('feat_type')||'';
  if(ft==='fat25_h2seep') return new ol.style.Style({image:new ol.style.Circle({radius:8,fill:new ol.style.Fill({color:'rgba(34,197,94,0.85)'}),stroke:new ol.style.Stroke({color:'rgba(0,0,0,0.5)',width:1.5})})});
  if(ft==='fat25_area')   return new ol.style.Style({fill:new ol.style.Fill({color:'rgba(34,197,94,0.05)'}),stroke:new ol.style.Stroke({color:'#22c55e',width:1,lineDash:[4,4]})});
  return null;
}

// Serhalawan 2024 GeoJSON — jerarquía tectónica codificada en grosor, cinemática en color, coord_quality en trazo
const SRH_ORDER={
  'fault_serhalawan_2024_1':1,'fault_serhalawan_2024_3':1,'subduction_zone_serhalawan_2024_1':1,
  'fault_serhalawan_2024_2':2,'fault_serhalawan_2024_4':2,'fault_serhalawan_2024_6':2,'fault_serhalawan_2024_7':2,
  'fault_serhalawan_2024_5':3,'fault_serhalawan_2024_8':3
};
// Dirección del bloque colgante (hanging wall) para los dientes de sierra de fallas inversas
// flip=true → dientes apuntan a la derecha del sentido de recorrido de la traza
const SRH_FLIP={
  'fault_serhalawan_2024_3':true,  // MST: buzamiento al este → triángulos apuntan este (bloque Sulawesi)
  'fault_serhalawan_2024_5':false, // Batui: frente de colisión → triángulos apuntan sur
  'fault_serhalawan_2024_6':true   // Tolo: buzamiento al oeste → triángulos apuntan oeste (Sulawesi)
};
// Fallas inversas (cat==='fault', ft==='thrust'): dientes de sierra idénticos a newFaultLayer
// Zona de subducción (cat==='subduction_zone'): línea de referencia tenue —
//   la representación canónica del NST ya está en tectSubLayer con simbología IUGS
function serhalawanStyleFn(f, resolution){
  const cat=f.get('category')||'';
  const ft=f.get('fault_type')||'';
  const fid=f.get('feat_id')||'';
  const cq=f.get('coord_quality')||'approximate';
  const order=SRH_ORDER[fid]||2;
  const w=order===1?2.5:order===2?2.0:1.5;
  const dash=cq==='accurate'?null:[6,4];
  if(cat==='fault'){
    if(ft==='thrust' && resolution){
      // Falla inversa: línea negra delgada + triángulos abiertos (IUGS reverse fault)
      const wt=order===1?1.8:order===2?1.5:1.2;
      const coords=f.getGeometry().getCoordinates();
      const styles=[new ol.style.Style({stroke:new ol.style.Stroke({color:'#111',width:wt,lineDash:dash})})];
      const flip=SRH_FLIP[fid]||false;
      const sz=resolution*7;
      const step=Math.max(1,Math.round(coords.length/4));
      for(let i=0;i<coords.length-1;i+=step){
        const poly=toothPolygon(coords[i],coords[i+1],sz,flip);
        if(poly) styles.push(new ol.style.Style({
          geometry:new ol.geom.Polygon([poly]),
          fill:new ol.style.Fill({color:'rgba(0,0,0,0)'}),
          stroke:new ol.style.Stroke({color:'#111',width:1.1})
        }));
      }
      return styles;
    }
    const c='#c89040';
    return new ol.style.Style({stroke:new ol.style.Stroke({color:c,width:w,lineDash:dash})});
  }
  if(cat==='subduction_zone'){
    // Línea de referencia tenue: la simbología IUGS canónica está en tectSubLayer
    return new ol.style.Style({stroke:new ol.style.Stroke({color:'rgba(200,80,64,0.30)',width:1.5,lineDash:[10,6]})});
  }
  if(cat==='hazard_zone'){
    return new ol.style.Style({fill:new ol.style.Fill({color:'rgba(200,80,64,0.07)'}),stroke:new ol.style.Stroke({color:'#c85040',width:1,lineDash:[5,4]})});
  }
  if(cat==='seismicity_cluster'){
    return new ol.style.Style({fill:new ol.style.Fill({color:'rgba(72,136,204,0.09)'}),stroke:new ol.style.Stroke({color:'#4888cc',width:1,lineDash:[4,3]})});
  }
  if(cat==='earthquake'){
    const mag=f.get('magnitude')||6;
    const r=mag>=7.8?9:mag>=7.5?8:7;
    const c=ft==='thrust'?'#c84070':'#c89040';
    return new ol.style.Style({image:new ol.style.Circle({radius:r,fill:new ol.style.Fill({color:c}),stroke:new ol.style.Stroke({color:'rgba(255,255,255,0.9)',width:1.5})})});
  }
  if(cat==='cross_section'){
    const nm=f.get('feat_name')||'';
    const letters=(nm.split(' — ')[0]||nm);
    const ep=letters.split('-');
    const lbl0=ep[0]||'';
    const lbl1=ep.slice(1).join('-')||'';
    const geom=f.getGeometry();
    const styles=[new ol.style.Style({stroke:new ol.style.Stroke({color:'#7060b0',width:1.8,lineDash:[6,4]})})];
    if(geom){
      const mkLbl=(pt,lbl)=>new ol.style.Style({
        geometry:new ol.geom.Point(pt),
        text:new ol.style.Text({text:lbl,font:'bold 13px monospace',
          fill:new ol.style.Fill({color:'#c8b8ff'}),
          stroke:new ol.style.Stroke({color:'rgba(8,8,8,0.92)',width:3}),
          offsetY:-9,textAlign:'center'})
      });
      if(lbl0)styles.push(mkLbl(geom.getFirstCoordinate(),lbl0));
      if(lbl1)styles.push(mkLbl(geom.getLastCoordinate(),lbl1));
    }
    return styles;
  }
  return new ol.style.Style({stroke:new ol.style.Stroke({color:'rgba(140,140,140,0.5)',width:1})});
}

// LAYERS
const jibranSource = new ol.source.Vector();
const jibranLayer=new ol.layer.Vector({visible:false,source:jibranSource,style:jibranStyleFn});
const huaLayer=new ol.layer.Vector({visible:false,source:new ol.source.Vector({features:HUA_2023.features.map(buildFeature)}),style:huaStyleFn});
const hallLayer=new ol.layer.Vector({visible:false,source:new ol.source.Vector({features:HALL_2015.features.map(buildFeature)}),style:hallStyleFn});
const PETROTECT_COLORS={
  ophiolite:'#2d6a27', volcanic_arc:'#8b2020', terrane:'#8a6d00',
  metamorphic_complex:'#5b2c6f', structure:'#6b5900', basin:'#1a4a6b'
};
const fat25H2Layer=new ol.layer.Vector({visible:false,source:new ol.source.Vector({features:FATURRAKHMAN_2025.features.map(buildFeature)}),style:fat25StyleFn});

// ── KESUMASTUTI 2025 — anomalías tomográficas

const KESUMA_TOMO=[
  {c:[122.5,1.0],  vtype:'high',  label:'H1 — Celebes Sea Slab (NST, S-dipping ~200 km)', img:'data/sections/kesumastuti_2025_sulawesi_tomo/kesumastuti_2025_fig4_slab_config.png'},
  {c:[123.0,0.5],  vtype:'high',  label:'H2 — Sula Slab (N-dipping, ~350-400 km E of 122°E)', img:'data/sections/kesumastuti_2025_sulawesi_tomo/kesumastuti_2025_fig4_slab_config.png'},
  {c:[124.5,1.5],  vtype:'high',  label:'H3 — Sangihe Slab (W-dipping, hasta MTZ)', img:'data/sections/kesumastuti_2025_sulawesi_tomo/kesumastuti_2025_fig4_slab_config.png'},
  {c:[122.0,-1.5], vtype:'low',   label:'L1 — Low-V East Arm (200-500 km, incipient subduction?)', img:'data/sections/kesumastuti_2025_sulawesi_tomo/kesumastuti_2025_fig3_slabs.png'},
  {c:[121.2,0.3],  vtype:'low',   label:'L2 — Low-V Tambarana Fault zone', img:'data/sections/kesumastuti_2025_sulawesi_tomo/kesumastuti_2025_fig3_slabs.png'}
];

function kesumaStyleFn(f){
  const vt=f.get('ktomo_vtype');
  const col=vt==='high'?'#3b82f6':'#ef4444';
  const lbl=f.get('ktomo_label')||'';
  const tag=lbl.match(/^[HL]\d/)?lbl.slice(0,2):'';
  return [new ol.style.Style({
    image:new ol.style.Circle({radius:9,fill:new ol.style.Fill({color:col+'99'}),stroke:new ol.style.Stroke({color:col,width:1.8})})
  }),new ol.style.Style({
    text:new ol.style.Text({text:tag,font:'bold 7px monospace',fill:new ol.style.Fill({color:'#fff'}),offsetY:0.5})
  })];
}


const kesumaSource=new ol.source.Vector();
KESUMA_TOMO.forEach((d,i)=>{
  const f=new ol.Feature({geometry:new ol.geom.Point(fromLL(d.c))});
  f.setProperties({feat_type:'kesuma_tomo',ktomo_vtype:d.vtype,ktomo_label:d.label,ktomo_img:d.img});
  kesumaSource.addFeature(f);
});
const kesumaTomoLayer=new ol.layer.Vector({visible:false,zIndex:297,source:kesumaSource,style:kesumaStyleFn});

// ── PRATAMA 2025 S5 — manifestaciones, volcanes PVMBG, CCRS ──────────────────
const PRATAMA_MANIF=[
  {c:[124.53,1.19],t:'fumarole_hotspring',n:'Fumarola+Terma — Amurang',arm:'N'},
  {c:[124.65,1.27],t:'fumarole_hotspring',n:'Fumarola+Terma — Tomohon/Lahendong',arm:'N'},
  {c:[124.72,1.37],t:'fumarole_hotspring',n:'Fumarola+Terma — Tondano caldera',arm:'N'},
  {c:[124.78,1.22],t:'fumarole_hotspring',n:'Fumarola+Terma — Tompaso/Leilem',arm:'N'},
  {c:[124.92,1.42],t:'fumarole_hotspring',n:'Fumarola+Terma — NE Manado',arm:'N'},
  {c:[124.97,1.55],t:'fumarole_hotspring',n:'Fumarola+Terma — costa Bitung',arm:'N'},
  {c:[122.52,0.70],t:'hotspring',n:'Terma — Gorontalo',arm:'N'},
  {c:[123.05,0.78],t:'hotspring',n:'Terma — brazo N medio W',arm:'N'},
  {c:[123.50,0.91],t:'hotspring',n:'Terma — brazo N medio E',arm:'N'},
  {c:[124.05,1.05],t:'hotspring',n:'Terma — Kotamobagu',arm:'N'},
  {c:[124.25,1.10],t:'hotspring',n:'Terma — Boltim',arm:'N'},
  {c:[119.85,-0.65],t:'hotspring',n:'Terma — N Palu (PKF pull-apart)',arm:'central'},
  {c:[119.95,-0.88],t:'hotspring',n:'Terma — Palu city (PKF)',arm:'central'},
  {c:[120.12,-0.45],t:'hotspring',n:'Terma — NE Palu',arm:'central'},
  {c:[120.38,-1.18],t:'hotspring',n:'Terma — Sulawesi Central N',arm:'central'},
  {c:[120.82,-1.75],t:'hotspring',n:'Terma — Sulawesi Central',arm:'central'},
  {c:[121.15,-2.10],t:'hotspring',n:'Terma — Matano area',arm:'central'},
  {c:[121.45,-2.55],t:'hotspring',n:'Terma — SE Matano',arm:'SE'},
  {c:[119.95,-2.85],t:'hotspring',n:'Terma — brazo S norte',arm:'S'},
  {c:[119.75,-3.25],t:'hotspring',n:'Terma — brazo S centro',arm:'S'},
  {c:[119.65,-3.65],t:'hotspring',n:'Terma — brazo S medio',arm:'S'},
  {c:[119.48,-4.05],t:'hotspring',n:'Terma — brazo S sur',arm:'S'},
  {c:[120.25,-4.15],t:'hotspring',n:'Terma — SE brazo S',arm:'S'},
  {c:[119.92,-4.45],t:'hotspring',n:'Terma — SW brazo S',arm:'S'},
  {c:[119.05,-2.55],t:'hotspring',n:'Terma — Mamuju',arm:'W'},
  {c:[118.95,-3.15],t:'hotspring',n:'Terma — S Mamuju',arm:'W'},
  {c:[122.38,-1.52],t:'hotspring',n:'Terma — brazo E',arm:'E'},
  {c:[122.85,-1.88],t:'hotspring',n:'Terma — brazo E NE',arm:'E'},
  {c:[122.42,-3.78],t:'hotspring',n:'Terma — Kendari',arm:'SE'}
];

function manifStyleFn(f){
  const t=f.get('manif_type');
  const col=t==='fumarole_hotspring'?'#ef4444':'#60a5fa';
  return new ol.style.Style({image:new ol.style.Circle({radius:5,fill:new ol.style.Fill({color:col}),stroke:new ol.style.Stroke({color:'#fff',width:1.2})})});
}

const manifSource=new ol.source.Vector({features:PRATAMA_MANIF.map(d=>{
  const feat=new ol.Feature({geometry:new ol.geom.Point(fromLL(d.c))});
  feat.setProperties({feat_type:'pratama_manif',manif_type:d.t,manif_name:d.n,manif_arm:d.arm});
  return feat;
})});
const manifLayer=new ol.layer.Vector({visible:false,zIndex:302,source:manifSource,style:manifStyleFn});


const cpdExtent=ol.proj.transformExtent([117.5,-5.7,127.5,2.0],'EPSG:4326','EPSG:3857');
const cpdLayer=new ol.layer.Image({visible:false,opacity:0.72,zIndex:19,source:new ol.source.ImageStatic({url:'data/sections/pratama_2025/cpd_panel_d_only.png?v=nobg',imageExtent:cpdExtent,projection:'EPSG:3857'})});

// Serhalawan & Chen (2024) — datos por tipo: gaps/clusters, sismos históricos, secciones
// Un único fetch distribuye las features a 3 capas según categoría
const srhGapSource=new ol.source.Vector();      // hazard_zone
const srhClusterSource=new ol.source.Vector();  // seismicity_cluster
const srhSecSource=new ol.source.Vector();      // cross_section — alias: tomoProfileSource
const tomoProfileSource=srhSecSource;           // capa unificada de perfiles tomográficos
const srhGapLayer=new ol.layer.Vector({visible:false,source:srhGapSource,style:serhalawanStyleFn});
const srhClusterLayer=new ol.layer.Vector({visible:false,source:srhClusterSource,style:serhalawanStyleFn});
const srhSecLayer=new ol.layer.Vector({visible:false,source:srhSecSource,style:serhalawanStyleFn});
fetch('fuentes/serhalawan_2024_sulawesi.geojson')
  .then(r=>r.json())
  .then(d=>{
    // Fallas → ya representadas en tect_key (GEM) o new_faults (una traza por falla)
    // NST (subduction_zone) → ya en tectSubLayer (GEM f19-f24)
    const SRH_SKIP=new Set([
      'fault_serhalawan_2024_1','fault_serhalawan_2024_2','fault_serhalawan_2024_3',
      'fault_serhalawan_2024_4','fault_serhalawan_2024_5','fault_serhalawan_2024_6',
      'fault_serhalawan_2024_7','fault_serhalawan_2024_8',
      'subduction_zone_serhalawan_2024_1', // NST → ya en tectSubLayer
      'cross_section_serhalawan_2024_1','cross_section_serhalawan_2024_2',
    ]);
    d.features.filter(f=>!SRH_SKIP.has(f.properties.id)).forEach(f=>{
      f.properties.feat_type='serhalawan_feature';
      f.properties.feat_id=f.properties.id;
      const feat=buildFeature(f);
      const cat=f.properties.category||'';
      if(cat==='cross_section')          srhSecSource.addFeature(feat);
      else if(cat==='hazard_zone')       srhGapSource.addFeature(feat);
      else if(cat==='seismicity_cluster')srhClusterSource.addFeature(feat);
      // earthquake → ya integrado en CMT_EVENTS con soluciones GCMT reales
    });
  }).catch(()=>{});

// Source de etiquetas de perfiles — colocación manual por el usuario
const PROFILE_LABEL_KEY='tomo_manual_labels_v1';
const profileLabelSource=new ol.source.Vector();
const _plCache=new Map();
const profileLabelLayer=new ol.layer.Vector({
  source:profileLabelSource,
  zIndex:52,
  style:f=>{
    const txt=f.get('pl_text');
    if(!txt) return null;
    if(_plCache.has(txt))return _plCache.get(txt);
    const s=new ol.style.Style({
      image:new ol.style.Circle({radius:3,fill:new ol.style.Fill({color:'#7060b0'})}),
      text:new ol.style.Text({
        text:txt,
        font:'bold 11px monospace',
        fill:new ol.style.Fill({color:'#fff'}),
        backgroundFill:new ol.style.Fill({color:'#7060b0'}),
        backgroundStroke:new ol.style.Stroke({color:'rgba(255,255,255,0.6)',width:1}),
        padding:[2,5,2,5],
        offsetY:-10,
      })
    });
    _plCache.set(txt,s);
    return s;
  }
});
// profileLabelLayer se agrega al mapa después de su inicialización (ver bloque map=new ol.Map)

// Cargar etiquetas guardadas en localStorage
(function loadSavedProfileLabels(){
  try{
    const saved=JSON.parse(localStorage.getItem(PROFILE_LABEL_KEY)||'[]');
    saved.forEach(item=>{
      const f=new ol.Feature({
        geometry:new ol.geom.Point(ol.proj.fromLonLat([item.lon,item.lat])),
        feat_type:'profile_label', pl_text:item.text, pl_id:item.id
      });
      profileLabelSource.addFeature(f);
    });
  }catch(e){}
})();

function _saveAllProfileLabels(){
  const items=profileLabelSource.getFeatures().map(f=>{
    const ll=ol.proj.toLonLat(f.getGeometry().getCoordinates());
    return {id:f.get('pl_id')||Date.now(), lon:Math.round(ll[0]*10000)/10000, lat:Math.round(ll[1]*10000)/10000, text:f.get('pl_text')};
  });
  localStorage.setItem(PROFILE_LABEL_KEY, JSON.stringify(items));
}

// Perfiles tomográficos unificados — Hua 2023, Hall 2015, Supendi 2024, Jayadi 2023
[
  {id:'cross_section_hua2023_01',coords:[[123.0,1.5],[131.0,1.5]],name:"A-A' — Hua et al. (2023)",img:'data/sections/hua2023_banda_sulawesi/hua_2023_fig3_seccion_AA.png'},
  {id:'cross_section_hua2023_02',coords:[[128.5,0.5],[128.5,-11.0]],name:"B-B' — Hua et al. (2023)",img:'data/sections/hua2023_banda_sulawesi/hua_2023_fig3_seccion_BB.png'},
  {id:'cross_section_supendi2024_AB',coords:[[122.0,2.3],[126.5,2.3]],name:"A-B — Supendi et al. (2024)",img:'data/sections/supendi_2024_sulawesi_tomo/supendi_2024_fig3_perfil_AB_sangihe_halmahera_EW.png'},
  {id:'cross_section_supendi2024_CD',coords:[[121.0,1.5],[126.0,1.5]],name:"C-D — Supendi et al. (2024)",img:'data/sections/supendi_2024_sulawesi_tomo/supendi_2024_fig3_perfil_CD_sangihe_EW.png'},
  {id:'cross_section_supendi2024_EF',coords:[[121.1,3.8],[121.1,0.4]],name:"E-F — Supendi et al. (2024)",img:'data/sections/supendi_2024_sulawesi_tomo/supendi_2024_fig3_perfil_EF_celebes_NS.png'},

  {id:'cross_section_cao2024_AB',coords:[[120.0,0.5],[126.0,0.5]],name:"A-B — Cao et al. (2024)",img:'data/sections/cao_2024_sula_mantle/cao_2024_fig1_map_sections.png'},
  {id:'cross_section_cao2024_CD',coords:[[124.0,2.0],[124.0,-2.0]],name:"C-D — Cao et al. (2024)",img:'data/sections/cao_2024_sula_mantle/cao_2024_fig1_map_sections.bak.png'},
].forEach(p=>{
  const f=new ol.Feature({
    geometry:new ol.geom.LineString(lc(p.coords)),
    feat_type:'tomo_profile', feat_id:p.id, feat_name:p.name,
    category:'cross_section', section_img_url:p.img||null,
  });
  tomoProfileSource.addFeature(f);
});


// GCMT — carga lazy: se dispara al activar la capa de sismicidad (ver toggle handler)

const map=new ol.Map({
  target:'map',
  layers:[
    // Raster base
    esriSat,openTopoLayer,esriHybridBase,gebcoColor,esriHybridLabels,gravBouguerLayer,gravFreeairLayer,heightAnomLayer,
    refBaillieLayer,refSocquetLayer,refWalpersdorfLayer,refSatyanaIpaLayer,refSatyanaIagiLayer,refSuronoLayer,
    refSerhalawanLayer,refCiptaLayer,refJibranLayer,refNatawLayer,refNatawInlandLayer,refNataw2020Layer,refGreenfieldLayer,refJayadiLayer,
    refHuaLayer,refCaoLayer,refYuanLayer,refHeryandokoLayer,refLiuLayer,refDileoLayer,refLestariLayer,
    refSup010Layer,refSup020Layer,refSup040Layer,refSup060Layer,refSup080Layer,refSup100Layer,refSup120Layer,refSup150Layer,refSup200Layer,
    refYuanAnis100Layer,refYuanAnis200Layer,refYuanAnis300Layer,refYuanAnis400Layer,refYuanAnis500Layer,refYuanAnis600Layer,
    refShihLayer,refPratamaLayer,refLukmanLayer,
    // Polígonos
    mergedGeomLayer,canonLabelLayer,canonPreviewLayer,jibranLayer,srhClusterLayer,hallLayer,seismicGapLayer,srhGapLayer,hikmyBeltLayer,
    // Líneas
    slabLayer,huaLayer,yuanFlowLayer,newFaultLayer,tectSubLayer,tectKeyLayer,birdKeyFaultLayer,hikmyFaultLayer,srhSecLayer,
    // Puntos
    cmtLayer,volcLayer,manifLayer,hikmyPointLayer,yuanPointLayer,diLeoLayer,fat25H2Layer,geothLayer,kesumaTomoLayer,stationLayer,gpsLayer,plateVelLayer,
    cpdLayer
  ],
  view:new ol.View({center:fromLL([122,-1.5]),zoom:6,minZoom:4,maxZoom:14}),
  controls:ol.control.defaults.defaults({zoom:true,attribution:true,rotate:false}).extend([new ol.control.ScaleLine({units:'metric'})])
});

// Agregar capas que dependen de map (creadas antes pero que usan map.addLayer post-init)
map.addLayer(profileLabelLayer);

// Force map size
// Re-sincronizar canvas OL cuando cambia el tamaño (incluye zoom del navegador)
const _mapEl = document.getElementById('map');
const _syncMap = () => map.updateSize();
if (window.ResizeObserver) {
  new ResizeObserver(_syncMap).observe(_mapEl);
}
window.addEventListener('resize', _syncMap);
[50, 200, 600].forEach(t => setTimeout(_syncMap, t));

// Detectar zoom del navegador via devicePixelRatio y disparar updateSize
let _lastDPR = window.devicePixelRatio;
setInterval(() => {
  if (window.devicePixelRatio !== _lastDPR) {
    _lastDPR = window.devicePixelRatio;
    _syncMap();
  }
}, 250);

// Bloquear Ctrl+Scroll fuera del mapa para evitar zoom accidental del navegador
document.getElementById('header').addEventListener('wheel', e => {
  if (e.ctrlKey) e.preventDefault();
}, {passive: false});

// Tecla R → ajusta tamaño manualmente
document.addEventListener('keydown', ev => {
  if (ev.key === 'r' || ev.key === 'R') {
    if (ev.target.tagName === 'INPUT' || ev.target.tagName === 'TEXTAREA') return;
    if (ev.ctrlKey || ev.metaKey || ev.altKey) return;
    if (activeRefKey) return;  // no interferir con el georref
    map.updateSize();
  }
});

// TOOLTIP
const tip=document.getElementById('tip');
function buildTooltipHtml(hit){
    const id=hit.get('feat_id')||hit.get('id'),type=hit.get('feat_type');
    let html='';
    if(type==='cmt'){
      const e=hit.get('cmt_data'),ft=faultType(e.r1);
      const c=depthHex(e.de);
      const fN={T:'Thrust',N:'Normal',S:'Transcurrente',O:'Oblicua'};
      html=`<span style="color:${c};font-size:.63rem">SISMO · ${fN[ft]} · ${e.de}km</span><br><b style="color:${c}">M${e.mw}</b>`;
    }else if(type==='volcano'){
      const pt=hit.get('volc_pvmbg')||'C';
      const c=pt==='A'?'#ef4444':pt==='B'?'#f97316':'#94a3b8';
      html=`<span style="color:${c};font-size:.63rem">VOLCÁN PVMBG-${pt} · ${hit.get('volc_arc')}</span><br><b style="color:${c}">${hit.get('volc_name')}</b> · ${hit.get('volc_elev')}m`;
    }else if(type==='slab'){
      html=`<span style="color:#00cfff;font-size:.63rem">SLAB2 · ${hit.get('slab_region')}</span><br><b style="color:#00cfff">${hit.get('slab_depth')} km</b>`;
    }else if(type==='key_fault'){
      const c=DB[id]?DB[id].color:'#c89040';
      const ttl=DB[id]?DB[id].title:hit.get('feat_name')||'Falla';
      const typ=DB[id]?DB[id].type:'Falla activa';
      html=`<span style="color:${c};font-size:.63rem;text-transform:uppercase">${typ}</span><br><b style="color:${c}">${ttl}</b>`;
    }else if(type==='subduction'){
      const sz=hit.get('subzone')||'generic';
      const si=SUBZONE_INFO[sz]||SUBZONE_INFO['generic'];
      const c='#60a5fa';
      html=`<span style="color:${c};font-size:.63rem">${si.name}</span><br><b style="color:${c}">${si.subducting} → ${si.overriding}</b>`;
    }else if(type==='new_fault'||type==='new_thrust'||type==='hazard_zone'){
      const db=DB[id];
      if(db){const c=db.color||'#c89040';html=`<span style="color:${c};font-size:.63rem;text-transform:uppercase">${db.type}</span><br><b style="color:${c}">${db.title}</b>`;}
      else html=`<span style="color:#c84070;font-size:.63rem">FALLA — Serhalawan & Chen 2024</span>`;
    }else if(type==='core'&&DB[id]){
      const c=DB[id].color;
      html=`<span style="color:${c};font-size:.63rem;text-transform:uppercase">${DB[id].type}</span><br><b style="color:${c}">${DB[id].title}</b>`;
    }else if((type==='hikmy_fault'||type==='hikmy_belt')&&DB[id]){
      const c=DB[id].color||'#ff8844';
      html=`<span style="color:${c};font-size:.63rem;text-transform:uppercase">${DB[id].type}</span><br><b style="color:${c}">${DB[id].title}</b>`;
    }else if(type==='hikmy_point'){
      const ur=hit.get('uplift_rate');
      const nm=hit.get('feat_name')||'';
      html=`<span style="color:#60a5fa;font-size:.63rem">UPLIFT — Hikmy 2025</span><br><b style="color:#60a5fa">${ur!=null?ur+' mm/año · ':''}${nm}</b>`;
    }else if(type==='yuan_flow'||type==='yuan_point'){
      const nm=hit.get('feat_name')||'';
      html=`<span style="color:#7060b0;font-size:.63rem">FLUJO MANTÉLICO — Yuan 2024</span><br><b style="color:#7060b0">${nm}</b>`;
    }else if(type==='dileo_sks'){
      const dt=hit.get('delay_time_s'),deg=hit.get('fast_axis_deg'),sta=hit.get('station_name')||'';
      const degStr=deg!=null?` · φ=${deg}°`:'';
      html=`<span style="color:#7060b0;font-size:.63rem">SPLITTING SKS — Di Leo 2012</span><br><b style="color:#7060b0">${sta}</b> · dt=${dt} s${degStr}`;
    }else if(type==='kesuma_tomo'){
      const vt=hit.get('ktomo_vtype'),lbl=hit.get('ktomo_label')||'';
      const c=vt==='high'?'#60a5fa':'#f87171';
      const vtxt=vt==='high'?'ALTA Vp — slab':'BAJA Vp — zona caliente';
      html=`<span style="color:${c};font-size:.63rem">${vtxt} — Kesumastuti 2025</span><br><b style="color:${c}">${lbl}</b>`;
    }else if(type==='pratama_manif'){
      const mt=hit.get('manif_type'),nm=hit.get('manif_name')||'',arm=hit.get('manif_arm')||'';
      const isFum=mt==='fumarole_hotspring';
      const c=isFum?'#ef4444':'#60a5fa';
      const lbl=isFum?'FUMAROLA + TERMA':'TERMA';
      html=`<span style="color:${c};font-size:.63rem">${lbl} — Pratama 2025 · brazo ${arm.toUpperCase()}</span><br><b style="color:${c}">${nm}</b>`;
    }else if(type==='jibran_cluster'&&DB[id]){
      const c=DB[id].color,r=hit.get('tectonic_regime')||'';
      html=`<span style="color:${c};font-size:.63rem">RÉGIMEN ${r.toUpperCase()} — Jibran 2025</span><br><b style="color:${c}">${DB[id].title}</b>`;
    }else if(type==='hua_feature'&&DB[id]){
      html=`<span style="color:#7060b0;font-size:.63rem">TOMOGRAFÍA BANDA — Hua 2023</span><br><b style="color:#7060b0">${DB[id].title}</b>`;
    }else if(type==='hall_feature'&&DB[id]){
      html=`<span style="color:#7060b0;font-size:.63rem">LOSAS / MANTO — Hall 2015</span><br><b style="color:#7060b0">${DB[id].title}</b>`;
    }else if((type==='fat25_h2seep'||type==='fat25_fault'||type==='fat25_area')&&DB[id]){
      const h2=hit.get('h2_ppm');
      html=`<span style="color:#22c55e;font-size:.63rem">H2 NATURAL — Faturrakhman 2025</span><br><b style="color:#22c55e">${h2?h2+' ppm · ':''}${DB[id].title}</b>`;
    }else if(type==='station'){
      html=`<span style="color:#60a5fa;font-size:.63rem">ESTACIÓN · ${hit.get('sta_net')||''}</span><br><b style="color:#60a5fa">${hit.get('sta_code')||''}</b> · ${hit.get('sta_name')||''}`;
    }else if(type==='plate_vel'){
      const mag=hit.get('pv_mag'),lbl=hit.get('pv_label')||hit.get('pv_name')||'';
      html=`<span style="color:${PLATE_COL};font-size:.63rem">MORVEL56 — ${hit.get('pv_plate')||''}</span><br><b style="color:${PLATE_COL}">${lbl} · ${mag} mm/yr</b>`;
    }else if(type==='geoth_field'){
      const st=hit.get('geoth_status')||'';
      const c=st==='operacional'?'#f59e0b':st==='prospecto'?'#a78bfa':'#22d3ee';
      const mwe=hit.get('geoth_mwe');
      html=`<span style="color:${c};font-size:.63rem">GEOTÉRMICO · ${st.toUpperCase()}</span><br><b style="color:${c}">${hit.get('geoth_name')||''}</b>${mwe?' · '+mwe+' MW':''}`;
    }else if(type==='gps_vel'){
      const ve=hit.get('gps_ve'),vn=hit.get('gps_vn');
      const mag=ve!=null&&vn!=null?Math.round(Math.sqrt(ve*ve+vn*vn))+'mm/yr':'';
      const sta=hit.get('gps_station')||'';
      html=`<span style="color:${GPS_COL};font-size:.63rem">GPS · ${hit.get('gps_source')||''}</span><br><b style="color:${GPS_COL}">${sta}${mag?' · '+mag:''}</b>`;
    }else if(type==='serhalawan_feature'&&DB[id]){
      const cat=hit.get('category')||'';
      const catLbl=cat==='fault'?'FALLA':cat==='subduction_zone'?'SUBDUCCIÓN':cat==='earthquake'?'SISMO':cat==='hazard_zone'?'GAP SÍSMICO':cat==='seismicity_cluster'?'CLUSTER':cat==='cross_section'?'SECCIÓN':'';
      const c=DB[id].color;
      html=`<span style="color:${c};font-size:.63rem">SERHALAWAN 2024 · ${catLbl}</span><br><b style="color:${c}">${DB[id].title}</b>`;
    }else if(type==='tomo_profile'&&DB[id]){
      const c='#7060b0';
      html=`<span style="color:${c};font-size:.63rem">PERFIL TOMOGRÁFICO · ${DB[id].type}</span><br><b style="color:${c}">${DB[id].title}</b>`;
    }else if(type==='hazard_zone'&&DB[id]){
      html=`<span style="color:#ffaa00;font-size:.63rem">GAP SÍSMICO — SERHALAWAN 2024</span><br><b style="color:#ffaa00">${DB[id].title}</b>`;
    }else if(type==='canonical'){
      const nm=hit.get('name')||id||'';
      const lt=hit.get('layer_type')||'';
      const CANON_TIP_COL={
        'fault':'#c89040','subduction_zone':'#7060b0',
        'ophiolite':'#40a080','volcanic_arc':'#8b2020',
        'terrane':'#8a6d00','metamorphic_complex':'#a78bfa',
        'basin':'#4888cc','structure':'#a78bfa',
        'volcano':'#ef4444','geophysical_point':'#60a5fa',
        'igneous_body':'#f97316'
      };
      const CANON_TIP_LBL={
        'fault':'FALLA CANÓNICA','subduction_zone':'SUBDUCCIÓN CANÓNICA',
        'ophiolite':'OFIOLITA','volcanic_arc':'ARCO VOLCÁNICO',
        'terrane':'TERRENO','metamorphic_complex':'COMPLEJO METAMÓRFICO',
        'basin':'CUENCA','structure':'ESTRUCTURA',
        'volcano':'VOLCÁN','geophysical_point':'PUNTO GEOFÍSICO',
        'igneous_body':'CUERPO ÍGNEO'
      };
      const cc=CANON_TIP_COL[lt]||'#c89040';
      const lbl=CANON_TIP_LBL[lt]||lt.toUpperCase();
      html=`<span style="color:${cc};font-size:.63rem">${lbl}</span><br><b style="color:${cc}">${nm}</b>`;
    }
  return html;
}
map.on('pointermove',evt=>{
  if(evt.dragging){tip.style.display='none';return;}
  const hit=map.forEachFeatureAtPixel(evt.pixel,f=>f,{hitTolerance:8});
  if(hit){
    const html=buildTooltipHtml(hit);
    if(html){tip.innerHTML=html;tip.style.display='block';tip.style.left=(evt.pixel[0]+14)+'px';tip.style.top=(evt.pixel[1]-10)+'px';map.getTargetElement().style.cursor='pointer';}
    else{tip.style.display='none';map.getTargetElement().style.cursor='';}
  }else{tip.style.display='none';map.getTargetElement().style.cursor='';}
});

// CLICK → PANEL
map.on('singleclick',evt=>{
  clearTimeout(_touchTipTimer);tip.style.display='none';
  const hit=map.forEachFeatureAtPixel(evt.pixel,f=>f,{hitTolerance:8});
  if(!hit)return;
  const type=hit.get('feat_type'),id=hit.get('feat_id')||hit.get('id');
  if(type==='cmt')       {openCMTPanel(hit.get('cmt_data'));return;}
  if(type==='volcano')   {openVolcPanel(hit);return;}
  if(type==='key_fault') {
    if(FEAT_TO_CANONICAL[id]) openCanonicalPanel(id,()=>openPanel(id));
    else openPanel(id);
    return;
  }
  if(type==='subduction'){
    const sz=hit.get('subzone')||'';
    const subCanon={'nst':'canon_364','sangihe':'canon_369','halmahera':'canon_805'};
    // FEAT_TO_CANONICAL takes priority over geographic subzone (fixes NST/Sangihe overlap)
    const cid=FEAT_TO_CANONICAL[id]||subCanon[sz];
    if(cid) openCanonicalPanel(cid,()=>openSubPanel(hit));
    else openSubPanel(hit);
    return;
  }
  if(type==='new_fault'||type==='new_thrust'){
    if(FEAT_TO_CANONICAL[id]) openCanonicalPanel(id,()=>openPanel(id));
    else openPanel(id);
    return;
  }
  if(type==='hazard_zone'){openPanel(id);return;}
  if(type==='slab')      {openSlabPanel(hit);return;}
  if(type==='hikmy_fault'||type==='hikmy_belt'||type==='hikmy_point'){openHikmyPanel(hit);return;}
  if(type==='yuan_flow'||type==='yuan_point'){openYuanPanel(hit);return;}
  if(type==='canonical'){openCanonicalPanel(id);return;}
  if(type==='dileo_sks'){openDileoSKSPanel(hit);return;}
  if(type==='gps_vel')   {openGPSPanel(hit);return;}
  if(type==='plate_vel') {openPlateVelPanel(hit);return;}
  if(type==='kesuma_tomo'){
    const img=hit.get('ktomo_img')||'';
    const key=img.includes('fig3')?'kesumastuti_slab_config':'kesumastuti_slab_config';
    openPanel(key);return;
  }
  if(type==='jibran_cluster'||type==='hua_feature'||type==='hall_feature'||
     type==='fat25_h2seep'||type==='fat25_fault'||type==='fat25_area'){openPanel(id);return;}
  if(type==='serhalawan_feature'||type==='tomo_profile'||type==='hazard_zone'){openPanel(id);return;}
  if(type==='station')      {openStationPanel(hit);return;}
  if(type==='geoth_field')  {openGeothPanel(hit);return;}
  if(type==='pratama_manif'){openManifPanel(hit);return;}
});

// ── Touch tooltip ────────────────────────────────────────────────────────────
let _touchTipTimer=null;
map.getTargetElement().addEventListener('touchstart',evt=>{
  if(evt.touches.length!==1)return;
  const touch=evt.touches[0];
  const rect=map.getTargetElement().getBoundingClientRect();
  const pixel=[touch.clientX-rect.left,touch.clientY-rect.top];
  const hit=map.forEachFeatureAtPixel(pixel,f=>f,{hitTolerance:12});
  if(!hit)return;
  const html=buildTooltipHtml(hit);
  if(!html)return;
  tip.innerHTML=html;
  tip.style.left=Math.min(pixel[0]+14,rect.width-220)+'px';
  tip.style.top=Math.max(pixel[1]-52,6)+'px';
  tip.style.display='block';
  clearTimeout(_touchTipTimer);
  _touchTipTimer=setTimeout(()=>{tip.style.display='none';},1200);
},{passive:true});

// ── Contexto específico por estación GPS ─────────────────────────────────
const GPS_STATION_CONTEXT={
  'PALU':{
    bloque:'Bloque Sula / brazo central — sobre la PKF',
    interp:'Esta estación está ubicada en la ciudad de Palu, directamente sobre la Palu-Koro Fault. El vector hacia el E (Ve=+37.5 mm/yr) es la expresión geodésica del movimiento sinistral de la PKF: el bloque este se desplaza hacia el NE respecto al bloque de Sunda al oeste. Es la estación más representativa de la cinematica de la PKF.',
    nota:'Referencia ITRF2000. Período de observación pre-2018: no incluye la cosismic slip del terremoto de Palu.'
  },
  'MANU':{
    bloque:'Brazo norte — red Walpersdorf 1998',
    interp:'Primera red GPS de Sulawesi norte, diseñada para monitorear la convergencia NST. El vector NNE (~31 mm/yr) refleja el desplazamiento del bloque del brazo norte bajo la presión combinada del NST (convergencia con Mar de Célebes) y la PKF (absorción de la componente sinestral). Referencia ITRF94, período 1994-1997.',
    nota:'Medición pionera — la más antigua en el corpus. Referencia ITRF94: corrección de ~1-2 mm/yr al transformar a ITRF2000/2014.'
  },
  'TOLI':{
    bloque:'Brazo norte occidental — sobre Toli-Toli',
    interp:'Estación en el extremo occidental del brazo norte, cerca de la zona de transición NST-PKF. El vector E-NE (~36 mm/yr) es coherente con el bloque del brazo norte moviéndose colectivamente hacia el este, particionando la convergencia oblicua del NST.',
    nota:'Similar azimut a PALU (~74°E) — confirma coherencia del bloque norte como unidad cinemática.'
  },
  'UUNA':{
    bloque:'Brazo norte — Kepulauan Una-Una',
    interp:'Estación en las islas Una-Una, Golfo de Tomini. El vector ENE (~29 mm/yr) es ligeramente más lento que TOLI y PALU, posiblemente por posición más periférica respecto al bloque principal del brazo norte o por efectos de las estructuras del Golfo de Tomini.',
    nota:'Una-Una alberga el volcán activo Colo — posibles efectos locales de inflación/deflación volcánica sobre la velocidad medida.'
  },
  'TENT':{
    bloque:'Brazo norte — interior',
    interp:'Velocidad ENE (~24 mm/yr) menor que las estaciones costeras (TOLI, PALU). La reducción puede reflejar: (a) posición en el interior del bloque, más lejos de la carga cosísmica; (b) partición local de la deformación por estructuras secundarias no resueltas.',
    nota:'Período de observación relativamente corto (Socquet 2006). Incertidumbre mayor que estaciones con series temporales más largas.'
  },
  'MKSR':{
    bloque:'Makassar — plataforma de Sunda / bloque occidental',
    interp:'Estación en Makassar, brazo sur-oeste. La velocidad pequeña (~13 mm/yr) hacia el NNE es coherente con el movimiento de la placa de Sunda (referencia NNR-MORVEL56: ~29 mm/yr SE). La diferencia refleja que Sulawesi oeste se mueve más lentamente que el interior de Sunda — posible deformación interna absorbida por el WSFB y el MST.',
    nota:'Velocidad en marco ITRF2014 (Irsyam 2020) — directamente comparable con predicciones MORVEL56 en el mismo marco.'
  },
  'LUWI':{
    bloque:'Brazo este — Luwuk (zona colisión Banggai-Sula)',
    interp:'Estación en Luwuk, en el frente de colisión activo del microcontinente Banggai-Sula. El vector NE (~23 mm/yr) refleja el movimiento hacia el NO del bloque del brazo este respecto a Sunda, impulsado por la colisión que comenzó hace ~5-6 Ma. La dirección es coherente con el avance de la cuña de Banggai-Sula desde el este.',
    nota:'Zona de alta sismicidad activa (Batui Thrust, sismicidad GCMT). La velocidad integra tanto la deformación interseísmica como el bloqueo parcial del Batui Thrust.'
  },
  'GORO':{
    bloque:'Gorontalo — brazo norte, extremo E',
    interp:'Estación en Gorontalo, extremo este del brazo norte. El vector NE (~32 mm/yr) es coherente con el bloque norte, pero la dirección ligeramente más norte que TOLI (~57° vs ~74°E) sugiere una pequeña rotación del bloque norte a lo largo de su longitud. Consistente con modelos de rotación diferencial del brazo norte alrededor de una zona de bisagra vertical.',
    nota:'La Falla de Gorontalo (canon_789) cruza esta zona — posible influencia en la velocidad medida.'
  },
  'MMRI':{
    bloque:'Mamasa — brazo central/sur',
    interp:'Estación en el interior del brazo central-sur. La velocidad moderada (~14 mm/yr NNE) es coherente con el bloque Sulawesi occidental moviéndose más lento que el brazo norte, absorbiendo parte de la compresión del MST en el frente oeste.',
    nota:'Zona de interacción entre el West Sulawesi Fold Belt (WSFB) y el bloque del brazo sur. Posibles efectos transpresivos locales.'
  },
  'MASI':{
    bloque:'Masiamba — brazo norte interior',
    interp:'Velocidad ENE (~18 mm/yr) menor que estaciones costeras del brazo norte. Posición interior del bloque — más lejos de la carga cosísmica del NST. Coherente con deformación particionada entre la zona costera (alta sismicidad) y el interior más estable.',
    nota:'Período de observación Irsyam 2020. Referencia ITRF2014.'
  },
  'BNGG':{
    bloque:'Banggai — bloque del brazo este extremo',
    interp:'Estación en las islas Banggai, en el microcontinente Banggai-Sula. Es la velocidad más alta del corpus (~40 mm/yr E-NE): el bloque Banggai-Sula se mueve activamente hacia el oeste convergiendo con Sulawesi. El vector casi puramente hacia el Este (az~80°) es la expresión directa del movimiento relativo entre Banggai-Sula y el bloque Sulawesi.',
    nota:'La alta velocidad E refleja que Banggai-Sula está en una fase de convergencia activa (colisión en curso). Estación clave para cuantificar la tasa de cierre de la sutura del brazo este.'
  },
  'SNGK':{
    bloque:'Sangihe — arco volcánico norte',
    interp:'Estación en el arco Sangihe. La velocidad hacia el NNE (~14 mm/yr) es la más lenta y más hacia el norte del corpus — refleja que el arco Sangihe se mueve con el sistema Sangihe-placa Filipinas, que converge lentamente desde el NE. El arco no pertenece cinemáticamente al bloque principal de Sulawesi.',
    nota:'Ubicación en el arco activo: posibles perturbaciones por inflación volcánica de los volcanes Sangihe. Velocidad GPS puede tener componente magmática no tectónica.'
  },
};

// ── Contexto específico por placa MORVEL56 ──────────────────────────────
const PLATE_CONTEXT={
  'AU':{
    titulo:'Placa Indo-Australiana — convergencia directa (~70 mm/yr NNE)',
    interp:'Relativa a Sundaland, la placa Indo-Australiana converge ~70 mm/yr hacia el NNE (~18°). Este vector es el motor geodinámico principal: genera la subducción del NST al norte, el frente de colisión Banggai-Sula al este, el rollback del arco de Banda al SE, y el campo de esfuerzos compresivos que activa el Batui Thrust y el MST. Los 70 mm/yr representan el promedio geológico de los últimos ~3.2 Ma.',
    advertencia:'Velocidad relativa a Sundaland derivada de MORVEL56 NNR. Las estaciones GPS en el borde activo (Sulawesi, brazo este) muestran ~30–40 mm/yr porque solo absorben la fracción de convergencia no acomodada por el slab.',
  },
  'EU':{
    titulo:'Placa de Sunda — referencia (bloque anfitrión)',
    interp:'Sundaland es la referencia de este marco: velocidad = 0 por definición. Sulawesi occidental está acoplada a esta placa. Las estaciones GPS en Makassar muestran ~13 mm/yr NNE en ITRF, que en el marco Sundaland-fijo se acercan a 0 (la diferencia refleja deformación interna absorbida por el WSFB y el MST).',
    advertencia:'Sundaland no es una placa en MORVEL56 — se usa Eurasia como proxy, con diferencias de hasta 3–5 mm/yr en este sector. Las velocidades GPS en marco ITRF no son directamente comparables sin transformación de referencia.',
  },
  'PS':{
    titulo:'Placa de Filipinas — convergencia oblicua desde el NE (~88 mm/yr NNW)',
    interp:'Relativa a Sundaland, la placa de Filipinas converge ~88 mm/yr hacia el NNW (~338°). Esta convergencia es la fuente de subducción del Mar de Célebes (NST) y controla el crecimiento del arco del brazo norte. La componente oblicua (trench-parallel) se particiona entre el megathrushst (NST) y la PKF (sinestral). La velocidad relativa PS–Sunda es mayor que la velocidad absoluta PS porque ambas placas se mueven en sentidos opuestos.',
    advertencia:'La velocidad de ~88 mm/yr es la convergencia relativa Filipinas–Sundaland. La velocidad de subducción efectiva en el NST es menor porque parte se acomoda como deslizamiento sinestral en la PKF (partición cinemática).',
  },
  'PA':{
    titulo:'Placa Pacífica — movimiento dominante hacia el WNW (~94 mm/yr)',
    interp:'Relativa a Sundaland, la placa Pacífica se mueve ~94 mm/yr hacia el WNW (~287°). No tiene contacto directo con Sulawesi — su influencia llega mediada por la placa de Filipinas al oeste del límite Filipinas–Pacífico. Controla la dinámica del Mar de Filipinas y el back-arc.',
    advertencia:'La placa Pacífica no interactúa directamente con Sulawesi. Su vector se muestra como referencia de contexto regional del sistema de triple unión Indo-Australiana–Pacífica–Euroasiática.',
  },
  'CA':{
    titulo:'Placa de Caroline — movimiento menor (~8 mm/yr NNE)',
    interp:'Relativa a Sundaland, la placa de Caroline se mueve solo ~8 mm/yr, con alta incertidumbre. Se sitúa al este de Halmahera y norte de Nueva Guinea. Su interacción con el sistema de Sulawesi es indirecta — contribuye al contexto de la doble subducción de las Molucas (Sangihe+Halmahera).',
    advertencia:'Caroline no está incluida en MORVEL56 original; los parámetros usados son los de Argus et al. (2011) y tienen mayor incertidumbre que las placas mayores. La velocidad pequeña (~8 mm/yr) está en el rango de incertidumbre del modelo.',
  },
};

function openGPSPanel(feat){
  const sta=feat.get('gps_station')||'?';
  const ve=feat.get('gps_ve'), vn=feat.get('gps_vn');
  const mag=ve!=null&&vn!=null?Math.round(Math.sqrt(ve*ve+vn*vn)):null;
  const az=ve!=null&&vn!=null?Math.round(Math.atan2(ve,vn)*180/Math.PI):null;
  const src=feat.get('gps_source')||'';
  const dbKey=src.includes('Walpersdorf')?'gps_vel_walpersdorf':src.includes('Irsyam')?'gps_vel_irsyam':'gps_vel_socquet';
  const db=DB[dbKey];
  const ctx=GPS_STATION_CONTEXT[sta];

  document.getElementById('pt').textContent='Velocidad GPS — medición directa';
  document.getElementById('pt').style.color=GPS_COL;
  document.getElementById('pti').textContent=`${sta}${ctx?' — '+ctx.bloque:''}`;

  let html=`<div class="ptags">
    <span class="ptag" style="color:${GPS_COL};border-color:rgba(34,197,94,.4);background:rgba(34,197,94,.12)">Medición directa</span>
    ${mag!=null?`<span class="ptag" style="color:#444;border-color:#44444440;background:#44444412">${mag} mm/yr</span>`:''}
    ${az!=null?`<span class="ptag" style="color:#444;border-color:#44444440;background:#44444412">${az}° (azimut)</span>`:''}
  </div>
  <div style="display:grid;grid-template-columns:auto 1fr;gap:2px 8px;margin:6px 0 8px;font-family:monospace">
    <div style="font-size:.59rem;color:var(--dim)">Ve (E)</div><div style="font-size:.59rem;color:var(--text)">${ve!=null?ve+' mm/yr':'—'}</div>
    <div style="font-size:.59rem;color:var(--dim)">Vn (N)</div><div style="font-size:.59rem;color:var(--text)">${vn!=null?vn+' mm/yr':'—'}</div>
    <div style="font-size:.59rem;color:var(--dim)">Fuente</div><div style="font-size:.59rem;color:var(--text)">${src}</div>
  </div>
  <div style="margin:0 0 8px;padding:5px 8px;background:rgba(34,197,94,.07);border-left:3px solid rgba(34,197,94,.5);border-radius:3px">
    <div style="font-size:.58rem;color:rgba(34,197,94,.9);font-weight:bold;margin-bottom:2px">Marco: Sunda-fijo</div>
    <div style="font-size:.58rem;color:var(--dim);line-height:1.55">La rotación de la placa de Sunda fue substraída de todas las mediciones. Sulawesi occidental queda en cero por definición — lo que se ve es movimiento <em>relativo a la placa anfitriona</em>. Por eso no es directamente comparable con los vectores MORVEL56 (azules), que usan marco NNR donde Sunda sí se mueve (~29 mm/yr SE).</div>
  </div>`;

  if(ctx){
    html+=`<div class="psec">Interpretación geodinámica</div>
      <div class="pdesc" style="font-size:.63rem;line-height:1.6">${ctx.interp}</div>`;
    if(ctx.nota){
      html+=`<div style="margin:4px 0 6px;padding:4px 8px;background:rgba(204,120,92,.08);border-left:3px solid rgba(204,120,92,.5);border-radius:3px;font-size:.58rem;color:var(--dim);line-height:1.5">${ctx.nota}</div>`;
    }
  }

  if(db){
    html+=`<div class="psec">Fuente</div>`;
    db.papers.forEach(p=>{html+=renderPaper(p);});
  }
  document.getElementById('pb').innerHTML=html;
  document.getElementById('panel').classList.remove('closed');
}

function openPlateVelPanel(feat){
  const plate=feat.get('pv_plate')||'?';
  const name=feat.get('pv_name')||plate;
  const mag=feat.get('pv_mag');
  const ve=feat.get('pv_ve'), vn=feat.get('pv_vn');
  const az=ve!=null&&vn!=null?Math.round(Math.atan2(+ve,+vn)*180/Math.PI):null;
  const ctx=PLATE_CONTEXT[plate];

  document.getElementById('pt').textContent='Velocidad MORVEL56 — derivada geológicamente';
  document.getElementById('pt').style.color=PLATE_COL;
  document.getElementById('pti').textContent=ctx?ctx.titulo:name;

  let html=`<div class="ptags">
    <span class="ptag" style="color:${PLATE_COL};border-color:rgba(56,189,248,.4);background:rgba(56,189,248,.1)">Modelo geológico</span>
    ${mag!=null?`<span class="ptag" style="color:#444;border-color:#44444440;background:#44444412">${mag} mm/yr</span>`:''}
    ${az!=null?`<span class="ptag" style="color:#444;border-color:#44444440;background:#44444412">${(az+360)%360}° azimut</span>`:''}
  </div>
  <div style="display:grid;grid-template-columns:auto 1fr;gap:2px 8px;margin:6px 0 8px;font-family:monospace">
    <div style="font-size:.59rem;color:var(--dim)">Ve (E)</div><div style="font-size:.59rem;color:var(--text)">${ve!=null?ve+' mm/yr':'—'}</div>
    <div style="font-size:.59rem;color:var(--dim)">Vn (N)</div><div style="font-size:.59rem;color:var(--text)">${vn!=null?vn+' mm/yr':'—'}</div>
    <div style="font-size:.59rem;color:var(--dim)">Marco ref.</div><div style="font-size:.59rem;color:var(--text)">Sundaland-fijo (NNR-MORVEL56)</div>
    <div style="font-size:.59rem;color:var(--dim)">Período datos</div><div style="font-size:.59rem;color:var(--text)">~3.2 Ma (promedio geológico)</div>
  </div>`;

  if(ctx){
    html+=`<div class="psec">Interpretación para Sulawesi</div>
      <div class="pdesc" style="font-size:.63rem;line-height:1.6">${ctx.interp}</div>`;
    html+=`<div style="margin:6px 0;padding:5px 8px;background:rgba(56,189,248,.07);border-left:3px solid rgba(56,189,248,.5);border-radius:3px">
      <div style="font-size:.58rem;color:rgba(56,189,248,.9);font-weight:bold;margin-bottom:2px">Qué es este dato</div>
      <div style="font-size:.58rem;color:var(--dim);line-height:1.55">${ctx.advertencia}</div>
    </div>`;
  }

  html+=`<div style="margin:6px 0;padding:5px 8px;background:rgba(56,189,248,.07);border-left:3px solid rgba(56,189,248,.5);border-radius:3px">
    <div style="font-size:.58rem;color:rgba(56,189,248,.9);font-weight:bold;margin-bottom:2px">Marco Sundaland-fijo — ¿comparable con el GPS verde?</div>
    <div style="font-size:.58rem;color:var(--dim);line-height:1.55">Ambos marcos restan la rotación de Sunda, por lo que los vectores azules (MORVEL56) y verdes (GPS) son directamente comparables en dirección y orden de magnitud. La diferencia residual refleja: (a) que el GPS promedia <em>décadas</em>, MORVEL56 promedia <em>3.2 Ma</em>; (b) deformación interna de Sulawesi no capturada por el modelo de placas rígidas.</div>
  </div>`;

  html+=`<div class="psec">Fuente</div>`;
  DB['plate_vel_morvel'].papers.forEach(p=>{html+=renderPaper(p);});

  document.getElementById('pb').innerHTML=html;
  document.getElementById('panel').classList.remove('closed');
}

function openStationPanel(feat){
  const code=feat.get('sta_code')||'?';
  const name=feat.get('sta_name')||code;
  const net=feat.get('sta_net')||'—';
  document.getElementById('pt').textContent='Estación sismológica';
  document.getElementById('pt').style.color='#60a5fa';
  document.getElementById('pti').textContent=`${code} — ${name}`;
  const html=`<div class="ptags">
    <span class="ptag" style="color:#60a5fa;border-color:#60a5fa40;background:#60a5fa12">${net}</span>
  </div>
  <div class="psec">Red</div>
  <div class="pdesc" style="font-size:.65rem">Red: ${net} &nbsp;·&nbsp; Código: ${code}</div>
  <div class="psec">Fuente</div>
  ${renderPaper({ref:'BMKG / GEOFON (2024)',title:'Jaringan Seismografi BMKG + GEOFON Indonesia',journal:'iris.edu/fdsnws/station — recuperado vía IRIS FDSN Station WS',find:'Estaciones sismológicas activas en Sulawesi. Red BMKG Indonesia + red GEOFON Germany. Datos de posición y red desde IRIS FDSN /fdsnws/station/1/query.'})}`;
  document.getElementById('pb').innerHTML=html;
  document.getElementById('panel').classList.remove('closed');
}

