import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import GalleryGrid from "./GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery — PinCo",
  description: "Browse our gallery of custom enamel pins made for brands, artists, and events.",
};

export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeading
        badge="Inspiration"
        title="Pin Gallery"
        subtitle="A sample of past work. Every pin is custom-made — yours could be next."
      />
      <GalleryGrid />
    </main>
  );
}
