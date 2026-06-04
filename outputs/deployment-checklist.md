# Deployment Checklist

## Before Deploying

- Confirm the production domain is `veynorcarpetcare.com`.
- Confirm the phone number is `(510) 516-6677`.
- Confirm the email is `veynor.carpetscare@gmail.com`.
- Replace gallery placeholder images if real project photos are ready.
- Replace review copy with approved customer reviews if available.
- Run:
  - `npm install`
  - `npm run lint`
  - `npm run typecheck`
  - `npm run build`

## Cloudflare Pages Settings

- Build command: `npm run build`
- Build output directory: `out`
- Node.js version: `22`

## DNS And Domain

- Add `veynorcarpetcare.com` as the production custom domain in Cloudflare Pages.
- Add `www.veynorcarpetcare.com` only if you intend to support it.
- Verify the canonical domain choice matches your DNS setup.

## Final Content Checks

- Check homepage CTA buttons on desktop and mobile.
- Check contact page call, SMS, and email links.
- Check all 12 city pages for title, description, and local FAQ accuracy.
- Check service area coverage against actual business service boundaries.
- Check social share preview image.

## SEO Checks

- Verify `https://veynorcarpetcare.com/robots.txt`
- Verify `https://veynorcarpetcare.com/sitemap.xml`
- Verify homepage canonical URL
- Verify city page canonical URLs
- Submit the sitemap to Google Search Console after launch.

## Post-Launch Checks

- Open the live homepage on mobile and desktop.
- Test:
  - `tel:+15105166677`
  - `sms:+15105166677`
  - `mailto:veynor.carpetscare@gmail.com`
- Crawl the live site for broken links.
- Request indexing for the homepage and priority city pages in Google Search Console.
