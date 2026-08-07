import { Tag, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import type { SystemVersionData } from "@/lib/system-versions";

function formatDate(iso: string | null) {
  if (!iso) return null;
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function SystemVersionSection({ data }: { data: SystemVersionData | null }) {
  if (!data) return null;

  return (
    <section id="versoes" className="scroll-mt-24 py-16 sm:py-20">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-wide text-brand">
                Changelog
              </span>
              <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Versões do TJ Sistemas</h2>
              <p className="mt-2 text-muted-foreground">
                Confira a versão atual e as últimas atualizações do sistema.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-2 text-sm font-semibold text-brand">
              <Tag className="h-4 w-4" />
              Versão atual: {data.latestVersion}
            </span>
          </div>
        </Reveal>

        <ol className="mt-10 space-y-6 border-l-2 border-border pl-6 sm:pl-8">
          {data.releases.map((release, i) => (
            <Reveal key={release.version} delay={Math.min(i, 6) * 0.03}>
              <li className="relative">
                <span
                  className={`absolute -left-[calc(1.5rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-background sm:-left-[calc(2rem+5px)] ${
                    i === 0 ? "bg-brand" : "bg-border"
                  }`}
                />
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  {i === 0 && <Sparkles className="h-4 w-4 text-brand" />}
                  <span className="font-semibold">Versão {release.version}</span>
                  {formatDate(release.date) && (
                    <span className="text-muted-foreground">· {formatDate(release.date)}</span>
                  )}
                </div>
                {release.changes.length > 0 && (
                  <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                    {release.changes.map((change, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="text-brand">•</span>
                        <span>{change}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
