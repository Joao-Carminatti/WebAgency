"use client";
import { track } from "@/lib/track";
export function Cta({ href, id, variant = "primary", children }: { href: string; id: string; variant?: "primary" | "ghost" | "amber" | "ghost-light"; children: React.ReactNode }) {
  return <a href={href} className={`btn btn-${variant}`} onClick={() => track("cta_click", { id })}>{children}</a>;
}
