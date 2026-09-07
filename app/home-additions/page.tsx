"use client";

import { FormEvent, useState } from "react";
import SiteHeader from "../../components/SiteHeader";

const additionTypes = [
  {
    number: "01",
    title: "Room Additions",
    copy: "Add a family room, home office, bedroom or flexible living space that connects naturally to the existing home.",
  },
  {
    number: "02",
    title: "Primary Suite Additions",
    copy: "Create a private bedroom and bathroom suite with the storage, comfort and layout your current floor plan is missing.",
  },
  {
    number: "03",
    title: "In-Law Suites",
    copy: "Plan a connected living area for aging parents, adult children or long-term guests with greater privacy and function.",
  },
  {
    number: "04",
    title: "Garage & Lanai Conversions",
    copy: "Turn underused square footage into conditioned living space with coordinated structural, electrical and finish work.",
  },
];

const additionFaqs = [
  {
    question: "How Do I Know Whether My Property Can Support an Addition?",
    answer: "The first step is reviewing the property, available space, setbacks and the way the proposed addition would connect to the existing home. Swift can discuss these considerations during the initial walkthrough.",
  },
  {
    question: "Do Home Additions Require Permits?",
    answer: "Most structural additions require permits and inspections. The exact requirements depend on the scope and local jurisdiction. Swift can coordinate the applicable permitting process for the approved project.",
  },
  {
    question: "Can the New Addition Match My Existing Home?",
    answer: "That is the goal. Rooflines, exterior materials, window proportions and interior finishes are considered together so the addition feels connected rather than attached as an afterthought.",
  },
  {
    question: "How Long Does a Room Addition Take?",
    answer: "Timing depends on design decisions, engineering, permitting, material availability and project size. Swift establishes the expected sequence and schedule after the scope is clearly defined.",
  },
  {
    question: "What Areas Do You Serve?",
    answer: "Swift serves Spring Hill, Brooksville, Weeki Wachee, Hernando Beach, Ridge Manor and communities throughout Hernando, Citrus and Pasco Counties.",
  },
];

