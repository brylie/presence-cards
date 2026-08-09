import type { PresenceDeck } from "./types";

export const uncertaintyDeck: PresenceDeck = {
  id: "uncertainty",
  label: "Uncertainty",
  prompt: "When the next part is not yet clear.",
  cards: [
    { id: "uncertainty-01", deck: "uncertainty", title: "The Next Small Thing", practice: "Orientation", quote: "Set the whole question down for a moment. Name one thing you know, then one small thing you can do without knowing the rest.", contentKind: "original-practice", authorId: "presence-cards", inspirationResourceId: "comfortable-with-uncertainty" },
    { id: "uncertainty-02", deck: "uncertainty", title: "Let It Be Unnamed", practice: "Permission", quote: "You do not have to turn this feeling into a plan yet. Try saying: “I do not know, and I am here.”", contentKind: "original-practice", authorId: "presence-cards", inspirationResourceId: "kate-bowler-books" },
    { id: "uncertainty-03", deck: "uncertainty", title: "One Steady Point", practice: "Grounding", quote: "Find one reliable point of contact: a foot on the floor, a hand on your chest, or the edge of a chair. Stay there for three unforced breaths.", contentKind: "original-practice", authorId: "presence-cards" },
    { id: "uncertainty-04", deck: "uncertainty", title: "A Wider Horizon", practice: "Attention", quote: "Look out a window or across the room. Let your eyes rest on something farther away than the problem for a few moments.", contentKind: "original-practice", authorId: "presence-cards" },
    { id: "uncertainty-05", deck: "uncertainty", title: "Let It Settle", practice: "Stillness", quote: "Who can (make) the muddy water (clear)? Let it be still, and it will gradually become clear.", contentKind: "quotation", authorId: "lao-tze", resourceId: "tao-te-ching-legge", source: { work: "Tao Te Ching", editionOrTranslator: "trans. James Legge, 1891", location: "Chapter 15", sourceUrl: "https://www.gutenberg.org/files/216/216-h/216-h.htm", rightsBasis: "public-domain" } },
  ],
};
