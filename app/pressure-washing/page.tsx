"use client";

import { FormEvent, useState } from "react";
import SiteHeader from "../../components/SiteHeader";

const pressureWashingServices = [
  { number: "01", title: "Driveways & Walkways", copy: "Lift dirt, algae and surface buildup from concrete driveways, sidewalks and entry paths for a cleaner arrival." },
  { number: "02", title: "House Exterior Washing", copy: "Clean stucco, siding, soffits and exterior details with a method selected for the material and condition." },
  { number: "03", title: "Pool Decks & Patios", copy: "Refresh outdoor living surfaces around pools, lanais and patios while protecting nearby finishes and landscaping." },
  { number: "04", title: "Commercial Properties", copy: "Coordinate exterior cleaning for storefronts, offices, multi-family communities and managed properties." },
];

const pressureWashingFaqs = [
  { question: "What Surfaces Can You Pressure Wash?", answer: "Swift can clean concrete driveways, walkways, patios, pool decks and many exterior building surfaces. The walkthrough helps determine the appropriate method for each material and condition." },
  { question: "Is Pressure Washing Safe for Stucco?", answer: "Yes, when the cleaning approach is adjusted to the surface. Stucco and painted finishes often require controlled pressure and appropriate cleaning solutions rather than maximum force." },
  { question: "Do I Need to Be Home During the Cleaning?", answer: "Not always. Access, water availability, gates, pets and any areas needing special attention can be coordinated before the scheduled work begins." },
  { question: "How Often Should a Florida Property Be Cleaned?", answer: "The right schedule depends on shade, moisture, tree cover, traffic and the surface itself. Many properties benefit from periodic cleaning when algae and organic buildup become visible." },
  { question: "What Areas Do You Serve?", answer: "Swift serves properties throughout Hernando, Citrus and Pasco Counties, including Spring Hill, Brooksville, Weeki Wachee, Hernando Beach, Ridge Manor and surrounding communities." },
];

