from pathlib import Path

page = Path("app/page.tsx")
text = page.read_text(encoding="utf-8")
old = '''        <div className="footer-bottom">
          <span>© 2026 SWIFT CONSTRUCTION AND PAINTING, LLC</span>
          <span>"WHEN QUALITY MATTERS"</span>
        </div>'''
new = '''        <div className="footer-bottom">
          <span>© 2026 SWIFT CONSTRUCTION AND PAINTING, LLC</span>
          <a className="site-credit" href="http://velvetinkmedia.com/">Site by Velvet Ink Media</a>
          <span>"WHEN QUALITY MATTERS"</span>
        </div>'''
if old not in text:
    raise SystemExit("Homepage footer-bottom block not found")
page.write_text(text.replace(old, new, 1), encoding="utf-8")

css = Path("app/globals.css")
css_text = css.read_text(encoding="utf-8")
old_main = '.footer-main { min-height: 210px; display: grid; grid-template-columns: 32% 22% 22% 24%; }'
new_main = '.footer-main { min-height: 210px; padding-bottom: 28px; display: grid; grid-template-columns: 32% 22% 22% 24%; }'
if old_main not in css_text:
    raise SystemExit("Footer main CSS block not found")
css_text = css_text.replace(old_main, new_main, 1)
marker = '.footer-bottom { height: 63px; display: flex; align-items: center; justify-content: space-between; border-top: 1px solid #deded8; color: #9a9a92; font-family: "Courier New", monospace; font-size: 11px; letter-spacing: .04em; }'
if marker not in css_text:
    raise SystemExit("Footer bottom CSS block not found")
replacement = marker + '\n.footer-bottom .site-credit { color: #7b817d; text-decoration: none; transition: color .2s ease; }\n.footer-bottom .site-credit:hover { color: var(--blue); }'
css.write_text(css_text.replace(marker, replacement, 1), encoding="utf-8")
