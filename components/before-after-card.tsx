import Image from "next/image";

import type { GalleryProject } from "@/lib/types";

type BeforeAfterCardProps = {
  project: GalleryProject;
};

export function BeforeAfterCard({ project }: BeforeAfterCardProps) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm shadow-slate-200/70">
      <div className="grid gap-1 bg-slate-200 md:grid-cols-2">
        <div className="bg-slate-950">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
            <span>Before</span>
            <span>{project.city}</span>
          </div>
          <Image
            src={project.beforeImage}
            alt={project.beforeAlt}
            width={1200}
            height={900}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="bg-slate-50">
          <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-700">
            <span>After</span>
            <span>{project.city}</span>
          </div>
          <Image
            src={project.afterImage}
            alt={project.afterAlt}
            width={1200}
            height={900}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="space-y-3 p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-xl font-semibold text-slate-950">{project.title}</h3>
          <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-800">
            {project.result}
          </span>
        </div>
        <p className="text-base leading-7 text-slate-600">{project.description}</p>
      </div>
    </article>
  );
}
