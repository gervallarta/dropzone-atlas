import seededDropzones from "@/data/dropzones.json";
import type { Dropzone } from "@/lib/dropzones.seed";

type SearchInput = {
  query?: string;
  country?: string;
};

export type MapStatus = "ready" | "missing-key" | "invalid-coordinates";

export type DropzoneMapModel = {
  status: MapStatus;
  embedUrl: string | null;
};

type MapInput = Pick<Dropzone, "name" | "latitude" | "longitude">;

const dropzones = seededDropzones as Dropzone[];

export function searchDropzones({ query, country }: SearchInput): Dropzone[] {
  const normalizedQuery = query?.trim().toLowerCase();
  const normalizedCountry = country?.trim().toUpperCase();

  return dropzones.filter((dropzone) => {
    const matchesQuery = !normalizedQuery
      ? true
      : dropzone.name.toLowerCase().includes(normalizedQuery);

    const matchesCountry = !normalizedCountry
      ? true
      : dropzone.country.toUpperCase() === normalizedCountry;

    return matchesQuery && matchesCountry;
  });
}

export function getDropzoneBySlug(slug: string): Dropzone | null {
  return dropzones.find((dropzone) => dropzone.slug === slug) ?? null;
}

function hasValidCoordinates(latitude?: number, longitude?: number): boolean {
  if (typeof latitude !== "number" || typeof longitude !== "number") {
    return false;
  }

  return latitude >= -90 && latitude <= 90 && longitude >= -180 && longitude <= 180;
}

export function buildDropzoneMapModel(dropzone: MapInput, apiKey?: string): DropzoneMapModel {
  if (!hasValidCoordinates(dropzone.latitude, dropzone.longitude)) {
    return { status: "invalid-coordinates", embedUrl: null };
  }

  if (!apiKey?.trim()) {
    return { status: "missing-key", embedUrl: null };
  }

  const query = `${dropzone.latitude},${dropzone.longitude}`;
  const embedUrl = `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(apiKey)}&q=${encodeURIComponent(query)}`;

  return {
    status: "ready",
    embedUrl,
  };
}
