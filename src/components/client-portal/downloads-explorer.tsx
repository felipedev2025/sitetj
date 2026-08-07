"use client";

import { useMemo, useState } from "react";
import { SearchInput } from "@/components/client-portal/search-input";
import { CategoryFilter } from "@/components/client-portal/category-filter";
import { DownloadItem } from "@/components/client-portal/download-item";
import {
  downloads,
  downloadCategories,
  type DownloadCategory,
} from "@/data/client-portal/downloads";

export function DownloadsExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<DownloadCategory | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return downloads
      .filter((item) => (category ? item.category === category : true))
      .filter((item) => (q ? item.name.toLowerCase().includes(q) : true));
  }, [query, category]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <CategoryFilter categories={downloadCategories} active={category} onChange={setCategory} />
        <SearchInput value={query} onChange={setQuery} placeholder="Buscar arquivo..." />
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-sm text-muted-foreground">Nenhum arquivo encontrado.</p>
      ) : (
        <div className="mt-8 space-y-3">
          {filtered.map((item) => (
            <DownloadItem key={item.name} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
