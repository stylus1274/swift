"use client";
import ProcessSection from "../../components/ProcessSection";


import FaqSection from "@/components/FaqSection";

import { FormEvent, useState } from "react";
import SiteHeader from "../../components/SiteHeader";

import SiteFooter from "@/components/SiteFooter";
import { submitLeadForm } from "@/lib/submitLead";
import LeadProtection from "@/components/LeadProtection";
import LeadForm from "@/components/LeadForm";
const exteriorServices = [
  {
    number: "01",
    title: "Whole-Home Exterior Painting",
    copy: "Give the full exterior a consistent, finished appearance with preparation and coatings planned around the existing surfaces.",
  },
  {
    number: "02",
    title: "Stucco & Masonry Coatings",
    copy: "Address porous, weather-exposed stucco and masonry with cleaning, repairs, primer and finish coats suited to the surface.",
  },
  {
    number: "03",
    title: "Trim, Doors & Accents",
    copy: "Refresh fascia, soffits, shutters, doors and architectural details with clean lines and a coordinated color plan.",
  },
  {
    number: "04",
    title: "Repaints & Maintenance",
    copy: "Correct fading, chalking and worn finishes before Florida sun and moisture create larger exterior maintenance needs.",
  },
];

const exteriorFaqs = [
  {
    question: "What Is the Best Time to Paint a House Exterior in Florida?",
    answer: "Exterior painting can be scheduled through much of the year when the surface is dry and temperature, humidity and rain conditions support the coating system. Swift plans the work around the forecast and manufacturer requirements.",
  },
  {
    question: "How Do You Prepare Stucco Before Painting?",
    answer: "Preparation depends on the condition of the home. The scope may include cleaning, scraping loose material, repairing minor cracks, caulking gaps, spot priming and protecting windows, plants and hardscape before finish coats are applied.",
  },
  {
    question: "How Long Does Exterior House Painting Take?",
    answer: "Timing varies with the size of the home, surface condition, preparation needs and weather. After the property walkthrough, Swift provides a practical schedule with the written proposal.",
  },
  {
    question: "Can You Help Us Choose Exterior Colors and Coatings?",
    answer: "Yes. Swift can help homeowners think through the main body, trim and accent colors, as well as coating options appropriate for the home's surfaces and Florida exposure.",
  },
  {
    question: "What Areas Do You Serve?",
    answer: "Swift serves homeowners throughout Hernando, Citrus and Pasco Counties, including Spring Hill, Brooksville, Weeki Wachee, Hernando Beach, Ridge Manor and surrounding communities.",
  },
];

