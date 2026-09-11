import {
  AlarmClock,
  BadgeCheck,
  BarChart3,
  Bell,
  Boxes,
  Brain,
  CalendarClock,
  ClipboardList,
  Coins,
  Globe2,
  Handshake,
  Languages,
  LayoutDashboard,
  LineChart,
  Lock,
  type LucideIcon,
  MessageCircle,
  MessagesSquare,
  Package,
  PhoneCall,
  Receipt,
  Search,
  Send,
  ServerCog,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Store,
  TrendingUp,
  Users,
  Wallet,
  Zap,
} from "lucide-react";

export type Feature = {
  icon: LucideIcon;
  title: string;
  body: string;
};

export type FeatureGroup = {
  title: string;
  lede: string;
  items: Feature[];
};

export type Solution = {
  slug: string;
  name: string;
  navLabel: string;
  icon: LucideIcon;
  /** One line a sales agent can say out loud. */
  pitch: string;
  headline: string;
  intro: string;
  priceFrom: string;
  priceNote: string;
  costsToday: { title: string; body: string }[];
  features: Feature[];
  /** Extra capability groups (e.g. POS Plus / Full Business). */
  featureGroups?: FeatureGroup[];
  included: string[];
  steps: { title: string; body: string }[];
  outcomes: { before: string; after: string }[];
  faqs: { q: string; a: string }[];
  relatedWork?: string;
};

