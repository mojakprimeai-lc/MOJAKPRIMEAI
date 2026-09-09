import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Info, ShieldCheck, Wrench } from "lucide-react";

import { CtaBand } from "@/components/sections/cta-band";
import { FaqBlock } from "@/components/sections/faq-block";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/ui/reveal";
import {
  CheckList,
  Container,
  Pill,
  Section,
  SectionHeading,
  cx,
} from "@/components/ui/primitives";
import { addOns, carePlan, careTasks, pricingNotes, tiers } from "@/lib/pricing";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pricing — what an AI website, assistant or POS costs in Kenya",
  description:
    "Published pricing from Mojak Prime AI. Chat assistants from KES 20,000, a website with an AI assistant from KES 60,000, commerce and POS builds from KES 150,000. Pay-as-you-go support with no compulsory monthly fee.",
  alternates: { canonical: "/pricing" },
};

const pricingFaqs = faqs.filter((item) =>
  ["Is this affordable for a small business?", "How long does it take?", "Who owns the website, the data and the customer list?"].includes(
    item.q,
  ),
);

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Our prices, in public, before you ask"
        lede="Most agencies hide their pricing so they can read your shoes first. Here is what things actually cost, what they cost afterwards, and where the number can move."
        primary={{ label: "Get a written quote", href: "/contact" }}
        secondary={{ label: "See what we have built", href: "/work" }}
      />

      {/* Tiers */}
      <Section tone="paper">
        <Container>
          <div className="grid gap-5 lg:grid-cols-3">
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
                    <h2 className={cx("text-xl", tier.featured && "text-white")}>{tier.name}</h2>
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

                  <p
                    className={cx(
                      "mt-4 text-[0.9375rem] leading-relaxed",
                      tier.featured ? "text-azure-3/75" : "text-ink/70",
                    )}
                  >
                    {tier.summary}
                  </p>

                  <CheckList
                    items={tier.includes}
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
        </Container>
      </Section>

      {/* Add-ons */}
      <Section tone="white">
        <Container>
          <SectionHeading
            eyebrow="Add-ons"
            title="Buy these on their own, or bolt them onto any package"
            lede="Every price below is what we charge today. If your situation makes it more work, we say so before we start — never after."
          />

          <div className="mt-10 overflow-hidden rounded-2xl border border-ink/10">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">Add-on services and prices in Kenya Shillings</caption>
              <thead>
                <tr className="bg-paper-2">
                  <th scope="col" className="px-5 py-4 text-[0.8125rem] font-semibold uppercase tracking-wider text-ink/60">
                    Service
                  </th>
                  <th scope="col" className="px-5 py-4 text-[0.8125rem] font-semibold uppercase tracking-wider text-ink/60">
                    Price
                  </th>
                  <th
                    scope="col"
                    className="hidden px-5 py-4 text-[0.8125rem] font-semibold uppercase tracking-wider text-ink/60 md:table-cell"
                  >
                    What it means
                  </th>
                </tr>
              </thead>
              <tbody>
                {addOns.map((item) => (
                  <tr key={item.name} className="border-t border-ink/8 bg-white">
                    <td className="px-5 py-4 font-medium">
                      {item.name}
                      <span className="mt-1 block text-[0.875rem] font-normal text-ink/60 md:hidden">{item.note}</span>
                    </td>
                    <td className="whitespace-nowrap px-5 py-4 font-display font-semibold text-azure-deep">
                      {item.price}
                    </td>
                    <td className="hidden px-5 py-4 text-[0.9375rem] text-ink/65 md:table-cell">{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* Support */}
      <Section tone="paper-2">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <Reveal>
              <div className="card h-full p-7 md:p-9">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-azure/10 text-azure-deep">
                  <Wrench className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </span>
                <h2 className="mt-5 text-2xl">After launch: pay as you go</h2>
                <p className="mt-3 text-ink/70">
                  The default. No retainer, no subscription, no charge in the months you need nothing from us.
                </p>

                <dl className="mt-7 divide-y divide-ink/8 border-y border-ink/8">
                  {careTasks.map((item) => (
                    <div key={item.task} className="flex items-baseline justify-between gap-6 py-3.5">
                      <dt className="text-[0.9375rem] text-ink/75">{item.task}</dt>
                      <dd className="shrink-0 font-display text-[0.9375rem] font-semibold">{item.price}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="card-dark h-full p-7 text-paper md:p-9">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-mint/15 text-mint-2">
                  <ShieldCheck className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </span>
                <h2 className="mt-5 text-2xl text-white">{carePlan.name}</h2>
                <p className="mt-2 font-display text-xl font-semibold text-mint-2">{carePlan.price}</p>
                <p className="mt-3 text-azure-3/75">{carePlan.summary}</p>
                <CheckList items={carePlan.points} tone="light" className="mt-6" />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Honest notes */}
      <Section tone="white">
        <Container>
          <SectionHeading
            eyebrow="The small print, written plainly"
            title="What else you should know before signing anything"
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {pricingNotes.map((note, index) => (
              <Reveal key={note.title} delay={index * 60}>
                <div className="flex h-full gap-4 rounded-2xl border border-ink/10 bg-paper p-6">
                  <Info className="mt-0.5 h-5 w-5 shrink-0 text-azure-deep" strokeWidth={1.75} aria-hidden />
                  <div>
                    <h3 className="text-[1.125rem] font-semibold">{note.title}</h3>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink/70">{note.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <FaqBlock items={pricingFaqs} eyebrow="Pricing questions" title="Asked at almost every first meeting" tone="paper" />

      <CtaBand
        title="Get the exact number for your business"
        body="Tell us what you sell and how you sell it, and we come back with a written quote — the build price, the running costs, and what it will cost to change things later."
        primary={{ label: "Request a written quote", href: "/contact" }}
      />
    </>
  );
}
