import { CtaPanel } from "@/components/cta-panel";
import { PageHero } from "@/components/page-hero";
import { ServiceAreaSearch } from "@/components/service-area-search";
import { SiteLink } from "@/components/site-link";
import { createMetadata } from "@/lib/site";
import { featuredAreaNames, serviceAreas } from "@/lib/data/service-areas";

export const metadata = createMetadata({
  title: "Service Areas for Carpet Cleaning Across Walnut Creek and the East Bay",
  description:
    "Browse all cities served by VEYNOR Carpet & Upholstery Care, including Walnut Creek, Concord, Pleasant Hill, Lafayette, Martinez, Orinda, Moraga, Danville, San Ramon, Oakland, Berkeley, and Richmond.",
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  const featuredAreas = serviceAreas.filter((area) =>
    featuredAreaNames.includes(area.name),
  );

  return (
    <>
      <PageHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Service Areas", href: "/service-areas" },
        ]}
        eyebrow="Service Areas"
        title="Search every city VEYNOR serves across Contra Costa County and the East Bay."
        description="The directory below includes the full service footprint. Dedicated local SEO pages are linked for priority cities, and the broader city list makes coverage clear for both visitors and search engines."
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featuredAreas.map((area) => (
              <article
                key={area.name}
                className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                  Featured local page
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                  {area.name}
                </h2>
                <p className="mt-3 text-base leading-7 text-slate-600">{area.description}</p>
                {area.slug ? (
                  <SiteLink
                    href={`/${area.slug}`}
                    className="mt-5 inline-flex items-center text-sm font-semibold text-sky-700 hover:text-sky-800"
                  >
                    View {area.name} page
                  </SiteLink>
                ) : null}
              </article>
            ))}
          </div>

          <div className="mt-10">
            <ServiceAreaSearch areas={serviceAreas} />
          </div>
        </div>
      </section>

      <CtaPanel
        title="Not sure if your city is covered?"
        description="If your home or business is in or around the listed East Bay service area, call or text with your location and the scope of the job."
      />
    </>
  );
}
