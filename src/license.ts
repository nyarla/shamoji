const licenses: Array<string> = require("spdx-license-ids");

export type SPDX = (typeof licenses)[number] | "custom";

export type License = {
  spdx: SPDX;
  copyrights: string[];
  licenseUrl?: URL;
};
