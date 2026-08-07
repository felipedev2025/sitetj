// One-time migration script: copies real assets from the legacy wget site
// into the new project's public/ folder with semantic names, and writes
// docs/ASSET-MAP.md documenting every migrated file.
//
// Read-only on the source (legacy) tree. Never deletes or overwrites the
// original site files.

import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const ROOT = path.resolve(import.meta.dirname, "..", "..");
const LEGACY = path.join(ROOT, "www.tjautomacao.com.br");
const PROJECT = path.resolve(import.meta.dirname, "..");
const PUBLIC = path.join(PROJECT, "public");
const DOCS = path.join(PROJECT, "docs");

const manifest = []; // { original, dest, purpose, section, dims, format, notes }

function slugify(str) {
  return str
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/&#039;/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function dims(absPath) {
  try {
    const out = execSync(`file "${absPath}"`, { encoding: "utf8" });
    // `file` can report spurious "density 1x1" earlier in the string for
    // JPEGs — the real WxH is always the last NxN match, right before
    // "components N".
    const matches = [...out.matchAll(/(\d+)\s*x\s*(\d+)/gi)];
    if (!matches.length) return "n/d";
    const last = matches[matches.length - 1];
    return `${last[1]}x${last[2]}`;
  } catch {
    return "n/d";
  }
}

function copyFile(srcAbs, destRel, purpose, section, notes = "") {
  const destAbs = path.join(PUBLIC, destRel);
  fs.mkdirSync(path.dirname(destAbs), { recursive: true });
  fs.copyFileSync(srcAbs, destAbs);
  const ext = path.extname(srcAbs).replace(".", "").toUpperCase();
  manifest.push({
    original: path.relative(ROOT, srcAbs).replace(/\\/g, "/"),
    dest: "public/" + destRel.replace(/\\/g, "/"),
    purpose,
    section,
    dims: dims(srcAbs),
    format: ext,
    notes,
  });
}

// ---------------------------------------------------------------------------
// 1. Brand — real current logo + legacy logo (kept for reference only)
// ---------------------------------------------------------------------------
copyFile(
  path.join(ROOT, "logo.jpeg"),
  "images/brand/tj-automacao-logo-oficial.jpg",
  "Logotipo oficial atual da TJ Automação (fornecido pelo cliente, substitui a logo antiga do site legado)",
  "Header, Footer, Favicon source",
  "Fundo branco liso; usar em superfícies claras. Melhor asset de marca disponível."
);
copyFile(
  path.join(LEGACY, "images/tj-automacao-logo.png"),
  "images/brand/tj-automacao-logo-legado.png",
  "Logotipo usado no site antigo (2018) — mantido apenas como referência histórica",
  "Não usado no novo site",
  "325x73px, baixa resolução. Substituído pela logo oficial em brand/."
);

// ---------------------------------------------------------------------------
// 2. Institutional materials found loose in the project root
// ---------------------------------------------------------------------------
copyFile(
  path.join(ROOT, "cartao para clientes.jpeg"),
  "images/institutional/tj-automacao-cartao-visita.jpg",
  "Cartão de visita oficial — confirma e-mail, endereço e tagline reais da marca",
  "Referência de identidade visual / não exibido diretamente no site",
  "Traz o padrão gráfico de circuito tech azul-marinho usado como inspiração visual do design system."
);
copyFile(
  path.join(ROOT, "imagem para outlook.jpeg"),
  "images/institutional/tj-automacao-assinatura-email.jpg",
  "Assinatura de e-mail oficial",
  "Referência de identidade visual / não exibido diretamente no site",
  ""
);
copyFile(
  path.join(ROOT, "imagem temos a solucao para sua empresa.jpeg"),
  "images/institutional/tj-automacao-solucao-empresa.jpg",
  "Peça de divulgação com o texto real 'Temos a solução para sua empresa'",
  "Possível uso em seção institucional ou hero secundário",
  "Foto de banco de imagens (lâmpada na mão) com overlay de texto da marca — usar com moderação."
);

// ---------------------------------------------------------------------------
// 3. Hero / section banners (1920x650 real photography used as page headers)
// ---------------------------------------------------------------------------
const heroMap = [
  ["images/tj-automacao.jpg", "tj-automacao-hero-institucional.jpg", "Banner de topo da página institucional (A Empresa)", "Seção Empresa"],
  ["images/solucoes.jpg", "tj-automacao-hero-solucoes.jpg", "Banner de topo da página de Soluções", "Seção Soluções"],
  ["images/produtos.jpg", "tj-automacao-hero-equipamentos.jpg", "Banner de topo da página de Produtos", "Seção Equipamentos"],
  ["images/clientes.jpg", "tj-automacao-hero-clientes.jpg", "Banner de topo da página de Clientes", "Seção Prova Social"],
  ["images/fale-conosco.jpg", "tj-automacao-hero-contato.jpg", "Banner de topo da página de Contato", "Seção Contato"],
];
for (const [src, dest, purpose, section] of heroMap) {
  copyFile(path.join(LEGACY, src), `images/hero/${dest}`, purpose, section, "1920x650, boa resolução, reaproveitável como fundo de seção.");
}
copyFile(
  path.join(LEGACY, "storage/banners/1535645177teste.jpg"),
  "images/hero/tj-automacao-hero-home-parceria.jpg",
  "Único banner cadastrado no carrossel da home antiga",
  "Hero da Home (candidato, revisar texto de apoio)",
  "Nome de arquivo original era um placeholder ('teste'); avaliar se o texto de apoio precisa ser reescrito."
);

