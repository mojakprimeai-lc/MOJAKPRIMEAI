import type { Metadata } from "next";

import { ReplyChannels } from "@/components/contact-links";
import { PageIntro } from "@/components/page-intro";
import { StartForm } from "@/components/start-form";
import { Container } from "@/components/ui/primitives";
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
        <p className="mt-6 text-[0.9375rem] font-medium text-ink/70">{startCopy.direct}</p>
        <ReplyChannels className="mt-3" />
        <div className="relative mt-8">
          <StartForm />
        </div>
      </Container>
    </section>
  );
}
