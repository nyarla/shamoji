import { describe, test, expect } from "bun:test";

import { RoundedMPlus_1c } from "../src/fonts/rounded-mplus/font";
import { renderEmoji, type Emoji } from "../src/emoji";

describe("emoji", () => {
  test("renderEmoji", async () => {
    const license = {
      spdx: "MIT",
      copyrights: ["test"],
    };

    const spec = {
      id: "test",
      lang: "en",
      readings: ["test"],
      alt: "test",
      licenses: [license],
    };

    const emoji: Emoji = {
      spec,
      node: <div>test</div>,
      fonts: [RoundedMPlus_1c],
      options: {
        width: 32,
        height: 32,
      },
    };

    const svg = await renderEmoji(emoji);

    expect(svg).toMatch(/<svg/);
  });
});
