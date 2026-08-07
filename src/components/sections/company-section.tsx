import Image from "next/image";
import { Target, Eye, HeartHandshake } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { company } from "@/data/company";

export function CompanySection() {
  return (
    <section id="empresa" className="scroll-mt-16 py-24 sm:py-28">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <span className="text-sm font-semibold uppercase tracking-wide text-brand">
                A empresa
              </span>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">TJ Automação</h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                {company.about.map((paragraph) => (
                  <p key={paragraph.slice(0, 20)} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/institutional/tj-automacao-fachada-loja-v4.png"
                alt="Fachada da loja TJ Automação em Jaú/SP"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          <Reveal>
            <div className="rounded-2xl border border-border bg-card p-7">
              <Target className="h-6 w-6 text-brand" />
              <h3 className="mt-4 font-semibold">Missão</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {company.mission}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="rounded-2xl border border-border bg-card p-7">
              <Eye className="h-6 w-6 text-brand" />
              <h3 className="mt-4 font-semibold">Visão</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {company.vision}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-card p-7">
              <HeartHandshake className="h-6 w-6 text-brand" />
              <h3 className="mt-4 font-semibold">Valores</h3>
              <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
                {company.values.map((value) => (
                  <li key={value}>{value}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
