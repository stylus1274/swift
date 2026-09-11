from pathlib import Path

old = '<a href="mailto:swiftconstruction.william@gmail.com">swiftconstruction.william@gmail.com</a>\n'
changed = []

for path in Path('app').rglob('*.tsx'):
    text = path.read_text(encoding='utf-8')
    if old in text:
        path.write_text(text.replace(old, ''), encoding='utf-8')
        changed.append(str(path))

if not changed:
    raise SystemExit('No footer email links found')

print('Removed footer email from:')
for p in changed:
    print('-', p)
