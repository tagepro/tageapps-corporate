// app/[lang]/urunler/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  CheckCircle2,
  Layers3,
  Workflow,
} from "lucide-react";
import Container from "@/components/layout/Container";

const PAGE_PATH = "/urunler";
const SITE_URL = "https://www.tageapps.com";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Ürünler | Tage Yazılım",
  description:
    "Tage Yazılım ürünleri. Süreç olgunluk, dijital olgunluk, süreç görünürlüğü ve gelişim yönetimi odaklı ürün yaklaşımımızın ilk güçlü örneği Sadi’dir.",
  keywords: [
    "tage yazılım ürünler",
    "ürünler",
    "sadi",
    "süreç yönetimi yazılımı",
    "dijital olgunluk yazılımı",
    "kurumsal yazılım çözümleri",
  ],
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: "Ürünler | Tage Yazılım",
    description: "Tage Yazılım ürün yaklaşımının ilk güçlü örneği Sadi’dir.",
    url: PAGE_PATH,
    siteName: "Tage Yazılım",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ürünler | Tage Yazılım",
    description:
      "Süreç görünürlüğü, süreç olgunluğu ve dijital olgunluk odaklı ürün yaklaşımımızı inceleyin.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Anasayfa",
      item: `${SITE_URL}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Ürünler",
      item: PAGE_URL,
    },
  ],
};

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="bg-white text-slate-800">
        <section className="bg-gradient-to-b from-[#F3F3E0] via-white to-white pt-16 pb-14 md:pt-24 md:pb-20">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
              <div>
                <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
                  <ol className="flex flex-wrap items-center gap-2">
                    <li>
                      <Link href="/" className="transition hover:text-[#133E87]">
                        Anasayfa
                      </Link>
                    </li>
                    <li>/</li>
                    <li className="font-medium text-[#133E87]">Ürünler</li>
                  </ol>
                </nav>

                <span className="inline-flex rounded-full border border-[#CBDCEB] bg-white px-4 py-1.5 text-sm font-medium text-[#133E87]">
                  Ürünler
                </span>

                <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[#133E87] md:text-5xl">
                  Tage ürünleri
                </h1>

                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
                  Tage çatısı altında gelişen ürün yaklaşımının ilk ve güçlü örneği
                  Sadi’dir.
                </p>

                <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
                  Ürün yaklaşımımız; süreç görünürlüğü, süreç olgunluğu, dijital
                  olgunluk, aksiyon takibi ve gelişim yönetimini daha somut ve
                  sürdürülebilir hale getirmeyi hedefler.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/sadi"
                    className="inline-flex items-center gap-2 rounded-full bg-[#133E87] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                  >
                    Sadi’yi İncele
                    <ArrowRight size={18} />
                  </Link>

                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 rounded-full border border-[#CBDCEB] bg-white px-6 py-3 text-sm font-semibold text-[#133E87] transition hover:bg-[#F8FAFC]"
                  >
                    Demo / Görüşme Talep Et
                  </Link>
                </div>
              </div>

              <div className="rounded-[28px] border border-[#CBDCEB] bg-white p-6 shadow-[0_20px_60px_rgba(19,62,135,0.08)] md:p-8">
                <div className="rounded-2xl bg-[#F8FAFC] p-5">
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#608BC1]">
                    Ürün yaklaşımı
                  </div>
                  <div className="mt-3 text-2xl font-semibold text-[#133E87]">
                    Süreçten yazılıma uzanan yapı
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Danışmanlıkla kurulan görünürlük ve netliği, ürün katmanı ile
                    daha ölçülebilir ve sürdürülebilir hale getiriyoruz.
                  </p>
                </div>

                <div className="mt-5 space-y-3">
                  {[
                    "Süreç görünürlüğü",
                    "Olgunluk değerlendirmesi",
                    "Risk ve öncelik takibi",
                    "Raporlama ve gelişim takibi",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-[#E7EEF6] px-4 py-3"
                    >
                      <CheckCircle2 size={18} className="text-[#133E87]" />
                      <span className="text-sm font-medium text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-14 md:py-20">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                Aktif ürünümüz
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-700">
                Şu anda aktif ürünümüz Sadi’dir. 
              </p>
            </div>

            <div className="mt-10 rounded-[28px] border border-[#E6EDF5] bg-white p-6 shadow-sm md:p-8">
              <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
                <div>
                  <div className="inline-flex rounded-full border border-[#CBDCEB] bg-[#F7FAFD] px-4 py-1.5 text-sm font-medium text-[#133E87]">
                    Ürün
                  </div>

                  <h3 className="mt-5 text-4xl font-light tracking-tight text-[#133E87] md:text-5xl">
                    sadi
                  </h3>

                  <p className="mt-4 text-xl font-semibold text-slate-900">
                    Süreç Olgunluk ve Dijital Olgunluk Platformu
                  </p>

                  <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
                    Sadi; süreç olgunluk, dijital dönüşüm hazırlığı, görünürlük,
                    ölçüm, önceliklendirme ve gelişim yaklaşımını tek yapıda sunan
                    ürün platformudur.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href="/sadi"
                      className="inline-flex items-center gap-2 rounded-full bg-[#133E87] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                    >
                      Sadi Detayı
                      <ArrowRight size={18} />
                    </Link>

                    <Link
                      href="/sadi"
                      className="inline-flex items-center gap-2 rounded-full border border-[#CBDCEB] bg-white px-6 py-3 text-sm font-semibold text-[#133E87] transition hover:bg-[#F8FAFC]"
                    >
                      Ürün Sayfasına Git
                    </Link>
                  </div>
                </div>

                <div className="rounded-[24px] border border-[#CBDCEB] bg-[#F8FBFF] p-5">
                  <div className="grid gap-4">
                    {[
                      {
                        icon: Workflow,
                        title: "Süreç görünürlüğü",
                        text: "Departman, süreç ve alt süreç bazlı görünürlük sağlar.",
                      },
                      {
                        icon: Blocks,
                        title: "Puanlama ve analiz",
                        text: "Olgunluk, risk ve gelişim alanlarını daha görünür hale getirir.",
                      },
                      {
                        icon: Layers3,
                        title: "Aksiyon ve takip",
                        text: "İyileştirme ihtiyaçlarını ve aksiyon yapısını destekler.",
                      },
                      {
                        icon: BadgeCheck,
                        title: "Raporlama",
                        text: "Yönetim için daha okunabilir çıktı ve değerlendirme zemini üretir.",
                      },
                    ].map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.title}
                          className="rounded-[18px] border border-[#E6EDF5] bg-white p-4"
                        >
                          <div className="flex items-start gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[#CBDCEB] bg-[#F7FAFD] text-[#133E87]">
                              <Icon size={18} />
                            </div>

                            <div>
                              <h4 className="text-base font-semibold text-slate-900">
                                {item.title}
                              </h4>
                              <p className="mt-1 text-sm leading-6 text-slate-600">
                                {item.text}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 md:py-24">
          <Container>
            <div className="rounded-[32px] border border-[#CBDCEB] bg-gradient-to-br from-[#F3F3E0] via-white to-[#F8FAFC] px-6 py-10 text-center shadow-sm md:px-10 md:py-14">
              <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                Sadi ile ürün yaklaşımımızı daha yakından inceleyin
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Ürünümüzü daha yakından görmek, kullanım alanlarını incelemek veya
                bizimle iletişime geçmek için ilgili sayfalara ilerleyebilirsiniz.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="/sadi"
                  className="inline-flex items-center gap-2 rounded-full bg-[#133E87] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                >
                  Sadi’yi İncele
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 rounded-full border border-[#CBDCEB] bg-white px-6 py-3 text-sm font-semibold text-[#133E87] transition hover:bg-[#F8FAFC]"
                >
                  İletişime Geçin
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}