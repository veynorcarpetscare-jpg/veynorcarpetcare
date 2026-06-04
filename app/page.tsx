import { BeforeAfterCard } from "@/components/before-after-card";
import { CallToActionGroup } from "@/components/call-to-action-group";
import { ContactForm } from "@/components/contact-form";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { ReviewCard } from "@/components/review-card";
import { SectionHeading } from "@/components/section-heading";
import { SiteLink } from "@/components/site-link";
import { generalFaqs } from "@/lib/data/faqs";
import { galleryProjects } from "@/lib/data/gallery";
import { reviews } from "@/lib/data/reviews";
import { featuredAreaNames, serviceAreas } from "@/lib/data/service-areas";
import { featuredServiceIds, services } from "@/lib/data/services";
import { getFaqSchema, getReviewSchema } from "@/lib/schema";
import { createMetadata, site } from "@/lib/site";

export const metadata = createMetadata({
  title: `Carpet Cleaning Walnut Creek, CA`,
  description:
    "Walnut Creek carpet cleaning, upholstery cleaning, pet stain removal, and odor treatment for East Bay homes and businesses. Call or text VEYNOR for a free quote.",
  path: "/",
});

const featuredServices = services.filter((service) =>
  featuredServiceIds.includes(service.id),
);
const featuredAreas = serviceAreas.filter((area) =>
  featuredAreaNames.includes(area.name),
);
const featuredProjects = galleryProjects.slice(0, 3);
const featuredReviews = reviews.slice(0, 3);
const homeFaqs = generalFaqs.slice(0, 5);

