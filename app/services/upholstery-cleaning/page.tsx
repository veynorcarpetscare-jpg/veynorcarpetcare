import { CtaPanel } from "@/components/cta-panel";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { UpholsteryQuoteBuilder } from "@/components/upholstery-quote-builder";
import { upholsteryCleaningFaqs } from "@/lib/data/service-pricing";
import { getFaqSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Upholstery Cleaning Quote Builder",
  description:
    "Choose sofas, sectionals, chairs, ottomans, and mattresses for upholstery cleaning across Walnut Creek and the East Bay.",
  path: "/services/upholstery-cleaning",
});

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
        title="Choose your furniture pieces, build a cart, and send an upholstery cleaning request online."
        description="Add sofas, sectionals, chairs, ottomans, and mattresses to your cart. If you are unsure about your sectional size, you can still submit the form and follow up by text with a photo."
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Choose your pieces, review your cart, and send your request in one place
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Add the furniture pieces you want, review the cart, then send your
              details. The request goes directly to VEYNOR.
            </p>
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
