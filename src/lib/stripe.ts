/**
 * stripe.ts — stub
 *
 * TODO: Implement with the Stripe Node SDK.
 * - createDepositCheckoutSession: Creates a Stripe Checkout session for deposit payment.
 *   Should set setup_future_usage="off_session" to save the payment method.
 * - chargeBalanceOffSession: Charges the remaining balance using the stored payment method.
 *   Called automatically when rep marks an order as SHIPPED.
 */

export interface CreateDepositSessionParams {
  orderId: string;
  customerEmail: string;
  depositAmountCents: number;
  /** Absolute URL to redirect to on success */
  successUrl: string;
  /** Absolute URL to redirect to on cancel */
  cancelUrl: string;
}

export interface DepositSessionResult {
  sessionId: string;
  checkoutUrl: string;
}

/** Creates a Stripe Checkout session for the deposit. */
export async function createDepositCheckoutSession(
  params: CreateDepositSessionParams
): Promise<DepositSessionResult> {
  // TODO: implement with stripe.checkout.sessions.create(...)
  console.log("[stripe stub] createDepositCheckoutSession", params);
  return {
    sessionId: "cs_stub_" + params.orderId,
    checkoutUrl: "/stub-checkout",
  };
}

export interface ChargeBalanceParams {
  orderId: string;
  stripeCustomerId: string;
  stripePaymentMethodId: string;
  balanceDueCents: number;
}

export interface ChargeResult {
  success: boolean;
  paymentIntentId?: string;
  errorMessage?: string;
}

/** Off-session charge for the remaining balance at shipping time. */
export async function chargeBalanceOffSession(
  params: ChargeBalanceParams
): Promise<ChargeResult> {
  // TODO: implement with stripe.paymentIntents.create({ confirm: true, off_session: true, ... })
  console.log("[stripe stub] chargeBalanceOffSession", params);
  return { success: true, paymentIntentId: "pi_stub_" + params.orderId };
}
