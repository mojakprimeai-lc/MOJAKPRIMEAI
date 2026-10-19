import Image from "next/image";

import { cx } from "@/components/ui/primitives";
import { company } from "@/lib/company";

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
        tone === "light" ? "bg-white/10 ring-1 ring-white/15" : "bg-azure/8 ring-1 ring-azure/15",
        className,
      )}
    >
      <Image
        src="/mojak-head.png"
        alt=""
        width={36}
        height={36}
        className="h-full w-full object-contain p-0.5"
        priority
      />
    </span>
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
      <span
        className={cx(
          "font-display font-bold tracking-tight",
          compact ? "text-[1.0625rem]" : "text-lg",
          tone === "light" ? "text-white" : "text-ink",
        )}
      >
        {company.name}
      </span>
    </span>
  );
}
