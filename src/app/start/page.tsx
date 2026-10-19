import type { Metadata } from "next";

import { PageIntro } from "@/components/page-intro";
import { StartForm } from "@/components/start-form";
import { Container } from "@/components/ui/primitives";
import { company } from "@/lib/company";
import { startCopy } from "@/lib/site-content";

export const metadata: Metadata = {
  title: startCopy.title,
  description: startCopy.lede,
  alternates: { canonical: "/start" },
};

export default function StartPage() {
  return (
    <section className="bg-paper">
      <Container className="max-w-3xl py-10 md:py-14">
        <PageIntro title={startCopy.title} lede={startCopy.lede} />
        <p className="mt-4 text-[1.0625rem] text-ink/70">
          {startCopy.direct}{" "}
          <a href={`mailto:${company.email}`} className="font-medium text-azure-deep underline underline-offset-4">
            {company.email}
          </a>
        </p>
        <div className="relative mt-8">
          <StartForm />
        </div>
      </Container>
    </section>
  );
}
