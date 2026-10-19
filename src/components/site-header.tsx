"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { BrandMark } from "@/components/brand-mark";
import { cx } from "@/components/ui/primitives";
import { company, nav } from "@/lib/company";
import { home } from "@/lib/site-content";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [renderedPath, setRenderedPath] = useState(pathname);

  if (renderedPath !== pathname) {
    setRenderedPath(pathname);
    setDrawerOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDrawerOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>

      <header
        className={cx(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          scrolled
            ? "border-b border-ink/8 bg-paper/85 backdrop-blur-xl"
            : "border-b border-transparent bg-paper/40 backdrop-blur-sm",
        )}
      >
        <div className="container-x flex h-[var(--header-h)] items-center justify-between gap-4">
          <Link href="/" aria-label={`${company.name} home`} className="-ml-1 rounded-lg px-1 py-1">
            <BrandMark compact />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cx(
                  "inline-flex min-h-12 items-center rounded-lg px-3.5 text-[0.9375rem] font-medium transition-colors",
                  isActive(item.href) ? "text-ink" : "text-ink/65 hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/start" className="btn btn-primary hidden lg:inline-flex">
              {home.actionLabel}
            </Link>
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
              aria-expanded={drawerOpen}
              className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-ink/12 bg-white text-ink lg:hidden"
            >
              <Menu className="h-5 w-5" strokeWidth={1.75} aria-hidden />
            </button>
          </div>
        </div>
      </header>

      <div
        className={cx("fixed inset-0 z-60 lg:hidden", drawerOpen ? "pointer-events-auto" : "pointer-events-none")}
        aria-hidden={!drawerOpen}
      >
        <div
          className={cx(
            "absolute inset-0 bg-ink/60 backdrop-blur-sm transition-opacity duration-300",
            drawerOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setDrawerOpen(false)}
        />
        <div
          className={cx(
            "absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-paper shadow-lift-lg transition-transform duration-300",
            drawerOpen ? "translate-x-0" : "translate-x-full",
          )}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <div className="flex h-[var(--header-h)] items-center justify-between border-b border-ink/8 px-5">
            <BrandMark compact />
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-ink/12 bg-white text-ink"
            >
              <X className="h-5 w-5" strokeWidth={1.75} aria-hidden />
            </button>
          </div>
          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 py-6">
            <ul className="space-y-1">
              <li>
                <Link href="/" className="block rounded-xl px-4 py-3.5 text-lg font-medium text-ink hover:bg-white">
                  Home
                </Link>
              </li>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className="block rounded-xl px-4 py-3.5 text-lg font-medium text-ink hover:bg-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="border-t border-ink/8 px-5 py-5">
            <Link href="/start" className="btn btn-primary w-full">
              {home.actionLabel}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
