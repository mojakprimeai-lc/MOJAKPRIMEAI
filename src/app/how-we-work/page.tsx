import type { Metadata } from "next";

import { PageIntro } from "@/components/page-intro";
import { Container } from "@/components/ui/primitives";
import { boundaries, howWeWork, workPhases } from "@/lib/site-content";

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
          <ol className="grid gap-4">
            {workPhases.map((phase, index) => (
              <li key={phase.title} className="grid grid-cols-[2.75rem_minmax(0,1fr)] gap-3 rounded-2xl border border-ink/10 bg-white p-5">
                <span className="pt-1 font-display text-[0.9375rem] font-semibold text-azure-deep">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="text-xl">{phase.title}</h2>
                  <p className="mt-2 text-[1.0625rem] leading-relaxed text-ink/75">{phase.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <aside className="rounded-2xl bg-paper-2 p-6 lg:sticky lg:top-[calc(var(--header-h)+1.5rem)]">
            <h2 className="text-xl">Important boundaries</h2>
            <ul className="mt-5 space-y-4">
              {boundaries.map((boundary) => (
                <li key={boundary} className="border-l-2 border-azure pl-4 text-[1rem] leading-relaxed text-ink/75">
                  {boundary}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Container>
    </section>
  );
}
