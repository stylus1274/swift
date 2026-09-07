"use client";

import { FormEvent, useState } from "react";
import SiteHeader from "../../components/SiteHeader";

const interiorServices = [
  {
    number: "01",
    title: "Whole-Home Interior Painting",
    copy: "Create a consistent finish across connected rooms with one coordinated plan for colors, preparation and sequencing.",
  },
  {
    number: "02",
    title: "Walls & Ceilings",
    copy: "Refresh high-use rooms, open living areas and ceilings with clean coverage and finishes selected for the space.",
  },
  {
    number: "03",
    title: "Trim, Doors & Details",
    copy: "Complete the room with crisp baseboards, crown molding, doors, casings and architectural details.",
  },
  {
    number: "04",
    title: "Cabinets & Built-Ins",
    copy: "Update cabinetry and built-ins with surface preparation and a durable finish planned around daily use.",
  },
];

const interiorFaqs = [
  {
    question: "Do We Need to Move Furniture Before Interior Painting?",
    answer: "Small items and personal belongings should be moved before work begins. Swift will discuss larger furniture, access and protection during the walkthrough so the room is ready for the agreed scope.",
  },
  {
    question: "How Do You Protect Floors and Furnishings?",
    answer: "Protection is planned around the room and surfaces being painted. Drop cloths, coverings, masking and careful staging help keep floors, furniture and nearby finishes separated from the work area.",
  },
  {
    question: "Can You Repair Walls Before Painting?",
    answer: "Yes. The proposal can include appropriate patching, sanding, caulking and other preparation identified during the walkthrough. Larger repairs are discussed separately so the scope stays clear.",
  },
  {
    question: "How Long Does Interior Painting Take?",
    answer: "Timing depends on the number of rooms, surface condition, color changes and preparation needs. Swift provides a practical schedule after reviewing the home and planned scope.",
  },
  {
    question: "What Areas Do You Serve?",
    answer: "Swift serves homeowners throughout Hernando, Citrus and Pasco Counties, including Spring Hill, Brooksville, Weeki Wachee, Hernando Beach, Ridge Manor and surrounding communities.",
  },
];

