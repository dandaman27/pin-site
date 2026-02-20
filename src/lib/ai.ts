/**
 * ai.ts — stub
 *
 * TODO: Implement with Google Gemini / Imagen API.
 * Generates concept images for a pin based on customer description.
 */

export interface GenerateConceptParams {
  orderId: string;
  prompt: string;
  /** Number of concept images to generate */
  count?: number;
}

export interface GeneratedConcept {
  imageUrl: string;
  /** Prompt used to generate this image */
  prompt: string;
}

/** Generates AI concept images for a pin design. */
export async function generateConceptImages(
  params: GenerateConceptParams
): Promise<GeneratedConcept[]> {
  // TODO: implement with Gemini/Imagen API
  console.log("[ai stub] generateConceptImages", params);
  return [];
}
