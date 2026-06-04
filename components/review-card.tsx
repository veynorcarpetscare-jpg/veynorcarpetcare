import type { Review } from "@/lib/types";

type ReviewCardProps = {
  review: Review;
};

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-950">{review.name}</h3>
          <p className="text-sm text-slate-500">
            {review.area} • {review.service}
          </p>
        </div>
        <p className="text-sm font-semibold text-sky-700">{"★".repeat(review.rating)}</p>
      </div>
      <p className="mt-4 text-base leading-7 text-slate-600">{review.text}</p>
      <p className="mt-4 text-sm text-slate-500">{review.dateLabel}</p>
    </article>
  );
}
