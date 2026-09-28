import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const faqItems=[
  {question:"Can a Florida homeowner pull their own building permit?",answer:"Yes, in qualifying situations. Florida law provides an owner-builder exemption that can allow a property owner to act as their own contractor for a one-family or two-family residence or certain other qualifying work when the legal requirements are met."},
  {question:"Do I have to supervise the work myself as an owner-builder?",answer:"Yes. Florida's owner-builder disclosure states that the owner-builder must provide direct, onsite supervision of the construction and may not hire an unlicensed person to act as the contractor or supervise the work."},
  {question:"Can I use an owner-builder permit and have an unlicensed contractor run the job?",answer:"No. Florida's owner-builder disclosure specifically warns against this practice. An unlicensed person cannot use the property owner's permit as a substitute for the contractor license the work legally requires."},
  {question:"Can I sell or rent the home after using the owner-builder exemption?",answer:"Florida law generally ties the exemption to work for the owner's own use or occupancy and creates a presumption against the exemption when a qualifying owner-built residence is sold or leased within one year after completion, subject to statutory exceptions."},
  {question:"Is an owner-builder permit the same as hiring a licensed contractor?",answer:"No. When you act as the owner-builder, you take on responsibilities that would otherwise belong to the licensed contractor, including direct supervision and responsibility for confirming that people performing licensed work are properly licensed."},
];

const faqSchema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqItems.map(x=>({"@type":"Question",name:x.question,acceptedAnswer:{"@type":"Answer",text:x.answer}}))};

