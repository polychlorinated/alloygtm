export interface Offer {
  id: string;
  name: string;
  terms: string;
  body: string;
  note?: string;
  price: string;
  originalPrice?: string;
  cta: { label: string; href: string };
  recommended?: boolean;
}

export const offers: Offer[] = [
  {
    id: "crucible",
    name: "Crucible",
    terms: "Self-serve product",
    body: "The social content engine for founder-led marketing. Turn a quick 10-minute braindump or live interview into a full weekly multi-channel campaign. Record your thoughts and get back edited video shorts, LinkedIn posts, X threads, and newsletter drafts — all pulled from your core message. Because it's your authentic voice, not generic AI slop.",
    price: "$199/mo",
    originalPrice: "$299/mo",
    cta: { label: "Try Crucible", href: "https://trycrucible.com" },
  },
  {
    id: "teardown",
    name: "The Teardown",
    terms: "72 hours · $297",
    body: "A recorded expert review of your GTM setup. Twenty-minute walkthrough of your site, funnel, CRM, or outbound — plus a one-page prioritized action list.",
    note: "No call required.",
    price: "$297",
    cta: { label: "Book a Teardown", href: "#enquire" },
  },
  {
    id: "sprint",
    name: "The Diagnostic Sprint",
    terms: "Two weeks · $2,500",
    body: "A full map of your lead-to-revenue system, a prioritized roadmap, and one fix built and running before the engagement ends.",
    note: "You don't get a recommendation to build something. You get the thing.",
    price: "$2,500",
    cta: { label: "Start a Sprint", href: "#enquire" },
    recommended: true,
  },
  {
    id: "build",
    name: "The Build",
    terms: "Monthly · from $4,000",
    body: "Ongoing implementation partnership. Continuous diagnosis and build across your revenue stack — CRM architecture, workflow automation, data pipelines, custom internal tools.",
    price: "From $4,000/mo",
    cta: { label: "Enquire", href: "#enquire" },
  },
];

export const offerOptions = [
  { value: "teardown", label: "The Teardown — $297" },
  { value: "sprint", label: "The Diagnostic Sprint — $2,500" },
  { value: "build", label: "The Build — from $4,000/mo" },
];
