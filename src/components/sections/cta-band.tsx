import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";

import { Container, Eyebrow } from "@/components/ui/primitives";
import { company } from "@/lib/company";

export function CtaBand({
  title = "Let us look at your business for free",
  body = "An agent comes to your shop or meets you on WhatsApp, looks at how you sell today, and shows you the two systems we already have running. If there is nothing worth fixing, we will say so.",
  primary = { label: "Book a free walkthrough", href: "/contact" },
}: {
  title?: string;
  body?: string;
  primary?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-field" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/2 h-[26rem] w-[26rem] -translate-y-1/2 rounded-full bg-azure/15 blur-[110px]"
      />

      <Container className="relative py-16 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Eyebrow tone="light">No charge, no obligation</Eyebrow>
            <h2 className="mt-5 max-w-2xl text-3xl text-white sm:text-4xl md:text-[2.75rem]">{title}</h2>
            <p className="lede mt-5 max-w-xl text-azure-3/70">{body}</p>
          </div>

          <div className="flex flex-col gap-3">
            <Link href={primary.href} className="btn btn-primary w-full">
              {primary.label}
              <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
            </Link>

            {company.phone ? (
              <a href={`tel:${company.phone.tel}`} className="btn btn-on-dark w-full">
                <Phone className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                {company.phone.value}
              </a>
            ) : null}

            <a href={`mailto:${company.email}`} className="btn btn-on-dark w-full">
              <Mail className="h-4 w-4" strokeWidth={1.75} aria-hidden />
              {company.email}
            </a>

            <p className="mt-1 text-center text-[0.8125rem] text-azure-3/45">
              {company.hours} — {company.serviceArea}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
