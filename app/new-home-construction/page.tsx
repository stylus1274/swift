"use client";

import { FormEvent, useState } from "react";
import SiteHeader from "../../components/SiteHeader";

import SiteFooter from "@/components/SiteFooter";
const buildServices = [
  { number: "01", title: "Lot & Plan Review", copy: "We discuss your lot, plans, priorities and practical considerations before the construction scope is finalized." },
  { number: "02", title: "Permits & Preparation", copy: "Required permitting, site preparation and early project coordination are organized before vertical construction begins." },
  { number: "03", title: "Construction Management", copy: "Swift coordinates the build sequence, trade work, inspections and communication under one connected project plan." },
  { number: "04", title: "Finishes & Walkthrough", copy: "Interior and exterior details come together before a final walkthrough and project handoff." },
];

const buildFaqs = [
  { question: "Can Swift Build on a Lot I Already Own?", answer: "Yes. If you already own a lot, Swift can review the property, your goals and the information needed to evaluate the next steps for construction." },
  { question: "Can You Help If I Am Still Looking for Land?", answer: "Swift can discuss practical construction considerations to keep in mind while evaluating a potential lot. A formal site review should happen before plans and pricing are finalized." },
  { question: "Do You Handle Permits and Inspections?", answer: "Swift coordinates the applicable permitting and inspection process for the approved construction scope." },
  { question: "Will I Receive a Written Construction Proposal?", answer: "Yes. The proposal documents the agreed project scope and included work so expectations are clear before construction begins." },
  { question: "Where Does Swift Build New Homes?", answer: "Swift serves communities throughout Hernando, Citrus and Pasco Counties. Project availability depends on the property, plans and current construction schedule." },
];

