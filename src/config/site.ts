// FONTE ÚNICA DE VERDADE DA MARCA. Troque os [PLACEHOLDERS] quando definir.
export const site = {
  name: "[NOME DA AGÊNCIA]",
  tagline: "Marketing digital com método, transparência e performance",
  description:
    "Agência de marketing digital remota: social media, gestão de tráfego pago e criação de sites para empresas do Sul e Sudeste do Brasil.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  whatsapp: "5500000000000", // DDI+DDD+número, só dígitos
  email: "contato@example.com",
  cnpj: "", // preencher quando houver
  social: { instagram: "", linkedin: "" },
  partners: [
    { name: "[NOME DO SÓCIO 1]", role: "[FUNÇÃO]", bio: "[MINI-BIO]" },
    { name: "[NOME DO SÓCIO 2]", role: "[FUNÇÃO]", bio: "[MINI-BIO]" },
  ],
  regions: "Sul (PR, SC, RS) e Sudeste (SP, RJ, MG, ES)",
};
export const waLink = (msg: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
