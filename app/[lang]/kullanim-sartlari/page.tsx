// app/kullanim-sartlari/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BookOpen,
  Building2,
  CheckCircle2,
  FileText,
  Gavel,
  Globe,
  Link2,
  Mail,
  MapPin,
  Scale,
  ShieldCheck,
} from "lucide-react";
import Container from "@/components/layout/Container";

type PageProps = {
  params: Promise<{ lang: string }>;
};

const SITE_URL = "https://www.tageapps.com";

const COMPANY_NAME = "Tage Yazılım Ltd. Şti.";
const COMPANY_EMAIL = "info@tageapps.com";
const COMPANY_ADDRESS =
  "Dijitalpark Teknokent Kirazlıdere Mah. Eski Ankara Cad. No:4A İç Kapı No:3 Çekmeköy-İstanbul-Türkiye";
const PAGE_LAST_UPDATED_TR = "17 Nisan 2026";
const PAGE_LAST_UPDATED_EN = "April 17, 2026";

const tr = {
  meta: {
    title: "Kullanım Şartları | Tage Yazılım",
    description:
      "Tage Yazılım kullanım şartları. Web sitesinin kullanım koşulları, fikri mülkiyet hakları, sorumluluk sınırları ve uygulanacak hukuk hakkında bilgilendirme.",
    keywords: [
      "kullanım şartları",
      "kullanım koşulları",
      "terms of use",
      "tage yazılım kullanım şartları",
      "web sitesi kullanım kuralları",
      "fikri mülkiyet",
      "telif hakları",
    ],
    ogDescription:
      "Web sitesinin kullanım koşulları, sorumluluk sınırları ve fikri haklara ilişkin bilgilendirme.",
    twitterDescription:
      "Tage Yazılım web sitesi kullanım şartları ve kullanım kuralları.",
  },

  breadcrumb: {
    home: "Anasayfa",
    current: "Kullanım Şartları",
  },

  hero: {
    badge: "Kullanım Şartları",
    title: "Web sitesi kullanım koşulları",
    description1:
      `Bu sayfa, ${COMPANY_NAME} tarafından işletilen web sitesinin kullanımına ilişkin temel kuralları, fikri mülkiyet yaklaşımını, sorumluluk sınırlarını ve uygulanacak genel esasları açıklamak amacıyla hazırlanmıştır.`,
    description2:
      "Web sitemizi ziyaret eden veya kullanan her kullanıcı, burada yer alan kullanım şartlarını kabul etmiş sayılır. Siteyi kullanmaya devam etmeniz, bu şartları kabul ettiğiniz anlamına gelir.",
    primaryButton: "İletişime Geçin",
    secondaryButton: "Gizlilik Politikası",
  },

  officialInfo: {
    label: "Resmi bilgiler",
    title: "Politika sahibi ve güncelleme bilgisi",
    companyLabel: "Şirket",
    addressLabel: "Adres",
    emailLabel: "E-posta",
    updatedLabel: "Son güncelleme",
    updatedValue: PAGE_LAST_UPDATED_TR,
  },

  summaryCards: [
    {
      icon: "globe",
      title: "Site kullanımı",
      text: "Web sitemizi kullanmanız, aşağıda yer alan şartları kabul ettiğiniz anlamına gelir.",
    },
    {
      icon: "shield",
      title: "Sorumluluk sınırları",
      text: "Site içeriği bilgilendirme amaçlıdır; teknik veya hukuki zorunluluklar halinde güncellenebilir, değiştirilebilir veya kaldırılabilir.",
    },
    {
      icon: "book",
      title: "Fikri haklar",
      text: "Sitede yer alan içerik, tasarım, metin ve görseller üzerinde ilgili fikri mülkiyet hakları saklıdır.",
    },
  ],

  sections: {
    useRules: {
      title: "1. Site kullanım kuralları",
      intro:
        "Web sitesini kullanırken aşağıdaki temel kurallara uygun hareket edilmesi beklenir:",
      items: [
        "Web sitesini hukuka, genel ahlaka ve dürüstlük kurallarına uygun şekilde kullanmak",
        "Site güvenliğini zayıflatacak, sistemi bozacak veya hizmet sürekliliğini etkileyecek girişimlerde bulunmamak",
        "İçeriği izinsiz kopyalamamak, çoğaltmamak, yayımlamamak veya ticari amaçla kullanmamak",
        "Üçüncü kişilerin haklarını ihlal eden, yanıltıcı veya hukuka aykırı kullanım gerçekleştirmemek",
      ],
    },

    intellectualProperty: {
      title: "2. Fikri mülkiyet hakları",
      items: [
        "Site tasarımı, metinler, logolar, görseller, grafikler ve diğer içerikler üzerindeki haklar ilgili mevzuat kapsamında korunur.",
        "Önceden yazılı izin alınmadıkça bu içerikler kopyalanamaz, değiştirilemez, dağıtılamaz veya ticari amaçla kullanılamaz.",
        "Sitede geçen ürün, marka ve hizmet adları ilgili hak sahiplerine ait olabilir.",
      ],
    },

    informational: {
      title: "3. İçerik ve bilgilendirme niteliği",
      paragraph1:
        "Web sitesinde yer alan metinler, hizmet açıklamaları, ürün bilgileri ve diğer içerikler genel bilgilendirme amacı taşır. Bu içerikler önceden haber verilmeksizin güncellenebilir, değiştirilebilir veya kaldırılabilir.",
      paragraph2:
        "Site içeriğinde yer alan bilgiler, her durumda bağlayıcı teklif, garanti veya taahhüt niteliğinde yorumlanmamalıdır.",
    },

    responsibilities: {
      title: "4. Sorumluluk sınırları",
      items: [
        "Web sitesinde yer alan bilgiler genel bilgilendirme amacı taşır.",
        "İçeriklerin doğruluğu ve güncelliği için azami özen gösterilse de her zaman eksiksiz, kesintisiz veya hatasız olacağı garanti edilmez.",
        "Teknik nedenlerle siteye erişimde kesinti, gecikme veya hata oluşabilir.",
        "Sitede yer alan içeriklerin kullanımı nedeniyle ortaya çıkabilecek doğrudan veya dolaylı zararlardan doğan sorumluluk, yürürlükteki mevzuatın izin verdiği ölçüde sınırlandırılır.",
      ],
    },

    externalLinks: {
      title: "5. Üçüncü taraf bağlantılar",
      items: [
        "Web sitesi üzerinden üçüncü taraf internet sitelerine bağlantılar verilebilir.",
        "Bu bağlantılar yalnızca kolaylık sağlama amacı taşıyabilir.",
        "Bağlantı verilen sitelerin içerikleri, güvenliği ve politikaları üzerinde kontrolümüz bulunmayabilir.",
        "Bu nedenle üçüncü taraf sitelerin kullanımından doğan sonuçlar bakımından ilgili site koşulları ayrıca değerlendirilmelidir.",
      ],
    },

    security: {
      title: "6. Güvenlik ve kötüye kullanım",
      paragraph1:
        "Web sitesinin güvenliğini zayıflatacak, sistemin çalışmasını engelleyecek veya başka kullanıcıların deneyimini olumsuz etkileyecek kullanım biçimlerine izin verilmez.",
      paragraph2:
        "Güvenlik ihlali oluşturabilecek kullanım, saldırı teşebbüsü, yetkisiz erişim veya sistem bütünlüğünü bozacak işlemler tespit edilirse gerekli teknik ve hukuki adımlar atılabilir.",
    },

    governingLaw: {
      title: "7. Uygulanacak hukuk",
      paragraph1:
        "Bu web sitesinin kullanımı ve bu kullanım şartlarının yorumlanması, Türkiye Cumhuriyeti hukukuna tabidir.",
      paragraph2:
        "Uyuşmazlıkların çözümünde, uygulanabilir mevzuat çerçevesinde yetkili mahkeme ve icra daireleri dikkate alınır.",
    },

    updates: {
      title: "8. Şartların güncellenmesi",
      paragraph1:
        "Kullanım şartları, iş süreçleri, teknik yapı veya mevzuat ihtiyaçları doğrultusunda güncellenebilir.",
      paragraph2:
        "Güncellenmiş şartlar, web sitesinde yayımlandığı tarihten itibaren geçerli kabul edilir.",
      cardTitle: "Önemli not",
      cardText:
        "Kullanım şartları; gizlilik politikası, KVKK aydınlatma metni ve çerez politikası gibi diğer metinlerle birlikte değerlendirilmelidir.",
    },
  },

  cta: {
    title: "Kullanım şartları hakkında sorularınız varsa bizimle iletişime geçin",
    description:
      "Web sitesinin kullanımı, içerik, fikri haklar veya bu şartlar hakkında sorularınız varsa bizimle iletişime geçebilirsiniz.",
    primaryButton: "İletişime Geçin",
    secondaryButton: "Gizlilik Politikası",
  },
} as const;

