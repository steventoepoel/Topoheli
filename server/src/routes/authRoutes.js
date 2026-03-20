import express from "express";
import bcrypt from "bcryptjs";
import { db } from "../db/database.js";
import { requireAuth, signAuthToken, authCookieOptions } from "../middleware/auth.js";

const router = express.Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body ?? {};
  if (!username || !password) {
    return res.status(400).json({ error: "Gebruikersnaam en wachtwoord zijn verplicht." });
  }
  const users = db.loadUsers();
  const user = users.find(u => String(u.username).toLowerCase() === String(username).toLowerCase());
  if (!user || !bcrypt.compareSync(password, user.password_hash)) {
    return res.status(401).json({ error: "Ongeldige inloggegevens." });
  }
  res.cookie("topoheli_token", signAuthToken(user), authCookieOptions());
  res.json({ ok: true, user: { id: user.id, username: user.username, role: user.role } });
});

router.post("/logout", (_req, res) => {
  res.clearCookie("topoheli_token", authCookieOptions());
  res.json({ ok: true });
});

router.get("/me", (req, res) => {
  const token = req.cookies?.topoheli_token;
  if (!token) return res.json({ authenticated: false, user: null });
  requireAuth(req, res, () => res.json({ authenticated: true, user: req.user }));
});

export default router;