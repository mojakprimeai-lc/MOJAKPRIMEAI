"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2, ChevronDown, Loader2 } from "lucide-react";

import { ReplyChannels } from "@/components/contact-links";
import { cx } from "@/components/ui/primitives";
import { formErrors, startCopy, urgencyOptions } from "@/lib/site-content";

type State = "idle" | "sending" | "sent" | "error";

type Fields = {
  name: string;
  email: string;
  phone: string;
  problem: string;
  current: string;
  urgency: string;
};

const empty: Fields = {
  name: "",
  email: "",
  phone: "",
  problem: "",
  current: "",
  urgency: "",
};

const inputClass =
  "w-full rounded-xl border border-ink/15 bg-paper px-4 text-[1rem] text-ink transition-colors placeholder:text-ink/35 focus:border-azure focus:bg-white focus:outline-none";

export function StartForm() {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");
  const [fields, setFields] = useState<Fields>(empty);

  function update(name: keyof Fields, value: string) {
    setFields((current) => ({ ...current, [name]: value }));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "sending") return;

    const validationError = validate(fields);
    if (validationError) {
      setState("error");
      setError(validationError);
      return;
    }

    const form = event.currentTarget;
    const data = new FormData(form);
    setState("sending");
    setError("");

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(
          Array.from(data.entries()).map(([key, value]) => [key, String(value)]),
        ).toString(),
      });

      if (!response.ok) {
        setState("error");
        setError(formErrors.send);
        return;
      }

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
        <p className="mt-3 text-ink/75">{startCopy.sentBody}</p>
        <ReplyChannels className="mt-5" />
        <button type="button" onClick={() => setState("idle")} className="btn btn-outline mt-7">
          {startCopy.another}
        </button>
      </div>
    );
  }

  return (
    <form
      name="mojak-start"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="website"
      onSubmit={onSubmit}
      className="card p-6 md:p-8"
      noValidate
    >
      <input type="hidden" name="form-name" value="mojak-start" />
      <div className="grid gap-5">
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

      <div>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label={startCopy.labels.email} htmlFor="email">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              value={fields.email}
              onChange={(event) => update("email", event.target.value)}
              className={cx(inputClass, "h-12")}
            />
          </Field>
          <Field label={startCopy.labels.phone} htmlFor="phone">
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              value={fields.phone}
              onChange={(event) => update("phone", event.target.value)}
              className={cx(inputClass, "h-12")}
            />
          </Field>
        </div>
        <p className="mt-2 text-[0.875rem] text-ink/55">{startCopy.hints.contact}</p>
      </div>

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

      <Field label={startCopy.labels.current} htmlFor="current" hint={startCopy.hints.optional}>
        <textarea
          id="current"
          name="current"
          rows={2}
          value={fields.current}
          onChange={(event) => update("current", event.target.value)}
          className={cx(inputClass, "min-h-20 resize-y py-3")}
        />
      </Field>

      <Field label={startCopy.labels.urgency} htmlFor="urgency" hint={startCopy.hints.optional}>
        <div className="relative">
          <select
            id="urgency"
            name="urgency"
            value={fields.urgency}
            onChange={(event) => update("urgency", event.target.value)}
            className={cx(inputClass, "h-12 appearance-none bg-paper pr-11")}
          >
            <option value="">Select one</option>
            {urgencyOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-ink/45"
            strokeWidth={1.75}
            aria-hidden
          />
        </div>
      </Field>
      </div>

      <div className="absolute left-[-9999px] h-0 w-0 overflow-hidden" inert>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {state === "error" ? (
        <p className="mt-5 flex items-start gap-2.5 rounded-xl bg-red-50 px-4 py-3 text-[0.9375rem] text-red-700" role="alert">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
          {error}
        </p>
      ) : null}

      <button type="submit" disabled={state === "sending"} className="btn btn-primary mt-5 w-full sm:w-auto">
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

function validate(fields: Fields) {
  if (fields.name.trim().length < 2) return formErrors.name;
  const email = fields.email.trim();
  const phone = fields.phone.trim();
  if (!email && !phone) return formErrors.contact;
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return formErrors.email;
  if (phone && phone.replace(/\D/g, "").length < 7) return formErrors.phone;
  if (fields.problem.trim().length < 8) return formErrors.problem;
  if (fields.urgency && !(urgencyOptions as readonly string[]).includes(fields.urgency)) return formErrors.urgency;
  return "";
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
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <label htmlFor={htmlFor} className="text-[0.9375rem] font-medium text-ink/80">
          {label}
          {required ? <span className="ml-1 text-azure-deep">*</span> : null}
        </label>
        {hint ? <span className="text-[0.8125rem] text-ink/45">{hint}</span> : null}
      </div>
      {children}
    </div>
  );
}
