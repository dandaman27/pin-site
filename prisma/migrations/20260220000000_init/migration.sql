-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM (
  'QUOTE_REQUESTED',
  'QUOTED',
  'DEPOSIT_PAID',
  'ART_IN_PROGRESS',
  'PROOF_SENT',
  'APPROVED',
  'IN_PRODUCTION',
  'SHIPPED',
  'DELIVERED',
  'PAYMENT_FAILED'
);

-- CreateEnum
CREATE TYPE "AssetType" AS ENUM (
  'CUSTOMER_UPLOAD',
  'AI_IMAGE',
  'PROOF',
  'FINAL_ART'
);

-- CreateTable
CREATE TABLE "Customer" (
  "id"        TEXT         NOT NULL,
  "name"      TEXT         NOT NULL,
  "email"     TEXT         NOT NULL,
  "phone"     TEXT,
  "company"   TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,

  CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
  "id"                              TEXT         NOT NULL,
  "customerId"                      TEXT         NOT NULL,
  "status"                          "OrderStatus" NOT NULL DEFAULT 'QUOTE_REQUESTED',
  "subtotal"                        INTEGER      NOT NULL DEFAULT 0,
  "depositAmount"                   INTEGER      NOT NULL DEFAULT 0,
  "balanceDue"                      INTEGER      NOT NULL DEFAULT 0,
  "stripeCustomerId"                TEXT,
  "stripeDepositCheckoutSessionId"  TEXT,
  "stripePaymentMethodId"           TEXT,
  "shippingCarrier"                 TEXT,
  "shippingTracking"                TEXT,
  "createdAt"                       TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt"                       TIMESTAMP(3) NOT NULL,

  CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderItem" (
  "id"          TEXT         NOT NULL,
  "orderId"     TEXT         NOT NULL,
  "pinType"     TEXT         NOT NULL,
  "size"        TEXT         NOT NULL,
  "quantity"    INTEGER      NOT NULL,
  "colors"      TEXT         NOT NULL,
  "plating"     TEXT         NOT NULL,
  "attachments" TEXT         NOT NULL,
  "packaging"   TEXT         NOT NULL,
  "backerCard"  TEXT         NOT NULL,
  "notes"       TEXT,
  "createdAt"   TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Asset" (
  "id"           TEXT         NOT NULL,
  "orderId"      TEXT         NOT NULL,
  "type"         "AssetType"  NOT NULL,
  "url"          TEXT         NOT NULL,
  "metadataJson" JSONB        NOT NULL DEFAULT '{}',
  "createdAt"    TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT "Asset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
  "id"          TEXT         NOT NULL,
  "orderId"     TEXT         NOT NULL,
  "type"        TEXT         NOT NULL,
  "payloadJson" JSONB        NOT NULL DEFAULT '{}',
  "createdAt"   TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_email_key" ON "Customer"("email");

-- AddForeignKey
ALTER TABLE "Order"     ADD CONSTRAINT "Order_customerId_fkey"     FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey"    FOREIGN KEY ("orderId")    REFERENCES "Order"("id")    ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "Asset"     ADD CONSTRAINT "Asset_orderId_fkey"        FOREIGN KEY ("orderId")    REFERENCES "Order"("id")    ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "Event"     ADD CONSTRAINT "Event_orderId_fkey"        FOREIGN KEY ("orderId")    REFERENCES "Order"("id")    ON DELETE RESTRICT ON UPDATE CASCADE;
