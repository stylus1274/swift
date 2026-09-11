"use client";

import { FormEvent, useState } from "react";
import SiteHeader from "../../components/SiteHeader";

const paintingServices = [
  {
    number: "01",
    title: "Interior Commercial Painting",
    copy: "Refresh offices, retail spaces, common areas and occupied properties with a clear plan for access, protection and daily cleanup.",
  },
  {
    number: "02",
    title: "Exterior Painting & Coatings",
    copy: "Protect and update stucco, concrete, masonry, trim and other commercial surfaces exposed to Florida weather.",
  },
  {
    number: "03",
    title: "Multi-Unit & Managed Properties",
    copy: "Coordinate repeatable finishes across common areas, tenant spaces and exterior elevations under one project schedule.",
  },
  {
    number: "04",
    title: "Repaints & Maintenance",
    copy: "Address worn finishes, property turnover and planned repainting without waiting for appearance issues to become larger problems.",
  },
];

const paintingFaqs = [
  {
    question: "Can Swift Paint Around Our Business Hours?",
    answer: "Scheduling depends on the property and scope, but Swift can discuss phased work, off-hour access and practical sequencing to reduce disruption for employees, tenants and customers.",
  },
  {
    question: "Do You Provide Written Commercial Painting Proposals?",
    answer: "Yes. The proposal documents the planned surfaces, preparation and included work so owners and stakeholders can review the scope before scheduling begins.",
  },
  {
    question: "What Types of Commercial Properties Do You Paint?",
    answer: "Swift works with offices, retail properties, restaurants, medical and professional spaces, multi-tenant buildings and other commercial properties throughout the local service area.",
  },
  {
    question: "How Do You Prepare Commercial Surfaces?",
    answer: "Preparation is matched to the existing surface and coating condition. The scope may include cleaning, scraping, patching, caulking, priming and protecting adjacent areas before finish coats are applied.",
  },
  {
    question: "What Areas Do You Serve?",
    answer: "Swift serves commercial properties throughout Hernando, Citrus and Pasco Counties, including Spring Hill, Brooksville and surrounding communities.",
  },
];

