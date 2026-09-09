import type { Metadata } from "next";

import { CapabilityMarquee } from "@/components/sections/capability-marquee";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqBlock } from "@/components/sections/faq-block";
import { Hero } from "@/components/sections/hero";
import { Industries } from "@/components/sections/industries";
import { Losses } from "@/components/sections/losses";
import { PosIntelligence } from "@/components/sections/pos-intelligence";
import { PricingPreview } from "@/components/sections/pricing-preview";
import { Principles } from "@/components/sections/principles";
import { Process } from "@/components/sections/process";
import { Proof } from "@/components/sections/proof";
import { SolutionsGrid } from "@/components/sections/solutions-grid";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "AI websites, WhatsApp assistants and smart POS for Kenyan businesses",
  description:
    "Mojak Prime AI builds AI-powered websites, chat assistants for WhatsApp, Facebook and Instagram, and AI point-of-sale systems with stock alerts and profit insights. Nairobi-based, from KES 20,000. No forced Mojak labour fees.",
  alternates: { canonical: "/" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <CapabilityMarquee />
      <Losses />
      <SolutionsGrid />
      <Proof />
      <PosIntelligence />
      <Process />
      <PricingPreview />
      <Industries />
      <Principles />
      <FaqBlock items={faqs} />
      <CtaBand />
    </>
  );
}
