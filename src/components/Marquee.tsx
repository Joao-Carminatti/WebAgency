const items = ["Social Media", "Tráfego Pago", "Meta Ads", "Google Ads", "Websites", "Landing Pages", "Relatórios mensais", "Atendimento direto"];
export function Marquee() {
  const row = [...items, ...items];
  return (
    <div aria-hidden="true" className="overflow-hidden bg-ink-2 py-3 text-sm uppercase tracking-widest text-white/70">
      <div className="marquee">{row.map((t, i) => <span key={i} className="mx-6 whitespace-nowrap">{t} <span className="text-accent-light">•</span></span>)}</div>
    </div>
  );
}
