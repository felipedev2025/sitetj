import Link from "next/link";
import { ArrowRight, Clock, Gauge } from "lucide-react";
import type { KnowledgeArticle } from "@/data/client-portal/knowledge-base";

export function KnowledgeArticleCard({ article }: { article: KnowledgeArticle }) {
  return (
    <Link
      href={`/central-do-cliente/base-de-conhecimento/${article.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-brand/40"
    >
      <span className="w-fit rounded-full bg-accent px-2.5 py-1 text-xs font-medium text-brand">
        {article.category}
      </span>
      <h3 className="mt-3 font-semibold leading-snug">{article.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {article.summary}
      </p>
      <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Gauge className="h-3.5 w-3.5" />
          {article.difficulty}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" />
          {article.readingMinutes} min de leitura
        </span>
      </div>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
        Ler artigo
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
