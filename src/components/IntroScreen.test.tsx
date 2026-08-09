import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { IntroScreen } from "./IntroScreen";

describe("IntroScreen", () => {
  it("renders the focus-target heading", () => {
    render(<IntroScreen onContinue={vi.fn()} />);
    const heading = screen.getByRole("heading", { level: 1, name: "Not a battle" });
    expect(heading).toHaveAttribute("id", "screen-heading");
  });

  it("shows the professional-care disclaimer", () => {
    render(<IntroScreen onContinue={vi.fn()} />);
    expect(
      screen.getByText("Support tool only — not a substitute for professional care."),
    ).toBeInTheDocument();
  });

  it("calls onContinue when Continue is clicked", async () => {
    const user = userEvent.setup();
    const onContinue = vi.fn();
    render(<IntroScreen onContinue={onContinue} />);
    await user.click(screen.getByRole("button", { name: "Continue" }));
    expect(onContinue).toHaveBeenCalledTimes(1);
  });
});
