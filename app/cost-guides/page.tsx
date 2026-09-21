import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import styles from "../locations/spring-hill-fl/page.module.css";

const guides=[
  {title:"Kitchen Remodeling Budget",copy:"See the major variables that change kitchen remodeling costs and how to think about a realistic project budget.",href:"/blog/realistic-kitchen-remodel-budget",image:"/assets/projects/spring-hill-whole-home-remodel/kitchen-after.jpg"},
  {title:"Bathroom Remodeling Budget",copy:"Understand the scope decisions that affect bathroom remodeling costs before you compare estimates.",href:"/blog/realistic-bathroom-remodel-budget",image:"/assets/projects/spring-hill-whole-home-remodel/primary-bath-after.jpg"},
  {title:"Home Addition Planning",copy:"Learn what affects the timing and scope of a Florida home addition before construction begins.",href:"/blog/how-long-home-addition-florida",image:"/assets/projects/brooksville-custom-farmhouse/exterior.jpg"},
  {title:"Custom Home Construction",copy:"Start with the property, plans, home size and finish level before trying to estimate a new-build budget.",href:"/new-home-construction",image:"/assets/projects/brooksville-custom-farmhouse/kitchen.jpg"},
];

export default function CostGuidesPage(){
  return <main className={styles.page}>
    <SiteHeader />
    <nav className={styles.breadcrumb} aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span>Cost Guides</span></nav>
    <section className={styles.hero}>
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>PROJECT COST GUIDES</p>
        <h1>Construction & Remodeling Cost Guides for Florida Homeowners</h1>
        <p className={styles.deck}>Use these guides to understand what drives project cost before you request estimates. They are planning resources, not one-size-fits-all price sheets.</p>
        <div className={styles.heroActions}><a className={styles.primaryButton} href="/contact">Request a Project Estimate</a><a className={styles.secondaryLink} href="/services">Explore Services <span>→</span></a></div>
      </div>
      <div className={styles.heroImage}><img src="/assets/projects/spring-hill-whole-home-remodel/kitchen-after.jpg" alt="Completed Swift remodeling project used to illustrate project cost planning"/></div>
    </section>
    <section className={styles.localProof}>
      <div><span>Remodeling Range</span><strong>Often $8K–$80K</strong></div>
      <div><span>New Builds</span><strong>Often $300K–$550K</strong></div>
      <div><span>Estimate Method</span><strong>On-Site Walkthrough</strong></div>
      <div><span>Pricing</span><strong>Scope Specific</strong></div>
    </section>
    <section className={styles.intro}>
      <div><p className={styles.eyebrow}>HOW TO USE THESE GUIDES</p><h2>Start With Scope, Not a Single Number.</h2></div>
      <div><p>Swift&apos;s client discovery material gives broad typical ranges of about $8,000 to $80,000 for remodeling and about $300,000 to $550,000 for new builds. Those figures are not quotes and should not be treated as fixed pricing.</p><p>Actual cost depends on the property, project size, structural work, materials, selections, permitting, trade requirements and the final written scope. Swift says the most accurate way to estimate a project is an on-site walkthrough.</p></div>
    </section>
    <section className={styles.projectsSection}>
      <div className={styles.sectionHeading}><p className={styles.eyebrow}>START WITH THE RIGHT GUIDE</p><h2>Project Planning by Type.</h2><p>Each guide focuses on the decisions that have the biggest effect on cost and scope.</p></div>
      <div className={styles.projectGrid}>{guides.map((guide)=><article key={guide.title}><a className={styles.projectImage} href={guide.href}><img src={guide.image} alt={guide.title}/></a><div><p className={styles.eyebrow}>COST & PLANNING</p><h3><a href={guide.href}>{guide.title}</a></h3><p>{guide.copy}</p></div></article>)}</div>
    </section>
    <section className={styles.servicesSection}>
      <div className={styles.sectionHeading}><p className={styles.eyebrow}>WHAT CHANGES PROJECT COST?</p><h2>The Scope Behind the Number.</h2></div>
      <div className={styles.serviceGrid}>
        <article><span>01</span><h3>Project Size</h3><p>More rooms, square footage and structural work generally increase labor, material and coordination requirements.</p></article>
        <article><span>02</span><h3>Material Selections</h3><p>Cabinetry, tile, fixtures, flooring, windows, doors and finish levels can materially change the final scope.</p></article>
        <article><span>03</span><h3>Existing Conditions</h3><p>What is discovered during an on-site review can affect demolition, repair, framing and other required work.</p></article>
        <article><span>04</span><h3>Permits & Trades</h3><p>Projects requiring permits or licensed subcontractors need additional planning and coordination.</p></article>
        <article><span>05</span><h3>Design Complexity</h3><p>Custom layouts, structural changes and detailed finish work can add both time and cost.</p></article>
        <article><span>06</span><h3>Schedule & Availability</h3><p>Material lead times and project sequencing can influence when a job can begin and how long it takes.</p></article>
      </div>
    </section>
    <section className={styles.processSection}><div><p className={styles.eyebrow}>FROM GUIDE TO ESTIMATE</p><h2>Use Online Numbers for Planning, Then Price the Real Scope.</h2></div><div className={styles.steps}><p><strong>01</strong><span>Use the guides to identify the likely scope and major cost drivers.</span></p><p><strong>02</strong><span>Walk the property with Swift so existing conditions can be evaluated.</span></p><p><strong>03</strong><span>Review a written estimate based on the actual project rather than a generic average.</span></p></div></section>
    <section className={styles.cta}><div><p className={styles.eyebrow}>READY FOR A REAL NUMBER?</p><h2>Request an On-Site Project Estimate.</h2><p>Once the scope is clear, Swift can prepare a written estimate based on your property and project.</p></div><a className={styles.primaryButton} href="/contact">Request a Free Estimate</a></section>
    <SiteFooter />
  </main>;
}