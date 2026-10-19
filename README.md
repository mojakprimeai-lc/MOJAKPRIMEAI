# MOJAK

Public site for Mojak Prime AI Limited.

Public copy lives in `src/lib/company.ts` and `src/lib/site-content.ts`.

## Run

```bash
npm install
npm run dev
npm run build
npm run start
```

Requires Node 20 or newer.

## Start form

Delivery uses Resend. Put these in `.env.local` and do not commit them:

- `RESEND_API_KEY`
- `RESEND_FROM` — a sender on a domain verified in Resend

Messages go to the company email in `src/lib/company.ts`. Until both variables are set, the form refuses to send and points to that email address.
