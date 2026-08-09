# Contributing to Presence Cards

Thanks for considering a contribution. This project moves deliberately —
it's a support tool people reach for in a hard moment, so changes are
reviewed against calm, accessibility, and content-rights standards before
speed. Read [`PRD.md`](PRD.md) first; it's the standing reference for what
this app is trying to be and why some things (rarity/gamification, most
recently) were tried and removed.

## Before you start

For anything beyond a small fix, open an issue first — especially for new
decks, new cards, or new "Explore further" resources. It's much easier to
agree on fit before writing than to revert afterward.

## Development setup

```bash
npm install
npm run dev      # local dev server
npm run build    # tsc -b && vite build — must pass before a PR is opened
npm run lint      # oxlint, then eslint
```

There's no test suite yet. If you add non-trivial logic (not just card
data), lightweight tests are welcome.

## Kinds of contribution

### Code

Bug fixes, accessibility fixes, and small UX improvements are welcome.
Please keep in mind, from `PRD.md`:

- No scores, streaks, accounts, analytics, or anything that makes drawing
  another card feel more rewarding than reading the one in front of you.
  See "Rejected: card rarity" in `PRD.md` before proposing anything
  collection- or reward-shaped.
- WCAG 2.2 AA is the floor: 4.5:1 text contrast, 3:1 non-text/focus
  contrast, full keyboard reachability, and screen-change focus management
  (every screen's top heading gets `id="screen-heading" tabIndex={-1}`;
  see `App.tsx`).
- Motion is ambient only and must respect `prefers-reduced-motion`.
- Match the existing design tokens in `src/index.css` rather than
  hardcoding colors or fonts.

### New cards, decks, or resources

The content rules live in `README.md` under "Editorial checklist for a new
card" — read that before opening a PR that touches `src/data/`. The short
version:

1. A card must be complete and useful without following any link.
2. Original practice language: `contentKind: "original-practice"`,
   `authorId: "presence-cards"`. A related contemporary book or teacher
   goes in `inspirationResourceId`, never quoted directly.
3. Exact quotations (`contentKind: "quotation"`) are only accepted from
   entries with **documented public-domain provenance** in
   `research/sources.md` — don't add a quotation from a source that isn't
   already reviewed there. Include every `source` field: work, edition or
   translator, location, source URL, rights basis.
4. Preserve religious, spiritual, and cultural context rather than
   flattening it into generic wellness language.
5. Keep original practices as the majority of any deck (roughly 70–80% is
   the existing guide).

**By submitting original practice text or research write-ups, you agree
they're licensed under CC BY-SA 4.0** (see `LICENSE-CONTENT.md`) — the same
terms the rest of the project's writing is under. Public-domain quotations
remain public domain and aren't affected by this.

## Pull requests

- Keep PRs scoped to one change — one deck, one bug, one design fix — so
  review stays focused.
- Run `npm run build` and `npm run lint` locally before opening the PR;
  both must pass.
- For UI changes, say in the PR description how you checked it: which
  screens, keyboard-only pass, light/dark, `prefers-reduced-motion`.
- Describe *why*, not just what — especially for anything touching tone,
  copy, or a rule in `PRD.md`.

## Code of Conduct

This project follows [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md).
Participation means agreeing to it.
