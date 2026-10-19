import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/primitives";
import { nav } from "@/lib/company";
import { notFoundCopy } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="bg-ink text-paper">
      <Container className="flex min-h-[70vh] flex-col justify-center py-16">
        <h1 className="max-w-2xl text-4xl text-white">{notFoundCopy.title}</h1>
        <p className="lede mt-4 max-w-xl text-azure-3/75">{notFoundCopy.lede}</p>
        <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
          <Link href="/" className="btn btn-primary">
            {notFoundCopy.home}
          </Link>
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="btn btn-on-dark">
              {item.label}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
