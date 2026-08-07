import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { equipmentCategories } from "@/data/equipment";
import { company } from "@/data/company";

function equipmentWhatsappHref(title: string) {
  const text = `Olá! Tenho interesse no equipamento: ${title}`;
  return `${company.contact.comercialWhatsapp.href}?text=${encodeURIComponent(text)}`;
}

export function EquipmentSection() {
  return (
    <section id="equipamentos" className="scroll-mt-16 py-24 sm:py-28">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold sm:text-4xl">Equipamentos</h2>
            <p className="mt-3 text-muted-foreground">
              Explore um catálogo completo com mais de 100 soluções das marcas líderes do
              mercado. Garantimos máxima durabilidade, suporte especializado e assistência
              técnica autorizada.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {equipmentCategories.map((cat, i) => (
            <Reveal key={cat.slug} delay={(i % 6) * 0.04}>
              <a
                href={equipmentWhatsappHref(cat.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-brand/40"
              >
                <div className="relative aspect-square w-full bg-secondary/50">
                  <Image
                    src={cat.cover}
                    alt={cat.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-125"
                  />
                </div>
                <div className="border-t border-border p-3 text-center">
                  <p className="text-sm font-medium leading-tight">{cat.title}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