export default function HomeAdditionsPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [project, setProject] = useState("");
  const [projectZip, setProjectZip] = useState("");
  const [timing, setTiming] = useState("");

  function submitQuickEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    document.getElementById("addition-estimate")?.scrollIntoView({ behavior: "smooth" });
    window.setTimeout(() => document.getElementById("addition-lead-name")?.focus(), 550);
  }

  function submitEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Home Additions and Room Additions",
    provider: {
      "@type": "GeneralContractor",
      name: "Swift Construction & Painting, LLC",
      telephone: "+1-352-701-7458",
    },
    areaServed: ["Hernando County", "Citrus County", "Pasco County"],
    description: "Home additions, room additions, primary suite additions and living-space conversions for Florida homeowners.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: additionFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main className="remodel-page additions-page">
      <SiteHeader active="services" contactHref="#addition-estimate" />

      <section className="remodel-hero additions-hero">
        <div className="remodel-hero-copy">
          <p className="eyebrow">HOME ADDITIONS • SPRING HILL, FL</p>
          <h1>More Room Without Leaving the Home You Love.</h1>
          <p>Plan and build a home addition that gives your family more space while preserving the character and flow of your existing home.</p>
          <div className="remodel-hero-actions">
            <a className="button remodel-primary" href="#addition-quick-project">Plan My Home Addition</a>
            <a className="remodel-phone" href="tel:3527017458"><small>OR CALL SWIFT</small>(352) 701-7458</a>
          </div>
          <div className="remodel-hero-proof">
            <span>Licensed &amp; insured • CBC1260893</span>
            <span>Serving local homeowners since 2003</span>
            <span>Written, itemized proposals</span>
          </div>
        </div>
        <div className="remodel-hero-visual">
          <img className="remodel-hero-main additions-hero-image" src="/assets/home-additions-hero.png" alt="Finished home addition on a Florida stucco house" />
        </div>
      </section>

      <form className="remodel-quick-form additions-quick-form" onSubmit={submitQuickEstimate}>
        <div className="remodel-quick-heading">
          <p className="eyebrow">START YOUR ESTIMATE</p>
          <h2>What Would You Like to Add?</h2>
        </div>
        <label htmlFor="addition-quick-project">Addition Type<select id="addition-quick-project" name="project" value={project} onChange={(event) => setProject(event.target.value)} required><option value="" disabled>Select addition</option><option>Room addition</option><option>Primary suite addition</option><option>In-law suite</option><option>Garage or lanai conversion</option><option>Other addition</option></select></label>
        <label htmlFor="addition-quick-zip">Project ZIP<input id="addition-quick-zip" name="zip" placeholder="34609" inputMode="numeric" value={projectZip} onChange={(event) => setProjectZip(event.target.value)} required /></label>
        <label htmlFor="addition-quick-timing">Ideal Timing<select id="addition-quick-timing" name="timing" value={timing} onChange={(event) => setTiming(event.target.value)} required><option value="" disabled>Select timing</option><option>As soon as possible</option><option>Within 1 to 3 months</option><option>Within 3 to 6 months</option><option>Just researching</option></select></label>
        <button type="submit">Continue My Estimate<span aria-hidden="true">→</span></button>
      </form>

      <section className="remodel-services" id="addition-types">
        <div className="remodel-section-heading">
          <p className="eyebrow">HOME ADDITION OPTIONS</p>
          <h2>Create the Space Your Current Floor Plan Is Missing.</h2>
        </div>
        <div className="remodel-service-grid">
          {additionTypes.map((type) => (
            <article key={type.number}>
              <span>{type.number}</span>
              <h3>{type.title}</h3>
              <p>{type.copy}</p>
              <a href="#addition-estimate">Discuss Your Addition <b>→</b></a>
            </article>
          ))}
        </div>
      </section>

      <section className="additions-integration">
        <div className="additions-integration-copy">
          <p className="eyebrow">BUILT TO BELONG</p>
          <h2>Your Addition Should Feel Like It Was Always Part of the Home.</h2>
          <p>Adding square footage is only part of the job. The structure, utilities, exterior and interior transitions all need to work together. Swift keeps those decisions connected under one project plan.</p>
          <a className="button remodel-primary" href="#addition-estimate">Discuss My Property</a>
        </div>
        <div className="additions-integration-grid">
          <article><span>01</span><h3>Structure &amp; Roofline</h3><p>Plan the foundation, framing and roof connection around the existing home.</p></article>
          <article><span>02</span><h3>Electrical &amp; Comfort</h3><p>Coordinate lighting, outlets, cooling and other systems for everyday use.</p></article>
          <article><span>03</span><h3>Exterior Continuity</h3><p>Align materials, proportions and details with the home you already own.</p></article>
          <article><span>04</span><h3>Interior Flow</h3><p>Create practical transitions that make the new space feel naturally connected.</p></article>
        </div>
      </section>

      <section className="remodel-process" id="addition-process">
        <div className="remodel-process-heading">
          <p className="eyebrow">HOW IT WORKS</p>
          <h2>A Clear Path From the First Walkthrough to the Finished Addition.</h2>
        </div>
        <div className="remodel-process-grid">
          <article><span>01</span><h3>Walk the Property</h3><p>We discuss the space you need, review the home and identify practical considerations for the addition.</p></article>
          <article><span>02</span><h3>Define the Scope</h3><p>The proposed layout, construction requirements and finish expectations are organized into a clear project scope.</p></article>
          <article><span>03</span><h3>Plan &amp; Build</h3><p>Swift coordinates the approved work, applicable permitting, schedule and construction sequence.</p></article>
          <article><span>04</span><h3>Complete the Walkthrough</h3><p>We review the finished addition together and address final details before the project is closed.</p></article>
        </div>
      </section>

      <section className="additions-proof-cta">
        <div className="additions-proof-copy">
          <p className="eyebrow">A LOCAL GENERAL CONTRACTOR</p>
          <h2>One Point of Contact From Planning Through Completion.</h2>
          <p>Swift Construction &amp; Painting has served local homeowners since 2003. Your addition is managed under one coordinated scope by a licensed and insured Florida contractor.</p>
        </div>
        <div className="additions-proof-stats" aria-label="Swift contractor qualifications">
          <div><strong>20+</strong><span>Years Serving Local Homeowners</span></div>
          <div><strong>3</strong><span>Counties Across Florida’s Nature Coast</span></div>
          <div><strong>CBC</strong><span>Florida License CBC1260893</span></div>
        </div>
        <a className="button remodel-primary" href="#addition-estimate">Request a Free Estimate</a>
      </section>

      <section className="remodel-faq additions-faq">
        <div className="remodel-faq-heading">
          <p className="eyebrow">HOME ADDITION QUESTIONS</p>
          <h2>What Homeowners Ask Before Adding More Space.</h2>
          <p>Clear answers help you evaluate the property, define the scope and prepare for a major improvement.</p>
        </div>
        <div className="remodel-faq-list">
          {additionFaqs.map((faq, index) => {
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

      <section className="remodel-estimate" id="addition-estimate">
        <div className="remodel-estimate-copy">
          <p className="eyebrow">FREE HOME ADDITION ESTIMATE</p>
          <h2>Tell Us What More Space Would Change for Your Family.</h2>
          <p>Share the kind of addition you are considering and where the property is located. Swift serves homeowners throughout Hernando, Citrus and Pasco Counties.</p>
          <div className="remodel-estimate-points"><span>Free, no-obligation estimate</span><span>Written, itemized proposal</span><span>Licensed and insured contractor</span></div>
          <p className="remodel-estimate-phone">Prefer to call?<a href="tel:3527017458">(352) 701-7458</a></p>
        </div>
        <form className="remodel-estimate-form" onSubmit={submitEstimate}>
          <div className="remodel-form-row"><label>Name<input id="addition-lead-name" name="name" placeholder="Your name" required /></label><label>Phone<input name="phone" placeholder="(000) 000-0000" type="tel" required /></label></div>
          <div className="remodel-form-row"><label>Email<input name="email" placeholder="you@email.com" type="email" /></label><label>Project ZIP<input name="zip" placeholder="34609" value={projectZip} onChange={(event) => setProjectZip(event.target.value)} required /></label></div>
          <div className="remodel-form-row"><label>What would you like to add?<select name="project" value={project} onChange={(event) => setProject(event.target.value)} required><option value="" disabled>Select your project</option><option>Room addition</option><option>Primary suite addition</option><option>In-law suite</option><option>Garage or lanai conversion</option><option>Other addition</option></select></label><label>Ideal Timing<select name="timing" value={timing} onChange={(event) => setTiming(event.target.value)} required><option value="" disabled>Select timing</option><option>As soon as possible</option><option>Within 1 to 3 months</option><option>Within 3 to 6 months</option><option>Just researching</option></select></label></div>
          <label>What do you need the new space to do?<textarea name="details" placeholder="Tell us who will use the space, the rooms you are considering and any priorities for the finished addition." /></label>
          <button className="button remodel-primary" type="submit">{submitted ? "Thank You. We’ll Be in Touch." : "Request My Free Estimate"}</button>
          <small>Your information is only used to respond to your project request.</small>
        </form>
      </section>

      <footer className="site-footer remodel-footer">
        <div className="footer-main">
          <div className="footer-brand"><img src="/assets/swift-logo.png" alt="Swift Construction and Painting, LLC" /><p>Licensed and insured general contractor<br />serving Hernando, Citrus and Pasco Counties<br />since 2003.</p></div>
          <div className="footer-column"><h3>Site</h3><a href="/">Home</a><a href="/#services">Services</a><a href="/gallery">Portfolio</a><a href="/about">About</a><a href="#addition-estimate">Contact</a></div>
          <div className="footer-column"><h3>Additions</h3><a href="#addition-types">Room Additions</a><a href="#addition-types">Primary Suites</a><a href="#addition-types">In-Law Suites</a><a href="#addition-process">Our Process</a></div>
          <div className="footer-contact"><h3>Contact</h3><a className="footer-phone" href="tel:3527017458">(352) 701-7458</a><a href="mailto:swiftconstruction.william@gmail.com">swiftconstruction.william@gmail.com</a><div><a href="/gallery">Project Gallery</a><a href="/contact">Free Estimate</a></div></div>
        </div>
        <div className="footer-bottom"><span>© 2026 SWIFT CONSTRUCTION AND PAINTING, LLC</span><span>“WHEN QUALITY MATTERS”</span></div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
