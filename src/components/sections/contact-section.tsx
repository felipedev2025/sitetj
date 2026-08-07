"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { Mail, MapPin, Phone, Clock, Send, Briefcase, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
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
            <h2 className="text-3xl font-semibold sm:text-4xl">Vamos nos comunicar?</h2>
            <p className="mt-3 text-muted-foreground">
              Conte um pouco sobre sua necessidade — respondemos direto no WhatsApp.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.03}>
          <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="flex-1 gap-2 bg-brand hover:bg-brand-dark"
              render={
                <a
                  href={company.contact.comercialWhatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <Briefcase className="h-4 w-4" />
              WhatsApp Comercial · {company.contact.comercialWhatsapp.label}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="flex-1 gap-2"
              render={
                <a
                  href={company.contact.financeiroWhatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <Wallet className="h-4 w-4" />
              WhatsApp Financeiro · {company.contact.financeiroWhatsapp.label}
            </Button>
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
