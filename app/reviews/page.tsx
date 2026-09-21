import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import styles from "./page.module.css";

const reviewHighlights = [
  "That commitment to quality shows in the finished work.",
  "Excellent work and outstanding service.",
  "Communication was great, and they completed the work on time and within budget.",
];

const projectPhotos = [
  {src:"/assets/projects/spring-hill-whole-home-remodel/kitchen-after.jpg",alt:"Completed Spring Hill whole-home kitchen remodel by Swift Construction and Painting",label:"Spring Hill Whole-Home Remodel",href:"/projects/whole-home-remodel-spring-hill-fl"},
  {src:"/assets/projects/brooksville-custom-farmhouse/exterior.jpg",alt:"Completed Brooksville custom farmhouse by Swift Construction and Painting",label:"Brooksville Custom Farmhouse",href:"/projects/custom-farmhouse-home-brooksville-fl"},
  {src:"/assets/projects/brooksville-custom-farmhouse/primary-bath.jpg",alt:"Completed primary bathroom in a Swift custom home project",label:"Custom Home Interior",href:"/projects/custom-farmhouse-home-brooksville-fl"},
];

export default function ReviewsPage() {
  return <main className={styles.page}>
    <SiteHeader />
    <nav className={styles.breadcrumb} aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span>Reviews</span></nav>
    <section className={styles.hero}>
      <div>
        <p className={styles.eyebrow}>SWIFT CONSTRUCTION REVIEWS</p>
        <h1>What Customers Say About Working With Swift.</h1>
        <p className={styles.deck}>Reviews matter more when they line up with the finished work. Swift&apos;s Google profile currently shows a 5.0 rating from 5 reviews, and the themes customers mention most are quality, communication, service, timing, and budget.</p>
        <div className={styles.heroActions}><a className={styles.primaryButton} href="/contact">Request a Free Estimate</a><a className={styles.secondaryLink} href="/gallery">See Completed Work <span aria-hidden="true">→</span></a></div>
      </div>
      <aside className={styles.ratingCard}><p>GOOGLE REVIEW SNAPSHOT</p><strong>5.0</strong><div className={styles.stars} aria-label="5 out of 5 stars">★★★★★</div><span>5 Google reviews</span><small>Snapshot checked September 2026. Review counts can change over time.</small></aside>
    </section>
    <section className={styles.reviewSection}>
      <div className={styles.sectionHeading}><p className={styles.eyebrow}>CUSTOMER FEEDBACK</p><h2>What Shows Up Repeatedly in the Reviews.</h2></div>
      <div className={styles.reviewGrid}>{reviewHighlights.map((quote)=><blockquote key={quote}><div className={styles.stars} aria-hidden="true">★★★★★</div><p>“{quote}”</p><cite>Google Review</cite></blockquote>)}</div>
    </section>
    <section className={styles.proofSection}>
      <div className={styles.sectionHeading}><p className={styles.eyebrow}>THE WORK BEHIND THE REVIEWS</p><h2>Real Swift Projects, Not Stock Photography.</h2><p>These are client-submitted project photos from completed Swift jobs in Spring Hill and Brooksville.</p></div>
      <div className={styles.photoGrid}>{projectPhotos.map((photo)=><a href={photo.href} className={styles.photoCard} key={photo.src}><div><img src={photo.src} alt={photo.alt}/></div><span>{photo.label}</span></a>)}</div>
    </section>
    <section className={styles.expectSection}>
      <div><p className={styles.eyebrow}>WHAT SWIFT SAYS CUSTOMERS NOTICE</p><h2>Efficiency, Clean Work Areas, and Finished Selections That Come Together.</h2></div>
      <p>In Swift&apos;s client discovery material, the company identified efficiency, cleanliness, and how well selections come together as recurring customer compliments. Swift also says it tries to stay on one project through completion rather than constantly shifting crews between jobs.</p>
    </section>
    <section className={styles.cta}><div><p className={styles.eyebrow}>READY TO TALK ABOUT YOUR PROJECT?</p><h2>Start With a Free On-Site Estimate.</h2><p>Tell Swift what you are planning and schedule an in-person walkthrough.</p></div><a className={styles.primaryButton} href="/contact">Request a Free Estimate</a></section>
    <SiteFooter />
  </main>;
}