export default function InteriorPaintingPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [projectType, setProjectType] = useState("");
  const [occupancy, setOccupancy] = useState("");
  const [projectZip, setProjectZip] = useState("");
  const [timing, setTiming] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function continueEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    document.getElementById("interior-painting-estimate")?.scrollIntoView({ behavior: "smooth" });
    window.setTimeout(() => document.getElementById("interior-painting-name")?.focus(), 550);
  }

  function submitEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Interior House Painting",
    provider: {
      "@type": "GeneralContractor",
      name: "Swift Construction & Painting, LLC",
      telephone: "+1-352-701-7458",
    },
    areaServed: ["Hernando County", "Citrus County", "Pasco County"],
    description: "Interior house painting for walls, ceilings, trim, doors and cabinetry in Florida homes.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: interiorFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main className="remodel-page commercial-page commercial-painting-page interior-painting-page">
      <SiteHeader active="services" contactHref="#interior-painting-estimate" />

      <section className="remodel-hero interior-painting-hero">
        <div className="remodel-hero-copy">
          <p className="eyebrow">INTERIOR PAINTING • SPRING HILL, FL</p>
          <h1>Interior Painting That Makes the Whole Room Feel Finished.</h1>
          <p>Clean preparation, careful protection and consistent finishes for the rooms where everyday life happens.</p>
          <div className="remodel-hero-actions">
            <a className="button remodel-primary" href="#interior-painting-quick-project">Get a Free Interior Painting Estimate</a>
            <a className="remodel-phone" href="tel:3527017458"><small>OR CALL SWIFT</small>(352) 701-7458</a>
          </div>
          <div className="remodel-hero-proof">
            <span>Licensed &amp; insured • CBC1260893</span>
            <span>Written, itemized proposals</span>
            <span>No deposit required</span>
          </div>
        </div>
        <div className="remodel-hero-visual">
          <img className="remodel-hero-main interior-painting-hero-image" src="/assets/interior-painting-hero.png" alt="Professional painter applying a fresh wall color inside a protected Florida living room" />
        </div>
      </section>

      <form className="remodel-quick-form commercial-painting-quick-form" onSubmit={continueEstimate}>
        <div className="remodel-quick-heading">
          <p className="eyebrow">START YOUR ESTIMATE</p>
          <h2>What Are You Planning to Paint?</h2>
        </div>
        <label htmlFor="interior-painting-quick-project">Interior Scope<select id="interior-painting-quick-project" value={projectType} onChange={(event) => setProjectType(event.target.value)} required><option value="" disabled>Select scope</option><option>One or two rooms</option><option>Several rooms</option><option>Whole-home interior</option><option>Trim, doors or cabinets</option><option>Other interior project</option></select></label>
        <label htmlFor="interior-painting-quick-occupancy">Home Status<select id="interior-painting-quick-occupancy" value={occupancy} onChange={(event) => setOccupancy(event.target.value)} required><option value="" disabled>Select status</option><option>Currently occupied</option><option>Vacant home</option><option>Moving in soon</option><option>Preparing to sell</option></select></label>
        <label htmlFor="interior-painting-quick-zip">Project ZIP<input id="interior-painting-quick-zip" inputMode="numeric" placeholder="34609" value={projectZip} onChange={(event) => setProjectZip(event.target.value)} required /></label>
        <label htmlFor="interior-painting-quick-timing">Ideal Timing<select id="interior-painting-quick-timing" value={timing} onChange={(event) => setTiming(event.target.value)} required><option value="" disabled>Select timing</option><option>As soon as possible</option><option>Within 1 to 3 months</option><option>Within 3 to 6 months</option><option>Planning ahead</option></select></label>
        <button type="submit">Continue My Estimate <span aria-hidden="true">→</span></button>
      </form>

      <section className="remodel-services" id="interior-painting-services">
        <div className="remodel-section-heading">
          <p className="eyebrow">INTERIOR PAINTING SERVICES</p>
          <h2>A Complete Painting Plan From the Main Walls to the Final Details.</h2>
        </div>
        <div className="remodel-service-grid">
          {interiorServices.map((service) => (
            <article key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <a href="#interior-painting-estimate">Discuss Your Home <b>→</b></a>
            </article>
          ))}
        </div>
      </section>

      <section className="commercial-coordination commercial-painting-coordination">
        <div className="commercial-coordination-copy">
          <p className="eyebrow">CARE INSIDE YOUR HOME</p>
          <h2>A Cleaner Painting Experience Begins Before the First Coat.</h2>
          <p>Interior painting happens around the spaces, furniture and routines you live with every day. Swift plans the protection, preparation and sequence before opening the first can of paint.</p>
          <a className="button remodel-primary" href="#interior-painting-estimate">Plan a Home Walkthrough</a>
        </div>
        <div className="commercial-coordination-list">
          <article><span>01</span><div><h3>Protect the Space</h3><p>Floors, furniture and adjacent finishes are covered or separated from the active work area.</p></div></article>
          <article><span>02</span><div><h3>Prepare the Surfaces</h3><p>Patching, sanding, caulking and priming are matched to the condition of the walls and trim.</p></div></article>
          <article><span>03</span><div><h3>Keep Work Areas Clean</h3><p>Materials, tools and daily cleanup are managed so the project stays organized from room to room.</p></div></article>
        </div>
      </section>

      <section className="commercial-properties commercial-painting-properties">
        <div className="commercial-properties-heading">
          <p className="eyebrow">ROOMS WE PAINT</p>
          <h2>Fresh, Consistent Finishes for Every Part of the Home.</h2>
          <p>The right finish should reflect how the room is used, how much traffic it sees and how the spaces connect.</p>
        </div>
        <div className="commercial-property-grid">
          <article><span>01</span><h3>Living Areas &amp; Bedrooms</h3><p>Coordinated color and finish work for family rooms, bedrooms, hallways and open living spaces.</p></article>
          <article><span>02</span><h3>Kitchens &amp; Bathrooms</h3><p>Cleanable finishes and careful detail work for rooms exposed to frequent use, moisture and daily activity.</p></article>
          <article><span>03</span><h3>Entryways &amp; High Ceilings</h3><p>Consistent coverage for foyers, stairwells and taller spaces that require additional access and planning.</p></article>
        </div>
      </section>

      <section className="remodel-process" id="interior-painting-process">
        <div className="remodel-process-heading">
          <p className="eyebrow">HOW IT WORKS</p>
          <h2>A Clear Interior Painting Process From Walkthrough to Finish.</h2>
        </div>
        <div className="remodel-process-grid">
          <article><span>01</span><h3>Walk the Rooms</h3><p>We review the surfaces, colors, repairs and practical needs for each room in the project.</p></article>
          <article><span>02</span><h3>Define the Scope</h3><p>You receive a written proposal outlining preparation, planned surfaces and included work.</p></article>
          <article><span>03</span><h3>Prepare &amp; Paint</h3><p>Swift protects the space, completes the agreed preparation and applies the selected finishes.</p></article>
          <article><span>04</span><h3>Complete the Walkthrough</h3><p>We review the finished rooms together and address final details before project closeout.</p></article>
        </div>
      </section>

      <section className="commercial-painting-proof-cta">
        <div>
          <p className="eyebrow">PAINTING WITH A CONTRACTOR’S EYE</p>
          <h2>Repairs, Carpentry and Finish Work Can Stay Under One Plan.</h2>
          <p>When fresh paint is part of a larger room update, Swift can coordinate connected repairs and improvements under one licensed general contractor.</p>
        </div>
        <div className="commercial-painting-proof-actions">
          <a className="button remodel-primary" href="#interior-painting-estimate">Request a Free Estimate</a>
          <a href="/residential-painting">Explore Residential Painting <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="remodel-faq commercial-faq">
        <div className="remodel-faq-heading">
          <p className="eyebrow">INTERIOR PAINTING QUESTIONS</p>
          <h2>What Homeowners Ask Before Interior Painting Begins.</h2>
          <p>Clear answers make it easier to compare preparation, protection and the contractor responsible for your home.</p>
        </div>
        <div className="remodel-faq-list">
          {interiorFaqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return <article className={isOpen ? "open" : ""} key={faq.question}><button type="button" aria-expanded={isOpen} onClick={() => setOpenFaq(isOpen ? -1 : index)}><span>{faq.question}</span><b aria-hidden="true">{isOpen ? "×" : "+"}</b></button><div hidden={!isOpen}><p>{faq.answer}</p></div></article>;
          })}
        </div>
      </section>

      <section className="remodel-estimate" id="interior-painting-estimate">
        <div className="remodel-estimate-copy">
          <p className="eyebrow">FREE INTERIOR PAINTING ESTIMATE</p>
          <h2>Tell Us About Your Rooms and Interior Painting Plans.</h2>
          <p>Share what needs to be painted, whether the home is occupied and your preferred timing. Swift serves homeowners throughout Hernando, Citrus and Pasco Counties.</p>
          <div className="remodel-estimate-points"><span>Free project walkthrough</span><span>Written, itemized proposal</span><span>No deposit required</span></div>
          <p className="remodel-estimate-phone">Prefer to call?<a href="tel:3527017458">(352) 701-7458</a></p>
        </div>
        <form className="remodel-estimate-form" onSubmit={submitEstimate}>
          <div className="remodel-form-row"><label>Name<input id="interior-painting-name" name="name" placeholder="Your name" required /></label><label>Phone<input name="phone" placeholder="(000) 000-0000" type="tel" required /></label></div>
          <div className="remodel-form-row"><label>Email<input name="email" placeholder="you@email.com" type="email" /></label><label>Project City or ZIP<input name="zip" placeholder="Spring Hill" value={projectZip} onChange={(event) => setProjectZip(event.target.value)} required /></label></div>
          <div className="remodel-form-row"><label>Interior Scope<select value={projectType} onChange={(event) => setProjectType(event.target.value)} required><option value="" disabled>Select scope</option><option>One or two rooms</option><option>Several rooms</option><option>Whole-home interior</option><option>Trim, doors or cabinets</option><option>Other interior project</option></select></label><label>Home Status<select value={occupancy} onChange={(event) => setOccupancy(event.target.value)} required><option value="" disabled>Select status</option><option>Currently occupied</option><option>Vacant home</option><option>Moving in soon</option><option>Preparing to sell</option></select></label></div>
          <label>Ideal Timing<select value={timing} onChange={(event) => setTiming(event.target.value)} required><option value="" disabled>Select timing</option><option>As soon as possible</option><option>Within 1 to 3 months</option><option>Within 3 to 6 months</option><option>Planning ahead</option></select></label>
          <label>Project Details<textarea name="details" placeholder="Tell us which rooms and surfaces need paint, whether colors are changing and any repairs you have noticed." /></label>
          <button className="button remodel-primary" type="submit">{submitted ? "Thank You. We’ll Be in Touch." : "Request My Interior Painting Estimate"}</button>
          <small>Your information is only used to respond to your project request.</small>
        </form>
      </section>

      <footer className="site-footer remodel-footer">
        <div className="footer-main">
          <div className="footer-brand"><img src="/assets/swift-logo.png" alt="Swift Construction and Painting, LLC" /><p>Licensed and insured general contractor<br />serving Hernando, Citrus and Pasco Counties<br />since 2003.</p></div>
          <div className="footer-column"><h3>Site</h3><a href="/">Home</a><a href="/#services">Services</a><a href="/gallery">Portfolio</a><a href="/about">About</a><a href="#interior-painting-estimate">Contact</a></div>
          <div className="footer-column"><h3>Interior Painting</h3><a href="#interior-painting-services">Painting Services</a><a href="#interior-painting-process">Our Process</a><a href="/residential-painting">Residential Painting</a><a href="#interior-painting-estimate">Request an Estimate</a></div>
          <div className="footer-contact"><h3>Contact</h3><a className="footer-phone" href="tel:3527017458">(352) 701-7458</a><a href="mailto:swiftconstruction.william@gmail.com">swiftconstruction.william@gmail.com</a><div><a href="/gallery">Project Gallery</a><a href="/contact">Free Estimate</a></div></div>
        </div>
        <div className="footer-bottom"><span>© 2026 SWIFT CONSTRUCTION AND PAINTING, LLC</span><span>“WHEN QUALITY MATTERS”</span></div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
