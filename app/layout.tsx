import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://rinext-digital.vercel.app"),
  title: {
    default: "RINEXT DIGITAL | Next Digital World — RDC (Uvira)",
    template: "%s | RINEXT DIGITAL",
  },
  description:
    "Fondée par Junior M. Richard. Développement web, référencement SEO, audit systèmes & réseaux, et vente directe avec expédition de matériel informatique et réseau à Uvira (RDC).",
  keywords: [
    "Rinext Digital",
    "Next Digital World",
    "Junior M. Richard",
    "Développement web Uvira RDC",
    "Création site web organisation église",
    "Vente matériel informatique Uvira Burundi",
    "Audit réseau et systèmes RDC",
    "SEO référencement RDC",
  ],
  icons: {
    icon: "/images/logo-rinext.png",
    shortcut: "/images/logo-rinext.png",
    apple: "/images/logo-rinext.png",
  },
  verification: {
    google: "8ai-C6911h3toa6wY0Dq3kgNx_Hgd_nFlkOlU_Yr4g8",
  },
  openGraph: {
    title: "RINEXT DIGITAL — Next Digital World",
    description:
      "Développement Web & Design, SEO, Audit Systèmes & Réseau, et Vente directe de matériel IT (Uvira RDC).",
    url: "https://rinext-digital.vercel.app",
    siteName: "RINEXT DIGITAL",
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "RINEXT DIGITAL",
    alternateName: "Next Digital World",
    url: "https://rinext-digital.vercel.app",
    logo: "https://rinext-digital.vercel.app/images/logo-rinext.png",
    founder: {
      "@type": "Person",
      name: "Junior M. Richard",
      jobTitle: "Coordinateur & CEO",
      url: "https://juniormrichard.netlify.app",
      sameAs: ["https://juniormrichard.netlify.app"],
    },
    telephone: "+243974451186",
    areaServed: [
      {
        "@type": "City",
        name: "Uvira",
        containedInPlace: {
          "@type": "Country",
          name: "République Démocratique du Congo",
        },
      },
    ],
    knowsAbout: [
      "AHAA RDC ahaa-rdc.org",
      "Développement Web et Design Graphique",
      "SEO et Référencement",
      "Audit Systèmes et Réseau",
      "Vente de matériel informatique et réseau",
    ],
  };

  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 font-sans antialiased selection:bg-[#0D64BA]/15 selection:text-[#0D64BA]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}