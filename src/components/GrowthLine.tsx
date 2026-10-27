// SVG inline, animado só com stroke-dashoffset (CSS). Decorativo.
export function GrowthLine() {
  return (
    <svg viewBox="0 0 300 120" aria-hidden="true" className="w-full max-w-md text-accent">
      <path className="draw" d="M5 110 L60 85 L110 92 L165 50 L220 58 L295 8" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
