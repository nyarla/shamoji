import { readFile } from "node:fs/promises";

import { FontOptions } from "satori";
import type { FontStyle } from "satori";

type MPlusVariants = 1 | 2;
type MPlusFontFaces = "c" | "p" | "m" | "mn";

type XMPlusWeights = "light" | "regular" | "medium" | "bold" | "heavy" | "bold";
type MPlusWeights = "thin" | XMPlusWeights;

const MPlusWeights = {
  thin: 100,
  light: 200,
  regular: 400,
  medium: 500,
  bold: 600,
  heavy: 700,
  bold: 900,
};

export async function RoundedXMPlus(
  fontVariant: MPlusVariants = 1,
  fontFace: MPlusFontFaces = "c",
  fontWeight: XMPlusWeights = "regular",
  fontStyle: FontStyle = "normal",
) {
  const fn = new URL(
    `./rounded-x-mplus-${fontVariant}${fontFace}-${fontWeight}.ttf`,
    import.meta.url,
  );

  const name = `Rounded-X M+ ${fontVariant}${fontFace}`;
  const lang = "ja-JP";
  const data = await readFile(fn);
  const weight = MPlusWeights[fontWeight];
  const style = fontStyle;

  return { name, lang, data, weight, style };
}

export async function RoundedLMPlus(
  fontVariant: MPlusVariants = 1,
  fontFace: MPlusFontFaces = "c",
  fontWeight: MPlusWeights = "regular",
  fontStyle: FontStyle = "normal",
) {
  const fn = new URL(
    `./rounded-l-mplus-${fontVariant}${fontFace}-${fontWeight}.ttf`,
    import.meta.url,
  );

  const name = `Rounded-L M+ ${fontVariant}${fontFace}`;
  const lang = "ja-JP";
  const data = await readFile(fn);
  const weight = MPlusWeights[fontWeight];
  const style = fontStyle;

  return { name, lang, data, weight, style };
}

export async function RoundedMPlus(
  fontVariant: MPlusVariants = 1,
  fontFace: MPlusFontFaces = "c",
  fontWeight: MPlusWeights = "regular",
  fontStyle: FontStyle = "normal",
) {
  const fn = new URL(
    `./rounded-mplus-${fontVariant}${fontFace}-${fontWeight}.ttf`,
    import.meta.url,
  );

  const name = `Rounded M+ ${fontVariant}${fontFace}`;
  const lang = "ja-JP";
  const data = await readFile(fn);
  const weight = MPlusWeights[fontWeight];
  const style = fontStyle;

  return { name, lang, data, weight, style };
}
