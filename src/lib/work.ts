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
      label: "Open the live site",
      href: "https://visumhotel.netlify.app/",
      external: true,
      note: "Live and online. Open it on your phone and try the concierge.",
    },
    summary:
      "A boutique garden hotel that was taking every booking enquiry by phone. We built the website, a 24-hour concierge assistant, and a reservation desk their staff run themselves.",
    brief:
      "Visum Park is a garden hotel with rooms, a restaurant, conference halls and an events lawn. Enquiries arrived by phone during office hours only, guests repeated the same questions about rates and directions, and there was no way to reach past guests when there was something on. Everything needed to work on a phone, because that is how guests arrive.",
    challenge: [
      {
        title: "Every question went to the front desk",
        body: "Rates, check-in time, whether there is parking, how far from Nairobi, is there a pool. Staff answered the same list all day, and only while the desk was manned.",
      },
      {
        title: "Enquiries after hours were simply lost",
        body: "A traveller deciding at 10pm had no way to reach the hotel, and the hotel had no record that they had tried.",
      },
      {
        title: "No way to reach past guests",
        body: "A Sunday buffet, a holiday lunch, a wedding season offer — no list, no channel, no reach.",
      },
    ],
    built: [
      {
        title: "A complete website on the hotel's real information",
        body: "Rooms and published rates, restaurant, conference packages with seating layouts, events garden, gallery, directions and policies. Every figure comes from one file, so the site, the concierge and the search listing can never disagree.",
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
        title: "A reservation desk for staff",
        body: "A private, signed-in area where the team sees every enquiry by reference, and sends offers to guests who opted in — Sunday buffet, Madaraka Day, Christmas — from prepared message templates over SMS and WhatsApp.",
      },
    ],
    proves: [
      "We build complete, working systems, not mockups — real routes, real forms, real data",
      "An AI assistant can be grounded so tightly in a client's facts that it cannot invent a price",
      "Staff with no technical background can run the back office themselves",
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
      label: "Open the demo build",
      href: "https://zeltsolarandelectricals.netlify.app/",
      external: true,
      note: "Live and online. Open it on your phone and try the AI solar advisor.",
    },
    summary:
      "A solar and electrical retailer with two Nairobi shops, a catalogue customers could not browse online, and an AI advisor that now sizes systems and estimates savings for them.",
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
