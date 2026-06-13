"use client";

import { useState } from "react";

import { QuantityStepper } from "@/components/quantity-stepper";
import {
  carpetExtraItems,
  carpetRoomPackages,
} from "@/lib/data/service-pricing";
import { applyFormSubmitMeta, submitToFormSubmit } from "@/lib/formsubmit";
import { site } from "@/lib/site";

type CarpetQuoteState = {
  roomPackageId: string;
  stairs: number;
  landings: number;
  hallways: number;
  deepCleaningRequested: boolean;
  name: string;
  phone: string;
  email: string;
  city: string;
  notes: string;
  website: string;
};

const initialState: CarpetQuoteState = {
  roomPackageId: "",
  stairs: 0,
  landings: 0,
  hallways: 0,
  deepCleaningRequested: false,
  name: "",
  phone: "",
  email: "",
  city: "",
  notes: "",
  website: "",
};

const inputClasses =
  "rounded-2xl border border-slate-300 px-4 py-3 text-base text-slate-950 outline-none transition focus:border-sky-500";

export function CarpetQuoteBuilder() {
  const [values, setValues] = useState<CarpetQuoteState>(initialState);
  const [feedback, setFeedback] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedRoomPackage = carpetRoomPackages.find(
    (item) => item.id === values.roomPackageId,
  );

  const stairsPrice = carpetExtraItems.find((item) => item.id === "stairs-step")?.price ?? 4;
  const landingPrice = carpetExtraItems.find((item) => item.id === "landing")?.price ?? 10;
  const hallwayPrice = carpetExtraItems.find((item) => item.id === "hallway")?.price ?? 19;

  const carpetSubtotal =
    (selectedRoomPackage?.price ?? 0) +
    values.stairs * stairsPrice +
    values.landings * landingPrice +
    values.hallways * hallwayPrice;

  const hasSelection =
    Boolean(selectedRoomPackage) ||
    values.stairs > 0 ||
    values.landings > 0 ||
    values.hallways > 0;

  const summaryLines = [
    selectedRoomPackage
      ? `${selectedRoomPackage.label} - $${selectedRoomPackage.price}`
      : null,
    values.stairs > 0
      ? `Stairs: ${values.stairs} step(s) - $${values.stairs * stairsPrice}`
      : null,
    values.landings > 0
      ? `Landings: ${values.landings} - $${values.landings * landingPrice}`
      : null,
    values.hallways > 0
      ? `Hallway / Walk-In Closet: ${values.hallways} - $${values.hallways * hallwayPrice}`
      : null,
    values.deepCleaningRequested
      ? "Deep cleaning add-on requested - quote at $25-$45 per room or area depending on soil level."
      : null,
  ].filter((line): line is string => Boolean(line));

  function updateField<Key extends keyof CarpetQuoteState>(
    key: Key,
    value: CarpetQuoteState[Key],
  ) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!hasSelection) {
      setIsError(true);
      setFeedback("Please choose at least one room package or carpet area.");
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
      const payload = new FormData();
      payload.set("service_type", "Carpet Cleaning Quote Builder");
      payload.set("customer_name", values.name);
      payload.set("customer_phone", values.phone);
      payload.set("customer_email", values.email);
      payload.set("city", values.city);
      payload.set("selected_services", summaryLines.join("\n"));
      payload.set(
        "estimated_subtotal",
        values.deepCleaningRequested
          ? `$${carpetSubtotal} plus deep cleaning add-on`
          : `$${carpetSubtotal}`,
      );
      payload.set("notes", values.notes || "No extra notes provided.");

      applyFormSubmitMeta(payload, {
        subject: `VEYNOR Carpet Cleaning Quote Request from ${values.name}`,
        replyTo: values.email,
        honey: values.website,
      });

      const message = await submitToFormSubmit(payload);
      setFeedback(
        message ||
          `Thanks. Your carpet quote request was sent to ${site.name} and someone should follow up shortly.`,
      );
      setValues(initialState);
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
            Build your carpet cleaning quote
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-600">
            Choose the room package first, then add stairs, landings, hallway
            areas, or a deep cleaning request if the carpet needs heavier restorative work.
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

        <div>
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg font-semibold text-slate-950">Room packages</h3>
            <p className="text-sm text-slate-500">Tap one option</p>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {carpetRoomPackages.map((item) => {
              const isSelected = values.roomPackageId === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() =>
                    updateField("roomPackageId", isSelected ? "" : item.id)
                  }
                  className={`rounded-[1.6rem] border p-5 text-left transition ${
                    isSelected
                      ? "border-sky-600 bg-sky-50 shadow-sm shadow-sky-100"
                      : "border-slate-200 bg-slate-50 hover:border-slate-300"
                  }`}
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                    Carpet Cleaning
                  </p>
                  <h4 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                    {item.label}
                  </h4>
                  <p className="mt-2 text-lg font-semibold text-slate-700">${item.price}</p>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-950">Additional areas</h3>
            <p className="mt-2 text-sm text-slate-500">
              Add only the extras you need beyond the main room package.
            </p>
          </div>
          <QuantityStepper
            label={`Stair Steps - $${stairsPrice} each`}
            value={values.stairs}
            onChange={(value) => updateField("stairs", value)}
            max={40}
          />
          <QuantityStepper
            label={`Landings - $${landingPrice} each`}
            value={values.landings}
            onChange={(value) => updateField("landings", value)}
            max={10}
          />
          <QuantityStepper
            label={`Hallway / Walk-In Closet - $${hallwayPrice} each`}
            value={values.hallways}
            onChange={(value) => updateField("hallways", value)}
            max={10}
          />
        </div>

        <label className="flex items-start gap-3 rounded-[1.6rem] border border-slate-200 bg-slate-50 p-5">
          <input
            type="checkbox"
            checked={values.deepCleaningRequested}
            onChange={(event) =>
              updateField("deepCleaningRequested", event.target.checked)
            }
            className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-700 focus:ring-sky-500"
          />
          <span>
            <span className="block text-base font-semibold text-slate-950">
              Add deep cleaning request
            </span>
            <span className="mt-2 block text-sm leading-6 text-slate-600">
              Deep cleaning is quoted at $25-$45 per room or area depending on
              how heavily soiled the carpet is. This is added when the job needs more
              than routine maintenance.
            </span>
          </span>
        </label>

        <div className="rounded-[1.8rem] border border-slate-200 bg-slate-950 p-6 text-white">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-xl font-semibold">Quote summary</h3>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
              Estimated starting total
            </p>
          </div>
          <div className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
            {summaryLines.length > 0 ? (
              summaryLines.map((line) => <p key={line}>{line}</p>)
            ) : (
              <p>Choose a room package or area to start your quote.</p>
            )}
          </div>
          <p className="mt-5 text-2xl font-semibold tracking-tight text-white">
            {values.deepCleaningRequested
              ? `$${carpetSubtotal} + deep cleaning add-on`
              : `$${carpetSubtotal}`}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
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
              placeholder="Mention pet issues, move-out timing, heavy traffic areas, or anything else we should know."
            />
          </label>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-8 inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
      >
        {isSubmitting ? "Sending Request..." : "Send Carpet Quote Request"}
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
        Prefer a faster answer? Call or text {site.phoneDisplay} with your city and room count.
      </p>
    </form>
  );
}