const en = {
  meta: {
    title: "Terms of Use | Tage Yazılım",
    description:
      "Tage Yazılım terms of use. Information about website usage conditions, intellectual property rights, limitation of liability, and governing law.",
    keywords: [
      "terms of use",
      "terms and conditions",
      "tage yazilim terms of use",
      "website usage rules",
      "intellectual property",
      "copyright",
    ],
    ogDescription:
      "Information regarding the conditions of website use, limitation of liability, and intellectual property rights.",
    twitterDescription:
      "Tage Yazılım website terms of use and usage rules.",
  },

  breadcrumb: {
    home: "Home",
    current: "Terms of Use",
  },

  hero: {
    badge: "Terms of Use",
    title: "Website terms of use",
    description1:
      `This page has been prepared to explain the core rules relating to the use of the website operated by ${COMPANY_NAME}, the intellectual property approach, limitation of liability, and the general principles to be applied.`,
    description2:
      "Every user who visits or uses our website is deemed to have accepted the terms of use set out here. Continuing to use the site means that you accept these terms.",
    primaryButton: "Contact Us",
    secondaryButton: "Privacy Policy",
  },

  officialInfo: {
    label: "Official information",
    title: "Policy owner and update details",
    companyLabel: "Company",
    addressLabel: "Address",
    emailLabel: "Email",
    updatedLabel: "Last updated",
    updatedValue: PAGE_LAST_UPDATED_EN,
  },

  summaryCards: [
    {
      icon: "globe",
      title: "Website usage",
      text: "Using our website means that you accept the conditions set out below.",
    },
    {
      icon: "shield",
      title: "Limitation of liability",
      text: "Site content is for informational purposes; it may be updated, changed, or removed in cases of technical or legal necessity.",
    },
    {
      icon: "book",
      title: "Intellectual rights",
      text: "Relevant intellectual property rights over the content, design, texts, and visuals on the site are reserved.",
    },
  ],

  sections: {
    useRules: {
      title: "1. Website usage rules",
      intro:
        "When using the website, users are expected to act in accordance with the following core rules:",
      items: [
        "To use the website in compliance with the law, public morality, and principles of good faith",
        "Not to attempt actions that would weaken site security, disrupt the system, or affect service continuity",
        "Not to copy, reproduce, publish, or use the content for commercial purposes without permission",
        "Not to engage in misleading, unlawful use or use that infringes third-party rights",
      ],
    },

    intellectualProperty: {
      title: "2. Intellectual property rights",
      items: [
        "Rights over the site design, texts, logos, visuals, graphics, and other content are protected under the relevant legislation.",
        "Unless prior written permission is obtained, such content may not be copied, modified, distributed, or used for commercial purposes.",
        "Product, trademark, and service names mentioned on the site may belong to their respective rights holders.",
      ],
    },

    informational: {
      title: "3. Nature of content and information",
      paragraph1:
        "Texts, service descriptions, product information, and other content on the website are provided for general informational purposes. Such content may be updated, changed, or removed without prior notice.",
      paragraph2:
        "Information on the site should not, in any case, be interpreted as a binding offer, guarantee, or commitment.",
    },

    responsibilities: {
      title: "4. Limitation of liability",
      items: [
        "The information on the website is provided for general informational purposes.",
        "Although maximum care is taken regarding the accuracy and currency of the content, it is not guaranteed to be complete, uninterrupted, or error-free at all times.",
        "Interruptions, delays, or errors may occur in access to the site for technical reasons.",
        "Liability arising from direct or indirect damages that may result from the use of content on the site is limited to the extent permitted by the applicable legislation.",
      ],
    },

    externalLinks: {
      title: "5. Third-party links",
      items: [
        "Links to third-party websites may be provided through the website.",
        "Such links may be provided solely for convenience.",
        "We may not have control over the content, security, and policies of linked sites.",
        "Therefore, the consequences of using third-party sites should additionally be evaluated under the conditions of the relevant site.",
      ],
    },

    security: {
      title: "6. Security and misuse",
      paragraph1:
        "Forms of use that would weaken website security, prevent the system from functioning, or negatively affect the experience of other users are not permitted.",
      paragraph2:
        "If use constituting a security violation, attempted attack, unauthorized access, or actions disrupting system integrity are detected, necessary technical and legal steps may be taken.",
    },

    governingLaw: {
      title: "7. Governing law",
      paragraph1:
        "The use of this website and the interpretation of these terms of use are subject to the laws of the Republic of Türkiye.",
      paragraph2:
        "In resolving disputes, the competent courts and enforcement offices are considered within the framework of the applicable legislation.",
    },

    updates: {
      title: "8. Updates to the terms",
      paragraph1:
        "The terms of use may be updated in line with business processes, technical structure, or legal requirements.",
      paragraph2:
        "Updated terms are deemed effective from the date they are published on the website.",
      cardTitle: "Important note",
      cardText:
        "The terms of use should be evaluated together with other texts such as the privacy policy, PDPL disclosure notice, and cookie policy.",
    },
  },

  cta: {
    title: "Contact us if you have questions about the terms of use",
    description:
      "If you have questions about website use, content, intellectual rights, or these terms, you may contact us.",
    primaryButton: "Contact Us",
    secondaryButton: "Privacy Policy",
  },
} as const;

