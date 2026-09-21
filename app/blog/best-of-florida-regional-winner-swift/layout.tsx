import type { Metadata } from "next";
const path="/blog/best-of-florida-regional-winner-swift";
const title="Two-Time Best of Florida Regional Winner | Swift";
const description="Swift reports Best of Florida Regional Winner recognition in 2023 and 2025. See what that recognition should mean when comparing contractors.";
export const metadata:Metadata={title,description,alternates:{canonical:path},openGraph:{title,description,url:path,type:"article"}};
export default function Layout({children}:{children:React.ReactNode}){return children}