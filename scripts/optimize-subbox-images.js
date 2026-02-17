/**
 * Optimize the eight sub-box PNGs in public/images/ for web:
 * - Resize only if width > 1200px (keeps aspect ratio, no upscale)
 * - Compress PNG; overwrite only if result is smaller
 * Run: node scripts/optimize-subbox-images.js
 */
/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require("fs");
const path = require("path");

const sharp = require("sharp");

const PUBLIC_IMAGES = path.join(__dirname, "..", "public", "images");
const FILES = [
  "engineering-services.png",
  "light-steel-framing.png",
  "green-warehouse.png",
  "hybrid-modular-building-system.png",
  "training.png",
  "warehouse-in-a-box.png",
  "roofing.png",
  "modular-solution.png",
];

const MAX_WIDTH = 1200;
const PNG_OPTIONS = { compressionLevel: 9, effort: 10 };

async function optimize() {
  for (const file of FILES) {
    const inputPath = path.join(PUBLIC_IMAGES, file);
    if (!fs.existsSync(inputPath)) {
      console.warn("Skip (not found):", file);
      continue;
    }
    const before = fs.statSync(inputPath).size;
    const meta = await sharp(inputPath).metadata();
    let pipeline = sharp(inputPath);
    if (meta.width && meta.width > MAX_WIDTH) {
      pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
    }
    const tmpPath = inputPath + ".opt.tmp";
    await pipeline.png(PNG_OPTIONS).toFile(tmpPath);
    const after = fs.statSync(tmpPath).size;
    if (after < before) {
      fs.renameSync(tmpPath, inputPath);
      const pct = ((1 - after / before) * 100).toFixed(1);
      console.log(`${file}: ${(before / 1024).toFixed(1)} KB → ${(after / 1024).toFixed(1)} KB (${pct}% smaller)`);
    } else {
      fs.unlinkSync(tmpPath);
      console.log(`${file}: kept as-is (${(before / 1024).toFixed(1)} KB)`);
    }
  }
  console.log("Done.");
}

optimize().catch((err) => {
  console.error(err);
  process.exit(1);
});
