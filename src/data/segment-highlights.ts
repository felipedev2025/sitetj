export type SegmentHighlight = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  alt: string;
  whatsappText: string;
};

export const segmentHighlights: SegmentHighlight[] = [
  {
    slug: "bares-e-restaurantes",
    eyebrow: "Para bares e restaurantes",
    title: "Controle seu bar ou restaurante com o nosso sistema móvel, faça tudo pelo celular ou tablet",
    description:
      "Mais um sistema que a TJ Automação leva até você: gestão completa de mesas e comandas, integrada ao seu PDV.",
    features: [
      "Gerencie mesas e comandas",
      "Fechamento da comanda com 1 clique",
      "Recebimento parcial ou por itens",
      "Agrupe e reserve mesas de forma prática",
    ],
    image: "/images/institutional/tj-automacao-tj-sistemas-bar-restaurante.png",
    alt: "TJ Sistemas — gestão de mesas e comandas para bares e restaurantes",
    whatsappText: "Quero saber mais sobre o TJ Sistemas para bares e restaurantes",
  },
  {
    slug: "mercados-e-padarias",
    eyebrow: "Para mercados e padarias",
    title: "Agilize o caixa e o controle de estoque do seu mercado ou padaria",
    description:
      "Sistemas de PDV, balanças e leitores integrados para agilizar o atendimento e manter o controle total do seu estoque.",
    features: [
      "Frente de caixa rápido e integrado",
      "Balanças e etiquetadoras conectadas",
      "Controle de estoque em tempo real",
      "Emissão fiscal automática (NFC-e)",
    ],
    image: "/images/institutional/segmentos/mercados-padarias.jpg",
    alt: "Cliente fazendo compras em um mercado, exemplo de segmento atendido pela TJ Automação",
    whatsappText: "Quero saber mais sobre soluções para mercados e padarias",
  },
  {
    slug: "materiais-de-construcao-e-autopecas",
    eyebrow: "Para materiais de construção e autopeças",
    title: "Agilize vendas e o controle de peças e produtos da sua loja",
    description:
      "Equipamentos e sistemas pensados para o volume e a variedade de itens do seu estoque, do balcão ao depósito.",
    features: [
      "Consulta rápida de preços e estoque",
      "Emissão de nota fiscal simplificada",
      "Controle de múltiplos códigos e fornecedores",
      "Suporte técnico especializado",
    ],
    image: "/images/institutional/segmentos/materiais-construcao-autopecas.jpg",
    alt: "Funcionário organizando produtos em uma loja de materiais de construção, exemplo de segmento atendido pela TJ Automação",
    whatsappText: "Quero saber mais sobre soluções para materiais de construção e autopeças",
  },
  {
    slug: "moda-conveniencia-e-petshop",
    eyebrow: "Para moda, conveniência e petshops",
    title: "Tenha controle total de vendas, trocas e fidelização de clientes",
    description:
      "Sistemas de PDV completos para lojas de varejo, com agilidade no caixa e gestão simples do dia a dia.",
    features: [
      "PDV rápido e intuitivo",
      "Controle de trocas e devoluções",
      "Gestão de clientes e fidelidade",
      "Relatórios de vendas em tempo real",
    ],
    image: "/images/institutional/segmentos/moda-conveniencia-petshop.jpg",
    alt: "Clientes escolhendo roupas em uma loja de moda, exemplo de segmento atendido pela TJ Automação",
    whatsappText: "Quero saber mais sobre soluções para moda, conveniência e petshops",
  },
];
