"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Mail, Menu, Phone, X } from "lucide-react";

import { BrandMark } from "@/components/brand-mark";
import { cx } from "@/components/ui/primitives";
import { company, nav } from "@/lib/company";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close both menus when the route changes, adjusted during render rather
  // than in an effect so there is no flash of an open drawer on the new page.
  const [renderedPath, setRenderedPath] = useState(pathname);
  if (renderedPath !== pathname) {
    setRenderedPath(pathname);
    setDrawerOpen(false);
    setMenuOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDrawerOpen(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

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
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
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
            {nav.map((item) =>
              "children" in item && item.children ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setMenuOpen(true)}
                  onMouseLeave={() => setMenuOpen(false)}
                >
                  <Link
                    href={item.href}
                    aria-expanded={menuOpen}
                    className={cx(
                      "inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-[0.9375rem] font-medium transition-colors",
                      isActive(item.href) ? "text-ink" : "text-ink/65 hover:text-ink",
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cx("h-4 w-4 transition-transform duration-200", menuOpen && "rotate-180")}
                      strokeWidth={2}
                      aria-hidden
                    />
                  </Link>

                  <div
                    className={cx(
                      "absolute left-0 top-full w-[19rem] pt-3 transition-all duration-200",
                      menuOpen ? "visible opacity-100" : "invisible -translate-y-1 opacity-0",
                    )}
                  >
                    <div className="card overflow-hidden p-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cx(
                            "flex items-center justify-between gap-3 rounded-xl px-3.5 py-3 text-[0.9375rem] font-medium transition-colors",
                            isActive(child.href) ? "bg-azure/8 text-azure-deep" : "text-ink/75 hover:bg-paper-2 hover:text-ink",
                          )}
                        >
                          {child.label}
                          <ArrowRight className="h-4 w-4 opacity-40" strokeWidth={1.75} aria-hidden />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cx(
                    "rounded-lg px-3.5 py-2 text-[0.9375rem] font-medium transition-colors",
                    isActive(item.href) ? "text-ink" : "text-ink/65 hover:text-ink",
                  )}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            {company.phone ? (
              <a
                href={`tel:${company.phone.tel}`}
                className="btn btn-outline hidden xl:inline-flex"
                aria-label={`Call ${company.phone.value}`}
              >
                <Phone className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                {company.phone.value}
              </a>
            ) : null}

            <Link href="/contact" className="btn btn-primary hidden sm:inline-flex">
              Book a free walkthrough
            </Link>

            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
              aria-expanded={drawerOpen}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-ink/12 bg-white text-ink lg:hidden"
            >
              <Menu className="h-5 w-5" strokeWidth={1.75} aria-hidden />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cx(
          "fixed inset-0 z-60 lg:hidden",
          drawerOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
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
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-ink/12 bg-white text-ink"
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
                    className="block rounded-xl px-4 py-3.5 text-lg font-medium text-ink hover:bg-white"
                  >
                    {item.label}
                  </Link>
                  {"children" in item && item.children ? (
                    <ul className="mb-2 ml-4 space-y-0.5 border-l border-ink/10 pl-3">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block rounded-lg px-3 py-2.5 text-[0.9375rem] text-ink/65 hover:bg-white hover:text-ink"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-3 border-t border-ink/8 px-5 py-5">
            <Link href="/contact" className="btn btn-primary w-full">
              Book a free walkthrough
            </Link>
            {company.phone ? (
              <a href={`tel:${company.phone.tel}`} className="btn btn-outline w-full">
                <Phone className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                {company.phone.value}
              </a>
            ) : (
              <a href={`mailto:${company.email}`} className="btn btn-outline w-full">
                <Mail className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                {company.email}
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
