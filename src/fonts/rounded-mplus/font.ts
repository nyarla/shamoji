import type {
  Font,
  FontFamily,
  FontWeight,
  FontStyle,
  FontLoader,
} from "../../font";

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

const lang = "ja-JP";
const summary =
  "'Rounded M+ FONTS' is a modification of 'M+ OUTLINE FONTS'in rounded edges";
const spdx = "custom";
const copyrights = [
  `
M+ FONT Copyright (C) 2002-2014 M+ FONTS PROJECT,
itouhiro (C) 2012-02-26
© 2014-2022 自家製フォント工房

These fonts are free software.
Unlimited permission is granted to use, copy, and distribute them, with
or without modification, either commercially or noncommercially.
THESE FONTS ARE PROVIDED "AS IS" WITHOUT WARRANTY.
`,
];

const licenses = [
  {
    spdx,
    copyrights,
  },
];

const homepageUrl = new URL("http://jikasei.me/font/rounded-mplus/");

const font = (name: FontFamily, basename: string): Font => {
  const meta = {
    name,
    lang,
    summary,
    licenses,
    homepageUrl,
  };

  const load: FontLoader = async (
    weight?: FontWeight,
  ): Promise<ArrayBuffer> => {
    const fn = new URL(
      !weight
        ? `./${basename}-regular.ttf`
        : `./${basename}-${weights[weight]}.ttf`,
      import.meta.url,
    );

    const f = file(fn);

    if (!(await f.exists())) {
      throw new Error(
        `This font does not support to this weight: ${name}: ${weight}`,
      );
    }

    return f.arrayBuffer();
  };

  return { meta, load } as const;
};

export const RoundedLMPlus_1c = font("Rounded L M+ 1c", "rounded-l-mplus-1c");
export const RoundedLMPlus_1m = font("Rounded L M+ 1m", "rounded-l-mplus-1m");
export const RoundedLMPlus_1mn = font(
  "Rounded L M+ 1mn",
  "rounded-l-mplus-1mn",
);
export const RoundedLMPlus_1p = font("Rounded L M+ 1p", "rounded-l-mplus-1p");
export const RoundedLMPlus_2c = font("Rounded L M+ 2c", "rounded-l-mplus-2c");
export const RoundedLMPlus_2m = font("Rounded L M+ 2m", "rounded-l-mplus-2m");
export const RoundedLMPlus_2p = font("Rounded L M+ 2p", "rounded-l-mplus-2p");

export const RoundedMPlus_1c = font("Rounded M+ 1c", "rounded-mplus-1c");
export const RoundedMPlus_1m = font("Rounded M+ 1m", "rounded-mplus-1m");
export const RoundedMPlus_1mn = font("Rounded M+ 1mn", "rounded-mplus-1mn");
export const RoundedMPlus_1p = font("Rounded M+ 1p", "rounded-mplus-1p");
export const RoundedMPlus_2c = font("Rounded M+ 2c", "rounded-mplus-2c");
export const RoundedMPlus_2m = font("Rounded M+ 2m", "rounded-mplus-2m");
export const RoundedMPlus_2p = font("Rounded M+ 2p", "rounded-mplus-2p");

export const RoundedXMPlus_1c = font("Rounded X M+ 1c", "rounded-x-mplus-1c");
export const RoundedXMPlus_1m = font("Rounded X M+ 1m", "rounded-x-mplus-1m");
export const RoundedXMPlus_1mn = font(
  "Rounded X M+ 1mn",
  "rounded-x-mplus-1mn",
);
export const RoundedXMPlus_1p = font("Rounded X M+ 1p", "rounded-x-mplus-1p");
export const RoundedXMPlus_2c = font("Rounded X M+ 2c", "rounded-x-mplus-2c");
export const RoundedXMPlus_2m = font("Rounded X M+ 2m", "rounded-x-mplus-2m");
export const RoundedXMPlus_2p = font("Rounded X M+ 2p", "rounded-x-mplus-2p");
