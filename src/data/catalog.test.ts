import { describe, expect, it } from "vitest";
import { authorsById, resourcesById, resourcesForDeck } from "./catalog";

describe("resourcesForDeck", () => {
  it("returns only resources tagged with the given deck", () => {
    const result = resourcesForDeck("boundaries");
    expect(result.map((r) => r.id).sort()).toEqual(
      ["all-about-love", "set-boundaries-find-peace"].sort(),
    );
  });

  it("returns a single-item list for a lightly-linked deck", () => {
    const result = resourcesForDeck("belonging");
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("all-about-love");
  });

  it("does not include resources tagged for other decks", () => {
    const result = resourcesForDeck("joy-and-delight");
    expect(result.every((r) => r.deckIds.includes("joy-and-delight"))).toBe(true);
    expect(result.some((r) => r.id === "four-thousand-weeks")).toBe(false);
  });
});

describe("authorsById", () => {
  it("indexes every author by id", () => {
    expect(authorsById["tara-brach"]?.name).toBe("Tara Brach");
    expect(authorsById["presence-cards"]?.name).toBe("Presence Cards");
  });

  it("has no entry for an unknown id", () => {
    expect(authorsById["not-a-real-author"]).toBeUndefined();
  });
});

describe("resourcesById", () => {
  it("indexes every resource by id", () => {
    expect(resourcesById["four-thousand-weeks"]?.title).toBe("Four Thousand Weeks");
  });
});
