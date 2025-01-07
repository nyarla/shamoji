import { describe, test, expect } from "bun:test";

import { Devicons } from "../../src/fonts/devicons/font";
import { loadFont } from "../../src/font";

describe("devicons", () => {
  test("spec", () => {
    const { spec } = Devicons;

    expect(spec.name).toBe("devicons");
    expect(spec.lang).toBe("symbol");
    expect(spec.summary).toBe("An iconic font made for developers");
    expect(spec.homepageUrl).toBe("http://vorillaz.github.io/devicons/");
    expect(spec.licenses[0].spdx).toBe("MIT");
    expect(spec.licenses[0].copyrights[0]).toBe("Theodore Vorillas");
    expect(spec.licenses[0].licenseUrl).toEqual(
      new URL("http://opensource.org/licenses/mit-license.html"),
    );
  });

  test("load", async () => {
    const { name, data } = await loadFont(Devicons);

    expect(name).toBe("devicons");
    expect(data instanceof ArrayBuffer).toBe(true);
  });
});
