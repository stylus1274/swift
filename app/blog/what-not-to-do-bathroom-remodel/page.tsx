import SiteHeader from "../../../components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const mistakes=[
["Choosing Finishes Before Solving the Layout","Tile and fixtures matter, but they should not come before deciding how the bathroom needs to function. Fix circulation, storage and fixture placement first."],
["Treating Waterproofing as a Finish Detail","The waterproofing system belongs behind the visible tile and should be planned as part of the build, not treated as an afterthought."],
["Assuming a Small Bathroom Means a Small Project","A compact room can still require demolition, plumbing, electrical, waterproofing, tile, cabinetry and finish work."],
["Moving Plumbing Without a Clear Reason","Relocating toilets, tubs, showers or sinks can expand the scope quickly. Move fixtures when the functional benefit justifies the added work."],
["Ignoring Ventilation","Moisture management matters in Florida. Ventilation should be considered with the room layout and finish plan."],
["Comparing Prices Without Comparing Scope","One estimate may include demolition, waterproofing, plumbing, electrical and finish work while another excludes major pieces. Compare the written scope, not just the total."],
];

const faqItems=[
{question:"What is the biggest bathroom remodeling mistake?",answer:"Starting demolition before the layout, scope and major decisions are clear. Late changes can affect plumbing, electrical work, waterproofing, tile, schedule and cost."},
{question:"Is waterproofing really that important in a bathroom remodel?",answer:"Yes. In wet areas, the waterproofing system behind the finished surface is critical to the performance of the shower or tub surround."},
{question:"Should I move plumbing during a bathroom remodel?",answer:"Only when the functional improvement justifies the added scope. Moving fixtures can require more plumbing, framing and finish work."},
];

const faqSchema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:faqItems.map(x=>({"@type":"Question",name:x.question,acceptedAnswer:{"@type":"Answer",text:x.answer}}))};

export default function Page(){return <main className="blog-page article-page"><SiteHeader active="blog"/>
<nav className="article-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/blog">Blog</a><span>/</span><span>Bathroom Remodel Mistakes</span></nav>
<header className="article-header"><p className="eyebrow">BATHROOM REMODELING • HOMEOWNER FAQ</p><h1>What Not to Do in a Bathroom Remodel</h1><p className="article-deck">Bathroom remodels can go wrong long before the tile is installed. The biggest problems usually come from unclear scope, poor sequencing and treating hidden systems like waterproofing as secondary details.</p><div className="article-meta"><span>REMODELING FAQ</span><span>8 MIN READ</span><span>UPDATED SEPTEMBER 21, 2026</span></div></header>
<figure className="article-hero-image"><img src="/assets/projects/spring-hill-whole-home-remodel/primary-bath-after.jpg" alt="Completed Swift primary bathroom remodel in Spring Hill, Florida"/><figcaption>A good bathroom remodel starts with layout, waterproofing and scope before the visible finishes are selected.</figcaption></figure>
<div className="article-shell"><aside className="article-sidebar"><div className="article-contents"><p>Article Contents</p><a href="#quick-answer">Quick Answer</a>{mistakes.map((x,i)=><a href={"#mistake-"+(i+1)} key={x[0]}>{i+1}. {x[0]}</a>)}<a href="#faqs">FAQs</a></div><div className="article-sidebar-cta"><p>Planning a Bathroom?</p><h2>Define the Scope Before Demolition.</h2><a className="button blog-primary" href="/contact">Request a Free Estimate</a></div></aside>
<article className="article-body">
<section className="article-answer" id="quick-answer"><p className="eyebrow">QUICK ANSWER</p><h2>What Should You Avoid in a Bathroom Remodel?</h2><p>Avoid starting with finishes before the layout is settled, treating waterproofing as an afterthought, assuming a small room means a small scope, moving plumbing without a clear benefit, ignoring ventilation and comparing estimates without comparing what is actually included.</p></section>
{mistakes.map((x,i)=><section id={"mistake-"+(i+1)} key={x[0]}><p className="eyebrow">MISTAKE {i+1}</p><h2>{x[0]}</h2><p>{x[1]}</p></section>)}
<section><p className="eyebrow">REAL PROJECT CONTEXT</p><h2>One Bathroom Can Be Part of a Much Larger Remodeling Scope.</h2><p>Swift&apos;s documented Spring Hill whole-home remodel included the primary bathroom, pool bathroom and hallway bathroom along with the kitchen, laundry, living spaces, bedrooms and patio. That kind of project shows why sequencing and finish coordination matter across multiple rooms.</p><p><a href="/projects/whole-home-remodel-spring-hill-fl">View the Spring Hill whole-home remodel</a> or read <a href="/blog/realistic-bathroom-remodel-budget">the bathroom remodeling budget guide</a>.</p></section>
<section className="article-faqs" id="faqs"><p className="eyebrow">COMMON QUESTIONS</p><h2>Bathroom Remodeling Mistake FAQs</h2>{faqItems.map((x,i)=><details open={i===0} key={x.question}><summary>{x.question}<span>+</span></summary><p>{x.answer}</p></details>)}</section>
</article></div>
<section className="blog-cta"><div><p className="eyebrow">PLANNING A BATHROOM REMODEL?</p><h2>Walk the Room Before You Lock the Scope.</h2><p>Swift can review the existing bathroom, discuss what should change and prepare a written estimate around the real project.</p></div><div><a className="button blog-primary" href="/contact">Request a Free Estimate</a><a href="/bathroom-remodeling">Bathroom Remodeling</a></div></section>
<SiteFooter/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}}/></main>}