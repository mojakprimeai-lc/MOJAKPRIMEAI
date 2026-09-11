import { company } from "@/lib/company";

/**
 * The assistant on this site is the same kind we build for clients: a
 * keyword-scored knowledge base over the company's own facts. It runs with no
 * third-party account, and it cannot invent a price — every figure it quotes
 * comes from the pricing page.
 */

export type AssistantAction = {
  label: string;
  href: string;
  kind: "internal" | "external" | "mail" | "tel";
};

export type AssistantAnswer = {
  topic: string;
  reply: string;
  actions: AssistantAction[];
  followUps: string[];
};

type Entry = {
  topic: string;
  keywords: string[];
  weight?: number;
  reply: string;
  actions?: AssistantAction[];
  followUps?: string[];
};

const contactAction: AssistantAction = {
  label: "Book a free walkthrough",
  href: "/contact",
  kind: "internal",
};

const workAction: AssistantAction = {
  label: "See live examples",
  href: "/work",
  kind: "internal",
};

const pricingAction: AssistantAction = {
  label: "See full pricing",
  href: "/pricing",
  kind: "internal",
};

const mailAction: AssistantAction = {
  label: `Email ${company.email}`,
  href: `mailto:${company.email}`,
  kind: "mail",
};

const entries: Entry[] = [
  {
    topic: "services",
    keywords: [
      "what do you do", "services", "offer", "provide", "solutions", "products", "help me with",
      "what is mojak", "about mojak", "sell",
    ],
    reply:
      "We build three things for businesses, and the support services around them.\n\n• AI-powered websites — a site that answers questions, captures enquiries and can take orders and payment.\n• AI chat assistants — instant replies on WhatsApp, Facebook, Instagram and your website.\n• AI point of sale — a till that counts stock, warns you before you run out and shows profit per item.\n\nAround those: search setup, social content, domain and hosting, and M-Pesa payments.",
    actions: [
      { label: "Browse all solutions", href: "/solutions", kind: "internal" },
      workAction,
    ],
    followUps: ["How much does a website cost?", "How does the POS work?", "Can I see your work?"],
  },
  {
    topic: "websites",
    keywords: ["website", "web site", "site", "webpage", "web page", "online presence", "domain", "hosting"],
    reply:
      "An AI-powered website starts at KES 50,000, and the Business package at KES 60,000 adds the WhatsApp assistant, search setup, and domain and hosting for the first year.\n\nIt is built on your own prices and products, loads fast on a cheap phone, captures enquiries with a reference number, and has an assistant built in that answers customers day and night. If you already have a decent site, we can add the assistant to it instead of rebuilding.",
    actions: [
      { label: "AI websites in detail", href: "/solutions/ai-websites", kind: "internal" },
      pricingAction,
    ],
    followUps: ["Who owns the website?", "How long does it take?", "Can I see a site you built?"],
  },
  {
    topic: "chatbots",
    keywords: [
      "chatbot", "chat bot", "bot", "whatsapp", "wa", "facebook", "instagram", "messenger", "dm",
      "reply", "replies", "assistant", "answer customers", "social media messages",
    ],
    weight: 1.1,
    reply:
      "Chat assistants start at KES 10,000 per channel, or KES 20,000 for the Starter package covering two channels.\n\nThe assistant answers from your real prices and policies, understands how customers actually type — including Swahili greetings and short forms — collects the customer's name and number, and hands over to your phone when a person is needed. Bulk WhatsApp broadcasts are possible, though Meta must approve the message templates first.",
    actions: [
      { label: "Chat assistants in detail", href: "/solutions/ai-chat-assistants", kind: "internal" },
      pricingAction,
    ],
    followUps: ["Will it invent answers?", "How long does setup take?", "What about WhatsApp broadcasts?"],
  },
  {
    topic: "pos",
    keywords: [
      "pos", "point of sale", "till", "cash register", "stock", "inventory", "counting",
      "restock", "reorder", "sales system", "shop system", "barcode", "receipt",
      "smart till", "machine", "machines", "tablet", "printer", "hardware", "scanner",
    ],
    weight: 1.1,
    reply:
      "AI point of sale starts with Smart Till at KES 30,000 — a complete till: sales recorded as they happen, live stock, low-stock alerts, and a closing summary on your phone. Staff are trained in person. Prices are for software; it usually runs on a computer or tablet you already own.\n\nSmart Till Plus is KES 65,000 and adds profit per item, reorder suggestions, dead stock alerts, and a customer list you can reach on WhatsApp. Already on Smart Till? Upgrade for KES 35,000.\n\nFull Business is from KES 120,000, quoted per business — the till plus an online shop with M-Pesa, delivery tracking and a staff back-office. That is for selling at the counter and online, not a till-only product.",
    actions: [
      { label: "AI point of sale in detail", href: "/solutions/ai-point-of-sale", kind: "internal" },
      pricingAction,
    ],
    followUps: ["Do I need to buy machines?", "What is Smart Till Plus?", "What is Full Business?"],
  },
  {
    topic: "smart-till-plus",
    keywords: ["smart till plus", "profit per item", "dead stock", "reorder suggestion"],
    weight: 1.85,
    reply:
      "Smart Till Plus is KES 65,000 as a one-off. It includes everything in Smart Till, and adds profit per item, reorder suggestions from how your shop sells, dead stock alerts, a customer list with WhatsApp offers, plus priority support and one free update in the first year.\n\nIf you already have Smart Till, the upgrade is KES 35,000 — the difference only.",
    actions: [
      { label: "See POS pricing", href: "/pricing", kind: "internal" },
      contactAction,
    ],
    followUps: ["What is Smart Till?", "What is Full Business?", "Book a walkthrough"],
  },
  {
    topic: "full-business",
    keywords: [
      "full business", "commerce", "commerce package", "online shop", "online store",
      "sell online", "delivery tracking", "back office", "back-office",
    ],
    weight: 1.2,
    reply:
      "Full Business System starts from KES 120,000 and is quoted per business. It is Smart Till Plus plus an online shop with M-Pesa, stock shared between the counter and the web, delivery tracking, a staff back-office, and an AI assistant on your website or WhatsApp.\n\nIt is for businesses selling at the counter and online — not a till-only product. Most shops start on Smart Till (KES 30,000) or Plus (KES 65,000). Written quote before work starts.",
    actions: [
      { label: "See POS pricing", href: "/pricing", kind: "internal" },
      contactAction,
    ],
    followUps: ["How much is Smart Till?", "Do I need to buy machines?", "Book a walkthrough"],
  },
  {
    topic: "pricing",
    keywords: [
      "price", "pricing", "cost", "how much", "charge", "fee", "budget", "expensive", "cheap",
      "afford", "quote", "payment terms", "deposit", "packages", "package",
    ],
    weight: 1.2,
    reply:
      "Published starting points, all one-off Mojak setup fees:\n\n• Starter — from KES 20,000. An assistant on two channels.\n• Business — from KES 60,000. Website with assistant, WhatsApp, search setup, domain and hosting for the first year. A website with assistant on its own starts at KES 50,000.\n• Smart Till — KES 30,000. A complete working till.\n• Smart Till Plus — KES 65,000. Till plus profit, reorders, dead stock and WhatsApp offers. Upgrade from Smart Till is KES 35,000.\n• Full Business System — from KES 120,000, quoted per business. Shop plus online: till, web shop, M-Pesa, delivery tracking, staff back-office.\n\nThere is no forced Mojak labour fee after launch. You pay us for changes when you need them. Platform costs — WhatsApp conversation fees, paid AI usage, hosting — run separately and are explained before go-live. Hardware such as a tablet or printer is not in those prices. Payment is half to start, half on handover.",
    actions: [pricingAction, contactAction],
    followUps: ["Is there a monthly fee?", "How much is Smart Till?", "What is in the Business package?"],
  },
  {
    topic: "maintenance",
    keywords: [
      "maintenance", "support", "after", "monthly", "retainer", "subscription", "care plan",
      "ongoing", "update", "changes", "fix", "warranty",
    ],
    reply:
      "No forced Mojak labour retainer. After launch you pay us only when work happens: KES 500–800 for a price or content change, KES 1,000 for a new assistant answer, KES 1,500–2,500 for troubleshooting, and a separate quote for anything major like a platform change.\n\nWhatsApp, paid AI models and hosting still have continuous platform costs. We put those in the quote before go-live. If you would rather have one monthly figure, the optional Care Plan starts at KES 2,500 a month and can bundle hosting, usage, monitoring, backups, priority response and small changes. You can cancel any month.",
    actions: [pricingAction, mailAction],
    followUps: ["What are AI running costs?", "How much is hosting?", "Can I cancel the Care Plan?"],
  },
  {
    topic: "ai-costs",
    keywords: [
      "ai cost", "api", "running cost", "token", "openai", "model cost", "per message cost",
      "whatsapp cost", "whatsapp fee", "meta fee", "platform cost", "usage cost",
    ],
    reply:
      "Two different kinds of cost.\n\n• Mojak work — one-off to build, then pay-as-you-go for changes, unless you choose the Care Plan.\n• Platform usage — continuous. WhatsApp Business conversation fees from Meta, paid AI model usage where that is switched on, and hosting.\n\nAn assistant that answers only from your written information has no per-message AI cost. One that uses a paid model has a small cost per conversation. We tell you which you are getting and what the platform numbers look like before anything goes live. The Care Plan can bundle usage so the monthly figure is predictable.",
    actions: [pricingAction, contactAction],
    followUps: ["Which type do I need?", "What is the Care Plan?", "How much is the Business package?"],
  },
  {
    topic: "timeline",
    keywords: ["how long", "timeline", "duration", "when", "fast", "quick", "deadline", "delivery time", "weeks"],
    reply:
      "An assistant is usually answering customers in under a week. A full website with an assistant takes one to three weeks, and the main thing that slows it down is waiting for your photos and price list. A Smart Till is set up on one counter with your real products; we train your team in person before we leave.",
    actions: [contactAction, workAction],
    followUps: ["What do you need from me?", "How much does it cost?", "Can I see your work?"],
  },
  {
    topic: "work",
    keywords: [
      "work", "portfolio", "example", "examples", "demo", "sample", "case study", "built",
      "clients", "who have you worked", "proof", "show me",
    ],
    weight: 1.15,
    reply:
      "Here are live examples you can open on your phone and test yourself.\n\n• Visum Park Hotel, Machakos — they already had a website. We rebuilt the guest experience and added a 24-hour AI concierge, reservation capture, staff messaging for opted-in guests, and social automation around it. Live at visumhotel.netlify.app.\n• Zelt Solar & Electricals, Nairobi — product catalogue with an AI solar advisor that sizes systems and estimates savings. Live at zeltsolarandelectricals.netlify.app. Online ordering, M-Pesa and delivery tracking are in progress.\n\nOpen either one and put the assistant through its paces.",
    actions: [
      workAction,
      { label: "Visum Park Hotel, live", href: "https://visumhotel.netlify.app/", kind: "external" },
      { label: "Zelt Solar, live", href: "https://zeltsolarandelectricals.netlify.app/", kind: "external" },
    ],
    followUps: ["What did you build for the hotel?", "How much would mine cost?", "Book a walkthrough"],
  },
  {
    topic: "accuracy",
    keywords: [
      "wrong", "invent", "hallucinate", "lie", "made up", "accurate", "accuracy", "mistake",
      "incorrect", "trust", "reliable",
    ],
    reply:
      "The assistant answers only from the information you give us — your prices, products and policies. When a question falls outside that, it says so and hands the customer to a person rather than guessing.\n\nThat rule matters commercially: an assistant that invents a price creates a promise you have to honour. This one is built so it cannot.",
    actions: [
      { label: "How the assistants work", href: "/solutions/ai-chat-assistants", kind: "internal" },
      contactAction,
    ],
    followUps: ["Can it hand over to a person?", "Who owns the data?", "Can I see it working?"],
  },
  {
    topic: "data",
    keywords: [
      "data", "own", "ownership", "privacy", "secure", "security", "safe", "backup", "gdpr",
      "protection", "confidential", "hostage", "lock in", "lock-in",
    ],
    reply:
      "Everything is yours. The domain is registered in your business name, the content, the customer list and the sales data belong to you, and we will export all of it on request.\n\nSites are served over HTTPS with spam protection on forms and regular backups. Staff accounts are per person, so you can see who did what. We do not sell or share client business data.",
    actions: [contactAction, mailAction],
    followUps: ["What if I want to leave?", "Who can see my sales data?", "How much does hosting cost?"],
  },
  {
    topic: "payments",
    keywords: ["mpesa", "m-pesa", "till", "paybill", "payment", "pay online", "card", "checkout", "safaricom"],
    reply:
      "We integrate M-Pesa so customers pay on your site and the confirmation reaches you automatically, instead of screenshots going back and forth.\n\nThe price is quoted rather than fixed, because it depends on whether you already have a till or paybill and on Safaricom's approval. We check your setup first, then quote — we do not guess a figure for it.",
    actions: [
      { label: "Growth services", href: "/solutions/growth-services", kind: "internal" },
      contactAction,
    ],
    followUps: ["Do I need a paybill?", "Can customers order online?", "How much is Full Business?"],
  },
  {
    topic: "seo",
    keywords: ["seo", "google", "search", "rank", "ranking", "found", "visibility", "google business", "maps"],
    reply:
      "Search setup is KES 5,000 as a one-off and is included in the Business package. It covers page titles and descriptions, your business location data, a sitemap, sharing previews, and your Google Business Profile.\n\nTechnical fixes register with Google within days. Real ranking movement takes weeks and depends on your competition — anyone promising page one in a week is selling you something else.",
    actions: [
      { label: "Growth services", href: "/solutions/growth-services", kind: "internal" },
      pricingAction,
    ],
    followUps: ["What is in the Business package?", "Do you handle social media?", "Book a walkthrough"],
  },
  {
    topic: "social",
    keywords: ["social media", "content", "posting", "post", "schedule", "captions", "tiktok", "marketing"],
    reply:
      "Social content and scheduling is KES 5,000 a month. AI drafts the captions and posts at volume, a person edits and approves, and they go out on a consistent schedule across your pages.\n\nWe do not offer fully automatic posting with nobody checking it. It performs badly and eventually embarrasses the business.",
    actions: [
      { label: "Growth services", href: "/solutions/growth-services", kind: "internal" },
      contactAction,
    ],
    followUps: ["Can you reply to DMs too?", "How much is search setup?", "Book a walkthrough"],
  },
  {
    topic: "getting-started",
    keywords: [
      "start", "begin", "get started", "next step", "sign up", "onboard", "what do you need",
      "how do we", "process", "how it works",
    ],
    reply:
      "It starts with a free walkthrough — we come to your business or meet on WhatsApp, look at how you sell today, and point out where you are losing time or customers. No charge and no obligation.\n\nYou then get a written quote covering exactly what we will build, what it costs, and what it costs afterwards. Nothing starts until you have that on paper.",
    actions: [contactAction, workAction],
    followUps: ["What do you need from me?", "How long does it take?", "How much does it cost?"],
  },
  {
    topic: "requirements",
    keywords: ["need from me", "what do i need", "prepare", "requirements", "photos", "price list", "logo"],
    reply:
      "Very little to begin. Your price list, your product or service details, opening hours, locations and delivery terms, and whatever photos and logo you have. If your photos are weak we will tell you rather than publish them.\n\nFor a point-of-sale build we also need your supplier list and current stock counts, and we sit at your counter for half a day to see how you actually work.",
    actions: [contactAction, mailAction],
    followUps: ["How long does it take?", "How much does it cost?", "Can I see your work?"],
  },
  {
    topic: "location",
    keywords: [
      "where", "location", "based", "office", "nairobi", "cbd", "visit", "come to", "upcountry",
      "mombasa", "kisumu", "area", "meet",
    ],
    reply:
      `We are based in ${company.city}, ${company.country}, and we meet CBD businesses in person — an agent can come to your shop and show you live examples on a phone.\n\nEverything we build works anywhere in Kenya, including hospitality work in Machakos, and we run upcountry projects over WhatsApp and calls. Working hours are ${company.hours.toLowerCase()}.`,
    actions: [contactAction, mailAction],
    followUps: ["Can someone visit my shop?", "Can I see your work?", "How much does it cost?"],
  },
  {
    topic: "human",
    keywords: [
      "human", "person", "someone", "talk", "speak", "call", "phone", "contact", "email",
      "agent", "sales", "manager", "reach you",
    ],
    weight: 1.15,
    reply: company.phone
      ? `Of course. Call ${company.phone.value} or email ${company.email}, and an agent can come to your business.`
      : `Of course — a person is better for some things.\n\nEmail ${company.email}, or send your details through the contact form and we will come back to you with a time. If you are already speaking to one of our agents, they can arrange the walkthrough on the spot.`,
    actions: [contactAction, mailAction],
    followUps: ["Book a walkthrough", "How much does it cost?", "Can I see your work?"],
  },
  {
    topic: "company",
    keywords: [
      "who are you", "who is mojak", "company", "team", "registered", "legal", "history",
      "how long have you", "trust you", "new company",
    ],
    reply:
      `${company.legalName} is a Nairobi company building AI systems for everyday businesses — websites, chat assistants and point of sale.\n\nWe would rather you judge us on live examples you can open on your phone than on a pitch. They are on the work page — test the assistants yourself before you pay us anything.`,
    actions: [workAction, { label: "About the company", href: "/about", kind: "internal" }],
    followUps: ["Can I see your work?", "How much does it cost?", "Book a walkthrough"],
  },
  {
    topic: "roadmap",
    keywords: ["academy", "training", "course", "learn", "coin", "token", "rewards", "smart farm", "smart home", "irrigation"],
    reply:
      "Those are in development, not on sale yet. An AI training academy, sensor-based smart farm and smart home monitoring, and a customer rewards layer are all being designed.\n\nWe would rather say 'not yet' than take money for something unfinished. What is ready today is websites, chat assistants, point of sale and the growth services around them.",
    actions: [
      { label: "What is ready today", href: "/solutions", kind: "internal" },
      { label: "About the company", href: "/about", kind: "internal" },
    ],
    followUps: ["What can I buy today?", "How much does it cost?", "Can I see your work?"],
  },
];

