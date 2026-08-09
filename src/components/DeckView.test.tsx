import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DeckView } from "./DeckView";
import { angerDeck } from "../data/decks";

describe("DeckView", () => {
  it("renders the deck heading and prompt", () => {
    render(<DeckView deck={angerDeck} onPick={vi.fn()} onDrawRandom={vi.fn()} onBack={vi.fn()} />);
    const heading = screen.getByRole("heading", { level: 2, name: "Anger" });
    expect(heading).toHaveAttribute("id", "screen-heading");
    expect(screen.getByText(angerDeck.prompt)).toBeInTheDocument();
  });

  it("calls onBack when the back link is clicked", async () => {
    const user = userEvent.setup();
    const onBack = vi.fn();
    render(<DeckView deck={angerDeck} onPick={vi.fn()} onDrawRandom={vi.fn()} onBack={onBack} />);
    await user.click(screen.getByRole("button", { name: /Back to check-in/ }));
    expect(onBack).toHaveBeenCalledTimes(1);
  });

  it("calls onDrawRandom when 'Draw a card for me' is clicked", async () => {
    const user = userEvent.setup();
    const onDrawRandom = vi.fn();
    render(<DeckView deck={angerDeck} onPick={vi.fn()} onDrawRandom={onDrawRandom} onBack={vi.fn()} />);
    await user.click(screen.getByRole("button", { name: "Draw a card for me" }));
    expect(onDrawRandom).toHaveBeenCalledTimes(1);
  });

  it("calls onPick with the chosen card when a card tile is clicked", async () => {
    const user = userEvent.setup();
    const onPick = vi.fn();
    render(<DeckView deck={angerDeck} onPick={onPick} onDrawRandom={vi.fn()} onBack={vi.fn()} />);
    await user.click(screen.getByRole("button", { name: new RegExp(angerDeck.cards[0].title) }));
    expect(onPick).toHaveBeenCalledWith(angerDeck.cards[0]);
  });

  it("toggles the Explore further resource list open and closed", async () => {
    const user = userEvent.setup();
    render(<DeckView deck={angerDeck} onPick={vi.fn()} onDrawRandom={vi.fn()} onBack={vi.fn()} />);

    const toggle = screen.getByRole("button", { name: "Explore further" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("heading", { name: "Explore further" })).not.toBeInTheDocument();

    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("heading", { name: "Explore further" })).toBeInTheDocument();
    // Resource with an author and no rights note.
    expect(screen.getByText(/Susan David/)).toBeInTheDocument();
    // Resource with no authorId at all.
    expect(screen.getByRole("link", { name: /Mindful of Race/ })).toBeInTheDocument();
    // Resource with a rights note.
    expect(screen.getByText(/Project Gutenberg marks this edition public domain/)).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Close further exploration" }));
    expect(screen.queryByRole("heading", { name: "Explore further" })).not.toBeInTheDocument();
  });
});
