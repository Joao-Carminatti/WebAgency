import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, process as steps } from "@/data/services";
import { serviceFaq } from "@/data/content";
import { Cta } from "@/components/Cta";
export const dynamicParams = false;
export const generateStaticParams = () => services.map((s) => ({ slug: s.slug }));
type P = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return s ? { title: s.title, description: `${s.title}: ${s.for} ${s.result}`, alternates: { canonical: `/servicos/${s.slug}` } } : {};
}
export default async function Service({ params }: P) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  return (
    <main className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="text-4xl font-bold">{s.title}</h1>
      <p className="mt-4 text-lg text-muted">Para quem é: {s.for}</p>
      <h2 className="mt-10 text-2xl font-bold">Entregáveis</h2>
      <ul className="mt-3 list-disc pl-5">{s.includes.map((i) => <li key={i}>{i}</li>)}</ul>
      <p className="mt-4 font-medium">{s.result}</p>
      <h2 className="mt-10 text-2xl font-bold">Processo</h2>
      <ol className="mt-3 list-decimal pl-5">{steps.map((x) => <li key={x}>{x}</li>)}</ol>
      <h2 className="mt-10 text-2xl font-bold">Dúvidas</h2>
      {(serviceFaq[s.slug] ?? []).map((f) => <details key={f.q} className="mt-3 border-b border-ink/20 pb-2"><summary className="cursor-pointer font-semibold">{f.q}</summary><p className="mt-2 text-muted">{f.a}</p></details>)}
      <div className="mt-10"><Cta href="/contato" id={`servico_${s.slug}`}>Solicitar diagnóstico gratuito</Cta></div>
    </main>
  );
}
