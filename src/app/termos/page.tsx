import type { Metadata } from "next";
import { legal } from "@/data/content";
const d = legal["termos"];
export const metadata: Metadata = { title: d.title, alternates: { canonical: "/termos" } };
export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="text-4xl font-bold">{d.title}</h1>
      <p className="mt-2 text-sm text-accent">Texto-base: revisar com assessoria jurídica antes de publicar.</p>
      {d.sections.map(([t, x]) => <section key={t} className="mt-6"><h2 className="text-xl font-bold">{t}</h2><p className="text-muted">{x}</p></section>)}
    </main>
  );
}
