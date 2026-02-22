import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import FeatureCard from "@/components/FeatureCard";

export const metadata: Metadata = {
  title: "Our Process — PinCo",
  description: "Learn how custom pin orders work from quote to delivery.",
};

const STEPS = [
  {
    number: "01",
    title: "Submit a Quote Request",
    body: "Fill out our quote form with your pin type, size, quantity, colors, plating, and any reference artwork. No account required.",
    detail:
      "We collect everything we need to give you an accurate price — pin specs, attachments, packaging, and reference images.",
  },
  {
    number: "02",
    title: "Receive Your Custom Quote",
    body: "Within 1–2 business days we'll email you a detailed quote. Ask questions or request changes before committing.",
    detail:
      "Pricing is based on pin type, size, quantity, and add-ons. Volume discounts apply automatically.",
  },
  {
    number: "03",
    title: "Pay the Deposit",
    body: "Accept the quote and pay a 50% deposit via Stripe. Your card is saved securely for the balance charge at shipping.",
    detail:
      "The deposit is 50% of your order total. No hidden fees. The balance is only charged when your pins actually ship.",
  },
  {
    number: "04",
    title: "Artwork & Digital Proof",
    body: "Our designers create a digital proof based on your specs and uploaded artwork. Review it directly in your customer portal.",
    detail:
      "Request unlimited revisions until the proof is exactly right. We won't proceed to production without your approval.",
  },
  {
    number: "05",
    title: "Production",
    body: "Once you approve the proof, pins enter production. Standard turnaround is 14–18 business days from approval.",
    detail: "Rush options are available. You'll receive automated updates as your order progresses.",
  },
  {
    number: "06",
    title: "Shipping & Balance Charge",
    body: "When your pins ship, we auto-charge the remaining 50% to your saved card and email you the tracking number.",
    detail:
      "If the balance charge fails, your order is paused and you'll receive instructions to update your payment method.",
  },
  {
    number: "07",
    title: "Delivery",
    body: "Your pins arrive. Enjoy! Reach out if anything needs attention — we stand behind our work.",
    detail: "Production defects? We'll remake the affected pins at no cost.",
  },
];

const GUARANTEES = [
  {
    icon: "♾️",
    title: "Unlimited Revisions",
    description: "We iterate on your proof until you're 100% happy — no extra charges.",
  },
  {
    icon: "🛡️",
    title: "Production Guarantee",
    description: "If there's a manufacturing defect, we remake the affected pins for free.",
  },
  {
    icon: "🚀",
    title: "Rush Available",
    description: "Need pins faster? Rush production shaves 5 days off for just 20% more.",
  },
];

export default function ProcessPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeading
        badge="How It Works"
        title="From idea to pins in your hands"
        subtitle="Every step is designed to be simple, transparent, and stress-free. Here's exactly what to expect."
      />

      {/* Timeline */}
      <ol className="mt-14 space-y-0">
        {STEPS.map((step, idx) => (
          <li key={step.number} className="flex gap-6">
            {/* Step number + connector line */}
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white shadow">
                {step.number}
              </div>
              {idx < STEPS.length - 1 && (
                <div className="w-0.5 flex-1 bg-indigo-100" style={{ minHeight: "3rem" }} />
              )}
            </div>

            {/* Content */}
            <div className="pb-12 pt-2">
              <h3 className="text-lg font-bold text-zinc-900">{step.title}</h3>
              <p className="mt-1 text-zinc-700">{step.body}</p>
              <p className="mt-2 rounded-lg bg-zinc-50 px-4 py-2 text-sm text-zinc-500">
                {step.detail}
              </p>
            </div>
          </li>
        ))}
      </ol>

      {/* Guarantees */}
      <section className="mt-4">
        <SectionHeading
          badge="Our Promise"
          title="We've got your back"
          subtitle="Every order comes with these commitments — no asterisks."
        />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {GUARANTEES.map((g) => (
            <FeatureCard
              key={g.title}
              icon={g.icon}
              title={g.title}
              description={g.description}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="mt-16 rounded-2xl bg-gradient-to-br from-indigo-50 to-violet-50 px-8 py-12 text-center">
        <h2 className="text-2xl font-extrabold text-zinc-900">Start your order today</h2>
        <p className="mt-2 text-zinc-600">
          Takes less than 5 minutes to submit a quote request.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <CTAButton href="/quote" size="lg">
            Request a Free Quote →
          </CTAButton>
          <CTAButton href="/pricing" variant="outline">
            View Pricing
          </CTAButton>
        </div>
      </div>
    </main>
  );
}
