import { CtaPanel } from "@/components/cta-panel";
import { PageHero } from "@/components/page-hero";
import { SiteLink } from "@/components/site-link";
import { createMetadata } from "@/lib/site";
import { services } from "@/lib/data/services";

export const metadata = createMetadata({
  title: "Carpet Cleaning Services in Walnut Creek and the East Bay",
  description:
    "Explore carpet cleaning, deep carpet cleaning, upholstery cleaning, pet stain removal, odor treatment, area rug cleaning, move-in and move-out cleaning, and commercial carpet cleaning.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ]}
        eyebrow="Services"
        title="Choose the service you need and build a quote online."
        description="Start with carpet cleaning or upholstery cleaning if you want to select rooms, furniture pieces, and pricing online. The full service overview is still listed below."
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-10">
          <div className="grid gap-6 lg:grid-cols-2">
            {[
              {
                title: "Carpet Cleaning",
                body: "Choose room packages, stairs, landings, hallway areas, and request deep cleaning when the carpet needs more than a routine refresh.",
                href: "/services/carpet-cleaning",
              },
              {
                title: "Upholstery Cleaning",
                body: "Add sofas, sectionals, chairs, ottomans, and mattresses to a quote builder with the current price list and send the request directly online.",
                href: "/services/upholstery-cleaning",
              },
            ].map((item) => (
              <article
                key={item.href}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/70 sm:p-10"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
                  Online Quote Builder
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                  {item.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">{item.body}</p>
                <SiteLink
                  href={item.href}
                  className="mt-6 inline-flex items-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Open {item.title}
                </SiteLink>
              </article>
            ))}
          </div>

          {services.map((service, index) => (
            <article
              key={service.id}
              id={service.id}
              className={`rounded-[2rem] border border-slate-200 p-8 shadow-sm shadow-slate-200/70 sm:p-10 ${
                index % 2 === 0 ? "bg-white" : "bg-slate-50"
              }`}
            >
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
                    {service.name}
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                    {service.shortDescription}
                  </h2>
                </div>
                <div>
                  <p className="text-base leading-8 text-slate-600">
                    {service.fullDescription}
                  </p>
                  <ul className="mt-6 grid gap-4 text-base leading-7 text-slate-600">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-sky-500" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaPanel
        title="Tell us what needs attention and get a quote without waiting."
        description="Call to talk through the job live, or text the city, room count, and any pet or upholstery details if you want the fastest response."
      />
    </>
  );
}
