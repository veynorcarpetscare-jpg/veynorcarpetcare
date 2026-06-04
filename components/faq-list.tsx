import type { FAQItem } from "@/lib/types";

type FaqListProps = {
  faqs: FAQItem[];
};

export function FaqList({ faqs }: FaqListProps) {
  return (
    <div className="grid gap-4">
      {faqs.map((faq) => (
        <details
          key={faq.question}
          className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-slate-950">
            <span>{faq.question}</span>
            <span className="text-2xl text-sky-700 transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-4 text-base leading-7 text-slate-600">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
