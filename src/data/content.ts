// Dados reais entram aqui. Listas vazias => seções ocultas (nada de cases/números inventados).
export const stats: { value: number; label: string; suffix?: string }[] = [];
export const cases: { title: string; segment: string; summary: string; demo?: boolean }[] = [];
export const testimonials: { name: string; role: string; text: string }[] = [];
export const why = [
  ["Método documentado", "Cada projeto segue as mesmas etapas, do diagnóstico à otimização."],
  ["Performance técnica", "Sites rápidos e acessíveis, medidos com Lighthouse."],
  ["Comunicação clara", "Relatórios em linguagem simples, sem jargão."],
  ["Atendimento próximo", "Você fala direto com os sócios."],
];
export const serviceFaq: Record<string, { q: string; a: string }[]> = {
  "social-media": [{ q: "Quantas postagens por mês?", a: "[DEFINIR PACOTES]" }, { q: "Vocês produzem as imagens?", a: "Sim, conforme o plano contratado." }],
  "trafego-pago": [{ q: "Qual o investimento mínimo em anúncios?", a: "[DEFINIR]. Varia por segmento e objetivo." }, { q: "Há garantia de resultado?", a: "Não. Nenhuma agência séria promete isso; trabalhamos com metas e otimização contínua." }],
  websites: [{ q: "Qual o prazo de entrega?", a: "[DEFINIR PRAZOS]" }, { q: "O site fica meu?", a: "Sim. Combinamos domínio e hospedagem em contrato." }],
};
export const legal = {
  "politica-de-privacidade": { title: "Política de Privacidade", sections: [
    ["Dados coletados", "Coletamos os dados enviados no formulário (nome, empresa, segmento, cidade, serviço, investimento e WhatsApp) e, com seu consentimento, dados de navegação via analytics."],
    ["Finalidade", "Responder ao seu pedido de diagnóstico e melhorar o site."],
    ["Seus direitos (LGPD)", "Você pode solicitar acesso, correção ou exclusão dos dados pelo e-mail de contato."],
    ["Cookies", "Scripts de análise só carregam após o seu aceite no banner."]] },
  termos: { title: "Termos de Uso", sections: [
    ["Uso do site", "O conteúdo é informativo e não constitui promessa de resultados."],
    ["Propriedade intelectual", "Textos, marca e design pertencem à agência."],
    ["Alterações", "Estes termos podem ser atualizados a qualquer momento."]] },
} as const;
