"use client";

import { FormEvent, useState } from "react";
import SiteHeader from "../../components/SiteHeader";

const openingServices = [
  {
    number: "01",
    title: "Replacement Windows",
    copy: "Replace aging, damaged or inefficient windows with a coordinated plan for sizing, installation and surrounding finish work.",
  },
  {
    number: "02",
    title: "Exterior Entry Doors",
    copy: "Update front, side and service doors with careful fitting, weather protection, hardware coordination and clean interior trim.",
  },
  {
    number: "03",
    title: "Sliding & Patio Doors",
    copy: "Improve access, light and outdoor connections with properly fitted sliding and patio door systems.",
  },
  {
    number: "04",
    title: "Impact-Rated Options",
    copy: "Discuss impact-rated window and door options suited to Florida homes, local requirements and the goals for your project.",
  },
];

const openingFaqs = [
  {
    question: "Does Swift Install Impact Windows and Doors?",
    answer: "Swift can discuss impact-rated window and door options as part of the project walkthrough. Product selection depends on the opening, home, applicable requirements and the performance goals for the project.",
  },
  {
    question: "Are Permits Required for Window or Door Replacement?",
    answer: "Permit requirements depend on the project and local jurisdiction. Swift reviews the planned scope and coordinates required permitting when it applies to the installation.",
  },
  {
    question: "Can You Repair the Area Around the New Opening?",
    answer: "Yes. The written proposal can account for related interior or exterior finish work identified during the walkthrough, including appropriate trim, drywall, stucco or paint work around the installation.",
  },
  {
    question: "How Long Does Window or Door Installation Take?",
    answer: "Timing varies with the number of openings, product availability, permitting and any repair work involved. Swift provides a practical schedule after reviewing the property and final scope.",
  },
  {
    question: "What Areas Do You Serve?",
    answer: "Swift serves homeowners throughout Hernando, Citrus and Pasco Counties, including Spring Hill, Brooksville, Weeki Wachee, Hernando Beach, Ridge Manor and surrounding communities.",
  },
];

