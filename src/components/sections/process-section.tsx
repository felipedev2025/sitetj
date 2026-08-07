import { Reveal } from "@/components/ui/reveal";
import { implementationProcess } from "@/data/process";

export function ProcessSection() {
  return (
    <section className="bg-secondary/30 py-24 sm:py-28">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold sm:text-4xl">Processo de implantação</h2>
            <p className="mt-3 text-muted-foreground">
              Um caminho claro, do diagnóstico ao suporte contínuo.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {implementationProcess.map((step, i) => (
            <Reveal key={step.title} delay={(i % 4) * 0.05}>
              <div className="relative rounded-2xl border border-border bg-card p-6">
                <span className="text-3xl font-semibold text-brand/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-semibold">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
