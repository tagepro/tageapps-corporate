// app/kvkk/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  FileText,
  Mail,
  Scale,
  ShieldCheck,
  UserRound,
  MapPin,
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
    title: "KVKK Aydınlatma Metni | Tage Yazılım",
    description:
      "Tage Yazılım KVKK Aydınlatma Metni. Kişisel verilerin hangi amaçlarla işlendiği, hangi yöntemlerle toplandığı, kimlere aktarılabileceği ve ilgili kişi hakları hakkında bilgilendirme.",
    keywords: [
      "kvkk",
      "aydınlatma metni",
      "kişisel verilerin korunması",
      "kişisel veri aydınlatma metni",
      "tage yazılım kvkk",
      "ilgili kişi hakları",
      "6698 sayılı kanun",
    ],
    ogDescription:
      "Kişisel verilerin işlenmesi, aktarılması, toplanması ve ilgili kişi hakları hakkında bilgilendirme.",
    twitterDescription:
      "Tage Yazılım kişisel verilerin korunması ve aydınlatma metni.",
  },

  breadcrumb: {
    home: "Anasayfa",
    current: "KVKK",
  },

  hero: {
    badge: "KVKK Aydınlatma Metni",
    title: "Kişisel verilerin korunması ve aydınlatma metni",
    description1:
      "Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında veri sorumlusu olarak kişisel verilerinizi hangi amaçlarla işlediğimizi, hangi yöntemlerle topladığımızı, kimlere aktarabileceğimizi ve haklarınızı açıklamak amacıyla hazırlanmıştır.",
    description2:
      "Açık rıza gerektiren durumlar ile aydınlatma yükümlülüğü birbirinden ayrı ele alınır. Bu sayfa aydınlatma amacı taşır.",
    primaryButton: "İletişime Geçin",
    secondaryButton: "Gizlilik Politikası",
  },

  officialInfo: {
    label: "Resmi bilgiler",
    title: "Veri sorumlusu ve güncelleme bilgisi",
    companyLabel: "Şirket",
    addressLabel: "Adres",
    emailLabel: "E-posta",
    updatedLabel: "Son güncelleme",
    updatedValue: PAGE_LAST_UPDATED_TR,
  },

  infoCards: [
    {
      icon: "building",
      title: "Veri sorumlusu",
      text: `${COMPANY_NAME}, veri sorumlusu sıfatıyla kişisel verilerinizi işleyebilir.`,
    },
    {
      icon: "shield",
      title: "Aydınlatma amacı",
      text: "Bu metin; hangi verilerin, hangi amaçlarla ve hangi hukuki sebeplere dayanılarak işlendiği konusunda sizi bilgilendirmek için hazırlanmıştır.",
    },
    {
      icon: "scale",
      title: "Hukuki çerçeve",
      text: "Metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma yükümlülüğünün yerine getirilmesi amacıyla sunulur.",
    },
  ],

  sections: {
    controller: {
      title: "1. Veri sorumlusu",
      paragraph: `Kişisel verileriniz, veri sorumlusu sıfatıyla ${COMPANY_NAME} tarafından işlenebilir.`,
      cardTitle: "Veri sorumlusu bilgileri",
    },

    dataCategories: {
      title: "2. İşlenebilecek veri kategorileri",
      items: [
        "Kimlik ve iletişim bilgileri: ad, soyad, e-posta adresi, telefon numarası, şirket adı gibi tarafınızca paylaşılan bilgiler",
        "İletişim formu ve talep içeriği: mesajlarınız, talep ve görüşme notlarınız, ürün ve hizmetlerle ilgili paylaşımlarınız",
        "İşlem güvenliği verileri: IP bilgisi, tarayıcı bilgisi, tarih-saat kayıtları, güvenlik ve doğrulama verileri",
        "Müşteri işlem verileri: teklif, demo, görüşme, iletişim ve talep süreçlerinde oluşan kayıtlar",
      ],
    },

    purposes: {
      title: "3. Kişisel verilerin işlenme amaçları",
      items: [
        "İletişim taleplerinin alınması ve yanıtlanması",
        "Ürün, hizmet, demo ve teklif süreçlerinin yürütülmesi",
        "Müşteri ilişkileri ve iş geliştirme süreçlerinin planlanması",
        "Web sitesi güvenliğinin ve teknik bütünlüğünün sağlanması",
        "Hukuki yükümlülüklerin yerine getirilmesi ve gerektiğinde yetkili kurumlara bilgi sunulması",
      ],
    },

    legalBasis: {
      title: "4. Toplama yöntemi ve hukuki sebepler",
      paragraph:
        "Kişisel verileriniz; web sitesi formları, e-posta, telefon, çevrim içi başvuru ve benzeri iletişim kanalları aracılığıyla otomatik veya kısmen otomatik yollarla elde edilebilir.",
      items: [
        "Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması",
        "Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması",
        "Bir hakkın tesisi, kullanılması veya korunması için veri işlemenin zorunlu olması",
        "İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması",
        "Gerekli hallerde ilgili kişinin açık rızasının bulunması",
      ],
    },

    transfers: {
      title: "5. Kişisel verilerin aktarılması",
      intro:
        "Kişisel verileriniz, ilgili mevzuata ve işleme amaçlarına uygun olarak aşağıdaki taraflarla sınırlı şekilde paylaşılabilir:",
      items: [
        "Yasal yükümlülükler kapsamında yetkili kamu kurum ve kuruluşlarına",
        "Teknik altyapı, barındırma, e-posta ve güvenlik hizmeti alınan iş ortaklarına, yalnızca gerekli olduğu ölçüde",
        "İş süreçlerinin yürütülmesi amacıyla hizmet alınan sınırlı tedarikçi ve danışmanlara, ilgili mevzuata uygun olarak",
      ],
    },

    rights: {
      title: "6. İlgili kişi olarak haklarınız",
      items: [
        "Kişisel veri işlenip işlenmediğini öğrenme",
        "Kişisel verileri işlenmişse buna ilişkin bilgi talep etme",
        "Kişisel verilerin işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme",
        "Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme",
        "Kişisel verilerin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme",
        "İlgili mevzuat çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme",
        "Düzeltme, silme veya yok etme işlemlerinin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme",
        "İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi nedeniyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme",
        "Kanuna aykırı veri işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme",
      ],
    },

    application: {
      title: "7. Başvuru yöntemi",
      paragraph:
        "İlgili kişi olarak haklarınıza ilişkin başvurularınızı, yürürlükteki mevzuata uygun şekilde veri sorumlusuna iletebilirsiniz.",
      cardTitle: "Başvuru iletişim bilgileri",
      emailLabel: "E-posta",
      addressLabel: "Adres",
    },

    updates: {
      title: "8. Metnin güncellenmesi",
      paragraph1:
        "Bu aydınlatma metni, mevzuat değişiklikleri, iş süreçleri veya teknik altyapı değişiklikleri doğrultusunda güncellenebilir.",
      paragraph2:
        "Güncellenmiş metin, yayımlandığı tarihten itibaren geçerli kabul edilir.",
      cardTitle: "Önemli not",
      cardText:
        "Açık rıza gerektiren işlemler için ayrı açık rıza metni kullanılması gerekir; bu sayfa aydınlatma metnidir.",
    },
  },

  cta: {
    title: "KVKK ve veri işleme konularında bizimle iletişime geçin",
    description:
      "Kişisel verilerinizin işlenmesi, haklarınız veya bu metin hakkında sorularınız varsa bizimle iletişime geçebilirsiniz.",
    primaryButton: "İletişime Geçin",
    secondaryButton: "Gizlilik Politikası",
  },
} as const;

