export type SystemVersionRelease = {
  version: string;
  date: string | null; // ISO, or null when the source has no real release date
  changes: string[];
};

export type SystemVersionData = {
  latestVersion: string;
  releases: SystemVersionRelease[];
};

// Public, unauthenticated changelog page of the reseller platform behind TJ
// Sistemas. It's a classic server-rendered ASP.NET MVC view (no API call, no
// login) — the version dropdown lists every release line, and requesting a
// specific one returns its full patch history in an HTML table.
const ENDPOINT = "https://portal.sti3.com.br/ConsultarVersao";

function decodeEntities(str: string): string {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&#8211;|&#8212;/g, "-")
    .replace(/&#(\d+);/g, (_, code: string) => String.fromCharCode(Number(code)))
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function parseBrDate(raw: string): string | null {
  const match = raw.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (!match) return null;
  const [, dd, mm, yyyy] = match;
  if (yyyy === "0001") return null; // placeholder date used on some older entries
  const date = new Date(`${yyyy}-${mm}-${dd}T00:00:00Z`);
  return Number.isNaN(date.getTime()) ? null : date.toISOString();
}

async function fetchHtml(url: string): Promise<string> {
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; TJAutomacaoSite/1.0)" },
    next: { revalidate: 60 * 60 * 24 },
  });
  if (!res.ok) throw new Error(`request failed: ${res.status}`);
  return res.text();
}

function extractLatestVersionTag(html: string): string | null {
  // The version-tree sidebar lists every release line with the newest
  // first, e.g. selecionarVersao('17.6.0') — regardless of which ?versao=
  // was requested, so a single fetch is enough to discover what's current.
  const match = html.match(/selecionarVersao\('([\d.]+)'\)/);
  return match ? match[1] : null;
}

function parseReleaseTable(html: string): SystemVersionRelease[] {
  const tbodyMatch = html.match(/<tbody>([\s\S]*?)<\/tbody>/);
  if (!tbodyMatch) return [];

  const rows = tbodyMatch[1].match(/<tr>[\s\S]*?<\/tr>/g) ?? [];
  const releases: SystemVersionRelease[] = [];

  for (const row of rows) {
    if (row.includes("<ul>")) {
      const items = Array.from(row.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/g)).map((m) =>
        decodeEntities(m[1]).replace(/^-\s*/, "")
      );
      if (releases.length > 0) releases[releases.length - 1].changes = items.filter(Boolean);
      continue;
    }
    const cells = Array.from(row.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)).map((m) => decodeEntities(m[1]));
    if (cells.length === 2 && cells[0]) {
      releases.push({ version: cells[0], date: parseBrDate(cells[1]), changes: [] });
    }
  }

  return releases;
}

export async function getSystemVersionHistory(): Promise<SystemVersionData | null> {
  try {
    const indexHtml = await fetchHtml(`${ENDPOINT}?powerstock=true`);
    const latestTag = extractLatestVersionTag(indexHtml);
    if (!latestTag) return null;

    const detailHtml = await fetchHtml(`${ENDPOINT}?powerstock=true&versao=${latestTag}`);
    const releases = parseReleaseTable(detailHtml).slice(0, 20);
    if (releases.length === 0) return null;

    return { latestVersion: releases[0].version, releases };
  } catch {
    return null;
  }
}
