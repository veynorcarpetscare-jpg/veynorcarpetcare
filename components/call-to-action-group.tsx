import { SiteLink } from "@/components/site-link";
import { site } from "@/lib/site";

type CallToActionGroupProps = {
  align?: "left" | "center";
  invert?: boolean;
  compact?: boolean;
};

const baseButtonClasses =
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-tight transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500";

export function CallToActionGroup({
  align = "left",
  invert = false,
  compact = false,
}: CallToActionGroupProps) {
  const wrapperClasses =
    align === "center"
      ? "flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
      : "flex flex-col items-stretch gap-3 sm:flex-row sm:items-center";

  const primaryClasses = invert
    ? `${baseButtonClasses} bg-white text-slate-950 hover:bg-slate-100`
    : `${baseButtonClasses} bg-sky-700 text-white hover:bg-sky-600`;

  const secondaryClasses = invert
    ? `${baseButtonClasses} border border-white/25 text-white hover:bg-white/10`
    : `${baseButtonClasses} border border-slate-300 text-slate-900 hover:border-slate-400 hover:bg-slate-50`;

  return (
    <div className={`${wrapperClasses} ${compact ? "text-sm" : ""}`}>
      <SiteLink href={site.phoneHref} className={primaryClasses}>
        Call Now
      </SiteLink>
      <SiteLink href={site.smsHref} className={secondaryClasses}>
        Text for Free Quote
      </SiteLink>
    </div>
  );
}
