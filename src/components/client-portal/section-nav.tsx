"use client";

import { useEffect, useRef, useState } from "react";
import { Newspaper, Link2, Download as DownloadIcon, BookOpen, Tag } from "lucide-react";

const items = [
  { href: "#alertas", label: "Alertas", icon: Newspaper },
  { href: "#noticias", label: "Fique por dentro", icon: Newspaper },
  { href: "#links-uteis", label: "Links úteis", icon: Link2 },
  { href: "#downloads", label: "Downloads", icon: DownloadIcon },
  { href: "#versoes", label: "Versões do sistema", icon: Tag },
  { href: "#base-de-conhecimento", label: "Base de conhecimento", icon: BookOpen },
];

export function SectionNav() {
  const [active, setActive] = useState(items[0]?.href ?? "");
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ids = items.map((item) => item.href.slice(1));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          setActive(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const activeButton = trackRef.current?.querySelector<HTMLAnchorElement>(`a[href="${active}"]`);
    activeButton?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }, [active]);

  return (
    <div className="sticky top-16 z-30 -mx-4 border-b border-border/60 bg-background/80 px-4 backdrop-blur-md sm:top-18">
      <div
        ref={trackRef}
        className="container-page flex gap-2 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => {
          const isActive = active === item.href;
          return (
            <a
              key={item.href}
              href={item.href}
              className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                isActive
                  ? "border-brand bg-brand text-white"
                  : "border-border bg-card text-foreground/70 hover:border-brand/40 hover:text-foreground"
              }`}
            >
              <item.icon className="h-3.5 w-3.5" />
              {item.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
