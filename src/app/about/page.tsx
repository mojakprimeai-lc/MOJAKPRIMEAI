import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Compass, Mail, MapPin, Sparkles } from "lucide-react";

import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/page-hero";
import { Principles } from "@/components/sections/principles";
import { Reveal } from "@/components/ui/reveal";
import { Container, Pill, Section, SectionHeading, StatBlock } from "@/components/ui/primitives";
import { caseStudies } from "@/lib/work";
import { company } from "@/lib/company";
import { credibility } from "@/lib/company";
import { roadmap } from "@/lib/content";

export const metadata: Metadata = {
  title: "About — a Nairobi company building AI for everyday businesses",
  description:
    "Mojak Prime AI Limited is a Nairobi technology company building AI websites, chat assistants and point-of-sale systems for Kenyan SMEs. What we believe, how we work, and what we are building next.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Mojak Prime AI"
        title="We build the systems big companies have, for the businesses that actually need them"
        lede="Instant replies, stock that manages itself, numbers you can trust — none of that is new. It has just never been priced or explained for a shop on Tom Mboya Street. That is the gap we exist to close."
        primary={{ label: "Book a free walkthrough", href: "/contact" }}
        secondary={{ label: "See our work", href: "/work" }}
      />

      {/* Story */}
      <Section tone="paper">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <SectionHeading eyebrow="Who we are" title="A young company that would rather be judged on what it has built" />

            <div className="prose-clean text-lg text-ink/75">
              <p>
                {company.legalName} is a technology company based in {company.city}. We build three things:
                AI-powered websites, chat assistants that answer customers on WhatsApp and social media, and
                point-of-sale systems that understand stock instead of just recording it.
              </p>
              <p>
                We started with a simple observation. The average business in the CBD loses money in the same
                three places every week — messages nobody answered, stock nobody tracked, and customers nobody
                followed up. Every one of those is solvable with software that already exists. It simply never
                arrives in a form that a busy shop owner can afford, understand, or trust.
              </p>
              <p>
                So we do the unglamorous part. We sit at the counter, learn how the business actually runs,
                build on the owner&rsquo;s own prices and products, train the staff in person, and publish what it
                costs. Then we hand over something the owner controls.
              </p>
              <p className="font-medium text-ink">
                We would rather you tested live examples on your own phone than took our word for anything.
              </p>
            </div>
          </div>

          <Reveal delay={100}>
            <dl className="mt-14 grid gap-8 border-t border-ink/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
              {credibility.map((item) => (
                <div key={item.label}>
                  <dt className="sr-only">{item.label}</dt>
                  <dd>
                    <StatBlock value={item.value} label={item.label} detail={item.detail} />
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </Section>

      <Principles />

      {/* Position */}
      <Section tone="white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="What we believe"
                title="Nobody wants to buy AI. They want the result AI can give them."
                lede="Pitch a shop owner &lsquo;artificial intelligence&rsquo; and you get a polite no. Show them fewer lost sales, fewer manual hours and clearer numbers, and the conversation changes completely. That reframing runs through everything we build."
              />

              <div className="mt-8 space-y-4">
                <Belief
                  title="Augmentation, not replacement"
                  body="We do not sell systems that replace your team. We sell systems that make a small team behave like a bigger one. It is an easier sell and a more honest one."
                />
                <Belief
                  title="WhatsApp first, because Kenya is WhatsApp first"
                  body="Any customer service system that ignores WhatsApp is built for somewhere else. Ours start there."
                />
                <Belief
                  title="A phone is the whole computer"
                  body="Most of your customers, and most of your staff, will only ever use this on a phone. So that is the screen we design for first and test on hardest."
                />
              </div>
            </div>

            <div className="space-y-5">
              {caseStudies.map((study) => (
                <Link
                  key={study.slug}
                  href={`/work/${study.slug}`}
                  className="group block rounded-2xl border border-ink/10 bg-paper p-6 transition-colors hover:border-azure/30 hover:bg-white"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <Pill>{study.sector}</Pill>
                    <Pill tone={study.status === "Live" ? "mint" : "amber"}>{study.status}</Pill>
                  </div>
                  <h3 className="mt-4 text-xl">{study.client}</h3>
                  <p className="mt-2 text-[0.9375rem] text-ink/70">{study.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-display text-[0.9375rem] font-semibold text-azure-deep">
                    Read the build
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={2}
                      aria-hidden
                    />
                  </span>
                </Link>
              ))}

              <div className="flex items-start gap-4 rounded-2xl border border-ink/10 bg-paper-2 p-6">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-azure-deep" strokeWidth={1.75} aria-hidden />
                <p className="text-[0.9375rem] text-ink/70">
                  Based in {company.city}, working across {company.country}. Our agents meet CBD businesses in
                  person; everywhere else we work over WhatsApp, calls and site visits when a build needs them.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Roadmap — honest, no promises */}
      <Section tone="paper-2">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <SectionHeading
              eyebrow="What is next"
              title="In development, and not for sale yet"
              lede="We would rather tell you something is unfinished than take money for it. These are in design and research — ask us about them, but do not buy them today."
            />

            <div className="space-y-4">
              {roadmap.map((item, index) => (
                <Reveal key={item.name} delay={index * 70}>
                  <div className="flex gap-4 rounded-2xl border border-ink/10 bg-white p-6">
                    <Compass className="mt-0.5 h-5 w-5 shrink-0 text-azure-deep" strokeWidth={1.75} aria-hidden />
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-[1.125rem] font-semibold">{item.name}</h3>
                        <Pill tone="amber">In development</Pill>
                      </div>
                      <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink/70">{item.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}

              <div className="flex items-start gap-4 rounded-2xl border border-azure/20 bg-azure/6 p-6">
                <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-azure-deep" strokeWidth={1.75} aria-hidden />
                <p className="text-[0.9375rem] text-ink/75">
                  <span className="font-semibold text-ink">Available today:</span> AI websites, chat assistants,
                  AI point of sale, and the growth services around them. Everything on our{" "}
                  <Link href="/solutions" className="font-semibold text-azure-deep underline underline-offset-4">
                    solutions page
                  </Link>{" "}
                  is something we can start this week.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact strip */}
      <Section tone="white">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-ink/10 bg-paper p-7 md:flex-row md:items-center md:p-9">
            <div>
              <h2 className="text-2xl">Talk to a person</h2>
              <p className="mt-2 text-ink/70">
                {company.hours}. We answer email the same working day.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={`mailto:${company.email}`} className="btn btn-outline">
                <Mail className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                {company.email}
              </a>
              <Link href="/contact" className="btn btn-dark">
                Book a walkthrough
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}

function Belief({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-ink/10 bg-paper p-5 md:p-6">
      <h3 className="text-[1.125rem] font-semibold">{title}</h3>
      <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink/70">{body}</p>
    </div>
  );
}
