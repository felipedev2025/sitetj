"use client";

import { useMemo, useState } from "react";
import { SearchInput } from "@/components/client-portal/search-input";
import { KnowledgeArticleCard } from "@/components/client-portal/knowledge-article-card";
import { knowledgeArticles } from "@/data/client-portal/knowledge-base";

export function KnowledgeExplorer() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return knowledgeArticles;
    return knowledgeArticles.filter(
      (article) =>
        article.title.toLowerCase().includes(q) ||
        article.summary.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div>
      <SearchInput value={query} onChange={setQuery} placeholder="Pesquisar artigos..." />

      {filtered.length === 0 ? (
        <p className="mt-10 text-sm text-muted-foreground">Nenhum artigo encontrado.</p>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <KnowledgeArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
