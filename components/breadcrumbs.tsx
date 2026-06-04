import { SiteLink } from "@/components/site-link";
import type { BreadcrumbItem } from "@/lib/types";

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 ? <span>/</span> : null}
              {isLast ? (
                <span className="font-medium text-slate-700">{item.name}</span>
              ) : (
                <SiteLink href={item.href} className="hover:text-slate-900">
                  {item.name}
                </SiteLink>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
