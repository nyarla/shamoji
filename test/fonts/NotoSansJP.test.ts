import { describe, test, expect } from "bun:test";
import { NotoSansJP as config } from "../../src/fonts/noto-sans-jp/font";

describe("NotoSansJP", () => {
  test("spec", () => {
    const { name, lang, summary, homepageUrl, licenses } = config.spec;

    expect(name).toBe("Noto Sans JP");
    expect(lang).toBe("ja-JP");
    expect(summary).toBeString();
    expect(homepageUrl).toBeString();
    expect(licenses[0].spdx).toBe("OFL-1.1");
    expect(licenses[0].copyrights[0]).toBeString();
    expect(licenses[0].licenseUrl).toBeString();
  });
});
