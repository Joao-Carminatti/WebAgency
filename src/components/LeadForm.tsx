"use client";
import { useState } from "react";
import { waLink } from "@/config/site";
import { track } from "@/lib/track";

const fields = [
  ["nome", "Nome"], ["empresa", "Empresa"], ["segmento", "Segmento"],
  ["cidade", "Cidade/Estado"], ["whatsapp", "Seu WhatsApp"],
] as const;
const input = "w-full rounded-lg border border-ink/30 bg-white p-3";

export function LeadForm() {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [msg, setMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const errs: Record<string, string> = {};
    for (const [k, label] of fields) if (!data[k]?.trim()) errs[k] = `Informe: ${label}.`;
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setMsg(
      `Olá! Quero solicitar um diagnóstico gratuito.\nNome: ${data.nome}\nEmpresa: ${data.empresa}\nSegmento: ${data.segmento}\nCidade/UF: ${data.cidade}\nInteresse: ${data.servico}\nInvestimento mensal: ${data.investimento}\nWhatsApp: ${data.whatsapp}`,
    );
    setState("sending");
    try {
      const r = await fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      setState(r.ok ? "ok" : "error");
      if (r.ok) track("lead_submit");
    } catch { setState("error"); }
  }
  return (
    <form onSubmit={onSubmit} noValidate className="mx-auto grid w-full max-w-xl gap-4 rounded-card bg-white/60 p-6 shadow-sm">
      {fields.map(([k, label]) => (
        <div key={k}>
          <label htmlFor={k} className="block font-medium">{label}</label>
          <input id={k} name={k} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `${k}-err` : undefined} className={input} />
          {errors[k] && <p id={`${k}-err`} role="alert" className="text-sm text-red-700">{errors[k]}</p>}
        </div>
      ))}
      <div>
        <label htmlFor="servico" className="block font-medium">Serviço de interesse</label>
        <select id="servico" name="servico" className={input}>
          <option>Social Media</option><option>Tráfego Pago</option><option>Websites</option><option>Mais de um</option>
        </select>
      </div>
      <div>
        <label htmlFor="investimento" className="block font-medium">Investimento mensal em marketing</label>
        <select id="investimento" name="investimento" className={input}>
          <option>Ainda não invisto</option><option>Até R$ 1.000</option><option>R$ 1.000 a R$ 5.000</option><option>Acima de R$ 5.000</option>
        </select>
      </div>
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <button className="btn btn-primary" disabled={state === "sending"}>{state === "sending" ? "Enviando…" : "Solicitar diagnóstico gratuito"}</button>
      <div aria-live="polite">
        {state === "ok" && <p>Recebemos seu pedido! Entraremos em contato em breve.</p>}
        {state === "error" && (
          <p>Não conseguimos enviar automaticamente. Seus dados já estão prontos:{" "}
            <a className="font-semibold underline" href={waLink(msg)} target="_blank" rel="noopener noreferrer" onClick={() => track("whatsapp_click", { origin: "form_fallback" })}>enviar pelo WhatsApp</a>.</p>
        )}
      </div>
    </form>
  );
}
