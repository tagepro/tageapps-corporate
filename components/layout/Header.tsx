// components/layout/Header.tsx

// components/layout/Header.tsx

import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import { withLang } from "@/lib/routing";
import type { Locale } from "@/lib/locales";
import {
  ChevronDown,
  ArrowUpRight,
  Boxes,
  Workflow,
  GitBranch,
  Route,
  Gauge,
  Blocks,
  BriefcaseBusiness,
} from "lucide-react";

type HeaderLabels = {
  home: string;
  products: string;
  services: string;
  about: string;
  contact: string;

  productBadge: string;
  productTitle: string;
  productSubtitle: string;
  productDescription: string;

  servicesBadge: string;
  servicesFooterText: string;
  allServices: string;
  contactNow: string;

  servicesMenu: {
    processManagementConsulting: {
      title: string;
      description: string;
    };
    processAnalysisModeling: {
      title: string;
      description: string;
    };
    processImprovementWorkflow: {
      title: string;
      description: string;
    };
    digitalMaturityTransformation: {
      title: string;
      description: string;
    };
    processSoftwareEnterpriseSolutions: {
      title: string;
      description: string;
    };
    erpConsultingReadiness: {
      title: string;
      description: string;
    };
  };
};

type HeaderProps = {
  lang: Locale;
  labels: HeaderLabels;
};

