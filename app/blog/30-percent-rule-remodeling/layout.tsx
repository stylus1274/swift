import type { Metadata } from "next";
const path="/blog/30-percent-rule-remodeling";
const title="What Is the 30% Rule in Remodeling? | Swift";
const description="Learn what the 30% remodeling rule means, how it is calculated and why it is only a rough budget guardrail, not a project estimate.";
export const metadata:Metadata={title,description,alternates:{canonical:path},openGraph:{title,description,url:path,type:"article"}};
export default function Layout({children}:{children:React.ReactNode}){return children}