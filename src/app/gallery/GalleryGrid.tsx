"use client";
import { useState } from "react";
import Link from "next/link";

const CATEGORIES = ["All", "Soft Enamel", "Hard Enamel", "Die-Cast", "Glitter", "Glow-in-Dark"];

const PLACEHOLDER_PINS = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  label: `Pin Design #${i + 1}`,
  type: CATEGORIES[(i % (CATEGORIES.length - 1)) + 1],
  color: ["bg-indigo-200", "bg-violet-200", "bg-sky-200", "bg-amber-200", "bg-emerald-200"][
    i % 5
  ],
}));

export default function GalleryGrid() {
  const [active, setActive] = useState("All");

  const pins =
    active === "All" ? PLACEHOLDER_PINS : PLACEHOLDER_PINS.filter((p) => p.type === active);

  return (
    <>
      {/* Category filter */}
      <div className="mt-8 flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={[
              "rounded-full border px-4 py-1.5 text-sm font-medium transition",
              active === cat
                ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                : "border-zinc-200 text-zinc-600 hover:border-indigo-400 hover:text-indigo-600",
            ].join(" ")}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {pins.map((pin) => (
          <div
            key={pin.id}
            className="group flex aspect-square flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-center transition hover:border-indigo-300 hover:shadow-md"
          >
            <div
              className={`mb-3 h-20 w-20 rounded-full ${pin.color} transition group-hover:scale-110`}
            />
            <p className="text-xs font-semibold text-zinc-700">{pin.label}</p>
            <p className="mt-0.5 rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-400">
              {pin.type}
            </p>
          </div>
        ))}
      </div>

      {pins.length === 0 && (
        <div className="mt-10 py-16 text-center text-zinc-400">No pins in this category yet.</div>
      )}

      {/* CTA */}
      <div className="mt-16 rounded-2xl bg-gradient-to-br from-indigo-50 to-violet-50 px-8 py-12 text-center">
        <span className="mb-3 inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold uppercase tracking-widest text-indigo-700">
          Your turn
        </span>
        <h2 className="mt-2 text-2xl font-extrabold text-zinc-900">Love what you see?</h2>
        <p className="mt-2 text-zinc-600">
          Request a quote and we&apos;ll bring your idea to life.
        </p>
        <Link
          href="/quote"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-indigo-600 px-8 py-3 font-semibold text-white shadow hover:bg-indigo-700"
        >
          Get a Free Quote →
        </Link>
      </div>
    </>
  );
}
