const REGION_ORDER = ["Wereld","Nederland","Europa","Afrika","Azië","Amerika","Oceanië"];

const WORLD_GEO_URLS = [
  "https://raw.githubusercontent.com/martynafford/natural-earth-geojson/master/10m/cultural/ne_10m_admin_0_countries.json",
  "https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json"
];
const NL_PROVINCE_URLS = [
  "https://cartomap.github.io/nl/wgs84/provincie_2025.geojson",
  "https://cartomap.github.io/nl/wgs84/provincie_2024.geojson",
  "https://cartomap.github.io/nl/wgs84/provincie_2023.geojson"
];
const NL_BORDER_DETAIL_URLS = [
  "https://cartomap.github.io/nl/wgs84/gemeente_2025.geojson",
  "https://cartomap.github.io/nl/wgs84/gemeente_2024.geojson",
  "https://raw.githubusercontent.com/cartomap/nl/master/wgs84/gemeente_2025.geojson",
  "https://raw.githubusercontent.com/cartomap/nl/master/wgs84/gemeente_2024.geojson"
];

const NL_CUSTOM_AREA_FEATURES = {
  achterhoek: { type:'Feature', properties:{ name:'Achterhoek' }, geometry:{ type:'Polygon', coordinates:[[[6.00,51.80],[6.61,51.80],[6.61,52.16],[6.00,52.16],[6.00,51.80]]] } },
  veluwe: { type:'Feature', properties:{ name:'Veluwe' }, geometry:{ type:'Polygon', coordinates:[[[5.55,51.94],[6.12,51.94],[6.12,52.44],[5.55,52.44],[5.55,51.94]]] } },
  twente: { type:'Feature', properties:{ name:'Twente' }, geometry:{ type:'Polygon', coordinates:[[[6.42,52.10],[7.10,52.10],[7.10,52.48],[6.42,52.48],[6.42,52.10]]] } },
  salland: { type:'Feature', properties:{ name:'Salland' }, geometry:{ type:'Polygon', coordinates:[[[6.07,52.25],[6.52,52.25],[6.52,52.66],[6.07,52.66],[6.07,52.25]]] } },
  noordoostpolder: { type:'Feature', properties:{ name:'Noordoostpolder' }, geometry:{ type:'Polygon', coordinates:[[[5.55,52.55],[6.18,52.55],[6.18,52.87],[5.55,52.87],[5.55,52.55]]] } },
  walcheren: { type:'Feature', properties:{ name:'Walcheren' }, geometry:{ type:'Polygon', coordinates:[[[3.43,51.43],[3.73,51.43],[3.73,51.64],[3.43,51.64],[3.43,51.43]]] } },
  'zeeuws vlaanderen': { type:'Feature', properties:{ name:'Zeeuws-Vlaanderen' }, geometry:{ type:'Polygon', coordinates:[[[3.39,51.18],[4.24,51.18],[4.24,51.40],[3.39,51.40],[3.39,51.18]]] } },
  'goeree overflakkee': { type:'Feature', properties:{ name:'Goeree-Overflakkee' }, geometry:{ type:'Polygon', coordinates:[[[3.79,51.67],[4.39,51.67],[4.39,51.90],[3.79,51.90],[3.79,51.67]]] } }
};

const WATER_SHAPES = {
  donau:{type:"line",coords:[[48.11,8.23],[48.95,9.18],[48.78,13.04],[48.21,16.37],[48.15,17.11],[47.50,19.04],[45.25,28.97]],hoverKm:55,hitKm:24},
  rijn:{type:"line",coords:[[47.58,8.82],[47.56,7.59],[49.99,8.27],[50.94,6.96],[51.92,4.48]],hoverKm:42,hitKm:18},
  elbe:{type:"line",coords:[[50.66,14.04],[50.87,14.24],[51.05,13.74],[51.34,12.37],[52.41,9.74],[53.55,9.99],[53.88,8.70]],hoverKm:38,hitKm:16},
  taag:{type:"line",coords:[[40.32,-1.69],[39.86,-4.03],[39.47,-6.37],[39.00,-8.96]],hoverKm:44,hitKm:18},
  seine:{type:"line",coords:[[47.95,4.58],[48.85,2.35],[49.44,1.09],[49.49,0.10]],hoverKm:34,hitKm:14},
  loire:{type:"line",coords:[[44.84,3.86],[45.76,3.08],[47.22,-1.55],[47.28,-2.21]],hoverKm:40,hitKm:16},
  rhone:{type:"line",coords:[[46.37,6.46],[45.76,4.84],[44.14,4.81],[43.30,4.80]],hoverKm:36,hitKm:15},
  oder:{type:"line",coords:[[49.65,17.35],[50.67,14.97],[52.41,14.55],[53.43,14.55]],hoverKm:38,hitKm:16},
  maas:{type:"line",coords:[[47.96,5.52],[50.85,5.69],[51.44,5.48],[51.92,4.48]],hoverKm:28,hitKm:13},
  moezel:{type:"line",coords:[[47.98,7.58],[49.61,6.13],[49.76,6.64],[50.36,7.60]],hoverKm:25,hitKm:12},
  main:{type:"line",coords:[[50.11,11.54],[49.79,9.94],[50.00,8.27],[50.11,8.68],[49.99,8.27]],hoverKm:24,hitKm:12},
  saone:{type:"line",coords:[[48.00,6.30],[47.31,5.04],[46.78,4.85],[45.76,4.84]],hoverKm:28,hitKm:12},
  tiber:{type:"line",coords:[[43.46,12.24],[42.35,12.58],[41.90,12.47]],hoverKm:20,hitKm:10},
  theems:{type:"line",coords:[[51.70,-2.25],[51.51,-0.13],[51.50,0.00]],hoverKm:22,hitKm:10},
  ebro:{type:"line",coords:[[42.69,-2.95],[41.65,-0.89],[41.62,0.62]],hoverKm:28,hitKm:12},
  "middellandse zee":{type:"ellipse",center:[38.6,15.0],rxKm:1200,ryKm:520,rotation:0},
  noordzee:{type:"ellipse",center:[56.0,3.0],rxKm:620,ryKm:410,rotation:-18},
  oostzee:{type:"ellipse",center:[57.8,20.0],rxKm:780,ryKm:240,rotation:28},
  "zwarte zee":{type:"ellipse",center:[43.2,34.0],rxKm:560,ryKm:300,rotation:7},
  "adriatische zee":{type:"ellipse",center:[43.4,15.5],rxKm:430,ryKm:110,rotation:132},
  "egeische zee":{type:"ellipse",center:[38.8,25.0],rxKm:280,ryKm:170,rotation:25},
  "ionische zee":{type:"ellipse",center:[37.7,19.5],rxKm:330,ryKm:240,rotation:0},
  "tyrrheense zee":{type:"ellipse",center:[40.1,11.8],rxKm:390,ryKm:250,rotation:0},
  "noorse zee":{type:"ellipse",center:[66.0,2.0],rxKm:900,ryKm:520,rotation:-8},
  barentszzee:{type:"ellipse",center:[74.0,40.0],rxKm:980,ryKm:430,rotation:12},
  "keltische zee":{type:"ellipse",center:[50.2,-8.5],rxKm:330,ryKm:200,rotation:-8},
  "ierse zee":{type:"ellipse",center:[53.7,-5.0],rxKm:180,ryKm:240,rotation:12},
  "ligurische zee":{type:"ellipse",center:[43.8,9.5],rxKm:200,ryKm:95,rotation:20},
  "balearische zee":{type:"ellipse",center:[39.4,2.0],rxKm:240,ryKm:170,rotation:15},
  alboranzee:{type:"ellipse",center:[35.8,-3.3],rxKm:230,ryKm:110,rotation:0},
  "botnische golf":{type:"ellipse",center:[62.7,19.5],rxKm:420,ryKm:130,rotation:18},
  "finse golf":{type:"ellipse",center:[59.9,26.5],rxKm:300,ryKm:70,rotation:10},
  "zee van marmara":{type:"ellipse",center:[40.75,27.75],rxKm:110,ryKm:45,rotation:5},
  "witte zee":{type:"ellipse",center:[65.6,38.0],rxKm:230,ryKm:180,rotation:-10},
  skagerrak:{type:"ellipse",center:[58.2,9.0],rxKm:180,ryKm:95,rotation:-18},
  "straat van gibraltar":{type:"ellipse",center:[35.95,-5.6],rxKm:62,ryKm:16,rotation:10},
  bosporus:{type:"ellipse",center:[41.15,29.1],rxKm:26,ryKm:5,rotation:35},
  kattegat:{type:"ellipse",center:[57.6,11.2],rxKm:160,ryKm:80,rotation:18},
  "het kanaal":{type:"ellipse",center:[50.2,-1.8],rxKm:430,ryKm:95,rotation:12},
  gardameer:{type:"ellipse",center:[45.65,10.63],rxKm:28,ryKm:10,rotation:24},
  comomeer:{type:"ellipse",center:[46.0,9.26],rxKm:20,ryKm:6,rotation:18},
  ijsselmeer:{type:"ellipse",center:[52.8,5.4],rxKm:32,ryKm:22,rotation:0}
};


async function fetchJsonFromUrls(urls){
  const cacheModes = ["force-cache", "default", "no-cache"];
  for (const cacheMode of cacheModes) {
    for (const url of urls) {
      try {
        const res = await fetch(url, { cache: cacheMode });
        if (!res.ok) continue;
        const data = await res.json();
        if (data) return data;
      } catch {}
    }
  }
  return null;
}

function normalizeCoordinate(coord){
  return [Number(coord[0].toFixed(7)), Number(coord[1].toFixed(7))];
}

function buildNetherlandsOuterBorder(featureCollection){
  const edgeCounts = new Map();
  const edgeCoords = new Map();

  function addRing(ring){
    if (!Array.isArray(ring) || ring.length < 2) return;
    for (let i = 0; i < ring.length - 1; i++) {
      const start = normalizeCoordinate(ring[i]);
      const end = normalizeCoordinate(ring[i + 1]);
      const forward = `${start[0]},${start[1]}|${end[0]},${end[1]}`;
      const reverse = `${end[0]},${end[1]}|${start[0]},${start[1]}`;
      const key = forward < reverse ? forward : reverse;
      edgeCounts.set(key, (edgeCounts.get(key) || 0) + 1);
      if (!edgeCoords.has(key)) edgeCoords.set(key, [start, end]);
    }
  }

  for (const feature of featureCollection?.features || []) {
    const geometry = feature?.geometry;
    if (!geometry) continue;
    if (geometry.type === 'Polygon') {
      geometry.coordinates.forEach(addRing);
    } else if (geometry.type === 'MultiPolygon') {
      geometry.coordinates.forEach(poly => poly.forEach(addRing));
    }
  }

  const adjacency = new Map();
  for (const [key, count] of edgeCounts.entries()) {
    if (count !== 1) continue;
    const [start, end] = edgeCoords.get(key);
    const sk = `${start[0]},${start[1]}`;
    const ek = `${end[0]},${end[1]}`;
    if (!adjacency.has(sk)) adjacency.set(sk, []);
    if (!adjacency.has(ek)) adjacency.set(ek, []);
    adjacency.get(sk).push({ key, next: ek, coord: end });
    adjacency.get(ek).push({ key, next: sk, coord: start });
  }

  const visited = new Set();
  const lines = [];
  for (const [startKey, edges] of adjacency.entries()) {
    for (const edge of edges) {
      if (visited.has(edge.key)) continue;
      const line = [];
      let currentKey = startKey;
      let previousKey = null;
      line.push(currentKey.split(',').map(Number));
      while (true) {
        const candidates = (adjacency.get(currentKey) || []).filter(item => !visited.has(item.key));
        let nextEdge = candidates.find(item => item.next !== previousKey) || candidates[0];
        if (!nextEdge) break;
        visited.add(nextEdge.key);
        previousKey = currentKey;
        currentKey = nextEdge.next;
        line.push(currentKey.split(',').map(Number));
        if (currentKey === startKey) break;
      }
      if (line.length > 2) lines.push(line);
    }
  }

  if (!lines.length) return null;
  return {
    type: 'Feature',
    properties: { name: 'Nederland' },
    geometry: {
      type: 'MultiLineString',
      coordinates: lines
    }
  };
}

function getBoundaryWeights(){
  const zoom = state.map?.getZoom?.() ?? 5;
  return {
    country: zoom <= 4 ? 0.5 : zoom <= 5 ? 0.68 : zoom <= 6 ? 0.84 : 1.0,
    province: zoom <= 6 ? 0.9 : zoom <= 7 ? 1.08 : 1.28,
    netherlands: zoom <= 6 ? 0.9 : zoom <= 7 ? 1.1 : zoom <= 8 ? 1.3 : 1.5,
    highlight: zoom <= 5 ? 3.2 : zoom <= 6 ? 3.8 : 4.4
  };
}

function restyleBoundaryLayers(){
  const w = getBoundaryWeights();
  if (state.countryLayer?.setStyle) {
    state.countryLayer.setStyle({ weight: w.country });
  }
  if (state.provinceLayer?.eachLayer) {
    state.provinceLayer.eachLayer(layer => {
      if (layer?.setStyle) layer.setStyle({ weight: w.province });
    });
  }
  if (state.borderLayer?.setStyle) {
    state.borderLayer.setStyle({ weight: w.netherlands });
  }
  if (state.highlightLayer?.setStyle) {
    state.highlightLayer.setStyle({ weight: w.highlight });
  }
}

