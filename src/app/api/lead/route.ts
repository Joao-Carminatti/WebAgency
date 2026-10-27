import { NextResponse } from "next/server";
const required = ["nome", "empresa", "segmento", "cidade", "whatsapp"];
export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object") return NextResponse.json({ ok: false }, { status: 400 });
  if (body.website) return NextResponse.json({ ok: true }); // honeypot
  for (const k of required)
    if (typeof body[k] !== "string" || !body[k].trim() || body[k].length > 200)
      return NextResponse.json({ ok: false, field: k }, { status: 422 });
  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) {
    if (process.env.NODE_ENV === "development") console.warn("[lead] LEAD_WEBHOOK_URL não definida. Lead:", body);
    return NextResponse.json({ ok: false, reason: "no_webhook" }, { status: 503 }); // cliente mostra fallback WhatsApp
  }
  const r = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) }).catch(() => null);
  return NextResponse.json({ ok: !!r?.ok }, { status: r?.ok ? 200 : 502 });
}
