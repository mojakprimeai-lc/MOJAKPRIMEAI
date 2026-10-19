import { NextResponse } from "next/server";
import { Resend } from "resend";

import { company } from "@/lib/company";
import { formErrors, urgencyOptions } from "@/lib/site-content";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  problem?: string;
  current?: string;
  decision?: string;
  urgency?: string;
  investment?: string;
  website?: string;
};

const reference = () => {
  const stamp = Date.now().toString(36).toUpperCase().slice(-4);
  const salt = Math.random().toString(36).toUpperCase().slice(2, 5);
  return `MP-${stamp}${salt}`;
};

const clean = (value: unknown, max = 400) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

const digits = (value: string) => value.replace(/\D/g, "");

export async function POST(request: Request) {
  let body: Payload;

  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: formErrors.invalid }, { status: 400 });
  }

  if (clean(body.website)) {
    return NextResponse.json({ ok: true, reference: reference() });
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 160);
  const phone = clean(body.phone, 40);
  const problem = clean(body.problem, 2000);
  const current = clean(body.current, 2000);
  const decision = clean(body.decision, 200);
  const urgency = clean(body.urgency, 40);
  const investment = clean(body.investment, 200);
  const urgencyLabel = urgencyOptions.find((option) => option.value === urgency)?.label;

  if (name.length < 2) {
    return NextResponse.json({ error: formErrors.name }, { status: 422 });
  }
  if (!phone && !email) {
    return NextResponse.json({ error: formErrors.contact }, { status: 422 });
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json({ error: formErrors.email }, { status: 422 });
  }
  if (phone && digits(phone).length < 7) {
    return NextResponse.json({ error: formErrors.phone }, { status: 422 });
  }
  if (problem.length < 8) {
    return NextResponse.json({ error: formErrors.problem }, { status: 422 });
  }
  if (current.length < 2) {
    return NextResponse.json({ error: formErrors.current }, { status: 422 });
  }
  if (decision.length < 2) {
    return NextResponse.json({ error: formErrors.decision }, { status: 422 });
  }
  if (!urgencyLabel) {
    return NextResponse.json({ error: formErrors.urgency }, { status: 422 });
  }
  if (investment.length < 2) {
    return NextResponse.json({ error: formErrors.investment }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  if (!apiKey || !from) {
    return NextResponse.json({ error: "unconfigured" }, { status: 503 });
  }

  const ref = reference();
  const text = [
    `Reference: ${ref}`,
    "This is an intake. It is not a build quote.",
    "",
    `Name: ${name}`,
    `Email: ${email || "—"}`,
    `Phone: ${phone || "—"}`,
    `Urgency: ${urgencyLabel}`,
    `Expected investment: ${investment}`,
    `Who decides: ${decision}`,
    "",
    "Problem:",
    problem,
    "",
    "Handled today:",
    current,
  ].join("\n");

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from,
      to: company.email,
      replyTo: email || undefined,
      subject: `MOJAK start ${ref}`,
      text,
    });

    if (result.error) {
      console.error("[enquiry] delivery failed", { reference: ref });
      return NextResponse.json({ error: formErrors.send }, { status: 502 });
    }
  } catch {
    console.error("[enquiry] delivery failed", { reference: ref });
    return NextResponse.json({ error: formErrors.send }, { status: 502 });
  }

  console.info("[enquiry] delivered", { reference: ref });
  return NextResponse.json({ ok: true, reference: ref });
}
