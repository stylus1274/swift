"use client";
import ProcessSection from "../../components/ProcessSection";


import FaqSection from "@/components/FaqSection";

import { FormEvent, useState } from "react";
import SiteHeader from "../../components/SiteHeader";

import SiteFooter from "@/components/SiteFooter";
import { submitLeadForm } from "@/lib/submitLead";
import LeadProtection from "@/components/LeadProtection";
import LeadForm from "@/components/LeadForm";
const openingServices = [
  {
    number: "01",
    title: "Replacement Windows",
    copy: "Replace aging, damaged or inefficient windows with a coordinated plan for sizing, installation and surrounding finish work.",
  },
  {
    number: "02",
    title: "Exterior Entry Doors",
    copy: "Update front, side and service doors with careful fitting, weather protection, hardware coordination and clean interior trim.",
  },
  {
    number: "03",
    title: "Sliding & Patio Doors",
    copy: "Improve access, light and outdoor connections with properly fitted sliding and patio door systems.",
  },
  {
    number: "04",
    title: "Impact-Rated Options",
    copy: "Discuss impact-rated window and door options suited to Florida homes, local requirements and the goals for your project.",
  },
];

const openingFaqs = [
  {
    question: "Does Swift Install Impact Windows and Doors?",
    answer: "Swift can discuss impact-rated window and door options as part of the project walkthrough. Product selection depends on the opening, home, applicable requirements and the performance goals for the project.",
  },
  {
    question: "Are Permits Required for Window or Door Replacement?",
    answer: "Permit requirements depend on the project and local jurisdiction. Swift reviews the planned scope and coordinates required permitting when it applies to the installation.",
  },
  {
    question: "Can You Repair the Area Around the New Opening?",
    answer: "Yes. The written proposal can account for related interior or exterior finish work identified during the walkthrough, including appropriate trim, drywall, stucco or paint work around the installation.",
  },
  {
    question: "How Long Does Window or Door Installation Take?",
    answer: "Timing varies with the number of openings, product availability, permitting and any repair work involved. Swift provides a practical schedule after reviewing the property and final scope.",
  },
  {
    question: "What Areas Do You Serve?",
    answer: "Swift serves homeowners throughout Hernando, Citrus and Pasco Counties, including Spring Hill, Brooksville, Weeki Wachee, Hernando Beach, Ridge Manor and surrounding communities.",
  },
];

