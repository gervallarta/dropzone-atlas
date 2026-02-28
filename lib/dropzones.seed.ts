export type Dropzone = {
  id: string;
  slug: string;
  name: string;
  country: string;
  city: string;
  website?: string;
  createdAt: string;
  updatedAt: string;
};

const now = "2026-02-28T00:00:00.000Z";

export const starterDropzones: Dropzone[] = [
  {
    id: "dz_001",
    slug: "skydive-arizona",
    name: "Skydive Arizona",
    country: "US",
    city: "Eloy",
    website: "https://www.skydiveaz.com",
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "dz_002",
    slug: "skydive-empuriabrava",
    name: "Skydive Empuriabrava",
    country: "ES",
    city: "Empuriabrava",
    website: "https://www.skydiveempuriabrava.com",
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "dz_003",
    slug: "skydive-teuge",
    name: "Skydive Teuge",
    country: "NL",
    city: "Teuge",
    website: "https://www.skydiveteuge.com",
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "dz_004",
    slug: "chicagoland-skydiving-center",
    name: "Chicagoland Skydiving Center",
    country: "US",
    city: "Rochelle",
    website: "https://www.skydivecsc.com",
    createdAt: now,
    updatedAt: now,
  },
];
