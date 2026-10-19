"use client";
import ProcessSection from "../../components/ProcessSection";


import FaqSection from "@/components/FaqSection";

import { FormEvent, useState } from "react";
import SiteHeader from "../../components/SiteHeader";

import SiteFooter from "@/components/SiteFooter";
import { submitLeadForm } from "@/lib/submitLead";
import LeadProtection from "@/components/LeadProtection";
import LeadForm from "@/components/LeadForm";
const flooringServices = [
  {
    number: "01",
    title: "Luxury Vinyl Plank",
    copy: "Install durable, low-maintenance plank flooring with a coordinated plan for layout, transitions and finished edges.",
  },
  {
    number: "02",
    title: "Tile Flooring",
    copy: "Create a clean, lasting tile surface with careful layout, substrate preparation and detail work around each room.",
  },
  {
    number: "03",
    title: "Laminate Flooring",
    copy: "Refresh living spaces with practical laminate options installed for consistent alignment and everyday use.",
  },
  {
    number: "04",
    title: "Trim & Transitions",
    copy: "Complete the new floor with baseboards, thresholds, transitions and carpentry details that make the project feel finished.",
  },
];

const flooringFaqs = [
  {
    question: "What Types of Flooring Does Swift Install?",
    answer: "Swift can plan installation for luxury vinyl plank, tile, laminate and related trim and transition work. The best option depends on the room, subfloor, moisture exposure and the way the space is used.",
  },
  {
    question: "Can You Remove the Existing Flooring?",
    answer: "Yes. Existing-floor removal and disposal can be included in the written scope when needed. The walkthrough helps identify the current material, access and preparation required before the new floor is installed.",
  },
  {
    question: "What Happens if the Subfloor Needs Repair?",
    answer: "Swift reviews visible subfloor conditions and can include appropriate preparation or repairs in the proposal. If concealed damage is found after removal, the condition and next step are discussed before additional work proceeds.",
  },
  {
    question: "How Long Does Flooring Installation Take?",
    answer: "Timing depends on square footage, material, room layout, removal needs and subfloor condition. Swift provides a practical project schedule after the walkthrough and final material selection.",
  },
  {
    question: "What Areas Do You Serve?",
    answer: "Swift serves homeowners throughout Hernando, Citrus and Pasco Counties, including Spring Hill, Brooksville, Weeki Wachee, Hernando Beach, Ridge Manor and surrounding communities.",
  },
];

