import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import FeatureCard from "@/components/FeatureCard";

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
    features: [
      "Raised metal borders",
      "Recessed color fill",
      "Multiple platings available",
      "Butterfly or rubber clutch",
    ],
  },
  {
    name: "Hard Enamel",
    tagline: "Premium, polished finish",
    priceFrom: "$1.80",
    qtyFrom: "100",
    features: [
      "Flush, durable surface",
      "Smooth to the touch",
      "Longer production time",
      "Great for corporate gifts",
    ],
    featured: true,
  },
  {
    name: "Die-Cast Zinc",
    tagline: "3D relief, no enamel fill",
    priceFrom: "$1.50",
    qtyFrom: "100",
    features: [
      "Sculptural 3D look",
      "Antique / matte platings",
      "No color fill",
      "High-end collector appeal",
    ],
  },
  {
    name: "Glitter / Glow",
    tagline: "Specialty finishes",
    priceFrom: "$1.90",
    qtyFrom: "100",
    features: [
      "Glitter or glow-in-dark fill",
      "Eye-catching effect",
      "Available on soft enamel base",
      "MOQ may vary",
    ],
  },
];

const ADDONS = [
  { name: "Individual poly bag", price: "+$0.05 / pin" },
  { name: "Backer card (printed)", price: "+$0.15 / pin" },
  { name: "Custom backing card design", price: "+$50 one-time" },
  { name: "Gift box packaging", price: "+$0.40 / pin" },
  { name: "Rush production (–5 days)", price: "+20%" },
];

const WHY_US = [
  {
    icon: "🔄",
    title: "Unlimited Revisions",
    description: "We won't go to production until you love your proof. No revision fees, ever.",
  },
  {
    icon: "💳",
    title: "50% Deposit Model",
    description: "Only pay half upfront. The balance is auto-charged when your pins ship.",
  },
  {
    icon: "📦",
    title: "Low 50-Pin Minimum",
    description: "Small run? No problem. We accept orders as small as 50 pins per design.",
  },
];

export default function PricingPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="text-center">
        <SectionHeading
          badge="Pricing"
          title="Simple, transparent pricing"
          subtitle="Prices decrease with quantity. Pay a deposit now — the remaining balance is only charged when your pins ship."
          center
        />
      </div>

      {/* Pin type cards */}
      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PIN_TYPES.map((pt) => (
          <div
            key={pt.name}
            className={[
              "relative flex flex-col rounded-2xl border p-6 transition",
              pt.featured
                ? "border-indigo-400 bg-indigo-50 shadow-md"
                : "border-zinc-200 bg-white hover:shadow-md",
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
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
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

      {/* Why PinCo */}
      <section className="mt-20">
        <SectionHeading
          badge="Why PinCo"
          title="Built for a stress-free experience"
          subtitle="We've designed every step of the process to be clear, fair, and fun."
        />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {WHY_US.map((item) => (
            <FeatureCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>

      {/* Add-ons */}
      <section className="mt-20">
        <SectionHeading
          badge="Add-ons"
          title="Add-ons &amp; Packaging"
          subtitle="Elevate your pins with custom packaging options."
        />
        <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-200 shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500">
              <tr>
                <th className="px-6 py-4">Option</th>
                <th className="px-6 py-4">Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {ADDONS.map((a) => (
                <tr key={a.name} className="transition hover:bg-zinc-50">
                  <td className="px-6 py-4 text-zinc-700">{a.name}</td>
                  <td className="px-6 py-4 font-semibold text-zinc-900">{a.price}</td>
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
      <section className="mt-14 rounded-2xl border border-indigo-100 bg-indigo-50 px-8 py-8">
        <h2 className="text-xl font-bold text-zinc-900">How Payment Works</h2>
        <ol className="mt-4 space-y-3 text-sm text-zinc-700">
          <li className="flex items-start gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
              1
            </span>
            <span>
              <span className="font-semibold text-indigo-700">Deposit (50%): </span>Paid via Stripe
              Checkout when you accept your quote.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
              2
            </span>
            <span>
              <span className="font-semibold text-indigo-700">Production: </span>We manufacture your
              pins after proof approval.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white">
              3
            </span>
            <span>
              <span className="font-semibold text-indigo-700">Balance (50%): </span>Automatically
              charged to your saved card the moment your order ships.
            </span>
          </li>
        </ol>
        <Link
          href="/process"
          className="mt-6 inline-block text-sm font-semibold text-indigo-600 hover:underline"
        >
          Learn more about the process →
        </Link>
      </section>

      {/* CTA */}
      <div className="mt-16 text-center">
        <CTAButton href="/quote" size="lg">
          Start Your Order →
        </CTAButton>
        <p className="mt-3 text-sm text-zinc-400">No account needed · Quote in 1–2 business days</p>
      </div>
    </main>
  );
}
