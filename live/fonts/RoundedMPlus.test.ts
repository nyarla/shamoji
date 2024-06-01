import { describe, test, expect } from "bun:test";
import * as fonts from "../../src/fonts/rounded-mplus/font";

const specs = [
  { name: "Rounded L M+ 1c", font: fonts.RoundedLMPlus_1c },
  { name: "Rounded L M+ 1m", font: fonts.RoundedLMPlus_1m },
  { name: "Rounded L M+ 1mn", font: fonts.RoundedLMPlus_1mn },
  { name: "Rounded L M+ 1p", font: fonts.RoundedLMPlus_1p },
  { name: "Rounded L M+ 2c", font: fonts.RoundedLMPlus_2c },
  { name: "Rounded L M+ 2m", font: fonts.RoundedLMPlus_2m },
  { name: "Rounded L M+ 2p", font: fonts.RoundedLMPlus_2p },

  { name: "Rounded M+ 1c", font: fonts.RoundedMPlus_1c },
  { name: "Rounded M+ 1m", font: fonts.RoundedMPlus_1m },
  { name: "Rounded M+ 1mn", font: fonts.RoundedMPlus_1mn },
  { name: "Rounded M+ 1p", font: fonts.RoundedMPlus_1p },
  { name: "Rounded M+ 2c", font: fonts.RoundedMPlus_2c },
  { name: "Rounded M+ 2m", font: fonts.RoundedMPlus_2m },
  { name: "Rounded M+ 2p", font: fonts.RoundedMPlus_2p },

  { name: "Rounded X M+ 1c", font: fonts.RoundedXMPlus_1c },
  { name: "Rounded X M+ 1m", font: fonts.RoundedXMPlus_1m },
  { name: "Rounded X M+ 1mn", font: fonts.RoundedXMPlus_1mn },
  { name: "Rounded X M+ 1p", font: fonts.RoundedXMPlus_1p },
  { name: "Rounded X M+ 2c", font: fonts.RoundedXMPlus_2c },
  { name: "Rounded X M+ 2m", font: fonts.RoundedXMPlus_2m },
  { name: "Rounded X M+ 2p", font: fonts.RoundedXMPlus_2p },
];

for (const spec of specs) {
  describe(spec.name, () => {
    test("load", async () => {
      for (const weight of [
        100, 200, 300, 400, 500, 600, 700, 800, 900,
      ] as const) {
        if (weight === 300 || weight === 800) {
          expect(spec.font.load(weight)).rejects.toThrow();
          continue;
        }

        if (weight === 100 && spec.name.match(/^Rounded X M\+/)) {
          expect(spec.font.load(weight)).rejects.toThrow();
          continue;
        }

        if (
          (weight === 700 || weight === 900) &&
          spec.name.match(/M\+ \dmn?$/)
        ) {
          expect(spec.font.load(weight)).rejects.toThrow();
          continue;
        }

        const data = await spec.font.load(weight);
        expect(data).toBeInstanceOf(ArrayBuffer);
      }
    });
  });
}
