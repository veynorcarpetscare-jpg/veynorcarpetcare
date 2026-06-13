# Cloudflare Pages Deployment Guide

## Deployment Model

This site is configured as a static export with Cloudflare Pages Functions.

- Framework: Next.js App Router
- Output mode: `output: "export"`
- Build output directory: `out`
- Server-side lead handler: `functions/api/lead.ts`

## Local Verification

Run:

```bash
npm install
npm run build
```

Optional local preview:

```bash
npm run preview
```

## Deploy With Git Integration

1. Push the project to GitHub or GitLab.
2. In Cloudflare, create a new Pages project.
3. Connect the repository.
4. Set:
   - Build command: `npm run build`
   - Build output directory: `out`
   - Node.js version: `22`
5. Add Cloudflare Pages environment variables:
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`
   - optional: `TELEGRAM_MESSAGE_THREAD_ID`
6. Save and trigger the first production deployment.

## Telegram Bot Setup

1. Create the bot in Telegram with `@BotFather`.
2. Copy the bot token and save it as `TELEGRAM_BOT_TOKEN`.
3. Add the bot to the chat or group that should receive website leads.
4. Send one message in that chat after the bot is added.
5. Open:

```text
https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
```

6. Find the chat's `id` value and save it as `TELEGRAM_CHAT_ID`.
7. If you use Telegram topics, capture the topic `message_thread_id` and save it as `TELEGRAM_MESSAGE_THREAD_ID`.
8. Redeploy after adding the variables.

## Deploy With Direct Upload

If you do not want Git-based deployment:

1. Build locally:

```bash
npm run build
```

2. Deploy the `out` folder with Wrangler:

```bash
npx wrangler pages deploy out
```

## Project Files That Matter For Cloudflare

- `next.config.ts`
  - enables static export
- `public/_headers`
  - adds cache and security headers for static assets
- `functions/api/lead.ts`
  - sends website leads to Telegram securely on the server side
- `out/`
  - final deployment artifact after build

## Recommended Cloudflare Configuration

- Production branch: your main release branch
- Preview deployments: enabled
- Custom domain: `veynorcarpetcare.com`
- Optional `www` redirect handled at the DNS or Cloudflare routing layer

## After Deployment

- Open the deployed homepage and a city page.
- Verify:
  - hero call CTA
  - hero SMS CTA
  - sticky mobile CTA bar
  - contact form submission
  - carpet quote-builder submission
  - upholstery quote-builder submission
  - `robots.txt`
  - `sitemap.xml`
  - social preview image

## Official References

- Next.js static export:
  - https://nextjs.org/docs/app/guides/static-exports
- Cloudflare Pages Git integration:
  - https://developers.cloudflare.com/pages/configuration/git-integration/
- Cloudflare Pages custom headers:
  - https://developers.cloudflare.com/pages/configuration/headers/
- Cloudflare Pages direct upload:
  - https://developers.cloudflare.com/pages/get-started/direct-upload/
- Cloudflare Pages serving behavior:
  - https://developers.cloudflare.com/pages/configuration/serving-pages/
