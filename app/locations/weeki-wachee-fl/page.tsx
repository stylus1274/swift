import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import styles from "../spring-hill-fl/page.module.css";

const services=[
  ["Residential Remodeling","/residential-remodeling","Whole-home renovations, kitchens, bathrooms, flooring and coordinated interior improvements."],
  ["New Home Construction","/new-home-construction","Ground-up homes managed from planning through completion."],
  ["Interior & Exterior Painting","/residential-painting","Residential painting with preparation and durable finishes for Florida homes."],
  ["Home Additions","/home-additions","Room additions and expanded living space planned around the existing structure."],
  ["Windows & Doors","/windows-doors","Window and door replacement and installation for Florida properties."],
  ["Pressure Washing","/pressure-washing","Exterior cleaning for homes and other property surfaces."],
];

export default function WeekiWacheeLocationPage(){
  return <main className={styles.page}>
    <SiteHeader />
    <nav className={styles.breadcrumb} aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span>Weeki Wachee, FL</span></nav>
    <section className={styles.hero}>
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>WEEKI WACHEE, FLORIDA</p>
        <h1>Construction, Remodeling & Painting in Weeki Wachee, FL</h1>
        <p className={styles.deck}>Swift Construction & Painting serves Weeki Wachee homeowners with remodeling, new construction, painting, additions, windows and doors, and related building services.</p>
        <div className={styles.heroActions}><a className={styles.primaryButton} href="/contact">Request a Free Estimate</a><a className={styles.secondaryLink} href="/gallery">See Swift&apos;s Work <span aria-hidden="true">→</span></a></div>
      </div>
      <div className={styles.heroImage}><img src="/assets/projects/spring-hill-whole-home-remodel/kitchen-after.jpg" alt="Example of completed Swift remodeling work in Hernando County"/></div>
    </section>
    <section className={styles.localProof}>
      <div><span>Serving</span><strong>Weeki Wachee & Hernando County</strong></div>
      <div><span>Established</span><strong>2003</strong></div>
      <div><span>Florida License</span><strong>CBC1260893</strong></div>
      <div><span>Estimates</span><strong>Free On-Site Walkthroughs</strong></div>
    </section>
    <section className={styles.intro}>
      <div><p className={styles.eyebrow}>LOCAL SERVICE AREA</p><h2>Construction and Home Improvement Close to Home.</h2></div>
      <div><p>Weeki Wachee sits inside Swift&apos;s core Hernando County service area. That makes it practical for the company to handle remodeling, painting, additions and other residential work without treating the area like a distant market.</p><p>For projects that involve multiple trades, Swift can coordinate the scope so homeowners are not trying to manage separate contractors for every phase.</p></div>
    </section>
    <section className={styles.servicesSection}>
      <div className={styles.sectionHeading}><p className={styles.eyebrow}>SERVICES IN WEEKI WACHEE</p><h2>Home Construction and Improvement Services.</h2></div>
      <div className={styles.serviceGrid}>{services.map(([title,href,copy],index)=><a href={href} key={title}><span>{String(index+1).padStart(2,"0")}</span><h3>{title}</h3><p>{copy}</p><b>Learn More →</b></a>)}</div>
    </section>
    <section className={styles.projectsSection}>
      <div className={styles.sectionHeading}><p className={styles.eyebrow}>REAL SWIFT PROJECTS</p><h2>Examples of Completed Work Nearby.</h2><p>These projects are verified Swift jobs in Hernando County. They are shown as examples of the company&apos;s work, not represented as Weeki Wachee projects.</p></div>
      <div className={styles.projectGrid}>
        <article><a className={styles.projectImage} href="/projects/whole-home-remodel-spring-hill-fl"><img src="/assets/projects/spring-hill-whole-home-remodel/primary-bath-after.jpg" alt="Completed Swift whole-home remodel in Spring Hill, Florida"/></a><div><p className={styles.eyebrow}>SPRING HILL • REMODELING</p><h3><a href="/projects/whole-home-remodel-spring-hill-fl">Whole-Home Remodel</a></h3><p>Four-month remodeling project spanning the kitchen, bathrooms, laundry, living spaces, bedrooms and patio.</p></div></article>
        <article><a className={styles.projectImage} href="/projects/custom-farmhouse-home-brooksville-fl"><img src="/assets/projects/brooksville-custom-farmhouse/exterior.jpg" alt="Completed Swift custom farmhouse in Brooksville, Florida"/></a><div><p className={styles.eyebrow}>BROOKSVILLE • NEW CONSTRUCTION</p><h3><a href="/projects/custom-farmhouse-home-brooksville-fl">Custom Farmhouse Home</a></h3><p>Eight-month custom home project completed in Brooksville in June 2025.</p></div></article>
      </div>
    </section>
    <section className={styles.processSection}><div><p className={styles.eyebrow}>HOW ESTIMATES WORK</p><h2>Start With an On-Site Walkthrough.</h2></div><div className={styles.steps}><p><strong>01</strong><span>Tell Swift what you are planning and where the property is located.</span></p><p><strong>02</strong><span>Meet on site so the project can be evaluated in person.</span></p><p><strong>03</strong><span>Review the written estimate and projected schedule before deciding how to proceed.</span></p></div></section>
    <section className={styles.cta}><div><p className={styles.eyebrow}>PLANNING WORK IN WEEKI WACHEE?</p><h2>Start With a Free Estimate.</h2><p>Talk through your project with Swift and schedule an in-person walkthrough.</p></div><a className={styles.primaryButton} href="/contact">Request a Free Estimate</a></section>
    <SiteFooter />
  </main>;
}