export default function Header({ lang, labels }: HeaderProps) {
  const servicesMenu = [
    {
      title: labels.servicesMenu.processManagementConsulting.title,
      href: withLang(lang, "/hizmetler/surec-yonetimi-danismanligi"),
      description: labels.servicesMenu.processManagementConsulting.description,
      icon: Workflow,
    },
    {
      title: labels.servicesMenu.processAnalysisModeling.title,
      href: withLang(lang, "/hizmetler/surec-analizi-ve-surec-modelleme"),
      description: labels.servicesMenu.processAnalysisModeling.description,
      icon: GitBranch,
    },
    {
      title: labels.servicesMenu.processImprovementWorkflow.title,
      href: withLang(lang, "/hizmetler/surec-iyilestirme-ve-is-akisi-yonetimi"),
      description: labels.servicesMenu.processImprovementWorkflow.description,
      icon: Route,
    },
    {
      title: labels.servicesMenu.digitalMaturityTransformation.title,
      href: withLang(lang, "/hizmetler/dijital-olgunluk-ve-dijital-donusum-analizi"),
      description: labels.servicesMenu.digitalMaturityTransformation.description,
      icon: Gauge,
    },
    {
      title: labels.servicesMenu.processSoftwareEnterpriseSolutions.title,
      href: withLang(
        lang,
        "/hizmetler/surec-yonetimi-yazilimi-ve-kurumsal-yazilim-cozumleri"
      ),
      description:
        labels.servicesMenu.processSoftwareEnterpriseSolutions.description,
      icon: Blocks,
    },
    {
      title: labels.servicesMenu.erpConsultingReadiness.title,
      href: withLang(lang, "/hizmetler/erp-danismanligi-ve-erp-hazirlik-hizmetleri"),
      description: labels.servicesMenu.erpConsultingReadiness.description,
      icon: BriefcaseBusiness,
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <Container className="relative flex h-20 items-center justify-between">
        <Link href={withLang(lang)} className="flex items-center">
          <Image
            src="/logo/tage-logo-lacivert.svg"
            alt="Tage Logo"
            width={144}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:absolute lg:left-1/2 lg:flex lg:-translate-x-1/2">
          <Link
            href={withLang(lang)}
            className="text-sm font-medium text-slate-700 transition hover:text-[#133E87]"
          >
            {labels.home}
          </Link>

          <div className="group relative -my-4 py-4">
            <button
              type="button"
              className="inline-flex items-center gap-1 text-sm font-medium text-slate-700 transition hover:text-[#133E87]"
            >
              {labels.products}
              <ChevronDown
                size={16}
                strokeWidth={2.25}
                className="transition-transform duration-200 group-hover:rotate-180"
              />
            </button>

            <div className="invisible pointer-events-none absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:pointer-events-auto group-hover:opacity-100">
              <div className="w-[390px] rounded-[22px] border border-slate-200 bg-white p-4 shadow-[0_18px_50px_rgba(19,62,135,0.12)]">
                <div className="rounded-[18px] border border-[#CBDCEB] bg-gradient-to-br from-[#f8fbff] via-white to-[#eef5fb] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#608BC1]">
                    {labels.productBadge}
                  </p>

                  <Link
                    href={withLang(lang, "/sadi")}
                    className="mt-3 block rounded-[16px] border border-white/70 bg-white p-4 transition hover:border-[#CBDCEB] hover:shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[#CBDCEB] bg-[#F7FAFD]">
                          <Boxes size={18} strokeWidth={2} color="#608BC1" />
                        </div>

                        <div>
                          <h3 className="text-base font-semibold text-slate-900">
                            {labels.productTitle}
                          </h3>
                          <p className="mt-1 text-sm leading-6 text-slate-600">
                            {labels.productSubtitle}
                          </p>
                        </div>
                      </div>

                      <ArrowUpRight
                        size={16}
                        strokeWidth={2.25}
                        color="#133E87"
                      />
                    </div>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {labels.productDescription}
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative -my-4 py-4">
            <button
              type="button"
              className="inline-flex items-center gap-1 text-sm font-medium text-slate-700 transition hover:text-[#133E87]"
            >
              {labels.services}
              <ChevronDown
                size={16}
                strokeWidth={2.25}
                className="transition-transform duration-200 group-hover:rotate-180"
              />
            </button>

            <div className="invisible pointer-events-none absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:pointer-events-auto group-hover:opacity-100">
              <div className="w-[640px] rounded-[22px] border border-slate-200 bg-white p-4 shadow-[0_20px_60px_rgba(19,62,135,0.12)]">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#608BC1]">
                  {labels.servicesBadge}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {servicesMenu.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="rounded-[16px] border border-[#E7EEF6] bg-white p-4 transition hover:border-[#CBDCEB] hover:shadow-sm"
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[#CBDCEB] bg-[#F7FAFD]">
                            <Icon size={18} strokeWidth={2} color="#608BC1" />
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-start justify-between gap-2">
                              <h3 className="text-sm font-semibold leading-6 text-slate-900">
                                {item.title}
                              </h3>
                              <ArrowUpRight
                                size={15}
                                strokeWidth={2.25}
                                color="#133E87"
                                className="mt-1 shrink-0"
                              />
                            </div>

                            <p className="mt-1 text-xs leading-5 text-slate-600">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    );
                  })}

                  <div className="col-span-2 mt-1 flex items-center justify-between rounded-[16px] border border-[#CBDCEB] bg-[#F8FBFF] px-4 py-3">
                    <p className="text-sm text-slate-600">
                      {labels.servicesFooterText}
                    </p>

                    <div className="flex shrink-0 gap-2">
                      <Link
                        href={withLang(lang, "/hizmetler")}
                        className="inline-flex items-center rounded-full bg-[#133E87] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0f3270]"
                      >
                        {labels.allServices}
                      </Link>

                      <Link
                        href={withLang(lang, "/iletisim")}
                        className="inline-flex items-center rounded-full border border-[#CBDCEB] bg-white px-4 py-2 text-sm font-semibold text-[#133E87] transition hover:bg-[#F7FAFD]"
                      >
                        {labels.contactNow}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link
            href={withLang(lang, "/hakkimizda")}
            className="text-sm font-medium text-slate-700 transition hover:text-[#133E87]"
          >
            {labels.about}
          </Link>

          <Link
            href={withLang(lang, "/iletisim")}
            className="text-sm font-medium text-slate-700 transition hover:text-[#133E87]"
          >
            {labels.contact}
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher lang={lang} />
        </div>

        <div className="lg:hidden">
          <MobileMenu lang={lang} labels={labels} />
        </div>
      </Container>
    </header>
  );
}