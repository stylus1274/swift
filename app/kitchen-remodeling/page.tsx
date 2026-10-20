"use client";
import ProcessSection from "../../components/ProcessSection";


import FaqSection from "@/components/FaqSection";

import { FormEvent, useState } from "react";
import SiteHeader from "../../components/SiteHeader";

import SiteFooter from "@/components/SiteFooter";
import { submitLeadForm } from "@/lib/submitLead";
import LeadProtection from "@/components/LeadProtection";
import LeadForm from "@/components/LeadForm";
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

  async function submitEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await submitLeadForm(event.currentTarget, "Kitchen Remodeling Estimate");
    setSubmitted(true);
  }

  return (
    <main className="remodel-page kitchen-page">
      <SiteHeader active="services" contactHref="#kitchen-estimate" />

      <section className="remodel-hero kitchen-hero">
        <div className="remodel-hero-copy">
          <p className="eyebrow"><span>KITCHEN REMODELING</span><span className="service-hero-county"><span className="service-hero-diamond" aria-hidden="true" />HERNANDO</span><span className="service-hero-county"><span className="service-hero-diamond" aria-hidden="true" />CITRUS</span><span className="service-hero-county"><span className="service-hero-diamond" aria-hidden="true" />PASCO</span></p>
          <h1>Kitchen Remodeling That Works Better Every Day.</h1>
          <p>One experienced contractor to coordinate the layout, construction and finish work that turns an outdated kitchen into a room built around your household.</p>
          <div className="remodel-hero-actions">
            <a className="button cta-primary" href="#kitchen-quick-scope">Plan your kitchen remodel</a>
            <a className="remodel-phone" href="tel:3527017458"><small>OR CALL SWIFT</small>(352) 701-7458</a>
          </div>

        </div>
        <div className="remodel-hero-visual">
          <img className="remodel-hero-main kitchen-hero-image" src="/assets/kitchen-remodeling-hero.png" alt="Completed kitchen remodel with white cabinetry and a light wood island" />
        </div>
      </section>

      <div className="service-hero-estimate-band">
      <LeadForm className="remodel-quick-form kitchen-quick-form" onSubmit={continueEstimate} step>
          <LeadProtection />
        <div className="remodel-quick-heading">
          <p className="eyebrow">START YOUR ESTIMATE</p>
          <h2>What Are You Planning?</h2>
        </div>
        <label htmlFor="kitchen-quick-scope"><span className="form-label-text">Project Scope <span className="form-requirement">(required)</span></span><select id="kitchen-quick-scope" value={projectScope} onChange={(event) => setProjectScope(event.target.value)} required><option value="" disabled>Select scope</option><option>Full kitchen remodel</option><option>Cabinets and counters</option><option>Layout changes</option><option>Flooring, lighting and finishes</option><option>Not sure yet</option></select></label>
        <label htmlFor="kitchen-quick-priority"><span className="form-label-text">Main Priority <span className="form-requirement">(required)</span></span><select id="kitchen-quick-priority" value={mainPriority} onChange={(event) => setMainPriority(event.target.value)} required><option value="" disabled>Select priority</option><option>Better layout</option><option>More storage</option><option>Updated appearance</option><option>Durability and easier upkeep</option><option>Preparing to sell</option></select></label>
        <label htmlFor="kitchen-quick-zip"><span className="form-label-text">Project ZIP <span className="form-requirement">(required)</span></span><input id="kitchen-quick-zip" inputMode="numeric" placeholder="34609" value={projectZip} onChange={(event) => setProjectZip(event.target.value)} required /></label>
        <label htmlFor="kitchen-quick-timing"><span className="form-label-text">Ideal Timing <span className="form-requirement">(required)</span></span><select id="kitchen-quick-timing" value={timing} onChange={(event) => setTiming(event.target.value)} required><option value="" disabled>Select timing</option><option>As soon as possible</option><option>Within 1 to 3 months</option><option>Within 3 to 6 months</option><option>Planning ahead</option></select></label>
        <button type="submit">Continue my estimate <span aria-hidden="true">→</span></button>
      </LeadForm>
        <div className="service-ticker service-hero-trust" aria-label="Swift contractor qualifications">
          <span>Licensed &amp; Insured</span>
          <b aria-hidden="true">◆</b>
          <span>Written, itemized proposals</span>
          <b aria-hidden="true">◆</b>
          <span>One contractor from start to finish</span>
        </div>
      </div>

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
              <a className="text-action" href="#kitchen-estimate"><span className="text-action-label">Discuss Your Kitchen</span><span className="text-action-arrow" aria-hidden="true">→</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="commercial-coordination kitchen-coordination">
        <div className="commercial-coordination-copy">
          <p className="eyebrow">ONE CONTRACTOR, ONE PROJECT PLAN</p>
          <h2>A Better Kitchen Depends on More Than New Cabinets.</h2>
          <p>Layout, plumbing, electrical work, surfaces and finishes affect one another. Swift coordinates those moving parts so the completed room feels intentional rather than pieced together.</p>
          <a className="button cta-primary" href="#kitchen-estimate">Schedule a kitchen walkthrough</a>
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

      <ProcessSection id="kitchen-process" eyebrow="HOW IT WORKS" title="From the First Walkthrough to the Finished Kitchen." steps={[
  {
    "title": "Walk the Kitchen",
    "description": "We review the room, your priorities, current problems and the changes you are considering."
  },
  {
    "title": "Define the Scope",
    "description": "The layout, materials and included construction work become a clear written proposal."
  },
  {
    "title": "Coordinate the Remodel",
    "description": "Swift manages scheduling, trade work and communication as the room comes together."
  },
  {
    "title": "Complete the Walkthrough",
    "description": "We review the finished kitchen with you and address final project details before closeout."
  }
]} />

      <section className="commercial-cta kitchen-cta">
        <div><p className="eyebrow">READY TO PLAN?</p><h2>Show Us What Is Not Working in Your Current Kitchen.</h2></div>
        <div><a className="button cta-primary" href="#kitchen-estimate">Request a kitchen estimate</a><a href="tel:3527017458">Call (352) 701-7458</a></div>
      </section>

      <FaqSection
        eyebrow={<>KITCHEN REMODELING QUESTIONS</>}
        title={<>What Homeowners Ask Before the Work Begins.</>}
        description={<>Clear answers make it easier to plan the project and choose the right contractor.</>}
        items={kitchenFaqs}
        estimateHref="#kitchen-estimate"
      />

      <section className="remodel-estimate" id="kitchen-estimate">
        <div className="remodel-estimate-copy">
          <p className="eyebrow">KITCHEN PROJECT REQUEST</p>
          <h2>Tell Us What You Want to Change About Your Kitchen.</h2>
          <p>Share the scope, priorities and timing you are considering. Swift serves homeowners throughout Hernando, Citrus and Pasco Counties.</p>
          <div className="remodel-estimate-points"><span>Free initial project conversation</span><span>Written remodeling proposal</span><span>Licensed and insured contractor</span></div>
          <p className="remodel-estimate-phone">Prefer to call?<a href="tel:3527017458">(352) 701-7458</a></p>
        </div>
        <LeadForm className="remodel-estimate-form" onSubmit={submitEstimate}>
          <LeadProtection />
          <div className="remodel-form-row"><label><span className="form-label-text">Name <span className="form-requirement">(required)</span></span><input id="kitchen-lead-name" name="name" autoComplete="name" maxLength={120} placeholder="Your name" required /></label><label><span className="form-label-text">Phone <span className="form-requirement">(required)</span></span><input name="phone" autoComplete="tel" placeholder="(000) 000-0000" type="tel" required /></label></div>
          <div className="remodel-form-row"><label><span className="form-label-text">Email <span className="form-requirement">(optional)</span></span><input name="email" autoComplete="email" placeholder="you@email.com" type="email" maxLength={254} /></label><label><span className="form-label-text">Project City or ZIP <span className="form-requirement">(required)</span></span><input name="location" placeholder="Spring Hill" value={projectZip} onChange={(event) => setProjectZip(event.target.value)} required /></label></div>
          <div className="remodel-form-row"><label><span className="form-label-text">Project Scope <span className="form-requirement">(required)</span></span><select value={projectScope} onChange={(event) => setProjectScope(event.target.value)} required><option value="" disabled>Select scope</option><option>Full kitchen remodel</option><option>Cabinets and counters</option><option>Layout changes</option><option>Flooring, lighting and finishes</option><option>Not sure yet</option></select></label><label><span className="form-label-text">Main Priority <span className="form-requirement">(required)</span></span><select value={mainPriority} onChange={(event) => setMainPriority(event.target.value)} required><option value="" disabled>Select priority</option><option>Better layout</option><option>More storage</option><option>Updated appearance</option><option>Durability and easier upkeep</option><option>Preparing to sell</option></select></label></div>
          <label><span className="form-label-text">Ideal Timing <span className="form-requirement">(required)</span></span><select value={timing} onChange={(event) => setTiming(event.target.value)} required><option value="" disabled>Select timing</option><option>As soon as possible</option><option>Within 1 to 3 months</option><option>Within 3 to 6 months</option><option>Planning ahead</option></select></label>
          <label><span className="form-label-text">Project Details <span className="form-requirement">(optional)</span></span><textarea name="details" placeholder="Tell us what is not working, what you want to change and any materials or layout ideas you already have." /></label>
          <button className="button cta-primary" type="submit">{submitted ? "Thank you. We’ll be in touch." : "Get my kitchen estimate"}</button>
          <small>Your information is only used to respond to your project request.</small>
        </LeadForm>
      </section>

      <SiteFooter />
    </main>
  );
}
