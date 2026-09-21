import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import styles from "../../locations/spring-hill-fl/page.module.css";

const services=[
  ["Custom Home Construction","/new-home-construction","Ground-up homes planned from property review through construction and final walkthrough."],
  ["Multi-Family Construction","/multi-family-construction","Duplex and multi-unit construction for owners and investors."],
  ["Site & Plan Review","/contact","Early review of the property, goals, plans and practical construction considerations."],
  ["Permits & Coordination","/new-home-construction","Construction sequencing, permitting and licensed trade coordination under one project plan."],
  ["Interior & Exterior Finishes","/new-home-construction","Finish selections and final details coordinated as the build moves toward completion."],
  ["Post-Build Walkthrough","/contact","A final walkthrough to review the completed scope and remaining project details."],
];

export default function HernandoCountyNewConstructionPage(){
  return <main className={styles.page}>
    <SiteHeader />
    <nav className={styles.breadcrumb} aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/locations/hernando-county-fl">Hernando County</a><span>/</span><span>New Construction</span></nav>
    <section className={styles.hero}>
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>NEW CONSTRUCTION • HERNANDO COUNTY, FL</p>
        <h1>New Home Construction in Hernando County, FL</h1>
        <p className={styles.deck}>Swift Construction & Painting builds custom homes and multi-family projects across Hernando County, coordinating the major phases from early planning through construction and final walkthrough.</p>
        <div className={styles.heroActions}><a className={styles.primaryButton} href="/contact">Discuss Your Build</a><a className={styles.secondaryLink} href="/new-home-construction">New Home Construction Services <span>→</span></a></div>
      </div>
      <div className={styles.heroImage}><img src="/assets/projects/brooksville-custom-farmhouse/exterior.jpg" alt="Completed Swift custom farmhouse in Hernando County, Florida"/></div>
    </section>
    <section className={styles.localProof}>
      <div><span>Service Area</span><strong>Hernando County</strong></div>
      <div><span>Project Types</span><strong>Custom Homes & Multi-Family</strong></div>
      <div><span>Established</span><strong>2003</strong></div>
      <div><span>Florida License</span><strong>CBC1260893</strong></div>
    </section>
    <section className={styles.intro}>
      <div><p className={styles.eyebrow}>BUILDING IN HERNANDO COUNTY</p><h2>Ground-Up Construction Managed as One Connected Project.</h2></div>
      <div><p>Swift&apos;s stated growth focus includes new construction and additions, with custom homes and multi-family duplex builds among its strongest project types. For new construction, the company says it can manage the work from land clearing through completion.</p><p>Licensed subcontractors are coordinated where required for trades including plumbing, electrical, roofing, concrete, framing, drywall, block and stucco.</p></div>
    </section>
    <section className={styles.servicesSection}>
      <div className={styles.sectionHeading}><p className={styles.eyebrow}>WHAT SWIFT MANAGES</p><h2>New-Construction Support From Planning Through Handoff.</h2></div>
      <div className={styles.serviceGrid}>{services.map(([title,href,copy],i)=><a href={href} key={title}><span>{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><p>{copy}</p><b>Learn More →</b></a>)}</div>
    </section>
    <section className={styles.projectsSection}>
      <div className={styles.sectionHeading}><p className={styles.eyebrow}>DOCUMENTED HERNANDO COUNTY BUILDS</p><h2>Real New-Construction Projects.</h2><p>These are documented Swift projects in Brooksville and Spring Hill.</p></div>
      <div className={styles.projectGrid}>
        <article><a className={styles.projectImage} href="/projects/custom-farmhouse-home-brooksville-fl"><img src="/assets/projects/brooksville-custom-farmhouse/exterior.jpg" alt="Custom farmhouse completed in Brooksville, Florida"/></a><div><p className={styles.eyebrow}>BROOKSVILLE • CUSTOM HOME</p><h3><a href="/projects/custom-farmhouse-home-brooksville-fl">Custom Farmhouse Home</a></h3><p>Eight-month custom home project completed in June 2025 with a documented investment of $421,920.</p></div></article>
        <article><div className={styles.textProject}><p className={styles.eyebrow}>SPRING HILL • DUPLEX</p><h3><a href="/projects/new-construction-duplex-spring-hill-fl">New Construction Duplex</a></h3><p>Five-month ground-up duplex project completed for a repeat customer in May 2026. Documented investment: $314,490.</p><a href="/projects/new-construction-duplex-spring-hill-fl">View Project Details →</a></div></article>
      </div>
    </section>
    <section className={styles.processSection}><div><p className={styles.eyebrow}>NEW CONSTRUCTION PROCESS</p><h2>Start With the Property and the Build Plan.</h2></div><div className={styles.steps}><p><strong>01</strong><span>Review the property, plans, priorities and build goals.</span></p><p><strong>02</strong><span>Define scope, permitting needs, selections and construction sequencing.</span></p><p><strong>03</strong><span>Coordinate construction, trade work, inspections and the final walkthrough.</span></p></div></section>
    <section className={styles.cta}><div><p className={styles.eyebrow}>BUILDING IN HERNANDO COUNTY?</p><h2>Talk Through Your Property and Plans.</h2><p>Start with a project conversation so Swift can understand the site, scope and next steps.</p></div><a className={styles.primaryButton} href="/contact">Request a Project Conversation</a></section>
    <SiteFooter />
  </main>;
}