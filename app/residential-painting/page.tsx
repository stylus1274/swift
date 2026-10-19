"use client";

import Testimonials from "@/components/Testimonials";

import FaqSection from "@/components/FaqSection";

import { FormEvent, useState } from "react";
import SiteHeader from "../../components/SiteHeader";

import SiteFooter from "@/components/SiteFooter";
import { submitLeadForm } from "@/lib/submitLead";
import LeadProtection from "@/components/LeadProtection";
import LeadForm from "@/components/LeadForm";
const paintServices = [
  {
    number: "01",
    title: "Interior Painting",
    copy: "Walls, ceilings, trim, doors and detailed finish work completed with careful protection and clean lines.",
    image: "/assets/hero-bathroom-remodel.webp",
    alt: "Freshly painted bathroom interior with white walls and custom vanity",
  },
  {
    number: "02",
    title: "Exterior Painting",
    copy: "Durable coatings selected for Florida sun, humidity and rain, with the preparation your exterior needs to last.",
    image: "/assets/florida-stucco-painting.jpg",
    alt: "Painter applying a fresh exterior coating to a Florida stucco home",
  },
  {
    number: "03",
    title: "New Construction Painting",
    copy: "Complete interior and exterior paint systems coordinated with your construction schedule and finish selections.",
    image: "/assets/new-home-exterior.jpg",
    alt: "New Florida home with a clean exterior paint finish",
  },
];

const paintingFaqs = [
  {
    question: "How Long Will My Painting Project Take?",
    answer: "Timing depends on the size, condition and scope of the home. After the walkthrough, Swift provides a written estimate and a clear project schedule before work begins.",
  },
  {
    question: "Do You Repair Drywall and Surface Damage First?",
    answer: "Yes. Proper preparation may include patching minor drywall damage, filling cracks, sanding, caulking and spot priming so the final finish looks clean and lasts.",
  },
  {
    question: "Will You Protect Our Floors, Furniture and Landscaping?",
    answer: "Yes. The crew protects the areas around the work, keeps the site orderly and completes a final cleanup and walkthrough before the project is considered finished.",
  },
  {
    question: "Can You Help Us Choose Paint Colors and Finishes?",
    answer: "Swift can help you narrow the right sheen and finish for each surface and discuss how your color choices will work with the light, materials and style of your home.",
  },
  {
    question: "What Areas Do You Serve?",
    answer: "Swift serves Spring Hill, Brooksville, Weeki Wachee, Hernando Beach, Ridge Manor and communities throughout Hernando, Citrus and Pasco Counties.",
  },
];


