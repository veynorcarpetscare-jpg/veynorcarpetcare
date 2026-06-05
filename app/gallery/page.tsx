import { BeforeAfterCard } from "@/components/before-after-card";
import { CtaPanel } from "@/components/cta-panel";
import { PageHero } from "@/components/page-hero";
import { galleryProjects } from "@/lib/data/gallery";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Before and After Gallery",
  description:
    "Explore recent VEYNOR before-and-after carpet and upholstery cleaning projects, including real sectional cleaning and spot treatment results.",
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
        title="Real before-and-after results from carpet and upholstery cleaning jobs."
        description="This gallery highlights recent VEYNOR work with side-by-side before and after presentation, including multi-photo project sets when a single room or sectional needs more than one angle."
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
