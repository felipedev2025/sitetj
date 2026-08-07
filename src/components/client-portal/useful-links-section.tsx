import { Landmark, Scale, Users, Building2 } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { LinkCard } from "@/components/client-portal/link-card";
import { linkCategories, usefulLinks, type LinkCategory } from "@/data/client-portal/links";

const categoryIcons: Record<LinkCategory, typeof Landmark> = {
  Fiscal: Landmark,
  "Reforma Tributária": Scale,
  Trabalhista: Users,
  Empresas: Building2,
};

export function UsefulLinksSection() {
  return (
    <section id="links-uteis" className="scroll-mt-24 py-16 sm:py-20">
      <Reveal>
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand">
            Recursos rápidos
          </span>
          <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Links úteis</h2>
          <p className="mt-2 text-muted-foreground">
            Acesso rápido aos principais portais fiscais, trabalhistas e de apoio à sua empresa.
          </p>
        </div>
      </Reveal>

      <div className="mt-10 space-y-10">
        {linkCategories.map((category) => {
          const Icon = categoryIcons[category];
          const items = usefulLinks.filter((link) => link.category === category);
          return (
            <Reveal key={category}>
              <div>
                <div className="mb-4 flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-brand">
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3 className="font-semibold">{category}</h3>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {items.map((link) => (
                    <LinkCard key={link.name} link={link} />
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