export default function ResidentialPaintingPage() {

  const [submitted, setSubmitted] = useState(false);
  const [heroSubmitted, setHeroSubmitted] = useState(false);

  async function submitEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await submitLeadForm(event.currentTarget, "Residential Painting Estimate");
    setSubmitted(true);
  }

  async function submitHeroEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await submitLeadForm(event.currentTarget, "Residential Painting Hero Estimate");
    setHeroSubmitted(true);
  }

  return (
    <main className="painting-page">
      <SiteHeader active="services" contactHref="#paint-estimate" />

      <section className="paint-hero">
        <div className="paint-hero-media" aria-hidden="true">
          <img src="/assets/florida-stucco-painting.jpg" alt="" />
        </div>
        <div className="paint-hero-content">
          <p className="eyebrow">RESIDENTIAL PAINTING • SPRING HILL, FL</p>
          <h1>Paint That Makes the Whole House Feel Finished.</h1>
          <p>Interior and exterior painting with careful preparation, clean work areas and finishes made for Florida homes.</p>
          <div className="paint-hero-actions">
            <a className="button cta-primary" href="#hero-project">Get a free painting estimate</a>
            <a className="paint-hero-call" href="tel:3527017458"><small>OR CALL DIRECTLY</small>(352) 701-7458</a>
          </div>
        </div>
        <LeadForm className="paint-hero-panel paint-hero-form" onSubmit={submitHeroEstimate}>
          <LeadProtection />
          <p className="paint-panel-label">GET A FREE PAINTING ESTIMATE</p>
          <h2>Start Your Free Painting Estimate.</h2>
          <p className="paint-hero-form-intro">Tell us what you would like painted and when you are hoping to begin.</p>
          <div className="paint-hero-form-row paint-hero-project-row">
            <label htmlFor="hero-project"><span className="form-label-text">What are you painting? <span className="form-requirement">(required)</span></span><select id="hero-project" name="hero_project" defaultValue="" required><option value="" disabled>Select project</option><option>Interior rooms</option><option>Home exterior</option><option>Interior and exterior</option><option>New construction</option><option>Other</option></select></label>
            <label htmlFor="hero-timing"><span className="form-label-text">Ideal timing <span className="form-requirement">(required)</span></span><select id="hero-timing" name="hero_timing" defaultValue="" required><option value="" disabled>Select</option><option>As soon as possible</option><option>Within 1 month</option><option>1–3 months</option><option>Just researching</option></select></label>
          </div>
          <div className="paint-hero-form-row paint-hero-contact-row">
            <label htmlFor="hero-name"><span className="form-label-text">Name <span className="form-requirement">(required)</span></span><input id="hero-name" name="hero_name" autoComplete="name" maxLength={120} placeholder="Your name" required /></label>
            <label htmlFor="hero-phone"><span className="form-label-text">Phone <span className="form-requirement">(required)</span></span><input id="hero-phone" name="hero_phone" autoComplete="tel" placeholder="(000) 000-0000" type="tel" required /></label>
          </div>
          <label htmlFor="hero-zip"><span className="form-label-text">Project ZIP code <span className="form-requirement">(required)</span></span></label>
          <input id="hero-zip" name="hero_zip" placeholder="34609" inputMode="numeric" required />
          <button type="submit">{heroSubmitted ? "Thank you. We’ll be in touch." : "Get my free estimate"}<span aria-hidden="true">→</span></button>
          <small className="paint-hero-reassurance">Licensed and insured • Serving local homeowners since 2003</small>
        </LeadForm>
        <p className="paint-hero-caption">EXTERIOR PAINTING • SPRING HILL, FLORIDA</p>
      </section>

      <div className="paint-ticker" aria-label="Painting benefits">
        <span>CAREFUL PREPARATION</span><b>◆</b><span>CLEAN WORK AREAS</span><b>◆</b><span>QUALITY COATINGS</span><b>◆</b><span>FINAL WALKTHROUGH</span>
      </div>

      <section className="paint-intro">
        <div>
          <p className="eyebrow">PAINTING DONE THE RIGHT WAY</p>
          <h2>The Finish Gets Attention.<br />The Preparation Earns It.</h2>
        </div>
        <div className="paint-intro-copy">
          <p>A lasting paint job is not just about the color. It is about protecting the surfaces, correcting problem areas and applying the right coating with control.</p>
          <p>Swift manages the full process, from the initial walkthrough and written estimate through cleanup and the final inspection.</p>
          <a className="text-action" href="#paint-process"><span className="text-action-label">See our painting process</span><span className="text-action-arrow" aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="paint-services" id="painting-services">
        <div className="paint-section-heading">
          <p className="eyebrow">WHAT WE PAINT</p>
          <h2>One Crew. Every Surface Covered.</h2>
        </div>
        <div className="paint-service-grid">
          {paintServices.map((service) => (
            <article key={service.number}>
              <div className="paint-service-image"><img src={service.image} alt={service.alt} /></div>
              <div className="paint-service-body">
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                <a className="text-action" href="#paint-estimate"><span className="text-action-label">Request an estimate</span><span className="text-action-arrow" aria-hidden="true">→</span></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="paint-prep">
        <div className="paint-prep-photo">
          <img src="/assets/hero-bathroom-remodel.webp" alt="Bright finished interior showing clean painted walls and trim" />
          <div className="paint-prep-label"><strong>THE SWIFT STANDARD</strong><span>Quality starts with what happens underneath.</span></div>
        </div>
        <div className="paint-prep-copy">
          <p className="eyebrow">PREPARATION MATTERS</p>
          <h2>Details You May Not Notice.<br />Results You Will.</h2>
          <p className="paint-prep-lead">Every home is different. Swift evaluates the existing surfaces first, then builds the preparation into your written scope of work.</p>
          <ul>
            <li><span>01</span><div><strong>Protect the space</strong><p>Floors, furniture, fixtures and nearby landscaping are covered before work begins.</p></div></li>
            <li><span>02</span><div><strong>Correct the surface</strong><p>Cracks, nail holes and minor damage are repaired, sanded and primed where needed.</p></div></li>
            <li><span>03</span><div><strong>Apply the finish</strong><p>Paint is applied evenly with close attention to cut lines, coverage and consistency.</p></div></li>
            <li><span>04</span><div><strong>Inspect and clean</strong><p>The crew completes a final walkthrough and leaves the work area ready to enjoy.</p></div></li>
          </ul>
        </div>
      </section>

      <section className="paint-projects">
        <div className="paint-project-heading">
          <div><p className="eyebrow">SELECTED PAINTING WORK</p><h2>Fresh Finishes.<br />Close to Home.</h2></div>
          <p>Real project details and photos will replace the mockup content before launch.</p>
        </div>
        <div className="paint-project-grid">
          <article className="paint-project-main">
            <img src="/assets/florida-stucco-painting.jpg" alt="Exterior painting project on a Florida stucco home" />
            <div><span>EXTERIOR PAINTING</span><h3>Complete Stucco Repaint</h3><p>Spring Hill, Florida</p></div>
          </article>
          <article className="paint-project-small">
            <img src="/assets/hero-bathroom-remodel.webp" alt="Finished residential interior with fresh wall and trim paint" />
            <div><span>INTERIOR PAINTING</span><h3>Whole-Home Interior Refresh</h3><p>Brooksville, Florida</p></div>
          </article>
        </div>
        <div className="paint-project-cta">
          <p>Planning something similar?</p>
          <a className="button cta-primary" href="#paint-estimate">Get an estimate for your home</a>
        </div>
      </section>

      <section className="paint-process" id="paint-process">
        <div className="paint-process-heading">
          <p className="eyebrow">HOW IT WORKS</p>
          <h2>A Clear Path From Color Ideas to Final Walkthrough.</h2>
        </div>
        <div className="paint-process-grid">
          <article><span>01</span><h3>Walk the Project</h3><p>We look at the surfaces, discuss your goals and identify the preparation the home needs.</p></article>
          <article><span>02</span><h3>Review Your Estimate</h3><p>You receive a written, itemized scope so you know what is included before scheduling.</p></article>
          <article><span>03</span><h3>Prepare and Paint</h3><p>Our crew protects the work area, prepares the surfaces and applies the selected finishes.</p></article>
          <article><span>04</span><h3>Walk It Together</h3><p>We inspect the completed work with you and address final details before wrapping up.</p></article>
        </div>
      </section>

      <Testimonials topic="painting" title="Chosen for the Details. Recommended for the Experience." estimateHref="#paint-estimate" />

      <FaqSection
        eyebrow={<>PAINTING QUESTIONS</>}
        title={<>What Homeowners Ask Before Choosing a Painter.</>}
        description={<>Clear answers help you compare estimates and know what to expect once the project begins.</>}
        items={paintingFaqs}
        estimateHref="#paint-estimate"
      />

      <section className="paint-estimate" id="paint-estimate">
        <div className="paint-estimate-copy">
          <p className="eyebrow">FREE PAINTING ESTIMATE</p>
          <h2>Let’s Talk About Your Home.</h2>
          <p>Tell us what you are planning. Swift serves homeowners throughout Hernando, Citrus and Pasco Counties.</p>
          <div className="paint-estimate-points">
            <span>Free, no-obligation estimate</span>
            <span>Written, itemized proposal</span>
            <span>Licensed and insured contractor</span>
          </div>
          <p className="paint-estimate-phone">Prefer to call?<a href="tel:3527017458">(352) 701-7458</a></p>
        </div>
        <LeadForm className="paint-estimate-form" onSubmit={submitEstimate}>
          <LeadProtection />
          <div className="paint-form-row">
            <label><span className="form-label-text">Name <span className="form-requirement">(required)</span></span><input name="name" autoComplete="name" maxLength={120} placeholder="Your name" required /></label>
            <label><span className="form-label-text">Phone <span className="form-requirement">(required)</span></span><input name="phone" autoComplete="tel" placeholder="(000) 000-0000" type="tel" required /></label>
          </div>
          <div className="paint-form-row">
            <label><span className="form-label-text">Email <span className="form-requirement">(optional)</span></span><input name="email" autoComplete="email" placeholder="you@email.com" type="email" maxLength={254} /></label>
            <label><span className="form-label-text">City or ZIP <span className="form-requirement">(required)</span></span><input name="city" placeholder="Spring Hill" required /></label>
          </div>
          <label><span className="form-label-text">What would you like painted? <span className="form-requirement">(optional)</span></span><select name="project" defaultValue=""><option value="" disabled>Select your project</option><option>Interior painting</option><option>Exterior painting</option><option>Interior and exterior</option><option>New construction painting</option><option>Other painting project</option></select></label>
          <label><span className="form-label-text">Project details <span className="form-requirement">(optional)</span></span><textarea name="details" placeholder="Tell us a little about the rooms, exterior or surfaces you would like painted." /></label>
          <button className="button cta-primary" type="submit">{submitted ? "Thank you. We’ll be in touch." : "Get my free estimate"}</button>
          <small>Your information is only used to respond to your project request.</small>
        </LeadForm>
      </section>

      <SiteFooter />
    </main>
  );
}
