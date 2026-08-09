import { useState } from "react";
import { authorsById, resourcesForDeck } from "../data/catalog";
import type { PresenceDeck, PracticeCard } from "../data/decks";
import { CardFace } from "./CardFace";
import "./DeckView.css";

interface DeckViewProps {
  deck: PresenceDeck;
  onPick: (card: PracticeCard) => void;
  onDrawRandom: () => void;
  onBack: () => void;
}

export function DeckView({ deck, onPick, onDrawRandom, onBack }: DeckViewProps) {
  const [isExploring, setIsExploring] = useState(false);
  const resources = resourcesForDeck(deck.id);

  return (
    <div className="deck-view">
      <button className="deck-view__back" onClick={onBack}>
        ← Back to check-in
      </button>
      <h2 id="screen-heading" tabIndex={-1}>{deck.label}</h2>
      <p className="deck-view__prompt">{deck.prompt}</p>
      <button className="deck-view__draw" onClick={onDrawRandom}>
        Draw a card for me
      </button>
      {resources.length > 0 && (
        <button
          className="deck-view__explore-toggle"
          onClick={() => setIsExploring((isOpen) => !isOpen)}
          aria-expanded={isExploring}
          aria-controls={`resources-${deck.id}`}
        >
          {isExploring ? "Close further exploration" : "Explore further"}
        </button>
      )}
      {isExploring && (
        <section
          className="deck-view__resources"
          id={`resources-${deck.id}`}
          aria-labelledby={`resources-heading-${deck.id}`}
        >
          <h3 id={`resources-heading-${deck.id}`}>Explore further</h3>
          <p>
            Optional reading and practices related to {deck.label.toLowerCase()}.
            Your card stands on its own.
          </p>
          <ul>
            {resources.map((resource) => {
              const author = resource.authorId ? authorsById[resource.authorId] : undefined;
              return (
                <li key={resource.id}>
                  <a href={resource.url} target="_blank" rel="noreferrer">
                    {resource.title} <span aria-hidden="true">↗</span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                  <span className="deck-view__resource-meta">
                    {author?.name ? ` · ${author.name}` : ""}
                    {resource.access ? ` · ${resource.access.replaceAll("-", " ")}` : ""}
                  </span>
                  <p>{resource.description}</p>
                  {resource.rightsNote && <p className="deck-view__rights-note">{resource.rightsNote}</p>}
                </li>
              );
            })}
          </ul>
        </section>
      )}
      <p className="deck-view__or">or choose one directly</p>
      <div className="deck-view__grid">
        {deck.cards.map((card) => (
          <CardFace
            key={card.id}
            card={card}
            variant="compact"
            onClick={() => onPick(card)}
          />
        ))}
      </div>
    </div>
  );
}
