// FONTE ÚNICA DE VERDADE DA MARCA. Troque os [PLACEHOLDERS] quando definir.
export const site = {
  name: "[NOME DA AGÊNCIA]",
  tagline: "Marketing digital com método, transparência e performance",
  description:
    "Agência de marketing digital remota: social media, gestão de tráfego pago e criação de sites para empresas do Sul e Sudeste do Brasil.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  whatsapp: "5548988027036", // DDI+DDD+número, só dígitos
  email: "contato@example.com",
  cnpj: "", // preencher quando houver
  social: { instagram: "", linkedin: "" },
  partners: [
    { name: "João Gabriel Braz Carminatti", role: "Social Media e criação de sites", bio: "Menino bom nascido e criado em Florianópolis." },
    { name: "João Filipe de Lima Matos", role: "Gestão de tráfego pago e social media", bio: "Menino bom e estudioso vindo de Campo Grande." },
  ],
  regions: "Sul (PR, SC, RS) e Sudeste (SP, RJ, MG, ES)",
};
export const waLink = (msg: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;

export const waMessage =
  "Olá! Vim pelo site de vocês e gostaria de solicitar um diagnóstico gratuito para o meu negócio. Podem me ajudar?";