export default function Page(){
  return <main className="blog-page article-page">
    <SiteHeader active="faq"/>
    <nav className="article-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/faq">FAQs</a><span>/</span><span>Owner-Builder Permits</span></nav>

    <header className="article-header">
      <p className="eyebrow">FLORIDA • OWNER-BUILDER FAQ</p>
      <h1>Can I Pull My Own Building Permit as a Homeowner in Florida?</h1>
      <p className="article-deck">Florida does allow qualifying property owners to act as their own contractor in certain situations, but an owner-builder permit also transfers real supervision, licensing and liability responsibilities to the homeowner.</p>
      <div className="article-meta"><span>OWNER-BUILDER FAQ</span><span>UPDATED SEPTEMBER 28, 2026</span></div>
      <div className="article-byline"><img className="article-author-avatar" src="/assets/william-swift.jpg" alt="William Swift"/><div className="article-author-copy"><span>Author</span><strong>William Swift</strong></div><div className="article-read-time"><span>Read Time</span><strong>8 min read</strong></div></div>
    </header>

    <figure className="article-hero-image"><img src="/assets/blog-hero-walkthrough.webp" alt="Homeowners reviewing construction plans with a contractor in Florida"/><figcaption>An owner-builder permit is not a shortcut around contractor licensing. It makes the property owner responsible for qualifying under the exemption and supervising the work.</figcaption></figure>

    <div className="article-shell">
      <aside className="article-sidebar">
        <div className="article-contents"><p>On This Page</p><a href="#quick">Quick Answer</a><a href="#exemption">Owner-Builder Exemption</a><a href="#responsibility">Your Responsibilities</a><a href="#unlicensed">Unlicensed Contractor Risk</a><a href="#when">When a Licensed Contractor Makes Sense</a><a href="#faqs">FAQs</a></div>
        <div className="article-sidebar-cta"><p>Planning a Project?</p><h2>Know Who Is Responsible for the Work.</h2><a className="button blog-primary" href="/contact">Request a Free Estimate</a></div>
      </aside>

      <article className="article-body">
        <section className="article-answer" id="quick">
          <p className="eyebrow">QUICK ANSWER</p>
          <h2>Yes, but Only if You Qualify for Florida&apos;s Owner-Builder Exemption.</h2>
          <p>Florida Statute 489.103 allows qualifying property owners to act as their own contractor for certain projects, including building or improving a one-family or two-family residence for their own use or occupancy. The homeowner must meet the exemption requirements, personally take responsibility for the permit, and provide direct, onsite supervision of the work.</p>
          <div className="article-takeaways"><strong>Key Takeaways</strong><ul><li>Florida has an owner-builder exemption, but it has specific legal conditions.</li><li>The owner-builder must provide direct, onsite supervision.</li><li>You cannot use your permit to let an unlicensed person function as the contractor.</li><li>You are responsible for making sure people performing licensed trades are properly licensed.</li><li>An owner-builder permit can shift supervision, insurance and financial risk back to the homeowner.</li></ul></div>
        </section>

        <section id="exemption">
          <p className="eyebrow">THE EXEMPTION</p>
          <h2>Florida Lets Some Property Owners Act as Their Own Contractor.</h2>
          <p>The 2026 Florida Statutes provide an exemption for owners of property who act as their own contractor and directly supervise qualifying work. For residential projects, the statute specifically addresses one-family and two-family residences intended for the owner&apos;s own use or occupancy.</p>
          <p>That does not mean any homeowner can simply pull a permit for any project. The work still has to fit the exemption, local permit requirements still apply, and licensed trades must still be performed by people legally authorized to do that work when licensing is required.</p>
          <p>If you are planning an addition or larger remodel, review <a href="/faq/do-i-need-permit-home-addition-hernando-county">home addition permit requirements in Hernando County</a> and <a href="/faq/what-home-remodeling-projects-require-permit-hernando-county">which remodeling projects may require permits</a>.</p>
        </section>

        <section id="responsibility">
          <p className="eyebrow">WHAT YOU TAKE ON</p>
          <h2>Owner-Builder Means You Become Responsible for Contractor-Level Coordination.</h2>
          <p>Florida&apos;s required owner-builder disclosure makes the responsibility clear. The owner-builder must provide direct, onsite supervision. That means the homeowner is not simply signing the permit while someone else runs the project.</p>
          <p>You also take responsibility for confirming that people performing work that legally requires a license have the proper license. On a project involving electrical, plumbing, roofing or other regulated trades, that can mean coordinating several licensed parties and keeping the permit and inspection process moving correctly.</p>
          <ul className="article-checklist"><li>Personally qualify for the owner-builder exemption</li><li>Provide direct, onsite supervision</li><li>Coordinate the permitted scope</li><li>Confirm required trade licenses</li><li>Schedule work around inspections</li><li>Manage contracts, payments and project documentation</li></ul>
        </section>

        <section id="unlicensed">
          <p className="eyebrow">IMPORTANT LIMIT</p>
          <h2>An Owner-Builder Permit Cannot Be Used to Cover an Unlicensed Contractor.</h2>
          <p>Florida&apos;s statutory disclosure specifically warns homeowners about unlicensed people asking property owners to obtain owner-builder permits. The law states that you may not hire an unlicensed person to act as your contractor or supervise people working on the building or residence.</p>
          <p>The disclosure also warns that the owner-builder may face serious financial risk if an unlicensed person or that person&apos;s employees are injured on the property, and homeowner&apos;s insurance may not provide coverage for those injuries.</p>
          <p>Before hiring anyone, use Swift&apos;s <a href="/blog/how-to-verify-florida-contractor-license-insurance-permit-history">Florida contractor license, insurance and permit verification checklist</a>.</p>
        </section>

        <section id="when">
          <p className="eyebrow">OWNER-BUILDER VS. CONTRACTOR</p>
          <h2>The Question Is Not Just “Can I Pull the Permit?”</h2>
          <p>The more useful question is whether you want to take responsibility for supervising the project, coordinating licensed trades, managing inspections and resolving scope issues when they come up.</p>
          <p>For a small project and a homeowner with the right experience and time, the owner-builder route may be workable. For a larger remodel, addition or new home, many homeowners prefer one licensed contractor who is responsible for the overall project structure and coordination.</p>
          <p>Swift provides <a href="/residential-remodeling">residential remodeling</a>, <a href="/home-additions">home additions</a> and <a href="/new-home-construction">new home construction</a> under a coordinated project scope.</p>
        </section>

        <section className="article-faqs" id="faqs"><p className="eyebrow">COMMON QUESTIONS</p><h2>Florida Owner-Builder Permit FAQs</h2>{faqItems.map((x,i)=><details open={i===0} key={x.question}><summary>{x.question}<span>+</span></summary><p>{x.answer}</p></details>)}</section>

        <section className="article-sources"><p className="eyebrow">OFFICIAL SOURCE</p><h2>Read the Florida Owner-Builder Statute.</h2><p><a href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0400-0499/0489/Sections/0489.103.html" target="_blank" rel="noreferrer">Florida Statute 489.103: Exemptions</a></p></section>
      </article>
    </div>

    <section className="blog-cta"><div><p className="eyebrow">PLANNING A LARGER PROJECT?</p><h2>Decide Who Will Be Responsible Before the Permit Is Pulled.</h2><p>Swift can review the scope and explain how the project would be managed under a licensed contractor.</p></div><div><a className="button blog-primary" href="/contact">Request a Free Estimate</a><a href="/faq">More FAQs</a></div></section>
    <SiteFooter/>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/>
  </main>;
}