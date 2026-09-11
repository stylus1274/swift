"use client";

import { FormEvent, useState } from "react";
import SiteHeader from "../../components/SiteHeader";

const remodelingServices = [
  {
    number: "01",
    title: "Bathroom Remodeling",
    copy: "Showers, vanities, tile, lighting and finish work coordinated into one complete bathroom renovation.",
  },
  {
    number: "02",
    title: "Kitchen Remodeling",
    copy: "Cabinetry, countertops, flooring, lighting and layout improvements managed under one project plan.",
  },
  {
    number: "03",
    title: "Whole-Home Renovations",
    copy: "Connected upgrades across multiple rooms with a consistent scope, schedule and point of contact.",
  },
  {
    number: "04",
    title: "Flooring & Carpentry",
    copy: "Flooring, trim, doors, built-ins and practical carpentry improvements that complete the space.",
  },
];

const remodelingFaqs = [
  {
    question: "Can Swift Manage the Entire Remodeling Project?",
    answer: "Yes. Swift coordinates the remodeling scope, scheduling and trade work so you are not left managing several separate crews or timelines.",
  },
  {
    question: "Do You Provide Written, Itemized Estimates?",
    answer: "Yes. Your proposal outlines the planned work and included project details before scheduling begins, helping you compare the scope clearly.",
  },
  {
    question: "Can You Help With Materials and Finish Selections?",
    answer: "Swift can discuss practical finish options and help you understand how selections affect the look, durability, schedule and overall project scope.",
  },
  {
    question: "Do You Handle Permits When They Are Required?",
    answer: "When the approved scope requires permitting, Swift can coordinate the applicable permit process as part of the project plan.",
  },
  {
    question: "What Areas Do You Serve?",
    answer: "Swift serves Spring Hill, Brooksville, Weeki Wachee, Hernando Beach, Ridge Manor and communities throughout Hernando, Citrus and Pasco Counties.",
  },
];

