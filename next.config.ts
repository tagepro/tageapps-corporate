import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:lang(tr|en)/hizmetler/surec-yonetimi-danismanligi",
        destination:
          "/:lang/hizmetler/surec-olgunlugu-ve-surec-yonetimi",
        permanent: true,
      },
      {
        source: "/:lang(tr|en)/hizmetler/surec-analizi-ve-surec-modelleme",
        destination:
          "/:lang/hizmetler/surec-olgunlugu-ve-surec-yonetimi",
        permanent: true,
      },
      {
        source:
          "/:lang(tr|en)/hizmetler/surec-iyilestirme-ve-is-akisi-yonetimi",
        destination:
          "/:lang/hizmetler/surec-olgunlugu-ve-surec-yonetimi",
        permanent: true,
      },      {
        source:
          "/:lang(tr|en)/hizmetler/surec-yonetimi-yazilimi-ve-kurumsal-yazilim-cozumleri",
        destination:
          "/:lang/hizmetler/surec-olgunlugu-ve-surec-yonetimi",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;