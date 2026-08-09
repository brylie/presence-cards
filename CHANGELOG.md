# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
This project does not yet follow a formal version-numbering scheme —
entries are grouped under `Unreleased` until a first tagged release.

## [Unreleased]

### Added

- MVP release: 15 experience decks across Feelings, In-between times, What
  we need, and Connection & aliveness, each with original practice cards
  and documented public-domain quotations.
- "Explore further" optional resource list per deck.
- Accessibility: screen-change focus management and `aria-live`
  announcements, a proper heading on the Presence (card) screen, WCAG
  2.2 AA-targeted color contrast, ~44px touch targets, and
  `prefers-reduced-motion`/`prefers-color-scheme: dark` support.
- Design system: a teal/paper color palette and system-font type stack,
  documented in `PRD.md`.
- `PRD.md` as the standing product/UX reference, including a record of
  mechanics that were tried and removed.
- ESLint (flat config: `typescript-eslint`, `eslint-plugin-react-hooks`,
  `eslint-plugin-react-refresh`, `eslint-plugin-jsx-a11y`) alongside the
  existing `oxlint` setup.
- Open-source project documentation: `LICENSE` (Apache-2.0),
  `LICENSE-CONTENT.md` and `NOTICE` (CC BY-SA 4.0 for original card text
  and research write-ups), `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`,
  `SECURITY.md`.
- Test suite (Vitest + React Testing Library, 53 tests) covering the
  screen-navigation state machine, focus management, the no-repeat draw
  rule, and every component's conditional rendering — 96% statement / 91%
  branch coverage, enforced at an 80% floor in CI.
- `.github/workflows/ci.yml` — lint, build, and test-with-coverage as
  parallel jobs on every push to `main` and every pull request.
- `.github/workflows/deploy.yml` — publishes `dist/` to GitHub Pages once
  CI passes on `main`.

### Removed

- Card rarity (Common/Uncommon/Rare) and the animated foil/sparkle effect
  on rare cards — see "Rejected: card rarity" in `PRD.md` for why.
