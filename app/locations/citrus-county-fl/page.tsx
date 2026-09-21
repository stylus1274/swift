import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import styles from "../spring-hill-fl/page.module.css";

const services=[
  ["Custom Home Building","/new-home-construction","Ground-up homes and design-assisted construction for homeowners planning to build in Citrus County."],
  ["Residential Remodeling","/residential-remodeling","Whole-home renovations, kitchens, bathrooms and coordinated interior upgrades."],
  ["Home Additions","/home-additions","Expanded living space and additions designed to work with the existing home."],
  ["Interior & Exterior Painting","/residential-painting","Residential painting for interiors, exteriors and renovation projects."],
  ["Windows & Doors","/windows-doors","Replacement and installation for windows, doors and impact-rated openings."],
  ["Commercial Services","/commercial-services","Commercial improvements, buildouts, painting and facility work."],
];

export default function CitrusCountyLocationPage(){
  return <main className={styles.page}>
    <SiteHeader />
    <nav className={styles.breadcrumb} aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span>Citrus County, FL</span></nav>
    <section className={styles.hero}>
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>CITRUS COUNTY, FLORIDA</p>
        <h1>Custom Home Builder & Contractor in Citrus County, FL</h1>
        <p className={styles.deck}>Swift Construction & Painting serves Citrus County with custom home construction, remodeling, additions, painting, windows and doors, and related residential and commercial building services.</p>
        <div className={styles.heroActions}><a className={styles.primaryButton} href="/contact">Request a Free Estimate</a><a className={styles.secondaryLink} href="/new-home-construction">Explore New Home Construction <span aria-hidden="true">→</span></a></div>
      </div>
      <div className={styles.heroImage}><img src="/assets/projects/brooksville-custom-farmhouse/exterior.jpg" alt="Example of a completed Swift custom home project"/></div>
    </section>
    <section className={styles.localProof}>
      <div><span>Serving</span><strong>Citrus County</strong></div>
      <div><span>Priority Service</span><strong>Custom Home Construction</strong></div>
      <div><span>Established</span><strong>2003</strong></div>
      <div><span>Florida License</span><strong>CBC1260893</strong></div>
    </section>
    <section className={styles.intro}>
      <div><p className={styles.eyebrow}>CUSTOM HOME FOCUS</p><h2>A Service Area Built Around Larger Residential Projects.</h2></div>
      <div><p>Swift identifies Citrus County as one of its target areas for custom home construction. The company typically works within about an hour of Brooksville for new-construction and custom-home projects.</p><p>For a new build, Swift&apos;s process can cover the project from site clearing through completion, with licensed subcontractors coordinated for trades such as plumbing, electrical, roofing, concrete, framing, drywall, block and stucco.</p></div>
    </section>
    <section className={styles.servicesSection}>
      <div className={styles.sectionHeading}><p className={styles.eyebrow}>SERVICES IN CITRUS COUNTY</p><h2>Construction and Home Improvement Services.</h2></div>
      <div className={styles.serviceGrid}>{services.map(([title,href,copy],index)=><a href={href} key={title}><span>{String(index+1).padStart(2,"0")}</span><h3>{title}</h3><p>{copy}</p><b>Learn More →</b></a>)}</div>
    </section>
    <section className={styles.projectsSection}>
      <div className={styles.sectionHeading}><p className={styles.eyebrow}>REAL SWIFT PROJECT EXAMPLES</p><h2>See the Type of Work Swift Has Completed.</h2><p>These are verified Swift projects from nearby markets. They are shown as examples of capability, not represented as Citrus County projects.</p></div>
      <div className={styles.projectGrid}>
        <article><a className={styles.projectImage} href="/projects/custom-farmhouse-home-brooksville-fl"><img src="/assets/projects/brooksville-custom-farmhouse/exterior.jpg" alt="Completed Swift custom farmhouse in Brooksville, Florida"/></a><div><p className={styles.eyebrow}>CUSTOM HOME • BROOKSVILLE</p><h3><a href="/projects/custom-farmhouse-home-brooksville-fl">Custom Farmhouse Home</a></h3><p>Eight-month custom new-construction project completed in June 2025 with a documented investment of $421,920.</p></div></article>
        <article><a className={styles.projectImage} href="/projects/whole-home-remodel-spring-hill-fl"><img src="/assets/projects/spring-hill-whole-home-remodel/kitchen-after.jpg" alt="Completed Swift whole-home remodel in Spring Hill, Florida"/></a><div><p className={styles.eyebrow}>REMODELING • SPRING HILL</p><h3><a href="/projects/whole-home-remodel-spring-hill-fl">Whole-Home Remodel</a></h3><p>Four-month project covering the kitchen, multiple bathrooms, laundry, living spaces, bedrooms and patio.</p></div></article>
      </div>
    </section>
    <section className={styles.processSection}><div><p className={styles.eyebrow}>CUSTOM HOME PROCESS</p><h2>From Site Planning Through Completion.</h2></div><div className={styles.steps}><p><strong>01</strong><span>Discuss the property, home concept, budget and design direction.</span></p><p><strong>02</strong><span>Plan the build, coordinate site work and line up the licensed trades required for construction.</span></p><p><strong>03</strong><span>Manage construction through the finishing stages and final walkthrough.</span></p></div></section>
    <section className={styles.cta}><div><p className={styles.eyebrow}>BUILDING IN CITRUS COUNTY?</p><h2>Start With the Property and the Home You Want to Build.</h2><p>Talk with Swift about your custom-home or construction plans and schedule an initial consultation.</p></div><a className={styles.primaryButton} href="/contact">Request a Free Estimate</a></section>
    <SiteFooter />
  </main>;
}