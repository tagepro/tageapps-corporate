// app/[lang]/urunler/sadi/page.tsx

import Container from "@/components/layout/Container";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/content/site";

const pageCopy = {
  tr: {
    eyebrow: "Ürün",
    title: "Sadi",
    description:
      "Sadi; süreç olgunluk, dijital dönüşüm değerlendirmesi, görünürlük, ölçüm, risk ve gelişim takibi odağında geliştirilen ürün platformudur.",
    items: [
      "Süreç görünürlüğü sağlar",
      "Olgunluk ve değerlendirme yaklaşımını destekler",
      "Risk ve öncelik bakışı sunar",
      "Aksiyon ve gelişim takibine yardımcı olur",
    ],
    primaryCta: "Sadi’yi İncele",
    secondaryCta: "İletişime Geç",
  },
  en: {
    eyebrow: "Product",
    title: "Sadi",
    description:
      "Sadi is a product platform developed with a focus on process maturity, digital transformation assessment, visibility, measurement, risk, and improvement tracking.",
    items: [
      "Provides process visibility",
      "Supports maturity and assessment approach",
      "Offers risk and prioritization perspective",
      "Helps track actions and improvement progress",
    ],
    primaryCta: "Explore Sadi",
    secondaryCta: "Contact Us",
  },
} as const;

type SupportedLang = keyof typeof pageCopy;

function isSupportedLang(value: string): value is SupportedLang {
  return value === "tr" || value === "en";
}

export default async function SadiPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isSupportedLang(lang)) {
    notFound();
  }

  const copy = pageCopy[lang];

  return (
    <main className="bg-white">
      <Container className="py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#608BC1]">
          {copy.eyebrow}
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
          {copy.title}
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-7 text-slate-600">
          {copy.description}
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {copy.items.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-[#F8FBFF] p-6 text-base font-medium text-slate-800"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href={siteConfig.sadiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-[#133E87] px-5 py-3 text-center text-sm font-semibold text-white"
          >
            {copy.primaryCta}
          </Link>

          <Link
            href={`/${lang}/iletisim`}
            className="rounded-xl border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-700"
          >
            {copy.secondaryCta}
          </Link>
        </div>
      </Container>
    </main>
  );
}