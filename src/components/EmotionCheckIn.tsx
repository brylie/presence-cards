import { deckCategories } from "../data/decks";
import type { DeckId, PresenceDeck } from "../data/decks";
import "./EmotionCheckIn.css";

interface EmotionCheckInProps {
  decks: PresenceDeck[];
  onSelect: (id: DeckId) => void;
  onShowIntro: () => void;
}

export function EmotionCheckIn({ decks, onSelect, onShowIntro }: EmotionCheckInProps) {
  const decksById = new Map(decks.map((deck) => [deck.id, deck]));

  return (
    <div className="check-in">
      <h1 id="screen-heading" tabIndex={-1}>Presence Cards</h1>
      <p className="check-in__prompt">What are you experiencing right now?</p>
      <div className="check-in__categories">
        {deckCategories.map((category) => (
          <section key={category.id} className="check-in__category" aria-labelledby={`category-${category.id}`}>
            <h2 id={`category-${category.id}`}>{category.label}</h2>
            <p>{category.description}</p>
            <div className="check-in__grid">
              {category.deckIds.map((deckId) => {
                const deck = decksById.get(deckId);
                if (!deck) return null;
                return (
                  <button
                    key={deck.id}
                    className="check-in__button"
                    onClick={() => onSelect(deck.id)}
                  >
                    <span className="check-in__label">{deck.label}</span>
                    <span className="check-in__desc">{deck.prompt}</span>
                  </button>
                );
              })}
            </div>
          </section>
        ))}
      </div>
      <p className="check-in__note">
        Choose one. You'll be given a deck of cards for it — hold one card
        and stay with the feeling rather than pushing it away.
      </p>
      <button className="check-in__about" onClick={onShowIntro}>
        Why this isn't a battle
      </button>
    </div>
  );
}
