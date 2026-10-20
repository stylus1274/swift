"use client";
import ProcessSection from "../../components/ProcessSection";


import FaqSection from "@/components/FaqSection";

import { FormEvent, useState } from "react";
import SiteHeader from "../../components/SiteHeader";

import SiteFooter from "@/components/SiteFooter";
import { submitLeadForm } from "@/lib/submitLead";
import LeadProtection from "@/components/LeadProtection";
import LeadForm from "@/components/LeadForm";
const commercialServices = [
  { number: "01", title: "Commercial Build-Outs", copy: "Interior construction, layout changes and finish work coordinated around the needs of your space and operation." },
  { number: "02", title: "Commercial Painting", copy: "Interior and exterior painting with durable coatings, organized work areas and scheduling built around your business." },
  { number: "03", title: "Property Improvements", copy: "Doors, flooring, carpentry, repairs and practical upgrades that keep commercial properties functional and presentable." },
  { number: "04", title: "Facility Services", copy: "Ongoing improvement and maintenance support for owners and managers who need one dependable contractor to call." },
];

const commercialFaqs = [
  { question: "Can Swift Work Around Our Business Hours?", answer: "Yes. Scheduling options depend on the scope and property, but Swift can discuss phased work, off-hour access and other ways to reduce disruption to employees, tenants and customers." },
  { question: "Do You Provide Written Commercial Proposals?", answer: "Yes. Commercial proposals document the planned scope and included work so owners, managers and stakeholders can review the project before scheduling begins." },
  { question: "Can You Manage Multiple Trades Under One Project?", answer: "Yes. Swift can coordinate connected construction, painting and finish work under one project plan, reducing the number of separate contractors you need to manage." },
  { question: "Do You Handle Permits When They Are Required?", answer: "When the approved commercial scope requires permitting, Swift can coordinate the applicable permit process as part of the project plan." },
  { question: "What Commercial Areas Do You Serve?", answer: "Swift serves commercial properties throughout Hernando, Citrus and Pasco Counties. Project availability depends on the scope, property and current schedule." },
];

