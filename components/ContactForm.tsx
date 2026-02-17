"use client";

import { useState } from "react";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (submitted) {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-6 text-green-800">
        <p className="font-medium">Thank you for your message.</p>
        <p className="mt-1 text-sm">
          We will get back to you as soon as possible.
        </p>
      </div>
    );
  }

  if (!FORMSPREE_ID) {
    return (
      <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-amber-800 text-sm">
        <p className="font-medium">Contact form is not configured.</p>
        <p className="mt-1">
          Add <code className="rounded bg-amber-100 px-1">NEXT_PUBLIC_FORMSPREE_ID</code> to
          enable form submissions. In the meantime, please use the email and
          phone numbers below.
        </p>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set("_subject", "Enquiry from Vesani Engineering website");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please use the contact details below.");
      }
    } catch {
      setError("Something went wrong. Please use the contact details below.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot: invisible to users, filled by bots; Formspree drops submission if set */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        style={{ display: "none" }}
        aria-hidden
      />
      {error && (
        <p className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-800">
          {error}
        </p>
      )}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text-main">
          Name <span className="text-text-muted">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 block w-full rounded-md border border-border px-3 py-2 text-text-main shadow-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text-main">
          Email <span className="text-text-muted">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1 block w-full rounded-md border border-border px-3 py-2 text-text-main shadow-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-text-main">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="mt-1 block w-full rounded-md border border-border px-3 py-2 text-text-main shadow-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-main">
          Message <span className="text-text-muted">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1 block w-full rounded-md border border-border px-3 py-2 text-text-main shadow-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
        />
      </div>
      <div>
        <button
          type="submit"
          className="btn-primary disabled:opacity-50"
        >
          Send message
        </button>
      </div>
    </form>
  );
}
