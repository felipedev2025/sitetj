import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { NewsItem } from "@/data/client-portal/news";
import type { ExternalNewsItem } from "@/lib/external-news";

export type NewsCardItem = (NewsItem & { source: "manual" }) | ExternalNewsItem;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function NewsCard({ item }: { item: NewsCardItem }) {
  const isExternal = item.source === "externo";

  const content = (
    <>
      <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-brand">
        <span className="rounded-full bg-accent px-2.5 py-1">{item.category}</span>
        {isExternal && (
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 text-emerald-700 dark:text-emerald-400">
            <ExternalLink className="h-3 w-3" />
            {item.publisher}
          </span>
        )}
        <span className="text-muted-foreground">{formatDate(item.date)}</span>
      </div>
      <h3 className="mt-3 font-semibold leading-snug">{item.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
        Ler mais
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
    </>
  );

  if (isExternal) {
    return (
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-brand/40"
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={`/central-do-cliente/noticias/${item.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-brand/40"
    >
      {content}
    </Link>
  );
}
