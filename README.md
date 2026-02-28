# Dropzone Atlas (v0.1)

Slim MVP that proves the core flow:
- Search dropzones by **name** and **country**
- Open a simple detail page for each dropzone

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

## Scripts
- `npm run dev` — local dev server
- `npm run test` — run tests
- `npm run lint` — run ESLint
- `npm run build` — production build
- `npm run seed` — generate `data/dropzones.json`

## Deployment readiness
`vercel.json` is included so the app is ready to connect to Vercel later.
(No live Vercel wiring is configured in v0.1.)
