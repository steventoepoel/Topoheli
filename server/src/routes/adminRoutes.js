import express from "express";
import bcrypt from "bcryptjs";
import { db } from "../db/database.js";
import { requireAdmin, requireAuth } from "../middleware/auth.js";

const router = express.Router();



router.get('/settings/heli-speeds', (_req, res) => {
  res.json({ profiles: db.loadHeliSpeedProfiles() || {} });
});

router.get('/admin/settings/heli-speeds', requireAdmin, (_req, res) => {
  res.json({ profiles: db.loadHeliSpeedProfiles() || {} });
});

router.put('/admin/settings/heli-speeds', requireAdmin, (req, res) => {
  const rawProfiles = req.body?.profiles;
  if (!rawProfiles || typeof rawProfiles !== 'object' || Array.isArray(rawProfiles)) {
    return res.status(400).json({ error: 'Ongeldige snelheidsinstellingen.' });
  }
  const cleaned = {};
  for (const [region, value] of Object.entries(rawProfiles)) {
    const name = String(region || '').trim();
    if (!name) continue;
    const num = Number(value);
    if (!Number.isFinite(num) || num < 0.4 || num > 1.6) {
      return res.status(400).json({ error: `Snelheidsfactor voor ${name} moet tussen 0.40 en 1.60 liggen.` });
    }
    cleaned[name] = Number(num.toFixed(2));
  }
  db.saveHeliSpeedProfiles(cleaned);
  res.json({ ok: true, profiles: cleaned });
});

router.get('/admin/regions', requireAuth, (_req, res) => {
  res.json(db.loadCustomRegions().sort((a,b) => a.name.localeCompare(b.name, 'nl')));
});

router.post('/admin/regions', requireAdmin, (req, res) => {
  const name = String(req.body?.name || '').trim();
  if (!name) return res.status(400).json({ error: 'Naam van regio is verplicht.' });
  const rows = db.loadCustomRegions();
  if (rows.find(r => String(r.name).toLowerCase() === name.toLowerCase())) {
    return res.status(400).json({ error: 'Deze regio bestaat al.' });
  }
  const item = { id: db.nextId(rows), name, created_at: new Date().toISOString() };
  rows.push(item);
  db.saveCustomRegions(rows);
  res.status(201).json({ ok: true, id: item.id, name });
});

router.get('/admin/users', requireAdmin, (_req, res) => {
  const rows = db.loadUsers().map(({ password_hash, ...u }) => u).sort((a,b) => a.username.localeCompare(b.username, 'nl'));
  res.json(rows);
});

router.post('/admin/users', requireAdmin, (req, res) => {
  const { username, password, role = 'teacher' } = req.body ?? {};
  if (!username || !password) return res.status(400).json({ error: 'Gebruikersnaam en wachtwoord zijn verplicht.' });
  const users = db.loadUsers();
  if (users.find(u => String(u.username).toLowerCase() === String(username).toLowerCase())) {
    return res.status(400).json({ error: 'Gebruiker bestaat al.' });
  }
  const item = {
    id: db.nextId(users),
    username: String(username).trim(),
    password_hash: bcrypt.hashSync(String(password), 12),
    role: role === 'admin' ? 'admin' : 'teacher',
    created_at: new Date().toISOString()
  };
  users.push(item);
  db.saveUsers(users);
  res.status(201).json({ ok: true, id: item.id });
});

router.delete('/admin/users/:id', requireAdmin, (req, res) => {
  const id = Number(req.params.id);
  const users = db.loadUsers();
  const found = users.find(u => Number(u.id) === id);
  if (!found) return res.status(404).json({ error: 'Gebruiker niet gevonden.' });
  if (found.role !== 'teacher') return res.status(400).json({ error: 'Alleen docenten kunnen hier verwijderd worden.' });
  db.saveUsers(users.filter(u => Number(u.id) !== id));
  res.json({ ok: true });
});

export default router;
