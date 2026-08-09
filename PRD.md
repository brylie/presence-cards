# Presence Cards — Product & UX Requirements

This document is the living source of truth for what Presence Cards is
supposed to feel like, and for design decisions that aren't obvious from
reading the code — especially ones that were tried and deliberately reversed.
It supersedes the visual-design notes in `MVP_AGENT_PROMPT.md`, which is kept
as a historical handoff record.

## What this is

Presence Cards is a quiet companion for meeting a human experience with
attention: name what's present, choose or draw a card, and take the small
invitation that fits this moment. It is not a mood tracker, a clinical tool,
or a game to win.

## Who reaches for this, and when

Someone mid-feeling, often on a phone, often not at their best moment —
possibly at night, possibly stressed, possibly with reduced patience or
dexterity. The design has to work for that person specifically, not for a
relaxed daytime power user. Two consequences run through every decision
below: nothing should ask for more effort or precision than the moment
allows, and nothing should introduce urgency, competition, or a reason to
keep going past what's useful.

## Design principles

1. **Calm over stimulating.** No countdowns, no streaks, no "come back
   tomorrow." Motion is ambient (a slow pulse, a soft hover), never urgent,
   and always disabled under `prefers-reduced-motion`.
2. **A card is complete on its own.** Nothing behind a link is required to
   understand or benefit from a card. Further reading is optional and
   secondary.
