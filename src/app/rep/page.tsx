import type { Metadata } from "next";
import type { OrderStatus } from "@/generated/prisma/client";
import StatusTimeline from "@/components/StatusTimeline";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rep Dashboard — PinCo",
  description: "Internal dashboard for managing pin orders.",
};

// ─── Stub data ────────────────────────────────────────────────────────────────
// TODO: replace with real DB query + auth middleware
const STUB_ORDERS: StubOrder[] = [
  {
    id: "ord_stub_001",
    customerName: "Jane Smith",
    customerEmail: "jane@example.com",
    status: "PROOF_SENT",
    pinType: "Soft Enamel",
    quantity: 200,
    subtotal: 28000,
    depositAmount: 14000,
    balanceDue: 14000,
    createdAt: "2026-02-15",
  },
  {
    id: "ord_stub_002",
    customerName: "Acme Corp",
    customerEmail: "orders@acme.com",
    status: "DEPOSIT_PAID",
    pinType: "Hard Enamel",
    quantity: 500,
    subtotal: 95000,
    depositAmount: 47500,
    balanceDue: 47500,
    createdAt: "2026-02-18",
  },
  {
    id: "ord_stub_003",
    customerName: "Bob Artist",
    customerEmail: "bob@art.io",
    status: "QUOTE_REQUESTED",
    pinType: "Die-Cast Zinc",
    quantity: 100,
    subtotal: 0,
    depositAmount: 0,
    balanceDue: 0,
    createdAt: "2026-02-20",
  },
];

interface StubOrder {
  id: string;
  customerName: string;
  customerEmail: string;
  status: OrderStatus;
  pinType: string;
  quantity: number;
  subtotal: number;
  depositAmount: number;
  balanceDue: number;
  createdAt: string;
}

const STATUS_COLOR: Partial<Record<OrderStatus, string>> = {
  QUOTE_REQUESTED: "bg-zinc-100 text-zinc-600",
  QUOTED: "bg-blue-100 text-blue-700",
  DEPOSIT_PAID: "bg-green-100 text-green-700",
  ART_IN_PROGRESS: "bg-yellow-100 text-yellow-700",
  PROOF_SENT: "bg-amber-100 text-amber-700",
  APPROVED: "bg-emerald-100 text-emerald-700",
  IN_PRODUCTION: "bg-purple-100 text-purple-700",
  SHIPPED: "bg-indigo-100 text-indigo-700",
  DELIVERED: "bg-teal-100 text-teal-700",
  PAYMENT_FAILED: "bg-red-100 text-red-700",
};

