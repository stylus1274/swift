import FaqSection from "@/components/FaqSection";
import SiteHeader from "../../../components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const faqItems=[
{question:"Does Swift require a deposit before starting a project?",answer:"We do not require an up-front deposit and invoice on completion. Review your written proposal for the payment terms that apply to your project."},
{question:"How does a project get scheduled without a deposit?",answer:"You first accept the written estimate and scope, then we place the project on the schedule. A projected start date and pre-construction walkthrough follow."},
{question:"Does Swift offer financing?",answer:"We do not offer financing directly. For new-home construction, we can refer you to preferred lenders so you can arrange financing separately."},
];

const faqSchema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqItems.map(x=>({"@type":"Question",name:x.question,acceptedAnswer:{"@type":"Answer",text:x.answer}}))};

export default function Page(){return <main className="blog-page article-page"><SiteHeader active="blog"/>
<nav className="article-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/blog">Blog</a><span>/</span><span>No Deposit, No Surprises</span></nav>
<header className="article-header"><p className="eyebrow">PRICING & PROCESS • SWIFT</p><h1>No Deposit, No Surprises: How Swift Prices and Invoices Every Project</h1><p className="article-deck">One of the first questions homeowners ask is whether a deposit is required. Our policy is straightforward: no deposit up front, with invoicing on completion.</p><div className="article-meta"><span>TRUST</span><span>UPDATED NOVEMBER 27, 2026</span></div>
      <div className="article-byline">
        <img className="article-author-avatar" src="/assets/william-swift.jpg" alt="William Swift" />
        <div className="article-author-copy"><span>Author</span><strong>William Swift</strong></div>
        <div className="article-read-time"><span>Read Time</span><strong>7 min read</strong></div>
      </div></header>
<figure className="article-hero-image"><img src="/assets/contact-planning-hero.webp" alt="Construction plans and finish samples prepared for a project estimate"/><figcaption>Our process starts with an in-person estimate and written scope before scheduling.</figcaption></figure>
<div className="article-shell"><aside className="article-sidebar"><div className="article-contents"><p>Article Contents</p><a href="#quick-answer">Quick Answer</a><a href="#estimate">Estimate First</a><a href="#schedule">Scheduling</a><a href="#deposit">No Deposit Policy</a><a href="#completion">Invoice on Completion</a><a href="#faqs">FAQs</a></div><div className="article-sidebar-cta"><p>Planning a Project?</p><h2>Start With an In-Person Estimate.</h2><a className="text-action" href="/contact"><span className="text-action-label">Request a free estimate</span><span className="text-action-arrow" aria-hidden="true">→</span></a></div></aside>
<article className="article-body">
<section className="article-answer" id="quick-answer"><p className="eyebrow">QUICK ANSWER</p><h2>Does Swift Require a Deposit?</h2><p>No. We do not require an up-front deposit and invoice on completion. We begin with an in-person estimate and a written scope for your approval before scheduling. Review the payment terms in your proposal alongside the included work, exclusions and process for approving changes.</p>
          <div className="article-takeaways">
            <strong>Key Takeaways</strong>
            <ul>
              <li>We invoice on completion, with the scope and payment expectations set out before work begins.</li>
              <li>Homeowners should still understand what is included, excluded and how changes are approved.</li>
              <li>An itemized proposal makes it easier to compare the project before work begins.</li>
              <li>Payment structure is one part of contractor evaluation alongside licensing, project fit and documented work.</li>
            </ul>
          </div>
        </section>
<section id="estimate"><p className="eyebrow">STEP 1</p><h2>The Process Starts With an In-Person Estimate.</h2><p>We visit the property and walk through the scope before preparing an estimate. Seeing existing conditions and discussing your goals helps us define the work, identify selections and explain what the proposal covers.</p></section>
<section id="schedule"><p className="eyebrow">STEP 2</p><h2>The Customer Accepts the Scope Before the Job Is Scheduled.</h2><p>Once the estimate is complete, you review and accept the written scope. We then place the project on the schedule.</p><p>Next, we provide a projected start date and arrange a pre-construction walkthrough to review selections and finish details. We also coordinate materials and revisit the construction plan when you request changes.</p></section>
<section id="deposit"><p className="eyebrow">STEP 3</p><h2>No Up-Front Deposit.</h2><p>We do not require an up-front deposit. Before work starts, review the scope and ask us to explain any payment terms in your proposal.</p><p>Your written estimate and project-specific contract terms should explain how your project will be billed. Keep a copy of the accepted proposal so you can refer to the agreed scope throughout the work.</p></section>
<section id="completion"><p className="eyebrow">STEP 4</p><h2>Invoice on Completion.</h2><p>We invoice when the work is complete. We aim to keep work moving on your project through completion, with the agreed scope and schedule guiding the work. Discuss access, selections and requested changes with us so we can plan the next steps.</p><div className="article-factor-grid"><div><strong>Site Visit</strong><p>Evaluate the property and scope in person.</p></div><div><strong>Written Estimate</strong><p>Document the work before scheduling.</p></div><div><strong>No Deposit</strong><p>We do not require an up-front deposit.</p></div><div><strong>Completion Invoice</strong><p>We invoice when the work is complete.</p></div></div></section>
<section><p className="eyebrow">WHAT TO REVIEW</p><h2>Clear Payment Terms Still Belong in Writing.</h2><p>Even with a simple payment policy, the written proposal should make the scope, exclusions and payment expectations clear. Homeowners comparing contractors should ask each company to explain how deposits, progress payments, change orders and final payment work for the specific project being proposed.</p><p>For more contractor due diligence, read <a href="/blog/how-to-verify-florida-contractor-license-insurance-permit-history">how to verify a Florida contractor before hiring</a>.</p></section>

</article></div>

      <FaqSection id="faqs"
        eyebrow={<>COMMON QUESTIONS</>}
        title={<>Swift Payment Process FAQs</>}
        items={faqItems}
        estimateHref="/contact#contact-form"
      />

<section className="blog-cta"><div><p className="eyebrow">READY TO DISCUSS YOUR PROJECT?</p><h2>Start With the Scope and the Property.</h2><p>Swift can schedule an in-person estimate and prepare a written project scope.</p></div><div><a className="button cta-primary" href="/contact">Request a free estimate</a><a href="/services">Explore Services</a></div></section>
<SiteFooter/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/></main>}