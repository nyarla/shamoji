import { describe, test, expect } from "bun:test";

import { RoundedMPlus_1c } from "../src/fonts/rounded-mplus/font";
import { renderEmoji, type Emoji } from "../src/emoji";

describe("emoji", () => {
  test("renderEmoji", async () => {
    const license = {
      spdx: "custom",
      copyrights: ["test"],
    };

    const meta = {
      id: "test",
      lang: "en",
      readings: ["test"],
      alt: "test",
      licenses: [license],
    };

    const data = {
      shape: <div>test</div>,
      fonts: [{ font: RoundedMPlus_1c }],
      options: {
        width: 32,
        height: 32,
      },
    };

    const emoji: Emoji = {
      meta,
      data,
    };

    const svg = await renderEmoji(emoji);

    expect(svg).toMatch(/<svg/);
  });
});
