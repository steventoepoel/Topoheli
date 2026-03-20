import express from "express";
import { db } from "../db/database.js";
import { requireAuth } from "../middleware/auth.js";

const router = express.Router();

const DUTCH_WATER_ALIASES = {
  ijssel: { name:"IJssel", lat:52.35, lng:6.08, kind:"water", region:"Nederland" },
  waal: { name:"Waal", lat:51.85, lng:5.40, kind:"water", region:"Nederland" },
  lek: { name:"Lek", lat:51.93, lng:4.95, kind:"water", region:"Nederland" },
  haringvliet: { name:"Haringvliet", lat:51.76, lng:4.20, kind:"water", region:"Nederland" },
  waddenzee: { name:"Waddenzee", lat:53.27, lng:5.30, kind:"water", region:"Nederland" },
  veluwemeer: { name:"Veluwemeer", lat:52.38, lng:5.72, kind:"water", region:"Nederland" },
  "amsterdam-rijnkanaal": { name:"Amsterdam-Rijnkanaal", lat:52.20, lng:4.99, kind:"water", region:"Nederland" },
  vecht: { name:"Vecht", lat:52.26, lng:5.08, kind:"water", region:"Nederland" },
  oosterschelde: { name:"Oosterschelde", lat:51.62, lng:3.95, kind:"water", region:"Nederland" },
  westerschelde: { name:"Westerschelde", lat:51.39, lng:3.86, kind:"water", region:"Nederland" },
  grevelingenmeer: { name:"Grevelingenmeer", lat:51.74, lng:3.90, kind:"water", region:"Nederland" },
  "veerse meer": { name:"Veerse Meer", lat:51.54, lng:3.74, kind:"water", region:"Nederland" },
  dommel: { name:"Dommel", lat:51.44, lng:5.48, kind:"water", region:"Nederland" },
  afsluitdijk: { name:"Afsluitdijk", lat:52.962, lng:5.141, kind:"water", region:"Nederland", aliases:["afsluitdijk nederland"] }
};



const DUTCH_REGION_SHAPES = {
  achterhoek: { name:"Achterhoek", lat:51.98, lng:6.295, kind:"regio", region:"Nederland", bbox:[51.78,6.00,52.16,6.62], aliases:["de achterhoek","streek achterhoek","regio achterhoek"] },
  veluwe: { name:"Veluwe", lat:52.17, lng:5.84, kind:"regio", region:"Nederland", bbox:[51.92,5.55,52.45,6.12], aliases:["de veluwe","veluwezoom","regio veluwe","streek veluwe"] },
  twente: { name:"Twente", lat:52.27, lng:6.74, kind:"regio", region:"Nederland", bbox:[52.10,6.42,52.48,7.10], aliases:["regio twente","streek twente"] },
  salland: { name:"Salland", lat:52.47, lng:6.32, kind:"regio", region:"Nederland", bbox:[52.25,6.07,52.66,6.52], aliases:["regio salland","streek salland"] },
  friesland: { name:"Friesland", lat:53.16, lng:5.78, kind:"provincie", region:"Nederland", bbox:[52.80,4.72,53.54,6.32], aliases:["fryslan","fryslân","provincie friesland"] },
  groningen: { name:"Groningen", lat:53.22, lng:6.57, kind:"provincie", region:"Nederland", bbox:[53.07,6.11,53.51,7.24], aliases:["provincie groningen"] },
  utrecht: { name:"Utrecht", lat:52.09, lng:5.12, kind:"provincie", region:"Nederland", bbox:[51.95,4.89,52.31,5.46], aliases:["provincie utrecht"] },
  biesbosch: { name:"Biesbosch", lat:51.77, lng:4.83, kind:"regio", region:"Nederland", bbox:[51.70,4.64,51.84,5.05], aliases:["de biesbosch","nationaal park de biesbosch"] },
  "west friesland": { name:"West-Friesland", lat:52.70, lng:5.00, kind:"regio", region:"Nederland", bbox:[52.58,4.75,52.86,5.30], aliases:["westfriesland","west friesland"] },
  peel: { name:"Peel", lat:51.47, lng:5.86, kind:"regio", region:"Nederland", bbox:[51.35,5.62,51.63,6.02], aliases:["de peel","peelregio"] }
};

