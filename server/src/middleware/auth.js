import jwt from "jsonwebtoken";

export function requireAuth(req, res, next) {
  const token = req.cookies?.topoheli_token;
  if (!token) return res.status(401).json({ error: "Niet ingelogd." });
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ error: "Ongeldige sessie." });
  }
}
export function signAuthToken(user) {
  return jwt.sign({ sub: user.id, username: user.username, role: user.role }, process.env.JWT_SECRET, { expiresIn: "7d" });
}
export function authCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax",
    secure: String(process.env.COOKIE_SECURE).toLowerCase() === "true",
    path: "/",
    maxAge: 7 * 24 * 60 * 60 * 1000
  };
}
export function requireAdmin(req, res, next) {
  requireAuth(req, res, () => {
    if (req.user?.role !== "admin") return res.status(403).json({ error: "Alleen voor beheerder." });
    next();
  });
}
