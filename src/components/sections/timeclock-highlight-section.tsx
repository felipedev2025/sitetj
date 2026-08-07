import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { HeroBackgroundVideo } from "@/components/sections/hero-background-video";
import { timeClockHighlights } from "@/data/equipment";

export function TimeClockHighlightSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-navy py-24 text-white sm:py-28">
      <HeroBackgroundVideo />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/85 to-navy/95"
      />
      <div className="container-page relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-[#5fb8ec]">
              Relógio de ponto
            </span>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Controle de ponto homologado, sem complicação
            </h2>
            <p className="mt-3 text-white/70">
              Modelos 100% homologados e em total conformidade com o MTE - Ministério do
              Trabalho e Emprego, garantindo precisão no registro e segurança jurídica para sua
              empresa.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {timeClockHighlights.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-card text-foreground">
                <div className="relative aspect-[3/2] w-full bg-white">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-contain"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
