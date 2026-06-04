import type { ComponentPropsWithoutRef } from "react";

type SiteLinkProps = ComponentPropsWithoutRef<"a"> & {
  href: string;
};

export function SiteLink({ href, rel, ...props }: SiteLinkProps) {
  const isExternalHttp = href.startsWith("http://") || href.startsWith("https://");
  const safeRel = isExternalHttp && !rel ? "noopener noreferrer" : rel;

  return <a href={href} rel={safeRel} {...props} />;
}
