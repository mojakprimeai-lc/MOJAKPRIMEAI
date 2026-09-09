import { cx } from "@/components/ui/primitives";

/**
 * The Mojak mark: an "M" rising out of a chip tile, with a live signal node.
 * Drawn rather than imported so it stays crisp at every size and can be
 * recoloured for dark and light surfaces.
 */
export function BrandGlyph({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  const id = tone === "light" ? "mojak-glyph-light" : "mojak-glyph-dark";

  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden className={cx("shrink-0", className)}>
      <defs>
        <linearGradient id={`${id}-stroke`} x1="6" y1="4" x2="34" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor={tone === "light" ? "#4fb0ff" : "#0b7ff5"} />
          <stop offset="1" stopColor={tone === "light" ? "#00c48c" : "#054a96"} />
        </linearGradient>
        <linearGradient id={`${id}-tile`} x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor={tone === "light" ? "rgba(79,176,255,0.22)" : "rgba(11,127,245,0.14)"} />
          <stop offset="1" stopColor={tone === "light" ? "rgba(0,196,140,0.12)" : "rgba(0,196,140,0.08)"} />
        </linearGradient>
      </defs>

      <rect x="2" y="2" width="36" height="36" rx="11" fill={`url(#${id}-tile)`} />
      <rect
        x="2.75"
        y="2.75"
        width="34.5"
        height="34.5"
        rx="10.25"
        stroke={`url(#${id}-stroke)`}
        strokeWidth="1.5"
        opacity="0.55"
      />
      <path
        d="M11.5 28.5V13.2c0-.55.66-.83 1.05-.44L20 20.2l7.45-7.44c.39-.39 1.05-.11 1.05.44V28.5"
        stroke={`url(#${id}-stroke)`}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="30.5" cy="9.5" r="2.6" fill={tone === "light" ? "#34e0ac" : "#00c48c"} />
    </svg>
  );
}

export function BrandMark({
  tone = "dark",
  className,
  compact = false,
}: {
  tone?: "dark" | "light";
  className?: string;
  compact?: boolean;
}) {
  return (
    <span className={cx("inline-flex items-center gap-2.5", className)}>
      <BrandGlyph tone={tone} className={compact ? "h-8 w-8" : "h-9 w-9"} />
      <span className="flex flex-col leading-none">
        <span
          className={cx(
            "font-display font-bold tracking-tight",
            compact ? "text-[1.0625rem]" : "text-lg",
            tone === "light" ? "text-white" : "text-ink",
          )}
        >
          MOJAK
        </span>
        <span
          className={cx(
            "mt-1 text-[0.5625rem] font-semibold tracking-[0.28em]",
            tone === "light" ? "text-azure-2" : "text-azure-deep",
          )}
        >
          PRIME AI
        </span>
      </span>
    </span>
  );
}
