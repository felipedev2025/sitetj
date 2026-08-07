"use client";

import { useMemo, useState } from "react";
import { SearchInput } from "@/components/client-portal/search-input";
import { CategoryFilter } from "@/components/client-portal/category-filter";
import { NewsCard, type NewsCardItem } from "@/components/client-portal/news-card";
import { news, newsCategories, type NewsCategory } from "@/data/client-portal/news";
import type { ExternalNewsItem } from "@/lib/external-news";

export function NewsExplorer({ externalNews }: { externalNews: ExternalNewsItem[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<NewsCategory | null>(null);

  const combined = useMemo<NewsCardItem[]>(
    () => [...news.map((item) => ({ ...item, source: "manual" as const })), ...externalNews],
    [externalNews]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return combined
      .filter((item) => (category ? item.category === category : true))
      .filter((item) =>
        q ? item.title.toLowerCase().includes(q) || item.summary.toLowerCase().includes(q) : true
      )
      .sort((a, b) => (a.date < b.date ? 1 : -1));
  }, [combined, query, category]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <CategoryFilter categories={newsCategories} active={category} onChange={setCategory} />
        <SearchInput value={query} onChange={setQuery} placeholder="Buscar notícias..." />
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-sm text-muted-foreground">
          Nenhuma notícia encontrada para essa busca.
        </p>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <NewsCard key={item.source === "externo" ? item.url : item.slug} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
