import Link from "next/link";
import { site, waLink, waMessage } from "@/config/site";
import { Logo } from "./Logo";
import { WhatsAppLink } from "./WhatsAppLink";
const nav = [["/servicos/social-media", "Social Media"], ["/servicos/trafego-pago", "Tráfego Pago"], ["/servicos/websites", "Websites"], ["/sobre", "Sobre"]];
export function Header() {
  return (
    <header className="bg-ink text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-4">
        <Link href="/" aria-label="Início"><Logo /></Link>
        <nav aria-label="Principal" className="order-last flex w-full gap-5 overflow-x-auto whitespace-nowrap text-sm text-white/80 md:order-none md:w-auto">
          {nav.map(([h, l]) => <Link key={h} href={h} className="py-1 hover:text-white">{l}</Link>)}
        </nav>
        <Link href="/contato" className="btn btn-amber hidden !py-2 text-sm md:inline-block">Diagnóstico gratuito</Link>
      </div>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="bg-ink p-8 text-center text-white">
      <p><WhatsAppLink href={waLink(waMessage)} className="underline">WhatsApp</WhatsAppLink> · <a className="underline" href={`mailto:${site.email}`}>{site.email}</a></p>
      <p className="mt-2 text-sm"><a href="/politica-de-privacidade" className="underline">Privacidade</a> · <a href="/termos" className="underline">Termos</a></p>
      <p className="mt-2 text-sm text-white/70">© {new Date().getFullYear()} {site.name}{site.cnpj && ` · CNPJ ${site.cnpj}`}</p>
    </footer>
  );
}