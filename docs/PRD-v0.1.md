# PRD — Dropzone Atlas v0.1 (Slim)

## Objective
Ship a very small first version that proves core value:
- Search dropzones by name/country
- View a simple dropzone detail page

Vercel connection is deferred; we continue local + GitHub progress now.

## Success Criteria
- Search works on a seeded dataset.
- Detail page loads for each dropzone.
- Tests pass for backend/data logic.
- Code is committed cleanly and ready to deploy once Vercel is connected.

## In Scope (v0.1)
- Next.js + TypeScript app
- Minimal data model for dropzones
- Seed script with a small starter dataset
- Search/list UI (name + country filter)
- Dropzone detail page

## Out of Scope (for now)
- Suggest-edit form
- Analytics/Sentry
- SEO extras beyond basic defaults
- Vercel deploy wiring (to be done after you connect Vercel)

## Minimal Data Model
`dropzones`
- id
- slug
- name
- country
- city
- website (optional)
- createdAt / updatedAt

## Technical Rule (Mandatory)
For any backend/data logic work, use TDD-first:

Write failing tests first that define the expected behavior, then implement the code to make them pass.
Run the test suite before committing. All tests must pass.

## Ralph Checklist
- [ ] Build minimal app foundation + data model + seed + search/detail flow (TDD-first for backend/data logic).
- [ ] Run tests/lint/build and commit a clean v0.1 baseline to GitHub.
- [ ] Prepare deployment-ready config/files so Vercel can be connected later without refactor.
- [ ] Publish v0.1 release notes.

## Approval Gate
After approval, execution starts with coding-agent loop using this slim PRD.