/**
 * email.ts — stub
 *
 * TODO: Implement with Postmark or SendGrid.
 * Each function should send a transactional email to the customer
 * and/or internal team based on order lifecycle events.
 */

export interface OrderEmailContext {
  customerName: string;
  customerEmail: string;
  orderId: string;
  /** Absolute URL to the customer portal for this order */
  portalUrl?: string;
}

export async function sendQuoteReceived(ctx: OrderEmailContext): Promise<void> {
  console.log("[email stub] sendQuoteReceived", ctx);
}

export async function sendQuoteSent(
  ctx: OrderEmailContext & { quoteDetails?: string }
): Promise<void> {
  console.log("[email stub] sendQuoteSent", ctx);
}

export async function sendDepositPaid(ctx: OrderEmailContext): Promise<void> {
  console.log("[email stub] sendDepositPaid", ctx);
}

export async function sendProofReady(
  ctx: OrderEmailContext & { proofUrl: string }
): Promise<void> {
  console.log("[email stub] sendProofReady", ctx);
}

export async function sendApproved(ctx: OrderEmailContext): Promise<void> {
  console.log("[email stub] sendApproved", ctx);
}

export async function sendInProduction(ctx: OrderEmailContext): Promise<void> {
  console.log("[email stub] sendInProduction", ctx);
}

export async function sendShipped(
  ctx: OrderEmailContext & { carrier: string; trackingNumber: string }
): Promise<void> {
  console.log("[email stub] sendShipped", ctx);
}

export async function sendBalanceCharged(
  ctx: OrderEmailContext & { amountCents: number }
): Promise<void> {
  console.log("[email stub] sendBalanceCharged", ctx);
}

export async function sendPaymentFailed(
  ctx: OrderEmailContext & { amountCents: number }
): Promise<void> {
  console.log("[email stub] sendPaymentFailed", ctx);
}
