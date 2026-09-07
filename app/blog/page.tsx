"use client";

import { useMemo, useState } from "react";
import SiteHeader from "../../components/SiteHeader";

const categories = ["All", "Painting", "Remodeling", "New Homes", "Commercial"];

const articles = [
  {
    category: "Remodeling",
    title: "Kitchen Remodeling in Spring Hill, FL: What Actually Adds Value",
    excerpt: "The practical layout, storage, lighting and finish decisions that improve daily use without pushing a Spring Hill kitchen beyond the home.",
    image: "/assets/kitchen-remodeling-spring-hill-value.webp",
    alt: "Remodeled Spring Hill kitchen with practical storage, quartz counters and a functional island",
    readTime: "11 MIN READ",
    href: "/blog/kitchen-remodeling-spring-hill-fl-adds-value",
  },
  {
    category: "Remodeling",
    title: "What Is a Realistic Budget for a Bathroom Remodel?",
    excerpt: "Swift's typical bathroom remodel range, the scope behind the numbers and the Florida-specific details homeowners should plan for.",
    image: "/assets/bathroom-remodel-budget-florida.webp",
    alt: "Finished Florida bathroom remodel with a tiled walk-in shower and wood vanity",
    readTime: "10 MIN READ",
    href: "/blog/realistic-bathroom-remodel-budget",
  },
  {
    category: "Remodeling",
    title: "What Is a Realistic Budget for a Kitchen Remodel?",
    excerpt: "Planning ranges, cost drivers and a practical budget example for homeowners deciding how much kitchen they can realistically remodel.",
    image: "/assets/kitchen-remodel-budget-guide.png",
    alt: "Homeowners planning a kitchen remodel with a contractor and material samples",
    readTime: "9 MIN READ",
    href: "/blog/realistic-kitchen-remodel-budget",
  },
  {
    category: "Remodeling",
    title: "What to Expect During a Whole-Home Remodel",
    excerpt: "A practical look at scope, sequencing, decisions and communication before a major renovation begins.",
    image: "/assets/blog-bathroom-waterproofing.webp",
    alt: "Walk-in shower waterproofing and tile installation in progress",
    readTime: "6 MIN READ",
  },
  {
    category: "New Homes",
    title: "How to Prepare for New Home Construction",
    excerpt: "The property, plans and early decisions that help a new-home project begin with clearer expectations.",
    image: "/assets/blog-home-framing.webp",
    alt: "Florida new home framing ready for inspection",
    readTime: "7 MIN READ",
  },
  {
    category: "Commercial",
    title: "Planning a Commercial Renovation Around Your Operation",
    excerpt: "How phasing, access and communication can reduce disruption during a commercial improvement project.",
    image: "/assets/blog-commercial-buildout.webp",
    alt: "Organized commercial tenant buildout in progress",
    readTime: "5 MIN READ",
  },
  {
    category: "Painting",
    title: "How to Choose Interior Paint Colors for Florida Light",
    excerpt: "Why natural light, room direction and finish samples matter before the first gallon is opened.",
    image: "/assets/blog-paint-selection.webp",
    alt: "Homeowner comparing warm neutral paint samples",
    readTime: "5 MIN READ",
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredArticles = useMemo(() => {
    const query = search.trim().toLowerCase();
    return articles.filter((article) => {
      const categoryMatch = activeCategory === "All" || article.category === activeCategory;
      const searchMatch = !query || `${article.title} ${article.excerpt} ${article.category}`.toLowerCase().includes(query);
      return categoryMatch && searchMatch;
    });
  }, [activeCategory, search]);

  return (
    <main className="blog-page">
      <SiteHeader active="blog" />

      <section className="blog-hero">
        <div className="blog-hero-copy">
          <p className="eyebrow">PROJECT GUIDES • FLORIDA NATURE COAST</p>
          <h1>Practical Answers Before the Work Begins.</h1>
          <p>Clear guidance on painting, remodeling, new-home construction and commercial improvements from a contractor who understands Florida properties.</p>
          <div className="blog-hero-actions">
            <a className="button blog-primary" href="#latest-guides">Browse Project Guides</a>
            <a className="blog-phone" href="tel:3527017458"><small>OR CALL SWIFT</small>(352) 701-7458</a>
          </div>
          <div className="blog-hero-proof"><span>Local Experience Since 2003</span><span>Written for Florida Property Owners</span><span>Straightforward Project Guidance</span></div>
        </div>
        <div className="blog-hero-visual"><img src="/assets/blog-hero-walkthrough.webp" alt="Homeowners walking through a Florida renovation with a contractor" /></div>
      </section>

      <article className="blog-featured">
        <div className="blog-featured-image"><img src="/assets/custom-home-building-hernando-county.png" alt="Concrete block custom home under construction in Hernando County, Florida" /></div>
        <div className="blog-featured-copy">
          <p className="eyebrow">FEATURED NEW HOME GUIDE</p>
          <h2>Custom Home Building in Hernando County</h2>
          <p>Follow the complete process from property review and site clearing through the structural build, inspections, final walkthrough and certificate of occupancy.</p>
          <div><span>NEW HOMES</span><span>10 MIN READ</span></div>
          <a href="/blog/custom-home-building-hernando-county">Read the Featured Guide <b>→</b></a>
        </div>
      </article>

      <section className="blog-library" id="latest-guides">
        <div className="blog-library-heading">
          <div><p className="eyebrow">SWIFT PROJECT LIBRARY</p><h2>Guidance for the Project You Are Planning Next.</h2></div>
          <p>Search by topic or browse the main service categories.</p>
        </div>
        <div className="blog-controls">
          <div className="blog-categories" aria-label="Filter articles by category">
            {categories.map((category) => <button className={activeCategory === category ? "active" : ""} key={category} onClick={() => setActiveCategory(category)} type="button">{category}</button>)}
          </div>
          <label className="blog-search"><span>Search Guides</span><input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search by topic" /></label>
        </div>
        <div className="blog-grid">
          {filteredArticles.map((article) => (
            <article className="blog-card" key={article.title}>
              <div className="blog-card-image">
                {"href" in article
                  ? <a href={article.href} aria-label={`Read ${article.title}`}><img src={article.image} alt={article.alt} /></a>
                  : <img src={article.image} alt={article.alt} />}
              </div>
              <div className="blog-card-copy">
                <div><span>{article.category.toUpperCase()}</span><span>{article.readTime}</span></div>
                <h3>{"href" in article ? <a href={article.href}>{article.title}</a> : article.title}</h3>
                <p>{article.excerpt}</p>
                {"href" in article ? <a className="blog-card-link" href={article.href}>Read Guide <b>→</b></a> : <span className="blog-coming-soon">Coming Soon</span>}
              </div>
            </article>
          ))}
        </div>
        {filteredArticles.length === 0 && <div className="blog-empty"><h3>No Guides Match That Search.</h3><p>Try another topic or reset the category filter.</p><button type="button" onClick={() => { setSearch(""); setActiveCategory("All"); }}>View All Guides</button></div>}
      </section>

      <section className="blog-local">
        <div><p className="eyebrow">BUILT FOR FLORIDA</p><h2>Advice Shaped by the Local Climate and Local Properties.</h2></div>
        <p>Projects across Hernando, Citrus and Pasco Counties face different conditions than work in other parts of the country. Swift&apos;s guides focus on the decisions that matter for Florida homes and commercial properties.</p>
      </section>

      <section className="blog-topics">
        <div className="blog-topics-heading"><p className="eyebrow">EXPLORE BY SERVICE</p><h2>Start With the Type of Work You Are Considering.</h2></div>
        <div className="blog-topic-grid">
          <a href="/residential-painting"><span>01</span><h3>Painting</h3><p>Preparation, coatings, color and maintenance for Florida interiors and exteriors.</p><b>Explore Painting Services →</b></a>
          <a href="/residential-remodeling"><span>02</span><h3>Remodeling</h3><p>Planning, scope and coordination for bathrooms, kitchens and larger renovations.</p><b>Explore Remodeling Services →</b></a>
          <a href="/new-home-construction"><span>03</span><h3>New Homes</h3><p>Property questions, building stages and decisions that shape a ground-up home.</p><b>Explore New Home Construction →</b></a>
          <a href="/commercial-services"><span>04</span><h3>Commercial</h3><p>Buildouts, painting, facility improvements and work planned around operations.</p><b>Explore Commercial Services →</b></a>
        </div>
      </section>

      <section className="blog-cta" id="blog-cta">
        <div><p className="eyebrow">HAVE A PROJECT QUESTION?</p><h2>Get an Answer Specific to Your Property.</h2><p>Online guidance can help you prepare. A walkthrough and written scope are what turn an idea into a real project plan.</p></div>
        <div><a className="button blog-primary" href="/contact">Request a Free Estimate</a><a href="tel:3527017458">Call (352) 701-7458</a></div>
      </section>

      <footer className="site-footer blog-footer">
        <div className="footer-main">
          <div className="footer-brand"><img src="/assets/swift-logo.png" alt="Swift Construction and Painting, LLC" /><p>Licensed and insured general contractor<br />serving Hernando, Citrus and Pasco Counties<br />since 2003.</p></div>
          <div className="footer-column"><h3>Site</h3><a href="/">Home</a><a href="/#services">Services</a><a href="/gallery">Portfolio</a><a href="/about">About</a><a href="/blog">Blog</a><a href="/contact">Contact</a></div>
          <div className="footer-column"><h3>Topics</h3><button onClick={() => setActiveCategory("Painting")} type="button">Painting</button><button onClick={() => setActiveCategory("Remodeling")} type="button">Remodeling</button><button onClick={() => setActiveCategory("New Homes")} type="button">New Homes</button><button onClick={() => setActiveCategory("Commercial")} type="button">Commercial</button></div>
          <div className="footer-contact"><h3>Contact</h3><a className="footer-phone" href="tel:3527017458">(352) 701-7458</a><a href="mailto:swiftconstruction.william@gmail.com">swiftconstruction.william@gmail.com</a><div><a href="/gallery">Project Gallery</a><a href="/contact">Free Estimate</a></div></div>
        </div>
        <div className="footer-bottom"><span>© 2026 SWIFT CONSTRUCTION AND PAINTING, LLC</span><span>“WHEN QUALITY MATTERS”</span></div>
      </footer>
    </main>
  );
}
