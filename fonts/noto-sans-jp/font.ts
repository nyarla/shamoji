import { join } from "node:path";

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

let loaded: Record<Weight, ArrayBuffer> = {};

export async function load(weight: Weight, style: string) {
  let data = {
    name: "Noto Sans JP",
    weight: Weights[weight],
    style,
  };

  if (!(weight in loaded)) {
    loaded[weight] = await (
      await Bun.file(join(import.meta.dir, `font-${weight}.ttf`))
    ).arrayBuffer();
  }

  data.data = loaded[weight];

  return data;
}