export default function NewHomeConstructionPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [lotStatus, setLotStatus] = useState("");
  const [homeSize, setHomeSize] = useState("");
  const [buildZip, setBuildZip] = useState("");
  const [timing, setTiming] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function continueEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    document.getElementById("build-estimate")?.scrollIntoView({ behavior: "smooth" });
    window.setTimeout(() => document.getElementById("build-lead-name")?.focus(), 550);
  }

  function submitEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="build-page">
      <SiteHeader active="services" contactHref="#build-estimate" />

      <section className="build-hero">
        <div className="build-hero-copy">
          <p className="eyebrow">NEW HOME CONSTRUCTION • FLORIDA NATURE COAST</p>
          <h1>Build a Home That Fits the Way You Live.</h1>
          <p>One experienced contractor to coordinate your new home from early planning and site preparation through construction, finishes and final walkthrough.</p>
          <div className="build-hero-actions">
            <a className="button build-primary" href="#build-quick-lot">Plan Your New Home</a>
            <a className="build-phone" href="tel:3527017458"><small>OR CALL SWIFT</small>(352) 701-7458</a>
          </div>
          <div className="build-hero-proof"><span>Licensed &amp; insured • CBC1260893</span><span>Serving local homeowners since 2003</span><span>Written project proposals</span></div>
        </div>
        <div className="build-hero-visual">
          <img src="/assets/new-home-construction-hero.png" alt="Newly completed custom Florida home" />
        </div>
      </section>

      <form className="build-quick-form" onSubmit={continueEstimate}>
        <div className="build-quick-heading">
          <p className="eyebrow">START YOUR PROJECT</p>
          <h2>What Are You Planning?</h2>
        </div>
        <label htmlFor="build-quick-lot">Lot Status<select id="build-quick-lot" value={lotStatus} onChange={(event) => setLotStatus(event.target.value)} required><option value="" disabled>Select one</option><option>I own a lot</option><option>I am under contract</option><option>I am looking for land</option><option>I need guidance</option></select></label>
        <label>Home Size<select value={homeSize} onChange={(event) => setHomeSize(event.target.value)} required><option value="" disabled>Select size</option><option>Under 1,800 sq. ft.</option><option>1,800–2,500 sq. ft.</option><option>2,500–3,500 sq. ft.</option><option>Over 3,500 sq. ft.</option><option>Not sure yet</option></select></label>
        <label>Build ZIP<input inputMode="numeric" placeholder="34609" value={buildZip} onChange={(event) => setBuildZip(event.target.value)} required /></label>
        <label>Ideal Start<select value={timing} onChange={(event) => setTiming(event.target.value)} required><option value="" disabled>Select timing</option><option>Within 3 months</option><option>Within 3–6 months</option><option>Within 6–12 months</option><option>More than 12 months</option><option>Just researching</option></select></label>
        <button type="submit">Continue My Project Request <span aria-hidden="true">→</span></button>
      </form>

      <section className="build-scope" id="build-scope">
        <div className="build-section-heading"><p className="eyebrow">WHAT SWIFT MANAGES</p><h2>Every Phase Connected Under One Construction Plan.</h2><p>New-home construction has hundreds of decisions and dependencies. Swift keeps the scope, schedule and communication moving in the same direction.</p></div>
        <div className="build-scope-grid">
          {buildServices.map((service) => <article key={service.number}><span>{service.number}</span><h3>{service.title}</h3><p>{service.copy}</p><a href="#build-estimate">Discuss Your Build <b>→</b></a></article>)}
        </div>
      </section>

      <section className="build-management">
        <div className="build-management-image"><img src="/assets/new-home-framing.png" alt="Florida home under construction at the framing stage" /></div>
        <div className="build-management-copy">
          <p className="eyebrow">BUILT WITH ACCOUNTABILITY</p>
          <h2>One Point of Responsibility From the Ground Up.</h2>
          <p>A new home should not leave you coordinating a maze of separate contractors. Swift manages the work as one connected build, with clear communication at every major stage.</p>
          <ul>
            <li><span>01</span><div><strong>Clear Scope</strong><p>Project expectations are documented before construction begins.</p></div></li>
            <li><span>02</span><div><strong>Coordinated Trades</strong><p>The right work happens in the right sequence throughout the build.</p></div></li>
            <li><span>03</span><div><strong>Consistent Communication</strong><p>You have one contractor responsible for the overall project.</p></div></li>
          </ul>
        </div>
      </section>

      <section className="build-gallery">
        <div className="build-gallery-heading"><p className="eyebrow">FROM STRUCTURE TO FINISH</p><h2>A Home Built for Florida and Finished for You.</h2></div>
        <div className="build-gallery-grid">
          <article className="build-gallery-large"><img src="/assets/new-home-construction-hero.png" alt="Completed Florida custom home exterior" /><div><span>COMPLETED HOME</span><h3>Designed Around Daily Life</h3></div></article>
          <article><img src="/assets/new-home-framing.png" alt="Organized home framing project" /><div><span>CONSTRUCTION</span><h3>Managed From the Structure Up</h3></div></article>
          <article><img src="/assets/new-home-exterior.jpg" alt="Florida home exterior built for changing weather" /><div><span>FLORIDA PERFORMANCE</span><h3>Planned for the Local Climate</h3></div></article>
        </div>
      </section>

      <section className="build-process" id="build-process">
        <div className="build-process-heading"><p className="eyebrow">THE BUILDING PROCESS</p><h2>From Property Questions to the Keys in Your Hand.</h2></div>
        <div className="build-process-grid">
          <article><span>01</span><h3>Start With the Property</h3><p>We discuss your lot, location, goals and the information needed to evaluate the project.</p></article>
          <article><span>02</span><h3>Define the Home</h3><p>Plans, priorities, finishes and practical requirements become a clear construction scope.</p></article>
          <article><span>03</span><h3>Prepare to Build</h3><p>Permits, site preparation, scheduling and early coordination are organized before construction.</p></article>
          <article><span>04</span><h3>Manage Construction</h3><p>Swift coordinates the build sequence, inspections, trades and communication as the home takes shape.</p></article>
          <article><span>05</span><h3>Complete the Walkthrough</h3><p>We review the finished home together and address final project details before handoff.</p></article>
        </div>
      </section>

      <section className="build-cta">
        <div><p className="eyebrow">START THE CONVERSATION</p><h2>Have a Lot, a Plan or Just an Early Idea?</h2><p>Tell Swift where you are in the process. We will help identify the most useful next step.</p></div>
        <div><a className="button build-primary" href="#build-estimate">Request a Project Conversation</a><a href="tel:3527017458">Call (352) 701-7458</a></div>
      </section>

      <section className="build-faq">
        <div className="build-faq-heading"><p className="eyebrow">NEW HOME QUESTIONS</p><h2>What Homeowners Ask Before Building.</h2><p>Clear answers early can prevent expensive surprises later.</p></div>
        <div className="build-faq-list">
          {buildFaqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return <article className={isOpen ? "open" : ""} key={faq.question}><button type="button" aria-expanded={isOpen} onClick={() => setOpenFaq(isOpen ? -1 : index)}><span>{faq.question}</span><b aria-hidden="true">{isOpen ? "×" : "+"}</b></button><div hidden={!isOpen}><p>{faq.answer}</p></div></article>;
          })}
        </div>
      </section>

      <section className="build-estimate" id="build-estimate">
        <div className="build-estimate-copy">
          <p className="eyebrow">NEW HOME PROJECT REQUEST</p>
          <h2>Tell Us What You Are Planning to Build.</h2>
          <p>Share what you know so far. Swift serves new-home clients throughout Hernando, Citrus and Pasco Counties.</p>
          <div className="build-estimate-points"><span>Free initial project conversation</span><span>Written construction proposal</span><span>Licensed and insured contractor</span></div>
          <p className="build-estimate-phone">Prefer to call?<a href="tel:3527017458">(352) 701-7458</a></p>
        </div>
        <form className="build-estimate-form" onSubmit={submitEstimate}>
          <div className="build-form-row"><label>Name<input id="build-lead-name" name="name" placeholder="Your name" required /></label><label>Phone<input name="phone" placeholder="(000) 000-0000" type="tel" required /></label></div>
          <div className="build-form-row"><label>Email<input name="email" placeholder="you@email.com" type="email" /></label><label>Build City or ZIP<input name="zip" placeholder="Spring Hill" value={buildZip} onChange={(event) => setBuildZip(event.target.value)} required /></label></div>
          <div className="build-form-row"><label>Lot Status<select value={lotStatus} onChange={(event) => setLotStatus(event.target.value)} required><option value="" disabled>Select one</option><option>I own a lot</option><option>I am under contract</option><option>I am looking for land</option><option>I need guidance</option></select></label><label>Approximate Home Size<select value={homeSize} onChange={(event) => setHomeSize(event.target.value)} required><option value="" disabled>Select size</option><option>Under 1,800 sq. ft.</option><option>1,800–2,500 sq. ft.</option><option>2,500–3,500 sq. ft.</option><option>Over 3,500 sq. ft.</option><option>Not sure yet</option></select></label></div>
          <label>Ideal Start<select value={timing} onChange={(event) => setTiming(event.target.value)} required><option value="" disabled>Select timing</option><option>Within 3 months</option><option>Within 3–6 months</option><option>Within 6–12 months</option><option>More than 12 months</option><option>Just researching</option></select></label>
          <label>Project Details<textarea name="details" placeholder="Tell us about your plans, lot, priorities and any decisions you have already made." /></label>
          <button className="button build-primary" type="submit">{submitted ? "Thank You. We’ll Be in Touch." : "Request My Project Conversation"}</button>
          <small>Your information is only used to respond to your project request.</small>
        </form>
      </section>

      <SiteFooter />
    </main>
  );
}
