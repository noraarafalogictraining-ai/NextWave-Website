"use client";

import { useRef, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { AlertCircle, CheckCircle2, Info, Loader2, Send } from "lucide-react";

const ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT?.trim() || "";

export const interestOptions = [
  { value: "flowops", label: "FlowOps — Operations Management" },
  { value: "customer360", label: "Customer360 — Customer Relationships" },
  { value: "insightiq", label: "InsightIQ — Business Intelligence" },
  { value: "multiple", label: "Multiple solutions / integrated ecosystem" },
  { value: "partnership", label: "Partnership enquiry" },
  { value: "careers", label: "Careers at NextWave" },
  { value: "other", label: "Something else" },
];

type Fields = { name: string; email: string; company: string; interest: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;
type Status = { kind: "idle" } | { kind: "sending" } | { kind: "sent" } | { kind: "demo" } | { kind: "error"; message: string };

const FREE_EMAIL = /@(gmail|yahoo|hotmail|outlook|live|icloud|aol|proton(mail)?|gmx|yandex|mail)\.[a-z.]+$/i;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!EMAIL.test(f.email.trim())) e.email = "Please enter a valid email address.";
  else if (FREE_EMAIL.test(f.email.trim())) e.email = "Please use your business email address.";
  if (f.company.trim().length < 2) e.company = "Please enter your company name.";
  if (!f.interest) e.interest = "Please choose an area of interest.";
  if (f.message.trim().length < 20) e.message = "Please tell us a little more (at least 20 characters).";
  else if (f.message.length > 2000) e.message = "Please keep your message under 2,000 characters.";
  return e;
}

