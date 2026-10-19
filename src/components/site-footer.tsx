import { ArrowUpRight } from "lucide-react";

import { SocialIcon } from "@/components/ui/social-icons";
import { company } from "@/lib/company";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper">
      <div className="container-x py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2 text-[0.9375rem] text-azure-3/80">
            <p className="font-display text-base font-semibold text-white">{company.legalName}</p>
            <p>
              {company.city}, {company.country}
            </p>
            <a href={`mailto:${company.email}`} className="inline-flex min-h-12 items-center break-all hover:text-white">
              {company.email}
            </a>
            <p>{company.hours}</p>
          </div>

          {company.socials.length > 0 ? (
            <ul className="flex flex-wrap gap-2">
              {company.socials.map((social) => (
                <li key={social.url}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${company.name} on ${social.name}`}
                    className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-azure-3/20 px-3 text-[0.875rem] text-azure-3/90 hover:border-azure-2/50 hover:text-white"
                  >
                    <SocialIcon name={social.name} className="h-4 w-4" />
                    {social.name}
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <p className="mt-8 border-t border-azure-3/12 pt-5 text-[0.8125rem] text-azure-3/50">
          © {year} {company.legalName}
        </p>
      </div>
    </footer>
  );
}
