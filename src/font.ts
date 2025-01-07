import type { Font, FontWeight, FontStyle } from "satori";
import type { License } from "./license";

export type FontSpec = {
  name: string;
  summary?: string;
  homepageUrl?: string;
  lang?: string;
  licenses: License[];
};

export type FontLoader = (
  weight?: FontWeight,
  style?: FontStyle,
) => Promise<ArrayBuffer>;

export type FontConfig = {
  spec: FontSpec;
  load: FontLoader;
};

export async function loadFont(
  config: FontConfig,
  weight?: FontWeight,
  style?: FontStyle,
): Promise<Font> {
  const { name, lang } = config.spec;
  const { load } = config;
  const data = await load(weight, style);

  return { name, lang, data, weight } as const;
}
