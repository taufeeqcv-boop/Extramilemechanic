"use client";

import { useForm, ValidationError } from "@formspree/react";
import { useMemo, useState } from "react";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "";
const WHATSAPP_NUMBER = "27650034437";

type IntakeFormData = {
  fullName: string;
  phone: string;
  email: string;
  vehicleMakeModel: string;
  vehicleYear: string;
  registration: string;
  mileage: string;
  serviceNeeded: string;
  problemDescription: string;
  preferredContact: string;
};

const initialData: IntakeFormData = {
  fullName: "",
  phone: "",
  email: "",
  vehicleMakeModel: "",
  vehicleYear: "",
  registration: "",
  mileage: "",
  serviceNeeded: "",
  problemDescription: "",
  preferredContact: "WhatsApp",
};

function buildWhatsAppMessage(data: IntakeFormData) {
  const lines = [
    "Hi Julian, I need help with my vehicle.",
    "",
    `Name: ${data.fullName || "-"}`,
    `Phone: ${data.phone || "-"}`,
    `Email: ${data.email || "-"}`,
    `Vehicle: ${data.vehicleMakeModel || "-"}`,
    `Year: ${data.vehicleYear || "-"}`,
    `Registration: ${data.registration || "-"}`,
    `Mileage: ${data.mileage || "-"}`,
    `Service needed: ${data.serviceNeeded || "-"}`,
    `Preferred contact: ${data.preferredContact || "-"}`,
    "",
    "Problem details:",
    data.problemDescription || "-",
  ];
  return encodeURIComponent(lines.join("\n"));
}

function ContactFormWithFormspree({ formId }: { formId: string }) {
  const [state, handleSubmit] = useForm(formId);
  const [formData, setFormData] = useState<IntakeFormData>(initialData);

  if (state.succeeded) {
    return (
      <div className="rounded-lg border border-border bg-bg-subtle p-8 text-center">
        <h3 className="text-xl font-bold text-brand">Message Sent Successfully</h3>
        <p className="mt-2 text-text-muted">
          Thank you for contacting Extra Mile Mechanic. We will be in touch shortly.
        </p>
      </div>
    );
  }

  const inputClass =
    "mt-1 block w-full rounded-md border border-border px-3 py-2 text-text-main shadow-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand";

  const isWhatsAppReady = useMemo(() => {
    return (
      formData.fullName.trim().length > 1 &&
      formData.phone.trim().length > 5 &&
      formData.vehicleMakeModel.trim().length > 1 &&
      formData.problemDescription.trim().length > 5
    );
  }, [formData]);

  function updateField<K extends keyof IntakeFormData>(key: K, value: IntakeFormData[K]) {
    setFormData((prev) => ({ ...prev, [key]: value }));
  }

  function openWhatsApp() {
    const message = buildWhatsAppMessage(formData);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      action={`https://formspree.io/f/${formId}`}
      method="POST"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Honeypot: Formspree spam protection; bots fill this and submission is dropped */}
      <input type="text" name="_gotcha" style={{ display: "none" }} aria-hidden />
      <input type="hidden" name="_subject" value="New booking request from Extra Mile Mechanic website" />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-text-main">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            required
            autoComplete="name"
            value={formData.fullName}
            onChange={(e) => updateField("fullName", e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-text-main">
            Phone / WhatsApp Number
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            required
            autoComplete="tel"
            value={formData.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-main">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            autoComplete="email"
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="preferredContact" className="block text-sm font-medium text-text-main">
            Preferred Contact Method
          </label>
          <select
            id="preferredContact"
            name="preferredContact"
            value={formData.preferredContact}
            onChange={(e) => updateField("preferredContact", e.target.value)}
            className={inputClass}
          >
            <option>WhatsApp</option>
            <option>Phone call</option>
            <option>Email</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="vehicleMakeModel" className="block text-sm font-medium text-text-main">
            Vehicle (Make and Model)
          </label>
          <input
            id="vehicleMakeModel"
            type="text"
            name="vehicleMakeModel"
            required
            value={formData.vehicleMakeModel}
            onChange={(e) => updateField("vehicleMakeModel", e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="vehicleYear" className="block text-sm font-medium text-text-main">
            Vehicle Year
          </label>
          <input
            id="vehicleYear"
            type="text"
            name="vehicleYear"
            placeholder="e.g. 2018"
            value={formData.vehicleYear}
            onChange={(e) => updateField("vehicleYear", e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="registration" className="block text-sm font-medium text-text-main">
            Registration Number (Optional)
          </label>
          <input
            id="registration"
            type="text"
            name="registration"
            value={formData.registration}
            onChange={(e) => updateField("registration", e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="mileage" className="block text-sm font-medium text-text-main">
            Current Mileage (Optional)
          </label>
          <input
            id="mileage"
            type="text"
            name="mileage"
            value={formData.mileage}
            onChange={(e) => updateField("mileage", e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="serviceNeeded" className="block text-sm font-medium text-text-main">
          Service Needed
        </label>
        <input
          id="serviceNeeded"
          type="text"
          name="serviceNeeded"
          placeholder="Service, diagnostics, repair, brakes, etc."
          required
          value={formData.serviceNeeded}
          onChange={(e) => updateField("serviceNeeded", e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="problemDescription" className="block text-sm font-medium text-text-main">
          Problem Description
        </label>
        <textarea
          id="problemDescription"
          name="problemDescription"
          required
          rows={5}
          value={formData.problemDescription}
          onChange={(e) => updateField("problemDescription", e.target.value)}
          className={inputClass}
        />
        <ValidationError
          prefix="Message"
          field="problemDescription"
          errors={state.errors}
          className="mt-1 text-xs text-red-600"
        />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <button
          type="submit"
          disabled={state.submitting}
          className="btn-primary w-full py-3"
        >
          {state.submitting ? "Sending..." : "Send via Email"}
        </button>
        <button
          type="button"
          onClick={openWhatsApp}
          disabled={!isWhatsAppReady}
          className="btn-secondary w-full py-3 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Send via WhatsApp
        </button>
      </div>
    </form>
  );
}

export default function ContactForm() {
  if (!FORMSPREE_ID) {
    return (
      <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
        <p className="font-medium">Email form is not configured yet.</p>
        <p className="mt-1">
          Add <code className="rounded bg-amber-100 px-1">NEXT_PUBLIC_FORMSPREE_ID</code> to
          enable email submissions. WhatsApp booking is already available.
        </p>
      </div>
    );
  }
  return <ContactFormWithFormspree formId={FORMSPREE_ID} />;
}
