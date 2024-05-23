import { describe, test, expect } from "bun:test";

import { compile } from "../src/svg";
import type { Emojifier } from "../src/types";
import { loadFont } from "../src/font";
import { Devicons } from "../src/fonts/devicons/font";

describe("compile", () => {
  test("emojify", async () => {
    const emoji: Emojifier = async () => {
      const summary = {
        id: "test",
        lang: "symbol",
        aliases: ["test"],
        alt: "test",
      };

      const options = {
        width: 32,
        height: 32,
        fonts: [await loadFont(Devicons)],
      };

      const node = <div>&#xe67e;</div>;

      return {
        summary,
        options,
        node,
      };
    };

    const svg = await compile(emoji);

    expect(svg).toEqual(expect.stringContaining("</svg>"));
  });
});
