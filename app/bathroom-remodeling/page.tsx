"use client";

import FaqSection from "@/components/FaqSection";

import { FormEvent, useState } from "react";
import SiteHeader from "../../components/SiteHeader";

import SiteFooter from "@/components/SiteFooter";
import { submitLeadForm } from "@/lib/submitLead";
import LeadProtection from "@/components/LeadProtection";
import LeadForm from "@/components/LeadForm";
const bathroomServices = [
  { number: "01", title: "Full Bathroom Remodeling", copy: "A connected renovation plan for the shower or tub, vanity, flooring, lighting, storage and finish work." },
  { number: "02", title: "Walk-In Showers and Tub Conversions", copy: "Replace an underused tub or dated enclosure with a shower designed around comfort, access and easier upkeep." },
  { number: "03", title: "Vanities and Storage", copy: "Improve counter space, organization and everyday function with cabinetry selected for the room and household." },
  { number: "04", title: "Tile, Lighting and Finishes", copy: "Coordinate the surfaces, fixtures and details that make the bathroom feel brighter, cleaner and fully finished." },
];

const bathroomFaqs = [
  { question: "Can Swift Convert a Tub Into a Walk-In Shower?", answer: "Yes. Swift can evaluate the existing space, plumbing, access needs and finish options for a tub-to-shower conversion." },
  { question: "How Do You Address Waterproofing?", answer: "Waterproofing is planned as part of the shower and wet-area scope. The correct system depends on the structure, selected materials and approved project details." },
  { question: "Can You Manage the Entire Bathroom Remodel?", answer: "Yes. Swift can coordinate connected construction, plumbing, electrical, tile, cabinetry and finish work under one project plan." },
  { question: "Can We Stay in the Home During the Remodel?", answer: "Most homeowners remain in the home, especially when another bathroom is available. Swift will explain the expected work sequence and access limitations before the project begins." },
  { question: "Where Does Swift Remodel Bathrooms?", answer: "Swift serves homeowners throughout Hernando, Citrus and Pasco Counties. Project availability depends on the property, scope and current schedule." },
];

