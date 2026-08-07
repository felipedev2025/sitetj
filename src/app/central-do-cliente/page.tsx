import type { Metadata } from "next";
import { Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/client-portal/breadcrumbs";
import { AlertBanner } from "@/components/client-portal/alert-banner";
import { NewsExplorer } from "@/components/client-portal/news-explorer";
import { UsefulLinksSection } from "@/components/client-portal/useful-links-section";
import { DownloadsExplorer } from "@/components/client-portal/downloads-explorer";
import { KnowledgeExplorer } from "@/components/client-portal/knowledge-explorer";
import { SystemVersionSection } from "@/components/client-portal/system-version-section";
import { SectionNav } from "@/components/client-portal/section-nav";
import { alerts } from "@/data/client-portal/alerts";
import { company } from "@/data/company";
import { getExternalNews } from "@/lib/external-news";
import { getSystemVersionHistory } from "@/lib/system-versions";

const description =
  "Notícias, links úteis, downloads e base de conhecimento para clientes da TJ Automação: fique por dentro da Reforma Tributária, legislação trabalhista e atualizações do TJ Sistemas.";

export const metadata: Metadata = {
  title: "Central do Cliente",
  description,
  alternates: { canonical: "/central-do-cliente" },
  openGraph: {
    title: `Central do Cliente — ${company.name}`,
    description,
    url: "/central-do-cliente",
    type: "website",
  },
};

export default async function CentralDoClientePage() {
  const [externalNews, systemVersions] = await Promise.all([
    getExternalNews(),
    getSystemVersionHistory(),
  ]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: "https://www.tjautomacao.com.br/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Central do Cliente",
        item: "https://www.tjautomacao.com.br/central-do-cliente",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="border-b border-border bg-secondary/30 py-14 sm:py-16">
        <div className="container-page">
          <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Central do Cliente" }]} />
          <span className="mt-4 block text-sm font-semibold uppercase tracking-wide text-brand">
            Área do cliente
          </span>
          <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Central do Cliente</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">{description}</p>
          <Button
            size="lg"
            className="mt-6 gap-2 bg-brand hover:bg-brand-dark"
            render={<a href="/central-do-cliente/abrir-chamado" />}
          >
            <Ticket className="h-4 w-4" />
            Abrir chamado de suporte
          </Button>
        </div>
      </section>

      <SectionNav />

      <section id="alertas" className="scroll-mt-24 py-14 sm:py-16">
        <div className="container-page">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand">
            Avisos em tempo real
          </span>
          <div className="mt-4">
            <AlertBanner alerts={alerts} />
          </div>
        </div>
      </section>

      <section id="noticias" className="scroll-mt-24 bg-secondary/30 py-16 sm:py-20">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wide text-brand">
              Notícias e atualizações
            </span>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Fique por dentro</h2>
            <p className="mt-2 text-muted-foreground">
              Reforma Tributária, legislação trabalhista, atualizações fiscais e novidades da TJ
              Automação e do TJ Sistemas.
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              Reforma Tributária e Atualizações Fiscais vêm da Receita Federal; Legislação
              Trabalhista, do Guia Trabalhista; Tecnologia e Automação Comercial, do
              Mercado&amp;Consumo — buscadas automaticamente, todos os dias.
            </p>
          </div>
          <div className="mt-8">
            <NewsExplorer externalNews={externalNews} />
          </div>
        </div>
      </section>

      <div className="container-page">
        <UsefulLinksSection />
      </div>

      <section id="downloads" className="scroll-mt-24 bg-secondary/30 py-16 sm:py-20">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wide text-brand">
              Arquivos e ferramentas
            </span>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Downloads</h2>
            <p className="mt-2 text-muted-foreground">
              Atualizações do TJ Sistemas, drivers de equipamentos e manuais em PDF.
            </p>
          </div>
          <div className="mt-8">
            <DownloadsExplorer />
          </div>
        </div>
      </section>

      <SystemVersionSection data={systemVersions} />

      <section id="base-de-conhecimento" className="scroll-mt-24 py-16 sm:py-20">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wide text-brand">
              Tutoriais e guias
            </span>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Base de conhecimento</h2>
            <p className="mt-2 text-muted-foreground">
              Artigos práticos para resolver as dúvidas mais comuns do dia a dia.
            </p>
          </div>
          <div className="mt-8">
            <KnowledgeExplorer />
          </div>
        </div>
      </section>
    </>
  );
}
