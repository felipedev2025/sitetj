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
    slug: "restaurantes-bares-lanchonetes-e-fast-food",
    eyebrow: "Para restaurantes, bares, lanchonetes e fast food",
    title: "Agilize o atendimento e o caixa do seu restaurante, bar, lanchonete ou fast food",
    description:
      "PDV e maquininha integrados para dar mais agilidade do pedido ao pagamento, em qualquer formato de atendimento.",
    features: [
      "Frente de caixa rápido e integrado",
      "Pagamento integrado por maquininha",
      "Emissão fiscal automática (NFC-e)",
      "Suporte técnico especializado",
    ],
    image: "/images/institutional/segmentos/restaurantes-bares-lanchonetes-fast-food.png",
    alt: "Atendente recebendo pagamento no PDV para cliente em um restaurante, exemplo de segmento atendido pela TJ Automação",
    whatsappText: "Quero saber mais sobre soluções para restaurantes, bares, lanchonetes e fast food",
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
    image: "/images/institutional/segmentos/mercados-padarias.png",
    alt: "Cliente fazendo compras em um mercado, exemplo de segmento atendido pela TJ Automação",
    whatsappText: "Quero saber mais sobre soluções para mercados e padarias",
  },
  {
    slug: "acougue",
    eyebrow: "Para açougues",
    title: "Agilize o atendimento e o controle de peso do seu açougue",
    description:
      "Balanças, etiquetadoras e PDV integrados para dar mais agilidade e precisão em cada pesagem e venda.",
    features: [
      "Balanças e etiquetadoras conectadas",
      "Frente de caixa rápido e integrado",
      "Controle de estoque em tempo real",
      "Emissão fiscal automática (NFC-e)",
    ],
    image: "/images/institutional/segmentos/acougue.png",
    alt: "Atendente e cliente em um açougue, exemplo de segmento atendido pela TJ Automação",
    whatsappText: "Quero saber mais sobre soluções para açougues",
  },
  {
    slug: "materiais-de-construcao",
    eyebrow: "Para materiais de construção",
    title: "Agilize vendas e o controle de produtos da sua loja de materiais de construção",
    description:
      "Equipamentos e sistemas pensados para o volume e a variedade de itens do seu estoque, do balcão ao depósito.",
    features: [
      "Consulta rápida de preços e estoque",
      "Emissão de nota fiscal simplificada",
      "Controle de múltiplos códigos e fornecedores",
      "Suporte técnico especializado",
    ],
    image: "/images/institutional/segmentos/materiais-construcao-autopecas.png",
    alt: "Funcionário organizando produtos em uma loja de materiais de construção, exemplo de segmento atendido pela TJ Automação",
    whatsappText: "Quero saber mais sobre soluções para materiais de construção",
  },
  {
    slug: "autopecas",
    eyebrow: "Para autopeças",
    title: "Agilize o atendimento e o controle de peças da sua loja de autopeças",
    description:
      "Sistemas e equipamentos para consulta rápida, controle de estoque e vendas ágeis no balcão.",
    features: [
      "Consulta rápida de preços e estoque",
      "Emissão de nota fiscal simplificada",
      "Controle de múltiplos códigos e fornecedores",
      "Suporte técnico especializado",
    ],
    image: "/images/institutional/segmentos/autopecas.png",
    alt: "Atendente e cliente em uma loja de autopeças, exemplo de segmento atendido pela TJ Automação",
    whatsappText: "Quero saber mais sobre soluções para autopeças",
  },
  {
    slug: "moda",
    eyebrow: "Para moda",
    title: "Tenha controle total de vendas, trocas e fidelização de clientes",
    description:
      "Sistemas de PDV completos para lojas de moda, com agilidade no caixa e gestão simples do dia a dia.",
    features: [
      "PDV rápido e intuitivo",
      "Controle de trocas e devoluções",
      "Gestão de clientes e fidelidade",
      "Relatórios de vendas em tempo real",
    ],
    image: "/images/institutional/segmentos/moda.png",
    alt: "Cliente experimentando roupas em uma loja de moda, exemplo de segmento atendido pela TJ Automação",
    whatsappText: "Quero saber mais sobre soluções para lojas de moda",
  },
];
