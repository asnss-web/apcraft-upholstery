# Deployment & DNS

Live site: https://apcraftupholstery.ca (Vercel project `ap-craft`, team `asnss-projects`).
Staging alias: https://ap-craft.vercel.app

Deploys run from the local working tree, not from git pushes:

```
vercel deploy --prod --yes --scope asnss-projects
vercel alias set <new-deployment-url> ap-craft.vercel.app --scope asnss-projects
```

The second command is required every time — `--prod` only moves the project's own
default alias, so `ap-craft.vercel.app` otherwise stays pinned to an old deployment.

## DNS at Namecheap (client's account, shared with us as domain manager)

The domain also runs Namecheap Private Email (MX `mx1`/`mx2.privateemail.com` plus an
SPF TXT record). **Do not switch the nameservers to Vercel** — that would take the
mailboxes down. Add these records alongside the existing mail ones, in
Advanced DNS, and delete the two parking records (`CNAME www → parkingpage.namecheap.com`
and the `URL Redirect`/`A @` parking entry).

### Website

| Type  | Host | Value               |
| ----- | ---- | ------------------- |
| A     | @    | 76.76.21.21         |
| CNAME | www  | cname.vercel-dns.com |

### Quote form email (Resend)

Resend uses CNAME-based SPF here, so nothing collides with Private Email's MX records.

| Type  | Host               | Value                                             |
| ----- | ------------------ | ------------------------------------------------- |
| TXT   | resend._domainkey  | see `p=MIGfMA0GCSq…` below (single line, no quotes) |
| CNAME | rsend              | rsend.forge.rmta.net                              |
| CNAME | send               | send.forge.rmta.net                               |
| TXT   | _dmarc             | `v=DMARC1; p=none;`  (optional)                   |

DKIM value:

```
p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDI55CJc1yYr2E7kaewEeFrHtj0G8Msx3NV0HMaenpyu1u0ff/mpPMO+kewtNSEwcdpUnXRoG1WV6djuvV3FZ52IqghoH62Fx0LW1b/lMz9igkjEmyF+9sX1jSWR63OZLCQBQ2rou0NtIoL586q6dbLwKgRWNpXWRPrDPk5vbSYaQIDAQAB
```

After the records propagate, confirm the domain in the Resend dashboard
(domain `apcraftupholstery.ca`, region us-east-1) — it flips to Verified on its own
once DKIM resolves.

## Quote form

`src/app/api/quote/route.ts` sends through Resend and needs `RESEND_API_KEY` in the
Vercel project's Production environment:

```
vercel env add RESEND_API_KEY production --scope asnss-projects
```

Optional overrides: `QUOTE_FROM_EMAIL`, `QUOTE_TO_EMAIL` (see `.env.example`).
A new env var only takes effect on the next deploy.

Until the key is set — or if Resend refuses the send, e.g. while the domain is still
unverified — the form falls back to opening a pre-filled message in the visitor's own
mail app, so a request is never silently lost.

## Client handover

Ukrainian handover page for the client: https://apcraft-handover.vercel.app
(static site in `~/apcraft-handover`, noindex; redeploy with
`vercel deploy --prod --yes --scope asnss-projects` from that directory).
