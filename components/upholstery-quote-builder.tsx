"use client";

import Image from "next/image";
import { useState } from "react";

import { QuantityStepper } from "@/components/quantity-stepper";
import { upholsteryCatalog } from "@/lib/data/service-pricing";
import { applyFormSubmitMeta, submitToFormSubmit } from "@/lib/formsubmit";
import { site } from "@/lib/site";

type UpholsteryQuoteState = {
  quantities: Record<string, number>;
  name: string;
  phone: string;
  email: string;
  city: string;
  notes: string;
  website: string;
};

const quantityDefaults = Object.fromEntries(
  upholsteryCatalog.map((item) => [item.id, 0]),
) as Record<string, number>;

function createInitialState(): UpholsteryQuoteState {
  return {
    quantities: { ...quantityDefaults },
    name: "",
    phone: "",
    email: "",
    city: "",
    notes: "",
    website: "",
  };
}

const inputClasses =
  "rounded-2xl border border-slate-300 px-4 py-3 text-base text-slate-950 outline-none transition focus:border-sky-500";

const categoryLabels = {
  chairs: "Chairs & Seating",
  sectionals: "Sectionals",
  mattresses: "Mattresses",
} as const;

export function UpholsteryQuoteBuilder() {
  const [values, setValues] = useState<UpholsteryQuoteState>(createInitialState);
  const [feedback, setFeedback] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedItems = upholsteryCatalog.filter(
    (item) => values.quantities[item.id] > 0,
  );

  const fixedSubtotal = selectedItems.reduce(
    (total, item) => total + (item.fixedPrice ?? 0) * values.quantities[item.id],
    0,
  );

  const rangedMinTotal = selectedItems.reduce(
    (total, item) => total + (item.minPrice ?? 0) * values.quantities[item.id],
    0,
  );

  const rangedMaxTotal = selectedItems.reduce(
    (total, item) => total + (item.maxPrice ?? 0) * values.quantities[item.id],
    0,
  );

  const hasRangeItems = selectedItems.some((item) => item.minPrice && item.maxPrice);

  function updateQuantity(id: string, value: number) {
    setValues((current) => ({
      ...current,
      quantities: {
        ...current.quantities,
        [id]: value,
      },
    }));
  }

  function addToCart(id: string) {
    updateQuantity(id, values.quantities[id] + 1);
  }

  function updateField<Key extends keyof Omit<UpholsteryQuoteState, "quantities">>(
    key: Key,
    value: UpholsteryQuoteState[Key],
  ) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function clearCart() {
    setValues((current) => ({
      ...current,
      quantities: { ...quantityDefaults },
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (selectedItems.length === 0) {
      setIsError(true);
      setFeedback("Please add at least one furniture piece or mattress to the quote.");
      return;
    }

    if (!values.name || !values.phone || !values.email || !values.city) {
      setIsError(true);
      setFeedback("Please fill out your name, phone, email, and city.");
      return;
    }

    setIsSubmitting(true);
    setIsError(false);
    setFeedback("");

    try {
      const summaryLines = selectedItems.map((item) => {
        const quantity = values.quantities[item.id];

        if (item.fixedPrice) {
          return `${item.name}: ${quantity} x ${item.priceLabel} = $${item.fixedPrice * quantity}`;
        }

        return `${item.name}: ${quantity} x ${item.priceLabel}`;
      });

      const payload = new FormData();
      payload.set("service_type", "Upholstery Cleaning Quote Builder");
      payload.set("customer_name", values.name);
      payload.set("customer_phone", values.phone);
      payload.set("customer_email", values.email);
      payload.set("city", values.city);
      payload.set("selected_items", summaryLines.join("\n"));
      payload.set(
        "estimated_total",
        hasRangeItems
          ? `$${fixedSubtotal + rangedMinTotal}-$${fixedSubtotal + rangedMaxTotal}`
          : `$${fixedSubtotal}`,
      );
      payload.set("notes", values.notes || "No extra notes provided.");

      applyFormSubmitMeta(payload, {
        subject: `VEYNOR Upholstery Quote Request from ${values.name}`,
        replyTo: values.email,
        honey: values.website,
      });

      const message = await submitToFormSubmit(payload);
      setFeedback(
        message ||
          `Thanks. Your upholstery quote request was sent to ${site.name} and someone should follow up shortly.`,
      );
      setValues(createInitialState());
    } catch (error) {
      setIsError(true);
      setFeedback(
        error instanceof Error
          ? error.message
          : "We could not send your request online. Please call or text for the fastest response.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-busy={isSubmitting}
      className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70 sm:p-8"
    >
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            Build your upholstery quote
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-600">
            Click the furniture pieces you need cleaned, build your cart, and
            send the request directly to VEYNOR for follow-up.
          </p>
        </div>

        <label className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
          Website
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={(event) => updateField("website", event.target.value)}
          />
        </label>

        {(Object.keys(categoryLabels) as Array<keyof typeof categoryLabels>).map((category) => (
          <div key={category}>
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-slate-950">
                {categoryLabels[category]}
              </h3>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {upholsteryCatalog
                .filter((item) => item.category === category)
                .map((item) => (
                  <article
                    key={item.id}
                    className={`flex h-full flex-col overflow-hidden rounded-[1.8rem] border transition ${
                      values.quantities[item.id] > 0
                        ? "border-sky-600 bg-sky-50 shadow-sm shadow-sky-100"
                        : "border-slate-200 bg-slate-50"
                    }`}
                  >
                    <div className="relative aspect-[4/3] border-b border-slate-200 bg-white">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(min-width: 1280px) 20vw, (min-width: 768px) 30vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="text-lg font-semibold text-slate-950">{item.name}</h4>
                          {item.note ? (
                            <p className="mt-2 text-sm leading-6 text-slate-500">{item.note}</p>
                          ) : null}
                        </div>
                        <p className="rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-800">
                          {item.priceLabel}
                        </p>
                      </div>
                      <div className="mt-auto space-y-4 pt-5">
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-sm font-semibold text-slate-600">
                            {values.quantities[item.id] > 0 ? "In cart" : "Not added"}
                          </span>
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-900">
                            {values.quantities[item.id]}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => addToCart(item.id)}
                          className={`inline-flex w-full items-center justify-center rounded-full px-4 py-3 text-sm font-semibold transition ${
                            values.quantities[item.id] > 0
                              ? "bg-slate-950 text-white hover:bg-slate-800"
                              : "bg-sky-700 text-white hover:bg-sky-600"
                          }`}
                        >
                          {values.quantities[item.id] > 0
                            ? "Add Another"
                            : "Add to Cart"}
                        </button>
                        <QuantityStepper
                          label="Quantity"
                          value={values.quantities[item.id]}
                          onChange={(value) => updateQuantity(item.id, value)}
                          max={10}
                        />
                      </div>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        ))}

        <div className="rounded-[1.8rem] border border-slate-200 bg-slate-950 p-6 text-white">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-xl font-semibold">Your cart</h3>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
              Estimated total
            </p>
          </div>
          {selectedItems.length > 0 ? (
            <button
              type="button"
              onClick={clearCart}
              className="mt-4 inline-flex rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-200 transition hover:bg-white/10"
            >
              Clear cart
            </button>
          ) : null}
          <div className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
            {selectedItems.length > 0 ? (
              selectedItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between gap-4">
                  <p>
                    {item.name} - {values.quantities[item.id]} x {item.priceLabel}
                  </p>
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, 0)}
                    className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-slate-200 transition hover:bg-white/10"
                  >
                    Remove
                  </button>
                </div>
              ))
            ) : (
              <p>Add the pieces you want cleaned to build your cart.</p>
            )}
          </div>
          <p className="mt-5 text-2xl font-semibold tracking-tight text-white">
            {hasRangeItems
              ? `$${fixedSubtotal + rangedMinTotal}-$${fixedSubtotal + rangedMaxTotal}`
              : `$${fixedSubtotal}`}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
              Your information
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              After your cart is ready, enter your details and VEYNOR will receive
              the full request directly.
            </p>
          </div>
          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Name
            <input
              type="text"
              autoComplete="name"
              required
              value={values.name}
              onChange={(event) => updateField("name", event.target.value)}
              className={inputClasses}
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Phone
            <input
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              required
              value={values.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              className={inputClasses}
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate-700 sm:col-span-2">
            Email
            <input
              type="email"
              autoComplete="email"
              required
              value={values.email}
              onChange={(event) => updateField("email", event.target.value)}
              className={inputClasses}
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate-700 sm:col-span-2">
            City
            <input
              type="text"
              autoComplete="address-level2"
              required
              value={values.city}
              onChange={(event) => updateField("city", event.target.value)}
              className={inputClasses}
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate-700 sm:col-span-2">
            Notes
            <textarea
              rows={5}
              value={values.notes}
              onChange={(event) => updateField("notes", event.target.value)}
              className={inputClasses}
              placeholder="Mention fabric type if you know it, pet spots, odor issues, or any pieces you want quoted separately."
            />
          </label>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-8 inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
      >
        {isSubmitting ? "Sending Request..." : "Send Upholstery Quote Request"}
      </button>
      {feedback ? (
        <p
          aria-live="polite"
          className={`mt-4 text-sm ${isError ? "text-red-700" : "text-slate-600"}`}
        >
          {feedback}
        </p>
      ) : null}
      <p className="mt-4 text-sm text-slate-500">
        This form sends your cart and contact details directly to VEYNOR. If you are not sure which sectional size fits your piece, text a photo to {site.phoneDisplay}.
      </p>
    </form>
  );
}
