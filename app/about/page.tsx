"use client";

import { FormEvent, useState } from "react";
import SiteHeader from "../../components/SiteHeader";

import SiteFooter from "@/components/SiteFooter";
const principles = [
  {
    number: "01",
    title: "Clear Scope",
    copy: "Written, itemized proposals define the planned work before a project moves onto the schedule.",
  },
  {
    number: "02",
    title: "Connected Responsibility",
    copy: "One experienced contractor stays accountable for coordination, communication and the finished result.",
  },
  {
    number: "03",
    title: "Careful Finish",
    copy: "Preparation, clean work areas and a final walkthrough help make sure important details are not overlooked.",
  },
];

const aboutFaqs = [
  {
    question: "Is Swift Construction & Painting Licensed and Insured?",
    answer: "Yes. Swift is a licensed and insured Florida contractor. The company operates under Florida license CBC1260893.",
  },
  {
    question: "How Long Has Swift Served the Area?",
    answer: "Swift has served local homeowners, businesses and property owners since 2003.",
  },
  {
    question: "What Types of Projects Does Swift Handle?",
    answer: "Swift handles residential painting, residential remodeling, new-home construction, commercial construction, commercial painting and facility improvement work.",
  },
  {
    question: "Will I Receive a Written Estimate?",
    answer: "Yes. Swift provides written, itemized proposals so the planned scope is clear before work is scheduled.",
  },
  {
    question: "What Areas Does Swift Serve?",
    answer: "Swift serves Spring Hill, Brooksville, Weeki Wachee, Hernando Beach, Ridge Manor and communities throughout Hernando, Citrus and Pasco Counties.",
  },
];

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [project, setProject] = useState("");
  const [projectZip, setProjectZip] = useState("");
  const [timing, setTiming] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function continueEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    document.getElementById("about-estimate")?.scrollIntoView({ behavior: "smooth" });
    window.setTimeout(() => document.getElementById("about-lead-name")?.focus(), 550);
  }

  function submitEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="about-page">
      <SiteHeader active="about" contactHref="#about-estimate" />

      <section className="about-hero">
        <div className="about-hero-copy">
          <p className="eyebrow">ABOUT SWIFT CONSTRUCTION &amp; PAINTING</p>
          <h1>Built Locally. Managed Personally. Finished With Care.</h1>
          <p>Since 2003, Swift has helped homeowners and property owners across Florida&apos;s Nature Coast complete painting, remodeling and construction projects with one experienced contractor responsible for the work.</p>
          <div className="about-hero-actions">
            <a className="button about-primary" href="#about-quick-project">Request a Free Estimate</a>
            <a className="about-phone" href="tel:3527017458"><small>OR CALL SWIFT</small>(352) 701-7458</a>
          </div>
          <div className="about-hero-proof"><span>Licensed &amp; Insured • CBC1260893</span><span>Serving Local Clients Since 2003</span><span>Written, Itemized Proposals</span></div>
        </div>
        <div className="about-hero-visual">
          <img src="/assets/about-contractor-hero.webp" alt="Contractor reviewing plans inside a Florida home renovation" />
        </div>
      </section>

      <form className="about-quick-form" onSubmit={continueEstimate}>
        <div className="about-quick-heading"><p className="eyebrow">START A CONVERSATION</p><h2>What Are You Planning?</h2></div>
        <label htmlFor="about-quick-project">Project Type<select id="about-quick-project" value={project} onChange={(event) => setProject(event.target.value)} required><option value="" disabled>Select project</option><option>Residential painting</option><option>Residential remodeling</option><option>New home construction</option><option>Commercial services</option><option>Other project</option></select></label>
        <label htmlFor="about-quick-zip">Project ZIP<input id="about-quick-zip" inputMode="numeric" placeholder="34609" value={projectZip} onChange={(event) => setProjectZip(event.target.value)} required /></label>
        <label htmlFor="about-quick-timing">Ideal Timing<select id="about-quick-timing" value={timing} onChange={(event) => setTiming(event.target.value)} required><option value="" disabled>Select timing</option><option>As soon as possible</option><option>Within 1–3 months</option><option>Within 3–6 months</option><option>Just researching</option></select></label>
        <button type="submit">Continue My Estimate <span aria-hidden="true">→</span></button>
      </form>

      <section className="about-story">
        <div className="about-story-intro">
          <p className="eyebrow">OUR STORY</p>
          <h2>A Local Contractor Built on Accountability.</h2>
        </div>
        <div className="about-story-copy">
          <p>Swift Construction &amp; Painting was built around a straightforward idea: clients should know who is responsible for their project, understand what is included and feel confident that the details will be handled with care.</p>
          <p>More than two decades later, that approach still guides the work. Whether the project is a fresh exterior finish, a full renovation, a new home or a commercial improvement, Swift connects planning, coordination and finish work under one clear scope.</p>
          <a href="#about-values">What Quality Means to Swift <span aria-hidden="true">↓</span></a>
        </div>
        <aside className="about-story-stat"><strong>20+</strong><span>Years Serving Local Homeowners and Property Owners</span></aside>
      </section>

      <section className="about-values" id="about-values">
        <div className="about-values-heading"><p className="eyebrow">WHEN QUALITY MATTERS</p><h2>The Standard Behind Every Swift Project.</h2><p>Quality is not one final detail. It is the way the project is explained, organized, completed and reviewed from the start.</p></div>
        <div className="about-values-grid">
          {principles.map((principle) => <article key={principle.number}><span>{principle.number}</span><h3>{principle.title}</h3><p>{principle.copy}</p></article>)}
        </div>
      </section>

      <section className="about-accountability">
        <div className="about-accountability-heading"><p className="eyebrow">THE SWIFT APPROACH</p><h2>One Point of Responsibility From the First Walkthrough to the Final One.</h2></div>
        <div className="about-accountability-list">
          <article><span>01</span><div><h3>Listen First</h3><p>Every project begins with the property, priorities and practical outcome you are trying to achieve.</p></div></article>
          <article><span>02</span><div><h3>Define the Work</h3><p>A written proposal gives you a clear view of the planned scope before scheduling begins.</p></div></article>
          <article><span>03</span><div><h3>Coordinate the Details</h3><p>Trade work, preparation and finish details follow one connected project plan.</p></div></article>
          <article><span>04</span><div><h3>Walk the Finished Project</h3><p>The work is reviewed together so final questions and details can be addressed clearly.</p></div></article>
        </div>
      </section>

      <section className="about-services">
        <div className="about-services-heading"><p className="eyebrow">WHAT WE DO</p><h2>One Contractor for the Work Your Property Needs Next.</h2></div>
        <div className="about-services-grid">
          <a href="/residential-painting"><span>01</span><h3>Residential Painting</h3><p>Careful interior and exterior preparation with finishes made for Florida homes.</p><b>Explore Painting →</b></a>
          <a href="/residential-remodeling"><span>02</span><h3>Residential Remodeling</h3><p>Bathrooms, kitchens and whole-home improvements managed under one plan.</p><b>Explore Remodeling →</b></a>
          <a href="/new-home-construction"><span>03</span><h3>New Home Construction</h3><p>Ground-up construction coordinated from planning through final walkthrough.</p><b>Explore New Homes →</b></a>
          <a href="/commercial-services"><span>04</span><h3>Commercial Services</h3><p>Construction, painting and facility improvements planned around your property.</p><b>Explore Commercial Work →</b></a>
        </div>
      </section>

      <section className="about-local">
        <div><p className="eyebrow">LOCAL BY DESIGN</p><h2>Serving Florida&apos;s Nature Coast Since 2003.</h2><p>Swift serves Spring Hill, Brooksville, Weeki Wachee, Hernando Beach, Ridge Manor and communities throughout Hernando, Citrus and Pasco Counties.</p></div>
        <div><a className="button about-primary" href="#about-estimate">Discuss Your Project</a><a href="tel:3527017458">Call (352) 701-7458</a></div>
      </section>

      <section className="about-faq">
        <div className="about-faq-heading"><p className="eyebrow">ABOUT SWIFT</p><h2>What Clients Ask Before the First Walkthrough.</h2><p>Clear answers make it easier to decide whether a contractor is the right fit for your project.</p></div>
        <div className="about-faq-list">
          {aboutFaqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return <article className={isOpen ? "open" : ""} key={faq.question}><button type="button" aria-expanded={isOpen} onClick={() => setOpenFaq(isOpen ? -1 : index)}><span>{faq.question}</span><b aria-hidden="true">{isOpen ? "×" : "+"}</b></button><div hidden={!isOpen}><p>{faq.answer}</p></div></article>;
          })}
        </div>
      </section>

      <section className="about-estimate" id="about-estimate">
        <div className="about-estimate-copy">
          <p className="eyebrow">FREE PROJECT ESTIMATE</p>
          <h2>Tell Us What You Are Planning.</h2>
          <p>Share a few details about the work and where the property is located. Swift serves clients throughout Hernando, Citrus and Pasco Counties.</p>
          <div className="about-estimate-points"><span>Free, No-Obligation Estimate</span><span>Written, Itemized Proposal</span><span>Licensed and Insured Contractor</span></div>
          <p className="about-estimate-phone">Prefer to call?<a href="tel:3527017458">(352) 701-7458</a></p>
        </div>
        <form className="about-estimate-form" onSubmit={submitEstimate}>
          <div className="about-form-row"><label>Name<input id="about-lead-name" name="name" placeholder="Your name" required /></label><label>Phone<input name="phone" placeholder="(000) 000-0000" type="tel" required /></label></div>
          <div className="about-form-row"><label>Email<input name="email" placeholder="you@email.com" type="email" /></label><label>City or ZIP<input name="zip" placeholder="Spring Hill" value={projectZip} onChange={(event) => setProjectZip(event.target.value)} required /></label></div>
          <div className="about-form-row"><label>Project Type<select value={project} onChange={(event) => setProject(event.target.value)} required><option value="" disabled>Select project</option><option>Residential painting</option><option>Residential remodeling</option><option>New home construction</option><option>Commercial services</option><option>Other project</option></select></label><label>Ideal Timing<select value={timing} onChange={(event) => setTiming(event.target.value)} required><option value="" disabled>Select timing</option><option>As soon as possible</option><option>Within 1–3 months</option><option>Within 3–6 months</option><option>Just researching</option></select></label></div>
          <label>Project Details<textarea name="details" placeholder="Tell us about the property, the work you are considering and your ideal timing." /></label>
          <button className="button about-primary" type="submit">{submitted ? "Thank You. We’ll Be in Touch." : "Request My Free Estimate"}</button>
          <small>Your information is only used to respond to your project request.</small>
        </form>
      </section>

      <SiteFooter />
    </main>
  );
}
