"use client";

import { FormEvent, useState } from "react";
import SiteHeader from "../../components/SiteHeader";

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
  const [openFaq, setOpenFaq] = useState(0);
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

  function submitEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
            <a className="button remodel-primary" href="#flooring-quick-project">Get a Free Flooring Estimate</a>
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

      <form className="remodel-quick-form commercial-painting-quick-form" onSubmit={continueEstimate}>
        <div className="remodel-quick-heading">
          <p className="eyebrow">START YOUR ESTIMATE</p>
          <h2>What Flooring Are You Planning?</h2>
        </div>
        <label htmlFor="flooring-quick-project">Flooring Type<select id="flooring-quick-project" value={flooringType} onChange={(event) => setFlooringType(event.target.value)} required><option value="" disabled>Select flooring</option><option>Luxury vinyl plank</option><option>Tile flooring</option><option>Laminate flooring</option><option>Not sure yet</option><option>Other flooring project</option></select></label>
        <label htmlFor="flooring-quick-size">Approximate Size<select id="flooring-quick-size" value={projectSize} onChange={(event) => setProjectSize(event.target.value)} required><option value="" disabled>Select size</option><option>One room</option><option>Two to three rooms</option><option>Several rooms</option><option>Whole-home flooring</option><option>Not sure yet</option></select></label>
        <label htmlFor="flooring-quick-zip">Project ZIP<input id="flooring-quick-zip" inputMode="numeric" placeholder="34609" value={projectZip} onChange={(event) => setProjectZip(event.target.value)} required /></label>
        <label htmlFor="flooring-quick-timing">Ideal Timing<select id="flooring-quick-timing" value={timing} onChange={(event) => setTiming(event.target.value)} required><option value="" disabled>Select timing</option><option>As soon as possible</option><option>Within 1 to 3 months</option><option>Within 3 to 6 months</option><option>Planning ahead</option></select></label>
        <button type="submit">Continue My Estimate <span aria-hidden="true">→</span></button>
      </form>

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
              <a href="#flooring-estimate">Discuss Your Project <b>→</b></a>
            </article>
          ))}
        </div>
      </section>

      <section className="commercial-coordination commercial-painting-coordination">
        <div className="commercial-coordination-copy">
          <p className="eyebrow">WHAT IS UNDERNEATH MATTERS</p>
          <h2>A Better Finished Floor Starts With the Surface Below It.</h2>
          <p>The material is only part of the project. Existing flooring, subfloor condition, room transitions and finish details all affect how the new floor looks and performs.</p>
          <a className="button remodel-primary" href="#flooring-estimate">Plan a Home Walkthrough</a>
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

      <section className="remodel-process" id="flooring-process">
        <div className="remodel-process-heading">
          <p className="eyebrow">HOW IT WORKS</p>
          <h2>A Clear Flooring Process From Walkthrough to Final Transition.</h2>
        </div>
        <div className="remodel-process-grid">
          <article><span>01</span><h3>Review the Rooms</h3><p>We discuss materials, inspect the existing floor and review how the spaces connect.</p></article>
          <article><span>02</span><h3>Define the Scope</h3><p>You receive a written proposal covering removal, preparation, installation and included finish work.</p></article>
          <article><span>03</span><h3>Prepare &amp; Install</h3><p>Swift prepares the surface, lays out the material and completes the planned installation.</p></article>
          <article><span>04</span><h3>Complete the Walkthrough</h3><p>We review the finished floor, transitions and final details together before project closeout.</p></article>
        </div>
      </section>

      <section className="commercial-painting-proof-cta">
        <div>
          <p className="eyebrow">ONE CONTRACTOR FOR THE WHOLE ROOM</p>
          <h2>Flooring Can Be Coordinated With the Rest of Your Remodel.</h2>
          <p>Swift can connect flooring with cabinetry, carpentry, painting and other room improvements under one licensed building contractor.</p>
        </div>
        <div className="commercial-painting-proof-actions">
          <a className="button remodel-primary" href="#flooring-estimate">Request a Free Estimate</a>
          <a href="/residential-remodeling">Explore Residential Remodeling <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="remodel-faq commercial-faq">
        <div className="remodel-faq-heading">
          <p className="eyebrow">FLOORING QUESTIONS</p>
          <h2>What Homeowners Ask Before Flooring Installation Begins.</h2>
          <p>Clear answers make it easier to compare materials, preparation and the contractor responsible for your home.</p>
        </div>
        <div className="remodel-faq-list">
          {flooringFaqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return <article className={isOpen ? "open" : ""} key={faq.question}><button type="button" aria-expanded={isOpen} onClick={() => setOpenFaq(isOpen ? -1 : index)}><span>{faq.question}</span><b aria-hidden="true">{isOpen ? "×" : "+"}</b></button><div hidden={!isOpen}><p>{faq.answer}</p></div></article>;
          })}
        </div>
      </section>

      <section className="remodel-estimate" id="flooring-estimate">
        <div className="remodel-estimate-copy">
          <p className="eyebrow">FREE FLOORING ESTIMATE</p>
          <h2>Tell Us About the Rooms and Flooring You Are Planning.</h2>
          <p>Share the material, approximate project size and preferred timing. Swift serves homeowners throughout Hernando, Citrus and Pasco Counties.</p>
          <div className="remodel-estimate-points"><span>Free project walkthrough</span><span>Written, itemized proposal</span><span>No deposit required</span></div>
          <p className="remodel-estimate-phone">Prefer to call?<a href="tel:3527017458">(352) 701-7458</a></p>
        </div>
        <form className="remodel-estimate-form" onSubmit={submitEstimate}>
          <div className="remodel-form-row"><label>Name<input id="flooring-name" name="name" placeholder="Your name" required /></label><label>Phone<input name="phone" placeholder="(000) 000-0000" type="tel" required /></label></div>
          <div className="remodel-form-row"><label>Email<input name="email" placeholder="you@email.com" type="email" /></label><label>Project City or ZIP<input name="zip" placeholder="Spring Hill" value={projectZip} onChange={(event) => setProjectZip(event.target.value)} required /></label></div>
          <div className="remodel-form-row"><label>Flooring Type<select value={flooringType} onChange={(event) => setFlooringType(event.target.value)} required><option value="" disabled>Select flooring</option><option>Luxury vinyl plank</option><option>Tile flooring</option><option>Laminate flooring</option><option>Not sure yet</option><option>Other flooring project</option></select></label><label>Approximate Size<select value={projectSize} onChange={(event) => setProjectSize(event.target.value)} required><option value="" disabled>Select size</option><option>One room</option><option>Two to three rooms</option><option>Several rooms</option><option>Whole-home flooring</option><option>Not sure yet</option></select></label></div>
          <label>Ideal Timing<select value={timing} onChange={(event) => setTiming(event.target.value)} required><option value="" disabled>Select timing</option><option>As soon as possible</option><option>Within 1 to 3 months</option><option>Within 3 to 6 months</option><option>Planning ahead</option></select></label>
          <label>Project Details<textarea name="details" placeholder="Tell us which rooms need flooring, what is there now and whether you have selected a material." /></label>
          <button className="button remodel-primary" type="submit">{submitted ? "Thank You. We’ll Be in Touch." : "Request My Flooring Estimate"}</button>
          <small>Your information is only used to respond to your project request.</small>
        </form>
      </section>

      <footer className="site-footer remodel-footer">
        <div className="footer-main">
          <div className="footer-brand"><img src="/assets/swift-logo.png" alt="Swift Construction and Painting, LLC" /><p>Licensed and insured building contractor<br />serving Hernando, Citrus and Pasco Counties<br />since 2003.</p></div>
          <div className="footer-column"><h3>Site</h3><a href="/">Home</a><a href="/services">Services</a><a href="/gallery">Portfolio</a><a href="/about">About</a><a href="#flooring-estimate">Contact</a></div>
          <div className="footer-column"><h3>Flooring</h3><a href="#flooring-services">Flooring Services</a><a href="#flooring-process">Our Process</a><a href="/residential-remodeling">Residential Remodeling</a><a href="#flooring-estimate">Request an Estimate</a></div>
          <div className="footer-contact"><h3>Contact</h3><a className="footer-phone" href="tel:3527017458">(352) 701-7458</a><a href="mailto:swiftconstruction.william@gmail.com">swiftconstruction.william@gmail.com</a><address className="footer-address">11105 Lomita Wren Rd<br />Weeki Wachee, FL 34614</address></div>
        </div>
        <div className="footer-bottom"><span>© 2026 SWIFT CONSTRUCTION AND PAINTING, LLC</span><span>“WHEN QUALITY MATTERS”</span></div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
