import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import styles from "./page.module.css";

const scopeItems = [
  "Kitchen",
  "Primary bathroom",
  "Pool bathroom",
  "Hallway bathroom",
  "Laundry room",
  "Living room",
  "Dining room",
  "Primary bedroom",
  "Three additional bedrooms",
  "Patio",
];

export default function WholeHomeRemodelSpringHillPage() {
  return (
    <main className={styles.page}>
      <SiteHeader />

      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span aria-hidden="true">/</span>
        <a href="/gallery">Projects</a>
        <span aria-hidden="true">/</span>
        <span>Whole-Home Remodel</span>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>SPRING HILL • WHOLE-HOME REMODEL</p>
          <h1>Whole-Home Remodel in Spring Hill, FL</h1>
          <p className={styles.deck}>
            A four-month remodeling project spanning the kitchen, primary bathroom,
            additional bathrooms, laundry room, living and dining spaces, four
            bedrooms, and patio.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="/contact">Request a Free Estimate</a>
            <a className={styles.secondaryLink} href="/home-remodeling">Explore Remodeling Services <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img src="/assets/projects/spring-hill-whole-home-remodel/kitchen-after.jpg" alt="Completed Spring Hill kitchen remodel with white cabinetry, light counters, black hardware and updated lighting" />
        </div>
      </section>

      <section className={styles.facts} aria-label="Project facts">
        <div><span>Location</span><strong>Spring Hill, FL</strong></div>
        <div><span>Project Type</span><strong>Whole-Home Remodeling</strong></div>
        <div><span>Duration</span><strong>4 Months</strong></div>
        <div><span>Completed</span><strong>February 2026</strong></div>
        <div><span>Project Investment</span><strong>$104,760</strong></div>
      </section>

      <section className={styles.intro}>
        <div>
          <p className={styles.eyebrow}>THE PROJECT</p>
          <h2>One Remodel, Coordinated Across the Home.</h2>
        </div>
        <div className={styles.introCopy}>
          <p>
            This Spring Hill project covered far more than a single room. Swift&apos;s
            documented scope included the kitchen, primary bathroom, pool bathroom,
            hallway bathroom, laundry room, living room, dining room, primary bedroom,
            three additional bedrooms, and patio.
          </p>
          <p>
            The project ran from September 29, 2025 through February 1, 2026. The
            before-and-after photos below show two of the most visible transformations:
            the kitchen and primary bathroom.
          </p>
        </div>
      </section>

      <section className={styles.comparisonSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>KITCHEN REMODEL</p>
          <h2>A Brighter, More Cohesive Kitchen.</h2>
          <p>
            The finished kitchen replaces the darker wood look with white shaker-style
            cabinetry, light counters and backsplash, black hardware, updated lighting,
            and a continuous floor finish.
          </p>
        </div>
        <div className={styles.comparisonGrid}>
          <figure className={styles.imageCard}>
            <div className={styles.imageWrap}><img src="/assets/projects/spring-hill-whole-home-remodel/kitchen-before.jpg" alt="Kitchen before the Spring Hill remodel" /></div>
            <figcaption>Before</figcaption>
          </figure>
          <figure className={styles.imageCard}>
            <div className={styles.imageWrap}><img src="/assets/projects/spring-hill-whole-home-remodel/kitchen-after.jpg" alt="Kitchen after the Spring Hill remodel" /></div>
            <figcaption>After</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.comparisonSectionAlt}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>PRIMARY BATHROOM</p>
          <h2>A Complete Bathroom Finish Update.</h2>
          <p>
            The primary bathroom was updated with a tiled shower, glass enclosure,
            dark fixtures, and a refreshed vanity area, creating a cleaner and more
            contemporary finish.
          </p>
        </div>
        <div className={styles.comparisonGrid}>
          <figure className={styles.imageCard}>
            <div className={styles.imageWrap}><img src="/assets/projects/spring-hill-whole-home-remodel/primary-bath-before.jpg" alt="Primary bathroom before the Spring Hill remodel" /></div>
            <figcaption>Before</figcaption>
          </figure>
          <figure className={styles.imageCard}>
            <div className={styles.imageWrap}><img src="/assets/projects/spring-hill-whole-home-remodel/primary-bath-after.jpg" alt="Primary bathroom after the Spring Hill remodel with tiled shower and glass enclosure" /></div>
            <figcaption>After</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.scope}>
        <div className={styles.scopeHeading}>
          <p className={styles.eyebrow}>DOCUMENTED SCOPE</p>
          <h2>Rooms Included in the Project.</h2>
          <p>
            Swift&apos;s project record identifies the following areas as part of the
            remodeling scope.
          </p>
        </div>
        <div className={styles.scopeGrid}>
          {scopeItems.map((item, index) => (
            <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></div>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <div>
          <p className={styles.eyebrow}>PLANNING A REMODEL IN SPRING HILL?</p>
          <h2>Start With the Rooms You Want to Change.</h2>
          <p>
            Swift can walk the property with you, define the scope, and provide a
            written estimate for your remodeling project.
          </p>
        </div>
        <div className={styles.ctaActions}>
          <a className={styles.primaryButton} href="/contact">Request a Free Estimate</a>
          <a className={styles.secondaryLink} href="/home-remodeling">Residential Remodeling <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
