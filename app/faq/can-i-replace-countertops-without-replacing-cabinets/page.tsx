import type { Metadata } from "next";
import Image from "next/image";
import FaqSection from "@/components/FaqSection";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import styles from "./page.module.css";

const path = "/faq/can-i-replace-countertops-without-replacing-cabinets";
const title = "Replace Countertops Without Replacing Cabinets? | Swift";
const description = "Can you replace countertops and keep your cabinets? Learn what to check, what else may need work and when cabinet replacement makes more sense.";
const headline = "Can I Replace My Countertops Without Replacing My Cabinets?";
const hero = "/assets/faq/countertops-existing-oak-cabinets.webp";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    title,
    description,
    url: path,
    type: "article",
    publishedTime: "2026-10-17",
    images: [{ url: hero, width: 1672, height: 941, alt: "Illustration of light quartz countertops paired with existing oak kitchen cabinets" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [hero] },
};

const faqItems = [
  {
    question: "Can I keep my existing sink when replacing countertops?",
    answer: "Possibly. The sink must be compatible with the new countertop, cabinet opening and mounting method. Have the installer confirm its condition and dimensions before the countertop cutout is finalized.",
  },
  {
    question: "Will removing countertops damage my cabinets?",
    answer: "Removal can expose existing damage or affect cabinet surfaces and nearby finishes. Ask the contractor to evaluate how the old countertop is attached and explain the removal risks and any planned repairs before work begins.",
  },
  {
    question: "Can I replace the cabinets later and keep the new countertops?",
    answer: "Do not assume the countertops can be reused. They are made for a particular cabinet arrangement, and later cabinet replacement may require their removal. Discuss fit, support and removal risks with the contractor and fabricator before splitting the work into separate projects.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `https://swiftconstructionandpainting.com${path}#faq`,
    name: headline,
    url: `https://swiftconstructionandpainting.com${path}`,
    image: `https://swiftconstructionandpainting.com${hero}`,
    mainEntity: faqItems.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://swiftconstructionandpainting.com/" },
      { "@type": "ListItem", position: 2, name: "FAQs", item: "https://swiftconstructionandpainting.com/faq" },
      { "@type": "ListItem", position: 3, name: headline, item: `https://swiftconstructionandpainting.com${path}` },
    ],
  },
];

