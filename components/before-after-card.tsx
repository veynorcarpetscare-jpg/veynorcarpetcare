import Image from "next/image";

import type { GalleryImage, GalleryProject } from "@/lib/types";

type BeforeAfterCardProps = {
  project: GalleryProject;
};

type GalleryImageGridProps = {
  images: GalleryImage[];
  label: "Before" | "After";
  location: string;
  theme: "dark" | "light";
};

function GalleryImageGrid({
  images,
  label,
  location,
  theme,
}: GalleryImageGridProps) {
  const containerClasses =
    theme === "dark" ? "bg-slate-950" : "bg-slate-50";
  const headerClasses =
    theme === "dark"
      ? "border-b border-white/10 text-white/80"
      : "border-b border-slate-200 text-slate-700";

  return (
    <div className={containerClasses}>
      <div
        className={`flex items-center justify-between px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] ${headerClasses}`}
      >
        <span>{label}</span>
        <span>{location}</span>
      </div>
      <div className="grid grid-cols-2 gap-1 p-1">
        {images.map((image, index) => {
          const spanFullWidth =
            images.length === 1 ||
            (images.length > 1 && images.length % 2 === 1 && index === images.length - 1);

          return (
            <div
              key={image.src}
              className={`relative overflow-hidden rounded-[1.4rem] ${
                spanFullWidth ? "col-span-2" : ""
              }`}
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1280px) 20vw, (min-width: 768px) 30vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function BeforeAfterCard({ project }: BeforeAfterCardProps) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm shadow-slate-200/70">
      <div className="grid gap-1 bg-slate-200 md:grid-cols-2">
        <GalleryImageGrid
          images={project.beforeImages}
          label="Before"
          location={project.city}
          theme="dark"
        />
        <GalleryImageGrid
          images={project.afterImages}
          label="After"
          location={project.city}
          theme="light"
        />
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
