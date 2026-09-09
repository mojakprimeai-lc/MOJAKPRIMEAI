import { Container, IconBadge, Section, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { principles } from "@/lib/solutions";

export function Principles({ tone = "ink" }: { tone?: "ink" | "white" }) {
  const light = tone === "ink";

  return (
    <Section tone={tone}>
      <Container>
        <SectionHeading
          tone={light ? "light" : "dark"}
          eyebrow="How we work"
          title="Four rules we do not bend"
          lede="Most software goes wrong for the same few reasons. These are the ones we designed around."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {principles.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 70}>
              <div
                className={
                  light
                    ? "card-dark h-full p-6 md:p-7"
                    : "card h-full p-6 md:p-7"
                }
              >
                <IconBadge icon={principle.icon} tone={light ? "light" : "dark"} />
                <h3 className={light ? "mt-5 text-xl text-white" : "mt-5 text-xl"}>{principle.title}</h3>
                <p className={light ? "mt-3 text-azure-3/70" : "mt-3 text-ink/70"}>{principle.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
