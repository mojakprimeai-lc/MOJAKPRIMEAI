import type { Metadata } from "next";

import { PageIntro } from "@/components/page-intro";
import { Container } from "@/components/ui/primitives";
import { howWeWork, journey, ruleGroups } from "@/lib/site-content";

export const metadata: Metadata = {
  title: howWeWork.title,
  description: "Discovery comes before a build price. A proposal explains the work. An agreement governs it.",
  alternates: { canonical: "/how-we-work" },
};

export default function HowWeWorkPage() {
  return (
    <section className="bg-paper">
      <Container className="py-10 md:py-14">
        <PageIntro title={howWeWork.title} lede={howWeWork.lede} />

        <div className="mt-10 grid items-start gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:gap-16">
          <ol>
            {journey.map((step, index) => (
              <li key={step.title} className="grid grid-cols-[2.75rem_minmax(0,1fr)] gap-3 border-b border-ink/10 py-5">
                <span className="pt-1 font-display text-[0.9375rem] font-semibold text-azure-deep">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="text-xl">{step.title}</h2>
                  <p className="mt-2 text-[1.0625rem] leading-relaxed text-ink/75">{step.lines[0]}</p>
                  <p className="mt-2 text-[1.0625rem] leading-relaxed text-ink/75">{step.lines[1]}</p>
                </div>
              </li>
            ))}
          </ol>

          <aside className="space-y-8 lg:sticky lg:top-[calc(var(--header-h)+1.5rem)]">
            {ruleGroups.map((group) => (
              <section key={group.title}>
                <h2 className="text-xl">{group.title}</h2>
                <ul className="mt-4 space-y-3">
                  {group.rules.map((rule) => (
                    <li key={rule} className="text-[1.0625rem] leading-relaxed text-ink/75">
                      {rule}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </aside>
        </div>
      </Container>
    </section>
  );
}
