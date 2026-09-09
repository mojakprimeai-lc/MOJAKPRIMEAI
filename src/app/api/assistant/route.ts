import { NextResponse } from "next/server";

import { answer } from "@/lib/assistant";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let message = "";

  try {
    const body = (await request.json()) as { message?: unknown };
    message = typeof body.message === "string" ? body.message.slice(0, 600) : "";
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const result = answer(message);

  return NextResponse.json(result, {
    headers: { "Cache-Control": "no-store" },
  });
}
