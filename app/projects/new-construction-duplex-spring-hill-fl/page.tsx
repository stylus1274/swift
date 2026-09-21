import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import styles from "./page.module.css";

const facts = [
  ["Location", "Spring Hill, FL"],
  ["Project Type", "New Construction Duplex"],
  ["Duration", "5 Months"],
  ["Completed", "May 2026"],
  ["Project Investment", "$314,490"],
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
            <a className={styles.primaryButton} href="/contact">Request a Free Estimate</a>
            <a className={styles.secondaryLink} href="/custom-home-building">
              Explore New Home Construction <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <aside className={styles.projectRecord}>
          <p className={styles.recordLabel}>DOCUMENTED PROJECT RECORD</p>
          <h2>Built From Beginning to End.</h2>
          <p>
            Swift&apos;s completed-project profile describes the scope as building a
            new-construction duplex home from beginning to end.
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
            The Usher St project was a five-month new-construction duplex build in
            Spring Hill. According to the project profile supplied by Swift, the
            company was responsible for the duplex from the beginning of construction
            through completion.
          </p>
          <p>
            The project began on December 29, 2025 and was completed on May 26, 2026,
            with a documented project investment of $314,490.
          </p>
          <p>
            The customer had worked with Swift before. That repeat relationship is
            part of the project record and is one of the clearest pieces of context
            available for this job.
          </p>
        </div>
      </section>

      <section className={styles.scopeSection}>
        <div className={styles.scopeIntro}>
          <p className={styles.eyebrow}>DOCUMENTED SCOPE</p>
          <h2>Ground-Up Duplex Construction.</h2>
          <p>
            The client-provided project profile gives one concise scope statement:
            build a new-construction duplex home from beginning to end.
          </p>
        </div>
        <div className={styles.scopeCard}>
          <span>01</span>
          <div>
            <h3>New Construction Duplex Home</h3>
            <p>
              Full project responsibility from the start of construction through
              completion, as documented by Swift.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.processHeading}>
          <p className={styles.eyebrow}>SWIFT&apos;S NEW-CONSTRUCTION PROCESS</p>
          <h2>What “Beginning to End” Means at Swift.</h2>
          <p>
            Swift&apos;s discovery questionnaire describes its general new-construction
            work as ground-up building from site clearing through certificate of
            occupancy. These steps describe Swift&apos;s broader process, not additional
            project-specific details for the Usher St duplex.
          </p>
        </div>
        <div className={styles.processGrid}>
          <article>
            <span>01</span>
            <h3>Planning &amp; Design</h3>
            <p>
              Swift can begin with one of its existing home designs or assist the
              customer during the design phase before construction starts.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Site to Structure</h3>
            <p>
              The company describes its new-home scope as starting with site clearing
              and continuing through the ground-up construction process.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Through Completion</h3>
            <p>
              Swift&apos;s stated new-construction process continues through completion
              and certificate of occupancy.
            </p>
          </article>
        </div>
        <p className={styles.photoDisclosure}>
          Swift has not submitted a photo set that can be confidently matched to the
          Usher St duplex, so no unrelated project photography is shown on this page.
        </p>
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
          <a className={styles.primaryButton} href="/contact">Request a Free Estimate</a>
          <a className={styles.secondaryLink} href="/custom-home-building">
            New Home Construction <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
