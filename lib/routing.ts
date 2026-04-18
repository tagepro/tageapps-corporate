// lib/routing.ts

import { isLocale, type Locale } from "@/lib/locales";

export function withLang(lang: Locale, path = "") {
  if (!path || path === "/") return `/${lang}`;
  return `/${lang}${path.startsWith("/") ? path : `/${path}`}`;
}

export function replaceLocaleInPathname(pathname: string, nextLocale: Locale) {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return `/${nextLocale}`;
  }

  if (isLocale(segments[0])) {
    segments[0] = nextLocale;
  } else {
    segments.unshift(nextLocale);
  }

  return `/${segments.join("/")}`;
}