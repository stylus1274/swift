"use client";

import { FormEvent, useState } from "react";
import SiteHeader from "../../components/SiteHeader";

const kitchenServices = [
  { number: "01", title: "Full Kitchen Remodeling", copy: "A connected renovation plan for layout changes, cabinetry, counters, flooring, lighting and finish work." },
  { number: "02", title: "Cabinetry and Storage", copy: "Cabinet replacement and practical storage improvements designed around how your household uses the kitchen." },
  { number: "03", title: "Counters and Backsplashes", copy: "Coordinated surface upgrades that improve durability, simplify cleanup and bring the room together visually." },
  { number: "04", title: "Lighting, Flooring and Finishes", copy: "The final layers that make the kitchen feel brighter, more cohesive and finished from one end to the other." },
];

const kitchenFaqs = [
  { question: "Can Swift Change the Kitchen Layout?", answer: "Yes. Layout changes may be possible depending on the home, walls, plumbing, electrical needs and the scope you are considering. Swift can evaluate those factors during the project walkthrough." },
  { question: "Can You Manage the Entire Kitchen Remodel?", answer: "Yes. Swift can coordinate connected construction, cabinetry, surfaces, flooring, lighting and finish work under one project plan." },
  { question: "Will I Receive a Written Remodeling Proposal?", answer: "Yes. The proposal documents the planned scope and included work so you can review the project before scheduling begins." },
  { question: "Can We Stay in the Home During the Remodel?", answer: "Many homeowners remain in the home, but kitchen access will be limited and some phases can be disruptive. Swift will discuss the expected work sequence so you can plan around it." },
  { question: "Where Does Swift Remodel Kitchens?", answer: "Swift serves homeowners throughout Hernando, Citrus and Pasco Counties. Project availability depends on the property, scope and current schedule." },
];

