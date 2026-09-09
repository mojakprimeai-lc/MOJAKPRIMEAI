import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";

import { Assistant } from "@/components/assistant/assistant";
import { MobileActionBar } from "@/components/mobile-action-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { company, siteUrl } from "@/lib/company";

import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.legalName} — AI websites, chat assistants and smart POS in Kenya`,
    template: `%s — ${company.name}`,
  },
  description:
    "Mojak Prime AI builds AI-powered websites, WhatsApp and social chat assistants, and AI point-of-sale systems for businesses in Nairobi and across Kenya. Setup from KES 20,000, no forced monthly fees.",
  keywords: [
    "AI solutions Kenya",
    "AI website Nairobi",
    "WhatsApp chatbot Kenya",
    "AI POS system Kenya",
    "point of sale Nairobi",
    "inventory management software Kenya",
    "business automation Nairobi",
    "M-Pesa integration website",
    "website design Nairobi CBD",
    "AI chatbot for business Kenya",
    "SEO services Nairobi",
    "social media automation Kenya",
    "SME software Kenya",
  ],
  authors: [{ name: company.legalName }],
  creator: company.legalName,
  publisher: company.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: siteUrl,
    siteName: company.legalName,
    title: `${company.legalName} — AI systems that run parts of your business for you`,
    description:
      "AI-powered websites, chat assistants for WhatsApp and social media, and smart point-of-sale systems built for Kenyan businesses. See two live builds.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.legalName} — AI for Kenyan businesses`,
    description:
      "AI websites, WhatsApp assistants and smart POS. Built in Nairobi, priced for SMEs, with no forced monthly fees.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#05070e" },
  ],
  width: "device-width",
  initialScale: 1,
};

const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: company.legalName,
  alternateName: company.name,
  description: company.descriptor,
  url: siteUrl,
  email: company.email,
  slogan: company.tagline,
  areaServed: { "@type": "Country", name: "Kenya" },
  address: {
    "@type": "PostalAddress",
    addressLocality: company.city,
    addressCountry: "KE",
  },
  knowsAbout: [
    "Artificial intelligence for small business",
    "Point of sale and inventory systems",
    "WhatsApp business automation",
    "Website design and search optimisation",
    "M-Pesa payment integration",
  ],
  makesOffer: [
    { "@type": "Offer", name: "AI-powered websites", priceCurrency: "KES", price: "50000" },
    { "@type": "Offer", name: "AI chat assistants", priceCurrency: "KES", price: "10000" },
    { "@type": "Offer", name: "AI point of sale", priceCurrency: "KES", price: "150000" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: the inline script below adds `js` before paint so
    // scroll reveals stay visible when JavaScript is unavailable. That mutates
    // <html className> ahead of React, which is intentional (same pattern as theme scripts).
    <html lang="en-KE" className={`${sora.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: `document.documentElement.classList.add("js")` }}
        />
      </head>
      <body className="min-h-dvh antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema) }}
        />
        <SiteHeader />
        <main id="main" className="pt-[var(--header-h)]">
          {children}
        </main>
        <SiteFooter />
        {/* Space so the fixed phone bar never covers the footer's last line */}
        <div aria-hidden className="h-[4.75rem] bg-ink md:hidden" />
        <MobileActionBar />
        <Assistant />
      </body>
    </html>
  );
}
