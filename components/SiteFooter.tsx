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
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 SWIFT CONSTRUCTION AND PAINTING, LLC</span>
        <a className="site-credit" href="http://velvetinkmedia.com/">Site by Velvet Ink Media</a>
        <span>"WHEN QUALITY MATTERS"</span>
      </div>
    </footer>
  );
}
