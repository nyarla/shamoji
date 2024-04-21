import type { ReactNode } from "react";

import { Font } from "satori";
import type { FontStyle, FontWeight, SatoriOptions } from "satori";

export type EmojiSummary = {
  id: string;
  lang: string;
  aliases: Array<string>;
  alt: string;
};

export type Emoji = {
  summary: EmojiSummary;
  options: SatoriOptions;
  node: ReactNode;
};

export type Emojifier = () => Promise<Emoji>;
