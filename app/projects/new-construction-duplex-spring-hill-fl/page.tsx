import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import styles from "./page.module.css";

const facts = [
  ["Location", "Spring Hill, FL"],
  ["Project Type", "New Construction Duplex"],
  ["Duration", "5 Months"],
  ["Completed", "May 2026"],
  ["Project Type", "Ground-Up Duplex"],
];

export default function SpringHillDuplexPage() {
  return (
    <main className={styles.page}>
      <SiteHeader />

      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span aria-hidden="true">/</span>
        <a href="/gallery">Projects</a>
        <span aria-hidden="true">/</span>
        <span>Spring Hill Duplex</span>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>SPRING HILL • NEW CONSTRUCTION</p>
          <h1>New Construction Duplex in Spring Hill, FL</h1>
          <p className={styles.deck}>
            A ground-up duplex project completed for a repeat Swift customer, with
            construction running from December 2025 through May 2026.
          </p>
          <div className={styles.heroActions}>
            <a className="button cta-primary" href="/contact">Request a free estimate</a>
            <a className="text-action" href="/custom-home-building"><span className="text-action-label">Explore New Home Construction</span><span className="text-action-arrow" aria-hidden="true">→</span></a>
          </div>
        </div>

        <aside className={styles.projectRecord}>
          <p className={styles.recordLabel}>SPRING HILL DUPLEX</p>
          <h2>Built From Beginning to End.</h2>
          <p>
            We managed this new-construction duplex from the start of the build
            through completion for a returning customer.
          </p>
          <dl>
            <div><dt>Client Relationship</dt><dd>Repeat Customer</dd></div>
            <div><dt>Start Date</dt><dd>December 29, 2025</dd></div>
            <div><dt>End Date</dt><dd>May 26, 2026</dd></div>
          </dl>
        </aside>
      </section>

      <section className={styles.facts} aria-label="Project facts">
        {facts.map(([label, value]) => (
          <div key={label}><span>{label}</span><strong>{value}</strong></div>
        ))}
      </section>

      <section className={styles.story}>
        <div>
          <p className={styles.eyebrow}>THE PROJECT</p>
          <h2>A Full New-Construction Duplex for a Repeat Customer.</h2>
        </div>
        <div className={styles.storyCopy}>
          <p>
            We built this ground-up duplex on Usher St in Spring Hill for a customer
            who had worked with us before. Our responsibility covered the project
            from the beginning of construction through completion.
          </p>
          <p>
            Construction began on December 29, 2025 and finished on May 26, 2026,
            a five-month schedule for the duplex build.
          </p>
          <p>
            Planning a similar project? Explore our <a href="/multi-family-construction">multi-family construction services</a> and discuss your property, intended unit count and building plans with us.
          </p>
        </div>
      </section>

      <section className={styles.scopeSection}>
        <div className={styles.scopeIntro}>
          <p className={styles.eyebrow}>PROJECT SCOPE</p>
          <h2>Ground-Up Duplex Construction.</h2>
          <p>
            Our scope was a complete new-construction duplex, with responsibility
            for the build from start to finish.
          </p>
        </div>
        <div className={styles.scopeCard}>
          <span>01</span>
          <div>
            <h3>New Construction Duplex Home</h3>
            <p>
              We managed the duplex build from the start of construction through
              completion.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.processHeading}>
          <p className={styles.eyebrow}>SWIFT&apos;S NEW-CONSTRUCTION PROCESS</p>
          <h2>What “Beginning to End” Means at Swift.</h2>
          <p>
            For a new construction project, we review the property and plans before
            defining the work. Our general building process covers planning, site
            preparation, construction and completion. The approved scope and site
            conditions determine the steps for each project.
          </p>
        </div>
        <div className={styles.processGrid}>
          <article>
            <span>01</span>
            <h3>Planning &amp; Design</h3>
            <p>
              We can begin with an existing home design or assist during the design
              phase before construction starts.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Site to Structure</h3>
            <p>
              We coordinate site clearing and the stages of ground-up construction
              around the approved project scope.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Through Completion</h3>
            <p>
              We coordinate the final stages of new construction through completion
              and certificate of occupancy.
            </p>
          </article>
        </div>

      </section>

      <section className={styles.cta}>
        <div>
          <p className={styles.eyebrow}>PLANNING NEW CONSTRUCTION IN SPRING HILL?</p>
          <h2>Talk With Swift About Your Building Plans.</h2>
          <p>
            Start with the property, intended use, and the type of new construction
            you are considering.
          </p>
        </div>
        <div className={styles.ctaActions}>
          <a className="button cta-primary" href="/contact">Request a free estimate</a>
          <a className="text-action" href="/custom-home-building"><span className="text-action-label">New Home Construction</span><span className="text-action-arrow" aria-hidden="true">→</span></a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