const state = {
  assignments: [],
  selectedAssignmentId: null,
  gameMode: "heli",
  period: "all",
  practice: false,
  map: null,
  worldGeo: null,
  nlProvinceGeo: null,
  highlightLayer: null,
  provinceLayer: null,
  countryLayer: null,
  countryRenderer: null,
  targetCountryFeature: null,
  targetAreaFeature: null,
  currentAssignment: null,
  currentMission: null,
  remaining: [],
  score: 0,
  streak: 0,
  timer: 90,
  velocity: { x: 0, y: 0 },
  keys: { left:false, right:false, up:false, down:false, space:false },
  heliAngle: 0,
  lastTs: 0,
  frame: null,
  gameActive: false,
  wrongAnswers: 0,
  startedAt: 0,
  elapsedSeconds: 0,
  pendingHighscore: null,
  user: null,
  gameDuration: 90,
  pendingResolvedPlaces: null,
  endsAtMs: 0,
  hitFlashUntil: 0,
  editingAssignmentId: null,
  hitFlashFeature: null,
  hitFlashLatLng: null,
  missionLockedUntil: 0,
  missionAttempts: 0,
  namingTolerance: localStorage.getItem("topoheli_naming_tolerance") || "lenient",
  heliSoundEnabled: localStorage.getItem("topoheli_heli_sound") !== "0",
  fxSoundEnabled: localStorage.getItem("topoheli_fx_sound") !== "0",
  audio: {
    ctx: null,
    heliEl: null
  },
  targetMarker: null,
  targetPulse: null,
  borderLayer: null,
  nlBorderGeo: null,
  tipsUsed: 0,
  currentMissionUsedTip: false,
  geoPanesReady: false,
  currentWaterSpec: null,
  highlightMode: null,
  worldOverlayFailures: 0,
  worldOverlayLastCheckAt: 0,
  countryAliasExtra: {
    luxemburg:['luxembourg','grand duchy of luxembourg','lux'],
    australie:['australia','commonwealth of australia','australie'],
    friesland:['fryslan','fryslân']
  },
  regions: [...REGION_ORDER],
  heliSpeedProfiles: {},
  assignmentGroupOpen: null
};

const els = {};
[
  "menuScreen","gameScreen","assignmentList","playerNameInput","selectedGameLabel","highscoreList",
  "startBtn","practiceBtn","modeHeliBtn","modeNamingBtn","rulesTime","missionText","timeStat","scoreStat","streakStat",
  "namingPanel","answerInput","answerBtn","answerFeedback","heli","targetDot","nextMissionBtn","menuBtn",
  "teacherLoginOpenBtn","teacherLogoutBtn","teacherPanel","teacherAssignmentList","teacherHighscoreList","teacherMissList",
  "soundHeliBtn","soundFxBtn","spellStrictBtn","spellLenientBtn",
  "loginDialog","loginUsernameInput","loginPasswordInput","loginError","loginSubmitBtn","loginCancelBtn",
  "assignmentNameInput","assignmentRegionInput","assignmentRegionCustomInput","assignmentDifficultyInput","assignmentPayloadInput","createAssignmentBtn",
  "fullscreenBtn","gameFullscreenBtn","periodAllBtn","periodWeekBtn","periodDayBtn",
  "startInlineBtn","summaryScreen","summaryStats","summaryHighscore","summaryNameWrap","summaryNameInput","summarySaveBtn","summaryReplayBtn","summaryMenuBtn",
  "adminPanel","adminTeacherUsernameInput","adminTeacherPasswordInput","adminCreateTeacherBtn","adminTeacherList","adminRegionNameInput","adminCreateRegionBtn","adminRegionList","adminSpeedSettings","adminSaveSpeedBtn","adminSpeedStatus","lookupStatus","lookupSummary","lookupIssues","lookupConfirmBtn","lookupCancelBtn","cancelEditAssignmentBtn","appVersionLabel","debugIndicator"
].forEach(id => els[id] = document.getElementById(id));

async function api(path, options = {}) {
  const res = await fetch(path, {
    credentials: "include",
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options
  });
  const type = res.headers.get("content-type") || "";
  const data = type.includes("application/json") ? await res.json().catch(() => ({})) : null;
  if (!res.ok) throw new Error(data?.error || "Er ging iets mis.");
  return data;
}
function normalize(text){
  return (text || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9\s-]/g," ").replace(/\s+/g," ").trim();
}
function compactCountryKey(text){
  return normalize(text).replace(/[\s-]+/g, "");
}
function nameVariants(text){
  const base = normalize(text);
  if (!base) return [];
  const variants = new Set([base, compactCountryKey(base)]);
  if (base.includes('-')) variants.add(base.replace(/-/g, ' '));
  if (base.includes(' ')) variants.add(base.replace(/\s+/g, '-'));
  if (base.startsWith('the ')) {
    const withoutArticle = base.slice(4).trim();
    variants.add(withoutArticle);
    variants.add(compactCountryKey(withoutArticle));
  }
  return [...variants].filter(Boolean);
}
function levenshtein(a,b){
  const m=a.length,n=b.length;
  const d=Array.from({length:m+1},()=>Array(n+1).fill(0));
  for(let i=0;i<=m;i++) d[i][0]=i;
  for(let j=0;j<=n;j++) d[0][j]=j;
  for(let i=1;i<=m;i++) for(let j=1;j<=n;j++){
    const c=a[i-1]===b[j-1]?0:1;
    d[i][j]=Math.min(d[i-1][j]+1,d[i][j-1]+1,d[i-1][j-1]+c);
  }
  return d[m][n];
}
function correctAnswer(input, expected){
  const a = normalize(input), b = normalize(expected);
  if (!a.length) return false;
  if (state.namingTolerance === "strict") return a === b;
  const max = b.length <= 5 ? 1 : b.length <= 9 ? 2 : 3;
  return a === b || levenshtein(a,b) <= max;
}
function shuffle(arr){
  const a=[...arr];
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}
function currentAssignment(){
  return state.assignments.find(a => a.id === state.selectedAssignmentId) || state.assignments[0] || null;
}
function updateModeButtons(){
  els.modeHeliBtn.classList.toggle("active", state.gameMode === "heli");
  els.modeNamingBtn.classList.toggle("active", state.gameMode === "naming");
  els.rulesTime.textContent = "90";
}
function updatePeriodButtons(){
  els.periodAllBtn.classList.toggle("active", state.period === "all");
  els.periodWeekBtn.classList.toggle("active", state.period === "week");
  els.periodDayBtn.classList.toggle("active", state.period === "day");
}
function updateSelectedGameLabel(){
  const a = currentAssignment();
  if (!a) return;
  els.selectedGameLabel.textContent = `${a.name} · ${state.gameMode === "heli" ? "TopoHeli" : "Namen noemen"} · ${state.period === "all" ? "all time" : state.period === "week" ? "deze week" : "vandaag"}`;
}

function baseSpeedProfileForRegion(region){
  if (region === "Nederland") return { maxSpeed: 236, thrust: 720, moveBrake: 0.991, idleBrake: 0.952, boost: 1.10 };
  if (region === "Wereld") return { maxSpeed: 270, thrust: 800, moveBrake: 0.992, idleBrake: 0.956, boost: 1.12 };
  return { maxSpeed: 286, thrust: 850, moveBrake: 0.993, idleBrake: 0.958, boost: 1.14 };
}
function getHeliSpeedFactor(region){
  const value = Number(state.heliSpeedProfiles?.[region]);
  return Number.isFinite(value) && value > 0 ? value : 1;
}
function getHeliSpeedProfile(region){
  const base = baseSpeedProfileForRegion(region);
  const factor = getHeliSpeedFactor(region);
  return {
    maxSpeed: base.maxSpeed * factor,
    thrust: base.thrust * factor,
    moveBrake: base.moveBrake,
    idleBrake: base.idleBrake,
    boost: 1 + ((base.boost - 1) * factor)
  };
}
function formatSpeedFactor(value){
  return Number(value || 1).toFixed(2).replace('.', ',');
}
async function loadHeliSpeedProfiles(){
  try {
    const result = await api('/api/settings/heli-speeds');
    state.heliSpeedProfiles = result?.profiles && typeof result.profiles === 'object' ? result.profiles : {};
  } catch {
    state.heliSpeedProfiles = {};
  }
}
function renderAdminSpeedSettings(){
  if (!els.adminSpeedSettings) return;
  const baseRegions = state.regions?.length ? state.regions : REGION_ORDER;
  const extraRegions = [...new Set(state.assignments.map(a => a.region || 'Wereld').filter(Boolean).filter(region => !baseRegions.includes(region)))];
  const regions = [...baseRegions, ...extraRegions];
  els.adminSpeedSettings.innerHTML = regions.map(region => `
    <div class="adminSpeedCard">
      <label for="speed_${normalize(region).replace(/[^a-z0-9]+/g,'_')}">${region}</label>
      <input id="speed_${normalize(region).replace(/[^a-z0-9]+/g,'_')}" class="adminSpeedInput" data-region="${region}" inputmode="decimal" value="${formatSpeedFactor(getHeliSpeedFactor(region))}" />
    </div>
  `).join('');
}
async function saveAdminSpeedSettings(){
  if (state.user?.role !== 'admin') return;
  const profiles = {};
  const inputs = [...document.querySelectorAll('.adminSpeedInput')];
  for (const input of inputs) {
    const raw = String(input.value || '').trim().replace(',', '.');
    const value = Number(raw || '1');
    const region = input.dataset.region;
    if (!Number.isFinite(value) || value < 0.4 || value > 1.6) {
      input.focus();
      throw new Error(`Snelheidsfactor voor ${region} moet tussen 0,40 en 1,60 liggen.`);
    }
    profiles[region] = Number(value.toFixed(2));
  }
  const result = await api('/api/admin/settings/heli-speeds', {
    method:'PUT',
    body: JSON.stringify({ profiles })
  });
  state.heliSpeedProfiles = result?.profiles || profiles;
  renderAdminSpeedSettings();
  if (els.adminSpeedStatus) els.adminSpeedStatus.textContent = 'Snelheden opgeslagen.';
}

function renderAssignments(){
  els.assignmentList.innerHTML = "";
  const baseRegions = state.regions?.length ? state.regions : REGION_ORDER;
  const extraRegions = [...new Set(state.assignments.map(a => a.region || "Wereld").filter(region => !baseRegions.includes(region)))];
  const orderedRegions = [...baseRegions, ...extraRegions];
  const groups = orderedRegions.map(region => ({ region, items: state.assignments.filter(a => (a.region || "Wereld") === region) }))
    .filter(group => group.items.length);

  groups.forEach(group => {
    const section = document.createElement("section");
    section.className = "assignmentGroup";
    const isOpen = state.assignmentGroupOpen === group.region;
    section.innerHTML = `
      <button class="assignmentGroupToggle ${isOpen ? "open" : ""}" type="button" aria-expanded="${isOpen ? "true" : "false"}">
        <span>${group.region}</span>
        <span class="assignmentGroupCount">${group.items.length}</span>
      </button>
      <div class="assignmentGroupBody ${isOpen ? "" : "hidden"}"></div>`;
    const toggle = section.querySelector(".assignmentGroupToggle");
    const body = section.querySelector(".assignmentGroupBody");
    toggle.addEventListener("click", () => {
      state.assignmentGroupOpen = group.region;
      renderAssignments();
    });
    group.items.forEach(a => {
      const div = document.createElement("div");
      div.className = "assignmentItem";
      div.innerHTML = `
        <input type="radio" id="ass-${a.id}" name="assignmentChoice" ${a.id === state.selectedAssignmentId ? "checked" : ""}>
        <label for="ass-${a.id}">
          <div>
            <div><strong>${a.name}</strong></div>
            <div class="muted">${a.difficulty ? a.difficulty : (a.region || "")}</div>
          </div>
        </label>`;
      div.querySelector("input").addEventListener("change", () => {
        state.selectedAssignmentId = a.id;
        state.assignmentGroupOpen = a.region || "Wereld";
        updateSelectedGameLabel();
        loadHighscores();
        renderAssignments();
      });
      body.appendChild(div);
    });
    els.assignmentList.appendChild(section);
  });
}
async function loadAssignments(){
  state.assignments = await api("/api/assignments/public");
  if (!state.selectedAssignmentId && state.assignments[0]) state.selectedAssignmentId = state.assignments[0].id;
  const selected = currentAssignment();
  if (state.assignmentGroupOpen && !state.assignments.some(a => (a.region || "Wereld") === state.assignmentGroupOpen)) {
    state.assignmentGroupOpen = null;
  }
  renderAssignments();
  updateSelectedGameLabel();
  await loadHighscores();
  if (state.user?.role === "admin") renderAdminSpeedSettings();
}
async function loadHighscores(){
  const a = currentAssignment();
  if (!a) return;
  const rows = await api(`/api/highscores?assignmentId=${a.id}&gameMode=${state.gameMode}&period=${state.period}`);
  const medals = ["🥇","🥈","🥉"];
  els.highscoreList.innerHTML = rows.length ? rows.map((r, i) => `<li><span class="medal">${medals[i] || "🏅"}</span> <strong>${r.player_name}</strong> — ${formatScore(r.score)}</li>`).join("") : "<li>Nog geen highscores.</li>";
}

