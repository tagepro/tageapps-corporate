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

  const serviceItems = [
    { label: labels.allServices, href: withLang(lang, "/hizmetler") },
    {
      label: labels.servicesMenu.processManagementConsulting.title,
      href: withLang(lang, "/hizmetler/surec-yonetimi-danismanligi"),
    },
    {
      label: labels.servicesMenu.processAnalysisModeling.title,
      href: withLang(lang, "/hizmetler/surec-analizi-ve-surec-modelleme"),
    },
    {
      label: labels.servicesMenu.processImprovementWorkflow.title,
      href: withLang(lang, "/hizmetler/surec-iyilestirme-ve-is-akisi-yonetimi"),
    },
    {
      label: labels.servicesMenu.digitalMaturityTransformation.title,
      href: withLang(
        lang,
        "/hizmetler/dijital-olgunluk-ve-dijital-donusum-analizi"
      ),
    },
    {
      label: labels.servicesMenu.processSoftwareEnterpriseSolutions.title,
      href: withLang(
        lang,
        "/hizmetler/surec-yonetimi-yazilimi-ve-kurumsal-yazilim-cozumleri"
      ),
    },
    {
      label: labels.servicesMenu.erpConsultingReadiness.title,
      href: withLang(lang, "/hizmetler/erp-danismanligi-ve-erp-hazirlik-hizmetleri"),
    },
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
                        {serviceItems.map((item) => {
                          const isActive = isRouteActive(pathname, item.href);

                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setOpen(false)}
                              className={`rounded-xl px-3 py-3 text-sm font-medium leading-6 transition ${
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