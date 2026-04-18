// app/cerez-politikasi/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BadgeCheck,
  Cookie,
  FileText,
  Gauge,
  Lock,
  Mail,
  MapPin,
  Settings2,
  ShieldCheck,
  Building2,
  CheckCircle2,
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
    title: "Çerez Politikası | Tage Yazılım",
    description:
      "Tage Yazılım çerez politikası. Web sitemizde kullanılan çerez türleri, kullanım amaçları, tercih yönetimi ve kullanıcı hakları hakkında bilgilendirme.",
    keywords: [
      "çerez politikası",
      "cookie policy",
      "tage yazılım çerez politikası",
      "zorunlu çerezler",
      "analitik çerezler",
      "performans çerezleri",
      "kişisel veriler ve çerezler",
    ],
    ogDescription:
      "Web sitemizde kullanılan çerez türleri ve çerez tercih yönetimi hakkında bilgilendirme.",
    twitterDescription:
      "Tage Yazılım web sitesi çerez politikası ve kullanıcı tercih bilgilendirmesi.",
  },

  breadcrumb: {
    home: "Anasayfa",
    current: "Çerez Politikası",
  },

  hero: {
    badge: "Çerez Politikası",
    title: "Web sitesi çerez kullanımı hakkında bilgilendirme",
    description1:
      `Bu Çerez Politikası, ${COMPANY_NAME} tarafından işletilen web sitesinde kullanılan çerez türleri, kullanım amaçları, tercih yönetimi ve kullanıcıların kontrol imkanları hakkında bilgilendirme amacıyla hazırlanmıştır.`,
    description2:
      "Çerezler; web sitesinin güvenli ve verimli çalışmasını sağlamak, kullanıcı deneyimini geliştirmek ve gerektiğinde performans ölçümü yapmak amacıyla kullanılabilir. Zorunlu olmayan çerezler bakımından tercihlerinize saygı gösterilmesi esastır.",
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
      icon: "cookie",
      title: "Çerez türleri",
      text: "Sitemizde kullanılan çerezler; işlevlerine ve kullanım amaçlarına göre farklı kategorilerde değerlendirilebilir.",
    },
    {
      icon: "shield",
      title: "Tercih yönetimi",
      text: "Zorunlu olmayan çerezler için tercihlerinizi yönetebilmeniz hedeflenir; tercihlerinizi daha sonra da güncelleyebilirsiniz.",
    },
    {
      icon: "settings",
      title: "Kontrol sizde",
      text: "Tarayıcı ayarlarınız ve varsa çerez tercih paneli üzerinden çerezleri kontrol edebilir, silebilir veya engelleyebilirsiniz.",
    },
  ],

  whatIsCookie: {
    title: "Çerez nedir?",
    paragraph1:
      "Çerezler, ziyaret ettiğiniz internet siteleri tarafından tarayıcınız üzerinden cihazınıza yerleştirilebilen küçük metin dosyalarıdır. Bu dosyalar; oturum yönetimi, güvenlik, kullanım tercihlerinin hatırlanması ve performans ölçümü gibi amaçlarla kullanılabilir.",
    paragraph2:
      "Çerezlerin tamamı aynı amaçla kullanılmaz. Bu nedenle her çerez türü, işlevi ve kullanım amacı bakımından ayrı değerlendirilmelidir.",
  },

  categories: {
    title: "Çerez kategorileri",
    intro:
      "Web sitesinde kullanılabilecek çerezler genel olarak aşağıdaki kategoriler altında ele alınabilir. Sitede gerçekten kullanılan araç ve çerezler, teknik altyapıya göre değişebilir.",
    items: [
      {
        icon: "lock",
        title: "Zorunlu çerezler",
        description:
          "Web sitesinin güvenli, düzgün ve teknik olarak çalışabilmesi için gerekli olan çerezlerdir. Oturum yönetimi, güvenlik, form işleyişi ve temel site fonksiyonları bu kapsama girebilir.",
        examples: [
          "Oturumun sürekliliğinin sağlanması",
          "Güvenlik ve kötüye kullanımın önlenmesi",
          "Formların ve temel sayfa işlevlerinin çalışması",
        ],
      },
      {
        icon: "gauge",
        title: "Analitik / performans çerezleri",
        description:
          "Web sitesinin nasıl kullanıldığını anlamaya, sayfa performansını ölçmeye ve kullanıcı deneyimini geliştirmeye yardımcı olabilir.",
        examples: [
          "Ziyaretçi yoğunluğunun ölçülmesi",
          "Sayfa performansının değerlendirilmesi",
          "İçerik ve deneyim iyileştirme çalışmaları",
        ],
      },
      {
        icon: "settings",
        title: "İşlevsellik çerezleri",
        description:
          "Kullanıcı tercihlerini hatırlamak ve site deneyimini kişiselleştirmek amacıyla kullanılabilir.",
        examples: [
          "Dil veya bölge tercihi",
          "Kullanıcıya özel ayarların hatırlanması",
          "Önceki seçimlerin korunması",
        ],
      },
      {
        icon: "badge",
        title: "Pazarlama / hedefleme çerezleri",
        description:
          "Reklam, kampanya ölçümü veya ilgi alanına dayalı içerik gösterimi amacıyla kullanılabilen çerezlerdir. Bu tür çerezler kullanılıyorsa ayrıca açık ve net tercih yönetimi gerekir.",
        examples: [
          "Reklam etkinliğinin ölçülmesi",
          "Kampanya performansının değerlendirilmesi",
          "İlgi alanına göre içerik / reklam gösterimi",
        ],
      },
    ],
  },

  purposes: {
    title: "Çerezler hangi amaçlarla kullanılabilir?",
    items: [
      "Web sitesinin güvenli ve düzgün çalışmasının sağlanması",
      "Oturum ve temel kullanıcı işlemlerinin yönetilmesi",
      "Tercihlerin ve kullanıcı deneyiminin iyileştirilmesi",
      "Site performansının ve kullanım yoğunluğunun analiz edilmesi",
      "Hizmet geliştirme ve teknik iyileştirme çalışmaları",
    ],
  },

  preferences: {
    title: "Çerez tercihlerinizi nasıl yönetebilirsiniz?",
    paragraph1:
      "Tarayıcı ayarlarınızı değiştirerek çerezleri silebilir, engelleyebilir veya belirli çerezler için uyarı alabilirsiniz. Ayrıca sitemizde bir çerez tercih paneli kullanılıyorsa, tercihlerinizi bu panel üzerinden güncellemeniz de mümkün olabilir.",
    paragraph2:
      "Ancak bazı çerezlerin devre dışı bırakılması, web sitesinin belirli alanlarının beklenen şekilde çalışmamasına neden olabilir.",
  },

  mandatory: {
    title: "Zorunlu ve zorunlu olmayan çerezler",
    paragraph1:
      "Web sitesinin teknik olarak çalışması için gerekli çerezler ile kullanıcı tercihine bağlı olan çerezler aynı şekilde değerlendirilmez.",
    paragraph2:
      "Zorunlu olmayan çerezler bakımından kullanıcıya açık bilgi verilmesi, gerektiğinde tercih ve açık rıza yönetiminin sağlanması önemlidir.",
  },

  personalData: {
    title: "Kişisel veriler ve çerezler",
    paragraph1:
      "Çerezler aracılığıyla bazı durumlarda kişisel veri niteliği taşıyan bilgiler işlenebilir. Bu durumda, kişisel verilerin korunmasına ilişkin yükümlülükler ayrıca değerlendirilir.",
    paragraph2:
      "Bu konuda daha detaylı bilgi için Gizlilik Politikası ve KVKK Aydınlatma Metni sayfalarımızı inceleyebilirsiniz.",
  },

  cta: {
    title: "Çerez kullanımı hakkında sorularınız varsa bizimle iletişime geçin",
    description:
      "Çerez kullanımı, tercih yönetimi veya kişisel verilerinizin işlenmesi hakkında sorularınız varsa bizimle iletişime geçebilirsiniz.",
    primaryButton: "İletişime Geçin",
    secondaryButton: "KVKK Metni",
  },
} as const;

