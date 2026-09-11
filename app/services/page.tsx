import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";

const serviceGroups = [
  {
    title: "Painting",
    intro: "Interior, exterior and commercial painting with careful preparation and durable finishes for Florida properties.",
    links: [
      ["Residential Painting", "/residential-painting"],
      ["Interior Painting", "/interior-painting"],
      ["Exterior Painting", "/exterior-painting"],
      ["Commercial Painting", "/commercial-painting"],
    ],
  },
  {
    title: "Remodeling & Home Improvement",
    intro: "Renovation and improvement work coordinated under one building contractor from planning through final walkthrough.",
    links: [
      ["Residential Remodeling", "/residential-remodeling"],
      ["Kitchen Remodeling", "/kitchen-remodeling"],
      ["Bathroom Remodeling", "/bathroom-remodeling"],
      ["Home Additions", "/home-additions"],
      ["Flooring", "/flooring"],
      ["Windows & Doors", "/windows-doors"],
    ],
  },
  {
    title: "Construction & Commercial",
    intro: "Ground-up construction, multi-family work and commercial improvements managed around the property and project requirements.",
    links: [
      ["New Home Construction", "/new-home-construction"],
      ["Commercial Construction", "/commercial-services"],
      ["Multi-Family Construction", "/multi-family-construction"],
      ["Pressure Washing", "/pressure-washing"],
    ],
  },
];

export default function ServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Services | Swift Construction & Painting",
    url: "https://swiftconstructionandpainting.com/services",
    about: { "@id": "https://swiftconstructionandpainting.com/#business" },
  };

  return (
    <main>
      <SiteHeader active="services" />

      <section style={{ padding: "96px 44px 78px", background: "#f7f4ed" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          <p className="eyebrow">SWIFT SERVICES</p>
          <h1 style={{ maxWidth: 900, margin: "24px 0 24px", fontSize: "clamp(48px, 6vw, 78px)", lineHeight: 1.03 }}>
            One Building Contractor. Every Phase Covered.
          </h1>
          <p style={{ maxWidth: 760, margin: 0, color: "#5f7068", fontSize: 19, lineHeight: 1.7 }}>
            Swift Construction &amp; Painting serves homeowners and property owners across Hernando, Citrus and Pasco Counties with painting, remodeling, new construction and commercial services.
          </p>
        </div>
      </section>

      <section style={{ padding: "88px 44px 110px", background: "#fff" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {serviceGroups.map((group) => (
            <article key={group.title} style={{ border: "1px solid #e1e7e4", padding: "38px 34px", boxShadow: "0 12px 30px rgba(14,43,66,.07)" }}>
              <h2 style={{ margin: "0 0 18px", fontSize: 31, lineHeight: 1.15 }}>{group.title}</h2>
              <p style={{ margin: "0 0 28px", color: "#5f7068", lineHeight: 1.7 }}>{group.intro}</p>
              <div style={{ display: "grid", gap: 0 }}>
                {group.links.map(([label, href]) => (
                  <Link key={href} href={href} style={{ padding: "15px 0", borderTop: "1px solid #e1e7e4", color: "#0c2c46", fontWeight: 700 }}>
                    {label} <span aria-hidden="true" style={{ float: "right", color: "#287fc3" }}>→</span>
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section style={{ padding: "76px 44px", background: "#0c2c46", color: "#fff", textAlign: "center" }}>
        <div style={{ maxWidth: 850, margin: "0 auto" }}>
          <p className="eyebrow" style={{ color: "#85c3e7" }}>START A PROJECT</p>
          <h2 style={{ margin: "22px 0 18px", fontSize: "clamp(38px, 5vw, 58px)", lineHeight: 1.08 }}>Not Sure Which Service Fits?</h2>
          <p style={{ margin: "0 auto 30px", maxWidth: 680, color: "#c6d6df", fontSize: 18, lineHeight: 1.7 }}>
            Tell us what you are planning. We can help define the scope and the right next step for the property.
          </p>
          <Link className="button" href="/contact" style={{ background: "#fff", color: "#0c2c46", borderColor: "#fff" }}>Request a Free Estimate</Link>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </main>
  );
}
