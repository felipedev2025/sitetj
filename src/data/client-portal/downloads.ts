export type DownloadCategory = "TeamViewer" | "AnyDesk";

export type DownloadItem = {
  name: string;
  description: string;
  category: DownloadCategory;
  version: string;
  size: string;
  date: string; // ISO
  // Proprietary files (internal manuals) aren't hosted publicly yet — those
  // requests route to WhatsApp support instead of a dead link, until this
  // section is wired up to a real file store / API.
  href: string;
  external?: boolean;
};

export const downloadCategories: DownloadCategory[] = ["TeamViewer", "AnyDesk"];

export const downloads: DownloadItem[] = [
  {
    name: "TeamViewer QuickSupport",
    description: "Acesso remoto para atendimento imediato com nossa equipe de suporte.",
    category: "TeamViewer",
    version: "Atual",
    size: "5 MB",
    date: "2026-08-01",
    href: "https://www.teamviewer.com/pt-br/download/windows/",
    external: true,
  },
  {
    name: "AnyDesk",
    description: "Alternativa de acesso remoto para atendimento e suporte técnico.",
    category: "AnyDesk",
    version: "Atual",
    size: "4 MB",
    date: "2026-08-01",
    href: "https://anydesk.com/pt/downloads/windows",
    external: true,
  },
];
