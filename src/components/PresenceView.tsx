import type { PracticeCard } from "../data/decks";
import { CardFace } from "./CardFace";
import "./PresenceView.css";

interface PresenceViewProps {
  card: PracticeCard;
  onDrawAnother: () => void;
  onBackToDeck: () => void;
  onBackToCheckIn: () => void;
}

export function PresenceView({ card, onDrawAnother, onBackToDeck, onBackToCheckIn }: PresenceViewProps) {
  return (
    <div className="presence-view">
      <div className="presence-view__navigation">
        <button className="presence-view__back" onClick={onBackToDeck}>
          ← Back to deck
        </button>
        <button className="presence-view__checkin" onClick={onBackToCheckIn}>
          Choose another experience
        </button>
      </div>
      <div className="presence-view__pulse" aria-hidden="true" />
      <CardFace card={card} variant="full" />
      <p className="presence-view__cue">
        Stay with this for as long as it helps. There's no timer — read it
        again if you want to, or just breathe.
      </p>
      <div className="presence-view__actions">
        <button className="presence-view__draw" onClick={onDrawAnother}>
          Draw another card from this deck
        </button>
      </div>
    </div>
  );
}
