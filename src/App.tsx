import { useEffect, useMemo, useState } from "react";
import { decks } from "./data/decks";
import type { DeckId, PracticeCard } from "./data/decks";
import { IntroScreen } from "./components/IntroScreen";
import { EmotionCheckIn } from "./components/EmotionCheckIn";
import { DeckView } from "./components/DeckView";
import { PresenceView } from "./components/PresenceView";

const INTRO_SEEN_KEY = "presence-cards:intro-seen";

type Screen =
  | { name: "intro" }
  | { name: "checkin" }
  | { name: "deck"; emotion: DeckId }
  | { name: "presence"; card: PracticeCard };

function hasSeenIntro(): boolean {
  try {
    return window.localStorage.getItem(INTRO_SEEN_KEY) === "1";
  } catch {
    return false;
  }
}

function markIntroSeen() {
  try {
    window.localStorage.setItem(INTRO_SEEN_KEY, "1");
  } catch {
    // localStorage may be unavailable (e.g. private browsing); the intro
    // will just show again next time, which is a fine fallback.
  }
}

function pickRandomCard(cards: PracticeCard[], excludeId?: string): PracticeCard | null {
  if (cards.length === 0) return null;
  const pool = excludeId && cards.length > 1 ? cards.filter((card) => card.id !== excludeId) : cards;
  return pool[Math.floor(Math.random() * pool.length)];
}

function App() {
  const [screen, setScreen] = useState<Screen>(() =>
    hasSeenIntro() ? { name: "checkin" } : { name: "intro" },
  );

  const activeDeck = useMemo(() => {
    if (screen.name === "deck") {
      return decks.find((d) => d.id === screen.emotion) ?? null;
    }
    return null;
  }, [screen]);

  const screenKey =
    screen.name === "deck"
      ? `deck:${screen.emotion}`
      : screen.name === "presence"
        ? `presence:${screen.card.id}`
        : screen.name;

  const announcement = useMemo(() => {
    switch (screen.name) {
      case "intro":
        return "About Presence Cards";
      case "checkin":
        return "Choose an experience";
      case "deck":
        return activeDeck ? `${activeDeck.label} deck` : "Deck";
      case "presence":
        return screen.card.title;
      default:
        return "";
    }
  }, [screen, activeDeck]);

  useEffect(() => {
    document.getElementById("screen-heading")?.focus();
  }, [screenKey]);

  function renderScreen() {
    if (screen.name === "intro") {
      return (
        <IntroScreen
          onContinue={() => {
            markIntroSeen();
            setScreen({ name: "checkin" });
          }}
        />
      );
    }

    if (screen.name === "checkin") {
      return (
        <EmotionCheckIn
          decks={decks}
          onSelect={(emotion) => setScreen({ name: "deck", emotion })}
          onShowIntro={() => setScreen({ name: "intro" })}
        />
      );
    }

    if (screen.name === "deck" && activeDeck) {
      return (
        <DeckView
          deck={activeDeck}
          onPick={(card) => setScreen({ name: "presence", card })}
          onDrawRandom={() => {
            const card = pickRandomCard(activeDeck.cards);
            if (card) setScreen({ name: "presence", card });
          }}
          onBack={() => setScreen({ name: "checkin" })}
        />
      );
    }

    if (screen.name === "presence") {
      const deckForCard = decks.find((d) => d.id === screen.card.deck);
      return (
        <PresenceView
          card={screen.card}
          onDrawAnother={() => {
            if (!deckForCard) return;
            const card = pickRandomCard(deckForCard.cards, screen.card.id);
            if (card) setScreen({ name: "presence", card });
          }}
          onBackToDeck={() => setScreen({ name: "deck", emotion: screen.card.deck })}
          onBackToCheckIn={() => setScreen({ name: "checkin" })}
        />
      );
    }

    return null;
  }

  return (
    <>
      <div className="sr-only" aria-live="polite" role="status">
        {announcement}
      </div>
      {renderScreen()}
    </>
  );
}

export default App;
