import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Process — PinCo",
  description: "Learn how custom pin orders work from quote to delivery.",
};

const STEPS = [
  {
    number: "01",
    title: "Submit a Quote Request",
    body: "Fill out our quote form with your pin type, size, quantity, colors, plating, and any reference artwork. No account required.",
    detail: "We collect everything we need to give you an accurate price — pin specs, attachments, packaging, and reference images.",
  },
  {
    number: "02",
    title: "Receive Your Custom Quote",
    body: "Within 1–2 business days we'll email you a detailed quote. You can ask questions or request changes before committing.",
    detail: "Pricing is based on pin type, size, quantity, and add-ons. Volume discounts apply automatically.",
  },
  {
    number: "03",
    title: "Pay the Deposit",
    body: "Accept the quote and pay a 50% deposit via Stripe. Your card is saved securely for the balance charge at shipping.",
    detail: "The deposit is 50% of your order total. No hidden fees. The balance is only charged when your pins actually ship.",
  },
  {
    number: "04",
    title: "Artwork & Proof",
    body: "Our designers create a digital proof based on your specs and uploaded artwork. You'll receive a link to review it in your portal.",
    detail: "Request unlimited revisions until the proof is exactly right. We won't proceed to production without your approval.",
  },
  {
    number: "05",
    title: "Production",
    body: "Once you approve the proof, pins enter production. Standard turnaround is 14–18 business days from approval.",
    detail: "Rush options are available at checkout. You'll receive automated updates as your order progresses.",
  },
  {
    number: "06",
    title: "Shipping & Balance Charge",
    body: "When your pins ship, we automatically charge the remaining 50% to your saved card and email you the tracking number.",
    detail: "If the balance charge fails, your order is paused and you'll receive instructions to update your payment method.",
  },
  {
    number: "07",
    title: "Delivery",
    body: "Your pins arrive. Enjoy! Review your order and reach out if anything needs attention.",
    detail: "We stand behind our work. If there's a production defect we'll remake the affected pins.",
  },
];

export default function ProcessPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900">How It Works</h1>
      <p className="mt-3 text-lg text-zinc-600">
        From first idea to pins in your hands — here&apos;s every step of the process.
      </p>

      <ol className="mt-12 space-y-0">
        {STEPS.map((step, idx) => (
          <li key={step.number} className="flex gap-6">
            {/* Step number + line */}
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
                {step.number}
              </div>
              {idx < STEPS.length - 1 && (
                <div className="w-0.5 flex-1 bg-indigo-200" style={{ minHeight: "3rem" }} />
              )}
            </div>

            {/* Content */}
            <div className="pb-12 pt-2">
              <h3 className="text-lg font-bold text-zinc-900">{step.title}</h3>
              <p className="mt-1 text-zinc-700">{step.body}</p>
              <p className="mt-2 text-sm text-zinc-500">{step.detail}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-4 rounded-2xl bg-indigo-50 px-8 py-10 text-center">
        <h2 className="text-2xl font-bold text-zinc-900">Start your order today</h2>
        <p className="mt-2 text-zinc-600">Takes less than 5 minutes to submit a quote request.</p>
        <Link
          href="/quote"
          className="mt-6 inline-block rounded-full bg-indigo-600 px-8 py-3 font-semibold text-white hover:bg-indigo-700"
        >
          Request a Free Quote
        </Link>
      </div>
    </main>
  );
}