const en = {
  meta: {
    title: "PDPL Disclosure Notice | Tage Yazılım",
    description:
      "Tage Yazılım PDPL Disclosure Notice. Information on for what purposes personal data is processed, by which methods it is collected, to whom it may be transferred, and what the rights of the data subject are.",
    keywords: [
      "pdpl",
      "disclosure notice",
      "personal data protection",
      "personal data disclosure notice",
      "tage yazilim pdpl",
      "data subject rights",
      "law no. 6698",
      "kvkk",
    ],
    ogDescription:
      "Information about the processing, transfer, collection of personal data and the rights of the data subject.",
    twitterDescription:
      "Tage Yazılım personal data protection and disclosure notice.",
  },

  breadcrumb: {
    home: "Home",
    current: "PDPL Notice",
  },

  hero: {
    badge: "PDPL Disclosure Notice",
    title: "Personal data protection and disclosure notice",
    description1:
      "This notice has been prepared to explain, within the scope of the Turkish Personal Data Protection Law No. 6698, for what purposes we process your personal data as data controller, by which methods we collect it, to whom we may transfer it, and what your rights are.",
    description2:
      "Cases requiring explicit consent and the disclosure obligation are handled separately. This page serves a disclosure purpose.",
    primaryButton: "Contact Us",
    secondaryButton: "Privacy Policy",
  },

  officialInfo: {
    label: "Official information",
    title: "Data controller and update details",
    companyLabel: "Company",
    addressLabel: "Address",
    emailLabel: "Email",
    updatedLabel: "Last updated",
    updatedValue: PAGE_LAST_UPDATED_EN,
  },

  infoCards: [
    {
      icon: "building",
      title: "Data controller",
      text: `${COMPANY_NAME} may process your personal data in its capacity as data controller.`,
    },
    {
      icon: "shield",
      title: "Purpose of disclosure",
      text: "This notice has been prepared to inform you about which data is processed, for what purposes, and on which legal grounds.",
    },
    {
      icon: "scale",
      title: "Legal framework",
      text: "This notice is provided to fulfill the disclosure obligation under the Turkish Personal Data Protection Law No. 6698.",
    },
  ],

  sections: {
    controller: {
      title: "1. Data controller",
      paragraph: `Your personal data may be processed by ${COMPANY_NAME} in its capacity as data controller.`,
      cardTitle: "Data controller information",
    },

    dataCategories: {
      title: "2. Categories of personal data that may be processed",
      items: [
        "Identity and contact information: information shared by you such as name, surname, email address, phone number, and company name",
        "Contact form and request content: your messages, request and meeting notes, and information you share about products and services",
        "Transaction security data: IP address, browser information, date-time logs, and verification/security data",
        "Customer transaction data: records created during quotation, demo, meeting, communication, and request processes",
      ],
    },

    purposes: {
      title: "3. Purposes of processing personal data",
      items: [
        "Receiving and responding to contact requests",
        "Managing product, service, demo, and proposal processes",
        "Planning customer relations and business development processes",
        "Ensuring website security and technical integrity",
        "Fulfilling legal obligations and providing information to authorized institutions when required",
      ],
    },

    legalBasis: {
      title: "4. Collection methods and legal grounds",
      paragraph:
        "Your personal data may be collected through website forms, email, phone, online applications, and similar communication channels by automated or partially automated means.",
      items: [
        "Being directly related to the establishment or performance of a contract",
        "Being necessary for the data controller to fulfill its legal obligations",
        "Being necessary for the establishment, exercise, or protection of a right",
        "Being necessary for the legitimate interests of the data controller, provided that it does not harm the fundamental rights and freedoms of the data subject",
        "The existence of explicit consent where required",
      ],
    },

    transfers: {
      title: "5. Transfer of personal data",
      intro:
        "Your personal data may be shared in a limited manner with the following parties in accordance with the relevant legislation and processing purposes:",
      items: [
        "Authorized public institutions and organizations within the scope of legal obligations",
        "Business partners providing technical infrastructure, hosting, email, and security services, only to the extent necessary",
        "Limited suppliers and consultants engaged for the execution of business processes, in compliance with the relevant legislation",
      ],
    },

    rights: {
      title: "6. Your rights as a data subject",
      items: [
        "To learn whether personal data is processed",
        "To request information if personal data has been processed",
        "To learn the purpose of processing and whether it is used in accordance with that purpose",
        "To know the third parties to whom personal data is transferred domestically or abroad",
        "To request correction if personal data is incomplete or inaccurate",
        "To request deletion or destruction of personal data within the framework of applicable legislation",
        "To request notification of correction, deletion, or destruction to third parties to whom personal data has been transferred",
        "To object to a result arising against the person through analysis of processed data exclusively by automated systems",
        "To request compensation for damages in case of loss due to unlawful processing of personal data",
      ],
    },

    application: {
      title: "7. Application method",
      paragraph:
        "As a data subject, you may submit your requests regarding your rights to the data controller in accordance with the applicable legislation.",
      cardTitle: "Application contact details",
      emailLabel: "Email",
      addressLabel: "Address",
    },

    updates: {
      title: "8. Updates to this notice",
      paragraph1:
        "This disclosure notice may be updated in line with legal changes, business processes, or technical infrastructure changes.",
      paragraph2:
        "The updated notice is deemed effective from the date it is published.",
      cardTitle: "Important note",
      cardText:
        "For processing activities requiring explicit consent, a separate consent text should be used; this page is a disclosure notice.",
    },
  },

  cta: {
    title: "Contact us regarding PDPL and data processing matters",
    description:
      "If you have questions about the processing of your personal data, your rights, or this notice, you may contact us.",
    primaryButton: "Contact Us",
    secondaryButton: "Privacy Policy",
  },
} as const;

