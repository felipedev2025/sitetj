import type { MetadataRoute } from "next";
import { news } from "@/data/client-portal/news";
import { knowledgeArticles } from "@/data/client-portal/knowledge-base";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.tjautomacao.com.br";

  const newsEntries: MetadataRoute.Sitemap = news.map((item) => ({
    url: `${base}/central-do-cliente/noticias/${item.slug}`,
    lastModified: item.date,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const knowledgeEntries: MetadataRoute.Sitemap = knowledgeArticles.map((article) => ({
    url: `${base}/central-do-cliente/base-de-conhecimento/${article.slug}`,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/central-do-cliente`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/central-do-cliente/abrir-chamado`, changeFrequency: "yearly", priority: 0.6 },
    ...newsEntries,
    ...knowledgeEntries,
    { url: `${base}/politica-de-privacidade`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/termos-de-uso`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
