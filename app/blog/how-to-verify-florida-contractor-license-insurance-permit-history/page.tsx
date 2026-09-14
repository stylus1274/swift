import SiteHeader from "../../../components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const faqItems = [
  {
    question: "How do I verify a contractor license in Florida?",
    answer: "Use the Florida Department of Business and Professional Regulation license lookup. Search by the contractor's name or license number, then confirm the license status, license type and name shown in the official record.",
  },
  {
    question: "Can I verify a contractor's insurance online in Florida?",
    answer: "Florida's Division of Workers' Compensation provides a Proof of Coverage search for workers' compensation. General liability coverage is typically verified by requesting a current certificate of insurance and confirming it with the issuing agent or carrier when needed.",
  },
  {
    question: "Can I look up a contractor's permit history in Hernando County?",
    answer: "Hernando County's Building Department provides an online permit and property search that can show current permit status, property history and contractor information. Older records may be available through the County's legacy permit tools.",
  },
  {
    question: "Does an active Florida license mean every type of construction work is allowed?",
    answer: "No. Contractor license types authorize different scopes of work. Homeowners should confirm that the license classification is appropriate for the project being proposed.",
  },
  {
    question: "What should match between the license, insurance and contract?",
    answer: "The business or qualifying contractor information should be consistent enough to identify who is actually responsible for the work. If names differ between the proposal, license record or insurance certificate, ask for clarification before signing.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function VerifyFloridaContractorArticlePage() {
  return (
    <main className="blog-page article-page">
      <SiteHeader active="blog" />

      <nav className="article-breadcrumb" aria-label="Breadcrumb">
        <a href="/">Home</a><span aria-hidden="true">/</span><a href="/blog">Blog</a><span aria-hidden="true">/</span><span>Verify a Florida Contractor</span>
      </nav>

      <header className="article-header">
        <p className="eyebrow">CONTRACTOR CHECKLIST • FLORIDA</p>
        <h1>How to Verify a Florida Contractor License, Insurance, and Permit History Before Hiring</h1>
        <p className="article-deck">Before comparing prices, verify who you are hiring. A few official searches can help confirm a Florida contractor's license status, workers' compensation coverage and local permit record.</p>
        <div className="article-meta"><span>HOMEOWNER CHECKLIST</span><span>8 MIN READ</span><span>UPDATED SEPTEMBER 14, 2026</span></div>
      </header>

      <figure className="article-hero-image">
        <img src="/assets/blog-hero-walkthrough.webp" alt="Homeowners reviewing a Florida construction project with a contractor" />
        <figcaption>Verify the contractor first, then compare the written scope, price and project plan.</figcaption>
      </figure>

      <div className="article-shell">
        <aside className="article-sidebar">
          <div className="article-contents">
            <p>Article Contents</p>
            <a href="#quick-answer">Quick Answer</a>
            <a href="#license">1. Verify the License</a>
            <a href="#insurance">2. Check Insurance</a>
            <a href="#permits">3. Review Permit History</a>
            <a href="#match">4. Match the Records</a>
            <a href="#checklist">Hiring Checklist</a>
            <a href="#faqs">FAQs</a>
          </div>
          <div className="article-sidebar-cta">
            <p>Planning a Project?</p>
            <h2>Verify First. Then Compare the Scope.</h2>
            <a className="button blog-primary" href="/contact">Request a Free Estimate</a>
            <a href="tel:3527017458">Call (352) 701-7458</a>
          </div>
        </aside>

        <article className="article-body">
          <section className="article-answer" id="quick-answer">
            <p className="eyebrow">QUICK ANSWER</p>
            <h2>What Should You Verify Before Hiring a Florida Contractor?</h2>
            <p>Start with the contractor's Florida license, then verify workers' compensation coverage and review local permit records when they are available. Finally, compare the names and business information on those records with the company presenting the proposal. None of these checks replaces a good contract, but together they give you a much clearer picture of who you are hiring.</p>
            <div className="article-takeaways">
              <strong>Verification Order</strong>
              <ul>
                <li>Confirm the Florida contractor license is active and appropriate for the scope.</li>
                <li>Check workers' compensation coverage through the state database.</li>
                <li>Request proof of general liability insurance.</li>
                <li>Review local permit and property records when available.</li>
                <li>Make sure the license, insurance and proposal identify the responsible contractor clearly.</li>
              </ul>
            </div>
          </section>

          <section id="license">
            <p className="eyebrow">STEP 1</p>
            <h2>Verify the Contractor Through Florida DBPR.</h2>
            <p>The Florida Department of Business and Professional Regulation provides an official license search for regulated contractors. You can search by name, license number, city or county.</p>
            <p>Do not stop at finding a result. Check the license status and license type, and make sure the name shown in the state record matches the contractor or qualifying individual connected to the proposal.</p>
            <h3>What to Look For</h3>
            <ul className="article-checklist">
              <li>Active license status.</li>
              <li>Correct contractor or qualifying individual name.</li>
              <li>License classification that fits the proposed work.</li>
              <li>Any information in the official record that does not match the proposal.</li>
            </ul>
            <p>If you want the broader explanation of why this matters locally, see <a href="/blog/why-local-contractor-licensing-matters-hernando-county">why contractor licensing matters in Hernando County</a>.</p>
          </section>

          <section className="article-callout">
            <p className="eyebrow">OFFICIAL LICENSE CHECK</p>
            <h2>Use the State Record, Not Just the Contractor's Website.</h2>
            <p>Florida DBPR says its verification tools can be used to search licensed individuals by name or license number and review license status.</p>
            <a href="https://www2.myfloridalicense.com/how-to-verify-a-license/" target="_blank" rel="noopener noreferrer">Open Florida DBPR Verification Guidance <b>→</b></a>
          </section>

          <section id="insurance">
            <p className="eyebrow">STEP 2</p>
            <h2>Check Workers' Compensation and Ask for General Liability Proof.</h2>
            <p>Florida's Department of Financial Services provides a Workers' Compensation Proof of Coverage search. The state specifically recommends verifying coverage when hiring contractors and requesting evidence of insurance.</p>
            <p>General liability insurance is different. Homeowners should ask the contractor for a current certificate of insurance. If the project is significant, you can also confirm the certificate with the insurance agent or carrier listed on it.</p>
            <h3>Do Not Treat One Insurance Document as Everything</h3>
            <p>Workers' compensation and general liability cover different risks. A contractor may provide documents for both, and the names and policy information should make sense in relation to the company you are hiring.</p>
          </section>

          <section id="permits">
            <p className="eyebrow">STEP 3</p>
            <h2>Review Permit and Property Records When They Are Available.</h2>
            <p>Permit records are local, not one statewide contractor scorecard. In Hernando County, the Building Department's current portal can be used to view permit status, search property history and review contractor information. The County also maintains legacy tools for older permit records.</p>
            <p>This can help you understand whether a contractor appears in local records and whether a property has a documented permit history. It is useful context, but it should not be treated as a complete measure of contractor quality because not every job requires a permit and records may span different systems.</p>
            <h3>For Hernando County Properties</h3>
            <p>The County says its current permit and property search can be searched by owner name, address, key number or parcel ID, and contractor information can be searched by name, business or license number.</p>
          </section>

          <section id="match">
            <p className="eyebrow">STEP 4</p>
            <h2>Make Sure the Records Point to the Same Responsible Contractor.</h2>
            <p>The goal is not to make every document display identical formatting. The goal is to understand who is legally and financially responsible for the project.</p>
            <div className="article-factor-grid">
              <div><strong>Proposal</strong><p>Who is named as the company performing the work?</p></div>
              <div><strong>License</strong><p>Who holds or qualifies the license used for the project?</p></div>
              <div><strong>Insurance</strong><p>Which business or individual is shown as the insured party?</p></div>
              <div><strong>Permit Record</strong><p>Which contractor appears on local permit records when applicable?</p></div>
            </div>
            <p>If those records point to different companies or people, ask the contractor to explain the relationship before you sign or pay a deposit.</p>
          </section>

          <section id="checklist">
            <p className="eyebrow">BEFORE YOU SIGN</p>
            <h2>A Simple Contractor Verification Checklist</h2>
            <ul className="article-checklist">
              <li>Search the contractor in Florida DBPR.</li>
              <li>Confirm the license is active.</li>
              <li>Confirm the license type fits the proposed work.</li>
              <li>Verify workers' compensation coverage when applicable.</li>
              <li>Request a current general liability certificate.</li>
              <li>Review local permit or property records when useful.</li>
              <li>Compare the names on the proposal, license and insurance documents.</li>
              <li>Get the scope, exclusions, payment terms and permit responsibility in writing.</li>
            </ul>
            <p>Once the verification checks are complete, compare the actual project scope. Swift provides written proposals for <a href="/services">construction, remodeling and painting services</a> across the Florida Nature Coast.</p>
          </section>

          <section className="article-faqs" id="faqs">
            <p className="eyebrow">COMMON QUESTIONS</p>
            <h2>Florida Contractor Verification FAQs</h2>
            {faqItems.map((item, index) => (
              <details open={index === 0} key={item.question}>
                <summary>{item.question}<span>+</span></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </section>

          <section className="article-sources">
            <p className="eyebrow">OFFICIAL RESOURCES</p>
            <h2>Use Official Records for Verification.</h2>
            <ul>
              <li><a href="https://www2.myfloridalicense.com/how-to-verify-a-license/" target="_blank" rel="noopener noreferrer">Florida DBPR: How to Verify a License</a></li>
              <li><a href="https://www.myfloridacfo.com/division/ica/resources" target="_blank" rel="noopener noreferrer">Florida DFS: Insurance and Workers' Compensation Verification Resources</a></li>
              <li><a href="https://www.hernandocounty.us/building-development/building/" target="_blank" rel="noopener noreferrer">Hernando County Building Department: Permit and Property Search</a></li>
            </ul>
          </section>
        </article>
      </div>

      <section className="blog-cta">
        <div><p className="eyebrow">READY TO DISCUSS YOUR PROJECT?</p><h2>Verify the Contractor. Then Review the Scope.</h2><p>Swift can review your project and provide a written estimate for construction, remodeling or painting work throughout the local service area.</p></div>
        <div><a className="button blog-primary" href="/contact">Request a Free Estimate</a><a href="/services">Explore Services</a></div>
      </section>

      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
