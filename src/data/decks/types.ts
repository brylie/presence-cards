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

export interface PracticeCard {
  id: string;
  deck: DeckId;
  title: string;
  practice: string;
  /** The complete, self-contained invitation or exact verified quotation. */
  quote: string;
  contentKind: ContentKind;
  authorId: string;
  resourceId?: string;
  /** Further reading for an original Presence Cards practice. */
  inspirationResourceId?: string;
  /** Required provenance for every exact quotation. */
  source?: QuotationSource;
}

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
