import { ExternalLink } from "lucide-react";
import type { UsefulLink } from "@/data/client-portal/links";

export function LinkCard({ link }: { link: UsefulLink }) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-brand/40"
    >
      <h3 className="font-semibold">{link.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {link.description}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
        Acessar
        <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
    </a>
  );
}