const DUTCH_PLACE_ALIASES = {
  texel: { name:"Texel", lat:53.0541, lng:4.7970, kind:"regio", region:"Nederland" },
  vlieland: { name:"Vlieland", lat:53.2967, lng:5.0747, kind:"regio", region:"Nederland" },
  terschelling: { name:"Terschelling", lat:53.3917, lng:5.3469, kind:"regio", region:"Nederland" },
  ameland: { name:"Ameland", lat:53.4510, lng:5.7719, kind:"regio", region:"Nederland" },
  schiermonnikoog: { name:"Schiermonnikoog", lat:53.4872, lng:6.1620, kind:"regio", region:"Nederland" },
  friesland: { name:"Friesland", lat:53.1642, lng:5.7818, kind:"provincie", region:"Nederland" },
  groningen: { name:"Groningen", lat:53.2194, lng:6.5665, kind:"provincie", region:"Nederland" },
  drenthe: { name:"Drenthe", lat:52.9476, lng:6.6231, kind:"provincie", region:"Nederland" },
  overijssel: { name:"Overijssel", lat:52.4388, lng:6.5016, kind:"provincie", region:"Nederland" },
  gelderland: { name:"Gelderland", lat:52.0452, lng:5.8718, kind:"provincie", region:"Nederland" },
  utrecht: { name:"Utrecht", lat:52.0907, lng:5.1214, kind:"provincie", region:"Nederland" },
  "noord holland": { name:"Noord-Holland", lat:52.5206, lng:4.7885, kind:"provincie", region:"Nederland" },
  "zuid holland": { name:"Zuid-Holland", lat:52.0116, lng:4.3571, kind:"provincie", region:"Nederland" },
  zeeland: { name:"Zeeland", lat:51.4940, lng:3.8497, kind:"provincie", region:"Nederland" },
  "noord brabant": { name:"Noord-Brabant", lat:51.5719, lng:5.1770, kind:"provincie", region:"Nederland" },
  limburg: { name:"Limburg", lat:51.2093, lng:5.9339, kind:"provincie", region:"Nederland" },
  flevoland: { name:"Flevoland", lat:52.5270, lng:5.5954, kind:"provincie", region:"Nederland" },
  achterhoek: { name:"Achterhoek", lat:51.9800, lng:6.2950, kind:"regio", region:"Nederland" },
  veluwe: { name:"Veluwe", lat:52.2000, lng:5.8500, kind:"regio", region:"Nederland" },
  twente: { name:"Twente", lat:52.2600, lng:6.7500, kind:"regio", region:"Nederland" },
  salland: { name:"Salland", lat:52.4700, lng:6.3200, kind:"regio", region:"Nederland" },
  noordoostpolder: { name:"Noordoostpolder", lat:52.6950, lng:5.9600, kind:"regio", region:"Nederland" },
  "goeree overflakkee": { name:"Goeree-Overflakkee", lat:51.7600, lng:4.1000, kind:"regio", region:"Nederland" },
  walcheren: { name:"Walcheren", lat:51.5000, lng:3.5500, kind:"regio", region:"Nederland" },
  "zeeuws vlaanderen": { name:"Zeeuws-Vlaanderen", lat:51.3000, lng:3.8000, kind:"regio", region:"Nederland" },
  biesbosch: { name:"Biesbosch", lat:51.7700, lng:4.8300, kind:"regio", region:"Nederland", bbox:[51.70,4.64,51.84,5.05] },
  "west friesland": { name:"West-Friesland", lat:52.7000, lng:5.0000, kind:"regio", region:"Nederland", bbox:[52.58,4.75,52.86,5.30] },
  peel: { name:"Peel", lat:51.4700, lng:5.8600, kind:"regio", region:"Nederland", bbox:[51.35,5.62,51.63,6.02] },
  afsluitdijk: { name:"Afsluitdijk", lat:52.9620, lng:5.1410, kind:"water", region:"Nederland" }
};

