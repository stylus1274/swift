"use client";

import { FormEvent, useState } from "react";
import InteractiveServiceMap from "../components/InteractiveServiceMap";
import SiteHeader from "../components/SiteHeader";

const services = [
  {
    number: "01",
    title: "Interior & Exterior Painting",
    href: "/residential-painting",
    description:
      "Clean lines, careful preparation and durable finishes for homes, businesses and new construction.",
    image: "/assets/florida-stucco-painting.jpg",
    alt: "Florida stucco exterior painting",
  },
  {
    number: "02",
    title: "Residential Remodeling",
    href: "/residential-remodeling",
    description:
      "Bathrooms, kitchens, flooring, carpentry and full-home renovations coordinated by one contractor.",
    image: "/assets/hero-bathroom-remodel.webp",
    alt: "High-end bathroom remodeling",
  },
  {
    number: "03",
    title: "New Home Construction",
    href: "/new-home-construction",
    description:
      "Ground-up construction managed with a steady hand, clear communication and close attention to every detail.",
    image: "/assets/new-home-exterior.jpg",
    alt: "Florida new home construction",
  },
  {
    number: "04",
    title: "Commercial Construction",
    href: "/commercial-services",
    description:
      "Renovations, painting and facility improvements built around your schedule and business needs.",
    image: "/assets/commercial-renovation.jpg",
    alt: "Commercial interior renovation",
  },
];

const additionalServices = [
  "Windows & Doors",
  "Flooring",
  "Carpentry",
  "Pressure Washing",
  "Facility Services",
];

const categories = ["All", "Painting", "Remodeling", "New Homes", "Commercial"];
const estimateServices = [
  "Painting",
  "Remodeling",
  "New home",
  "Windows & doors",
  "Pressure washing",
  "Commercial",
];

const faqs = [
  {
    question: "What Areas Does Swift Construction and Painting Serve?",
    answer:
      "Swift serves Spring Hill, Brooksville, Weeki Wachee, Hernando Beach, Ridge Manor and communities throughout Hernando, Citrus and Pasco Counties.",
  },
  {
    question: "What Types of Painting Projects Do You Handle?",
    answer:
      "We handle interior and exterior painting for homes, commercial properties and new construction, including full repaints, trim, doors and detailed finish work.",
  },
  {
    question: "Can Swift Manage a Complete Remodeling Project?",
    answer:
      "Yes. Our licensed team coordinates bathrooms, kitchens, flooring, carpentry, drywall and demolition under one contractor and one schedule.",
  },
  {
    question: "Do You Provide Free Estimates?",
    answer:
      "Yes. Estimates are always free, and every proposal is written and itemized so you know exactly what is included before work begins.",
  },
];

function GoogleReviewBadge() {
  return (
    <span className="google-review-badge" aria-label="Google review">
      <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
        <path fill="#4285F4" d="M21.6 12.23c0-.71-.06-1.39-.18-2.05H12v3.87h5.38a4.6 4.6 0 0 1-2 3.02v2.51h3.24c1.9-1.75 2.98-4.33 2.98-7.35Z" />
        <path fill="#34A853" d="M12 22c2.7 0 4.97-.9 6.62-2.42l-3.24-2.51c-.9.6-2.04.95-3.38.95-2.61 0-4.82-1.76-5.61-4.13H3.05v2.59A10 10 0 0 0 12 22Z" />
        <path fill="#FBBC05" d="M6.39 13.89A6 6 0 0 1 6.08 12c0-.66.11-1.3.31-1.89V7.52H3.05A10 10 0 0 0 2 12c0 1.61.39 3.13 1.05 4.48l3.34-2.59Z" />
        <path fill="#EA4335" d="M12 5.98c1.47 0 2.79.51 3.83 1.5l2.87-2.87A9.65 9.65 0 0 0 12 2a10 10 0 0 0-8.95 5.52l3.34 2.59C7.18 7.74 9.39 5.98 12 5.98Z" />
      </svg>
      <span>Google</span>
    </span>
  );
}

