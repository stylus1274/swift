"use client";

import { FormEvent, useState } from "react";
import SiteHeader from "../../components/SiteHeader";

const categories = ["All Projects", "Remodeling", "Painting", "Construction", "Exterior Improvements"];

const projects = [
  { title: "Primary Bathroom Renovation", category: "Remodeling", location: "Spring Hill", image: "/assets/hero-bathroom-remodel.webp", alt: "Bright completed bathroom with double vanity and walk-in shower" },
  { title: "Kitchen Layout & Finish Update", category: "Remodeling", location: "Brooksville", image: "/assets/kitchen-remodeling-hero.png", alt: "Completed kitchen renovation with wood cabinetry and large island" },
  { title: "Connected Living Space Remodel", category: "Remodeling", location: "Hernando County", image: "/assets/residential-remodeling-interior.png", alt: "Renovated open living area with coordinated flooring and finishes" },
  { title: "Florida Home Exterior Refresh", category: "Painting", location: "Spring Hill", image: "/assets/exterior-painting-hero.png", alt: "Freshly painted Florida stucco home exterior" },
  { title: "Whole-Home Interior Painting", category: "Painting", location: "Pasco County", image: "/assets/interior-painting-hero.png", alt: "Bright interior with clean newly painted walls and trim" },
  { title: "New Home Construction", category: "Construction", location: "Citrus County", image: "/assets/new-home-construction-hero.png", alt: "Completed new home with modern Florida exterior" },
  { title: "Whole-Home Flooring Installation", category: "Remodeling", location: "Weeki Wachee", image: "/assets/flooring-hero.png", alt: "New plank flooring installed through a bright living space" },
  { title: "Window & Door Replacement", category: "Exterior Improvements", location: "Hernando Beach", image: "/assets/windows-doors-hero.png", alt: "Florida home with newly installed windows and exterior doors" },
  { title: "Driveway & Exterior Cleaning", category: "Exterior Improvements", location: "Ridge Manor", image: "/assets/pressure-washing-hero.png", alt: "Professional pressure washing a concrete driveway" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [submitted, setSubmitted] = useState(false);
  const visibleProjects = activeCategory === "All Projects" ? projects : projects.filter((project) => project.category === activeCategory);

  function submitEstimate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="remodel-page gallery-page">
      <SiteHeader contactHref="#gallery-estimate" />

      <section className="gallery-hero">
        <img src="/assets/gallery-hero.png" alt="Completed Florida home renovation opening to a finished outdoor living area" />
        <div className="gallery-hero-overlay" />
        <div className="gallery-hero-copy">
          <p className="eyebrow">SWIFT PROJECT GALLERY</p>
          <h1>See What Quality Looks Like When the Whole Project Comes Together.</h1>
          <p>Explore painting, remodeling, construction and exterior improvement work planned around Florida homes and properties.</p>
          <div className="gallery-hero-actions">
            <a className="button remodel-primary" href="#project-gallery">View the Projects</a>
            <a href="#gallery-estimate">Request a Similar Project <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <div className="gallery-hero-proof"><span>Serving Florida Homeowners Since 2003</span><span>Licensed &amp; Insured • CBC1260893</span><span>Written, Itemized Proposals</span></div>
      </section>

      <section className="gallery-work" id="project-gallery">
        <div className="gallery-heading">
          <div><p className="eyebrow">RECENT WORK</p><h2>Projects Built, Painted and Finished With Care.</h2></div>
          <p>Choose a category to see the kind of project you are considering. Every estimate starts with a walkthrough and a clear written scope.</p>
        </div>
        <div className="gallery-filters" aria-label="Filter projects">
          {categories.map((category) => <button className={activeCategory === category ? "active" : ""} type="button" key={category} aria-pressed={activeCategory === category} onClick={() => setActiveCategory(category)}>{category}</button>)}
        </div>
        <div className="gallery-grid" aria-live="polite">
          {visibleProjects.map((project, index) => (
            <article className={index % 5 === 0 || index % 5 === 3 ? "gallery-card gallery-card-wide" : "gallery-card"} key={project.title}>
              <div className="gallery-card-image"><img src={project.image} alt={project.alt} /></div>
              <div className="gallery-card-copy"><div><span>{project.category}</span><h3>{project.title}</h3><p>{project.location}, Florida</p></div><a href="#gallery-estimate" aria-label={`Request a project similar to ${project.title}`}>Request Something Similar <b aria-hidden="true">→</b></a></div>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery-standard">
        <div><p className="eyebrow">THE SWIFT STANDARD</p><h2>The Finished Photos Matter. The Process Behind Them Matters More.</h2></div>
        <div className="gallery-standard-grid">
          <article><span>01</span><h3>Clear Scope</h3><p>A written, itemized proposal defines the work before scheduling begins.</p></article>
          <article><span>02</span><h3>One Point of Contact</h3><p>Painting, remodeling and construction details stay coordinated under one contractor.</p></article>
          <article><span>03</span><h3>Careful Finish Work</h3><p>Preparation, alignment and final details are treated as part of the complete project.</p></article>
          <article><span>04</span><h3>Final Walkthrough</h3><p>The completed work is reviewed with you before the project is closed out.</p></article>
        </div>
      </section>

      <section className="gallery-estimate" id="gallery-estimate">
        <div className="gallery-estimate-copy">
          <p className="eyebrow">START YOUR PROJECT</p>
          <h2>See Something Close to What You Have in Mind?</h2>
          <p>Tell Swift which type of project caught your attention and what you are planning for your property.</p>
          <div><span>Free on-site estimate</span><span>No deposit required</span><span>Hernando, Citrus &amp; Pasco Counties</span></div>
          <a href="tel:3527017458">Prefer to call? <strong>(352) 701-7458</strong></a>
        </div>
        <form className="gallery-estimate-form" onSubmit={submitEstimate}>
          <div className="remodel-form-row"><label>Name<input name="name" placeholder="Your name" required /></label><label>Phone<input name="phone" placeholder="(000) 000-0000" type="tel" required /></label></div>
          <div className="remodel-form-row"><label>Email<input name="email" placeholder="you@email.com" type="email" /></label><label>Project City or ZIP<input name="location" placeholder="Spring Hill" required /></label></div>
          <label>Project Type<select defaultValue="" required><option value="" disabled>Select a project</option><option>Painting</option><option>Residential remodeling</option><option>New construction or addition</option><option>Windows, doors or flooring</option><option>Pressure washing</option><option>Commercial property</option><option>Not sure yet</option></select></label>
          <label>Project Details<textarea name="details" placeholder="Tell us what you liked in the gallery and what you would like to change at your property." required /></label>
          <button className="button remodel-primary" type="submit">{submitted ? "Thank You. We’ll Be in Touch." : "Request My Free Estimate"}</button>
          <small>Your information is only used to respond to your project request.</small>
        </form>
      </section>

      <footer className="site-footer remodel-footer">
        <div className="footer-main">
          <div className="footer-brand"><img src="/assets/swift-logo.png" alt="Swift Construction and Painting, LLC" /><p>Licensed and insured building contractor<br />serving Hernando, Citrus and Pasco Counties<br />since 2003.</p></div>
          <div className="footer-column"><h3>Site</h3><a href="/">Home</a><a href="/services">Services</a><a href="/gallery">Gallery</a><a href="/about">About</a><a href="#gallery-estimate">Contact</a></div>
          <div className="footer-column"><h3>Explore</h3><a href="/residential-remodeling">Residential Remodeling</a><a href="/residential-painting">Residential Painting</a><a href="/new-home-construction">New Home Construction</a><a href="#gallery-estimate">Request an Estimate</a></div>
          <div className="footer-contact"><h3>Contact</h3><a className="footer-phone" href="tel:3527017458">(352) 701-7458</a><a href="mailto:swiftconstruction.william@gmail.com">swiftconstruction.william@gmail.com</a><address className="footer-address">11105 Lomita Wren Rd<br />Weeki Wachee, FL 34614</address></div>
        </div>
        <div className="footer-bottom"><span>© 2026 SWIFT CONSTRUCTION AND PAINTING, LLC</span><span>“WHEN QUALITY MATTERS”</span></div>
      </footer>
    </main>
  );
}
