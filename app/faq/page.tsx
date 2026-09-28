import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const faqGroups = [
  {
    id: "remodeling-permits",
    eyebrow: "REMODELING & PERMITS",
    title: "Remodeling, Permits & Project Scope",
    copy: "Start here if you are planning a renovation and need to understand when permits, contractor coordination or a more detailed scope may be involved.",
    serviceHref: "/residential-remodeling",
    serviceLabel: "Explore Residential Remodeling",
    questions: [
      {
        title: "What Home Remodeling Projects Require a Permit in Hernando County, FL?",
        copy: "See common remodeling work that may require a permit and examples of residential work Hernando County currently lists as exempt.",
        href: "/faq/what-home-remodeling-projects-require-permit-hernando-county",
      },
    ],
  },
  {
    id: "windows-doors",
    eyebrow: "WINDOWS & DOORS",
    title: "Window & Door Replacement Questions",
    copy: "Use these answers to understand the difference between a full replacement and a limited repair, plus the permit questions that come with changing an opening.",
    serviceHref: "/windows-doors",
    serviceLabel: "Explore Windows & Doors",
    questions: [
      {
        title: "Do I Need a Permit to Replace Windows or Exterior Doors in Hernando County?",
        copy: "Learn how Hernando County treats window and door change-outs, glass-only replacement and permit responsibility.",
        href: "/faq/do-i-need-permit-replace-windows-doors-hernando-county",
      },
    ],
  },
  {
    id: "custom-homes",
    eyebrow: "CUSTOM HOMES",
    title: "Building on Your Own Property",
    copy: "These questions focus on the property itself, including whether a lot can support the home you want to build and what should be reviewed before plans are finalized.",
    serviceHref: "/custom-home-building",
    serviceLabel: "Explore Custom Home Building",
    questions: [
      {
        title: "Can I Build a Custom Home on My Own Lot in Hernando County?",
        copy: "Review zoning, setbacks, access, utilities or septic, flood considerations and the permit information that can affect a new build.",
        href: "/faq/can-i-build-custom-home-on-my-own-lot-hernando-county",
      },
    ],
  },
];

export default function FaqHubPage() {
  return (
    <main className="faq-hub-page">
      <SiteHeader active="faq" />

      <nav className="faq-breadcrumb" aria-label="Breadcrumb">
        <a href="/">Home</a><span>/</span><span>FAQs</span>
      </nav>

      <section className="faq-hub-hero">
        <div className="faq-hub-hero-copy">
          <p className="eyebrow">SWIFT CONSTRUCTION &amp; PAINTING • FAQ CENTER</p>
          <h1>Clear Answers Before You Start the Project.</h1>
          <p>Find practical answers about remodeling, permits, window and door replacement, and custom home planning in Hernando County. Each page is built around one specific homeowner question so you can get to the answer quickly.</p>
          <div className="faq-hub-hero-actions">
            <a className="button faq-primary" href="#faq-topics">Browse FAQ Topics</a>
            <a href="/contact">Ask About Your Project <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <div className="faq-hub-hero-image">
          <img src="/assets/contact-planning-hero.webp" alt="Construction plans and finish samples prepared for a Florida home project" />
          <div className="faq-hub-hero-note">
            <span>LOCAL PROJECT QUESTIONS</span>
            <strong>Hernando County</strong>
            <p>Remodeling • Permits • Windows &amp; Doors • Custom Homes</p>
          </div>
        </div>
      </section>

      <section className="faq-topic-nav" id="faq-topics">
        <div className="faq-topic-nav-heading">
          <p className="eyebrow">BROWSE BY PROJECT TYPE</p>
          <h2>Start With the Question Closest to Your Project.</h2>
        </div>
        <div className="faq-topic-nav-grid">
          {faqGroups.map((group, index) => (
            <a href={"#" + group.id} key={group.id}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <strong>{group.title}</strong>
                <p>{group.copy}</p>
              </div>
              <b aria-hidden="true">↓</b>
            </a>
          ))}
        </div>
      </section>

      <section className="faq-hub-intro">
        <div>
          <p className="eyebrow">HOW TO USE THIS PAGE</p>
          <h2>One Question. One Focused Answer.</h2>
        </div>
        <div>
          <p>These are not generic catch-all FAQ blocks. Each page answers one specific question in enough detail to help you understand the issue before you request an estimate or commit to a project.</p>
          <p>When a question depends on local rules, the answer points back to current Hernando County resources so you can verify the requirement for your property and scope.</p>
        </div>
      </section>

      <section className="faq-groups">
        {faqGroups.map((group, index) => (
          <section className="faq-group" id={group.id} key={group.id}>
            <div className="faq-group-heading">
              <div>
                <p className="eyebrow">{group.eyebrow}</p>
                <h2>{group.title}</h2>
                <p>{group.copy}</p>
              </div>
              <a href={group.serviceHref}>{group.serviceLabel} <span aria-hidden="true">→</span></a>
            </div>

            <div className="faq-question-grid">
              {group.questions.map((question) => (
                <a className="faq-question-card" href={question.href} key={question.href}>
                  <div className="faq-question-number">{String(index + 1).padStart(2, "0")}</div>
                  <div>
                    <p className="eyebrow">FAQ</p>
                    <h3>{question.title}</h3>
                    <p>{question.copy}</p>
                    <strong>Read the Full Answer <span aria-hidden="true">→</span></strong>
                  </div>
                </a>
              ))}
            </div>
          </section>
        ))}
      </section>

      <section className="faq-hub-support">
        <div>
          <p className="eyebrow">RELATED RESOURCES</p>
          <h2>Need More Than a Quick Answer?</h2>
          <p>Use the FAQ center for specific questions, the blog for deeper planning guides, and the cost guides for project budgeting context.</p>
        </div>
        <div className="faq-hub-support-links">
          <a href="/blog"><strong>Blog</strong><span>Planning guides, local construction topics and homeowner education.</span></a>
          <a href="/cost-guides"><strong>Cost Guides</strong><span>Budget ranges and the scope factors that change real project pricing.</span></a>
          <a href="/services"><strong>Services</strong><span>See the remodeling, painting, construction and home improvement work Swift provides.</span></a>
        </div>
      </section>

      <section className="blog-cta">
        <div>
          <p className="eyebrow">HAVE A PROJECT-SPECIFIC QUESTION?</p>
          <h2>Talk Through the Property and the Scope.</h2>
          <p>Swift serves homeowners throughout Hernando, Citrus and Pasco Counties.</p>
        </div>
        <div>
          <a className="button blog-primary" href="/contact">Request a Free Estimate</a>
          <a href="tel:3527017458">Call (352) 701-7458</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
