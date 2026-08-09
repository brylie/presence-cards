import type { PresenceDeck } from "./types";

export const sadnessDeck: PresenceDeck = {
  id: "sadness",
  label: "Sadness",
  prompt: "When there is heaviness, tenderness, or ache.",
  cards: [
    { id: "sadness-01", deck: "sadness", title: "Let the Weight Sit", practice: "Permission", quote: "Choose a place to rest your hands. You do not need to cheer yourself up right now; let the feeling have a little room beside you.", contentKind: "original-practice", authorId: "presence-cards", inspirationResourceId: "its-ok-that-youre-not-ok" },
    { id: "sadness-02", deck: "sadness", title: "A Small Companion", practice: "Connection", quote: "Name one person, animal, place, or memory that makes the world feel slightly less empty. You do not have to contact it to let it accompany you.", contentKind: "original-practice", authorId: "presence-cards" },
    { id: "sadness-03", deck: "sadness", title: "No Lesson Required", practice: "Gentleness", quote: "Say the simple fact of what hurts. Leave out the lesson, the silver lining, and the deadline for feeling better.", contentKind: "original-practice", authorId: "presence-cards", inspirationResourceId: "its-ok-that-youre-not-ok" },
    { id: "sadness-04", deck: "sadness", title: "Care for the Body", practice: "Tending", quote: "Offer your body one ordinary kindness: water, warmth, a blanket, food, a shower, or a few quiet minutes.", contentKind: "original-practice", authorId: "presence-cards", inspirationResourceId: "self-compassion" },
    { id: "sadness-05", deck: "sadness", title: "The Little Flower", practice: "Tenderness", quote: "Pluck this little flower and take it, delay not! I fear lest it droop and drop into the dust.", contentKind: "quotation", authorId: "rabindranath-tagore", resourceId: "gitanjali-tagore", source: { work: "Gitanjali (Song Offerings)", editionOrTranslator: "Author's own English prose translation, 1912", location: "Poem 6", sourceUrl: "https://www.gutenberg.org/cache/epub/7164/pg7164-images.html", rightsBasis: "public-domain" } },
  ],
};
