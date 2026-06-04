import { CtaPanel } from "@/components/cta-panel";
import { PageHero } from "@/components/page-hero";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "About VEYNOR Carpet & Upholstery Care",
  description:
    "Learn how VEYNOR Carpet & Upholstery Care approaches carpet cleaning, upholstery cleaning, pet treatment, and customer service across Walnut Creek and the East Bay.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
        eyebrow="About VEYNOR"
        title="A local carpet cleaning company built around clear communication and practical results."
        description="VEYNOR Carpet & Upholstery Care is positioned as a responsive East Bay service business: easy to reach, honest about scope, and focused on the rooms, rugs, and furniture that customers actually care about most."
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/70 sm:p-10">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
              What the company is built to do well
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p>
                VEYNOR focuses on the cleaning jobs that homeowners and small businesses
                ask for most often: traffic-lane carpet cleaning, deeper restorative work,
                upholstery cleaning, pet stain removal, pet odor treatment, area rug
                cleaning, and move-related service.
              </p>
              <p>
                The brand direction is local, responsive, and straightforward. Visitors
                are pushed toward simple actions that produce leads quickly: call now,
                text for a free quote, or send the scope through the contact form if email
                is more convenient.
              </p>
              <p>
                Walnut Creek is the primary market, with headquarters listed in Concord and
                a service area that extends across the East Bay. That regional coverage is
                reflected throughout the site with city landing pages, local service copy,
                and a searchable service-area directory.
              </p>
            </div>
          </article>

          <div className="grid gap-6">
            {[
              {
                title: "Clear lead generation focus",
                body: "The site is built to produce phone calls and SMS quote requests first, then support that with email as a secondary path.",
              },
              {
                title: "Trust without corporate stiffness",
                body: "The visual system stays clean and reliable while avoiding both a luxury showroom feel and a bland enterprise template look.",
              },
              {
                title: "Search-ready local structure",
                body: "Dedicated city pages, schema, internal links, metadata, robots, and sitemap coverage all support local SEO out of the box.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm shadow-slate-200/70"
              >
                <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaPanel
        title="Need help with carpet, upholstery, rugs, or pet issues?"
        description="VEYNOR is positioned for fast quote conversations and clear next steps. Call or text with the city, the rooms involved, and the problem areas."
      />
    </>
  );
}
