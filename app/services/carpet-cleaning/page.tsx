import { CarpetQuoteBuilder } from "@/components/carpet-quote-builder";
import { CtaPanel } from "@/components/cta-panel";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import {
  carpetCleaningFaqs,
  carpetExtraItems,
  carpetRoomPackages,
} from "@/lib/data/service-pricing";
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
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-6">
            <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                Standard room package pricing
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                Use the cart on the right to add the package you want.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {carpetRoomPackages.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
                  >
                    <p className="text-base font-semibold text-slate-950">{item.label}</p>
                    <p className="mt-1 text-sm text-slate-600">${item.price}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                Extra areas
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                Add steps, landings, or hallway areas to the same cart before sending the request.
              </p>
              <div className="mt-5 grid gap-3">
                {carpetExtraItems.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-base font-semibold text-slate-950">{item.label}</p>
                      <p className="text-sm font-semibold text-slate-700">${item.price}</p>
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
                Deep cleaning add-on
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Deep cleaning is quoted at $25 to $45 per room or area when the carpet
                needs more than a routine maintenance clean. This usually applies to
                heavier soil buildup, darker traffic lanes, or more neglected carpet.
              </p>
            </article>
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
