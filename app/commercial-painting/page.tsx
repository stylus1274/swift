"use client";
import ProcessSection from "../../components/ProcessSection";


import FaqSection from "@/components/FaqSection";

import { FormEvent, useState } from "react";
import SiteHeader from "../../components/SiteHeader";

import SiteFooter from "@/components/SiteFooter";
import { submitLeadForm } from "@/lib/submitLead";
import LeadProtection from "@/components/LeadProtection";
import LeadForm from "@/components/LeadForm";
const paintingServices = [
  {
    number: "01",
    title: "Interior Commercial Painting",
    copy: "Refresh offices, retail spaces, common areas and occupied properties with a clear plan for access, protection and daily cleanup.",
  },
  {
    number: "02",
    title: "Exterior Painting & Coatings",
    copy: "Protect and update stucco, concrete, masonry, trim and other commercial surfaces exposed to Florida weather.",
  },
  {
    number: "03",
    title: "Multi-Unit & Managed Properties",
    copy: "Coordinate repeatable finishes across common areas, tenant spaces and exterior elevations under one project schedule.",
  },
  {
    number: "04",
    title: "Repaints & Maintenance",
    copy: "Address worn finishes, property turnover and planned repainting without waiting for appearance issues to become larger problems.",
  },
];

const paintingFaqs = [
  {
    question: "Can Swift Paint Around Our Business Hours?",
    answer: "Scheduling depends on the property and scope, but Swift can discuss phased work, off-hour access and practical sequencing to reduce disruption for employees, tenants and customers.",
  },
  {
    question: "Do You Provide Written Commercial Painting Proposals?",
    answer: "Yes. The proposal documents the planned surfaces, preparation and included work so owners and stakeholders can review the scope before scheduling begins.",
  },
  {
    question: "What Types of Commercial Properties Do You Paint?",
    answer: "Swift works with offices, retail properties, restaurants, medical and professional spaces, multi-tenant buildings and other commercial properties throughout the local service area.",
  },
  {
    question: "How Do You Prepare Commercial Surfaces?",
    answer: "Preparation is matched to the existing surface and coating condition. The scope may include cleaning, scraping, patching, caulking, priming and protecting adjacent areas before finish coats are applied.",
  },
  {
    question: "What Areas Do You Serve?",
    answer: "Swift serves commercial properties throughout Hernando, Citrus and Pasco Counties, including Spring Hill, Brooksville and surrounding communities.",
  },
];