export default function CommercialPaintingPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [projectType, setProjectType] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [projectZip, setProjectZip] = useState("");
  const [timing, setTiming] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function continueEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    document.getElementById("commercial-painting-estimate")?.scrollIntoView({ behavior: "smooth" });
    window.setTimeout(() => document.getElementById("commercial-painting-name")?.focus(), 550);
  }

  function submitEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Commercial Painting",
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Swift Construction & Painting, LLC",
      telephone: "+1-352-701-7458",
    },
    areaServed: ["Hernando County", "Citrus County", "Pasco County"],
    description: "Commercial interior painting, exterior painting and property repainting services for Florida businesses and property managers.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: paintingFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main className="remodel-page commercial-page commercial-painting-page">
      <SiteHeader active="services" contactHref="#commercial-painting-estimate" />

      <section className="remodel-hero commercial-painting-hero">
        <div className="remodel-hero-copy">
          <p className="eyebrow">COMMERCIAL PAINTING • FLORIDA NATURE COAST</p>
          <h1>Commercial Painting That Works Around Your Business.</h1>
          <p>Interior and exterior painting with careful preparation, durable finishes and a project schedule built around the people using your property.</p>
          <div className="remodel-hero-actions">
            <a className="button remodel-primary" href="#commercial-painting-quick-project">Request a Painting Estimate</a>
            <a className="remodel-phone" href="tel:3527017458"><small>OR CALL SWIFT</small>(352) 701-7458</a>
          </div>
          <div className="remodel-hero-proof">
            <span>Licensed &amp; insured • CBC1260893</span>
            <span>Written, itemized proposals</span>
            <span>No deposit required</span>
          </div>
        </div>
        <div className="remodel-hero-visual">
          <img className="remodel-hero-main commercial-painting-hero-image" src="/assets/commercial-painting-hero.png" alt="Commercial painter coating a Florida office building from a lift" />
        </div>
      </section>

      <form className="remodel-quick-form commercial-painting-quick-form" onSubmit={continueEstimate}>
        <div className="remodel-quick-heading">
          <p className="eyebrow">START YOUR ESTIMATE</p>
          <h2>What Needs to Be Painted?</h2>
        </div>
        <label htmlFor="commercial-painting-quick-project">Painting Scope<select id="commercial-painting-quick-project" value={projectType} onChange={(event) => setProjectType(event.target.value)} required><option value="" disabled>Select scope</option><option>Interior painting</option><option>Exterior painting</option><option>Interior and exterior</option><option>Maintenance repaint</option><option>Other painting project</option></select></label>
        <label htmlFor="commercial-painting-quick-property">Property Type<select id="commercial-painting-quick-property" value={propertyType} onChange={(event) => setPropertyType(event.target.value)} required><option value="" disabled>Select property</option><option>Office</option><option>Retail</option><option>Restaurant or hospitality</option><option>Medical or professional</option><option>Multi-tenant property</option><option>Other</option></select></label>
        <label htmlFor="commercial-painting-quick-zip">Project ZIP<input id="commercial-painting-quick-zip" inputMode="numeric" placeholder="34609" value={projectZip} onChange={(event) => setProjectZip(event.target.value)} required /></label>
        <label htmlFor="commercial-painting-quick-timing">Ideal Timing<select id="commercial-painting-quick-timing" value={timing} onChange={(event) => setTiming(event.target.value)} required><option value="" disabled>Select timing</option><option>As soon as possible</option><option>Within 1 to 3 months</option><option>Within 3 to 6 months</option><option>Planning ahead</option></select></label>
        <button type="submit">Continue My Estimate <span aria-hidden="true">→</span></button>
      </form>

      <section className="remodel-services" id="commercial-painting-services">
        <div className="remodel-section-heading">
          <p className="eyebrow">COMMERCIAL PAINTING SERVICES</p>
          <h2>Professional Finishes for Every Part of Your Property.</h2>
        </div>
        <div className="remodel-service-grid">
          {paintingServices.map((service) => (
            <article key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <a href="#commercial-painting-estimate">Discuss Your Property <b>→</b></a>
            </article>
          ))}
        </div>
      </section>

      <section className="commercial-coordination commercial-painting-coordination">
        <div className="commercial-coordination-copy">
          <p className="eyebrow">PLANNED AROUND YOUR OPERATION</p>
          <h2>A Better Finish With Less Disruption to Your Property.</h2>
          <p>A commercial repaint affects more than walls. Access, customers, tenants, equipment and operating hours all shape the project plan. Swift accounts for those realities before work begins.</p>
          <a className="button remodel-primary" href="#commercial-painting-estimate">Plan a Property Walkthrough</a>
        </div>
        <div className="commercial-coordination-list">
          <article><span>01</span><div><h3>Careful Preparation</h3><p>Surface repairs, masking and protection are defined around the materials and spaces being painted.</p></div></article>
          <article><span>02</span><div><h3>Practical Scheduling</h3><p>Work areas and project phases are planned around access, operating hours and property priorities.</p></div></article>
          <article><span>03</span><div><h3>Consistent Results</h3><p>One scope keeps preparation, coating systems, finish standards and communication connected.</p></div></article>
        </div>
      </section>

      <section className="commercial-properties commercial-painting-properties">
        <div className="commercial-properties-heading">
          <p className="eyebrow">PROPERTIES WE PAINT</p>
          <h2>Commercial Painting for the Spaces People See and Use Every Day.</h2>
          <p>The right coating plan should reflect the property, traffic, exposure and expectations for the finished space.</p>
        </div>
        <div className="commercial-property-grid">
          <article><span>01</span><h3>Offices &amp; Professional Spaces</h3><p>Clean, professional interior and exterior finishes for offices, medical spaces and client-facing environments.</p></article>
          <article><span>02</span><h3>Retail &amp; Hospitality Properties</h3><p>Durable, appearance-focused painting for stores, restaurants and spaces where presentation affects the customer experience.</p></article>
          <article><span>03</span><h3>Managed &amp; Multi-Tenant Properties</h3><p>Coordinated repainting for common areas, turnover needs, building exteriors and planned property maintenance.</p></article>
        </div>
      </section>

      <section className="remodel-process" id="commercial-painting-process">
        <div className="remodel-process-heading">
          <p className="eyebrow">HOW IT WORKS</p>
          <h2>A Commercial Painting Plan With Clear Next Steps.</h2>
        </div>
        <div className="remodel-process-grid">
          <article><span>01</span><h3>Walk the Property</h3><p>We review surfaces, access, operating needs and the result you need the painting project to achieve.</p></article>
          <article><span>02</span><h3>Define the Scope</h3><p>You receive a written proposal outlining preparation, planned surfaces and included work.</p></article>
          <article><span>03</span><h3>Prepare &amp; Paint</h3><p>Swift protects work areas, completes the agreed preparation and applies the specified finish system.</p></article>
          <article><span>04</span><h3>Complete the Walkthrough</h3><p>We review the finished work together and address final details before project closeout.</p></article>
        </div>
      </section>

      <section className="commercial-painting-proof-cta">
        <div>
          <p className="eyebrow">ONE CONTRACTOR TO CALL</p>
          <h2>Painting Can Be Part of a Larger Property Improvement Plan.</h2>
          <p>When a project also involves repairs, carpentry, flooring or renovation work, Swift can coordinate the connected scope under one licensed building contractor.</p>
        </div>
        <div className="commercial-painting-proof-actions">
          <a className="button remodel-primary" href="#commercial-painting-estimate">Request a Commercial Estimate</a>
          <a href="/commercial-services">Explore Commercial Services <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="remodel-faq commercial-faq">
        <div className="remodel-faq-heading">
          <p className="eyebrow">COMMERCIAL PAINTING QUESTIONS</p>
          <h2>What Property Owners Ask Before Painting Begins.</h2>
          <p>Clear answers make it easier to compare the scope, schedule and contractor responsible for your property.</p>
        </div>
        <div className="remodel-faq-list">
          {paintingFaqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return <article className={isOpen ? "open" : ""} key={faq.question}><button type="button" aria-expanded={isOpen} onClick={() => setOpenFaq(isOpen ? -1 : index)}><span>{faq.question}</span><b aria-hidden="true">{isOpen ? "×" : "+"}</b></button><div hidden={!isOpen}><p>{faq.answer}</p></div></article>;
          })}
        </div>
      </section>

      <section className="remodel-estimate" id="commercial-painting-estimate">
        <div className="remodel-estimate-copy">
          <p className="eyebrow">FREE COMMERCIAL PAINTING ESTIMATE</p>
          <h2>Tell Us About the Property and Painting Scope.</h2>
          <p>Share what needs to be painted, how the property is used and your preferred schedule. Swift serves commercial clients throughout Hernando, Citrus and Pasco Counties.</p>
          <div className="remodel-estimate-points"><span>Free initial project walkthrough</span><span>Written, itemized proposal</span><span>No deposit required</span></div>
          <p className="remodel-estimate-phone">Prefer to call?<a href="tel:3527017458">(352) 701-7458</a></p>
        </div>
        <form className="remodel-estimate-form" onSubmit={submitEstimate}>
          <div className="remodel-form-row"><label>Name<input id="commercial-painting-name" name="name" placeholder="Your name" required /></label><label>Phone<input name="phone" placeholder="(000) 000-0000" type="tel" required /></label></div>
          <div className="remodel-form-row"><label>Business Email<input name="email" placeholder="you@company.com" type="email" /></label><label>Project City or ZIP<input name="zip" placeholder="Spring Hill" value={projectZip} onChange={(event) => setProjectZip(event.target.value)} required /></label></div>
          <div className="remodel-form-row"><label>Painting Scope<select value={projectType} onChange={(event) => setProjectType(event.target.value)} required><option value="" disabled>Select scope</option><option>Interior painting</option><option>Exterior painting</option><option>Interior and exterior</option><option>Maintenance repaint</option><option>Other painting project</option></select></label><label>Property Type<select value={propertyType} onChange={(event) => setPropertyType(event.target.value)} required><option value="" disabled>Select property</option><option>Office</option><option>Retail</option><option>Restaurant or hospitality</option><option>Medical or professional</option><option>Multi-tenant property</option><option>Other</option></select></label></div>
          <label>Ideal Timing<select value={timing} onChange={(event) => setTiming(event.target.value)} required><option value="" disabled>Select timing</option><option>As soon as possible</option><option>Within 1 to 3 months</option><option>Within 3 to 6 months</option><option>Planning ahead</option></select></label>
          <label>Project Details<textarea name="details" placeholder="Tell us what needs to be painted, whether the property is occupied and any access or scheduling requirements." /></label>
          <button className="button remodel-primary" type="submit">{submitted ? "Thank You. We’ll Be in Touch." : "Request My Painting Estimate"}</button>
          <small>Your information is only used to respond to your project request.</small>
        </form>
      </section>

      <footer className="site-footer remodel-footer">
        <div className="footer-main">
          <div className="footer-brand"><img src="/assets/swift-logo.png" alt="Swift Construction and Painting, LLC" /><p>Licensed and insured building contractor<br />serving Hernando, Citrus and Pasco Counties<br />since 2003.</p></div>
          <div className="footer-column"><h3>Site</h3><a href="/">Home</a><a href="/services">Services</a><a href="/gallery">Portfolio</a><a href="/about">About</a><a href="#commercial-painting-estimate">Contact</a></div>
          <div className="footer-column"><h3>Commercial Painting</h3><a href="#commercial-painting-services">Painting Services</a><a href="#commercial-painting-process">Our Process</a><a href="/commercial-services">Commercial Services</a><a href="#commercial-painting-estimate">Request an Estimate</a></div>
          <div className="footer-contact"><h3>Contact</h3><a className="footer-phone" href="tel:3527017458">(352) 701-7458</a><a href="mailto:swiftconstruction.william@gmail.com">swiftconstruction.william@gmail.com</a><address className="footer-address">11105 Lomita Wren Rd<br />Weeki Wachee, FL 34614</address></div>
        </div>
        <div className="footer-bottom"><span>© 2026 SWIFT CONSTRUCTION AND PAINTING, LLC</span><span>“WHEN QUALITY MATTERS”</span></div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
