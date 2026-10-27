import type { Metadata } from "next";
import { site } from "@/config/site";
export const metadata: Metadata = { title: "Sobre", description: "Conheça os sócios da agência de marketing digital e como trabalhamos.", alternates: { canonical: "/sobre" } };
export default function Sobre() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="text-4xl font-bold">Sobre a {site.name}</h1>
      <p className="mt-4 text-lg text-muted">Agência 100% remota, atendendo empresas do {site.regions}. Somos uma agência nova e priorizamos método, transparência e atendimento direto.</p>
      {site.partners.map((p) => <section key={p.name} className="mt-8"><h2 className="text-2xl font-bold">{p.name}</h2><p className="text-accent">{p.role}</p><p className="text-muted">{p.bio}</p></section>)}
    </main>
  );
}