const en = {
  meta: {
    title: "Cookie Policy | Tage Yazılım",
    description:
      "Tage Yazılım cookie policy. Information about the types of cookies used on our website, their purposes, preference management, and user rights.",
    keywords: [
      "cookie policy",
      "tage yazilim cookie policy",
      "strictly necessary cookies",
      "analytics cookies",
      "performance cookies",
      "personal data and cookies",
    ],
    ogDescription:
      "Information about the types of cookies used on our website and cookie preference management.",
    twitterDescription:
      "Tage Yazılım website cookie policy and user preference information.",
  },

  breadcrumb: {
    home: "Home",
    current: "Cookie Policy",
  },

  hero: {
    badge: "Cookie Policy",
    title: "Information about website cookie usage",
    description1:
      `This Cookie Policy has been prepared to inform users about the types of cookies used on the website operated by ${COMPANY_NAME}, their purposes of use, preference management, and the control options available to users.`,
    description2:
      "Cookies may be used to ensure the secure and efficient operation of the website, improve user experience, and where necessary measure performance. Respecting your preferences is essential with regard to non-essential cookies.",
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
      icon: "cookie",
      title: "Cookie types",
      text: "Cookies used on our website may be evaluated under different categories according to their functions and purposes of use.",
    },
    {
      icon: "shield",
      title: "Preference management",
      text: "For non-essential cookies, you should be able to manage your preferences and update them later as well.",
    },
    {
      icon: "settings",
      title: "You are in control",
      text: "You can control, delete, or block cookies through your browser settings and, where available, through a cookie preference panel.",
    },
  ],

  whatIsCookie: {
    title: "What is a cookie?",
    paragraph1:
      "Cookies are small text files that can be placed on your device through your browser by the websites you visit. These files may be used for purposes such as session management, security, remembering user preferences, and performance measurement.",
    paragraph2:
      "Not all cookies are used for the same purpose. Therefore, each cookie type should be evaluated separately in terms of its function and purpose of use.",
  },

  categories: {
    title: "Cookie categories",
    intro:
      "Cookies that may be used on the website can generally be considered under the following categories. The tools and cookies actually used on the site may vary depending on the technical infrastructure.",
    items: [
      {
        icon: "lock",
        title: "Strictly necessary cookies",
        description:
          "These are cookies required for the website to operate securely, properly, and technically. Session management, security, form handling, and core site functions may fall within this scope.",
        examples: [
          "Ensuring session continuity",
          "Preventing security threats and misuse",
          "Operating forms and core page functions",
        ],
      },
      {
        icon: "gauge",
        title: "Analytics / performance cookies",
        description:
          "These may help understand how the website is used, measure page performance, and improve user experience.",
        examples: [
          "Measuring visitor traffic",
          "Evaluating page performance",
          "Improving content and user experience",
        ],
      },
      {
        icon: "settings",
        title: "Functionality cookies",
        description:
          "These may be used to remember user preferences and personalize the site experience.",
        examples: [
          "Language or region preference",
          "Remembering user-specific settings",
          "Retaining previous selections",
        ],
      },
      {
        icon: "badge",
        title: "Marketing / targeting cookies",
        description:
          "These are cookies that may be used for advertising, campaign measurement, or showing content based on interests. If such cookies are used, clear and explicit preference management is also required.",
        examples: [
          "Measuring advertising effectiveness",
          "Evaluating campaign performance",
          "Showing content / advertising based on interests",
        ],
      },
    ],
  },

  purposes: {
    title: "For what purposes may cookies be used?",
    items: [
      "Ensuring the secure and proper functioning of the website",
      "Managing sessions and core user interactions",
      "Improving preferences and user experience",
      "Analyzing site performance and usage intensity",
      "Service development and technical improvement efforts",
    ],
  },

  preferences: {
    title: "How can you manage your cookie preferences?",
    paragraph1:
      "You may delete, block, or receive warnings for certain cookies by changing your browser settings. In addition, if a cookie preference panel is used on our website, you may also update your preferences through that panel.",
    paragraph2:
      "However, disabling certain cookies may cause some parts of the website not to function as expected.",
  },

  mandatory: {
    title: "Necessary and non-necessary cookies",
    paragraph1:
      "Cookies required for the website to function technically are not assessed in the same way as cookies that depend on user preference.",
    paragraph2:
      "For non-essential cookies, it is important to provide clear information to the user and, where necessary, to ensure preference and explicit consent management.",
  },

  personalData: {
    title: "Personal data and cookies",
    paragraph1:
      "In some cases, information processed through cookies may qualify as personal data. In such cases, obligations relating to the protection of personal data are also separately evaluated.",
    paragraph2:
      "For more detailed information on this subject, you may review our Privacy Policy and PDPL Disclosure Notice pages.",
  },

  cta: {
    title: "Contact us if you have questions about cookie usage",
    description:
      "If you have questions about cookie usage, preference management, or the processing of your personal data, you may contact us.",
    primaryButton: "Contact Us",
    secondaryButton: "PDPL Notice",
  },
} as const;

