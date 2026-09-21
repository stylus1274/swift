import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import styles from "../../locations/spring-hill-fl/page.module.css";

const services=[
  ["Custom Home Building","/new-home-construction","Ground-up custom homes managed from early planning through completion."],
  ["Property & Plan Review","/contact","Review of the property, goals, plans and practical requirements before construction begins."],
  ["Permits & Site Preparation","/new-home-construction","Coordination of the approved permit scope and early site work."],
  ["Trade Coordination","/new-home-construction","Licensed subcontractors coordinated for the trades required by the project."],
  ["Finish Selections","/new-home-construction","Interior and exterior finish decisions organized as the build progresses."],
  ["Final Walkthrough","/contact","Review of the completed scope before final project handoff."],
];

export default function BrooksvilleNewConstructionPage(){
  return <main className={styles.page}>
    <SiteHeader />
    <nav className={styles.breadcrumb} aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/locations/brooksville-fl">Brooksville</a><span>/</span><span>New Construction</span></nav>
    <section className={styles.hero}>
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>NEW CONSTRUCTION • BROOKSVILLE, FL</p>
        <h1>Custom Home Construction in Brooksville, FL</h1>
        <p className={styles.deck}>Swift Construction & Painting builds custom homes in Brooksville and the surrounding Hernando County market, coordinating the project from early planning through construction and completion.</p>
        <div className={styles.heroActions}><a className={styles.primaryButton} href="/contact">Discuss Your New Home</a><a className={styles.secondaryLink} href="/projects/custom-farmhouse-home-brooksville-fl">See a Brooksville Build <span>→</span></a></div>
      </div>
      <div className={styles.heroImage}><img src="/assets/projects/brooksville-custom-farmhouse/exterior.jpg" alt="Custom farmhouse built by Swift Construction and Painting in Brooksville, Florida"/></div>
    </section>
    <section className={styles.localProof}>
      <div><span>Location</span><strong>Brooksville, FL</strong></div>
      <div><span>Focus</span><strong>Custom Home Construction</strong></div>
      <div><span>Established</span><strong>2003</strong></div>
      <div><span>Florida License</span><strong>CBC1260893</strong></div>
    </section>
    <section className={styles.intro}>
      <div><p className={styles.eyebrow}>CUSTOM HOMES IN BROOKSVILLE</p><h2>Build Around the Property, the Plan and Daily Life.</h2></div>
      <div><p>Swift&apos;s documented Brooksville work includes a custom farmhouse completed in 2025. The company identifies custom homes as one of its strongest revenue-producing services and says new construction is a major growth priority.</p><p>Swift can work from the early planning stage, coordinate site preparation and required trades, and manage the build through finish selections and final walkthrough.</p></div>
    </section>
    <section className={styles.servicesSection}>
      <div className={styles.sectionHeading}><p className={styles.eyebrow}>BUILDING SERVICES</p><h2>What Goes Into a Custom Home Project.</h2></div>
      <div className={styles.serviceGrid}>{services.map(([title,href,copy],i)=><a href={href} key={title}><span>{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><p>{copy}</p><b>Learn More →</b></a>)}</div>
    </section>
    <section className={styles.projectsSection}>
      <div className={styles.sectionHeading}><p className={styles.eyebrow}>BROOKSVILLE PROJECT PROOF</p><h2>A Completed Custom Farmhouse.</h2><p>Project details and photos come from Swift&apos;s completed-project records.</p></div>
      <div className={styles.projectGrid}>
        <article><a className={styles.projectImage} href="/projects/custom-farmhouse-home-brooksville-fl"><img src="/assets/projects/brooksville-custom-farmhouse/kitchen.jpg" alt="Kitchen inside a completed custom farmhouse in Brooksville, Florida"/></a><div><p className={styles.eyebrow}>CUSTOM HOME • BROOKSVILLE</p><h3><a href="/projects/custom-farmhouse-home-brooksville-fl">Custom Farmhouse Home</a></h3><p>The eight-month build ran from October 2024 through June 2025. Documented project investment: $421,920.</p></div></article>
        <article><a className={styles.projectImage} href="/projects/custom-farmhouse-home-brooksville-fl"><img src="/assets/projects/brooksville-custom-farmhouse/back-porch.jpg" alt="Covered back porch of the completed Brooksville custom farmhouse"/></a><div><p className={styles.eyebrow}>FINISHED PROJECT</p><h3>More of the Completed Home</h3><p>The client-submitted photo set documents the exterior, kitchen, living room, primary bathroom and covered outdoor areas.</p></div></article>
      </div>
    </section>
    <section className={styles.processSection}><div><p className={styles.eyebrow}>CUSTOM HOME PROCESS</p><h2>Move From Property Questions to a Defined Build.</h2></div><div className={styles.steps}><p><strong>01</strong><span>Discuss the lot, plans, home goals and major priorities.</span></p><p><strong>02</strong><span>Define the construction scope, permits, trade work and finish selections.</span></p><p><strong>03</strong><span>Coordinate the build through inspections, finishing stages and final walkthrough.</span></p></div></section>
    <section className={styles.cta}><div><p className={styles.eyebrow}>PLANNING A HOME IN BROOKSVILLE?</p><h2>Start With the Property and the Home You Want.</h2><p>Talk with Swift about your lot, plans and the practical next step toward construction.</p></div><a className={styles.primaryButton} href="/contact">Request a Project Conversation</a></section>
    <SiteFooter />
  </main>;
}