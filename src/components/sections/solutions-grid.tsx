import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container, IconBadge, Section, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { solutions } from "@/lib/solutions";

export function SolutionsGrid({
  eyebrow = "What we build",
  title = "Three systems, and the services that keep them working",
  lede = "Start with the one that is costing you most. They are built to work together, but none of them needs the others.",
}: {
  eyebrow?: string;
  title?: string;
  lede?: string;
}) {
  return (
    <Section tone="white" id="solutions">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} lede={lede} />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {solutions.map((solution, index) => (
            <Reveal key={solution.slug} delay={index * 70}>
              <Link
                href={`/solutions/${solution.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-ink/10 bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:border-azure/35 hover:bg-white hover:shadow-lift-lg md:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <IconBadge icon={solution.icon} />
                  <span className="rounded-full border border-ink/10 bg-white px-3 py-1 text-[0.8125rem] font-medium text-ink/60">
                    from {solution.priceFrom}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl">{solution.name}</h3>
                <p className="mt-3 flex-1 text-ink/70">{solution.pitch}</p>

                <span className="mt-6 inline-flex items-center gap-2 font-display text-[0.9375rem] font-semibold text-azure-deep">
                  See how it works
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={2}
                    aria-hidden
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
