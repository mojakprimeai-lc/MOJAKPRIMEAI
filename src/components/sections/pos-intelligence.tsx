import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container, IconBadge, Section, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { getSolution } from "@/lib/solutions";

/**
 * The POS is the hardest sell and the biggest differentiator, so the home page
 * spells out exactly what the "AI" in "AI point of sale" actually does.
 */
export function PosIntelligence() {
  const pos = getSolution("ai-point-of-sale");
  if (!pos) return null;

  return (
    <Section tone="paper-2">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="The difference an AI till makes"
              title="An ordinary POS records what happened. Ours tells you what to do next."
              lede="Both machines take the money. Only one of them notices that your best seller runs out every second Saturday, and warns you on the Thursday."
            />

            <Link href="/solutions/ai-point-of-sale" className="btn btn-dark mt-8">
              See the full system
              <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
            </Link>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {pos.features.map((feature, index) => (
              <Reveal as="li" key={feature.title} delay={index * 50}>
                <div className="card h-full p-5 md:p-6">
                  <IconBadge icon={feature.icon} size="sm" />
                  <h3 className="mt-4 text-[1.0625rem] font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink/65">{feature.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
