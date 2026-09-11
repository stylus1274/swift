"use client";

import { FormEvent, useState } from "react";
import SiteHeader from "../../components/SiteHeader";

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
  const [openFaq, setOpenFaq] = useState(0);
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

  function submitEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
    <main className="remodel-page commercial-page commercial-painting-page exterior-painting-page">
      <SiteHeader active="services" contactHref="#exterior-painting-estimate" />

      <section className="remodel-hero exterior-painting-hero">
        <div className="remodel-hero-copy">
          <p className="eyebrow">EXTERIOR PAINTING • SPRING HILL, FL</p>
          <h1>Exterior Painting Built for Florida Homes.</h1>
          <p>Careful preparation and durable finishes that protect your home, sharpen its curb appeal and stand up to Florida weather.</p>
          <div className="remodel-hero-actions">
            <a className="button remodel-primary" href="#exterior-painting-quick-project">Get a Free Exterior Painting Estimate</a>
            <a className="remodel-phone" href="tel:3527017458"><small>OR CALL SWIFT</small>(352) 701-7458</a>
          </div>
          <div className="remodel-hero-proof">
            <span>Licensed &amp; insured • CBC1260893</span>
            <span>Written, itemized proposals</span>
            <span>No deposit required</span>
          </div>
        </div>
        <div className="remodel-hero-visual">
          <img className="remodel-hero-main exterior-painting-hero-image" src="/assets/exterior-painting-hero.png" alt="Professional painter applying a fresh exterior finish to a Florida stucco home" />
        </div>
      </section>

      <form className="remodel-quick-form commercial-painting-quick-form" onSubmit={continueEstimate}>
        <div className="remodel-quick-heading">
          <p className="eyebrow">START YOUR ESTIMATE</p>
          <h2>What Are You Planning to Paint?</h2>
        </div>
        <label htmlFor="exterior-painting-quick-project">Exterior Scope<select id="exterior-painting-quick-project" value={projectType} onChange={(event) => setProjectType(event.target.value)} required><option value="" disabled>Select scope</option><option>Whole-home exterior</option><option>Stucco and masonry</option><option>Trim, doors and accents</option><option>Repaint and maintenance</option><option>Other exterior project</option></select></label>
        <label htmlFor="exterior-painting-quick-home">Home Type<select id="exterior-painting-quick-home" value={homeType} onChange={(event) => setHomeType(event.target.value)} required><option value="" disabled>Select home</option><option>Single-story home</option><option>Two-story home</option><option>Townhome or villa</option><option>Other</option></select></label>
        <label htmlFor="exterior-painting-quick-zip">Project ZIP<input id="exterior-painting-quick-zip" inputMode="numeric" placeholder="34609" value={projectZip} onChange={(event) => setProjectZip(event.target.value)} required /></label>
        <label htmlFor="exterior-painting-quick-timing">Ideal Timing<select id="exterior-painting-quick-timing" value={timing} onChange={(event) => setTiming(event.target.value)} required><option value="" disabled>Select timing</option><option>As soon as possible</option><option>Within 1 to 3 months</option><option>Within 3 to 6 months</option><option>Planning ahead</option></select></label>
        <button type="submit">Continue My Estimate <span aria-hidden="true">→</span></button>
      </form>

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
              <a href="#exterior-painting-estimate">Discuss Your Home <b>→</b></a>
            </article>
          ))}
        </div>
      </section>

      <section className="commercial-coordination commercial-painting-coordination">
        <div className="commercial-coordination-copy">
          <p className="eyebrow">PREPARATION FOR FLORIDA WEATHER</p>
          <h2>Florida Exteriors Need More Than a Fresh Coat.</h2>
          <p>Sun, rain and humidity put constant pressure on exterior finishes. Swift starts with the surface condition, then builds a preparation and coating plan around what the home actually needs.</p>
          <a className="button remodel-primary" href="#exterior-painting-estimate">Plan a Home Walkthrough</a>
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

      <section className="remodel-process" id="exterior-painting-process">
        <div className="remodel-process-heading">
          <p className="eyebrow">HOW IT WORKS</p>
          <h2>A Clear Exterior Painting Process From Walkthrough to Finish.</h2>
        </div>
        <div className="remodel-process-grid">
          <article><span>01</span><h3>Inspect the Home</h3><p>We walk the exterior, review the surfaces and discuss the color, condition and result you want.</p></article>
          <article><span>02</span><h3>Define the Scope</h3><p>You receive a written proposal outlining the planned surfaces, preparation and included work.</p></article>
          <article><span>03</span><h3>Prepare &amp; Paint</h3><p>Swift protects adjacent areas, completes the agreed preparation and applies the finish coats.</p></article>
          <article><span>04</span><h3>Complete the Walkthrough</h3><p>We review the finished exterior together and address final details before project closeout.</p></article>
        </div>
      </section>

      <section className="commercial-painting-proof-cta">
        <div>
          <p className="eyebrow">PAINTING WITH A CONTRACTOR’S EYE</p>
          <h2>Surface Repairs and Finish Work Can Stay Under One Plan.</h2>
          <p>When the exterior needs more than paint, Swift can coordinate connected repairs and improvements under one licensed building contractor.</p>
        </div>
        <div className="commercial-painting-proof-actions">
          <a className="button remodel-primary" href="#exterior-painting-estimate">Request a Free Estimate</a>
          <a href="/residential-painting">Explore Residential Painting <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="remodel-faq commercial-faq">
        <div className="remodel-faq-heading">
          <p className="eyebrow">EXTERIOR PAINTING QUESTIONS</p>
          <h2>What Homeowners Ask Before Exterior Painting Begins.</h2>
          <p>Clear answers make it easier to compare preparation, coatings and the contractor responsible for your home.</p>
        </div>
        <div className="remodel-faq-list">
          {exteriorFaqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return <article className={isOpen ? "open" : ""} key={faq.question}><button type="button" aria-expanded={isOpen} onClick={() => setOpenFaq(isOpen ? -1 : index)}><span>{faq.question}</span><b aria-hidden="true">{isOpen ? "×" : "+"}</b></button><div hidden={!isOpen}><p>{faq.answer}</p></div></article>;
          })}
        </div>
      </section>

      <section className="remodel-estimate" id="exterior-painting-estimate">
        <div className="remodel-estimate-copy">
          <p className="eyebrow">FREE EXTERIOR PAINTING ESTIMATE</p>
          <h2>Tell Us About Your Home and Exterior Painting Plans.</h2>
          <p>Share what needs to be painted, the type of home and your preferred timing. Swift serves homeowners throughout Hernando, Citrus and Pasco Counties.</p>
          <div className="remodel-estimate-points"><span>Free project walkthrough</span><span>Written, itemized proposal</span><span>No deposit required</span></div>
          <p className="remodel-estimate-phone">Prefer to call?<a href="tel:3527017458">(352) 701-7458</a></p>
        </div>
        <form className="remodel-estimate-form" onSubmit={submitEstimate}>
          <div className="remodel-form-row"><label>Name<input id="exterior-painting-name" name="name" placeholder="Your name" required /></label><label>Phone<input name="phone" placeholder="(000) 000-0000" type="tel" required /></label></div>
          <div className="remodel-form-row"><label>Email<input name="email" placeholder="you@email.com" type="email" /></label><label>Project City or ZIP<input name="zip" placeholder="Spring Hill" value={projectZip} onChange={(event) => setProjectZip(event.target.value)} required /></label></div>
          <div className="remodel-form-row"><label>Exterior Scope<select value={projectType} onChange={(event) => setProjectType(event.target.value)} required><option value="" disabled>Select scope</option><option>Whole-home exterior</option><option>Stucco and masonry</option><option>Trim, doors and accents</option><option>Repaint and maintenance</option><option>Other exterior project</option></select></label><label>Home Type<select value={homeType} onChange={(event) => setHomeType(event.target.value)} required><option value="" disabled>Select home</option><option>Single-story home</option><option>Two-story home</option><option>Townhome or villa</option><option>Other</option></select></label></div>
          <label>Ideal Timing<select value={timing} onChange={(event) => setTiming(event.target.value)} required><option value="" disabled>Select timing</option><option>As soon as possible</option><option>Within 1 to 3 months</option><option>Within 3 to 6 months</option><option>Planning ahead</option></select></label>
          <label>Project Details<textarea name="details" placeholder="Tell us about the exterior condition, surfaces, color change and any repairs you have noticed." /></label>
          <button className="button remodel-primary" type="submit">{submitted ? "Thank You. We’ll Be in Touch." : "Request My Exterior Painting Estimate"}</button>
          <small>Your information is only used to respond to your project request.</small>
        </form>
      </section>

      <footer className="site-footer remodel-footer">
        <div className="footer-main">
          <div className="footer-brand"><img src="/assets/swift-logo.png" alt="Swift Construction and Painting, LLC" /><p>Licensed and insured building contractor<br />serving Hernando, Citrus and Pasco Counties<br />since 2003.</p></div>
          <div className="footer-column"><h3>Site</h3><a href="/">Home</a><a href="/services">Services</a><a href="/gallery">Portfolio</a><a href="/about">About</a><a href="#exterior-painting-estimate">Contact</a></div>
          <div className="footer-column"><h3>Exterior Painting</h3><a href="#exterior-painting-services">Painting Services</a><a href="#exterior-painting-process">Our Process</a><a href="/residential-painting">Residential Painting</a><a href="#exterior-painting-estimate">Request an Estimate</a></div>
          <div className="footer-contact"><h3>Contact</h3><a className="footer-phone" href="tel:3527017458">(352) 701-7458</a><a href="mailto:swiftconstruction.william@gmail.com">swiftconstruction.william@gmail.com</a><div><a href="/gallery">Project Gallery</a><a href="/contact">Free Estimate</a></div></div>
        </div>
        <div className="footer-bottom"><span>© 2026 SWIFT CONSTRUCTION AND PAINTING, LLC</span><span>“WHEN QUALITY MATTERS”</span></div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
