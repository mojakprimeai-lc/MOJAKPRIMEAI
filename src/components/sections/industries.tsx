import { Container, IconBadge, Section, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { industries } from "@/lib/content";

export function Industries() {
  return (
    <Section tone="paper">
      <Container>
        <SectionHeading
          eyebrow="Who this is for"
          title="Built for the businesses on the street, not the boardroom"
          lede="If your work involves customers asking questions, stock moving, or money that needs counting at the end of the day, it fits."
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <Reveal as="li" key={industry.name} delay={(index % 3) * 60}>
              <div className="flex h-full gap-4 rounded-2xl border border-ink/8 bg-white p-5 transition-colors hover:border-azure/25">
                <IconBadge icon={industry.icon} size="sm" />
                <div>
                  <h3 className="text-[1.0625rem] font-semibold">{industry.name}</h3>
                  <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink/65">{industry.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
