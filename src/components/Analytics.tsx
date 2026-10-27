"use client";
import { useEffect, useState } from "react";
import Script from "next/script";
const GA = process.env.NEXT_PUBLIC_GA4_ID, GTM = process.env.NEXT_PUBLIC_GTM_ID, PX = process.env.NEXT_PUBLIC_META_PIXEL_ID;
type C = "yes" | "no" | null;
export function Analytics() {
  const [c, setC] = useState<C>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => { try { setC(localStorage.getItem("consent") as C); } catch {} setReady(true); }, []);
  const set = (v: "yes" | "no") => { try { localStorage.setItem("consent", v); } catch {} setC(v); };
  const any = GA || GTM || PX;
  return (
    <>
      {c === "yes" && GTM && <Script id="gtm" strategy="lazyOnload">{`window.dataLayer=window.dataLayer||[];window.dataLayer.push({'gtm.start':Date.now(),event:'gtm.js'});var s=document.createElement('script');s.async=1;s.src='https://www.googletagmanager.com/gtm.js?id=${GTM}';document.head.appendChild(s);`}</Script>}
      {c === "yes" && GA && <><Script src={`https://www.googletagmanager.com/gtag/js?id=${GA}`} strategy="lazyOnload" /><Script id="ga" strategy="lazyOnload">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA}');`}</Script></>}
      {c === "yes" && PX && <Script id="px" strategy="lazyOnload">{`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${PX}');fbq('track','PageView');`}</Script>}
      {ready && any && c === null && (
        <div role="dialog" aria-label="Consentimento de cookies" className="fixed inset-x-3 bottom-3 z-50 mx-auto flex max-w-2xl flex-wrap items-center gap-3 rounded-card bg-ink p-4 text-sm text-white shadow-lg">
          <p className="flex-1">Usamos cookies de análise para melhorar o site. Veja a <a className="underline" href="/politica-de-privacidade">Política de Privacidade</a>.</p>
          <button onClick={() => set("no")} className="rounded-lg border border-white px-4 py-2">Recusar</button>
          <button onClick={() => set("yes")} className="rounded-lg bg-white px-4 py-2 font-semibold text-ink">Aceitar</button>
        </div>
      )}
    </>
  );
}
