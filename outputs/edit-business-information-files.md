# Files To Edit Business Information

## Core Business Details

Primary file for business name, phone, email, domain, headquarters, and primary market:

- `lib/site.ts`

## Service Area Coverage

If cities served change, update:

- `lib/data/service-areas.ts`

## City Landing Page Content

If local copy, city FAQs, or city-specific descriptions change, update:

- `lib/data/city-pages.ts`

## FAQ Copy That Mentions Coverage Or Quoting

If the main FAQ answers or city coverage wording changes, update:

- `lib/data/faqs.ts`

## Review Contact References

If business phone or service naming changes and review schema should stay aligned:

- `lib/data/reviews.ts`
- `lib/schema.ts`

## Contact And Conversion UI Usage

These files read values from `lib/site.ts` and may need review if the business data model changes:

- `components/call-to-action-group.tsx`
- `components/mobile-cta-bar.tsx`
- `components/site-header.tsx`
- `components/site-footer.tsx`
- `components/contact-form.tsx`
- `app/contact/page.tsx`
- `app/page.tsx`

## Social Preview And Brand Assets

If the phone number, domain, or branding inside the generated social image should change, update:

- `work/generate-assets.mjs`
- `public/og-cover.png`
- `public/og-cover.svg`
- `app/icon.svg`

## Documentation

If you want the project documentation to stay synchronized with the live business information, also update:

- `README.md`