export default function ExteriorPaintingPage() {

  const [projectType, setProjectType] = useState("");
  const [homeType, setHomeType] = useState("");
  const [projectZip, setProjectZip] = useState("");
  const [timing, setTiming] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function continueEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    document.getElementById("exterior-painting-estimate")?.scrollIntoView({ behavior: "smooth" });
    window.setTimeout(() => document.getElementById("exterior-painting-name")?.focus(), 550);
  }

  async function submitEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await submitLeadForm(event.currentTarget, "Exterior Painting Estimate");
    setSubmitted(true);
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Exterior House Painting",
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Swift Construction & Painting, LLC",
      telephone: "+1-352-701-7458",
    },
    areaServed: ["Hernando County", "Citrus County", "Pasco County"],
    description: "Exterior house painting, stucco coatings and trim painting for Florida homeowners.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: exteriorFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main className="remodel-page commercial-page commercial-painting-page exterior-painting-page service-hero-page">
      <SiteHeader active="services" contactHref="#exterior-painting-estimate" />

      <section className="remodel-hero exterior-painting-hero">
        <div className="remodel-hero-copy">
          <p className="eyebrow"><span>EXTERIOR PAINTING</span> <span className="service-hero-county"><span className="service-hero-diamond" aria-hidden="true" />HERNANDO</span> <span className="service-hero-county"><span className="service-hero-diamond" aria-hidden="true" />CITRUS</span> <span className="service-hero-county"><span className="service-hero-diamond" aria-hidden="true" />PASCO</span></p>
          <h1>Exterior Painting Built for Florida Homes.</h1>
          <p>Careful preparation and durable finishes that protect your home, sharpen its curb appeal and stand up to Florida weather.</p>
          <div className="remodel-hero-actions">
            <a className="button cta-primary" href="#exterior-painting-quick-project">Get a free painting estimate</a>
            <a className="remodel-phone" href="tel:3527017458"><small>OR CALL SWIFT</small>(352) 701-7458</a>
          </div>

        </div>
        <div className="remodel-hero-visual">
          <img className="remodel-hero-main exterior-painting-hero-image" src="/assets/exterior-painting-hero.png" alt="Professional painter applying a fresh exterior finish to a Florida stucco home" />
        </div>
      </section>

      <div className="service-hero-estimate-band">
      <LeadForm className="remodel-quick-form commercial-painting-quick-form service-quick-form" onSubmit={continueEstimate} step compactErrors>
          <LeadProtection />
        <div className="remodel-quick-heading">
          <p className="eyebrow">START YOUR ESTIMATE</p>
          <h2>What Are You Planning to Paint?</h2>
        </div>
        <label htmlFor="exterior-painting-quick-project"><span className="form-label-text">Exterior Scope <span className="form-requirement" aria-hidden="true">*</span></span><select id="exterior-painting-quick-project" value={projectType} onChange={(event) => setProjectType(event.target.value)} required><option value="" disabled>Select scope</option><option>Whole-home exterior</option><option>Stucco and masonry</option><option>Trim, doors and accents</option><option>Repaint and maintenance</option><option>Other exterior project</option></select></label>
        <label htmlFor="exterior-painting-quick-home"><span className="form-label-text">Home Type <span className="form-requirement" aria-hidden="true">*</span></span><select id="exterior-painting-quick-home" value={homeType} onChange={(event) => setHomeType(event.target.value)} required><option value="" disabled>Select home</option><option>Single-story home</option><option>Two-story home</option><option>Townhome or villa</option><option>Other</option></select></label>
        <label htmlFor="exterior-painting-quick-timing"><span className="form-label-text">Ideal Timing <span className="form-requirement" aria-hidden="true">*</span></span><select id="exterior-painting-quick-timing" value={timing} onChange={(event) => setTiming(event.target.value)} required><option value="" disabled>Select timing</option><option>As soon as possible</option><option>Within 1 to 3 months</option><option>Within 3 to 6 months</option><option>Planning ahead</option></select></label>
        <label htmlFor="exterior-painting-quick-zip"><span className="form-label-text">Project ZIP <span className="form-requirement" aria-hidden="true">*</span></span><input id="exterior-painting-quick-zip" inputMode="numeric" placeholder="34604" value={projectZip} onChange={(event) => setProjectZip(event.target.value)} required /></label>
        <button type="submit">Continue estimate <span aria-hidden="true">→</span></button>
      </LeadForm>
      <div className="service-ticker service-hero-trust" aria-label="Swift contractor qualifications"><span>Licensed &amp; Insured</span><b aria-hidden="true">◆</b><span>Written, itemized proposals</span><b aria-hidden="true">◆</b><span>One contractor from start to finish</span></div>
      </div>

      <section className="remodel-services" id="exterior-painting-services">
        <div className="remodel-section-heading">
          <p className="eyebrow">EXTERIOR PAINTING SERVICES</p>
          <h2>A Complete Painting Plan for the Outside of Your Home.</h2>
        </div>
        <div className="remodel-service-grid">
          {exteriorServices.map((service) => (
            <article key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <a className="text-action" href="#exterior-painting-estimate"><span className="text-action-label">Discuss Your Home</span><span className="text-action-arrow" aria-hidden="true">→</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="commercial-coordination commercial-painting-coordination">
        <div className="commercial-coordination-copy">
          <p className="eyebrow">PREPARATION FOR FLORIDA WEATHER</p>
          <h2>Florida Exteriors Need More Than a Fresh Coat.</h2>
          <p>Sun, rain and humidity put constant pressure on exterior finishes. Swift starts with the surface condition, then builds a preparation and coating plan around what the home actually needs.</p>
          <a className="button cta-primary" href="#exterior-painting-estimate">Plan a home walkthrough</a>
        </div>
        <div className="commercial-coordination-list">
          <article><span>01</span><div><h3>Evaluate the Surfaces</h3><p>We review existing coatings, stucco, trim, joints and weather-exposed areas before defining the work.</p></div></article>
          <article><span>02</span><div><h3>Prepare With Care</h3><p>Cleaning, repairs, scraping, caulking, priming and protection are matched to the condition of the home.</p></div></article>
          <article><span>03</span><div><h3>Apply the Right Finish</h3><p>The coating plan accounts for surface type, color change, exposure and the consistent appearance you expect.</p></div></article>
        </div>
      </section>

      <section className="commercial-properties commercial-painting-properties">
        <div className="commercial-properties-heading">
          <p className="eyebrow">SURFACES WE PAINT</p>
          <h2>One Coordinated Finish From the Main Walls to the Final Details.</h2>
          <p>Exterior painting looks best when the body, trim and accents are planned together instead of treated as disconnected tasks.</p>
        </div>
        <div className="commercial-property-grid">
          <article><span>01</span><h3>Stucco Homes</h3><p>Preparation and finish coats planned for Florida stucco, including faded, chalking and previously repaired surfaces.</p></article>
          <article><span>02</span><h3>Masonry &amp; Concrete</h3><p>Coating plans for concrete walls, masonry details and other porous exterior surfaces around the property.</p></article>
          <article><span>03</span><h3>Trim, Fascia &amp; Doors</h3><p>Clean finish work for soffits, fascia, entry doors, shutters and architectural details that complete the exterior.</p></article>
        </div>
      </section>

      <ProcessSection id="exterior-painting-process" eyebrow="HOW IT WORKS" title="A Clear Exterior Painting Process From Walkthrough to Finish." steps={[
  {
    "title": "Inspect the Home",
    "description": "We walk the exterior, review the surfaces and discuss the color, condition and result you want."
  },
  {
    "title": "Define the Scope",
    "description": "You receive a written proposal outlining the planned surfaces, preparation and included work."
  },
  {
    "title": "Prepare & Paint",
    "description": "Swift protects adjacent areas, completes the agreed preparation and applies the finish coats."
  },
  {
    "title": "Complete the Walkthrough",
    "description": "We review the finished exterior together and address final details before project closeout."
  }
]} />

      <section className="commercial-painting-proof-cta">
        <div>
          <p className="eyebrow">PAINTING WITH A CONTRACTOR’S EYE</p>
          <h2>Surface Repairs and Finish Work Can Stay Under One Plan.</h2>
          <p>When the exterior needs more than paint, Swift can coordinate connected repairs and improvements under one licensed building contractor.</p>
        </div>
        <div className="commercial-painting-proof-actions">
          <a className="button cta-primary" href="#exterior-painting-estimate">Request a free estimate</a>
          <a className="text-action" href="/residential-painting"><span className="text-action-label">Explore Residential Painting</span><span className="text-action-arrow" aria-hidden="true">→</span></a>
        </div>
      </section>

      <FaqSection
        eyebrow={<>EXTERIOR PAINTING QUESTIONS</>}
        title={<>What Homeowners Ask Before Exterior Painting Begins.</>}
        description={<>Clear answers make it easier to compare preparation, coatings and the contractor responsible for your home.</>}
        items={exteriorFaqs}
        estimateHref="#exterior-painting-estimate"
      />

      <section className="remodel-estimate" id="exterior-painting-estimate">
        <div className="remodel-estimate-copy">
          <p className="eyebrow">FREE EXTERIOR PAINTING ESTIMATE</p>
          <h2>Tell Us About Your Home and Exterior Painting Plans.</h2>
          <p>Share what needs to be painted, the type of home and your preferred timing. Swift serves homeowners throughout Hernando, Citrus and Pasco Counties.</p>
          <div className="remodel-estimate-points"><span>Free project walkthrough</span><span>Written, itemized proposal</span><span>No deposit required</span></div>
          <p className="remodel-estimate-phone">Prefer to call?<a href="tel:3527017458">(352) 701-7458</a></p>
        </div>
        <LeadForm className="remodel-estimate-form" onSubmit={submitEstimate}>
          <LeadProtection />
          <div className="remodel-form-row"><label><span className="form-label-text">Name <span className="form-requirement">(required)</span></span><input id="exterior-painting-name" name="name" autoComplete="name" maxLength={120} placeholder="Your name" required /></label><label><span className="form-label-text">Phone <span className="form-requirement">(required)</span></span><input name="phone" autoComplete="tel" placeholder="(000) 000-0000" type="tel" required /></label></div>
          <div className="remodel-form-row"><label><span className="form-label-text">Email <span className="form-requirement">(optional)</span></span><input name="email" autoComplete="email" placeholder="you@email.com" type="email" maxLength={254} /></label><label><span className="form-label-text">Project City or ZIP <span className="form-requirement">(required)</span></span><input name="location" placeholder="Spring Hill" value={projectZip} onChange={(event) => setProjectZip(event.target.value)} required /></label></div>
          <div className="remodel-form-row"><label><span className="form-label-text">Exterior Scope <span className="form-requirement">(required)</span></span><select value={projectType} onChange={(event) => setProjectType(event.target.value)} required><option value="" disabled>Select scope</option><option>Whole-home exterior</option><option>Stucco and masonry</option><option>Trim, doors and accents</option><option>Repaint and maintenance</option><option>Other exterior project</option></select></label><label><span className="form-label-text">Home Type <span className="form-requirement">(required)</span></span><select value={homeType} onChange={(event) => setHomeType(event.target.value)} required><option value="" disabled>Select home</option><option>Single-story home</option><option>Two-story home</option><option>Townhome or villa</option><option>Other</option></select></label></div>
          <label><span className="form-label-text">Ideal Timing <span className="form-requirement">(required)</span></span><select value={timing} onChange={(event) => setTiming(event.target.value)} required><option value="" disabled>Select timing</option><option>As soon as possible</option><option>Within 1 to 3 months</option><option>Within 3 to 6 months</option><option>Planning ahead</option></select></label>
          <label><span className="form-label-text">Project Details <span className="form-requirement">(optional)</span></span><textarea name="details" placeholder="Tell us about the exterior condition, surfaces, color change and any repairs you have noticed." /></label>
          <button className="button cta-primary" type="submit">{submitted ? "Thank you. We’ll be in touch." : "Get my exterior painting estimate"}</button>
          <small>Your information is only used to respond to your project request.</small>
        </LeadForm>
      </section>

      <SiteFooter />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
