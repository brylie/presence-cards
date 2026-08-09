import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EmotionCheckIn } from "./EmotionCheckIn";
import { decks } from "../data/decks";

describe("EmotionCheckIn", () => {
  it("renders the focus-target heading and every category", () => {
    render(<EmotionCheckIn decks={decks} onSelect={vi.fn()} onShowIntro={vi.fn()} />);
    const heading = screen.getByRole("heading", { level: 1, name: "Presence Cards" });
    expect(heading).toHaveAttribute("id", "screen-heading");
    expect(screen.getByRole("heading", { name: "Feelings" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "In-between times" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "What we need" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Connection & aliveness" })).toBeInTheDocument();
  });

  it("calls onSelect with the chosen deck id", async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(<EmotionCheckIn decks={decks} onSelect={onSelect} onShowIntro={vi.fn()} />);
    await user.click(screen.getByRole("button", { name: /Anxiety/ }));
    expect(onSelect).toHaveBeenCalledWith("anxiety");
  });

  it("calls onShowIntro when the 'why' link is clicked", async () => {
    const user = userEvent.setup();
    const onShowIntro = vi.fn();
    render(<EmotionCheckIn decks={decks} onSelect={vi.fn()} onShowIntro={onShowIntro} />);
    await user.click(screen.getByRole("button", { name: "Why this isn't a battle" }));
    expect(onShowIntro).toHaveBeenCalledTimes(1);
  });

  it("skips a category's deck button when the deck isn't in the given list", () => {
    const decksWithoutRest = decks.filter((deck) => deck.id !== "rest");
    render(<EmotionCheckIn decks={decksWithoutRest} onSelect={vi.fn()} onShowIntro={vi.fn()} />);
    expect(screen.queryByRole("button", { name: /^Rest/ })).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Overwhelm/ })).toBeInTheDocument();
  });
});
