import type { Metadata } from "next";
const path="/blog/how-to-choose-commercial-painter";
const title="How to Choose a Commercial Painter | Swift";
const description="How to compare commercial painters by property inspection, preparation, written scope, scheduling and project responsibility.";
export const metadata:Metadata={title,description,alternates:{canonical:path},openGraph:{title,description,url:path,type:"article"}};
export default function Layout({children}:{children:React.ReactNode}){return children}