"use client";
import { useRef } from "react";
import { LazyMotion, domAnimation, m, useScroll } from "motion/react";
export function Timeline({ steps }: { steps: string[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  return (
    <LazyMotion features={domAnimation}>
      <ol ref={ref} className="relative ml-4 border-l-2 border-current/20 pl-8">
        <m.span aria-hidden="true" style={{ scaleY: scrollYProgress }} className="absolute -left-0.5 top-0 h-full w-0.5 origin-top bg-accent" />
        {steps.map((s, i) => <li key={s} className="pb-8 text-xl"><span className="font-bold text-accent-light">{i + 1}.</span> {s}</li>)}
      </ol>
    </LazyMotion>
  );
}