export default function CountertopFaqPage() {
  return (
    <main className="blog-page article-page">
      <SiteHeader active="faq" />
      <nav className="article-breadcrumb" aria-label="Breadcrumb">
        <a href="/">Home</a><span>/</span><a href="/faq">FAQs</a><span>/</span><span>Countertops &amp; Existing Cabinets</span>
      </nav>

      <header className="article-header">
        <p className="eyebrow">KITCHEN REMODELING • COUNTERTOP FAQ</p>
        <h1>{headline}</h1>
        <p className="article-deck">A new countertop can update a kitchen without replacing every cabinet. Start with the condition of the cabinets and how well the layout works for you.</p>
        <div className="article-meta"><span>KITCHEN REMODELING FAQ</span><span>PUBLISHED OCTOBER 17, 2026</span></div>
        <div className="article-byline">
          <Image className="article-author-avatar" src="/assets/william-swift.jpg" width={42} height={42} alt="William Swift" />
          <div className="article-author-copy"><span>Author</span><strong>William Swift</strong></div>
          <div className="article-read-time"><span>Read Time</span><strong>4 min read</strong></div>
        </div>
      </header>

      <figure className={`article-hero-image ${styles.featuredImage}`}>
        <Image src={hero} width={1672} height={941} sizes="(max-width: 600px) 100vw, (max-width: 1520px) calc(100vw - 80px), 1440px" preload alt="Illustrative Florida kitchen with light quartz countertops and retained oak cabinets" />
        <figcaption>New surfaces can complement serviceable existing cabinets. AI-generated illustration, not a documented Swift project.</figcaption>
      </figure>

      <div className="article-shell">
        <aside className="article-sidebar">
          <div className="article-contents">
            <p>On This Page</p>
            <a href="#quick">Quick Answer</a><a href="#keep-cabinets">When to Keep the Cabinets</a><a href="#connected-work">What Else Is Affected</a><a href="#replace-first">When to Replace Cabinets First</a><a href="#written-quote">What the Quote Should Include</a><a href="#faqs">Related Questions</a>
          </div>
          <div className="article-sidebar-cta">
            <p>PLANNING A KITCHEN UPDATE?</p><h2>Start With the Cabinets You Have.</h2>
            <a className="text-action" href="/contact#contact-form"><span className="text-action-label">Discuss your kitchen</span><span className="text-action-arrow" aria-hidden="true">→</span></a>
          </div>
        </aside>

        <article className="article-body">
          <section className="article-answer" id="quick">
            <p className="eyebrow">QUICK ANSWER</p>
            <h2>Yes, If the Cabinets Are Suitable for the New Surface.</h2>
            <p>You can often replace kitchen countertops while keeping the existing cabinets if the cabinet boxes are sound, properly secured and suitable for the new surface. The layout should also work for you long term. Have the cabinets, sink opening and countertop support requirements evaluated before ordering materials.</p>
          </section>

          <section id="keep-cabinets">
            <h2>When Keeping Your Cabinets Makes Sense.</h2>
            <p>A countertop replacement can be a practical update when you like the kitchen layout and the cabinets still provide useful storage. Faded doors or an outdated finish do not automatically mean the cabinet boxes need replacement.</p>
            <p>Before moving forward, have the following checked:</p>
            <ul>
              <li>Water damage, swelling or deterioration, especially beneath the sink.</li>
              <li>Loose cabinet boxes, failing joints or attachment problems.</li>
              <li>Whether the cabinets are level and can support the selected countertop.</li>
              <li>Compatibility with the planned sink, appliances and any countertop overhang.</li>
            </ul>
            <p>For example, <a href="https://www.cambriausa.com/quartz-countertops/faq/installation" target="_blank" rel="noreferrer">Cambria&apos;s installation guidance</a> calls for sound, level cabinets and coordinated fixture dimensions before installation. Requirements should be confirmed for the specific surface you select.</p>
            <p>If the cabinets are structurally sound but you dislike their appearance, read our <a href="/blog/cabinet-refacing-vs-replacement">cabinet refacing versus replacement comparison</a> before deciding how much to change.</p>
            <figure className={styles.supportingImage}>
              <Image src="/assets/faq/countertop-cabinet-condition-detail.webp" width={1672} height={941} sizes="(max-width: 900px) calc(100vw - 40px), 820px" alt="Illustration of an open oak base cabinet showing its interior and frame beneath a quartz countertop" />
              <figcaption>Cabinet condition and support matter more than an updated door finish. AI-generated illustration; an on-site evaluation is needed to assess actual cabinets.</figcaption>
            </figure>
          </section>

          <section id="connected-work">
            <h2>What Else Can Be Affected?</h2>
            <p>Replacing the surface can involve more than removing one countertop and installing another. Discuss these connected details before accepting a quote:</p>
            <ul>
              <li><strong>Sink and faucet:</strong> Confirm the sink dimensions, mounting style, faucet holes and plumbing reconnection.</li>
              <li><strong>Backsplash:</strong> Ask whether removal could damage the existing backsplash or leave a gap that needs finishing.</li>
              <li><strong>Cabinet repairs and support:</strong> Identify adjustments needed before the countertop is measured and installed.</li>
              <li><strong>Kitchen access:</strong> Confirm how long the sink will be unavailable and who coordinates each stage.</li>
            </ul>
            <p>Cambria&apos;s <a href="https://www.cambriausa.com/cambria-style/blog/cambria-quartz-countertop-installation" target="_blank" rel="noreferrer">installation checklist</a> illustrates why measurements, fixtures, removal and plumbing coordination need to be planned together.</p>
          </section>

          <section id="replace-first">
            <h2>Should You Replace the Cabinets First?</h2>
            <p>Consider cabinet replacement before buying countertops if the boxes are deteriorating, the storage does not meet your needs or you expect to change the kitchen layout soon.</p>
            <p>New countertops are made to fit a particular arrangement of cabinets, walls and openings. Replacing cabinets later may require removing those countertops, and reuse should not be assumed. Ask the contractor and fabricator about that risk before committing to a staged remodel.</p>
            <p>If the existing layout works, keeping serviceable cabinets may help control the scope. If the kitchen needs a different layout, plan the cabinet and countertop work together.</p>
          </section>

          <section id="written-quote">
            <h2>What Should the Written Quote Include?</h2>
            <p>Ask for a scope that identifies countertop removal and disposal, cabinet preparation, the new surface and installation, sink-related work, plumbing reconnection and any backsplash or wall repairs. Confirm what is excluded and how additional repairs would be approved.</p>
            <p>That makes it easier to compare a countertop update with a larger <a href="/kitchen-remodeling">kitchen remodeling project</a>.</p>
          </section>
        </article>
      </div>

      <FaqSection id="faqs" eyebrow="RELATED QUESTIONS" title="Countertop Replacement Questions" items={faqItems} estimateHref="/contact#contact-form" />

      <section className="blog-cta">
        <div><p className="eyebrow">PLANNING A KITCHEN UPDATE?</p><h2>Start With the Cabinets You Have.</h2><p>Planning a kitchen update in Hernando, Citrus or Pasco County? Swift can review the existing kitchen and discuss the changes you are considering.</p></div>
        <div><a className="button cta-primary" href="/contact#contact-form">Discuss your kitchen</a><a href="/faq">More FAQs</a></div>
      </section>

      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas).replace(/</g, "\\u003c") }} />
    </main>
  );
}
