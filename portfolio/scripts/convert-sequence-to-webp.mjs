// One-off: convert the scroll-animation PNG frames to WebP to cut payload.
// Usage: node scripts/convert-sequence-to-webp.mjs
import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import path from "node:path";

const dir = path.join(process.cwd(), "public", "sequence");

const files = (await readdir(dir)).filter((f) => f.toLowerCase().endsWith(".png"));
files.sort();

let pngTotal = 0;
let webpTotal = 0;

for (const file of files) {
  const inPath = path.join(dir, file);
  const outPath = path.join(dir, file.replace(/\.png$/i, ".webp"));

  pngTotal += (await stat(inPath)).size;
  await sharp(inPath).webp({ quality: 80 }).toFile(outPath);
  webpTotal += (await stat(outPath)).size;
}

const mb = (b) => (b / (1024 * 1024)).toFixed(1);
console.log(`Converted ${files.length} frames`);
console.log(`PNG total:  ${mb(pngTotal)} MB`);
console.log(`WebP total: ${mb(webpTotal)} MB`);
console.log(`Reduction:  ${(100 - (webpTotal / pngTotal) * 100).toFixed(1)}%`);
