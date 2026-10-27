import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/config/site";
import { Header, Footer } from "@/components/Chrome";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Analytics } from "@/components/Analytics";
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0f2a33" };
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Agência de marketing digital`, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: { title: site.name, description: site.description, locale: "pt_BR", type: "website" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR" className={`${sora.variable} ${inter.variable}`}><body><ScrollProgress /><Header />{children}<Footer /><Analytics /></body></html>;
}
