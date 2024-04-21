import { readFile } from "node:fs/promises";

import { FontOptions } from "satori";
import type { FontWeight, FontStyle } from "satori";

export default async function (): Promise<FontOptions> {
  const fn = new URL(
    "../../../node_modules/devicons/fonts/devicons.ttf",
    import.meta.url,
  );

  return {
    name: "devicons",
    data: await readFile(fn),
    weight: 400,
    style: "normal",
  };
}
