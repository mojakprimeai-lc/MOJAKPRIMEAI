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
  badge?: string;
  note?: string;
};

const starter: Tier = {
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
};

const business: Tier = {
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
};

/** Website and chat packages. Shown as the first pricing block. */
export const packages: Tier[] = [starter, business];

/** Point of sale steps. Full Business is shop + online, not a till-only product. */
export const posTiers: Tier[] = [
  {
    id: "smart-till",
    name: "Smart Till",
    audience: "One-counter shops ready to stop guessing at closing time",
    from: "KES 30,000",
    cadence: "one-off setup",
    summary:
      "A complete working till: sales recorded as they happen, stock that counts itself, a warning before popular items run out, and a closing summary on your phone.",
    includes: [
      "Sales recorded as they happen",
      "Live stock that goes down as you sell",
      "Low-stock alerts before an item runs out",
      "Daily closing summary to your phone",
      "Staff trained in person before we leave",
    ],
    cta: { label: "Ask about Smart Till", href: "/contact?interest=smart-till" },
  },
  {
    id: "smart-till-plus",
    name: "Smart Till Plus",
    audience: "Shops that want to know profit, not just sales",
    from: "KES 65,000",
    cadence: "one-off setup",
    summary:
      "Everything in Smart Till, plus the layer that helps you decide what to stock, drop and promote.",
    includes: [
      "Everything in Smart Till",
      "Profit per item — what you actually earned, not just what moved",
      "Reorder suggestions from how your shop sells",
      "Dead stock alerts for items sitting too long",
      "Customer list you own, with WhatsApp offers",
      "Priority support and one free update in the first year",
    ],
    note: "Already on Smart Till? Upgrade for KES 35,000 — the difference only.",
    cta: { label: "Ask about Plus", href: "/contact?interest=smart-till-plus" },
    featured: true,
    badge: "Adds intelligence",
  },
  {
    id: "full-business",
    name: "Full Business System",
    audience: "Businesses selling at the counter and online",
    from: "KES 120,000",
    cadence: "quoted per business",
    summary:
      "Smart Till Plus, plus an online shop with M-Pesa, delivery tracking and a staff back-office. One stock list for the shop and the web — not a till on its own.",
    includes: [
      "Everything in Smart Till Plus",
      "Online shop with M-Pesa checkout",
      "Stock shared between the counter and online orders",
      "Delivery tracking customers can follow",
      "Staff back-office for orders, stock and messages",
      "AI assistant on your website or WhatsApp",
    ],
    cta: { label: "Request a quote", href: "/contact?interest=full-business" },
  },
];

const posPreview: Tier = {
  id: "pos",
  name: "Smart Till",
  audience: "Shops that want a till that counts stock, not just sales",
  from: "KES 30,000",
  cadence: "one-off setup",
  summary:
    "A complete working till — sales, live stock, low-stock alerts and a closing summary on your phone. Plus and Full Business steps are on the price list.",
  includes: [
    "Sales, live stock and low-stock alerts",
    "Closing summary sent to your phone",
    "Plus from KES 65,000 — profit, reorders, customer offers",
    "Full Business from KES 120,000 — shop plus online",
  ],
  cta: { label: "See POS steps", href: "/pricing" },
};

/** Homepage preview: Starter, Business, and POS from 30k — not five equal cards. */
export const homeTiers: Tier[] = [starter, business, posPreview];

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
    "Only if you want one predictable monthly figure. Hosting and domain renewal, AI and messaging usage where bundled, monitoring, backups, priority response, and small monthly changes included.",
  points: [
    "Hosting, backups and uptime monitoring",
    "AI and messaging usage bundled where we agree it in writing",
    "Priority response during business hours",
    "Small content changes included each month",
    "Cancel any month — nothing is locked in",
  ],
};

export const pricingNotes = [
  {
    title: "No forced Mojak labour fee",
    body: "Most Nairobi SMEs have been burned by a subscription that kept charging after the service stopped. Our build fee is one-off. After launch you pay us for changes only when you need them. The Care Plan is optional if you want us on standby.",
  },
  {
    title: "Platform running costs are separate",
    body: "Keeping WhatsApp, social messaging and paid AI models live has continuous platform costs — Meta conversation fees, AI usage where a paid model is used, and hosting. Those are not a Mojak retainer. We show you the expected figures before go-live, and the Care Plan can bundle them into one monthly number.",
  },
  {
    title: "About AI running costs",
    body: "Assistants that answer from your own written information have no per-message AI cost. Assistants that use a paid AI model have a small cost per conversation. We tell you which one you are getting and what it costs before switching it on.",
  },
  {
    title: "Software prices, not hardware",
    body: "Till and website prices are for the software we build and set up. A tablet, receipt printer or scanner is not included. Requirements are simple; we advise what you need before you spend anything, and we can help source it if you want that handled.",
  },
  {
    title: "Payment terms",
    body: "Half to start, half on handover. Larger builds — including Full Business — are split across agreed milestones so you are never paying far ahead of the work.",
  },
  {
    title: "Prices are honest, not final",
    body: "Every figure here is a starting point for a normal-sized business. A bigger catalogue, more channels or unusual integrations cost more, and we say so before we start, in writing.",
  },
];