export default function PressureWashingPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [scope, setScope] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [projectZip, setProjectZip] = useState("");
  const [timing, setTiming] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function continueEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    document.getElementById("pressure-washing-estimate")?.scrollIntoView({ behavior: "smooth" });
    window.setTimeout(() => document.getElementById("pressure-washing-name")?.focus(), 550);
  }

  function submitEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  const serviceSchema = {
    "@context": "https://schema.org", "@type": "Service", name: "Pressure Washing",
    provider: { "@type": "HomeAndConstructionBusiness", name: "Swift Construction & Painting, LLC", telephone: "+1-352-701-7458" },
    areaServed: ["Hernando County", "Citrus County", "Pasco County"],
    description: "Pressure washing for residential and commercial properties across Florida's Nature Coast.",
  };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: pressureWashingFaqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };

  return (
    <main className="remodel-page commercial-page commercial-painting-page pressure-washing-page">
      <SiteHeader active="services" contactHref="#pressure-washing-estimate" />

      <section className="remodel-hero pressure-washing-hero">
        <div className="remodel-hero-copy">
          <p className="eyebrow">PRESSURE WASHING • SPRING HILL, FL</p>
          <h1>Pressure Washing That Restores a Cleaner, Better-Kept Property.</h1>
          <p>Controlled exterior cleaning for Florida homes, commercial properties and the outdoor surfaces people notice first.</p>
          <div className="remodel-hero-actions">
            <a className="button remodel-primary" href="#pressure-washing-quick-project">Get a Free Cleaning Estimate</a>
            <a className="remodel-phone" href="tel:3527017458"><small>OR CALL SWIFT</small>(352) 701-7458</a>
          </div>
          <div className="remodel-hero-proof"><span>Licensed &amp; insured • CBC1260893</span><span>Written, itemized proposals</span><span>No deposit required</span></div>
        </div>
        <div className="remodel-hero-visual">
          <img className="remodel-hero-main pressure-washing-hero-image" src="/assets/pressure-washing-hero.png" alt="Professional pressure washing a concrete driveway at a Florida home" />
        </div>
      </section>

      <form className="remodel-quick-form commercial-painting-quick-form" onSubmit={continueEstimate}>
        <div className="remodel-quick-heading"><p className="eyebrow">START YOUR ESTIMATE</p><h2>What Would You Like Cleaned?</h2></div>
        <label htmlFor="pressure-washing-quick-project">Cleaning Scope<select id="pressure-washing-quick-project" value={scope} onChange={(event) => setScope(event.target.value)} required><option value="" disabled>Select an area</option><option>Driveway and walkways</option><option>House exterior</option><option>Pool deck or patio</option><option>Commercial property</option><option>Multiple areas</option></select></label>
        <label htmlFor="pressure-washing-quick-property">Property Type<select id="pressure-washing-quick-property" value={propertyType} onChange={(event) => setPropertyType(event.target.value)} required><option value="" disabled>Select property</option><option>Single-family home</option><option>HOA or multi-family</option><option>Commercial property</option><option>Other property</option></select></label>
        <label htmlFor="pressure-washing-quick-zip">Project ZIP<input id="pressure-washing-quick-zip" inputMode="numeric" placeholder="34609" value={projectZip} onChange={(event) => setProjectZip(event.target.value)} required /></label>
        <label htmlFor="pressure-washing-quick-timing">Ideal Timing<select id="pressure-washing-quick-timing" value={timing} onChange={(event) => setTiming(event.target.value)} required><option value="" disabled>Select timing</option><option>As soon as possible</option><option>Within 2 to 4 weeks</option><option>Within 1 to 3 months</option><option>Planning ahead</option></select></label>
        <button type="submit">Continue My Estimate <span aria-hidden="true">→</span></button>
      </form>

      <section className="remodel-services" id="pressure-washing-services">
        <div className="remodel-section-heading"><p className="eyebrow">PRESSURE WASHING SERVICES</p><h2>Exterior Cleaning Planned Around the Property and Its Surfaces.</h2></div>
        <div className="remodel-service-grid">{pressureWashingServices.map((service) => <article key={service.number}><span>{service.number}</span><h3>{service.title}</h3><p>{service.copy}</p><a href="#pressure-washing-estimate">Discuss Your Property <b>→</b></a></article>)}</div>
      </section>

      <section className="commercial-coordination commercial-painting-coordination">
        <div className="commercial-coordination-copy">
          <p className="eyebrow">CLEAN WITH CONTROL</p>
          <h2>The Right Pressure Starts With the Surface.</h2>
          <p>Concrete, stucco, painted finishes and outdoor living areas do not all need the same treatment. Swift evaluates the material, buildup and surrounding property before cleaning begins.</p>
          <a className="button remodel-primary" href="#pressure-washing-estimate">Plan a Property Walkthrough</a>
        </div>
        <div className="commercial-coordination-list">
          <article><span>01</span><div><h3>Evaluate the Material</h3><p>We review the surface, age, coating and visible buildup before selecting the cleaning method.</p></div></article>
          <article><span>02</span><div><h3>Protect Nearby Areas</h3><p>Doors, fixtures, landscaping and adjacent finishes are considered before work starts.</p></div></article>
          <article><span>03</span><div><h3>Clean With Control</h3><p>Pressure, distance and cleaning solutions are adjusted to remove buildup without unnecessary force.</p></div></article>
        </div>
      </section>

      <section className="commercial-properties commercial-painting-properties">
        <div className="commercial-properties-heading"><p className="eyebrow">A CLEANER EXTERIOR</p><h2>Cleaning That Supports the Way Your Property Looks and Performs.</h2><p>Pressure washing can improve first impressions, reduce organic buildup and prepare exterior surfaces for planned improvements.</p></div>
        <div className="commercial-property-grid">
          <article><span>01</span><h3>Curb Appeal</h3><p>Refresh entryways, driveways and visible exterior surfaces before guests, buyers or tenants arrive.</p></article>
          <article><span>02</span><h3>Preventive Maintenance</h3><p>Remove accumulated dirt, algae and organic buildup before it becomes harder to manage.</p></article>
          <article><span>03</span><h3>Project Preparation</h3><p>Coordinate cleaning before exterior painting, repairs or other property improvements begin.</p></article>
        </div>
      </section>

      <section className="remodel-process" id="pressure-washing-process">
        <div className="remodel-process-heading"><p className="eyebrow">HOW IT WORKS</p><h2>A Clear Cleaning Process From Walkthrough to Final Review.</h2></div>
        <div className="remodel-process-grid">
          <article><span>01</span><h3>Walk the Property</h3><p>We identify the surfaces, buildup, access and any areas needing special attention.</p></article>
          <article><span>02</span><h3>Define the Scope</h3><p>You receive a written proposal covering the selected areas and planned cleaning method.</p></article>
          <article><span>03</span><h3>Prepare &amp; Clean</h3><p>Swift protects adjacent areas and cleans each surface with the appropriate approach.</p></article>
          <article><span>04</span><h3>Complete the Walkthrough</h3><p>We review the cleaned areas and final details with you before project closeout.</p></article>
        </div>
      </section>

      <section className="commercial-painting-proof-cta">
        <div><p className="eyebrow">PREPARING FOR EXTERIOR PAINT?</p><h2>Coordinate Cleaning and Exterior Improvements With One Contractor.</h2><p>Swift can connect surface cleaning with preparation, repairs and exterior painting under one written project plan.</p></div>
        <div className="commercial-painting-proof-actions"><a className="button remodel-primary" href="#pressure-washing-estimate">Request a Free Estimate</a><a href="/exterior-painting">Explore Exterior Painting <span aria-hidden="true">→</span></a></div>
      </section>

      <section className="remodel-faq commercial-faq">
        <div className="remodel-faq-heading"><p className="eyebrow">PRESSURE WASHING QUESTIONS</p><h2>What Property Owners Ask Before Exterior Cleaning Begins.</h2><p>Clear answers make it easier to compare the scope, methods and contractor responsible for your property.</p></div>
        <div className="remodel-faq-list">{pressureWashingFaqs.map((faq, index) => { const isOpen = openFaq === index; return <article className={isOpen ? "open" : ""} key={faq.question}><button type="button" aria-expanded={isOpen} onClick={() => setOpenFaq(isOpen ? -1 : index)}><span>{faq.question}</span><b aria-hidden="true">{isOpen ? "×" : "+"}</b></button><div hidden={!isOpen}><p>{faq.answer}</p></div></article>; })}</div>
      </section>

      <section className="remodel-estimate" id="pressure-washing-estimate">
        <div className="remodel-estimate-copy">
          <p className="eyebrow">FREE PRESSURE WASHING ESTIMATE</p>
          <h2>Tell Us About the Property and Surfaces You Want Cleaned.</h2>
          <p>Share the cleaning scope, property type and preferred timing. Swift serves Hernando, Citrus and Pasco Counties.</p>
          <div className="remodel-estimate-points"><span>Free property walkthrough</span><span>Written, itemized proposal</span><span>No deposit required</span></div>
          <p className="remodel-estimate-phone">Prefer to call?<a href="tel:3527017458">(352) 701-7458</a></p>
        </div>
        <form className="remodel-estimate-form" onSubmit={submitEstimate}>
          <div className="remodel-form-row"><label>Name<input id="pressure-washing-name" name="name" placeholder="Your name" required /></label><label>Phone<input name="phone" placeholder="(000) 000-0000" type="tel" required /></label></div>
          <div className="remodel-form-row"><label>Email<input name="email" placeholder="you@email.com" type="email" /></label><label>Project City or ZIP<input name="zip" placeholder="Spring Hill" value={projectZip} onChange={(event) => setProjectZip(event.target.value)} required /></label></div>
          <div className="remodel-form-row"><label>Cleaning Scope<select value={scope} onChange={(event) => setScope(event.target.value)} required><option value="" disabled>Select an area</option><option>Driveway and walkways</option><option>House exterior</option><option>Pool deck or patio</option><option>Commercial property</option><option>Multiple areas</option></select></label><label>Property Type<select value={propertyType} onChange={(event) => setPropertyType(event.target.value)} required><option value="" disabled>Select property</option><option>Single-family home</option><option>HOA or multi-family</option><option>Commercial property</option><option>Other property</option></select></label></div>
          <label>Ideal Timing<select value={timing} onChange={(event) => setTiming(event.target.value)} required><option value="" disabled>Select timing</option><option>As soon as possible</option><option>Within 2 to 4 weeks</option><option>Within 1 to 3 months</option><option>Planning ahead</option></select></label>
          <label>Project Details<textarea name="details" placeholder="Tell us which surfaces need cleaning, their approximate size and any areas needing special attention." /></label>
          <button className="button remodel-primary" type="submit">{submitted ? "Thank You. We’ll Be in Touch." : "Request My Cleaning Estimate"}</button>
          <small>Your information is only used to respond to your project request.</small>
        </form>
      </section>

      <footer className="site-footer remodel-footer">
        <div className="footer-main">
          <div className="footer-brand"><img src="/assets/swift-logo.png" alt="Swift Construction and Painting, LLC" /><p>Licensed and insured building contractor<br />serving Hernando, Citrus and Pasco Counties<br />since 2003.</p></div>
          <div className="footer-column"><h3>Site</h3><a href="/">Home</a><a href="/services">Services</a><a href="/gallery">Portfolio</a><a href="/about">About</a><a href="#pressure-washing-estimate">Contact</a></div>
          <div className="footer-column"><h3>Pressure Washing</h3><a href="#pressure-washing-services">Cleaning Services</a><a href="#pressure-washing-process">Our Process</a><a href="/exterior-painting">Exterior Painting</a><a href="#pressure-washing-estimate">Request an Estimate</a></div>
          <div className="footer-contact"><h3>Contact</h3><a className="footer-phone" href="tel:3527017458">(352) 701-7458</a><a href="mailto:swiftconstruction.william@gmail.com">swiftconstruction.william@gmail.com</a><div><a href="/gallery">Project Gallery</a><a href="/contact">Free Estimate</a></div></div>
        </div>
        <div className="footer-bottom"><span>© 2026 SWIFT CONSTRUCTION AND PAINTING, LLC</span><span>“WHEN QUALITY MATTERS”</span></div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
