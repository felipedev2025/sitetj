export type EquipmentCategory = {
  slug: string;
  title: string;
  count: number;
  cover: string;
};

export const equipmentCategories: EquipmentCategory[] = [
  { slug: "balanca", title: "Balanças", count: 13, cover: "/images/equipment/balanca/balanca-toledo-prix-5-plus-black-v6.png" },
  { slug: "balanca-de-plataforma", title: "Balança de Plataforma", count: 3, cover: "/images/equipment/balanca/balanca-plataforma.jpeg" },
  { slug: "impressoras-fiscais", title: "Impressoras de Cupom Térmico", count: 5, cover: "/images/equipment/impressoras-fiscais/impressoras-fiscais-bematech-mp-4200-th.jpg" },
  // Impressoras Não Fiscais não é mais vendida — categoria removida da vitrine.
  { slug: "impressoras-de-etiquetas", title: "Impressoras de Etiquetas", count: 8, cover: "/images/equipment/impressoras-de-etiquetas/impressoras-de-etiquetas-elgin-l42.jpg" },
  { slug: "impressoras-de-cheque", title: "Impressoras de Cheque", count: 3, cover: "/images/equipment/impressoras-de-cheque/impressoras-de-cheque-bematech-dp-20.jpg" },
  { slug: "leitores", title: "Leitores", count: 15, cover: "/images/equipment/leitores/leitores-elgin-2d-el-250.jpg" },
  { slug: "coletores-de-dados", title: "Coletores de Dados", count: 2, cover: "/images/equipment/coletores-de-dados/coletores-de-dados-zebra.png" },
  { slug: "micro-terminais", title: "Micro Terminais", count: 7, cover: "/images/equipment/micro-terminais/micro-terminais-gertec.png" },
  { slug: "cpu-para-varejo", title: "Computadores", count: 7, cover: "/images/equipment/cpu-para-varejo/cpu-para-varejo-dell.png" },
  { slug: "monitores", title: "Monitores", count: 2, cover: "/images/equipment/monitores/monitores-monitor-led-15.jpg" },
  { slug: "teclados", title: "Teclados PDV", count: 2, cover: "/images/equipment/teclados/teclados-teclado-pdv.png" },
  { slug: "gavetas", title: "Gavetas", count: 3, cover: "/images/equipment/gavetas/gavetas-bematech.jpg" },
  // Caixas Registradoras não é mais vendida — categoria removida da vitrine.
  { slug: "calculadoras", title: "Calculadoras", count: 4, cover: "/images/equipment/calculadoras/calculadoras-elgin.png" },
  { slug: "consulta-de-precos", title: "Consulta de Preços", count: 4, cover: "/images/equipment/consulta-de-precos/consulta-de-precos-gertec.png" },
  { slug: "painel-de-senha", title: "Painel de Senha", count: 4, cover: "/images/equipment/painel-de-senha/painel-de-senha-led-teclado.jpg" },
  { slug: "pin-pad", title: "Pin Pad", count: 5, cover: "/images/equipment/pin-pad/pin-pad-gertec.png" },
  // SAT foi descontinuado (substituído por NFC-e) — categoria removida da vitrine.
  { slug: "relogio-de-ponto-biometrico", title: "Relógio de Ponto Biométrico", count: 2, cover: "/images/equipment/relogio-de-ponto/relogio-de-ponto-henry-rep-biometrico.jpg" },
  { slug: "relogio-de-ponto-facial", title: "Relógio de Ponto Facial", count: 2, cover: "/images/equipment/relogio-de-ponto/relogio-de-ponto-henry-rep-facial.jpg" },
  { slug: "relogio-cartografico", title: "Relógio Cartográfico", count: 2, cover: "/images/equipment/relogio-de-ponto/relogio-de-ponto-cartografico-novo.jpg" },
  { slug: "estabilizadores-e-no-break-s", title: "Estabilizadores e Nobreaks", count: 4, cover: "/images/equipment/estabilizadores-e-no-break-s/estabilizadores-e-no-break-s-sms-lite.png" },
  { slug: "fragmentadoras", title: "Fragmentadoras", count: 3, cover: "/images/equipment/fragmentadoras/fragmentadoras-aurora-as-1210-sb.jpg" },
  { slug: "comandas", title: "Comandas", count: 1, cover: "/images/equipment/comandas/comandas-personalizadas.png" },
  { slug: "suprimentos", title: "Suprimentos", count: 8, cover: "/images/equipment/suprimentos/suprimentos-bobinas-etiquetas-ribbons.png" },
  // "Outros Produtos" removida da vitrine a pedido do cliente.
];

export const totalEquipmentCount = equipmentCategories.reduce((sum, c) => sum + c.count, 0);

export const timeClockHighlights = [
  {
    title: "Relógio facial",
    image: "/images/equipment/relogio-de-ponto/relogio-de-ponto-henry-facial-v2.jpeg",
  },
  {
    title: "Relógio Biométrico",
    image: "/images/equipment/relogio-de-ponto/relogio-de-ponto-henry-biometrico-v2.jpeg",
  },
  {
    title: "Relógio Cartográfico",
    image: "/images/equipment/relogio-de-ponto/relogio-de-ponto-cartografico-v4.jpeg",
  },
];