function normalize(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/&/g, " en ")
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function compact(text) {
  return normalize(text).replace(/[\s-]+/g, "");
}

function loose(text) {
  return normalize(text)
    .replace(/\b(van|de|den|der|het|een|en|aan|op|bij|of|the|and|region|regio|streek|provincie|province|mountains|mountain|gebergte|berg)\b/g, " ")
    .replace(/[\s-]+/g, "");
}

function normalizeLookupName(text) {
  return normalize(text)
    .replace(/\((?:stad|provincie|regio|streek|gebergte|berg|land)\)/g, ' ')
    .replace(/\b(provincie|stad|regio|streek|gebergte|berg|eiland|landen?)\b/g, ' ')
    .replace(/[\s-]+/g, ' ')
    .trim();
}

function normalizeRegionHint(region) {
  const key = normalize(region || "");
  if (!key) return "";
  if (key.includes("nederland")) return "Nederland";
  if (key.includes("europa")) return "Europa";
  if (key.includes("afrika")) return "Afrika";
  if (key.includes("azie") || key.includes("azië")) return "Azië";
  if (key.includes("amerika")) return "Amerika";
  if (key.includes("oceanie") || key.includes("oceanië")) return "Oceanië";
  if (key.includes("wereld")) return "Wereld";
  return region || "";
}

function cacheKey(name, region, preferredKind) {
  return `${loose(name)}__${normalize(region || '')}__${preferredKind || ''}`;
}

function similarityScore(a, b) {
  const x = compact(a);
  const y = compact(b);
  if (!x || !y) return 0;
  if (x === y) return 1;
  if (loose(a) && loose(a) === loose(b)) return 0.97;
  if (x.includes(y) || y.includes(x)) return 0.9;
  const maxLen = Math.max(x.length, y.length) || 1;
  const distance = levenshtein(x, y);
  const prefix = commonPrefix(x, y) / maxLen;
  return Math.max(prefix, 1 - distance / maxLen);
}

function commonPrefix(a, b) {
  let n = 0;
  while (n < a.length && n < b.length && a[n] === b[n]) n++;
  return n;
}

function levenshtein(a, b) {
  const m = a.length, n = b.length;
  const d = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) d[i][0] = i;
  for (let j = 0; j <= n; j++) d[0][j] = j;
  for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++) {
    const c = a[i - 1] === b[j - 1] ? 0 : 1;
    d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + c);
  }
  return d[m][n];
}

function inferKindFromName(name, fallback = null) {
  const key = normalize(name);
  if (/water|zee|meer|kanaal|rivier|baai|golf|straat/.test(key)) return "water";
  if (/berg|gebergte/.test(key)) return "mountain";
  if (/provinc/.test(key)) return "provincie";
  if (/regio|streek|eiland/.test(key)) return "regio";
  return fallback;
}

function inferKindFromGeoResult(item, fallback = null) {
  const text = normalize(`${item.type || ""} ${item.class || ""} ${item.addresstype || ""} ${item.display_name || ""}`);
  if (/water|river|sea|canal|lake|bay|strait/.test(text)) return "water";
  if (/peak|mountain|ridge|volcano|hill/.test(text)) return "mountain";
  if (/island|archipelago|region|county|state_district|province|administrative|municipality|district|forest|natural|protected_area/.test(text)) {
    if (/province/.test(text)) return "provincie";
    return "regio";
  }
  return fallback || "city";
}

function inferPreferredKind({ assignmentName = "", placeNames = [] } = {}) {
  const source = normalize(`${assignmentName} ${(placeNames || []).slice(0, 5).join(' ')}`);
  if (/provinc/.test(source)) return "provincie";
  if (/regio|streek|eiland|eilanden/.test(source)) return "regio";
  if (/berg|gebergte|heuvel/.test(source)) return "mountain";
  if (/water|zee|meer|kanaal|rivier|baai|golf|straat/.test(source)) return "water";
  if (/land|landen|wereld/.test(source)) return "country";
  return null;
}

function canManageAssignment(user, assignment) {
  if (!user || !assignment) return false;
  if (user.role === "admin") return true;
  return Number(assignment.created_by_user_id) === Number(user.sub);
}

