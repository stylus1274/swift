import type { Metadata } from "next";
const path="/faq/do-i-need-permit-home-addition-hernando-county";
const title="Do I Need a Permit for a Home Addition in Hernando County?";
const description="Learn why Hernando County home additions require permit planning, plus what to know about zoning, plans, inspections and contractor responsibility.";
export const metadata:Metadata={title,description,alternates:{canonical:path},openGraph:{title,description,url:path,type:"article"}};
export default function Layout({children}:{children:React.ReactNode}){return children}