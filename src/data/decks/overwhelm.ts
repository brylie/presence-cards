import type { PresenceDeck } from "./types";

export const overwhelmDeck: PresenceDeck = {
  id: "overwhelm",
  label: "Overwhelm",
  prompt: "When there is too much to hold, decide, feel, or do all at once.",
  cards: [
    { id: "overwhelm-01", deck: "overwhelm", title: "Make the Pile Smaller", practice: "Reduce", quote: "Write down the next three things asking for your attention. Circle only one that truly belongs to this hour; the others can wait on the page.", contentKind: "original-practice", authorId: "presence-cards" },
    { id: "overwhelm-02", deck: "overwhelm", title: "One Channel", practice: "Simplify", quote: "For two minutes, do only one thing. Let the others remain unfinished without trying to solve them in your head.", contentKind: "original-practice", authorId: "presence-cards" },
    { id: "overwhelm-03", deck: "overwhelm", title: "Return to the Room", practice: "Orient", quote: "Look slowly around the room. Name five neutral objects, then feel the support beneath your feet or body before choosing what comes next.", contentKind: "original-practice", authorId: "presence-cards" },
    { id: "overwhelm-04", deck: "overwhelm", title: "Lower the Bar Kindly", practice: "Permission", quote: "Choose the version of this task that is good enough for today. Completion can be partial, plain, and still worthwhile.", contentKind: "original-practice", authorId: "presence-cards", inspirationResourceId: "four-thousand-weeks" },
    { id: "overwhelm-05", deck: "overwhelm", title: "Ask for a Hand", practice: "Support", quote: "Name one specific thing another person could help with: listening for ten minutes, making a call, sharing a task, or simply staying nearby.", contentKind: "original-practice", authorId: "presence-cards" },
  ],
};
