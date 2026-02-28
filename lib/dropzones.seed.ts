export type Dropzone = {
  id: string;
  slug: string;
  name: string;
  country: string;
  city: string;
  website?: string;
  email?: string;
  phone?: string;
  latitude?: number;
  longitude?: number;
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
    email: "info@skydiveaz.com",
    phone: "+1-520-466-3753",
    latitude: 32.8153,
    longitude: -111.6332,
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
    email: "info@skydiveempuriabrava.com",
    phone: "+34-972-450-111",
    latitude: 42.246,
    longitude: 3.1028,
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
    email: "info@skydiveteuge.com",
    phone: "+31-55-323-1622",
    latitude: 52.2449,
    longitude: 6.0462,
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
    email: "jump@skydivecsc.com",
    phone: "+1-815-561-3663",
    latitude: 41.8936,
    longitude: -89.0768,
    createdAt: now,
    updatedAt: now,
  },
];
