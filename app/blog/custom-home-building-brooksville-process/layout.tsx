import type { Metadata } from "next";
const path="/blog/custom-home-building-brooksville-process";
const title="Building a Custom Home in Brooksville: The Process | Swift";
const description="See how a Brooksville custom home moves from planning and written scope through pre-construction, trade coordination and completion.";
export const metadata:Metadata={title,description,alternates:{canonical:path},openGraph:{title,description,url:path,type:"article"}};
export default function Layout({children}:{children:React.ReactNode}){return children}