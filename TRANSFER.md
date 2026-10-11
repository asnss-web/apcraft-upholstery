# Transferring the site to the client

Today: the domain and Private Email are in the client's Namecheap. Hosting (Vercel), code
(GitHub) and quote-form email (Resend) are in the developer's accounts. This lists what moves
and in what order. **Do the steps in this order; the site keeps working throughout if you do.**

Do not touch Nameservers or Parking Page in Namecheap at any point (see `DEPLOYMENT.md`).

## 0. Before starting

- The client creates free accounts: Vercel (Hobby), GitHub, Resend — each with an email they
  will keep long term (ideally the business Gmail, `upholsterya.p95@gmail.com`).
- Fast-forward `main` to the production code and push, so the repo they receive is current:
  `git checkout main && git merge --ff-only editorial-redesign && git push origin main`.
- Remember what is *not* in the repo: `RESEND_API_KEY` (Vercel env, Production only).

## 1. GitHub repo → client

Repo: `asnss-web/apcraft-upholstery`.
Settings → General → Danger Zone → **Transfer ownership** → client's GitHub username.
They accept via email. Their account then owns the code; keep yourself as collaborator if you
want to continue maintaining it.

## 2. Resend domain → client

Resend domains cannot be moved between accounts. So:

1. In the client's Resend: Domains → Add `apcraftupholstery.ca` (us-east-1).
2. It shows *new* DNS values. In Namecheap → Advanced DNS replace the current records
   (`resend._domainkey` TXT, `rsend` and `send` CNAMEs) with the new ones. Press **Verify DNS Records**.
3. The client creates an API key (Sending access, scoped to this domain) in their Resend.
4. Only after step 2 is Verified: put the key into Vercel (step 3 below) and redeploy.
5. Remove the domain from the developer's Resend afterwards.

Mail sent during the swap falls back to the visitor's mail-app draft, so nothing is lost silently.

## 3. Vercel project → client

Project `ap-craft` (team `asnss-projects`, id `prj_SxISir8qK2oPkFM7Edtf8frKXAH3`).
Project → Settings → General → **Transfer Project** → client's Vercel account. Domains
`apcraftupholstery.ca` and `www` move with it (DNS at Namecheap stays unchanged, A `76.76.21.21`
and CNAME `cname.vercel-dns.com` still apply).

Then, in the client's Vercel:

1. Project → Settings → Environment Variables → add `RESEND_API_KEY` (Production) with the
   client's own key from step 2.
2. Settings → Git → connect the transferred GitHub repo, production branch `main`. From now on a
   push to `main` deploys; the `vercel alias set` step in `DEPLOYMENT.md` is no longer needed for
   the real domain.
3. Redeploy once.

## 4. Verify

- https://apcraftupholstery.ca → 200, `www` → 308 to apex.
- Submit the quote form with a photo; the email arrives at `upholsterya.p95@gmail.com`.
- `POST /api/quote` with a junk field returns 400 (key live) rather than 503 (key missing).
- Search Console: verification file `public/google759baa2e37960e64.html` must still be deployed.
  The property is under the developer's Google account; the client can be added as Owner
  (Settings → Users and permissions), or add their own property with the same file method.

## 5. Clean up the developer side

- Remove the developer's Resend domain and old API key.
- Delete the `ap-craft.vercel.app` alias if it is still attached anywhere.
- Update the client handover page (`~/apcraft-handover`): change the "Хто чим керує" table so
  hosting, form email and code say "Ваш", then redeploy it.
