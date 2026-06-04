import type { Metadata, Viewport } from "next";
import { Public_Sans, Sora } from "next/font/google";

import { JsonLd } from "@/components/json-ld";
import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getLocalBusinessSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import "./globals.css";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Carpet Cleaning Walnut Creek, CA | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    siteName: site.name,
    locale: "en_US",
    type: "website",
    title: `Carpet Cleaning Walnut Creek, CA | ${site.name}`,
    description: site.description,
    url: site.url,
    images: [
      {
        url: `${site.url}/og-cover.png`,
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Carpet Cleaning Walnut Creek, CA | ${site.name}`,
    description: site.description,
    images: [`${site.url}/og-cover.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${publicSans.variable} ${sora.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-slate-50 text-slate-950">
        <JsonLd data={getLocalBusinessSchema()} />
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1 pb-24 lg:pb-0">{children}</main>
          <SiteFooter />
          <MobileCtaBar />
        </div>
      </body>
    </html>
  );
}
