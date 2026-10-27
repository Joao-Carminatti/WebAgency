"use client";
import { track } from "@/lib/track";
export function WhatsAppLink({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  return <a href={href} className={className} target="_blank" rel="noopener noreferrer" onClick={() => track("whatsapp_click")}>{children}</a>;
}
