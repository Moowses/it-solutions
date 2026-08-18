import type { Metadata } from "next";
import { contactEmail, linkedInUrl, location, ownerName, siteUrl } from "@/lib/portfolio";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Karl Mosses IT Solutions | IT Business Solutions & Managed Support",
    template: "%s | Karl Mosses Banlasan",
  },
  description:
    "IT business solutions from Davao City for managed support, business systems, infrastructure, cloud tools, integrations, automation, and technology operations.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Karl Mosses IT Solutions | IT business solutions for daily operations",
    description:
      "Managed support, business systems, infrastructure, integrations, automation, and technology operations for growing teams.",
    siteName: "Karl Mosses Banlasan",
  },
  twitter: {
    card: "summary",
    title: "Karl Mosses IT Solutions | IT Business Solutions & Managed Support",
    description:
      "IT business solutions for managed support, business systems, infrastructure, integrations, automation, and technology operations from Davao City, Philippines.",
  },
  keywords: [
    "Managed IT Services Davao",
    "Smart Hands IT Support Philippines",
    "Server Support Davao",
    "IT Operations Support",
    "IT Manager Davao City",
    "Systems Administrator Philippines",
    "NOC Engineer",
    "IT Operations",
    "Network Administrator",
    "Business Systems Integration",
    "API Integration",
    "AI Automation",
    "CCTV Installation Davao",
    "Point to Point Internet Davao",
    "PTP Connectivity",
    "Business Web Applications",
    "Microsoft 365 Administrator",
    "Google Workspace Administrator",
    "Full-Stack Developer",
    "IT Consultant Davao",
  ],
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: ownerName,
      email: contactEmail,
      url: siteUrl,
      sameAs: [linkedInUrl],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Davao City",
        addressCountry: "PH",
      },
      jobTitle: "IT Manager and Systems Specialist",
      knowsAbout: [
        "Managed IT Services",
        "Smart Hands IT Support",
        "Server Support",
        "IT Operations",
        "Systems Administration",
        "NOC Operations",
        "Network Engineering",
        "Business Systems Integration",
        "API Integration",
        "AI Automation",
        "Full-Stack Development",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: `${ownerName} IT Systems and Automation Consulting`,
      url: siteUrl,
      email: contactEmail,
      areaServed: location,
      serviceType: [
        "Managed IT Services",
        "Smart Hands IT Support",
        "Server and IT Operations Support",
        "IT Operations",
        "Systems Administration",
        "Network and NOC Operations",
        "Business Systems Integration",
        "API Integration",
        "AI Automation",
        "Web Applications",
        "Technical Consulting",
      ],
    },
  ];

  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
