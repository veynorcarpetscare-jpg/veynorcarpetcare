import { CtaPanel } from "@/components/cta-panel";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { generalFaqs } from "@/lib/data/faqs";
import { getFaqSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about carpet cleaning, pet stain removal, upholstery cleaning, move-out cleaning, service areas, and quotes from VEYNOR Carpet & Upholstery Care.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={getFaqSchema(generalFaqs)} />

      <PageHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "FAQ", href: "/faq" },
        ]}
        eyebrow="FAQ"
        title="Practical answers before you book carpet or upholstery cleaning."
        description="This page covers the questions local customers usually ask first: drying time, pet treatment, move-out jobs, area rug cleaning, commercial service, and how to get a quote quickly."
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <FaqList faqs={generalFaqs} />
          <div className="space-y-6">
            <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                What to send in a text quote request
              </h2>
              <ul className="mt-5 grid gap-4 text-base leading-7 text-slate-600">
                {[
                  "Your city and whether the property is a home, apartment, rental, or office",
                  "How many rooms, stairs, rugs, or furniture pieces need attention",
                  "Any pet stains, odor issues, or move-out deadlines that affect the scope",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-sky-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm shadow-slate-200/70">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                Need a city-specific answer?
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                The dedicated local pages for Walnut Creek, Concord, Pleasant Hill,
                Lafayette, Martinez, Orinda, Moraga, Danville, San Ramon, Oakland,
                Berkeley, and Richmond each include their own local FAQ section too.
              </p>
            </article>
          </div>
        </div>
      </section>

      <CtaPanel
        title="Still have a question about the job?"
        description="Call to talk through the details, or text the scope and city if you want a faster written response."
      />
    </>
  );
}
