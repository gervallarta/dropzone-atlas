import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { starterDropzones } from "../lib/dropzones.seed";

async function seed() {
  const outDir = path.join(process.cwd(), "data");
  const outPath = path.join(outDir, "dropzones.json");

  await mkdir(outDir, { recursive: true });
  await writeFile(outPath, `${JSON.stringify(starterDropzones, null, 2)}\n`, "utf8");

  console.log(`Seeded ${starterDropzones.length} dropzones to ${outPath}`);
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
