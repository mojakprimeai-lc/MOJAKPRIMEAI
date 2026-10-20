import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { company, siteUrl } from "@/lib/company";
import { workAreas } from "@/lib/site-content";

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
    default: `${company.name} — practical digital systems for businesses in Kenya`,
    template: `%s — ${company.name}`,
  },
  description: company.statement,
  keywords: ["digital systems Kenya", "business systems Nairobi", company.name],
  authors: [{ name: company.legalName }],
  creator: company.legalName,
  publisher: company.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: siteUrl,
    siteName: company.name,
    title: `${company.name} — practical digital systems`,
    description: company.statement,
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} — practical digital systems`,
    description: company.statement,
  },
  icons: {
    icon: [{ url: "/mojak-head.png", type: "image/png" }],
    apple: "/mojak-head.png",
    shortcut: "/mojak-head.png",
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
  description: company.statement,
  url: siteUrl,
  email: company.email,
  sameAs: company.socials.map((social) => social.url),
  areaServed: { "@type": "Country", name: company.country },
  address: {
    "@type": "PostalAddress",
    addressLocality: company.city,
    addressCountry: "KE",
  },
  knowsAbout: workAreas.map((area) => area.title),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-KE" data-scroll-behavior="smooth" className={`${sora.variable} ${inter.variable}`}>
      <body className="min-h-dvh antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema) }} />
        <SiteHeader />
        <main id="main" className="page-enter pt-[var(--header-h)]">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
