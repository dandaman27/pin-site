import type { OrderStatus } from "@/generated/prisma/client";

const STEPS: { status: OrderStatus; label: string; description: string }[] = [
  {
    status: "QUOTE_REQUESTED",
    label: "Quote Requested",
    description: "We received your pin specs and are preparing a quote.",
  },
  {
    status: "QUOTED",
    label: "Quote Sent",
    description: "Your custom quote is ready — check your email.",
  },
  {
    status: "DEPOSIT_PAID",
    label: "Deposit Paid",
    description: "Deposit confirmed. We're starting on your artwork.",
  },
  {
    status: "ART_IN_PROGRESS",
    label: "Art In Progress",
    description: "Our designers are creating your pin artwork.",
  },
  {
    status: "PROOF_SENT",
    label: "Proof Sent",
    description: "Your digital proof is ready for review.",
  },
  {
    status: "APPROVED",
    label: "Approved",
    description: "Proof approved — pins are queued for production.",
  },
  {
    status: "IN_PRODUCTION",
    label: "In Production",
    description: "Your pins are being manufactured.",
  },
  {
    status: "SHIPPED",
    label: "Shipped",
    description: "Your order is on its way!",
  },
  {
    status: "DELIVERED",
    label: "Delivered",
    description: "Enjoy your custom pins!",
  },
];

// PAYMENT_FAILED is handled as an overlay / warning, not a step in the happy path
const HAPPY_PATH = STEPS.map((s) => s.status);

interface StatusTimelineProps {
  currentStatus: OrderStatus;
  /** Optional shipping details shown alongside the SHIPPED step */
  shippingCarrier?: string | null;
  shippingTracking?: string | null;
}

export default function StatusTimeline({
  currentStatus,
  shippingCarrier,
  shippingTracking,
}: StatusTimelineProps) {
  const isPaymentFailed = currentStatus === "PAYMENT_FAILED";
  const displayStatus = isPaymentFailed ? "SHIPPED" : currentStatus;
  const currentIndex = HAPPY_PATH.indexOf(displayStatus);

  return (
    <div className="w-full">
      {isPaymentFailed && (
        <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          <strong>Payment failed.</strong> We were unable to charge the remaining balance.
          Please contact us to resolve this before your order ships.
        </div>
      )}

      <ol className="relative space-y-0">
        {STEPS.map((step, idx) => {
          const isCompleted = idx < currentIndex;
          const isCurrent = idx === currentIndex;
          const isUpcoming = idx > currentIndex;

          return (
            <li key={step.status} className="flex gap-4">
              {/* Connector line + dot */}
              <div className="flex flex-col items-center">
                <div
                  className={[
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold",
                    isCompleted
                      ? "border-indigo-600 bg-indigo-600 text-white"
                      : isCurrent
                        ? "border-indigo-600 bg-white text-indigo-600"
                        : "border-zinc-300 bg-white text-zinc-400",
                  ].join(" ")}
                >
                  {isCompleted ? (
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    idx + 1
                  )}
                </div>
                {idx < STEPS.length - 1 && (
                  <div
                    className={[
                      "w-0.5 flex-1",
                      idx < currentIndex ? "bg-indigo-600" : "bg-zinc-200",
                    ].join(" ")}
                    style={{ minHeight: "2rem" }}
                  />
                )}
              </div>

              {/* Content */}
              <div className="pb-8 pt-1">
                <p
                  className={[
                    "text-sm font-semibold",
                    isCompleted || isCurrent ? "text-zinc-900" : "text-zinc-400",
                  ].join(" ")}
                >
                  {step.label}
                </p>
                <p
                  className={[
                    "mt-0.5 text-xs",
                    isCompleted || isCurrent ? "text-zinc-600" : "text-zinc-400",
                  ].join(" ")}
                >
                  {step.description}
                </p>

                {/* Inline shipping info under the SHIPPED step */}
                {step.status === "SHIPPED" &&
                  isCurrent &&
                  (shippingCarrier || shippingTracking) && (
                    <p className="mt-1 text-xs text-indigo-700">
                      {shippingCarrier && <span>{shippingCarrier} </span>}
                      {shippingTracking && (
                        <span className="font-mono font-semibold">{shippingTracking}</span>
                      )}
                    </p>
                  )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
