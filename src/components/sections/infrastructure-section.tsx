import { ServerCog, Wifi, ShieldCheck, HardDriveDownload, Headset, MonitorSmartphone, RefreshCw, Plug } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { infrastructureItems } from "@/data/services";

const icons = [ServerCog, Wifi, HardDriveDownload, MonitorSmartphone, Headset, RefreshCw, ShieldCheck, Plug];

export function InfrastructureSection() {
  return (
    <section className="bg-navy py-20 text-white sm:py-24">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-white/60">
              Infraestrutura completa
            </span>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Suporte que vai além do sistema
            </h2>
            <p className="mt-3 text-white/70">
              Cuidamos também da infraestrutura que mantém a sua operação no ar.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {infrastructureItems.map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div
                  key={item}
                  className="flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-5 text-center"
                >
                  <Icon className="h-5 w-5 text-brand" />
                  <span className="text-sm font-medium text-white/85">{item}</span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
