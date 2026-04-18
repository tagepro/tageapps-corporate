// app/[lang]/iletisim/page.tsx

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import ContactForm from "@/components/contact/ContactForm";
import { siteConfig } from "@/content/site";
import { Mail, MapPin, MessageCircle } from "lucide-react";

type PageProps = {
  params: Promise<{ lang: string }>;
};

const SITE_URL = "https://www.tageapps.com";
const WHATSAPP_NUMBER = "905322859878";
const WHATSAPP_DISPLAY = "0532 285 98 78";
const UPDATED_ADDRESS =
  "Dijitalpark Teknokent Kirazlıdere Mah. Eski Ankara Cad. No:4A İç Kapı No:3 Çekmeköy-İstanbul-Türkiye";

const tr = {
  meta: {
    title: "İletişim | Tage Yazılım",
    description:
      "Tage Yazılım ile ürünlerimiz, hizmetlerimiz ve iş birliği fırsatları hakkında iletişime geçin.",
  },
  page: {
    badge: "İletişim",
    title: "Bizimle iletişime geçin",
    description:
      "Ürünlerimiz, hizmetlerimiz ve iş birliği fırsatları hakkında bizimle iletişime geçebilirsiniz.",
    infoTitle: "İletişim Bilgileri",
    formTitle: "İletişim Formu",
    formDescription:
      "Taleplerinizi güvenli form üzerinden bize iletebilirsiniz.",
    whatsappText: "WhatsApp üzerinden yazın",
    linkedinText: "Tage Yazılım LinkedIn",
  },
} as const;

const en = {
  meta: {
    title: "Contact | Tage Yazılım",
    description:
      "Contact Tage Yazılım about our products, services, and partnership opportunities.",
  },
  page: {
    badge: "Contact",
    title: "Get in touch with us",
    description:
      "You can contact us about our products, services, and partnership opportunities.",
    infoTitle: "Contact Information",
    formTitle: "Contact Form",
    formDescription:
      "You can send us your requests securely through the contact form.",
    whatsappText: "Message us on WhatsApp",
    linkedinText: "Tage Yazılım on LinkedIn",
  },
} as const;

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-[18px] w-[18px]"
      fill="currentColor"
    >
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3a1.97 1.97 0 1 0 0 3.94A1.97 1.97 0 0 0 5.25 3ZM20.44 13.02c0-3.09-1.65-4.53-3.86-4.53-1.78 0-2.58.98-3.03 1.67V8.5h-3.38V20h3.38v-6.42c0-.34.02-.68.13-.92.27-.68.88-1.39 1.9-1.39 1.34 0 1.87 1.02 1.87 2.52V20h3.38l.01-6.98Z" />
    </svg>
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const copy = lang === "en" ? en : tr;
  const pagePath = `/${lang}/iletisim`;
  const pageUrl = `${SITE_URL}${pagePath}`;

  return {
    title: copy.meta.title,
    description: copy.meta.description,
    alternates: {
      canonical: pagePath,
      languages: {
        tr: "/tr/iletisim",
        en: "/en/iletisim",
      },
    },
    openGraph: {
      title: copy.meta.title,
      description: copy.meta.description,
      url: pageUrl,
      siteName: "Tage Yazılım",
      locale: lang === "en" ? "en_US" : "tr_TR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: copy.meta.title,
      description: copy.meta.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ContactPage({ params }: PageProps) {
  const { lang } = await params;

  if (lang !== "tr" && lang !== "en") {
    notFound();
  }

  const copy = lang === "en" ? en : tr;

  return (
    <main className="bg-white">
      <Container className="py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#608BC1]">
          {copy.page.badge}
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
          {copy.page.title}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600">
          {copy.page.description}
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[24px] border border-slate-200 bg-[#F8FBFF] p-7 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">
              {copy.page.infoTitle}
            </h2>

            <div className="mt-6 space-y-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-start gap-4 rounded-2xl border border-[#E7EEF6] bg-white px-4 py-4 text-slate-700 transition hover:border-[#CBDCEB] hover:shadow-sm"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#CBDCEB] bg-[#F7FAFD]">
                  <Mail size={18} strokeWidth={2} color="#133E87" />
                </div>
                <div className="min-w-0">
                  <p className="text-base font-medium text-slate-800">
                    {siteConfig.email}
                  </p>
                </div>
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-2xl border border-[#E7EEF6] bg-white px-4 py-4 text-slate-700 transition hover:border-[#CBDCEB] hover:shadow-sm"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#CBDCEB] bg-[#F7FAFD]">
                  <MessageCircle size={18} strokeWidth={2} color="#133E87" />
                </div>
                <div className="min-w-0">
                  <p className="text-base font-medium text-slate-800">
                    {WHATSAPP_DISPLAY}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    {copy.page.whatsappText}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 rounded-2xl border border-[#E7EEF6] bg-white px-4 py-4 text-slate-700">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#CBDCEB] bg-[#F7FAFD]">
                  <MapPin size={18} strokeWidth={2} color="#133E87" />
                </div>
                <div className="min-w-0">
                  <p className="text-base font-medium leading-7 text-slate-800">
                    {UPDATED_ADDRESS}
                  </p>
                </div>
              </div>

              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-2xl border border-[#E7EEF6] bg-white px-4 py-4 text-slate-700 transition hover:border-[#CBDCEB] hover:shadow-sm"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#CBDCEB] bg-[#F7FAFD] text-[#133E87]">
                  <LinkedInIcon />
                </div>
                <div className="min-w-0">
                  <p className="text-base font-medium text-slate-800">
                    {copy.page.linkedinText}
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="rounded-[24px] border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">
              {copy.page.formTitle}
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              {copy.page.formDescription}
            </p>

            <div className="mt-6">
              <ContactForm lang={lang} />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}