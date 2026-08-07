import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/client-portal/breadcrumbs";
import { TicketForm } from "@/components/client-portal/ticket-form";
import { company } from "@/data/company";

const description =
  "Abra um chamado de suporte para relógio de ponto ou para o TJ Sistemas de forma rápida, sem cadastro nem senha.";

export const metadata: Metadata = {
  title: "Abrir chamado de suporte",
  description,
  alternates: { canonical: "/central-do-cliente/abrir-chamado" },
  openGraph: {
    title: `Abrir chamado de suporte — ${company.name}`,
    description,
    url: "/central-do-cliente/abrir-chamado",
    type: "website",
  },
};

export default function AbrirChamadoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: "https://www.tjautomacao.com.br/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Central do Cliente",
        item: "https://www.tjautomacao.com.br/central-do-cliente",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Abrir chamado",
        item: "https://www.tjautomacao.com.br/central-do-cliente/abrir-chamado",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="border-b border-border bg-secondary/30 py-14 sm:py-16">
        <div className="container-page">
          <Breadcrumbs
            items={[
              { label: "Início", href: "/" },
              { label: "Central do Cliente", href: "/central-do-cliente" },
              { label: "Abrir chamado" },
            ]}
          />
          <span className="mt-4 block text-sm font-semibold uppercase tracking-wide text-brand">
            Suporte
          </span>
          <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">Abrir chamado de suporte</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">{description}</p>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container-page">
          <div className="mx-auto max-w-2xl">
            <TicketForm />
          </div>
        </div>
      </section>
    </>
  );
}
