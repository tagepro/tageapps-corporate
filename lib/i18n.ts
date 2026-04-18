// lib/i18n.ts

import "server-only";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/locales";

const dictionaries = {
  tr: () => import("@/content/i18n/tr").then((m) => m.default),
  en: () => import("@/content/i18n/en").then((m) => m.default),
} satisfies Record<Locale, () => Promise<any>>;

export function hasLocale(lang: string): lang is Locale {
  return isLocale(lang);
}

export async function getDictionary(lang: string) {
  if (!isLocale(lang)) {
    notFound();
  }

  return dictionaries[lang]();
}