3. **No pressure to keep drawing.** The MVP brief for this app said it
   directly: no scores, streaks, accounts, analytics, or pressure to keep
   drawing cards. That rule is stricter than it first looks — see
   [Rejected: card rarity](#rejected-card-rarity) below for a mechanic that
   satisfied the letter of this rule while violating its spirit.
4. **Accessible by default, not by request.** WCAG 2.2 AA is the floor:
   4.5:1 text contrast, 3:1 non-text/focus contrast, visible keyboard focus,
   and full screen-reader usability through every screen transition. This
   app's plausible user is *less* likely than average to have the patience
   to fight a bad interface, not more.
5. **Warm, not clinical; honest, not cute.** The tone is companionable
   ("a companion, not a weapon," from the intro screen) without slipping
   into either a therapy-app's clinical register or a wellness-app's forced
   positivity.

## Screen-by-screen intent

| Screen | Job | Notes |
|---|---|---|
| Intro | Set expectations once; explain why this isn't a fight against the feeling | Shown on first visit only (`localStorage`), reachable again from Check-in |
| Check-in | Let someone name what's present, grouped the way a person actually thinks about it (Feelings / In-between times / What we need / Connection) | Deliberate choice, not just alphabetical/data order |
| Deck | Draw at random or choose deliberately; optional "Explore further" resources | Random draw is never the *only* path — deliberate choice always available |
| Presence | The destination: one card, full attention, no timer | "Stay with this for as long as it helps" — no forced pacing |

Every navigation between these is a full screen replacement, not a page
load. That has an accessibility cost that the implementation has to pay for
explicitly — see below.

## Accessibility commitments

- **Focus follows navigation.** Every screen's top heading has
  `id="screen-heading" tabIndex={-1}`; `App.tsx` focuses it on every screen
  change so keyboard and screen-reader users always land somewhere
  meaningful, instead of the browser silently dropping focus to `<body>`.
- **Every screen change is announced** through a persistent
  `aria-live="polite"` status region, independent of focus movement, so it
  isn't defeated by an assistive technology that reads focus and live
  regions differently.
- **The Presence screen has a real `<h1>`** (the card title) — it's the
  destination screen and needs a structural landing point like any other.
- **Text contrast targets 4.5:1 minimum** for body/secondary text and 3:1
  for non-text UI (focus rings, borders that carry meaning).
- **Touch targets target ~44px minimum height** on interactive controls,
  not just the 24px WCAG floor — this is a "reachable while your hands
  aren't steady" bar, not a legal-minimum bar.
- **`prefers-reduced-motion` is respected** everywhere motion is decorative.
- **`prefers-color-scheme: dark` is respected** — see below.

## Design system

The visual language was rebuilt around a single idea: a page that reads
correctly at 2am with the lights off and at noon in the sun, without a
manual toggle, because someone in this app's actual moment shouldn't have to
go looking for a dark-mode setting first.

**Color** — defined as CSS custom properties in `src/index.css`, redefined
under `@media (prefers-color-scheme: dark)`:

| Token | Light | Dark | Use |
|---|---|---|---|
| `--paper` | `#f2f4f0` | `#161b18` | Page background |
| `--paper-raised` | `#fbfcfa` | `#1e2521` | Card/panel surfaces |
| `--ink` | `#1c2420` | `#eef1ec` | Primary text |
| `--ink-soft` | `#4b564f` | `#aab5ac` | Secondary text — chosen to clear 4.5:1 on `--paper` |
| `--ink-faint` | `#7c887f` | `#7e8a82` | Decorative-only labels, never load-bearing text |
| `--line` | `#dde2dc` | `#313b35` | Borders, dividers |
| `--accent` | `#2f6f5e` | `#74c2a6` | Buttons, links, focus ring — ≥3:1 against `--paper` in both themes |
| `--accent-soft` | `#e4efe9` | `#1f3830` | Tinted backgrounds (type line, art panel) |

**Type** — system-font stacks only, so nothing blocks first render on a
third-party font request and no user's IP is sent to a font CDN on load:

- `--font-display`: `"Iowan Old Style", "Palatino Linotype", "Book Antiqua",
  Georgia, serif` — headings and the card's quote/invitation text.
- `--font-sans`: the OS UI sans stack — body copy, buttons, navigation.
- `--font-mono`: the OS monospace stack — small utility labels (the card's
  footer wordmark) where a bit of documentary, "field notes" texture fits.

**Motion** — ambient only (presence-view pulse, hover lift), all inside
`@media (prefers-reduced-motion: reduce)` guards.

## Content model

See `README.md` for the authoritative description of the data model
(`src/data/decks/`, `src/data/catalog.ts`) and the editorial rules for
original practices vs. sourced quotations. This PRD covers UX intent, not
content structure.

## Rejected: card rarity

**What existed:** each card carried a `rarity: "common" | "uncommon" |
"rare"` field. Rare cards got an animated holographic foil sheen that
tracked pointer position, plus a twinkling star next to a visible
"Rare"/"Uncommon"/"Common" badge.

**Why it seemed fine at the time:** the original MVP brief explicitly
allowed "game-inspired visual language (decks, rarity, card art)" as long as
the app avoided "scores, streaks, mastery mechanics, pressure, or compulsive
card hopping." Rarity-as-flavor felt like it was on the safe side of that
line — it's not a score, it doesn't track anything, it doesn't gate content.

**Why it was cut:** a rarity tier with an animated shimmer on the rare tier
*is* a pull mechanic, independent of whether anything is tracked. It's the
core trick of card-collecting and gacha design: some outcomes are visibly
more special than others, so drawing again to see what you get becomes its
own small reward loop. That's precisely the "pressure to keep drawing cards"
the project's own rules rule out — the fact that it isn't logged or scored
doesn't change what it does to the moment-to-moment pull of the interface.
It also read as tonally inconsistent with the Intro screen's own framing —
"Not a battle... a companion, not a weapon" sits oddly next to a shiny
"Rare" badge, which is a game-collection frame.

**What replaced it:** cards no longer carry a rarity field. Every card gets
the same visual treatment; per-deck art variation, if wanted later, should
come from something that doesn't rank cards against each other (e.g. a
fixed motif per deck, not per card, and never labelled or animated in a way
that implies scarcity).

**If this gets reconsidered:** the test isn't "does it track anything" —
it's "does drawing again feel different, more rewarding, or more urgent
than reading the card in front of you." If the answer is yes, it's a pull
mechanic regardless of what it's called.

## Open questions

- Should the "Explore further" resource list get its own focus-management
  treatment when it opens (it's an in-page disclosure, not a screen change,
  so the current `aria-expanded` pattern is likely sufficient — flag if
  user testing says otherwise)?
- Is a manual light/dark toggle worth adding on top of `prefers-color-scheme`
  for users whose OS setting doesn't match their actual reading environment?
