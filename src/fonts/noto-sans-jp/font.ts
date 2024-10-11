import type { FontWeight } from "satori";
import type { FontConfig, FontLicense } from "../../font";

const { file } = Bun;

const weights = {
  100: "Thin",
  200: "ExtraLight",
  300: "Light",
  400: "Regular",
  500: "Medium",
  600: "SemiBold",
  700: "Bold",
  800: "ExtraBold",
  900: "Black",
};

const spec = {
  name: "Noto Sans JP",
  lang: "ja-JP",
  summary:
    "Noto Sans JP is an unmodulated (“sans serif”) design for the Japanese language and other languages used in Japan",
  homepageUrl: "https://fonts.google.com/noto/specimen/Noto+Sans+JP",
  licenses: [
    {
      spdx: "OFL-1.1",
      copyrights: [
        `(c) 2014-2021 Adobe (http://www.adobe.com/), with Reserved Font Name 'Source'.`,
      ],
      licenseUrl:
        "https://github.com/google/fonts/blob/main/ofl/notosansjp/OFL.txt",
    },
  ] as FontLicense[],
};

const load = (weight?: FontWeight) => {
  const fn = new URL(
    weight ? `./font-${weights[weight]}.ttf` : `./font-Regular.ttf`,
    import.meta.url,
  );

  return file(fn).arrayBuffer();
};

export const NotoSansJP: FontConfig = { spec, load } as const;
