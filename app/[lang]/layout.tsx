// app/[lang]/layout.tsx

import type { ReactNode } from "react";
import { notFound } from "next/navigation";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import { getDictionary, hasLocale } from "@/lib/i18n";
import { locales, type Locale } from "@/lib/locales";

type LangLayoutProps = {
  children: ReactNode;
  params: Promise<{ lang: string }>;
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: LangLayoutProps) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);

  return (
    <>
      <Header lang={lang as Locale} labels={dict.header} />

      <main>{children}</main>

      <Footer lang={lang as Locale} labels={dict.footer} />
    </>
  );
}