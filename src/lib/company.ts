/**
 * Single source of truth for everything factual about the company.
 * Change it here once and the pages, footer, assistant, sitemap and
 * structured data all follow.
 */

export const siteUrl = "https://mojakprimeai.com";

export const company = {
  name: "Mojak Prime AI",
  legalName: "Mojak Prime AI Limited",
  tagline: "AI systems that run parts of your business for you",
  descriptor:
    "Mojak Prime AI builds AI-powered websites, customer chat assistants and smart point-of-sale systems for businesses in Nairobi and across Kenya.",
  email: "mojakprimeai@gmail.com",
  city: "Nairobi",
  country: "Kenya",
  serviceArea: "Nairobi CBD and countrywide",
  hours: "Monday to Saturday, 8:00 AM to 6:00 PM",

  /**
   * Add the business line here and every call / WhatsApp button on the site
   * switches on automatically. Format: { value: "+254 7XX XXX XXX", tel: "+2547XXXXXXXX" }
   */
  phone: null as { value: string; tel: string } | null,
  whatsapp: null as { value: string; number: string } | null,

  /** Add entries as the accounts go live: { name, handle, url }. */
  socials: [] as { name: string; handle: string; url: string }[],
} as const;

export const nav = [
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "AI websites", href: "/solutions/ai-websites" },
      { label: "AI chat assistants", href: "/solutions/ai-chat-assistants" },
      { label: "AI point of sale", href: "/solutions/ai-point-of-sale" },
      { label: "Growth services", href: "/solutions/growth-services" },
    ],
  },
  { label: "Our work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
] as const;

/** Claims we can stand behind in front of a customer. Nothing invented. */
export const credibility = [
  {
    label: "Examples you can open",
    value: "Live",
    detail: "Hotel and solar examples on your phone — test the assistants yourself",
  },
  {
    label: "Answering hours",
    value: "24/7",
    detail: "Assistants reply when your shop is closed",
  },
  {
    label: "Typical build time",
    value: "1–3 weeks",
    detail: "From first meeting to a site you can show customers",
  },
  {
    label: "Mojak labour retainer",
    value: "Optional",
    detail: "No forced monthly Mojak fee. Platform usage is separate and shown upfront",
  },
] as const;
