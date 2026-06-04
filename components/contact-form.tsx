"use client";

import { useState } from "react";

import { site } from "@/lib/site";

const formEndpoint = "https://formsubmit.co/ajax/5ead94b53945a986f6efd390f8b01086";

type FormState = {
  name: string;
  phone: string;
  email: string;
  message: string;
  website: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  message: "",
  website: "",
};

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [feedback, setFeedback] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField<Key extends keyof FormState>(key: Key, value: FormState[Key]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!values.name || !values.phone || !values.email || !values.message) {
      setIsError(true);
      setFeedback("Please fill out all fields before submitting your quote request.");
      return;
    }

    setIsSubmitting(true);
    setIsError(false);
    setFeedback("");

    try {
      const payload = new FormData();
      payload.set("name", values.name);
      payload.set("phone", values.phone);
      payload.set("email", values.email);
      payload.set("message", values.message);
      payload.set("_subject", `VEYNOR Quote Request from ${values.name}`);
      payload.set("_replyto", values.email);
      payload.set("_template", "table");
      payload.set("_captcha", "false");
      payload.set("_honey", values.website);

      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: payload,
      });

      const responsePayload = (await response.json()) as { message?: string; success?: string };

      if (!response.ok) {
        throw new Error(
          responsePayload.message ??
            "We could not send your request online. Please call or text for the fastest response.",
        );
      }

      setFeedback(
        responsePayload.message ??
          `Thanks. Your quote request was sent to ${site.name} and someone should follow up shortly.`,
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
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
          Website
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={(event) => updateField("website", event.target.value)}
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Name
          <input
            type="text"
            name="name"
            autoComplete="name"
            required
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="rounded-2xl border border-slate-300 px-4 py-3 text-base text-slate-950 outline-none transition focus:border-sky-500"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Phone
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            inputMode="tel"
            required
            value={values.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className="rounded-2xl border border-slate-300 px-4 py-3 text-base text-slate-950 outline-none transition focus:border-sky-500"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700 sm:col-span-2">
          Email
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="rounded-2xl border border-slate-300 px-4 py-3 text-base text-slate-950 outline-none transition focus:border-sky-500"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700 sm:col-span-2">
          Message
          <textarea
            rows={6}
            name="message"
            required
            value={values.message}
            onChange={(event) => updateField("message", event.target.value)}
            className="rounded-2xl border border-slate-300 px-4 py-3 text-base text-slate-950 outline-none transition focus:border-sky-500"
            placeholder="Tell us the city, rooms, stains, pet issues, and whether you need upholstery or rugs cleaned too."
          />
        </label>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
      >
        {isSubmitting ? "Sending Request..." : "Send Quote Request"}
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
        Fastest response: call or text if you want a same-day reply.
      </p>
    </form>
  );
}
