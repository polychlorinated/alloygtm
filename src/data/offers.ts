export interface Offer {
  id: string;
  name: string;
  terms: string;
  body: string;
  note?: string;
  price: string;
  cta: { label: string; href: string };
  recommended?: boolean;
}

export const offers: Offer[] = [
  {
    id: "crucible",
    name: "Crucible",
    terms: "Self-serve product",
    body: "The social content engine for founder-led marketing. Turn a quick 10-minute braindump or live interview into a weekly multi-channel campaign. Record your thoughts and get edited video shorts, LinkedIn posts, newsletter drafts, etc. — all using your own words. Your authentic voice polished, not generative AI slop.",
    note: "No credit card. First week free.",
    price: "From $49/mo",
    cta: { label: "Try Crucible", href: "https://trycrucible.com" },
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
  { value: "learn-more", label: "Learning more about Alloy" },
  { value: "sprint", label: "The Diagnostic Sprint — $2,500" },
  { value: "build", label: "The Build — from $4,000/mo" },
];
