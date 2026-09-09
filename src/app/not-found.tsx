import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/primitives";
import { solutions } from "@/lib/solutions";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-field" />
      <Container className="relative flex min-h-[70vh] flex-col justify-center py-20">
        <p className="eyebrow text-azure-2">Page not found</p>
        <h1 className="mt-5 max-w-2xl text-4xl text-white md:text-5xl">
          That page does not exist — but everything we build does.
        </h1>
        <p className="lede mt-5 max-w-xl text-azure-3/70">
          Try one of these, or ask Prime at the bottom of the screen and it will point you to the right place.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-primary">
            Back to home
            <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
          </Link>
          <Link href="/work" className="btn btn-on-dark">
            See our work
          </Link>
          <Link href="/contact" className="btn btn-on-dark">
            Book a walkthrough
          </Link>
        </div>

        <ul className="mt-12 flex flex-wrap gap-2">
          {solutions.map((solution) => (
            <li key={solution.slug}>
              <Link
                href={`/solutions/${solution.slug}`}
                className="inline-flex rounded-full border border-azure-3/20 px-4 py-2 text-[0.9375rem] text-azure-3/75 transition-colors hover:border-azure-2/60 hover:text-white"
              >
                {solution.name}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
