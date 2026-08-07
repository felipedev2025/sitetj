export type LinkCategory = "Fiscal" | "Reforma Tributária" | "Trabalhista" | "Empresas";

export type UsefulLink = {
  name: string;
  description: string;
  href: string;
  category: LinkCategory;
};

export const linkCategories: LinkCategory[] = [
  "Fiscal",
  "Reforma Tributária",
  "Trabalhista",
  "Empresas",
];

export const usefulLinks: UsefulLink[] = [
  {
    name: "Receita Federal",
    description: "Portal oficial da Receita Federal do Brasil.",
    href: "https://www.gov.br/receitafederal/pt-br",
    category: "Fiscal",
  },
  {
    name: "Portal NF-e",
    description: "Consultas, manuais e status do serviço da Nota Fiscal Eletrônica.",
    href: "https://www.nfe.fazenda.gov.br/portal/principal.aspx",
    category: "Fiscal",
  },
  {
    name: "Portal NFC-e",
    description: "Informações e status do serviço da Nota Fiscal de Consumidor Eletrônica.",
    href: "https://www.nfce.fazenda.gov.br/portal/principal.aspx",
    category: "Fiscal",
  },
  {
    name: "SINTEGRA",
    description: "Consulta de informações cadastrais e fiscais entre estados.",
    href: "http://www.sintegra.gov.br/",
    category: "Fiscal",
  },
  {
    name: "Cadastro Centralizado de Contribuintes",
    description: "Cadastro Sincronizado Nacional de contribuintes (CADSINC).",
    href: "https://www.cadsinc.receita.fazenda.gov.br/",
    category: "Fiscal",
  },
  {
    name: "Consulta CNPJ",
    description: "Emissão de comprovante de inscrição e situação cadastral do CNPJ.",
    href: "https://solucoes.receita.fazenda.gov.br/Servicos/cnpjreva/cnpjreva_solicitacao.asp",
    category: "Fiscal",
  },
  {
    name: "Consulta Inscrição Estadual",
    description: "Consulta de cadastro e situação da Inscrição Estadual (SP).",
    href: "https://www.fazenda.sp.gov.br/scpweb/",
    category: "Fiscal",
  },
  {
    name: "Portal SPED",
    description: "Sistema Público de Escrituração Digital — acesso e documentação.",
    href: "https://sped.rfb.gov.br/",
    category: "Fiscal",
  },
  {
    name: "Legislação",
    description: "Texto oficial da Emenda Constitucional e das leis complementares da reforma.",
    href: "https://www.gov.br/fazenda/pt-br/assuntos/reforma-tributaria",
    category: "Reforma Tributária",
  },
  {
    name: "Cronograma",
    description: "Linha do tempo oficial de transição do IBS, da CBS e do Imposto Seletivo.",
    href: "https://www.gov.br/fazenda/pt-br/assuntos/reforma-tributaria/linha-do-tempo",
    category: "Reforma Tributária",
  },
  {
    name: "Perguntas Frequentes",
    description: "Dúvidas comuns sobre a Reforma Tributária respondidas pelo governo federal.",
    href: "https://www.gov.br/fazenda/pt-br/assuntos/reforma-tributaria/perguntas-e-respostas",
    category: "Reforma Tributária",
  },
  {
    name: "eSocial",
    description: "Portal oficial do Sistema de Escrituração Digital das Obrigações Trabalhistas.",
    href: "https://www.gov.br/esocial/pt-br",
    category: "Trabalhista",
  },
  {
    name: "FGTS Digital",
    description: "Nova plataforma unificada de apuração e recolhimento do FGTS.",
    href: "https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/fgts",
    category: "Trabalhista",
  },
  {
    name: "DET",
    description: "Domicílio Eletrônico Trabalhista — comunicações oficiais do Ministério do Trabalho.",
    href: "https://det.sit.trabalho.gov.br/",
    category: "Trabalhista",
  },
  {
    name: "Gov.br Empresas",
    description: "Portal de serviços do governo federal para empresas.",
    href: "https://www.gov.br/empresas-e-negocios/pt-br",
    category: "Empresas",
  },
  {
    name: "Redesim",
    description: "Rede Nacional para a Simplificação do Registro e da Legalização de Empresas.",
    href: "https://www.gov.br/empresas-e-negocios/pt-br/redesim",
    category: "Empresas",
  },
  {
    name: "Junta Comercial",
    description: "Junta Comercial do Estado de São Paulo (JUCESP).",
    href: "https://www.jucesp.sp.gov.br/",
    category: "Empresas",
  },
];
