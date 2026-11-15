import type { Metadata } from "next";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import { portfolio } from "@/data/portfolio";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = getSiteUrl();
const title = `${portfolio.name} | Software QA Engineer Portfolio`;
const description = `Explore ${portfolio.name}'s software QA portfolio: functional and API testing, test case design, defect management, and automation learning.`;
// Add a real 1200×630 PNG at this location when a sharing image is ready.
const socialImage = siteUrl && existsSync(join(process.cwd(), "public", "og-image.png"))
  ? { url: new URL("/og-image.png", siteUrl).href, width: 1200, height: 630, alt: `${portfolio.name} — ${portfolio.role}` }
  : undefined;

export const metadata: Metadata = {
  title,
  description,
  applicationName: `${portfolio.name} Portfolio`,
  authors: [{ name: portfolio.name }],
  ...(siteUrl ? { metadataBase: siteUrl, alternates: { canonical: siteUrl.href } } : {}),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: `${portfolio.name} Portfolio`,
    title,
    description,
    ...(siteUrl ? { url: siteUrl.href } : {}),
    ...(socialImage ? { images: [socialImage] } : {}),
  },
  twitter: {
    card: socialImage ? "summary_large_image" : "summary",
    title,
    description,
    ...(socialImage ? { images: [socialImage] } : {}),
  },
};

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: portfolio.name,
  jobTitle: portfolio.role,
  ...(portfolio.email ? { email: `mailto:${portfolio.email}` } : {}),
  ...(portfolio.location ? { homeLocation: { "@type": "Place", name: portfolio.location } } : {}),
  sameAs: [
    ...portfolio.links.map(({ href }) => href),
    ...(portfolio.linkedinUrl ? [portfolio.linkedinUrl] : []),
  ],
  ...(siteUrl ? { url: siteUrl.href } : {}),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerifDisplay.variable} antialiased`}>
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }} />
        {children}
      </body>
    </html>
  );
}
