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

The Start form uses Netlify Forms so it can receive submissions before MOJAK owns a custom domain.

After deployment:

1. Enable Form detection in Netlify.
2. Redeploy so Netlify registers the `mojak-start` form.
3. Under Forms → Submission notifications, add an email notification for `mojakprimeai@gmail.com`.

The form definition is in `public/__forms.html`; its field names must remain aligned with `src/components/start-form.tsx`.
