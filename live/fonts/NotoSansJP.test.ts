import type { FontWeight } from "satori";

import { describe, test, expect } from "bun:test";
import { NotoSansJP as config } from "../../src/fonts/noto-sans-jp/font.ts";
import { loadFont } from "../../src/font";

describe("NotoSansJP", () => {
  test("loadFont", async () => {
    const font = await loadFont(config);
    expect(font.name).toBe("Noto Sans JP");
    expect(font.data instanceof ArrayBuffer).toBe(true);

    for (const weight of [
      100, 200, 300, 400, 500, 600, 700, 800, 900,
    ] as Array<FontWeight>) {
      const data = await loadFont(config, weight);
      expect(data.data instanceof ArrayBuffer).toBe(true);
    }
  });
});
