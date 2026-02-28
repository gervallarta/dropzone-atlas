import seededDropzones from "@/data/dropzones.json";
import type { Dropzone } from "@/lib/dropzones.seed";

type SearchInput = {
  query?: string;
  country?: string;
};

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
