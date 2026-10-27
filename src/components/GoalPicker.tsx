"use client";
import { useState } from "react";
import { track } from "@/lib/track";
const goals = [
  { label: "Mais clientes com anúncios", title: "Gestão de Tráfego Pago", text: "Campanhas no Meta Ads e Google Ads com rastreamento de conversões e otimização contínua.", href: "/servicos/trafego-pago" },
  { label: "Presença profissional nas redes", title: "Social Media", text: "Planejamento, criação e publicação de conteúdo com relatório mensal.", href: "/servicos/social-media" },
  { label: "Um site que converta", title: "Criação de Sites", text: "Site rápido, acessível e pronto para receber anúncios e gerar contatos.", href: "/servicos/websites" },
  { label: "Quero tudo integrado", title: "Estratégia integrada", text: "Site, redes e anúncios trabalhando juntos. Começamos com um diagnóstico para definir as prioridades.", href: "/contato" },
];
export function GoalPicker() {
  const [i, setI] = useState(0);
  const g = goals[i];
  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-2">
      <div role="group" aria-label="Escolha seu objetivo" className="grid gap-3">
        {goals.map((x, k) => (
          <button key={x.label} aria-pressed={k === i} onClick={() => { setI(k); track("goal_select", { goal: x.label }); }}
            className={`rounded-card border-2 p-4 text-left font-semibold transition-transform hover:translate-x-1 ${k === i ? "border-accent bg-white shadow-md" : "border-ink/10 bg-white/60"}`}>
            {x.label}
          </button>
        ))}
      </div>
      <div key={i} aria-live="polite" className="fadeup rounded-card bg-ink p-7 text-white">
        <p className="text-sm uppercase tracking-widest text-accent-light">Recomendado para você</p>
        <h3 className="mt-2 text-2xl font-bold">{g.title}</h3>
        <p className="mt-3 text-white/80">{g.text}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={g.href} className="btn btn-amber">Ver detalhes</a>
          <a href="/contato" className="btn btn-ghost-light">Pedir diagnóstico</a>
        </div>
      </div>
    </div>
  );
}
