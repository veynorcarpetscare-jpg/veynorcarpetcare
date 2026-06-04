import { CallToActionGroup } from "@/components/call-to-action-group";

type CtaPanelProps = {
  title: string;
  description: string;
};

export function CtaPanel({ title, description }: CtaPanelProps) {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-slate-950 px-6 py-10 text-white shadow-[0_24px_80px_rgba(15,23,42,0.2)] sm:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">
              Free phone and text quotes
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              {description}
            </p>
          </div>
          <CallToActionGroup invert />
        </div>
      </div>
    </section>
  );
}