function buildPlaceIndex() {
  const index = new Map();
  const regionAliasEntries = Object.entries(DUTCH_REGION_SHAPES).flatMap(([key, value]) => [[key, value], ...((value.aliases || []).map(alias => [alias, { ...value, aliases:[...(value.aliases || []), key] }]))]);
  const waterAliasEntries = Object.entries(DUTCH_WATER_ALIASES).flatMap(([key, value]) => [[key, value], ...((value.aliases || []).map(alias => [alias, { ...value, aliases:[...(value.aliases || []), key] }]))]);
  const placeAliasEntries = Object.entries(DUTCH_PLACE_ALIASES).flatMap(([key, value]) => [[key, value], ...((value.aliases || []).map(alias => [alias, { ...value, aliases:[...(value.aliases || []), key] }]))]);
  const aliasEntries = [...waterAliasEntries, ...placeAliasEntries, ...regionAliasEntries];
  for (const assignment of db.loadAssignments()) {
    const payload = assignment.payload || {};
    for (const item of payload.items || []) {
      const key = normalize(item.name);
      if (!key) continue;
      const candidate = {
        name: item.name,
        lat: Number(item.lat),
        lng: Number(item.lng),
        kind: inferKindFromName(item.name, payload.kind || null),
        region: assignment.region || null
      };
      if (!index.has(key)) index.set(key, []);
      const rows = index.get(key);
      if (!rows.find(x => x.name === candidate.name && x.kind === candidate.kind && x.region === candidate.region)) {
        rows.push(candidate);
      }
    }
  }
  for (const [key, candidate] of aliasEntries) {
    if (!index.has(key)) index.set(key, []);
    index.get(key).push(candidate);
  }
  return index;
}

function uniqCandidates(rows) {
  const seen = new Map();
  for (const row of rows) {
    const id = `${row.name}__${row.region || ''}__${row.kind || ''}`;
    if (!seen.has(id)) seen.set(id, row);
  }
  return [...seen.values()];
}

function scoreCandidate(rawName, candidate, region, preferredKind) {
  const nameScore = similarityScore(rawName, candidate.name);
  const regionBonus = !region ? 0 : candidate.region === region ? 0.42 : -0.18;
  const kindGuess = inferKindFromName(rawName);
  const kindBonus = !preferredKind ? (kindGuess && candidate.kind === kindGuess ? 0.08 : 0) : (candidate.kind === preferredKind || kindGuess === candidate.kind ? 0.18 : -0.08);
  const aliasBonus = (candidate.aliases || []).some(alias => loose(alias) === loose(rawName) || normalize(alias) === normalize(rawName)) ? 0.35 : 0;
  const tokenBonus = loose(candidate.name).includes(loose(rawName)) || loose(rawName).includes(loose(candidate.name)) ? 0.12 : 0;
  return nameScore + regionBonus + kindBonus + aliasBonus + tokenBonus;
}

function rankSuggestions(rawName, index, region, preferredKind, extras = []) {
  const rows = [];
  for (const candidates of index.values()) rows.push(...candidates);
  rows.push(...extras);
  return uniqCandidates(rows)
    .map(candidate => ({ ...candidate, score: scoreCandidate(rawName, candidate, region, preferredKind) }))
    .filter(candidate => candidate.score >= 0.42)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6)
    .map(({ score, ...rest }) => rest);
}

function buildQueries(rawName, region, preferredKind) {
  const queries = [];
  const scoped = region && region !== "Wereld" ? `${rawName}, ${region}` : rawName;
  queries.push(scoped);
  if (region === "Nederland") {
    queries.push(`${rawName}, Nederland`);
    if (preferredKind === "regio") {
      queries.push(`${rawName} streek, Nederland`);
      queries.push(`${rawName} regio, Nederland`);
      queries.push(`${rawName} region, Netherlands`);
    }
    if (preferredKind === "mountain") {
      queries.push(`${rawName} gebergte, Nederland`);
      queries.push(`${rawName} hill, Netherlands`);
    }
  }
  if (region && region !== "Nederland" && region !== "Wereld") queries.push(`${rawName}, ${region}, world`);
  return [...new Set(queries.filter(Boolean))];
}

