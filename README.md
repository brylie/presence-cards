# Presence Cards

**[Live app: brylie.github.io/presence-cards](https://brylie.github.io/presence-cards/)**

Presence Cards is a quiet companion for meeting a human experience with
attention. It is not a mood tracker, clinical tool, or game to win. Choose an
experience, draw or deliberately select a card, and take the small invitation
that fits this moment.

See [`PRD.md`](PRD.md) for product intent, the accessibility commitments,
the design system (color/type tokens, light and dark), and a record of
mechanics that were tried and deliberately removed — including why card
rarity was cut.

## Run locally

```bash
npm install
npm run dev
```

To check the production bundle:

```bash
npm run build
```

To run tests with a coverage report (CI requires ≥80%):

```bash
npm run test:coverage
```

## Continuous integration and deployment

`.github/workflows/ci.yml` runs lint, build, and test-with-coverage as
three parallel jobs on every push to `main` and every pull request.
`.github/workflows/deploy.yml` triggers when CI finishes successfully on
`main` and publishes `dist/` to GitHub Pages — deployment is gated on CI
passing, not a separate check. See [`CONTRIBUTING.md`](CONTRIBUTING.md)
for the full local dev/test loop.

## MVP behavior

Fifteen decks are available, grouped as Feelings (Anxiety, Anger, Sadness,
Fear), In-between times (Uncertainty, Waiting, Loss, Change, Beginning
Again), What we need (Rest, Overwhelm, Boundaries, Enoughness), and
Connection & aliveness (Belonging, Joy and Delight). Each has five cards:
four original, self-contained Presence Cards practices and one carefully
documented public-domain quotation.

You can draw a card or choose one directly. The full-card view identifies
original practices, shows optional further reading when it is available, and
shows a quotation's author, work, edition or translator, precise location,
source link, and public-domain basis. From the deck screen, **Explore further**
opens a small, optional resource list; external links visibly open in a new
tab. The card remains useful without following any link.

## Where things live

- `src/data/decks/` contains one editable data file per deck. `types.ts`
  contains the shared deck, card, and quotation-provenance types.
- `src/data/catalog.ts` contains authors and the shared resource catalog.
  Resources have a `deckIds` list, description, link, access label, and an
  optional rights/context note. Add a resource there and include its deck IDs;
  the relevant deck's Explore further view picks it up automatically.
- `src/components/DeckView.tsx` renders selection, random draw, and the
  secondary resource surface.
- `src/components/PresenceView.tsx` renders a full card and simple routes back
  to its deck or the experience chooser.
- `src/components/CardFace.tsx` renders the original-practice and quotation
  attribution states.

## Content, sources, and rights

Original practices are the primary content. Contemporary books and teachers
are optional further-reading links only; their wording is not reproduced.
Exact quotations are limited to entries with recorded public-domain provenance
from the review library. A quotation card must retain all fields in its
`source` object and should only use a source documented in the research files.

The editorial research and release rules live in:

- [`research/sources.md`](research/sources.md)
- [`research/presence-cards-source-library.md`](research/presence-cards-source-library.md)
- [`research/presence-cards-reviewable-source-library-quotations`](research/presence-cards-reviewable-source-library-quotations)

Public-domain status can vary by jurisdiction. The current records identify
the cited Project Gutenberg editions as public domain in the United States;
review distribution territories before release. Sacred and spiritual texts are
named as such and are not presented as generic wellness instructions.

## Editorial checklist for a new card

1. Make the card complete and useful without a resource link.
2. Use `contentKind: "original-practice"` and `authorId: "presence-cards"`
   for newly written practice language. A linked contemporary resource belongs
   in `inspirationResourceId`, not in the card text.
3. Use `contentKind: "quotation"` only after rights review. Include an exact
   quotation, author, linked resource, and every `source` metadata field.
4. Keep resource exploration secondary; do not add scores, streaks, accounts,
   analytics, or pressure to keep drawing cards.

## Contributing

Bug fixes, accessibility fixes, and new decks/cards/resources are welcome.
See [`CONTRIBUTING.md`](CONTRIBUTING.md) for the development setup, content
review rules, and PR checklist, and [`PRD.md`](PRD.md) for the product and
UX principles changes are expected to hold to. Participation in this
project is governed by the [Code of Conduct](CODE_OF_CONDUCT.md).

Found a security issue? See [`SECURITY.md`](SECURITY.md) rather than
opening a public issue.

## License

This repository uses two licenses for two different kinds of material —
see [`NOTICE`](NOTICE) for the full breakdown:

- **Code** is licensed under the [Apache License, Version 2.0](LICENSE).
- **Original practice-card text and research write-ups** are licensed
  under [Creative Commons Attribution-ShareAlike 4.0](LICENSE-CONTENT.md).
- **Public-domain quotations** on quotation cards are exactly that —
  public domain, not owned by this project, reproduced with attribution.
  See [`research/sources.md`](research/sources.md) for provenance and
  jurisdiction notes before reuse.
