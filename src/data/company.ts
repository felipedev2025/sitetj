export const company = {
  name: "TJ Automação",
  legalName: "TJ Automação Comercial",
  tagline: "Soluções inteligentes para o seu negócio",
  foundedYear: 2006,
  activeClients: 500,
  description:
    "Tecnologia, automação, gestão e suporte especializado para empresas que precisam operar com eficiência, estabilidade e controle.",
  about: [
    "Fundada em 2006, a TJ Automação tem como maior objetivo maximizar a lucratividade do seu negócio através de sistemas e soluções inteligentes em automação comercial.",
    "Desenvolvemos um trabalho focado em controle e automação de todo o setor comercial da sua empresa, eliminando tarefas manuais e repetitivas do dia a dia e transformando processos lentos em rotinas automáticas e instantâneas.",
    "Além de sistemas, somos especializados e credenciados para serviços de assistência técnica e manutenção de equipamentos de automação.",
  ],
  mission:
    "Com talento e tecnologia, construir soluções que ajudem empresas a fornecerem melhores produtos à sociedade, garantindo lucros crescentes e longevidade à TJ Automação.",
  vision:
    "Ser reconhecida como parceira estratégica pelo alto desempenho e valor entregue aos clientes, através de tecnologia e atendimento de excelência.",
  values: [
    "Ética, honestidade e respeito",
    "Qualidade, comprometimento e responsabilidade com resultados",
    "Agilidade, coragem, inovação e empreendedorismo",
    "Transparência, gestão do conhecimento e atitude positiva",
  ],
  // Posicionamento central do site: a TJ não entrega apenas um software.
  completeSolution: [
    "Tecnologia",
    "Consultoria",
    "Implantação",
    "Treinamento",
    "Equipamentos",
    "Infraestrutura",
    "Suporte",
    "Atualizações",
    "Manutenção",
  ],
  partner: {
    name: "STI3 Sistemas",
    description:
      "Parceria estratégica para sistemas de gestão empresarial (ERP), integrando PDV, estoque, financeiro, fiscal e relatórios em uma única plataforma.",
  },
  contact: {
    phones: [
      { label: "(14) 3622-0200", href: "tel:+551436220200" },
      { label: "(14) 3624-7010", href: "tel:+551436247010" },
    ],
    email: "contato@tjautomacao.com.br",
    whatsapp: {
      number: "551436220200",
      href: "https://wa.me/551436220200",
      label: "(14) 3622-0200",
    },
    supportWhatsapp: {
      number: "551436214112",
      href: "https://wa.me/551436214112",
      label: "(14) 3621-4112",
    },
    comercialWhatsapp: {
      number: "551436220200",
      href: "https://wa.me/551436220200",
      label: "(14) 3622-0200",
    },
    financeiroWhatsapp: {
      number: "551436247010",
      href: "https://wa.me/551436247010",
      label: "(14) 3624-7010",
    },
    address: {
      street: "Av. João Ferraz Netto, 1083",
      neighborhood: "Jd. Ferreira Dias",
      city: "Jaú",
      state: "SP",
      zip: "17209-655",
      mapsUrl:
        "https://www.google.com/maps/place/Av.+Jo%C3%A3o+Ferraz+Neto,+1083+-+Jardim+Ferreira+Dias,+Ja%C3%BA+-+SP,+17209-655",
      mapsEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.920579722311!2d-48.54804908446335!3d-22.280998121442803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8a7f11dd015f3%3A0x472a736a5c82aefd!2sAv.+Jo%C3%A3o+Ferraz+Neto%2C+1083+-+Jardim+Ferreira+Dias%2C+Ja%C3%BA+-+SP%2C+17209-655!5e0!3m2!1spt-BR!2sbr",
    },
    hours: [
      { days: "Segunda a Sexta-feira", time: "08h00 às 17h30" },
      { days: "Sábado", time: "08h00 às 12h00" },
    ],
  },
  social: {
    facebook:
      "https://www.facebook.com/pages/TJ-Automa%C3%A7%C3%A3o-Comercial/280065405482316",
    instagram: "https://www.instagram.com/tjautomacao/?hl=pt-br",
  },
} as const;

export const yearsInMarket = new Date().getFullYear() - company.foundedYear;
