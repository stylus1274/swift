import type { Metadata } from "next";
const path="/faq/best-flooring-for-florida-home";
const title="What Is the Best Flooring for a Florida Home?";
const description="Compare LVP, tile and engineered wood for Florida homes, including humidity, concrete slab and room-by-room considerations.";
export const metadata:Metadata={title,description,alternates:{canonical:path},openGraph:{title,description,url:path,type:"article"}};
export default function Layout({children}:{children:React.ReactNode}){return children}