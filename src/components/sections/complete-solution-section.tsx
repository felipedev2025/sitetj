import { Reveal } from "@/components/ui/reveal";
import { company } from "@/data/company";

export function CompleteSolutionSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Não vendemos apenas um software
            </h2>
            <p className="mt-3 text-muted-foreground">
              Entregamos uma solução completa, do primeiro diagnóstico à manutenção contínua.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
            {company.completeSolution.map((item) => (
              <span
                key={item}
                className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-brand-dark"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
