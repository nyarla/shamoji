import { join } from "node:path";

import satori from "satori";

async function font(id: string, weight: string, style: string = "normal") {
  const mod = import(join(import.meta.dir, `../fonts/${id}/font.ts`));
  const { load } = await mod;
  return load(weight, style);
}

export async function compile(id: string) {
  const root = join(import.meta.dir, "..");
  const src = join(root, "src");
  const svg = join(root, "svg");
  const path = join(src, `${id}.tsx`);
  const dist = join(svg, `${id}.svg`);
  const version = Date.now();

  const spec = import(`${path}?version=${version}`);
  const { emoji, options } = await spec;

  const context = {
    font,
  };

  const data = await satori(await emoji(context), await options(context));
  await Bun.write(dist, data);

  console.log(`recompiled: ${id} - ${version}`);
}
