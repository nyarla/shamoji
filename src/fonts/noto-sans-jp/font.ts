import { readFile } from "node:fs/promises";

import { FontOptions } from "satori";
import type { FontWeight, FontStyle } from "satori";

const Weights = {
  Thin: 100,
  ExtraLight: 200,
  Light: 300,
  Regular: 400,
  Medium: 500,
  Semibold: 600,
  Bold: 700,
  ExtraBold: 800,
  Black: 900,
};

type Weight = keyof typeof Weights;

export async function NotoSansJP(
  weight: Weight = "Regular",
  style: FontStyle = "normal",
): Promise<FontOptions> {
  const fn = new URL(`./font-${weight}.ttf`, import.meta.url);

  return {
    name: "Noto Sans JP",
    lang: "ja-JP",
    data: await readFile(fn),
    weight: Weights[weight],
    style,
  };
}
