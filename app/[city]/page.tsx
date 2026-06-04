import { notFound } from "next/navigation";

import { CtaPanel } from "@/components/cta-panel";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { SiteLink } from "@/components/site-link";
import { cityPageMap, cityPages } from "@/lib/data/city-pages";
import { getFaqSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/site";

type CityPageProps = {
  params: Promise<{
    city: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return cityPages.map((page) => ({
    city: page.slug,
  }));
}

export async function generateMetadata({ params }: CityPageProps) {
  const { city } = await params;
  const page = cityPageMap[city];

  if (!page) {
    return {};
  }

  return createMetadata({
    title: `${page.city} Carpet Cleaning`,
    description: page.metaDescription,
    path: `/${page.slug}`,
  });
}

export default async function CityPage({ params }: CityPageProps) {
  const { city } = await params;
  const page = cityPageMap[city];

  if (!page) {
    notFound();
  }

  const relatedCities = page.relatedSlugs
    .map((slug) => cityPageMap[slug])
    .filter(Boolean);

  return (
    <>
      <JsonLd data={getFaqSchema(page.faqs)} />

      <PageHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Service Areas", href: "/service-areas" },
          { name: page.city, href: `/${page.slug}` },
        ]}
        eyebrow={`${page.city} Carpet Cleaning`}
        title={page.heroTitle}
        description={page.heroDescription}
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/70 sm:p-10">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
              Cleaning service tailored to how {page.city} homes actually get used
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600">{page.localAngle}</p>
            <p className="mt-5 text-base leading-8 text-slate-600">
              If you are comparing providers for{" "}
              <SiteLink href="/services#carpet-cleaning" className="font-semibold text-sky-700">
                carpet cleaning
              </SiteLink>
              ,{" "}
              <SiteLink href="/services#upholstery-cleaning" className="font-semibold text-sky-700">
                upholstery cleaning
              </SiteLink>
              , or{" "}
              <SiteLink href="/services#pet-odor-treatment" className="font-semibold text-sky-700">
                pet odor treatment
              </SiteLink>
              , this page is designed to make the local scope clear and give you a
              direct path to call or text for pricing.
            </p>
          </article>

          <aside className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.2)] sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">
              Common {page.city} requests
            </p>
            <ul className="mt-6 grid gap-4 text-base leading-7 text-slate-300">
              {page.commonJobs.map((job) => (
                <li key={job} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-sky-400" />
                  <span>{job}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-3xl border border-white/10 bg-white/6 p-5">
              <p className="text-base leading-7 text-slate-300">
                Need coverage outside {page.city}? Browse the full{" "}
                <SiteLink href="/service-areas" className="font-semibold text-white">
                  service area directory
                </SiteLink>{" "}
                for nearby East Bay cities.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {[
            {
              title: "Carpet Cleaning",
              body: page.carpetFocus,
              href: "/services#carpet-cleaning",
            },
            {
              title: "Upholstery Cleaning",
              body: page.upholsteryFocus,
              href: "/services#upholstery-cleaning",
            },
            {
              title: "Pet Treatment",
              body: page.petFocus,
              href: "/services#pet-odor-treatment",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm shadow-slate-200/70"
            >
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                {page.city} {item.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">{item.body}</p>
              <SiteLink
                href={item.href}
                className="mt-5 inline-flex items-center text-sm font-semibold text-sky-700 hover:text-sky-800"
              >
                View service details
              </SiteLink>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
              Local FAQ
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Questions we expect from {page.city} customers
            </h2>
            <div className="mt-8">
              <FaqList faqs={page.faqs} />
            </div>
          </div>

          <aside className="space-y-6">
            <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                Related city pages
              </h2>
              <ul className="mt-5 grid gap-3">
                {relatedCities.map((relatedCity) => (
                  <li key={relatedCity.slug}>
                    <SiteLink
                      href={`/${relatedCity.slug}`}
                      className="text-base font-semibold text-sky-700 hover:text-sky-800"
                    >
                      {relatedCity.city} carpet cleaning
                    </SiteLink>
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm shadow-slate-200/70">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                Need a quote today?
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Call or text with the room count, the type of flooring or furniture,
                and whether pet stains, odor, or move-out timing are part of the job.
              </p>
              <SiteLink
                href="/contact"
                className="mt-5 inline-flex items-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white"
              >
                Open contact options
              </SiteLink>
            </article>
          </aside>
        </div>
      </section>

      <CtaPanel
        title={`Ready to book ${page.city} carpet cleaning?`}
        description={`Call now or text for a free quote if you need carpet cleaning, upholstery cleaning, pet stain removal, pet odor treatment, or area rug cleaning in ${page.city}.`}
      />
    </>
  );
}
