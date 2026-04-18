// app/proxy.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  defaultLocale,
  isLocale,
  localeCookieName,
  type Locale,
} from "@/lib/locales";

function getLocaleFromAcceptLanguage(headerValue: string | null): Locale {
  if (!headerValue) return defaultLocale;

  const tokens = headerValue
    .toLowerCase()
    .split(",")
    .map((item) => item.trim());

  const hasTurkish = tokens.some(
    (token) => token === "tr" || token.startsWith("tr-")
  );

  return hasTurkish ? "tr" : "en";
}

function resolveLocale(request: NextRequest): Locale {
  const cookieLocale = request.cookies.get(localeCookieName)?.value;

  if (cookieLocale && isLocale(cookieLocale)) {
    return cookieLocale;
  }

  const country = request.headers.get("x-vercel-ip-country");
  if (country === "TR") {
    return "tr";
  }

  return getLocaleFromAcceptLanguage(
    request.headers.get("accept-language")
  );
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname !== "/") {
    return NextResponse.next();
  }

  const locale = resolveLocale(request);

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/"],
};