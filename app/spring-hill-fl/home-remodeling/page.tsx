import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import styles from "../../locations/spring-hill-fl/page.module.css";

const services=[
  ["Whole-Home Remodeling","/residential-remodeling","Coordinated renovations across multiple rooms under one project plan."],
  ["Kitchen Remodeling","/kitchen-remodeling","Cabinetry, counters, flooring, lighting and layout improvements."],
  ["Bathroom Remodeling","/bathroom-remodeling","Showers, tile, vanities, fixtures and complete bathroom updates."],
  ["Flooring & Carpentry","/flooring","Flooring, trim, doors and finish carpentry that complete the renovation."],
  ["Interior Painting","/interior-painting","Interior painting coordinated with renovation and finish work."],
  ["Home Additions","/home-additions","Expanded living space when remodeling alone cannot solve the space problem."],
];

export default function SpringHillHomeRemodelingPage(){
  return <main className={styles.page}>
    <SiteHeader />
    <nav className={styles.breadcrumb} aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/locations/spring-hill-fl">Spring Hill</a><span>/</span><span>Home Remodeling</span></nav>
    <section className={styles.hero}>
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>HOME REMODELING • SPRING HILL, FL</p>
        <h1>Home Remodeling in Spring Hill, FL</h1>
        <p className={styles.deck}>Swift Construction & Painting handles kitchen, bathroom and whole-home remodeling in Spring Hill with one coordinated scope for the rooms, finishes and trades involved.</p>
        <div className={styles.heroActions}><a className={styles.primaryButton} href="/contact">Request a Free Estimate</a><a className={styles.secondaryLink} href="/projects/whole-home-remodel-spring-hill-fl">See a Spring Hill Remodel <span>→</span></a></div>
      </div>
      <div className={styles.heroImage}><img src="/assets/projects/spring-hill-whole-home-remodel/kitchen-after.jpg" alt="Completed kitchen in a Swift whole-home remodeling project in Spring Hill, Florida"/></div>
    </section>
    <section className={styles.localProof}>
      <div><span>Location</span><strong>Spring Hill, FL</strong></div>
      <div><span>Project Range</span><strong>Single Room to Whole Home</strong></div>
      <div><span>Established</span><strong>2003</strong></div>
      <div><span>Florida License</span><strong>CBC1260893</strong></div>
    </section>
    <section className={styles.intro}>
      <div><p className={styles.eyebrow}>SPRING HILL REMODELING</p><h2>Coordinate the Rooms Instead of Treating Them as Separate Jobs.</h2></div>
      <div><p>A larger remodel often crosses several trades and rooms. Swift&apos;s documented Spring Hill whole-home project included the kitchen, primary bathroom, pool bathroom, hallway bathroom, laundry room, living room, dining room, primary bedroom, three additional bedrooms and patio.</p><p>The company says remodeling work is typically handled in-house where practical, which helps keep the project under one point of coordination.</p></div>
    </section>
    <section className={styles.servicesSection}>
      <div className={styles.sectionHeading}><p className={styles.eyebrow}>REMODELING SERVICES</p><h2>Build the Scope Around the Home You Want to Improve.</h2></div>
      <div className={styles.serviceGrid}>{services.map(([title,href,copy],i)=><a href={href} key={title}><span>{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><p>{copy}</p><b>Learn More →</b></a>)}</div>
    </section>
    <section className={styles.projectsSection}>
      <div className={styles.sectionHeading}><p className={styles.eyebrow}>DOCUMENTED SPRING HILL REMODEL</p><h2>Before and After From a Real Whole-Home Project.</h2><p>The project ran for four months and had a documented investment of $104,760.</p></div>
      <div className={styles.projectGrid}>
        <article><a className={styles.projectImage} href="/projects/whole-home-remodel-spring-hill-fl"><img src="/assets/projects/spring-hill-whole-home-remodel/kitchen-after.jpg" alt="Kitchen after a whole-home remodel in Spring Hill, Florida"/></a><div><p className={styles.eyebrow}>KITCHEN • AFTER</p><h3><a href="/projects/whole-home-remodel-spring-hill-fl">Whole-Home Remodel</a></h3><p>White cabinetry, light surfaces, updated lighting and a coordinated finish direction were part of the completed kitchen.</p></div></article>
        <article><a className={styles.projectImage} href="/projects/whole-home-remodel-spring-hill-fl"><img src="/assets/projects/spring-hill-whole-home-remodel/primary-bath-after.jpg" alt="Primary bathroom after a whole-home remodel in Spring Hill, Florida"/></a><div><p className={styles.eyebrow}>PRIMARY BATHROOM • AFTER</p><h3>Part of the Same Remodel</h3><p>The primary bathroom was updated with tile, a glass shower enclosure, dark fixtures and a refreshed vanity area.</p></div></article>
      </div>
    </section>
    <section className={styles.processSection}><div><p className={styles.eyebrow}>REMODELING PROCESS</p><h2>Start With the Rooms and Problems You Want to Solve.</h2></div><div className={styles.steps}><p><strong>01</strong><span>Walk the home and define what should change.</span></p><p><strong>02</strong><span>Build a written scope around the rooms, selections and required work.</span></p><p><strong>03</strong><span>Coordinate construction and review the finished work together.</span></p></div></section>
    <section className={styles.cta}><div><p className={styles.eyebrow}>PLANNING A REMODEL IN SPRING HILL?</p><h2>Start With an On-Site Walkthrough.</h2><p>Show Swift the spaces you want to change and discuss the scope before pricing the project.</p></div><a className={styles.primaryButton} href="/contact">Request a Free Estimate</a></section>
    <SiteFooter />
  </main>;
}