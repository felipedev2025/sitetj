import Image from "next/image";
import { CircleCheckBig } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { HeroBackgroundVideo } from "@/components/sections/hero-background-video";
import { company } from "@/data/company";

const features = [
  "Gerencie mesas e comandas",
  "Fechamento da comanda com 1 clique",
  "Recebimento parcial ou por itens",
  "Agrupe e reserve mesas de forma prática",
];

export function ChefMobileHighlightSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-navy py-24 text-white sm:py-28">
      <HeroBackgroundVideo />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/85 to-navy/95"
      />
      <div className="container-page relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-white">
              <Image
                src="/images/institutional/tj-automacao-tj-sistemas-bar-restaurante.png"
                alt="TJ Sistemas — gestão de mesas e comandas para bares e restaurantes"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div>
              <span className="text-sm font-semibold uppercase tracking-wide text-[#5fb8ec]">
                Para bares e restaurantes
              </span>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                Controle seu bar ou restaurante com o nosso sistema móvel, faça tudo pelo celular
                ou tablet
              </h2>
              <p className="mt-4 text-white/70">
                Mais um sistema que a TJ Automação leva até você: gestão completa de mesas e
                comandas, integrada ao seu PDV.
              </p>

              <ul className="mt-6 space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <CircleCheckBig className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    <span className="text-sm text-white/90">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                className="mt-8 bg-brand hover:bg-brand-dark"
                render={
                  <a
                    href={`${company.contact.whatsapp.href}?text=${encodeURIComponent(
                      "Quero saber mais sobre o TJ Sistemas para bares e restaurantes"
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                Entrar em contato e descobrir todas as vantagens
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
