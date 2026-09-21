import type { Metadata } from "next";
const path="/blog/multi-family-construction-hernando-county-duplex-to-10-plex";
const title="Multi-Family Construction in Hernando County | Swift";
const description="What owners should know about duplex to 10-plex construction in Hernando County, from property review through trade coordination.";
export const metadata:Metadata={title,description,alternates:{canonical:path},openGraph:{title,description,url:path,type:"article"}};
export default function Layout({children}:{children:React.ReactNode}){return children}