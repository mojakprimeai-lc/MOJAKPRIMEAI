import type { Metadata } from "next";
import Link from "next/link";

import { CapabilityCard } from "@/components/capability-card";
import { Container } from "@/components/ui/primitives";
import { company } from "@/lib/company";
import { engagementSteps, home, workAreas } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Practical digital systems for businesses in Kenya",
  description: company.statement,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-paper">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-field" />
        <Container className="relative py-10 sm:py-16 lg:py-20">
          <div className="max-w-4xl">
            <p className="eyebrow text-azure-2">{home.eyebrow}</p>
            <h1 className="mt-5 text-[2rem] leading-[1.1] text-white sm:text-5xl lg:text-[3.5rem]">
              {home.headline}
            </h1>
            <p className="lede mt-5 max-w-2xl text-azure-3/80">{home.lede}</p>
          </div>
          <div className="mt-8 flex flex-col items-start gap-1">
            <Link href="/start" className="btn btn-primary">
              {home.actionLabel}
            </Link>
            <Link
              href="/how-we-work"
              className="inline-flex min-h-12 items-center text-[0.9375rem] font-medium text-azure-2 underline decoration-azure-2/40 underline-offset-4 hover:text-white"
            >
              {home.secondaryLabel}
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-12 md:py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl">{home.signsHeading}</h2>
          </div>
          <ul className="mt-7 grid gap-4 lg:grid-cols-3">
            {home.signs.map((sign) => (
              <li key={sign} className="rounded-2xl border border-ink/10 bg-white p-5 text-[1.0625rem] leading-relaxed text-balance text-ink/80">
                {sign}
              </li>
            ))}
          </ul>

          <div className="mt-14 border-t border-ink/10 pt-10">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <h2 className="text-3xl sm:text-4xl">{home.areasHeading}</h2>
                <p className="mt-3 text-[1.0625rem] leading-relaxed text-ink/70">{home.areasLede}</p>
              </div>
              <Link
                href="/what-we-take-on"
                className="inline-flex min-h-12 items-center font-medium text-azure-deep underline underline-offset-4"
              >
                Explore all five areas
              </Link>
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {workAreas.map((area) => (
                <Link key={area.id} href={`/what-we-take-on#${area.id}`} className="rounded-2xl focus-visible:outline-none">
                  <CapabilityCard area={area} className="h-full" />
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-14 border-t border-ink/10 pt-10">
            <h2 className="text-3xl sm:text-4xl">{home.journeyHeading}</h2>
            <ol className="mt-7 grid gap-4 sm:grid-cols-2 2xl:grid-cols-5">
              {engagementSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="border-l-2 border-azure px-4 py-1 max-lg:border-y-0 max-lg:border-r-0 lg:flex lg:h-full lg:flex-col lg:rounded-2xl lg:border lg:border-ink/10 lg:bg-white lg:p-5"
                >
                  <p className="font-display text-[0.8125rem] font-semibold tracking-wide text-azure-deep">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-xl leading-snug">{step.title}</h3>
                  <p className="mt-2 text-[1.0625rem] leading-relaxed text-ink/75">{step.text}</p>
                </li>
              ))}
            </ol>
            <aside className="mt-8 rounded-2xl bg-paper-2 p-6 lg:grid lg:grid-cols-2 lg:gap-10">
              <p className="text-[1.0625rem] leading-relaxed text-ink/80">{home.price}</p>
              <p className="mt-5 border-t border-ink/10 pt-5 font-medium text-ink lg:mt-0 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
                {home.boundary}
              </p>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