export default function RepDashboardPage({
  searchParams,
}: {
  searchParams: { order?: string };
}) {
  const selectedId = searchParams.order;
  const selectedOrder = selectedId
    ? STUB_ORDERS.find((o) => o.id === selectedId)
    : null;

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900">Rep Dashboard</h1>
        <span className="rounded-full border border-dashed border-zinc-300 px-3 py-1 text-xs text-zinc-400">
          Stub — auth &amp; DB query coming soon
        </span>
      </div>

      <div className="grid gap-8 lg:grid-cols-5">
        {/* Order list */}
        <div className="lg:col-span-2">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Orders ({STUB_ORDERS.length})
          </h2>
          <ul className="space-y-2">
            {STUB_ORDERS.map((o) => (
              <li key={o.id}>
                <Link
                  href={`/rep?order=${o.id}`}
                  className={[
                    "block rounded-xl border p-4 transition hover:border-indigo-300",
                    selectedId === o.id
                      ? "border-indigo-400 bg-indigo-50"
                      : "border-zinc-200 bg-white",
                  ].join(" ")}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-semibold text-zinc-900">{o.customerName}</p>
                      <p className="text-xs text-zinc-400">{o.customerEmail}</p>
                    </div>
                    <span
                      className={[
                        "shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold",
                        STATUS_COLOR[o.status] ?? "bg-zinc-100 text-zinc-600",
                      ].join(" ")}
                    >
                      {o.status.replace(/_/g, " ")}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-zinc-500">
                    {o.pinType} · {o.quantity} pcs · {o.createdAt}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Order detail */}
        <div className="lg:col-span-3">
          {selectedOrder ? (
            <OrderDetail order={selectedOrder} />
          ) : (
            <div className="flex h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-300 text-zinc-400">
              <p className="text-sm">Select an order to view details</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

function OrderDetail({ order }: { order: StubOrder }) {
  const NEXT_STATUSES: Partial<Record<OrderStatus, OrderStatus>> = {
    QUOTE_REQUESTED: "QUOTED",
    QUOTED: "DEPOSIT_PAID",
    DEPOSIT_PAID: "ART_IN_PROGRESS",
    ART_IN_PROGRESS: "PROOF_SENT",
    PROOF_SENT: "APPROVED",
    APPROVED: "IN_PRODUCTION",
    IN_PRODUCTION: "SHIPPED",
    SHIPPED: "DELIVERED",
  };
  const nextStatus = NEXT_STATUSES[order.status];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-zinc-900">{order.customerName}</h2>
          <p className="text-sm text-zinc-500">{order.customerEmail}</p>
          <p className="mt-1 font-mono text-xs text-zinc-400">{order.id}</p>
        </div>
        <span
          className={[
            "rounded-full px-3 py-1 text-xs font-semibold",
            STATUS_COLOR[order.status] ?? "bg-zinc-100 text-zinc-600",
          ].join(" ")}
        >
          {order.status.replace(/_/g, " ")}
        </span>
      </div>

      {/* Financials */}
      <div className="rounded-xl border border-zinc-200 bg-white p-4">
        <h3 className="mb-3 text-sm font-semibold text-zinc-700">Financials</h3>
        <dl className="grid grid-cols-3 gap-4 text-center text-sm">
          <div>
            <dt className="text-zinc-400">Subtotal</dt>
            <dd className="mt-1 font-bold text-zinc-900">{cents(order.subtotal)}</dd>
          </div>
          <div>
            <dt className="text-zinc-400">Deposit</dt>
            <dd className="mt-1 font-bold text-green-700">{cents(order.depositAmount)}</dd>
          </div>
          <div>
            <dt className="text-zinc-400">Balance Due</dt>
            <dd className="mt-1 font-bold text-indigo-700">{cents(order.balanceDue)}</dd>
          </div>
        </dl>
      </div>

      {/* Status timeline */}
      <div className="rounded-xl border border-zinc-200 bg-white p-4">
        <h3 className="mb-4 text-sm font-semibold text-zinc-700">Status Timeline</h3>
        <StatusTimeline currentStatus={order.status} />
      </div>

      {/* Rep actions */}
      <div className="rounded-xl border border-zinc-200 bg-white p-4">
        <h3 className="mb-4 text-sm font-semibold text-zinc-700">Actions</h3>
        <div className="space-y-3">
          {nextStatus && (
            <button className="w-full rounded-full bg-indigo-600 py-2 text-sm font-semibold text-white hover:bg-indigo-700">
              Advance to: {nextStatus.replace(/_/g, " ")}
              {nextStatus === "SHIPPED" && " (charges balance)"}
            </button>
          )}

          {/* Upload proof */}
          {(order.status === "ART_IN_PROGRESS" || order.status === "PROOF_SENT") && (
            <label className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-zinc-300 py-2 text-sm font-semibold text-zinc-700 hover:border-indigo-400 hover:text-indigo-600">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M16 12l-4-4m0 0l-4 4m4-4v12" />
              </svg>
              Upload Proof
              <input type="file" accept="image/*,.pdf" className="sr-only" />
            </label>
          )}

          {/* Shipping info — shown when advancing to SHIPPED */}
          {order.status === "IN_PRODUCTION" && (
            <div className="mt-2 space-y-2">
              <input
                type="text"
                placeholder="Shipping carrier (e.g. UPS)"
                className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm"
              />
              <input
                type="text"
                placeholder="Tracking number"
                className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm"
              />
            </div>
          )}
        </div>

        <p className="mt-4 text-xs text-zinc-400">
          Actions are UI stubs — wiring to API routes + DB comes in the next sprint.
        </p>
      </div>
    </div>
  );
}

function cents(n: number) {
  if (n === 0) return "TBD";
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n / 100);
}
