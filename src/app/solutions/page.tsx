import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/page-hero";
import { Process } from "@/components/sections/process";
import { Reveal } from "@/components/ui/reveal";
import { CheckList, Container, IconBadge, Section } from "@/components/ui/primitives";
import { solutions } from "@/lib/solutions";

export const metadata: Metadata = {
  title: "Solutions — AI websites, chat assistants, POS and growth services",
  description:
    "The four things Mojak Prime AI builds for Kenyan businesses: AI-powered websites, chat assistants for WhatsApp and social media, AI point of sale with stock intelligence, and the growth services around them.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Everything we build, and exactly what each one fixes"
        lede="Four offerings. Start with whichever is costing you the most money today — they work together, but none of them depends on the others."
        primary={{ label: "Book a free walkthrough", href: "/contact" }}
        secondary={{ label: "See live examples", href: "/work" }}
      />

      <Section tone="paper">
        <Container>
          <div className="space-y-6">
            {solutions.map((solution, index) => (
              <Reveal key={solution.slug} delay={index * 60}>
                <article className="card overflow-hidden">
                  <div className="grid gap-8 p-6 md:grid-cols-[1.1fr_0.9fr] md:gap-12 md:p-9">
                    <div>
                      <div className="flex items-center gap-4">
                        <IconBadge icon={solution.icon} />
                        <div>
                          <h2 className="text-2xl md:text-[1.75rem]">{solution.name}</h2>
                          <p className="mt-1 text-[0.9375rem] text-azure-deep">
                            from {solution.priceFrom} · {solution.priceNote}
                          </p>
                        </div>
                      </div>

                      <p className="mt-6 text-lg text-ink/75">{solution.intro}</p>

                      <div className="mt-7 flex flex-wrap gap-3">
                        <Link href={`/solutions/${solution.slug}`} className="btn btn-dark">
                          Full detail
                          <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
                        </Link>
                        <Link href="/contact" className="btn btn-outline">
                          Ask about this
                        </Link>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-paper-2 p-6">
                      <h3 className="eyebrow text-azure-deep">What you get</h3>
                      <CheckList items={solution.included.slice(0, 5)} className="mt-5" />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Process />
      <CtaBand />
    </>
  );
}
