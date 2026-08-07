export type AlertSeverity = "critical" | "warning" | "info";

export type PortalAlert = {
  severity: AlertSeverity;
  title: string;
  description: string;
  date: string; // ISO
};

export const alerts: PortalAlert[] = [
  {
    severity: "critical",
    title: "Instabilidade na SEFAZ-SP",
    description:
      "Autorização de NFC-e apresentando lentidão intermitente. Emissão em contingência recomendada até normalização.",
    date: "2026-08-05",
  },
  {
    severity: "warning",
    title: "Nova atualização do TJ Sistemas disponível",
    description:
      "Versão com conciliação bancária automática já pode ser agendada com o suporte técnico.",
    date: "2026-07-22",
  },
  {
    severity: "info",
    title: "Reforma Tributária: fase de testes iniciada",
    description:
      "IBS e CBS entraram em período de testes com alíquotas reduzidas. Acompanhe os impactos na aba Reforma Tributária.",
    date: "2026-07-01",
  },
];
