import { CtaPanel } from "@/components/cta-panel";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { ReviewCard } from "@/components/review-card";
import { reviews } from "@/lib/data/reviews";
import { getReviewSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Customer Reviews",
  description:
    "Read customer review content for VEYNOR Carpet & Upholstery Care and see how the site presents carpet cleaning, upholstery cleaning, pet treatment, and move-out service feedback.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <>
      <JsonLd data={getReviewSchema()} />

      <PageHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Reviews", href: "/reviews" },
        ]}
        eyebrow="Reviews"
        title="Review cards that can be updated quickly as new feedback comes in."
        description="The reviews are stored separately from the page layout so testimonials can be refreshed without rebuilding the design system. That keeps this page easy to maintain as the business grows."
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </section>

      <CtaPanel
        title="Need a cleaner home or office without wasting time?"
        description="Use the same fast-response call and text flow the site is built to prioritize, and send the scope of the job when you are ready."
      />
    </>
  );
}
