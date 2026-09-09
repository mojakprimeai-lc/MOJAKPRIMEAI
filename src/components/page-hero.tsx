import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, type LucideIcon } from "lucide-react";

import { Container, Eyebrow, IconBadge, Pill } from "@/components/ui/primitives";

export function PageHero({
  eyebrow,
  title,
  lede,
  icon,
  meta,
  primary,
  secondary,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  icon?: LucideIcon;
  meta?: string[];
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string; external?: boolean };
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-field" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-40 h-[30rem] w-[30rem] rounded-full bg-azure/15 blur-[120px]"
      />

      <Container className="relative py-14 md:py-20">
        <div className="max-w-3xl">
          {icon ? <IconBadge icon={icon} tone="light" /> : null}
          <Eyebrow tone="light" className={icon ? "mt-6" : undefined}>
            {eyebrow}
          </Eyebrow>

          <h1 className="mt-5 text-[2.25rem] leading-[1.08] text-white sm:text-5xl md:text-[3.25rem]">{title}</h1>

          {lede ? <p className="lede mt-6 text-azure-3/75">{lede}</p> : null}

          {meta && meta.length > 0 ? (
            <div className="mt-7 flex flex-wrap gap-2">
              {meta.map((item) => (
                <Pill key={item} tone="light">
                  {item}
                </Pill>
              ))}
            </div>
          ) : null}

          {primary || secondary ? (
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {primary ? (
                <Link href={primary.href} className="btn btn-primary">
                  {primary.label}
                  <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
                </Link>
              ) : null}
              {secondary ? (
                secondary.external ? (
                  <a
                    href={secondary.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-on-dark"
                  >
                    {secondary.label}
                  </a>
                ) : (
                  <Link href={secondary.href} className="btn btn-on-dark">
                    {secondary.label}
                  </Link>
                )
              ) : null}
            </div>
          ) : null}
        </div>

        {children}
      </Container>
    </section>
  );
}