export default function FlooringPage() {

  const [flooringType, setFlooringType] = useState("");
  const [projectSize, setProjectSize] = useState("");
  const [projectZip, setProjectZip] = useState("");
  const [timing, setTiming] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function continueEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    document.getElementById("flooring-estimate")?.scrollIntoView({ behavior: "smooth" });
    window.setTimeout(() => document.getElementById("flooring-name")?.focus(), 550);
  }

  async function submitEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await submitLeadForm(event.currentTarget, "Flooring Estimate");
    setSubmitted(true);
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Residential Flooring Installation",
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Swift Construction & Painting, LLC",
      telephone: "+1-352-701-7458",
    },
    areaServed: ["Hernando County", "Citrus County", "Pasco County"],
    description: "Luxury vinyl plank, tile and laminate flooring installation for Florida homes.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: flooringFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main className="remodel-page commercial-page commercial-painting-page flooring-page">
      <SiteHeader active="services" contactHref="#flooring-estimate" />

      <section className="remodel-hero flooring-hero">
        <div className="remodel-hero-copy">
          <p className="eyebrow">FLOORING INSTALLATION • SPRING HILL, FL</p>
          <h1>Flooring Installation That Brings the Whole Room Together.</h1>
          <p>Careful layout, solid preparation and clean finish work for durable floors that feel right throughout your home.</p>
          <div className="remodel-hero-actions">
            <a className="button cta-primary" href="#flooring-quick-project">Get a free flooring estimate</a>
            <a className="remodel-phone" href="tel:3527017458"><small>OR CALL SWIFT</small>(352) 701-7458</a>
          </div>
          <div className="remodel-hero-proof">
            <span>Licensed &amp; insured • CBC1260893</span>
            <span>Written, itemized proposals</span>
            <span>No deposit required</span>
          </div>
        </div>
        <div className="remodel-hero-visual">
          <img className="remodel-hero-main flooring-hero-image" src="/assets/flooring-hero.png" alt="Professional installer fitting light oak plank flooring in a Florida living room" />
        </div>
      </section>

      <LeadForm className="remodel-quick-form commercial-painting-quick-form" onSubmit={continueEstimate} step>
          <LeadProtection />
        <div className="remodel-quick-heading">
          <p className="eyebrow">START YOUR ESTIMATE</p>
          <h2>What Flooring Are You Planning?</h2>
        </div>
        <label htmlFor="flooring-quick-project"><span className="form-label-text">Flooring Type <span className="form-requirement">(required)</span></span><select id="flooring-quick-project" value={flooringType} onChange={(event) => setFlooringType(event.target.value)} required><option value="" disabled>Select flooring</option><option>Luxury vinyl plank</option><option>Tile flooring</option><option>Laminate flooring</option><option>Not sure yet</option><option>Other flooring project</option></select></label>
        <label htmlFor="flooring-quick-size"><span className="form-label-text">Approximate Size <span className="form-requirement">(required)</span></span><select id="flooring-quick-size" value={projectSize} onChange={(event) => setProjectSize(event.target.value)} required><option value="" disabled>Select size</option><option>One room</option><option>Two to three rooms</option><option>Several rooms</option><option>Whole-home flooring</option><option>Not sure yet</option></select></label>
        <label htmlFor="flooring-quick-zip"><span className="form-label-text">Project ZIP <span className="form-requirement">(required)</span></span><input id="flooring-quick-zip" inputMode="numeric" placeholder="34609" value={projectZip} onChange={(event) => setProjectZip(event.target.value)} required /></label>
        <label htmlFor="flooring-quick-timing"><span className="form-label-text">Ideal Timing <span className="form-requirement">(required)</span></span><select id="flooring-quick-timing" value={timing} onChange={(event) => setTiming(event.target.value)} required><option value="" disabled>Select timing</option><option>As soon as possible</option><option>Within 1 to 3 months</option><option>Within 3 to 6 months</option><option>Planning ahead</option></select></label>
        <button type="submit">Continue my estimate <span aria-hidden="true">→</span></button>
      </LeadForm>

      <section className="remodel-services" id="flooring-services">
        <div className="remodel-section-heading">
          <p className="eyebrow">FLOORING SERVICES</p>
          <h2>Flooring and Finish Work Managed as One Complete Project.</h2>
        </div>
        <div className="remodel-service-grid">
          {flooringServices.map((service) => (
            <article key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <a className="text-action" href="#flooring-estimate"><span className="text-action-label">Discuss Your Project</span><span className="text-action-arrow" aria-hidden="true">→</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="commercial-coordination commercial-painting-coordination">
        <div className="commercial-coordination-copy">
          <p className="eyebrow">WHAT IS UNDERNEATH MATTERS</p>
          <h2>A Better Finished Floor Starts With the Surface Below It.</h2>
          <p>The material is only part of the project. Existing flooring, subfloor condition, room transitions and finish details all affect how the new floor looks and performs.</p>
          <a className="button cta-primary" href="#flooring-estimate">Plan a home walkthrough</a>
        </div>
        <div className="commercial-coordination-list">
          <article><span>01</span><div><h3>Review the Existing Floor</h3><p>We identify the current material, transitions, access and visible conditions before defining the work.</p></div></article>
          <article><span>02</span><div><h3>Prepare the Subfloor</h3><p>Removal, cleaning, repairs and leveling needs are coordinated around the selected flooring system.</p></div></article>
          <article><span>03</span><div><h3>Finish the Edges</h3><p>Baseboards, thresholds and transitions are planned so the floor connects cleanly from room to room.</p></div></article>
        </div>
      </section>

      <section className="commercial-properties commercial-painting-properties">
        <div className="commercial-properties-heading">
          <p className="eyebrow">FLOORING FOR THE WAY YOU LIVE</p>
          <h2>The Right Material and Layout for Every Part of the Home.</h2>
          <p>Each room has different traffic, moisture and maintenance needs. The flooring plan should account for all three.</p>
        </div>
        <div className="commercial-property-grid">
          <article><span>01</span><h3>Living Areas &amp; Bedrooms</h3><p>Consistent plank or laminate flooring for connected rooms, hallways and everyday living spaces.</p></article>
          <article><span>02</span><h3>Kitchens &amp; Bathrooms</h3><p>Practical flooring choices planned around spills, moisture, cleaning and high daily use.</p></article>
          <article><span>03</span><h3>Whole-Home Renovations</h3><p>Flooring coordinated with cabinetry, paint, trim and other remodeling work under one project plan.</p></article>
        </div>
      </section>

      <ProcessSection id="flooring-process" eyebrow="HOW IT WORKS" title="A Clear Flooring Process From Walkthrough to Final Transition." steps={[
  {
    "title": "Review the Rooms",
    "description": "We discuss materials, inspect the existing floor and review how the spaces connect."
  },
  {
    "title": "Define the Scope",
    "description": "You receive a written proposal covering removal, preparation, installation and included finish work."
  },
  {
    "title": "Prepare & Install",
    "description": "Swift prepares the surface, lays out the material and completes the planned installation."
  },
  {
    "title": "Complete the Walkthrough",
    "description": "We review the finished floor, transitions and final details together before project closeout."
  }
]} />

      <section className="commercial-painting-proof-cta">
        <div>
          <p className="eyebrow">ONE CONTRACTOR FOR THE WHOLE ROOM</p>
          <h2>Flooring Can Be Coordinated With the Rest of Your Remodel.</h2>
          <p>Swift can connect flooring with cabinetry, carpentry, painting and other room improvements under one licensed building contractor.</p>
        </div>
        <div className="commercial-painting-proof-actions">
          <a className="button cta-primary" href="#flooring-estimate">Request a free estimate</a>
          <a className="text-action" href="/residential-remodeling"><span className="text-action-label">Explore Residential Remodeling</span><span className="text-action-arrow" aria-hidden="true">→</span></a>
        </div>
      </section>

      <FaqSection
        eyebrow={<>FLOORING QUESTIONS</>}
        title={<>What Homeowners Ask Before Flooring Installation Begins.</>}
        description={<>Clear answers make it easier to compare materials, preparation and the contractor responsible for your home.</>}
        items={flooringFaqs}
        estimateHref="#flooring-estimate"
      />

      <section className="remodel-estimate" id="flooring-estimate">
        <div className="remodel-estimate-copy">
          <p className="eyebrow">FREE FLOORING ESTIMATE</p>
          <h2>Tell Us About the Rooms and Flooring You Are Planning.</h2>
          <p>Share the material, approximate project size and preferred timing. Swift serves homeowners throughout Hernando, Citrus and Pasco Counties.</p>
          <div className="remodel-estimate-points"><span>Free project walkthrough</span><span>Written, itemized proposal</span><span>No deposit required</span></div>
          <p className="remodel-estimate-phone">Prefer to call?<a href="tel:3527017458">(352) 701-7458</a></p>
        </div>
        <LeadForm className="remodel-estimate-form" onSubmit={submitEstimate}>
          <LeadProtection />
          <div className="remodel-form-row"><label><span className="form-label-text">Name <span className="form-requirement">(required)</span></span><input id="flooring-name" name="name" autoComplete="name" maxLength={120} placeholder="Your name" required /></label><label><span className="form-label-text">Phone <span className="form-requirement">(required)</span></span><input name="phone" autoComplete="tel" placeholder="(000) 000-0000" type="tel" required /></label></div>
          <div className="remodel-form-row"><label><span className="form-label-text">Email <span className="form-requirement">(optional)</span></span><input name="email" autoComplete="email" placeholder="you@email.com" type="email" maxLength={254} /></label><label><span className="form-label-text">Project City or ZIP <span className="form-requirement">(required)</span></span><input name="location" placeholder="Spring Hill" value={projectZip} onChange={(event) => setProjectZip(event.target.value)} required /></label></div>
          <div className="remodel-form-row"><label><span className="form-label-text">Flooring Type <span className="form-requirement">(required)</span></span><select value={flooringType} onChange={(event) => setFlooringType(event.target.value)} required><option value="" disabled>Select flooring</option><option>Luxury vinyl plank</option><option>Tile flooring</option><option>Laminate flooring</option><option>Not sure yet</option><option>Other flooring project</option></select></label><label><span className="form-label-text">Approximate Size <span className="form-requirement">(required)</span></span><select value={projectSize} onChange={(event) => setProjectSize(event.target.value)} required><option value="" disabled>Select size</option><option>One room</option><option>Two to three rooms</option><option>Several rooms</option><option>Whole-home flooring</option><option>Not sure yet</option></select></label></div>
          <label><span className="form-label-text">Ideal Timing <span className="form-requirement">(required)</span></span><select value={timing} onChange={(event) => setTiming(event.target.value)} required><option value="" disabled>Select timing</option><option>As soon as possible</option><option>Within 1 to 3 months</option><option>Within 3 to 6 months</option><option>Planning ahead</option></select></label>
          <label><span className="form-label-text">Project Details <span className="form-requirement">(optional)</span></span><textarea name="details" placeholder="Tell us which rooms need flooring, what is there now and whether you have selected a material." /></label>
          <button className="button cta-primary" type="submit">{submitted ? "Thank you. We’ll be in touch." : "Get my flooring estimate"}</button>
          <small>Your information is only used to respond to your project request.</small>
        </LeadForm>
      </section>

      <SiteFooter />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
