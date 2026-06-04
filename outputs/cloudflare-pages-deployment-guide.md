# Cloudflare Pages Deployment Guide

## Deployment Model

This site is configured as a static export.

- Framework: Next.js App Router
- Output mode: `output: "export"`
- Build output directory: `out`

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
5. Save and trigger the first production deployment.

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