async function postPlayLog(payload){
  return await api("/api/play-log", { method:"POST", body: JSON.stringify(payload) });
}

function refreshRegionCustomVisibility(){
  const custom = els.assignmentRegionInput?.value === "__custom__";
  els.assignmentRegionCustomInput?.classList.toggle("hidden", !custom);
}

function refreshRegionSelect(){
  if (!els.assignmentRegionInput) return;
  const current = els.assignmentRegionInput.value || "Europa";
  const options = [...new Set([...(state.regions || REGION_ORDER), current])];
  els.assignmentRegionInput.innerHTML = options.map(region => `<option value="${region}" ${region === current ? "selected" : ""}>${region}</option>`).join("") + `<option value="__custom__">+ Nieuwe regio...</option>`;
  if (current && options.includes(current)) els.assignmentRegionInput.value = current;
  refreshRegionCustomVisibility();
}

async function loadRegions(){
  state.regions = await api("/api/regions").catch(() => [...REGION_ORDER]);
  refreshRegionSelect();
}

async function loadAdminRegions(){
  if (state.user?.role !== "admin") return;
  const rows = await api("/api/admin/regions").catch(() => []);
  els.adminRegionList.innerHTML = rows.length ? rows.map(r => `<li><strong>${r.name}</strong></li>`).join("") : "<li>Nog geen extra regio's.</li>";
}

async function createRegion(){
  const name = els.adminRegionNameInput.value.trim();
  if (!name) return alert("Vul eerst een regio in.");
  await api("/api/admin/regions", { method:"POST", body: JSON.stringify({ name }) });
  els.adminRegionNameInput.value = "";
  await loadRegions();
  await loadAdminRegions();
  renderAdminSpeedSettings();
  alert(`Regio toegevoegd: ${name}`);
}

async function initMap(){
  if (!state.map){
    state.map = L.map("map", {
      zoomControl:false,
      attributionControl:true,
      worldCopyJump:true,
      scrollWheelZoom:false,
      doubleClickZoom:false,
      boxZoom:false,
      keyboard:false,
      touchZoom:false,
      dragging:false
    }).setView([52,5], 5);
    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png", {
      subdomains:"abcd",
      maxZoom:19,
      attribution:""
    }).addTo(state.map);
    state.map.on('zoomend', restyleBoundaryLayers);
    state.map.on('moveend zoomend resize', () => {
      if (state.countryLayer?.redraw) state.countryLayer.redraw();
      if (state.currentAssignment?.payload?.kind === 'country') {
        requestAnimationFrame(() => ensureWorldOverlayHealthy(true));
      }
    });
    state.map.createPane('countryPane');
    state.map.getPane('countryPane').style.zIndex = 430;
    state.map.createPane('provincePane');
    state.map.getPane('provincePane').style.zIndex = 440;
    state.map.createPane('borderPane');
    state.map.getPane('borderPane').style.zIndex = 445;
    state.map.createPane('targetPane');
    state.map.getPane('targetPane').style.zIndex = 650;
  }
  if (!state.worldGeo){
    try {
      state.worldGeo = await fetchJsonFromUrls(WORLD_GEO_URLS);
    } catch {}
  }
  if (!state.worldGeo) {
    try {
      await new Promise(resolve => setTimeout(resolve, 450));
      state.worldGeo = await fetchJsonFromUrls(WORLD_GEO_URLS);
    } catch {}
  }
  if (!state.nlProvinceGeo){
    try {
      state.nlProvinceGeo = await fetchJsonFromUrls(NL_PROVINCE_URLS);
    } catch {}
  }
  if (!state.nlBorderGeo){
    try {
      const nlBorderSource = await fetchJsonFromUrls(NL_BORDER_DETAIL_URLS);
      state.nlBorderGeo = buildNetherlandsOuterBorder(nlBorderSource || state.nlProvinceGeo);
    } catch {
      state.nlBorderGeo = buildNetherlandsOuterBorder(state.nlProvinceGeo);
    }
  }
  ensureCountryOverlay();
}


function getCountryOverlayFeatureCount(){
  if (!state.countryLayer?.eachLayer) return 0;
  let count = 0;
  state.countryLayer.eachLayer(() => {
    count += 1;
  });
  return count;
}

function getCountryOverlayRendererStatus(){
  if (!state.countryLayer) return { rendererOk:false, mode:'none' };
  let sampleLayer = null;
  state.countryLayer.eachLayer(layer => {
    if (!sampleLayer) sampleLayer = layer;
  });
  const renderer = sampleLayer?._renderer || state.countryRenderer || null;
  const container = renderer?._container || null;
  const mode = renderer instanceof L.Canvas ? 'canvas' : renderer instanceof L.SVG ? 'svg' : 'unknown';
  return { rendererOk: !!(container && container.isConnected), mode };
}

function setWorldOverlayDebugMessage(message){
  state.worldOverlayDebugMessage = message || "";
}

async function ensureWorldOverlayHealthy(force=false){
  if (!state.map || state.currentAssignment?.payload?.kind !== "country") return;
  const now = performance.now();
  if (!force && now - state.worldOverlayLastCheckAt < 700) return;
  state.worldOverlayLastCheckAt = now;
  const hasLayer = !!(state.countryLayer && state.map.hasLayer(state.countryLayer));
  const featureCount = getCountryOverlayFeatureCount();
  const rendererStatus = getCountryOverlayRendererStatus();
  const ok = !!(state.worldGeo && hasLayer && featureCount > 0 && rendererStatus.rendererOk);
  if (ok) {
    state.worldOverlayFailures = 0;
    if (state.countryLayer?.redraw) state.countryLayer.redraw();
    if (state.worldOverlayDebugMessage && /grenzenlaag/i.test(state.worldOverlayDebugMessage)) {
      setWorldOverlayDebugMessage(`grenzenlaag actief (${rendererStatus.mode})`);
    }
    return;
  }
  state.worldOverlayFailures += 1;
  const missingReason = !state.worldGeo
    ? 'kaartdata ontbreekt'
    : !hasLayer
      ? 'laag weggevallen'
      : featureCount <= 0
        ? 'features ontbreken'
        : 'renderer/container weggevallen';
  setWorldOverlayDebugMessage(`grenzenlaag herstellen (${missingReason})`);
  if (hasLayer && state.countryLayer?.redraw) state.countryLayer.redraw();
  if (now - state.worldOverlayLastRebuildAt < 450) return;
  state.worldOverlayLastRebuildAt = now;
  if (state.worldOverlayFailures >= 2 || !rendererStatus.rendererOk) {
    try {
      const freshGeo = await fetchJsonFromUrls(WORLD_GEO_URLS);
      if (freshGeo?.features?.length) {
        state.worldGeo = freshGeo;
        state.worldOverlayReloads += 1;
        setWorldOverlayDebugMessage(`grenzenlaag opnieuw geladen (${missingReason})`);
      }
    } catch {}
    ensureCountryOverlay();
    requestAnimationFrame(() => state.countryLayer?.redraw && state.countryLayer.redraw());
  }
}

function ensureCountryOverlay(){
  if (!state.map || !state.worldGeo) return;
  if (!state.countryRenderer) state.countryRenderer = L.canvas({ padding:0.8, tolerance:0 });
  if (state.countryLayer) {
    state.map.removeLayer(state.countryLayer);
    state.countryLayer = null;
  }
  if (state.currentAssignment?.region === 'Nederland') return;
  const weights = getBoundaryWeights();
  state.countryLayer = L.geoJSON(state.worldGeo, {
    pane:'countryPane',
    interactive:false,
    smoothFactor:0,
    noClip:true,
    renderer: state.countryRenderer,
    style: {
      color:'#40617f',
      weight:weights.country,
      opacity:0.82,
      fill:false,
      lineCap:'round',
      lineJoin:'round'
    }
  }).addTo(state.map);
  requestAnimationFrame(() => {
    if (state.countryLayer?.redraw) state.countryLayer.redraw();
    const count = getCountryOverlayFeatureCount();
    if (count > 0) {
      state.worldOverlayFailures = 0;
      setWorldOverlayDebugMessage(state.worldOverlayReloads > 0 ? 'grenzenlaag opnieuw opgebouwd (canvas)' : 'grenzenlaag actief (canvas)');
    }
  });
}

function ensureProvinceOverlay(){
  if (!state.map) return;
  const shouldShow = state.currentAssignment?.region === 'Nederland' && state.nlProvinceGeo;
  if (state.provinceLayer) {
    state.map.removeLayer(state.provinceLayer);
    state.provinceLayer = null;
  }
  if (state.borderLayer) {
    state.map.removeLayer(state.borderLayer);
    state.borderLayer = null;
  }
  if (!shouldShow) return;
  const weights = getBoundaryWeights();
  state.provinceLayer = L.layerGroup().addTo(state.map);
  L.geoJSON(state.nlProvinceGeo, {
    pane:'provincePane',
    interactive:false,
    smoothFactor:0.15,
    style: {
      color:'#8aa1b6',
      weight:weights.province,
      opacity:0.9,
      fill:false,
      lineCap:'round',
      lineJoin:'round'
    }
  }).addTo(state.provinceLayer);
  // Voor Nederland tonen we alleen de provinciegrenzen.
  // De landsgrens-overlay blijft uit om grove of dubbele lijnen te voorkomen.
}
function waterSpecForName(name){
  return WATER_SHAPES[normalize(name)] || null;
}

function latLngToKm(lat, lng, refLat = lat){
  const kx = Math.cos(refLat * Math.PI / 180) * 111.32;
  const ky = 110.57;
  return [lng * kx, lat * ky];
}

function distancePointToSegmentKm(pointLat, pointLng, a, b){
  const refLat = (pointLat + a[0] + b[0]) / 3;
  const [px, py] = latLngToKm(pointLat, pointLng, refLat);
  const [ax, ay] = latLngToKm(a[0], a[1], refLat);
  const [bx, by] = latLngToKm(b[0], b[1], refLat);
  const dx = bx - ax;
  const dy = by - ay;
  const len2 = dx * dx + dy * dy || 1;
  const t = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / len2));
  const qx = ax + t * dx;
  const qy = ay + t * dy;
  return Math.hypot(px - qx, py - qy);
}

function ellipseContains(lat, lng, spec, factor = 1){
  const [clat, clng] = spec.center;
  const refLat = (lat + clat) / 2;
  const [px, py] = latLngToKm(lat, lng, refLat);
  const [cx, cy] = latLngToKm(clat, clng, refLat);
  const angle = (spec.rotation || 0) * Math.PI / 180;
  const dx = px - cx;
  const dy = py - cy;
  const rx = (spec.rxKm || 1) * factor;
  const ry = (spec.ryKm || 1) * factor;
  const xr = dx * Math.cos(angle) + dy * Math.sin(angle);
  const yr = -dx * Math.sin(angle) + dy * Math.cos(angle);
  return (xr * xr) / (rx * rx) + (yr * yr) / (ry * ry) <= 1;
}

function waterHoverHit(lat, lng, spec){
  if (!spec) return { hover:false, hit:false };
  if (spec.type === "ellipse") {
    return {
      hover: ellipseContains(lat, lng, spec, 1.12),
      hit: ellipseContains(lat, lng, spec, 1.0)
    };
  }
  if (spec.type === "line") {
    let min = Infinity;
    for (let i = 0; i < spec.coords.length - 1; i++) {
      min = Math.min(min, distancePointToSegmentKm(lat, lng, spec.coords[i], spec.coords[i + 1]));
    }
    return {
      hover: min <= (spec.hoverKm || 30),
      hit: min <= (spec.hitKm || 14)
    };
  }
  return { hover:false, hit:false };
}

function ellipsePolygon(spec, steps = 72){
  const pts = [];
  const [clat, clng] = spec.center;
  const angle = (spec.rotation || 0) * Math.PI / 180;
  const latScale = 110.57;
  const lngScale = Math.cos(clat * Math.PI / 180) * 111.32;
  for (let i = 0; i <= steps; i++) {
    const t = Math.PI * 2 * (i / steps);
    const ex = (spec.rxKm || 1) * Math.cos(t);
    const ey = (spec.ryKm || 1) * Math.sin(t);
    const xr = ex * Math.cos(angle) - ey * Math.sin(angle);
    const yr = ex * Math.sin(angle) + ey * Math.cos(angle);
    pts.push([clat + yr / latScale, clng + xr / lngScale]);
  }
  return pts;
}

function clearHighlightFeature(){
  if (state.highlightLayer) {
    state.map.removeLayer(state.highlightLayer);
    state.highlightLayer = null;
  }
  state.highlightMode = null;
}

function highlightWaterSpec(spec, sticky=false){
  clearHighlightFeature();
  if (!spec || !state.map) return;
  let layer;
  if (spec.type === "ellipse") {
    layer = L.polygon(ellipsePolygon(spec), {
      pane: 'targetPane',
      interactive:false,
      color:'#0f65d8',
      weight:3,
      opacity:0.95,
      fillColor:'#58a8ff',
      fillOpacity:0.28,
      lineJoin:'round'
    });
  } else {
    layer = L.polyline(spec.coords, {
      pane: 'targetPane',
      interactive:false,
      color:'#0f65d8',
      weight:10,
      opacity:0.85,
      lineCap:'round',
      lineJoin:'round'
    });
  }
  layer.addTo(state.map);
  state.highlightLayer = layer;
  state.highlightMode = 'water';
  if (sticky) {
    state.hitFlashFeature = { type:'water', spec };
    state.hitFlashLatLng = state.currentMission ? [state.currentMission.lat, state.currentMission.lng] : null;
    state.hitFlashUntil = performance.now() + 1000;
  }
}

