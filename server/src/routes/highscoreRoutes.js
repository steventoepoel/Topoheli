import express from "express";
import { db } from "../db/database.js";
import { requireAuth } from "../middleware/auth.js";

const router = express.Router();

function filterPeriod(rows, period) {
  if (period === "all") return rows;
  const now = Date.now();
  const span = period === "day" ? 24 * 60 * 60 * 1000 : 7 * 24 * 60 * 60 * 1000;
  return rows.filter(r => now - new Date(r.created_at).getTime() <= span);
}

function assignmentMap() {
  return new Map(db.loadAssignments().map(a => [Number(a.id), a]));
}

router.get("/highscores", (req, res) => {
  const assignmentId = Number(req.query.assignmentId);
  const gameMode = String(req.query.gameMode || "heli");
  const period = String(req.query.period || "all");
  if (!assignmentId) return res.status(400).json({ error: "assignmentId is verplicht." });

  const rows = filterPeriod(
    db.loadHighscores().filter(x => Number(x.assignment_id) === assignmentId && x.game_mode === gameMode),
    period
  ).sort((a, b) => (b.score - a.score) || (new Date(a.created_at) - new Date(b.created_at))).slice(0, 3);

  res.json(rows);
});

router.post("/highscores", (req, res) => {
  const { assignmentId, playerName, score, gameMode } = req.body ?? {};
  if (!assignmentId || !playerName || Number.isNaN(Number(score)) || !gameMode) {
    return res.status(400).json({ error: "assignmentId, playerName, score en gameMode zijn verplicht." });
  }
  const rows = db.loadHighscores();
  const item = {
    id: db.nextId(rows),
    assignment_id: Number(assignmentId),
    player_name: String(playerName).slice(0, 40),
    score: Number(score),
    game_mode: String(gameMode),
    created_at: new Date().toISOString()
  };
  rows.push(item);
  db.saveHighscores(rows);
  res.status(201).json({ ok: true, id: item.id });
});



router.post("/play-log", (req, res) => {
  const { assignmentId, gameMode, practice = false } = req.body ?? {};
  if (!assignmentId || !gameMode) {
    return res.status(400).json({ error: "assignmentId en gameMode zijn verplicht." });
  }
  const rows = db.loadPlayLogs();
  rows.push({
    id: db.nextId(rows),
    assignment_id: Number(assignmentId),
    game_mode: String(gameMode),
    practice: Number(practice) ? 1 : 0,
    created_at: new Date().toISOString()
  });
  db.savePlayLogs(rows);
  res.status(201).json({ ok: true });
});

router.delete("/admin/highscores/:id", requireAuth, (req, res) => {
  const id = Number(req.params.id);
  const rows = db.loadHighscores();
  const found = rows.find(x => Number(x.id) === id);
  if (!found) return res.status(404).json({ error: "Highscore niet gevonden." });
  db.saveHighscores(rows.filter(x => Number(x.id) !== id));
  res.json({ ok: true });
});

router.post("/miss-log", (req, res) => {
  const { assignmentId, placeName, gameMode } = req.body ?? {};
  if (!assignmentId || !placeName || !gameMode) {
    return res.status(400).json({ error: "assignmentId, placeName en gameMode zijn verplicht." });
  }
  const rows = db.loadMissLogs();
  rows.push({
    id: db.nextId(rows),
    assignment_id: Number(assignmentId),
    place_name: String(placeName),
    game_mode: String(gameMode),
    created_at: new Date().toISOString()
  });
  db.saveMissLogs(rows);
  res.status(201).json({ ok: true });
});

router.get("/admin/stats/highscores", requireAuth, (_req, res) => {
  const amap = assignmentMap();
  const grouped = new Map();
  for (const row of db.loadHighscores()) {
    const aid = Number(row.assignment_id);
    if (!grouped.has(aid)) grouped.set(aid, []);
    grouped.get(aid).push(row);
  }
  const result = [...grouped.entries()].map(([assignmentId, rows]) => ({
    assignmentId,
    assignmentName: amap.get(assignmentId)?.name || `Opdracht ${assignmentId}`,
    rows: rows.sort((a,b) => (b.score - a.score) || (new Date(a.created_at) - new Date(b.created_at))).slice(0, 10)
  })).sort((a,b) => a.assignmentName.localeCompare(b.assignmentName, 'nl'));
  res.json(result);
});

router.get("/admin/stats/missed", requireAuth, (_req, res) => {
  const amap = assignmentMap();
  const grouped = new Map();
  for (const row of db.loadMissLogs()) {
    const aid = Number(row.assignment_id);
    const byAssignment = grouped.get(aid) || new Map();
    const key = `${row.place_name}__${row.game_mode}`;
    byAssignment.set(key, {
      place_name: row.place_name,
      game_mode: row.game_mode,
      misses: (byAssignment.get(key)?.misses || 0) + 1
    });
    grouped.set(aid, byAssignment);
  }
  const result = [...grouped.entries()].map(([assignmentId, rowsMap]) => ({
    assignmentId,
    assignmentName: amap.get(assignmentId)?.name || `Opdracht ${assignmentId}`,
    rows: [...rowsMap.values()].sort((a,b) => (b.misses - a.misses) || a.place_name.localeCompare(b.place_name, 'nl')).slice(0, 10)
  })).sort((a,b) => a.assignmentName.localeCompare(b.assignmentName, 'nl'));
  res.json(result);
});

export default router;
