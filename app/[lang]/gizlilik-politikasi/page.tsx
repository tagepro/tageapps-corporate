// app/gizlilik-politikasi/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Lock,
  Mail,
  ShieldCheck,
  Eye,
  Database,
  FileText,
  CheckCircle2,
  MapPin,
  Building2,
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

const tr = {
  meta: {
    title: "Gizlilik Politikası | Tage Yazılım",
    description:
      "Tage Yazılım gizlilik politikası. Web sitesi üzerinden toplanan bilgilerin hangi amaçlarla işlendiği, nasıl korunduğu ve kullanıcı haklarının nasıl ele alındığı hakkında bilgilendirme.",
    keywords: [
      "gizlilik politikası",
      "privacy policy",
      "tage yazılım gizlilik politikası",
      "kişisel veri",
      "web sitesi gizlilik",
      "çerez politikası",
      "kvkk",
    ],
    ogDescription:
      "Web sitemiz üzerinden toplanan bilgilerin hangi amaçlarla işlendiği ve nasıl korunduğu hakkında bilgilendirme.",
    twitterDescription:
      "Tage Yazılım web sitesi gizlilik politikası ve kullanıcı bilgilendirme metni.",
  },

  breadcrumb: {
    home: "Anasayfa",
    current: "Gizlilik Politikası",
  },

  hero: {
    badge: "Gizlilik Politikası",
    title: "Web sitesi gizlilik yaklaşımımız",
    description1:
      `Bu Gizlilik Politikası, ${COMPANY_NAME} tarafından işletilen web sitesi üzerinden elde edilen bilgilerin hangi amaçlarla işlendiğini, nasıl korunduğunu ve kullanıcı haklarının nasıl ele alındığını açıklamak amacıyla hazırlanmıştır.`,
    description2:
      "Web sitemizi ziyaret ederek, iletişim formunu kullanarak veya bizimle başka yollarla iletişime geçerek paylaştığınız bilgiler; yalnızca hizmet sunumu, iletişim kurulması, güvenlik ve yasal yükümlülüklerin yerine getirilmesi çerçevesinde ele alınır.",
    primaryButton: "İletişime Geçin",
    secondaryButton: "KVKK Metnine Git",
  },

  officialInfo: {
    label: "Resmi bilgiler",
    title: "Veri işleme ve iletişim bilgileri",
    companyLabel: "Şirket",
    addressLabel: "Adres",
    emailLabel: "E-posta",
  },

  summaryCards: [
    {
      icon: "eye",
      title: "Şeffaflık",
      text: "Hangi bilgilerin hangi amaçlarla işlendiğini açık ve anlaşılır biçimde paylaşmayı amaçlarız.",
    },
    {
      icon: "shield",
      title: "Koruma",
      text: "Bize iletilen bilgilerin güvenliğini korumak için uygun teknik ve idari önlemler almaya çalışırız.",
    },
    {
      icon: "database",
      title: "Sınırlı kullanım",
      text: "Toplanan bilgileri yalnızca hizmet sunumu, iletişim ve site güvenliği gibi meşru amaçlarla kullanırız.",
    },
  ],

  sections: {
    collected: {
      title: "1. Hangi bilgileri toplayabiliriz?",
      intro:
        "Web sitemiz üzerinden bize ulaştığınızda, iletişim formunu kullandığınızda veya ürün ve hizmetlerimiz hakkında bilgi talep ettiğinizde aşağıdaki türde bilgiler bize iletilebilir:",
      items: [
        "Ad, soyad, şirket adı, e-posta adresi, telefon numarası gibi iletişim bilgileri",
        "İletişim formu içeriğinde kendi isteğinizle paylaştığınız bilgiler",
        "Web sitesi kullanımına ilişkin teknik veriler, tarayıcı bilgileri ve güvenlik amaçlı kayıtlar",
        "Spam ve kötüye kullanımı önlemeye yönelik doğrulama ve güvenlik verileri",
      ],
    },

    purposes: {
      title: "2. Bu bilgileri hangi amaçlarla kullanırız?",
      items: [
        "İletişim taleplerine yanıt vermek",
        "Ürün ve hizmetlerimiz hakkında bilgi sağlamak",
        "Demo, görüşme veya teklif süreçlerini yürütmek",
        "Web sitesi güvenliğini ve teknik bütünlüğünü korumak",
        "Hizmet kalitesini ve kullanıcı deneyimini geliştirmek",
        "Yasal yükümlülükleri yerine getirmek",
      ],
    },

    methods: {
      title: "3. Bilgiler hangi yollarla elde edilir?",
      paragraph1:
        "Kişisel veriler ve diğer bilgiler; web sitemizi ziyaret etmeniz, iletişim formunu doldurmanız, e-posta ile bizimle iletişime geçmeniz veya hizmetlerimizle ilgili talepte bulunmanız sırasında elde edilebilir.",
      paragraph2:
        "Ayrıca web sitesinin güvenli biçimde çalışmasını sağlamak amacıyla bazı teknik kayıtlar ve güvenlik doğrulama verileri de işlenebilir.",
    },

    sharing: {
      title: "4. Bilgileri kimlerle paylaşabiliriz?",
      intro:
        "Bilgileriniz, kural olarak üçüncü kişilere satılmaz veya ticari amaçla devredilmez. Ancak aşağıdaki durumlarda sınırlı paylaşım söz konusu olabilir:",
      items: [
        "Barındırma, güvenlik, e-posta iletimi veya teknik altyapı hizmeti sağlayan iş ortakları",
        "Yasal yükümlülükler veya resmi makam talepleri",
        "Hizmet sunumu için gerekli ve ölçülü teknik destek süreçleri",
      ],
    },

    protection: {
      title: "5. Bilgilerin korunması",
      paragraph:
        "Tarafımıza iletilen bilgilerin korunması için uygun teknik ve idari tedbirler almaya çalışırız. Amaç; yetkisiz erişim, yanlış kullanım, kayıp, ifşa veya değişiklik riskini azaltmaktır.",
      cardTitle: "Güvenlik yaklaşımı",
      cardText:
        "Veri minimizasyonu, erişim sınırlandırma, güvenlik kontrolleri ve altyapı tedbirleri temel yaklaşımımızdır.",
    },

    retention: {
      title: "6. Saklama süreleri",
      paragraph1:
        "Bilgiler, işlenme amacının gerektirdiği süre boyunca ve varsa ilgili mevzuatın öngördüğü yasal saklama yükümlülükleri çerçevesinde tutulabilir.",
      paragraph2:
        "Saklama süresi sona erdiğinde, ilgili bilgiler silinir, yok edilir veya uygun olduğu ölçüde anonim hale getirilir.",
    },

    rights: {
      title: "7. Kullanıcı hakları",
      paragraph1:
        "İlgili mevzuat kapsamında; kişisel verilerinize ilişkin bilgi talep etme, düzeltme, silme, işlenmesini sınırlandırma veya itiraz etme gibi haklara sahip olabilirsiniz.",
      paragraph2:
        "Bu haklar hakkında daha detaylı bilgi için KVKK metnimizi inceleyebilir veya bizimle iletişime geçebilirsiniz.",
    },

    changes: {
      title: "8. Politika değişiklikleri",
      paragraph:
        "Bu Gizlilik Politikası, ihtiyaç halinde güncellenebilir. Güncellemeler bu sayfada yayımlandığı andan itibaren geçerli kabul edilir.",
      cardTitle: "Güncelleme notu",
      cardText:
        "Gizlilik politikası ile KVKK aydınlatma metni farklı amaçlara hizmet eder. Bu nedenle metinlerin ayrı sayfalarda tutulması doğru yaklaşımdır.",
    },
  },

  cta: {
    title: "Gizlilik ve veri işleme konularında bizimle iletişime geçin",
    description:
      "Gizlilik politikamız, kişisel verilerin işlenmesi veya kullanıcı hakları hakkında sorularınız varsa bizimle iletişime geçebilirsiniz.",
    primaryButton: "İletişime Geçin",
    secondaryButton: "KVKK Metni",
  },
} as const;