function getInfoIcon(name: string) {
  if (name === "building") return Building2;
  if (name === "shield") return ShieldCheck;
  return Scale;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const copy = lang === "en" ? en : tr;
  const pagePath = `/${lang}/kvkk`;
  const pageUrl = `${SITE_URL}${pagePath}`;

  return {
    title: copy.meta.title,
    description: copy.meta.description,
    keywords: copy.meta.keywords,
    alternates: {
      canonical: pagePath,
      languages: {
        tr: "/tr/kvkk",
        en: "/en/kvkk",
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

export default async function KvkkPage({ params }: PageProps) {
  const { lang } = await params;

  if (lang !== "tr" && lang !== "en") {
    notFound();
  }

  const copy = lang === "en" ? en : tr;
  const withLang = (path: string) => `/${lang}${path}`;
  const pagePath = `/${lang}/kvkk`;
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
              {copy.infoCards.map((item) => {
                const Icon = getInfoIcon(item.icon);

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
                  {copy.sections.controller.title}
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-700">
                  {copy.sections.controller.paragraph}
                </p>

                <div className="mt-6 flex items-start gap-4 rounded-[24px] border border-[#E6EDF5] bg-white p-5 shadow-sm">
                  <div className="inline-flex rounded-2xl bg-[#F3F7FB] p-3 text-[#133E87]">
                    <Building2 size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#133E87]">
                      {copy.sections.controller.cardTitle}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {COMPANY_NAME}
                      <br />
                      {COMPANY_ADDRESS}
                      <br />
                      {COMPANY_EMAIL}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                  {copy.sections.dataCategories.title}
                </h2>

                <div className="mt-6 grid gap-4">
                  {copy.sections.dataCategories.items.map((item) => (
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

              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                  {copy.sections.legalBasis.title}
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-700">
                  {copy.sections.legalBasis.paragraph}
                </p>

                <div className="mt-6 grid gap-4">
                  {copy.sections.legalBasis.items.map((item) => (
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
                  {copy.sections.transfers.title}
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-700">
                  {copy.sections.transfers.intro}
                </p>

                <div className="mt-6 grid gap-4">
                  {copy.sections.transfers.items.map((item) => (
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
                  {copy.sections.rights.title}
                </h2>

                <div className="mt-6 grid gap-4">
                  {copy.sections.rights.items.map((item) => (
                    <div key={item} className="flex gap-3">
                      <UserRound
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
                  {copy.sections.application.title}
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-700">
                  {copy.sections.application.paragraph}
                </p>

                <div className="mt-6 flex items-start gap-4 rounded-[24px] border border-[#E6EDF5] bg-white p-5 shadow-sm">
                  <div className="inline-flex rounded-2xl bg-[#F3F7FB] p-3 text-[#133E87]">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#133E87]">
                      {copy.sections.application.cardTitle}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {copy.sections.application.emailLabel}: {COMPANY_EMAIL}
                      <br />
                      {copy.sections.application.addressLabel}: {COMPANY_ADDRESS}
                    </p>
                  </div>
                </div>
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
                    <FileText size={22} />
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