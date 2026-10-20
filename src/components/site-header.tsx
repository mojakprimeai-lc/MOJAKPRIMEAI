"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronRight, Menu, X } from "lucide-react";

import { BrandMark } from "@/components/brand-mark";
import { PhoneLink, WhatsAppLink } from "@/components/contact-links";
import { cx } from "@/components/ui/primitives";
import { company, nav } from "@/lib/company";

const drawerRow =
  "flex w-full items-center gap-8 whitespace-nowrap rounded-xl px-3 py-3 text-[1.0625rem] font-medium text-ink hover:bg-white";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [renderedPath, setRenderedPath] = useState(pathname);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

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
    if (!drawerOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      menuButtonRef.current?.focus();
      setDrawerOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [drawerOpen]);

  useEffect(() => {
    if (drawerOpen) return;
    const active = document.activeElement;
    if (active instanceof HTMLElement && drawerRef.current?.contains(active)) {
      active.blur();
    }
  }, [drawerOpen]);

  function closeDrawer() {
    menuButtonRef.current?.focus();
    setDrawerOpen(false);
  }

  const isActive = (href: string) => pathname === href;
  const pages = nav.filter((item) => item.href !== "/start");
  const start = nav.find((item) => item.href === "/start");

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

          <div className="flex items-center gap-2">
            <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
              {pages.map((item) => (
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
            <div className="hidden items-center gap-2 lg:flex">
              <PhoneLink className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-ink/12 bg-white text-ink transition-colors hover:border-azure/40" />
              <WhatsAppLink className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-ink/12 bg-white text-ink transition-colors hover:border-azure/40" />
            </div>
            {start ? (
              <Link
                href={start.href}
                aria-current={isActive(start.href) ? "page" : undefined}
                className="btn btn-primary"
              >
                {start.label}
              </Link>
            ) : null}
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
              aria-expanded={drawerOpen}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-ink/12 bg-white px-3 text-[0.875rem] font-semibold text-ink lg:hidden"
            >
              <Menu className="h-5 w-5" strokeWidth={1.75} aria-hidden />
              <span>Menu</span>
            </button>
          </div>
        </div>
      </header>

      <div
        ref={drawerRef}
        className={cx("fixed inset-0 z-60 lg:hidden", drawerOpen ? "pointer-events-auto" : "pointer-events-none")}
        inert={!drawerOpen}
      >
        <div
          className={cx(
            "absolute inset-0 bg-ink/60 backdrop-blur-sm transition-opacity duration-300",
            drawerOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={closeDrawer}
        />
        <div
          className={cx(
            "absolute inset-y-0 right-0 flex w-max max-w-[calc(100%-1.5rem)] flex-col bg-paper shadow-lift-lg transition-transform duration-300",
            drawerOpen ? "translate-x-0" : "translate-x-full",
          )}
          role="dialog"
          aria-modal={drawerOpen}
          aria-label="Menu"
        >
          <div className="flex h-[var(--header-h)] items-center justify-between gap-6 border-b border-ink/8 px-4">
            <BrandMark compact />
            <button
              type="button"
              onClick={closeDrawer}
              aria-label="Close menu"
              className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-ink/12 bg-white text-ink"
            >
              <X className="h-5 w-5" strokeWidth={1.75} aria-hidden />
            </button>
          </div>
          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-2 py-3">
            <ul className="space-y-1">
              {pages.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    onClick={(event) => event.currentTarget.blur()}
                    className={drawerRow}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="h-4 w-4 shrink-0 text-ink/35" aria-hidden />
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <div className="border-t border-ink/8" />
              </li>
              <li>
                <PhoneLink showLabel showChevron onClick={closeDrawer} className={drawerRow} />
              </li>
              <li>
                <WhatsAppLink showLabel showChevron onClick={closeDrawer} className={drawerRow} />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
