# Deploy to Cloudflare Worker (modules.pilotinstitute.com)

## Prerequisites

- Node.js 18+
- A Cloudflare account with **pilotinstitute.com** added as a zone (so the custom domain can be used)

## First-time setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Log in to Cloudflare** (if not already)
   ```bash
   npx wrangler login
   ```

3. **Add the custom domain**  
   After the first deploy, in [Cloudflare Dashboard](https://dash.cloudflare.com) go to **Workers & Pages** → your worker **modules** → **Settings** → **Domains & Routes** → **Add** → **Custom Domain** and add `modules.pilotinstitute.com`.  
   If the zone **pilotinstitute.com** is on your account, you can also add the domain there; the `wrangler.toml` route may be enough for some setups.

## Deploy

From the project root:

```bash
npm run deploy
```

Or:

```bash
npx wrangler deploy
```

- The worker will be available at `modules.pilotinstitute.com` once the custom domain is attached (see above).
- It will also get a `*.workers.dev` URL (e.g. `modules.<your-subdomain>.workers.dev`) which you can use or ignore.

## Local development

```bash
npm run dev
```

Then open the URL Wrangler prints (e.g. http://localhost:8787).

## Project structure

All site content lives in **public/** — that’s what gets deployed, and it’s the only place you edit.

- **public/index.html** — Landing page (links to modules)
- **public/acs-lookup/** — FAA exam ACS code lookup
- **public/diamond-da40/** — Diamond DA40: elevation, pressure altitude & density altitude

Edit files in `public/` and run `npm run deploy` when you’re ready to publish.
