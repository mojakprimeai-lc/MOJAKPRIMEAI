import { ChevronRight, Mail, Phone } from "lucide-react";

import { company, whatsappHref } from "@/lib/company";
import { whatsappPrefill } from "@/lib/site-content";
import { cx } from "@/components/ui/primitives";
import { WhatsAppIcon } from "@/components/ui/social-icons";

const lightChip =
  "inline-flex min-h-12 items-center justify-center gap-1 rounded-xl border border-ink/12 bg-white px-1 text-[0.75rem] font-medium text-ink transition-colors hover:border-azure/40 min-[380px]:gap-2 min-[380px]:px-3 min-[380px]:text-[0.9375rem]";

export function EmailLink({ className, showLabel = false }: { className?: string; showLabel?: boolean }) {
  return (
    <a
      href={`mailto:${company.email}`}
      className={className}
      aria-label={showLabel ? undefined : "Email MOJAK"}
    >
      <Mail className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
      {showLabel ? <span>Email</span> : null}
    </a>
  );
}

export function PhoneLink({
  className,
  showLabel = false,
  showChevron = false,
  onClick,
}: {
  className?: string;
  showLabel?: boolean;
  showChevron?: boolean;
  onClick?: () => void;
}) {
  return (
    <a
      href={`tel:${company.phone.tel}`}
      className={className}
      onClick={onClick}
      aria-label={showLabel ? undefined : "Call MOJAK"}
    >
      <span className="inline-flex items-center gap-2.5">
        <Phone className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
        {showLabel ? <span>Call</span> : null}
      </span>
      {showChevron ? <ChevronRight className="ml-auto h-4 w-4 shrink-0 text-ink/35" aria-hidden /> : null}
    </a>
  );
}

export function WhatsAppLink({
  className,
  showLabel = false,
  showChevron = false,
  onClick,
}: {
  className?: string;
  showLabel?: boolean;
  showChevron?: boolean;
  onClick?: () => void;
}) {
  return (
    <a
      href={whatsappHref(whatsappPrefill)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={onClick}
      aria-label={showLabel ? undefined : "WhatsApp MOJAK"}
    >
      <span className="inline-flex items-center gap-2.5">
        <WhatsAppIcon className="h-4 w-4 shrink-0" />
        {showLabel ? <span>WhatsApp</span> : null}
      </span>
      {showChevron ? <ChevronRight className="ml-auto h-4 w-4 shrink-0 text-ink/35" aria-hidden /> : null}
    </a>
  );
}

export function ReplyChannels({ className }: { className?: string }) {
  return (
    <div className={cx("grid grid-cols-3 gap-3", className)}>
      <EmailLink showLabel className={lightChip} />
      <PhoneLink showLabel className={lightChip} />
      <WhatsAppLink showLabel className={lightChip} />
    </div>
  );
}
