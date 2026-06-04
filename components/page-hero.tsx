import { Breadcrumbs } from "@/components/breadcrumbs";
import { CallToActionGroup } from "@/components/call-to-action-group";
import { JsonLd } from "@/components/json-ld";
import { getBreadcrumbSchema } from "@/lib/schema";
import type { BreadcrumbItem } from "@/lib/types";

type PageHeroProps = {
  breadcrumbs: BreadcrumbItem[];
  eyebrow: string;
  title: string;
  description: string;
  actions?: boolean;
};

export function PageHero({
  breadcrumbs,
  eyebrow,
  title,
  description,
  actions = true,
}: PageHeroProps) {
  return (
    <>
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />
      <section className="border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.16),_transparent_34%),linear-gradient(180deg,_#ffffff_0%,_#f8fafc_100%)]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <Breadcrumbs items={breadcrumbs} />
          <div className="mt-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
              {eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">{description}</p>
            {actions ? <div className="mt-8"><CallToActionGroup /></div> : null}
          </div>
        </div>
      </section>
    </>
  );
}
