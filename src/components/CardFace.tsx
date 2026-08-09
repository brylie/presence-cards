import { authorsById, resourcesById } from "../data/catalog";
import type { PracticeCard } from "../data/decks";
import "./CardFace.css";

interface CardFaceProps {
  card: PracticeCard;
  /** Compact renders a small grid tile with no quote. Full is the presence view. */
  variant?: "compact" | "full";
  onClick?: () => void;
}

export function CardFace({ card, variant = "full", onClick }: CardFaceProps) {
  const Tag = onClick ? "button" : "div";
  const author = authorsById[card.authorId];
  const inspiration = card.inspirationResourceId
    ? resourcesById[card.inspirationResourceId]
    : undefined;
  const isOriginalPractice = card.contentKind === "original-practice";

  return (
    <Tag
      className={`card-face card-face--${variant}`}
      onClick={onClick}
      type={onClick ? "button" : undefined}
    >
      <div className="card-face__header">
        {variant === "full" ? (
          <h1 className="card-face__title" id="screen-heading" tabIndex={-1}>
            {card.title}
          </h1>
        ) : (
          <span className="card-face__title">{card.title}</span>
        )}
      </div>
      <div className="card-face__type-line">
        <span>Teaching · {card.practice}</span>
        <span className="card-face__ring-icon" aria-hidden="true" />
      </div>
      <div className="card-face__art">
        <span className="card-face__art-ring" aria-hidden="true" />
      </div>
      {variant === "full" && (
        <>
          <div className="card-face__rules">
            <p>{isOriginalPractice ? card.quote : <> &ldquo;{card.quote}&rdquo;</>}</p>
          </div>
          <div className="card-face__attribution">
            {isOriginalPractice ? (
              <p className="card-face__author">Original Presence Cards practice</p>
            ) : (
              <>
                <p className="card-face__author">
                  — {author?.homepageUrl ? (
                    <a href={author.homepageUrl} target="_blank" rel="noreferrer">
                      {author.name} <span aria-hidden="true">↗</span>
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : (
                    author?.name ?? "Unknown author"
                  )}
                </p>
                {card.source ? (
                  <p className="card-face__source">
                    <a href={card.source.sourceUrl} target="_blank" rel="noreferrer">
                      {card.source.work} <span aria-hidden="true">↗</span>
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                    <br />
                    {card.source.editionOrTranslator} · {card.source.location}
                    <br />
                    Verified public-domain quotation ({card.source.rightsBasis.replaceAll("-", " ")}).
                  </p>
                ) : (
                  <p className="card-face__source">Source details are unavailable.</p>
                )}
              </>
            )}
            {isOriginalPractice && inspiration && (
              <p className="card-face__source">
                Further reading: {inspiration.url ? (
                  <a href={inspiration.url} target="_blank" rel="noreferrer">
                    {inspiration.title} <span aria-hidden="true">↗</span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : inspiration.title}
              </p>
            )}
          </div>
        </>
      )}
      <div className="card-face__footer">
        <span>PRESENCE CARDS</span>
      </div>
    </Tag>
  );
}
