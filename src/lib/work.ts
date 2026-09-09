export type Shot = {
  src: string;
  alt: string;
  device: "desktop" | "mobile";
  caption: string;
};

export type CaseStudy = {
  slug: string;
  client: string;
  sector: string;
  location: string;
  year: string;
  /** Live, clickable, safe to hand to a customer in a shop. */
  demo: { label: string; href: string; external: boolean; note: string };
  summary: string;
  brief: string;
  challenge: { title: string; body: string }[];
  built: { title: string; body: string }[];
  proves: string[];
  stack: string[];
  status: string;
  inProgress?: string[];
  shots: Shot[];
  metrics: { value: string; label: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "visum-park-hotel",
    client: "Visum Park Hotel",
    sector: "Hospitality",
    location: "Machakos, Kenya",
    year: "2026",
    demo: {
      label: "Open the live example",
      href: "https://visumhotel.netlify.app/",
      external: true,
      note: "A live example you can open on your phone. Try the concierge and send a test enquiry.",
    },
    summary:
      "A boutique garden hotel that already had a website. We rebuilt the guest experience and added a 24-hour AI concierge, reservation capture, staff messaging for opted-in guests, and the automation layer around it.",
    brief:
      "Visum Park is a garden hotel with rooms, a restaurant, conference halls and an events lawn. They already had a public site, but guests still leaned on the phone for rates and availability, after-hours enquiries went cold, and there was no reliable way to reach past guests when there was something on. The brief was to improve what guests see, add AI that answers from the hotel's own facts, and give the desk tools for bulk offers and social follow-through — all on a phone, because that is how guests arrive.",
    challenge: [
      {
        title: "The site did not carry the full guest journey",
        body: "Information lived across the old website and the front desk. Guests still called for rates, check-in times, parking, distance from Nairobi and event details — the same list, all day, only while the desk was manned.",
      },
      {
        title: "Enquiries after hours were simply lost",
        body: "A traveller deciding at 10pm had no clean way to leave a structured request, and the hotel had no reliable record that they had tried.",
      },
      {
        title: "No way to reach past guests at scale",
        body: "A Sunday buffet, a holiday lunch, a wedding season offer — no owned list, no approved messaging path, no social automation the desk could run without starting from scratch every time.",
      },
    ],
    built: [
      {
        title: "A rebuilt guest website on the hotel's real information",
        body: "An upgraded site for rooms and published rates, restaurant, conference packages with seating layouts, events garden, gallery, directions and policies. Every figure comes from one source, so the site, the concierge and search listings stay aligned.",
      },
      {
        title: "A concierge that answers instantly",
        body: "It handles rates, availability questions, dining, halls, event planning, payment and M-Pesa, directions, check-in times and careers — in the hotel's own wording. It never confirms a booking, and says so, because only a person can.",
      },
      {
        title: "A four-step reservation flow",
        body: "Guests request a room, hall, event or planning service and get a reference number, with the same details pushed to WhatsApp, email or phone so nothing is lost in translation.",
      },
      {
        title: "Staff desk, bulk messaging and social automation",
        body: "A private area where the team sees every enquiry by reference, sends offers to guests who opted in — Sunday buffet, Madaraka Day, Christmas — from prepared templates over SMS and WhatsApp, and keeps social follow-through from becoming another manual chore.",
      },
    ],
    proves: [
      "We can upgrade a business that already has a website — not only start from a blank page",
      "An AI assistant can be grounded so tightly in a client's facts that it cannot invent a price",
      "Staff with no technical background can run enquiries and guest offers themselves",
      "The whole thing is designed for a phone first, because that is what guests use",
    ],
    stack: [
      "Next.js and TypeScript",
      "Locally-scored knowledge base, optional language model",
      "Structured data for Google (Hotel and FAQ)",
      "Static rendering, AVIF and WebP images",
    ],
    status: "Live",
    shots: [
      {
        src: "/work/visum-desktop.jpg",
        alt: "Visum Park Hotel website home page on a desktop screen",
        device: "desktop",
        caption: "The home page: availability search, rooms, dining, meetings and events.",
      },
      {
        src: "/work/visum-mobile.jpg",
        alt: "Visum Park Hotel website on a mobile phone screen",
        device: "mobile",
        caption: "On a phone, with the call, WhatsApp and reserve bar always in reach.",
      },
      {
        src: "/work/visum-concierge.jpg",
        alt: "The Visum Park concierge assistant answering a guest question",
        device: "mobile",
        caption: "The concierge answering from the hotel's own rates and policies.",
      },
    ],
    metrics: [
      { value: "24/7", label: "Guest questions answered" },
      { value: "9", label: "Pages of real hotel information" },
      { value: "1 file", label: "Where every rate is edited" },
    ],
  },
  {
    slug: "zelt-solar-electricals",
    client: "Zelt Solar & Electricals",
    sector: "Retail and e-commerce",
    location: "Nyamakima and Sheikh Karume Road, Nairobi",
    year: "2026",
    demo: {
      label: "Open the live example",
      href: "https://zeltsolarandelectricals.netlify.app/",
      external: true,
      note: "A live example you can open on your phone. Try the AI solar advisor.",
    },
    summary:
      "A solar and electrical retailer with two Nairobi shops. We put the catalogue online with real prices and an AI advisor that sizes systems and estimates savings — with commerce features still rolling out.",
    brief:
      "Zelt sells solar floodlights, street lights, CCTV floodlights, garden lights, backup batteries, panels and cabling from two shops in the city. Customers were calling to ask which product suits their compound and how much they would save — questions that take a trained person ten minutes each, repeated all day.",
    challenge: [
      {
        title: "The catalogue lived in the shop",
        body: "Customers upcountry could not see what was stocked or what it cost without calling first.",
      },
      {
        title: "Product advice does not scale",
        body: "'Which floodlight for my compound?' and 'how much will I save?' need someone knowledgeable. That person can only hold one conversation at a time.",
      },
      {
        title: "Orders and deliveries tracked by memory",
        body: "Nationwide delivery, but no way for a customer to see where their order had reached without ringing the shop.",
      },
    ],
    built: [
      {
        title: "A product site with the range and real prices",
        body: "Floodlights, street lights, CCTV floodlights, garden lights, backup systems, panels, cables and indoor lighting — each with the specifications customers actually ask about.",
      },
      {
        title: "An AI solar advisor",
        body: "It recommends wattage and battery capacity for a described space, estimates monthly savings from switching, explains installation, and answers on warranty, delivery and KEBS compliance — from Zelt's own product data.",
      },
      {
        title: "Search and social groundwork",
        body: "Search titles and descriptions targeting how people actually search — 'solar street lights Nairobi', 'home backup system Kenya' — plus sharing previews and the shop locations wired to maps.",
      },
      {
        title: "Mojak branding on the systems we run",
        body: "The assistant and the site carry a discreet 'Powered by Mojak Prime AI Limited' credit with our contact, so every visitor sees who built it.",
      },
    ],
    proves: [
      "We can turn a walk-in shop into a catalogue customers browse from anywhere",
      "An assistant can carry technical product advice, not just opening hours",
      "The look and speed hold up on a mid-range phone with weak data",
    ],
    stack: ["Fast static build", "Keyword-scored product knowledge base", "Search and social metadata", "Responsive down to small phones"],
    status: "Build in progress",
    inProgress: [
      "Cart, checkout and M-Pesa payment on the site",
      "Stock-aware ordering so out-of-stock items cannot be bought",
      "Simple delivery tracking — order received, in transit, arrived",
      "Discount and sale pricing managed by the shop",
    ],
    shots: [
      {
        src: "/work/zelt-desktop.jpg",
        alt: "Zelt Solar and Electricals website home page on a desktop screen",
        device: "desktop",
        caption: "The home page and product range, built for a retailer with real stock.",
      },
      {
        src: "/work/zelt-mobile.jpg",
        alt: "Zelt Solar and Electricals website on a mobile phone screen",
        device: "mobile",
        caption: "The same site on a phone, which is how most customers arrive.",
      },
      {
        src: "/work/zelt-advisor.jpg",
        alt: "The Zelt AI solar advisor answering a product question",
        device: "desktop",
        caption: "The AI advisor sizing a system and estimating savings.",
      },
    ],
    metrics: [
      { value: "9", label: "Product categories online" },
      { value: "16", label: "Advisor knowledge areas" },
      { value: "2", label: "Shops customers can now find" },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
