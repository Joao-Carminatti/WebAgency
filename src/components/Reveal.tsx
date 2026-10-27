"use client";
import { LazyMotion, domAnimation, m } from "motion/react";
export function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div className="h-full" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay }}>
        {children}
      </m.div>
    </LazyMotion>
  );
}
