import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CircleDot } from "lucide-react";

import { Container, Pill, Section, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { caseStudies } from "@/lib/work";

export function Proof() {
  return (
    <Section tone="ink" id="work">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            tone="light"
            eyebrow="Proof, not promises"
            title="Selected work you can open on your phone right now"
            lede="Ask any software company to show you something working. These are live examples — a hotel upgrade with AI and messaging tools, and a solar retailer's catalogue with an advisor. Open them, message the assistants, and judge for yourself."
          />
          <Link href="/work" className="btn btn-on-dark shrink-0">
            All examples
            <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {caseStudies.map((study, index) => (
            <Reveal key={study.slug} delay={index * 90} className="min-w-0 h-full">
              <article className="card-dark flex h-full min-w-0 flex-col overflow-hidden">
                <div className="relative aspect-16/10 min-w-0 overflow-hidden border-b border-azure-3/12 bg-ink-2">
                  <Image
                    src={study.shots[0].src}
                    alt={study.shots[0].alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>

                <div className="flex min-w-0 flex-1 flex-col p-6 md:p-7">
                  <div className="flex flex-wrap items-center gap-2">
                    <Pill tone="light">{study.sector}</Pill>
                    <Pill tone={study.status === "Live" ? "mint" : "amber"}>
                      <CircleDot className="h-3 w-3" strokeWidth={2.5} aria-hidden />
                      {study.status}
                    </Pill>
                  </div>

                  <h3 className="mt-5 text-balance text-2xl text-white">{study.client}</h3>
                  <p className="mt-1.5 text-[0.875rem] text-azure-3/65">{study.location}</p>
                  <p className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-azure-3/90">
                    {study.summary}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={study.demo.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      {study.demo.label}
                      <ArrowUpRight className="h-4 w-4" strokeWidth={2} aria-hidden />
                    </a>
                    <Link href={`/work/${study.slug}`} className="btn btn-on-dark">
                      What we built
                    </Link>
                  </div>

                  <p className="mt-4 text-[0.8125rem] text-azure-3/45">{study.demo.note}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
