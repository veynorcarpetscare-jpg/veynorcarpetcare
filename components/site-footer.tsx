import { SiteLink } from "@/components/site-link";
import { featuredAreaNames, serviceAreas } from "@/lib/data/service-areas";
import { services } from "@/lib/data/services";
import { navLinks, site } from "@/lib/site";

export function SiteFooter() {
  const featuredAreas = serviceAreas.filter((area) =>
    featuredAreaNames.includes(area.name),
  );

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-300">
            Local Carpet & Upholstery Care
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            {site.name}
          </h2>
          <p className="max-w-xl text-base leading-7 text-slate-300">
            Professional carpet cleaning, upholstery cleaning, pet stain removal,
            and odor treatment for homes and businesses across the local service
            area.
          </p>
          <div className="space-y-2 text-sm text-slate-300">
            <p>
              Phone:{" "}
              <SiteLink href={site.phoneHref} className="hover:text-white">
                {site.phoneDisplay}
              </SiteLink>
            </p>
            <p>
              Email:{" "}
              <SiteLink href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </SiteLink>
            </p>
            <p>Headquarters: {site.headquarters}</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Browse</h3>
          <ul className="mt-4 grid gap-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <SiteLink href={link.href} className="hover:text-white">
                  {link.label}
                </SiteLink>
              </li>
            ))}
          </ul>
          <h3 className="mt-8 text-lg font-semibold text-white">Services</h3>
          <ul className="mt-4 grid gap-3 text-sm">
            {services.slice(0, 6).map((service) => (
              <li key={service.id}>
                <SiteLink href={`/services#${service.id}`} className="hover:text-white">
                  {service.name}
                </SiteLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Featured Areas</h3>
          <ul className="mt-4 grid gap-3 text-sm">
            {featuredAreas.map((area) => (
              <li key={area.name}>
                {area.slug ? (
                  <SiteLink href={`/${area.slug}`} className="hover:text-white">
                    {area.name}
                  </SiteLink>
                ) : (
                  <span>{area.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
