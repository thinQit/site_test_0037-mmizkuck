'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
}

interface Field {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "select" | "textarea";
  required: boolean;
  placeholder?: string;
  options?: string[];
}

interface ContactFormProps {
  headline: string;
  subheadline?: string;
  contactInfo?: ContactInfo[];
  fields?: Field[];
  privacyNote?: string;
  successMessage?: string;
}

const defaultFields: Field[] = [
  { name: "name", label: "Full Name", type: "text", required: true, placeholder: "Ava Rivera" },
  { name: "email", label: "Email", type: "email", required: true, placeholder: "ava@email.com" },
  { name: "phone", label: "Phone (optional)", type: "tel", required: false, placeholder: "(917) 555-0138" },
  {
    name: "shootType",
    label: "What are you booking?",
    type: "select",
    required: true,
    options: ["Wedding", "Elopement", "Portraits", "Brand/Product", "Event"],
  },
  { name: "date", label: "Date (or date range)", type: "text", required: true, placeholder: "June 14, 2026" },
  { name: "location", label: "Location", type: "text", required: true, placeholder: "Brooklyn, NY" },
  {
    name: "budget",
    label: "Estimated budget",
    type: "select",
    required: true,
    options: ["$350–$600", "$600–$1,500", "$1,500–$3,000", "$3,000+"],
  },
  {
    name: "message",
    label: "Tell me about your project",
    type: "textarea",
    required: true,
    placeholder: "What’s the vibe? Any must-have shots? Links to inspiration are welcome.",
  },
];

const defaultPrivacyNote =
  "By submitting, you agree to be contacted about your inquiry. Your information is never sold.";

const defaultSuccessMsg =
  "Thanks—your inquiry is in. I’ll reply within 24–48 hours with availability and next steps.";

