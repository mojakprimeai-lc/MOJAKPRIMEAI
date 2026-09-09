import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, MoveRight, TriangleAlert } from "lucide-react";

import { CtaBand } from "@/components/sections/cta-band";
import { FaqBlock } from "@/components/sections/faq-block";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/ui/reveal";
import {
  CheckList,
  Container,
  IconBadge,
  Section,
  SectionHeading,
} from "@/components/ui/primitives";
import { getSolution, solutions } from "@/lib/solutions";
import { getCaseStudy } from "@/lib/work";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return { title: "Not found" };

  return {
    title: solution.name,
    description: `${solution.pitch} ${solution.priceNote} Built in Nairobi by Mojak Prime AI for businesses across Kenya.`,
    alternates: { canonical: `/solutions/${solution.slug}` },
  };
}

export default async function SolutionPage({ params }: Params) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  const related = solution.relatedWork ? getCaseStudy(solution.relatedWork) : undefined;
  const others = solutions.filter((entry) => entry.slug !== solution.slug);

  return (
    <>
      <PageHero
        eyebrow={solution.name}
        title={solution.headline}
        lede={solution.intro}
        icon={solution.icon}
        meta={[`From ${solution.priceFrom}`, solution.priceNote]}
        primary={{ label: "Book a free walkthrough", href: "/contact" }}
        secondary={related ? { label: `See it working: ${related.client}`, href: `/work/${related.slug}` } : undefined}
      />

      {/* What it costs you today */}
      <Section tone="paper">
        <Container>
          <SectionHeading
            eyebrow="The problem"
            title="What this is costing you right now"
            lede="Before the solution, the honest version of the situation most businesses are in."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {solution.costsToday.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <article className="card h-full p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber/12 text-amber">
                    <TriangleAlert className="h-[1.125rem] w-[1.125rem]" strokeWidth={1.75} aria-hidden />
                  </span>
                  <h3 className="mt-5 text-xl">{item.title}</h3>
                  <p className="mt-3 text-ink/70">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Capabilities */}
      <Section tone="white">
        <Container>
          <SectionHeading
            eyebrow="What it does"
            title="The parts that do the work"
            lede="Every one of these exists because a business owner asked for it, not because it demos well."
          />

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solution.features.map((feature, index) => (
              <Reveal as="li" key={feature.title} delay={(index % 3) * 60}>
                <div className="h-full rounded-2xl border border-ink/8 bg-paper p-6 transition-colors hover:border-azure/25">
                  <IconBadge icon={feature.icon} size="sm" />
                  <h3 className="mt-4 text-[1.125rem] font-semibold">{feature.title}</h3>
                  <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink/65">{feature.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Before / after */}
      <Section tone="ink">
        <Container>
          <SectionHeading
            tone="light"
            eyebrow="The change"
            title="What is different the week after we launch"
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {solution.outcomes.map((outcome, index) => (
              <Reveal key={outcome.before} delay={index * 60}>
                <div className="card-dark flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:gap-5 md:p-6">
                  <p className="flex-1 text-[0.9375rem] text-azure-3/50 line-through decoration-azure-3/30">
                    {outcome.before}
                  </p>
                  <MoveRight className="h-5 w-5 shrink-0 text-azure-2" strokeWidth={1.75} aria-hidden />
                  <p className="flex-1 text-[1.0625rem] font-medium text-white">{outcome.after}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Included + steps */}
      <Section tone="paper">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading eyebrow="What is included" title="In the price, as standard" />
              <CheckList items={solution.included} className="mt-8" />

              <div className="mt-8 rounded-2xl border border-ink/10 bg-white p-6">
                <p className="font-display text-[1.0625rem] font-semibold">
                  From {solution.priceFrom}
                </p>
                <p className="mt-2 text-[0.9375rem] text-ink/65">{solution.priceNote}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link href="/pricing" className="btn btn-outline">
                    Full price list
                  </Link>
                  <Link href="/contact" className="btn btn-dark">
                    Get a written quote
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <SectionHeading eyebrow="How we do it" title="From first meeting to launch" />
              <ol className="mt-8 space-y-6">
                {solution.steps.map((step, index) => (
                  <Reveal as="li" key={step.title} delay={index * 60}>
                    <div className="flex gap-5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink font-display text-[0.9375rem] font-semibold text-paper">
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="text-[1.125rem] font-semibold">{step.title}</h3>
                        <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink/65">{step.body}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </Section>

      {/* Related work */}
      {related ? (
        <Section tone="white">
          <Container>
            <div className="card overflow-hidden">
              <div className="grid gap-8 p-7 md:grid-cols-[1fr_auto] md:items-center md:gap-12 md:p-10">
                <div>
                  <p className="eyebrow text-azure-deep">See it working</p>
                  <h2 className="mt-4 text-2xl md:text-3xl">{related.client}</h2>
                  <p className="mt-3 max-w-xl text-ink/70">{related.summary}</p>
                </div>
                <div className="flex flex-col gap-3">
                  <a
                    href={related.demo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    {related.demo.label}
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2} aria-hidden />
                  </a>
                  <Link href={`/work/${related.slug}`} className="btn btn-outline">
                    Read the build
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      ) : null}

      <FaqBlock
        items={solution.faqs}
        eyebrow="Questions"
        title={`What owners ask about ${solution.name.toLowerCase()}`}
        tone="paper-2"
      />

      {/* Other solutions */}
      <Section tone="white">
        <Container>
          <SectionHeading eyebrow="Also available" title="The rest of what we build" />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={`/solutions/${other.slug}`}
                className="group flex items-start gap-4 rounded-2xl border border-ink/10 bg-paper p-5 transition-colors hover:border-azure/30 hover:bg-white"
              >
                <IconBadge icon={other.icon} size="sm" />
                <span>
                  <span className="block font-display text-[1.0625rem] font-semibold">{other.name}</span>
                  <span className="mt-1 block text-[0.875rem] text-ink/60">from {other.priceFrom}</span>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-[0.875rem] font-medium text-azure-deep">
                    Read more
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                      strokeWidth={2}
                      aria-hidden
                    />
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