export default function ContactForm() {
  const params = useSearchParams();
  const preset = params.get("interest") ?? "";
  const [fields, setFields] = useState<Fields>({
    name: "",
    email: "",
    company: "",
    interest: interestOptions.some((o) => o.value === preset) ? preset : "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  const set = (k: keyof Fields) => (v: string) => {
    const next = { ...fields, [k]: v };
    setFields(next);
    if (touched[k]) setErrors(validate(next));
  };
  const blur = (k: keyof Fields) => () => {
    setTouched((t) => ({ ...t, [k]: true }));
    setErrors(validate(fields));
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const errs = validate(fields);
    setErrors(errs);
    setTouched({ name: true, email: true, company: true, interest: true, message: true });
    if (Object.keys(errs).length) {
      const first = Object.keys(errs)[0];
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    // Honeypot: silently ignore automated submissions.
    if ((form.elements.namedItem("website") as HTMLInputElement | null)?.value) return;

    if (!ENDPOINT) {
      setStatus({ kind: "demo" });
      requestAnimationFrame(() => statusRef.current?.focus());
      return;
    }

    setStatus({ kind: "sending" });
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...fields, source: "nextwave-website" }),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      setStatus({ kind: "sent" });
      setFields({ name: "", email: "", company: "", interest: "", message: "" });
      setTouched({});
    } catch {
      setStatus({ kind: "error", message: "We couldn't send your message right now. Please try again in a few minutes." });
    }
    requestAnimationFrame(() => statusRef.current?.focus());
  }

  const inputBase =
    "mt-2 block w-full rounded-xl border bg-white px-4 py-3 text-base text-ink placeholder:text-ink-3/70 transition focus:outline-none focus:ring-4";
  const cls = (k: keyof Fields) =>
    `${inputBase} ${errors[k] && touched[k] ? "border-red-500 focus:border-red-500 focus:ring-red-500/15" : "border-line focus:border-electric focus:ring-electric/15"}`;
  const err = (k: keyof Fields) =>
    errors[k] && touched[k] ? (
      <p id={`${k}-error`} className="mt-2 flex items-center gap-1.5 text-sm text-red-600">
        <AlertCircle aria-hidden className="h-4 w-4" /> {errors[k]}
      </p>
    ) : null;
  const aria = (k: keyof Fields) => ({
    "aria-invalid": !!(errors[k] && touched[k]),
    "aria-describedby": errors[k] && touched[k] ? `${k}-error` : undefined,
  });

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-6" aria-label="Contact form">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-ink">Name <span aria-hidden className="text-electric">*</span></label>
          <input id="name" name="name" type="text" autoComplete="name" required value={fields.name} onChange={(e) => set("name")(e.target.value)} onBlur={blur("name")} className={cls("name")} {...aria("name")} />
          {err("name")}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-ink">Business email <span aria-hidden className="text-electric">*</span></label>
          <input id="email" name="email" type="email" autoComplete="email" inputMode="email" required value={fields.email} onChange={(e) => set("email")(e.target.value)} onBlur={blur("email")} className={cls("email")} {...aria("email")} />
          {err("email")}
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="text-sm font-semibold text-ink">Company <span aria-hidden className="text-electric">*</span></label>
          <input id="company" name="company" type="text" autoComplete="organization" required value={fields.company} onChange={(e) => set("company")(e.target.value)} onBlur={blur("company")} className={cls("company")} {...aria("company")} />
          {err("company")}
        </div>
        <div>
          <label htmlFor="interest" className="text-sm font-semibold text-ink">Area of interest <span aria-hidden className="text-electric">*</span></label>
          <select id="interest" name="interest" required value={fields.interest} onChange={(e) => set("interest")(e.target.value)} onBlur={blur("interest")} className={`${cls("interest")} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%234A5576%22 stroke-width=%222%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[length:18px] bg-[right_14px_center] bg-no-repeat pr-10`} {...aria("interest")}>
            <option value="">Select an option</option>
            {interestOptions.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
          {err("interest")}
        </div>
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-semibold text-ink">Message <span aria-hidden className="text-electric">*</span></label>
        <textarea id="message" name="message" rows={6} required maxLength={2000} value={fields.message} onChange={(e) => set("message")(e.target.value)} onBlur={blur("message")} className={`${cls("message")} resize-y`} placeholder="Tell us about your organization and what you would like to achieve." {...aria("message")} />
        <div className="flex items-start justify-between gap-4">
          <div>{err("message")}</div>
          <p className="mt-2 shrink-0 text-xs text-ink-3" aria-hidden>{fields.message.length}/2000</p>
        </div>
      </div>

      {/* Honeypot field — hidden from people and assistive technology. */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-5 text-ink-3">Fields marked * are required. We use your details only to respond to your enquiry.</p>
        <button
          type="submit"
          disabled={status.kind === "sending"}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-electric to-[#4f7bff] px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(31,107,255,0.7)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status.kind === "sending" ? <Loader2 aria-hidden className="h-4 w-4 animate-spin" /> : <Send aria-hidden className="h-4 w-4" />}
          {status.kind === "sending" ? "Sending…" : "Send message"}
        </button>
      </div>

      <div ref={statusRef} tabIndex={-1} aria-live="polite" className="outline-none">
        {status.kind === "sent" && (
          <div className="flex gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-900">
            <CheckCircle2 aria-hidden className="mt-0.5 h-5 w-5 shrink-0" />
            <p><strong>Thank you.</strong> Your message has been sent. A member of our team will be in touch.</p>
          </div>
        )}
        {status.kind === "demo" && (
          <div className="flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-900">
            <Info aria-hidden className="mt-0.5 h-5 w-5 shrink-0" />
            <p>
              <strong>Your details are complete, but this message has not been sent.</strong> Online enquiries are not yet connected on
              this website. Please keep a copy of your message for now.
            </p>
          </div>
        )}
        {status.kind === "error" && (
          <div className="flex gap-3 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-900">
            <AlertCircle aria-hidden className="mt-0.5 h-5 w-5 shrink-0" />
            <p>{status.message}</p>
          </div>
        )}
      </div>
    </form>
  );
}
