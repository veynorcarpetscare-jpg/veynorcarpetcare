import { CtaPanel } from "@/components/cta-panel";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { UpholsteryQuoteBuilder } from "@/components/upholstery-quote-builder";
import {
  upholsteryCatalog,
  upholsteryCleaningFaqs,
} from "@/lib/data/service-pricing";
import { getFaqSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Upholstery Cleaning Quote Builder",
  description:
    "Choose sofas, sectionals, chairs, ottomans, and mattresses for upholstery cleaning across Walnut Creek and the East Bay.",
  path: "/services/upholstery-cleaning",
});

const chairItems = upholsteryCatalog.filter((item) => item.category === "chairs");
const sectionalItems = upholsteryCatalog.filter(
  (item) => item.category === "sectionals",
);
const mattressItems = upholsteryCatalog.filter(
  (item) => item.category === "mattresses",
);

export default function UpholsteryCleaningPage() {
  return (
    <>
      <JsonLd data={getFaqSchema(upholsteryCleaningFaqs)} />

      <PageHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Upholstery Cleaning", href: "/services/upholstery-cleaning" },
        ]}
        eyebrow="Upholstery Cleaning"
        title="Choose your furniture pieces and send an upholstery cleaning request online."
        description="Build a quote for sofas, sectionals, chairs, ottomans, and mattresses. If you are unsure about your sectional size, you can still submit the form and follow up by text with a photo."
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-6">
            <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                Standard upholstery pricing
              </h2>
              <div className="mt-5 grid gap-3">
                {chairItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
                  >
                    <p className="text-base font-semibold text-slate-950">{item.name}</p>
                    <p className="text-sm font-semibold text-slate-700">{item.priceLabel}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                Sectionals and larger pieces
              </h2>
              <div className="mt-5 grid gap-3">
                {sectionalItems.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-base font-semibold text-slate-950">{item.name}</p>
                      <p className="text-sm font-semibold text-slate-700">{item.priceLabel}</p>
                    </div>
                    {item.note ? (
                      <p className="mt-2 text-sm leading-6 text-slate-500">{item.note}</p>
                    ) : null}
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm shadow-slate-200/70">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                Mattress cleaning
              </h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {mattressItems.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-4"
                  >
                    <p className="text-base font-semibold text-slate-950">{item.name}</p>
                    <p className="mt-1 text-sm text-slate-600">{item.priceLabel}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <UpholsteryQuoteBuilder />
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
              Upholstery Cleaning FAQ
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Common questions before booking upholstery cleaning
            </h2>
          </div>
          <div className="mt-10">
            <FaqList faqs={upholsteryCleaningFaqs} />
          </div>
        </div>
      </section>

      <CtaPanel
        title="Need help sizing a sectional or matching the right furniture count?"
        description="Call or text a few photos and VEYNOR can help confirm the piece count before the appointment is booked."
      />
    </>
  );
}
