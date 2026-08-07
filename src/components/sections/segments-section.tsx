import { Reveal } from "@/components/ui/reveal";
import { segments } from "@/data/segments";
import { company } from "@/data/company";

function segmentWhatsappHref(segmentTitle: string) {
  const text = `Tenho interesse em um item no segmento ${segmentTitle}`;
  return `${company.contact.whatsapp.href}?text=${encodeURIComponent(text)}`;
}

export function SegmentsSection() {
  return (
    <section id="segmentos" className="scroll-mt-16 bg-secondary/30 py-24 sm:py-28">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold sm:text-4xl">Segmentos que atendemos</h2>
            <p className="mt-3 text-muted-foreground">
              Sistemas e equipamentos adaptados à realidade de cada tipo de negócio.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-3">
            {segments.map((segment) => (
              <a
                key={segment.slug}
                href={segmentWhatsappHref(segment.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:border-brand/40 hover:text-brand"
              >
                {segment.title}
              </a>
            ))}
            <a
              href={segmentWhatsappHref("outros segmentos do comércio")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-dashed border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-brand/40 hover:text-brand"
            >
              e diversos outros segmentos do comércio e serviços
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
