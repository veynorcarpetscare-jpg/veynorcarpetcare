import { SiteLink } from "@/components/site-link";
import { navLinks, serviceMenuLinks, site } from "@/lib/site";

export function SiteHeader() {
  const primaryLinks = navLinks.filter((link) => link.href !== "/services");

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <SiteLink href="/" className="min-w-0">
          <p className="max-w-[15rem] text-base leading-tight font-semibold tracking-tight text-slate-950 sm:max-w-none sm:text-xl">
            {site.name}
          </p>
        </SiteLink>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          <details className="group relative">
            <summary className="flex cursor-pointer list-none items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-950">
              <span>Services</span>
              <span className="text-xs transition group-open:rotate-180">v</span>
            </summary>
            <div className="absolute left-0 top-[calc(100%+0.85rem)] min-w-[14rem] rounded-[1.5rem] border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-300/25">
              <nav aria-label="Services submenu" className="grid gap-1">
                {serviceMenuLinks.map((link) => (
                  <SiteLink
                    key={link.href}
                    href={link.href}
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
                  >
                    {link.label}
                  </SiteLink>
                ))}
              </nav>
            </div>
          </details>
          {primaryLinks.map((link) => (
            <SiteLink
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              {link.label}
            </SiteLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <SiteLink
            href={site.phoneHref}
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
          >
            {site.phoneDisplay}
          </SiteLink>
          <SiteLink
            href={site.smsHref}
            className="rounded-full bg-sky-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-600"
          >
            Text for Quote
          </SiteLink>
        </div>

        <details className="group relative lg:hidden">
          <summary
            className="inline-flex h-11 w-11 list-none items-center justify-center rounded-full border border-slate-300 text-slate-900 transition hover:bg-slate-50"
            aria-label="Toggle navigation"
          >
            <span className="space-y-1">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </span>
          </summary>
          <div className="absolute right-0 top-[calc(100%+0.75rem)] w-[min(22rem,calc(100vw-2rem))] rounded-[2rem] border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-300/25">
            <nav aria-label="Mobile" className="grid gap-2">
              <details className="group rounded-2xl border border-slate-200 bg-slate-50 px-1 py-1">
                <summary className="flex cursor-pointer list-none items-center justify-between rounded-2xl px-3 py-3 text-base font-medium text-slate-700">
                  <span>Services</span>
                  <span className="text-sm transition group-open:rotate-180">v</span>
                </summary>
                <div className="grid gap-1 px-2 pb-2">
                  {serviceMenuLinks.map((link) => (
                    <SiteLink
                      key={link.href}
                      href={link.href}
                      className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-white hover:text-slate-950"
                    >
                      {link.label}
                    </SiteLink>
                  ))}
                </div>
              </details>
              {primaryLinks.map((link) => (
                <SiteLink
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-950"
                >
                  {link.label}
                </SiteLink>
              ))}
            </nav>
            <div className="mt-2 grid gap-2">
              <SiteLink
                href={site.phoneHref}
                className="rounded-2xl border border-slate-300 px-4 py-3 text-center font-semibold text-slate-900"
              >
                Call {site.phoneDisplay}
              </SiteLink>
              <SiteLink
                href={site.smsHref}
                className="rounded-2xl bg-sky-700 px-4 py-3 text-center font-semibold text-white transition hover:bg-sky-600"
              >
                Text for Free Quote
              </SiteLink>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
