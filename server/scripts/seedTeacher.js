import dotenv from "dotenv";
dotenv.config();

import bcrypt from "bcryptjs";
import { db } from "../src/db/database.js";

const args = process.argv.slice(2);
const usernameIndex = args.indexOf("--username");
const passwordIndex = args.indexOf("--password");
const username = usernameIndex >= 0 ? args[usernameIndex + 1] : null;
const password = passwordIndex >= 0 ? args[passwordIndex + 1] : null;

if (!username || !password) {
  console.error("Gebruik: npm run seed:teacher -- --username <naam> --password <wachtwoord>");
  process.exit(1);
}

const users = db.loadUsers();
if (users.find(u => u.username === username)) {
  console.error("Gebruiker bestaat al.");
  process.exit(1);
}

users.push({
  id: db.nextId(users),
  username,
  password_hash: bcrypt.hashSync(password, 12),
  role: "teacher",
  created_at: new Date().toISOString()
});
db.saveUsers(users);
console.log(`Docentaccount aangemaakt: ${username}`);