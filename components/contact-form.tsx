"use client";

import { useState } from "react";

import { site } from "@/lib/site";

type FormState = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [feedback, setFeedback] = useState("");

  function updateField<Key extends keyof FormState>(key: Key, value: FormState[Key]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!values.name || !values.phone || !values.email || !values.message) {
      setFeedback("Please fill out all fields before submitting your quote request.");
      return;
    }

    const subject = encodeURIComponent(`Quote Request from ${values.name}`);
    const body = encodeURIComponent(
      [
        `Name: ${values.name}`,
        `Phone: ${values.phone}`,
        `Email: ${values.email}`,
        "",
        "Project details:",
        values.message,
      ].join("\n"),
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setFeedback("Your email app should open with the quote request details pre-filled.");
    setValues(initialState);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
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
        className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
      >
        Send Quote Request
      </button>
      {feedback ? (
        <p aria-live="polite" className="mt-4 text-sm text-slate-600">
          {feedback}
        </p>
      ) : null}
      <p className="mt-4 text-sm text-slate-500">
        Fastest response: call or text if you want a same-day reply.
      </p>
    </form>
  );
}
