import Link from "next/link";
import { ArrowUpRight, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { BrandMark } from "@/components/brand-mark";
import { caseStudies } from "@/lib/work";
import { company } from "@/lib/company";
import { solutions } from "@/lib/solutions";

const companyLinks = [
  { label: "About Mojak", href: "/about" },
  { label: "Our work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-field opacity-60" />

      <div className="container-x relative py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          <div>
            <BrandMark tone="light" />
            <p className="mt-5 max-w-sm text-[0.9375rem] leading-relaxed text-azure-3/65">
              {company.descriptor}
            </p>

            <div className="mt-6 space-y-3 text-[0.9375rem]">
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-3 text-azure-3/80 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 shrink-0 text-azure-2" strokeWidth={1.75} aria-hidden />
                {company.email}
              </a>

              {company.phone ? (
                <a
                  href={`tel:${company.phone.tel}`}
                  className="flex items-center gap-3 text-azure-3/80 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-azure-2" strokeWidth={1.75} aria-hidden />
                  {company.phone.value}
                </a>
              ) : null}

              {company.whatsapp ? (
                <a
                  href={`https://wa.me/${company.whatsapp.number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-azure-3/80 transition-colors hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-azure-2" strokeWidth={1.75} aria-hidden />
                  WhatsApp {company.whatsapp.value}
                </a>
              ) : null}

              <p className="flex items-center gap-3 text-azure-3/80">
                <MapPin className="h-4 w-4 shrink-0 text-azure-2" strokeWidth={1.75} aria-hidden />
                {company.city}, {company.country} — {company.serviceArea}
              </p>

              <p className="flex items-center gap-3 text-azure-3/80">
                <Clock className="h-4 w-4 shrink-0 text-azure-2" strokeWidth={1.75} aria-hidden />
                {company.hours}
              </p>
            </div>

            {company.socials.length > 0 ? (
              <div className="mt-6 flex flex-wrap gap-2">
                {company.socials.map((social) => (
                  <a
                    key={social.url}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-azure-3/20 bg-white/5 px-3.5 py-1.5 text-[0.8125rem] text-azure-3/85 transition-colors hover:border-azure-2/50 hover:text-white"
                  >
                    {social.name}
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden />
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          <FooterColumn title="Solutions">
            {solutions.map((solution) => (
              <FooterLink key={solution.slug} href={`/solutions/${solution.slug}`}>
                {solution.navLabel}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Company">
            {companyLinks.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Systems we have built">
            {caseStudies.map((study) => (
              <li key={study.slug}>
                <Link
                  href={`/work/${study.slug}`}
                  className="group block text-[0.9375rem] text-azure-3/70 transition-colors hover:text-white"
                >
                  <span className="font-medium text-azure-3/90 group-hover:text-white">{study.client}</span>
                  <span className="mt-0.5 block text-[0.8125rem] text-azure-3/50">
                    {study.sector} — {study.status}
                  </span>
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <p className="text-[0.8125rem] leading-relaxed text-azure-3/45">
                The assistant on this site is the same kind we build for clients. Ask it anything.
              </p>
            </li>
          </FooterColumn>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-azure-3/12 pt-8 text-[0.8125rem] text-azure-3/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {company.legalName}. {company.city}, {company.country}.
          </p>
          <p className="md:text-right">{company.tagline}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="eyebrow text-azure-2">{title}</h3>
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-[0.9375rem] text-azure-3/70 transition-colors hover:text-white">
        {children}
      </Link>
    </li>
  );
}
