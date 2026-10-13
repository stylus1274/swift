"use client";

import { FormEvent, useState } from "react";
import SiteHeader from "../../components/SiteHeader";

import SiteFooter from "@/components/SiteFooter";
import { submitLeadForm } from "@/lib/submitLead";
import LeadProtection from "@/components/LeadProtection";
const exteriorServices = [
  {
    number: "01",
    title: "Whole-Home Exterior Painting",
    copy: "Review the main walls, trim, entry doors and garage doors as separate surfaces. Confirm what is included so a lower quote does not leave part of the exterior unfinished.",
  },
  {
    number: "02",
    title: "Stucco & Masonry Coatings",
    copy: "Check chalking, loose coatings, cracks and previous patches before choosing a paint system. Cleaning, repairs and primer depend on the condition of the existing surface.",
  },
  {
    number: "03",
    title: "Trim, Doors & Accents",
    copy: "Identify fascia, soffits, shutters and doors that need paint or repair. Rotten trim and failed sealant need attention before a fresh finish can do its job.",
  },
  {
    number: "04",
    title: "Repaints & Maintenance",
    copy: "Fading alone and peeling paint are different problems. Ask the walkthrough to separate cosmetic wear from failed coatings, damaged materials or moisture that needs investigation.",
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
    answer: "The schedule depends on access, washing and drying, repairs, coating requirements and weather. A smaller home with failed coatings can need more preparation than a larger home in good condition. Swift reviews those factors before proposing a schedule.",
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

  async function submitEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await submitLeadForm(event.currentTarget, "Exterior Painting Estimate");
      setSubmitted(true);
    } catch (error) {
      console.error(error);
      window.alert("We could not send your request. Please call Swift Construction & Painting at (352) 701-7458.");
    }
  }

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
          <h1>Exterior Painting in Spring Hill, FL</h1>
          <p>Swift repaints stucco, masonry, trim and doors on Spring Hill homes. The estimate starts with the existing coating, needed repairs and the preparation required before new paint goes on.</p>
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
          <LeadProtection />
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
          <h2>Exterior Surfaces to Include in Your Estimate.</h2>
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
          <h2>What Is Under the Existing Paint?</h2>
          <p>A new topcoat cannot solve a loose or dirty surface underneath it. Spring Hill exteriors exposed to sun and rain need a preparation plan based on the current paint, stucco and trim, rather than the color change alone.</p>
          <a className="button remodel-primary" href="#exterior-painting-estimate">Plan a Home Walkthrough</a>
        </div>
        <div className="commercial-coordination-list">
          <article><span>01</span><div><h3>Evaluate the Surfaces</h3><p>Check sun-exposed walls for chalking and shaded areas for surface growth. Note peeling paint, open joints and cracks that need closer review.</p></div></article>
          <article><span>02</span><div><h3>Prepare With Care</h3><p>Include cleaning and drying time, removal of loose material, agreed repairs and required primer in the written scope. Protect windows, doors and nearby landscaping.</p></div></article>
          <article><span>03</span><div><h3>Apply the Right Finish</h3><p>Select compatible coatings for the surface and existing finish. Application conditions and drying time should follow the chosen product&apos;s instructions.</p></div></article>
        </div>
      </section>

      <section className="commercial-properties commercial-painting-properties">
        <div className="commercial-properties-heading">
          <p className="eyebrow">SURFACES WE PAINT</p>
          <h2>Weather, Access and Color Decisions Affect the Job.</h2>
          <p>Plan these details before scheduling. They influence preparation, access and the time needed to complete the exterior.</p>
        </div>
        <div className="commercial-property-grid">
          <article><span>01</span><h3>Rain &amp; Drying Windows</h3><p>A dry-looking wall may still hold moisture after washing or rain. The schedule needs suitable surface conditions and a forecast that meets the coating requirements.</p></article>
          <article><span>02</span><h3>Lanais &amp; Landscaping</h3><p>Screen enclosures, shrubs, pavers and narrow side yards affect access and protection. Identify these areas during the walkthrough rather than after work starts.</p></article>
          <article><span>03</span><h3>Body, Trim &amp; HOA Colors</h3><p>Choose wall, trim and accent colors together. If your neighborhood requires color approval, confirm it before purchasing paint or finalizing the schedule.</p></article>
        </div>
      </section>

      <section className="remodel-process" id="exterior-painting-process">
        <div className="remodel-process-heading">
          <p className="eyebrow">HOW IT WORKS</p>
          <h2>What Changes the Cost of an Exterior Repaint?</h2>
          <p>See our <a href="/blog/average-cost-paint-house-exterior-florida">Florida exterior house painting cost guide</a> for budget context, then request an estimate for your actual surfaces and access.</p>
        </div>
        <div className="remodel-process-grid">
          <article><span>01</span><h3>Size &amp; Access</h3><p>Wall area, building height, rooflines and access around the home affect setup and painting time.</p></article>
          <article><span>02</span><h3>Surface Condition</h3><p>Cleaning, loose-paint removal, cracks and damaged trim can change the preparation needed before painting.</p></article>
          <article><span>03</span><h3>Included Surfaces</h3><p>Compare whether fascia, soffits, entry doors, garage doors and accents are included in each written quote.</p></article>
          <article><span>04</span><h3>Coating &amp; Color Change</h3><p>The specified products, primer requirements and coverage needed for the color change affect the final scope.</p></article>
        </div>
      </section>

      <section className="commercial-painting-proof-cta">
        <div>
          <p className="eyebrow">PAINTING WITH A CONTRACTOR’S EYE</p>
          <h2>Plan Exterior Repairs Before Painting.</h2>
          <p>Tell Swift about damaged trim, recurring cracks or water intrusion during the walkthrough. For painting inside and outside, see our <a href="/residential-painting">house painting services in Spring Hill</a> and <a href="/interior-painting">interior painting options</a>. Larger changes may need a separate repair or remodeling scope.</p>
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
          <p>Discuss rain delays, stucco preparation and color choices before committing to an exterior repaint.</p>
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
          <LeadProtection />
          <div className="remodel-form-row"><label>Name<input id="exterior-painting-name" name="name" placeholder="Your name" required /></label><label>Phone<input name="phone" placeholder="(000) 000-0000" type="tel" required /></label></div>
          <div className="remodel-form-row"><label>Email<input name="email" placeholder="you@email.com" type="email" /></label><label>Project City or ZIP<input name="zip" placeholder="Spring Hill" value={projectZip} onChange={(event) => setProjectZip(event.target.value)} required /></label></div>
          <div className="remodel-form-row"><label>Exterior Scope<select value={projectType} onChange={(event) => setProjectType(event.target.value)} required><option value="" disabled>Select scope</option><option>Whole-home exterior</option><option>Stucco and masonry</option><option>Trim, doors and accents</option><option>Repaint and maintenance</option><option>Other exterior project</option></select></label><label>Home Type<select value={homeType} onChange={(event) => setHomeType(event.target.value)} required><option value="" disabled>Select home</option><option>Single-story home</option><option>Two-story home</option><option>Townhome or villa</option><option>Other</option></select></label></div>
          <label>Ideal Timing<select value={timing} onChange={(event) => setTiming(event.target.value)} required><option value="" disabled>Select timing</option><option>As soon as possible</option><option>Within 1 to 3 months</option><option>Within 3 to 6 months</option><option>Planning ahead</option></select></label>
          <label>Project Details<textarea name="details" placeholder="Tell us about the exterior condition, surfaces, color change and any repairs you have noticed." /></label>
          <button className="button remodel-primary" type="submit">{submitted ? "Thank You. We’ll Be in Touch." : "Request My Exterior Painting Estimate"}</button>
          <small>Your information is only used to respond to your project request.</small>
        </form>
      </section>

      <SiteFooter />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
