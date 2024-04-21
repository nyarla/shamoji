import satori from "satori";

import type { Emojifier } from "./types";

export async function compile(render: Emojifier): Promise<string> {
  const emoji = await render();
  const svg = await satori(emoji.node, emoji.options);

  return svg;
}