export default function Home({ alternateHero = false }: { alternateHero?: boolean }) {
  const [category, setCategory] = useState("All");
  const [estimateService, setEstimateService] = useState("Painting");
  const [submitted, setSubmitted] = useState(false);
  const [heroSubmitted, setHeroSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  function submitEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  function submitHeroEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setHeroSubmitted(true);
  }

  return (
    <main className={alternateHero ? "home-alt-page" : undefined}>
      <SiteHeader active="home" contactHref="#contact" />

      {alternateHero ? (
        <section className="paint-hero home-alt-hero" id="home">
          <div className="paint-hero-media" aria-hidden="true">
            <img src="/assets/florida-stucco-painting.jpg" alt="" />
          </div>
          <div className="paint-hero-content">
            <p className="eyebrow">SPRING HILL, FLORIDA&nbsp;&nbsp;•&nbsp;&nbsp;ESTABLISHED 2003</p>
            <h1>The Contractor Your Neighbors Already Called.</h1>
            <p>William Swift has been painting, remodeling and building homes in Hernando County for more than twenty years. Licensed, insured, and finished when we said we'd finish.</p>
            <div className="paint-hero-actions">
              <a className="button paint-primary" href="#alt-project">Get a Free Estimate</a>
              <a className="paint-hero-call" href="tel:3527017458"><small>OR CALL DIRECTLY</small>(352) 701-7458</a>
            </div>
          </div>
          <form className="paint-hero-panel paint-hero-form" onSubmit={submitHeroEstimate}>
            <p className="paint-panel-label">GET A FREE ESTIMATE</p>
            <h2>Start Your Free Estimate.</h2>
            <p className="paint-hero-form-intro">Tell us what you are planning and when you are hoping to begin.</p>
            <div className="paint-hero-form-row paint-hero-project-row">
              <label htmlFor="alt-project">Project type<select id="alt-project" name="hero_project" defaultValue="" required><option value="" disabled>Select project</option><option>Painting</option><option>Residential remodeling</option><option>New home construction</option><option>Commercial construction</option><option>Other</option></select></label>
              <label htmlFor="alt-timing">Ideal timing<select id="alt-timing" name="hero_timing" defaultValue="" required><option value="" disabled>Select</option><option>As soon as possible</option><option>Within 1 month</option><option>1–3 months</option><option>Just researching</option></select></label>
            </div>
            <div className="paint-hero-form-row paint-hero-contact-row">
              <label htmlFor="alt-name">Name<input id="alt-name" name="hero_name" placeholder="Your name" required /></label>
              <label htmlFor="alt-phone">Phone<input id="alt-phone" name="hero_phone" placeholder="(000) 000-0000" type="tel" required /></label>
            </div>
            <label htmlFor="alt-zip">Project ZIP code</label>
            <input id="alt-zip" name="hero_zip" placeholder="34609" inputMode="numeric" required />
            <button type="submit">{heroSubmitted ? "Thank You. We’ll Be in Touch." : "Get My Free Estimate"}<span aria-hidden="true">→</span></button>
            <small className="paint-hero-reassurance">Licensed and insured • Serving local homeowners since 2003</small>
          </form>
        </section>
      ) : (
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">SPRING HILL, FLORIDA&nbsp;&nbsp;·&nbsp;&nbsp;ESTABLISHED 2003</p>
            <h1>The Contractor Your<br />Neighbors Already<br />Called.</h1>
            <p className="hero-intro">
              William Swift has been painting, remodeling and<br className="desktop-break" />
              building homes in Hernando County for more than<br className="desktop-break" />
              twenty years. Licensed, insured, and finished when we<br className="desktop-break" />
              said we'd finish.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#contact">Get a free estimate</a>
              <a className="button button-outline" href="/gallery">View Our Work</a>
            </div>
            <div className="proof-grid" aria-label="Company benefits">
              <span>Licensed &amp; fully insured</span>
              <span>Written, itemized quotes</span>
              <span>Estimates always free</span>
              <span>Hundreds of local projects</span>
            </div>
          </div>
          <div className="hero-portrait">
            <img src="/assets/hero-bathroom-remodel.webp" alt="High-end bathroom remodel with a frameless glass shower and custom white oak vanity" />
            <blockquote>
              <p>"We are focused on providing the<br />Florida market with high-quality<br />work. When quality matters."</p>
              <cite>WILLIAM SWIFT, FOUNDER</cite>
            </blockquote>
          </div>
        </section>
      )}

      <div className="service-ticker" aria-label="Services">
        <span>PAINTING</span><b>◆</b>
        <span>REMODELING</span><b>◆</b>
        <span>NEW HOMES</span><b>◆</b>
        <span>WINDOWS &amp; DOORS</span><b>◆</b>
        <span>PRESSURE WASHING</span><b>◆</b>
        <span>FACILITIES</span>
      </div>

      <section className="services-section" id="services">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">WHAT WE DO</p>
            <h2>One Contractor.<br />Every Phase Covered.</h2>
          </div>
          <p className="section-summary">From the first coat of paint to a complete ground-up build, Swift brings the same care, communication and craftsmanship to every job.</p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article key={service.number}>
              <span className="service-number">{service.number}</span>
              <div className="service-image">
                <img src={service.image} alt={service.alt} />
              </div>
              <h3>{service.href ? <a href={service.href}>{service.title}</a> : service.title}</h3>
              <p>{service.description}</p>
              <button
                className="service-cta"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                type="button"
              >
                GET AN ESTIMATE <span aria-hidden="true">→</span>
              </button>
            </article>
          ))}
        </div>
        <div className="additional-services" aria-label="Additional services">
          <span className="additional-label">ALSO AVAILABLE:</span>
          {additionalServices.map((service) => (
            <span className="service-chip" key={service}>{service}</span>
          ))}
        </div>
      </section>

      <section className="portfolio-section" id="portfolio">
        <div className="portfolio-heading">
          <div>
            <p className="eyebrow">02 — SELECTED PROJECTS</p>
            <h2>Recent Work, Close to Home.</h2>
          </div>
          <div className="filter-buttons" aria-label="Filter projects">
            {categories.map((item) => (
              <button
                className={category === item ? "selected" : ""}
                key={item}
                onClick={() => setCategory(item)}
                type="button"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="project-grid">
          <article className="project project-large">
            <div className="project-image">
              <img src="/assets/florida-stucco-painting.jpg" alt="Painter coating the stucco exterior of a Florida home" />
            </div>
            <div className="project-meta">
              <div><h3>Full Exterior Repaint</h3><p>Spring Hill</p></div>
              <small>Painting</small>
            </div>
          </article>
          <div className="project-stack">
            <article className="project project-small">
              <div className="project-image">
                <img src="/assets/commercial-renovation.jpg" alt="Finished commercial bar and millwork renovation" />
              </div>
              <div className="project-meta"><h3>Commercial Interior Renovation</h3><p>Brooksville</p></div>
            </article>
            <article className="project project-small">
              <div className="project-image">
                <img src="/assets/new-home-exterior.jpg" alt="Modern Florida home exterior with impact windows" />
              </div>
              <div className="project-meta"><h3>Four-Bedroom New Build</h3><p>Weeki Wachee</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="process-section" aria-labelledby="process-heading">
        <div className="process-inner">
          <div className="process-heading">
            <div>
              <p className="eyebrow">HOW IT WORKS</p>
              <h2 id="process-heading">From First Call to<br />Final Walkthrough.</h2>
            </div>
            <p>Clear expectations, one point of contact and a crew that finishes when they say they will.</p>
          </div>
          <div className="process-steps">
            <article>
              <span className="process-number">01</span>
              <h3>Tell Us About Your Project</h3>
              <p>Choose a service and share a few details about what you are planning.</p>
            </article>
            <article>
              <span className="process-number">02</span>
              <h3>Meet With Swift</h3>
              <p>We visit the property, discuss the scope and provide a written, itemized estimate.</p>
            </article>
            <article>
              <span className="process-number">03</span>
              <h3>Approve the Work</h3>
              <p>Once approved, we schedule the project, complete the work and walk through everything with you before the job is finished.</p>
            </article>
          </div>
          <div className="process-action">
            <a className="button button-dark" href="#contact">Start with a free estimate</a>
            <p>Free estimates. No obligation. Licensed and insured.</p>
          </div>
        </div>
      </section>

      <section className="founder-section" id="about">
        <div className="founder-orbit" aria-hidden="true" />
        <div className="founder-inner">
          <div className="founder-portrait-wrap">
            <div className="founder-portrait-frame">
              <img src="/assets/william-swift.jpg" alt="William Swift, founder of Swift Construction and Painting" />
            </div>
            <div className="founder-name-card">
              <strong>William Swift</strong>
              <span>FOUNDER &amp; GENERAL<br />CONTRACTOR</span>
            </div>
          </div>
          <div className="founder-story">
            <p className="founder-eyebrow">BUILT ON A SIMPLE PROMISE</p>
            <h2>When Quality<br />Matters.</h2>
            <blockquote>“We started Swift to give Florida homeowners and businesses the kind of construction experience they should expect: honest communication, quality work and a team that respects the property.”</blockquote>
            <p className="founder-copy">Since 2003, Swift Construction and Painting has completed residential and commercial projects across Florida while keeping its focus close to home in Spring Hill and Hernando County.</p>
            <a className="founder-button" href="/gallery">See Our Work <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <section className="reviews-section">
        <div className="featured-review">
          <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
          <blockquote>"They arrived on time, were extremely courteous, and very<br />respectful of our property. The work was performed<br />correctly, the first time. They truly sell quality."</blockquote>
          <p><strong>Susan Miller</strong></p>
          <GoogleReviewBadge />
        </div>
        <div className="review-cards">
          <article>
            <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
            <blockquote>"The crew treated our home with care and the finished paintwork looks flawless. Every detail was handled professionally."</blockquote>
            <p><strong>Amanda Reynolds</strong></p>
            <GoogleReviewBadge />
          </article>
          <article>
            <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
            <blockquote>"Our bathroom remodel exceeded expectations. Communication was clear, the schedule stayed on track and the craftsmanship is outstanding."</blockquote>
            <p><strong>Marcus Thompson</strong></p>
            <GoogleReviewBadge />
          </article>
          <article>
            <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
            <blockquote>"From the estimate through the final walkthrough, the entire process felt organized and honest. We would confidently hire Swift again."</blockquote>
            <p><strong>Elena Parker</strong></p>
            <GoogleReviewBadge />
          </article>
          <article>
            <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
            <blockquote>"Beautiful work, dependable people and excellent attention to detail. Our renovation finally feels like the high-end home we envisioned."</blockquote>
            <p><strong>Daniel Foster</strong></p>
            <GoogleReviewBadge />
          </article>
        </div>
      </section>

      <section className="faq-section" aria-labelledby="faq-heading">
        <div className="faq-inner">
          <div className="faq-intro">
            <p className="faq-eyebrow"><span aria-hidden="true" />COMMON QUESTIONS</p>
            <h2 id="faq-heading">Answers Before<br />the First<br />Walkthrough.</h2>
            <p>Every project is different, but these are a few of the questions homeowners and business owners ask most often.</p>
            <a href="#contact">Have another question? <span aria-hidden="true">→</span></a>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <article className={isOpen ? "faq-item open" : "faq-item"} key={faq.question}>
                  <button
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    type="button"
                  >
                    <span>{faq.question}</span>
                    <span className="faq-toggle" aria-hidden="true">{isOpen ? "×" : "+"}</span>
                  </button>
                  <div className="faq-answer" id={`faq-answer-${index}`} hidden={!isOpen}>
                    <p>{faq.answer}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="estimate-section" id="contact">
        <InteractiveServiceMap />
        <form className="estimate-card" onSubmit={submitEstimate}>
          <p className="eyebrow">03 — FREE ESTIMATE</p>
          <h2>Serving Hernando,<br />Citrus &amp; Pasco Counties.</h2>
          <p className="estimate-copy">Spring Hill, Brooksville, Weeki Wachee, Hernando Beach and Ridge Manor,<br />plus communities throughout Citrus and Pasco Counties.</p>
          <div className="estimate-services">
            {estimateServices.map((item) => (
              <button
                className={estimateService === item ? "selected" : ""}
                key={item}
                onClick={() => setEstimateService(item)}
                type="button"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="form-grid">
            <input aria-label="Name" name="name" placeholder="Name" required />
            <input aria-label="Phone" name="phone" placeholder="Phone" type="tel" required />
            <input aria-label="Email" name="email" placeholder="Email" type="email" required />
            <input aria-label="City" name="city" placeholder="City" required />
            <textarea aria-label="Project description" name="description" placeholder="A short description of the project..." required />
          </div>
          <button className="button button-dark submit-button" type="submit">
            {submitted ? "Thank you — we'll be in touch" : "Request my free estimate"}
          </button>
          <p className="call-line">or call&nbsp;&nbsp; <a href="tel:3527017458">(352) 701-7458</a></p>
        </form>
      </section>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <img src="/assets/swift-logo.png" alt="Swift Construction and Painting, LLC" />
            <p>Licensed and insured building contractor<br />serving Spring Hill, Brooksville and communities<br />throughout Hernando, Citrus and Pasco Counties<br />since 2003.</p>
          </div>
          <div className="footer-column">
            <h3>Site</h3>
            <a href="/">Home</a><a href="/services">Services</a><a href="/gallery">Portfolio</a><a href="/about">About</a><a href="/blog">Blog</a><a href="/contact">Contact</a>
          </div>
          <div className="footer-column">
            <h3>Area</h3>
            <span>Spring Hill</span><span>Brooksville</span><span>Weeki Wachee</span><span>Hernando Beach</span><span>Ridge Manor</span><span>Citrus County</span><span>Pasco County</span>
          </div>
          <div className="footer-contact">
            <h3>Contact</h3>
            <a className="footer-phone" href="tel:3527017458">(352) 701-7458</a>
            <a href="mailto:swiftconstruction.william@gmail.com">swiftconstruction.william@gmail.com</a>
            <div><a href="/gallery">Project Gallery</a><a href="/contact">Free Estimate</a></div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 SWIFT CONSTRUCTION AND PAINTING, LLC</span>
          <span>"WHEN QUALITY MATTERS"</span>
        </div>
      </footer>
    </main>
  );
}
