import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery — PinCo",
  description: "Browse our gallery of custom enamel pins made for brands, artists, and events.",
};

const CATEGORIES = ["All", "Soft Enamel", "Hard Enamel", "Die-Cast", "Glitter", "Glow-in-Dark"];

// Placeholder grid items — replace with real Asset records from the DB
const PLACEHOLDER_PINS = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  label: `Pin Design #${i + 1}`,
  type: CATEGORIES[(i % (CATEGORIES.length - 1)) + 1],
}));

export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900">Pin Gallery</h1>
      <p className="mt-3 max-w-xl text-zinc-600">
        A sample of past work. Every pin is custom-made — yours could be next.
      </p>

      {/* Category filter (static for now) */}
      <div className="mt-8 flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className="rounded-full border border-zinc-200 px-4 py-1.5 text-sm font-medium text-zinc-600 transition hover:border-indigo-400 hover:text-indigo-600"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {PLACEHOLDER_PINS.map((pin) => (
          <div
            key={pin.id}
            className="group flex aspect-square flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-center transition hover:border-indigo-300 hover:bg-indigo-50"
          >
            {/* Replace with <Image> once real assets exist */}
            <div className="mb-2 h-20 w-20 rounded-full bg-zinc-200 group-hover:bg-indigo-200" />
            <p className="text-xs font-semibold text-zinc-700">{pin.label}</p>
            <p className="text-xs text-zinc-400">{pin.type}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-2xl bg-indigo-50 px-8 py-10 text-center">
        <h2 className="text-2xl font-bold text-zinc-900">Love what you see?</h2>
        <p className="mt-2 text-zinc-600">Request a quote and we&apos;ll bring your idea to life.</p>
        <Link
          href="/quote"
          className="mt-6 inline-block rounded-full bg-indigo-600 px-8 py-3 font-semibold text-white hover:bg-indigo-700"
        >
          Request a Quote
        </Link>
      </div>
    </main>
  );
}
