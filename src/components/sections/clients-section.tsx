import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { clients } from "@/data/clients";
import { company } from "@/data/company";

function ClientTile({ client }: { client: (typeof clients)[number] }) {
  return (
    <div
      className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl border border-border bg-card p-3"
      title={client.name}
    >
      <Image
        src={client.image}
        alt={client.name}
        width={96}
        height={96}
        className="h-full w-full object-contain grayscale transition-all duration-300 hover:grayscale-0"
      />
    </div>
  );
}

export function ClientsSection() {
  const third = Math.ceil(clients.length / 3);
  const rows = [
    clients.slice(0, third),
    clients.slice(third, third * 2),
    clients.slice(third * 2),
  ];

  return (
    <section className="bg-secondary/30 py-24 sm:py-28">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              +{company.activeClients} clientes confiam na TJ Automação
            </h2>
            <p className="mt-3 text-muted-foreground">
              Alguns dos negócios que utilizam nossos sistemas, equipamentos e suporte.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.05}>
        <div className="group mt-14 flex flex-col gap-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          {rows.map((row, i) => (
            <div key={i} className="overflow-hidden">
              <div
                className={`flex w-max items-center gap-4 ${
                  i % 2 === 0 ? "marquee-track" : "marquee-track-reverse"
                }`}
              >
                {[...row, ...row].map((client, j) => (
                  <ClientTile key={`${client.name}-${j}`} client={client} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
