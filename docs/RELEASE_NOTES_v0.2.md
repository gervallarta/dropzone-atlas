# Release Notes — v0.2

## Highlights
- Added Google Maps section to each dropzone detail page.
- Added contact details section with conditional rendering for website, email, and phone.
- Introduced a cohesive modern UI refresh with updated spacing, typography, cards, and responsive layouts.
- Added robust fallback handling when:
  - `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` is missing
  - dropzone coordinates are missing or invalid

## Technical changes
- Expanded dropzone data model with `email`, `phone`, `latitude`, and `longitude`.
- Added map model logic (`buildDropzoneMapModel`) to centralize map readiness checks.
- Updated seeded dataset and regenerated `data/dropzones.json`.
- Updated README with map key setup instructions and fallback behavior.

## Validation
- `npm test` ✅
- `npm run lint` ✅
- `npm run build` ✅
