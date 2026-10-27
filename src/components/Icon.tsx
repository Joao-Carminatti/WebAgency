const paths: Record<string, string> = {
  "social-media": "M4 5h16v11H9l-5 4V5z",
  "trafego-pago": "M3 17l6-6 4 4 8-9M15 6h6v6",
  websites: "M3 5h18v14H3zM3 9h18M7 7h.01M10 7h.01",
  check: "M5 12l5 5 9-10",
};
export function Icon({ name, className = "size-6" }: { name: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={paths[name]} />
    </svg>
  );
}
