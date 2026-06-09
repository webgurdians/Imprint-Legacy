import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Imprint Legacy | B2B Corporate Legacy & Autobiography Publishing",
  description:
    "We transform the history, triumphs, and defining moments of corporate dynasties and industry-defining founders into premium, physical books. Commissions start at ₹75,000.",
  keywords: [
    "Corporate legacy publishing",
    "Founder autobiography",
    "Business history book",
    "Family business archive",
    "High-ticket publishing commission",
    "Archival corporate memoirs",
  ],
  authors: [{ name: "Imprint Legacy" }],
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.imprintlegacy.in/#organization",
      "name": "Imprint Legacy",
      "url": "https://www.imprintlegacy.in",
      "logo": "https://www.imprintlegacy.in/logo.png",
      "description": "India's premier Corporate Legacy Publisher. We transform the history and triumphs of industry-defining companies into premium, physical books.",
      "founder": {
        "@type": "Person",
        "name": "Bijoy Sen",
        "alternateName": "Neel",
        "jobTitle": "Creative Director"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Strategy & Commissions",
        "availableLanguage": ["English", "Hindi"]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.imprintlegacy.in/#website",
      "url": "https://www.imprintlegacy.in",
      "name": "Imprint Legacy",
      "publisher": {
        "@id": "https://www.imprintlegacy.in/#organization"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent selection:text-background">
        <Navbar />
        <div className="flex-grow flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
