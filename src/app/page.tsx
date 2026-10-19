import type { Metadata } from "next";
import Link from "next/link";

import { Disclosure } from "@/components/disclosure";
import { Container } from "@/components/ui/primitives";
import { company } from "@/lib/company";
import { home, workAreas } from "@/lib/site-content";

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
        <Container className="relative py-8 sm:py-14 lg:py-16">
          <p className="eyebrow text-azure-2">{company.city}</p>
          <h1 className="mt-4 max-w-4xl text-[1.7rem] leading-[1.15] text-white sm:text-4xl lg:text-[2.75rem]">
            {company.statement}
          </h1>
          <p className="mt-4 text-[1.0625rem] text-azure-3/80">{home.audience}</p>
          <div className="mt-6 flex flex-col items-start gap-1">
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
        <Container className="grid gap-12 py-10 md:grid-cols-2 md:gap-16 md:py-14">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl">{home.situationsHeading}</h2>
              <ul className="mt-5 space-y-4">
                {home.situations.map((situation) => (
                  <li key={situation} className="text-[1.125rem] leading-relaxed text-ink">
                    {situation}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl">{home.areasHeading}</h2>
              <p className="mt-3 text-ink/65">{home.areasNote}</p>
              <div className="mt-4">
                <Disclosure items={workAreas.map((area) => ({ id: area.id, title: area.title, text: area.summary }))} />
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="text-2xl">{home.journeyHeading}</h2>
              <ol className="mt-5 space-y-5">
                {home.journey.map((step, index) => (
                  <li key={step.title}>
                    <h3 className="text-lg">
                      <span className="mr-2 text-azure-deep">{index + 1}</span>
                      {step.title}
                    </h3>
                    <p className="mt-1 text-[1.0625rem] leading-relaxed text-ink/75">{step.text}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-6 border-l-2 border-azure pl-4 text-[1.0625rem] leading-relaxed text-ink/80">{home.money}</p>
              <p className="mt-4 font-medium text-ink">{home.boundary}</p>
            </div>

            <div className="border-t border-ink/10 pt-6">
              <h2 className="text-2xl">{home.contactHeading}</h2>
              <div className="mt-4 space-y-1 text-[1.0625rem] text-ink/80">
                <p>
                  {company.city}, {company.country}
                </p>
                <Link
                  href="/what-we-take-on"
                  className="inline-flex min-h-12 items-center font-medium text-azure-deep underline underline-offset-4"
                >
                  {home.areasHeading}
                </Link>
                <a href={`mailto:${company.email}`} className="block break-all font-medium text-ink hover:text-azure-deep">
                  {company.email}
                </a>
                <p>{company.hours}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
