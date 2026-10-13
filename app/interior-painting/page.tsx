"use client";

import { FormEvent, useState } from "react";
import SiteHeader from "../../components/SiteHeader";

import SiteFooter from "@/components/SiteFooter";
import { submitLeadForm } from "@/lib/submitLead";
import LeadProtection from "@/components/LeadProtection";
const interiorServices = [
  {
    number: "01",
    title: "Whole-Home Interior Painting",
    copy: "Plan connected rooms together so wall colors, ceiling finishes and trim work meet cleanly at doorways. Include hallways and closets in the scope before comparing estimates.",
  },
  {
    number: "02",
    title: "Walls & Ceilings",
    copy: "Identify nail holes, patched areas, stains and texture changes before painting. Walls and ceilings need separate finish decisions, especially where daylight makes uneven repairs visible.",
  },
  {
    number: "03",
    title: "Trim, Doors & Details",
    copy: "Baseboards, door casings, crown molding and interior doors often need more detailed preparation than walls. Specify which pieces are included, along with any caulking or sanding.",
  },
  {
    number: "04",
    title: "Cabinets & Built-Ins",
    copy: "Cabinet painting is a separate scope from wall painting. Review the existing finish, grease buildup, door and drawer access, and time needed before returning the cabinets to daily use.",
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
    answer: "The number of rooms is only one factor. Repairs, high ceilings, cabinetry, large color changes and an occupied home can add work. Swift reviews the scope before proposing a schedule; drying and curing requirements also depend on the selected products.",
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

  async function submitEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await submitLeadForm(event.currentTarget, "Interior Painting Estimate");
      setSubmitted(true);
    } catch (error) {
      console.error(error);
      window.alert("We could not send your request. Please call Swift Construction & Painting at (352) 701-7458.");
    }
  }

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
          <h1>Interior Painting in Spring Hill, FL</h1>
          <p>Swift paints walls, ceilings, trim, doors and cabinetry in Spring Hill homes. Start with a room-by-room walkthrough to identify repairs, finishes and how the work will fit around your household.</p>
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
          <LeadProtection />
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
          <h2>What Is Included in Your Interior Repaint?</h2>
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
          <h2>Painting an Occupied Home Takes Planning.</h2>
          <p>An occupied home needs a different work sequence from an empty house. During the walkthrough, discuss which rooms must stay usable, where furniture can be staged, access for children and pets, and any move-in deadline.</p>
          <a className="button remodel-primary" href="#interior-painting-estimate">Plan a Home Walkthrough</a>
        </div>
        <div className="commercial-coordination-list">
          <article><span>01</span><div><h3>Protect the Space</h3><p>Agree on who moves large furniture and removes wall decor, then identify protection for flooring, fixtures and furnishings beside the work.</p></div></article>
          <article><span>02</span><div><h3>Prepare the Surfaces</h3><p>Review drywall patches, trim gaps and stains separately. Painting can cover a repaired surface, but it does not correct an active leak or recurring moisture problem.</p></div></article>
          <article><span>03</span><div><h3>Keep Work Areas Clean</h3><p>Discuss room access, ventilation and cleanup before scheduling. Drying and curing times depend on the selected products and conditions inside the home.</p></div></article>
        </div>
      </section>

      <section className="commercial-properties commercial-painting-properties">
        <div className="commercial-properties-heading">
          <p className="eyebrow">ROOMS WE PAINT</p>
          <h2>Choose Finishes by Room, Not Just by Color.</h2>
          <p>A sheen that looks good on a sample can behave differently across a large wall. Compare samples in the room&apos;s daytime and evening light, and discuss washability and the condition of the surface underneath.</p>
        </div>
        <div className="commercial-property-grid">
          <article><span>01</span><h3>Living Areas &amp; Bedrooms</h3><p>For bedrooms and living rooms, compare appearance with the amount of cleaning the walls will need. Hallways and busy family spaces may need a different finish from a low-traffic bedroom.</p></article>
          <article><span>02</span><h3>Kitchens &amp; Bathrooms</h3><p>Discuss cleanable coatings for splashes and frequent wiping. Resolve moisture sources before repainting; a new finish is not a substitute for ventilation or leak repairs.</p></article>
          <article><span>03</span><h3>Entryways &amp; High Ceilings</h3><p>High ceilings, stairwells and difficult access can change setup time and cost. Include ceiling height and the surfaces above cabinets when requesting the walkthrough.</p></article>
        </div>
      </section>

      <section className="remodel-process" id="interior-painting-process">
        <div className="remodel-process-heading">
          <p className="eyebrow">HOW IT WORKS</p>
          <h2>Compare Interior Painting Estimates on the Same Scope.</h2>
          <p>For budgeting, see our <a href="/blog/interior-painting-cost-2000-square-foot-house">interior painting cost guide for a 2,000-square-foot house</a>. A walkthrough is still needed to price your rooms and repairs.</p>
        </div>
        <div className="remodel-process-grid">
          <article><span>01</span><h3>Walk the Rooms</h3><p>List each room and whether its walls, ceiling, trim, doors and closets are included. Note furniture and access needs.</p></article>
          <article><span>02</span><h3>Define the Scope</h3><p>Ask which repairs, primer and finish work are included. Identify any exclusions before choosing between quotes.</p></article>
          <article><span>03</span><h3>Prepare &amp; Paint</h3><p>Confirm color changes, sheen and coating requirements in the proposal rather than assuming every estimate covers the same work.</p></article>
          <article><span>04</span><h3>Complete the Walkthrough</h3><p>Review coverage, cut lines and agreed repairs in the finished rooms, then discuss cleanup and care for the new finish.</p></article>
        </div>
      </section>

      <section className="commercial-painting-proof-cta">
        <div>
          <p className="eyebrow">PAINTING WITH A CONTRACTOR’S EYE</p>
          <h2>Interior Painting or a Larger Room Remodel?</h2>
          <p>If the project also includes trim changes, flooring or a new layout, discuss that work before scheduling paint. Explore <a href="/home-remodeling">home remodeling</a> for connected improvements, or visit our <a href="/residential-painting">Spring Hill house painting overview</a> if you need both interior and exterior work.</p>
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
          <p>Ask about furniture, repairs and the time between painting and normal room use before scheduling.</p>
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
          <LeadProtection />
          <div className="remodel-form-row"><label>Name<input id="interior-painting-name" name="name" placeholder="Your name" required /></label><label>Phone<input name="phone" placeholder="(000) 000-0000" type="tel" required /></label></div>
          <div className="remodel-form-row"><label>Email<input name="email" placeholder="you@email.com" type="email" /></label><label>Project City or ZIP<input name="zip" placeholder="Spring Hill" value={projectZip} onChange={(event) => setProjectZip(event.target.value)} required /></label></div>
          <div className="remodel-form-row"><label>Interior Scope<select value={projectType} onChange={(event) => setProjectType(event.target.value)} required><option value="" disabled>Select scope</option><option>One or two rooms</option><option>Several rooms</option><option>Whole-home interior</option><option>Trim, doors or cabinets</option><option>Other interior project</option></select></label><label>Home Status<select value={occupancy} onChange={(event) => setOccupancy(event.target.value)} required><option value="" disabled>Select status</option><option>Currently occupied</option><option>Vacant home</option><option>Moving in soon</option><option>Preparing to sell</option></select></label></div>
          <label>Ideal Timing<select value={timing} onChange={(event) => setTiming(event.target.value)} required><option value="" disabled>Select timing</option><option>As soon as possible</option><option>Within 1 to 3 months</option><option>Within 3 to 6 months</option><option>Planning ahead</option></select></label>
          <label>Project Details<textarea name="details" placeholder="Tell us which rooms and surfaces need paint, whether colors are changing and any repairs you have noticed." /></label>
          <button className="button remodel-primary" type="submit">{submitted ? "Thank You. We’ll Be in Touch." : "Request My Interior Painting Estimate"}</button>
          <small>Your information is only used to respond to your project request.</small>
        </form>
      </section>

      <SiteFooter />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
