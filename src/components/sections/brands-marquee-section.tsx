import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { HeroBackgroundVideo } from "@/components/sections/hero-background-video";
import { authorizedBrands } from "@/data/brands";

export function BrandsMarqueeSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-navy py-20 text-white sm:py-24">
      <HeroBackgroundVideo />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/85 to-navy/95"
      />
      <div className="container-page relative">
        <Reveal>
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand/15 text-[#5fb8ec]">
              <ShieldCheck className="h-6 w-6" />
            </span>
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Revenda e assistência técnica autorizada
            </h2>
            <p className="mt-3 text-white/60">
              Somos parceiros oficiais dos principais fabricantes de equipamentos para
              automação comercial do mercado, com técnicos treinados diretamente pelas
              autorizadas.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.05} className="relative">
        <div
          className="group mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        >
          <div className="marquee-track flex w-max items-center gap-5">
            {[...authorizedBrands, ...authorizedBrands].map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="flex h-24 w-40 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white p-2"
              >
                <Image
                  src={brand.image}
                  alt={brand.name}
                  width={160}
                  height={80}
                  className="h-auto max-h-[80px] w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
