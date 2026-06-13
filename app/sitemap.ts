import type { MetadataRoute } from "next";

import { cityPages } from "@/lib/data/city-pages";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/services/carpet-cleaning",
    "/services/upholstery-cleaning",
    "/about",
    "/service-areas",
    "/gallery",
    "/reviews",
    "/referral-program",
    "/faq",
    "/contact",
  ];

  const routes = [
    ...staticRoutes,
    ...cityPages.map((page) => `/${page.slug}`),
  ];

  return routes.map((route) => ({
    url: `${site.url}${route || "/"}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
