"use client";

import Image from "next/image";
import Link from "next/link";

type SiteHeaderProps = {
  active?: "home" | "services" | "about" | "blog";
  contactHref?: string;
};

const serviceColumns = [
  {
    heading: "Painting & Remodeling",
    items: [
      { title: "Residential Painting", copy: "Interior and exterior finishes for Florida homes.", href: "/residential-painting" },
      { title: "Exterior Painting", copy: "Durable finishes for Florida exteriors.", href: "/exterior-painting" },
      { title: "Interior Painting", copy: "Clean, consistent finishes for every room.", href: "/interior-painting" },
      { title: "Residential Remodeling", copy: "Bathrooms, kitchens and whole-home renovations.", href: "/residential-remodeling" },
      { title: "Flooring", copy: "Flooring and finish work planned room by room.", href: "/flooring" },
    ],
  },
  {
    heading: "Home Improvement",
    items: [
      { title: "Kitchen Remodeling", copy: "Layout, cabinetry and finish work under one plan.", href: "/kitchen-remodeling" },
      { title: "Bathroom Remodeling", copy: "Showers, vanities, tile and finish work.", href: "/bathroom-remodeling" },
      { title: "Home Additions", copy: "Room additions and expanded living space.", href: "/home-additions" },
      { title: "New Home Construction", copy: "Ground-up homes managed from plan to walkthrough.", href: "/new-home-construction" },
      { title: "Windows & Doors", copy: "Replacement and installation by one contractor.", href: "/windows-doors" },
    ],
  },
  {
    heading: "Commercial & Property",
    items: [
      { title: "Multi-Family Construction", copy: "Multi-unit projects managed from plan to turnover.", href: "/multi-family-construction" },
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
      <Link className="brand" href="/" aria-label="Swift Construction and Painting home">
        <Image src="/assets/swift-logo.png" alt="Swift Construction and Painting, LLC" width={360} height={120} priority />
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        <Link className={active === "home" ? "active" : ""} href="/">Home</Link>
        <details
          className={`services-mega${active === "services" ? " active" : ""}`}
          onMouseEnter={(event) => {
            event.currentTarget.open = true;
          }}
          onMouseLeave={(event) => {
            event.currentTarget.open = false;
          }}
          onFocus={(event) => {
            event.currentTarget.open = true;
          }}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              event.currentTarget.open = false;
            }
          }}
        >
          <summary>Services <span aria-hidden="true">⌄</span></summary>
          <div className="mega-panel">
            {serviceColumns.map((column) => (
              <section className="mega-column" key={column.heading}>
                <p>{column.heading}</p>
                {column.items.map((item) => (
                  <Link href={item.href} key={item.title}>
                    <span><strong>{item.title}</strong><small>{item.copy}</small></span>
                    <b aria-hidden="true">→</b>
                  </Link>
                ))}
              </section>
            ))}
            <Link className="mega-all-services" href="/#services">View All Services <span aria-hidden="true">→</span></Link>
          </div>
        </details>
        <Link href="/gallery">Portfolio</Link>
        <Link className={active === "about" ? "active" : ""} href="/about">About</Link>
        <Link className={active === "blog" ? "active" : ""} href="/blog">Blog</Link>
        <Link href={contactHref}>Contact</Link>
      </nav>
      <a className="header-call" href="tel:3527017458"><span>CALL</span>(352) 701-7458</a>
      <details className="mobile-menu">
        <summary aria-label="Open navigation">Menu</summary>
        <nav>
          <Link href="/">Home</Link>
          <details className="mobile-services">
            <summary>Services</summary>
            <div>
              {serviceColumns.flatMap((column) => column.items).map((item) => <Link href={item.href} key={item.title}>{item.title}</Link>)}
            </div>
          </details>
          <Link href="/gallery">Portfolio</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href={contactHref}>Contact</Link>
        </nav>
      </details>
    </header>
  );
}
