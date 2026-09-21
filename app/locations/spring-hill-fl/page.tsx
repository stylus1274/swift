import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import styles from "./page.module.css";

const services=[
  ["Residential Remodeling","/residential-remodeling","Whole-home renovations, kitchens, bathrooms, flooring, carpentry and coordinated interior improvements."],
  ["New Home Construction","/new-home-construction","Ground-up homes and multi-family construction managed from planning through completion."],
  ["Interior & Exterior Painting","/residential-painting","Residential painting with preparation, finish work and Florida-specific exterior considerations."],
  ["Home Additions","/home-additions","Room additions and expanded living space planned around the existing home."],
  ["Windows & Doors","/windows-doors","Replacement and installation for windows, doors and impact-rated openings."],
  ["Pressure Washing","/pressure-washing","Exterior cleaning for homes and property surfaces before maintenance or refinishing."],
];

export default function SpringHillLocationPage(){
  return <main className={styles.page}>
    <SiteHeader />
    <nav className={styles.breadcrumb} aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span>Spring Hill, FL</span></nav>
    <section className={styles.hero}>
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>SPRING HILL, FLORIDA</p>
        <h1>Construction, Remodeling & Painting Contractor in Spring Hill, FL</h1>
        <p className={styles.deck}>Swift Construction & Painting serves Spring Hill homeowners with remodeling, new construction, painting, additions, windows and doors, and other building services backed by more than two decades in the local market.</p>
        <div className={styles.heroActions}><a className={styles.primaryButton} href="/contact">Request a Free Estimate</a><a className={styles.secondaryLink} href="/gallery">View Local Projects <span aria-hidden="true">→</span></a></div>
      </div>
      <div className={styles.heroImage}><img src="/assets/projects/spring-hill-whole-home-remodel/kitchen-after.jpg" alt="Completed whole-home remodeling project in Spring Hill, Florida by Swift Construction and Painting"/></div>
    </section>
    <section className={styles.localProof}>
      <div><span>Serving</span><strong>Spring Hill & Hernando County</strong></div>
      <div><span>Established</span><strong>2003</strong></div>
      <div><span>Florida License</span><strong>CBC1260893</strong></div>
      <div><span>Estimates</span><strong>Free On-Site Walkthroughs</strong></div>
    </section>
    <section className={styles.intro}>
      <div><p className={styles.eyebrow}>LOCAL CONTRACTOR, BROAD CAPABILITY</p><h2>One Team for More Than a Single Trade.</h2></div>
      <div><p>Spring Hill projects often involve more than one scope. A kitchen can lead into flooring and painting. A bathroom remodel can involve framing, drywall, tile and finish carpentry. An addition has to work with the existing home, not just attach to it.</p><p>Swift handles remodeling work in-house where practical and coordinates the licensed subcontractors required for larger new-construction projects.</p></div>
    </section>
    <section className={styles.servicesSection}>
      <div className={styles.sectionHeading}><p className={styles.eyebrow}>SERVICES IN SPRING HILL</p><h2>Construction and Home Improvement Services.</h2></div>
      <div className={styles.serviceGrid}>{services.map(([title,href,copy],index)=><a href={href} key={title}><span>{String(index+1).padStart(2,"0")}</span><h3>{title}</h3><p>{copy}</p><b>Learn More →</b></a>)}</div>
    </section>
    <section className={styles.projectsSection}>
      <div className={styles.sectionHeading}><p className={styles.eyebrow}>DOCUMENTED SPRING HILL PROJECTS</p><h2>Real Work Completed in Spring Hill.</h2><p>These projects come directly from Swift&apos;s completed-project records.</p></div>
      <div className={styles.projectGrid}>
        <article>
          <a className={styles.projectImage} href="/projects/whole-home-remodel-spring-hill-fl"><img src="/assets/projects/spring-hill-whole-home-remodel/primary-bath-after.jpg" alt="Completed primary bathroom remodel in Spring Hill, Florida"/></a>
          <div><p className={styles.eyebrow}>REMODELING • SPRING HILL</p><h3><a href="/projects/whole-home-remodel-spring-hill-fl">Whole-Home Remodel</a></h3><p>Four-month remodel covering the kitchen, bathrooms, laundry, living spaces, bedrooms and patio. Documented investment: $104,760.</p></div>
        </article>
        <article><div className={styles.textProject}><p className={styles.eyebrow}>NEW CONSTRUCTION • SPRING HILL</p><h3><a href="/projects/new-construction-duplex-spring-hill-fl">New Construction Duplex</a></h3><p>Five-month ground-up duplex project completed from December 2025 through May 2026 for a repeat customer. Documented investment: $314,490.</p><a href="/projects/new-construction-duplex-spring-hill-fl">View Project Details →</a></div></article>
      </div>
    </section>
    <section className={styles.processSection}>
      <div><p className={styles.eyebrow}>HOW ESTIMATES WORK</p><h2>Start With an On-Site Walkthrough.</h2></div>
      <div className={styles.steps}><p><strong>01</strong><span>Contact Swift and describe the project you are considering.</span></p><p><strong>02</strong><span>Schedule an in-person estimate, typically within a week of the request.</span></p><p><strong>03</strong><span>Review a written scope and estimate, then schedule the project if you decide to move forward.</span></p></div>
    </section>
    <section className={styles.cta}><div><p className={styles.eyebrow}>PLANNING WORK IN SPRING HILL?</p><h2>Tell Swift What You Want to Build or Change.</h2><p>Start with a free estimate and an in-person look at the property.</p></div><a className={styles.primaryButton} href="/contact">Request a Free Estimate</a></section>
    <SiteFooter />
  </main>;
}
