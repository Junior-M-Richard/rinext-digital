import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rinextdigital.com"),
  title: "RINEXT DIGITAL | Next Digital World — RDC (Uvira)",
  description:
    "Fondée par Junior M. Richard. Développement web et design graphique, référencement SEO, audit systèmes & réseaux, et vente directe avec expédition de matériel informatique entre le Burundi et Uvira (RDC).",
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
  openGraph: {
    title: "RINEXT DIGITAL — Next Digital World",
    description:
      "Développement Web & Design, SEO, Audit Systèmes & Réseau, et Vente directe de matériel IT (Uvira RDC).",
    url: "https://rinextdigital.com",
    siteName: "RINEXT DIGITAL",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RINEXT DIGITAL — Next Digital World",
    description:
      "Solutions web, SEO, audit réseau et matériel informatique en RDC (Uvira).",
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
    url: "https://rinextdigital.com",
    logo: "https://rinextdigital.com/images/logo-rinext.png",
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
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services RINEXT DIGITAL",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Développement & Web Design",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO & Référencement",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Vente & Expédition de Matériel Informatique et Réseau",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Audit Systèmes & Réseau",
          },
        },
      ],
    },
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
      <body className="font-sans antialiased selection:bg-[#0D64BA]/15 selection:text-[#0D64BA]">
        {children}
      </body>
    </html>
  );
}