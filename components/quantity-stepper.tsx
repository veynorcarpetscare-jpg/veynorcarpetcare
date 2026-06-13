type QuantityStepperProps = {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
};

export function QuantityStepper({
  label,
  value,
  onChange,
  min = 0,
  max = 99,
}: QuantityStepperProps) {
  function decrement() {
    onChange(Math.max(min, value - 1));
  }

  function increment() {
    onChange(Math.min(max, value + 1));
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
      <p className="text-sm font-semibold text-slate-950">{label}</p>
      <div className="mt-3 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={decrement}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-lg font-semibold text-slate-900 transition hover:bg-slate-50"
          aria-label={`Decrease ${label}`}
        >
          -
        </button>
        <span className="min-w-8 text-center text-base font-semibold text-slate-950">
          {value}
        </span>
        <button
          type="button"
          onClick={increment}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-lg font-semibold text-slate-900 transition hover:bg-slate-50"
          aria-label={`Increase ${label}`}
        >
          +
        </button>
      </div>
    </div>
  );
}
