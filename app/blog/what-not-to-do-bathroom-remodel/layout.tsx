import type { Metadata } from "next";
const path="/blog/what-not-to-do-bathroom-remodel";
const title="What Not to Do in a Bathroom Remodel | Swift";
const description="Avoid common bathroom remodel mistakes involving layout, waterproofing, plumbing, ventilation, scope and contractor estimates.";
export const metadata:Metadata={title,description,alternates:{canonical:path},openGraph:{title,description,url:path,type:"article"}};
export default function Layout({children}:{children:React.ReactNode}){return children}