# Content license

This repository uses two licenses for two different kinds of material. See
[`NOTICE`](NOTICE) for the full breakdown; the summary is:

- **Code** (everything under `src/` except the card text described below),
  config files, and **project documentation** (`README.md`, `PRD.md`,
  `CONTRIBUTING.md`, `CHANGELOG.md`, `MVP_AGENT_PROMPT.md`, and the
  `.github/` issue and pull request templates) are licensed under the
  **Apache License, Version 2.0**. See [`LICENSE`](LICENSE).
- **Original written content** — the practice-card text (`title`,
  `practice`, and `quote` fields where `contentKind` is
  `"original-practice"` in `src/data/decks/*.ts`) and the editorial write-ups
  under `research/` — is licensed under **Creative Commons
  Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)**.
- **Public-domain quotations** (cards where `contentKind` is `"quotation"`,
  with a `source` object) are exactly that: text already in the public
  domain, carried into this repository with full attribution. They are not
  owned by this project and this license does not apply to them. Verify the
  jurisdiction-specific status noted in `research/sources.md` before reuse.

## Why a separate content license

Apache-2.0 is a software license; applying it to prose invitations meant to
sit with someone in a hard moment doesn't fit well, and it doesn't require
derivatives to stay open the way the original does. CC BY-SA 4.0 keeps the
practice-card text freely reusable — including commercially — while
requiring attribution and that adaptations remain under the same open
terms, so the writing can't be taken proprietary downstream.

## CC BY-SA 4.0, in short

You are free to share and adapt this material for any purpose, even
commercially, as long as you:

- **Attribute** — credit "Presence Cards contributors," link back to this
  repository, and note what you changed.
- **ShareAlike** — distribute your contributions under the same CC BY-SA
  4.0 license.

This summary is not a substitute for the license. Read the full legal text:

- Human-readable summary: <https://creativecommons.org/licenses/by-sa/4.0/>
- Full legal code: <https://creativecommons.org/licenses/by-sa/4.0/legalcode>
