import Image from "next/image";
import { Headset, Sparkles, CircleQuestionMark, LayoutDashboard, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { sti3Support } from "@/data/services";
import { company } from "@/data/company";

const featureIcons = [Headset, Sparkles, CircleQuestionMark, LayoutDashboard];

export function SupportHighlightSection() {
  return (
    <section className="py-24 sm:py-28">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal delay={0.08} className="lg:order-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/institutional/tj-automacao-escritorio-equipe.jpg"
                alt="Equipe TJ Automação atendendo no escritório"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal className="lg:order-1">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wide text-brand">
                Na {company.name} você conta com
              </span>
              <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                {sti3Support.title}
              </h2>
              <p className="mt-4 text-muted-foreground">{sti3Support.description}</p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {sti3Support.features.map((feature, i) => {
                  const Icon = featureIcons[i];
                  return (
                    <div key={feature} className="flex items-center gap-2.5">
                      <Icon className="h-5 w-5 shrink-0 text-brand" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  );
                })}
              </div>

              <Button
                size="lg"
                className="mt-8 gap-2 bg-brand hover:bg-brand-dark"
                render={
                  <a
                    href={company.contact.supportWhatsapp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                <MessageCircle className="h-4 w-4" />
                {sti3Support.cta}
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
