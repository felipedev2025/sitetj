import {
  Boxes,
  CreditCard,
  ChartLine,
  Receipt,
  Wallet,
  LifeBuoy,
  ShoppingCart,
  Users,
  Truck,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const capabilities = [
  { icon: CreditCard, label: "PDV — frente de caixa" },
  { icon: Boxes, label: "Controle de estoque" },
  { icon: Wallet, label: "Financeiro" },
  { icon: Receipt, label: "Emissão fiscal (NF-e / NFC-e)" },
  { icon: ShoppingCart, label: "Compras" },
  { icon: ChartLine, label: "Vendas e relatórios gerenciais" },
  { icon: Users, label: "Controle de clientes" },
  { icon: Truck, label: "Controle de fornecedores" },
  { icon: LifeBuoy, label: "Suporte especializado" },
];

export function SystemSection() {
  return (
    <section className="py-24 sm:py-28">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Mais controle, menos burocracia
              </h2>
              <p className="mt-4 text-muted-foreground">
                Tenha um ERP completo para administrar sua empresa com eficiência. Controle
                vendas, estoque, financeiro, emissão fiscal e indicadores em um único ambiente,
                com suporte especializado da TJ Automação.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {capabilities.map((cap) => (
                <div
                  key={cap.label}
                  className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5"
                >
                  <cap.icon className="h-5 w-5 text-brand" />
                  <span className="text-sm font-medium">{cap.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
