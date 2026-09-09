import Link from "next/link";
import { ArrowRight, Bell, Boxes, CheckCircle2, PlayCircle, Sparkles } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { credibility } from "@/lib/company";

const trust = [
  "Two client builds you can open today",
  "No forced monthly fees",
  "Nairobi CBD, and countrywide",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-field" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-48 h-[38rem] w-[38rem] animate-drift rounded-full bg-azure/18 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-56 -left-40 h-[32rem] w-[32rem] rounded-full bg-mint/10 blur-[130px]"
      />

      <Container className="relative py-16 md:py-24 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow tone="light">Nairobi · AI for everyday business</Eyebrow>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="mt-6 text-[2.5rem] leading-[1.06] text-white sm:text-5xl lg:text-[3.75rem]">
                AI that answers your customers, counts your stock, and shows you{" "}
                <span className="bg-linear-to-r from-azure-2 via-azure-3 to-mint-2 bg-clip-text text-transparent">
                  where the money goes
                </span>
                .
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="lede mt-6 max-w-xl text-azure-3/75">
                We build the websites, chat assistants and point-of-sale systems that Kenyan businesses
                actually need. Set up once, working every hour after that — including the hours you are
                closed.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="btn btn-primary">
                  Book a free walkthrough
                  <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
                </Link>
                <Link href="/work" className="btn btn-on-dark">
                  <PlayCircle className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                  See two live builds
                </Link>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2.5">
                {trust.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[0.9375rem] text-azure-3/70">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-mint" strokeWidth={2} aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative">
            <ProofPanel />
          </Reveal>
        </div>

        <Reveal delay={120}>
          <dl className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-azure-3/12 bg-azure-3/10 sm:grid-cols-2 lg:grid-cols-4">
            {credibility.map((item) => (
              <div key={item.label} className="bg-ink px-5 py-6">
                <dt className="font-display text-2xl font-semibold text-white md:text-[1.75rem]">{item.value}</dt>
                <dd className="mt-1.5">
                  <span className="block text-[0.9375rem] font-medium text-azure-2">{item.label}</span>
                  <span className="mt-1 block text-[0.875rem] leading-relaxed text-azure-3/55">{item.detail}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}

/**
 * A depiction of the two things we sell most: an assistant answering a real
 * customer question, and a till that noticed something before the owner did.
 */
function ProofPanel() {
  return (
    <div className="relative mx-auto max-w-md lg:max-w-none">
      <div className="card-dark overflow-hidden shadow-lift-lg">
        <div className="flex items-center gap-2.5 border-b border-azure-3/12 bg-white/4 px-4 py-3">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-azure/18">
            <Sparkles className="h-3.5 w-3.5 text-azure-2" strokeWidth={2} aria-hidden />
          </span>
          <div>
            <p className="font-display text-[0.8125rem] font-semibold text-white">Your business assistant</p>
            <p className="flex items-center gap-1.5 text-[0.6875rem] text-mint-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-mint" aria-hidden />
              Online — 9:42 PM, shop closed
            </p>
          </div>
        </div>

        <div className="space-y-3 px-4 py-5">
          <p className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-azure px-3.5 py-2.5 text-[0.875rem] leading-relaxed text-white">
            Do you have the 100W solar floodlight in stock, and do you deliver to Kitengela?
          </p>
          <p className="max-w-[92%] rounded-2xl rounded-bl-md border border-azure-3/12 bg-white/5 px-3.5 py-2.5 text-[0.875rem] leading-relaxed text-azure-3/90">
            Yes — we have 6 in stock at KES 7,500, and we deliver to Kitengela the next working day.
            Shall I hold one under your name and have the shop confirm in the morning?
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {["Hold one for me", "What is the warranty?"].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-azure-3/18 px-2.5 py-1 text-[0.75rem] text-azure-3/70"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="card-dark mt-4 p-4 shadow-lift-lg sm:absolute sm:-bottom-10 sm:-left-6 sm:mt-0 sm:w-[19rem] lg:-left-10">
        <div className="flex items-start gap-3">
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber/15">
            <Bell className="h-4 w-4 text-amber" strokeWidth={2} aria-hidden />
          </span>
          <div className="min-w-0">
            <p className="font-display text-[0.875rem] font-semibold text-white">Restock before Saturday</p>
            <p className="mt-1 text-[0.8125rem] leading-relaxed text-azure-3/65">
              100W floodlights are moving 4× faster than last month. At this rate you run out in 3 days.
            </p>
            <p className="mt-2.5 inline-flex items-center gap-1.5 text-[0.75rem] font-medium text-mint-2">
              <Boxes className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
              Suggested order: 24 units
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
