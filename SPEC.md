\# Pin Business Website — MVP Spec (Deposit now, balance on shipping)



\## Goals

A customer-facing website that captures a pin order from concept → quote → deposit → proofing → production → shipping, with automated updates and automatic balance capture at shipping.



\## Must Have (MVP)



\### Customer Experience

\- Marketing pages:

&nbsp; - Home `/`

&nbsp; - Gallery `/gallery`

&nbsp; - Pricing `/pricing`

&nbsp; - Process `/process`

\- Quote request flow `/quote`

&nbsp; - Collect: name, email, phone, company

&nbsp; - Pin specs: pin type, size, quantity, colors, plating, attachments, packaging, backer card, notes

&nbsp; - Upload reference images/files

&nbsp; - (Optional) Generate AI concept images (stub now; later Gemini/Imagen)

&nbsp; - Submit quote request

\- Customer portal `/portal`

&nbsp; - View order status timeline

&nbsp; - View uploaded assets + generated images

&nbsp; - View proof images

&nbsp; - Approve / request changes

&nbsp; - View tracking number once shipped



\### Rep / Factory Experience

\- Rep dashboard `/rep`

&nbsp; - List orders and view details

&nbsp; - Set status through workflow

&nbsp; - Upload proofs

&nbsp; - Record approval

&nbsp; - Enter shipping carrier + tracking number

&nbsp; - On marking “Shipped” → trigger automatic balance charge



\### Automation

\- Email notifications to customer on:

&nbsp; - Quote received

&nbsp; - Quote sent

&nbsp; - Deposit paid

&nbsp; - Proof ready

&nbsp; - Approved

&nbsp; - In production

&nbsp; - Shipped (include tracking)

&nbsp; - Balance charged receipt

\- Lightweight CRM mirror (start later; stub now)

&nbsp; - Create/update Contact

&nbsp; - Create/update Deal with stage matching status

&nbsp; - Store order link + key specs



\## Payments (Stripe)

\- Customer pays \*\*deposit now\*\* via Stripe Checkout

\- Store Stripe customer + payment method to allow \*\*off-session\*\* charge later

\- When rep marks order as \*\*SHIPPED\*\*, automatically charge remaining balance off-session

\- If charge fails: set status `PAYMENT\_FAILED` and notify customer + internal alert



\## Data Model (Postgres via Prisma)



\### Customer

\- id, name, email, phone, company (optional)

\- createdAt, updatedAt



\### Order

\- id, customerId

\- status (enum)

\- subtotal, depositAmount, balanceDue (int cents)

\- stripeCustomerId (optional)

\- stripeDepositCheckoutSessionId (optional)

\- stripePaymentMethodId (optional)

\- shippingCarrier (optional)

\- shippingTracking (optional)

\- createdAt, updatedAt



\### OrderItem

\- id, orderId

\- pinType, size, quantity

\- colors, plating, attachments, packaging, backerCard

\- notes (optional)

\- createdAt



\### Asset

\- id, orderId

\- type (enum: CUSTOMER\_UPLOAD | AI\_IMAGE | PROOF | FINAL\_ART)

\- url

\- metadataJson (json)

\- createdAt



\### Event (audit log)

\- id, orderId

\- type (string)

\- payloadJson (json)

\- createdAt



\## Status Enum

\- QUOTE\_REQUESTED

\- QUOTED

\- DEPOSIT\_PAID

\- ART\_IN\_PROGRESS

\- PROOF\_SENT

\- APPROVED

\- IN\_PRODUCTION

\- SHIPPED

\- DELIVERED

\- PAYMENT\_FAILED



\## Tech / Implementation Notes

\- Next.js App Router + TypeScript + Tailwind

\- Prisma + Postgres (local dev ok)

\- `src/lib` service stubs (implement later):

&nbsp; - `ai.ts` (Gemini/Imagen)

&nbsp; - `stripe.ts` (deposit + off-session balance capture)

&nbsp; - `email.ts` (Postmark/SendGrid later)

&nbsp; - `crm.ts` (HubSpot/Pipedrive later)

&nbsp; - `storage.ts` (S3/R2 later)

\- Each status change must:

&nbsp; - create an Event row

&nbsp; - trigger the email notification (stub now)

&nbsp; - update CRM stage (stub now)



\## MVP UX Requirements

\- Simple, clean UI

\- Quote form validates required fields

\- Portal shows a status timeline and assets list

\- Rep dashboard can move order through statuses and upload proof assets

