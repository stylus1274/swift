from pathlib import Path
import re

pattern = re.compile(r'<footer className="site-footer[^\"]*">.*?</footer>', re.S)
changed = []

for path in Path('app').rglob('*.tsx'):
    text = path.read_text(encoding='utf-8')
    if '<footer className="site-footer' not in text:
        continue

    updated, count = pattern.subn('<SiteFooter />', text)
    if not count:
        continue

    if 'from "@/components/SiteFooter"' not in updated:
        lines = updated.splitlines()
        insert_at = 1 if lines and lines[0].strip() == '"use client";' else 0
        while insert_at < len(lines) and (lines[insert_at].startswith('import ') or not lines[insert_at].strip()):
            insert_at += 1
        lines.insert(insert_at, 'import SiteFooter from "@/components/SiteFooter";')
        updated = '\n'.join(lines) + ('\n' if text.endswith('\n') else '')

    path.write_text(updated, encoding='utf-8')
    changed.append((str(path), count))

if not changed:
    raise SystemExit('No footer blocks found to standardize')

print('Standardized footer in:')
for path, count in changed:
    print(f'- {path} ({count})')
