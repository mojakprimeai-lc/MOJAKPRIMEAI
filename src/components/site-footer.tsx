import { EmailLink, PhoneLink, WhatsAppLink } from "@/components/contact-links";
import { SocialIcon } from "@/components/ui/social-icons";
import { company } from "@/lib/company";

const square =
  "inline-flex h-12 w-12 items-center justify-center rounded-xl border border-azure-3/20 text-azure-3/90 transition-colors hover:border-azure-2/50 hover:text-white";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper">
      <div className="container-x py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-1 text-[0.9375rem] text-azure-3/75">
            <p className="font-display text-base font-semibold text-white">{company.legalName}</p>
            <p>
              {company.city}, {company.country}
            </p>
            <p>{company.hours}</p>
          </div>

          <ul className="grid w-full grid-cols-5 sm:flex sm:w-auto sm:gap-2">
            <li className="flex justify-center">
              <EmailLink className={square} />
            </li>
            <li className="flex justify-center">
              <PhoneLink className={square} />
            </li>
            <li className="flex justify-center">
              <WhatsAppLink className={square} />
            </li>
            {company.socials.map((social) => (
              <li key={social.url} className="flex justify-center">
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${company.name} on ${social.name}`}
                  className={square}
                >
                  <SocialIcon name={social.name} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 border-t border-azure-3/12 pt-5 text-[0.8125rem] text-azure-3/50">
          © {year} {company.legalName}
        </p>
      </div>
    </footer>
  );
}