export default function KitchenRemodelingPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [projectScope, setProjectScope] = useState("");
  const [mainPriority, setMainPriority] = useState("");
  const [projectZip, setProjectZip] = useState("");
  const [timing, setTiming] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function continueEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    document.getElementById("kitchen-estimate")?.scrollIntoView({ behavior: "smooth" });
    window.setTimeout(() => document.getElementById("kitchen-lead-name")?.focus(), 550);
  }

  function submitEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="remodel-page kitchen-page">
      <SiteHeader active="services" contactHref="#kitchen-estimate" />

      <section className="remodel-hero kitchen-hero">
        <div className="remodel-hero-copy">
          <p className="eyebrow">KITCHEN REMODELING • FLORIDA NATURE COAST</p>
          <h1>Kitchen Remodeling That Works Better Every Day.</h1>
          <p>One experienced contractor to coordinate the layout, construction and finish work that turns an outdated kitchen into a room built around your household.</p>
          <div className="remodel-hero-actions">
            <a className="button remodel-primary" href="#kitchen-quick-scope">Plan Your Kitchen Remodel</a>
            <a className="remodel-phone" href="tel:3527017458"><small>OR CALL SWIFT</small>(352) 701-7458</a>
          </div>
          <div className="remodel-hero-proof">
            <span>Licensed &amp; insured • CBC1260893</span>
            <span>Written, itemized proposals</span>
            <span>One contractor from start to finish</span>
          </div>
        </div>
        <div className="remodel-hero-visual">
          <img className="remodel-hero-main kitchen-hero-image" src="/assets/kitchen-remodeling-hero.png" alt="Completed kitchen remodel with white cabinetry and a light wood island" />
        </div>
      </section>

      <form className="remodel-quick-form kitchen-quick-form" onSubmit={continueEstimate}>
        <div className="remodel-quick-heading">
          <p className="eyebrow">START YOUR ESTIMATE</p>
          <h2>What Are You Planning?</h2>
        </div>
        <label htmlFor="kitchen-quick-scope">Project Scope<select id="kitchen-quick-scope" value={projectScope} onChange={(event) => setProjectScope(event.target.value)} required><option value="" disabled>Select scope</option><option>Full kitchen remodel</option><option>Cabinets and counters</option><option>Layout changes</option><option>Flooring, lighting and finishes</option><option>Not sure yet</option></select></label>
        <label htmlFor="kitchen-quick-priority">Main Priority<select id="kitchen-quick-priority" value={mainPriority} onChange={(event) => setMainPriority(event.target.value)} required><option value="" disabled>Select priority</option><option>Better layout</option><option>More storage</option><option>Updated appearance</option><option>Durability and easier upkeep</option><option>Preparing to sell</option></select></label>
        <label htmlFor="kitchen-quick-zip">Project ZIP<input id="kitchen-quick-zip" inputMode="numeric" placeholder="34609" value={projectZip} onChange={(event) => setProjectZip(event.target.value)} required /></label>
        <label htmlFor="kitchen-quick-timing">Ideal Timing<select id="kitchen-quick-timing" value={timing} onChange={(event) => setTiming(event.target.value)} required><option value="" disabled>Select timing</option><option>As soon as possible</option><option>Within 1 to 3 months</option><option>Within 3 to 6 months</option><option>Planning ahead</option></select></label>
        <button type="submit">Continue My Estimate <span aria-hidden="true">→</span></button>
      </form>

      <section className="remodel-services" id="kitchen-services">
        <div className="remodel-section-heading">
          <p className="eyebrow">KITCHEN REMODELING SERVICES</p>
          <h2>Every Part of the Kitchen Connected Under One Plan.</h2>
        </div>
        <div className="remodel-service-grid">
          {kitchenServices.map((service) => (
            <article key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <a href="#kitchen-estimate">Discuss Your Kitchen <b>→</b></a>
            </article>
          ))}
        </div>
      </section>

      <section className="commercial-coordination kitchen-coordination">
        <div className="commercial-coordination-copy">
          <p className="eyebrow">ONE CONTRACTOR, ONE PROJECT PLAN</p>
          <h2>A Better Kitchen Depends on More Than New Cabinets.</h2>
          <p>Layout, plumbing, electrical work, surfaces and finishes affect one another. Swift coordinates those moving parts so the completed room feels intentional rather than pieced together.</p>
          <a className="button remodel-primary" href="#kitchen-estimate">Schedule a Kitchen Walkthrough</a>
        </div>
        <div className="commercial-coordination-list">
          <article><span>01</span><div><h3>Practical Planning</h3><p>The plan starts with how you cook, gather, store food and move through the room.</p></div></article>
          <article><span>02</span><div><h3>Coordinated Trades</h3><p>Construction and finish work happen in the right sequence under one contractor.</p></div></article>
          <article><span>03</span><div><h3>Clear Communication</h3><p>You know who is responsible for the scope, schedule and final result.</p></div></article>
        </div>
      </section>

      <section className="commercial-properties kitchen-priorities">
        <div className="commercial-properties-heading">
          <p className="eyebrow">DESIGNED AROUND DAILY LIFE</p>
          <h2>Improve the Parts of the Kitchen You Notice Every Day.</h2>
          <p>A successful remodel should solve practical problems while making the room feel more comfortable and connected to the rest of the home.</p>
        </div>
        <div className="commercial-property-grid">
          <article><span>01</span><h3>Layout and Flow</h3><p>Open up circulation, improve work zones and make it easier for more than one person to use the kitchen.</p></article>
          <article><span>02</span><h3>Storage and Work Surfaces</h3><p>Create a practical place for cookware, pantry items, appliances and everyday preparation.</p></article>
          <article><span>03</span><h3>Lighting and Finish</h3><p>Use coordinated lighting, flooring, surfaces and details to give the room a clear finished look.</p></article>
        </div>
      </section>

      <section className="remodel-process" id="kitchen-process">
        <div className="remodel-process-heading">
          <p className="eyebrow">HOW IT WORKS</p>
          <h2>From the First Walkthrough to the Finished Kitchen.</h2>
        </div>
        <div className="remodel-process-grid">
          <article><span>01</span><h3>Walk the Kitchen</h3><p>We review the room, your priorities, current problems and the changes you are considering.</p></article>
          <article><span>02</span><h3>Define the Scope</h3><p>The layout, materials and included construction work become a clear written proposal.</p></article>
          <article><span>03</span><h3>Coordinate the Remodel</h3><p>Swift manages scheduling, trade work and communication as the room comes together.</p></article>
          <article><span>04</span><h3>Complete the Walkthrough</h3><p>We review the finished kitchen with you and address final project details before closeout.</p></article>
        </div>
      </section>

      <section className="commercial-cta kitchen-cta">
        <div><p className="eyebrow">READY TO PLAN?</p><h2>Show Us What Is Not Working in Your Current Kitchen.</h2></div>
        <div><a className="button remodel-primary" href="#kitchen-estimate">Request a Kitchen Estimate</a><a href="tel:3527017458">Call (352) 701-7458</a></div>
      </section>

      <section className="remodel-faq commercial-faq">
        <div className="remodel-faq-heading">
          <p className="eyebrow">KITCHEN REMODELING QUESTIONS</p>
          <h2>What Homeowners Ask Before the Work Begins.</h2>
          <p>Clear answers make it easier to plan the project and choose the right contractor.</p>
        </div>
        <div className="remodel-faq-list">
          {kitchenFaqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return <article className={isOpen ? "open" : ""} key={faq.question}><button type="button" aria-expanded={isOpen} onClick={() => setOpenFaq(isOpen ? -1 : index)}><span>{faq.question}</span><b aria-hidden="true">{isOpen ? "×" : "+"}</b></button><div hidden={!isOpen}><p>{faq.answer}</p></div></article>;
          })}
        </div>
      </section>

      <section className="remodel-estimate" id="kitchen-estimate">
        <div className="remodel-estimate-copy">
          <p className="eyebrow">KITCHEN PROJECT REQUEST</p>
          <h2>Tell Us What You Want to Change About Your Kitchen.</h2>
          <p>Share the scope, priorities and timing you are considering. Swift serves homeowners throughout Hernando, Citrus and Pasco Counties.</p>
          <div className="remodel-estimate-points"><span>Free initial project conversation</span><span>Written remodeling proposal</span><span>Licensed and insured contractor</span></div>
          <p className="remodel-estimate-phone">Prefer to call?<a href="tel:3527017458">(352) 701-7458</a></p>
        </div>
        <form className="remodel-estimate-form" onSubmit={submitEstimate}>
          <div className="remodel-form-row"><label>Name<input id="kitchen-lead-name" name="name" placeholder="Your name" required /></label><label>Phone<input name="phone" placeholder="(000) 000-0000" type="tel" required /></label></div>
          <div className="remodel-form-row"><label>Email<input name="email" placeholder="you@email.com" type="email" /></label><label>Project City or ZIP<input name="zip" placeholder="Spring Hill" value={projectZip} onChange={(event) => setProjectZip(event.target.value)} required /></label></div>
          <div className="remodel-form-row"><label>Project Scope<select value={projectScope} onChange={(event) => setProjectScope(event.target.value)} required><option value="" disabled>Select scope</option><option>Full kitchen remodel</option><option>Cabinets and counters</option><option>Layout changes</option><option>Flooring, lighting and finishes</option><option>Not sure yet</option></select></label><label>Main Priority<select value={mainPriority} onChange={(event) => setMainPriority(event.target.value)} required><option value="" disabled>Select priority</option><option>Better layout</option><option>More storage</option><option>Updated appearance</option><option>Durability and easier upkeep</option><option>Preparing to sell</option></select></label></div>
          <label>Ideal Timing<select value={timing} onChange={(event) => setTiming(event.target.value)} required><option value="" disabled>Select timing</option><option>As soon as possible</option><option>Within 1 to 3 months</option><option>Within 3 to 6 months</option><option>Planning ahead</option></select></label>
          <label>Project Details<textarea name="details" placeholder="Tell us what is not working, what you want to change and any materials or layout ideas you already have." /></label>
          <button className="button remodel-primary" type="submit">{submitted ? "Thank You. We’ll Be in Touch." : "Request My Kitchen Estimate"}</button>
          <small>Your information is only used to respond to your project request.</small>
        </form>
      </section>

      <footer className="site-footer remodel-footer">
        <div className="footer-main">
          <div className="footer-brand"><img src="/assets/swift-logo.png" alt="Swift Construction and Painting, LLC" /><p>Licensed and insured building contractor<br />serving Hernando, Citrus and Pasco Counties<br />since 2003.</p></div>
          <div className="footer-column"><h3>Site</h3><a href="/">Home</a><a href="/services">Services</a><a href="/gallery">Portfolio</a><a href="/about">About</a><a href="#kitchen-estimate">Contact</a></div>
          <div className="footer-column"><h3>Kitchen Remodeling</h3><a href="#kitchen-services">Services</a><a href="#kitchen-process">Our Process</a><a href="#kitchen-estimate">Request an Estimate</a><a href="/residential-remodeling">Residential Remodeling</a></div>
          <div className="footer-contact"><h3>Contact</h3><a className="footer-phone" href="tel:3527017458">(352) 701-7458</a><a href="mailto:swiftconstruction.william@gmail.com">swiftconstruction.william@gmail.com</a><address className="footer-address">11105 Lomita Wren Rd<br />Weeki Wachee, FL 34614</address></div>
        </div>
        <div className="footer-bottom"><span>© 2026 SWIFT CONSTRUCTION AND PAINTING, LLC</span><span>“WHEN QUALITY MATTERS”</span></div>
      </footer>
    </main>
  );
}
