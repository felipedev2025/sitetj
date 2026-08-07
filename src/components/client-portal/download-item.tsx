import { Download } from "lucide-react";
import type { DownloadItem as DownloadItemType } from "@/data/client-portal/downloads";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
}

export function DownloadItem({ item }: { item: DownloadItemType }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-brand">
            {item.category}
          </span>
          <span className="text-xs text-muted-foreground">
            v{item.version} · {item.size} · {formatDate(item.date)}
          </span>
        </div>
        <h3 className="mt-1.5 font-semibold">{item.name}</h3>
        <p className="mt-0.5 text-sm text-muted-foreground">{item.description}</p>
      </div>
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-brand px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
      >
        <Download className="h-4 w-4" />
        Download
      </a>
    </div>
  );
}
