/**
 * Factual company details. Public sentences live in site-content.ts.
 * Phone and WhatsApp stay empty until a real number exists.
 */

export const siteUrl = "https://mojakprimeai.netlify.app";

export const company = {
  name: "MOJAK",
  legalName: "Mojak Prime AI Limited",
  statement: "MOJAK helps businesses turn operational problems into practical digital systems.",
  email: "mojakprimeai@gmail.com",
  city: "Nairobi",
  country: "Kenya",
  hours: "Monday to Saturday, 8:00 AM to 6:00 PM",
  phone: null as { value: string; tel: string } | null,
  whatsapp: null as { value: string; number: string } | null,
  socials: [
    {
      name: "Facebook",
      handle: "Mojak Prime AI",
      url: "https://www.facebook.com/profile.php?id=61588904265805",
    },
    {
      name: "Instagram",
      handle: "@mojakprimeai",
      url: "https://www.instagram.com/mojakprimeai/",
    },
  ],
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "What we take on", href: "/what-we-take-on" },
  { label: "How we work", href: "/how-we-work" },
  { label: "Start", href: "/start" },
] as const;
