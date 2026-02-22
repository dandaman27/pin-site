import type { Metadata } from "next";
import QuoteForm from "./QuoteForm";

export const metadata: Metadata = {
  title: "Request a Quote — PinCo",
  description:
    "Tell us about your pin project and we'll send a custom quote within 1–2 business days.",
};

const TRUST_BADGES = [
  { icon: "⚡", label: "Quote in 1–2 business days" },
  { icon: "♾️", label: "Unlimited revisions" },
  { icon: "🔒", label: "Secure Stripe payments" },
  { icon: "📦", label: "Ships in 14–18 days" },
];

export default function QuotePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      {/* Heading */}
      <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-indigo-700">
        Free Quote
      </span>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-zinc-900">
        Request a Quote
      </h1>
      <p className="mt-3 text-lg text-zinc-600">
        Fill in your details below. We&apos;ll review your specs and email a quote within 1–2
        business days — no commitment required.
      </p>

      {/* Trust badges */}
      <div className="mt-6 flex flex-wrap gap-3">
        {TRUST_BADGES.map((b) => (
          <span
            key={b.label}
            className="flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-600"
          >
            <span>{b.icon}</span>
            {b.label}
          </span>
        ))}
      </div>

      <div className="mt-10">
        <QuoteForm />
      </div>
    </main>
  );
}
