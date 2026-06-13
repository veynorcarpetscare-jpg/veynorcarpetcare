import { CarpetQuoteBuilder } from "@/components/carpet-quote-builder";
import { CtaPanel } from "@/components/cta-panel";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { carpetCleaningFaqs } from "@/lib/data/service-pricing";
import { getFaqSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Carpet Cleaning Quote Builder",
  description:
    "Choose room packages, stairs, hallway areas, and deep cleaning requests for carpet cleaning across Walnut Creek and the East Bay.",
  path: "/services/carpet-cleaning",
});

export default function CarpetCleaningPage() {
  return (
    <>
      <JsonLd data={getFaqSchema(carpetCleaningFaqs)} />

      <PageHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Carpet Cleaning", href: "/services/carpet-cleaning" },
        ]}
        eyebrow="Carpet Cleaning"
        title="Select your rooms, build a cart, and send a carpet cleaning request online."
        description="Choose the room package that fits your home, add stairs or hallway areas if needed, and request deep cleaning when the carpet needs more restorative work."
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Choose your rooms, review your cart, and send your request in one place
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Choose the rooms you want, add extra areas if needed, review the cart,
              then send your contact details. The request goes directly to VEYNOR.
            </p>
          </div>

          <CarpetQuoteBuilder />
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
              Carpet Cleaning FAQ
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Common questions before booking carpet cleaning
            </h2>
          </div>
          <div className="mt-10">
            <FaqList faqs={carpetCleaningFaqs} />
          </div>
        </div>
      </section>

      <CtaPanel
        title="Want to skip the form and get a faster answer?"
        description="Call or text with the city, room count, and any pet or deep cleaning issues if you want the quickest quote conversation."
      />
    </>
  );
}
