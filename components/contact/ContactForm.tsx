// components/contact/ContactForm.tsx

"use client";

import { useRef, useState } from "react";
import TurnstileWidget from "@/components/contact/TurnstileWidget";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
  website: string;
};

type ContactFormProps = {
  lang: "tr" | "en";
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  message: "",
  website: "",
};

const tr = {
  honeypotLabel: "Website",
  nameLabel: "Ad Soyad",
  namePlaceholder: "Adınızı ve soyadınızı yazın",
  emailLabel: "E-posta",
  emailPlaceholder: "ornek@sirket.com",
  companyLabel: "Şirket",
  companyPlaceholder: "Şirket adı",
  messageLabel: "Mesaj",
  messagePlaceholder: "Mesajınızı yazın",
  securityError: "Lütfen güvenlik doğrulamasını tamamlayın.",
  submitError: "Form gönderilemedi.",
  submitSuccess: "Mesajınız alındı. En kısa sürede dönüş yapılacaktır.",
  unexpectedError: "Beklenmeyen bir hata oluştu.",
  turnstileError: "Güvenlik doğrulaması sırasında bir sorun oluştu.",
  submitting: "Gönderiliyor...",
  submit: "Mesajı Gönder",
};

const en = {
  honeypotLabel: "Website",
  nameLabel: "Full Name",
  namePlaceholder: "Enter your full name",
  emailLabel: "Email",
  emailPlaceholder: "name@company.com",
  companyLabel: "Company",
  companyPlaceholder: "Company name",
  messageLabel: "Message",
  messagePlaceholder: "Write your message",
  securityError: "Please complete the security verification.",
  submitError: "The form could not be submitted.",
  submitSuccess: "Your message has been received. We will get back to you shortly.",
  unexpectedError: "An unexpected error occurred.",
  turnstileError: "There was a problem during security verification.",
  submitting: "Sending...",
  submit: "Send Message",
};

export default function ContactForm({ lang }: ContactFormProps) {
  const copy = lang === "en" ? en : tr;

  const [form, setForm] = useState<FormState>(initialState);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<null | { ok: boolean; message: string }>(
    null
  );
  const formRef = useRef<HTMLFormElement | null>(null);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    if (!turnstileToken) {
      setLoading(false);
      setResult({
        ok: false,
        message: copy.securityError,
      });
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          turnstileToken,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setResult({
          ok: false,
          message: data.message || copy.submitError,
        });
      } else {
        setResult({
          ok: true,
          message: copy.submitSuccess,
        });
        setForm(initialState);
        setTurnstileToken("");
        formRef.current?.reset();
      }
    } catch {
      setResult({
        ok: false,
        message: copy.unexpectedError,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      <div className="hidden">
        <label htmlFor="website">{copy.honeypotLabel}</label>
        <input
          id="website"
          name="website"
          type="text"
          value={form.website}
          onChange={(e) => updateField("website", e.target.value)}
          autoComplete="off"
          tabIndex={-1}
        />
      </div>

      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          {copy.nameLabel}
        </label>
        <input
          id="name"
          type="text"
          required
          value={form.name}
          onChange={(e) => updateField("name", e.target.value)}
          placeholder={copy.namePlaceholder}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-[#133E87]"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          {copy.emailLabel}
        </label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => updateField("email", e.target.value)}
          placeholder={copy.emailPlaceholder}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-[#133E87]"
        />
      </div>

      <div>
        <label
          htmlFor="company"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          {copy.companyLabel}
        </label>
        <input
          id="company"
          type="text"
          value={form.company}
          onChange={(e) => updateField("company", e.target.value)}
          placeholder={copy.companyPlaceholder}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-[#133E87]"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          {copy.messageLabel}
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
          placeholder={copy.messagePlaceholder}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-[#133E87]"
        />
      </div>

      <div className="pt-2">
        <TurnstileWidget
          onVerify={(token) => setTurnstileToken(token)}
          onExpire={() => setTurnstileToken("")}
          onError={() => {
            setTurnstileToken("");
            setResult({
              ok: false,
              message: copy.turnstileError,
            });
          }}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-[#133E87] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0f3270] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? copy.submitting : copy.submit}
      </button>

      {result && (
        <p className={`text-sm ${result.ok ? "text-green-700" : "text-red-600"}`}>
          {result.message}
        </p>
      )}
    </form>
  );
}