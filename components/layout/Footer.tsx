// components/layout/Footer.tsx

import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { Mail, MapPin, MessageCircle } from "lucide-react";

import { withLang } from "@/lib/routing";
import type { Locale } from "@/lib/locales";
import { siteConfig } from "@/content/site";

const WHATSAPP_NUMBER = "905322859878";
const WHATSAPP_DISPLAY = "0532 285 98 78";
const UPDATED_ADDRESS =
  "Dijitalpark Teknokent Kirazlıdere Mah. Eski Ankara Cad. No:4A İç Kapı No:3 Çekmeköy-İstanbul-Türkiye";

type FooterLabels = {
  companyDescription: string;

  quickLinksTitle: string;
  home: string;
  products: string;
  services: string;
  about: string;
  contact: string;

  productsTitle: string;
  productTitle: string;
  goToProductPage: string;

  contactTitle: string;
  whatsappText: string;
  linkedinText: string;

  copyright: string;

  privacy: string;
  kvkk: string;
  cookies: string;
  terms: string;
};

type FooterProps = {
  lang: Locale;
  labels: FooterLabels;
};

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

export default function Footer({ lang, labels }: FooterProps) {
  return (
    <footer className="bg-[#0f172a] text-white">
      <Container className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.05fr_0.8fr_0.8fr_1.2fr]">
        <div>
          <Image
            src="/logo/tage-logo-beyaz.svg"
            alt="Tage Logo"
            width={144}
            height={40}
            className="h-10 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-300">
            {labels.companyDescription}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">
            {labels.quickLinksTitle}
          </h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
            <Link className="transition hover:text-white" href={withLang(lang)}>
              {labels.home}
            </Link>
            <Link
              className="transition hover:text-white"
              href={withLang(lang, "/urunler")}
            >
              {labels.products}
            </Link>
            <Link
              className="transition hover:text-white"
              href={withLang(lang, "/hizmetler")}
            >
              {labels.services}
            </Link>
            <Link
              className="transition hover:text-white"
              href={withLang(lang, "/hakkimizda")}
            >
              {labels.about}
            </Link>
            <Link
              className="transition hover:text-white"
              href={withLang(lang, "/iletisim")}
            >
              {labels.contact}
            </Link>
			<Link
              className="transition hover:text-white"
              href={withLang(lang, "/blog")}
            >
              Blog
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">
            {labels.productsTitle}
          </h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
            <Link
              className="transition hover:text-white"
              href={withLang(lang, "/sadi")}
            >
              {labels.productTitle}
            </Link>
            <Link
              className="transition hover:text-white"
              href={withLang(lang, "/sadi")}
            >
              {labels.goToProductPage}
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">
            {labels.contactTitle}
          </h3>

          <div className="mt-4 space-y-3">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-start gap-3 rounded-2xl border border-slate-700 bg-white/5 px-3 py-3 text-slate-200 transition hover:border-slate-500 hover:bg-white/10"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-600 bg-white/10">
                <Mail size={17} strokeWidth={2} color="#ffffff" />
              </div>

              <div className="min-w-0 pt-0.5">
                <p className="text-sm font-medium leading-5 text-white">
                  {siteConfig.email}
                </p>
              </div>
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 rounded-2xl border border-slate-700 bg-white/5 px-3 py-3 text-slate-200 transition hover:border-slate-500 hover:bg-white/10"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-600 bg-white/10">
                <MessageCircle size={17} strokeWidth={2} color="#ffffff" />
              </div>

              <div className="min-w-0 pt-0.5">
                <p className="text-sm font-medium leading-5 text-white">
                  {WHATSAPP_DISPLAY}
                </p>
                <p className="mt-0.5 text-xs leading-4 text-slate-400">
                  {labels.whatsappText}
                </p>
              </div>
            </a>

            <div className="flex items-start gap-3 rounded-2xl border border-slate-700 bg-white/5 px-3 py-3 text-slate-200">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-600 bg-white/10">
                <MapPin size={17} strokeWidth={2} color="#ffffff" />
              </div>

              <div className="min-w-0 pt-0.5">
                <p className="text-sm leading-6 text-white">{UPDATED_ADDRESS}</p>
              </div>
            </div>

            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 rounded-2xl border border-slate-700 bg-white/5 px-3 py-3 text-slate-200 transition hover:border-slate-500 hover:bg-white/10"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-600 bg-white/10 text-white">
                <LinkedInIcon />
              </div>

              <div className="min-w-0 pt-0.5">
                <p className="text-sm font-medium leading-5 text-white">
                  {labels.linkedinText}
                </p>
              </div>
            </a>
          </div>
        </div>
      </Container>

      <div className="border-t border-slate-800">
        <Container className="flex flex-col gap-3 py-5 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>{labels.copyright}</p>

          <div className="flex flex-wrap gap-4">
            <Link
              className="transition hover:text-white"
              href={withLang(lang, "/gizlilik-politikasi")}
            >
              {labels.privacy}
            </Link>
            <Link
              className="transition hover:text-white"
              href={withLang(lang, "/kvkk")}
            >
              {labels.kvkk}
            </Link>
            <Link
              className="transition hover:text-white"
              href={withLang(lang, "/cerez-politikasi")}
            >
              {labels.cookies}
            </Link>
            <Link
              className="transition hover:text-white"
              href={withLang(lang, "/kullanim-sartlari")}
            >
              {labels.terms}
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}