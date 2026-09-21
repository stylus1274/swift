import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import styles from "../spring-hill-fl/page.module.css";

const services=[
  ["New Home Construction","/custom-home-building","Custom and ground-up homes planned from design through completion."],
  ["Residential Remodeling","/home-remodeling","Whole-home and room-by-room remodeling coordinated under one contractor."],
  ["Kitchen Remodeling","/kitchen-remodeling","Kitchen layout, cabinetry, surfaces and finish work."],
  ["Bathroom Remodeling","/bathroom-remodeling","Bathroom renovations including showers, tile, vanities and finish work."],
  ["Commercial Services","/commercial-services","Commercial buildouts, renovations, painting and facility improvements."],
  ["Windows & Doors","/windows-doors","Window and door replacement and installation for Florida properties."],
];

export default function BrooksvilleLocationPage(){
  return <main className={styles.page}>
    <SiteHeader />
    <nav className={styles.breadcrumb} aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span>Brooksville, FL</span></nav>
    <section className={styles.hero}>
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>BROOKSVILLE, FLORIDA</p>
        <h1>Construction, Remodeling & Home Building in Brooksville, FL</h1>
        <p className={styles.deck}>Swift Construction & Painting serves Brooksville with custom home construction, remodeling, painting, commercial improvements, windows and doors, and related building services.</p>
        <div className={styles.heroActions}><a className={styles.primaryButton} href="/contact">Request a Free Estimate</a><a className={styles.secondaryLink} href="/brooksville-fl/new-construction">Explore Brooksville New Construction <span aria-hidden="true">→</span></a></div>
      </div>
      <div className={styles.heroImage}><img src="/assets/projects/brooksville-custom-farmhouse/exterior.jpg" alt="Completed custom farmhouse in Brooksville, Florida by Swift Construction and Painting"/></div>
    </section>
    <section className={styles.localProof}>
      <div><span>Serving</span><strong>Brooksville & Hernando County</strong></div>
      <div><span>Established</span><strong>2003</strong></div>
      <div><span>Florida License</span><strong>CBC1260893</strong></div>
      <div><span>Estimates</span><strong>Free On-Site Walkthroughs</strong></div>
    </section>
    <section className={styles.intro}>
      <div><p className={styles.eyebrow}>BROOKSVILLE PROJECTS</p><h2>From Custom Homes to Remodeling and Property Improvements.</h2></div>
      <div><p>Swift&apos;s documented Brooksville work includes a custom farmhouse, a custom cabana, and a detached garage. The farmhouse project ran for eight months and was completed in June 2025.</p><p>For larger construction, Swift coordinates the licensed trades required for plumbing, electrical, roofing, concrete, framing, drywall, block and stucco. Remodeling work is handled in-house where practical.</p></div>
    </section>
    <section className={styles.servicesSection}>
      <div className={styles.sectionHeading}><p className={styles.eyebrow}>SERVICES IN BROOKSVILLE</p><h2>Residential and Commercial Construction Services.</h2></div>
      <div className={styles.serviceGrid}>{services.map(([title,href,copy],index)=><a href={href} key={title}><span>{String(index+1).padStart(2,"0")}</span><h3>{title}</h3><p>{copy}</p><b>Learn More →</b></a>)}</div>
    </section>
    <section className={styles.projectsSection}>
      <div className={styles.sectionHeading}><p className={styles.eyebrow}>DOCUMENTED BROOKSVILLE PROJECT</p><h2>A Real Custom Home Completed in Brooksville.</h2><p>The project details and photography below come from Swift&apos;s client-submitted project records.</p></div>
      <div className={styles.projectGrid}>
        <article><a className={styles.projectImage} href="/projects/custom-farmhouse-home-brooksville-fl"><img src="/assets/projects/brooksville-custom-farmhouse/kitchen.jpg" alt="Completed kitchen in a custom farmhouse in Brooksville, Florida"/></a><div><p className={styles.eyebrow}>NEW CONSTRUCTION • BROOKSVILLE</p><h3><a href="/projects/custom-farmhouse-home-brooksville-fl">Custom Farmhouse Home</a></h3><p>Eight-month custom home project completed from October 2024 through June 2025. Documented investment: $421,920.</p></div></article>
        <article><div className={styles.textProject}><p className={styles.eyebrow}>OTHER DOCUMENTED WORK</p><h3>More Brooksville Project Types</h3><p>Swift&apos;s completed-project file also documents a custom cabana and a detached garage in Brooksville. Those projects remain gallery-level proof until more written project details are available.</p><a href="/gallery">View Completed Work →</a></div></article>
      </div>
    </section>
    <section className={styles.processSection}><div><p className={styles.eyebrow}>HOW ESTIMATES WORK</p><h2>Begin With an In-Person Look at the Project.</h2></div><div className={styles.steps}><p><strong>01</strong><span>Contact Swift with the project type and property details.</span></p><p><strong>02</strong><span>Schedule an on-site estimate and walk through the scope.</span></p><p><strong>03</strong><span>Review the written estimate and project schedule before work begins.</span></p></div></section>
    <section className={styles.cta}><div><p className={styles.eyebrow}>PLANNING A PROJECT IN BROOKSVILLE?</p><h2>Start With the Property and the Scope.</h2><p>Schedule a free estimate and talk through what you want to build, remodel or improve.</p></div><a className={styles.primaryButton} href="/contact">Request a Free Estimate</a></section>
    <SiteFooter />
  </main>;
}