export default function WindowsDoorsPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [projectType, setProjectType] = useState("");
  const [openingCount, setOpeningCount] = useState("");
  const [projectZip, setProjectZip] = useState("");
  const [timing, setTiming] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function continueEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    document.getElementById("windows-doors-estimate")?.scrollIntoView({ behavior: "smooth" });
    window.setTimeout(() => document.getElementById("windows-doors-name")?.focus(), 550);
  }

  function submitEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Window and Door Installation",
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Swift Construction & Painting, LLC",
      telephone: "+1-352-701-7458",
    },
    areaServed: ["Hernando County", "Citrus County", "Pasco County"],
    description: "Replacement window, exterior door, sliding door and impact-rated product installation for Florida homes.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: openingFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main className="remodel-page commercial-page commercial-painting-page windows-doors-page">
      <SiteHeader active="services" contactHref="#windows-doors-estimate" />

      <section className="remodel-hero windows-doors-hero">
        <div className="remodel-hero-copy">
          <p className="eyebrow">WINDOWS &amp; DOORS • SPRING HILL, FL</p>
          <h1>Window and Door Installation With Every Detail Coordinated.</h1>
          <p>New windows and doors planned around the opening, weather protection and finish work your Florida home needs.</p>
          <div className="remodel-hero-actions">
            <a className="button remodel-primary" href="#windows-doors-quick-project">Get a Free Installation Estimate</a>
            <a className="remodel-phone" href="tel:3527017458"><small>OR CALL SWIFT</small>(352) 701-7458</a>
          </div>
          <div className="remodel-hero-proof">
            <span>Licensed &amp; insured • CBC1260893</span>
            <span>Written, itemized proposals</span>
            <span>No deposit required</span>
          </div>
        </div>
        <div className="remodel-hero-visual">
          <img className="remodel-hero-main windows-doors-hero-image" src="/assets/windows-doors-hero.png" alt="Professional installers fitting a new window into a Florida stucco home" />
        </div>
      </section>

      <form className="remodel-quick-form commercial-painting-quick-form" onSubmit={continueEstimate}>
        <div className="remodel-quick-heading">
          <p className="eyebrow">START YOUR ESTIMATE</p>
          <h2>What Are You Planning to Replace?</h2>
        </div>
        <label htmlFor="windows-doors-quick-project">Project Type<select id="windows-doors-quick-project" value={projectType} onChange={(event) => setProjectType(event.target.value)} required><option value="" disabled>Select project</option><option>Replacement windows</option><option>Exterior entry doors</option><option>Sliding or patio doors</option><option>Windows and doors</option><option>Other opening project</option></select></label>
        <label htmlFor="windows-doors-quick-count">Number of Openings<select id="windows-doors-quick-count" value={openingCount} onChange={(event) => setOpeningCount(event.target.value)} required><option value="" disabled>Select quantity</option><option>1 opening</option><option>2 to 5 openings</option><option>6 to 10 openings</option><option>More than 10</option><option>Not sure yet</option></select></label>
        <label htmlFor="windows-doors-quick-zip">Project ZIP<input id="windows-doors-quick-zip" inputMode="numeric" placeholder="34609" value={projectZip} onChange={(event) => setProjectZip(event.target.value)} required /></label>
        <label htmlFor="windows-doors-quick-timing">Ideal Timing<select id="windows-doors-quick-timing" value={timing} onChange={(event) => setTiming(event.target.value)} required><option value="" disabled>Select timing</option><option>As soon as possible</option><option>Within 1 to 3 months</option><option>Within 3 to 6 months</option><option>Planning ahead</option></select></label>
        <button type="submit">Continue My Estimate <span aria-hidden="true">→</span></button>
      </form>

      <section className="remodel-services" id="windows-doors-services">
        <div className="remodel-section-heading">
          <p className="eyebrow">WINDOW &amp; DOOR SERVICES</p>
          <h2>Installation Planned Around the Product, Opening and Finished Home.</h2>
        </div>
        <div className="remodel-service-grid">
          {openingServices.map((service) => (
            <article key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <a href="#windows-doors-estimate">Discuss Your Project <b>→</b></a>
            </article>
          ))}
        </div>
      </section>

      <section className="commercial-coordination commercial-painting-coordination">
        <div className="commercial-coordination-copy">
          <p className="eyebrow">MORE THAN A PRODUCT SWAP</p>
          <h2>The Opening Matters as Much as the Window or Door.</h2>
          <p>A successful replacement has to fit, manage Florida weather and look complete inside and out. Swift considers the entire opening before the installation plan is finalized.</p>
          <a className="button remodel-primary" href="#windows-doors-estimate">Plan a Property Walkthrough</a>
        </div>
        <div className="commercial-coordination-list">
          <article><span>01</span><div><h3>Verify the Opening</h3><p>Existing dimensions, conditions and access are reviewed before the product and scope are finalized.</p></div></article>
          <article><span>02</span><div><h3>Plan for Weather</h3><p>Flashing, sealing and water management details are coordinated for the opening and exterior finish.</p></div></article>
          <article><span>03</span><div><h3>Complete the Finish Work</h3><p>Interior trim, drywall, stucco and paint needs can be included so the replacement looks complete.</p></div></article>
        </div>
      </section>

      <section className="commercial-properties commercial-painting-properties">
        <div className="commercial-properties-heading">
          <p className="eyebrow">WHY HOMEOWNERS REPLACE</p>
          <h2>Better Openings Can Improve Comfort, Protection and Curb Appeal.</h2>
          <p>The right project starts with the problem you need to solve, not a one-size-fits-all product recommendation.</p>
        </div>
        <div className="commercial-property-grid">
          <article><span>01</span><h3>Storm Protection</h3><p>Explore impact-rated options and installation requirements for a more prepared Florida home.</p></article>
          <article><span>02</span><h3>Comfort &amp; Efficiency</h3><p>Replace damaged, drafty or aging units that make rooms harder to keep comfortable.</p></article>
          <article><span>03</span><h3>Appearance &amp; Function</h3><p>Improve natural light, operation, access and the finished look of the home's interior and exterior.</p></article>
        </div>
      </section>

      <section className="remodel-process" id="windows-doors-process">
        <div className="remodel-process-heading">
          <p className="eyebrow">HOW IT WORKS</p>
          <h2>A Clear Installation Process From Walkthrough to Final Fit.</h2>
        </div>
        <div className="remodel-process-grid">
          <article><span>01</span><h3>Review the Openings</h3><p>We discuss your goals and inspect the windows, doors and surrounding conditions.</p></article>
          <article><span>02</span><h3>Define the Scope</h3><p>You receive a written proposal covering the planned installation and related finish work.</p></article>
          <article><span>03</span><h3>Install &amp; Finish</h3><p>Swift coordinates removal, fitting, weather protection and the included interior and exterior details.</p></article>
          <article><span>04</span><h3>Complete the Walkthrough</h3><p>We review operation, appearance and final details together before project closeout.</p></article>
        </div>
      </section>

      <section className="commercial-painting-proof-cta">
        <div>
          <p className="eyebrow">ONE CONTRACTOR FOR THE COMPLETE OPENING</p>
          <h2>Installation and Connected Repairs Can Stay Under One Plan.</h2>
          <p>Swift can coordinate the window or door replacement with related carpentry, drywall, stucco and painting under one licensed building contractor.</p>
        </div>
        <div className="commercial-painting-proof-actions">
          <a className="button remodel-primary" href="#windows-doors-estimate">Request a Free Estimate</a>
          <a href="/residential-remodeling">Explore Residential Remodeling <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="remodel-faq commercial-faq">
        <div className="remodel-faq-heading">
          <p className="eyebrow">WINDOW &amp; DOOR QUESTIONS</p>
          <h2>What Homeowners Ask Before Replacement Begins.</h2>
          <p>Clear answers make it easier to compare products, installation scope and the contractor responsible for your home.</p>
        </div>
        <div className="remodel-faq-list">
          {openingFaqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return <article className={isOpen ? "open" : ""} key={faq.question}><button type="button" aria-expanded={isOpen} onClick={() => setOpenFaq(isOpen ? -1 : index)}><span>{faq.question}</span><b aria-hidden="true">{isOpen ? "×" : "+"}</b></button><div hidden={!isOpen}><p>{faq.answer}</p></div></article>;
          })}
        </div>
      </section>

      <section className="remodel-estimate" id="windows-doors-estimate">
        <div className="remodel-estimate-copy">
          <p className="eyebrow">FREE WINDOW &amp; DOOR ESTIMATE</p>
          <h2>Tell Us About the Openings You Want to Replace.</h2>
          <p>Share the project type, approximate number of openings and your preferred timing. Swift serves homeowners throughout Hernando, Citrus and Pasco Counties.</p>
          <div className="remodel-estimate-points"><span>Free project walkthrough</span><span>Written, itemized proposal</span><span>No deposit required</span></div>
          <p className="remodel-estimate-phone">Prefer to call?<a href="tel:3527017458">(352) 701-7458</a></p>
        </div>
        <form className="remodel-estimate-form" onSubmit={submitEstimate}>
          <div className="remodel-form-row"><label>Name<input id="windows-doors-name" name="name" placeholder="Your name" required /></label><label>Phone<input name="phone" placeholder="(000) 000-0000" type="tel" required /></label></div>
          <div className="remodel-form-row"><label>Email<input name="email" placeholder="you@email.com" type="email" /></label><label>Project City or ZIP<input name="zip" placeholder="Spring Hill" value={projectZip} onChange={(event) => setProjectZip(event.target.value)} required /></label></div>
          <div className="remodel-form-row"><label>Project Type<select value={projectType} onChange={(event) => setProjectType(event.target.value)} required><option value="" disabled>Select project</option><option>Replacement windows</option><option>Exterior entry doors</option><option>Sliding or patio doors</option><option>Windows and doors</option><option>Other opening project</option></select></label><label>Number of Openings<select value={openingCount} onChange={(event) => setOpeningCount(event.target.value)} required><option value="" disabled>Select quantity</option><option>1 opening</option><option>2 to 5 openings</option><option>6 to 10 openings</option><option>More than 10</option><option>Not sure yet</option></select></label></div>
          <label>Ideal Timing<select value={timing} onChange={(event) => setTiming(event.target.value)} required><option value="" disabled>Select timing</option><option>As soon as possible</option><option>Within 1 to 3 months</option><option>Within 3 to 6 months</option><option>Planning ahead</option></select></label>
          <label>Project Details<textarea name="details" placeholder="Tell us what you want to replace, any damage or leaks you have noticed and whether you are considering impact-rated products." /></label>
          <button className="button remodel-primary" type="submit">{submitted ? "Thank You. We’ll Be in Touch." : "Request My Window and Door Estimate"}</button>
          <small>Your information is only used to respond to your project request.</small>
        </form>
      </section>

      <footer className="site-footer remodel-footer">
        <div className="footer-main">
          <div className="footer-brand"><img src="/assets/swift-logo.png" alt="Swift Construction and Painting, LLC" /><p>Licensed and insured building contractor<br />serving Hernando, Citrus and Pasco Counties<br />since 2003.</p></div>
          <div className="footer-column"><h3>Site</h3><a href="/">Home</a><a href="/services">Services</a><a href="/gallery">Portfolio</a><a href="/about">About</a><a href="#windows-doors-estimate">Contact</a></div>
          <div className="footer-column"><h3>Windows &amp; Doors</h3><a href="#windows-doors-services">Installation Services</a><a href="#windows-doors-process">Our Process</a><a href="/residential-remodeling">Residential Remodeling</a><a href="#windows-doors-estimate">Request an Estimate</a></div>
          <div className="footer-contact"><h3>Contact</h3><a className="footer-phone" href="tel:3527017458">(352) 701-7458</a><a href="mailto:swiftconstruction.william@gmail.com">swiftconstruction.william@gmail.com</a><address className="footer-address">11105 Lomita Wren Rd<br />Weeki Wachee, FL 34614</address></div>
        </div>
        <div className="footer-bottom"><span>© 2026 SWIFT CONSTRUCTION AND PAINTING, LLC</span><span>“WHEN QUALITY MATTERS”</span></div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
