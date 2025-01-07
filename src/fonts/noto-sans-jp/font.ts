import type { Font, FontWeight } from "../../font";
import type { License } from "../../license";

const { file } = Bun;

const weights: Record<FontWeight, string> = {
  100: "Thin",
  200: "ExtraLight",
  300: "Light",
  400: "Regular",
  500: "Medium",
  600: "SemiBold",
  700: "Bold",
  800: "ExtraBold",
  900: "Black",
} as const;

const name = "Noto Sans JP";
const lang = "ja-JP";

const summary =
  "Noto Sans JP is an unmodulated (“sans serif”) design for the Japanese language and other languages used in Japan";

const homepageUrl = new URL(
  "https://fonts.google.com/noto/specimen/Noto+Sans+JP",
);
const licenses = [
  {
    spdx: "OFL-1.1",
    copyrights: [
      "(c) 2014-2021 Adobe (http://www.adobe.com/), with Reserved Font Name 'Source'.",
    ],
    licenseUrl: new URL(
      "https://github.com/google/fonts/blob/main/ofl/notosansjp/OFL.txt",
    ),
  },
];

const meta = {
  name,
  lang,
  summary,
  homepageUrl,
  licenses,
} as const;

const fn = (weight?: FontWeight): URL => {
  if (!weight) {
    return new URL("./font-Regular.ttf", import.meta.url);
  }

  if (!(weight in weights)) {
    throw new Error(
      `This font does not support to this weight: Noto Sans JP: ${weight}`,
    );
  }

  return new URL(`./font-${weights[weight]}.ttf`, import.meta.url);
};

const load = (weight?: FontWeight): Promise<ArrayBuffer> =>
  file(fn(weight)).arrayBuffer();

export const NotoSansJP: Font = { meta, load } as const;
