from pathlib import Path

old = '<div><a href="/gallery">Project Gallery</a><a href="/contact">Free Estimate</a></div>'
new = '<address className="footer-address">11105 Lomita Wren Rd<br />Weeki Wachee, FL 34614</address>'

changed = []
for path in Path('app').rglob('*.tsx'):
    text = path.read_text(encoding='utf-8')
    if old in text:
        path.write_text(text.replace(old, new), encoding='utf-8')
        changed.append(str(path))

if not changed:
    raise SystemExit('No footer contact link blocks found')

css = Path('app/globals.css')
text = css.read_text(encoding='utf-8')
marker = '.footer-contact > a { font-size: 14px; }'
addition = marker + '\n.footer-address { margin: 11px 0 0; color: #44544d; font-style: normal; font-size: 14px; line-height: 1.6; }'
if '.footer-address {' not in text:
    if marker not in text:
        raise SystemExit('Footer contact CSS marker not found')
    css.write_text(text.replace(marker, addition, 1), encoding='utf-8')

print('Updated footer address in:')
for p in changed:
    print('-', p)
