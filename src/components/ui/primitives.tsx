import type { ReactNode } from "react";
import { Check, type LucideIcon } from "lucide-react";

export function cx(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cx("container-x", className)}>{children}</div>;
}

export function Section({
  children,
  className,
  id,
  tone = "paper",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "paper" | "paper-2" | "ink" | "white";
}) {
  const tones = {
    paper: "bg-paper text-ink",
    "paper-2": "bg-paper-2 text-ink",
    white: "bg-white text-ink",
    ink: "bg-ink text-paper",
  } as const;

  return (
    <section id={id} className={cx("py-16 md:py-24", tones[tone], className)}>
      {children}
    </section>
  );
}

export function Eyebrow({
  children,
  tone = "dark",
  className,
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <p
      className={cx(
        "eyebrow flex items-center gap-2.5",
        tone === "light" ? "text-azure-2" : "text-azure-deep",
        className,
      )}
    >
      <span
        aria-hidden
        className={cx(
          "inline-block h-1.5 w-1.5 rounded-full",
          tone === "light" ? "bg-mint" : "bg-azure",
        )}
      />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  tone = "dark",
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cx(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Eyebrow tone={tone} className={align === "center" ? "justify-center" : undefined}>
          {eyebrow}
        </Eyebrow>
      ) : null}
      <h2
        className={cx(
          "mt-4 text-3xl sm:text-4xl md:text-[2.75rem]",
          tone === "light" ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {lede ? (
        <p className={cx("lede mt-5", tone === "light" ? "text-azure-3/80" : "text-ink/70")}>{lede}</p>
      ) : null}
    </div>
  );
}

export function IconBadge({
  icon: Icon,
  tone = "dark",
  size = "md",
}: {
  icon: LucideIcon;
  tone?: "dark" | "light" | "solid";
  size?: "sm" | "md";
}) {
  const box = size === "sm" ? "h-10 w-10 rounded-xl" : "h-12 w-12 rounded-2xl";
  const glyph = size === "sm" ? "h-[1.125rem] w-[1.125rem]" : "h-5 w-5";

  const tones = {
    dark: "border border-azure/20 bg-azure/8 text-azure-deep",
    light: "border border-azure-3/20 bg-white/6 text-azure-2",
    solid: "bg-ink text-azure-2",
  } as const;

  return (
    <span className={cx("inline-flex shrink-0 items-center justify-center", box, tones[tone])}>
      <Icon className={glyph} strokeWidth={1.75} aria-hidden />
    </span>
  );
}

export function CheckList({
  items,
  tone = "dark",
  className,
}: {
  items: readonly string[];
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <ul className={cx("space-y-3", className)}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            className={cx(
              "mt-0.5 inline-flex h-[1.375rem] w-[1.375rem] shrink-0 items-center justify-center rounded-full",
              tone === "light" ? "bg-mint/15 text-mint-2" : "bg-mint/12 text-mint",
            )}
          >
            <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden />
          </span>
          <span className={cx("text-[1.0625rem]", tone === "light" ? "text-azure-3/85" : "text-ink/75")}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function Pill({
  children,
  tone = "dark",
  className,
}: {
  children: ReactNode;
  tone?: "dark" | "light" | "mint" | "amber";
  className?: string;
}) {
  const tones = {
    dark: "border-ink/12 bg-white text-ink/70",
    light: "border-azure-3/20 bg-white/8 text-azure-3",
    mint: "border-mint/25 bg-mint/10 text-[#046b4d]",
    amber: "border-amber/35 bg-amber/12 text-[#7a5406]",
  } as const;

  return (
    <span
      className={cx(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[0.8125rem] font-medium",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function StatBlock({
  value,
  label,
  detail,
  tone = "dark",
}: {
  value: string;
  label: string;
  detail?: string;
  tone?: "dark" | "light";
}) {
  return (
    <div>
      <p
        className={cx(
          "font-display text-3xl font-semibold tracking-tight md:text-4xl",
          tone === "light" ? "text-white" : "text-ink",
        )}
      >
        {value}
      </p>
      <p className={cx("mt-1.5 text-[0.9375rem] font-medium", tone === "light" ? "text-azure-2" : "text-azure-deep")}>
        {label}
      </p>
      {detail ? (
        <p className={cx("mt-1 text-[0.875rem]", tone === "light" ? "text-azure-3/60" : "text-ink/55")}>{detail}</p>
      ) : null}
    </div>
  );
}
