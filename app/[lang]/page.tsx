// app/[lang]/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import { getDictionary, hasLocale } from "@/lib/i18n";
import {
  BriefcaseBusiness,
  Blocks,
  Sparkles,
  Workflow,
  CircleAlert,
  GitBranch,
  Activity,
  SearchCheck,
  Cpu,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Filter,
  ShieldAlert,
  Route,
  Gauge,
} from "lucide-react";

type PageProps = {
  params: Promise<{ lang: string }>;
};

const SITE_URL = "https://www.tageapps.com";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    return {};
  }

  const isTr = lang === "tr";
  const canonical = `${SITE_URL}/${lang}`;

  return {
    title: isTr
      ? "Tage Yazılım | Süreç Analizi, Dijital Dönüşüm ve ERP Danışmanlığı"
      : "Tage Software | Process Analysis, Digital Transformation and ERP Consulting",
    description: isTr
      ? "Tage Yazılım; süreç analizi, süreç yönetimi danışmanlığı, dijital olgunluk analizi ve ERP hazırlık hizmetleri sunar. Sadi ile süreçlerinizi görünür, ölçülebilir ve geliştirilebilir hale getirin."
      : "Tage Software provides process analysis, process management consulting, digital maturity assessment and ERP readiness services. Make your processes visible, measurable and improvable with Sadi.",
    alternates: {
      canonical,
      languages: {
        tr: `${SITE_URL}/tr`,
        en: `${SITE_URL}/en`,
      },
    },
    openGraph: {
      title: isTr
        ? "Tage Yazılım | Süreç Analizi, Dijital Dönüşüm ve ERP Danışmanlığı"
        : "Tage Software | Process Analysis, Digital Transformation and ERP Consulting",
      description: isTr
        ? "Süreç analizi, dijital dönüşüm ve ERP hazırlık hizmetleriyle kurumların dönüşüm yolculuğunu daha sağlam temellerle ilerletin."
        : "Strengthen your transformation journey with process analysis, digital transformation and ERP readiness services.",
      url: canonical,
      siteName: "Tage Apps",
      locale: isTr ? "tr_TR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: isTr
        ? "Tage Yazılım | Süreç Analizi, Dijital Dönüşüm ve ERP Danışmanlığı"
        : "Tage Software | Process Analysis, Digital Transformation and ERP Consulting",
      description: isTr
        ? "Süreç analizi, dijital dönüşüm ve ERP hazırlık hizmetleriyle kurumların dönüşüm yolculuğunu daha sağlam temellerle ilerletin."
        : "Strengthen your transformation journey with process analysis, digital transformation and ERP readiness services.",
    },
  };
}

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);
  const home = dict.home;

  const withLang = (path: string) => `/${lang}${path}`;

  const problemIconMap = [
    CircleAlert,
    GitBranch,
    Activity,
    SearchCheck,
    Cpu,
    Blocks,
  ];

  const serviceIconMap = [
    Workflow,
    GitBranch,
    Route,
    Gauge,
    Blocks,
    BriefcaseBusiness,
  ];

  const heroFeatureIconMap = [BriefcaseBusiness, Blocks, Sparkles];

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <Container className="grid gap-10 py-14 lg:grid-cols-2 lg:items-center lg:gap-14 lg:py-18">
          <div>
            <div className="inline-flex rounded-full border border-[#CBDCEB] bg-[#EFF5FB] px-4 py-2 text-sm font-medium text-[#133E87]">
              {home.hero.badge}
            </div>

            <h1 className="mt-5 max-w-2xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {home.hero.title}
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              {home.hero.description}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href={withLang("/iletisim")}
                className="rounded-xl bg-[#133E87] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#0f3270]"
              >
                {home.hero.primaryButton}
              </Link>

              <Link
                href={withLang("/sadi")}
                className="rounded-xl border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-[#133E87] hover:text-[#133E87]"
              >
                {home.hero.secondaryButton}
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-[30px] border border-[#CBDCEB] bg-gradient-to-br from-[#f8fbff] via-white to-[#eef5fb] p-6 shadow-[0_18px_50px_rgba(19,62,135,0.10)]">
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-[#eff5fb] via-white to-[#f7fbff]" />
              <div className="absolute -right-10 top-0 h-36 w-36 rounded-full bg-[#608BC1]/10 blur-3xl" />
              <div className="absolute -left-8 bottom-0 h-32 w-32 rounded-full bg-[#CBDCEB]/20 blur-3xl" />

              <div className="relative grid gap-4 sm:grid-cols-2">
                <div className="rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-2">
                    {(() => {
                      const Icon = heroFeatureIconMap[0];
                      return <Icon size={18} strokeWidth={2} color="#608BC1" />;
                    })()}
                    <p className="text-sm font-medium text-slate-500">
                      {home.hero.featureCards.consulting.label}
                    </p>
                  </div>
                  <p className="mt-3 text-lg font-semibold leading-8 text-slate-900">
                    {home.hero.featureCards.consulting.text}
                  </p>
                </div>

                <div className="rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-2">
                    {(() => {
                      const Icon = heroFeatureIconMap[1];
                      return <Icon size={18} strokeWidth={2} color="#608BC1" />;
                    })()}
                    <p className="text-sm font-medium text-slate-500">
                      {home.hero.featureCards.software.label}
                    </p>
                  </div>
                  <p className="mt-3 text-lg font-semibold leading-8 text-slate-900">
                    {home.hero.featureCards.software.text}
                  </p>
                </div>

                <div className="rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm sm:col-span-2">
                  <div className="flex items-center gap-2">
                    {(() => {
                      const Icon = heroFeatureIconMap[2];
                      return <Icon size={18} strokeWidth={2} color="#608BC1" />;
                    })()}
                    <p className="text-sm font-medium text-slate-500">
                      {home.hero.featureCards.focus.label}
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-3">
                    {home.hero.featureCards.focus.items.map((item: string) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#CBDCEB] bg-[#F7FAFD] px-4 py-2 text-sm font-medium text-[#133E87]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 rounded-2xl border border-[#E5EEF7] bg-gradient-to-r from-[#F8FBFF] to-white p-4">
                    <div className="flex items-center gap-2">
                      <Workflow size={18} strokeWidth={2} color="#608BC1" />
                      <p className="text-sm font-medium text-slate-500">
                        {home.hero.featureCards.bridge.title}
                      </p>
                    </div>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {home.hero.featureCards.bridge.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Intro */}
      <section className="bg-[#f8fbff] py-20">
        <Container>
          <div className="relative overflow-hidden rounded-[32px] border border-[#CBDCEB] bg-white p-8 shadow-[0_12px_40px_rgba(19,62,135,0.08)] sm:p-10 lg:p-12">
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-[#eff5fb] via-white to-[#f7fbff]" />
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#CBDCEB]/20 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-[#608BC1]/10 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <div className="inline-flex rounded-full border border-[#CBDCEB] bg-[#EFF5FB] px-4 py-2 text-sm font-medium text-[#133E87]">
                  {home.problems.badge}
                </div>

                <h2 className="mt-6 max-w-xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                  {home.problems.title}
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                  {home.problems.description1}
                </p>

                <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
                  {home.problems.description2}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={withLang("/hizmetler")}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#133E87] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0f3270]"
                  >
                    {home.problems.primaryButton}
                    <ArrowRight size={16} strokeWidth={2.25} />
                  </Link>

                  <Link
                    href={withLang("/sadi")}
                    className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-[#133E87] hover:text-[#133E87]"
                  >
                    {home.problems.secondaryButton}
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {home.problems.cards.map(
                  (
                    card: { title: string; text: string },
                    index: number
                  ) => {
                    const Icon = problemIconMap[index];

                    return (
                      <div
                        key={card.title}
                        className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#CBDCEB] bg-[#F7FAFD]">
                          <Icon size={20} strokeWidth={2} color="#608BC1" />
                        </div>

                        <h3 className="mt-4 text-lg font-semibold leading-7 text-slate-900">
                          {card.title}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                          {card.text}
                        </p>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Products */}
      <section className="bg-white py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#608BC1]">
              {home.product.badge}
            </p>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <h2 className="text-6xl font-light tracking-tight text-[#133E87] sm:text-7xl">
                {home.product.name}
              </h2>

              <h3 className="mt-4 max-w-xl text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                {home.product.title}
              </h3>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                {home.product.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={withLang("/sadi")}
                  className="rounded-xl bg-[#133E87] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#0f3270]"
                >
                  {home.product.primaryButton}
                </Link>
              </div>
            </div>

            <div className="rounded-[28px] border border-[#CBDCEB] bg-gradient-to-br from-[#f8fbff] via-white to-[#eef5fb] p-4 shadow-[0_16px_45px_rgba(19,62,135,0.10)] sm:p-5">
              <div className="overflow-hidden rounded-[22px] border border-[#CBDCEB] bg-white shadow-sm">
                <div className="border-b border-[#CBDCEB] px-5 py-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#133E87]">
                    <BarChart3 size={16} strokeWidth={2} color="#608BC1" />
                    <span>{home.product.sample.title}</span>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full border border-[#CBDCEB] bg-white px-3 py-1 text-xs text-slate-700">
                      {home.product.sample.averageScoreLabel}{" "}
                      <b>{home.product.sample.averageScoreValue}</b>
                    </span>
                    <span className="rounded-full border border-[#CBDCEB] bg-white px-3 py-1 text-xs text-slate-700">
                      {home.product.sample.comparableLabel}
                    </span>
                    <span className="rounded-full bg-[#B91C1C] px-3 py-1 text-xs font-medium text-white">
                      {home.product.sample.riskLabel}
                    </span>
                  </div>
                </div>

                <div className="grid gap-3 px-5 py-4 md:grid-cols-3">
                  {home.product.sample.filters.map((filter: string) => (
                    <div
                      key={filter}
                      className="flex items-center gap-2 rounded-xl border border-[#CBDCEB] bg-[#F8FBFF] px-3 py-2 text-xs text-slate-600"
                    >
                      <Filter size={14} strokeWidth={2} color="#608BC1" />
                      <span>{filter}</span>
                    </div>
                  ))}
                </div>

                <div className="px-5 pb-5">
                  <div className="overflow-hidden rounded-2xl border border-[#CBDCEB] bg-white">
                    <div className="grid grid-cols-12 gap-2 border-b border-[#CBDCEB] bg-[#CBDCEB]/35 px-4 py-2 text-xs font-semibold text-slate-700">
                      <div className="col-span-8">
                        {home.product.sample.tableHeaders.subProcess}
                      </div>
                      <div className="col-span-2 text-right">
                        {home.product.sample.tableHeaders.score}
                      </div>
                      <div className="col-span-2 text-right">
                        {home.product.sample.tableHeaders.risk}
                      </div>
                    </div>

                    {home.product.sample.rows.map(
                      (
                        row: {
                          name: string;
                          score: string;
                          risk: string;
                          tone: "critical" | "high" | "medium" | "low";
                        },
                        i: number
                      ) => (
                        <div
                          key={row.name}
                          className={[
                            "grid grid-cols-12 gap-2 px-4 py-3 text-sm",
                            i % 2 === 0 ? "bg-white" : "bg-slate-50",
                          ].join(" ")}
                        >
                          <div className="col-span-8 text-slate-800">
                            {row.name}
                          </div>
                          <div className="col-span-2 text-right font-medium text-slate-800">
                            {row.score}
                          </div>
                          <div className="col-span-2 flex justify-end">
                            <span
                              className={[
                                "rounded-full px-2.5 py-1 text-xs font-medium text-white",
                                row.tone === "critical"
                                  ? "bg-[#B91C1C]"
                                  : row.tone === "high"
                                  ? "bg-[#DC2626]"
                                  : row.tone === "medium"
                                  ? "bg-[#F59E0B]"
                                  : "bg-[#16A34A]",
                              ].join(" ")}
                            >
                              {row.risk}
                            </span>
                          </div>
                        </div>
                      )
                    )}
                  </div>

                  <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                    <ArrowUpRight size={14} strokeWidth={2} color="#608BC1" />
                    <span>{home.product.sample.note}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-[#f8fbff] py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#608BC1]">
              {home.services.badge}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {home.services.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              {home.services.description}
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {home.services.items.map(
              (
                service: { title: string; text: string; path: string },
                index: number
              ) => {
                const Icon = serviceIconMap[index];

                return (
                  <div
                    key={service.title}
                    className="flex h-full flex-col rounded-[24px] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#CBDCEB] bg-[#F7FAFD]">
                        <Icon size={22} strokeWidth={2} color="#608BC1" />
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-slate-900">
                          {service.title}
                        </h3>
                        <p className="mt-3 text-base leading-7 text-slate-600">
                          {service.text}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Link
                        href={withLang(service.path)}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#133E87] transition hover:text-[#0f3270]"
                      >
                        {home.services.detailButton}
                        <ArrowRight size={16} strokeWidth={2.25} />
                      </Link>
                    </div>
                  </div>
                );
              }
            )}
          </div>

          <div className="mt-10">
            <Link
              href={withLang("/hizmetler")}
              className="inline-flex items-center gap-2 rounded-xl bg-[#133E87] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0f3270]"
            >
              {home.services.allButton}
              <ArrowRight size={16} strokeWidth={2.25} />
            </Link>
          </div>
        </Container>
      </section>

      {/* WhyTage */}
      <section className="bg-white py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#608BC1]">
              {home.why.badge}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {home.why.title}
            </h2>
          </div>

          <div className="grid gap-4">
            {home.why.items.map((item: string) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-[#F8FBFF] px-5 py-4 text-base font-medium text-slate-800"
              >
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FinalCTA */}
      <section className="bg-[#133E87] py-20 text-white">
        <Container className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#CBDCEB]">
              {home.finalCta.badge}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {home.finalCta.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-[#E7EFF7]">
              {home.finalCta.description}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={withLang("/sadi")}
              className="rounded-xl bg-white px-5 py-3 text-center text-sm font-semibold text-[#133E87] transition hover:bg-slate-100"
            >
              {home.finalCta.primaryButton}
            </Link>
            <Link
              href={withLang("/iletisim")}
              className="rounded-xl border border-white/30 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {home.finalCta.secondaryButton}
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}