// ---------------------------------------------------------------------------
// 4. Background textures
// ---------------------------------------------------------------------------
const bgMap = [
  ["images/background-1.jpg", "tj-automacao-textura-01.jpg"],
  ["images/background-2.jpg", "tj-automacao-textura-02.jpg"],
  ["images/background-3.jpg", "tj-automacao-textura-03.jpg"],
];
for (const [src, dest] of bgMap) {
  copyFile(path.join(LEGACY, src), `images/backgrounds/${dest}`, "Textura de fundo usada atrás de blocos de texto no site antigo", "Fundos de seção (uso opcional, com overlay)", "1920px largura.");
}

// ---------------------------------------------------------------------------
// 5. Institutional icons/illustrations (mission, vision, values, etc.)
// ---------------------------------------------------------------------------
const instMap = [
  ["images/tj-automacao-empresa.png", "tj-automacao-sobre-empresa.png", "Ilustração da seção institucional (Sobre a empresa)"],
  ["images/tj-automacao-missao.png", "tj-automacao-missao.png", "Ícone da Missão"],
  ["images/tj-automacao-visao.png", "tj-automacao-visao.png", "Ícone da Visão"],
  ["images/tj-automacao-valores.png", "tj-automacao-valores.png", "Ícone dos Valores"],
  ["images/treinamento.png", "tj-automacao-treinamento.png", "Ilustração da seção Treinamento"],
  ["images/suporte-e-assistencia-tecnica.png", "tj-automacao-suporte-assistencia.png", "Ilustração da seção Suporte e Assistência Técnica"],
  ["images/softwares-para-automacao-comercial.png", "tj-automacao-softwares-automacao.png", "Ilustração da seção Softwares para automação comercial"],
  ["images/venda-de-equipamentos-e-perifericos.png", "tj-automacao-venda-equipamentos.png", "Ilustração da seção Venda de equipamentos e periféricos"],
];
for (const [src, dest, purpose] of instMap) {
  copyFile(path.join(LEGACY, src), `images/institutional/${dest}`, purpose, "Seção Soluções / Empresa", "");
}

// ---------------------------------------------------------------------------
// 6. Small decorative box icons + fiscal certificate icons + home mini-icons
// ---------------------------------------------------------------------------
const iconMap = [
  ["images/tj-automacao-box.png", "icon-box-institucional.png", "Ícone decorativo do banner institucional"],
  ["images/clientes-box.png", "icon-box-clientes.png", "Ícone decorativo do banner de clientes"],
  ["images/solucoes-box.png", "icon-box-solucoes.png", "Ícone decorativo do banner de soluções"],
  ["images/produtos-box.png", "icon-box-produtos.png", "Ícone decorativo do banner de produtos"],
  ["images/fale-conosco-box.png", "icon-box-contato.png", "Ícone decorativo do banner de contato"],
  ["images/home-autorizadas.png", "icon-home-autorizadas.png", "Ícone da home — bloco 'Autorizadas'"],
  ["images/home-parceiros.png", "icon-home-parceiros.png", "Ícone da home — bloco 'Parceiros'"],
  ["images/home-sistemas.png", "icon-home-sistemas.png", "Ícone da home — bloco 'Sistemas'"],
  ["images/certificados-digitais-sat.png", "certificado-sat.png", "Ícone certificado fiscal SAT"],
  ["images/certificados-digitais-nfe.png", "certificado-nfe.png", "Ícone certificado fiscal NF-e"],
  ["images/certificados-digitais-nfce.png", "certificado-nfce.png", "Ícone certificado fiscal NFC-e"],
  ["images/certificados-digitais-nfse.png", "certificado-nfse.png", "Ícone certificado fiscal NFS-e"],
  ["images/certificados-digitais-nota-fiscal-paulista.png", "certificado-nota-fiscal-paulista.png", "Ícone Nota Fiscal Paulista"],
  ["images/certificados-digitais-sped.png", "certificado-sped.png", "Ícone certificado fiscal SPED"],
];
for (const [src, dest, purpose] of iconMap) {
  copyFile(path.join(LEGACY, src), `icons/${dest}`, purpose, "Diversos", "");
}