export default function ContactForm({
  headline = 'Get in Touch',
  subheadline = 'Tell me about your date, location, and vision. I’ll reply within 24–48 hours.',
  contactInfo = [],
  fields = defaultFields,
  privacyNote = defaultPrivacyNote,
  successMessage = defaultSuccessMsg,
}: Partial<ContactFormProps>) {
  const [form, setForm] = useState(() =>
    Object.fromEntries(fields.map((f) => [f.name, ""]))
  );
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Validate required fields on the client prior to submission.
  function validate() {
    for (const field of fields) {
      if (field.required && !form[field.name]?.trim()) {
        setError(`Please enter a valid ${field.label.toLowerCase()}.`);
        return false;
      }
      if (field.type === "email" && form[field.name]) {
        const email = form[field.name];
        if (
          !/^([a-zA-Z0-9_\-.]+)@([\da-zA-Z\-.]+)\.([a-zA-Z]{2,})$/.test(email)
        ) {
          setError("Please enter a valid email address.");
          return false;
        }
      }
    }
    setError(null);
    return true;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);

    // For portfolio: POST to a static endpoint, or fallback to mailto:
    // To enable formspree/netlify submission, change the action below.
    // Here, we'll build a mailto: fallback.
    const subject = encodeURIComponent(`Photo Inquiry: ${form.shootType ?? ""}`);
    const body = encodeURIComponent(
      Object.entries(form)
        .map(([k, v]) => `${fields.find(f => f.name === k)?.label || k}: ${v}`)
        .join("\n")
    );

    // Attempt fetch to /api/contact if exists—otherwise fallback
    const hasApi = false; // set to true if implementing a backend/serverless route

    if (hasApi) {
      // submit via API if present
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          body: JSON.stringify(form),
          headers: { "Content-Type": "application/json" },
        });
        if (res.ok) setSubmitted(true);
        else throw new Error("Submission failed.");
      } catch (err) {
        setError("Sorry, there was an error sending your inquiry. Please try again or email directly.");
      }
    } else {
      // fallback to mailto (opens the user's email client)
      window.location.href = `mailto:hello@noirframe.photo?subject=${subject}&body=${body}`;
      setSubmitted(true);
    }
    setSubmitting(false);
  }

  return (
    <section className="bg-muted/50 py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Card className="border bg-background">
            <CardContent className="p-6">
              {submitted ? (
                <div className="text-center text-green-700 font-medium py-10">{successMessage}</div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {fields.slice(0, 3).map((f) => (
                      <div key={f.name} className="space-y-2">
                        <Label htmlFor={f.name}>
                          {f.label}
                          {f.required ? <span aria-hidden="true" className="text-destructive">*</span> : null}
                        </Label>
                        {f.type === "select" ? (
                          <select
                            id={f.name}
                            className="block w-full border border-border rounded-lg py-2 px-3 bg-white text-black"
                            value={form[f.name]}
                            onChange={e => setForm(v => ({ ...v, [f.name]: e.target.value }))}
                            required={!!f.required}
                          >
                            <option value="">Select...</option>
                            {f.options?.map(opt => (
                              <option key={opt} value={opt}>{opt}</option>
                            ))}
                          </select>
                        ) : (
                          <Input
                            id={f.name}
                            type={f.type}
                            placeholder={f.placeholder}
                            required={!!f.required}
                            autoComplete="on"
                            value={form[f.name] || ""}
                            onChange={e => setForm(v => ({ ...v, [f.name]: e.target.value }))}
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {fields.slice(3, 6).map((f) => (
                      <div key={f.name} className="space-y-2">
                        <Label htmlFor={f.name}>
                          {f.label}
                          {f.required ? <span aria-hidden="true" className="text-destructive">*</span> : null}
                        </Label>
                        {f.type === "select" ? (
                          <select
                            id={f.name}
                            className="block w-full border border-border rounded-lg py-2 px-3 bg-white text-black"
                            value={form[f.name]}
                            onChange={e => setForm(v => ({ ...v, [f.name]: e.target.value }))}
                            required={!!f.required}
                          >
                            <option value="">Select...</option>
                            {f.options?.map(opt => (
                              <option key={opt} value={opt}>{opt}</option>
                            ))}
                          </select>
                        ) : (
                          <Input
                            id={f.name}
                            type={f.type}
                            placeholder={f.placeholder}
                            required={!!f.required}
                            autoComplete="on"
                            value={form[f.name] || ""}
                            onChange={e => setForm(v => ({ ...v, [f.name]: e.target.value }))}
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  {fields.slice(6).map((f) => (
                    <div key={f.name} className="space-y-2">
                      <Label htmlFor={f.name}>
                        {f.label}
                        {f.required ? <span aria-hidden="true" className="text-destructive">*</span> : null}
                      </Label>
                      {f.type === "textarea" ? (
                        <Textarea
                          id={f.name}
                          required={!!f.required}
                          rows={5}
                          placeholder={f.placeholder}
                          value={form[f.name] || ""}
                          onChange={e => setForm(v => ({ ...v, [f.name]: e.target.value }))}
                        />
                      ) : f.type === "select" ? (
                        <select
                          id={f.name}
                          className="block w-full border border-border rounded-lg py-2 px-3 bg-white text-black"
                          value={form[f.name]}
                          onChange={e => setForm(v => ({ ...v, [f.name]: e.target.value }))}
                          required={!!f.required}
                        >
                          <option value="">Select...</option>
                          {f.options?.map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      ) : (
                        <Input
                          id={f.name}
                          type={f.type}
                          required={!!f.required}
                          placeholder={f.placeholder}
                          value={form[f.name] || ""}
                          onChange={e => setForm(v => ({ ...v, [f.name]: e.target.value }))}
                        />
                      )}
                    </div>
                  ))}

                  {privacyNote && (
                    <p className="text-xs text-muted-foreground">{privacyNote}</p>
                  )}
                  {error && (
                    <p role="alert" className="text-destructive text-sm">{error}</p>
                  )}

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={submitting}
                    aria-busy={submitting}
                    aria-label="Send Message"
                  >
                    {submitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {contactInfo && contactInfo.length > 0 && (
            <div className="flex flex-col justify-center space-y-8">
              {contactInfo.map(function (info, i) {
                return (
                  <div key={i} className="flex items-start gap-4">
                    <span className="text-2xl" aria-hidden>{info.icon}</span>
                    <div>
                      <p className="font-semibold text-foreground">{info.label}</p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
