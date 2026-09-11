"use client";

import { FormEvent, useState } from "react";
import SiteHeader from "../../components/SiteHeader";

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

function GoogleMark() {
  return (
    <span className="paint-google" aria-label="Google review">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#4285F4" d="M21.6 12.23c0-.71-.06-1.39-.18-2.05H12v3.87h5.38a4.6 4.6 0 0 1-2 3.02v2.51h3.24c1.9-1.75 2.98-4.33 2.98-7.35Z" />
        <path fill="#34A853" d="M12 22c2.7 0 4.97-.9 6.62-2.42l-3.24-2.51c-.9.6-2.04.95-3.38.95-2.61 0-4.82-1.76-5.61-4.13H3.05v2.59A10 10 0 0 0 12 22Z" />
        <path fill="#FBBC05" d="M6.39 13.89A6 6 0 0 1 6.08 12c0-.66.11-1.3.31-1.89V7.52H3.05A10 10 0 0 0 2 12c0 1.61.39 3.13 1.05 4.48l3.34-2.59Z" />
        <path fill="#EA4335" d="M12 5.98c1.47 0 2.79.51 3.83 1.5l2.87-2.87A9.65 9.65 0 0 0 12 2a10 10 0 0 0-8.95 5.52l3.34 2.59C7.18 7.74 9.39 5.98 12 5.98Z" />
      </svg>
      Google Review
    </span>
  );
}

