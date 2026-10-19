"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";

import { cx } from "@/components/ui/primitives";
import { company } from "@/lib/company";
import { formErrors, startCopy, urgencyOptions } from "@/lib/site-content";

type State = "idle" | "sending" | "sent" | "error";

type Fields = {
  name: string;
  email: string;
  phone: string;
  problem: string;
  current: string;
  decision: string;
  urgency: string;
  investment: string;
};

const empty: Fields = {
  name: "",
  email: "",
  phone: "",
  problem: "",
  current: "",
  decision: "",
  urgency: "",
  investment: "",
};

const inputClass =
  "w-full rounded-xl border border-ink/15 bg-paper px-4 text-[1rem] text-ink transition-colors placeholder:text-ink/35 focus:border-azure focus:bg-white focus:outline-none";

export function StartForm() {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");
  const [reference, setReference] = useState("");
  const [fields, setFields] = useState<Fields>(empty);

  function update(name: keyof Fields, value: string) {
    setFields((current) => ({ ...current, [name]: value }));
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
          email: data.get("email"),
          phone: data.get("phone"),
          problem: data.get("problem"),
          current: data.get("current"),
          decision: data.get("decision"),
          urgency: data.get("urgency"),
          investment: data.get("investment"),
          website: data.get("website"),
        }),
      });
      const payload = (await response.json()) as { ok?: boolean; reference?: string; error?: string };

      if (!response.ok || !payload.ok) {
        setState("error");
        setError(payload.error === "unconfigured" ? formErrors.unconfigured : payload.error ?? formErrors.send);
        return;
      }

      setReference(payload.reference ?? "");
      setFields(empty);
      setState("sent");
      form.reset();
    } catch {
      setState("error");
      setError(formErrors.network);
    }
  }

  if (state === "sent") {
    return (
      <div className="card p-7 md:p-9" role="status">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-mint/12 text-mint">
          <CheckCircle2 className="h-6 w-6" strokeWidth={1.75} aria-hidden />
        </span>
        <h2 className="mt-5 text-2xl">{startCopy.sentTitle}</h2>
        {reference ? <p className="mt-3 font-medium text-ink">Reference {reference}</p> : null}
        <p className="mt-3 text-ink/75">{startCopy.sentBody}</p>
        <p className="mt-4 text-[0.9375rem] text-ink/65">
          {startCopy.direct}{" "}
          <a href={`mailto:${company.email}`} className="font-semibold text-azure-deep underline underline-offset-4">
            {company.email}
          </a>
          {reference ? ` and include ${reference}.` : "."}
        </p>
        <button type="button" onClick={() => setState("idle")} className="btn btn-outline mt-7">
          {startCopy.another}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 md:p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={startCopy.labels.name} htmlFor="name" required>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            value={fields.name}
            onChange={(event) => update("name", event.target.value)}
            className={cx(inputClass, "h-12")}
          />
        </Field>
        <Field label={startCopy.labels.phone} htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={fields.phone}
            onChange={(event) => update("phone", event.target.value)}
            className={cx(inputClass, "h-12")}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label={startCopy.labels.email} htmlFor="email" hint={startCopy.hints.contact}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={fields.email}
            onChange={(event) => update("email", event.target.value)}
            className={cx(inputClass, "h-12")}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label={startCopy.labels.problem} htmlFor="problem" required>
          <textarea
            id="problem"
            name="problem"
            required
            rows={4}
            value={fields.problem}
            onChange={(event) => update("problem", event.target.value)}
            className={cx(inputClass, "min-h-28 resize-y py-3")}
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label={startCopy.labels.current} htmlFor="current" required>
          <textarea
            id="current"
            name="current"
            required
            rows={3}
            value={fields.current}
            onChange={(event) => update("current", event.target.value)}
            className={cx(inputClass, "min-h-24 resize-y py-3")}
          />
        </Field>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field label={startCopy.labels.decision} htmlFor="decision" required>
          <input
            id="decision"
            name="decision"
            required
            value={fields.decision}
            onChange={(event) => update("decision", event.target.value)}
            className={cx(inputClass, "h-12")}
          />
        </Field>
        <Field label={startCopy.labels.urgency} htmlFor="urgency" required>
          <select
            id="urgency"
            name="urgency"
            required
            value={fields.urgency}
            onChange={(event) => update("urgency", event.target.value)}
            className={cx(inputClass, "h-12")}
          >
            <option value="">Select one</option>
            {urgencyOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field label={startCopy.labels.investment} htmlFor="investment" required hint={startCopy.hints.investment}>
          <input
            id="investment"
            name="investment"
            required
            value={fields.investment}
            onChange={(event) => update("investment", event.target.value)}
            placeholder={startCopy.hints.investment}
            className={cx(inputClass, "h-12")}
          />
        </Field>
      </div>

      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {state === "error" ? (
        <p className="mt-5 flex items-start gap-2.5 rounded-xl bg-red-50 px-4 py-3 text-[0.9375rem] text-red-700" role="alert">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
          {error}
        </p>
      ) : null}

      <button type="submit" disabled={state === "sending"} className="btn btn-primary mt-6 w-full sm:w-auto">
        {state === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} aria-hidden />
            {startCopy.sending}
          </>
        ) : (
          startCopy.submit
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  required,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-[0.9375rem] font-medium text-ink/80">
        {label}
        {required ? <span className="ml-1 text-azure-deep">*</span> : null}
      </label>
      {children}
      {hint ? <p className="mt-2 text-[0.875rem] text-ink/55">{hint}</p> : null}
    </div>
  );
}
