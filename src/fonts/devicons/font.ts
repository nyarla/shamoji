import type { Font } from "../../font";

const { file } = Bun;

const licenses = [
  {
    spdx: "MIT",
    copyrights: ["Theodore Vorillas"],
    licenseUrl: new URL("http://opensource.org/licenses/mit-license.html"),
  },
];

const meta = {
  name: "devicons",
  lang: "symbol",
  summary: `An iconic font made for developers`,
  homepageUrl: new URL("http://vorillaz.github.io/devicons/"),
  licenses,
} as const;

const fn = new URL(
  "../../../node_modules/devicons/fonts/devicons.ttf",
  import.meta.url,
);

const load = async () => file(fn).arrayBuffer();

export const Devicons: Font = { meta, load } as const;
