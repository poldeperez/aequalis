# SEO Configuration for Aequalis Advocades

This document describes the SEO optimization setup for the website.

## Overview

The website is configured with comprehensive SEO features including:
- Dynamic metadata generation based on locale
- Open Graph and Twitter Card support
- Structured data (JSON-LD) for search engines
- Sitemap and robots.txt
- Multi-language support with hreflang tags

## Metadata Configuration

### Dynamic Page Titles

The page title that appears in Google search results is controlled by the `meta.entry` field in your translation files:

- **Spanish** (`src/i18n/messages/es.json`): `"entry": "Aequalis Advocades | Abogados de extranjería en España"`
- **Catalan** (`src/i18n/messages/ca.json`): `"entry": "Aequalis Advocades | Advocats d'estrangeria a Espanya"`
- **English** (`src/i18n/messages/en.json`): `"entry": "Aequalis Advocades | Immigration lawyers in Spain"`

To change how your site appears in Google, simply update the `meta.entry` value in these files.

### Metadata Fields

Each language file (`es.json`, `ca.json`, `en.json`) contains:

```json
{
  "meta": {
    "title": "Aequalis Advocades",
    "entry": "Aequalis Advocades | Your title here",
    "description": "Your description here"
  }
}
```

- **`title`**: Brand name used in templates
- **`entry`**: Main page title shown in search results
- **`description`**: Page description shown in search results

## Files Created

### 1. `/src/app/[locale]/layout.tsx`
- Generates dynamic metadata for each locale
- Includes Open Graph tags for social sharing
- Sets up Twitter Cards
- Configures canonical URLs and alternate language links
- Uses `meta.entry` for the page title

### 2. `/src/app/layout.tsx`
- Sets the base URL (`metadataBase`) for the site
- Configures favicon and apple touch icon

### 3. `/src/app/sitemap.ts`
- Dynamically generates sitemap.xml
- Includes all pages in all languages
- Sets change frequency and priority
- Includes hreflang alternatives

### 4. `/src/app/robots.ts`
- Generates robots.txt
- Allows all search engines
- Points to sitemap location
- Disallows indexing of /api/ and /admin/

### 5. `/src/lib/schema.ts`
- Helper functions for structured data (JSON-LD)
- Organization schema for business information
- Service schema for legal services
- Breadcrumb schema for navigation
- WebPage schema for individual pages

## Structured Data (JSON-LD)

The homepage includes two structured data schemas:

1. **Organization Schema**: Tells search engines about your law firm
2. **WebPage Schema**: Describes the current page

These help Google show rich results and improve SEO.


## Verification Codes

Add verification codes in `/src/app/[locale]/layout.tsx`:

```typescript
verification: {
  google: 'your-google-verification-code',
  bing: 'your-bing-verification-code',
}
```

## Testing SEO

### Local Testing
1. Run `npm run build` to generate static files
2. Check `.next/server/app/sitemap.xml` for sitemap
3. Check `.next/server/app/robots.txt` for robots.txt

### Production Testing
After deployment, test with these tools:

1. **Google Search Console**: Submit sitemap and monitor indexing
2. **Rich Results Test**: https://search.google.com/test/rich-results
3. **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly
4. **PageSpeed Insights**: https://pagespeed.web.dev/

### SEO Testing Tools
- **Meta tags**: View page source and check `<head>` section
- **Open Graph**: Use https://www.opengraph.xyz/
- **Twitter Cards**: Use https://cards-dev.twitter.com/validator
- **Structured Data**: Use Google's Rich Results Test

## How It Works

1. When a user visits your site, Next.js determines their locale
2. The `generateMetadata` function loads the appropriate translation file
3. It uses `meta.entry` as the page title and `meta.description` for the description
4. Search engines see these values when crawling your site
5. Your site appears in Google with the exact text from `meta.entry`

## Important URLs

After deployment, submit these to Google Search Console:

- Main sitemap: `https://www.aequalisadvocades.com/sitemap.xml`
- Spanish home: `https://www.aequalisadvocades.com/es`
- Catalan home: `https://www.aequalisadvocades.com/ca`
- English home: `https://www.aequalisadvocades.com/en`

## Adding New Pages

When you add a new page, update `/src/app/sitemap.ts`:

```typescript
const pages = ['', '/services', '/about', '/contact', '/privacy', '/legal', '/your-new-page']
```

## Keywords

Current keywords include:
- abogados extranjería
- immigration lawyers
- advocats estrangeria
- visados España
- residencia España
- nacionalidad española
- homologación títulos

To add more, update the `keywords` array in `/src/app/[locale]/layout.tsx`.

## Next Steps

1. Update placeholder values in `/src/lib/schema.ts`
2. Add verification codes when available
3. Create an OG image at `/public/og-image.jpg` (1200x630px)
4. Deploy the site
5. Submit sitemap to Google Search Console
6. Monitor indexing and search appearance
7. Regularly update `meta.entry` in translation files to optimize titles
