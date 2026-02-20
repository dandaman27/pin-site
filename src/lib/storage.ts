/**
 * storage.ts — stub
 *
 * TODO: Implement with AWS S3 or Cloudflare R2.
 * Handles uploads for customer reference images, proofs, and final art.
 */

export type StorageBucket = "customer-uploads" | "proofs" | "final-art";

export interface UploadParams {
  bucket: StorageBucket;
  /** Unique key within the bucket, e.g. "orders/{orderId}/{filename}" */
  key: string;
  /** File contents as Buffer or Uint8Array */
  body: Buffer | Uint8Array;
  contentType: string;
}

export interface UploadResult {
  /** Public or signed URL to access the uploaded file */
  url: string;
  key: string;
}

/** Uploads a file to object storage and returns its URL. */
export async function uploadFile(params: UploadParams): Promise<UploadResult> {
  // TODO: implement with @aws-sdk/client-s3 or the Cloudflare R2 SDK
  console.log("[storage stub] uploadFile", { bucket: params.bucket, key: params.key });
  return {
    url: `https://storage.example.com/${params.bucket}/${params.key}`,
    key: params.key,
  };
}

/** Deletes a file from object storage. */
export async function deleteFile(bucket: StorageBucket, key: string): Promise<void> {
  // TODO: implement with storage SDK
  console.log("[storage stub] deleteFile", { bucket, key });
}
