import type { ReactNode } from "react";
import type { SatoriOptions } from "satori";

import type { FontConfig } from "./font";
import type { License } from "./licenses";

import satori from "satori";
import { loadFont } from "./font";

export type EmojiLicense = {
  spdx: License;
  copyrights: string[];
  licenseUrl?: string;
};

export type EmojiSpec = {
  id: string;
  lang: string;
  readings: string[];
  alt: string;
  licenses: EmojiLicense[];
};

export type Emoji = {
  spec: EmojiSpec;
  node: ReactNode;
  fonts: FontConfig[];
  options: EmojiOptions;
};

export type EmojiOptions = {
  width: number;
  height: number;
  [key: string]: any;
};

export const renderEmoji = async (emoji: Emoji): Promise<string> => {
  const { node, fonts, options } = emoji;

  const satoriOptions = Object.assign(
    { fonts: await Promise.all(fonts.map((f) => loadFont(f))) },
    options,
  ) as SatoriOptions;

  return satori(node, satoriOptions);
};
