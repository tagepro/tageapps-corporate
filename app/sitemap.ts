// app/sitemap.ts

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.tageapps.com";

  const routes = [
    "",
    "/hakkimizda",
    "/hizmetler",
    "/hizmetler/surec-yonetimi-danismanligi",
    "/hizmetler/surec-analizi-ve-surec-modelleme",
    "/hizmetler/surec-iyilestirme-ve-is-akisi-yonetimi",
    "/hizmetler/dijital-olgunluk-ve-dijital-donusum-analizi",
    "/hizmetler/surec-yonetimi-yazilimi-ve-kurumsal-yazilim-cozumleri",
    "/hizmetler/erp-danismanligi-ve-erp-hazirlik-hizmetleri",
    "/iletisim",
    "/sadi",
    "/urunler",
    "/urunler/sadi",
    "/gizlilik-politikasi",
    "/kvkk",
    "/cerez-politikasi",
    "/kullanim-sartlari",
  ];

  const languages = ["tr", "en"];
  const lastModified = new Date();

  return languages.flatMap((lang) =>
    routes.map((route) => ({
      url: `${baseUrl}/${lang}${route}`,
      lastModified,
    }))
  );
}