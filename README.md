# Dropzone Atlas (v0.2)

Dropzone Atlas is a searchable skydiving dropzone directory built with Next.js.

## What’s new in v0.2
- Google Maps block on each dropzone detail page
- Contact details block (website/email/phone)
- Modernized visual design system across home + detail pages
- Graceful fallback behavior when Google Maps key is missing or coordinates are invalid

## Tech
- Next.js (App Router)
- TypeScript
- Vitest (backend/data logic tests)

## Run locally
```bash
npm install
npm run seed
npm run dev
```

Open http://localhost:3000

## Environment variables
Create `.env.local` (optional):

```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

If this variable is not provided, the app still works. The map panel shows a clear fallback message and a direct Google Maps link.

## Scripts
- `npm run dev` — local dev server
- `npm run test` — run tests
- `npm run lint` — run ESLint
- `npm run build` — production build
- `npm run seed` — generate `data/dropzones.json`
