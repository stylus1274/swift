from pathlib import Path

path = Path('app/globals.css')
text = path.read_text(encoding='utf-8')
old = '.footer-column h3, .footer-contact h3 { margin: 0 0 10px; color: #93938b; font-family: "Courier New", monospace; font-size: 10px; letter-spacing: .16em; }'
new = '.footer-column h3, .footer-contact h3 { margin: 0 0 10px; color: #667069; font-family: "Courier New", monospace; font-size: 11px; font-weight: 700; letter-spacing: .12em; }'
if old not in text:
    raise SystemExit('Footer heading CSS block not found')
path.write_text(text.replace(old, new, 1), encoding='utf-8')