export const solutions: Solution[] = [
  {
    slug: "ai-websites",
    name: "AI-powered websites",
    navLabel: "AI websites",
    icon: Globe2,
    pitch: "A website that answers customers and takes orders, not a poster that just sits there.",
    headline: "A website that works like your best employee — awake at 2am",
    intro:
      "Most business websites are a picture and a phone number. Yours will show your products or rooms, answer questions in its own words, capture the customer's details, and hand the conversation to your phone. Built to load fast on a cheap phone with weak data.",
    priceFrom: "KES 50,000",
    priceNote: "Website with a built-in AI assistant. Domain and hosting quoted separately.",
    costsToday: [
      {
        title: "Customers judge you before they call",
        body: "If your business cannot be found on Google, or the site looks old, people assume the business is old too. They call the competitor whose site looked serious.",
      },
      {
        title: "Every question comes to your phone",
        body: "Where are you? Do you deliver? How much? What time do you close? The same ten questions, all day, taking you away from the customer standing in front of you.",
      },
      {
        title: "Enquiries arrive and disappear",
        body: "A missed call at 8pm is a lost sale. Nobody writes it down, nobody follows up, and you never know how much it cost you.",
      },
    ],
    features: [
      {
        icon: Sparkles,
        title: "An assistant built on your own information",
        body: "Your prices, stock, hours, delivery areas and policies. It answers from what you gave it, and says so when it does not know — so it cannot invent a price.",
      },
      {
        icon: Smartphone,
        title: "Built for the phone first",
        body: "Big tap targets, readable text, fast on 3G. Most of your customers will never open your site on a computer.",
      },
      {
        icon: Search,
        title: "Found on Google",
        body: "Page titles, descriptions, business location data and a sitemap set up properly, so you appear when someone searches for what you sell in your area.",
      },
      {
        icon: ClipboardList,
        title: "Enquiries that cannot get lost",
        body: "Every enquiry gets a reference number and lands in your inbox and on WhatsApp, with the customer's name and number attached.",
      },
      {
        icon: ShoppingCart,
        title: "Sell and take payment online",
        body: "Product catalogue, cart, checkout and M-Pesa. Items that are out of stock cannot be ordered, so you never sell what you do not have.",
      },
      {
        icon: LayoutDashboard,
        title: "A back office for your staff",
        body: "A private page where your team sees enquiries and orders, updates stock, and sends offers to customers who signed up. No developer needed.",
      },
    ],
    included: [
      "Design and build, mobile and desktop",
      "AI assistant trained on your business information",
      "Enquiry or order forms with reference numbers",
      "Google search setup, sitemap and social sharing previews",
      "Click-to-call and click-to-WhatsApp on every page",
      "Staff handover session so your team can run it",
    ],
    steps: [
      {
        title: "We collect your facts",
        body: "Prices, products, hours, locations, delivery terms, photos. One sitting, usually under an hour.",
      },
      {
        title: "We build it on those facts",
        body: "The site and the assistant both read from the same information, so nothing contradicts anything.",
      },
      {
        title: "You review it live",
        body: "You open it on your own phone, test the assistant, and tell us what to change before anyone else sees it.",
      },
      {
        title: "We launch and hand over",
        body: "Domain, security certificate, Google listing, and a walkthrough for your staff.",
      },
    ],
    outcomes: [
      { before: "Questions answered only when you pick up", after: "Answered instantly, every hour of the day" },
      { before: "Enquiries lost in missed calls", after: "Every enquiry captured with a name and number" },
      { before: "Invisible on Google", after: "Findable when customers search your service" },
    ],
    faqs: [
      {
        q: "Do I need to buy a domain first?",
        a: "No. We register the domain and set up hosting and the security certificate for you. It is KES 10,000 for the first year, and the domain stays in your business name.",
      },
      {
        q: "Can you work with the website I already have?",
        a: "Yes. If the site is decent we can add the AI assistant and fix the search setup instead of rebuilding it. We only recommend a rebuild when it is genuinely cheaper than repairing.",
      },
      {
        q: "Who owns the site when it is done?",
        a: "You do. The domain, the content and the code belong to your business.",
      },
    ],
    relatedWork: "visum-park-hotel",
  },
  {
    slug: "ai-chat-assistants",
    name: "AI chat assistants",
    navLabel: "AI chat assistants",
    icon: MessagesSquare,
    pitch: "Every message answered in seconds, on WhatsApp, Facebook, Instagram and your website.",
    headline: "Nobody waits for a reply, so nobody goes to your competitor",
    intro:
      "Your customers already message you on WhatsApp. The problem is answering at 9pm, on a Sunday, or while serving someone else. The assistant replies immediately with your real prices and terms, collects the customer's details, and calls you in when the conversation needs a human.",
    priceFrom: "KES 10,000",
    priceNote: "Per channel. Website widget, WhatsApp, Facebook and Instagram each set up separately.",
    costsToday: [
      {
        title: "Slow replies are read as no reply",
        body: "A customer messaging three shops buys from whoever answers first. Facebook and Instagram even display your response time publicly.",
      },
      {
        title: "The same questions, forever",
        body: "Price, location, delivery, opening hours, availability. Answering them by hand is work that earns you nothing.",
      },
      {
        title: "No record of who asked",
        body: "Hundreds of conversations, no list of customers you can go back to when you have an offer.",
      },
    ],
    features: [
      {
        icon: MessageCircle,
        title: "One assistant, every channel",
        body: "The same knowledge answers on your website, WhatsApp, Facebook Messenger and Instagram, so customers get the same answer wherever they find you.",
      },
      {
        icon: Brain,
        title: "Grounded in your business, not the internet",
        body: "It answers from your prices, products and policies. Ask it something it was not given and it hands you over instead of guessing.",
      },
      {
        icon: Languages,
        title: "Understands how people actually type",
        body: "Short forms, English and Swahili greetings, half-sentences. Real customers do not type in full paragraphs.",
      },
      {
        icon: Handshake,
        title: "Clean handover to a human",
        body: "When the question needs you, it passes the customer to your phone or WhatsApp with the conversation so far. No repeating themselves.",
      },
      {
        icon: Users,
        title: "Builds you a customer list",
        body: "Names and numbers of everyone who asked, with their permission to be contacted — an asset you own.",
      },
      {
        icon: Send,
        title: "Offers and reminders that go out on their own",
        body: "Weekend offers, holiday messages, restock alerts. Written once, sent to the customers who opted in.",
      },
    ],
    included: [
      "Knowledge base written from your business information",
      "Quick-reply buttons for the questions asked most",
      "Handover to your phone, WhatsApp or email",
      "Opt-in customer list with a clear way to unsubscribe",
      "Owner's guide for updating answers as prices change",
      "Two weeks of tuning after launch, from real conversations",
    ],
    steps: [
      {
        title: "We list your real questions",
        body: "Go through your WhatsApp history with us. The top twenty questions become the assistant's core.",
      },
      {
        title: "We write and connect it",
        body: "Answers in your business's voice, connected to the channels you use. Meta approval is handled for WhatsApp and Instagram.",
      },
      {
        title: "You test it as a customer",
        body: "Message it yourself. Anything that reads wrong, we change before launch.",
      },
      {
        title: "We tune it on live traffic",
        body: "For the first two weeks we read what customers actually ask and fill the gaps.",
      },
    ],
    outcomes: [
      { before: "Replies in hours, if at all", after: "Replies in seconds, day and night" },
      { before: "You answer the same question 30 times a day", after: "You answer only what needs you" },
      { before: "No customer list", after: "A growing list you can send offers to" },
    ],
    faqs: [
      {
        q: "Will it pretend to be a person?",
        a: "No. It introduces itself as an assistant. Customers trust it more that way, and it removes any risk of a promise your staff cannot keep.",
      },
      {
        q: "What about official WhatsApp broadcasts?",
        a: "Bulk WhatsApp messaging runs through Meta's Business Platform and message templates must be approved by Meta first. We prepare and submit them, and we tell you honestly how long approval usually takes.",
      },
      {
        q: "What happens when it does not know something?",
        a: "It says so and hands the customer to a person, with your phone number and WhatsApp one tap away. It is built never to invent an answer.",
      },
    ],
    relatedWork: "visum-park-hotel",
  },
  {
    slug: "ai-point-of-sale",
    name: "AI point of sale",
    navLabel: "AI point of sale",
    icon: Store,
    pitch: "A till that records sales, counts stock, and warns you before you run out — with clearer steps if you need profit insight or online selling.",
    headline: "Know what sold, what is finishing, and what is quietly losing you money",
    intro:
      "An ordinary till records a sale. Ours counts stock as you sell, warns you before popular items run out, and sends a closing summary to your phone. It runs on a computer or tablet you likely already own. Start with a complete Smart Till; add intelligence or online selling only when you need them.",
    priceFrom: "KES 30,000",
    priceNote: "Software setup. Smart Till 30k · Plus 65k · Full Business from 120k.",
    costsToday: [
      {
        title: "Stock counted by hand, and still wrong",
        body: "Closing time counts, notebooks, and a figure nobody fully trusts. Meanwhile the fast movers finish without warning.",
      },
      {
        title: "You cannot see where the money went",
        body: "Money came in, money went out, and at month end the profit is a guess. Which items actually earn you anything?",
      },
      {
        title: "Dead stock eating your capital",
        body: "Goods that have not moved in five months are cash sitting on a shelf. Without a system, nobody notices until it is expired or out of season.",
      },
    ],
    features: [
      {
        icon: Boxes,
        title: "Stock that counts itself",
        body: "Every sale reduces stock in real time. You always know what is on the shelf without closing the shop to count it.",
      },
      {
        icon: Bell,
        title: "Warnings before you run out",
        body: "You get an alert while there is still time to restock, not after a customer has already left.",
      },
      {
        icon: AlarmClock,
        title: "A closing summary on your phone",
        body: "Sales, stock movements and what needs attention — sent to you at closing time, whether or not you were in the shop.",
      },
      {
        icon: ShieldCheck,
        title: "Attendant accounts and discrepancy flags",
        body: "Each person has their own login. Unusual voids, discounts and gaps between stock and sales are flagged for you to look at.",
      },
    ],
    featureGroups: [
      {
        title: "Smart Till Plus — from KES 65,000",
        lede: "The same till, plus the numbers that help you decide what to stock, drop and promote.",
        items: [
          {
            icon: Coins,
            title: "Profit per item, not just sales per item",
            body: "The best seller and the biggest earner are often two different products. Plus shows you which is which.",
          },
          {
            icon: TrendingUp,
            title: "Reorder suggestions with numbers behind them",
            body: "How much to buy and when, based on how the item has actually sold in your shop, not a guess.",
          },
          {
            icon: LineChart,
            title: "Demand you can plan for",
            body: "Month end, school opening, holidays, rainy season. The pattern is already in your sales history — we surface it before the rush.",
          },
          {
            icon: Package,
            title: "Dead stock, flagged",
            body: "Items that have not moved in weeks are listed with the money tied up in them, so you can discount them while they are still worth something.",
          },
          {
            icon: Send,
            title: "Customer list and WhatsApp offers",
            body: "Customers who agree join a list you own. New stock or a promotion goes out in one message, not one chat at a time.",
          },
        ],
      },
      {
        title: "Full Business System — from KES 120,000",
        lede: "For businesses selling at the counter and online. This is shop plus web — not a till-only product.",
        items: [
          {
            icon: ShoppingCart,
            title: "Online shop with M-Pesa",
            body: "Customers browse, order and pay from their phone. Stock is the same list as the counter — you never sell the last item twice.",
          },
          {
            icon: LayoutDashboard,
            title: "Orders, delivery and a staff back-office",
            body: "Web orders appear where your counter team already works. Customers can follow delivery. Your team updates stock and messages from one place.",
          },
          {
            icon: Sparkles,
            title: "AI assistant on web or WhatsApp",
            body: "Prices, availability and delivery questions answered from your real information, day and night, with a clean handover when a person is needed.",
          },
        ],
      },
    ],
    included: [
      "Your product list, prices and suppliers loaded in with you",
      "Attendant and owner accounts with the right permissions",
      "Receipts, daily reports and M-Pesa reconciliation at the till",
      "Training for every person who will touch the till",
      "We start on one counter with your real products",
      "Support while your team settles in",
    ],
    steps: [
      {
        title: "We sit at your counter",
        body: "Half a day watching how you actually sell, count and reorder. The system is shaped around that, not the other way round.",
      },
      {
        title: "We load your real products",
        body: "Your items, your prices, your suppliers, your units. Not a demo catalogue you have to replace later.",
      },
      {
        title: "You sell on one till",
        body: "Your team uses it with your real products. We stay close until the numbers match how the shop actually runs.",
      },
      {
        title: "We train and hand over",
        body: "Every attendant gets trained in person. You get the reports on your phone from day one.",
      },
    ],
    outcomes: [
      { before: "Counting stock by hand at closing", after: "Stock count that is always current" },
      { before: "Finding out you are out of stock from a customer", after: "Warned before it happens" },
      { before: "Guessing what to reorder", after: "A restock list with quantities — on Plus" },
      { before: "Profit known at month end, roughly", after: "Profit per item, visible daily — on Plus" },
    ],
    faqs: [
      {
        q: "Do I need to buy new machines?",
        a: "Usually not. Prices are for software. It runs on a computer, laptop or tablet you already have. If you want a receipt printer or barcode scanner we advise before you spend — we do not push hardware.",
      },
      {
        q: "What if my attendants are not good with computers?",
        a: "The selling screen is deliberately simple — find item, add, take payment. We train every attendant in person, and the owner's reports stay on your own phone.",
      },
      {
        q: "Can I start small?",
        a: "Yes. Smart Till is KES 30,000 and is a complete till. Smart Till Plus is KES 65,000 if you want profit, reorders and customer offers. Full Business, from KES 120,000, is for selling in the shop and online. Already on Smart Till? Plus is the difference only — KES 35,000.",
      },
      {
        q: "Is Full Business a POS?",
        a: "It includes the till, and it also includes an online shop, delivery tracking and a back-office. We recommend it when you already sell — or are ready to sell — beyond the counter. Most shops start on Smart Till or Plus.",
      },
      {
        q: "Is my business data safe?",
        a: "Your data is yours. It is backed up, access is per-person, and we can export everything to you at any time. We never sell or share business data.",
      },
    ],
    relatedWork: "zelt-solar-electricals",
  },
  {
    slug: "growth-services",
    name: "Growth services",
    navLabel: "Growth services",
    icon: Zap,
    pitch: "Being found, being paid, and staying online — the work that keeps the first three working.",
    headline: "The support work that turns a good system into more customers",
    intro:
      "A beautiful site nobody finds earns nothing. These are the services that get you in front of people, let them pay you easily, and keep everything online and safe — sold on their own or added to any build.",
    priceFrom: "KES 5,000",
    priceNote: "Per service. Most SMEs start with search setup and one month of content.",
    costsToday: [
      {
        title: "Ranked on page ten of Google",
        body: "Page ten gets no visitors. If you do not appear when someone searches your product and your area, that customer never knew you existed.",
      },
      {
        title: "Posting when you remember to",
        body: "Two posts this week, nothing for a month. The algorithm stops showing you, and customers assume you closed.",
      },
      {
        title: "Payments that need a back-and-forth",
        body: "Every 'send to this till, then screenshot me' is a chance for the customer to change their mind.",
      },
    ],
    features: [
      {
        icon: Search,
        title: "Search setup (SEO)",
        body: "Being found on Google when someone searches what you sell in your area — page titles, descriptions, location data, sitemap, and your Google Business listing.",
      },
      {
        icon: CalendarClock,
        title: "Social content and scheduling",
        body: "Captions and posts drafted with AI, approved by a human, scheduled to go out consistently across your pages. Your voice, multiplied — not replaced.",
      },
      {
        icon: Wallet,
        title: "M-Pesa and card payments",
        body: "Customers pay on the site and the confirmation reaches you automatically, so no one is chasing screenshots.",
      },
      {
        icon: ServerCog,
        title: "Domain, hosting and backups",
        body: "Your address on the internet, kept live, fast and backed up, with the domain registered in your business name.",
      },
      {
        icon: Lock,
        title: "Security certificate and protection",
        body: "HTTPS, spam protection on forms, and sensible security headers. Browsers warn customers away from sites without this.",
      },
      {
        icon: BarChart3,
        title: "Analytics you can read",
        body: "How many people came, what they looked at, and what they did about it — in plain numbers, not a dashboard you never open.",
      },
    ],
    included: [
      "Search setup — KES 5,000 one off",
      "Domain, hosting and security certificate — KES 10,000 for the first year",
      "Social content and scheduling — KES 5,000 per month",
      "Extra chat channel (Facebook or Instagram) — KES 10,000",
      "M-Pesa integration — quoted, depends on your till and paybill setup",
      "Google Business Profile setup — included with search setup",
    ],
    steps: [
      {
        title: "We check what you have",
        body: "Domain, pages, listings, socials. Often half of what you need already exists and just needs fixing.",
      },
      {
        title: "We fix the foundations first",
        body: "Search setup and payments before anything else. That is where the fastest return is.",
      },
      {
        title: "We keep it consistent",
        body: "For content, you approve a month at a time. Nothing goes out in your name that you have not seen.",
      },
    ],
    outcomes: [
      { before: "Not appearing in local searches", after: "Found when people search your service" },
      { before: "Posting whenever there is time", after: "Consistent, approved, scheduled" },
      { before: "Chasing payment screenshots", after: "Paid on the site, confirmed automatically" },
    ],
    faqs: [
      {
        q: "How fast does search setup work?",
        a: "Technical fixes register with Google in days. Real ranking movement takes weeks and depends on your competition. Anyone promising page one in a week is selling you something else.",
      },
      {
        q: "Do you write the social posts yourselves?",
        a: "AI drafts them at volume and a person edits and approves before anything publishes. Fully automatic posting with no human eye on it performs badly and eventually embarrasses the business.",
      },
      {
        q: "What does M-Pesa integration involve?",
        a: "It depends on whether you have a till, a paybill, or neither, and on Safaricom's approval. We check your setup first, then quote — we do not guess a price for it.",
      },
    ],
    relatedWork: "zelt-solar-electricals",
  },
];

export function getSolution(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}

/** Cross-cutting reasons to choose Mojak, used on the home and about pages. */
export const principles: Feature[] = [
  {
    icon: BadgeCheck,
    title: "We sell outcomes, not software",
    body: "Nobody wants AI. People want fewer lost sales, fewer manual hours and clearer numbers. Every system we build is judged on that.",
  },
  {
    icon: Brain,
    title: "Built on your information",
    body: "Your prices, your products, your policies. An assistant that answers from your own facts cannot invent a price and lose you money.",
  },
  {
    icon: PhoneCall,
    title: "A human is always one tap away",
    body: "The fastest way to lose a customer to automation is trapping them in it. Every system we build hands over to a person cleanly.",
  },
  {
    icon: Receipt,
    title: "No forced Mojak labour fees",
    body: "You pay to build it, then only when you need something changed. Platform costs for WhatsApp or paid AI are separate and shown upfront. Optional Care Plan if you want one monthly figure.",
  },
];
