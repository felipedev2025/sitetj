import { yearsInMarket } from "@/data/company";

export type ProcessStep = {
  title: string;
  description: string;
};

export const implementationProcess: ProcessStep[] = [
  { title: "Diagnóstico", description: "Levantamento das necessidades reais do seu negócio." },
  { title: "Planejamento", description: "Definição da solução, equipamentos e cronograma ideais." },
  { title: "Implantação", description: "Instalação de sistemas e equipamentos na sua operação." },
  { title: "Configuração", description: "Ajuste fino do sistema à rotina fiscal e comercial da empresa." },
  { title: "Treinamento", description: "Capacitação prática da equipe para uso total do sistema." },
  { title: "Acompanhamento", description: "Verificação dos resultados após a virada de chave." },
  { title: "Suporte", description: "Assistência técnica contínua para manter a operação sempre no ar." },
];

export type Differentiator = {
  title: string;
  description: string;
};

export const differentiators: Differentiator[] = [
  { title: "+500 clientes ativos", description: "Uma base sólida de empresas que confiam na TJ Automação todos os dias." },
  { title: `+${yearsInMarket} anos de mercado`, description: "Experiência consolidada em automação comercial desde 2006." },
  { title: "Atendimento especializado", description: "Equipe técnica dedicada, com foco em resolver o problema real do cliente." },
  { title: "Implantação completa", description: "Da instalação à virada de chave, sem deixar pontas soltas." },
  { title: "Treinamento incluso", description: "Sua equipe sai apta a operar o sistema com segurança." },
  { title: "Suporte contínuo", description: "Assistência técnica presente para toda a região." },
  { title: "Sistema + equipamento integrados", description: "Software e hardware pensados para funcionar juntos, sem atritos." },
];
