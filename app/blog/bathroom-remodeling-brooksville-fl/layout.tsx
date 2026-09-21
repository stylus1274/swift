import type { Metadata } from "next";
const path="/blog/bathroom-remodeling-brooksville-fl";
const title="Bathroom Remodeling in Brooksville, FL | Swift";
const description="Small bathroom update or full renovation? Learn what changes the scope of a Brooksville bathroom remodel and when each approach makes sense.";
export const metadata:Metadata={title,description,alternates:{canonical:path},openGraph:{title,description,url:path,type:"article"}};
export default function Layout({children}:{children:React.ReactNode}){return children}