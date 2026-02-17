"use client";

import { useForm, ValidationError } from "@formspree/react";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "";

function ContactFormWithFormspree({ formId }: { formId: string }) {
  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return (
      <div className="rounded-lg border border-border bg-bg-subtle p-8 text-center">
        <h3 className="text-xl font-bold text-brand">Message Sent Successfully</h3>
        <p className="mt-2 text-text-muted">
          Thank you for contacting Vesani Engineering. We will be in touch shortly.
        </p>
      </div>
    );
  }

  const inputClass =
    "mt-1 block w-full rounded-md border border-border px-3 py-2 text-text-main shadow-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand";

  return (
    <form
      action={`https://formspree.io/f/${formId}`}
      method="POST"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Honeypot: Formspree spam protection; bots fill this and submission is dropped */}
      <input type="text" name="_gotcha" style={{ display: "none" }} aria-hidden />
      <input type="hidden" name="_subject" value="Enquiry from Vesani Engineering website" />

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
          className={inputClass}
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="mt-1 text-xs text-red-600"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-main">
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className={inputClass}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="mt-1 text-xs text-red-600"
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="btn-primary w-full py-3"
      >
        {state.submitting ? "Sending..." : "Submit Quote Request"}
      </button>
    </form>
  );
}

export default function ContactForm() {
  if (!FORMSPREE_ID) {
    return (
      <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
        <p className="font-medium">Contact form is not configured.</p>
        <p className="mt-1">
          Add <code className="rounded bg-amber-100 px-1">NEXT_PUBLIC_FORMSPREE_ID</code> in
          your Netlify or Vercel dashboard to enable form submissions. In the
          meantime, please use the email and phone numbers below.
        </p>
      </div>
    );
  }
  return <ContactFormWithFormspree formId={FORMSPREE_ID} />;
}
