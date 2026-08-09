import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CardFace } from "./CardFace";
import type { PracticeCard } from "../data/decks";

const originalPractice: PracticeCard = {
  id: "test-original",
  deck: "anger",
  title: "Name the Weather",
  practice: "Noticing",
  quote: "Complete this sentence without fixing it: \"Anger is here, and it feels like …\"",
  contentKind: "original-practice",
  authorId: "presence-cards",
  inspirationResourceId: "emotional-agility",
};

const quotationWithHomepage: PracticeCard = {
  id: "test-quotation-homepage",
  deck: "rest",
  title: "Rest as Devotion",
  practice: "Stillness",
  quote: "Rest is not a reward. It is a right.",
  contentKind: "quotation",
  authorId: "tara-brach",
  source: {
    work: "Radical Acceptance",
    editionOrTranslator: "First edition",
    location: "Chapter 3",
    sourceUrl: "https://example.com/radical-acceptance",
    rightsBasis: "public-domain",
  },
};

const quotationWithoutHomepage: PracticeCard = {
  id: "test-quotation-no-homepage",
  deck: "anger",
  title: "The Old Rule",
  practice: "Non-retaliation",
  quote: "Hatred does not cease by hatred.",
  contentKind: "quotation",
  authorId: "buddha",
  source: {
    work: "The Dhammapada",
    editionOrTranslator: "trans. F. Max Müller",
    location: "Chapter I, verse 5",
    sourceUrl: "https://example.com/dhammapada",
    rightsBasis: "public-domain",
  },
};

const quotationWithoutSource: PracticeCard = {
  id: "test-quotation-no-source",
  deck: "anger",
  title: "Untitled Quote",
  practice: "Reflection",
  quote: "A quote with no recorded source.",
  contentKind: "quotation",
  authorId: "unknown-author-id",
};

describe("CardFace compact variant", () => {
  it("renders the title as plain text, not a heading", () => {
    render(<CardFace card={originalPractice} variant="compact" />);
    expect(screen.queryByRole("heading")).not.toBeInTheDocument();
    expect(screen.getByText("Name the Weather")).toBeInTheDocument();
  });

  it("renders as a non-interactive div when no onClick is given", () => {
    const { container } = render(<CardFace card={originalPractice} variant="compact" />);
    expect(container.querySelector("button")).not.toBeInTheDocument();
    expect(container.querySelector("div.card-face")).toBeInTheDocument();
  });

  it("renders as a button and fires onClick when a handler is given", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<CardFace card={originalPractice} variant="compact" onClick={onClick} />);
    await user.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("does not render the quote or attribution in compact variant", () => {
    render(<CardFace card={quotationWithHomepage} variant="compact" />);
    expect(screen.queryByText(/Rest is not a reward/)).not.toBeInTheDocument();
  });
});

describe("CardFace full variant — original practice", () => {
  it("renders the title as an h1 focus target", () => {
    render(<CardFace card={originalPractice} variant="full" />);
    const heading = screen.getByRole("heading", { level: 1, name: "Name the Weather" });
    expect(heading).toHaveAttribute("id", "screen-heading");
    expect(heading).toHaveAttribute("tabIndex", "-1");
  });

  it("renders the quote without curly quotes", () => {
    render(<CardFace card={originalPractice} variant="full" />);
    expect(screen.getByText(/Complete this sentence without fixing it/)).toBeInTheDocument();
  });

  it("credits the practice as an original Presence Cards practice", () => {
    render(<CardFace card={originalPractice} variant="full" />);
    expect(screen.getByText("Original Presence Cards practice")).toBeInTheDocument();
  });

  it("shows further reading when an inspiration resource exists", () => {
    render(<CardFace card={originalPractice} variant="full" />);
    const link = screen.getByRole("link", { name: /Emotional Agility/ });
    expect(link).toHaveAttribute("href", expect.stringContaining("susandavid.com"));
  });

  it("shows no further-reading line when there is no inspiration resource", () => {
    const card: PracticeCard = { ...originalPractice, inspirationResourceId: undefined };
    render(<CardFace card={card} variant="full" />);
    expect(screen.queryByText(/Further reading/)).not.toBeInTheDocument();
  });
});

describe("CardFace full variant — quotation", () => {
  it("wraps the quote in curly quotes", () => {
    render(<CardFace card={quotationWithHomepage} variant="full" />);
    expect(screen.getByText(/“Rest is not a reward\. It is a right\.”/)).toBeInTheDocument();
  });

  it("links the author name when a homepage is known", () => {
    render(<CardFace card={quotationWithHomepage} variant="full" />);
    const link = screen.getByRole("link", { name: /Tara Brach/ });
    expect(link).toHaveAttribute("href", "https://www.tarabrach.com/");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noreferrer");
  });

  it("shows the author's plain name when there is no homepage", () => {
    render(<CardFace card={quotationWithoutHomepage} variant="full" />);
    expect(screen.getByText(/Attributed to the Buddha/)).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /Attributed to the Buddha/ })).not.toBeInTheDocument();
  });

  it("falls back to 'Unknown author' for an unrecognized authorId", () => {
    render(<CardFace card={quotationWithoutSource} variant="full" />);
    expect(screen.getByText(/Unknown author/)).toBeInTheDocument();
  });

  it("renders full source provenance when present", () => {
    render(<CardFace card={quotationWithHomepage} variant="full" />);
    expect(screen.getByRole("link", { name: /Radical Acceptance/ })).toHaveAttribute(
      "href",
      "https://example.com/radical-acceptance",
    );
    expect(screen.getByText(/First edition/)).toBeInTheDocument();
    expect(screen.getByText(/Chapter 3/)).toBeInTheDocument();
    expect(screen.getByText(/public domain/)).toBeInTheDocument();
  });

  it("shows a fallback message when source is missing", () => {
    render(<CardFace card={quotationWithoutSource} variant="full" />);
    expect(screen.getByText("Source details are unavailable.")).toBeInTheDocument();
  });
});
