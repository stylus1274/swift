import type { Metadata } from "next";
import "./globals.css";
import "./mega-menu.css";

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
  const siteSchema = [
    {
      "@context": "https://schema.org",
      "@type": "GeneralContractor",
      "@id": "https://swiftconstructionandpainting.com/#business",
      name: "Swift Construction & Painting, LLC",
      url: "https://swiftconstructionandpainting.com",
      logo: "https://swiftconstructionandpainting.com/assets/swift-logo.png",
      image: "https://swiftconstructionandpainting.com/assets/swift-logo.png",
      telephone: "+1-352-701-7458",
      email: "swiftconstruction.william@gmail.com",
      foundingDate: "2003",
      address: {
        "@type": "PostalAddress",
        streetAddress: "16215 Forzando Ave",
        addressLocality: "Brooksville",
        addressRegion: "FL",
        postalCode: "34604",
        addressCountry: "US",
      },
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
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://swiftconstructionandpainting.com/#website",
      name: "Swift Construction & Painting",
      url: "https://swiftconstructionandpainting.com",
      publisher: { "@id": "https://swiftconstructionandpainting.com/#business" },
    },
  ];

  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
      </body>
    </html>
  );
}
