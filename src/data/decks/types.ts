export type ContentKind = "quotation" | "original-practice";

/** A deck can name an emotion or a broader human experience. */
export type DeckId =
  | "uncertainty"
  | "anxiety"
  | "anger"
  | "sadness"
  | "fear"
  | "waiting"
  | "loss"
  | "change"
  | "enoughness"
  | "beginning-again"
  | "rest"
  | "belonging"
  | "overwhelm"
  | "boundaries"
  | "joy-and-delight";

interface PracticeCardBase {
  id: string;
  deck: DeckId;
  title: string;
  practice: string;
  /** The complete, self-contained invitation or exact verified quotation. */
  quote: string;
  authorId: string;
  resourceId?: string;
  /** Further reading for an original Presence Cards practice. */
  inspirationResourceId?: string;
}

export interface OriginalPracticeCard extends PracticeCardBase {
  contentKind: "original-practice";
}

export interface QuotationCard extends PracticeCardBase {
  contentKind: "quotation";
  /** Required provenance for every exact quotation, per research/sources.md. */
  source: QuotationSource;
}

export type PracticeCard = OriginalPracticeCard | QuotationCard;

export interface QuotationSource {
  work: string;
  editionOrTranslator: string;
  location: string;
  sourceUrl: string;
  rightsBasis: "public-domain";
}

export interface PresenceDeck {
  id: DeckId;
  label: string;
  prompt: string;
  cards: PracticeCard[];
}
