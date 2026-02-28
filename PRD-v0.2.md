# PRD — Dropzone Atlas v0.2

## Objective
Upgrade v0.1 with a stronger user experience and richer dropzone pages, then ship to production.

## Scope (must-have)
1) Google Maps view in each dropzone page
2) Contact details in each dropzone page
3) Cohesive, modern visual redesign across the website
4) Test, commit, and deploy via GitHub → Vercel

## Success Criteria
- Every dropzone detail page shows an embedded/interactive map centered on that dropzone.
- Every dropzone detail page shows contact section with available fields (website, email, phone).
- Website has a consistent premium UI system (layout, typography, spacing, components, colors).
- Tests pass, build passes, changes are committed and deployed on Vercel.

## In Scope
- Detail page map component using Google Maps.
- Fallback behavior if map key is missing or coordinates are invalid.
- Contact details component on detail pages.
- Global design refresh (home + results + detail pages + shared components).
- Basic responsiveness for mobile/tablet/desktop.
- Deployment-ready env var docs for Google Maps key.

## Out of Scope
- User accounts/auth.
- Reviews/ratings.
- Booking/payments.
- Multi-language support.
- Full CMS/admin panel.

## Functional Requirements

### A) Google Maps on dropzone detail page
- Show map for each dropzone using lat/lng.
- Show marker and dropzone name.
- If lat/lng missing: show graceful empty-state message.
- If API key missing: show graceful fallback message and keep page functional.

### B) Contact details block
- Render available contact fields:
  - Website (clickable)
  - Email (mailto)
  - Phone (tel)
- Hide fields that are not present.
- Keep clear hierarchy and accessible labels.

### C) Design refresh
- Introduce a small design system:
  - color tokens
  - typography scale
  - spacing scale
  - reusable card/button/input styles
- Improve visual hierarchy and readability.
- Keep performance reasonable (no heavy UI libraries unless needed).

## Non-Functional Requirements
- Accessibility baseline (semantic headings, labels, contrast).
- Mobile-first responsive behavior.
- Production build must pass.
- No runtime crashes when env keys are absent.

## Tech Notes
- Use Google Maps JavaScript API (or lightweight embed fallback if needed).
- Add env var handling for `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`.
- Document setup in README.

## Testing Strategy (Mandatory)
For backend/data logic, use TDD-first:

Write failing tests first that define the expected behavior, then implement the code to make them pass.
Run the test suite before committing. All tests must pass.

Minimum checks before final push:
- `npm test`
- `npm run lint`
- `npm run build`

## Ralph Checklist
- [ ] Implement Google Maps + contact details on dropzone pages with safe fallback states (TDD-first where backend/data logic applies).
- [ ] Apply full-site design refresh with consistent reusable UI patterns, then run test/lint/build and fix all issues.
- [ ] Commit all changes with clear messages and push to GitHub; verify Vercel deployment succeeds.
- [ ] Publish v0.2 release notes.

## Deployment
- Trigger deployment via push to GitHub default branch.
- Confirm Vercel build is green and app is accessible.
- If env var missing, document exact value needed in Vercel Project Settings.

## Approval Gate
After approval, implementation starts in a background coding sub-agent with this PRD.