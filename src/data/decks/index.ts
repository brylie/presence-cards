import { beginningAgainDeck } from "./beginningAgain";
import { belongingDeck } from "./belonging";
import { boundariesDeck } from "./boundaries";
import { angerDeck } from "./anger";
import { anxietyDeck } from "./anxiety";
import { changeDeck } from "./change";
import { enoughnessDeck } from "./enoughness";
import { fearDeck } from "./fear";
import { lossDeck } from "./loss";
import { overwhelmDeck } from "./overwhelm";
import { joyAndDelightDeck } from "./joyAndDelight";
import { restDeck } from "./rest";
import { sadnessDeck } from "./sadness";
import { uncertaintyDeck } from "./uncertainty";
import { waitingDeck } from "./waiting";
import type { DeckId } from "./types";

export {
  angerDeck,
  anxietyDeck,
  beginningAgainDeck,
  belongingDeck,
  boundariesDeck,
  changeDeck,
  enoughnessDeck,
  fearDeck,
  lossDeck,
  overwhelmDeck,
  joyAndDelightDeck,
  restDeck,
  sadnessDeck,
  uncertaintyDeck,
  waitingDeck,
};
export type { ContentKind, DeckId, PracticeCard, PresenceDeck, QuotationSource } from "./types";

export const emotionDecks = [
  uncertaintyDeck,
  anxietyDeck,
  angerDeck,
  sadnessDeck,
  fearDeck,
];

export const humanExperienceDecks = [
  waitingDeck,
  lossDeck,
  changeDeck,
  enoughnessDeck,
  beginningAgainDeck,
  restDeck,
];

export const connectionDecks = [belongingDeck, joyAndDelightDeck];

export const supportDecks = [overwhelmDeck, boundariesDeck];

export const decks = [...emotionDecks, ...humanExperienceDecks, ...connectionDecks, ...supportDecks];

export interface DeckCategory {
  id: "feelings" | "in-between-times" | "what-we-need" | "connection-and-aliveness";
  label: string;
  description: string;
  deckIds: DeckId[];
}

export const deckCategories: DeckCategory[] = [
  {
    id: "feelings",
    label: "Feelings",
    description: "When an emotion is asking to be noticed, named, or held.",
    deckIds: ["anxiety", "anger", "sadness", "fear"],
  },
  {
    id: "in-between-times",
    label: "In-between times",
    description: "When life is changing, unfinished, uncertain, or tender.",
    deckIds: ["uncertainty", "waiting", "loss", "change", "beginning-again"],
  },
  {
    id: "what-we-need",
    label: "What we need",
    description: "For rest, enoughness, limits, and making life more workable.",
    deckIds: ["rest", "overwhelm", "boundaries", "enoughness"],
  },
  {
    id: "connection-and-aliveness",
    label: "Connection & aliveness",
    description: "For belonging, delight, and a return to what helps life feel shared.",
    deckIds: ["belonging", "joy-and-delight"],
  },
];
