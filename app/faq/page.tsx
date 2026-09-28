import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const faqs=[
  {
    title:"What Home Remodeling Projects Require a Permit in Hernando County, FL?",
    copy:"A practical look at common remodeling work that typically requires a permit, plus residential work Hernando County currently lists as exempt.",
    href:"/faq/what-home-remodeling-projects-require-permit-hernando-county",
  },
  {
    title:"Do I Need a Permit to Replace Windows or Exterior Doors in Hernando County?",
    copy:"What Hernando County says about window and door change-out permits, glass-only replacement and what to confirm before work begins.",
    href:"/faq/do-i-need-permit-replace-windows-doors-hernando-county",
  },
  {
    title:"Can I Build a Custom Home on My Own Lot in Hernando County?",
    copy:"What to check before assuming a lot is ready to build, including zoning, setbacks, access, utilities or septic, flood requirements and plans.",
    href:"/faq/can-i-build-custom-home-on-my-own-lot-hernando-county",
  },
];

export default function FaqHubPage(){
  return <main className="blog-page article-page">
    <SiteHeader />
    <nav className="article-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span>FAQs</span></nav>
    <header className="article-header">
      <p className="eyebrow">SWIFT CONSTRUCTION &amp; PAINTING • FAQs</p>
      <h1>Florida Construction &amp; Remodeling FAQs</h1>
      <p className="article-deck">Straight answers to questions homeowners ask before remodeling, replacing windows and doors, or building a new home in Hernando County.</p>
    </header>
    <figure className="article-hero-image"><img src="/assets/contact-planning-hero.webp" alt="Construction plans and finish samples for a Florida home project"/><figcaption>Use these answers as a starting point, then confirm project-specific requirements before work begins.</figcaption></figure>
    <div className="article-shell">
      <aside className="article-sidebar">
        <div className="article-contents"><p>FAQ Topics</p>{faqs.map(x=><a key={x.href} href={x.href}>{x.title}</a>)}</div>
        <div className="article-sidebar-cta"><p>Planning a Project?</p><h2>Talk Through the Scope.</h2><a className="button blog-primary" href="/contact">Request a Free Estimate</a></div>
      </aside>
      <article className="article-body">
        <section className="article-answer">
          <p className="eyebrow">LOCAL ANSWERS</p>
          <h2>Start With the Question That Matches Your Project.</h2>
          <p>These FAQ pages focus on practical questions that can affect scope, permitting, timing and contractor selection. Where the answer depends on local rules, we point to Hernando County resources so you can verify the current requirement.</p>
        </section>
        <section>
          <p className="eyebrow">CURRENT FAQ PAGES</p>
          <h2>Remodeling, Windows &amp; New Construction</h2>
          <div className="article-factor-grid">
            {faqs.map(x=><div key={x.href}><strong>{x.title}</strong><p>{x.copy}</p><p><a href={x.href}>Read the full answer →</a></p></div>)}
          </div>
        </section>
      </article>
    </div>
    <section className="blog-cta"><div><p className="eyebrow">HAVE A PROJECT-SPECIFIC QUESTION?</p><h2>Start With the Property and the Scope.</h2><p>Swift serves homeowners throughout Hernando, Citrus and Pasco Counties.</p></div><div><a className="button blog-primary" href="/contact">Request a Free Estimate</a><a href="/services">Explore Services</a></div></section>
    <SiteFooter/>
  </main>;
}