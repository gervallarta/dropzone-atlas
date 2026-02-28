import { describe, expect, it } from "vitest";
import { getDropzoneBySlug, searchDropzones } from "@/lib/dropzones";

describe("dropzone data logic", () => {
  it("searches by name case-insensitively", () => {
    const results = searchDropzones({ query: "skydive" });

    expect(results.length).toBeGreaterThan(0);
    expect(results.every((dz) => dz.name.toLowerCase().includes("skydive"))).toBe(true);
  });

  it("filters by country with optional query", () => {
    const results = searchDropzones({ country: "US" });

    expect(results.length).toBeGreaterThan(0);
    expect(results.every((dz) => dz.country === "US")).toBe(true);
  });

  it("returns detail by slug", () => {
    const result = getDropzoneBySlug("skydive-arizona");

    expect(result).toBeDefined();
    expect(result?.name).toBe("Skydive Arizona");
  });

  it("returns null for unknown slug", () => {
    const result = getDropzoneBySlug("does-not-exist");

    expect(result).toBeNull();
  });
});
