// app/urunler/sadi/page.tsx

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Link from "next/link";
import { siteConfig } from "@/content/site";

export default function SadiPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <Container className="py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#608BC1]">
            Ürün
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
            Sadi
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-600">
            Sadi; süreç olgunluk, dijital dönüşüm değerlendirmesi, görünürlük,
            ölçüm, risk ve gelişim takibi odağında geliştirilen ürün platformudur.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              "Süreç görünürlüğü sağlar",
              "Olgunluk ve değerlendirme yaklaşımını destekler",
              "Risk ve öncelik bakışı sunar",
              "Aksiyon ve gelişim takibine yardımcı olur",
            ].map((item) => (
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
              className="rounded-xl bg-[#133E87] px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Sadi’yi İncele
            </Link>
            <Link
              href="/iletisim"
              className="rounded-xl border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-700"
            >
              İletişime Geç
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}