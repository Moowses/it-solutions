"use client";

import { useRef, useState, type FormEvent } from "react";
import {
  contactLimits,
  contactServices,
  validateContact,
  type ContactErrors,
  type ContactField,
} from "@/lib/contact";

type SubmissionState = { kind: "idle" | "error" | "success"; message: string };

const fieldOrder: ContactField[] = ["name", "email", "company", "service", "description"];

export function ContactForm({ configured }: { configured: boolean }) {
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLParagraphElement>(null);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState<SubmissionState>({ kind: "idle", message: "" });

  function focusFirstError(nextErrors: ContactErrors) {
    requestAnimationFrame(() => {
      const firstField = fieldOrder.find((field) => nextErrors[field]);
      if (firstField) {
        const control = formRef.current?.elements.namedItem(firstField);
        if (control instanceof HTMLElement) control.focus();
      }
    });
  }

  function showStatus(nextStatus: SubmissionState) {
    setStatus(nextStatus);
    requestAnimationFrame(() => statusRef.current?.focus());
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy || !configured) return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());
    const result = validateContact(payload);
    setErrors({});
    setStatus({ kind: "idle", message: "" });

    if (!result.valid) {
      setErrors(result.errors);
      focusFirstError(result.errors);
      return;
    }

    setBusy(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...result.values, website: payload.website || "" }),
        signal: AbortSignal.timeout(20000),
      });
      const body: unknown = await response.json();
      const reply = body && typeof body === "object" ? body as Record<string, unknown> : {};

      if (response.ok && reply.ok === true && typeof reply.id === "string" && reply.id.length > 0) {
        form.reset();
        showStatus({
          kind: "success",
          message: "Thank you. The email service has accepted your inquiry for sending. Karl can reply using the email you provided.",
        });
      } else {
        const serverErrors = reply.errors;
        if (serverErrors && typeof serverErrors === "object" && !Array.isArray(serverErrors)) {
          const safeErrors: ContactErrors = {};
          for (const field of fieldOrder) {
            const error = (serverErrors as Record<string, unknown>)[field];
            if (typeof error === "string") safeErrors[field] = error;
          }
          if (Object.keys(safeErrors).length) {
            setErrors(safeErrors);
            focusFirstError(safeErrors);
            return;
          }
        }
        showStatus({
          kind: "error",
          message: typeof reply.message === "string"
            ? reply.message
            : "Your inquiry could not be sent. Your details are still here; please try again.",
        });
      }
    } catch {
      showStatus({
        kind: "error",
        message: "Delivery could not be confirmed. Your details are still here; please try again or use a listed contact method.",
      });
    } finally {
      setBusy(false);
    }
  }

  const errorFor = (field: ContactField) => errors[field]
    ? <span className="field-error" id={`contact-${field}-error`}>{errors[field]}</span>
    : null;
  const descriptionFor = (field: ContactField, extra?: string) =>
    [extra, errors[field] ? `contact-${field}-error` : undefined].filter(Boolean).join(" ") || undefined;

  return (
    <form
      className="inquiry-form"
      ref={formRef}
      action="/api/contact"
      method="post"
      onSubmit={handleSubmit}
      noValidate
      aria-busy={busy}
      aria-describedby="contact-form-note"
    >
      <div className="field-row">
        <div className="field">
          <label htmlFor="contact-name">Your name <span aria-hidden="true">*</span></label>
          <input
            id="contact-name" name="name" autoComplete="name" required
            maxLength={contactLimits.name} aria-invalid={Boolean(errors.name)}
            aria-describedby={descriptionFor("name")}
          />
          {errorFor("name")}
        </div>
        <div className="field">
          <label htmlFor="contact-email">Email address <span aria-hidden="true">*</span></label>
          <input
            id="contact-email" name="email" type="email" autoComplete="email" required
            maxLength={contactLimits.email} aria-invalid={Boolean(errors.email)}
            aria-describedby={descriptionFor("email")}
          />
          {errorFor("email")}
        </div>
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="contact-company">Company <span className="optional-label">(optional)</span></label>
          <input
            id="contact-company" name="company" autoComplete="organization"
            maxLength={contactLimits.company} aria-invalid={Boolean(errors.company)}
            aria-describedby={descriptionFor("company")}
          />
          {errorFor("company")}
        </div>
        <div className="field">
          <label htmlFor="contact-service">Service needed <span aria-hidden="true">*</span></label>
          <select
            id="contact-service" name="service" required defaultValue=""
            aria-invalid={Boolean(errors.service)} aria-describedby={descriptionFor("service")}
          >
            <option value="" disabled>Select a service</option>
            {contactServices.map((service) => <option key={service} value={service}>{service}</option>)}
          </select>
          {errorFor("service")}
        </div>
      </div>
      <div className="field">
        <label htmlFor="contact-description">Tell me about your project <span aria-hidden="true">*</span></label>
        <textarea
          id="contact-description" name="description" rows={5} required
          minLength={20} maxLength={contactLimits.description}
          placeholder="What would you like to improve, build, or connect?"
          aria-invalid={Boolean(errors.description)}
          aria-describedby={descriptionFor("description", "contact-description-note")}
        />
        <span className="form-note" id="contact-description-note">20 to 5,000 characters. Please leave out passwords and confidential information.</span>
        {errorFor("description")}
      </div>
      <div hidden aria-hidden="true">
        <label htmlFor="contact-website">Leave this field empty</label>
        <input id="contact-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <p className="form-note" id="contact-form-note">
        {configured
          ? "Fields marked * are required. Your details will only be used to respond to your inquiry."
          : "This inquiry form is awaiting email setup. Submissions are currently unavailable."}
      </p>
      <noscript><p className="form-note">Please enable JavaScript to submit this inquiry form.</p></noscript>
      <button className="button primary-button" type="submit" disabled={busy || !configured}>
        {busy ? "Sending inquiry…" : "Send inquiry"}
        <span aria-hidden="true">↗</span>
      </button>
      <p
        ref={statusRef}
        className={`form-status${status.kind !== "idle" ? ` is-${status.kind}` : ""}`}
        role="status"
        aria-live="polite"
        aria-atomic="true"
        tabIndex={-1}
      >
        {status.message}
      </p>
    </form>
  );
}
