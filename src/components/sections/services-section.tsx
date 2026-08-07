import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { services, fiscalCertificates } from "@/data/services";

export function ServicesSection() {
  return (
    <section id="solucoes" className="scroll-mt-16 relative overflow-hidden bg-navy py-24 text-white sm:py-28">
      <Image
        src="/images/institutional/tj-automacao-solucao-empresa.jpg"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/85 to-navy"
      />

      <div className="container-page relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold sm:text-4xl">Soluções</h2>
            <p className="mt-3 text-white/70">
              Sistema, equipamento e assistência técnica — tudo o que sua operação
              comercial precisa, em um único parceiro.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.05}>
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 text-foreground transition-colors hover:border-brand/40">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-accent">
                  {service.icon ? (
                    <service.icon className="h-8 w-8 text-brand" />
                  ) : (
                    <Image
                      src={service.image!}
                      alt=""
                      width={40}
                      height={40}
                      className="h-10 w-10 object-contain"
                    />
                  )}
                </div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-8 text-center sm:p-10">
            <h3 className="text-lg font-semibold">Certificados fiscais</h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-white/60">
              Integrados e atualizados com todos os certificados fiscais exigidos
              para sua operação.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
              {fiscalCertificates.map((cert) => (
                <div key={cert.label} className="flex flex-col items-center gap-2">
                  <div className="flex h-14 w-20 items-center justify-center rounded-lg bg-white p-2">
                    <Image
                      src={cert.image}
                      alt={cert.label}
                      width={90}
                      height={50}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                  <span className="text-xs font-medium text-white/70">{cert.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
