export type NewsCategory =
  | "Reforma Tributária"
  | "Legislação Trabalhista"
  | "Atualizações Fiscais"
  | "Atualizações do TJ Sistemas"
  | "Novidades da TJ Automação"
  | "Tecnologia e Automação Comercial";

export type NewsItem = {
  slug: string;
  title: string;
  category: NewsCategory;
  date: string; // ISO
  summary: string;
  body: string[];
};

export const newsCategories: NewsCategory[] = [
  "Reforma Tributária",
  "Legislação Trabalhista",
  "Atualizações Fiscais",
  "Atualizações do TJ Sistemas",
  "Novidades da TJ Automação",
  "Tecnologia e Automação Comercial",
];

export const news: NewsItem[] = [
  {
    slug: "split-payment-o-que-muda-no-caixa",
    title: "Split Payment: o que muda na hora de fechar o caixa",
    category: "Reforma Tributária",
    date: "2026-07-28",
    summary:
      "Com a segregação automática dos tributos no momento do pagamento, o fluxo de recebimento em PDV e TEF vai exigir atenção redobrada. Veja o que já está definido para 2027.",
    body: [
      "O Split Payment é um dos pilares da Reforma Tributária e prevê que o valor do IBS e da CBS seja automaticamente separado no momento em que o pagamento é processado, antes mesmo de o dinheiro chegar à conta do lojista.",
      "Na prática, isso significa que o sistema de PDV e os meios de pagamento (cartão, Pix) precisarão estar integrados de forma a reconhecer essa segregação em tempo real, sem gerar divergência no fechamento de caixa.",
      "A TJ Automação está acompanhando as publicações da Receita Federal e do Comitê Gestor do IBS para garantir que o TJ Sistemas e os equipamentos de PDV homologados estejam prontos antes da entrada em vigor.",
    ],
  },
  {
    slug: "ibs-cbs-cronograma-de-transicao",
    title: "IBS e CBS: cronograma de transição atualizado",
    category: "Reforma Tributária",
    date: "2026-07-10",
    summary:
      "O período de teste do IBS e da CBS já começou. Entenda as fases de convivência com o sistema tributário atual até a extinção definitiva dos tributos antigos.",
    body: [
      "A transição para o novo modelo tributário ocorre em etapas, com um período de teste de alíquotas reduzidas antes da vigência plena, e convivência temporária com PIS, Cofins, ICMS e ISS.",
      "Empresas que não ajustarem cadastros de produtos e regras fiscais nesse período de transição correm risco de inconsistências em notas fiscais já a partir dos primeiros testes.",
      "Recomendamos revisar o cadastro de NCM e CST de todos os produtos com a equipe da TJ Automação antes do início de cada fase.",
    ],
  },
  {
    slug: "nfce-nova-regra-contingencia",
    title: "NFC-e: nova regra de contingência offline",
    category: "Atualizações Fiscais",
    date: "2026-07-18",
    summary:
      "SEFAZ-SP atualiza as regras de emissão em contingência para NFC-e durante instabilidades. Veja como isso afeta o PDV da sua loja.",
    body: [
      "Durante instabilidades do serviço da SEFAZ, o sistema de PDV precisa estar preparado para emitir em contingência sem interromper a venda no caixa.",
      "A atualização recente ajusta o tempo de tolerância antes de acionar automaticamente o modo de contingência, evitando emissões desnecessárias em picos curtos de instabilidade.",
      "Se sua loja utiliza sistemas homologados pela TJ Automação, essa regra já está sendo aplicada automaticamente nas atualizações mais recentes.",
    ],
  },
  {
    slug: "tabela-ncm-atualizacao-semestral",
    title: "Atualização semestral da tabela NCM",
    category: "Atualizações Fiscais",
    date: "2026-06-05",
    summary:
      "A Receita Federal publicou a atualização semestral da tabela NCM. Veja como importar a nova versão no seu sistema sem gerar divergências fiscais.",
    body: [
      "A tabela NCM (Nomenclatura Comum do Mercosul) recebe atualizações periódicas que podem incluir novos códigos, desmembramentos ou extinções.",
      "Produtos cadastrados com NCM desatualizado podem gerar rejeição na emissão de NF-e e NFC-e após o prazo de adequação.",
      "Publicamos o passo a passo de importação da nova tabela na Base de Conhecimento — veja o artigo 'Como atualizar tabela NCM'.",
    ],
  },
  {
    slug: "tj-sistemas-modulo-financeiro-conciliacao",
    title: "TJ Sistemas lança conciliação automática no módulo financeiro",
    category: "Atualizações do TJ Sistemas",
    date: "2026-07-22",
    summary:
      "A nova versão do TJ Sistemas traz conciliação automática entre lançamentos financeiros e extratos bancários importados, reduzindo o trabalho manual do financeiro.",
    body: [
      "A funcionalidade permite importar o extrato bancário em OFX e conciliar automaticamente com os lançamentos já registrados no contas a pagar e a receber.",
      "Lançamentos sem correspondência automática ficam sinalizados para conferência manual, com sugestões baseadas em valor e data.",
      "A atualização já está disponível para clientes com o módulo financeiro ativo — fale com o suporte para agendar a atualização.",
    ],
  },
  {
    slug: "tj-sistemas-relatorios-gerenciais-exportacao",
    title: "Novos formatos de exportação em relatórios gerenciais",
    category: "Atualizações do TJ Sistemas",
    date: "2026-06-14",
    summary:
      "Relatórios gerenciais do TJ Sistemas agora podem ser exportados diretamente em Excel formatado, além do PDF já existente.",
    body: [
      "A exportação em Excel mantém filtros e agrupamentos aplicados na tela, facilitando análises adicionais fora do sistema.",
      "A mudança atende a um pedido recorrente de clientes que utilizam os relatórios de vendas e estoque em planilhas próprias.",
      "Está disponível em todos os relatórios do menu gerencial a partir da atualização mais recente.",
    ],
  },
  {
    slug: "tj-automacao-ampliacao-equipe-suporte",
    title: "TJ Automação amplia equipe de suporte técnico",
    category: "Novidades da TJ Automação",
    date: "2026-07-05",
    summary:
      "Para reduzir o tempo de resposta no atendimento, ampliamos a equipe de suporte técnico e de assistência a equipamentos.",
    body: [
      "Com o crescimento da base de clientes ativos, reforçamos a equipe responsável pelo suporte remoto e pela assistência técnica presencial em Jaú e região.",
      "O objetivo é manter o tempo médio de atendimento baixo mesmo em períodos de maior demanda, como fechamento de mês e mudanças de legislação fiscal.",
      "Continuamos disponíveis pelos canais de sempre: WhatsApp de suporte, telefone e atendimento presencial na loja.",
    ],
  },
  {
    slug: "tj-automacao-novos-equipamentos-henry",
    title: "Novos modelos de relógio de ponto Henry disponíveis",
    category: "Novidades da TJ Automação",
    date: "2026-05-20",
    summary:
      "Ampliamos o catálogo de relógios de ponto Henry homologados, incluindo o modelo com reconhecimento facial.",
    body: [
      "Os novos modelos incluem opções com biometria facial, digital e cartão cartográfico, todos homologados conforme a Portaria 671 do Ministério do Trabalho.",
      "A TJ Automação realiza a instalação, configuração e o cadastro inicial dos funcionários no equipamento.",
      "Consulte a equipe comercial para saber qual modelo se encaixa melhor no porte da sua empresa.",
    ],
  },
];
