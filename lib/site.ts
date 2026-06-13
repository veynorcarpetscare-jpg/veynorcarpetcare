import type { Metadata } from "next";

import type { NavLink } from "@/lib/types";

export const site = {
  name: "VEYNOR Carpet & Upholstery Care",
  domain: "veynorcarpetcare.com",
  url: "https://veynorcarpetcare.com",
  phoneDisplay: "(510) 516-6677",
  phoneRaw: "+15105166677",
  phoneHref: "tel:+15105166677",
  smsHref: "sms:+15105166677",
  email: "veynor.carpetscare@gmail.com",
  primaryMarket: "Walnut Creek, California",
  headquarters: "Concord, California",
  description:
    "Carpet cleaning, upholstery cleaning, pet stain removal, and odor treatment for Walnut Creek, Concord, and East Bay homes and businesses.",
};

export const serviceMenuLinks: NavLink[] = [
  { href: "/services/carpet-cleaning", label: "Carpet Cleaning" },
  { href: "/services/upholstery-cleaning", label: "Upholstery Cleaning" },
];

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/referral-program", label: "Referral Program" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const defaultOpenGraphImage = "/og-cover.png";

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}

export function createMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(path),
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: site.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: absoluteUrl(defaultOpenGraphImage),
          width: 1200,
          height: 630,
          alt: `${site.name} service area overview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(defaultOpenGraphImage)],
    },
  };
}
