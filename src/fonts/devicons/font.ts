import type { FontConfig } from "../../font";
import type { License } from "../../license";

const { file } = Bun;

const spec = {
  name: "devicons",
  lang: "symbol",
  summary: `An iconic font made for developers`,
  homepageUrl: "http://vorillaz.github.io/devicons/",
  licenses: [
    {
      spdx: "MIT",
      copyrights: ["Theodore Vorillas"],
      licenseUrl: new URL("http://opensource.org/licenses/mit-license.html"),
    },
  ] as License[],
} as const;

const load = async () => {
  const fn = new URL(
    "../../../node_modules/devicons/fonts/devicons.ttf",
    import.meta.url,
  );

  return file(fn).arrayBuffer();
};

export const Devicons: FontConfig = { spec, load } as const;
