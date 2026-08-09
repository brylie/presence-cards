# Presence Cards — MVP implementation handoff

You are continuing implementation of **Presence Cards**, a small React +
TypeScript app. Your goal is to take the current prototype to a coherent,
working MVP—not to build every possible future feature.

## Product intent

Presence Cards is a quiet companion for meeting a human experience with
attention. It is not a mood tracker, game to win, clinical tool, or source of
diagnosis. A person names what is present, chooses or draws a card, and is
offered a small, self-contained invitation.

The cards use game-inspired visual language (decks, rarity, card art), but
the experience must not use scores, streaks, mastery mechanics, pressure, or
compulsive “card hopping.”

The primary content is **original Presence Cards practice text**. Carefully
sourced public-domain quotations are occasional, clearly attributed guests.
Contemporary authors and works normally appear as optional “Further reading”
links, never as copied quotations without a documented reuse right.

## Read first

1. `AGENTS.md` in the parent workspace.
2. `README.md`.
3. `research/sources.md`.
4. `research/presence-cards-source-library.md`.
5. `research/presence-cards-reviewable-source-library-quotations`.
6. Current source structure, especially `src/data/decks/`, `src/data/catalog.ts`,
   `src/components/`, and `src/App.tsx`.

Treat the source libraries as editorial input, not as an instruction to import
every quote.

## MVP outcome

Deliver a usable local app where a person can:

1. Choose one of the current experience decks:
   Uncertainty, Anxiety, Anger, Sadness, Fear, Waiting, Loss, Change,
   Enoughness, Beginning Again, or Rest.
2. See a real, non-placeholder deck with a modest but meaningful selection of
   cards (target 5–8 cards per deck for this MVP, rather than forcing 52).
3. Draw one card or deliberately select one from the deck.
4. Read the card in a calm full-card view, including source attribution for a
   quote or “Further reading” for an original practice when available.
5. Open an optional deck-level **Explore further** view containing a small,
   curated resource list for that experience.
6. Return to the deck or experience chooser easily.

## Content requirements

- Make every card immediately useful on its own. A linked resource must never
  be required to understand or benefit from a card.
- Keep original practices as the majority of each deck (roughly 70–80% across
  the MVP is a useful guide).
- Use exact quotations only when they come from the verified public-domain
  entries in the research library and retain author, work, edition/translator,
  location, source URL, and rights basis.
- Do not import the project’s existing modern quotations unless their rights
  status has been documented. Replace or relabel them as needed with original
  practices and further-reading links.
- Do not copy wording from contemporary linked authors. Write genuinely new,
  simple practice language.
- Preserve religious, spiritual, and cultural context. Do not present sacred
  text as generic mindfulness or promise that a practice will cure distress.

## Resource feature

Add a small, maintainable resource model and an “Explore further” surface.

Suggested fields:

```ts
type ResourceKind = "book" | "article" | "talk" | "practice" | "organization" | "public-domain-reading";

interface Resource {
  id: string;
  title: string;
  kind: ResourceKind;
  authorId?: string;
  deckIds: DeckId[];
  url: string;
  access?: "read-online" | "borrow-or-buy" | "watch-or-listen" | "learn-more";
  description: string;
  rightsNote?: string;
}
```

Reuse or sensibly extend the existing author/resource catalog rather than
creating competing models. Begin with 3–6 resources per deck, using the
official, publisher, institutional, or Project Gutenberg links already in the
research documents. Avoid recommendation-like claims; describe why a resource
is related in neutral, concise language.

## UX and accessibility guardrails

- Keep the quiet, unhurried visual character of the current prototype.
- Make external links visibly identifiable and safe to open in a new tab.
- Use semantic buttons and links; preserve keyboard access and visible focus.
- Do not make a random draw the only path; deliberate selection should remain
  available.
- Keep resource exploration secondary to reading the current card.
- Make empty, missing-link, and unknown-source states graceful.

## Scope boundaries

Do not add accounts, analytics, streaks, notifications, AI chat, social
features, payments, an online database, or a recommendation algorithm. Do not
try to fill 52 cards per deck in this pass. Favor a small, polished vertical
slice over a huge content import.

## Engineering expectations

- Preserve the per-deck data-file design under `src/data/decks/`.
- Keep TypeScript types explicit and make new data easy for non-specialists to
  edit later.
- Avoid breaking existing navigation or card rendering.
- Update `README.md` with the implemented MVP behavior and how the resource
  model is maintained.
- Add lightweight tests where the existing test setup makes that reasonable;
  at minimum run the production build and fix errors.
- Do not overwrite unrelated user changes.

## Definition of done

The work is complete when:

- All 11 experience decks are selectable and contain real cards.
- Each deck has an optional, working Explore further resource list.
- Cards cleanly distinguish original practices from sourced quotations.
- Source metadata and external links render correctly.
- The interface remains calm, keyboard-usable, and understandable without
  reading external resources.
- `npm run build` passes.
- README and data documentation reflect the final structure.

## Final handoff

Report:

1. What was implemented and where.
2. Number of cards and resources per deck.
3. Any source entries deliberately excluded or converted to original practice
   cards because of rights/context concerns.
4. Verification performed, including build/test results.
5. The 2–4 highest-value next steps after this MVP.
