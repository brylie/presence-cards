import type { PresenceDeck } from "./types";

export const waitingDeck: PresenceDeck = {
  id: "waiting",
  label: "Waiting",
  prompt: "When the next step has not arrived yet.",
  cards: [
    { id: "waiting-01", deck: "waiting", title: "This Is Part of It", practice: "Permission", quote: "Waiting is not empty time. Notice one thing this pause is asking you to tend: your body, a detail, a relationship, or a question.", contentKind: "original-practice", authorId: "presence-cards", inspirationResourceId: "a-testament-of-devotion" },
    { id: "waiting-02", deck: "waiting", title: "Use the Interval", practice: "Attention", quote: "For one minute, do only this: feel the inhale arrive and the exhale leave. Nothing needs to happen because you are watching.", contentKind: "original-practice", authorId: "presence-cards" },
    { id: "waiting-03", deck: "waiting", title: "Prepare a Gentle Landing", practice: "Readiness", quote: "Choose one small thing that will make the next transition kinder: fill a glass, write a note, clear a surface, or ask for help.", contentKind: "original-practice", authorId: "presence-cards", inspirationResourceId: "we-were-made-for-these-times" },
    { id: "waiting-04", deck: "waiting", title: "Do Not Borrow Trouble", practice: "Boundaries", quote: "Make two columns: “mine to tend today” and “not mine to solve today.” Put one thing in each.", contentKind: "original-practice", authorId: "presence-cards" },
    { id: "waiting-05", deck: "waiting", title: "The Unsung Song", practice: "Ripening", quote: "The song that I came to sing remains unsung to this day. I have spent my days in stringing and in unstringing my instrument.", contentKind: "quotation", authorId: "rabindranath-tagore", resourceId: "gitanjali-tagore", source: { work: "Gitanjali (Song Offerings)", editionOrTranslator: "Author's own English prose translation, 1912", location: "Poem 13", sourceUrl: "https://www.gutenberg.org/cache/epub/7164/pg7164-images.html", rightsBasis: "public-domain" } },
  ],
};
