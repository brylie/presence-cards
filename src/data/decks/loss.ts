import type { PresenceDeck } from "./types";

export const lossDeck: PresenceDeck = {
  id: "loss",
  label: "Loss",
  prompt: "When something loved is gone or changing beyond recognition.",
  cards: [
    { id: "loss-01", deck: "loss", title: "Say What Changed", practice: "Witness", quote: "Say the name of what changed. You do not need to explain it, improve it, or make anyone else comfortable with its weight.", contentKind: "original-practice", authorId: "presence-cards", inspirationResourceId: "its-ok-that-youre-not-ok" },
    { id: "loss-02", deck: "loss", title: "Keep One Thread", practice: "Remembering", quote: "Choose one small way to keep connection with what matters: a story, a photograph, a ritual, a place, or a person who remembers too.", contentKind: "original-practice", authorId: "presence-cards" },
    { id: "loss-03", deck: "loss", title: "No Correct Pace", practice: "Gentleness", quote: "There is no correct pace for missing what mattered. Let today be the day it is, without measuring it against anyone else’s timeline.", contentKind: "original-practice", authorId: "presence-cards", inspirationResourceId: "its-ok-that-youre-not-ok" },
    { id: "loss-04", deck: "loss", title: "Company, Not Answers", practice: "Connection", quote: "If reaching out feels possible, ask someone for company rather than solutions. A simple “Can you sit with me?” is enough.", contentKind: "original-practice", authorId: "presence-cards", inspirationResourceId: "kate-bowler-books" },
    { id: "loss-05", deck: "loss", title: "Sweet Silent Thought", practice: "Remembering", quote: "When to the sessions of sweet silent thought / I summon up remembrance of things past,", contentKind: "quotation", authorId: "william-shakespeare", resourceId: "shakespeare-sonnets", source: { work: "The Sonnets", editionOrTranslator: "Project Gutenberg eBook 1041", location: "Sonnet 30, lines 1–2", sourceUrl: "https://www.gutenberg.org/cache/epub/1041/pg1041-images.html", rightsBasis: "public-domain" } },
  ],
};
