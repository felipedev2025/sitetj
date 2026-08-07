import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Gauge } from "lucide-react";
import { Breadcrumbs } from "@/components/client-portal/breadcrumbs";
import { knowledgeArticles } from "@/data/client-portal/knowledge-base";
import { company } from "@/data/company";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return knowledgeArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = knowledgeArticles.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.summary,
    alternates: { canonical: `/central-do-cliente/base-de-conhecimento/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.summary,
      type: "article",
      url: `/central-do-cliente/base-de-conhecimento/${article.slug}`,
    },
  };
}

export default async function KnowledgeArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = knowledgeArticles.find((a) => a.slug === slug);
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: article.title,
    description: article.summary,
    author: { "@type": "Organization", name: company.legalName },
    publisher: { "@type": "Organization", name: company.legalName },
    mainEntityOfPage: `https://www.tjautomacao.com.br/central-do-cliente/base-de-conhecimento/${article.slug}`,
  };

  const breadcrumbJsonLd = {
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
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `https://www.tjautomacao.com.br/central-do-cliente/base-de-conhecimento/${article.slug}`,
      },
    ],
  };

  return (
    <article className="py-14 sm:py-16">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="container-page max-w-3xl">
        <Breadcrumbs
          items={[
            { label: "Início", href: "/" },
            { label: "Central do Cliente", href: "/central-do-cliente" },
            { label: article.title },
          ]}
        />

        <span className="mt-4 inline-block w-fit rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-brand">
          {article.category}
        </span>

        <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">{article.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{article.summary}</p>

        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Gauge className="h-4 w-4" />
            {article.difficulty}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {article.readingMinutes} min de leitura
          </span>
        </div>

        <div className="mt-8 space-y-4 border-t border-border pt-8 text-foreground/90">
          {article.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <Link
          href="/central-do-cliente#base-de-conhecimento"
          className="mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Voltar para Base de Conhecimento
        </Link>
      </div>
    </article>
  );
}