function loadResolveCacheMap() {
  const map = new Map();
  for (const row of db.loadPlaceResolveCache()) {
    map.set(row.key, row);
  }
  return map;
}

function saveResolveCacheRow(key, rawName, region, preferredKind, result) {
  const rows = db.loadPlaceResolveCache();
  const next = {
    key,
    raw_name: rawName,
    region: region || null,
    preferred_kind: preferredKind || null,
    result,
    updated_at: new Date().toISOString()
  };
  const idx = rows.findIndex(row => row.key === key);
  if (idx >= 0) rows[idx] = next;
  else rows.push(next);
  db.savePlaceResolveCache(rows.slice(-1500));
}

async function geocodePlace(rawName, region, preferredKind) {
  const all = [];
  for (const q of buildQueries(rawName, region, preferredKind)) {
    const url = new URL("https://nominatim.openstreetmap.org/search");
    url.searchParams.set("format", "jsonv2");
    url.searchParams.set("limit", "6");
    url.searchParams.set("addressdetails", "1");
    url.searchParams.set("q", q);
    if (region === "Nederland") url.searchParams.set("countrycodes", "nl");
    try {
      const res = await fetch(url, { headers: { "Accept": "application/json", "User-Agent": "topoheli/1.51" } });
      if (!res.ok) continue;
      const data = await res.json();
      for (const item of data || []) {
        const name = String(item.name || item.display_name || rawName).split(",")[0].trim();
        const itemRegion = normalizeRegionHint(item.address?.country || item.address?.state || item.address?.region || region || null);
        const kind = inferKindFromGeoResult(item, preferredKind);
        const candidate = {
          name,
          lat: Number(item.lat),
          lng: Number(item.lon),
          region: itemRegion || region || null,
          kind,
          bbox: Array.isArray(item.boundingbox) && item.boundingbox.length === 4 ? [Number(item.boundingbox[0]), Number(item.boundingbox[2]), Number(item.boundingbox[1]), Number(item.boundingbox[3])] : null,
          aliases: [item.display_name].filter(Boolean)
        };
        all.push({
          ...candidate,
          score: scoreCandidate(rawName, candidate, region, preferredKind)
        });
      }
    } catch {}
  }
  return uniqCandidates(all).sort((a, b) => b.score - a.score);
}

async function resolvePlaceNames(placeNames, region, preferredKind) {
  const index = buildPlaceIndex();
  const found = [];
  const unresolved = [];
  const cache = loadResolveCacheMap();
  let cacheHits = 0;

  for (const rawInput of placeNames) {
    const rawName = String(rawInput || '').trim();
    const normalizedName = normalizeLookupName(rawName);
    const key = cacheKey(normalizedName || rawName, region, preferredKind);
    const cached = cache.get(key)?.result;
    if (cached?.name && Number.isFinite(Number(cached.lat)) && Number.isFinite(Number(cached.lng))) {
      found.push({ name: cached.name, lat: Number(cached.lat), lng: Number(cached.lng), kind: cached.kind || preferredKind || null, region: cached.region || region || null, bbox: cached.bbox || null, aliases: cached.aliases || undefined, _source: 'cache' });
      cacheHits += 1;
      continue;
    }

    const lookupKeys = [...new Set([normalize(rawName), normalize(normalizedName), loose(rawName), loose(normalizedName)])].filter(Boolean);
    let localOptions = lookupKeys.flatMap(k => index.get(k) || []);
    if (!localOptions.length) {
      for (const candidates of index.values()) {
        for (const candidate of candidates) {
          if (lookupKeys.some(k => k && (loose(candidate.name) === k || loose(candidate.name).includes(k) || k.includes(loose(candidate.name))))) {
            localOptions.push(candidate);
          }
        }
      }
    }
    localOptions = uniqCandidates(localOptions);

    let scoredLocal = localOptions
      .map(x => ({ ...x, score: scoreCandidate(normalizedName || rawName, x, region, preferredKind) }))
      .sort((a, b) => b.score - a.score);
    let best = scoredLocal.find(x => x.score >= 1.02 && (!region || x.region === region));
    if (!best) best = scoredLocal.find(x => x.score >= 0.94);
    if (!best) {
      const geoOptions = await geocodePlace(normalizedName || rawName, region, preferredKind);
      best = geoOptions.find(x => x.score >= 0.86) || null;
      if (!best) {
        unresolved.push({
          input: rawName,
          normalized: normalizedName,
          suggestions: rankSuggestions(normalizedName || rawName, index, region, preferredKind, geoOptions)
        });
        continue;
      }
    }
    found.push({ name: best.name, lat: best.lat, lng: best.lng, kind: best.kind || preferredKind || null, region: best.region || region || null, bbox: best.bbox || null, aliases: best.aliases || undefined, _source: best.score && best.score < 1 ? 'geocoder' : 'local' });
    saveResolveCacheRow(key, rawName, region, preferredKind, { name: best.name, lat: best.lat, lng: best.lng, kind: best.kind, region: best.region, bbox: best.bbox || null, aliases: best.aliases || undefined });
  }

  return {
    found,
    unresolved,
    foundCount: found.length,
    cacheHits,
    localHits: found.filter(x => x._source === 'local').length,
    geocoderHits: found.filter(x => x._source === 'geocoder').length
  };
}


