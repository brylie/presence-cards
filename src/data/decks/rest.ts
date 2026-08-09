import type { PresenceDeck } from "./types";

export const restDeck: PresenceDeck = {
  id: "rest",
  label: "Rest",
  prompt: "When effort has become too loud and you need gentleness.",
  cards: [
    { id: "rest-01", deck: "rest", title: "Nothing to Earn", practice: "Permission", quote: "Choose five minutes that produce nothing and need no explanation. Let rest be an act of care, not a prize for finishing.", contentKind: "original-practice", authorId: "presence-cards", inspirationResourceId: "rest-is-resistance" },
    { id: "rest-02", deck: "rest", title: "Lower the Volume", practice: "Ease", quote: "Reduce one source of input if you can: dim a light, set down a screen, close a tab, or let the room become quieter.", contentKind: "original-practice", authorId: "presence-cards" },
    { id: "rest-03", deck: "rest", title: "Unforced Breath", practice: "Breathing", quote: "Let your exhale be as long as it wants to be. There is nothing to perform; simply notice the body releasing a little air.", contentKind: "original-practice", authorId: "presence-cards" },
    { id: "rest-04", deck: "rest", title: "A Softer Next Thing", practice: "Choice", quote: "Ask which available task asks the least of you while still offering care. You are allowed to choose the softer next thing.", contentKind: "original-practice", authorId: "presence-cards", inspirationResourceId: "a-testament-of-devotion" },
    { id: "rest-05", deck: "rest", title: "A Moment's Indulgence", practice: "Pause", quote: "I ask for a moment's indulgence to sit by thy side. The works that I have in hand I will finish afterwards.", contentKind: "quotation", authorId: "rabindranath-tagore", resourceId: "gitanjali-tagore", source: { work: "Gitanjali (Song Offerings)", editionOrTranslator: "Author's own English prose translation, 1912", location: "Poem 5", sourceUrl: "https://www.gutenberg.org/cache/epub/7164/pg7164-images.html", rightsBasis: "public-domain" } },
  ],
};
