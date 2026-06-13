import { CtaPanel } from "@/components/cta-panel";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { ReferralProgramForm } from "@/components/referral-program-form";
import {
  referralProgramFaqs,
  referralProgramRules,
} from "@/lib/data/service-pricing";
import { getFaqSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Referral Program",
  description:
    "Refer a new VEYNOR customer and submit both sets of contact details online. Qualifying completed jobs of $350 or more earn a $20 referral reward.",
  path: "/referral-program",
});

const referralSteps = [
  {
    title: "Submit the referral first",
    body: "Send the form before the job is completed so the referral can be matched correctly from the start.",
  },
  {
    title: "Customer completes a qualifying job",
    body: "The referred customer should be a new customer and the completed cleaning job should total at least $350.",
  },
  {
    title: "Reward is sent after verification",
    body: "Payouts are typically issued within 7 to 14 days after the completed job is confirmed.",
  },
];

export default function ReferralProgramPage() {
  return (
    <>
      <JsonLd data={getFaqSchema(referralProgramFaqs)} />

      <PageHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Referral Program", href: "/referral-program" },
        ]}
        eyebrow="Referral Program"
        title="Send a referral online and earn $20 on qualifying completed jobs."
        description="If you refer a new customer to VEYNOR Carpet & Upholstery Care, you can submit both sets of details here so the referral can be tracked properly from the beginning."
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-6">
            <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                How the program works
              </h2>
              <div className="mt-5 grid gap-4">
                {referralSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                      Step {index + 1}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-slate-950">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{step.body}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm shadow-slate-200/70">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                Program rules
              </h2>
              <ul className="mt-5 grid gap-4 text-base leading-7 text-slate-600">
                {referralProgramRules.map((rule) => (
                  <li key={rule} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-sky-500" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <ReferralProgramForm />
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
              Referral FAQ
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Questions about qualifying jobs and payout timing
            </h2>
          </div>
          <div className="mt-10">
            <FaqList faqs={referralProgramFaqs} />
          </div>
        </div>
      </section>

      <CtaPanel
        title="Want to send a referral quickly instead of filling out the form now?"
        description="Call or text the referred customer's name, city, and expected service if you want VEYNOR to reach out faster."
      />
    </>
  );
}
