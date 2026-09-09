export type Tier = {
  id: string;
  name: string;
  audience: string;
  from: string;
  cadence: string;
  summary: string;
  includes: string[];
  cta: { label: string; href: string };
  featured?: boolean;
};

export const tiers: Tier[] = [
  {
    id: "starter",
    name: "Starter",
    audience: "A shop or service that mainly loses time on messages",
    from: "KES 20,000",
    cadence: "one-off setup",
    summary:
      "Get answering. An AI assistant on the channels your customers already use, built from your own prices and policies.",
    includes: [
      "AI assistant on two channels — pick from WhatsApp, Facebook, Instagram or a widget on your existing site",
      "Knowledge base written from your business information",
      "Quick replies for your most common questions",
      "Handover to your phone or WhatsApp",
      "Opt-in customer list you own",
      "Two weeks of tuning after launch",
    ],
    cta: { label: "Start here", href: "/contact?interest=starter" },
  },
  {
    id: "business",
    name: "Business",
    audience: "The package most Nairobi SMEs actually need",
    from: "KES 60,000",
    cadence: "one-off setup",
    summary:
      "A complete online presence: a fast website with a built-in assistant, WhatsApp answering, and the search setup that makes people find you.",
    includes: [
      "AI-powered website, mobile and desktop, built on your content",
      "AI assistant on the website and on WhatsApp",
      "Enquiry or order forms with reference numbers",
      "Search setup (SEO) and Google Business Profile",
      "Domain, hosting and security certificate for the first year",
      "Launch, staff handover and training session",
      "Everything in Starter",
    ],
    cta: { label: "Book a walkthrough", href: "/contact?interest=business" },
    featured: true,
  },
  {
    id: "operations",
    name: "Commerce & Operations",
    audience: "Retailers and businesses ready to sell and stock-manage online",
    from: "KES 150,000",
    cadence: "quoted per business",
    summary:
      "Selling, stock and back office. Online ordering with M-Pesa, stock-aware catalogue, delivery tracking, staff portal, or a full AI point-of-sale rollout.",
    includes: [
      "Online ordering, cart and checkout with M-Pesa",
      "Stock-aware catalogue — out-of-stock items cannot be ordered",
      "Delivery tracking your customer can follow",
      "Staff back-office portal for orders, stock and customer messaging",
      "AI point of sale: stock alerts, reorder suggestions, profit per item, closing summaries",
      "Pilot at one counter before full rollout, plus staff training",
      "Everything in Business",
    ],
    cta: { label: "Request a quote", href: "/contact?interest=operations" },
  },
];

export const addOns = [
  { name: "Search setup (SEO)", price: "KES 5,000", note: "One off. Titles, descriptions, sitemap, Google Business Profile." },
  { name: "Domain, hosting and security", price: "KES 10,000", note: "First year. Domain registered in your business name." },
  { name: "Extra chat channel", price: "KES 10,000", note: "Facebook Messenger or Instagram, added to an existing assistant." },
  { name: "Social content and scheduling", price: "KES 5,000 / month", note: "AI-drafted, human-approved, scheduled across your pages." },
  { name: "M-Pesa integration", price: "Quoted", note: "Depends on your till or paybill setup and Safaricom approval." },
  { name: "Extra training session", price: "KES 2,500", note: "On site, for new staff or a refresher." },
];

export const careTasks = [
  { task: "Minor update — price, photo or text change", price: "KES 500 – 800" },
  { task: "New assistant answer or FAQ", price: "KES 1,000" },
  { task: "Troubleshooting or bug fix", price: "KES 1,500 – 2,500" },
  { task: "Platform or API-breaking change", price: "Quoted separately" },
];

export const carePlan = {
  name: "Care Plan (optional)",
  price: "From KES 2,500 / month",
  summary:
    "Only if you want us on standby. Hosting and domain renewal, AI usage covered, monitoring, backups, priority response, and small monthly changes included.",
  points: [
    "Hosting, backups and uptime monitoring",
    "AI usage costs bundled and predictable",
    "Priority response during business hours",
    "Small content changes included each month",
    "Cancel any month — nothing is locked in",
  ],
};

export const pricingNotes = [
  {
    title: "Why there is no forced monthly fee",
    body: "Most Nairobi SMEs have been burned by a subscription that kept charging after the service stopped. You pay to build the system, then only when you need something changed. The Care Plan exists for businesses that prefer everything handled — it is optional.",
  },
  {
    title: "About AI running costs",
    body: "Assistants that use a paid AI model have a small running cost per conversation. Simple assistants that answer from your own written information have none. We tell you which one you are getting and what it costs before switching it on.",
  },
  {
    title: "Payment terms",
    body: "Half to start, half on handover. For Commerce & Operations builds we split it across agreed milestones so you are never paying far ahead of the work.",
  },
  {
    title: "Prices are honest, not final",
    body: "Every figure here is a starting point for a normal-sized business. A bigger catalogue, more channels or unusual integrations cost more, and we say so before we start, in writing.",
  },
];
