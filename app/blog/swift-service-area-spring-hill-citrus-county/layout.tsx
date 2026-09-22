import type { Metadata } from "next";
const path="/blog/swift-service-area-spring-hill-citrus-county";
const title="Where Swift Works: Spring Hill to Citrus County";
const description="See Swift Construction & Painting's service area across Hernando County, Spring Hill, Brooksville, Weeki Wachee and Citrus County.";
export const metadata:Metadata={title,description,alternates:{canonical:path},openGraph:{title,description,url:path,type:"article"}};
export default function Layout({children}:{children:React.ReactNode}){return children}