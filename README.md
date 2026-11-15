# Kushala Shrestha portfolio

A single-page Software QA Engineer portfolio using Next.js App Router 16.4.6, React 19.3, TypeScript, and Tailwind CSS 4.3.3. The Plum & Coral design uses self-hosted DM Sans and DM Serif Display through next/font/google.

## Local development and validation

```sh
npm ci
npm run dev
npm run lint
npx --no-install tsc --noEmit --incremental false
npm run build
npm run start
```

Build before starting the production server. No services or credentials are needed for local development. Portfolio content is maintained in `data/portfolio.ts`; preserve the distinction between planned projects and completed work.

## Public domain and search metadata

The owner-confirmed production origin is **https://kushalashrestha.com.np**. Local development uses the ignored `.env.local` file. The tracked `.env.example` documents the same public value; do not commit `.env.local` or sensitive environment files.

For a future Vercel deployment, set this environment variable for the **Production** environment before building:

```text
SITE_URL=https://kushalashrestha.com.np
```

This prepares configuration only; it does not verify DNS routing, connect the domain to hosting, or mean the site has been deployed. No deployment is performed by these instructions. Restart local development after environment changes, and rebuild production output after setting or changing the variable. Preview builds may use the same confirmed origin when their metadata should point to production; never use a temporary preview URL as the canonical origin.

Blank or missing `SITE_URL` remains supported. The validator accepts a public HTTPS origin with no path, port, query, or fragment and rejects local addresses, IP addresses, reserved test/example domains, and malformed values; it does not verify DNS or ownership for you.

Rebuild after changing `SITE_URL`. Metadata and search routes are generated from the same validated origin:

- With no value: no canonical URL, Open Graph page URL, structured-data page URL, or sitemap URL is advertised. `/sitemap.xml` has no entries; `/robots.txt` allows crawling without advertising a sitemap. No localhost or placeholder origin is published.
- With a verified value: the homepage gets one canonical URL, Open Graph page URL, a single sitemap entry, and a sitemap reference in robots.txt. Section fragments are not separate pages.

Open Graph and Twitter titles/descriptions are available without a domain. Person JSON-LD contains only supplied identity, role, location, email, and confirmed GitHub/LinkedIn profiles. With the configured origin, expected outputs are:

- Canonical and Open Graph page URL: `https://kushalashrestha.com.np` (Next.js normalizes the root URL without a trailing slash)
- Open Graph and Twitter/X image: `https://kushalashrestha.com.np/og-image.png`
- Sitemap homepage entry: `https://kushalashrestha.com.np/`
- Robots sitemap reference: `https://kushalashrestha.com.np/sitemap.xml`

Inspect these generated outputs before publication; domain configuration does not deploy the site.

## Sharing image and personal assets

`public/og-image.png` is the custom **1200 by 630 pixel** sharing image. It was rendered locally in Chromium using the bundled DM Serif Display and DM Sans fonts, the Plum & Coral palette, and original CSS/SVG decorations. It contains the confirmed name, role, supporting line, and domain; no portrait or third-party imagery is used. The PNG is approximately 63 KB.

The existing metadata implementation emits the image URL only when both this file and `SITE_URL` are available. Twitter/X then uses `summary_large_image`; without both, it uses `summary` without a fabricated image URL. Replace the PNG at the same dimensions and rebuild when changing the sharing artwork.

`app/icon.svg` supplies the KS. favicon. The portfolio uses the owner-supplied portrait and resume PDF, plus the confirmed LinkedIn profile. Keep those personal assets and portfolio facts owner-approved.

## Rendering and configuration decisions

The installed Tailwind Turbopack loader needs the CSS rule in `next.config.ts`; removing it would require replacing the working CSS pipeline. No dependency versions have been changed.

Cache Components keeps the portfolio in a static shell while the copyright year is generated on the server for each request in the Asia/Kathmandu timezone. Its small io()/Suspense boundary avoids a stale build-time year and adds no custom client component. Removing that boundary would either freeze the year or change the rendering behavior of the whole page. The installed Next.js guide recommends explicitly enabling partialPrefetching alongside cacheComponents to avoid migration warnings, so both flags are retained.

Navigation alone needs a Client Component. Content, metadata, search routes, and the footer remain server-rendered. Scroll decorations do not change content opacity; reduced-motion styles disable animations and smooth scrolling.
