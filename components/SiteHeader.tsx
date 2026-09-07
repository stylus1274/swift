type SiteHeaderProps = {
  active?: "home" | "services" | "about" | "blog";
  contactHref?: string;
};

const serviceColumns = [
  {
    heading: "Residential Services",
    items: [
      { title: "Residential Painting", copy: "Interior and exterior finishes built for Florida homes.", href: "/residential-painting" },
      { title: "Exterior Painting", copy: "Careful preparation and durable finishes for Florida exteriors.", href: "/exterior-painting" },
      { title: "Interior Painting", copy: "Clean preparation and consistent finishes for every room.", href: "/interior-painting" },
      { title: "Residential Remodeling", copy: "Bathrooms, kitchens and full-home renovations.", href: "/residential-remodeling" },
      { title: "Home Additions", copy: "Room additions and expanded living space built to belong.", href: "/home-additions" },
      { title: "Kitchen Remodeling", copy: "Layout, cabinetry and finish work managed under one plan.", href: "/kitchen-remodeling" },
      { title: "Bathroom Remodeling", copy: "Showers, vanities, tile and finish work coordinated together.", href: "/bathroom-remodeling" },
      { title: "New Home Construction", copy: "Ground-up homes managed from plan to walkthrough.", href: "/new-home-construction" },
      { title: "Windows & Doors", copy: "Replacement and installation coordinated by one contractor.", href: "/windows-doors" },
      { title: "Flooring", copy: "Durable flooring and finish work planned room by room.", href: "/flooring" },
    ],
  },
  {
    heading: "Commercial & Property",
    items: [
      { title: "Multi-Family Construction", copy: "Multi-unit residential projects managed from plan to turnover.", href: "/multi-family-construction" },
      { title: "Commercial Construction", copy: "Buildouts, renovations and property improvements.", href: "/commercial-services" },
      { title: "Commercial Painting", copy: "Durable coatings scheduled around your operation.", href: "/commercial-painting" },
      { title: "Pressure Washing", copy: "Exterior cleaning for homes and commercial properties.", href: "/pressure-washing" },
      { title: "Facility Services", copy: "Ongoing improvements, repairs and maintenance support.", href: "/commercial-services" },
    ],
  },
];

export default function SiteHeader({ active, contactHref = "/contact" }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Swift Construction and Painting home">
        <img src="/assets/swift-logo.png" alt="Swift Construction and Painting, LLC" />
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        <a className={active === "home" ? "active" : ""} href="/">Home</a>
        <details className={`services-mega${active === "services" ? " active" : ""}`}>
          <summary>Services <span aria-hidden="true">⌄</span></summary>
          <div className="mega-panel">
            {serviceColumns.map((column) => (
              <section className="mega-column" key={column.heading}>
                <p>{column.heading}</p>
                {column.items.map((item) => (
                  <a href={item.href} key={item.title}>
                    <span><strong>{item.title}</strong><small>{item.copy}</small></span>
                    <b aria-hidden="true">→</b>
                  </a>
                ))}
              </section>
            ))}
            <a className="mega-all-services" href="/#services">View All Services <span aria-hidden="true">→</span></a>
          </div>
        </details>
        <a href="/gallery">Portfolio</a>
        <a className={active === "about" ? "active" : ""} href="/about">About</a>
        <a className={active === "blog" ? "active" : ""} href="/blog">Blog</a>
        <a href={contactHref}>Contact</a>
      </nav>
      <a className="header-call" href="tel:3527017458"><span>CALL</span>(352) 701-7458</a>
      <details className="mobile-menu">
        <summary aria-label="Open navigation">Menu</summary>
        <nav>
          <a href="/">Home</a>
          <details className="mobile-services">
            <summary>Services</summary>
            <div>
              {serviceColumns.flatMap((column) => column.items).map((item) => <a href={item.href} key={item.title}>{item.title}</a>)}
            </div>
          </details>
          <a href="/gallery">Portfolio</a>
          <a href="/about">About</a>
          <a href="/blog">Blog</a>
          <a href={contactHref}>Contact</a>
        </nav>
      </details>
    </header>
  );
}