export default function ResidentialRemodelingPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [project, setProject] = useState("");
  const [projectZip, setProjectZip] = useState("");
  const [timing, setTiming] = useState("");

  function submitQuickEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    document.getElementById("remodel-estimate")?.scrollIntoView({ behavior: "smooth" });
    window.setTimeout(() => document.getElementById("remodel-lead-name")?.focus(), 550);
  }

  function submitEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="remodel-page">
      <SiteHeader active="services" contactHref="#remodel-estimate" />

      <section className="remodel-hero">
        <div className="remodel-hero-copy">
          <p className="eyebrow">RESIDENTIAL REMODELING • SPRING HILL, FL</p>
          <h1>Residential Remodeling That Brings the Whole Home Together.</h1>
          <p>One contractor for the planning, coordination and finish work your kitchen, bathroom or full-home renovation needs.</p>
          <div className="remodel-hero-actions">
            <a className="button remodel-primary" href="#remodel-quick-project">Get a Free Remodeling Estimate</a>
            <a className="remodel-phone" href="tel:3527017458"><small>OR CALL SWIFT</small>(352) 701-7458</a>
          </div>
          <div className="remodel-hero-proof">
            <span>Licensed &amp; insured • CBC1260893</span>
            <span>Serving local homeowners since 2003</span>
            <span>Written, itemized proposals</span>
          </div>
        </div>
        <div className="remodel-hero-visual">
          <img className="remodel-hero-main" src="/assets/hero-bathroom-remodel.webp" alt="Finished residential bathroom remodeling project" />
        </div>
      </section>

      <form className="remodel-quick-form" onSubmit={submitQuickEstimate}>
        <div className="remodel-quick-heading">
          <p className="eyebrow">START YOUR ESTIMATE</p>
          <h2>What Are You Planning?</h2>
        </div>
        <label htmlFor="remodel-quick-project">Project Type<select id="remodel-quick-project" name="project" value={project} onChange={(event) => setProject(event.target.value)} required><option value="" disabled>Select project</option><option>Bathroom remodeling</option><option>Kitchen remodeling</option><option>Whole-home renovation</option><option>Flooring or carpentry</option><option>Other remodeling project</option></select></label>
        <label htmlFor="remodel-quick-zip">Project ZIP<input id="remodel-quick-zip" name="zip" placeholder="34609" inputMode="numeric" value={projectZip} onChange={(event) => setProjectZip(event.target.value)} required /></label>
        <label htmlFor="remodel-quick-timing">Ideal Timing<select id="remodel-quick-timing" name="timing" value={timing} onChange={(event) => setTiming(event.target.value)} required><option value="" disabled>Select timing</option><option>As soon as possible</option><option>Within 1–3 months</option><option>Within 3–6 months</option><option>Just researching</option></select></label>
        <button type="submit">Continue My Estimate<span aria-hidden="true">→</span></button>
      </form>

      <section className="remodel-services" id="remodeling-services">
        <div className="remodel-section-heading">
          <p className="eyebrow">REMODELING SERVICES</p>
          <h2>From One Room to a Full-Home Refresh.</h2>
        </div>
        <div className="remodel-service-grid">
          {remodelingServices.map((service) => (
            <article key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <a href="#remodel-estimate">Discuss your project <b>→</b></a>
            </article>
          ))}
        </div>
      </section>

      <section className="remodel-projects">
        <div className="remodel-project-heading">
          <div><p className="eyebrow">SELECTED REMODELING WORK</p><h2>Spaces Designed to Work Better and Feel Finished.</h2></div>
          <p>Explore the kind of coordinated improvements Swift can manage throughout your home.</p>
        </div>
        <div className="remodel-project-grid">
          <article className="remodel-project-large">
            <img src="/assets/hero-bathroom-remodel.webp" alt="Completed bathroom remodeling project" />
            <div><span>BATHROOM REMODELING</span><h3>Primary Bathroom Transformation</h3><p>Spring Hill, Florida</p></div>
          </article>
          <article className="remodel-project-small">
            <img src="/assets/commercial-renovation.jpg" alt="Completed interior renovation project" />
            <div><span>INTERIOR RENOVATION</span><h3>Connected Interior Refresh</h3><p>Brooksville, Florida</p></div>
          </article>
        </div>
      </section>

      <section className="remodel-one-contractor">
        <div className="remodel-contractor-image remodel-contractor-interior"><img src="/assets/residential-remodeling-interior.png" alt="Finished open-plan kitchen and living room renovation" /></div>
        <div className="remodel-contractor-copy">
          <p className="eyebrow">THE SWIFT ADVANTAGE</p>
          <h2>One Contractor Keeps Every Detail Connected.</h2>
          <p>A successful remodel depends on more than good-looking finishes. The work behind them needs to happen in the right order, under a clear scope and with consistent communication.</p>
          <ul>
            <li><span>01</span><div><strong>Fewer handoffs</strong><p>One team stays responsible for the full remodeling scope.</p></div></li>
            <li><span>02</span><div><strong>Clearer communication</strong><p>You know who to call when decisions or questions come up.</p></div></li>
            <li><span>03</span><div><strong>Better coordination</strong><p>Trade work and finish details follow one connected schedule.</p></div></li>
          </ul>
        </div>
      </section>

      <section className="remodel-process" id="remodel-process">
        <div className="remodel-process-heading">
          <p className="eyebrow">HOW IT WORKS</p>
          <h2>A Clear Remodeling Plan From Walkthrough to Final Details.</h2>
        </div>
        <div className="remodel-process-grid">
          <article><span>01</span><h3>Walk the Space</h3><p>We discuss what is not working, what you want to change and the priorities for the finished space.</p></article>
          <article><span>02</span><h3>Define the Scope</h3><p>You receive a written proposal that outlines the planned remodeling work before scheduling.</p></article>
          <article><span>03</span><h3>Coordinate the Build</h3><p>Swift manages the project sequence, trade work and communication as the renovation moves forward.</p></article>
          <article><span>04</span><h3>Review the Finish</h3><p>We walk the completed project together and address the final details before wrapping up.</p></article>
        </div>
      </section>

      <section className="remodel-review">
        <div className="remodel-review-quote">
          <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
          <blockquote>“Swift kept the project organized, communicated clearly and made the entire renovation feel manageable. The finished space looks better than we imagined.”</blockquote>
          <p><strong>Melissa Carter</strong><span>Spring Hill homeowner • Google Review</span></p>
        </div>
        <div className="remodel-review-cta">
          <p className="eyebrow">READY TO TALK?</p>
          <h2>Bring Your Remodeling Ideas to the Walkthrough.</h2>
          <a className="button remodel-primary" href="#remodel-estimate">Request a free estimate</a>
        </div>
      </section>

      <section className="remodel-faq">
        <div className="remodel-faq-heading">
          <p className="eyebrow">REMODELING QUESTIONS</p>
          <h2>What Homeowners Ask Before Starting a Renovation.</h2>
          <p>Clear expectations make it easier to compare contractors and prepare for the project ahead.</p>
        </div>
        <div className="remodel-faq-list">
          {remodelingFaqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <article className={isOpen ? "open" : ""} key={faq.question}>
                <button type="button" aria-expanded={isOpen} onClick={() => setOpenFaq(isOpen ? -1 : index)}>
                  <span>{faq.question}</span><b aria-hidden="true">{isOpen ? "×" : "+"}</b>
                </button>
                <div hidden={!isOpen}><p>{faq.answer}</p></div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="remodel-estimate" id="remodel-estimate">
        <div className="remodel-estimate-copy">
          <p className="eyebrow">FREE REMODELING ESTIMATE</p>
          <h2>Let’s Talk About the Space You Want to Change.</h2>
          <p>Tell us what you are planning. Swift serves homeowners throughout Hernando, Citrus and Pasco Counties.</p>
          <div className="remodel-estimate-points"><span>Free, no-obligation estimate</span><span>Written, itemized proposal</span><span>Licensed and insured contractor</span></div>
          <p className="remodel-estimate-phone">Prefer to call?<a href="tel:3527017458">(352) 701-7458</a></p>
        </div>
        <form className="remodel-estimate-form" onSubmit={submitEstimate}>
          <div className="remodel-form-row"><label>Name<input id="remodel-lead-name" name="name" placeholder="Your name" required /></label><label>Phone<input name="phone" placeholder="(000) 000-0000" type="tel" required /></label></div>
          <div className="remodel-form-row"><label>Email<input name="email" placeholder="you@email.com" type="email" /></label><label>City or ZIP<input name="city" placeholder="Spring Hill" value={projectZip} onChange={(event) => setProjectZip(event.target.value)} required /></label></div>
          <div className="remodel-form-row"><label>What would you like to remodel?<select name="project" value={project} onChange={(event) => setProject(event.target.value)} required><option value="" disabled>Select your project</option><option>Bathroom remodeling</option><option>Kitchen remodeling</option><option>Whole-home renovation</option><option>Flooring or carpentry</option><option>Other remodeling project</option></select></label><label>Ideal Timing<select name="timing" value={timing} onChange={(event) => setTiming(event.target.value)} required><option value="" disabled>Select timing</option><option>As soon as possible</option><option>Within 1–3 months</option><option>Within 3–6 months</option><option>Just researching</option></select></label></div>
          <label>Project details<textarea name="details" placeholder="Tell us about the space, the changes you are considering and your ideal timing." /></label>
          <button className="button remodel-primary" type="submit">{submitted ? "Thank You. We’ll Be in Touch." : "Request My Free Estimate"}</button>
          <small>Your information is only used to respond to your project request.</small>
        </form>
      </section>

      <footer className="site-footer remodel-footer">
        <div className="footer-main">
          <div className="footer-brand"><img src="/assets/swift-logo.png" alt="Swift Construction and Painting, LLC" /><p>Licensed and insured building contractor<br />serving Hernando, Citrus and Pasco Counties<br />since 2003.</p></div>
          <div className="footer-column"><h3>Site</h3><a href="/">Home</a><a href="/#services">Services</a><a href="/gallery">Portfolio</a><a href="/about">About</a><a href="#remodel-estimate">Contact</a></div>
          <div className="footer-column"><h3>Remodeling</h3><a href="#remodeling-services">Bathrooms</a><a href="#remodeling-services">Kitchens</a><a href="#remodeling-services">Whole-Home</a><a href="#remodel-process">Our Process</a></div>
          <div className="footer-contact"><h3>Contact</h3><a className="footer-phone" href="tel:3527017458">(352) 701-7458</a><a href="mailto:swiftconstruction.william@gmail.com">swiftconstruction.william@gmail.com</a><div><a href="/gallery">Project Gallery</a><a href="/contact">Free Estimate</a></div></div>
        </div>
        <div className="footer-bottom"><span>© 2026 SWIFT CONSTRUCTION AND PAINTING, LLC</span><span>“WHEN QUALITY MATTERS”</span></div>
      </footer>
    </main>
  );
}
