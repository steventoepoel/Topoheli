from pathlib import Path
p = Path('/mnt/data/work/v132/client/index.html')
html = p.read_text()
html = html.replace('<title>TopoVlucht Deluxe</title>', '<title>TopoVlucht</title>')
html = html.replace('Vlieg supervloeiend naar de juiste plek en zie kaarten pas oplichten als je echt boven het goede land hangt.', 'Vlieg supervloeiend naar de juiste plek.')
html = html.replace('<div class="startHeroBadge">Nieuw startscherm</div>\n            <h2>Kies een opdracht en stijg meteen op</h2>\n            <p class="muted">Snellere reactie op je toetsen, natuurlijke inertia en strakkere kaartweergave voor Nederland, Europa, Afrika en de wereld.</p>', '<h2>Kies een opdracht en stijg meteen op</h2>')
html = html.replace('<div class="row">\n            <button id="modeHeliBtn" class="toggle active" type="button">TopoHeli</button>\n            <button id="modeNamingBtn" class="toggle" type="button">Namen noemen</button>\n            <button id="practiceBtn" class="soft" type="button">Oefenmodus</button>\n          </div>', '<div class="row controlsRow">\n            <div class="row controlsLeft">\n              <button id="modeHeliBtn" class="toggle active" type="button">TopoHeli</button>\n              <button id="modeNamingBtn" class="toggle" type="button">Namen noemen</button>\n              <button id="practiceBtn" class="soft" type="button">Oefenmodus</button>\n            </div>\n            <button id="startInlineBtn" class="startInlineBtn" type="button">▶ Start</button>\n          </div>')
html = html.replace('      <aside class="card sidebar">', '      <aside class="card sidebar">')
insert = '''\n\n    <section id="summaryScreen" class="card summaryScreen hidden">\n      <h2>Samenvatting</h2>\n      <div id="summaryStats" class="summaryStats"></div>\n      <div id="summaryHighscore" class="summaryHighscore muted"></div>\n      <div id="summaryNameWrap" class="field hidden">\n        <label for="summaryNameInput">Naam voor highscore</label>\n        <input id="summaryNameInput" placeholder="Vul je naam in" maxlength="40" />\n      </div>\n      <div class="actions">\n        <button id="summarySaveBtn" class="hidden">Highscore opslaan</button>\n        <button id="summaryMenuBtn" class="soft">Terug naar menu</button>\n      </div>\n    </section>\n'''
html = html.replace('    <section id="teacherPanel" class="card hidden teacherPanel">', insert + '\n    <section id="teacherPanel" class="card hidden teacherPanel">')
p.write_text(html)

p = Path('/mnt/data/work/v132/client/styles.css')
css = p.read_text()
css = css.replace('.topbar,.actions,.layout,.row,.gameTop,.hud,.twoCol{display:flex;gap:14px}', '.topbar,.actions,.layout,.row,.gameTop,.hud,.twoCol{display:flex;gap:14px}')
css += '''\n\n.controlsRow{justify-content:space-between;align-items:center;flex-wrap:wrap}\n.controlsLeft{display:flex;gap:14px;flex-wrap:wrap}\n.startInlineBtn{margin-left:auto;background:#2f7be5}\n.summaryScreen{margin-top:14px;max-width:760px}\n.summaryStats{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;margin:14px 0 10px}\n.summaryStat{padding:16px;border-radius:18px;background:#fff;border:1px solid var(--line)}\n.summaryStat span{display:block;color:var(--muted);font-weight:700;margin-bottom:6px}\n.summaryStat strong{font-size:2rem}\n.summaryHighscore{font-weight:700;margin:4px 0 10px}\n'''
p.write_text(css)
