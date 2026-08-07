// One-time script: derives every brand-logo asset used in the site directly
// from the real logo file (public/images/brand/tj-automacao-logo-oficial.jpg).
// No redesign — only: (1) keying the flat white background out to real
// alpha transparency, since the source is a JPEG with a baked-in white
// background that showed as an ugly box on non-white surfaces, and
// (2) tight crops (full lockup / wordmark-only / icon-only) for different
// contexts. All outputs are PNGs with alpha.

import sharp from "sharp";
import path from "node:path";

const SRC = path.resolve(
  import.meta.dirname,
  "..",
  "public/images/brand/tj-automacao-logo-oficial.jpg"
);
const APP_DIR = path.resolve(import.meta.dirname, "..", "src/app");
const PUBLIC_DIR = path.resolve(import.meta.dirname, "..", "public");
const BRAND_DIR = path.join(PUBLIC_DIR, "images/brand");

// Key the near-white background out to alpha. The source background is a
// flat, near-uniform white, so a simple whiteness threshold (on the min of
// the three channels, i.e. low saturation + high lightness) cleanly
// isolates it without haloing the logo's own colors.
async function withTransparentBg(input) {
  const { data, info } = await sharp(input).raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const out = Buffer.alloc(width * height * 4);
  for (let i = 0; i < width * height; i++) {
    const r = data[i * channels];
    const g = data[i * channels + 1];
    const b = data[i * channels + 2];
    const minC = Math.min(r, g, b);
    let alpha;
    if (minC > 245) alpha = 0;
    else if (minC < 200) alpha = 255;
    else alpha = Math.round(((245 - minC) / (245 - 200)) * 255);
    out[i * 4] = r;
    out[i * 4 + 1] = g;
    out[i * 4 + 2] = b;
    out[i * 4 + 3] = alpha;
  }
  return sharp(out, { raw: { width, height, channels: 4 } }).png().toBuffer();
}

async function run() {
  const transparent = await withTransparentBg(SRC);

  // Full lockup (icon + wordmark + tagline), auto-trimmed to its visible
  // bounding box — the original 1254x1254 file has the lockup centered in
  // a mostly-empty square canvas.
  const lockupTrimmed = await sharp(transparent)
    .trim({ threshold: 15 })
    .toBuffer({ resolveWithObject: true });

  await sharp(lockupTrimmed.data)
    .extend({ top: 14, bottom: 14, left: 14, right: 14, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(BRAND_DIR, "tj-automacao-logo-header.png"));

  // Wordmark-only (drop the tagline line) — used in the nav bar, where a
  // single-line lockup centers correctly against single-line menu items.
  // The two-line version there made "Tj automação" look vertically off,
  // since the tagline line pulled the whole bounding box down.
  const wordmarkHeight = Math.round(lockupTrimmed.info.height * 0.7);
  const wordmarkTrimmed = await sharp(lockupTrimmed.data)
    .extract({ left: 0, top: 0, width: lockupTrimmed.info.width, height: wordmarkHeight })
    .trim({ threshold: 15 })
    .toBuffer({ resolveWithObject: true });

  await sharp(wordmarkTrimmed.data)
    .extend({ top: 10, bottom: 10, left: 10, right: 10, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(BRAND_DIR, "tj-automacao-logo-wordmark.png"));

  console.log("Header logo lockup + wordmark generated (transparent bg, real asset).");

  // Icon-only "Tj" mark, on solid white (favicons/app icons don't benefit
  // from transparency — most surfaces they render on assume an opaque tile).
  const mark = await sharp(SRC)
    .extract({ left: 15, top: 460, width: 265, height: 320 })
    .extend({ top: 30, bottom: 30, left: 30, right: 30, background: "#ffffff" })
    .png()
    .toBuffer();

  await sharp(mark).resize(512, 512, { fit: "contain", background: "#ffffff" }).toFile(path.join(APP_DIR, "icon.png"));
  await sharp(mark).resize(180, 180, { fit: "contain", background: "#ffffff" }).toFile(path.join(APP_DIR, "apple-icon.png"));
  await sharp(mark).resize(512, 512, { fit: "contain", background: "#ffffff" }).toFile(path.join(PUBLIC_DIR, "icon-512.png"));
  await sharp(mark).resize(180, 180, { fit: "contain", background: "#ffffff" }).toFile(path.join(PUBLIC_DIR, "icon-180.png"));

  console.log("Icons generated from real logo mark.");
}

run();
