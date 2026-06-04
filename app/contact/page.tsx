import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { SiteLink } from "@/components/site-link";
import { createMetadata, site } from "@/lib/site";

export const metadata = createMetadata({
  title: "Contact VEYNOR Carpet & Upholstery Care",
  description:
    "Contact VEYNOR Carpet & Upholstery Care by phone, text, or email for carpet cleaning, upholstery cleaning, pet stain removal, and East Bay service quotes.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
        eyebrow="Contact"
        title="Call, text, or send the job details for a fast local quote."
        description="The quickest way to get pricing direction is to call or text with the city, room count, and whether pets, rugs, upholstery, or move-out timing are part of the scope."
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            {[
              {
                label: "Phone",
                value: site.phoneDisplay,
                href: site.phoneHref,
              },
              {
                label: "SMS",
                value: site.phoneDisplay,
                href: site.smsHref,
              },
              {
                label: "Email",
                value: site.email,
                href: `mailto:${site.email}`,
              },
              {
                label: "Headquarters",
                value: site.headquarters,
                href: undefined,
              },
            ].map((item) => (
              <article
                key={item.label}
                className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
                  {item.label}
                </p>
                {item.href ? (
                  <SiteLink
                    href={item.href}
                    className="mt-3 inline-flex text-2xl font-semibold tracking-tight text-slate-950 hover:text-sky-700"
                  >
                    {item.value}
                  </SiteLink>
                ) : (
                  <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                    {item.value}
                  </p>
                )}
              </article>
            ))}
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
