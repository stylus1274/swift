"use client";

import { FormEvent, useState } from "react";
import SiteHeader from "../../components/SiteHeader";

const multiFamilyServices = [
  { number: "01", title: "Ground-Up Multi-Family Construction", copy: "Coordinated construction for new multi-unit properties, with the scope, sequencing and communication managed under one project plan." },
  { number: "02", title: "Duplex and Townhome Projects", copy: "Practical construction management for attached homes and smaller developments planned around repeatable quality and efficient delivery." },
  { number: "03", title: "Property Renovations", copy: "Connected improvements for occupied or transitioning properties, including unit interiors, common areas and exterior updates." },
  { number: "04", title: "Painting and Finish Work", copy: "Durable interior and exterior finishes coordinated around turnover schedules, access requirements and long-term property performance." },
];

const multiFamilyFaqs = [
  { question: "What Types of Multi-Family Projects Does Swift Handle?", answer: "Swift can discuss duplexes, townhomes, apartment properties and other multi-unit construction or renovation projects. Fit depends on the plans, property, unit count and current schedule." },
  { question: "Can Swift Coordinate Multiple Trades?", answer: "Yes. Swift manages connected construction and finish work under one project plan so owners and developers have one point of responsibility for the overall scope." },
  { question: "Do You Provide Written Project Proposals?", answer: "Yes. The proposal documents the planned scope and included work so ownership, financing and project stakeholders can evaluate the project before work begins." },
  { question: "Can Work Be Phased Around Occupied Units?", answer: "Phased scheduling may be possible depending on the project. Swift can review access, resident impact, safety requirements and the most practical sequence during the initial walkthrough." },
  { question: "Where Does Swift Take Multi-Family Projects?", answer: "Swift serves projects throughout Hernando, Citrus and Pasco Counties. Availability depends on the property, scope and current construction schedule." },
];