function computePayload(items, fallbackRegion, preferredKind) {
  const lat = items.reduce((sum, item) => sum + Number(item.lat), 0) / items.length;
  const lng = items.reduce((sum, item) => sum + Number(item.lng), 0) / items.length;
  const region = fallbackRegion || "Wereld";
  const zoom = region === "Nederland" ? 8.7 : region === "Europa" ? 4.8 : region === "Afrika" ? 4.4 : region === "Azië" ? 4.1 : region === "Amerika" ? 3.7 : region === "Oceanië" ? 3.6 : 2.8;
  return {
    center: [Number(lat.toFixed(4)), Number(lng.toFixed(4))],
    zoom,
    kind: preferredKind || inferKindFromName(items[0]?.name, "city") || "city",
    items: items.map(item => ({
      name: item.name,
      lat: Number(item.lat),
      lng: Number(item.lng),
      kind: item.kind || preferredKind || null,
      region: item.region || fallbackRegion || null,
      bbox: Array.isArray(item.bbox) ? item.bbox.map(Number) : null,
      aliases: Array.isArray(item.aliases) ? item.aliases : undefined
    }))
  };
}

router.get("/assignments/public", (_req, res) => {
  const rows = db.loadAssignments()
    .filter(x => Number(x.is_public) === 1)
    .sort((a, b) => a.name.localeCompare(b.name, "nl"));
  res.json(rows);
});

router.get("/regions", (_req, res) => {
  const builtins = ["Wereld","Nederland","Europa","Afrika","Azië","Amerika","Oceanië"];
  const custom = db.loadCustomRegions().map(x => x.name).filter(Boolean);
  res.json([...builtins, ...custom.filter(x => !builtins.includes(x))]);
});

router.get("/admin/assignments", requireAuth, (req, res) => {
  const playCounts = new Map();
  for (const row of db.loadPlayLogs()) {
    const aid = Number(row.assignment_id);
    playCounts.set(aid, (playCounts.get(aid) || 0) + 1);
  }
  const rows = db.loadAssignments()
    .map(row => ({
      ...row,
      play_count: playCounts.get(Number(row.id)) || 0,
      can_edit: canManageAssignment(req.user, row),
      can_delete: !row.built_in_key && canManageAssignment(req.user, row)
    }))
    .sort((a, b) => a.name.localeCompare(b.name, "nl"));
  res.json(rows);
});

router.post("/admin/place-resolve", requireAuth, async (req, res) => {
  const { region = null, placeNames = [], preferredKind = null, assignmentName = "" } = req.body ?? {};
  if (!Array.isArray(placeNames) || !placeNames.length) return res.status(400).json({ error: "Voer minimaal één plek in." });
  const finalPreferredKind = preferredKind || inferPreferredKind({ assignmentName, placeNames });
  const result = await resolvePlaceNames(placeNames, region, finalPreferredKind);
  res.json({ ...result, preferredKind: finalPreferredKind });
});

