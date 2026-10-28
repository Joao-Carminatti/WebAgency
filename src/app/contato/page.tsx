import type { Metadata } from "next";
import { site, waLink } from "@/config/site";
import { LeadForm } from "@/components/LeadForm";
import { WhatsAppLink } from "@/components/WhatsAppLink";
export const metadata: Metadata = { title: "Contato", description: "Solicite um diagnóstico gratuito de marketing digital.", alternates: { canonical: "/contato" } };
export default function Contato() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="mb-4 text-center text-4xl font-bold">Solicite seu diagnóstico gratuito</h1>
      <p className="mb-8 text-center text-muted">Prefere falar direto? <WhatsAppLink href={waLink("Olá! Quero um diagnóstico gratuito.")} className="underline">WhatsApp</WhatsAppLink> ou <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>.</p>
      <LeadForm />
      <p className="mt-8 text-center text-sm text-muted">{site.social.instagram && <a href={site.social.instagram}>Instagram</a>} {site.social.linkedin && <a href={site.social.linkedin}>LinkedIn</a>}</p>
    </main>
  );
}