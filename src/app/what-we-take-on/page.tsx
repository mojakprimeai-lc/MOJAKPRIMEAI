import type { Metadata } from "next";

import { CapabilityCard } from "@/components/capability-card";
import { PageIntro } from "@/components/page-intro";
import { Container } from "@/components/ui/primitives";
import { takeOn, workAreas } from "@/lib/site-content";

export const metadata: Metadata = {
  title: takeOn.title,
  description: takeOn.lede,
  alternates: { canonical: "/what-we-take-on" },
};

export default function WhatWeTakeOnPage() {
  return (
    <section className="bg-paper">
      <Container className="py-10 md:py-14">
        <PageIntro title={takeOn.title} lede={takeOn.lede} />
        <div className="mt-10 grid max-w-4xl gap-4">
          {workAreas.map((area) => (
            <CapabilityCard key={area.id} area={area} expandable />
          ))}
        </div>
      </Container>
    </section>
  );
}
