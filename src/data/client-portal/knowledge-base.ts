export type ArticleDifficulty = "Iniciante" | "Intermediário" | "Avançado";

export type KnowledgeCategory =
  | "Fiscal"
  | "TJ Sistemas"
  | "Equipamentos"
  | "Certificado Digital";

export type KnowledgeArticle = {
  slug: string;
  title: string;
  category: KnowledgeCategory;
  difficulty: ArticleDifficulty;
  readingMinutes: number;
  summary: string;
  body: string[];
};

export const knowledgeArticles: KnowledgeArticle[] = [
  {
    slug: "como-emitir-nfce",
    title: "Como emitir NFC-e",
    category: "Fiscal",
    difficulty: "Iniciante",
    readingMinutes: 4,
    summary: "Passo a passo para emitir a Nota Fiscal de Consumidor Eletrônica no PDV.",
    body: [
      "Antes de emitir a primeira NFC-e, confirme que o certificado digital está instalado e válido, e que o cadastro do CSC (Código de Segurança do Contribuinte) está atualizado no sistema.",
      "No PDV, finalize a venda normalmente e selecione a opção de emissão fiscal. O sistema irá gerar o XML, transmitir para a SEFAZ e imprimir o DANFE simplificado no cupom.",
      "Caso a SEFAZ esteja indisponível, o sistema emite automaticamente em contingência offline, seguindo as regras vigentes para transmissão posterior.",
      "Em caso de rejeição, consulte o artigo 'Como corrigir rejeições da SEFAZ' para identificar a causa mais comum.",
    ],
  },
  {
    slug: "como-importar-xml",
    title: "Como importar XML",
    category: "TJ Sistemas",
    difficulty: "Iniciante",
    readingMinutes: 3,
    summary: "Como importar arquivos XML de notas fiscais de entrada no TJ Sistemas.",
    body: [
      "Acesse o módulo de Compras > Notas de Entrada > Importar XML e selecione o arquivo recebido do fornecedor.",
      "O sistema lê automaticamente os dados da nota, os itens e os impostos, e sugere o vínculo com produtos já cadastrados com base no código de barras ou EAN.",
      "Produtos ainda não cadastrados podem ser criados diretamente durante a importação, sem sair da tela.",
      "Revise sempre os valores de ICMS-ST e outros impostos destacados antes de confirmar a entrada, principalmente em notas de fornecedores novos.",
    ],
  },
  {
    slug: "como-atualizar-tabela-ncm",
    title: "Como atualizar tabela NCM",
    category: "Fiscal",
    difficulty: "Intermediário",
    readingMinutes: 5,
    summary: "Como importar a nova tabela NCM sem gerar divergências nos produtos já cadastrados.",
    body: [
      "Baixe a versão mais recente da tabela NCM publicada pela Receita Federal ou solicite o arquivo já validado ao nosso suporte.",
      "No TJ Sistemas, acesse Cadastros > Fiscal > Tabela NCM > Importar, e selecione o arquivo baixado.",
      "O sistema identifica automaticamente códigos extintos ou desmembrados e lista os produtos que precisam de revisão manual antes da próxima emissão fiscal.",
      "Recomendamos fazer essa atualização fora do horário de pico de vendas, já que produtos com NCM pendente de revisão ficam temporariamente bloqueados para emissão.",
    ],
  },
  {
    slug: "como-configurar-impressoras",
    title: "Como configurar impressoras",
    category: "Equipamentos",
    difficulty: "Iniciante",
    readingMinutes: 4,
    summary: "Configuração inicial de impressoras fiscais e não fiscais no sistema.",
    body: [
      "Instale o driver correto do fabricante antes de conectar a impressora — consulte a área de Downloads para a marca do seu equipamento.",
      "No TJ Sistemas, acesse Configurações > Periféricos > Impressoras e selecione o modelo, a porta de conexão e o tipo (fiscal, não fiscal ou de etiquetas).",
      "Utilize a opção 'Imprimir teste' para validar a comunicação antes de liberar o equipamento para uso no caixa.",
      "Em caso de falha de comunicação, verifique primeiro o cabo e a porta USB antes de reinstalar o driver.",
    ],
  },
  {
    slug: "como-corrigir-rejeicoes-sefaz",
    title: "Como corrigir rejeições da SEFAZ",
    category: "Fiscal",
    difficulty: "Intermediário",
    readingMinutes: 6,
    summary: "As rejeições mais comuns na emissão de NF-e e NFC-e e como resolver cada uma.",
    body: [
      "Rejeições por 'duplicidade de NF-e' geralmente indicam reenvio de uma nota já autorizada — confira o status antes de reemitir.",
      "Rejeições relacionadas a NCM ou CST inválido normalmente exigem atualização cadastral do produto, não apenas reenvio da nota.",
      "Problemas de certificado digital vencido ou não instalado corretamente aparecem como erro de assinatura — verifique a validade em Configurações > Certificado Digital.",
      "Se a rejeição persistir após as verificações básicas, nosso suporte pode analisar o XML rejeitado para identificar a causa exata.",
    ],
  },
  {
    slug: "como-instalar-o-tj-sistemas",
    title: "Como instalar o TJ Sistemas",
    category: "TJ Sistemas",
    difficulty: "Avançado",
    readingMinutes: 8,
    summary: "Requisitos e passo a passo de instalação do TJ Sistemas em um novo computador ou servidor.",
    body: [
      "Verifique os requisitos mínimos de hardware e sistema operacional antes de iniciar a instalação, especialmente em ambientes com banco de dados local.",
      "A instalação em servidor deve ser feita antes da instalação nas estações, garantindo que o compartilhamento de rede esteja configurado corretamente.",
      "Durante a instalação, será necessário informar a licença fornecida pela TJ Automação e os dados de conexão com o banco de dados.",
      "Recomendamos que a instalação inicial seja acompanhada remotamente pela nossa equipe de suporte, especialmente em ambientes com múltiplos terminais.",
    ],
  },
  {
    slug: "como-configurar-sat",
    title: "Como configurar SAT",
    category: "Equipamentos",
    difficulty: "Avançado",
    readingMinutes: 5,
    summary:
      "O SAT foi descontinuado e substituído pela NFC-e em São Paulo. Veja o que fazer se sua empresa ainda utiliza o equipamento.",
    body: [
      "O SAT (Sistema Autenticador e Transmissor) foi descontinuado como modelo de emissão fiscal em São Paulo, sendo substituído pela NFC-e.",
      "Empresas que ainda utilizam equipamentos SAT devem migrar para NFC-e o quanto antes, já que não há mais atualizações do sistema para o modelo antigo.",
      "A TJ Automação auxilia na migração completa: configuração do certificado digital, cadastro do CSC e ajuste do PDV para emissão via NFC-e.",
      "Fale com nosso suporte para agendar a migração sem impacto na operação da loja.",
    ],
  },
  {
    slug: "como-configurar-certificado-digital",
    title: "Como configurar certificado digital",
    category: "Certificado Digital",
    difficulty: "Intermediário",
    readingMinutes: 5,
    summary: "Instalação e configuração do certificado digital A1 para emissão de documentos fiscais.",
    body: [
      "O certificado digital A1 é um arquivo (.pfx) que deve ser instalado no computador ou servidor responsável pela emissão fiscal.",
      "No TJ Sistemas, acesse Configurações > Certificado Digital, selecione o arquivo do certificado e informe a senha fornecida pela certificadora.",
      "O sistema valida automaticamente a validade e o CNPJ vinculado ao certificado antes de liberar a emissão.",
      "Mantenha o certificado sempre atualizado — a maioria tem validade de um ano, e a emissão fiscal é bloqueada automaticamente após o vencimento.",
    ],
  },
];
