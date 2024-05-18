import { expect, test } from "bun:test";
import type { License } from "../src/licenses";

test("license", () => {
  const mit: License = "MIT";
  expect(mit).toBe("MIT");

  const custom: License = "custom";
  expect(custom).toBe("custom");
});
