export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <img src="/assets/swift-logo.png" alt="Swift Construction and Painting, LLC" />
          <p>Licensed and insured building contractor<br />serving Spring Hill, Brooksville and communities<br />throughout Hernando, Citrus and Pasco Counties<br />since 2003.</p>
        </div>
        <div className="footer-column">
          <h3>Site</h3>
          <a href="/">Home</a><a href="/services">Services</a><a href="/gallery">Portfolio</a><a href="/about">About</a><a href="/blog">Blog</a><a href="/contact">Contact</a>
        </div>
        <div className="footer-column">
          <h3>Area</h3>
          <span>Spring Hill</span><span>Brooksville</span><span>Weeki Wachee</span><span>Hernando Beach</span><span>Ridge Manor</span><span>Citrus County</span><span>Pasco County</span>
        </div>
        <div className="footer-contact">
          <h3>Contact</h3>
          <a className="footer-phone" href="tel:3527017458">(352) 701-7458</a>
          <address className="footer-address">11105 Lomita Wren Rd<br />Weeki Wachee, FL 34614</address>
          <div className="footer-socials" aria-label="Swift Construction and Painting social media">
            <a href="https://www.facebook.com/people/Swift-Construction-Painting-LLC/100063517870920/" target="_blank" rel="noopener noreferrer" aria-label="Swift Construction and Painting on Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.3-1.6 1.6-1.6h1.7V4.5c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.2H7.3V14h2.8v8h3.4Z" fill="currentColor" /></svg>
            </a>
            <a href="https://www.instagram.com/Swiftconstructionandpainting/" target="_blank" rel="noopener noreferrer" aria-label="Swift Construction and Painting on Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="17.4" cy="6.7" r="1.1" fill="currentColor"/></svg>
            </a>
            <a href="https://x.com/Swift_FL" target="_blank" rel="noopener noreferrer" aria-label="Swift Construction and Painting on X">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.1 4h3.7l3.8 5.1L16.9 4h2l-5.4 6.5L19.4 20h-3.7l-4.2-5.7L6.8 20h-2l5.8-7.1L5.1 4Zm2.8 1.5 8.6 13h1.9l-8.6-13H7.9Z" fill="currentColor" /></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 SWIFT CONSTRUCTION AND PAINTING, LLC</span>
        <a className="site-credit" href="http://velvetinkmedia.com/">Site by Velvet Ink Media</a>
        <span>"WHEN QUALITY MATTERS"</span>
      </div>
      <style>{`
        .footer-socials { margin-top: 14px; display: flex; align-items: center; gap: 12px; }
        .footer-socials a { width: 34px; height: 34px; display: inline-flex; align-items: center; justify-content: center; border: 1px solid #d7ddd9; border-radius: 50%; color: #667069; transition: color .2s ease, border-color .2s ease, background-color .2s ease, transform .2s ease; }
        .footer-socials a:hover { color: #287fc3; border-color: #287fc3; background: #f4f9fd; transform: translateY(-1px); }
        .footer-socials a:focus-visible { outline: 2px solid #287fc3; outline-offset: 3px; }
        .footer-socials svg { width: 18px; height: 18px; display: block; }
      `}</style>
    </footer>
  );
}
