import { Plus } from "lucide-react";

import { Container, Section, SectionHeading } from "@/components/ui/primitives";

export function FaqBlock({
  items,
  eyebrow = "FAQs",
  title = "The things owners actually want to know",
  lede,
  tone = "white",
}: {
  items: readonly { q: string; a: string }[];
  eyebrow?: string;
  title?: string;
  lede?: string;
  tone?: "white" | "paper" | "paper-2";
}) {
  return (
    <Section tone={tone} id="faq">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionHeading eyebrow={eyebrow} title={title} lede={lede} />

          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {items.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left">
                  <h3 className="text-[1.0625rem] font-semibold leading-snug md:text-[1.125rem]">{item.q}</h3>
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ink/12 text-ink/60 transition-all duration-300 group-open:rotate-45 group-open:border-azure/40 group-open:bg-azure/8 group-open:text-azure-deep">
                    <Plus className="h-4 w-4" strokeWidth={2} aria-hidden />
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl pr-12 text-ink/70">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
