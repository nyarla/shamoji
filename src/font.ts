import type { Font as FontConfig, FontWeight, FontStyle } from "satori";
import type { License } from "./license";

export type FontFamily = string;
export type { FontWeight, FontStyle };

export type FontMeta = {
  name: FontFamily;
  summary?: string;
  homepageUrl?: URL;
  lang: string;
  licenses: License[];
};

export type FontLoader = (
  weight?: FontWeight,
  style?: FontStyle,
) => Promise<ArrayBuffer>;

export type Font = {
  meta: FontMeta;
  load: FontLoader;
};

export async function loadFont(
  font: Font,
  weight?: FontWeight,
  style?: FontStyle,
): Promise<FontConfig> {
  const { name, lang } = font.meta;
  const data = await font.load(weight, style);

  return { name, lang, data, weight } as const;
}
