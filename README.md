# Mojak Prime AI — company website

The public site for **Mojak Prime AI Limited**: AI-powered websites, chat assistants and
point-of-sale systems for businesses in Nairobi and across Kenya.

Built for two audiences at once — a business owner who found us on Google, and a sales agent
standing in a shop with a phone in their hand.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npx eslint .     # lint
```

Requires Node 20 or newer.

## Before it goes live — three things to fill in

Everything factual lives in **`src/lib/company.ts`**. Three fields are deliberately empty because
we do not have the details yet, and the site refuses to invent them:

| Field | What happens once you set it |
| --- | --- |
| `phone` | Call buttons appear in the header, footer, phone bar, contact page and CTA bands |
| `whatsapp` | A WhatsApp button appears in the footer, phone bar and contact page |
| `socials` | A social links block appears in the footer and on the contact page |

```ts
phone: { value: "+254 7XX XXX XXX", tel: "+2547XXXXXXXX" },
whatsapp: { value: "+254 7XX XXX XXX", number: "2547XXXXXXXX" },
socials: [{ name: "Facebook", handle: "Mojak Prime AI", url: "https://facebook.com/…" }],
```

Also update `siteUrl` in the same file once the domain is registered. It feeds the canonical
URLs, sitemap, robots file and social sharing previews.

## Where the content lives

| File | Controls |
| --- | --- |
| `src/lib/company.ts` | Name, contacts, hours, navigation, headline claims |
| `src/lib/solutions.ts` | The four offerings: features, inclusions, steps, outcomes, FAQs |
| `src/lib/pricing.ts` | Packages, add-ons, pay-as-you-go rates, Care Plan, small print |
| `src/lib/work.ts` | Case studies, demo links, screenshots, metrics |
| `src/lib/content.ts` | Losses, process, industries, home FAQs, the roadmap strip |
| `src/lib/assistant.ts` | Everything the on-site assistant can answer |

Change a price in `pricing.ts` and it updates the pricing page, the home page preview and the
assistant's answer in one edit.

## The assistant ("Prime")

The chat widget is the same architecture we sell to clients, running on our own site.

- **Retrieval is local.** `src/lib/assistant.ts` is a keyword-scored knowledge base built from our
  published information. No third-party account, no per-message cost, and it cannot invent a price.
- **It hands over.** Anything it does not know routes to email and the contact form.
- **The API is `/api/assistant`.** Swapping in a language model later means changing that one route;
  the grounding brief already lives in the knowledge base.

## Enquiries

`src/app/api/enquiry/route.ts` validates the form, drops bot submissions via a honeypot, issues a
reference (`MP-XXXXXXX`) and logs it server-side. Point that log at the company inbox, a Google
Sheet or a CRM and the flow is live end to end.

## Demos shown to customers

- **Visum Park Hotel** — live at [visumhotel.netlify.app](https://visumhotel.netlify.app/), linked from `/work`.
- **Zelt Solar & Electricals** — live at [zeltsolarandelectricals.netlify.app](https://zeltsolarandelectricals.netlify.app/), linked from `/work`.
  A local copy also sits in `public/demos/zelt/` as a fallback if Netlify is down during a pitch.

Screenshots on the case study pages are real captures, regenerated with:

```bash
powershell -ExecutionPolicy Bypass -File scripts\build-assets.ps1   # case study imagery
powershell -ExecutionPolicy Bypass -File scripts\shot-advisor.ps1   # the Zelt advisor shot
powershell -ExecutionPolicy Bypass -File scripts\shots.ps1          # every page, for review
```

## Notes on the build

- **Next.js 16** App Router, TypeScript, Tailwind CSS v4, Lucide icons. Every page is static.
- **Mobile first.** Fixed call / email / walkthrough bar on phones, full-screen navigation drawer,
  48px minimum tap targets, 17px body text so it reads at any age.
- **Accessibility.** Skip link, visible focus rings, labelled controls, `prefers-reduced-motion`
  respected, semantic headings throughout.
- **SEO.** Per-page metadata and canonicals, Open Graph and Twitter cards, `ProfessionalService`
  and `FAQPage` structured data, sitemap and robots.
- **Deployment.** `netlify.toml` is set up for Netlify with the Next.js adapter. Vercel needs no
  configuration at all.
