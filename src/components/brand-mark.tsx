import Image from "next/image";

import { cx } from "@/components/ui/primitives";

/**
 * BrandGlyph — the Mojak AI head icon, cropped from the official logo.
 *
 * Used at small sizes where only the mark is needed (assistant chat header,
 * compact icon contexts). The logo's own background colour (#eaf4fc) is used
 * as the containing chip's fill so the image always sits in its natural
 * environment and looks crisp on both light and dark surfaces.
 *
 * Cropping: the original 640×640 JPG has the head mark in the upper-centre
 * region. We display the container smaller than the image by zooming the
 * background to ~220 % and positioning it at the top of the frame, which
 * isolates just the AI-head graphic without any raster editing.
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
        "inline-block shrink-0 overflow-hidden rounded-xl",
        // Ring on dark surfaces so the chip reads against the background
        tone === "light" && "ring-1 ring-white/20",
        className,
      )}
      style={{
        backgroundImage: "url('/mojaklogo.jpg')",
        backgroundSize: "220%",
        backgroundPosition: "50% 8%",
        backgroundRepeat: "no-repeat",
        // Match the logo's own page colour so there is no visible border seam
        backgroundColor: "#eaf4fc",
      }}
      role="img"
      aria-label="Mojak Prime AI"
    />
  );
}

/**
 * BrandMark — the full Mojak Prime AI wordmark used in the header and footer.
 *
 * Light surfaces (tone="dark", i.e. the header):
 *   The logo image is rendered with mix-blend-mode:multiply. The logo's
 *   pale-blue background (#eaf4fc) mathematically multiplies with the site's
 *   --color-paper (#f8fafc) and becomes nearly invisible, leaving only the
 *   coloured head mark and bold wordmark text.
 *
 * Dark surfaces (tone="light", i.e. the footer):
 *   The logo sits inside a frosted white-on-dark pill so it remains legible
 *   against the navy/ink background without any colour inversion.
 *
 * The compact prop reduces the rendered size for the fixed header bar.
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
  // The logo is square; height drives both dimensions at natural aspect ratio.
  const imgSize = compact ? 108 : 124;

  if (tone === "light") {
    // Dark surface — wrap in a frosted white pill so the logo stands out
    return (
      <span className={cx("inline-flex items-center", className)}>
        <span className="inline-flex items-center justify-center overflow-hidden rounded-2xl bg-white/10 p-1.5 ring-1 ring-white/15 backdrop-blur-sm">
          <Image
            src="/mojaklogo.jpg"
            alt="Mojak Prime AI"
            width={imgSize}
            height={imgSize}
            className="block rounded-xl"
            priority
          />
        </span>
      </span>
    );
  }

  // Light surface — multiply blend removes the near-white logo background
  return (
    <span className={cx("inline-flex items-center", className)}>
      <span
        className="inline-block overflow-hidden rounded-2xl"
        style={{ width: imgSize, height: imgSize }}
      >
        <Image
          src="/mojaklogo.jpg"
          alt="Mojak Prime AI"
          width={imgSize}
          height={imgSize}
          className="block"
          style={{ mixBlendMode: "multiply" }}
          priority
        />
      </span>
    </span>
  );
}