export default function BathroomRemodelingPage() {

  const [projectType, setProjectType] = useState("");
  const [mainPriority, setMainPriority] = useState("");
  const [projectZip, setProjectZip] = useState("");
  const [timing, setTiming] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function continueEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    document.getElementById("bathroom-estimate")?.scrollIntoView({ behavior: "smooth" });
    window.setTimeout(() => document.getElementById("bathroom-lead-name")?.focus(), 550);
  }

  async function submitEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await submitLeadForm(event.currentTarget, "Bathroom Remodeling Estimate");
    setSubmitted(true);
  }

  return (
    <main className="remodel-page bathroom-page">
      <SiteHeader active="services" contactHref="#bathroom-estimate" />

      <section className="remodel-hero bathroom-hero">
        <div className="remodel-hero-copy">
          <p className="eyebrow">BATHROOM REMODELING • FLORIDA NATURE COAST</p>
          <h1>A Bathroom That Feels Better and Works Better.</h1>
          <p>One experienced contractor to coordinate the waterproofing, construction, tile and finish work behind a complete bathroom remodel.</p>
          <div className="remodel-hero-actions">
            <a className="button cta-primary" href="#bathroom-quick-type">Plan your bathroom remodel</a>
            <a className="remodel-phone" href="tel:3527017458"><small>OR CALL SWIFT</small>(352) 701-7458</a>
          </div>
          <div className="remodel-hero-proof">
            <span>Licensed &amp; insured • CBC1260893</span>
            <span>Written, itemized proposals</span>
            <span>One contractor from start to finish</span>
          </div>
        </div>
        <div className="remodel-hero-visual">
          <img className="remodel-hero-main bathroom-hero-image" src="/assets/bathroom-remodeling-hero.png" alt="Completed bathroom remodel with a tiled walk-in shower and wood vanity" />
        </div>
      </section>

      <LeadForm className="remodel-quick-form bathroom-quick-form" onSubmit={continueEstimate} step>
          <LeadProtection />
        <div className="remodel-quick-heading">
          <p className="eyebrow">START YOUR ESTIMATE</p>
          <h2>What Are You Planning?</h2>
        </div>
        <label htmlFor="bathroom-quick-type"><span className="form-label-text">Project Type <span className="form-requirement">(required)</span></span><select id="bathroom-quick-type" value={projectType} onChange={(event) => setProjectType(event.target.value)} required><option value="" disabled>Select project</option><option>Full bathroom remodel</option><option>Tub-to-shower conversion</option><option>Walk-in shower remodel</option><option>Vanity, tile and finish updates</option><option>Not sure yet</option></select></label>
        <label htmlFor="bathroom-quick-priority"><span className="form-label-text">Main Priority <span className="form-requirement">(required)</span></span><select id="bathroom-quick-priority" value={mainPriority} onChange={(event) => setMainPriority(event.target.value)} required><option value="" disabled>Select priority</option><option>Safer access</option><option>Easier cleaning</option><option>More storage</option><option>Updated appearance</option><option>Repairing damage</option></select></label>
        <label htmlFor="bathroom-quick-zip"><span className="form-label-text">Project ZIP <span className="form-requirement">(required)</span></span><input id="bathroom-quick-zip" inputMode="numeric" placeholder="34609" value={projectZip} onChange={(event) => setProjectZip(event.target.value)} required /></label>
        <label htmlFor="bathroom-quick-timing"><span className="form-label-text">Ideal Timing <span className="form-requirement">(required)</span></span><select id="bathroom-quick-timing" value={timing} onChange={(event) => setTiming(event.target.value)} required><option value="" disabled>Select timing</option><option>As soon as possible</option><option>Within 1 to 3 months</option><option>Within 3 to 6 months</option><option>Planning ahead</option></select></label>
        <button type="submit">Continue my estimate <span aria-hidden="true">→</span></button>
      </LeadForm>

      <section className="remodel-services" id="bathroom-services">
        <div className="remodel-section-heading">
          <p className="eyebrow">BATHROOM REMODELING SERVICES</p>
          <h2>One Contractor for the Details You See and the Work Behind Them.</h2>
        </div>
        <div className="remodel-service-grid">
          {bathroomServices.map((service) => (
            <article key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <a className="text-action" href="#bathroom-estimate"><span className="text-action-label">Discuss Your Bathroom</span><span className="text-action-arrow" aria-hidden="true">→</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="commercial-coordination bathroom-coordination">
        <div className="commercial-coordination-copy">
          <p className="eyebrow">BUILT BEYOND THE SURFACE</p>
          <h2>The Best Bathroom Work Is Often the Work You Cannot See.</h2>
          <p>A finished shower is only as reliable as the preparation behind the tile. Swift coordinates moisture protection, trade work and finish details as one connected project.</p>
          <a className="button cta-primary" href="#bathroom-estimate">Schedule a bathroom walkthrough</a>
        </div>
        <div className="commercial-coordination-list">
          <article><span>01</span><div><h3>Moisture Management</h3><p>Wet-area preparation is planned before the tile and fixtures are installed.</p></div></article>
          <article><span>02</span><div><h3>Coordinated Trades</h3><p>Plumbing, electrical, construction and finish work happen in the right sequence.</p></div></article>
          <article><span>03</span><div><h3>Finished Details</h3><p>Transitions, trim, fixtures and surfaces come together under one project plan.</p></div></article>
        </div>
      </section>

      <section className="commercial-properties bathroom-priorities">
        <div className="commercial-properties-heading">
          <p className="eyebrow">DESIGNED FOR DAILY USE</p>
          <h2>Improve Comfort, Access and Upkeep in One Remodel.</h2>
          <p>The right bathroom plan should address the frustrations you experience now while making the room easier to use for years to come.</p>
        </div>
        <div className="commercial-property-grid">
          <article><span>01</span><h3>Safer Access</h3><p>Improve entry, shower access and movement through the room without making the space feel institutional.</p></article>
          <article><span>02</span><h3>Storage and Function</h3><p>Create useful places for towels, toiletries and everyday routines without adding clutter.</p></article>
          <article><span>03</span><h3>Easier Upkeep</h3><p>Choose surfaces, fixtures and layouts that reduce hard-to-clean corners and simplify maintenance.</p></article>
        </div>
      </section>

      <section className="remodel-process" id="bathroom-process">
        <div className="remodel-process-heading">
          <p className="eyebrow">HOW IT WORKS</p>
          <h2>From the First Walkthrough to the Finished Bathroom.</h2>
        </div>
        <div className="remodel-process-grid">
          <article><span>01</span><h3>Walk the Bathroom</h3><p>We review the room, current problems, access needs and the changes you are considering.</p></article>
          <article><span>02</span><h3>Define the Scope</h3><p>The fixtures, materials and included construction work become a clear written proposal.</p></article>
          <article><span>03</span><h3>Coordinate the Remodel</h3><p>Swift manages scheduling, trade work and communication as the bathroom comes together.</p></article>
          <article><span>04</span><h3>Complete the Walkthrough</h3><p>We review the finished room with you and address final project details before closeout.</p></article>
        </div>
      </section>

      <section className="commercial-cta bathroom-cta">
        <div><p className="eyebrow">READY TO PLAN?</p><h2>Show Us What Is Not Working in Your Current Bathroom.</h2></div>
        <div><a className="button cta-primary" href="#bathroom-estimate">Request a bathroom estimate</a><a href="tel:3527017458">Call (352) 701-7458</a></div>
      </section>

      <FaqSection
        eyebrow={<>BATHROOM REMODELING QUESTIONS</>}
        title={<>What Homeowners Ask Before the Work Begins.</>}
        description={<>Clear answers make it easier to plan the project and choose the right contractor.</>}
        items={bathroomFaqs}
        estimateHref="#bathroom-estimate"
      />

      <section className="remodel-estimate" id="bathroom-estimate">
        <div className="remodel-estimate-copy">
          <p className="eyebrow">BATHROOM PROJECT REQUEST</p>
          <h2>Tell Us What You Want to Change About Your Bathroom.</h2>
          <p>Share the project type, priorities and timing you are considering. Swift serves homeowners throughout Hernando, Citrus and Pasco Counties.</p>
          <div className="remodel-estimate-points"><span>Free initial project conversation</span><span>Written remodeling proposal</span><span>Licensed and insured contractor</span></div>
          <p className="remodel-estimate-phone">Prefer to call?<a href="tel:3527017458">(352) 701-7458</a></p>
        </div>
        <LeadForm className="remodel-estimate-form" onSubmit={submitEstimate}>
          <LeadProtection />
          <div className="remodel-form-row"><label><span className="form-label-text">Name <span className="form-requirement">(required)</span></span><input id="bathroom-lead-name" name="name" autoComplete="name" maxLength={120} placeholder="Your name" required /></label><label><span className="form-label-text">Phone <span className="form-requirement">(required)</span></span><input name="phone" autoComplete="tel" placeholder="(000) 000-0000" type="tel" required /></label></div>
          <div className="remodel-form-row"><label><span className="form-label-text">Email <span className="form-requirement">(optional)</span></span><input name="email" autoComplete="email" placeholder="you@email.com" type="email" maxLength={254} /></label><label><span className="form-label-text">Project City or ZIP <span className="form-requirement">(required)</span></span><input name="location" placeholder="Spring Hill" value={projectZip} onChange={(event) => setProjectZip(event.target.value)} required /></label></div>
          <div className="remodel-form-row"><label><span className="form-label-text">Project Type <span className="form-requirement">(required)</span></span><select value={projectType} onChange={(event) => setProjectType(event.target.value)} required><option value="" disabled>Select project</option><option>Full bathroom remodel</option><option>Tub-to-shower conversion</option><option>Walk-in shower remodel</option><option>Vanity, tile and finish updates</option><option>Not sure yet</option></select></label><label><span className="form-label-text">Main Priority <span className="form-requirement">(required)</span></span><select value={mainPriority} onChange={(event) => setMainPriority(event.target.value)} required><option value="" disabled>Select priority</option><option>Safer access</option><option>Easier cleaning</option><option>More storage</option><option>Updated appearance</option><option>Repairing damage</option></select></label></div>
          <label><span className="form-label-text">Ideal Timing <span className="form-requirement">(required)</span></span><select value={timing} onChange={(event) => setTiming(event.target.value)} required><option value="" disabled>Select timing</option><option>As soon as possible</option><option>Within 1 to 3 months</option><option>Within 3 to 6 months</option><option>Planning ahead</option></select></label>
          <label><span className="form-label-text">Project Details <span className="form-requirement">(optional)</span></span><textarea name="details" placeholder="Tell us what is not working, what you want to change and any access, fixture or material ideas you already have." /></label>
          <button className="button cta-primary" type="submit">{submitted ? "Thank you. We’ll be in touch." : "Get my bathroom estimate"}</button>
          <small>Your information is only used to respond to your project request.</small>
        </LeadForm>
      </section>

      <SiteFooter />
    </main>
  );
}
