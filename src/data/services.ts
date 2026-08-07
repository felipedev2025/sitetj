import type { LucideIcon } from "lucide-react";
import { MonitorCog, GraduationCap, Wrench, Package } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  description: string;
  image?: string;
  icon?: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "softwares",
    title: "Softwares para automação comercial",
    description:
      "Conectamos o seu negócio às melhores soluções de automação do mercado. Garanta máxima eficiência, processos otimizados e a alta performance que sua empresa precisa para crescer.",
    icon: MonitorCog,
  },
  {
    slug: "treinamento",
    title: "Treinamento",
    description:
      "Treinamento por módulo e processo, 100% prático, com mais agilidade no atendimento ao cliente e total segurança da equipe na utilização do sistema.",
    icon: GraduationCap,
  },
  {
    slug: "suporte",
    title: "Suporte e assistência técnica",
    description:
      "Assistência técnica autorizada para manutenção e reparo de balanças, impressoras e todo equipamento que mantém sua operação em movimento — com técnicos treinados diretamente pelas autorizadas e estrutura de suporte para toda a região.",
    icon: Wrench,
  },
  {
    slug: "equipamentos",
    title: "Venda de equipamentos e periféricos",
    description:
      "Impressoras térmicas e fiscais, leitores de código de barras, coletores de dados, balanças, relógios de ponto, computadores, monitores, gavetas, etiquetadoras, pin pads e nobreaks — das melhores marcas do mercado, para empresas de grande, médio ou pequeno porte.",
    icon: Package,
  },
];

// SAT foi descontinuado (substituído por NFC-e) e não é mais listado.
export const fiscalCertificates = [
  { label: "Nota Fiscal Paulista", image: "/icons/certificado-nota-fiscal-paulista.png" },
  { label: "NF-e", image: "/icons/certificado-nfe.png" },
  { label: "NFS-e", image: "/icons/certificado-nfse.png" },
  { label: "NFC-e", image: "/icons/certificado-nfce.png" },
  { label: "SPED", image: "/icons/certificado-sped.png" },
];

export const sti3Support = {
  title: "Atendimento humano e sistema intuitivo que dão o suporte necessário para o seu negócio seguir crescendo",
  description:
    "Aqui você não conversa com robôs. Você é atendido por uma equipe preparada para entender a sua necessidade e resolver o que for preciso de forma simples, rápida e eficiente.",
  features: ["Suporte humano", "Sistema intuitivo", "Central de ajuda", "Painel de controle"],
  cta: "Falar com nosso suporte",
};

export const infrastructureItems = [
  "Servidores",
  "VPN",
  "Backup",
  "Configuração e suporte remoto",
  "Suporte presencial",
  "Atualizações do sistema",
  "Migração de dados",
  "Integrações",
];
