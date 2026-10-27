"use client";
import { LazyMotion, domAnimation, m, useScroll } from "motion/react";
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <LazyMotion features={domAnimation}>
      <m.div aria-hidden="true" style={{ scaleX: scrollYProgress }} className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-accent-light" />
    </LazyMotion>
  );
}
