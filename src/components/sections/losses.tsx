import { ArrowRight } from "lucide-react";

import { Container, Section, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { losses } from "@/lib/content";

export function Losses() {
  return (
    <Section tone="paper" id="why">
      <Container>
        <SectionHeading
          eyebrow="Before we talk about technology"
          title="Every business is already paying for the work it does by hand"
          lede="Not in one big bill — in small leaks. A message nobody answered, an item that finished on a Saturday, a customer who bought once and was never heard from again."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {losses.map((loss, index) => (
            <Reveal key={loss.title} delay={index * 70}>
              <article className="card h-full p-6 md:p-7">
                <p className="eyebrow text-azure-deep">{loss.stat}</p>
                <h3 className="mt-3 text-xl md:text-[1.375rem]">{loss.title}</h3>
                <p className="mt-3 text-ink/70">{loss.body}</p>

                <p className="mt-5 flex items-start gap-2.5 rounded-xl bg-mint/8 px-4 py-3 text-[0.9375rem] font-medium text-[#046b4d]">
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0" strokeWidth={2.25} aria-hidden />
                  {loss.fix}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
