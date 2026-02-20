import type { Metadata } from "next";
import QuoteForm from "./QuoteForm";

export const metadata: Metadata = {
  title: "Request a Quote — PinCo",
  description: "Tell us about your pin project and we'll send a custom quote within 1–2 business days.",
};

export default function QuotePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900">Request a Quote</h1>
      <p className="mt-3 text-zinc-600">
        Fill in your details below. We&apos;ll review your specs and email a quote within 1–2 business
        days — no commitment required.
      </p>
      <div className="mt-10">
        <QuoteForm />
      </div>
    </main>
  );
}
