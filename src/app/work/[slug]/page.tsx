import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Hammer, Layers, Timer } from "lucide-react";

import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/ui/reveal";
import {
  CheckList,
  Container,
  Pill,
  Section,
  SectionHeading,
  StatBlock,
  cx,
} from "@/components/ui/primitives";
import { caseStudies, getCaseStudy } from "@/lib/work";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Not found" };

  return {
    title: `${study.client} — ${study.sector} build`,
    description: study.summary,
    alternates: { canonical: `/work/${study.slug}` },
  };
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const other = caseStudies.find((entry) => entry.slug !== study.slug);

  return (
    <>
      <PageHero
        eyebrow={`${study.sector} · ${study.location}`}
        title={study.client}
        lede={study.summary}
        meta={[study.status, study.year, ...study.stack.slice(0, 2)]}
        secondary={{ label: study.demo.label, href: study.demo.href, external: true }}
        primary={{ label: "Build me something like this", href: "/contact" }}
      >
        <Reveal delay={140}>
          <dl className="mt-14 grid gap-8 border-t border-azure-3/12 pt-8 sm:grid-cols-3">
            {study.metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="sr-only">{metric.label}</dt>
                <dd>
                  <StatBlock value={metric.value} label={metric.label} tone="light" />
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </PageHero>

      {/* The brief */}
      <Section tone="paper">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <SectionHeading eyebrow="The brief" title="Where the business was starting from" />
            <div>
              <p className="lede text-ink/75">{study.brief}</p>

              <div className="mt-10 space-y-5">
                {study.challenge.map((item, index) => (
                  <Reveal key={item.title} delay={index * 60}>
                    <div className="rounded-2xl border border-ink/10 bg-white p-5 md:p-6">
                      <h3 className="text-[1.125rem] font-semibold">{item.title}</h3>
                      <p className="mt-2 text-ink/70">{item.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* What we built */}
      <Section tone="white">
        <Container>
          <SectionHeading
            eyebrow="What we built"
            title="The system, part by part"
            lede="Everything here is running. Nothing on this page is a concept sketch."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {study.built.map((item, index) => (
              <Reveal key={item.title} delay={index * 60}>
                <article className="h-full rounded-2xl border border-ink/10 bg-paper p-6 md:p-7">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-azure/10 text-azure-deep">
                    <Hammer className="h-[1.125rem] w-[1.125rem]" strokeWidth={1.75} aria-hidden />
                  </span>
                  <h3 className="mt-5 text-xl">{item.title}</h3>
                  <p className="mt-3 text-ink/70">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Screens */}
      <Section tone="ink">
        <Container>
          <SectionHeading tone="light" eyebrow="On the screen" title="How it looks to a customer" />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {study.shots.map((shot, index) => (
              <Reveal key={shot.src} delay={index * 70}>
                <figure className="card-dark overflow-hidden">
                  <div
                    className={cx(
                      "relative overflow-hidden bg-ink-2",
                      shot.device === "mobile" ? "aspect-9/19" : "aspect-16/10",
                    )}
                  >
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <figcaption className="border-t border-azure-3/12 px-5 py-4 text-[0.875rem] leading-relaxed text-azure-3/65">
                    {shot.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-azure-3/15 bg-white/5 p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-azure-3/75">{study.demo.note}</p>
            <a
              href={study.demo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary shrink-0"
            >
              {study.demo.label}
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} aria-hidden />
            </a>
          </div>
        </Container>
      </Section>

      {/* Proves + in progress + stack */}
      <Section tone="paper">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading eyebrow="Why it matters to you" title="What this build proves we can do" />
              <CheckList items={study.proves} className="mt-8" />
            </div>

            <div className="space-y-8">
              {study.inProgress && study.inProgress.length > 0 ? (
                <div className="rounded-2xl border border-amber/30 bg-amber/8 p-6">
                  <p className="flex items-center gap-2.5 font-display text-[1.0625rem] font-semibold">
                    <Timer className="h-5 w-5 text-amber" strokeWidth={1.75} aria-hidden />
                    Still being built
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {study.inProgress.map((item) => (
                      <li key={item} className="flex gap-3 text-[0.9375rem] text-ink/75">
                        <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-[0.875rem] text-ink/55">
                    We list what is unfinished rather than hide it. You will always know what stage your own
                    project is at.
                  </p>
                </div>
              ) : null}

              <div className="rounded-2xl border border-ink/10 bg-white p-6">
                <p className="flex items-center gap-2.5 font-display text-[1.0625rem] font-semibold">
                  <Layers className="h-5 w-5 text-azure-deep" strokeWidth={1.75} aria-hidden />
                  How it is built
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {study.stack.map((item) => (
                    <Pill key={item}>{item}</Pill>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {other ? (
        <Section tone="white">
          <Container>
            <Link
              href={`/work/${other.slug}`}
              className="group flex flex-col gap-6 rounded-3xl border border-ink/10 bg-paper p-7 transition-colors hover:border-azure/30 hover:bg-white md:flex-row md:items-center md:justify-between md:p-9"
            >
              <div>
                <p className="eyebrow text-azure-deep">Next project</p>
                <h2 className="mt-3 text-2xl md:text-3xl">{other.client}</h2>
                <p className="mt-2 max-w-xl text-ink/70">{other.summary}</p>
              </div>
              <span className="btn btn-dark shrink-0">
                Read the build
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  strokeWidth={2}
                  aria-hidden
                />
              </span>
            </Link>
          </Container>
        </Section>
      ) : null}

      <CtaBand />
    </>
  );
}
