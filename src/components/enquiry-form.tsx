"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";

import { cx } from "@/components/ui/primitives";
import { company } from "@/lib/company";

const interests = [
  { value: "starter", label: "Chat assistant (Starter — from KES 20,000)" },
  { value: "business", label: "Website with assistant (Business — from KES 60,000)" },
  { value: "operations", label: "Online selling or AI POS (from KES 150,000)" },
  { value: "ai-websites", label: "AI-powered website" },
  { value: "ai-chat-assistants", label: "WhatsApp, Facebook or Instagram assistant" },
  { value: "ai-point-of-sale", label: "AI point of sale and stock" },
  { value: "growth-services", label: "SEO, social content, hosting or M-Pesa" },
  { value: "not-sure", label: "Not sure yet — advise me" },
];

type State = "idle" | "sending" | "sent" | "error";

export function EnquiryForm() {
  const params = useSearchParams();

  // Links such as /contact?interest=business preselect the right option.
  const requested = params.get("interest");
  const preselected =
    requested && interests.some((item) => item.value === requested) ? requested : "not-sure";

  const [interest, setInterest] = useState(preselected);
  const [appliedPreselection, setAppliedPreselection] = useState(preselected);
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");
  const [reference, setReference] = useState("");

  if (appliedPreselection !== preselected) {
    setAppliedPreselection(preselected);
    setInterest(preselected);
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "sending") return;

    const form = event.currentTarget;
    const data = new FormData(form);

    setState("sending");
    setError("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          business: data.get("business"),
          phone: data.get("phone"),
          email: data.get("email"),
          interest: data.get("interest"),
          message: data.get("message"),
          website: data.get("website"),
        }),
      });

      const payload = (await response.json()) as { ok?: boolean; reference?: string; error?: string };

      if (!response.ok || !payload.ok) {
        setState("error");
        setError(payload.error ?? "That did not go through. Please try again.");
        return;
      }

      setReference(payload.reference ?? "");
      setState("sent");
      form.reset();
    } catch {
      setState("error");
      setError("We could not reach the server. Check your connection, or email us directly.");
    }
  }

  if (state === "sent") {
    return (
      <div className="card p-7 md:p-9">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-mint/12 text-mint">
          <CheckCircle2 className="h-6 w-6" strokeWidth={1.75} aria-hidden />
        </span>
        <h2 className="mt-5 text-2xl">We have it. Reference {reference}</h2>
        <p className="mt-3 text-ink/70">
          Keep that reference — quote it in any email or call and we will know exactly which enquiry you mean.
          A person reads every one of these, and we come back to you the same working day.
        </p>
        <p className="mt-4 text-[0.9375rem] text-ink/65">
          If it is urgent, email{" "}
          <a href={`mailto:${company.email}`} className="font-semibold text-azure-deep underline underline-offset-4">
            {company.email}
          </a>{" "}
          and mention the reference.
        </p>
        <button type="button" onClick={() => setState("idle")} className="btn btn-outline mt-7">
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 md:p-8" noValidate>
      <h2 className="text-2xl">Tell us about your business</h2>
      <p className="mt-2 text-ink/65">
        Two minutes. We come back with what we would build, what it costs, and whether it is even worth doing.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Field label="Your name" htmlFor="name" required>
          <input id="name" name="name" required autoComplete="name" className={inputClass} placeholder="Joseph Muithya" />
        </Field>

        <Field label="Business name" htmlFor="business">
          <input
            id="business"
            name="business"
            autoComplete="organization"
            className={inputClass}
            placeholder="e.g. Kariuki Hardware"
          />
        </Field>

        <Field label="Phone or WhatsApp" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            placeholder="+254 7XX XXX XXX"
          />
        </Field>

        <Field label="Email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={inputClass}
            placeholder="you@business.co.ke"
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="What are you interested in?" htmlFor="interest">
          <select
            id="interest"
            name="interest"
            value={interest}
            onChange={(event) => setInterest(event.target.value)}
            className={inputClass}
          >
            {interests.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Anything you want us to know" htmlFor="message">
          <textarea
            id="message"
            name="message"
            rows={4}
            className={cx(inputClass, "min-h-32 resize-y py-3")}
            placeholder="What you sell, where you are, and what is frustrating you most right now."
          />
        </Field>
      </div>

      {/* Honeypot: hidden from people, irresistible to bots */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <p className="mt-5 text-[0.875rem] text-ink/55">
        Leave a phone number or an email — whichever you prefer we use. We do not share your details with
        anyone, and we do not add you to a mailing list.
      </p>

      {state === "error" ? (
        <p className="mt-5 flex items-start gap-2.5 rounded-xl bg-red-50 px-4 py-3 text-[0.9375rem] text-red-700">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
          {error}
        </p>
      ) : null}

      <button type="submit" disabled={state === "sending"} className="btn btn-primary mt-6 w-full sm:w-auto">
        {state === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} aria-hidden />
            Sending
          </>
        ) : (
          <>
            <Send className="h-4 w-4" strokeWidth={2} aria-hidden />
            Send enquiry
          </>
        )}
      </button>
    </form>
  );
}

const inputClass =
  "h-12 w-full rounded-xl border border-ink/15 bg-paper px-4 text-[1rem] text-ink transition-colors placeholder:text-ink/35 focus:border-azure focus:bg-white focus:outline-none";

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-[0.9375rem] font-medium text-ink/80">
        {label}
        {required ? <span className="ml-1 text-azure-deep">*</span> : null}
      </label>
      {children}
    </div>
  );
}
