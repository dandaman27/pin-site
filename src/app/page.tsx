import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import FAQAccordion from "@/components/FAQAccordion";

const PROCESS_STEPS = [
  {
    step: "01",
    icon: "🎨",
    title: "Upload Your Art",
    body: "Share your design — AI-generated, hand-drawn, or a logo. Any file format accepted.",
  },
  {
    step: "02",
    icon: "✅",
    title: "Approve a Digital Proof",
    body: "We create a full-color digital proof. Request unlimited revisions until it's perfect.",
  },
  {
    step: "03",
    icon: "📦",
    title: "We Produce & Ship",
    body: "Pins ship in 14–18 business days. The remaining balance is auto-charged when your order ships.",
  },
];

const SOCIAL_PROOF = [
  { name: "Riverside High School", category: "School" },
  { name: "City FC", category: "Sports Team" },
  { name: "Pixel Labs", category: "Tech Company" },
  { name: "Makers Market", category: "Small Business" },
  { name: "Comic Con Collective", category: "Event" },
  { name: "Green Valley Scouts", category: "Non-Profit" },
];

const PRICING_TEASER = [
  { type: "Soft Enamel", from: "$1.20", badge: "Most Popular", desc: "Classic look, great value" },
  { type: "Hard Enamel", from: "$1.80", badge: "Premium", desc: "Flush, polished finish" },
  { type: "Die-Cast Zinc", from: "$1.50", badge: "3D Look", desc: "Sculptural, no enamel fill" },
];

const FAQ_ITEMS = [
  {
    question: "How long does production take?",
    answer:
      "Standard turnaround is 14–18 business days from proof approval. Rush options (–5 days) are available for an additional 20% fee.",
  },
  {
    question: "What is the minimum order quantity?",
    answer:
      "Our minimum is 50 pins per design. You can include multiple designs in a single quote request.",
  },
  {
    question: "What artwork formats do you accept?",
    answer:
      "We prefer vector files (AI, EPS, PDF, SVG) but also accept PNG and JPG at 300 DPI or higher. Not sure about your file? Submit it — our team will clean it up at no extra charge.",
  },
  {
    question: "How many revisions do I get on the proof?",
    answer:
      "Unlimited. We won't move to production until you're 100% happy with the digital proof. Most orders only need 1–2 revision rounds.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes! We ship worldwide via DHL and USPS. International shipping costs are calculated and included in your quote.",
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-violet-50 px-6 py-28 text-center">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-indigo-200 opacity-20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 h-56 w-56 rounded-full bg-violet-300 opacity-20 blur-3xl" />

        <span className="mb-5 inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-indigo-700">
          🎉 Trusted by 500+ schools, teams &amp; brands
        </span>

        <h1 className="mx-auto max-w-3xl text-5xl font-black tracking-tight text-zinc-900 sm:text-6xl">
          Custom Lapel Pins{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            Made Easy
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-600">
          Upload your art, approve a digital proof, and receive beautiful pins at your door.
          Starting at <strong className="text-zinc-900">$1.20/pin</strong> with a{" "}
          <strong className="text-zinc-900">50-pin minimum</strong>.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <CTAButton href="/quote" size="lg">
            Get a Free Quote →
          </CTAButton>
          <CTAButton href="/gallery" variant="outline" size="lg">
            View Gallery
          </CTAButton>
        </div>

        <p className="mt-6 text-sm text-zinc-400">No account needed · Quote within 1–2 business days</p>
      </section>

      {/* ── 3-STEP PROCESS ───────────────────────────────────────────── */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            badge="Simple Process"
            title="Three steps to pins you'll love"
            subtitle="We handle the complexity so you can focus on the fun part — your design."
            center
          />

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {PROCESS_STEPS.map((s) => (
              <div key={s.step} className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-indigo-600 text-3xl shadow-lg shadow-indigo-200">
                    {s.icon}
                  </div>
                  <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-zinc-900 text-xs font-bold text-white">
                    {s.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-zinc-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/process"
              className="text-sm font-semibold text-indigo-600 hover:underline"
            >
              See the full process →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF STRIP ───────────────────────────────────────── */}
      <section className="border-y border-zinc-100 bg-zinc-50 px-6 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
            Trusted by organizations everywhere
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {SOCIAL_PROOF.map((org) => (
              <div
                key={org.name}
                className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-5 py-3 shadow-sm"
              >
                <div className="h-8 w-8 rounded-full bg-indigo-100" />
                <div className="text-left">
                  <p className="text-sm font-semibold text-zinc-800">{org.name}</p>
                  <p className="text-xs text-zinc-400">{org.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING TEASER ───────────────────────────────────────────── */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            badge="Pricing"
            title="Transparent pricing, no surprises"
            subtitle="Prices drop with quantity. Pay 50% to start — the rest is charged only when your pins ship."
            center
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {PRICING_TEASER.map((p) => (
              <div
                key={p.type}
                className="flex flex-col items-center rounded-2xl border border-zinc-200 bg-zinc-50 px-8 py-10 text-center transition hover:border-indigo-300 hover:shadow-md"
              >
                <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
                  {p.badge}
                </span>
                <h3 className="mt-3 text-lg font-bold text-zinc-900">{p.type}</h3>
                <p className="mt-1 text-sm text-zinc-500">{p.desc}</p>
                <p className="mt-4 text-4xl font-extrabold text-indigo-600">
                  {p.from}
                  <span className="text-lg font-normal text-zinc-500"> / pin</span>
                </p>
                <p className="mt-1 text-xs text-zinc-400">starting at 100 pcs</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <CTAButton href="/pricing" variant="outline">
              See full pricing &amp; add-ons →
            </CTAButton>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section id="faq" className="border-t border-zinc-100 bg-zinc-50 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            badge="FAQ"
            title="Common questions"
            subtitle="Everything you need to know before ordering."
            center
          />

          <div className="mt-12">
            <FAQAccordion items={FAQ_ITEMS} />
          </div>

          <p className="mt-8 text-center text-sm text-zinc-500">
            Still have questions?{" "}
            <a
              href="mailto:hello@pinco.com"
              className="font-semibold text-indigo-600 hover:underline"
            >
              Email us
            </a>
          </p>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────── */}
      <section className="bg-indigo-600 px-6 py-20 text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Ready to make your pins?
        </h2>
        <p className="mt-4 text-lg text-indigo-200">
          Takes less than 5 minutes. No account needed.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <CTAButton href="/quote" variant="secondary" size="lg">
            Get a Free Quote →
          </CTAButton>
          <CTAButton href="/gallery" variant="ghost" size="lg">
            Browse Gallery
          </CTAButton>
        </div>
      </section>
    </main>
  );
}
