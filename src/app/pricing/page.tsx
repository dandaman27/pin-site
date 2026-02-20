import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing — PinCo",
  description: "Transparent pricing for custom enamel pins. Deposit now, balance charged at ship.",
};

const PIN_TYPES = [
  {
    name: "Soft Enamel",
    tagline: "Classic look, great value",
    priceFrom: "$1.20",
    qtyFrom: "100",
    features: ["Raised metal borders", "Recessed color fill", "Multiple platings available", "Butterfly or rubber clutch"],
  },
  {
    name: "Hard Enamel",
    tagline: "Premium, polished finish",
    priceFrom: "$1.80",
    qtyFrom: "100",
    features: ["Flush, durable surface", "Smooth to the touch", "Longer production time", "Great for corporate gifts"],
    featured: true,
  },
  {
    name: "Die-Cast Zinc",
    tagline: "3D relief, no enamel fill",
    priceFrom: "$1.50",
    qtyFrom: "100",
    features: ["Sculptural 3D look", "Antique / matte platings", "No color fill", "High-end collector appeal"],
  },
  {
    name: "Glitter / Glow",
    tagline: "Specialty finishes",
    priceFrom: "$1.90",
    qtyFrom: "100",
    features: ["Glitter or glow-in-dark fill", "Eye-catching effect", "Available on soft enamel base", "MOQ may vary"],
  },
];

const ADDONS = [
  { name: "Individual poly bag", price: "+$0.05 / pin" },
  { name: "Backer card (printed)", price: "+$0.15 / pin" },
  { name: "Custom backing card design", price: "+$50 one-time" },
  { name: "Gift box packaging", price: "+$0.40 / pin" },
  { name: "Rush production (–5 days)", price: "+20%" },
];

export default function PricingPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900">Simple, Transparent Pricing</h1>
        <p className="mt-3 text-zinc-600">
          Prices decrease with quantity. Pay a deposit now — the remaining balance is only charged when your pins ship.
        </p>
      </div>

      {/* Pin type cards */}
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PIN_TYPES.map((pt) => (
          <div
            key={pt.name}
            className={[
              "relative flex flex-col rounded-2xl border p-6",
              pt.featured
                ? "border-indigo-400 bg-indigo-50 shadow-md"
                : "border-zinc-200 bg-white",
            ].join(" ")}
          >
            {pt.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-0.5 text-xs font-semibold text-white">
                Most Popular
              </span>
            )}
            <h3 className="text-lg font-bold text-zinc-900">{pt.name}</h3>
            <p className="text-sm text-zinc-500">{pt.tagline}</p>
            <div className="my-4 border-t border-zinc-200" />
            <p className="text-3xl font-extrabold text-zinc-900">
              {pt.priceFrom}
              <span className="text-base font-normal text-zinc-500"> / pin</span>
            </p>
            <p className="text-xs text-zinc-400">from {pt.qtyFrom} pcs</p>
            <ul className="mt-4 flex-1 space-y-2">
              {pt.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-zinc-600">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/quote"
              className={[
                "mt-6 block rounded-full py-2 text-center text-sm font-semibold transition",
                pt.featured
                  ? "bg-indigo-600 text-white hover:bg-indigo-700"
                  : "border border-zinc-300 text-zinc-700 hover:border-indigo-400 hover:text-indigo-600",
              ].join(" ")}
            >
              Get a Quote
            </Link>
          </div>
        ))}
      </div>

      {/* Add-ons */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-zinc-900">Add-ons &amp; Packaging</h2>
        <div className="mt-6 overflow-hidden rounded-xl border border-zinc-200">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50 text-left text-xs font-semibold uppercase text-zinc-500">
              <tr>
                <th className="px-6 py-3">Option</th>
                <th className="px-6 py-3">Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {ADDONS.map((a) => (
                <tr key={a.name}>
                  <td className="px-6 py-4 text-zinc-700">{a.name}</td>
                  <td className="px-6 py-4 font-medium text-zinc-900">{a.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-zinc-400">
          * All prices are estimates. Final quote provided after reviewing your artwork and specs.
        </p>
      </section>

      {/* Payment note */}
      <section className="mt-12 rounded-2xl border border-indigo-100 bg-indigo-50 px-8 py-8">
        <h2 className="text-xl font-bold text-zinc-900">How Payment Works</h2>
        <ol className="mt-4 space-y-2 text-sm text-zinc-700">
          <li><span className="font-semibold text-indigo-700">1. Deposit (50%):</span> Paid via Stripe Checkout when you accept your quote.</li>
          <li><span className="font-semibold text-indigo-700">2. Production:</span> We manufacture your pins after proof approval.</li>
          <li><span className="font-semibold text-indigo-700">3. Balance (50%):</span> Automatically charged to your saved card the moment your order ships.</li>
        </ol>
        <Link href="/process" className="mt-6 inline-block text-sm font-semibold text-indigo-600 hover:underline">
          Learn more about the process →
        </Link>
      </section>
    </main>
  );
}