function getSummaryIcon(name: string) {
  if (name === "globe") return Globe;
  if (name === "shield") return ShieldCheck;
  return BookOpen;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const copy = lang === "en" ? en : tr;
  const pagePath = `/${lang}/kullanim-sartlari`;
  const pageUrl = `${SITE_URL}${pagePath}`;

  return {
    title: copy.meta.title,
    description: copy.meta.description,
    keywords: copy.meta.keywords,
    alternates: {
      canonical: pagePath,
      languages: {
        tr: "/tr/kullanim-sartlari",
        en: "/en/kullanim-sartlari",
      },
    },
    openGraph: {
      title: copy.meta.title,
      description: copy.meta.ogDescription,
      url: pageUrl,
      siteName: "Tage Yazılım",
      locale: lang === "en" ? "en_US" : "tr_TR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: copy.meta.title,
      description: copy.meta.twitterDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function TermsPage({ params }: PageProps) {
  const { lang } = await params;

  if (lang !== "tr" && lang !== "en") {
    notFound();
  }

  const copy = lang === "en" ? en : tr;
  const withLang = (path: string) => `/${lang}${path}`;
  const pagePath = `/${lang}/kullanim-sartlari`;
  const pageUrl = `${SITE_URL}${pagePath}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: copy.breadcrumb.home,
        item: `${SITE_URL}/${lang}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: copy.breadcrumb.current,
        item: pageUrl,
      },
    ],
  };

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
                      <Link
                        href={withLang("")}
                        className="transition hover:text-[#133E87]"
                      >
                        {copy.breadcrumb.home}
                      </Link>
                    </li>
                    <li>/</li>
                    <li className="font-medium text-[#133E87]">
                      {copy.breadcrumb.current}
                    </li>
                  </ol>
                </nav>

                <span className="inline-flex rounded-full border border-[#CBDCEB] bg-white px-4 py-1.5 text-sm font-medium text-[#133E87]">
                  {copy.hero.badge}
                </span>

                <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[#133E87] md:text-5xl">
                  {copy.hero.title}
                </h1>

                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
                  {copy.hero.description1}
                </p>

                <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
                  {copy.hero.description2}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={withLang("/iletisim")}
                    className="inline-flex items-center gap-2 rounded-full bg-[#133E87] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                  >
                    {copy.hero.primaryButton}
                    <ArrowRight size={18} />
                  </Link>

                  <Link
                    href={withLang("/gizlilik-politikasi")}
                    className="inline-flex items-center gap-2 rounded-full border border-[#CBDCEB] bg-white px-6 py-3 text-sm font-semibold text-[#133E87] transition hover:bg-[#F8FAFC]"
                  >
                    {copy.hero.secondaryButton}
                  </Link>
                </div>
              </div>

              <div className="rounded-[28px] border border-[#CBDCEB] bg-white p-6 shadow-[0_20px_60px_rgba(19,62,135,0.08)] md:p-8">
                <div className="rounded-2xl bg-[#F8FAFC] p-5">
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#608BC1]">
                    {copy.officialInfo.label}
                  </div>
                  <div className="mt-3 text-2xl font-semibold text-[#133E87]">
                    {copy.officialInfo.title}
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  <div className="flex gap-3 rounded-2xl border border-[#E7EEF6] px-4 py-4">
                    <Building2 size={18} className="mt-0.5 shrink-0 text-[#133E87]" />
                    <div>
                      <div className="text-sm font-semibold text-slate-900">
                        {copy.officialInfo.companyLabel}
                      </div>
                      <div className="mt-1 text-sm leading-6 text-slate-600">
                        {COMPANY_NAME}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 rounded-2xl border border-[#E7EEF6] px-4 py-4">
                    <MapPin size={18} className="mt-0.5 shrink-0 text-[#133E87]" />
                    <div>
                      <div className="text-sm font-semibold text-slate-900">
                        {copy.officialInfo.addressLabel}
                      </div>
                      <div className="mt-1 text-sm leading-6 text-slate-600">
                        {COMPANY_ADDRESS}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 rounded-2xl border border-[#E7EEF6] px-4 py-4">
                    <Mail size={18} className="mt-0.5 shrink-0 text-[#133E87]" />
                    <div>
                      <div className="text-sm font-semibold text-slate-900">
                        {copy.officialInfo.emailLabel}
                      </div>
                      <div className="mt-1 text-sm leading-6 text-slate-600">
                        {COMPANY_EMAIL}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 rounded-2xl border border-[#E7EEF6] px-4 py-4">
                    <FileText size={18} className="mt-0.5 shrink-0 text-[#133E87]" />
                    <div>
                      <div className="text-sm font-semibold text-slate-900">
                        {copy.officialInfo.updatedLabel}
                      </div>
                      <div className="mt-1 text-sm leading-6 text-slate-600">
                        {copy.officialInfo.updatedValue}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-14 md:py-20">
          <Container>
            <div className="grid gap-5 md:grid-cols-3">
              {copy.summaryCards.map((item) => {
                const Icon = getSummaryIcon(item.icon);

                return (
                  <article
                    key={item.title}
                    className="rounded-[24px] border border-[#E6EDF5] bg-white p-6 shadow-sm"
                  >
                    <div className="inline-flex rounded-2xl bg-[#F3F7FB] p-3 text-[#133E87]">
                      <Icon size={22} />
                    </div>

                    <h2 className="mt-5 text-xl font-semibold text-[#133E87]">
                      {item.title}
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="bg-[#F8FAFC] py-14 md:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                  {copy.sections.useRules.title}
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-700">
                  {copy.sections.useRules.intro}
                </p>

                <div className="mt-6 grid gap-4">
                  {copy.sections.useRules.items.map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle2
                        size={20}
                        className="mt-0.5 shrink-0 text-[#133E87]"
                      />
                      <p className="text-sm leading-6 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                  {copy.sections.intellectualProperty.title}
                </h2>

                <div className="mt-6 grid gap-4">
                  {copy.sections.intellectualProperty.items.map((item) => (
                    <div key={item} className="flex gap-3">
                      <BookOpen
                        size={20}
                        className="mt-0.5 shrink-0 text-[#133E87]"
                      />
                      <p className="text-sm leading-6 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-14 md:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                  {copy.sections.informational.title}
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-700">
                  {copy.sections.informational.paragraph1}
                </p>

                <p className="mt-4 text-base leading-8 text-slate-700">
                  {copy.sections.informational.paragraph2}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                  {copy.sections.responsibilities.title}
                </h2>

                <div className="mt-6 grid gap-4">
                  {copy.sections.responsibilities.items.map((item) => (
                    <div key={item} className="flex gap-3">
                      <ShieldCheck
                        size={20}
                        className="mt-0.5 shrink-0 text-[#133E87]"
                      />
                      <p className="text-sm leading-6 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-[#F8FAFC] py-14 md:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                  {copy.sections.externalLinks.title}
                </h2>

                <div className="mt-6 grid gap-4">
                  {copy.sections.externalLinks.items.map((item) => (
                    <div key={item} className="flex gap-3">
                      <Link2
                        size={20}
                        className="mt-0.5 shrink-0 text-[#133E87]"
                      />
                      <p className="text-sm leading-6 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                  {copy.sections.security.title}
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-700">
                  {copy.sections.security.paragraph1}
                </p>

                <p className="mt-4 text-base leading-8 text-slate-700">
                  {copy.sections.security.paragraph2}
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-14 md:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                  {copy.sections.governingLaw.title}
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-700">
                  {copy.sections.governingLaw.paragraph1}
                </p>

                <p className="mt-4 text-base leading-8 text-slate-700">
                  {copy.sections.governingLaw.paragraph2}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                  {copy.sections.updates.title}
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-700">
                  {copy.sections.updates.paragraph1}
                </p>

                <p className="mt-4 text-base leading-8 text-slate-700">
                  {copy.sections.updates.paragraph2}
                </p>

                <div className="mt-6 flex items-start gap-4 rounded-[24px] border border-[#E6EDF5] bg-white p-5 shadow-sm">
                  <div className="inline-flex rounded-2xl bg-[#F3F7FB] p-3 text-[#133E87]">
                    <Gavel size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#133E87]">
                      {copy.sections.updates.cardTitle}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {copy.sections.updates.cardText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-[#133E87] py-16 md:py-24">
          <Container>
            <div className="rounded-[32px] border border-white/10 bg-white/5 px-6 py-10 text-white shadow-sm md:px-10 md:py-14">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                    {copy.cta.title}
                  </h2>

                  <p className="mt-4 max-w-2xl text-base leading-7 text-white/85">
                    {copy.cta.description}
                  </p>

                  <div className="mt-6 flex items-center gap-3 text-white/90">
                    <Mail size={18} />
                    <span className="text-sm font-medium">{COMPANY_EMAIL}</span>
                  </div>

                  <div className="mt-3 flex items-start gap-3 text-white/90">
                    <MapPin size={18} className="mt-0.5 shrink-0" />
                    <span className="text-sm font-medium">{COMPANY_ADDRESS}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href={withLang("/iletisim")}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#133E87] transition hover:opacity-95"
                  >
                    {copy.cta.primaryButton}
                    <ArrowRight size={18} />
                  </Link>

                  <Link
                    href={withLang("/gizlilik-politikasi")}
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    {copy.cta.secondaryButton}
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}