export default function CommercialPaintingPage() {

  const [projectType, setProjectType] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [projectZip, setProjectZip] = useState("");
  const [timing, setTiming] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function continueEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    document.getElementById("commercial-painting-estimate")?.scrollIntoView({ behavior: "smooth" });
    window.setTimeout(() => document.getElementById("commercial-painting-name")?.focus(), 550);
  }

  async function submitEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await submitLeadForm(event.currentTarget, "Commercial Painting Estimate");
    setSubmitted(true);
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Commercial Painting",
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Swift Construction & Painting, LLC",
      telephone: "+1-352-701-7458",
    },
    areaServed: ["Hernando County", "Citrus County", "Pasco County"],
    description: "Commercial interior painting, exterior painting and property repainting services for Florida businesses and property managers.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: paintingFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main className="remodel-page commercial-page commercial-painting-page service-hero-page">
      <SiteHeader active="services" contactHref="#commercial-painting-estimate" />

      <section className="remodel-hero commercial-painting-hero">
        <div className="remodel-hero-copy">
          <p className="eyebrow"><span>COMMERCIAL PAINTING</span> <span className="service-hero-county"><span className="service-hero-diamond" aria-hidden="true" />HERNANDO</span> <span className="service-hero-county"><span className="service-hero-diamond" aria-hidden="true" />CITRUS</span> <span className="service-hero-county"><span className="service-hero-diamond" aria-hidden="true" />PASCO</span></p>
          <h1>Commercial Painting That Works Around Your Business.</h1>
          <p>Interior and exterior painting with careful preparation, durable finishes and a project schedule built around the people using your property.</p>
          <div className="remodel-hero-actions">
            <a className="button cta-primary" href="#commercial-painting-quick-project">Request a painting estimate</a>
            <a className="remodel-phone" href="tel:3527017458"><small>OR CALL SWIFT</small>(352) 701-7458</a>
          </div>

        </div>
        <div className="remodel-hero-visual">
          <img className="remodel-hero-main commercial-painting-hero-image" src="/assets/commercial-painting-hero.png" alt="Commercial painter coating a Florida office building from a lift" />
        </div>
      </section>

      <div className="service-hero-estimate-band">
      <LeadForm className="remodel-quick-form commercial-painting-quick-form service-quick-form" onSubmit={continueEstimate} step compactErrors>
          <LeadProtection />
        <div className="remodel-quick-heading">
          <p className="eyebrow">START YOUR ESTIMATE</p>
          <h2>What Needs to Be Painted?</h2>
        </div>
        <label htmlFor="commercial-painting-quick-project"><span className="form-label-text">Painting Scope <span className="form-requirement" aria-hidden="true">*</span></span><select id="commercial-painting-quick-project" value={projectType} onChange={(event) => setProjectType(event.target.value)} required><option value="" disabled>Select scope</option><option>Interior painting</option><option>Exterior painting</option><option>Interior and exterior</option><option>Maintenance repaint</option><option>Other painting project</option></select></label>
        <label htmlFor="commercial-painting-quick-property"><span className="form-label-text">Property Type <span className="form-requirement" aria-hidden="true">*</span></span><select id="commercial-painting-quick-property" value={propertyType} onChange={(event) => setPropertyType(event.target.value)} required><option value="" disabled>Select property</option><option>Office</option><option>Retail</option><option>Restaurant or hospitality</option><option>Medical or professional</option><option>Multi-tenant property</option><option>Other</option></select></label>
        <label htmlFor="commercial-painting-quick-timing"><span className="form-label-text">Ideal Timing <span className="form-requirement" aria-hidden="true">*</span></span><select id="commercial-painting-quick-timing" value={timing} onChange={(event) => setTiming(event.target.value)} required><option value="" disabled>Select timing</option><option>As soon as possible</option><option>Within 1 to 3 months</option><option>Within 3 to 6 months</option><option>Planning ahead</option></select></label>
        <label htmlFor="commercial-painting-quick-zip"><span className="form-label-text">Project ZIP <span className="form-requirement" aria-hidden="true">*</span></span><input id="commercial-painting-quick-zip" inputMode="numeric" placeholder="34604" value={projectZip} onChange={(event) => setProjectZip(event.target.value)} required /></label>
        <button type="submit">Continue estimate <span aria-hidden="true">→</span></button>
      </LeadForm>
      <div className="service-ticker service-hero-trust" aria-label="Swift contractor qualifications"><span>Licensed &amp; Insured</span><b aria-hidden="true">◆</b><span>Written, itemized proposals</span><b aria-hidden="true">◆</b><span>One contractor from start to finish</span></div>
      </div>

      <section className="remodel-services" id="commercial-painting-services">
        <div className="remodel-section-heading">
          <p className="eyebrow">COMMERCIAL PAINTING SERVICES</p>
          <h2>Professional Finishes for Every Part of Your Property.</h2>
        </div>
        <div className="remodel-service-grid">
          {paintingServices.map((service) => (
            <article key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <a className="text-action" href="#commercial-painting-estimate"><span className="text-action-label">Discuss Your Property</span><span className="text-action-arrow" aria-hidden="true">→</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="commercial-coordination commercial-painting-coordination">
        <div className="commercial-coordination-copy">
          <p className="eyebrow">PLANNED AROUND YOUR OPERATION</p>
          <h2>A Better Finish With Less Disruption to Your Property.</h2>
          <p>A commercial repaint affects more than walls. Access, customers, tenants, equipment and operating hours all shape the project plan. Swift accounts for those realities before work begins.</p>
          <a className="button cta-primary" href="#commercial-painting-estimate">Plan a property walkthrough</a>
        </div>
        <div className="commercial-coordination-list">
          <article><span>01</span><div><h3>Careful Preparation</h3><p>Surface repairs, masking and protection are defined around the materials and spaces being painted.</p></div></article>
          <article><span>02</span><div><h3>Practical Scheduling</h3><p>Work areas and project phases are planned around access, operating hours and property priorities.</p></div></article>
          <article><span>03</span><div><h3>Consistent Results</h3><p>One scope keeps preparation, coating systems, finish standards and communication connected.</p></div></article>
        </div>
      </section>

      <section className="commercial-properties commercial-painting-properties">
        <div className="commercial-properties-heading">
          <p className="eyebrow">PROPERTIES WE PAINT</p>
          <h2>Commercial Painting for the Spaces People See and Use Every Day.</h2>
          <p>The right coating plan should reflect the property, traffic, exposure and expectations for the finished space.</p>
        </div>
        <div className="commercial-property-grid">
          <article><span>01</span><h3>Offices &amp; Professional Spaces</h3><p>Clean, professional interior and exterior finishes for offices, medical spaces and client-facing environments.</p></article>
          <article><span>02</span><h3>Retail &amp; Hospitality Properties</h3><p>Durable, appearance-focused painting for stores, restaurants and spaces where presentation affects the customer experience.</p></article>
          <article><span>03</span><h3>Managed &amp; Multi-Tenant Properties</h3><p>Coordinated repainting for common areas, turnover needs, building exteriors and planned property maintenance.</p></article>
        </div>
      </section>

      <ProcessSection id="commercial-painting-process" eyebrow="HOW IT WORKS" title="A Commercial Painting Plan With Clear Next Steps." steps={[
  {
    "title": "Walk the Property",
    "description": "We review surfaces, access, operating needs and the result you need the painting project to achieve."
  },
  {
    "title": "Define the Scope",
    "description": "You receive a written proposal outlining preparation, planned surfaces and included work."
  },
  {
    "title": "Prepare & Paint",
    "description": "Swift protects work areas, completes the agreed preparation and applies the specified finish system."
  },
  {
    "title": "Complete the Walkthrough",
    "description": "We review the finished work together and address final details before project closeout."
  }
]} />

      <section className="commercial-painting-proof-cta">
        <div>
          <p className="eyebrow">ONE CONTRACTOR TO CALL</p>
          <h2>Painting Can Be Part of a Larger Property Improvement Plan.</h2>
          <p>When a project also involves repairs, carpentry, flooring or renovation work, Swift can coordinate the connected scope under one licensed building contractor.</p>
        </div>
        <div className="commercial-painting-proof-actions">
          <a className="button cta-primary" href="#commercial-painting-estimate">Request a commercial estimate</a>
          <a className="text-action" href="/commercial-services"><span className="text-action-label">Explore Commercial Services</span><span className="text-action-arrow" aria-hidden="true">→</span></a>
        </div>
      </section>

      <FaqSection
        eyebrow={<>COMMERCIAL PAINTING QUESTIONS</>}
        title={<>What Property Owners Ask Before Painting Begins.</>}
        description={<>Clear answers make it easier to compare the scope, schedule and contractor responsible for your property.</>}
        items={paintingFaqs}
        estimateHref="#commercial-painting-estimate"
      />

      <section className="remodel-estimate" id="commercial-painting-estimate">
        <div className="remodel-estimate-copy">
          <p className="eyebrow">FREE COMMERCIAL PAINTING ESTIMATE</p>
          <h2>Tell Us About the Property and Painting Scope.</h2>
          <p>Share what needs to be painted, how the property is used and your preferred schedule. Swift serves commercial clients throughout Hernando, Citrus and Pasco Counties.</p>
          <div className="remodel-estimate-points"><span>Free initial project walkthrough</span><span>Written, itemized proposal</span><span>No deposit required</span></div>
          <p className="remodel-estimate-phone">Prefer to call?<a href="tel:3527017458">(352) 701-7458</a></p>
        </div>
        <LeadForm className="remodel-estimate-form" onSubmit={submitEstimate}>
          <LeadProtection />
          <div className="remodel-form-row"><label><span className="form-label-text">Name <span className="form-requirement">(required)</span></span><input id="commercial-painting-name" name="name" autoComplete="name" maxLength={120} placeholder="Your name" required /></label><label><span className="form-label-text">Phone <span className="form-requirement">(required)</span></span><input name="phone" autoComplete="tel" placeholder="(000) 000-0000" type="tel" required /></label></div>
          <div className="remodel-form-row"><label><span className="form-label-text">Business Email <span className="form-requirement">(optional)</span></span><input name="email" autoComplete="email" placeholder="you@company.com" type="email" maxLength={254} /></label><label><span className="form-label-text">Project City or ZIP <span className="form-requirement">(required)</span></span><input name="location" placeholder="Spring Hill" value={projectZip} onChange={(event) => setProjectZip(event.target.value)} required /></label></div>
          <div className="remodel-form-row"><label><span className="form-label-text">Painting Scope <span className="form-requirement">(required)</span></span><select value={projectType} onChange={(event) => setProjectType(event.target.value)} required><option value="" disabled>Select scope</option><option>Interior painting</option><option>Exterior painting</option><option>Interior and exterior</option><option>Maintenance repaint</option><option>Other painting project</option></select></label><label><span className="form-label-text">Property Type <span className="form-requirement">(required)</span></span><select value={propertyType} onChange={(event) => setPropertyType(event.target.value)} required><option value="" disabled>Select property</option><option>Office</option><option>Retail</option><option>Restaurant or hospitality</option><option>Medical or professional</option><option>Multi-tenant property</option><option>Other</option></select></label></div>
          <label><span className="form-label-text">Ideal Timing <span className="form-requirement">(required)</span></span><select value={timing} onChange={(event) => setTiming(event.target.value)} required><option value="" disabled>Select timing</option><option>As soon as possible</option><option>Within 1 to 3 months</option><option>Within 3 to 6 months</option><option>Planning ahead</option></select></label>
          <label><span className="form-label-text">Project Details <span className="form-requirement">(optional)</span></span><textarea name="details" placeholder="Tell us what needs to be painted, whether the property is occupied and any access or scheduling requirements." /></label>
          <button className="button cta-primary" type="submit">{submitted ? "Thank you. We’ll be in touch." : "Get my painting estimate"}</button>
          <small>Your information is only used to respond to your project request.</small>
        </LeadForm>
      </section>

      <SiteFooter />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
