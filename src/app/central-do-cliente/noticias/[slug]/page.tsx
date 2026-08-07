import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Breadcrumbs } from "@/components/client-portal/breadcrumbs";
import { news } from "@/data/client-portal/news";
import { company } from "@/data/company";

type Props = {
  params: Promise<{ slug: string }>;
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function generateStaticParams() {
  return news.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = news.find((n) => n.slug === slug);
  if (!item) return {};

  return {
    title: item.title,
    description: item.summary,
    alternates: { canonical: `/central-do-cliente/noticias/${item.slug}` },
    openGraph: {
      title: item.title,
      description: item.summary,
      type: "article",
      publishedTime: item.date,
      url: `/central-do-cliente/noticias/${item.slug}`,
    },
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const item = news.find((n) => n.slug === slug);
  if (!item) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: item.title,
    description: item.summary,
    datePublished: item.date,
    author: { "@type": "Organization", name: company.legalName },
    publisher: { "@type": "Organization", name: company.legalName },
    mainEntityOfPage: `https://www.tjautomacao.com.br/central-do-cliente/noticias/${item.slug}`,
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
        name: item.title,
        item: `https://www.tjautomacao.com.br/central-do-cliente/noticias/${item.slug}`,
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
            { label: item.title },
          ]}
        />

        <div className="mt-4 flex items-center gap-2 text-xs font-medium text-brand">
          <span className="rounded-full bg-accent px-2.5 py-1">{item.category}</span>
          <span className="text-muted-foreground">{formatDate(item.date)}</span>
        </div>

        <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">{item.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{item.summary}</p>

        <div className="mt-8 space-y-4 border-t border-border pt-8 text-foreground/90">
          {item.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <Link
          href="/central-do-cliente#noticias"
          className="mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Voltar para Fique por Dentro
        </Link>
      </div>
    </article>
  );
}
