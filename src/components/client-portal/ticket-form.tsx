"use client";

import { useState, type FormEvent } from "react";
import { Clock, Monitor, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/data/company";

type TicketType = "Relógio de Ponto" | "Sistema (TJ Sistemas)";

const ticketTypes: { value: TicketType; icon: typeof Clock; description: string }[] = [
  {
    value: "Relógio de Ponto",
    icon: Clock,
    description: "Problemas com o equipamento de marcação de ponto",
  },
  {
    value: "Sistema (TJ Sistemas)",
    icon: Monitor,
    description: "Dúvidas ou problemas no sistema de gestão",
  },
];

export function TicketForm() {
  const [type, setType] = useState<TicketType>("Relógio de Ponto");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const text = [
      "Olá! Quero abrir um chamado de suporte.",
      "",
      `Tipo: ${type}`,
      `Nome: ${name}`,
      `Telefone: ${phone}`,
      `CNPJ: ${cnpj}`,
      "",
      `Descrição do problema: ${description}`,
    ].join("\n");
    const url = `${company.contact.supportWhatsapp.href}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 rounded-2xl border border-border bg-card p-6 sm:p-8">
      <div className="grid gap-3">
        <label className="text-sm font-medium">Sobre o que é o seu chamado?</label>
        <div className="grid gap-3 sm:grid-cols-2">
          {ticketTypes.map((t) => (
            <button
              key={t.value}
              type="button"
              onClick={() => setType(t.value)}
              className={`flex items-start gap-3 rounded-xl border p-4 text-left transition-colors ${
                type === t.value
                  ? "border-brand bg-brand/5"
                  : "border-border hover:border-brand/40"
              }`}
            >
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                  type === t.value ? "bg-brand text-white" : "bg-accent text-brand"
                }`}
              >
                <t.icon className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-semibold">{t.value}</span>
                <span className="mt-0.5 block text-sm text-muted-foreground">{t.description}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <label htmlFor="ticket-name" className="text-sm font-medium">
            Seu nome
          </label>
          <input
            id="ticket-name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-lg border border-input bg-background px-3 py-2.5 text-base outline-none ring-brand/40 focus:ring-2"
          />
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="ticket-phone" className="text-sm font-medium">
            Telefone / WhatsApp
          </label>
          <input
            id="ticket-phone"
            required
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="rounded-lg border border-input bg-background px-3 py-2.5 text-base outline-none ring-brand/40 focus:ring-2"
          />
        </div>
      </div>

      <div className="grid gap-1.5">
        <label htmlFor="ticket-cnpj" className="text-sm font-medium">
          CNPJ da empresa
        </label>
        <input
          id="ticket-cnpj"
          required
          value={cnpj}
          onChange={(e) => setCnpj(e.target.value)}
          className="rounded-lg border border-input bg-background px-3 py-2.5 text-base outline-none ring-brand/40 focus:ring-2"
        />
      </div>

      <div className="grid gap-1.5">
        <label htmlFor="ticket-description" className="text-sm font-medium">
          O que está acontecendo?
        </label>
        <textarea
          id="ticket-description"
          required
          rows={5}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Conte com suas palavras o que está acontecendo, sem pressa."
          className="resize-none rounded-lg border border-input bg-background px-3 py-2.5 text-base outline-none ring-brand/40 focus:ring-2"
        />
      </div>

      <Button type="submit" size="lg" className="gap-2 bg-brand hover:bg-brand-dark">
        <Send className="h-4 w-4" />
        Abrir chamado pelo WhatsApp
      </Button>
      <p className="-mt-2 text-center text-xs text-muted-foreground">
        Ao clicar, o WhatsApp abre com sua mensagem pronta — é só enviar.
      </p>
    </form>
  );
}