export default function MultiFamilyConstructionPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [projectStage, setProjectStage] = useState("");
  const [unitCount, setUnitCount] = useState("");
  const [projectZip, setProjectZip] = useState("");
  const [timing, setTiming] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function continueEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    document.getElementById("multi-family-estimate")?.scrollIntoView({ behavior: "smooth" });
    window.setTimeout(() => document.getElementById("multi-family-lead-name")?.focus(), 550);
  }

  function submitEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="remodel-page multifamily-page">
      <SiteHeader active="services" contactHref="#multi-family-estimate" />

      <section className="remodel-hero multifamily-hero">
        <div className="remodel-hero-copy">
          <p className="eyebrow">MULTI-FAMILY CONSTRUCTION • FLORIDA NATURE COAST</p>
          <h1>Multi-Family Construction Managed From Plan to Turnover.</h1>
          <p>One licensed contractor to coordinate new construction, property renovations and connected finish work for multi-unit residential projects.</p>
          <div className="remodel-hero-actions">
            <a className="button remodel-primary" href="#multi-family-quick-stage">Discuss Your Project</a>
            <a className="remodel-phone" href="tel:3527017458"><small>OR CALL SWIFT</small>(352) 701-7458</a>
          </div>
          <div className="remodel-hero-proof">
            <span>Licensed &amp; insured • CBC1260893</span>
            <span>Written project proposals</span>
            <span>One point of project responsibility</span>
          </div>
        </div>
        <div className="remodel-hero-visual">
          <img className="remodel-hero-main multifamily-hero-image" src="/assets/multi-family-construction-hero.png" alt="Completed multi-family residential property in Florida" />
        </div>
      </section>

      <form className="remodel-quick-form multifamily-quick-form" onSubmit={continueEstimate}>
        <div className="remodel-quick-heading">
          <p className="eyebrow">START YOUR PROJECT</p>
          <h2>What Are You Planning?</h2>
        </div>
        <label htmlFor="multi-family-quick-stage">Project Stage<select id="multi-family-quick-stage" value={projectStage} onChange={(event) => setProjectStage(event.target.value)} required><option value="" disabled>Select stage</option><option>Evaluating a property</option><option>Early planning</option><option>Plans in development</option><option>Ready for contractor review</option><option>Existing property renovation</option></select></label>
        <label htmlFor="multi-family-quick-units">Approximate Units<select id="multi-family-quick-units" value={unitCount} onChange={(event) => setUnitCount(event.target.value)} required><option value="" disabled>Select units</option><option>2 to 4 units</option><option>5 to 12 units</option><option>13 to 30 units</option><option>More than 30 units</option><option>Not sure yet</option></select></label>
        <label htmlFor="multi-family-quick-zip">Project ZIP<input id="multi-family-quick-zip" inputMode="numeric" placeholder="34609" value={projectZip} onChange={(event) => setProjectZip(event.target.value)} required /></label>
        <label htmlFor="multi-family-quick-timing">Ideal Timing<select id="multi-family-quick-timing" value={timing} onChange={(event) => setTiming(event.target.value)} required><option value="" disabled>Select timing</option><option>As soon as possible</option><option>Within 1 to 3 months</option><option>Within 3 to 6 months</option><option>Planning ahead</option></select></label>
        <button type="submit">Continue My Project Request <span aria-hidden="true">→</span></button>
      </form>

      <section className="remodel-services" id="multi-family-services">
        <div className="remodel-section-heading">
          <p className="eyebrow">MULTI-FAMILY SERVICES</p>
          <h2>One Contractor for the Property From Structure to Finish.</h2>
        </div>
        <div className="remodel-service-grid">
          {multiFamilyServices.map((service) => (
            <article key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <a href="#multi-family-estimate">Discuss Your Project <b>→</b></a>
            </article>
          ))}
        </div>
      </section>

      <section className="commercial-coordination multifamily-coordination">
        <div className="commercial-coordination-copy">
          <p className="eyebrow">BUILT FOR OWNERS AND DEVELOPERS</p>
          <h2>More Units Require More Coordination, Not More Confusion.</h2>
          <p>Swift keeps project information, trade work and communication connected so decisions do not get lost between separate contractors.</p>
          <a className="button remodel-primary" href="#multi-family-estimate">Schedule a Project Conversation</a>
        </div>
        <div className="commercial-coordination-list">
          <article><span>01</span><div><h3>Defined Project Scope</h3><p>Written details create a clearer basis for decisions, planning and stakeholder review.</p></div></article>
          <article><span>02</span><div><h3>Coordinated Construction</h3><p>Trade work, inspections and finish phases move through one connected schedule.</p></div></article>
          <article><span>03</span><div><h3>Accountable Communication</h3><p>You have one contractor responsible for updates, coordination and the overall result.</p></div></article>
        </div>
      </section>

      <section className="commercial-properties multifamily-properties">
        <div className="commercial-properties-heading">
          <p className="eyebrow">PROJECT TYPES</p>
          <h2>Construction Support for Multi-Unit Residential Properties.</h2>
          <p>The right plan depends on the number of units, project stage, property access and whether the work is ground-up construction or an existing-property improvement.</p>
        </div>
        <div className="commercial-property-grid">
          <article><span>01</span><h3>Duplexes and Small Communities</h3><p>Construction and renovations for compact multi-unit properties where efficient coordination matters from the start.</p></article>
          <article><span>02</span><h3>Townhomes and Attached Housing</h3><p>Connected construction work planned around repeatable standards, shared structures and consistent finishes.</p></article>
          <article><span>03</span><h3>Apartments and Managed Properties</h3><p>Property improvements, unit renovations and common-area work coordinated around ownership and operational needs.</p></article>
        </div>
      </section>

      <section className="remodel-process" id="multi-family-process">
        <div className="remodel-process-heading">
          <p className="eyebrow">HOW IT WORKS</p>
          <h2>A Clear Path From Property Review to Project Turnover.</h2>
        </div>
        <div className="remodel-process-grid">
          <article><span>01</span><h3>Review the Property</h3><p>We discuss the site, plans, unit count, project stage and result ownership needs to achieve.</p></article>
          <article><span>02</span><h3>Define the Scope</h3><p>The proposed work, priorities and included project details are organized in writing.</p></article>
          <article><span>03</span><h3>Coordinate Construction</h3><p>Swift manages scheduling, trade work, inspections and communication as the project moves forward.</p></article>
          <article><span>04</span><h3>Complete Turnover</h3><p>The finished work is reviewed with ownership and final project details are addressed before closeout.</p></article>
        </div>
      </section>

      <section className="commercial-cta multifamily-cta">
        <div><p className="eyebrow">START WITH THE PROPERTY</p><h2>Have Plans, a Site or an Existing Multi-Unit Property?</h2></div>
        <div><a className="button remodel-primary" href="#multi-family-estimate">Request a Project Conversation</a><a href="tel:3527017458">Call (352) 701-7458</a></div>
      </section>

      <section className="remodel-faq commercial-faq">
        <div className="remodel-faq-heading">
          <p className="eyebrow">MULTI-FAMILY QUESTIONS</p>
          <h2>What Owners Ask Before Choosing a Contractor.</h2>
          <p>Clear answers early make it easier to evaluate project fit, scope and next steps.</p>
        </div>
        <div className="remodel-faq-list">
          {multiFamilyFaqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return <article className={isOpen ? "open" : ""} key={faq.question}><button type="button" aria-expanded={isOpen} onClick={() => setOpenFaq(isOpen ? -1 : index)}><span>{faq.question}</span><b aria-hidden="true">{isOpen ? "×" : "+"}</b></button><div hidden={!isOpen}><p>{faq.answer}</p></div></article>;
          })}
        </div>
      </section>

      <section className="remodel-estimate" id="multi-family-estimate">
        <div className="remodel-estimate-copy">
          <p className="eyebrow">MULTI-FAMILY PROJECT REQUEST</p>
          <h2>Tell Us About the Property and Project Stage.</h2>
          <p>Share what you know so far. Swift serves owners and developers throughout Hernando, Citrus and Pasco Counties.</p>
          <div className="remodel-estimate-points"><span>Initial project conversation</span><span>Written construction proposal</span><span>Licensed and insured contractor</span></div>
          <p className="remodel-estimate-phone">Prefer to call?<a href="tel:3527017458">(352) 701-7458</a></p>
        </div>
        <form className="remodel-estimate-form" onSubmit={submitEstimate}>
          <div className="remodel-form-row"><label>Name<input id="multi-family-lead-name" name="name" placeholder="Your name" required /></label><label>Phone<input name="phone" placeholder="(000) 000-0000" type="tel" required /></label></div>
          <div className="remodel-form-row"><label>Business Email<input name="email" placeholder="you@company.com" type="email" /></label><label>Project City or ZIP<input name="zip" placeholder="Spring Hill" value={projectZip} onChange={(event) => setProjectZip(event.target.value)} required /></label></div>
          <div className="remodel-form-row"><label>Project Stage<select value={projectStage} onChange={(event) => setProjectStage(event.target.value)} required><option value="" disabled>Select stage</option><option>Evaluating a property</option><option>Early planning</option><option>Plans in development</option><option>Ready for contractor review</option><option>Existing property renovation</option></select></label><label>Approximate Units<select value={unitCount} onChange={(event) => setUnitCount(event.target.value)} required><option value="" disabled>Select units</option><option>2 to 4 units</option><option>5 to 12 units</option><option>13 to 30 units</option><option>More than 30 units</option><option>Not sure yet</option></select></label></div>
          <label>Ideal Timing<select value={timing} onChange={(event) => setTiming(event.target.value)} required><option value="" disabled>Select timing</option><option>As soon as possible</option><option>Within 1 to 3 months</option><option>Within 3 to 6 months</option><option>Planning ahead</option></select></label>
          <label>Project Details<textarea name="details" placeholder="Tell us about the property, plans, unit count, scope and decisions already made." /></label>
          <button className="button remodel-primary" type="submit">{submitted ? "Thank You. We’ll Be in Touch." : "Request My Project Conversation"}</button>
          <small>Your information is only used to respond to your project request.</small>
        </form>
      </section>

      <footer className="site-footer remodel-footer">
        <div className="footer-main">
          <div className="footer-brand"><img src="/assets/swift-logo.png" alt="Swift Construction and Painting, LLC" /><p>Licensed and insured general contractor<br />serving Hernando, Citrus and Pasco Counties<br />since 2003.</p></div>
          <div className="footer-column"><h3>Site</h3><a href="/">Home</a><a href="/#services">Services</a><a href="/gallery">Portfolio</a><a href="/about">About</a><a href="#multi-family-estimate">Contact</a></div>
          <div className="footer-column"><h3>Multi-Family</h3><a href="#multi-family-services">Services</a><a href="#multi-family-process">Our Process</a><a href="#multi-family-estimate">Request a Conversation</a><a href="/new-home-construction">New Home Construction</a></div>
          <div className="footer-contact"><h3>Contact</h3><a className="footer-phone" href="tel:3527017458">(352) 701-7458</a><a href="mailto:swiftconstruction.william@gmail.com">swiftconstruction.william@gmail.com</a><div><a href="/gallery">Project Gallery</a><a href="/contact">Free Estimate</a></div></div>
        </div>
        <div className="footer-bottom"><span>© 2026 SWIFT CONSTRUCTION AND PAINTING, LLC</span><span>“WHEN QUALITY MATTERS”</span></div>
      </footer>
    </main>
  );
}
