import type { Metadata } from "next";
const path="/blog/swift-no-deposit-invoice-on-completion";
const title="No Deposit: How Swift Prices & Invoices Projects";
const description="Swift says it requires no up-front deposit and invoices on completion. See how its estimate, scheduling and payment process works.";
export const metadata:Metadata={title,description,alternates:{canonical:path},openGraph:{title,description,url:path,type:"article"}};
export default function Layout({children}:{children:React.ReactNode}){return children}