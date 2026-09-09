import type { Metadata } from "next";
import { Suspense } from "react";
import { Clock, Mail, MapPin, MessageCircle, Phone, Sparkles } from "lucide-react";

import { EnquiryForm } from "@/components/enquiry-form";
import { PageHero } from "@/components/page-hero";
import { Container, Section } from "@/components/ui/primitives";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Contact — book a free walkthrough in Nairobi",
  description:
    "Talk to Mojak Prime AI about an AI website, a WhatsApp assistant or an AI point-of-sale system. Free walkthrough, written quote, no obligation. Nairobi CBD and countrywide.",
  alternates: { canonical: "/contact" },
};

const nextSteps = [
  "We read your enquiry and reply the same working day.",
  "A short call or visit — we look at how you sell today and where the leaks are.",
  "A written quote: what we would build, what it costs, and what it costs afterwards.",
  "You decide. Nothing starts before you say so.",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let us look at your business — free, and with no obligation"
        lede="Tell us what you sell and what is frustrating you. If we can fix it, we will show you how. If we cannot, we will tell you that too."
      />

      <Section tone="paper">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            <Suspense
              fallback={
                <div className="card min-h-[36rem] animate-pulse p-8" aria-hidden />
              }
            >
              <EnquiryForm />
            </Suspense>

            <div className="space-y-5">
              <div className="card p-6 md:p-7">
                <h2 className="text-xl">Reach us directly</h2>

                <ul className="mt-5 space-y-4">
                  <li>
                    <a
                      href={`mailto:${company.email}`}
                      className="flex items-start gap-3.5 text-ink/80 transition-colors hover:text-azure-deep"
                    >
                      <Mail className="mt-0.5 h-5 w-5 shrink-0 text-azure-deep" strokeWidth={1.75} aria-hidden />
                      <span>
                        <span className="block text-[0.8125rem] uppercase tracking-wider text-ink/45">Email</span>
                        <span className="font-medium break-all">{company.email}</span>
                      </span>
                    </a>
                  </li>

                  {company.phone ? (
                    <li>
                      <a
                        href={`tel:${company.phone.tel}`}
                        className="flex items-start gap-3.5 text-ink/80 transition-colors hover:text-azure-deep"
                      >
                        <Phone className="mt-0.5 h-5 w-5 shrink-0 text-azure-deep" strokeWidth={1.75} aria-hidden />
                        <span>
                          <span className="block text-[0.8125rem] uppercase tracking-wider text-ink/45">Phone</span>
                          <span className="font-medium">{company.phone.value}</span>
                        </span>
                      </a>
                    </li>
                  ) : null}

                  {company.whatsapp ? (
                    <li>
                      <a
                        href={`https://wa.me/${company.whatsapp.number}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-3.5 text-ink/80 transition-colors hover:text-azure-deep"
                      >
                        <MessageCircle
                          className="mt-0.5 h-5 w-5 shrink-0 text-azure-deep"
                          strokeWidth={1.75}
                          aria-hidden
                        />
                        <span>
                          <span className="block text-[0.8125rem] uppercase tracking-wider text-ink/45">
                            WhatsApp
                          </span>
                          <span className="font-medium">{company.whatsapp.value}</span>
                        </span>
                      </a>
                    </li>
                  ) : null}

                  <li className="flex items-start gap-3.5 text-ink/80">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-azure-deep" strokeWidth={1.75} aria-hidden />
                    <span>
                      <span className="block text-[0.8125rem] uppercase tracking-wider text-ink/45">Where we work</span>
                      <span className="font-medium">
                        {company.city}, {company.country} — {company.serviceArea}
                      </span>
                    </span>
                  </li>

                  <li className="flex items-start gap-3.5 text-ink/80">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-azure-deep" strokeWidth={1.75} aria-hidden />
                    <span>
                      <span className="block text-[0.8125rem] uppercase tracking-wider text-ink/45">Hours</span>
                      <span className="font-medium">{company.hours}</span>
                    </span>
                  </li>
                </ul>

                {company.socials.length > 0 ? (
                  <div className="mt-6 border-t border-ink/8 pt-5">
                    <p className="text-[0.8125rem] uppercase tracking-wider text-ink/45">Follow us</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {company.socials.map((social) => (
                        <a
                          key={social.url}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-ink/12 bg-paper px-3.5 py-1.5 text-[0.875rem] font-medium text-ink/70 transition-colors hover:border-azure/40 hover:text-azure-deep"
                        >
                          {social.name}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="card p-6 md:p-7">
                <h2 className="text-xl">What happens next</h2>
                <ol className="mt-5 space-y-4">
                  {nextSteps.map((step, index) => (
                    <li key={step} className="flex gap-3.5">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink font-display text-[0.8125rem] font-semibold text-paper">
                        {index + 1}
                      </span>
                      <span className="text-[0.9375rem] text-ink/75">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="flex items-start gap-3.5 rounded-2xl border border-azure/20 bg-azure/6 p-6">
                <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-azure-deep" strokeWidth={1.75} aria-hidden />
                <p className="text-[0.9375rem] text-ink/75">
                  In a hurry? Ask <span className="font-semibold text-ink">Prime</span>, the assistant at the
                  bottom of this page. It answers on pricing, timelines and what we have built — instantly, the
                  same way the assistants we build for clients answer their customers.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
