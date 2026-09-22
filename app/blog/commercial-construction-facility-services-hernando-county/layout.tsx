import type { Metadata } from "next";
const path="/blog/commercial-construction-facility-services-hernando-county";
const title="Commercial Construction Hernando County | Swift";
const description="Commercial build-outs, painting, property improvements and facility services in Hernando County from Swift Construction & Painting.";
export const metadata:Metadata={title,description,alternates:{canonical:path},openGraph:{title,description,url:path,type:"article"}};
export default function Layout({children}:{children:React.ReactNode}){return children}