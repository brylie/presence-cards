import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { anxietyDeck } from "./data/decks";

const INTRO_SEEN_KEY = "presence-cards:intro-seen";

function statusText() {
  return screen.getByRole("status").textContent;
}

beforeEach(() => {
  window.localStorage.clear();
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("first-time visit", () => {
  it("shows the intro screen and announces it", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1, name: "Not a battle" })).toBeInTheDocument();
    expect(statusText()).toBe("About Presence Cards");
  });

  it("moves to check-in and remembers the intro was seen", async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole("button", { name: "Continue" }));

    expect(screen.getByRole("heading", { level: 1, name: "Presence Cards" })).toBeInTheDocument();
    expect(window.localStorage.getItem(INTRO_SEEN_KEY)).toBe("1");
  });
});

describe("returning visit", () => {
  it("skips straight to check-in when the intro was already seen", () => {
    window.localStorage.setItem(INTRO_SEEN_KEY, "1");
    render(<App />);
    expect(screen.getByRole("heading", { level: 1, name: "Presence Cards" })).toBeInTheDocument();
    expect(statusText()).toBe("Choose an experience");
  });
});

describe("navigation", () => {
  beforeEach(() => {
    window.localStorage.setItem(INTRO_SEEN_KEY, "1");
  });

  it("moves focus to each screen's heading on navigation", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: /Anxiety/ }));
    await waitFor(() =>
      expect(document.activeElement).toBe(screen.getByRole("heading", { level: 2, name: "Anxiety" })),
    );

    await user.click(screen.getByRole("button", { name: "Draw a card for me" }));
    await waitFor(() => expect(document.activeElement?.id).toBe("screen-heading"));
    expect(screen.getByRole("heading", { level: 1 })).toBe(document.activeElement);
  });

  it("goes from check-in to a deck and back", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: /Anxiety/ }));
    expect(screen.getByRole("heading", { level: 2, name: "Anxiety" })).toBeInTheDocument();
    expect(statusText()).toBe("Anxiety deck");

    await user.click(screen.getByRole("button", { name: /Back to check-in/ }));
    expect(screen.getByRole("heading", { level: 1, name: "Presence Cards" })).toBeInTheDocument();
  });

  it("shows the intro again from check-in's 'why' link", async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole("button", { name: "Why this isn't a battle" }));
    expect(screen.getByRole("heading", { level: 1, name: "Not a battle" })).toBeInTheDocument();
  });

  it("draws a specific card and announces its title", async () => {
    vi.spyOn(Math, "random").mockReturnValue(0);
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: /Anxiety/ }));
    await user.click(screen.getByRole("button", { name: "Draw a card for me" }));

    const heading = screen.getByRole("heading", { level: 1 });
    expect(screen.getByRole("button", { name: "Draw another card from this deck" })).toBeInTheDocument();
    expect(statusText()).toBe(heading.textContent);
  });

  it("lets you pick a card directly instead of drawing at random", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: /Anxiety/ }));
    const chosenCard = anxietyDeck.cards[0];
    await user.click(screen.getByRole("button", { name: new RegExp(chosenCard.title) }));

    expect(screen.getByRole("heading", { level: 1, name: chosenCard.title })).toBeInTheDocument();
  });

  it("returns to the deck and to check-in from the presence view", async () => {
    vi.spyOn(Math, "random").mockReturnValue(0);
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: /Anxiety/ }));
    await user.click(screen.getByRole("button", { name: "Draw a card for me" }));

    await user.click(screen.getByRole("button", { name: /Back to deck/ }));
    expect(screen.getByRole("heading", { level: 2, name: "Anxiety" })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Draw a card for me" }));
    await user.click(screen.getByRole("button", { name: "Choose another experience" }));
    expect(screen.getByRole("heading", { level: 1, name: "Presence Cards" })).toBeInTheDocument();
  });

  it("never draws the same card twice in a row", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: /Anxiety/ }));
    await user.click(screen.getByRole("button", { name: "Draw a card for me" }));

    let previousTitle = screen.getByRole("heading", { level: 1 }).textContent;
    for (let i = 0; i < 15; i++) {
      await user.click(screen.getByRole("button", { name: "Draw another card from this deck" }));
      const currentTitle = screen.getByRole("heading", { level: 1 }).textContent;
      expect(currentTitle).not.toBe(previousTitle);
      previousTitle = currentTitle;
    }
  });
});
