"use client";

import FaqSection from "@/components/FaqSection";

import { FormEvent, useState } from "react";
import SiteHeader from "../../components/SiteHeader";

import SiteFooter from "@/components/SiteFooter";
import { submitLeadForm } from "@/lib/submitLead";
import LeadProtection from "@/components/LeadProtection";
import LeadForm from "@/components/LeadForm";
const contactFaqs = [
  {
    question: "Is the Project Estimate Free?",
    answer: "Yes. Swift offers free, no-obligation estimates for projects within its service area.",
  },
  {
    question: "What Information Should I Include?",
    answer: "Tell us the type of work, property location, ideal timing and any details that help explain the scope. Photos and additional information can be shared during the follow-up conversation.",
  },
  {
    question: "What Happens After I Submit the Form?",
    answer: "Swift will review your request, contact you to discuss the project and determine the most useful next step, which may include an on-site walkthrough.",
  },
  {
    question: "Will I Receive a Written Proposal?",
    answer: "Yes. Once the project scope has been reviewed, Swift provides a written, itemized proposal before scheduling begins.",
  },
  {
    question: "What Areas Does Swift Serve?",
    answer: "Swift serves Spring Hill, Brooksville, Weeki Wachee, Hernando Beach, Ridge Manor and communities throughout Hernando, Citrus and Pasco Counties.",
  },
];

export default function ContactPage() {

  const [submitted, setSubmitted] = useState(false);

  async function submitEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await submitLeadForm(event.currentTarget, "Contact Page Estimate");
    setSubmitted(true);
  }

  return (
    <main className="contact-page">
      <SiteHeader contactHref="#contact-form" />

      <section className="contact-hero">
        <div className="contact-hero-copy">
          <p className="eyebrow">FREE PROJECT ESTIMATE • FLORIDA NATURE COAST</p>
          <h1>Let&apos;s Talk About Your Project.</h1>
          <p>Tell Swift what you are planning, where the property is located and when you would like to begin. We will follow up to discuss the details and the right next step.</p>
          <div className="contact-hero-actions">
            <a className="button cta-primary" href="#contact-form">Start your free estimate</a>
            <a className="contact-direct-phone" href="tel:3527017458"><small>OR CALL SWIFT</small>(352) 701-7458</a>
          </div>
          <div className="contact-hero-proof"><span>Licensed &amp; Insured • CBC1260893</span><span>Serving Local Clients Since 2003</span><span>Written, Itemized Proposals</span></div>
        </div>
        <div className="contact-hero-visual">
          <img src="/assets/contact-planning-hero.webp" alt="Project plans and finish samples inside a renovated Florida home" />
        </div>
      </section>

      <LeadForm className="contact-estimate-form" id="contact-form" onSubmit={submitEstimate}>
          <LeadProtection />
        <div className="contact-form-heading">
          <p className="eyebrow">START YOUR ESTIMATE</p>
          <h2>Tell Us What You Are Planning.</h2>
          <p>Share the basics below. We will contact you to talk through the project.</p>
        </div>
        <div className="contact-form-fields">
          <div className="contact-form-row">
            <label><span className="form-label-text">Name <span className="form-requirement">(required)</span></span><input name="name" autoComplete="name" maxLength={120} placeholder="Your name" required /></label>
            <label><span className="form-label-text">Phone <span className="form-requirement">(required)</span></span><input name="phone" autoComplete="tel" placeholder="(000) 000-0000" type="tel" required /></label>
          </div>
          <div className="contact-form-row">
            <label><span className="form-label-text">Email <span className="form-requirement">(optional)</span></span><input name="email" autoComplete="email" placeholder="you@email.com" type="email" maxLength={254} /></label>
            <label><span className="form-label-text">Project ZIP <span className="form-requirement">(required)</span></span><input name="zip" placeholder="34609" inputMode="numeric" required /></label>
          </div>
          <div className="contact-form-row">
            <label><span className="form-label-text">Project Type <span className="form-requirement">(required)</span></span><select name="project" defaultValue="" required><option value="" disabled>Select project</option><option>Residential painting</option><option>Residential remodeling</option><option>New home construction</option><option>Commercial construction</option><option>Commercial painting</option><option>Facility services</option><option>Other project</option></select></label>
            <label><span className="form-label-text">Ideal Timing <span className="form-requirement">(required)</span></span><select name="timing" defaultValue="" required><option value="" disabled>Select timing</option><option>As soon as possible</option><option>Within 1–3 months</option><option>Within 3–6 months</option><option>More than 6 months</option><option>Just researching</option></select></label>
          </div>
          <label><span className="form-label-text">Project Details <span className="form-requirement">(optional)</span></span><textarea name="details" placeholder="Tell us about the property, the work you need and any important timing details." /></label>
          <button className="button cta-primary" type="submit">{submitted ? "Thank you. We’ll be in touch." : "Get my free estimate"}</button>
          <small>Your information is only used to respond to your project request.</small>
        </div>
      </LeadForm>

      <section className="contact-next">
        <div className="contact-next-heading"><p className="eyebrow">WHAT HAPPENS NEXT</p><h2>A Clear Start Before Any Work Begins.</h2></div>
        <div className="contact-next-grid">
          <article><span>01</span><h3>We Review Your Request</h3><p>Swift looks at the project type, location, timing and details you provide.</p></article>
          <article><span>02</span><h3>We Talk Through the Scope</h3><p>We contact you to ask questions, discuss priorities and determine whether an on-site walkthrough is needed.</p></article>
          <article><span>03</span><h3>You Receive a Written Proposal</h3><p>Once the work is defined, you receive an itemized proposal outlining the planned project scope.</p></article>
        </div>
      </section>

      <section className="contact-options">
        <div className="contact-options-copy"><p className="eyebrow">CONTACT SWIFT</p><h2>Prefer a Direct Conversation?</h2><p>Call Swift if you would rather discuss the project before completing the estimate form.</p></div>
        <div className="contact-option-grid">
          <a href="tel:3527017458"><span>CALL</span><strong>(352) 701-7458</strong><b className="text-action"><span className="text-action-label">Speak With Swift</span><span className="text-action-arrow" aria-hidden="true">→</span></b></a>
        </div>
      </section>

      <section className="contact-service-area">
        <div className="contact-area-heading"><p className="eyebrow">SERVICE AREA</p><h2>Local Construction and Painting Across Three Counties.</h2><p>Swift serves residential and commercial clients throughout Florida&apos;s Nature Coast.</p></div>
        <div className="contact-county-grid">
          <article><span>01</span><h3>Hernando County</h3><p>Spring Hill, Brooksville, Weeki Wachee, Hernando Beach, Ridge Manor and nearby communities.</p></article>
          <article><span>02</span><h3>Citrus County</h3><p>Project availability throughout Citrus County for painting, remodeling, construction and property improvements.</p></article>
          <article><span>03</span><h3>Pasco County</h3><p>Residential and commercial project support for communities throughout Pasco County.</p></article>
        </div>
      </section>

      <FaqSection
 eyebrow={<>ESTIMATE QUESTIONS</>}
 title={<>What to Know Before You Reach Out.</>}
 description={<>A few details now help Swift respond with a clearer and more useful next step.</>}
 items={contactFaqs}
 estimateHref="#contact-form"
 />

      <section className="contact-final-cta">
        <div><p className="eyebrow">READY WHEN YOU ARE</p><h2>Start With a Free Project Estimate.</h2><p>Tell us what you are planning and we will help identify the right next step.</p></div>
        <a className="button cta-primary" href="#contact-form">Request your estimate</a>
      </section>

      <SiteFooter />
    </main>
  );
}