router.post("/admin/assignments", requireAuth, async (req, res) => {
  const { name, region = null, difficulty = null, payload, isPublic = true, placeNames = [], preferredKind = null } = req.body ?? {};
  const finalPreferredKind = preferredKind || inferPreferredKind({ assignmentName: name, placeNames });
  if (!name) return res.status(400).json({ error: "Naam is verplicht." });

  let finalPayload = payload;
  if (!finalPayload && Array.isArray(placeNames) && placeNames.length) {
    const { found, unresolved } = await resolvePlaceNames(placeNames, region, finalPreferredKind);
    if (unresolved.length) {
      return res.status(400).json({ error: `Deze plekken zijn niet gevonden: ${unresolved.map(x => x.input).join(", ")}`, unresolved });
    }
    finalPayload = computePayload(found, region, finalPreferredKind);
  }

  if (!finalPayload || !Array.isArray(finalPayload.items) || !finalPayload.items.length) {
    return res.status(400).json({ error: "Voer minimaal één geldige plek in." });
  }

  const rows = db.loadAssignments();
  const item = {
    id: db.nextId(rows),
    built_in_key: null,
    name,
    mode: "mixed",
    region,
    difficulty,
    payload: finalPayload,
    is_public: isPublic ? 1 : 0,
    created_by_user_id: req.user.sub,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };
  rows.push(item);
  db.saveAssignments(rows);
  res.status(201).json({ ok: true, id: item.id, count: finalPayload.items.length });
});


router.put("/admin/assignments/:id", requireAuth, async (req, res) => {
  const id = Number(req.params.id);
  const rows = db.loadAssignments();
  const found = rows.find(x => Number(x.id) === id);
  if (!found) return res.status(404).json({ error: "Opdracht niet gevonden." });
  if (!canManageAssignment(req.user, found)) return res.status(403).json({ error: "Je mag alleen je eigen opdrachten aanpassen." });

  const { name, region = null, difficulty = null, payload, isPublic = true, placeNames = [], preferredKind = null } = req.body ?? {};
  if (!name) return res.status(400).json({ error: "Naam is verplicht." });
  const finalPreferredKind = preferredKind || inferPreferredKind({ assignmentName: name, placeNames: payload?.items?.map(x => x.name) || placeNames });

  let finalPayload = payload;
  if (!finalPayload && Array.isArray(placeNames) && placeNames.length) {
    const { found: foundPlaces, unresolved } = await resolvePlaceNames(placeNames, region, finalPreferredKind);
    if (unresolved.length) {
      return res.status(400).json({ error: `Deze plekken zijn niet gevonden: ${unresolved.map(x => x.input).join(", ")}`, unresolved });
    }
    finalPayload = computePayload(foundPlaces, region, finalPreferredKind);
  }
  if (!finalPayload || !Array.isArray(finalPayload.items) || !finalPayload.items.length) {
    return res.status(400).json({ error: "Voer minimaal één geldige plek in." });
  }

  Object.assign(found, {
    name,
    region,
    difficulty,
    payload: finalPayload,
    is_public: isPublic ? 1 : 0,
    updated_at: new Date().toISOString()
  });
  db.saveAssignments(rows);
  res.json({ ok: true, id: found.id, count: finalPayload.items.length });
});

router.delete("/admin/assignments/:id", requireAuth, (req, res) => {
  const id = Number(req.params.id);
  const rows = db.loadAssignments();
  const found = rows.find(x => Number(x.id) === id);
  if (!found) return res.status(404).json({ error: "Opdracht niet gevonden." });
  if (found.built_in_key) return res.status(400).json({ error: "Ingebouwde opdrachten kun je niet verwijderen." });
  if (!canManageAssignment(req.user, found)) return res.status(403).json({ error: "Je mag alleen je eigen opdrachten verwijderen." });
  db.saveAssignments(rows.filter(x => Number(x.id) !== id));
  res.json({ ok: true });
});

export default router;
