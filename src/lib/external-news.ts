export type ExternalNewsCategory =
  | "Reforma Tributária"
  | "Atualizações Fiscais"
  | "Legislação Trabalhista"
  | "Tecnologia e Automação Comercial";

export type ExternalNewsItem = {
  source: "externo";
  title: string;
  url: string;
  date: string; // ISO
  summary: string;
  category: ExternalNewsCategory;
  publisher: string;
};

function decodeEntities(str: string): string {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&#8211;|&#8212;/g, "-")
    .replace(/&#8216;|&#8217;/g, "'")
    .replace(/&#8220;|&#8221;/g, '"')
    .replace(/&#8230;/g, "...")
    .replace(/&#(\d+);/g, (_, code: string) => String.fromCharCode(Number(code)))
    .replace(/\s+/g, " ")
    .trim();
}

function extractTag(block: string, tag: string): string {
  const match = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
  if (!match) return "";
  return match[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1").trim();
}

function cleanSummary(raw: string): string {
  const withoutBoilerplate = raw.replace(/<p>\s*O post[\s\S]*?apareceu primeiro em[\s\S]*?<\/p>\s*$/i, "");
  const plain = decodeEntities(withoutBoilerplate.replace(/<[^>]+>/g, " "));
  if (plain.length <= 220) return plain;
  return `${plain.slice(0, 220).replace(/\s+\S*$/, "")}...`;
}

function parseWordpressFeed(
  xml: string,
  category: ExternalNewsCategory,
  publisher: string,
  isRelevant?: (title: string, summary: string) => boolean
): ExternalNewsItem[] {
  const blocks = xml.match(/<item\b[\s\S]*?<\/item>/g) ?? [];
  return blocks
    .map((block) => {
      const title = decodeEntities(extractTag(block, "title"));
      const url = extractTag(block, "link");
      const summary = cleanSummary(extractTag(block, "description"));
      const dateRaw = extractTag(block, "pubDate");
      const date = dateRaw && !Number.isNaN(Date.parse(dateRaw)) ? new Date(dateRaw).toISOString() : new Date().toISOString();
      return { source: "externo" as const, title, url, date, summary, category, publisher };
    })
    .filter((item) => item.title && item.url)
    .filter((item) => (isRelevant ? isRelevant(item.title, item.summary) : true));
}

// The "automação" tag on Mercado&Consumo also catches loosely-related macro
// business news (e.g. an aerospace-company valuation piece that mentions
// automation in passing) — require an actual retail/commerce term so the
// feed stays on-topic for a retail-automation client portal.
const RETAIL_TECH_KEYWORDS =
  /varejo|varejist|loja|comércio|consumidor|\bpdv\b|ponto de venda|franquia|foodservice|restaurante|supermercado|atacarejo|farmácia|meios? de pagamento|checkout|frente de caixa|e-commerce|gôndola/i;

// gov.br publishes this feed as an RSS 1.0/RDF collection that mixes real
// articles with images, folders and listing links. Only items typed as
// "collective.nitf.content" are actual news articles — everything else
// (dc:type Image/Folder/Collection/Link) is site chrome that happens to be
// enumerated in the same <items> sequence.
function parseReceitaFederalFeed(xml: string): ExternalNewsItem[] {
  const ARTICLE_TYPE = "collective.nitf.content";
  const blocks = xml.match(/<item\b[\s\S]*?<\/item>/g) ?? [];
  return blocks
    .filter((block) => block.includes(`<dc:type>${ARTICLE_TYPE}</dc:type>`))
    .map((block) => {
      const title = decodeEntities(extractTag(block, "title"));
      const url = extractTag(block, "link");
      const summary = decodeEntities(extractTag(block, "description"));
      const dateRaw = extractTag(block, "dc:date");
      const date = dateRaw && !Number.isNaN(Date.parse(dateRaw)) ? new Date(dateRaw).toISOString() : new Date().toISOString();
      const category: ExternalNewsCategory = /reforma tribut|\bibs\b|\bcbs\b|split payment/i.test(`${title} ${summary}`)
        ? "Reforma Tributária"
        : "Atualizações Fiscais";
      return { source: "externo" as const, title, url, date, summary, category, publisher: "Receita Federal" };
    })
    .filter((item) => item.title && item.url);
}

type Source = {
  url: string;
  parse: (xml: string) => ExternalNewsItem[];
};

// Every source below was checked live before wiring it in. Sources tried and
// rejected because they 404 or error on every RSS path attempted: Ministério
// do Trabalho e Emprego, eSocial, gov.br/trabalho-e-previdencia — there is
// currently no working official feed for labor law, so that category is
// filled by a reputable non-government publisher instead.
const SOURCES: Source[] = [
  {
    url: "https://www.gov.br/receitafederal/pt-br/assuntos/noticias/RSS",
    parse: parseReceitaFederalFeed,
  },
  {
    // Guia Trabalhista (Portal Tributário) — long-running Brazilian labor &
    // social-security compliance publication, not affiliated with the
    // government.
    url: "https://trabalhista.blog/feed",
    parse: (xml) => parseWordpressFeed(xml, "Legislação Trabalhista", "Guia Trabalhista"),
  },
  {
    // Mercado&Consumo, "Automação" tag — retail-tech trade press, filtered
    // to their automation/retail-technology coverage specifically so it
    // doesn't pull in unrelated general retail-business news.
    url: "https://mercadoeconsumo.com.br/tag/automacao/feed/",
    parse: (xml) =>
      parseWordpressFeed(xml, "Tecnologia e Automação Comercial", "Mercado&Consumo", (title, summary) =>
        RETAIL_TECH_KEYWORDS.test(`${title} ${summary}`)
      ),
  },
];

async function fetchSource(source: Source): Promise<ExternalNewsItem[]> {
  try {
    const res = await fetch(source.url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; TJAutomacaoSite/1.0)" },
      next: { revalidate: 60 * 60 * 24 },
    });
    if (!res.ok) return [];
    return source.parse(await res.text());
  } catch {
    return [];
  }
}

export async function getExternalNews(): Promise<ExternalNewsItem[]> {
  const results = await Promise.all(SOURCES.map(fetchSource));
  return results.flat();
}
