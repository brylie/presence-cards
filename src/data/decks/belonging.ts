import type { PresenceDeck } from "./types";

export const belongingDeck: PresenceDeck = {
  id: "belonging",
  label: "Belonging",
  prompt: "When you want to feel less alone, more connected, or more at home with yourself.",
  cards: [
    { id: "belonging-01", deck: "belonging", title: "One True Contact", practice: "Reach out", quote: "Choose one person who feels reasonably safe. Send a simple, low-stakes note: thinking of you, no need to reply quickly.", contentKind: "original-practice", authorId: "presence-cards" },
    { id: "belonging-02", deck: "belonging", title: "A Place to Arrive", practice: "Grounding", quote: "Look around and name three things that make this place more yours: a sound, a color, a familiar object, or the ground beneath you.", contentKind: "original-practice", authorId: "presence-cards" },
    { id: "belonging-03", deck: "belonging", title: "No Performance", practice: "Permission", quote: "For one small interaction today, let yourself be ordinary. You do not need to be especially useful, impressive, or easy to deserve company.", contentKind: "original-practice", authorId: "presence-cards" },
    { id: "belonging-04", deck: "belonging", title: "Shared World", practice: "Attention", quote: "Notice one living thing sharing your day: a person, tree, bird, animal, or plant. Let its presence be company without asking anything of it.", contentKind: "original-practice", authorId: "presence-cards" },
    { id: "belonging-05", deck: "belonging", title: "Care Has a Shape", practice: "Connection", quote: "Ask yourself: what kind of care would help me feel accompanied right now? Make the answer small enough to receive or offer.", contentKind: "original-practice", authorId: "presence-cards", inspirationResourceId: "all-about-love" },
  ],
};
