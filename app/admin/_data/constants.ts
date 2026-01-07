export const LOSS_REASONS = [
  "Preço muito alto",
  "Não respondeu ao contato",
  "Concorrente com melhor oferta",
  "Não tinha necessidade no momento",
  "Serviço não atendia às necessidades",
  "Falta de orçamento",
  "Decidiu por outra solução",
  "Prazo de entrega muito longo",
  "Falta de confiança na empresa",
  "Motivos pessoais",
  "Outro"
] as const;

export type LossReason = typeof LOSS_REASONS[number];
