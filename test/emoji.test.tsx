import { describe, test, expect } from "bun:test";

import type { EmojiLicense, EmojiSpec } from "../src/emoji";

describe("emoji", () => {
  test("EmojiLicense", () => {
    const license: EmojiLicense = {
      spdx: "MIT",
      copyrights: ["This is the test string"],
      licenseUrl: "https://example.com/mit.html",
    };

    expect(license.spdx).toEqual("MIT");
    expect(license.copyrights).toEqual(["This is the test string"]);
    expect(license.licenseUrl).toEqual("https://example.com/mit.html");
  });

  test("EmojiSpec", () => {
    const spec: EmojiSpec = {
      id: "test",
      lang: "en",
      readings: ["test", "テスト"],
      alt: "test",
      licenses: [{ spdx: "MIT", copyrights: ["test"] }] as const,
    };

    expect(spec.id).toEqual("test");
    expect(spec.lang).toEqual("en");
    expect(spec.readings).toEqual(["test", "テスト"]);
    expect(spec.alt).toEqual("test");
    expect(spec.licenses).toEqual([{ spdx: "MIT", copyrights: ["test"] }]);
  });
});
