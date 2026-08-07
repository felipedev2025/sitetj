export type NavItem = {
  label: string;
  href: string;
};

// Anchor links use "/#id" (not "#id") so they still resolve correctly when
// clicked from a page other than the home page (e.g. Central do Cliente).
export const navItems: NavItem[] = [
  { label: "Soluções", href: "/#solucoes" },
  { label: "Segmentos", href: "/#segmentos" },
  { label: "Equipamentos", href: "/#equipamentos" },
  { label: "Empresa", href: "/#empresa" },
  { label: "Central do Cliente", href: "/central-do-cliente" },
  { label: "Contato", href: "/#contato" },
];
