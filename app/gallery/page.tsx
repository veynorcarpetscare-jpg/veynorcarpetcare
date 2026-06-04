import { BeforeAfterCard } from "@/components/before-after-card";
import { CtaPanel } from "@/components/cta-panel";
import { PageHero } from "@/components/page-hero";
import { galleryProjects } from "@/lib/data/gallery";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Before and After Gallery",
  description:
    "Explore the VEYNOR before-and-after gallery layout for carpet cleaning, upholstery cleaning, pet stain removal, and commercial carpet maintenance projects.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Gallery", href: "/gallery" },
        ]}
        eyebrow="Gallery"
        title="A before-and-after gallery system built for real cleaning results."
        description="The gallery supports side-by-side before and after presentation for carpet, upholstery, pet issue, rug, and commercial projects so the site can grow with real job photography over time."
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8">
          {galleryProjects.map((project) => (
            <BeforeAfterCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <CtaPanel
        title="Want your own rooms to be the next before-and-after?"
        description="Call or text with the rooms, problem spots, and your city to get a quote for carpet cleaning, upholstery cleaning, or pet treatment."
      />
    </>
  );
}
