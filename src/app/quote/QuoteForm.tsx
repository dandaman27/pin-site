"use client";

import { useState } from "react";

const PIN_TYPES = ["Soft Enamel", "Hard Enamel", "Die-Cast Zinc", "Glitter", "Glow-in-Dark", "Other"];
const PLATINGS = ["Gold", "Silver", "Black Nickel", "Antique Gold", "Antique Silver", "Rose Gold", "Custom"];
const ATTACHMENTS = ["Butterfly Clutch", "Rubber Clutch", "Magnetic Back", "Safety Pin", "Tie Tack", "Other"];
const PACKAGING_OPTIONS = ["No Packaging", "Individual Poly Bag", "Backer Card", "Gift Box", "Custom"];

interface FormState {
  // Contact
  name: string;
  email: string;
  phone: string;
  company: string;
  // Pin specs
  pinType: string;
  size: string;
  quantity: string;
  colors: string;
  plating: string;
  attachments: string;
  packaging: string;
  backerCard: string;
  notes: string;
}

const INITIAL: FormState = {
  name: "", email: "", phone: "", company: "",
  pinType: "", size: "", quantity: "", colors: "",
  plating: "", attachments: "", packaging: "", backerCard: "", notes: "",
};

export default function QuoteForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function set(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function validate(): boolean {
    const required: (keyof FormState)[] = ["name", "email", "pinType", "size", "quantity", "colors", "plating", "attachments", "packaging"];
    const next: Partial<FormState> = {};
    for (const key of required) {
      if (!form[key].trim()) next[key] = "Required";
    }
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) {
      next.email = "Enter a valid email";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    try {
      // TODO: POST to /api/quotes when the API route is implemented
      await new Promise((r) => setTimeout(r, 800)); // stub delay
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <h2 className="text-xl font-bold text-green-800">Quote request received!</h2>
        <p className="mt-2 text-green-700">
          We&apos;ll review your specs and email a quote to <strong>{form.email}</strong> within 1–2
          business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-10">
      {/* Contact info */}
      <fieldset className="space-y-6">
        <legend className="text-lg font-bold text-zinc-900">Contact Information</legend>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Field label="Name *" error={errors.name}>
            <input
              type="text"
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              placeholder="Jane Smith"
              className={input(!!errors.name)}
            />
          </Field>
          <Field label="Email *" error={errors.email}>
            <input
              type="email"
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
              placeholder="jane@example.com"
              className={input(!!errors.email)}
            />
          </Field>
          <Field label="Phone" error={errors.phone}>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => set("phone", e.target.value)}
              placeholder="+1 555 000 0000"
              className={input(false)}
            />
          </Field>
          <Field label="Company / Brand" error={errors.company}>
            <input
              type="text"
              value={form.company}
              onChange={(e) => set("company", e.target.value)}
              placeholder="Acme Co."
              className={input(false)}
            />
          </Field>
        </div>
      </fieldset>

      {/* Pin specs */}
      <fieldset className="space-y-6">
        <legend className="text-lg font-bold text-zinc-900">Pin Specifications</legend>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Field label="Pin Type *" error={errors.pinType}>
            <Select
              value={form.pinType}
              onChange={(v) => set("pinType", v)}
              options={PIN_TYPES}
              placeholder="Select pin type"
              hasError={!!errors.pinType}
            />
          </Field>
          <Field label="Size (e.g. 1.5&quot;) *" error={errors.size}>
            <input
              type="text"
              value={form.size}
              onChange={(e) => set("size", e.target.value)}
              placeholder='1.5"'
              className={input(!!errors.size)}
            />
          </Field>
          <Field label="Quantity *" error={errors.quantity}>
            <input
              type="number"
              min={1}
              value={form.quantity}
              onChange={(e) => set("quantity", e.target.value)}
              placeholder="100"
              className={input(!!errors.quantity)}
            />
          </Field>
          <Field label="Number of Colors *" error={errors.colors}>
            <input
              type="text"
              value={form.colors}
              onChange={(e) => set("colors", e.target.value)}
              placeholder="e.g. 4 colors"
              className={input(!!errors.colors)}
            />
          </Field>
          <Field label="Plating *" error={errors.plating}>
            <Select
              value={form.plating}
              onChange={(v) => set("plating", v)}
              options={PLATINGS}
              placeholder="Select plating"
              hasError={!!errors.plating}
            />
          </Field>
          <Field label="Attachment *" error={errors.attachments}>
            <Select
              value={form.attachments}
              onChange={(v) => set("attachments", v)}
              options={ATTACHMENTS}
              placeholder="Select attachment"
              hasError={!!errors.attachments}
            />
          </Field>
          <Field label="Packaging *" error={errors.packaging}>
            <Select
              value={form.packaging}
              onChange={(v) => set("packaging", v)}
              options={PACKAGING_OPTIONS}
              placeholder="Select packaging"
              hasError={!!errors.packaging}
            />
          </Field>
          <Field label="Backer Card" error={errors.backerCard}>
            <input
              type="text"
              value={form.backerCard}
              onChange={(e) => set("backerCard", e.target.value)}
              placeholder="Yes / No / Custom design"
              className={input(false)}
            />
          </Field>
        </div>
      </fieldset>

      {/* Notes / reference files */}
      <fieldset className="space-y-4">
        <legend className="text-lg font-bold text-zinc-900">Additional Details</legend>
        <Field label="Notes / Special Requests" error={errors.notes}>
          <textarea
            rows={4}
            value={form.notes}
            onChange={(e) => set("notes", e.target.value)}
            placeholder="Any additional details, special finishes, rush requests, or questions…"
            className={input(false) + " resize-none"}
          />
        </Field>

        {/* File upload — stub; real upload handled via /api/uploads */}
        <div className="rounded-xl border-2 border-dashed border-zinc-200 p-6 text-center">
          <p className="text-sm font-medium text-zinc-700">Upload Reference Images / Files</p>
          <p className="mt-1 text-xs text-zinc-400">PNG, JPG, SVG, AI, PDF — up to 20 MB each</p>
          <label className="mt-4 inline-block cursor-pointer rounded-full border border-zinc-300 px-4 py-2 text-xs font-semibold text-zinc-600 hover:border-indigo-400 hover:text-indigo-600">
            Choose Files
            <input type="file" multiple accept="image/*,.pdf,.ai,.svg" className="sr-only" />
          </label>
          <p className="mt-2 text-xs text-zinc-400">(File upload will be wired to storage in a future sprint)</p>
        </div>
      </fieldset>

      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-indigo-600 py-3 text-sm font-semibold text-white shadow hover:bg-indigo-700 disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting…" : "Submit Quote Request"}
      </button>
    </form>
  );
}

// ─── Small helpers ───────────────────────────────────────────────────────────

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label
        className="text-sm font-medium text-zinc-700"
        dangerouslySetInnerHTML={{ __html: label }}
      />
      {children}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

function Select({
  value,
  onChange,
  options,
  placeholder,
  hasError,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
  hasError: boolean;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={input(hasError)}
    >
      <option value="">{placeholder}</option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}

function input(hasError: boolean) {
  return [
    "w-full rounded-lg border px-3 py-2 text-sm outline-none transition",
    "focus:ring-2 focus:ring-indigo-500",
    hasError ? "border-red-400 bg-red-50" : "border-zinc-300 bg-white",
  ].join(" ");
}
