import { describe, test, expect } from "bun:test";

import { Devicons } from "../../src/fonts/devicons/font";
import { loadFont } from "../../src/font";

describe("devicons", () => {
  test("spec", () => {
    const { meta } = Devicons;

    expect(meta.name).toBe("devicons");
    expect(meta.lang).toBe("symbol");
    expect(meta.summary).toBe("An iconic font made for developers");
    expect(meta.homepageUrl).toEqual(
      new URL("http://vorillaz.github.io/devicons/"),
    );
    expect(meta.licenses[0].spdx).toBe("MIT");
    expect(meta.licenses[0].copyrights[0]).toBe("Theodore Vorillas");
    expect(meta.licenses[0].licenseUrl).toEqual(
      new URL("http://opensource.org/licenses/mit-license.html"),
    );
  });

  test("load", async () => {
    const { name, data } = await loadFont(Devicons);

    expect(name).toBe("devicons");
    expect(data instanceof ArrayBuffer).toBe(true);
  });
});
