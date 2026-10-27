"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
export function Counter({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!seen) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return setN(value);
    const t0 = performance.now(); let id = 0;
    const tick = (t: number) => { const p = Math.min((t - t0) / 1200, 1); setN(Math.round(value * p)); if (p < 1) id = requestAnimationFrame(tick); };
    id = requestAnimationFrame(tick); return () => cancelAnimationFrame(id);
  }, [seen, value]);
  return <div ref={ref} className="text-center"><div className="font-display text-4xl font-bold">{n}{suffix}</div><div className="text-muted">{label}</div></div>;
}
