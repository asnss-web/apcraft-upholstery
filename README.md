# A.P Craft Upholstery

Website for A.P Craft Upholstery (Vaughan, serving Toronto & the GTA) — https://apcraftupholstery.ca

Next.js 16 (App Router), TypeScript, plain CSS modules. No database, no CMS: content lives in
`src/lib/` (`content.ts`, `portfolio.ts`) and photos in `public/images/`.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build check
```

## Where things are

| What                                  | Where                              |
| ------------------------------------- | ---------------------------------- |
| Phone, email, address (shared copy)   | `src/lib/content.ts` (the structured-data address is in `src/app/layout.tsx`) |
| Portfolio items and categories        | `src/lib/portfolio.ts`             |
| Quote form → email (Resend)           | `src/app/api/quote/route.ts`       |
| Colors, fonts, spacing tokens         | `src/app/globals.css`              |
| Google Search Console verification    | `public/google759baa2e37960e64.html` — **do not delete** |

## Deploying and DNS

See [`DEPLOYMENT.md`](./DEPLOYMENT.md) for the deploy commands, the DNS records and the quote-form setup.
See [`TRANSFER.md`](./TRANSFER.md) for moving the Vercel project, repo and Resend domain to a new owner.

Environment variables are listed in `.env.example`. The only required one is `RESEND_API_KEY`.
