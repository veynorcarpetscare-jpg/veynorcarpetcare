import type { Metadata } from "next";

import { SiteLink } from "@/components/site-link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The requested page could not be found.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200 bg-white p-10 text-center shadow-sm shadow-slate-200/70">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
          Page not found
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">
          The page you requested is not here.
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          Use the links below to get back to the main service pages or request a quote.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <SiteLink
            href="/"
            className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white"
          >
            Back to Home
          </SiteLink>
          <SiteLink
            href="/contact"
            className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900"
          >
            Contact VEYNOR
          </SiteLink>
        </div>
      </div>
    </section>
  );
}