const en = {
  meta: {
    title: "Privacy Policy | Tage Yazılım",
    description:
      "Tage Yazılım privacy policy. Information about the purposes for which data collected through the website is processed, how it is protected, and how user rights are handled.",
    keywords: [
      "privacy policy",
      "tage yazilim privacy policy",
      "personal data",
      "website privacy",
      "cookie policy",
      "pdpl",
      "kvkk",
    ],
    ogDescription:
      "Information on the purposes for which data collected through our website is processed and how it is protected.",
    twitterDescription:
      "Tage Yazılım website privacy policy and user information notice.",
  },

  breadcrumb: {
    home: "Home",
    current: "Privacy Policy",
  },

  hero: {
    badge: "Privacy Policy",
    title: "Our website privacy approach",
    description1:
      `This Privacy Policy has been prepared to explain for what purposes the information obtained through the website operated by ${COMPANY_NAME} is processed, how it is protected, and how user rights are handled.`,
    description2:
      "The information you share by visiting our website, using the contact form, or contacting us through other channels is handled only within the scope of service delivery, communication, security, and fulfillment of legal obligations.",
    primaryButton: "Contact Us",
    secondaryButton: "Go to PDPL Notice",
  },

  officialInfo: {
    label: "Official information",
    title: "Data processing and contact details",
    companyLabel: "Company",
    addressLabel: "Address",
    emailLabel: "Email",
  },

  summaryCards: [
    {
      icon: "eye",
      title: "Transparency",
      text: "We aim to explain clearly and understandably which information is processed and for what purposes.",
    },
    {
      icon: "shield",
      title: "Protection",
      text: "We seek to take appropriate technical and administrative measures to protect the security of the information shared with us.",
    },
    {
      icon: "database",
      title: "Limited use",
      text: "We use collected information only for legitimate purposes such as service delivery, communication, and website security.",
    },
  ],

  sections: {
    collected: {
      title: "1. What information may we collect?",
      intro:
        "When you contact us through our website, use the contact form, or request information about our products and services, the following types of information may be shared with us:",
      items: [
        "Contact details such as name, surname, company name, email address, and phone number",
        "Information you voluntarily share in the contact form content",
        "Technical data related to website usage, browser details, and security logs",
        "Verification and security data intended to prevent spam and misuse",
      ],
    },

    purposes: {
      title: "2. For what purposes do we use this information?",
      items: [
        "To respond to contact requests",
        "To provide information about our products and services",
        "To manage demo, meeting, or proposal processes",
        "To protect website security and technical integrity",
        "To improve service quality and user experience",
        "To fulfill legal obligations",
      ],
    },

    methods: {
      title: "3. Through which means is the information obtained?",
      paragraph1:
        "Personal data and other information may be obtained when you visit our website, fill in the contact form, contact us by email, or submit a request related to our services.",
      paragraph2:
        "In addition, certain technical logs and security verification data may be processed in order to ensure that the website operates securely.",
    },

    sharing: {
      title: "4. With whom may we share the information?",
      intro:
        "As a rule, your information is not sold to third parties or transferred for commercial purposes. However, limited sharing may occur in the following cases:",
      items: [
        "Business partners providing hosting, security, email delivery, or technical infrastructure services",
        "Legal obligations or requests from official authorities",
        "Necessary and proportionate technical support processes required for service delivery",
      ],
    },

    protection: {
      title: "5. Protection of information",
      paragraph:
        "We seek to take appropriate technical and administrative measures to protect the information shared with us. The purpose is to reduce the risk of unauthorized access, misuse, loss, disclosure, or alteration.",
      cardTitle: "Security approach",
      cardText:
        "Data minimization, access limitation, security controls, and infrastructure measures form our core approach.",
    },

    retention: {
      title: "6. Retention periods",
      paragraph1:
        "Information may be retained for as long as required by the purpose of processing and, where applicable, within the framework of legal retention obligations set by relevant legislation.",
      paragraph2:
        "When the retention period ends, the relevant information is deleted, destroyed, or anonymized to the extent appropriate.",
    },

    rights: {
      title: "7. User rights",
      paragraph1:
        "Under applicable legislation, you may have rights such as requesting information about your personal data, correction, deletion, restriction of processing, or objection.",
      paragraph2:
        "For more detailed information about these rights, you may review our PDPL notice or contact us.",
    },

    changes: {
      title: "8. Policy changes",
      paragraph:
        "This Privacy Policy may be updated when necessary. Updates are deemed effective from the moment they are published on this page.",
      cardTitle: "Update note",
      cardText:
        "The privacy policy and the PDPL disclosure notice serve different purposes. Therefore, keeping these texts on separate pages is the correct approach.",
    },
  },

  cta: {
    title: "Contact us regarding privacy and data processing matters",
    description:
      "If you have questions about our privacy policy, the processing of personal data, or user rights, you may contact us.",
    primaryButton: "Contact Us",
    secondaryButton: "PDPL Notice",
  },
} as const;

