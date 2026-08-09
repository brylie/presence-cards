import type { PresenceDeck } from "./types";

export const anxietyDeck: PresenceDeck = {
  id: "anxiety",
  label: "Anxiety",
  prompt: "When the mind keeps scanning ahead.",
  cards: [
    { id: "anxiety-01", deck: "anxiety", title: "Name the Weather", practice: "Noticing", quote: "Complete this sentence without fixing it: “Anxiety is here, and it feels like …” A word, image, or body sensation is enough.", contentKind: "original-practice", authorId: "presence-cards", inspirationResourceId: "emotional-agility" },
    { id: "anxiety-02", deck: "anxiety", title: "Three Neutral Things", practice: "Orienting", quote: "Name three neutral things you can see. Let your eyes move slowly between them, as if you have nowhere else to be.", contentKind: "original-practice", authorId: "presence-cards", inspirationResourceId: "self-compassion-practices" },
    { id: "anxiety-03", deck: "anxiety", title: "Shrink the Horizon", practice: "Focus", quote: "Make the time frame smaller. What needs your care in the next ten minutes, rather than in every possible future?", contentKind: "original-practice", authorId: "presence-cards" },
    { id: "anxiety-04", deck: "anxiety", title: "A Kinder Question", practice: "Compassion", quote: "Instead of asking “How do I stop this?” ask “What would make this moment one degree more supported?”", contentKind: "original-practice", authorId: "presence-cards", inspirationResourceId: "radical-acceptance" },
    { id: "anxiety-05", deck: "anxiety", title: "A Flighty Mind", practice: "Attention", quote: "It is good to tame the mind, which is difficult to hold in and flighty, rushing wherever it listeth; a tamed mind brings happiness.", contentKind: "quotation", authorId: "buddha", resourceId: "dhammapada-muller", source: { work: "The Dhammapada", editionOrTranslator: "trans. F. Max Müller, Sacred Books of the East, Vol. X", location: "Chapter III (Thought), verse 35", sourceUrl: "https://www.gutenberg.org/files/2017/2017-h/2017-h.htm", rightsBasis: "public-domain" } },
  ],
};
