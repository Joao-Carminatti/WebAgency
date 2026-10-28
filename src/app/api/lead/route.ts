import { NextResponse } from "next/server";

const required = ["nome", "empresa", "segmento", "cidade", "whatsapp"];
const labels: Record<string, string> = {
  nome: "Nome", empresa: "Empresa", segmento: "Segmento", cidade: "Cidade/UF",
  whatsapp: "WhatsApp", servico: "Serviço de interesse", investimento: "Investimento mensal",
};

// Envia o lead por e-mail via Resend (sem dependências). Retorna null se não configurado.
async function sendEmail(b: Record<string, string>) {
  const key = process.env.RESEND_API_KEY, to = process.env.LEAD_TO_EMAIL;
  if (!key || !to) return null;
  const d = b.whatsapp.replace(/\D/g, "");
  const wa = d.startsWith("55") ? d : `55${d}`;
  const text =
    Object.entries(labels).map(([k, l]) => `${l}: ${b[k] || "-"}`).join("\n") +
    `\n\nAbrir conversa no WhatsApp: https://wa.me/${wa}`;
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.LEAD_FROM_EMAIL || "Site <onboarding@resend.dev>",
      to: [to],
      subject: `Novo lead: ${b.nome} (${b.empresa})`.replace(/[\r\n]/g, " "),
      text,
    }),
  }).catch(() => null);
  if (!r?.ok) console.error("[lead] Resend falhou:", r?.status, await r?.text().catch(() => ""));
  return !!r?.ok;
}

// Webhook opcional (n8n/CRM). Pode ser usado junto com o e-mail.
async function sendWebhook(b: Record<string, string>) {
  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) return null;
  const r = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(b) }).catch(() => null);
  return !!r?.ok;
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object") return NextResponse.json({ ok: false }, { status: 400 });
  if (body.website) return NextResponse.json({ ok: true }); // honeypot
  for (const k of required)
    if (typeof body[k] !== "string" || !body[k].trim() || body[k].length > 200)
      return NextResponse.json({ ok: false, field: k }, { status: 422 });
  const lead: Record<string, string> = {};
  for (const k of Object.keys(labels)) lead[k] = String(body[k] ?? "").trim().slice(0, 200);

  const results = (await Promise.all([sendEmail(lead), sendWebhook(lead)])).filter((v) => v !== null);
  if (results.length === 0) {
    if (process.env.NODE_ENV === "development") console.warn("[lead] Nenhum destino configurado. Lead:", lead);
    return NextResponse.json({ ok: false, reason: "not_configured" }, { status: 503 }); // cliente mostra fallback WhatsApp
  }
  const ok = results.some(Boolean);
  return NextResponse.json({ ok }, { status: ok ? 200 : 502 });
}