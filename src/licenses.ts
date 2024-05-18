const licenses: Array<string> = require("spdx-license-ids");

export type License = (typeof licenses)[number] | "custom";
