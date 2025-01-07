import type { ReactNode } from "react";
import type { Font as SatoriFont, SatoriOptions } from "satori";

import type { Font, FontWeight, FontStyle } from "./font";
import type { License } from "./license";

import satori from "satori";
import { loadFont } from "./font";

export type EmojiSVG = string;

export type EmojiMeta = {
  id: string;
  lang: string;
  readings: string[];
  alt: string;
  licenses: License[];
};

export type EmojiOptions = {
  width: number;
  height: number;
  [key: string]: any;
};

export type EmojiFont = {
  font: Font;
  weight?: FontWeight;
  style?: FontStyle;
};

export type EmojiData = {
  shape: ReactNode;
  fonts: EmojiFont[];
  options: EmojiOptions;
};

export type Emoji = {
  meta: EmojiMeta;
  data: EmojiData;
};

export const loadEmojiFont = async (font: EmojiFont): Promise<SatoriFont> =>
  loadFont(font.font, font.weight, font.style);

export const renderEmoji = async (emoji: Emoji): Promise<EmojiSVG> => {
  const { shape, fonts, options } = emoji.data;

  const satoriOptions: SatoriOptions = {
    fonts: await Promise.all(fonts.map((f) => loadEmojiFont(f))),
    ...options,
  };

  return satori(shape, satoriOptions);
};
