import Image from "next/image";

import { cx } from "@/components/ui/primitives";

/**
 * BrandGlyph — the official Mojak AI head icon.
 *
 * Extracted with a transparent background and rendered inside a sleek,
 * responsive squircle tile. Adapts cleanly to both light and dark surfaces.
 */
export function BrandGlyph({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <span
      className={cx(
        "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-xl",
        tone === "light"
          ? "bg-white/10 ring-1 ring-white/15"
          : "bg-azure/8 ring-1 ring-azure/15",
        className,
      )}
    >
      <Image
        src="/mojak-head.png"
        alt="Mojak Prime AI"
        width={36}
        height={36}
        className="h-full w-full object-contain p-0.5"
        priority
      />
    </span>
  );
}

/**
 * BrandMark — the full Mojak Prime AI brand mark used in the header and footer.
 *
 * Uses the official neural AI head icon paired with crisp, perfectly aligned
 * typography. Fits cleanly within the fixed 68px header bar (compact: h-8 icon,
 * total ~36px height) with zero overflow, zero hanging artifacts, and seamless
 * behavior on scroll across mobile and desktop.
 */
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
