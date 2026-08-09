import type { PresenceDeck } from "./types";

export const fearDeck: PresenceDeck = {
  id: "fear",
  label: "Fear",
  prompt: "When the body braces for danger.",
  cards: [
    { id: "fear-01", deck: "fear", title: "Check the Room", practice: "Orienting", quote: "Look around slowly and name five ordinary objects. If you are not safe, let safety—not a practice card—be the next priority.", contentKind: "original-practice", authorId: "presence-cards", inspirationResourceId: "my-grandmothers-hands" },
    { id: "fear-02", deck: "fear", title: "One Exit, One Support", practice: "Preparation", quote: "Notice one way you could leave or pause, and one person or place you could turn toward. You are allowed to make a plan for support.", contentKind: "original-practice", authorId: "presence-cards" },
    { id: "fear-03", deck: "fear", title: "Make It Smaller", practice: "Courage", quote: "Do not ask yourself to face the whole thing. Choose the smallest safe movement toward what matters, or choose rest until that movement is possible.", contentKind: "original-practice", authorId: "presence-cards", inspirationResourceId: "comfortable-with-uncertainty" },
    { id: "fear-04", deck: "fear", title: "Protect What Is Tender", practice: "Care", quote: "Put a hand over the part of your body that feels most guarded. Let the gesture mean: “I will not abandon this tenderness.”", contentKind: "original-practice", authorId: "presence-cards" },
    { id: "fear-05", deck: "fear", title: "Honor the Quiet Battle", practice: "Courage", quote: "To fight aloud is very brave, / But gallanter, I know, / Who charge within the bosom,", contentKind: "quotation", authorId: "emily-dickinson", resourceId: "dickinson-poems", source: { work: "Poems by Emily Dickinson, Three Series, Complete", editionOrTranslator: "ed. Mabel Loomis Todd and T. W. Higginson", location: "First Series, I. “Life,” XVI", sourceUrl: "https://www.gutenberg.org/cache/epub/12242/pg12242-images.html", rightsBasis: "public-domain" } },
  ],
};
