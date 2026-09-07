import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://swiftconstructionandpainting.com"),
  title: {
    default: "Swift Construction & Painting | Florida Nature Coast Contractor",
    template: "%s",
  },
  description: "Swift Construction and Painting serves Hernando, Citrus and Pasco Counties, Florida with painting, remodeling and new construction services.",
  applicationName: "Swift Construction & Painting",
  authors: [{ name: "Swift Construction & Painting" }],
  creator: "Swift Construction & Painting",
  publisher: "Swift Construction & Painting",
  alternates: { canonical: "/" },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": "https://swiftconstructionandpainting.com/#business",
    name: "Swift Construction & Painting, LLC",
    url: "https://swiftconstructionandpainting.com",
    logo: "https://swiftconstructionandpainting.com/assets/swift-logo.png",
    image: "https://swiftconstructionandpainting.com/assets/swift-logo.png",
    telephone: "+1-352-701-7458",
    foundingDate: "2003",
    areaServed: [
      { "@type": "AdministrativeArea", name: "Hernando County, Florida" },
      { "@type": "AdministrativeArea", name: "Citrus County, Florida" },
      { "@type": "AdministrativeArea", name: "Pasco County, Florida" },
    ],
    knowsAbout: [
      "Residential painting",
      "Residential remodeling",
      "New home construction",
      "Commercial construction",
      "Flooring installation",
      "Window and door installation",
      "Pressure washing",
    ],
  };

  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </body>
    </html>
  );
}
