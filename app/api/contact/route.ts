import { NextRequest, NextResponse } from "next/server";
import { hasSameOrigin, isValidEmail, validateContact } from "@/lib/contact";

export const runtime = "nodejs";

const maxBodyBytes = 24000;
const responseHeaders = { "Cache-Control": "no-store" };

function reply(body: Record<string, unknown>, status: number) {
  return NextResponse.json(body, { status, headers: responseHeaders });
}

async function readLimitedBody(request: NextRequest): Promise<string> {
  if (!request.body) throw new Error("empty-body");
  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > maxBodyBytes) {
      await reader.cancel();
      throw new Error("body-too-large");
    }
    chunks.push(value);
  }
  const joined = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) {
    joined.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return new TextDecoder("utf-8", { fatal: true }).decode(joined);
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  // Reverse proxies must preserve the public Host and provide Next.js with the
  // correct request scheme. Forwarded-host is deliberately not trusted here.
  if (!hasSameOrigin(origin, request.headers.get("host"), request.nextUrl) || request.headers.get("sec-fetch-site") === "cross-site") {
    return reply({ ok: false, message: "This inquiry must be submitted from this website." }, 403);
  }
  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
    return reply({ ok: false, message: "Please submit your inquiry using the website form." }, 415);
  }
  const declaredSize = Number(request.headers.get("content-length") || 0);
  if (declaredSize > maxBodyBytes) {
    return reply({ ok: false, message: "Your inquiry is too long. Please shorten it and try again." }, 413);
  }

  let payload: unknown;
  try {
    payload = JSON.parse(await readLimitedBody(request));
  } catch (error) {
    const tooLarge = error instanceof Error && error.message === "body-too-large";
    return reply({ ok: false, message: tooLarge ? "Your inquiry is too long. Please shorten it and try again." : "Your inquiry could not be read. Please try again." }, tooLarge ? 413 : 400);
  }
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return reply({ ok: false, message: "Please complete the inquiry form." }, 400);
  }
  const honeypot = (payload as Record<string, unknown>).website;
  if (honeypot !== undefined && honeypot !== "") {
    return reply({ ok: false, message: "Your inquiry could not be submitted. Please try again." }, 400);
  }
  const validation = validateContact(payload);
  if (!validation.valid) {
    return reply({ ok: false, errors: validation.errors, message: "Please check the highlighted fields." }, 400);
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.CONTACT_FROM_EMAIL?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim();
  if (!apiKey || !from || !to || !isValidEmail(from) || !isValidEmail(to)) {
    return reply({ ok: false, message: "Email delivery is not configured yet. Your inquiry has not been sent." }, 503);
  }

  const { name, email, company, service, description } = validation.values;
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Karl Mosses website inquiry: ${service}`,
        text: [
          "New inquiry from karlmosses.com",
          "",
          `Name: ${name}`,
          `Email: ${email}`,
          `Company: ${company || "Not provided"}`,
          `Service: ${service}`,
          "",
          "Project description:",
          description,
        ].join("\n"),
      }),
      signal: AbortSignal.timeout(12000),
      cache: "no-store",
    });
    if (!response.ok) {
      return reply({ ok: false, message: "The email service could not accept your inquiry. Your details are still here; please try again later." }, 502);
    }
    const receipt: unknown = await response.json();
    if (!receipt || typeof receipt !== "object" || !("id" in receipt) || typeof receipt.id !== "string" || !receipt.id.trim()) {
      return reply({ ok: false, message: "Email acceptance could not be confirmed. Please try again later." }, 502);
    }
    return reply({ ok: true, id: receipt.id }, 200);
  } catch {
    return reply({ ok: false, message: "Email acceptance could not be confirmed. Your details are still here; please try again later." }, 502);
  }
}