const greetings = ["hi", "hello", "hey", "habari", "sasa", "niaje", "jambo", "good morning", "good afternoon", "good evening", "mambo"];
const thanks = ["thanks", "thank you", "asante", "cheers", "appreciated"];

export const openingMessage =
  "Karibu. I am Prime, the assistant for Mojak Prime AI — and an example of what we build for our clients.\n\nI can explain the websites, chat assistants and point-of-sale systems we make, what they cost, and what we have already built. Ask me anything.";

export const quickPrompts = [
  "What exactly do you build?",
  "How much does it cost?",
  "How does the AI POS work?",
  "Can I see something you built?",
  "How long does it take?",
];

const normalise = (input: string) =>
  input.toLowerCase().replace(/[^a-z0-9\s'-]/g, " ").replace(/\s+/g, " ").trim();

function score(query: string, entry: Entry) {
  let total = 0;
  for (const keyword of entry.keywords) {
    if (keyword.includes(" ")) {
      if (query.includes(keyword)) total += 2.4;
      continue;
    }
    if (new RegExp(`\\b${keyword}`, "i").test(query)) total += 1;
  }
  return total * (entry.weight ?? 1);
}

export function answer(rawQuery: string): AssistantAnswer {
  const query = normalise(rawQuery);

  if (!query) {
    return {
      topic: "greeting",
      reply: openingMessage,
      actions: [contactAction],
      followUps: quickPrompts.slice(0, 3),
    };
  }

  if (query.length < 24 && greetings.some((word) => query.startsWith(word))) {
    return {
      topic: "greeting",
      reply:
        "Karibu. I can explain what we build, what it costs, how long it takes, or show you live examples you can open on your phone. Where would you like to start?",
      actions: [workAction, pricingAction],
      followUps: quickPrompts.slice(0, 3),
    };
  }

  if (query.length < 30 && thanks.some((word) => query.includes(word))) {
    return {
      topic: "thanks",
      reply: `Karibu sana. If you want a person to look at your business properly, a walkthrough is free — or email ${company.email} any time.`,
      actions: [contactAction, mailAction],
      followUps: quickPrompts.slice(0, 3),
    };
  }

  const ranked = entries
    .map((entry) => ({ entry, value: score(query, entry) }))
    .sort((a, b) => b.value - a.value);

  const best = ranked[0];

  if (!best || best.value < 1) {
    return {
      topic: "fallback",
      reply:
        `That one is better answered by a person, so nothing gets promised that we cannot deliver.\n\nEmail ${company.email} or book a free walkthrough and we will answer it properly. Meanwhile I am solid on what we build, pricing, timelines, maintenance and the live examples on our work page.`,
      actions: [contactAction, mailAction],
      followUps: quickPrompts.slice(0, 3),
    };
  }

  const entry = best.entry;
  return {
    topic: entry.topic,
    reply: entry.reply,
    actions: entry.actions ?? [contactAction],
    followUps: entry.followUps ?? quickPrompts.slice(0, 3),
  };
}
