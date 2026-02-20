import Link from "next/link";

const features = [
  {
    title: "Custom Designs",
    body: "From simple logos to intricate artwork — we bring your vision to life with digital proofs before production.",
  },
  {
    title: "Deposit Now, Balance on Ship",
    body: "Pay a small deposit to start. The remaining balance is only charged when your pins ship.",
  },
  {
    title: "Low Minimums",
    body: "Order as few as 50 pins. Mix die-cast, soft enamel, hard enamel, and more in a single order.",
  },
  {
    title: "Live Order Tracking",
    body: "Your personal portal tracks every stage — from quote through delivery — with automatic email updates.",
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="flex flex-col items-center bg-gradient-to-b from-indigo-50 to-white px-6 py-24 text-center">
        <h1 className="max-w-2xl text-5xl font-extrabold tracking-tight text-zinc-900">
          Custom Pins,{" "}
          <span className="text-indigo-600">Crafted for You</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-zinc-600">
          Soft enamel, hard enamel, die-cast, and more. Upload your art, approve a proof, and we
          handle the rest — with zero guesswork.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/quote"
            className="rounded-full bg-indigo-600 px-8 py-3 text-base font-semibold text-white shadow hover:bg-indigo-700"
          >
            Request a Free Quote
          </Link>
          <Link
            href="/gallery"
            className="rounded-full border border-zinc-300 px-8 py-3 text-base font-semibold text-zinc-700 hover:border-zinc-400"
          >
            See Gallery
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-20 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="rounded-xl border border-zinc-100 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-zinc-900">{f.title}</h3>
            <p className="mt-2 text-sm text-zinc-600">{f.body}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 px-6 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">Ready to make your pins?</h2>
        <p className="mt-3 text-indigo-100">
          Takes less than 5 minutes. No account needed to request a quote.
        </p>
        <Link
          href="/quote"
          className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-indigo-700 shadow hover:bg-indigo-50"
        >
          Get Started
        </Link>
      </section>
    </main>
  );
}
