"use client";
import ProcessSection from "../../components/ProcessSection";


import FaqSection from "@/components/FaqSection";

import { FormEvent, useState } from "react";
import SiteHeader from "../../components/SiteHeader";

import SiteFooter from "@/components/SiteFooter";
import { submitLeadForm } from "@/lib/submitLead";
import LeadProtection from "@/components/LeadProtection";
import LeadForm from "@/components/LeadForm";
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

  async function submitEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await submitLeadForm(event.currentTarget, "New Home Construction Estimate");
    setSubmitted(true);
  }

  return (
    <main className="build-page">
      <SiteHeader active="services" contactHref="#build-estimate" />

      <section className="build-hero">
        <div className="build-hero-copy">
          <p className="eyebrow">CUSTOM HOME BUILDING • FLORIDA NATURE COAST</p>
          <h1>Custom Home Building for the Way You Live.</h1>
          <p>One experienced contractor to coordinate your new home from early planning and site preparation through construction, finishes and final walkthrough.</p>
          <div className="build-hero-actions">
            <a className="button cta-primary" href="#build-quick-lot">Plan your new home</a>
            <a className="build-phone" href="tel:3527017458"><small>OR CALL SWIFT</small>(352) 701-7458</a>
          </div>
          <div className="build-hero-proof"><span>Licensed &amp; insured • CBC1260893</span><span>Serving local homeowners since 2003</span><span>Written project proposals</span></div>
        </div>
        <div className="build-hero-visual">
          <img src="/assets/new-home-construction-hero.png" alt="Newly completed custom Florida home" />
        </div>
      </section>

      <LeadForm className="build-quick-form" onSubmit={continueEstimate} step>
          <LeadProtection />
        <div className="build-quick-heading">
          <p className="eyebrow">START YOUR PROJECT</p>
          <h2>What Are You Planning?</h2>
        </div>
        <label htmlFor="build-quick-lot"><span className="form-label-text">Lot Status <span className="form-requirement">(required)</span></span><select id="build-quick-lot" value={lotStatus} onChange={(event) => setLotStatus(event.target.value)} required><option value="" disabled>Select one</option><option>I own a lot</option><option>I am under contract</option><option>I am looking for land</option><option>I need guidance</option></select></label>
        <label><span className="form-label-text">Home Size <span className="form-requirement">(required)</span></span><select value={homeSize} onChange={(event) => setHomeSize(event.target.value)} required><option value="" disabled>Select size</option><option>Under 1,800 sq. ft.</option><option>1,800–2,500 sq. ft.</option><option>2,500–3,500 sq. ft.</option><option>Over 3,500 sq. ft.</option><option>Not sure yet</option></select></label>
        <label><span className="form-label-text">Build ZIP <span className="form-requirement">(required)</span></span><input inputMode="numeric" placeholder="34609" value={buildZip} onChange={(event) => setBuildZip(event.target.value)} required /></label>
        <label><span className="form-label-text">Ideal Start <span className="form-requirement">(required)</span></span><select value={timing} onChange={(event) => setTiming(event.target.value)} required><option value="" disabled>Select timing</option><option>Within 3 months</option><option>Within 3–6 months</option><option>Within 6–12 months</option><option>More than 12 months</option><option>Just researching</option></select></label>
        <button type="submit">Continue my estimate <span aria-hidden="true">→</span></button>
      </LeadForm>

      <section className="build-scope" id="build-scope">
        <div className="build-section-heading"><p className="eyebrow">WHAT SWIFT MANAGES</p><h2>Every Phase Connected Under One Construction Plan.</h2><p>New-home construction has hundreds of decisions and dependencies. Swift keeps the scope, schedule and communication moving in the same direction.</p></div>
        <div className="build-scope-grid">
          {buildServices.map((service) => <article key={service.number}><span>{service.number}</span><h3>{service.title}</h3><p>{service.copy}</p><a className="text-action" href="#build-estimate"><span className="text-action-label">Discuss Your Build</span><span className="text-action-arrow" aria-hidden="true">→</span></a></article>)}
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

      <ProcessSection id="build-process" eyebrow="THE BUILDING PROCESS" title="From Property Questions to the Keys in Your Hand." steps={[
  {
    "title": "Plan the Home",
    "description": "We review your lot, goals, plans, priorities, and practical requirements to define a clear construction scope."
  },
  {
    "title": "Prepare to Build",
    "description": "Permits, site preparation, scheduling, and early coordination are organized before construction begins."
  },
  {
    "title": "Build the Home",
    "description": "Swift coordinates the construction sequence, trades, inspections, and communication as your home takes shape."
  },
  {
    "title": "Complete the Final Walkthrough",
    "description": "We review the finished home with you, address final details, and prepare the project for handoff."
  }
]} />

      <section className="build-cta">
        <div><p className="eyebrow">START THE CONVERSATION</p><h2>Have a Lot, a Plan or Just an Early Idea?</h2><p>Tell Swift where you are in the process. We will help identify the most useful next step.</p></div>
        <div><a className="button cta-primary" href="#build-estimate">Request a project conversation</a><a href="tel:3527017458">Call (352) 701-7458</a></div>
      </section>

      <FaqSection
        eyebrow={<>NEW HOME QUESTIONS</>}
        title={<>What Homeowners Ask Before Building.</>}
        description={<>Clear answers early can prevent expensive surprises later.</>}
        items={buildFaqs}
        estimateHref="#build-estimate"
      />

      <section className="build-estimate" id="build-estimate">
        <div className="build-estimate-copy">
          <p className="eyebrow">NEW HOME PROJECT REQUEST</p>
          <h2>Tell Us What You Are Planning to Build.</h2>
          <p>Share what you know so far. Swift serves new-home clients throughout Hernando, Citrus and Pasco Counties.</p>
          <div className="build-estimate-points"><span>Free initial project conversation</span><span>Written construction proposal</span><span>Licensed and insured contractor</span></div>
          <p className="build-estimate-phone">Prefer to call?<a href="tel:3527017458">(352) 701-7458</a></p>
        </div>
        <LeadForm className="build-estimate-form" onSubmit={submitEstimate}>
          <LeadProtection />
          <div className="build-form-row"><label><span className="form-label-text">Name <span className="form-requirement">(required)</span></span><input id="build-lead-name" name="name" autoComplete="name" maxLength={120} placeholder="Your name" required /></label><label><span className="form-label-text">Phone <span className="form-requirement">(required)</span></span><input name="phone" autoComplete="tel" placeholder="(000) 000-0000" type="tel" required /></label></div>
          <div className="build-form-row"><label><span className="form-label-text">Email <span className="form-requirement">(optional)</span></span><input name="email" autoComplete="email" placeholder="you@email.com" type="email" maxLength={254} /></label><label><span className="form-label-text">Build City or ZIP <span className="form-requirement">(required)</span></span><input name="location" placeholder="Spring Hill" value={buildZip} onChange={(event) => setBuildZip(event.target.value)} required /></label></div>
          <div className="build-form-row"><label><span className="form-label-text">Lot Status <span className="form-requirement">(required)</span></span><select value={lotStatus} onChange={(event) => setLotStatus(event.target.value)} required><option value="" disabled>Select one</option><option>I own a lot</option><option>I am under contract</option><option>I am looking for land</option><option>I need guidance</option></select></label><label><span className="form-label-text">Approximate Home Size <span className="form-requirement">(required)</span></span><select value={homeSize} onChange={(event) => setHomeSize(event.target.value)} required><option value="" disabled>Select size</option><option>Under 1,800 sq. ft.</option><option>1,800–2,500 sq. ft.</option><option>2,500–3,500 sq. ft.</option><option>Over 3,500 sq. ft.</option><option>Not sure yet</option></select></label></div>
          <label><span className="form-label-text">Ideal Start <span className="form-requirement">(required)</span></span><select value={timing} onChange={(event) => setTiming(event.target.value)} required><option value="" disabled>Select timing</option><option>Within 3 months</option><option>Within 3–6 months</option><option>Within 6–12 months</option><option>More than 12 months</option><option>Just researching</option></select></label>
          <label><span className="form-label-text">Project Details <span className="form-requirement">(optional)</span></span><textarea name="details" placeholder="Tell us about your plans, lot, priorities and any decisions you have already made." /></label>
          <button className="button cta-primary" type="submit">{submitted ? "Thank you. We’ll be in touch." : "Get my project conversation"}</button>
          <small>Your information is only used to respond to your project request.</small>
        </LeadForm>
      </section>

      <SiteFooter />
    </main>
  );
}