export default function Home() {
  return (
    <>
      <JsonLd data={getFaqSchema(homeFaqs)} />
      <JsonLd data={getReviewSchema()} />

      <section className="overflow-hidden border-b border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[1.25fr_0.85fr] lg:px-8 lg:py-24">
          <div className="relative">
            <div className="absolute -left-12 top-0 h-40 w-40 rounded-full bg-sky-500/20 blur-3xl" />
            <div className="absolute bottom-0 left-24 h-48 w-48 rounded-full bg-sky-300/10 blur-3xl" />
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">
                Professional Carpet & Upholstery Care
              </p>
              <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl">
                Carpet and upholstery cleaning for homes that need a real reset.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                VEYNOR Carpet & Upholstery Care provides carpet cleaning, deep
                carpet cleaning, upholstery cleaning, pet stain removal, pet odor
                treatment, area rug cleaning, and commercial carpet cleaning for
                homes and businesses across the local service area.
              </p>
              <div className="mt-8">
                <CallToActionGroup invert />
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  "Fast phone and SMS quotes",
                  "Pet-focused stain and odor treatment",
                  "Residential and commercial service",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-[0_20px_70px_rgba(2,6,23,0.35)] backdrop-blur-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">
              Why customers call VEYNOR
            </p>
            <div className="mt-6 grid gap-4">
              {[
                {
                  title: "Owner-operated service",
                  body: "Clear scheduling, direct communication, and practical recommendations for the actual condition of the carpet.",
                },
                {
                  title: "Built for real homes",
                  body: "Traffic lanes, pet stains, family rooms, stairs, sectionals, and move-related jobs are a normal part of the daily work.",
                },
                {
                  title: "Strong local coverage",
                  body: "Headquartered in Concord and scheduled throughout nearby communities, with practical coverage for homes and businesses across the region.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-slate-900/55 p-5"
                >
                  <h2 className="text-xl font-semibold text-white">{item.title}</h2>
                  <p className="mt-3 text-base leading-7 text-slate-300">{item.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-3xl border border-sky-400/25 bg-sky-400/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-200">
                Fastest way to start
              </p>
              <p className="mt-2 text-base leading-7 text-slate-200">
                Text your city, number of rooms, and whether you need help with
                pets, upholstery, rugs, or a move-out timeline.
              </p>
              <p className="mt-4 text-lg font-semibold text-white">{site.phoneDisplay}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {[
            {
              title: "Local SEO-friendly service structure",
              body: "City landing pages, internal linking, schema markup, and page metadata all reinforce local relevance across the service area.",
            },
            {
              title: "Phone-first conversion flow",
              body: "Every major section points back to a call or SMS quote request so visitors can act without hunting for contact info.",
            },
            {
              title: "Professional without feeling generic",
              body: "The layout stays clean and trustworthy while still feeling like a focused local service brand, not a recycled national franchise template.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70"
            >
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                {item.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why Choose VEYNOR"
            title="A cleaner finish, quick communication, and local coverage that makes sense."
            description="VEYNOR is built around practical service for local homes and businesses. That means clear scheduling, honest scope recommendations, and a strong focus on the rooms that actually bother you."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Straightforward quotes",
                body: "Phone and SMS quote requests are encouraged so you can get pricing direction quickly.",
              },
              {
                title: "Pet issue specialists",
                body: "Stain treatment and odor control are available when a room needs more than routine maintenance.",
              },
              {
                title: "Residential and commercial",
                body: "From family rooms and sectionals to office suites and waiting areas, the service mix stays practical.",
              },
              {
                title: "Broad local coverage",
                body: "From nearby residential neighborhoods to busy commercial corridors, VEYNOR covers a wide service area without feeling like a franchise dispatch line.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70"
              >
                <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Services Overview"
            title="Core services for carpet, upholstery, rugs, and pet-related cleanup."
            description="The service mix is designed around what local customers actually request most often: living-room carpet cleaning, restorative deep cleaning, furniture care, odor treatment, and move-related work."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {featuredServices.map((service) => (
              <article
                key={service.id}
                className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm shadow-slate-200/70"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                  {service.name}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                  {service.shortDescription}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  {service.fullDescription}
                </p>
                <ul className="mt-5 grid gap-3 text-sm text-slate-600">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-500" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <SiteLink
                  href={`/services#${service.id}`}
                  className="mt-6 inline-flex items-center text-sm font-semibold text-sky-700 hover:text-sky-800"
                >
                  View service details
                </SiteLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Before & After Gallery"
            title="A gallery system ready for real project photography."
            description="Each gallery card supports a before-and-after layout so the website can showcase carpet restoration, upholstery cleaning, pet issue work, and commercial maintenance visually."
          />
          <div className="mt-10 grid gap-8">
            {featuredProjects.map((project) => (
              <BeforeAfterCard key={project.id} project={project} />
            ))}
          </div>
          <div className="mt-8">
            <SiteLink
              href="/gallery"
              className="inline-flex items-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-white"
            >
              View full gallery
            </SiteLink>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Customer Reviews"
            title="Clear, concise feedback from local customers."
            description="Review cards are stored separately so the site can be updated quickly as new verified customer feedback is collected."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
          <div className="mt-8">
            <SiteLink
              href="/reviews"
              className="inline-flex items-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
            >
              See all reviews
            </SiteLink>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Service Areas"
            title="Local coverage without the franchise feel."
            description="Dedicated city pages help the site rank locally while the broader service area directory makes it clear that VEYNOR covers a much wider footprint."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featuredAreas.map((area) => (
              <article
                key={area.name}
                className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                  {area.region}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                  {area.name}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{area.description}</p>
                <SiteLink
                  href={area.slug ? `/${area.slug}` : "/service-areas"}
                  className="mt-5 inline-flex items-center text-sm font-semibold text-sky-700 hover:text-sky-800"
                >
                  {area.slug ? "View city page" : "View service areas"}
                </SiteLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions before you book carpet or upholstery cleaning."
            description="Visitors looking for help with drying time, pet issues, move-out service, or service-area coverage should be able to find answers quickly."
          />
          <div className="mt-10">
            <FaqList faqs={homeFaqs} />
          </div>
          <div className="mt-8">
            <SiteLink
              href="/faq"
              className="inline-flex items-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Read all FAQs
            </SiteLink>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Contact VEYNOR"
              title="Call or text for the fastest quote, or send the details below."
              description="Phone calls and text messages are the fastest path to a quote. If you prefer email, the contact form opens a pre-filled message in your mail app with the project details."
            />
            <div className="mt-8 grid gap-4">
              {[
                { label: "Call", value: site.phoneDisplay, href: site.phoneHref },
                { label: "Text", value: site.phoneDisplay, href: site.smsHref },
                { label: "Email", value: site.email, href: `mailto:${site.email}` },
                { label: "Headquarters", value: site.headquarters },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm shadow-slate-200/70"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                    {item.label}
                  </p>
                  {item.href ? (
                    <SiteLink
                      href={item.href}
                      className="mt-2 inline-flex text-lg font-semibold text-slate-950 hover:text-sky-700"
                    >
                      {item.value}
                    </SiteLink>
                  ) : (
                    <p className="mt-2 text-lg font-semibold text-slate-950">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
