import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import styles from "../whole-home-remodel-spring-hill-fl/page.module.css";

const photos = [
  {
    src: "/assets/projects/brooksville-custom-farmhouse/kitchen.jpg",
    alt: "Completed kitchen inside the Brooksville custom farmhouse",
    label: "Kitchen",
  },
  {
    src: "/assets/projects/brooksville-custom-farmhouse/living-room.jpg",
    alt: "Completed living room inside the Brooksville custom farmhouse",
    label: "Living Room",
  },
  {
    src: "/assets/projects/brooksville-custom-farmhouse/primary-bath.jpg",
    alt: "Completed primary bathroom inside the Brooksville custom farmhouse",
    label: "Primary Bathroom",
  },
  {
    src: "/assets/projects/brooksville-custom-farmhouse/back-porch.jpg",
    alt: "Covered back porch of the Brooksville custom farmhouse",
    label: "Covered Back Porch",
  },
];

export default function BrooksvilleCustomFarmhousePage() {
  return (
    <main className={styles.page}>
      <SiteHeader />

      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <a href="/">Home</a>
        <span aria-hidden="true">/</span>
        <a href="/gallery">Projects</a>
        <span aria-hidden="true">/</span>
        <span>Brooksville Custom Farmhouse</span>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>BROOKSVILLE • NEW CONSTRUCTION</p>
          <h1>Custom Farmhouse Home in Brooksville, FL</h1>
          <p className={styles.deck}>
            A custom new-construction home completed for a Brooksville client, with
            the project running from October 2024 through June 2025.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="/contact">Request a Free Estimate</a>
            <a className={styles.secondaryLink} href="/custom-home-building">Explore New Home Construction <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <div className={styles.heroImage}>
          <img
            src="/assets/projects/brooksville-custom-farmhouse/exterior.jpg"
            alt="Completed custom farmhouse home in Brooksville, Florida"
          />
        </div>
      </section>

      <section className={styles.facts} aria-label="Project facts">
        <div><span>Location</span><strong>Brooksville, FL</strong></div>
        <div><span>Project Type</span><strong>New Construction Home</strong></div>
        <div><span>Duration</span><strong>8 Months</strong></div>
        <div><span>Completed</span><strong>June 2025</strong></div>
        <div><span>Project Investment</span><strong>$421,920</strong></div>
      </section>

      <section className={styles.intro}>
        <div>
          <p className={styles.eyebrow}>THE PROJECT</p>
          <h2>A Custom Farmhouse Built in Brooksville.</h2>
        </div>
        <div className={styles.introCopy}>
          <p>
            Swift&apos;s completed-project record identifies this job as a custom
            farmhouse home in Brooksville. The documented construction period ran
            from October 23, 2024 through June 26, 2025.
          </p>
          <p>
            The project came to Swift through a referral. The submitted photo set
            documents the completed exterior along with finished interior spaces
            including the kitchen, living room, primary bathroom, bedrooms, laundry
            area, pantry, office, and covered outdoor areas.
          </p>
        </div>
      </section>

      <section className={styles.comparisonSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>COMPLETED HOME</p>
          <h2>Inside the Finished Farmhouse.</h2>
          <p>
            These photos were submitted by the client as part of the completed
            New Construction Home project set.
          </p>
        </div>
        <div className={styles.comparisonGrid}>
          {photos.slice(0, 2).map((photo) => (
            <figure className={styles.imageCard} key={photo.label}>
              <div className={styles.imageWrap}><img src={photo.src} alt={photo.alt} /></div>
              <figcaption>{photo.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className={styles.comparisonSectionAlt}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>FINISH DETAILS</p>
          <h2>More of the Completed Project.</h2>
        </div>
        <div className={styles.comparisonGrid}>
          {photos.slice(2).map((photo) => (
            <figure className={styles.imageCard} key={photo.label}>
              <div className={styles.imageWrap}><img src={photo.src} alt={photo.alt} /></div>
              <figcaption>{photo.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <div>
          <p className={styles.eyebrow}>PLANNING A NEW HOME IN BROOKSVILLE?</p>
          <h2>Start With the Home You Want to Build.</h2>
          <p>
            Talk with Swift about your new-construction plans and the scope of work
            required for your property.
          </p>
        </div>
        <div className={styles.ctaActions}>
          <a className={styles.primaryButton} href="/contact">Request a Free Estimate</a>
          <a className={styles.secondaryLink} href="/custom-home-building">New Home Construction <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
