import Link from "next/link";
import { CalendarCheck, Mail, MessageCircle, Phone } from "lucide-react";

import { company } from "@/lib/company";

/**
 * Fixed bar on phones. Sales agents and customers both reach for the same two
 * things: talk to a person, or book the walkthrough.
 */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-ink/10 bg-paper/95 backdrop-blur-xl md:hidden">
      <div className="flex items-stretch gap-2 px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]">
        {company.phone ? (
          <a
            href={`tel:${company.phone.tel}`}
            className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-ink/12 bg-white text-[0.9375rem] font-semibold text-ink"
          >
            <Phone className="h-[1.125rem] w-[1.125rem]" strokeWidth={1.75} aria-hidden />
            Call
          </a>
        ) : (
          <a
            href={`mailto:${company.email}`}
            className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-ink/12 bg-white text-[0.9375rem] font-semibold text-ink"
          >
            <Mail className="h-[1.125rem] w-[1.125rem]" strokeWidth={1.75} aria-hidden />
            Email
          </a>
        )}

        {company.whatsapp ? (
          <a
            href={`https://wa.me/${company.whatsapp.number}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-ink/12 bg-white text-[0.9375rem] font-semibold text-ink"
          >
            <MessageCircle className="h-[1.125rem] w-[1.125rem]" strokeWidth={1.75} aria-hidden />
            WhatsApp
          </a>
        ) : null}

        <Link
          href="/contact"
          className="inline-flex h-12 flex-[1.4] items-center justify-center gap-2 rounded-xl bg-linear-to-br from-azure-deep to-azure text-[0.9375rem] font-semibold text-white"
        >
          <CalendarCheck className="h-[1.125rem] w-[1.125rem]" strokeWidth={1.75} aria-hidden />
          Free walkthrough
        </Link>
      </div>
    </div>
  );
}
