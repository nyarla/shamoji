import { describe, test, expect } from "bun:test";

import type { EmojiMeta } from "../src/emoji";

describe("emoji", () => {
  test("EmojiData", () => {
    const spec: EmojiMeta = {
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
