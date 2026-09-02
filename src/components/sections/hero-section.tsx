import { ArrowRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { HeroBackgroundVideo } from "@/components/sections/hero-background-video";
import { WhatsAppIcon } from "@/components/icons/social-icons";
import { company, yearsInMarket } from "@/data/company";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <HeroBackgroundVideo />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/75 to-navy/95"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-brand/30 blur-[120px]"
      />

      <div className="container-page relative flex flex-col items-center gap-10 py-24 text-center sm:py-32">
        <Reveal>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-brand/40 bg-brand/15 px-5 py-2 text-sm font-semibold tracking-wide text-white uppercase shadow-[0_0_30px_-8px_var(--brand)] sm:text-base">
            <Award className="h-5 w-5 text-white" strokeWidth={2.5} />
            +{yearsInMarket} anos de mercado
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.1] sm:text-5xl md:text-6xl">
            {company.tagline}
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="max-w-xl text-pretty text-base text-white/70 sm:text-lg">
            {company.description}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 gap-2 bg-brand px-6 text-base hover:bg-brand-dark"
              render={<a href="#contato" />}
            >
              <WhatsAppIcon className="h-6 w-6" />
              Falar no WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 gap-2 border-white/20 bg-transparent px-6 text-base text-white hover:bg-white/10 hover:text-white"
              render={<a href="#solucoes" />}
            >
              Conhecer soluções
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-semibold text-white">+{company.activeClients}</span>
              clientes ativos
            </div>
            <div className="h-4 w-px bg-white/15" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-semibold text-white">+{yearsInMarket}</span>
              anos de mercado
            </div>
            <div className="h-4 w-px bg-white/15" />
            <div>Assistência técnica autorizada</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
