import type { PresenceDeck } from "./types";

export const enoughnessDeck: PresenceDeck = {
  id: "enoughness",
  label: "Enoughness",
  prompt: "When the mind says there is not enough, or that you are not enough.",
  cards: [
    { id: "enoughness-01", deck: "enoughness", title: "The Actual List", practice: "Perspective", quote: "Make a list of three actual needs for today. Keep separate the needs of this day from the endless list of imagined requirements.", contentKind: "original-practice", authorId: "presence-cards" },
    { id: "enoughness-02", deck: "enoughness", title: "One Ordinary Thank You", practice: "Appreciation", quote: "Thank one part of your body for something ordinary it did today: carried you, breathed, held, reached, or rested.", contentKind: "original-practice", authorId: "presence-cards", inspirationResourceId: "self-compassion" },
    { id: "enoughness-03", deck: "enoughness", title: "Leave Some Space", practice: "Sufficiency", quote: "Before adding one more task, tab, or obligation, ask what it would be like to leave a little room unfilled.", contentKind: "original-practice", authorId: "presence-cards", inspirationResourceId: "rest-is-resistance" },
    { id: "enoughness-04", deck: "enoughness", title: "A Friend’s Standard", practice: "Kindness", quote: "Write one sentence you would offer a tired friend. Read it once as though it were meant for you, without arguing back.", contentKind: "original-practice", authorId: "presence-cards", inspirationResourceId: "self-compassion-practices" },
    { id: "enoughness-05", deck: "enoughness", title: "Enough in the Cup", practice: "Restraint", quote: "It is better to leave a vessel unfilled, than to attempt to carry it when it is full.", contentKind: "quotation", authorId: "lao-tze", resourceId: "tao-te-ching-legge", source: { work: "Tao Te Ching", editionOrTranslator: "trans. James Legge, 1891", location: "Chapter 9", sourceUrl: "https://www.gutenberg.org/files/216/216-h/216-h.htm", rightsBasis: "public-domain" } },
  ],
};
