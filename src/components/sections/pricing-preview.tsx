import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

import { CheckList, Container, Pill, Section, SectionHeading, cx } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { tiers } from "@/lib/pricing";

export function PricingPreview() {
  return (
    <Section tone="paper-2" id="pricing">
      <Container>
        <SectionHeading
          eyebrow="Straight pricing"
          title="Published prices, because hiding them wastes everybody's time"
          lede="These are real starting figures for a normal-sized business. You get the exact number in writing before anyone starts work."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <Reveal key={tier.id} delay={index * 80}>
              <article
                className={cx(
                  "flex h-full flex-col rounded-3xl p-6 md:p-8",
                  tier.featured
                    ? "bg-ink text-paper shadow-lift-lg ring-2 ring-azure/40"
                    : "border border-ink/10 bg-white",
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className={cx("text-xl", tier.featured && "text-white")}>{tier.name}</h3>
                  {tier.featured ? <Pill tone="light">Most chosen</Pill> : null}
                </div>

                <p className={cx("mt-2 text-[0.9375rem]", tier.featured ? "text-azure-3/60" : "text-ink/55")}>
                  {tier.audience}
                </p>

                <p className="mt-6">
                  <span
                    className={cx(
                      "font-display text-3xl font-semibold tracking-tight md:text-4xl",
                      tier.featured ? "text-white" : "text-ink",
                    )}
                  >
                    {tier.from}
                  </span>
                  <span className={cx("ml-2 text-[0.875rem]", tier.featured ? "text-azure-3/55" : "text-ink/50")}>
                    {tier.cadence}
                  </span>
                </p>

                <p className={cx("mt-4 text-[0.9375rem] leading-relaxed", tier.featured ? "text-azure-3/75" : "text-ink/70")}>
                  {tier.summary}
                </p>

                <CheckList
                  items={tier.includes.slice(0, 4)}
                  tone={tier.featured ? "light" : "dark"}
                  className="mt-6 flex-1"
                />

                <Link
                  href={tier.cta.href}
                  className={cx("btn mt-7 w-full", tier.featured ? "btn-primary" : "btn-outline")}
                >
                  {tier.cta.label}
                  <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-8 flex flex-col items-start gap-5 rounded-2xl border border-mint/25 bg-mint/8 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-4">
              <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-mint" strokeWidth={1.75} aria-hidden />
              <div>
                <p className="font-display text-[1.0625rem] font-semibold">No compulsory monthly fee</p>
                <p className="mt-1 text-[0.9375rem] text-ink/70">
                  After launch you pay only when work happens — from KES 500 for a price change. An optional Care
                  Plan exists if you would rather we handled everything.
                </p>
              </div>
            </div>
            <Link href="/pricing" className="btn btn-dark shrink-0">
              Full price list
            </Link>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
