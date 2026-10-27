// Ilustração do relatório mensal. Sem números reais: apenas forma.
export function HeroVisual() {
  const rows = [["Leads", "w-4/5"], ["Custo por lead", "w-2/5"], ["Conversões", "w-3/5"]];
  return (
    <figure className="float rounded-card border border-white/10 bg-ink-2 p-5 shadow-2xl" aria-label="Ilustração de relatório mensal">
      <div className="flex items-center gap-1.5" aria-hidden="true"><i className="size-2.5 rounded-full bg-white/30" /><i className="size-2.5 rounded-full bg-white/30" /><i className="size-2.5 rounded-full bg-accent-light" /></div>
      <svg viewBox="0 0 300 130" aria-hidden="true" className="mt-4 w-full text-accent-light">
        <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="currentColor" stopOpacity=".35" /><stop offset="1" stopColor="currentColor" stopOpacity="0" /></linearGradient></defs>
        <path d="M5 118 L60 92 L110 100 L165 58 L220 66 L295 12 V125 H5Z" fill="url(#g)" />
        <path className="draw" d="M5 118 L60 92 L110 100 L165 58 L220 66 L295 12" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <ul className="mt-4 grid gap-3 text-sm text-white/80">
        {rows.map(([l, w]) => <li key={l}><span>{l}</span><div className="mt-1 h-2 rounded-full bg-white/10"><div className={`h-2 rounded-full bg-accent-light grow ${w}`} /></div></li>)}
      </ul>
      <figcaption className="mt-4 text-xs text-white/60">Ilustração do relatório mensal que você recebe.</figcaption>
    </figure>
  );
}
