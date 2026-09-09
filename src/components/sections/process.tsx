import { Container, Section, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { process } from "@/lib/content";

export function Process() {
  return (
    <Section tone="white">
      <Container>
        <SectionHeading
          eyebrow="How working with us goes"
          title="Six steps, and you can stop after any of them"
          lede="Nothing is signed at the first meeting, nothing starts without a written quote, and nothing launches before you have tested it yourself."
        />

        <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((item, index) => (
            <Reveal as="li" key={item.step} delay={index * 60}>
              <div className="relative border-t border-ink/12 pt-6">
                <span
                  aria-hidden
                  className="absolute -top-px left-0 h-px w-12 bg-linear-to-r from-azure to-mint"
                />
                <p className="font-display text-[0.8125rem] font-bold tracking-[0.2em] text-azure-deep">
                  {item.step}
                </p>
                <h3 className="mt-3 text-xl">{item.title}</h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink/65">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
