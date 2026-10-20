import { siFacebook, siInstagram } from "simple-icons";

import { cx } from "@/components/ui/primitives";

function BrandIcon({ path, className }: { path: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
      className={cx("shrink-0", className)}
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}

export function InstagramIcon({ className }: { className?: string }) {
  return <BrandIcon path={siInstagram.path} className={className} />;
}

export function FacebookIcon({ className }: { className?: string }) {
  return <BrandIcon path={siFacebook.path} className={className} />;
}

export function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cx("shrink-0", className)}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function XTwitterIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
      className={cx("shrink-0", className)}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function SocialIcon({
  name,
  className = "h-4 w-4",
}: {
  name: string;
  className?: string;
}) {
  const normalized = name.trim().toLowerCase();

  switch (normalized) {
    case "instagram":
    case "ig":
      return <InstagramIcon className={className} />;
    case "facebook":
    case "fb":
      return <FacebookIcon className={className} />;
    case "linkedin":
      return <LinkedInIcon className={className} />;
    case "x":
    case "twitter":
      return <XTwitterIcon className={className} />;
    default:
      return (
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cx("shrink-0", className)}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" x2="22" y1="12" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
  }
}
