// lib/locales.ts

export const locales = ["tr", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "tr";
export const localeCookieName = "tageapps-lang";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}