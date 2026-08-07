"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItems } from "@/data/navigation";
import { company } from "@/data/company";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between sm:h-18">
        <Link
          href="/"
          aria-label="TJ Automação — página inicial"
          className="flex items-center"
          onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <Image
            src="/images/brand/tj-automacao-logo-header.png"
            alt="TJ Automação — sistemas, equipamentos e assistência"
            width={1215}
            height={317}
            priority
            unoptimized
            className="h-12 w-auto object-contain sm:h-14"
          />
        </Link>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-1 md:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-secondary hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={company.contact.phones[0].href}
            className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-foreground"
          >
            <Phone className="h-4 w-4" />
            {company.contact.phones[0].label}
          </a>
          <Button size="sm" className="bg-brand hover:bg-brand-dark" render={<a href="/#contato" />}>
            Fale conosco
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Abrir menu" />
            }
          >
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <SheetHeader>
              <SheetTitle className="text-left">
                <Image
                  src="/images/brand/tj-automacao-logo-header.png"
                  alt="TJ Automação"
                  width={1215}
                  height={317}
                  unoptimized
                  className="h-11 w-auto object-contain"
                />
              </SheetTitle>
            </SheetHeader>
            <nav aria-label="Navegação móvel" className="flex flex-col gap-1 px-4">
              {navItems.map((item) => (
                <SheetClose
                  key={item.href}
                  render={
                    <a
                      href={item.href}
                      className="rounded-md px-3 py-3 text-base font-medium text-foreground/80 hover:bg-secondary"
                    />
                  }
                >
                  {item.label}
                </SheetClose>
              ))}
            </nav>
            <div className="mt-4 flex flex-col gap-3 px-4">
              <a
                href={company.contact.phones[0].href}
                className="flex items-center gap-2 text-sm font-medium text-foreground/70"
              >
                <Phone className="h-4 w-4" />
                {company.contact.phones[0].label}
              </a>
              <SheetClose
                render={
                  <Button className="w-full bg-brand hover:bg-brand-dark" render={<a href="/#contato" />} />
                }
              >
                Fale conosco
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