function getSummaryIcon(name: string) {
  if (name === "cookie") return Cookie;
  if (name === "shield") return ShieldCheck;
  return Settings2;
}

function getCategoryIcon(name: string) {
  if (name === "lock") return Lock;
  if (name === "gauge") return Gauge;
  if (name === "settings") return Settings2;
  return BadgeCheck;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const copy = lang === "en" ? en : tr;
  const pagePath = `/${lang}/cerez-politikasi`;
  const pageUrl = `${SITE_URL}${pagePath}`;

  return {
  title: copy.meta.title,
  description: copy.meta.description,
  keywords: [...copy.meta.keywords],
  alternates: {
    canonical: pagePath,
    languages: {
      tr: `/tr/cerez-politikasi`,
      en: `/en/cerez-politikasi`,
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

export default async function CookiePolicyPage({ params }: PageProps) {
  const { lang } = await params;

  if (lang !== "tr" && lang !== "en") {
    notFound();
  }

  const copy = lang === "en" ? en : tr;
  const withLang = (path: string) => `/${lang}${path}`;
  const pagePath = `/${lang}/cerez-politikasi`;
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
            <div className="max-w-4xl">
              <h2 className="text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                {copy.whatIsCookie.title}
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-700">
                {copy.whatIsCookie.paragraph1}
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700">
                {copy.whatIsCookie.paragraph2}
              </p>
            </div>
          </Container>
        </section>

        <section className="py-14 md:py-20">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                {copy.categories.title}
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-700">
                {copy.categories.intro}
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {copy.categories.items.map((item) => {
                const Icon = getCategoryIcon(item.icon);

                return (
                  <article
                    key={item.title}
                    className="rounded-[24px] border border-[#E6EDF5] bg-white p-6 shadow-sm"
                  >
                    <div className="inline-flex rounded-2xl bg-[#F3F7FB] p-3 text-[#133E87]">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-5 text-xl font-semibold text-[#133E87]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>

                    <div className="mt-5 grid gap-3">
                      {item.examples.map((example) => (
                        <div key={example} className="flex gap-3">
                          <CheckCircle2
                            size={18}
                            className="mt-0.5 shrink-0 text-[#133E87]"
                          />
                          <p className="text-sm leading-6 text-slate-700">{example}</p>
                        </div>
                      ))}
                    </div>
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
                  {copy.purposes.title}
                </h2>

                <div className="mt-6 grid gap-4">
                  {copy.purposes.items.map((item) => (
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
                  {copy.preferences.title}
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-700">
                  {copy.preferences.paragraph1}
                </p>

                <p className="mt-4 text-base leading-8 text-slate-700">
                  {copy.preferences.paragraph2}
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
                  {copy.mandatory.title}
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-700">
                  {copy.mandatory.paragraph1}
                </p>

                <p className="mt-4 text-base leading-8 text-slate-700">
                  {copy.mandatory.paragraph2}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                  {copy.personalData.title}
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-700">
                  {copy.personalData.paragraph1}
                </p>

                <p className="mt-4 text-base leading-8 text-slate-700">
                  {copy.personalData.paragraph2}
                </p>
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
                    href={withLang("/kvkk")}
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