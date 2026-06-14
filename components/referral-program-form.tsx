"use client";

import { useState } from "react";

import { applyFormSubmitMeta, submitToFormSubmit } from "@/lib/formsubmit";
import { site } from "@/lib/site";

type ReferralProgramState = {
  referrerName: string;
  referrerPhone: string;
  referrerEmail: string;
  referralName: string;
  referralPhone: string;
  referralEmail: string;
  referralCity: string;
  referralService: string;
  notes: string;
  website: string;
};

const initialState: ReferralProgramState = {
  referrerName: "",
  referrerPhone: "",
  referrerEmail: "",
  referralName: "",
  referralPhone: "",
  referralEmail: "",
  referralCity: "",
  referralService: "",
  notes: "",
  website: "",
};

const inputClasses =
  "rounded-2xl border border-slate-300 px-4 py-3 text-base text-slate-950 outline-none transition focus:border-sky-500";

export function ReferralProgramForm() {
  const [values, setValues] = useState(initialState);
  const [feedback, setFeedback] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField<Key extends keyof ReferralProgramState>(
    key: Key,
    value: ReferralProgramState[Key],
  ) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      !values.referrerName ||
      !values.referrerPhone ||
      !values.referrerEmail ||
      !values.referralName ||
      !values.referralPhone ||
      !values.referralCity ||
      !values.referralService
    ) {
      setIsError(true);
      setFeedback(
        "Please fill out the required referrer and referred customer details before submitting.",
      );
      return;
    }

    setIsSubmitting(true);
    setIsError(false);
    setFeedback("");

    try {
      const payload = new FormData();
      payload.set("program", "Referral Program");
      payload.set("referrer_name", values.referrerName);
      payload.set("referrer_phone", values.referrerPhone);
      payload.set("referrer_email", values.referrerEmail);
      payload.set("referred_customer_name", values.referralName);
      payload.set("referred_customer_phone", values.referralPhone);
      payload.set("referred_customer_email", values.referralEmail || "Not provided");
      payload.set("referred_customer_city", values.referralCity);
      payload.set("requested_service", values.referralService);
      payload.set("notes", values.notes || "No extra notes provided.");

      applyFormSubmitMeta(payload, {
        subject: `VEYNOR Referral Program Submission from ${values.referrerName}`,
        replyTo: values.referrerEmail,
        honey: values.website,
      });

      const message = await submitToFormSubmit(payload);
      setFeedback(
        message ||
          `Thanks. Your referral was sent to ${site.name} and will be reviewed for eligibility.`,
      );
      setValues(initialState);
    } catch (error) {
      setIsError(true);
      setFeedback(
        error instanceof Error
          ? error.message
          : "We could not send your referral online. Please call or text if you need help.",
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
            Submit a referral
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-600">
            Enter your information and the referred customer&apos;s information so
            VEYNOR can match the job correctly and confirm the right referral payout tier.
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

        <div className="grid gap-6 lg:grid-cols-2">
          <section className="rounded-[1.8rem] border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
              Your information
            </p>
            <div className="mt-5 grid gap-4">
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Your Name
                <input
                  type="text"
                  autoComplete="name"
                  required
                  value={values.referrerName}
                  onChange={(event) => updateField("referrerName", event.target.value)}
                  className={inputClasses}
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Your Phone
                <input
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  required
                  value={values.referrerPhone}
                  onChange={(event) => updateField("referrerPhone", event.target.value)}
                  className={inputClasses}
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Your Email
                <input
                  type="email"
                  autoComplete="email"
                  required
                  value={values.referrerEmail}
                  onChange={(event) => updateField("referrerEmail", event.target.value)}
                  className={inputClasses}
                />
              </label>
            </div>
          </section>

          <section className="rounded-[1.8rem] border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
              Referred customer
            </p>
            <div className="mt-5 grid gap-4">
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Customer Name
                <input
                  type="text"
                  autoComplete="name"
                  required
                  value={values.referralName}
                  onChange={(event) => updateField("referralName", event.target.value)}
                  className={inputClasses}
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Customer Phone
                <input
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  required
                  value={values.referralPhone}
                  onChange={(event) => updateField("referralPhone", event.target.value)}
                  className={inputClasses}
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Customer Email
                <input
                  type="email"
                  autoComplete="email"
                  value={values.referralEmail}
                  onChange={(event) => updateField("referralEmail", event.target.value)}
                  className={inputClasses}
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                City
                <input
                  type="text"
                  autoComplete="address-level2"
                  required
                  value={values.referralCity}
                  onChange={(event) => updateField("referralCity", event.target.value)}
                  className={inputClasses}
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Service Needed
                <input
                  type="text"
                  required
                  value={values.referralService}
                  onChange={(event) => updateField("referralService", event.target.value)}
                  className={inputClasses}
                  placeholder="For example: 4 rooms and a sectional"
                />
              </label>
            </div>
          </section>
        </div>

        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Notes
          <textarea
            rows={5}
            value={values.notes}
            onChange={(event) => updateField("notes", event.target.value)}
            className={inputClasses}
            placeholder="Add anything helpful about the job, timing, or how the referral should be matched."
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-8 inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
      >
        {isSubmitting ? "Sending Referral..." : "Send Referral"}
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
        Referral payouts are usually sent 7 to 14 days after the completed job. Jobs up to
        $399 earn $20, and jobs of $400 or more earn $50.
      </p>
    </form>
  );
}
