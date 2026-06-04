import { SiteLink } from "@/components/site-link";
import { site } from "@/lib/site";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-4 py-3 shadow-[0_-8px_24px_rgba(15,23,42,0.08)] backdrop-blur sm:px-6 lg:hidden">
      <div className="mx-auto flex max-w-7xl gap-3">
        <SiteLink
          href={site.phoneHref}
          className="flex-1 rounded-full bg-slate-950 px-4 py-3 text-center text-sm font-semibold text-white"
        >
          Call Now
        </SiteLink>
        <SiteLink
          href={site.smsHref}
          className="flex-1 rounded-full border border-slate-300 px-4 py-3 text-center text-sm font-semibold text-slate-900"
        >
          Text Quote
        </SiteLink>
      </div>
    </div>
  );
}
