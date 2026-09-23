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
  Gauge,
  Blocks,
  BriefcaseBusiness,
  Sparkles,
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
    softwareDevelopment: {
      title: string;
      enterpriseSoftwareDevelopment: {
        title: string;
      };
    };
    aiDigitalTransformation: {
      title: string;
      enterpriseAiSolutions: {
        title: string;
      };
      digitalMaturityTransformation: {
        title: string;
      };
    };
    processMaturityErp: {
      title: string;
      processMaturityManagement: {
        title: string;
      };
      erpConsultingReadiness: {
        title: string;
      };
    };
  };
};

type HeaderProps = {
  lang: Locale;
  labels: HeaderLabels;
};

export default function Header({ lang, labels }: HeaderProps) {
  const serviceGroups = [
    {
      title: labels.servicesMenu.softwareDevelopment.title,
      items: [
        {
          title:
            labels.servicesMenu.softwareDevelopment
              .enterpriseSoftwareDevelopment.title,
          href: withLang(lang, "/hizmetler/kurumsal-yazilim-gelistirme"),
          icon: Blocks,
        },
      ],
    },
    {
      title: labels.servicesMenu.aiDigitalTransformation.title,
      items: [
        {
          title:
            labels.servicesMenu.aiDigitalTransformation
              .enterpriseAiSolutions.title,
          href: withLang(lang, "/hizmetler/kurumsal-yapay-zeka-cozumleri"),
          icon: Sparkles,
        },
        {
          title:
            labels.servicesMenu.aiDigitalTransformation
              .digitalMaturityTransformation.title,
          href: withLang(
            lang,
            "/hizmetler/dijital-olgunluk-ve-dijital-donusum-analizi"
          ),
          icon: Gauge,
        },
      ],
    },
    {
      title: labels.servicesMenu.processMaturityErp.title,
      items: [
        {
          title:
            labels.servicesMenu.processMaturityErp
              .processMaturityManagement.title,
          href: withLang(lang, "/hizmetler/surec-olgunlugu-ve-surec-yonetimi"),
          icon: Workflow,
        },
        {
          title:
            labels.servicesMenu.processMaturityErp
              .erpConsultingReadiness.title,
          href: withLang(
            lang,
            "/hizmetler/erp-danismanligi-ve-erp-hazirlik-hizmetleri"
          ),
          icon: BriefcaseBusiness,
        },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <Container className="relative flex h-24 items-center justify-between">
		<Link href={withLang(lang)} className="flex items-center">
		<Image
			src="/logo/tage-logo-lacivert.svg"
			alt="Tage Logo"
			width={220}
			height={60}
			className="h-14 w-auto"
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
              <div className="w-[780px] max-w-[calc(100vw-32px)] rounded-[22px] border border-slate-200 bg-white p-4 shadow-[0_20px_60px_rgba(19,62,135,0.12)]">
                <div className="grid grid-cols-3 gap-4">
                  {serviceGroups.map((group) => (
                    <div key={group.title} className="min-w-0">
                      <p className="mb-2 border-b border-slate-100 px-2 pb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#608BC1]">
                        {group.title}
                      </p>

                      <div className="space-y-1">
                        {group.items.map((item) => {
                          const Icon = item.icon;

                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="group flex items-center gap-3 rounded-xl px-2 py-2.5 transition hover:bg-[#F7FAFD]"
                            >
                              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#CBDCEB] bg-white transition group-hover:border-[#608BC1]/50 group-hover:bg-[#EFF5FB]">
                                <Icon size={17} strokeWidth={2} color="#608BC1" />
                              </span>

                              <span className="min-w-0 text-[13px] font-semibold leading-5 text-slate-800 transition group-hover:text-[#133E87]">
                                {item.title}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}

                  <div className="col-span-3 mt-2 flex justify-end border-t border-slate-100 pt-3">
                    <Link
                      href={withLang(lang, "/hizmetler")}
                      className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#133E87] transition hover:text-[#608BC1]"
                    >
                      {labels.allServices}
                      <ArrowUpRight
                        size={15}
                        strokeWidth={2.25}
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </Link>
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
