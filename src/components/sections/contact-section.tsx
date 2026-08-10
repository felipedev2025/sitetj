"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { Mail, MapPin, Phone, Clock, Send, Briefcase, Wallet, Headset, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { WhatsAppIcon } from "@/components/icons/social-icons";
import { company } from "@/data/company";

export function ContactSection() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const text = `Olá! Meu nome é ${name}.\n\n${message}`;
    const url = `${company.contact.whatsapp.href}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contato" className="scroll-mt-16 bg-secondary/30 py-24 sm:py-28">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold sm:text-4xl">Vamos nos comunicar ?</h2>
            <p className="mt-3 text-muted-foreground">
              Conte um pouco sobre sua necessidade — respondemos direto no WhatsApp.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.03}>
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
            {[
              {
                icon: Briefcase,
                title: "Comercial",
                cta: "Clique e fale agora",
                href: company.contact.comercialWhatsapp.href,
              },
              {
                icon: Wallet,
                title: "Financeiro",
                cta: "Clique e fale agora",
                href: company.contact.financeiroWhatsapp.href,
              },
              {
                icon: Headset,
                title: "Suporte Sistemas",
                cta: "Clique e fale agora",
                href: company.contact.supportWhatsapp.href,
              },
            ].map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-lg hover:shadow-brand/20"
              >
                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100" />
                <span className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-brand text-white">
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                </span>
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <item.icon className="h-6 w-6" />
                </span>
                <p className="text-lg font-semibold">{item.title}</p>
                <p className="flex items-center gap-1 text-sm font-medium text-brand">
                  {item.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </p>
              </a>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className="flex h-full flex-col gap-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/hero/tj-automacao-hero-contato.jpg"
                  alt="Atendimento e suporte TJ Automação"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>

              <ul className="space-y-4 rounded-2xl border border-border bg-card p-6 text-sm">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span>
                    {company.contact.phones.map((p) => (
                      <a key={p.href} href={p.href} className="block hover:text-brand">
                        {p.label}
                      </a>
                    ))}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <a href={`mailto:${company.contact.email}`} className="hover:text-brand">
                    {company.contact.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <a
                    href={company.contact.address.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand"
                  >
                    {company.contact.address.street} — {company.contact.address.neighborhood},{" "}
                    {company.contact.address.city}/{company.contact.address.state} ·{" "}
                    {company.contact.address.zip}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span className="space-y-0.5">
                    {company.contact.hours.map((h) => (
                      <span key={h.days} className="block">
                        {h.days}: {h.time}
                      </span>
                    ))}
                  </span>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex h-full flex-col gap-6">
              <form
                onSubmit={handleSubmit}
                className="grid gap-4 rounded-2xl border border-border bg-card p-6 sm:p-8"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-1.5">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nome
                    </label>
                    <input
                      id="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none ring-brand/40 focus:ring-2"
                    />
                  </div>
                  <div className="grid gap-1.5">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Telefone
                    </label>
                    <input
                      id="phone"
                      required
                      className="rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none ring-brand/40 focus:ring-2"
                    />
                  </div>
                </div>
                <div className="grid gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="resize-none rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none ring-brand/40 focus:ring-2"
                  />
                </div>
                <Button type="submit" size="lg" className="gap-2 bg-brand hover:bg-brand-dark">
                  <Send className="h-4 w-4" />
                  Enviar pelo WhatsApp
                </Button>
              </form>

              <div className="relative h-72 w-full overflow-hidden rounded-2xl border border-border">
                <iframe
                  src={company.contact.address.mapsEmbedUrl}
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  title="Localização da TJ Automação em Jaú/SP"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
