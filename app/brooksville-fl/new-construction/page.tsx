import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import styles from "../../locations/spring-hill-fl/page.module.css";

const services=[
  ["Custom Home Building","/custom-home-building","Ground-up custom homes managed from early planning through completion."],
  ["Property & Plan Review","/contact","Review of the property, goals, plans and practical requirements before construction begins."],
  ["Permits & Site Preparation","/custom-home-building","Coordination of the approved permit scope and early site work."],
  ["Trade Coordination","/custom-home-building","Licensed subcontractors coordinated for the trades required by the project."],
  ["Finish Selections","/custom-home-building","Interior and exterior finish decisions organized as the build progresses."],
  ["Final Walkthrough","/contact","Review of the completed scope before final project handoff."],
];

export default function BrooksvilleNewConstructionPage(){
  return <main className={styles.page}>
    <SiteHeader />
    <nav className={styles.breadcrumb} aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/locations/brooksville-fl">Brooksville</a><span>/</span><span>New Construction</span></nav>
    <section className={styles.hero}>
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>NEW CONSTRUCTION • BROOKSVILLE, FL</p>
        <h1>Custom Home Builders in Brooksville, FL</h1>
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
      <div><p className={styles.eyebrow}>CUSTOM HOMES IN BROOKSVILLE</p><h2>A Local Build to Review Before You Choose a Builder.</h2></div>
      <div><p>Choosing a custom home builder is easier when you can examine a completed local home. Swift built the Brooksville farmhouse shown here between October 23, 2024 and June 26, 2025. The project photos show the exterior, kitchen, living room, primary bathroom and covered porch.</p><p>Bring your lot address, available plans and the decisions you have already made to the first conversation. Swift can review the project from early planning through construction, with licensed trades coordinated for the work required by the agreed scope.</p></div>
    </section>
    <section className={styles.intro}>
      <div><p className={styles.eyebrow}>BEFORE PLANS AND PRICING</p><h2>What Does Your Brooksville Lot Need?</h2></div>
      <div>
        <p>A floor plan and the land need to work together. Start with the parcel location, survey if available, access, utilities and any recorded restrictions. Two lots with similar acreage can have different site-work requirements.</p>
        <p>If you are still choosing land, discuss buildability before treating a house-only price as a complete project budget. Utility connections, clearing, grading, drainage and foundation requirements need review for the actual property.</p>
        <p>Permits and approvals depend on the parcel and scope. A Brooksville mailing address alone does not establish which jurisdiction handles every approval; confirm that during project planning.</p>
      </div>
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
    <section className={styles.intro}>
      <div><p className={styles.eyebrow}>COMPARE BUILDER PROPOSALS</p><h2>Compare the Included Work, Not Just the Total.</h2></div>
      <div>
        <p>Ask each builder to identify site work, utility connections, permit coordination, construction scope and finish allowances. A proposal with fewer included items is not directly comparable to one that covers more of the project.</p>
        <p>Review how selections and scope changes are documented, who coordinates the trades, and how inspections affect the sequence. Ask when key decisions are needed so changes do not arrive after the relevant work is complete.</p>
        <p>The farmhouse shown on this page took eight months from its recorded start to completion. That is one completed project, not a promised timeline or cost for another home. Your lot, plans, approvals, materials and scope need their own review.</p>
        <p>For the broader service, see <a href="/custom-home-building">Swift&apos;s custom home building process in Hernando County</a>. For the finished local example, explore the <a href="/projects/custom-farmhouse-home-brooksville-fl">Brooksville farmhouse project</a>.</p>
        <p>Still researching the steps? Read our <a href="/blog/custom-home-building-brooksville-process">Brooksville custom home planning and construction guide</a> before arranging the first project conversation.</p>
      </div>
    </section>
    <section className={styles.processSection}><div><p className={styles.eyebrow}>CUSTOM HOME PROCESS</p><h2>Move From Property Questions to a Defined Build.</h2></div><div className={styles.steps}><p><strong>01</strong><span>Discuss the lot, plans, home goals and major priorities.</span></p><p><strong>02</strong><span>Define the construction scope, permits, trade work and finish selections.</span></p><p><strong>03</strong><span>Coordinate the build through inspections, finishing stages and final walkthrough.</span></p></div></section>
    <section className={styles.cta}><div><p className={styles.eyebrow}>PLANNING A HOME IN BROOKSVILLE?</p><h2>Start With the Property and the Home You Want.</h2><p>Talk with Swift about your lot, plans and the practical next step toward construction.</p></div><a className={styles.primaryButton} href="/contact">Request a Project Conversation</a></section>
    <SiteFooter />
  </main>;
}
