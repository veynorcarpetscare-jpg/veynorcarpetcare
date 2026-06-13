# VEYNOR Carpet & Upholstery Care

Production-ready local business website for `veynorcarpetcare.com`.

Built with:

- Next.js 16.2.7
- TypeScript
- Tailwind CSS 4
- App Router
- Static export for Cloudflare Pages compatibility
- Cloudflare Pages Functions for secure Telegram lead delivery

## Business Profile

- Business: VEYNOR Carpet & Upholstery Care
- Primary market: Walnut Creek, California
- Headquarters: Concord, California
- Phone: `(510) 516-6677`
- Email: `veynor.carpetscare@gmail.com`

## What Is Included

- Full page set:
  - Home
  - Services
  - About
  - Service Areas
  - Gallery
  - Reviews
  - FAQ
  - Contact
- Twelve dedicated city SEO landing pages:
  - `/walnut-creek-carpet-cleaning`
  - `/concord-carpet-cleaning`
  - `/pleasant-hill-carpet-cleaning`
  - `/lafayette-carpet-cleaning`
  - `/martinez-carpet-cleaning`
  - `/orinda-carpet-cleaning`
  - `/moraga-carpet-cleaning`
  - `/danville-carpet-cleaning`
  - `/san-ramon-carpet-cleaning`
  - `/oakland-carpet-cleaning`
  - `/berkeley-carpet-cleaning`
  - `/richmond-carpet-cleaning`
- Local SEO implementation:
  - LocalBusiness schema
  - FAQ schema
  - Review schema
  - Breadcrumb schema
  - Canonical URLs
  - Open Graph metadata
  - Twitter Card metadata
  - `robots.txt`
  - generated `sitemap.xml`
- Searchable service area directory
- Editable review data store
- Replaceable before-and-after gallery placeholder system
- Cloudflare Pages-ready static output

## Project Structure

- `app/`: App Router pages, metadata routes, city landing pages
- `components/`: reusable UI sections and form logic
- `lib/data/`: services, reviews, FAQs, gallery, service areas, city page content
- `lib/schema.ts`: JSON-LD generators
- `functions/api/`: Cloudflare Pages Functions for server-side lead handling
- `public/gallery/`: replaceable before-and-after placeholder assets
- `public/og-cover.png`: social sharing image

## Local Development

Install dependencies:

```bash
npm install
```

Run the local dev server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Quality Checks

Run linting:

```bash
npm run lint
```

Run TypeScript checks:

```bash
npm run typecheck
```

Run the full verification chain:

```bash
npm run check
```

## Production Build

Generate the static Cloudflare Pages output:

```bash
npm run build
```

The exported site is written to:

```text
out/
```

Preview the exported build locally:

```bash
npm run preview
```

## Cloudflare Pages Deployment

This project is configured for static export and Cloudflare Pages Functions.

Recommended Cloudflare Pages settings:

- Framework preset: `Next.js (Static HTML Export)` or `None`
- Build command: `npm run build`
- Build output directory: `out`
- Node.js version: `22`

Deployment flow:

1. Push this project to a Git repository.
2. Create a new Cloudflare Pages project.
3. Connect the repository.
4. Set the build command to `npm run build`.
5. Set the output directory to `out`.
6. Add the custom domain `veynorcarpetcare.com`.

## Environment Variables

Cloudflare Pages environment variables required for Telegram delivery:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`

Optional if you want messages sent into a specific Telegram topic:

- `TELEGRAM_MESSAGE_THREAD_ID`

## Telegram Setup

1. Create a Telegram bot with `@BotFather`.
2. Copy the bot token that BotFather gives you.
3. Add the bot to the Telegram chat or group where you want new leads to arrive.
4. Send at least one message in that chat after the bot is added.
5. Open:

```text
https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
```

6. Find the target `chat.id` in the response and use that value as `TELEGRAM_CHAT_ID`.
7. If you are posting into a Telegram forum topic, also find `message_thread_id` from a topic message and set `TELEGRAM_MESSAGE_THREAD_ID`.
8. Add the values in Cloudflare Pages project settings, then redeploy.

## Content Maintenance

Update service and page content here:

- `lib/data/services.ts`
- `lib/data/service-areas.ts`
- `lib/data/city-pages.ts`
- `lib/data/faqs.ts`

Update review content here:

- `lib/data/reviews.ts`

Update gallery items here:

- `lib/data/gallery.ts`

Replace gallery placeholder artwork here:

- `public/gallery/`

Keep the same file names for a quick swap, or update the file paths in `lib/data/gallery.ts`.

## Contact Form Behavior

Website forms post to a Cloudflare Pages Function at `/api/lead`, which sends the request to Telegram through the Telegram Bot API without opening the visitor's mail app.

If Telegram variables are not configured yet, the site falls back to the existing FormSubmit email delivery so leads are not lost during setup.

Primary conversion paths remain:

- tap to call
- tap to text

## Notes

- The review data is intentionally isolated so verified customer reviews can be swapped in quickly.
- The gallery assets are lightweight SVG placeholders to keep performance high until real job photos are available.
- The site uses `next/image` with unoptimized static assets because Cloudflare Pages deployment is configured as a static export.
