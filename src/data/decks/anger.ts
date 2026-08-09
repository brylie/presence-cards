import type { PresenceDeck } from "./types";

export const angerDeck: PresenceDeck = {
  id: "anger",
  label: "Anger",
  prompt: "When heat rises and something feels wrong.",
  cards: [
    { id: "anger-01", deck: "anger", title: "Make Space Before Words", practice: "Pause", quote: "If you can, put one breath between the feeling and the next sentence. You may still speak; you do not have to speak from the first flash.", contentKind: "original-practice", authorId: "presence-cards", inspirationResourceId: "emotional-agility" },
    { id: "anger-02", deck: "anger", title: "The Boundary Underneath", practice: "Clarity", quote: "Ask what matters enough to be protected here. Turn that answer into a clear request, limit, or decision to step away.", contentKind: "original-practice", authorId: "presence-cards" },
    { id: "anger-03", deck: "anger", title: "Feel the Floor", practice: "Safety", quote: "Press both feet into the floor and notice the support beneath you. Let your body know it has a place to stand before you decide what comes next.", contentKind: "original-practice", authorId: "presence-cards", inspirationResourceId: "my-grandmothers-hands" },
    { id: "anger-04", deck: "anger", title: "The Honest No", practice: "Boundary", quote: "Write one sentence that begins “I cannot continue with …” Keep it private if needed. A boundary can begin as a sentence to yourself.", contentKind: "original-practice", authorId: "presence-cards", inspirationResourceId: "mindful-of-race" },
    { id: "anger-05", deck: "anger", title: "The Old Rule", practice: "Non-retaliation", quote: "For hatred does not cease by hatred at any time: hatred ceases by love, this is an old rule.", contentKind: "quotation", authorId: "buddha", resourceId: "dhammapada-muller", source: { work: "The Dhammapada", editionOrTranslator: "trans. F. Max Müller, Sacred Books of the East, Vol. X", location: "Chapter I (Twin-Verses), verse 5", sourceUrl: "https://www.gutenberg.org/files/2017/2017-h/2017-h.htm", rightsBasis: "public-domain" } },
  ],
};
