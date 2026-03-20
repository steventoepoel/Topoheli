import fs from "fs";
import path from "path";
import { builtInAssignments } from "../data/builtins.js";

const dataDir = path.resolve(process.cwd(), "./data");
fs.mkdirSync(dataDir, { recursive: true });

const files = {
  users: path.join(dataDir, "users.json"),
  assignments: path.join(dataDir, "assignments.json"),
  highscores: path.join(dataDir, "highscores.json"),
  miss_logs: path.join(dataDir, "miss_logs.json"),
  play_logs: path.join(dataDir, "play_logs.json"),
  custom_regions: path.join(dataDir, "custom_regions.json"),
  place_resolve_cache: path.join(dataDir, "place_resolve_cache.json"),
  heli_speed_profiles: path.join(dataDir, "heli_speed_profiles.json")
};

function ensure(file, fallback) {
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, JSON.stringify(fallback, null, 2), "utf-8");
  }
}

function load(file, fallback) {
  ensure(file, fallback);
  return JSON.parse(fs.readFileSync(file, "utf-8"));
}

function save(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2), "utf-8");
}

function nextId(items) {
  return items.length ? Math.max(...items.map(x => Number(x.id) || 0)) + 1 : 1;
}

ensure(files.users, []);
ensure(files.assignments, []);
ensure(files.highscores, []);
ensure(files.miss_logs, []);
ensure(files.play_logs, []);
ensure(files.custom_regions, []);
ensure(files.place_resolve_cache, []);
ensure(files.heli_speed_profiles, {});

const assignments = load(files.assignments, []);
let changed = false;
for (const a of builtInAssignments) {
  if (!assignments.find(x => x.built_in_key === a.key)) {
    assignments.push({
      id: nextId(assignments),
      built_in_key: a.key,
      name: a.name,
      mode: "mixed",
      region: a.region,
      difficulty: a.difficulty,
      payload: a.payload,
      is_public: 1,
      created_by_user_id: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    });
    changed = true;
  }
}
if (changed) save(files.assignments, assignments);

export const db = {
  loadUsers: () => load(files.users, []),
  saveUsers: users => save(files.users, users),
  loadAssignments: () => load(files.assignments, []),
  saveAssignments: rows => save(files.assignments, rows),
  loadHighscores: () => load(files.highscores, []),
  saveHighscores: rows => save(files.highscores, rows),
  loadMissLogs: () => load(files.miss_logs, []),
  saveMissLogs: rows => save(files.miss_logs, rows),
  loadPlayLogs: () => load(files.play_logs, []),
  savePlayLogs: rows => save(files.play_logs, rows),
  loadCustomRegions: () => load(files.custom_regions, []),
  saveCustomRegions: rows => save(files.custom_regions, rows),
  loadPlaceResolveCache: () => load(files.place_resolve_cache, []),
  savePlaceResolveCache: rows => save(files.place_resolve_cache, rows),
  loadHeliSpeedProfiles: () => load(files.heli_speed_profiles, {}),
  saveHeliSpeedProfiles: rows => save(files.heli_speed_profiles, rows),
  nextId
};