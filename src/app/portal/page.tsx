import type { Metadata } from "next";
import type { OrderStatus } from "@prisma/client";
import StatusTimeline from "@/components/StatusTimeline";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Order Portal — PinCo",
  description: "Track your custom pin order from quote to delivery.",
};

// ─── Stub data ────────────────────────────────────────────────────────────────
// TODO: replace with real DB query once auth + session are implemented
const STUB_ORDER = {
  id: "ord_stub_001",
  status: "PROOF_SENT" as OrderStatus,
  createdAt: "2026-02-15",
  pinType: "Soft Enamel",
  size: '1.5"',
  quantity: 200,
  subtotal: 28000, // cents
  depositAmount: 14000,
  balanceDue: 14000,
  shippingCarrier: null as string | null,
  shippingTracking: null as string | null,
  assets: [
    { id: "a1", type: "CUSTOMER_UPLOAD" as const, url: "#", label: "reference-art.png" },
    { id: "a2", type: "PROOF" as const, url: "#", label: "proof-v1.pdf" },
  ],
};

const ASSET_BADGES: Record<string, string> = {
  CUSTOMER_UPLOAD: "Your Upload",
  AI_IMAGE: "AI Concept",
  PROOF: "Proof",
  FINAL_ART: "Final Art",
};

export default function PortalPage() {
  const order = STUB_ORDER;

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900">Order Portal</h1>
          <p className="mt-1 text-sm text-zinc-500">
            Order <span className="font-mono font-semibold">{order.id}</span> · Placed{" "}
            {order.createdAt}
          </p>
        </div>
        <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
          {order.status.replace(/_/g, " ")}
        </span>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Left: timeline */}
        <div className="lg:col-span-2">
          <h2 className="mb-6 text-lg font-bold text-zinc-900">Order Status</h2>
          <StatusTimeline
            currentStatus={order.status}
            shippingCarrier={order.shippingCarrier}
            shippingTracking={order.shippingTracking}
          />
        </div>

        {/* Right: summary + assets */}
        <div className="space-y-6">
          {/* Order summary */}
          <div className="rounded-xl border border-zinc-200 bg-white p-5">
            <h3 className="mb-3 font-semibold text-zinc-900">Order Summary</h3>
            <dl className="space-y-2 text-sm">
              <Row label="Pin Type" value={order.pinType} />
              <Row label="Size" value={order.size} />
              <Row label="Quantity" value={order.quantity.toString()} />
              <div className="my-2 border-t border-zinc-100" />
              <Row label="Subtotal" value={cents(order.subtotal)} />
              <Row label="Deposit paid" value={cents(order.depositAmount)} />
              <Row
                label="Balance due"
                value={cents(order.balanceDue)}
                highlight={order.balanceDue > 0}
              />
            </dl>
          </div>

          {/* Assets */}
          <div className="rounded-xl border border-zinc-200 bg-white p-5">
            <h3 className="mb-3 font-semibold text-zinc-900">Files &amp; Assets</h3>
            {order.assets.length === 0 ? (
              <p className="text-sm text-zinc-400">No files yet.</p>
            ) : (
              <ul className="space-y-2">
                {order.assets.map((a) => (
                  <li key={a.id} className="flex items-center justify-between gap-2 text-sm">
                    <span className="truncate text-zinc-700">{a.label}</span>
                    <span className="shrink-0 rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-500">
                      {ASSET_BADGES[a.type]}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Actions */}
          {order.status === "PROOF_SENT" && (
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
              <h3 className="mb-2 font-semibold text-zinc-900">Action Required</h3>
              <p className="text-sm text-zinc-600">Your proof is ready for review.</p>
              <div className="mt-4 flex flex-col gap-2">
                <button className="w-full rounded-full bg-indigo-600 py-2 text-sm font-semibold text-white hover:bg-indigo-700">
                  Approve Proof
                </button>
                <button className="w-full rounded-full border border-zinc-300 py-2 text-sm font-semibold text-zinc-700 hover:border-zinc-400">
                  Request Changes
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <p className="mt-12 text-center text-sm text-zinc-400">
        Questions?{" "}
        <Link href="mailto:hello@pinco.example" className="text-indigo-600 hover:underline">
          Contact us
        </Link>
      </p>

      <p className="mt-4 rounded-lg border border-dashed border-zinc-300 bg-zinc-50 p-4 text-center text-xs text-zinc-400">
        Portal is showing stub data. Authentication and real order lookup will be added in a future
        sprint.
      </p>
    </main>
  );
}

function Row({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex justify-between">
      <dt className="text-zinc-500">{label}</dt>
      <dd className={highlight ? "font-semibold text-indigo-700" : "text-zinc-800"}>{value}</dd>
    </div>
  );
}

function cents(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n / 100);
}
