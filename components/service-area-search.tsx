"use client";

import { useState } from "react";

import { SiteLink } from "@/components/site-link";
import type { ServiceArea } from "@/lib/types";

type ServiceAreaSearchProps = {
  areas: ServiceArea[];
};

export function ServiceAreaSearch({ areas }: ServiceAreaSearchProps) {
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();
  const filteredAreas = areas.filter((area) => {
    if (!normalizedQuery) {
      return true;
    }

    return [area.name, area.region, area.description]
      .join(" ")
      .toLowerCase()
      .includes(normalizedQuery);
  });

  return (
    <div className="space-y-6">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70">
        <label htmlFor="service-area-search" className="text-sm font-semibold text-slate-700">
          Search by city or region
        </label>
        <input
          id="service-area-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Walnut Creek, Richmond, Oakland..."
          className="mt-3 w-full rounded-2xl border border-slate-300 px-4 py-3 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-500"
        />
      </div>

      <div
        data-testid="service-area-results"
        className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
      >
        {filteredAreas.map((area) => (
          <article
            key={area.name}
            data-testid="service-area-card"
            className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
              {area.region}
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
              {area.name}
            </h3>
            <p className="mt-3 text-base leading-7 text-slate-600">{area.description}</p>
            {area.slug ? (
              <SiteLink
                href={`/${area.slug}`}
                className="mt-5 inline-flex items-center text-sm font-semibold text-sky-700 hover:text-sky-800"
              >
                View local page
              </SiteLink>
            ) : (
              <p className="mt-5 text-sm font-semibold text-slate-500">
                Call or text for scheduling in this city
              </p>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