// ---------------------------------------------------------------------------
// 7. Authorized brand logos — parsed from solucoes.html (src + alt pairs)
// ---------------------------------------------------------------------------
const solucoesHtml = fs.readFileSync(path.join(LEGACY, "solucoes.html"), "utf8");
const brandRe = /<img src="(storage\/authorized-brands\/[^"]+)" alt="([^"]*)">/g;
let m;
while ((m = brandRe.exec(solucoesHtml))) {
  const [, src, alt] = m;
  const ext = path.extname(src);
  const dest = `${slugify(alt)}${ext}`;
  copyFile(path.join(LEGACY, src), `images/partners/${dest}`, `Logo da marca autorizada ${alt}`, "Seção Marcas Autorizadas", "");
}

// ---------------------------------------------------------------------------
// 8. Client logos — parsed from clientes.html (src + alt pairs)
// ---------------------------------------------------------------------------
const clientesHtml = fs.readFileSync(path.join(LEGACY, "clientes.html"), "utf8");
const clientRe = /<img src="(storage\/clients\/[^"]+)" alt="([^"]*)">/g;
while ((m = clientRe.exec(clientesHtml))) {
  const [, src, alt] = m;
  const ext = path.extname(src);
  const dest = `${slugify(alt)}${ext}`;
  copyFile(path.join(LEGACY, src), `images/clients/${dest}`, `Logo do cliente real "${alt}"`, "Seção Prova Social / Clientes", "");
}

// ---------------------------------------------------------------------------
// 9. Product/equipment photos — parsed per category page (href + data-caption)
// ---------------------------------------------------------------------------
const categoriaDir = path.join(LEGACY, "categoria");
const categoryFiles = fs.readdirSync(categoriaDir).filter((f) => f.endsWith(".html"));
let productCount = 0;
for (const catFile of categoryFiles) {
  const catSlug = catFile.replace(".html", "");
  const html = fs.readFileSync(path.join(categoriaDir, catFile), "utf8");
  const prodRe = /href="(?:\.\.\/)?(storage\/products\/[^"]+)" class="item" data-caption="([^"]*)"/g;
  while ((m = prodRe.exec(html))) {
    const [, src, caption] = m;
    const ext = path.extname(src);
    const dest = `${catSlug}-${slugify(caption)}${ext}`;
    copyFile(
      path.join(LEGACY, src),
      `images/equipment/${catSlug}/${dest}`,
      `Foto real do produto "${caption}" (categoria: ${catSlug})`,
      "Seção Equipamentos / Catálogo",
      ""
    );
    productCount++;
  }
}

// ---------------------------------------------------------------------------
// 10. Agency credit logo — explicitly excluded (not a TJ asset)
// ---------------------------------------------------------------------------
manifest.push({
  original: "www.tjautomacao.com.br/images/moinho-propaganda-logo.png",
  dest: "(não migrado)",
  purpose: "Logo da agência que desenvolveu o site antigo — não pertence à marca TJ",
  section: "Excluído",
  dims: dims(path.join(LEGACY, "images/moinho-propaganda-logo.png")),
  format: "PNG",
  notes: "Substituído pelo crédito 'Desenvolvido por Felipe Fragoso — 2026' no rodapé.",
});

// ---------------------------------------------------------------------------
// Write docs/ASSET-MAP.md
// ---------------------------------------------------------------------------
fs.mkdirSync(DOCS, { recursive: true });
const header = `# ASSET-MAP\n\nMapeamento de todos os ativos reais migrados do site legado (` +
  `\`www.tjautomacao.com.br\`, capturado via wget) para o novo projeto ` +
  `\`tj-automacao-next\`. Nenhum arquivo original foi apagado, movido ou sobrescrito — ` +
  `este projeto contém apenas cópias renomeadas.\n\n` +
  `Gerado automaticamente por \`scripts/migrate-assets.mjs\`. Total de arquivos migrados: **${manifest.length}**.\n\n` +
  `| Caminho original | Novo caminho | Finalidade | Seção | Dimensões | Formato | Observações |\n` +
  `|---|---|---|---|---|---|---|\n`;
const rows = manifest
  .map(
    (r) =>
      `| \`${r.original}\` | \`${r.dest}\` | ${r.purpose} | ${r.section} | ${r.dims} | ${r.format} | ${r.notes} |`
  )
  .join("\n");
fs.writeFileSync(path.join(DOCS, "ASSET-MAP.md"), header + rows + "\n");

console.log(`Migrados ${manifest.length} arquivos (${productCount} produtos).`);
console.log(`ASSET-MAP.md escrito em ${path.join(DOCS, "ASSET-MAP.md")}`);
