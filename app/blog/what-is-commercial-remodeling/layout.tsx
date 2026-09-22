import type { Metadata } from "next";
const path="/blog/what-is-commercial-remodeling";
const title="What Is Commercial Remodeling? | Swift";
const description="Learn what commercial remodeling includes, how it differs from new construction and how existing property operations affect the project.";
export const metadata:Metadata={title,description,alternates:{canonical:path},openGraph:{title,description,url:path,type:"article"}};
export default function Layout({children}:{children:React.ReactNode}){return children}