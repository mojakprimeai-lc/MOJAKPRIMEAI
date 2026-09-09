import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CircleDot, Smartphone } from "lucide-react";

import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { CheckList, Container, Pill, Section } from "@/components/ui/primitives";
import { caseStudies } from "@/lib/work";

export const metadata: Metadata = {
  title: "Our work — live examples of AI systems built in Kenya",
  description:
    "Selected live examples from Mojak Prime AI: Visum Park Hotel's rebuilt guest site with AI concierge and staff messaging, and Zelt Solar & Electricals' catalogue with an AI solar advisor. Open them on your phone.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Examples you can open, message and test before you pay us anything"
        lede="Anyone can promise AI. These are selected live examples — a hotel site upgrade with AI and messaging tools, and a solar retailer's catalogue with an advisor. Open them on your phone and put the assistants through their paces."
        primary={{ label: "Book a free walkthrough", href: "/contact" }}
      />

      <Section tone="paper">
        <Container>
          <div className="mb-10 flex items-start gap-4 rounded-2xl border border-azure/20 bg-azure/6 p-5">
            <Smartphone className="mt-0.5 h-5 w-5 shrink-0 text-azure-deep" strokeWidth={1.75} aria-hidden />
            <p className="text-[0.9375rem] text-ink/75">
              <span className="font-semibold text-ink">Meeting one of our agents?</span> Ask them to open either
              example on their phone and hand it to you. Everything below is live, and nothing on this page is
              a mockup.
            </p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <Reveal key={study.slug} delay={index * 80} className="min-w-0">
                <article className="card overflow-hidden">
                  {/* minmax(0, …) lets the text column shrink and wrap; without it
                      grid min-width:auto + overflow-hidden clips mid-word. */}
                  <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
                    <div className="relative aspect-16/10 min-w-0 overflow-hidden border-b border-ink/8 bg-paper-2 lg:border-b-0 lg:border-r">
                      <Image
                        src={study.shots[0].src}
                        alt={study.shots[0].alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 48vw"
                        className="object-cover object-top"
                        priority={index === 0}
                      />
                    </div>

                    <div className="min-w-0 p-6 sm:p-7 md:p-8 lg:p-9">
                      <div className="flex flex-wrap items-center gap-2">
                        <Pill>{study.sector}</Pill>
                        <Pill tone={study.status === "Live" ? "mint" : "amber"}>
                          <CircleDot className="h-3 w-3" strokeWidth={2.5} aria-hidden />
                          {study.status}
                        </Pill>
                        <Pill>{study.year}</Pill>
                      </div>

                      <h2 className="mt-5 text-balance text-2xl md:text-3xl">{study.client}</h2>
                      <p className="mt-1.5 text-[0.9375rem] text-ink/65">{study.location}</p>
                      <p className="mt-4 text-[0.9875rem] leading-relaxed text-ink/85">
                        {study.summary}
                      </p>

                      <h3 className="eyebrow mt-7 text-azure-deep">What it proves</h3>
                      <CheckList items={study.proves.slice(0, 3)} className="mt-4" />

                      <div className="mt-7 flex flex-wrap gap-3">
                        <a
                          href={study.demo.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary"
                        >
                          {study.demo.label}
                          <ArrowUpRight className="h-4 w-4" strokeWidth={2} aria-hidden />
                        </a>
                        <Link href={`/work/${study.slug}`} className="btn btn-outline">
                          Read the full build
                          <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Your business could be the next example on this page"
        body="We build the first version fast, you test it as a customer, and it goes live when you are happy with it. The walkthrough that starts it is free."
      />
    </>
  );
}
