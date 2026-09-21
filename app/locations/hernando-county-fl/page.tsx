import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import styles from "../spring-hill-fl/page.module.css";

const services=[
  ["Custom & New Home Construction","/custom-home-building","Ground-up residential construction and custom home building across Hernando County."],
  ["Multi-Family Construction","/multi-family-construction","Duplex and multi-unit construction for residential investment projects."],
  ["Residential Remodeling","/home-remodeling","Whole-home remodeling, kitchens, bathrooms and coordinated interior upgrades."],
  ["Painting","/residential-painting","Interior and exterior painting for homes and other properties."],
  ["Home Additions","/home-additions","Additions and expanded living space integrated with the existing structure."],
  ["Commercial Services","/commercial-services","Commercial renovations, buildouts, painting and facility improvements."],
];

export default function HernandoCountyLocationPage(){
  return <main className={styles.page}>
    <SiteHeader />
    <nav className={styles.breadcrumb} aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span>Hernando County, FL</span></nav>
    <section className={styles.hero}>
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>HERNANDO COUNTY, FLORIDA</p>
        <h1>Construction & Remodeling Contractor in Hernando County, FL</h1>
        <p className={styles.deck}>Swift Construction & Painting provides new construction, multi-family building, remodeling, painting, additions and commercial services throughout Hernando County.</p>
        <div className={styles.heroActions}><a className={styles.primaryButton} href="/contact">Request a Free Estimate</a><a className={styles.secondaryLink} href="/hernando-county-fl/new-construction">Explore New Construction <span aria-hidden="true">→</span></a></div>
      </div>
      <div className={styles.heroImage}><img src="/assets/projects/spring-hill-whole-home-remodel/kitchen-after.jpg" alt="Completed Swift remodeling project in Hernando County, Florida"/></div>
    </section>
    <section className={styles.localProof}>
      <div><span>Primary Area</span><strong>Hernando County</strong></div>
      <div><span>Communities</span><strong>Spring Hill, Brooksville & More</strong></div>
      <div><span>Established</span><strong>2003</strong></div>
      <div><span>Florida License</span><strong>CBC1260893</strong></div>
    </section>
    <section className={styles.intro}>
      <div><p className={styles.eyebrow}>BUILT AROUND HERNANDO COUNTY</p><h2>Local Work Across Multiple Project Types.</h2></div>
      <div><p>Swift&apos;s documented work in Hernando County spans remodeling, custom homes, new-construction duplexes, garages and outdoor structures. The company identifies custom homes, multi-family duplex builds and kitchen/home remodels among its strongest revenue-producing services.</p><p>Swift also says its growth priority is new construction and additions, while maintaining its existing remodeling, painting and property-improvement work.</p></div>
    </section>
    <section className={styles.servicesSection}>
      <div className={styles.sectionHeading}><p className={styles.eyebrow}>SERVICES ACROSS HERNANDO COUNTY</p><h2>One Contractor Across Residential and Commercial Work.</h2></div>
      <div className={styles.serviceGrid}>{services.map(([title,href,copy],index)=><a href={href} key={title}><span>{String(index+1).padStart(2,"0")}</span><h3>{title}</h3><p>{copy}</p><b>Learn More →</b></a>)}</div>
    </section>
    <section className={styles.projectsSection}>
      <div className={styles.sectionHeading}><p className={styles.eyebrow}>HERNANDO COUNTY PROJECT PROOF</p><h2>Documented Work in Spring Hill and Brooksville.</h2><p>These two completed projects show the range between major remodeling and ground-up custom construction.</p></div>
      <div className={styles.projectGrid}>
        <article><a className={styles.projectImage} href="/projects/whole-home-remodel-spring-hill-fl"><img src="/assets/projects/spring-hill-whole-home-remodel/primary-bath-after.jpg" alt="Completed whole-home remodel in Spring Hill, Hernando County"/></a><div><p className={styles.eyebrow}>SPRING HILL • REMODELING</p><h3><a href="/projects/whole-home-remodel-spring-hill-fl">Whole-Home Remodel</a></h3><p>Four-month remodeling project covering multiple bathrooms, the kitchen, laundry, bedrooms, living spaces and patio.</p></div></article>
        <article><a className={styles.projectImage} href="/projects/custom-farmhouse-home-brooksville-fl"><img src="/assets/projects/brooksville-custom-farmhouse/exterior.jpg" alt="Completed custom farmhouse in Brooksville, Hernando County"/></a><div><p className={styles.eyebrow}>BROOKSVILLE • NEW CONSTRUCTION</p><h3><a href="/projects/custom-farmhouse-home-brooksville-fl">Custom Farmhouse Home</a></h3><p>Eight-month custom home project completed in June 2025 with a documented investment of $421,920.</p></div></article>
      </div>
    </section>
    <section className={styles.processSection}><div><p className={styles.eyebrow}>LOCAL ESTIMATE PROCESS</p><h2>Scope the Project Before You Price It.</h2></div><div className={styles.steps}><p><strong>01</strong><span>Tell Swift what type of work you are planning and where the property is located.</span></p><p><strong>02</strong><span>Meet on site for a walkthrough so the scope can be evaluated in person.</span></p><p><strong>03</strong><span>Review the written estimate, selections and projected schedule before construction begins.</span></p></div></section>
    <section className={styles.cta}><div><p className={styles.eyebrow}>PLANNING WORK IN HERNANDO COUNTY?</p><h2>Start With a Free On-Site Estimate.</h2><p>Talk through the scope with Swift and get a written estimate for your project.</p></div><a className={styles.primaryButton} href="/contact">Request a Free Estimate</a></section>
    <SiteFooter />
  </main>;
}