// components/layout/MobileMenu.tsx

"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

import LanguageSwitcher from "./LanguageSwitcher";
import { withLang } from "@/lib/routing";
import type { Locale } from "@/lib/locales";

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

type MobileMenuProps = {
  lang: Locale;
  labels: HeaderLabels;
};

function isRouteActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function MobileMenu({ lang, labels }: MobileMenuProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const productItems = [
    {
      label: labels.productTitle,
      href: withLang(lang, "/sadi"),
    },
  ];

  const allServicesHref = withLang(lang, "/hizmetler");

  const serviceGroups = [
    {
      title: labels.servicesMenu.softwareDevelopment.title,
      items: [
        {
          label:
            labels.servicesMenu.softwareDevelopment
              .enterpriseSoftwareDevelopment.title,
          href: withLang(lang, "/hizmetler/kurumsal-yazilim-gelistirme"),
        },
      ],
    },
    {
      title: labels.servicesMenu.aiDigitalTransformation.title,
      items: [
        {
          label:
            labels.servicesMenu.aiDigitalTransformation
              .enterpriseAiSolutions.title,
          href: withLang(lang, "/hizmetler/kurumsal-yapay-zeka-cozumleri"),
        },
        {
          label:
            labels.servicesMenu.aiDigitalTransformation
              .digitalMaturityTransformation.title,
          href: withLang(
            lang,
            "/hizmetler/dijital-olgunluk-ve-dijital-donusum-analizi"
          ),
        },
      ],
    },
    {
      title: labels.servicesMenu.processMaturityErp.title,
      items: [
        {
          label:
            labels.servicesMenu.processMaturityErp
              .processMaturityManagement.title,
          href: withLang(lang, "/hizmetler/surec-olgunlugu-ve-surec-yonetimi"),
        },
        {
          label:
            labels.servicesMenu.processMaturityErp
              .erpConsultingReadiness.title,
          href: withLang(
            lang,
            "/hizmetler/erp-danismanligi-ve-erp-hazirlik-hizmetleri"
          ),
        },
      ],
    },
  ];

  const serviceItems = [
    { label: labels.allServices, href: allServicesHref },
    ...serviceGroups.flatMap((group) => group.items),
  ];

  const homeHref = withLang(lang);
  const aboutHref = withLang(lang, "/hakkimizda");
  const contactHref = withLang(lang, "/iletisim");
  const sadiHref = withLang(lang, "/sadi");

  const productSectionActive = useMemo(
    () => productItems.some((item) => isRouteActive(pathname, item.href)),
    [pathname, productItems]
  );

  const serviceSectionActive = useMemo(
    () => serviceItems.some((item) => isRouteActive(pathname, item.href)),
    [pathname, serviceItems]
  );

  const [productsOpen, setProductsOpen] = useState(productSectionActive);
  const [servicesOpen, setServicesOpen] = useState(serviceSectionActive);

  useEffect(() => {
    setProductsOpen(productSectionActive);
  }, [productSectionActive]);

  useEffect(() => {
    setServicesOpen(serviceSectionActive);
  }, [serviceSectionActive]);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label="Menüyü aç"
        onClick={() => setOpen(true)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-700"
      >
        <span className="text-xl leading-none">☰</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] bg-white">
          <div className="flex h-dvh flex-col">
            <div className="flex shrink-0 items-center justify-between border-b border-slate-200 bg-white px-5 py-4">
              <p className="text-base font-semibold text-slate-900">Menü</p>
              <button
                type="button"
                aria-label="Menüyü kapat"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-700"
              >
                <span className="text-xl leading-none">×</span>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto bg-white px-4 py-4">
              <div className="mb-4 flex items-center justify-end">
                <LanguageSwitcher lang={lang} />
              </div>

              <nav className="flex flex-col gap-3">
                <Link
                  href={homeHref}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-base font-medium transition ${
                    isRouteActive(pathname, homeHref)
                      ? "bg-[#EFF5FB] text-[#133E87]"
                      : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  {labels.home}
                </Link>

                <div className="rounded-2xl border border-slate-200 bg-white">
                  <button
                    type="button"
                    onClick={() => setProductsOpen((prev) => !prev)}
                    className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-base font-medium transition ${
                      productSectionActive
                        ? "bg-[#EFF5FB] text-[#133E87]"
                        : "text-slate-800 hover:bg-slate-50"
                    }`}
                  >
                    <span>{labels.products}</span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${
                        productsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {productsOpen && (
                    <div className="border-t border-slate-200 px-2 py-2">
                      <div className="flex flex-col gap-1">
                        {productItems.map((item) => {
                          const isActive = isRouteActive(pathname, item.href);

                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setOpen(false)}
                              className={`rounded-xl px-3 py-3 text-sm font-medium transition ${
                                isActive
                                  ? "bg-[#EFF5FB] text-[#133E87]"
                                  : "text-slate-700 hover:bg-slate-50"
                              }`}
                            >
                              {item.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white">
                  <button
                    type="button"
                    onClick={() => setServicesOpen((prev) => !prev)}
                    className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-base font-medium transition ${
                      serviceSectionActive
                        ? "bg-[#EFF5FB] text-[#133E87]"
                        : "text-slate-800 hover:bg-slate-50"
                    }`}
                  >
                    <span>{labels.services}</span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {servicesOpen && (
                    <div className="border-t border-slate-200 px-2 py-2">
                      <div className="flex flex-col gap-1">
                        <div className="mb-1 flex justify-end px-3">
                          <Link
                            href={allServicesHref}
                            onClick={() => setOpen(false)}
                            className="group inline-flex items-center gap-1.5 py-1 text-[13px] font-semibold text-[#133E87] transition hover:text-[#608BC1]"
                          >
                            {labels.allServices}
                            <span
                              aria-hidden="true"
                              className="transition-transform group-hover:translate-x-0.5"
                            >
                              →
                            </span>
                          </Link>
                        </div>

                        {serviceGroups.map((group) => (
                          <div key={group.title} className="pt-4 first:pt-2">
                            <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#608BC1]">
                              {group.title}
                            </p>

                            <div className="flex flex-col gap-1">
                              {group.items.map((item) => {
                                const isActive = isRouteActive(
                                  pathname,
                                  item.href
                                );

                                return (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className={`rounded-xl border border-transparent px-3 py-2.5 text-sm font-medium leading-6 transition ${
                                      isActive
                                        ? "bg-[#EFF5FB] text-[#133E87]"
                                        : "text-slate-700 hover:bg-slate-50"
                                    }`}
                                  >
                                    {item.label}
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  href={aboutHref}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-base font-medium transition ${
                    isRouteActive(pathname, aboutHref)
                      ? "bg-[#EFF5FB] text-[#133E87]"
                      : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  {labels.about}
                </Link>

                <Link
                  href={contactHref}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-base font-medium transition ${
                    isRouteActive(pathname, contactHref)
                      ? "bg-[#EFF5FB] text-[#133E87]"
                      : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  {labels.contact}
                </Link>
              </nav>

              <div className="mt-6 flex flex-col gap-3 pb-6">
                <Link
                  href={contactHref}
                  onClick={() => setOpen(false)}
                  className="rounded-xl bg-[#133E87] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#0f3270]"
                >
                  {labels.contactNow}
                </Link>

                <Link
                  href={sadiHref}
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-800 transition hover:border-[#133E87] hover:text-[#133E87]"
                >
                  {labels.productTitle}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
