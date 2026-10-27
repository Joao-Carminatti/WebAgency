/* eslint-disable @typescript-eslint/no-explicit-any */
export function track(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const w = window as any;
  w.dataLayer?.push({ event, ...params });
  w.gtag?.("event", event, params);
  w.fbq?.("trackCustom", event, params);
}
