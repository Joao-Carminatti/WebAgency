import { site } from "@/config/site";
import { services, process as steps, faq } from "@/data/services";
import { stats, cases, testimonials, why } from "@/data/content";
import { HeroVisual } from "@/components/HeroVisual";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { Timeline } from "@/components/Timeline";
import { Counter } from "@/components/Counter";
import { TiltCard } from "@/components/TiltCard";
import { Marquee } from "@/components/Marquee";
import { GoalPicker } from "@/components/GoalPicker";
import { Cta } from "@/components/Cta";

const h2 = "mt-2 text-3xl font-bold md:text-4xl";
export default function Home() {
  const ld = [
    { "@context": "https://schema.org", "@type": "Organization", name: site.name, url: site.url, email: site.email },
    { "@context": "https://schema.org", "@type": "ProfessionalService", name: site.name, description: site.description, url: site.url, areaServed: site.regions },
  ];
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      <section className="dark grid-bg bg-ink text-white">
        <div className="glow">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
            <div>
              <p className="eyebrow">Agência de marketing digital</p>
              <h1 className="mt-3 text-[clamp(2rem,7vw,3.75rem)] font-bold leading-[1.1]">Transforme anúncios e redes sociais em <span className="text-accent-light">clientes reais.</span></h1>
              <p className="mt-6 text-lg text-white/80">Social media, gestão de tráfego pago e criação de sites para empresas e profissionais do Sul e Sudeste, com método, transparência e relatórios claros.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Cta href="/contato" id="hero_diagnostico" variant="amber">Solicitar diagnóstico gratuito</Cta>
                <Cta href="#servicos" id="hero_servicos" variant="ghost-light">Ver serviços</Cta>
              </div>
            </div>
            <HeroVisual />
          </div>
        </div>
      </section>

      <Marquee />

      <section className="border-b border-ink/10 bg-white py-6">
        <ul className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-10 gap-y-3 px-5">
          {["Atendimento direto com os sócios", "Relatórios mensais claros", "Contrato transparente"].map((t) => (
            <li key={t} className="flex items-center gap-3 font-medium"><span className="grid size-8 place-items-center rounded-full bg-accent/10 text-accent"><Icon name="check" className="size-4" /></span>{t}</li>
          ))}
        </ul>
      </section>

      {stats.length > 0 && <section className="mx-auto grid max-w-6xl gap-6 px-5 py-12 md:grid-cols-4">{stats.map((s) => <Counter key={s.label} {...s} />)}</section>}

      <section id="servicos" className="mx-auto max-w-6xl px-5 py-20">
        <p className="eyebrow">O que fazemos</p>
        <h2 className={h2}>Três frentes para fazer seu negócio crescer</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.1}>
              <TiltCard><article className="flex h-full flex-col rounded-card border border-ink/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center justify-between"><span className="grid size-12 place-items-center rounded-xl bg-ink text-accent-light"><Icon name={s.slug} /></span><span className="font-display text-3xl font-bold text-ink/15">0{i + 1}</span></div>
                <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-muted">{s.for}</p>
                <ul className="mt-4 grid gap-2">{s.includes.map((x) => <li key={x} className="flex gap-2"><Icon name="check" className="mt-1 size-4 shrink-0 text-accent" />{x}</li>)}</ul>
                <p className="mt-4 text-sm font-medium text-muted">{s.result}</p>
                <a href={`/servicos/${s.slug}`} className="mt-auto pt-6 font-semibold text-accent underline-offset-4 hover:underline">Saiba mais →</a>
              </article></TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <p className="eyebrow">Por onde começar</p>
        <h2 className={h2}>Qual é o seu objetivo agora?</h2>
        <GoalPicker />
      </section>

      <section className="dark bg-ink py-20 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2">
          <div><p className="eyebrow">Como trabalhamos</p><h2 className={h2}>Um processo simples, do diagnóstico à otimização</h2><p className="mt-4 text-white/75">Cada cliente passa pelas mesmas etapas, com entregas claras e acompanhamento mensal.</p></div>
          <Timeline steps={steps} />
        </div>
      </section>

      {cases.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 py-20"><p className="eyebrow">Portfólio</p><h2 className={h2}>Projetos</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">{cases.map((c) => <article key={c.title} className="rounded-card bg-white p-6"><p className="text-sm text-accent">{c.demo ? "Projeto de demonstração" : c.segment}</p><h3 className="font-semibold">{c.title}</h3><p className="text-muted">{c.summary}</p></article>)}</div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="eyebrow">Por que nós</p><h2 className={h2}>Diferenciais que você pode verificar</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {why.map(([t, d], i) => <Reveal key={t} delay={i * 0.08}><div className="flex h-full gap-5 rounded-card border border-ink/10 bg-white p-6"><span className="font-display text-4xl font-bold text-accent/40">0{i + 1}</span><div><h3 className="text-lg font-semibold">{t}</h3><p className="mt-1 text-muted">{d}</p></div></div></Reveal>)}
        </div>
      </section>

      {testimonials.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 py-12"><p className="eyebrow">Depoimentos</p><h2 className={h2}>O que dizem os clientes</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">{testimonials.map((t) => <blockquote key={t.name} className="rounded-card bg-white p-6"><p>{t.text}</p><footer className="mt-2 text-muted">{t.name}, {t.role}</footer></blockquote>)}</div>
        </section>
      )}

      <section className="mx-auto max-w-3xl px-5 pb-20">
        <p className="eyebrow">Dúvidas</p><h2 className={h2}>Perguntas frequentes</h2>
        {faq.map((f) => <details key={f.q} className="mt-4 rounded-card border border-ink/10 bg-white p-5"><summary className="cursor-pointer font-semibold">{f.q}</summary><p className="mt-3 text-muted">{f.a}</p></details>)}
      </section>

      <section className="dark grid-bg bg-ink px-5 py-20 text-center text-white">
        <h2 className="text-3xl font-bold md:text-4xl">Pronto para ter mais clientes?</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/80">Peça um diagnóstico gratuito e descubra onde estão as oportunidades do seu negócio, sem compromisso.</p>
        <div className="mt-8"><Cta href="/contato" id="cta_final" variant="amber">Solicitar diagnóstico gratuito</Cta></div>
      </section>
    </main>
  );
}
