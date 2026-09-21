import type { Metadata } from "next";
const path="/blog/what-not-to-do-kitchen-remodel";
const title="What Not to Do in a Kitchen Remodel | Swift";
const description="Avoid common kitchen remodel mistakes involving layout, storage, lighting, selections, scope changes and contractor estimates.";
export const metadata:Metadata={title,description,alternates:{canonical:path},openGraph:{title,description,url:path,type:"article"}};
export default function Layout({children}:{children:React.ReactNode}){return children}