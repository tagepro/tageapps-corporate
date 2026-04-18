// components/layout/LanguageSwitcher.tsx

"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  localeCookieName,
  type Locale,
} from "@/lib/locales";
import { replaceLocaleInPathname } from "@/lib/routing";

type LanguageSwitcherProps = {
  lang: Locale;
};

export default function LanguageSwitcher({
  lang,
}: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function handleChange(nextLang: Locale) {
    if (nextLang === lang) return;

    const nextPathname = replaceLocaleInPathname(pathname, nextLang);
    const search = searchParams.toString();
    const hash =
      typeof window !== "undefined" ? window.location.hash : "";

    document.cookie = `${localeCookieName}=${nextLang}; path=/; max-age=31536000; samesite=lax`;

    router.replace(
      `${nextPathname}${search ? `?${search}` : ""}${hash}`
    );
    router.refresh();
  }

  return (
    <div className="inline-flex items-center rounded-full border p-1">
      <button
        type="button"
        onClick={() => handleChange("tr")}
        className={`rounded-full px-3 py-1 text-xs font-medium ${
          lang === "tr" ? "bg-black text-white" : "text-black"
        }`}
        aria-pressed={lang === "tr"}
      >
        TR
      </button>

      <button
        type="button"
        onClick={() => handleChange("en")}
        className={`rounded-full px-3 py-1 text-xs font-medium ${
          lang === "en" ? "bg-black text-white" : "text-black"
        }`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}