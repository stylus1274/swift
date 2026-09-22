import type { Metadata } from "next";
const path="/blog/20-plus-years-projects-hernando-county";
const title="20+ Years of Projects in Hernando County | Swift";
const description="A look at Swift Construction & Painting's 20+ years serving Hernando County, from remodeling and painting to custom and multi-family construction.";
export const metadata:Metadata={title,description,alternates:{canonical:path},openGraph:{title,description,url:path,type:"article"}};
export default function Layout({children}:{children:React.ReactNode}){return children}