export default function ResidentialPaintingPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [heroSubmitted, setHeroSubmitted] = useState(false);

  function submitEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  function submitHeroEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
            <a className="button paint-primary" href="#hero-project">Get a free painting estimate</a>
            <a className="paint-hero-call" href="tel:3527017458"><small>OR CALL DIRECTLY</small>(352) 701-7458</a>
          </div>
        </div>
        <form className="paint-hero-panel paint-hero-form" onSubmit={submitHeroEstimate}>
          <p className="paint-panel-label">GET A FREE PAINTING ESTIMATE</p>
          <h2>Start Your Free Painting Estimate.</h2>
          <p className="paint-hero-form-intro">Tell us what you would like painted and when you are hoping to begin.</p>
          <div className="paint-hero-form-row paint-hero-project-row">
            <label htmlFor="hero-project">What are you painting?<select id="hero-project" name="hero_project" defaultValue="" required><option value="" disabled>Select project</option><option>Interior rooms</option><option>Home exterior</option><option>Interior and exterior</option><option>New construction</option><option>Other</option></select></label>
            <label htmlFor="hero-timing">Ideal timing<select id="hero-timing" name="hero_timing" defaultValue="" required><option value="" disabled>Select</option><option>As soon as possible</option><option>Within 1 month</option><option>1–3 months</option><option>Just researching</option></select></label>
          </div>
          <div className="paint-hero-form-row paint-hero-contact-row">
            <label htmlFor="hero-name">Name<input id="hero-name" name="hero_name" placeholder="Your name" required /></label>
            <label htmlFor="hero-phone">Phone<input id="hero-phone" name="hero_phone" placeholder="(000) 000-0000" type="tel" required /></label>
          </div>
          <label htmlFor="hero-zip">Project ZIP code</label>
          <input id="hero-zip" name="hero_zip" placeholder="34609" inputMode="numeric" required />
          <button type="submit">{heroSubmitted ? "Thank you. We’ll be in touch." : "Get my free estimate"}<span aria-hidden="true">→</span></button>
          <small className="paint-hero-reassurance">Licensed and insured • Serving local homeowners since 2003</small>
        </form>
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
          <a href="#paint-process">See our painting process <span>→</span></a>
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
                <a href="#paint-estimate">Request an estimate <b>→</b></a>
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
          <a className="button paint-primary" href="#paint-estimate">Get an estimate for your home</a>
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

      <section className="paint-review-section">
        <div className="paint-review-intro">
          <p className="eyebrow">LOCAL HOMEOWNERS</p>
          <h2>Chosen for the Details.<br />Recommended for the Experience.</h2>
          <a href="#paint-estimate">Start your project <span>→</span></a>
        </div>
        <article className="paint-review-card">
          <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
          <blockquote>“The crew treated our home with care and the finished paintwork looks flawless. Every detail was handled professionally.”</blockquote>
          <p><strong>Amanda Reynolds</strong><br /><span>Spring Hill homeowner</span></p>
          <GoogleMark />
        </article>
        <article className="paint-review-card second">
          <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
          <blockquote>“From the estimate to the final walkthrough, communication was clear and the house looks completely refreshed.”</blockquote>
          <p><strong>Daniel Foster</strong><br /><span>Brooksville homeowner</span></p>
          <GoogleMark />
        </article>
      </section>

      <section className="paint-faq">
        <div className="paint-faq-heading">
          <p className="eyebrow">PAINTING QUESTIONS</p>
          <h2>What Homeowners Ask Before Choosing a Painter.</h2>
          <p>Clear answers help you compare estimates and know what to expect once the project begins.</p>
        </div>
        <div className="paint-faq-list">
          {paintingFaqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <article className={isOpen ? "open" : ""} key={faq.question}>
                <button type="button" aria-expanded={isOpen} onClick={() => setOpenFaq(isOpen ? -1 : index)}>
                  <span>{faq.question}</span><b aria-hidden="true">{isOpen ? "×" : "+"}</b>
                </button>
                <div hidden={!isOpen}><p>{faq.answer}</p></div>
              </article>
            );
          })}
        </div>
      </section>

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
        <form className="paint-estimate-form" onSubmit={submitEstimate}>
          <div className="paint-form-row">
            <label>Name<input name="name" placeholder="Your name" required /></label>
            <label>Phone<input name="phone" placeholder="(000) 000-0000" type="tel" required /></label>
          </div>
          <div className="paint-form-row">
            <label>Email<input name="email" placeholder="you@email.com" type="email" /></label>
            <label>City or ZIP<input name="city" placeholder="Spring Hill" required /></label>
          </div>
          <label>What would you like painted?<select name="project" defaultValue=""><option value="" disabled>Select your project</option><option>Interior painting</option><option>Exterior painting</option><option>Interior and exterior</option><option>New construction painting</option><option>Other painting project</option></select></label>
          <label>Project details<textarea name="details" placeholder="Tell us a little about the rooms, exterior or surfaces you would like painted." /></label>
          <button className="button paint-primary" type="submit">{submitted ? "Thank you. We’ll be in touch." : "Request my free estimate"}</button>
          <small>Your information is only used to respond to your project request.</small>
        </form>
      </section>

      <footer className="site-footer paint-footer">
        <div className="footer-main">
          <div className="footer-brand"><img src="/assets/swift-logo.png" alt="Swift Construction and Painting, LLC" /><p>Licensed and insured building contractor<br />serving Hernando, Citrus and Pasco Counties<br />since 2003.</p></div>
          <div className="footer-column"><h3>Site</h3><a href="/">Home</a><a href="/services">Services</a><a href="/gallery">Portfolio</a><a href="/about">About</a><a href="#paint-estimate">Contact</a></div>
          <div className="footer-column"><h3>Painting</h3><a href="#painting-services">Interior Painting</a><a href="#painting-services">Exterior Painting</a><a href="#painting-services">New Construction</a><a href="#paint-process">Our Process</a></div>
          <div className="footer-contact"><h3>Contact</h3><a className="footer-phone" href="tel:3527017458">(352) 701-7458</a><a href="mailto:swiftconstruction.william@gmail.com">swiftconstruction.william@gmail.com</a><address className="footer-address">11105 Lomita Wren Rd<br />Weeki Wachee, FL 34614</address></div>
        </div>
        <div className="footer-bottom"><span>© 2026 SWIFT CONSTRUCTION AND PAINTING, LLC</span><span>“WHEN QUALITY MATTERS”</span></div>
      </footer>
    </main>
  );
}