export default function WindowsDoorsPage() {

  const [projectType, setProjectType] = useState("");
  const [openingCount, setOpeningCount] = useState("");
  const [projectZip, setProjectZip] = useState("");
  const [timing, setTiming] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function continueEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    document.getElementById("windows-doors-estimate")?.scrollIntoView({ behavior: "smooth" });
    window.setTimeout(() => document.getElementById("windows-doors-name")?.focus(), 550);
  }

  async function submitEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await submitLeadForm(event.currentTarget, "Windows and Doors Estimate");
    setSubmitted(true);
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Window and Door Installation",
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Swift Construction & Painting, LLC",
      telephone: "+1-352-701-7458",
    },
    areaServed: ["Hernando County", "Citrus County", "Pasco County"],
    description: "Replacement window, exterior door, sliding door and impact-rated product installation for Florida homes.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: openingFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main className="remodel-page commercial-page commercial-painting-page windows-doors-page service-hero-page">
      <SiteHeader active="services" contactHref="#windows-doors-estimate" />

      <section className="remodel-hero windows-doors-hero">
        <div className="remodel-hero-copy">
          <p className="eyebrow"><span>WINDOWS &amp; DOORS</span> <span className="service-hero-county"><span className="service-hero-diamond" aria-hidden="true" />HERNANDO</span> <span className="service-hero-county"><span className="service-hero-diamond" aria-hidden="true" />CITRUS</span> <span className="service-hero-county"><span className="service-hero-diamond" aria-hidden="true" />PASCO</span></p>
          <h1>Window and Door Installation With Every Detail Coordinated.</h1>
          <p>New windows and doors planned around the opening, weather protection and finish work your Florida home needs.</p>
          <div className="remodel-hero-actions">
            <a className="button cta-primary" href="#windows-doors-quick-project">Get a free installation estimate</a>
            <a className="remodel-phone" href="tel:3527017458"><small>OR CALL SWIFT</small>(352) 701-7458</a>
          </div>

        </div>
        <div className="remodel-hero-visual">
          <img className="remodel-hero-main windows-doors-hero-image" src="/assets/windows-doors-hero.png" alt="Professional installers fitting a new window into a Florida stucco home" />
        </div>
      </section>

      <div className="service-hero-estimate-band">
      <LeadForm className="remodel-quick-form commercial-painting-quick-form service-quick-form" onSubmit={continueEstimate} step compactErrors>
          <LeadProtection />
        <div className="remodel-quick-heading">
          <p className="eyebrow">START YOUR ESTIMATE</p>
          <h2>What Are You Planning to Replace?</h2>
        </div>
        <label htmlFor="windows-doors-quick-project"><span className="form-label-text">Project Type <span className="form-requirement" aria-hidden="true">*</span></span><select id="windows-doors-quick-project" value={projectType} onChange={(event) => setProjectType(event.target.value)} required><option value="" disabled>Select project</option><option>Replacement windows</option><option>Exterior entry doors</option><option>Sliding or patio doors</option><option>Windows and doors</option><option>Other opening project</option></select></label>
        <label htmlFor="windows-doors-quick-count"><span className="form-label-text">Number of Openings <span className="form-requirement" aria-hidden="true">*</span></span><select id="windows-doors-quick-count" value={openingCount} onChange={(event) => setOpeningCount(event.target.value)} required><option value="" disabled>Select quantity</option><option>1 opening</option><option>2 to 5 openings</option><option>6 to 10 openings</option><option>More than 10</option><option>Not sure yet</option></select></label>
        <label htmlFor="windows-doors-quick-timing"><span className="form-label-text">Ideal Timing <span className="form-requirement" aria-hidden="true">*</span></span><select id="windows-doors-quick-timing" value={timing} onChange={(event) => setTiming(event.target.value)} required><option value="" disabled>Select timing</option><option>As soon as possible</option><option>Within 1 to 3 months</option><option>Within 3 to 6 months</option><option>Planning ahead</option></select></label>
        <label htmlFor="windows-doors-quick-zip"><span className="form-label-text">Project ZIP <span className="form-requirement" aria-hidden="true">*</span></span><input id="windows-doors-quick-zip" inputMode="numeric" placeholder="34604" value={projectZip} onChange={(event) => setProjectZip(event.target.value)} required /></label>
        <button type="submit">Continue estimate <span aria-hidden="true">→</span></button>
      </LeadForm>
      <div className="service-ticker service-hero-trust" aria-label="Swift contractor qualifications"><span>Licensed &amp; Insured</span><b aria-hidden="true">◆</b><span>Written, itemized proposals</span><b aria-hidden="true">◆</b><span>One contractor from start to finish</span></div>
      </div>

      <section className="remodel-services" id="windows-doors-services">
        <div className="remodel-section-heading">
          <p className="eyebrow">WINDOW &amp; DOOR SERVICES</p>
          <h2>Installation Planned Around the Product, Opening and Finished Home.</h2>
        </div>
        <div className="remodel-service-grid">
          {openingServices.map((service) => (
            <article key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <a className="text-action" href="#windows-doors-estimate"><span className="text-action-label">Discuss Your Project</span><span className="text-action-arrow" aria-hidden="true">→</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="commercial-coordination commercial-painting-coordination">
        <div className="commercial-coordination-copy">
          <p className="eyebrow">MORE THAN A PRODUCT SWAP</p>
          <h2>The Opening Matters as Much as the Window or Door.</h2>
          <p>A successful replacement has to fit, manage Florida weather and look complete inside and out. Swift considers the entire opening before the installation plan is finalized.</p>
          <a className="button cta-primary" href="#windows-doors-estimate">Plan a property walkthrough</a>
        </div>
        <div className="commercial-coordination-list">
          <article><span>01</span><div><h3>Verify the Opening</h3><p>Existing dimensions, conditions and access are reviewed before the product and scope are finalized.</p></div></article>
          <article><span>02</span><div><h3>Plan for Weather</h3><p>Flashing, sealing and water management details are coordinated for the opening and exterior finish.</p></div></article>
          <article><span>03</span><div><h3>Complete the Finish Work</h3><p>Interior trim, drywall, stucco and paint needs can be included so the replacement looks complete.</p></div></article>
        </div>
      </section>

      <section className="commercial-properties commercial-painting-properties">
        <div className="commercial-properties-heading">
          <p className="eyebrow">WHY HOMEOWNERS REPLACE</p>
          <h2>Better Openings Can Improve Comfort, Protection and Curb Appeal.</h2>
          <p>The right project starts with the problem you need to solve, not a one-size-fits-all product recommendation.</p>
        </div>
        <div className="commercial-property-grid">
          <article><span>01</span><h3>Storm Protection</h3><p>Explore impact-rated options and installation requirements for a more prepared Florida home.</p></article>
          <article><span>02</span><h3>Comfort &amp; Efficiency</h3><p>Replace damaged, drafty or aging units that make rooms harder to keep comfortable.</p></article>
          <article><span>03</span><h3>Appearance &amp; Function</h3><p>Improve natural light, operation, access and the finished look of the home's interior and exterior.</p></article>
        </div>
      </section>

      <ProcessSection id="windows-doors-process" eyebrow="HOW IT WORKS" title="A Clear Installation Process From Walkthrough to Final Fit." steps={[
  {
    "title": "Review the Openings",
    "description": "We discuss your goals and inspect the windows, doors and surrounding conditions."
  },
  {
    "title": "Define the Scope",
    "description": "You receive a written proposal covering the planned installation and related finish work."
  },
  {
    "title": "Install & Finish",
    "description": "Swift coordinates removal, fitting, weather protection and the included interior and exterior details."
  },
  {
    "title": "Complete the Walkthrough",
    "description": "We review operation, appearance and final details together before project closeout."
  }
]} />

      <section className="commercial-painting-proof-cta">
        <div>
          <p className="eyebrow">ONE CONTRACTOR FOR THE COMPLETE OPENING</p>
          <h2>Installation and Connected Repairs Can Stay Under One Plan.</h2>
          <p>Swift can coordinate the window or door replacement with related carpentry, drywall, stucco and painting under one licensed building contractor.</p>
        </div>
        <div className="commercial-painting-proof-actions">
          <a className="button cta-primary" href="#windows-doors-estimate">Request a free estimate</a>
          <a className="text-action" href="/residential-remodeling"><span className="text-action-label">Explore Residential Remodeling</span><span className="text-action-arrow" aria-hidden="true">→</span></a>
        </div>
      </section>

      <FaqSection
        eyebrow={<>WINDOW &amp; DOOR QUESTIONS</>}
        title={<>What Homeowners Ask Before Replacement Begins.</>}
        description={<>Clear answers make it easier to compare products, installation scope and the contractor responsible for your home.</>}
        items={openingFaqs}
        estimateHref="#windows-doors-estimate"
      />

      <section className="remodel-estimate" id="windows-doors-estimate">
        <div className="remodel-estimate-copy">
          <p className="eyebrow">FREE WINDOW &amp; DOOR ESTIMATE</p>
          <h2>Tell Us About the Openings You Want to Replace.</h2>
          <p>Share the project type, approximate number of openings and your preferred timing. Swift serves homeowners throughout Hernando, Citrus and Pasco Counties.</p>
          <div className="remodel-estimate-points"><span>Free project walkthrough</span><span>Written, itemized proposal</span><span>No deposit required</span></div>
          <p className="remodel-estimate-phone">Prefer to call?<a href="tel:3527017458">(352) 701-7458</a></p>
        </div>
        <LeadForm className="remodel-estimate-form" onSubmit={submitEstimate}>
          <LeadProtection />
          <div className="remodel-form-row"><label><span className="form-label-text">Name <span className="form-requirement">(required)</span></span><input id="windows-doors-name" name="name" autoComplete="name" maxLength={120} placeholder="Your name" required /></label><label><span className="form-label-text">Phone <span className="form-requirement">(required)</span></span><input name="phone" autoComplete="tel" placeholder="(000) 000-0000" type="tel" required /></label></div>
          <div className="remodel-form-row"><label><span className="form-label-text">Email <span className="form-requirement">(optional)</span></span><input name="email" autoComplete="email" placeholder="you@email.com" type="email" maxLength={254} /></label><label><span className="form-label-text">Project City or ZIP <span className="form-requirement">(required)</span></span><input name="location" placeholder="Spring Hill" value={projectZip} onChange={(event) => setProjectZip(event.target.value)} required /></label></div>
          <div className="remodel-form-row"><label><span className="form-label-text">Project Type <span className="form-requirement">(required)</span></span><select value={projectType} onChange={(event) => setProjectType(event.target.value)} required><option value="" disabled>Select project</option><option>Replacement windows</option><option>Exterior entry doors</option><option>Sliding or patio doors</option><option>Windows and doors</option><option>Other opening project</option></select></label><label><span className="form-label-text">Number of Openings <span className="form-requirement">(required)</span></span><select value={openingCount} onChange={(event) => setOpeningCount(event.target.value)} required><option value="" disabled>Select quantity</option><option>1 opening</option><option>2 to 5 openings</option><option>6 to 10 openings</option><option>More than 10</option><option>Not sure yet</option></select></label></div>
          <label><span className="form-label-text">Ideal Timing <span className="form-requirement">(required)</span></span><select value={timing} onChange={(event) => setTiming(event.target.value)} required><option value="" disabled>Select timing</option><option>As soon as possible</option><option>Within 1 to 3 months</option><option>Within 3 to 6 months</option><option>Planning ahead</option></select></label>
          <label><span className="form-label-text">Project Details <span className="form-requirement">(optional)</span></span><textarea name="details" placeholder="Tell us what you want to replace, any damage or leaks you have noticed and whether you are considering impact-rated products." /></label>
          <button className="button cta-primary" type="submit">{submitted ? "Thank you. We’ll be in touch." : "Get my window and door estimate"}</button>
          <small>Your information is only used to respond to your project request.</small>
        </LeadForm>
      </section>

      <SiteFooter />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