function pointInRing(point, ring){
  let inside = false;
  const x = point[0], y = point[1];
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const xi = ring[i][0], yi = ring[i][1];
    const xj = ring[j][0], yj = ring[j][1];
    const intersect = ((yi > y) !== (yj > y)) &&
      (x < (xj - xi) * (y - yi) / ((yj - yi) || 1e-12) + xi);
    if (intersect) inside = !inside;
  }
  return inside;
}
function pointInPolygon(point, polygon){
  if (!polygon?.length) return false;
  if (!pointInRing(point, polygon[0])) return false;
  for (let i = 1; i < polygon.length; i++) {
    if (pointInRing(point, polygon[i])) return false;
  }
  return true;
}
function pointInGeometry(lat, lng, geometry){
  const point = [lng, lat];
  if (!geometry) return false;
  if (geometry.type === "Polygon") return pointInPolygon(point, geometry.coordinates);
  if (geometry.type === "MultiPolygon") return geometry.coordinates.some(poly => pointInPolygon(point, poly));
  return false;
}

const countryAliases = {
  "zuid korea":["south korea","korea republic of","republic of korea","korea, republic of"],
  "noord korea":["north korea","korea democratic people s republic of","democratic people s republic of korea"],
  "georgie":["georgia"],
  "tsjechie":["czech republic","czechia"],
  "ivoorkust":["cote d ivoire","ivory coast"],
  "verenigd koninkrijk":["united kingdom","great britain"],
  "verenigde staten":["united states of america","united states"],
  "myanmar":["burma"],
  "eswatini":["swaziland"],
  "kaapverdie":["cape verde","cabo verde"],
  "oost timor":["timor leste"],
  "vaticaanstad":["vatican","holy see"],
  "syrie":["syria","syrian arab republic"],
  "laos":["lao pdr","lao people s democratic republic"],
  "moldavie":["moldova","republic of moldova"],
  "rusland":["russia","russian federation"],
  "bolivia":["bolivia plurinational state of"],
  "venezuela":["venezuela bolivarian republic of"],
  "palestina":["palestine","state of palestine"],
  "tanzania":["tanzania united republic of","united republic of tanzania"],
  "iran":["iran islamic republic of"],
  "brunei":["brunei darussalam"],
  "micronesie":["micronesia federated states of"],
  "marshall eilanden":["marshall islands"],
  "solomon eilanden":["solomon islands"],
  "centrale afrikaanse republiek":["central african republic"],
  "centraal afrikaanse republiek":["central african republic"],
  "verenigde arabische emiraten":["united arab emirates"],
  "dominicaanse republiek":["dominican republic"],
  "bosnie en herzegovina":["bosnia and herzegovina"],
  "wit rusland":["belarus"],
  "equatoriaal guinea":["equatorial guinea"],
  "frankrijk":["france"],
  "saudi-arabie":["saudi arabia","kingdom of saudi arabia"],
  "saudi arabie":["saudi arabia","kingdom of saudi arabia"],
  "chili":["chile"],

  "nederland":["netherlands","the netherlands"],
  "belgie":["belgium"],
  "duitsland":["germany"],
  "italie":["italy"],
  "oostenrijk":["austria"],
  "zwitserland":["switzerland"],
  "griekenland":["greece"],
  "oekraine":["ukraine"],
  "spanje":["spain"],
  "portugal":["portugal"],
  "noorwegen":["norway"],
  "zweden":["sweden"],
  "finland":["finland"],
  "denemarken":["denmark"],
  "polen":["poland"],
  "turkije":["turkey"],
  "egypte":["egypt"],
  "marokko":["morocco"],
  "algerije":["algeria"],
  "kenia":["kenya"],
  "ethiopie":["ethiopia"],
  "zuid afrika":["south africa"],
  "saudi arabie":["saudi arabia"],
  "israel":["israel"],
  "irak":["iraq"],
  "india":["india"],
  "pakistan":["pakistan"],
  "bangladesh":["bangladesh"],
  "mongolie":["mongolia"],
  "kazachstan":["kazakhstan","republic of kazakhstan"],
  "luxemburg":["luxembourg","grand duchy of luxembourg"],
  "australie":["australia","commonwealth of australia"],
  "thailand":["thailand"],
  "vietnam":["vietnam"],
  "indonesie":["indonesia"],
  "filipijnen":["philippines"],
  "nieuw zeeland":["new zealand"],
  "ijsland":["iceland"],
  "verenigde staten":["united states of america","united states","usa"],
  "brazilie":["brazil"],
  "argentinie":["argentina"],
  "chilie":["chile"],
  "peru":["peru"],
  "tsjechie":["czechia","czech republic"],
  "bulgarije":["bulgaria"],
  "roemenie":["romania"],
  "litouwen":["lithuania"],
  "letland":["latvia"],
  "hongarije":["hungary"],
  "kroatie":["croatia"],
  "cyprus":["cyprus"],
  "estland":["estonia"],
  "maleisie":["malaysia"],
  "nepal":["nepal"],
  "oezbekistan":["uzbekistan"],
  "slowakije":["slovakia"],
  "slovenie":["slovenia"],
  "sao tome en principe":["sao tome and principe"],
  "sao tome":["sao tome and principe"],
  "bahama s":["bahamas","the bahamas"],
  "kirgizie":["kyrgyzstan"],
  "tadzjikistan":["tajikistan"],
  "marshalleilanden":["marshall islands"],
  "solomonseilanden":["solomon islands"],
  "equatoriaal guinea":["equatorial guinea"],
  "equatoriaal guinea":["equatorial guinea"],
  "equatoriaal guinee":["equatorial guinea"],
  "guinee bissau":["guinea bissau"],
  "haiti":["haiti"],
  "oeganda":["uganda"],
  "noord macedonie":["north macedonia","macedonia"],
};

function getCountryNames(name){
  const key = normalize(name);
  const aliasNames = [...(countryAliases[key] || countryAliases[key.replace(/-/g, ' ')] || []), ...((state.countryAliasExtra?.[key]) || [])];
  const variants = new Set();
  for (const candidate of [name, key, key.replace(/-/g, ' '), ...aliasNames]) {
    for (const variant of nameVariants(candidate)) variants.add(variant);
  }
  return [...variants];
}


function compactLooseCountryKey(text){
  return normalize(text).replace(/\b(the|and|of|republic|kingdom|state|states|federation|federal|democratic|islamic|arab|people|plurinational|bolivarian|united)\b/g, " ").replace(/\s+/g, " ").trim().replace(/[\s-]+/g, "");
}

function countryFeatureNameVariants(value){
  const variants = new Set(nameVariants(value));
  const base = normalize(value);
  if (!base) return [];
  variants.add(compactLooseCountryKey(base));
  if (/^republic of /.test(base)) variants.add(compactLooseCountryKey(base.replace(/^republic of /, "")));
  if (/^kingdom of /.test(base)) variants.add(compactLooseCountryKey(base.replace(/^kingdom of /, "")));
  if (/^state of /.test(base)) variants.add(compactLooseCountryKey(base.replace(/^state of /, "")));
  return [...variants].filter(Boolean);
}

function getHighlightTheme(){
  const payloadKind = state.currentAssignment?.payload?.kind || "";
  const name = normalize(state.currentAssignment?.name || "");
  if (payloadKind === "country") return { color:'#37c86a', fill:'#7de3a0', glow:'country' };
  if (/berg|gebergte/.test(name)) return { color:'#8f6842', fill:'#c19a6b', glow:'mountain' };
  if (/provinc|regio|streek/.test(name)) return { color:'#f08a24', fill:'#ffbf75', glow:'region' };
  return { color:'#ff6f9a', fill:'#ffb3c8', glow:'default' };
}

function setLookupStatus(message, type='busy'){
  if (!els.lookupStatus) return;
  els.lookupStatus.textContent = message || '';
  els.lookupStatus.className = `lookupStatus ${message ? 'show ' + type : ''}`.trim();
}

function clearLookupUi(){
  state.pendingResolvedPlaces = null;
  if (els.lookupSummary) els.lookupSummary.textContent = '';
  if (els.lookupIssues) els.lookupIssues.innerHTML = '';
  if (els.lookupConfirmBtn) els.lookupConfirmBtn.classList.add('hidden');
  if (els.lookupCancelBtn) els.lookupCancelBtn.classList.add('hidden');
  setLookupStatus('');
}

function renderLookupIssues(result, selectedRegion){
  if (!els.lookupIssues || !els.lookupSummary) return;
  const unresolved = result.unresolved || [];
  const found = result.found || [];
  const cacheHits = result.cacheHits || 0;
  const localHits = result.localHits || 0;
  const geocoderHits = result.geocoderHits || 0;
  const summaryBits = [`${result.foundCount || found.length} gevonden`, `${unresolved.length} nog kiezen`];
  if (cacheHits) summaryBits.push(`${cacheHits} uit cache`);
  if (localHits) summaryBits.push(`${localHits} lokale match`);
  if (geocoderHits) summaryBits.push(`${geocoderHits} online gevonden`);
  els.lookupSummary.textContent = `Validatie: ${summaryBits.join(' · ')}.`;
  if (!unresolved.length) {
    els.lookupIssues.innerHTML = found.length ? `
      <div class="lookupIssue">
        <div class="lookupIssueTitle"><strong>Alles is gevonden</strong></div>
        <div class="muted">${found.map(item => item.name).join(' • ')}</div>
      </div>` : '';
    return;
  }
  const foundHtml = found.length ? `
    <div class="lookupIssue">
      <div class="lookupIssueTitle"><strong>Al gevonden</strong></div>
      <div class="muted">${found.map(item => `${item.name}${item._source === 'cache' ? ' (cache)' : item._source === 'geocoder' ? ' (online)' : ''}`).join(' • ')}</div>
    </div>` : '';
  els.lookupIssues.innerHTML = foundHtml + unresolved.map((entry, idx) => {
    const options = entry.suggestions || [];
    return `
      <div class="lookupIssue">
        <div class="lookupIssueTitle"><strong>${entry.input}</strong> niet direct gevonden</div>
        <div class="muted">Kies een alternatief dat lijkt op deze regio/plek, of laat hem weg.</div>
        <label class="lookupChoice"><input type="radio" name="lookup_${idx}" value="__skip__" checked><span>Niet toevoegen</span></label>
        ${options.map((opt, optIdx) => `<label class="lookupChoice"><input type="radio" name="lookup_${idx}" value="${optIdx}"><span>${opt.name}${opt.region ? ` <span class="muted">(${opt.region})</span>` : ''}${opt.kind ? ` <span class="muted">· ${opt.kind}</span>` : ''}</span></label>`).join('')}
      </div>`;
  }).join('');
  if (els.lookupConfirmBtn) els.lookupConfirmBtn.classList.remove('hidden');
  if (els.lookupCancelBtn) els.lookupCancelBtn.classList.remove('hidden');
}

function collectResolvedPlaces(){
  const pending = state.pendingResolvedPlaces;
  if (!pending) return null;
  const items = [...(pending.found || [])].map(item => ({ ...item }));
  for (let i = 0; i < (pending.unresolved || []).length; i++) {
    const entry = pending.unresolved[i];
    const picked = document.querySelector(`input[name="lookup_${i}"]:checked`)?.value;
    if (picked == null || picked === '__skip__') continue;
    const option = entry.suggestions?.[Number(picked)];
    if (option) items.push({ ...option });
  }
  items._preferredKind = pending.preferredKind || null;
  return items;
}

function inferTeacherPreferredKind(){
  const payloadPreview = (els.assignmentPayloadInput?.value || '').replace(/\r/g, '').split('\n').slice(0, 5).join(' ');
  const source = normalize(`${els.assignmentNameInput?.value || ''} ${payloadPreview}`);
  if (/provinc/.test(source)) return 'provincie';
  if (/regio|streek|eiland|eilanden/.test(source)) return 'regio';
  if (/berg|gebergte|heuvel/.test(source)) return 'mountain';
  if (/water|zee|meer|kanaal|rivier|baai|golf|straat/.test(source)) return 'water';
  if (/land|landen|wereld/.test(source)) return 'country';
  return null;
}

function setEditingAssignment(assignment = null){
  state.editingAssignmentId = assignment?.id ? Number(assignment.id) : null;
  if (els.cancelEditAssignmentBtn) els.cancelEditAssignmentBtn.classList.toggle('hidden', !state.editingAssignmentId);
  if (els.createAssignmentBtn) els.createAssignmentBtn.textContent = state.editingAssignmentId ? 'Opdracht opslaan' : 'Nieuwe opdracht opslaan';
  if (!assignment) return;
  els.assignmentNameInput.value = assignment.name || '';
  const region = assignment.region || '';
  if ([...els.assignmentRegionInput.options].some(opt => opt.value === region)) {
    els.assignmentRegionInput.value = region;
  } else {
    els.assignmentRegionInput.value = '__custom__';
    els.assignmentRegionCustomInput.value = region;
  }
  refreshRegionCustomVisibility();
  els.assignmentDifficultyInput.value = assignment.difficulty || '';
  els.assignmentPayloadInput.value = (assignment.payload?.items || []).map(item => item.name).join('\n');
  clearLookupUi();
  window.scrollTo({ top: els.teacherPanel?.offsetTop || 0, behavior:'smooth' });
}

