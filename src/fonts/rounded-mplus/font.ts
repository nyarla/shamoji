import type { FontWeight } from "satori";
import type { FontSpec, FontConfig } from "../../font";
import type { License } from "../../license";

const { file } = Bun;

const weights: Record<number, string> = {
  100: "thin",
  200: "light",
  400: "regular",
  500: "medium",
  600: "bold",
  700: "heavy",
  900: "black",
};

const mkSpec = (name: string): FontSpec => ({
  name,
  lang: "ja-JP",
  summary:
    "'Rounded M+ FONTS' is a modification of 'M+ OUTLINE FONTS'in rounded edges",
  homepageUrl: "http://jikasei.me/font/rounded-mplus/",
  licenses: [
    {
      spdx: "custom",
      copyrights: [
        `
M+ FONT Copyright (C) 2002-2014 M+ FONTS PROJECT,
itouhiro (C) 2012-02-26
© 2014-2022 自家製フォント工房

These fonts are free software.
Unlimited permission is granted to use, copy, and distribute them, with
or without modification, either commercially or noncommercially.
THESE FONTS ARE PROVIDED "AS IS" WITHOUT WARRANTY.
`,
      ],
    },
  ] as License[],
});

const mkLoad = (
  fn: string,
): ((weight?: FontWeight) => Promise<ArrayBuffer>) => {
  return async (weight?: FontWeight): Promise<ArrayBuffer> => {
    if (weight === undefined) {
      const path = new URL(`./${fn}-regular.ttf`, import.meta.url);
      return file(path).arrayBuffer();
    }

    const font = file(
      new URL(`./${fn}-${weights[weight]}.ttf`, import.meta.url),
      import.meta.url,
    );
    if (!(await font.exists())) {
      throw new Error(`this weight is not supported: ${weight}`);
    }

    return font.arrayBuffer();
  };
};

export const RoundedLMPlus_1c: FontConfig = {
  spec: mkSpec("Rounded L M+ 1c"),
  load: mkLoad(`rounded-l-mplus-1c`),
} as const;

export const RoundedLMPlus_1m: FontConfig = {
  spec: mkSpec("Rounded L M+ 1m"),
  load: mkLoad(`rounded-l-mplus-1m`),
} as const;

export const RoundedLMPlus_1mn: FontConfig = {
  spec: mkSpec("Rounded L M+ 1mn"),
  load: mkLoad(`rounded-l-mplus-1mn`),
} as const;

export const RoundedLMPlus_1p: FontConfig = {
  spec: mkSpec("Rounded L M+ 1p"),
  load: mkLoad(`rounded-l-mplus-1p`),
} as const;

export const RoundedLMPlus_2c: FontConfig = {
  spec: mkSpec("Rounded L M+ 2c"),
  load: mkLoad(`rounded-l-mplus-2c`),
} as const;

export const RoundedLMPlus_2m: FontConfig = {
  spec: mkSpec("Rounded L M+ 2m"),
  load: mkLoad(`rounded-l-mplus-2m`),
} as const;

export const RoundedLMPlus_2p: FontConfig = {
  spec: mkSpec("Rounded L M+ 2p"),
  load: mkLoad(`rounded-l-mplus-2p`),
} as const;

export const RoundedMPlus_1c: FontConfig = {
  spec: mkSpec("Rounded M+ 1c"),
  load: mkLoad(`rounded-mplus-1c`),
} as const;

export const RoundedMPlus_1m: FontConfig = {
  spec: mkSpec("Rounded M+ 1m"),
  load: mkLoad(`rounded-mplus-1m`),
} as const;

export const RoundedMPlus_1mn: FontConfig = {
  spec: mkSpec("Rounded M+ 1mn"),
  load: mkLoad(`rounded-mplus-1mn`),
} as const;

export const RoundedMPlus_1p: FontConfig = {
  spec: mkSpec("Rounded M+ 1p"),
  load: mkLoad(`rounded-mplus-1p`),
} as const;

export const RoundedMPlus_2c: FontConfig = {
  spec: mkSpec("Rounded M+ 2c"),
  load: mkLoad(`rounded-mplus-2c`),
} as const;

export const RoundedMPlus_2m: FontConfig = {
  spec: mkSpec("Rounded M+ 2m"),
  load: mkLoad(`rounded-mplus-2m`),
} as const;

export const RoundedMPlus_2p: FontConfig = {
  spec: mkSpec("Rounded M+ 2p"),
  load: mkLoad(`rounded-mplus-2p`),
} as const;

export const RoundedXMPlus_1c: FontConfig = {
  spec: mkSpec("Rounded X M+ 1c"),
  load: mkLoad(`rounded-x-mplus-1c`),
} as const;

export const RoundedXMPlus_1m: FontConfig = {
  spec: mkSpec("Rounded X M+ 1m"),
  load: mkLoad(`rounded-x-mplus-1m`),
} as const;

export const RoundedXMPlus_1mn: FontConfig = {
  spec: mkSpec("Rounded X M+ 1mn"),
  load: mkLoad(`rounded-x-mplus-1mn`),
} as const;

export const RoundedXMPlus_1p: FontConfig = {
  spec: mkSpec("Rounded X M+ 1p"),
  load: mkLoad(`rounded-x-mplus-1p`),
} as const;

export const RoundedXMPlus_2c: FontConfig = {
  spec: mkSpec("Rounded X M+ 2c"),
  load: mkLoad(`rounded-x-mplus-2c`),
} as const;

export const RoundedXMPlus_2m: FontConfig = {
  spec: mkSpec("Rounded X M+ 2m"),
  load: mkLoad(`rounded-x-mplus-2m`),
} as const;

export const RoundedXMPlus_2p: FontConfig = {
  spec: mkSpec("Rounded X M+ 2p"),
  load: mkLoad(`rounded-x-mplus-2p`),
} as const;