function getSummaryIcon(name: string) {
  if (name === "eye") return Eye;
  if (name === "shield") return ShieldCheck;
  return Database;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const copy = lang === "en" ? en : tr;
  const pagePath = `/${lang}/gizlilik-politikasi`;
  const pageUrl = `${SITE_URL}${pagePath}`;

  return {
    title: copy.meta.title,
    description: copy.meta.description,
    keywords: [...copy.meta.keywords],
    alternates: {
      canonical: pagePath,
      languages: {
        tr: "/tr/gizlilik-politikasi",
        en: "/en/gizlilik-politikasi",
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

export default async function PrivacyPage({ params }: PageProps) {
  const { lang } = await params;

  if (lang !== "tr" && lang !== "en") {
    notFound();
  }

  const copy = lang === "en" ? en : tr;
  const withLang = (path: string) => `/${lang}${path}`;
  const pagePath = `/${lang}/gizlilik-politikasi`;
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
                    href={withLang("/kvkk")}
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
                  {copy.sections.collected.title}
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-700">
                  {copy.sections.collected.intro}
                </p>

                <div className="mt-6 grid gap-4">
                  {copy.sections.collected.items.map((item) => (
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
                  {copy.sections.purposes.title}
                </h2>

                <div className="mt-6 grid gap-4">
                  {copy.sections.purposes.items.map((item) => (
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
            </div>
          </Container>
        </section>

        <section className="py-14 md:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                  {copy.sections.methods.title}
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-700">
                  {copy.sections.methods.paragraph1}
                </p>

                <p className="mt-4 text-base leading-8 text-slate-700">
                  {copy.sections.methods.paragraph2}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                  {copy.sections.sharing.title}
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-700">
                  {copy.sections.sharing.intro}
                </p>

                <div className="mt-6 grid gap-4">
                  {copy.sections.sharing.items.map((item) => (
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
            </div>
          </Container>
        </section>

        <section className="bg-[#F8FAFC] py-14 md:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                  {copy.sections.protection.title}
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-700">
                  {copy.sections.protection.paragraph}
                </p>

                <div className="mt-6 flex items-start gap-4 rounded-[24px] border border-[#E6EDF5] bg-white p-5 shadow-sm">
                  <div className="inline-flex rounded-2xl bg-[#F3F7FB] p-3 text-[#133E87]">
                    <Lock size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#133E87]">
                      {copy.sections.protection.cardTitle}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {copy.sections.protection.cardText}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                  {copy.sections.retention.title}
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-700">
                  {copy.sections.retention.paragraph1}
                </p>

                <p className="mt-4 text-base leading-8 text-slate-700">
                  {copy.sections.retention.paragraph2}
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
                  {copy.sections.rights.title}
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-700">
                  {copy.sections.rights.paragraph1}
                </p>

                <p className="mt-4 text-base leading-8 text-slate-700">
                  {copy.sections.rights.paragraph2}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                  {copy.sections.changes.title}
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-700">
                  {copy.sections.changes.paragraph}
                </p>

                <div className="mt-6 flex items-start gap-4 rounded-[24px] border border-[#E6EDF5] bg-white p-5 shadow-sm">
                  <div className="inline-flex rounded-2xl bg-[#F3F7FB] p-3 text-[#133E87]">
                    <FileText size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#133E87]">
                      {copy.sections.changes.cardTitle}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {copy.sections.changes.cardText}
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