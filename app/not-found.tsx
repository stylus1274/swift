import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Page Not Found | Swift Construction & Painting",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main>
      <SiteHeader />
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "120px 24px", textAlign: "center" }}>
        <p className="eyebrow">404</p>
        <h1>That Page Could Not Be Found.</h1>
        <p>The page may have moved, or the URL may be incorrect.</p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginTop: 32 }}>
          <Link className="button button-dark" href="/">Return Home</Link>
          <Link className="button button-outline" href="/#services">View Services</Link>
        </div>
      </section>
    </main>
  );
}
