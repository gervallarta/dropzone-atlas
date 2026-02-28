import { describe, expect, it } from "vitest";
import {
  buildDropzoneMapModel,
  getDropzoneBySlug,
  searchDropzones,
} from "@/lib/dropzones";

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

  it("builds an embeddable map url when key + valid coordinates are present", () => {
    const result = buildDropzoneMapModel(
      {
        name: "Test DZ",
        latitude: 32.9917,
        longitude: -111.416,
      },
      "test-key"
    );

    expect(result.status).toBe("ready");
    expect(result.embedUrl).toContain("google.com/maps/embed/v1/place");
    expect(result.embedUrl).toContain("key=test-key");
    expect(result.embedUrl).toContain("q=32.9917%2C-111.416");
  });

  it("returns no-key status when api key is missing", () => {
    const result = buildDropzoneMapModel({
      name: "Test DZ",
      latitude: 32.9917,
      longitude: -111.416,
    });

    expect(result.status).toBe("missing-key");
    expect(result.embedUrl).toBeNull();
  });

  it("returns invalid-coordinates status for missing or invalid coordinates", () => {
    expect(
      buildDropzoneMapModel({
        name: "Test DZ",
      }).status
    ).toBe("invalid-coordinates");

    expect(
      buildDropzoneMapModel({
        name: "Test DZ",
        latitude: 120,
        longitude: -50,
      }).status
    ).toBe("invalid-coordinates");
  });
});
