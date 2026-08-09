import type { DeckId } from "./decks/types";

export interface Author {
  id: string;
  name: string;
  homepageUrl?: string;
  lens?: string;
}

export type ResourceKind =
  | "book"
  | "article"
  | "talk"
  | "practice"
  | "organization"
  | "public-domain-reading";

export interface Resource {
  id: string;
  title: string;
  kind: ResourceKind;
  authorId?: string;
  deckIds: DeckId[];
  url: string;
  access?: "read-online" | "borrow-or-buy" | "watch-or-listen" | "learn-more";
  description: string;
  /** A brief note for public-domain texts or context-sensitive material. */
  rightsNote?: string;
}

export const authors: Author[] = [
  { id: "presence-cards", name: "Presence Cards" },
  { id: "lao-tze", name: "Lao-Tze", lens: "Taoist" },
  { id: "buddha", name: "Attributed to the Buddha", lens: "Buddhist" },
  { id: "rabindranath-tagore", name: "Rabindranath Tagore", lens: "Bengali devotional poetry" },
  { id: "william-shakespeare", name: "William Shakespeare", lens: "English poetry" },
  { id: "emily-dickinson", name: "Emily Dickinson", lens: "American poetry" },
  { id: "pema-chodron", name: "Pema Chödrön", homepageUrl: "https://pemachodronfoundation.org/", lens: "Tibetan Buddhist" },
  { id: "susan-david", name: "Susan David", homepageUrl: "https://www.susandavid.com/", lens: "Psychological" },
  { id: "tara-brach", name: "Tara Brach", homepageUrl: "https://www.tarabrach.com/", lens: "Buddhist and psychological" },
  { id: "kristin-neff", name: "Kristin Neff", homepageUrl: "https://self-compassion.org/", lens: "Self-compassion research" },
  { id: "kaira-jewel-lingo", name: "Kaira Jewel Lingo", homepageUrl: "https://www.kairajewel.com/", lens: "Buddhist and socially engaged practice" },
  { id: "tricia-hersey", name: "Tricia Hersey", homepageUrl: "https://thenapministry.wordpress.com/", lens: "Rest and liberation" },
  { id: "resmaa-menakem", name: "Resmaa Menakem", homepageUrl: "https://resmaa.com/", lens: "Body-centered and racialized trauma work" },
  { id: "megan-devine", name: "Megan Devine", homepageUrl: "https://refugeingrief.com/", lens: "Grief support" },
  { id: "thomas-kelly", name: "Thomas Kelly", lens: "Quaker contemplative" },
  { id: "bell-hooks", name: "bell hooks", lens: "Love and community" },
  { id: "oliver-burkeman", name: "Oliver Burkeman", lens: "Time and limitation" },
  { id: "nedra-glover-tawwab", name: "Nedra Glover Tawwab", lens: "Boundaries and relationships" },
  { id: "ross-gay", name: "Ross Gay", lens: "Delight and attention" },
];

