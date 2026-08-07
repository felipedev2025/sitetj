"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { CircleCheckBig, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { HeroBackgroundVideo } from "@/components/sections/hero-background-video";
import { company } from "@/data/company";
import { segmentHighlights } from "@/data/segment-highlights";

const AUTO_ADVANCE_MS = 3000;

export function SegmentsHighlightCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((next: number) => {
    setIndex((next + segmentHighlights.length) % segmentHighlights.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % segmentHighlights.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [paused]);

  const slide = segmentHighlights[index];

  return (
    <section
      className="relative overflow-hidden border-y border-white/10 bg-navy py-24 text-white sm:py-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <HeroBackgroundVideo />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/85 to-navy/95"
      />
      <div className="container-page relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-[#5fb8ec]">
              Segmentos que atendemos
            </span>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Uma solução completa para cada tipo de negócio
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.slug}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 overflow-hidden rounded-2xl border border-white/10 bg-white"
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority={index === 0}
                />
              </motion.div>
            </AnimatePresence>

            <button
              type="button"
              aria-label="Segmento anterior"
              onClick={() => goTo(index - 1)}
              className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy shadow-lg transition hover:bg-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Próximo segmento"
              onClick={() => goTo(index + 1)}
              className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy shadow-lg transition hover:bg-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={slide.slug}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-sm font-semibold uppercase tracking-wide text-[#5fb8ec]">
                {slide.eyebrow}
              </span>
              <h3 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                {slide.title}
              </h3>
              <p className="mt-4 text-white/70">{slide.description}</p>

              <ul className="mt-6 space-y-3">
                {slide.features.map((feature) => (
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
                    href={`${company.contact.whatsapp.href}?text=${encodeURIComponent(slide.whatsappText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                Entrar em contato e descobrir todas as vantagens
              </Button>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2">
          {segmentHighlights.map((item, i) => (
            <button
              key={item.slug}
              type="button"
              aria-label={`Ver segmento: ${item.eyebrow}`}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-8 bg-brand" : "w-2 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