function getPlayerName(){
  return (
    els.playerNameInput?.value?.trim()
    || els.summaryNameInput?.value?.trim()
    || localStorage.getItem("topoheli_player_name")
    || ""
  ).trim();
}

function persistPlayerName(value){
  const name = String(value || "").trim();
  if (name) localStorage.setItem("topoheli_player_name", name);
}
function restorePlayerName(){
  const saved = localStorage.getItem("topoheli_player_name") || "";
  if (saved && els.playerNameInput && !els.playerNameInput.value) els.playerNameInput.value = saved;
}
function updateSpellButtons(){
  els.spellStrictBtn?.classList.toggle("active", state.namingTolerance === "strict");
  els.spellLenientBtn?.classList.toggle("active", state.namingTolerance !== "strict");
}
function updateSoundButtons(){
  els.soundHeliBtn?.classList.toggle("mutedOff", !state.heliSoundEnabled);
  els.soundFxBtn?.classList.toggle("mutedOff", !state.fxSoundEnabled);
  if (els.soundHeliBtn) els.soundHeliBtn.textContent = state.heliSoundEnabled ? "🔊 Heli" : "🔇 Heli";
  if (els.soundFxBtn) els.soundFxBtn.textContent = state.fxSoundEnabled ? "🔔 Effecten" : "🔕 Effecten";
}
function setNamingTolerance(mode){
  state.namingTolerance = mode === "strict" ? "strict" : "lenient";
  localStorage.setItem("topoheli_naming_tolerance", state.namingTolerance);
  updateSpellButtons();
}
function setHeliSoundEnabled(value){
  state.heliSoundEnabled = Boolean(value);
  localStorage.setItem("topoheli_heli_sound", state.heliSoundEnabled ? "1" : "0");
  updateSoundButtons();
  updateHeliAudio();
}
function setFxSoundEnabled(value){
  state.fxSoundEnabled = Boolean(value);
  localStorage.setItem("topoheli_fx_sound", state.fxSoundEnabled ? "1" : "0");
  updateSoundButtons();
}
function ensureAudio(){
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return null;
  if (!state.audio.ctx) state.audio.ctx = new AudioCtx();
  if (state.audio.ctx?.state === "suspended") state.audio.ctx.resume().catch(() => {});
  return state.audio.ctx;
}
function ensureHeliAudio(){
  if (!state.audio.heliEl){
    const audio = new Audio('/helisound.mp3');
    audio.loop = true;
    audio.preload = 'auto';
    audio.volume = 0;
    state.audio.heliEl = audio;
  }
  return state.audio.heliEl;
}
function stopHeliAudio(reset=false){
  const audio = state.audio.heliEl;
  if (!audio) return;
  audio.volume = 0;
  if (!audio.paused) audio.pause();
  if (reset) {
    try { audio.currentTime = 0; } catch {}
  }
}
function updateHeliAudio(){
  const audio = ensureHeliAudio();
  const moving = Math.hypot(state.velocity.x, state.velocity.y);
  const shouldPlay = state.heliSoundEnabled && state.gameActive && state.gameMode === 'heli';
  if (!shouldPlay) {
    audio.volume = 0;
    if (!audio.paused) { audio.pause(); audio.currentTime = 0; }
    return;
  }
  const nextVolume = Math.min(0.16, 0.05 + moving / 5200);
  audio.volume = nextVolume;
  audio.playbackRate = Math.min(1.18, 0.94 + moving / 4200);
  if (audio.paused) audio.play().catch(() => {});
}
async function postHighscore({ assignmentId, playerName, score, gameMode }){
  if (!assignmentId || !playerName || Number.isNaN(Number(score)) || !gameMode) return;
  return await api('/api/highscores', {
    method:'POST',
    body: JSON.stringify({ assignmentId, playerName, score, gameMode })
  });
}
function playSuccessSound(){
  if (!state.fxSoundEnabled) return;
  const ctx = ensureAudio();
  if (!ctx) return;
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "triangle";
  osc.frequency.setValueAtTime(660, now);
  osc.frequency.exponentialRampToValueAtTime(990, now + 0.16);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.045, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + 0.3);
}