export const resources: Resource[] = [
  { id: "tao-te-ching-legge", title: "Tao Te Ching", kind: "public-domain-reading", authorId: "lao-tze", deckIds: ["uncertainty", "change", "enoughness", "rest"], url: "https://www.gutenberg.org/ebooks/216", access: "read-online", description: "A public-domain edition of James Legge's 1891 translation; its Taoist context is retained in quotation cards.", rightsNote: "Project Gutenberg marks this edition public domain in the United States." },
  { id: "dhammapada-muller", title: "The Dhammapada", kind: "public-domain-reading", authorId: "buddha", deckIds: ["anxiety", "anger", "fear", "beginning-again"], url: "https://www.gutenberg.org/ebooks/2017", access: "read-online", description: "A public-domain edition of F. Max Müller's translation, offered as a Buddhist source text.", rightsNote: "Project Gutenberg marks this edition public domain in the United States." },
  { id: "gitanjali-tagore", title: "Gitanjali (Song Offerings)", kind: "public-domain-reading", authorId: "rabindranath-tagore", deckIds: ["uncertainty", "waiting", "sadness", "enoughness", "rest"], url: "https://www.gutenberg.org/ebooks/7164", access: "read-online", description: "Tagore's devotional poetry in the public-domain 1912 English edition.", rightsNote: "Project Gutenberg marks this edition public domain in the United States." },
  { id: "shakespeare-sonnets", title: "Shakespeare's Sonnets", kind: "public-domain-reading", authorId: "william-shakespeare", deckIds: ["sadness", "loss"], url: "https://www.gutenberg.org/ebooks/1041", access: "read-online", description: "A public-domain collection of sonnets with language for remembrance and fleetingness.", rightsNote: "Project Gutenberg marks this edition public domain in the United States." },
  { id: "dickinson-poems", title: "Poems by Emily Dickinson", kind: "public-domain-reading", authorId: "emily-dickinson", deckIds: ["anxiety", "fear", "waiting", "loss"], url: "https://www.gutenberg.org/ebooks/12242", access: "read-online", description: "An early edited public-domain edition; its punctuation and editorial choices belong to that edition.", rightsNote: "Project Gutenberg marks this edition public domain in the United States." },
  { id: "comfortable-with-uncertainty", title: "Comfortable with Uncertainty", kind: "book", authorId: "pema-chodron", deckIds: ["uncertainty", "fear"], url: "https://pemachodronfoundation.org/product/comfortable-with-uncertainty-book/", access: "borrow-or-buy", description: "A contemporary Buddhist book related to meeting groundlessness; linked for optional reading only." },
  { id: "emotional-agility", title: "Emotional Agility", kind: "book", authorId: "susan-david", deckIds: ["anxiety", "anger", "change"], url: "https://www.susandavid.com/book/", access: "borrow-or-buy", description: "A contemporary book about values-guided responses to emotions; no text from it is reproduced here." },
  { id: "radical-acceptance", title: "Radical Acceptance", kind: "book", authorId: "tara-brach", deckIds: ["anxiety", "beginning-again"], url: "https://www.tarabrach.com/books/radical-acceptance/", access: "borrow-or-buy", description: "A contemporary book exploring compassion and inner experience; offered as optional reading." },
  { id: "self-compassion", title: "Self-Compassion", kind: "book", authorId: "kristin-neff", deckIds: ["sadness", "enoughness", "beginning-again"], url: "https://self-compassion.org/the-book/", access: "borrow-or-buy", description: "A contemporary introduction to self-compassion research and practice." },
  { id: "self-compassion-practices", title: "Self-Compassion Exercises", kind: "practice", authorId: "kristin-neff", deckIds: ["anxiety", "sadness", "enoughness"], url: "https://self-compassion.org/self-compassion-practices/#self-compassion-exercises", access: "read-online", description: "Optional guided exercises from the Center for Mindful Self-Compassion." },
  { id: "we-were-made-for-these-times", title: "We Were Made for These Times", kind: "book", authorId: "kaira-jewel-lingo", deckIds: ["waiting", "loss", "change"], url: "https://www.parallax.org/product/we-were-made-for-these-times/", access: "borrow-or-buy", description: "A contemporary Buddhist book about practice amid collective difficulty." },
  { id: "rest-is-resistance", title: "Rest Is Resistance", kind: "book", authorId: "tricia-hersey", deckIds: ["rest", "enoughness"], url: "https://www.littlebrown.com/titles/tricia-hersey/rest-is-resistance/9780316365215/", access: "borrow-or-buy", description: "A contemporary book on rest in its Black liberatory context; linked without borrowing its language." },
  { id: "my-grandmothers-hands", title: "My Grandmother's Hands", kind: "book", authorId: "resmaa-menakem", deckIds: ["anger", "fear", "change"], url: "https://www.resmaa.com/books", access: "borrow-or-buy", description: "A body-centered book addressing racialized trauma; its specific context matters." },
  { id: "its-ok-that-youre-not-ok", title: "It's OK That You're Not OK", kind: "book", authorId: "megan-devine", deckIds: ["sadness", "loss"], url: "https://refugeingrief.com/book/", access: "borrow-or-buy", description: "A contemporary grief book that does not require grief to be solved or improved." },
  { id: "a-testament-of-devotion", title: "A Testament of Devotion", kind: "book", authorId: "thomas-kelly", deckIds: ["waiting", "rest"], url: "https://quakerrecollaborative.org/resource/a-testament-of-devotion", access: "borrow-or-buy", description: "A Quaker contemplative work for readers interested in inward stillness." },
  { id: "mindful-of-race", title: "Mindful of Race", kind: "book", deckIds: ["anger", "fear"], url: "https://sounds-true.com/products/mindful-of-race", access: "borrow-or-buy", description: "A contemporary book by Ruth King on racial conditioning and mindfulness, for context-aware further study." },
  { id: "let-your-life-speak", title: "Let Your Life Speak", kind: "book", deckIds: ["beginning-again", "change"], url: "https://www.penguinrandomhouse.com/books/180007/let-your-life-speak-by-parker-j-palmer/", access: "borrow-or-buy", description: "A contemporary reflection on vocation and listening for one's next direction." },
  { id: "kate-bowler-books", title: "Kate Bowler's books", kind: "article", deckIds: ["loss", "uncertainty"], url: "https://katebowler.com/books/", access: "learn-more", description: "Books and reflections that engage uncertainty and loss without easy explanations." },
  { id: "all-about-love", title: "All About Love", kind: "book", authorId: "bell-hooks", deckIds: ["belonging", "boundaries"], url: "https://www.harpercollins.com/products/all-about-love-bell-hooks", access: "borrow-or-buy", description: "A contemporary reflection on love, care, and community; linked for optional further reading." },
  { id: "four-thousand-weeks", title: "Four Thousand Weeks", kind: "book", authorId: "oliver-burkeman", deckIds: ["overwhelm", "enoughness"], url: "https://www.oliverburkeman.com/books", access: "borrow-or-buy", description: "A contemporary book about time, limits, and choosing what matters; linked without reproducing its text." },
  { id: "set-boundaries-find-peace", title: "Set Boundaries, Find Peace", kind: "book", authorId: "nedra-glover-tawwab", deckIds: ["boundaries", "anger"], url: "https://www.nedratawwab.com/book", access: "borrow-or-buy", description: "A contemporary resource on communicating limits and needs." },
  { id: "book-of-delights", title: "The Book of Delights", kind: "book", authorId: "ross-gay", deckIds: ["joy-and-delight", "enoughness"], url: "https://www.algonquin.com/ross-gay/the-book-of-delights-9781616207922/", access: "borrow-or-buy", description: "A contemporary collection inviting close attention to ordinary delight." },
];

export const authorsById = Object.fromEntries(authors.map((author) => [author.id, author]));
export const resourcesById = Object.fromEntries(resources.map((resource) => [resource.id, resource]));

export function resourcesForDeck(deckId: DeckId): Resource[] {
  return resources.filter((resource) => resource.deckIds.includes(deckId));
}
