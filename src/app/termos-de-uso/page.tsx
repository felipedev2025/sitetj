import type { Metadata } from "next";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: `Termos de Uso do site da ${company.legalName}.`,
};

export default function TermsOfUsePage() {
  return (
    <div className="container-page py-20">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-semibold">Termos de Uso</h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            O conteúdo deste site — textos, imagens, marcas e logotipos — pertence
            à {company.legalName} ou é utilizado com sua autorização, e não deve
            ser reproduzido sem consentimento prévio.
          </p>
          <p>
            As informações sobre produtos, serviços e equipamentos têm caráter
            institucional e podem ser atualizadas sem aviso prévio. Para
            condições comerciais atualizadas, entre em contato diretamente com
            nossa equipe.
          </p>
          <p>
            Ao utilizar o formulário de contato, você concorda com o uso dos
            seus dados conforme descrito em nossa{" "}
            <a href="/politica-de-privacidade" className="text-brand hover:underline">
              Política de Privacidade
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
