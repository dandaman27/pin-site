/**
 * crm.ts — stub
 *
 * TODO: Implement with HubSpot or Pipedrive API.
 * Keeps the CRM in sync with order state so the sales team
 * has full visibility without leaving their CRM.
 */

import type { OrderStatus } from "@/generated/prisma/client";

export interface CrmContactParams {
  email: string;
  name: string;
  phone?: string;
  company?: string;
}

export interface CrmDealParams {
  orderId: string;
  customerEmail: string;
  status: OrderStatus;
  /** Pin spec summary string for the deal description */
  specSummary?: string;
  /** Absolute URL to the rep dashboard for this order */
  orderUrl?: string;
}

/** Creates or updates a CRM contact record for the customer. */
export async function upsertContact(params: CrmContactParams): Promise<void> {
  // TODO: implement with CRM SDK (HubSpot / Pipedrive)
  console.log("[crm stub] upsertContact", params);
}

/** Creates or updates a CRM deal record and sets the stage to match order status. */
export async function upsertDeal(params: CrmDealParams): Promise<void> {
  // TODO: map OrderStatus → CRM pipeline stage and call CRM API
  console.log("[crm stub] upsertDeal", params);
}