export default function CommercialServicesPage() {

  const [projectType, setProjectType] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [projectZip, setProjectZip] = useState("");
  const [timing, setTiming] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function continueEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    document.getElementById("commercial-estimate")?.scrollIntoView({ behavior: "smooth" });
    window.setTimeout(() => document.getElementById("commercial-lead-name")?.focus(), 550);
  }

  async function submitEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await submitLeadForm(event.currentTarget, "Commercial Services Estimate");
    setSubmitted(true);
  }

  return (
    <main className="remodel-page commercial-page service-hero-page">
      <SiteHeader active="services" contactHref="#commercial-estimate" />

      <section className="remodel-hero commercial-hero">
        <div className="remodel-hero-copy">
          <p className="eyebrow"><span>COMMERCIAL SERVICES</span> <span className="service-hero-county"><span className="service-hero-diamond" aria-hidden="true" />HERNANDO</span> <span className="service-hero-county"><span className="service-hero-diamond" aria-hidden="true" />CITRUS</span> <span className="service-hero-county"><span className="service-hero-diamond" aria-hidden="true" />PASCO</span></p>
          <h1>Commercial Projects Managed Around Your Operation.</h1>
          <p>One experienced contractor for commercial build-outs, renovations, painting and property improvements from the first walkthrough through the final details.</p>
          <div className="remodel-hero-actions">
            <a className="button cta-primary" href="#commercial-quick-project">Request a commercial estimate</a>
            <a className="remodel-phone" href="tel:3527017458"><small>OR CALL SWIFT</small>(352) 701-7458</a>
          </div>

        </div>
        <div className="remodel-hero-visual">
          <img className="remodel-hero-main commercial-hero-image" src="/assets/commercial-office-reception.webp" alt="Finished modern office reception and commercial interior renovation" />
        </div>
      </section>

      <div className="service-hero-estimate-band">
      <LeadForm className="remodel-quick-form commercial-quick-form service-quick-form" onSubmit={continueEstimate} step compactErrors>
          <LeadProtection />
        <div className="remodel-quick-heading">
          <p className="eyebrow">START YOUR PROJECT</p>
          <h2>What Does Your Property Need?</h2>
        </div>
        <label htmlFor="commercial-quick-project"><span className="form-label-text">Project Type <span className="form-requirement" aria-hidden="true">*</span></span><select id="commercial-quick-project" value={projectType} onChange={(event) => setProjectType(event.target.value)} required><option value="" disabled>Select project</option><option>Commercial build-out</option><option>Commercial painting</option><option>Property improvement</option><option>Facility service</option><option>Other commercial project</option></select></label>
        <label htmlFor="commercial-quick-property"><span className="form-label-text">Property Type <span className="form-requirement" aria-hidden="true">*</span></span><select id="commercial-quick-property" value={propertyType} onChange={(event) => setPropertyType(event.target.value)} required><option value="" disabled>Select property</option><option>Office</option><option>Retail</option><option>Restaurant or hospitality</option><option>Medical or professional</option><option>Multi-tenant property</option><option>Other</option></select></label>
        <label htmlFor="commercial-quick-timing"><span className="form-label-text">Ideal Timing <span className="form-requirement" aria-hidden="true">*</span></span><select id="commercial-quick-timing" value={timing} onChange={(event) => setTiming(event.target.value)} required><option value="" disabled>Select timing</option><option>As soon as possible</option><option>Within 1–3 months</option><option>Within 3–6 months</option><option>Planning ahead</option></select></label>
        <label htmlFor="commercial-quick-zip"><span className="form-label-text">Project ZIP <span className="form-requirement" aria-hidden="true">*</span></span><input id="commercial-quick-zip" inputMode="numeric" placeholder="34604" value={projectZip} onChange={(event) => setProjectZip(event.target.value)} required /></label>
        <button type="submit">Continue estimate <span aria-hidden="true">→</span></button>
      </LeadForm>
      <div className="service-ticker service-hero-trust" aria-label="Swift contractor qualifications"><span>Licensed &amp; Insured</span><b aria-hidden="true">◆</b><span>Written, itemized proposals</span><b aria-hidden="true">◆</b><span>One contractor from start to finish</span></div>
      </div>

      <section className="remodel-services" id="commercial-services">
        <div className="remodel-section-heading">
          <p className="eyebrow">COMMERCIAL SERVICES</p>
          <h2>One Contractor for the Work Your Property Needs.</h2>
        </div>
        <div className="remodel-service-grid">
          {commercialServices.map((service) => (
            <article key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <a className="text-action" href="#commercial-estimate"><span className="text-action-label">Discuss Your Project</span><span className="text-action-arrow" aria-hidden="true">→</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="commercial-coordination">
        <div className="commercial-coordination-copy">
          <p className="eyebrow">BUILT AROUND YOUR OPERATION</p>
          <h2>Good Commercial Work Should Not Create More Work for You.</h2>
          <p>Swift keeps the scope, schedule and communication connected so you can stay focused on the property, tenants and customers depending on you.</p>
          <a className="button cta-primary" href="#commercial-estimate">Plan a commercial walkthrough</a>
        </div>
        <div className="commercial-coordination-list">
          <article><span>01</span><div><h3>A Clear Scope</h3><p>Written project details help owners and stakeholders understand what is included before work begins.</p></div></article>
          <article><span>02</span><div><h3>Practical Scheduling</h3><p>Project sequencing is planned around access, operations and the people using the property.</p></div></article>
          <article><span>03</span><div><h3>One Point of Contact</h3><p>You have one contractor responsible for coordination, communication and the overall result.</p></div></article>
        </div>
      </section>

      <section className="commercial-properties">
        <div className="commercial-properties-heading">
          <p className="eyebrow">PROPERTIES WE SUPPORT</p>
          <h2>Commercial Improvements for the Spaces People Use Every Day.</h2>
          <p>Every property has different access, scheduling and finish requirements. The project plan should reflect how the space actually operates.</p>
        </div>
        <div className="commercial-property-grid">
          <article><span>01</span><h3>Offices &amp; Professional Spaces</h3><p>Build-outs, painting and finish improvements for workplaces, medical offices and professional environments.</p></article>
          <article><span>02</span><h3>Retail &amp; Hospitality</h3><p>Customer-facing renovations and repairs planned around appearance, durability and operating schedules.</p></article>
          <article><span>03</span><h3>Managed Properties</h3><p>Practical improvements and ongoing facility support for property managers and multi-tenant buildings.</p></article>
        </div>
      </section>

      <ProcessSection id="commercial-process" eyebrow="HOW IT WORKS" title="A Commercial Project Plan With Clear Next Steps." steps={[
  {
    "title": "Walk the Property",
    "description": "We review the space, access, operating needs and the result you need the project to achieve."
  },
  {
    "title": "Define the Scope",
    "description": "You receive a written proposal outlining the planned work and included project details."
  },
  {
    "title": "Coordinate the Work",
    "description": "Swift manages scheduling, trade work and communication as the project moves forward."
  },
  {
    "title": "Complete the Walkthrough",
    "description": "We review the finished work together and address final details before project closeout."
  }
]} />

      <section className="commercial-cta">
        <div><p className="eyebrow">READY TO TALK?</p><h2>Bring the Property, Priorities and Timeline to the Walkthrough.</h2></div>
        <div><a className="button cta-primary" href="#commercial-estimate">Request a commercial estimate</a><a href="tel:3527017458">Call (352) 701-7458</a></div>
      </section>

      <FaqSection
        eyebrow={<>COMMERCIAL QUESTIONS</>}
        title={<>What Property Owners Ask Before Work Begins.</>}
        description={<>Clear answers make it easier to evaluate the scope, schedule and contractor responsible for your property.</>}
        items={commercialFaqs}
        estimateHref="#commercial-estimate"
      />

      <section className="remodel-estimate" id="commercial-estimate">
        <div className="remodel-estimate-copy">
          <p className="eyebrow">COMMERCIAL PROJECT REQUEST</p>
          <h2>Tell Us What Your Property Needs.</h2>
          <p>Share the property type, scope and timing you are considering. Swift serves commercial clients throughout Hernando, Citrus and Pasco Counties.</p>
          <div className="remodel-estimate-points"><span>Free initial project walkthrough</span><span>Written commercial proposal</span><span>Licensed and insured contractor</span></div>
          <p className="remodel-estimate-phone">Prefer to call?<a href="tel:3527017458">(352) 701-7458</a></p>
        </div>
        <LeadForm className="remodel-estimate-form" onSubmit={submitEstimate}>
          <LeadProtection />
          <div className="remodel-form-row"><label><span className="form-label-text">Name <span className="form-requirement">(required)</span></span><input id="commercial-lead-name" name="name" autoComplete="name" maxLength={120} placeholder="Your name" required /></label><label><span className="form-label-text">Phone <span className="form-requirement">(required)</span></span><input name="phone" autoComplete="tel" placeholder="(000) 000-0000" type="tel" required /></label></div>
          <div className="remodel-form-row"><label><span className="form-label-text">Business Email <span className="form-requirement">(optional)</span></span><input name="email" autoComplete="email" placeholder="you@company.com" type="email" maxLength={254} /></label><label><span className="form-label-text">Project City or ZIP <span className="form-requirement">(required)</span></span><input name="location" placeholder="Spring Hill" value={projectZip} onChange={(event) => setProjectZip(event.target.value)} required /></label></div>
          <div className="remodel-form-row"><label><span className="form-label-text">Project Type <span className="form-requirement">(required)</span></span><select value={projectType} onChange={(event) => setProjectType(event.target.value)} required><option value="" disabled>Select project</option><option>Commercial build-out</option><option>Commercial painting</option><option>Property improvement</option><option>Facility service</option><option>Other commercial project</option></select></label><label><span className="form-label-text">Property Type <span className="form-requirement">(required)</span></span><select value={propertyType} onChange={(event) => setPropertyType(event.target.value)} required><option value="" disabled>Select property</option><option>Office</option><option>Retail</option><option>Restaurant or hospitality</option><option>Medical or professional</option><option>Multi-tenant property</option><option>Other</option></select></label></div>
          <label><span className="form-label-text">Ideal Timing <span className="form-requirement">(required)</span></span><select value={timing} onChange={(event) => setTiming(event.target.value)} required><option value="" disabled>Select timing</option><option>As soon as possible</option><option>Within 1–3 months</option><option>Within 3–6 months</option><option>Planning ahead</option></select></label>
          <label><span className="form-label-text">Project Details <span className="form-requirement">(optional)</span></span><textarea name="details" placeholder="Tell us about the property, the work you are considering, access requirements and your preferred timing." /></label>
          <button className="button cta-primary" type="submit">{submitted ? "Thank you. We’ll be in touch." : "Get my commercial estimate"}</button>
          <small>Your information is only used to respond to your project request.</small>
        </LeadForm>
      </section>

      <SiteFooter />
    </main>
  );
}
