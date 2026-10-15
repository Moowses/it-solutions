import type { Metadata } from "next";
import { ScrollMotion } from "@/components/ScrollMotion";
import { ownerName, siteUrl } from "@/lib/portfolio";
import "./globals.css";

const title = "Karl Mosses | IT Leadership, Development & Business Solutions";
const description = "Karl Mosses Banlasan is an IT Head, Developer, and IT Solutions Consultant in Davao City, Philippines. Reliable systems, purposeful software, and practical automation for your business.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s | Karl Mosses" },
  description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_PH", url: siteUrl, title, description, siteName: "Karl Mosses" },
  twitter: { card: "summary_large_image", title, description },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // Only identity, role and location confirmed in the brief. No invented company or credentials.
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: ownerName,
    alternateName: "Karl Mosses",
    url: siteUrl,
    jobTitle: ["IT Head", "Developer", "IT Solutions Consultant"],
    address: { "@type": "PostalAddress", addressLocality: "Davao City", addressCountry: "PH" },
  };

  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        {children}
        <ScrollMotion />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
