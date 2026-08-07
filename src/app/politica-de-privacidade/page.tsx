import type { Metadata } from "next";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: `Política de Privacidade da ${company.legalName}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container-page py-20">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-semibold">Política de Privacidade</h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            Esta página descreve como a {company.legalName} trata as informações
            enviadas por meio do formulário de contato deste site.
          </p>
          <p>
            Os dados informados (nome, telefone e mensagem) são utilizados
            exclusivamente para retorno do seu contato, via WhatsApp, e-mail ou
            telefone, e não são compartilhados com terceiros para fins
            comerciais.
          </p>
          <p>
            Para dúvidas sobre o tratamento dos seus dados, entre em contato
            pelo e-mail{" "}
            <a href={`mailto:${company.contact.email}`} className="text-brand hover:underline">
              {company.contact.email}
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
