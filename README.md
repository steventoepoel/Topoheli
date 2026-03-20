# De Topo-Heli v1.30.1 — Windows-vriendelijke versie

Deze versie gebruikt **geen better-sqlite3** meer.
De opslag werkt via JSON-bestanden in `server/data/`, zodat `npm install` op Windows veel makkelijker werkt.

## Installatie

1. Open een terminal in `server`
2. Installeer:
```bash
npm install
```
3. Maak `.env` op basis van `.env.example`
4. Maak een docentaccount:
```bash
npm run seed:teacher -- --username DevelTopo --password "$%jaja&!"
```
5. Start:
```bash
npm run dev
```
6. Open:
```text
http://localhost:3000
```

## Data-opslag
De data staat in:
- `server/data/users.json`
- `server/data/assignments.json`
- `server/data/highscores.json`
- `server/data/miss_logs.json`

## Render
Build command:
```bash
cd server && npm install
```

Start command:
```bash
cd server && npm start
```