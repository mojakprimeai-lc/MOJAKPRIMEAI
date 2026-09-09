import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  business?: string;
  phone?: string;
  email?: string;
  interest?: string;
  message?: string;
  /** Honeypot. Real people never fill this in. */
  website?: string;
};

const reference = () => {
  const stamp = Date.now().toString(36).toUpperCase().slice(-4);
  const salt = Math.random().toString(36).toUpperCase().slice(2, 5);
  return `MP-${stamp}${salt}`;
};

const clean = (value: unknown, max = 400) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

export async function POST(request: Request) {
  let body: Payload;

  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (clean(body.website)) {
    // Silently accept and drop: a bot filled the hidden field.
    return NextResponse.json({ ok: true, reference: reference() });
  }

  const name = clean(body.name, 120);
  const business = clean(body.business, 160);
  const phone = clean(body.phone, 40);
  const email = clean(body.email, 160);
  const interest = clean(body.interest, 80);
  const message = clean(body.message, 2000);

  if (name.length < 2) {
    return NextResponse.json({ error: "Please give us your name." }, { status: 422 });
  }

  if (!phone && !email) {
    return NextResponse.json(
      { error: "Leave a phone number or an email so we can come back to you." },
      { status: 422 },
    );
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json({ error: "That email address does not look right." }, { status: 422 });
  }

  const ref = reference();

  /*
   * The enquiry is logged on the server. Point this at the company inbox, a
   * Google Sheet or a CRM and the flow is live end to end — the reference and
   * validation above do not change.
   */
  console.info("[enquiry]", {
    reference: ref,
    receivedAt: new Date().toISOString(),
    name,
    business,
    phone,
    email,
    interest,
    message,
  });

  return NextResponse.json({ ok: true, reference: ref });
}
