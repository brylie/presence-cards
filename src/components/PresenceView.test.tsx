import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PresenceView } from "./PresenceView";
import { angerDeck } from "../data/decks";

const card = angerDeck.cards[0];

describe("PresenceView", () => {
  it("renders the card as the focus-target heading", () => {
    render(
      <PresenceView card={card} onDrawAnother={vi.fn()} onBackToDeck={vi.fn()} onBackToCheckIn={vi.fn()} />,
    );
    const heading = screen.getByRole("heading", { level: 1, name: card.title });
    expect(heading).toHaveAttribute("id", "screen-heading");
  });

  it("shows the no-timer reassurance", () => {
    render(
      <PresenceView card={card} onDrawAnother={vi.fn()} onBackToDeck={vi.fn()} onBackToCheckIn={vi.fn()} />,
    );
    expect(screen.getByText(/There's no timer/)).toBeInTheDocument();
  });

  it("calls onBackToDeck, onBackToCheckIn, and onDrawAnother from their buttons", async () => {
    const user = userEvent.setup();
    const onDrawAnother = vi.fn();
    const onBackToDeck = vi.fn();
    const onBackToCheckIn = vi.fn();
    render(
      <PresenceView
        card={card}
        onDrawAnother={onDrawAnother}
        onBackToDeck={onBackToDeck}
        onBackToCheckIn={onBackToCheckIn}
      />,
    );

    await user.click(screen.getByRole("button", { name: /Back to deck/ }));
    expect(onBackToDeck).toHaveBeenCalledTimes(1);

    await user.click(screen.getByRole("button", { name: "Choose another experience" }));
    expect(onBackToCheckIn).toHaveBeenCalledTimes(1);

    await user.click(screen.getByRole("button", { name: "Draw another card from this deck" }));
    expect(onDrawAnother).toHaveBeenCalledTimes(1);
  });
});