function formatDuration(totalSeconds){
  const seconds = Math.max(0, Math.round(totalSeconds));
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${String(secs).padStart(2, "0")}`;
}
function formatScore(value){
  const num = Number(value || 0);
  if (!Number.isFinite(num)) return "0";
  const rounded = Math.round(num * 100) / 100;
  return Number.isInteger(rounded) ? String(rounded) : String(rounded).replace(/\.?0+$/, "").replace('.', ',');
}


async function getAllTimeHighscores(assignmentId, gameMode){
  return await api(`/api/highscores?assignmentId=${assignmentId}&gameMode=${gameMode}&period=all`).catch(() => []);
}

function qualifiesForHighscore(rows, score){
  if (!score) return false;
  if (rows.length < 3) return true;
  const threshold = rows[Math.min(rows.length, 3) - 1]?.score ?? 0;
  return score >= threshold;
}

async function saveHighscoreWithName(playerName){
  if (!state.pendingHighscore || !playerName) return;
  persistPlayerName(playerName);
  els.playerNameInput.value = playerName;
  try {
    await postHighscore({
      assignmentId: state.pendingHighscore.assignmentId,
      playerName,
      score: state.pendingHighscore.score,
      gameMode: state.pendingHighscore.gameMode
    });
    state.pendingHighscore = null;
    els.summarySaveBtn.classList.add("hidden");
    els.summaryNameWrap.classList.add("hidden");
    els.summaryHighscore.textContent = "Highscore opgeslagen.";
    await loadHighscores();
    await loadTeacherHighscores();
  } catch {
    els.summaryHighscore.textContent = "Opslaan van highscore lukte nu niet.";
  }
}

function showSummary(summary){
  document.getElementById("gameScreen").classList.add("hidden");
  document.getElementById("menuScreen").classList.add("hidden");
  els.summaryScreen.classList.remove("hidden");
  els.summaryStats.innerHTML = `
    <div class="summaryStat"><span>Punten</span><strong>${formatScore(summary.correct)}</strong></div>
    <div class="summaryStat"><span>Fout</span><strong>${summary.wrong}</strong></div>
    <div class="summaryStat"><span>Totaal gespeeld</span><strong>${formatDuration(summary.totalSeconds)}</strong></div>
    <div class="summaryStat"><span>Tips gekregen</span><strong>${summary.tipsUsed ?? 0}</strong></div>
  `;
  updateSummaryHighscoreStatus(summary);
}

function updateSummaryHighscoreStatus(summary={}){
  if (summary.message) {
    els.summaryHighscore.textContent = summary.message;
  } else if (summary.pending) {
    els.summaryHighscore.textContent = "Highscore wordt gecontroleerd...";
  } else {
    els.summaryHighscore.textContent = summary.isHighscore ? "🎉 Nieuwe highscore." : "Geen nieuwe highscore deze ronde.";
  }
  if (summary.askName) {
    els.summaryNameWrap.classList.remove("hidden");
    els.summarySaveBtn.classList.remove("hidden");
    els.summaryNameInput.value = getPlayerName();
    setTimeout(() => els.summaryNameInput.focus(), 30);
  } else {
    els.summaryNameWrap.classList.add("hidden");
    els.summarySaveBtn.classList.add("hidden");
  }
}

function backToMenuAfterSummary(){
  stopHeliAudio(true);
  els.summaryScreen.classList.add("hidden");
  document.getElementById("menuScreen").classList.remove("hidden");
  loadHighscores();
  loadTeacherHighscores();
}


async function replayAfterSummary(){
  els.summaryScreen.classList.add("hidden");
  await startGame(false);
}

function geometryBounds(geometry){
  let minLng = Infinity, minLat = Infinity, maxLng = -Infinity, maxLat = -Infinity;
  const walk = coords => {
    if (typeof coords?.[0] === "number") {
      const [lng, lat] = coords;
      minLng = Math.min(minLng, lng); maxLng = Math.max(maxLng, lng);
      minLat = Math.min(minLat, lat); maxLat = Math.max(maxLat, lat);
      return;
    }
    (coords || []).forEach(walk);
  };
  walk(geometry?.coordinates);
  if (!Number.isFinite(minLng)) return null;
  return { minLng, minLat, maxLng, maxLat };
}
function geometrySize(geometry){
  const b = geometryBounds(geometry);
  if (!b) return { width: 0, height: 0, area: 0 };
  const width = Math.max(0, b.maxLng - b.minLng);
  const height = Math.max(0, b.maxLat - b.minLat);
  return { width, height, area: width * height };
}
function pointNearGeometry(lat, lng, geometry){
  const b = geometryBounds(geometry);
  if (!b) return false;
  const width = Math.max(0.01, b.maxLng - b.minLng);
  const height = Math.max(0.01, b.maxLat - b.minLat);
  const marginLng = Math.max(0.18, Math.min(1.2, width * 0.35));
  const marginLat = Math.max(0.14, Math.min(0.9, height * 0.35));
  return lng >= b.minLng - marginLng && lng <= b.maxLng + marginLng && lat >= b.minLat - marginLat && lat <= b.maxLat + marginLat;
}

function getCountryFeatureByName(name){
  if (!state.worldGeo?.features) return null;
  const targets = new Set(getCountryNames(name).flatMap(countryFeatureNameVariants));
  return state.worldGeo.features.find(f => {
    const props = f.properties || {};
    const names = new Set();
    [props.name, props.NAME, props.admin, props.sovereignt, props.brk_name, props.formal_en, props.name_en, props.abbrev, props.NAME_LONG, props.BRK_NAME]
      .filter(Boolean)
      .forEach(value => {
        for (const variant of countryFeatureNameVariants(value)) names.add(variant);
      });
    return [...targets].some(target => names.has(target));
  }) || null;
}

function missionNameVariants(name){
  const base = normalize(name).replace(/\s*\([^)]*\)\s*/g, ' ').trim();
  const compact = base.replace(/[\s-]+/g, '');
  const variants = new Set([base, compact, base.replace(/-/g, ' '), base.replace(/\s+/g, '-')]);
  if (base.endsWith('en')) variants.add(base.slice(0, -2));
  if (base.endsWith('e')) variants.add(base.slice(0, -1));
  if (base === 'friesland') { variants.add('fryslan'); variants.add('fryslân'); }
  return [...variants].filter(Boolean);
}

function getProvinceFeatureByName(name){
  const features = state.nlProvinceGeo?.features || [];
  const targets = new Set(missionNameVariants(name));
  return features.find(feature => {
    const props = feature.properties || {};
    const names = new Set();
    [props.name, props.NAME, props.statnaam, props.provincienaam, props.provincie, props.omschrijving, props.naam].filter(Boolean).forEach(value => {
      for (const variant of missionNameVariants(value)) names.add(variant);
    });
    return [...targets].some(target => names.has(target));
  }) || null;
}

function getCustomAreaFeatureByName(name){
  const targets = missionNameVariants(name);
  for (const [key, feature] of Object.entries(NL_CUSTOM_AREA_FEATURES)) {
    const variants = new Set([key, ...(feature?.properties?.name ? missionNameVariants(feature.properties.name) : [])]);
    if (targets.some(target => variants.has(target))) return feature;
  }
  return null;
}

function bboxToFeature(item){
  if (!Array.isArray(item?.bbox) || item.bbox.length !== 4) return null;
  const [minLat, minLng, maxLat, maxLng] = item.bbox.map(Number);
  if (![minLat, minLng, maxLat, maxLng].every(Number.isFinite)) return null;
  return {
    type:'Feature',
    properties:{ name:item.name || '' },
    geometry:{
      type:'Polygon',
      coordinates:[[[minLng,minLat],[maxLng,minLat],[maxLng,maxLat],[minLng,maxLat],[minLng,minLat]]]
    }
  };
}

function getMissionAreaFeature(){
  if (state.currentAssignment?.region !== 'Nederland') return null;
  const missionKind = normalize(state.currentMission?.kind || '');
  const assignmentKind = normalize(state.currentAssignment?.payload?.kind || '');
  const areaLike = /provinc|regio|streek|berg|gebergte/.test(missionKind) || /provinc|regio|streek|berg|gebergte/.test(assignmentKind) || /provinc|regio|streek|berg|gebergte/.test(normalize(state.currentAssignment?.name || ''));
  if (!areaLike) return null;
  return getCustomAreaFeatureByName(state.currentMission?.name || '') || getProvinceFeatureByName(state.currentMission?.name || '') || bboxToFeature(state.currentMission);
}

function highlightAreaFeature(feature, sticky=false){
  if (!feature || !state.map) return;
  clearHighlightFeature();
  const weights = getBoundaryWeights();
  const theme = getHighlightTheme();
  state.highlightLayer = L.geoJSON(feature, {
    pane:'targetPane',
    interactive:false,
    className:`flashCountry glowCountry glow-${theme.glow}`,
    smoothFactor:0.2,
    style: {
      color:theme.color,
      weight:Math.max(weights.highlight - 0.6, weights.province + 0.6),
      opacity:1,
      fillColor:theme.fill,
      fillOpacity:0.42
    }
  }).addTo(state.map);
  if (sticky) {
    state.hitFlashFeature = { type:'area', feature };
    state.hitFlashLatLng = state.currentMission ? [state.currentMission.lat, state.currentMission.lng] : null;
    state.hitFlashUntil = performance.now() + 1000;
  }
}

function ensureTargetLayers(){
  if (!state.map) return;
  if (!state.targetPulse) {
    state.targetPulse = L.circleMarker([0,0], {
      radius: 22,
      color: getHighlightTheme().color,
      weight: 8,
      opacity: 0.45,
      fillOpacity: 0,
      interactive: false,
      pane: 'targetPane'
    }).addTo(state.map);
  }
  if (!state.targetMarker) {
    state.targetMarker = L.circleMarker([0,0], {
      radius: 14,
      color: '#ffffff',
      weight: 6,
      fillColor: getHighlightTheme().fill,
      fillOpacity: 1,
      interactive: false,
      pane: 'targetPane'
    }).addTo(state.map);
  }
}
function showTarget(latlng){
  if (!latlng || !state.map) return;
  ensureTargetLayers();
  const theme = getHighlightTheme();
  state.targetPulse.setStyle({ color: theme.color });
  state.targetMarker.setStyle({ fillColor: theme.fill });
  state.targetPulse.setLatLng(latlng);
  state.targetMarker.setLatLng(latlng);
  if (!state.map.hasLayer(state.targetPulse)) state.targetPulse.addTo(state.map);
  if (!state.map.hasLayer(state.targetMarker)) state.targetMarker.addTo(state.map);
}
function hideTarget(){
  if (state.targetPulse && state.map?.hasLayer(state.targetPulse)) state.map.removeLayer(state.targetPulse);
  if (state.targetMarker && state.map?.hasLayer(state.targetMarker)) state.map.removeLayer(state.targetMarker);
}
function distanceKm(lat1,lng1,lat2,lng2){
  const R=6371,toRad=d=>d*Math.PI/180;
  const dLat=toRad(lat2-lat1), dLng=toRad(lng2-lng1);
  const a=Math.sin(dLat/2)**2 + Math.cos(toRad(lat1))*Math.cos(toRad(lat2))*Math.sin(dLng/2)**2;
  return 2*R*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
}
function panByPixels(px, py){
  const center = state.map.getCenter();
  const zoom = state.map.getZoom();
  const projected = state.map.project(center, zoom);
  const next = state.map.unproject(projected.add([px, py]), zoom);
  state.map.setView(next, zoom, { animate:false, reset:false });
}
function updateHud(){
  if (!state.practice && state.endsAtMs) {
    state.timer = Math.max(0, (state.endsAtMs - Date.now()) / 1000);
    state.elapsedSeconds = state.gameDuration - state.timer;
  }
  els.timeStat.textContent = state.practice ? "∞" : `${Math.ceil(state.timer)}s`;
  els.scoreStat.textContent = Number.isInteger(state.score) ? state.score : state.score.toFixed(1).replace('.', ',');
  els.streakStat.textContent = state.streak;
}
function styleCountryLayer(layer, active=false){
  if (!layer?.setStyle) return;
  const weights = getBoundaryWeights();
  const theme = getHighlightTheme();
  layer.setStyle({
    color: active ? theme.color : '#40617f',
    weight: active ? weights.highlight : weights.country,
    opacity: active ? 1 : 0.7,
    fillColor: active ? theme.fill : '#eef4f8',
    fillOpacity: active ? 0.3 : 0.1
  });
}
function highlightCountryFeature(feature, sticky=false){
  clearHighlightFeature();
  if (!feature) return;
  const weights = getBoundaryWeights();
  state.highlightLayer = L.geoJSON(feature, {
    interactive:false,
    className:`flashCountry glowCountry glow-${getHighlightTheme().glow}`,
    smoothFactor:0.2,
    style: {
      color:getHighlightTheme().color,
      weight:weights.highlight,
      opacity:1,
      fillColor:getHighlightTheme().fill,
      fillOpacity:0.5
    }
  }).addTo(state.map);
  if (sticky) {
    state.hitFlashFeature = { type:'country', feature };
    state.hitFlashLatLng = state.currentMission ? [state.currentMission.lat, state.currentMission.lng] : null;
    state.hitFlashUntil = performance.now() + 1000;
  }
}

function completeMission(feedbackText=""){
  if (!state.currentMission) return;
  playSuccessSound();
  const points = state.gameMode === 'naming' && state.currentMissionUsedTip ? 0.5 : 1;
  reward(points);
  if (state.currentAssignment?.payload?.kind === "country" && state.targetCountryFeature) {
    showTarget([state.currentMission.lat, state.currentMission.lng]);
    highlightCountryFeature(state.targetCountryFeature, true);
  }
  if (state.currentAssignment?.payload?.kind === "water" && state.currentWaterSpec) {
    showTarget([state.currentMission.lat, state.currentMission.lng]);
    highlightWaterSpec(state.currentWaterSpec, true);
  }
  if (!['country','water'].includes(state.currentAssignment?.payload?.kind) && state.targetAreaFeature) {
    showTarget([state.currentMission.lat, state.currentMission.lng]);
    highlightAreaFeature(state.targetAreaFeature, true);
  }
  if (state.gameMode === "naming") {
    els.answerFeedback.textContent = feedbackText || `Goed! ${getMissionLabel(state.currentMission)}`;
    state.missionLockedUntil = performance.now() + 1250;
    setTimeout(() => {
      if (!state.gameActive) return;
      nextMission();
    }, 1250);
  } else {
    nextMission();
  }
}

async function logMiss(){
  if (!state.currentAssignment || !state.currentMission) return;
  try {
    await api("/api/miss-log", {
      method:"POST",
      body: JSON.stringify({
        assignmentId: state.currentAssignment.id,
        placeName: state.currentMission.name,
        gameMode: state.gameMode
      })
    });
  } catch {}
}
function getMissionLabel(mission){
  const name = mission?.name || '';
  if (state.currentAssignment?.region === 'Nederland' && /provinc/i.test(state.currentAssignment?.name || '')) {
    if (name === 'Utrecht' || name === 'Groningen') return `${name} (${state.currentAssignment?.name?.includes('hoofdstad') ? 'stad' : 'provincie'})`;
  }
  return name;
}

function getCurrentTargetType(){
  if (state.currentAssignment?.payload?.kind === "country") return "landpolygoon";
  if (state.currentAssignment?.payload?.kind === "water") return "vlak";
  if (state.targetAreaFeature) return "vlak";
  return "punt";
}

function updateDebugIndicator(details = {}){
  if (!els.debugIndicator) return;
  const visible = Boolean(state.user && !els.teacherPanel.classList.contains('hidden') && state.currentMission);
  els.debugIndicator.classList.toggle('hidden', !visible);
  if (!visible) return;
  const lines = [];
  lines.push('<strong>Debug docentmodus</strong>');
  lines.push(`Doel: <b>${getMissionLabel(state.currentMission)}</b>`);
  lines.push(`Type: <b>${details.type || getCurrentTargetType()}</b>`);
  if (details.status) lines.push(`Status: <b>${details.status}</b>`);
  if (details.distanceKm != null && Number.isFinite(details.distanceKm)) lines.push(`Afstand: <b>${details.distanceKm.toFixed(1).replace('.', ',')} km</b>`);
  if (details.extra) lines.push(`<span class="muted">${details.extra}</span>`);
  els.debugIndicator.innerHTML = lines.join('<br>');
}

function nextMission(){
  if (!state.remaining.length) state.remaining = shuffle(state.currentAssignment.payload.items);
  state.currentMission = state.remaining.pop();
  hideTarget();
  els.nextMissionBtn.classList.add("hidden");
  els.answerFeedback.textContent = "";
  els.answerInput.value = "";
  state.targetCountryFeature = state.currentAssignment.payload.kind === "country" ? getCountryFeatureByName(state.currentMission.name) : null;
  state.currentWaterSpec = state.currentAssignment.payload.kind === "water" ? waterSpecForName(state.currentMission.name) : null;
  state.targetAreaFeature = getMissionAreaFeature();
  state.missionLockedUntil = 0;
  state.missionAttempts = 0;
  state.currentMissionUsedTip = false;
  if (performance.now() > state.hitFlashUntil) {
    state.hitFlashFeature = null;
    state.hitFlashLatLng = null;
    clearHighlightFeature();
  }

  if (state.gameMode === "naming"){
    els.missionText.textContent = "Hoe heet deze plek?";
    state.map.setView([state.currentMission.lat, state.currentMission.lng], Math.max(2, state.currentAssignment.payload.zoom - 0.4), { animate:false });
    setTimeout(() => {
      state.map.invalidateSize(false);
      showTarget([state.currentMission.lat, state.currentMission.lng]);
      if (state.currentAssignment.payload.kind === "country" && state.targetCountryFeature) {
        highlightCountryFeature(state.targetCountryFeature);
      } else if (state.currentAssignment.payload.kind === "water" && state.currentWaterSpec) {
        highlightWaterSpec(state.currentWaterSpec);
      } else if (state.targetAreaFeature) {
        highlightAreaFeature(state.targetAreaFeature);
      }
    }, 0);
    setTimeout(() => els.answerInput.focus(), 50);
  } else {
    els.missionText.textContent = `Vlieg naar: ${getMissionLabel(state.currentMission)}`;
  }
  state.missionStartedAt = performance.now();
  updateDebugIndicator({ type:getCurrentTargetType(), status: state.gameMode === 'heli' ? 'vliegen' : 'naam invoeren' });
}

function reward(points=1){
  state.score = Math.round((state.score + points) * 100) / 100;
  state.streak += 1;
  if (state.streak % 3 === 0 && !state.practice) state.timer += 5;
  updateHud();
}
function registerMiss(){
  state.wrongAnswers += 1;
  state.streak = 0;
  updateHud();
}
async function finishGame(goMenu=false){
  state.gameActive = false;
  cancelAnimationFrame(state.frame);
  stopHeliAudio(true);
  hideTarget();
  clearHighlightFeature();
  const totalSeconds = state.practice ? ((performance.now() - state.startedAt) / 1000) : state.elapsedSeconds;
  if (goMenu || !state.currentAssignment) {
    document.getElementById("gameScreen").classList.add("hidden");
    document.getElementById("menuScreen").classList.remove("hidden");
    loadHighscores();
    loadTeacherHighscores();
    return;
  }

  const assignmentId = state.currentAssignment.id;
  const gameMode = state.gameMode;
  const finalScore = state.score;
  const wrongAnswers = state.wrongAnswers;
  const tipsUsed = state.tipsUsed;
  const playerName = getPlayerName();
  persistPlayerName(playerName);
  if (playerName) {
    els.playerNameInput.value = playerName;
    if (els.summaryNameInput) els.summaryNameInput.value = playerName;
  }

  state.pendingHighscore = null;
  postPlayLog({ assignmentId, gameMode, practice: state.practice }).catch(() => {});
  showSummary({
    correct: finalScore,
    wrong: wrongAnswers,
    totalSeconds,
    pending: true,
    askName: false,
    tipsUsed
  });

  try {
    const rows = await getAllTimeHighscores(assignmentId, gameMode);
    const isHighscore = qualifiesForHighscore(rows, finalScore);
    if (isHighscore) {
      if (playerName) {
        await postHighscore({
          assignmentId,
          playerName,
          score: finalScore,
          gameMode
        });
        updateSummaryHighscoreStatus({ isHighscore:true, askName:false });
      } else {
        state.pendingHighscore = {
          assignmentId,
          score: finalScore,
          gameMode
        };
        updateSummaryHighscoreStatus({ isHighscore:true, askName:true });
      }
      await loadHighscores();
      await loadTeacherHighscores();
    } else {
      updateSummaryHighscoreStatus({ isHighscore:false, askName:false });
    }
  } catch (err) {
    console.error('Kon highscorecontrole niet afronden:', err);
    updateSummaryHighscoreStatus({ message: 'Samenvatting klaar. Highscore kon nu niet worden gecontroleerd.' });
  }
}
function loop(ts){
  if (!state.gameActive) return;
  const rawDt = ((ts - state.lastTs)/1000) || 0.016;
  const dt = Math.min(0.024, Math.max(0.012, rawDt));
  state.lastTs = ts;

  if (state.gameMode === "heli"){
    ensureWorldOverlayHealthy();
    let ix = 0, iy = 0;
    if (state.keys.left) ix -= 1;
    if (state.keys.right) ix += 1;
    if (state.keys.up) iy -= 1;
    if (state.keys.down) iy += 1;

    const moving = ix !== 0 || iy !== 0;
    if (moving) {
      const mag = Math.hypot(ix, iy) || 1;
      ix /= mag; iy /= mag;
    }

    const world = state.currentAssignment.region === "Wereld";
    const nl = state.currentAssignment.region === "Nederland";
    const speedProfile = getHeliSpeedProfile(state.currentAssignment.region || 'Wereld');
    const boost = state.keys.space ? speedProfile.boost : 1;
    const maxSpeed = speedProfile.maxSpeed * boost;
    const thrust = speedProfile.thrust;
    const brake = moving ? speedProfile.moveBrake : speedProfile.idleBrake;
    const glide = Math.pow(brake, dt * 60);

    state.velocity.x += ix * thrust * dt;
    state.velocity.y += iy * thrust * dt;
    state.velocity.x *= glide;
    state.velocity.y *= glide;

    const speed = Math.hypot(state.velocity.x, state.velocity.y);
    if (speed > maxSpeed) {
      const ratio = maxSpeed / speed;
      state.velocity.x *= ratio;
      state.velocity.y *= ratio;
    }

    const px = state.velocity.x * dt;
    const py = state.velocity.y * dt;
    if (Math.abs(px) > 0.01 || Math.abs(py) > 0.01) panByPixels(px, py);

    if (speed > 4) {
      const targetAngle = Math.atan2(state.velocity.y, state.velocity.x) * 180 / Math.PI;
      const delta = ((targetAngle - state.heliAngle + 540) % 360) - 180;
      state.heliAngle += delta * Math.min(1, 8.5 * dt);
    }
    const tiltX = Math.max(-7, Math.min(7, state.velocity.x / 90));
    const tiltY = Math.max(-6, Math.min(6, state.velocity.y / 95));
    const bob = Math.sin(ts / 120) * Math.min(3.2, 0.8 + speed / 170);
    const scale = 1 + Math.min(speed / 3600, 0.04);
    els.heli.style.transform = `translate(-50%,-50%) rotate(${state.heliAngle}deg) translate(${tiltX}px, ${bob + tiltY}px) scale(${scale})`;

    const center = state.map.getCenter();
    const dist = distanceKm(center.lat, center.lng, state.currentMission.lat, state.currentMission.lng);
    const near = nl ? 14 : world ? 420 : 105;
    const hit = nl ? 3.1 : world ? 90 : 34;
    if (state.currentAssignment.payload.kind === "country") {
      const geometry = state.targetCountryFeature?.geometry;
      const overTargetCountry = pointInGeometry(center.lat, center.lng, geometry);
      const nearTargetCountry = pointNearGeometry(center.lat, center.lng, geometry);
      const gsize = geometrySize(geometry);
      const tinyCountry = gsize.area > 0 && gsize.area < 8;
      const smallCountry = gsize.area > 0 && gsize.area < 28;
      const wideCountry = gsize.width > 10 || gsize.height > 10;
      const hoverKm = tinyCountry ? 92 : smallCountry ? 56 : wideCountry ? 42 : 28;
      const hitKm = tinyCountry ? 52 : smallCountry ? 34 : wideCountry ? 28 : 18;
      const centerSlack = wideCountry ? hitKm * 1.8 : hitKm * 1.25;
      const countryHover = overTargetCountry || (nearTargetCountry && dist <= hoverKm) || (dist <= hoverKm * 0.9 && geometry);
      const countryHit = overTargetCountry || (nearTargetCountry && dist <= hitKm) || (geometry && dist <= centerSlack);
      const countryStatus = countryHit ? 'geraakt' : countryHover ? 'boven land / bijna raak' : 'zoeken';
      const overlayExtra = state.worldOverlayDebugMessage ? ` · overlay: ${state.worldOverlayDebugMessage}` : '';
      updateDebugIndicator({ type:'landpolygoon', status:countryStatus, distanceKm:dist, extra:`hover: ${countryHover ? 'ja' : 'nee'} · hit: ${countryHit ? 'ja' : 'nee'}${overlayExtra}` });
      if (countryHover) {
        showTarget([state.currentMission.lat, state.currentMission.lng]);
        highlightCountryFeature(state.targetCountryFeature);
      } else if (performance.now() > state.hitFlashUntil) {
        hideTarget();
        clearHighlightFeature();
      }
      if (countryHit && performance.now() >= state.missionLockedUntil) {
        completeMission();
      }
    } else if (state.currentAssignment.payload.kind === "water") {
      const water = waterHoverHit(center.lat, center.lng, state.currentWaterSpec);
      updateDebugIndicator({ type:'vlak', status: water.hit ? 'geraakt' : water.hover ? 'boven vlak' : 'zoeken', distanceKm:dist, extra:`hover: ${water.hover ? 'ja' : 'nee'} · hit: ${water.hit ? 'ja' : 'nee'}` });
      if (water.hover) {
        showTarget([state.currentMission.lat, state.currentMission.lng]);
        highlightWaterSpec(state.currentWaterSpec);
      } else if (performance.now() > state.hitFlashUntil) {
        hideTarget();
        clearHighlightFeature();
      }
      if (water.hit && performance.now() >= state.missionLockedUntil) {
        completeMission();
      }
    } else {
      const areaFeature = state.targetAreaFeature;
      const overArea = areaFeature ? pointInGeometry(center.lat, center.lng, areaFeature.geometry) : false;
      const nearArea = areaFeature ? pointNearGeometry(center.lat, center.lng, areaFeature.geometry) : false;
      const nearDistance = nl ? 11 : near;
      const hitDistance = nl ? 3.4 : hit;
      const shouldShowArea = Boolean(areaFeature && overArea);
      const areaHit = areaFeature ? overArea : dist <= hitDistance;
      const areaStatus = areaHit ? 'geraakt' : shouldShowArea ? 'boven vlak' : dist <= nearDistance ? 'in de buurt' : 'zoeken';
      updateDebugIndicator({ type: areaFeature ? 'vlak' : 'punt', status: areaStatus, distanceKm:dist, extra:`hover: ${(dist <= nearDistance || shouldShowArea) ? 'ja' : 'nee'} · hit: ${areaHit ? 'ja' : 'nee'}` });
      if (dist <= nearDistance || shouldShowArea) {
        showTarget([state.currentMission.lat, state.currentMission.lng]);
        if (shouldShowArea) highlightAreaFeature(areaFeature);
      } else if (performance.now() > state.hitFlashUntil) {
        hideTarget();
        clearHighlightFeature();
      }
      if (areaHit && performance.now() >= state.missionLockedUntil){
        completeMission();
      }
    }
    if (performance.now() - state.missionStartedAt >= 10000) els.nextMissionBtn.classList.remove("hidden");
  }

  if (!state.practice){
    state.timer = Math.max(0, (state.endsAtMs - Date.now()) / 1000);
    state.elapsedSeconds = state.gameDuration - state.timer;
    if (state.timer <= 0){
      state.timer = 0;
      state.elapsedSeconds = state.gameDuration;
      updateHud();
      finishGame(false);
      return;
    }
  } else {
    state.elapsedSeconds = (Date.now() - state.startedAt) / 1000;
  }
  if (state.hitFlashFeature && performance.now() <= state.hitFlashUntil) {
    if (state.hitFlashLatLng) showTarget(state.hitFlashLatLng);
    if (!state.highlightLayer) {
      if (state.hitFlashFeature.type === "country") highlightCountryFeature(state.hitFlashFeature.feature);
      if (state.hitFlashFeature.type === "water") highlightWaterSpec(state.hitFlashFeature.spec);
      if (state.hitFlashFeature.type === "area") highlightAreaFeature(state.hitFlashFeature.feature);
    }
  } else if (state.hitFlashFeature && performance.now() > state.hitFlashUntil) {
    state.hitFlashFeature = null;
    state.hitFlashLatLng = null;
    if (!['country', 'water'].includes(state.currentAssignment?.payload?.kind) && !state.targetAreaFeature) {
      clearHighlightFeature();
      hideTarget();
    }
  }
  updateHeliAudio();
  updateHud();
  state.frame = requestAnimationFrame(loop);
}
async function startGame(practice=false){
  ensureAudio();
  restorePlayerName();
  const a = currentAssignment();
  if (!a) return alert("Kies eerst een opdracht.");
  state.currentAssignment = a;
  state.practice = practice;
  state.score = 0;
  state.streak = 0;
  state.wrongAnswers = 0;
  state.elapsedSeconds = 0;
  state.pendingHighscore = null;
  state.tipsUsed = 0;
  state.gameDuration = 90;
  state.timer = state.gameDuration;
  state.velocity = {x:0,y:0};
  state.heliAngle = 0;
  state.remaining = shuffle(a.payload.items);
  state.gameActive = true;
  state.lastTs = 0;
  state.startedAt = Date.now();
  state.endsAtMs = Date.now() + state.gameDuration * 1000;
  state.hitFlashUntil = 0;
  state.hitFlashFeature = null;
  state.hitFlashLatLng = null;
  state.currentWaterSpec = null;
  state.worldOverlayFailures = 0;
  state.worldOverlayLastCheckAt = 0;
  state.worldOverlayLastRebuildAt = 0;
  state.worldOverlayReloads = 0;
  setWorldOverlayDebugMessage('');
  await initMap();
  if (a.payload.kind === 'country' && !state.worldGeo) {
    state.gameActive = false;
    alert('De landenkaart kon nog niet worden geladen. Probeer het nog een keer; de site haalt de grenzen dan opnieuw op.');
    return;
  }
  state.map.setView(a.payload.center, a.payload.zoom, { animate:false });
  ensureCountryOverlay();
  await ensureWorldOverlayHealthy(true);
  ensureProvinceOverlay();
  setTimeout(() => state.map.invalidateSize(), 80);

  els.summaryScreen.classList.add("hidden");
  document.getElementById("menuScreen").classList.add("hidden");
  document.getElementById("gameScreen").classList.remove("hidden");
  els.namingPanel.classList.toggle("hidden", state.gameMode !== "naming");
  els.heli.classList.toggle("hidden", state.gameMode !== "heli");
  nextMission();
  updateHeliAudio();
  updateHud();
  cancelAnimationFrame(state.frame);
  state.frame = requestAnimationFrame(loop);
}
async function submitAnswer(){
  if (state.gameMode !== "naming" || !state.currentMission || performance.now() < state.missionLockedUntil) return;
  const answer = els.answerInput.value.trim();
  if (correctAnswer(answer, state.currentMission.name)){
    completeMission(`Goed! ${getMissionLabel(state.currentMission)}`);
    return;
  }
  state.missionAttempts += 1;
  registerMiss();
  await logMiss();
  if (state.missionAttempts === 1 && answer) {
    const clean = state.currentMission.name.trim();
    const hint = clean.length > 2 ? `${clean[0]}…${clean[clean.length - 1]}` : clean;
    state.tipsUsed += 1;
    state.currentMissionUsedTip = true;
    els.answerInput.value = "";
    els.answerFeedback.textContent = `Nog niet goed. Hint: ${hint}`;
    setTimeout(() => els.answerInput.focus(), 10);
    return;
  }
  els.answerInput.value = "";
  els.answerFeedback.textContent = `Antwoord: ${getMissionLabel(state.currentMission)}`;
  state.missionLockedUntil = performance.now() + 1200;
  setTimeout(() => {
    if (!state.gameActive) return;
    nextMission();
  }, 1200);
}
async function checkSession(){
  try {
    const me = await api("/api/auth/me");
    if (!me?.authenticated) throw new Error("not-authenticated");
    state.user = me.user;
    els.teacherPanel.classList.remove("hidden");
    els.teacherLogoutBtn.classList.remove("hidden");
    els.adminPanel.classList.toggle("hidden", state.user?.role !== "admin");
    updateDebugIndicator({ status:'klaar voor spel' });
  } catch {
    state.user = null;
    els.teacherPanel.classList.add("hidden");
    els.teacherLogoutBtn.classList.add("hidden");
    els.adminPanel.classList.add("hidden");
    updateDebugIndicator();
    return;
  }

  try {
    await loadTeacherAssignments();
    await loadTeacherHighscores();
    await loadTeacherMisses();
    if (state.user?.role === "admin") {
      await loadTeachers();
      await loadAdminRegions();
      renderAdminSpeedSettings();
    }
  } catch (err) {
    console.error('Docentbibliotheek kon niet volledig geladen worden:', err);
    els.teacherAssignmentList.innerHTML = `<li>Docentbibliotheek kon niet volledig geladen worden: ${err.message}</li>`;
  }
}
async function loginTeacher(){
  els.loginError.textContent = "";
  try {
    await api("/api/auth/login", {
      method:"POST",
      body: JSON.stringify({
        username: els.loginUsernameInput.value.trim(),
        password: els.loginPasswordInput.value
      })
    });
    els.loginDialog.close();
    await checkSession();
  } catch (err) {
    els.loginError.textContent = err.message;
  }
}
async function logoutTeacher(){
  await api("/api/auth/logout", { method:"POST" });
  state.user = null;
  setEditingAssignment(null);
  els.teacherPanel.classList.add("hidden");
  els.teacherLogoutBtn.classList.add("hidden");
  els.adminPanel.classList.add("hidden");
  if (els.adminSpeedStatus) els.adminSpeedStatus.textContent = '';
  updateDebugIndicator();
}
async function loadTeacherAssignments(){
  const rows = await api("/api/admin/assignments");
  els.teacherAssignmentList.innerHTML = rows.length
    ? rows.map(r => `<li><strong>${r.name}</strong> — ${r.region || "-"} · ${r.play_count || 0}× gespeeld ${r.can_edit ? `<button data-id="${r.id}" class="editMini">Wijzig</button>` : ""} ${r.can_delete ? `<button data-id="${r.id}" class="deleteMini">Verwijder</button>` : ""}</li>`).join("")
    : "<li>Nog geen opdrachten.</li>";
  els.teacherAssignmentList.querySelectorAll(".editMini").forEach(btn => {
    btn.addEventListener("click", () => {
      const row = rows.find(x => Number(x.id) === Number(btn.dataset.id));
      if (row) setEditingAssignment(row);
    });
  });
  els.teacherAssignmentList.querySelectorAll(".deleteMini").forEach(btn => {
    btn.addEventListener("click", async () => {
      if (!confirm("Opdracht verwijderen?")) return;
      await api(`/api/admin/assignments/${btn.dataset.id}`, { method:"DELETE" });
      await loadTeacherAssignments();
      await loadAssignments();
    });
  });
}
async function loadTeacherHighscores(){
  if (els.teacherPanel.classList.contains("hidden")) return;
  const groups = await api(`/api/admin/stats/highscores`).catch(() => []);
  els.teacherHighscoreList.innerHTML = groups.length ? groups.map(g => `
    <div class="statsCard"><h4>${g.assignmentName}</h4><ul>${g.rows.length ? g.rows.map(r => `<li><strong>${r.player_name}</strong> — ${formatScore(r.score)} <button class="deleteMini" data-id="${r.id}">Verwijder</button></li>`).join("") : "<li>Nog geen highscores.</li>"}</ul></div>
  `).join("") : '<div class="statsCard">Nog geen highscores.</div>';
  els.teacherHighscoreList.querySelectorAll(".deleteMini").forEach(btn => {
    btn.addEventListener("click", async () => {
      if (!confirm("Highscore verwijderen?")) return;
      await api(`/api/admin/highscores/${btn.dataset.id}`, { method:"DELETE" });
      await loadTeacherHighscores();
      await loadHighscores();
    });
  });
}
async function loadTeacherMisses(){
  if (els.teacherPanel.classList.contains("hidden")) return;
  const groups = await api("/api/admin/stats/missed").catch(() => []);
  els.teacherMissList.innerHTML = groups.length ? groups.map(g => `
    <div class="statsCard"><h4>${g.assignmentName}</h4><ul>${g.rows.length ? g.rows.map(r => `<li><strong>${r.place_name}</strong> — ${r.misses} missers</li>`).join("") : "<li>Nog geen missers.</li>"}</ul></div>
  `).join("") : '<div class="statsCard">Nog geen statistieken.</div>';
}
function computePayloadForTeacher(items, region, preferredKind = null){
  const lat = items.reduce((sum, item) => sum + Number(item.lat), 0) / items.length;
  const lng = items.reduce((sum, item) => sum + Number(item.lng), 0) / items.length;
  const zoom = region === "Nederland" ? 8.7 : region === "Europa" ? 4.8 : region === "Afrika" ? 4.4 : region === "Azië" ? 4.1 : region === "Amerika" ? 3.7 : region === "Oceanië" ? 3.6 : 2.8;
  return {
    center:[Number(lat.toFixed(4)), Number(lng.toFixed(4))],
    zoom,
    kind: preferredKind || items.find(item => item.kind)?.kind || 'city',
    items: items.map(item => ({
      name: item.name,
      lat: Number(item.lat),
      lng: Number(item.lng),
      kind: item.kind || preferredKind || null,
      region: item.region || region || null,
      bbox: Array.isArray(item.bbox) ? item.bbox.map(Number) : null,
      aliases: Array.isArray(item.aliases) ? item.aliases : undefined,
      _source: item._source || null
    }))
  };
}

async function createAssignment(forceItems = null){
  const selectedRegion = els.assignmentRegionInput.value === "__custom__"
    ? els.assignmentRegionCustomInput.value.trim()
    : els.assignmentRegionInput.value;
  const assignmentName = els.assignmentNameInput.value.trim();
  const preferredKind = inferTeacherPreferredKind();
  const placeNames = els.assignmentPayloadInput.value
    .split(/\r?\n/)
    .map(x => x.trim())
    .filter(Boolean);
  if (!selectedRegion) return alert("Kies eerst een topografisch onderdeel.");
  if (!assignmentName) return alert("Geef de opdracht een naam.");
  if (!placeNames.length && !forceItems?.length) return alert("Voer minstens één plek in.");

  try {
    if (!forceItems) {
      clearLookupUi();
      setLookupStatus('Bezig met plekken opzoeken…', 'busy');
      const lookup = await api('/api/admin/place-resolve', {
        method:'POST',
        body: JSON.stringify({ region: selectedRegion, placeNames, preferredKind, assignmentName })
      });
      if (lookup.unresolved?.length) {
        state.pendingResolvedPlaces = lookup;
        renderLookupIssues(lookup, selectedRegion);
        setLookupStatus(`Controle klaar: ${lookup.foundCount || 0} gevonden, ${lookup.unresolved.length} niet direct gevonden.`, 'warn');
        return;
      }
      renderLookupIssues(lookup, selectedRegion);
      setLookupStatus(`Alles gevonden. Bezig met opslaan…`, 'busy');
      forceItems = lookup.found || [];
    }

    const cleanItems = forceItems.map(item => ({
      name: item.name,
      lat: Number(item.lat),
      lng: Number(item.lng),
      kind: item.kind || null,
      region: item.region || selectedRegion || null,
      bbox: Array.isArray(item.bbox) ? item.bbox.map(Number) : null,
      aliases: Array.isArray(item.aliases) ? item.aliases : undefined,
      _source: item._source || null
    }));
    const payloadKind = forceItems._preferredKind || preferredKind || cleanItems.find(item => item.kind)?.kind || null;
    const endpoint = state.editingAssignmentId ? `/api/admin/assignments/${state.editingAssignmentId}` : '/api/admin/assignments';
    const result = await api(endpoint, {
      method: state.editingAssignmentId ? 'PUT' : 'POST',
      body: JSON.stringify({
        name: assignmentName,
        region: selectedRegion,
        difficulty: els.assignmentDifficultyInput.value.trim(),
        payload: computePayloadForTeacher(cleanItems, selectedRegion, payloadKind),
        preferredKind: payloadKind,
        isPublic: true
      })
    });
    await loadTeacherAssignments();
    await loadAssignments();
    setLookupStatus(`Klaar. ${result.count || cleanItems.length} plekken ${state.editingAssignmentId ? 'opgeslagen' : 'toegevoegd'}.`, 'success');
    setEditingAssignment(null);
    if (els.lookupSummary) els.lookupSummary.textContent = '';
    if (els.lookupIssues) els.lookupIssues.innerHTML = '';
    if (els.lookupConfirmBtn) els.lookupConfirmBtn.classList.add('hidden');
    if (els.lookupCancelBtn) els.lookupCancelBtn.classList.add('hidden');
  } catch (err) {
    setLookupStatus(err.message || 'Het opslaan is niet gelukt.', 'error');
    throw err;
  }
}
async function loadTeachers(){
  if (state.user?.role !== "admin") return;
  const rows = await api("/api/admin/users").catch(() => []);
  els.adminTeacherList.innerHTML = rows.length ? rows.map(r => `<li><strong>${r.username}</strong> — ${r.role}${r.role === "teacher" ? ` <button class="deleteMini" data-id="${r.id}">Verwijder</button>` : ""}</li>`).join("") : "<li>Nog geen docenten.</li>";
  els.adminTeacherList.querySelectorAll(".deleteMini").forEach(btn => btn.addEventListener("click", async () => {
    if (!confirm("Docent verwijderen?")) return;
    await api(`/api/admin/users/${btn.dataset.id}`, { method:"DELETE" });
    await loadTeachers();
  }));
}
async function createTeacher(){
  const username = els.adminTeacherUsernameInput.value.trim();
  const password = els.adminTeacherPasswordInput.value;
  if (!username || !password) return alert("Vul gebruikersnaam en wachtwoord in.");
  await api("/api/admin/users", { method:"POST", body: JSON.stringify({ username, password, role:"teacher" }) });
  els.adminTeacherUsernameInput.value = "";
  els.adminTeacherPasswordInput.value = "";
  await loadTeachers();
}

async function toggleFullscreen(){
  const root = document.documentElement;
  if (!document.fullscreenElement) await root.requestFullscreen().catch(() => {});
  else await document.exitFullscreen().catch(() => {});
}
function bind(){
  els.modeHeliBtn.addEventListener("click", () => {
    state.gameMode = "heli";
    updateModeButtons();
    updateSelectedGameLabel();
    loadHighscores();
    loadTeacherHighscores();
  });
  els.modeNamingBtn.addEventListener("click", () => {
    state.gameMode = "naming";
    updateModeButtons();
    updateSelectedGameLabel();
    loadHighscores();
    loadTeacherHighscores();
  });
  els.periodAllBtn.addEventListener("click", () => { state.period = "all"; updatePeriodButtons(); updateSelectedGameLabel(); loadHighscores(); });
  els.periodWeekBtn.addEventListener("click", () => { state.period = "week"; updatePeriodButtons(); updateSelectedGameLabel(); loadHighscores(); });
  els.periodDayBtn.addEventListener("click", () => { state.period = "day"; updatePeriodButtons(); updateSelectedGameLabel(); loadHighscores(); });

  els.startBtn?.addEventListener("click", () => startGame(false));
  els.startInlineBtn?.addEventListener("click", () => startGame(false));
  els.soundHeliBtn?.addEventListener("click", () => { ensureAudio(); setHeliSoundEnabled(!state.heliSoundEnabled); });
  els.soundFxBtn?.addEventListener("click", () => { ensureAudio(); setFxSoundEnabled(!state.fxSoundEnabled); });
  els.spellStrictBtn?.addEventListener("click", () => setNamingTolerance("strict"));
  els.spellLenientBtn?.addEventListener("click", () => setNamingTolerance("lenient"));
  els.playerNameInput?.addEventListener("input", e => persistPlayerName(e.target.value));
  els.practiceBtn.addEventListener("click", () => startGame(true));
  els.answerBtn?.addEventListener("click", submitAnswer);
  els.answerInput?.addEventListener("keydown", e => { if (e.key === "Enter") submitAnswer(); });
  els.nextMissionBtn?.addEventListener("click", () => { registerMiss(); logMiss(); nextMission(); });
  els.menuBtn?.addEventListener("click", () => finishGame(true));
  els.teacherLoginOpenBtn?.addEventListener("click", () => els.loginDialog.showModal());
  els.loginSubmitBtn?.addEventListener("click", loginTeacher);
  els.loginCancelBtn?.addEventListener("click", () => els.loginDialog.close());
  els.teacherLogoutBtn?.addEventListener("click", logoutTeacher);
  els.createAssignmentBtn?.addEventListener("click", () => createAssignment().catch(() => {}));
  els.lookupConfirmBtn?.addEventListener("click", () => { const items = collectResolvedPlaces(); if (!items?.length) return alert('Kies minstens één plek om toe te voegen.'); createAssignment(items).catch(() => {}); });
  els.lookupCancelBtn?.addEventListener("click", clearLookupUi);
  els.cancelEditAssignmentBtn?.addEventListener("click", () => { setEditingAssignment(null); clearLookupUi(); });
  els.fullscreenBtn?.addEventListener("click", toggleFullscreen);
  els.gameFullscreenBtn?.addEventListener("click", toggleFullscreen);
  els.summarySaveBtn?.addEventListener("click", async () => {
    const name = els.summaryNameInput.value.trim();
    if (!name) return alert("Vul eerst een naam in.");
    els.playerNameInput.value = name;
    await saveHighscoreWithName(name);
  });
  els.summaryMenuBtn?.addEventListener("click", backToMenuAfterSummary);
  els.summaryReplayBtn?.addEventListener("click", replayAfterSummary);
  els.adminCreateTeacherBtn?.addEventListener("click", createTeacher);
  els.adminCreateRegionBtn?.addEventListener("click", createRegion);
  els.adminSaveSpeedBtn?.addEventListener("click", () => saveAdminSpeedSettings().catch(err => { if (els.adminSpeedStatus) els.adminSpeedStatus.textContent = err.message; }));
  els.assignmentRegionInput?.addEventListener("change", refreshRegionCustomVisibility);

  window.addEventListener("keydown", e => {
    const tag = document.activeElement?.tagName?.toLowerCase();
    if ((tag === "input" || tag === "textarea") && e.key !== "Escape") return;
    const k = e.key.toLowerCase();
    if (["arrowleft","a"].includes(k)) { state.keys.left = true; e.preventDefault(); }
    if (["arrowright","d"].includes(k)) { state.keys.right = true; e.preventDefault(); }
    if (["arrowup","w"].includes(k)) { state.keys.up = true; e.preventDefault(); }
    if (["arrowdown","s"].includes(k)) { state.keys.down = true; e.preventDefault(); }
    if (k === " ") { state.keys.space = true; e.preventDefault(); }
  }, { passive:false });
  window.addEventListener("keyup", e => {
    const k = typeof e.key === "string" ? e.key.toLowerCase() : "";
    if (["arrowleft","a"].includes(k)) state.keys.left = false;
    if (["arrowright","d"].includes(k)) state.keys.right = false;
    if (["arrowup","w"].includes(k)) state.keys.up = false;
    if (["arrowdown","s"].includes(k)) state.keys.down = false;
    if (k === " ") state.keys.space = false;
  });

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && state.gameActive) {
      updateHud();
      updateHeliAudio();
    }
  });
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => navigator.serviceWorker.register("/service-worker.js").catch(() => {}));
  }
}
window.addEventListener("DOMContentLoaded", async () => {
  bind();
  restorePlayerName();
  updateModeButtons();
  updatePeriodButtons();
  updateSpellButtons();
  await loadHeliSpeedProfiles();
  updateSoundButtons();
  await loadRegions();
  await loadAssignments();
  await checkSession();
});

if (els.appVersionLabel) els.appVersionLabel.textContent = "v1.59";
