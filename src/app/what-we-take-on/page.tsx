import type { Metadata } from "next";

import { Disclosure } from "@/components/disclosure";
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
        <div className="mt-8 max-w-3xl">
          <Disclosure
            variant="cards"
            items={workAreas.map((area) => ({ id: area.id, title: area.title, text: area.detail }))}
          />
        </div>
      </Container>
    </section>
  );
}
