import { describe, expect, it } from "vitest";
import { decks, deckCategories } from "./index";

describe("decks", () => {
  it("has fifteen decks", () => {
    expect(decks).toHaveLength(15);
  });

  it("gives every deck five cards", () => {
    for (const deck of decks) {
      expect(deck.cards, `${deck.id} should have 5 cards`).toHaveLength(5);
    }
  });

  it("gives every card in a deck a unique id scoped to that deck", () => {
    for (const deck of decks) {
      const ids = deck.cards.map((card) => card.id);
      expect(new Set(ids).size).toBe(ids.length);
    }
  });

  it("tags every card with the deck it belongs to", () => {
    for (const deck of decks) {
      expect(deck.cards.every((card) => card.deck === deck.id)).toBe(true);
    }
  });

  it("has no duplicate deck ids", () => {
    const ids = decks.map((deck) => deck.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe("deckCategories", () => {
  it("only references decks that exist", () => {
    const deckIds = new Set(decks.map((deck) => deck.id));
    for (const category of deckCategories) {
      for (const deckId of category.deckIds) {
        expect(deckIds.has(deckId), `${deckId} in ${category.id}`).toBe(true);
      }
    }
  });

  it("places every deck into exactly one category", () => {
    const categorized = deckCategories.flatMap((category) => category.deckIds);
    expect(categorized.sort()).toEqual(decks.map((deck) => deck.id).sort());
  });
});
