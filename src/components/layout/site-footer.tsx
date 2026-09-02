import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/icons/social-icons";
import { company } from "@/data/company";
import { navItems } from "@/data/navigation";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-navy text-white">
      <div className="container-page grid gap-10 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Image
            src="/images/brand/tj-automacao-logo-header.png"
            alt="TJ Automação"
            width={1215}
            height={317}
            unoptimized
            className="h-10 w-auto rounded bg-white object-contain px-3 py-2"
          />
          <p className="mt-4 max-w-sm text-sm text-white/60">
            {company.description}
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={company.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TJ Automação no Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href={company.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TJ Automação no Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/80">
            Navegação
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-white/60">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white/80">
            Contato
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0" />
              <span>
                {company.contact.phones.map((p, i) => (
                  <span key={p.href}>
                    <a href={p.href} className="hover:text-white">
                      {p.label}
                    </a>
                    {i < company.contact.phones.length - 1 ? " · " : ""}
                  </span>
                ))}
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0" />
              <a href={`mailto:${company.contact.email}`} className="hover:text-white">
                {company.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <a
                href={company.contact.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                {company.contact.address.street} — {company.contact.address.neighborhood},{" "}
                {company.contact.address.city}/{company.contact.address.state} ·{" "}
                {company.contact.address.zip}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {year} {company.legalName}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/politica-de-privacidade" className="hover:text-white">
              Política de Privacidade
            </Link>
            <Link href="/termos-de-uso" className="hover:text-white">
              Termos de Uso
            </Link>
          </div>
          <p>
            <a
              href="https://wa.me/5514991100309?text=Vim%20pelo%20site%20da%20TJ%20Automa%C3%A7%C3%A3o%2C%20tenho%20interesse%20em%20desenvolver%20um%20site%20com%20voc%C3%AA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Desenvolvido por Felipe Fragoso — 2026
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
