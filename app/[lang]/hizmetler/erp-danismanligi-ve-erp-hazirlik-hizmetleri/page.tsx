// app/[lang]/hizmetler/erp-danismanligi-ve-erp-hazirlik-hizmetleri/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ClipboardList,
  Database,
  GitBranch,
  Layers3,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import Container from "@/components/layout/Container";

type PageProps = {
  params: Promise<{ lang: string }>;
};

const SITE_URL = "https://www.tageapps.com";

const tr = {
  meta: {
    title: "ERP Danışmanlığı ve ERP Hazırlık Hizmetleri | Tage Yazılım",
    description:
      "ERP danışmanlığı ve ERP hazırlık hizmetleri ile süreçlerinizi netleştirin, ERP geçişinizi daha sağlam zemine oturtun. SAP ERP, IFS ERP, ERP sistemi ve kurumsal kaynak planlaması odaklı yaklaşım.",
    keywords: [
      "erp",
      "erp danışmanlığı",
      "erp danışmanı",
      "erp çözümleri",
      "erp sistemi",
      "erp programı",
      "kurumsal kaynak planlaması",
      "erp uzmanı",
      "erp uzmani",
      "sap erp",
      "sap erp sistemi",
      "ifs erp",
      "erp yazılımları karşılaştırma",
      "erp yöneticisi",
      "erp hazırlık",
      "erp süreç danışmanlığı",
      "erp geçiş hazırlığı",
    ],
    ogDescription:
      "ERP geçişi öncesinde süreçlerinizi, rollerinizi ve iş akışlarınızı netleştirerek daha sağlıklı ERP hazırlık yapısı kurun.",
    twitterDescription:
      "ERP danışmanlığı, ERP hazırlık ve süreç netleştirme odaklı hizmet yaklaşımı.",
  },

  breadcrumb: {
    home: "Anasayfa",
    services: "Hizmetler",
    current: "ERP Danışmanlığı ve ERP Hazırlık Hizmetleri",
  },

  hero: {
    badge: "Hizmetlerimiz",
    title: "ERP Danışmanlığı ve ERP Hazırlık Hizmetleri",
    description1:
      "ERP danışmanlığı, ERP sistemi yatırımının yalnızca yazılım seçimi olmadığını; süreç, organizasyon, sorumluluk ve hazırlık seviyesinin birlikte ele alınması gerektiğini kabul eden yaklaşımdır.",
    description2:
      "Tage Yazılım olarak ERP danışmanlığı, ERP danışmanı desteği, ERP çözümleri değerlendirmesi, ERP programı hazırlığı, kurumsal kaynak planlaması yaklaşımı, SAP ERP ve IFS ERP bakışı ile şirketlerin ERP öncesi süreç hazırlığını daha güçlü zemine oturtuyoruz.",
    primaryButton: "Görüşme / Demo Talep Et",
    secondaryButton: "Sadi’yi İncele",
    summaryTitle: "Bu hizmetin odağı",
    summaryHeading: "ERP öncesi hazırlığı güçlendirmek",
    summaryText:
      "Süreç netliği, organizasyon hazırlığı, rol-sorumluluk yapısı, ERP geçiş riski ve sistem seçimi değerlendirmesini bir arada ele alırız.",
    summaryItems: [
      "ERP hazırlık görünürlüğü",
      "Süreç standardizasyonu",
      "SAP ERP / IFS ERP bakışı",
      "ERP geçişi için daha net zemin",
    ],
  },

  intro: {
    title: "ERP projeleri neden çoğu zaman zorlanır?",
    description1:
      "ERP sistemi yatırımları genellikle yazılım seçimi üzerinden konuşulur. Oysa asıl başarı, ERP öncesinde süreçlerin, rollerin, veri ihtiyaçlarının ve organizasyon hazırlığının ne kadar net olduğuna bağlıdır.",
    description2:
      "ERP danışmanlığı tarafında en sık gördüğümüz konu; şirketin ERP programı beklentisinin yüksek, ancak süreç netliğinin ve hazırlık seviyesinin düşük olmasıdır. Bu yüzden ERP hazırlık hizmeti kritik hale gelir.",
  },

  painPoints: [
    {
      icon: "workflow",
      title: "ERP öncesi süreç netliğinin zayıf kalması",
      description:
        "Süreçler, rol dağılımları ve onay akışları net değilse ERP projesi sadece yazılım kurulumu gibi algılanır ve beklenen verim alınamaz.",
    },
    {
      icon: "clipboard",
      title: "Departmanlar arası işleyişin tanımsız olması",
      description:
        "Üretim, satınalma, depo, lojistik, finans ve insan kaynakları arasındaki geçişler netleşmediğinde ERP sistemi üzerinde sağlıklı kurgu kurmak zorlaşır.",
    },
    {
      icon: "database",
      title: "ERP yatırımı için hazırlık seviyesinin görünmemesi",
      description:
        "Kurumsal kaynak planlaması yatırımı yapılır; ancak hangi süreç hazır, hangi alan riskli, hangi veri ve organizasyon eksikliği var soruları açık kalır.",
    },
  ],

  scope: {
    title: "ERP danışmanlığı kapsamında hangi yapıları ele alıyoruz?",
    description:
      "Bu hizmette amaç; yalnızca ERP uzmanı veya ERP danışmanı desteği vermek değil, şirketin kurumsal kaynak planlaması yatırımına gerçekten hazır olup olmadığını netleştirmektir.",
  },

  solutionBlocks: [
    {
      icon: "branch",
      title: "ERP öncesi mevcut durum analizi",
      description:
        "Mevcut işleyişin, ana süreç-alt süreç yapısının ve süreçler arası geçişlerin daha görünür hale gelmesini sağlarız.",
    },
    {
      icon: "workflow",
      title: "Süreç netleştirme ve süreç standardizasyonu",
      description:
        "ERP danışmanlığı yaklaşımında süreçleri sadeleştirir, tekrarları azaltır ve daha uygulanabilir kurumsal yapı kurarız.",
    },
    {
      icon: "layers",
      title: "Rol, görev ve sorumlulukların netleştirilmesi",
      description:
        "Süreç sahipliği, kullanıcı rolleri, onay noktaları ve karar alanlarını ERP geçişine uygun şekilde netleştiririz.",
    },
    {
      icon: "building",
      title: "Departman bazlı ERP hazırlık yaklaşımı",
      description:
        "Üretimden finansa, lojistikten insan kaynaklarına kadar farklı fonksiyonları tek tek ele alarak hazırlık yaparız.",
    },
    {
      icon: "briefcase",
      title: "ERP yazılımları karşılaştırma ve ihtiyaç eşleştirme",
      description:
        "ERP programı veya ERP çözümleri değerlendirilirken, işletmenin ihtiyacına göre hangi yapının daha uygun olduğuna karar desteği veririz.",
    },
    {
      icon: "shield",
      title: "ERP geçiş riski ve hazırlık görünürlüğü",
      description:
        "ERP geçişi öncesinde riskli alanları, eksik hazırlıkları ve öncelikli aksiyonları daha somut şekilde görünür hale getiririz.",
    },
  ],

  expertise: {
    title: "SAP ERP ve IFS ERP bilgi birikimi",
    description1:
      "ERP çözümleri tarafında her kurumun ihtiyacı aynı değildir. Bu nedenle ERP danışmanlığı yaklaşımında yalnızca teorik süreç bakışı değil, gerçek ERP sahası bilgisi de önemlidir.",
    description2:
      "SAP ERP ve IFS ERP bilgi birikimi sayesinde, işletmenin ihtiyaçlarını daha gerçekçi değerlendirmek; süreç, veri ve organizasyon tarafını daha sağlam temelde hazırlamak mümkündür.",
    cardTitle: "Bu hizmetin güçlü yanları",
    items: [
      "25 yılı aşkın süreç ve ERP deneyimi",
      "SAP ERP ve IFS ERP bilgi birikimi",
      "Üretim, finans, lojistik ve insan kaynakları süreçlerine hakimiyet",
      "ERP öncesi hazırlık + süreç netleştirme + yönetim görünürlüğü yaklaşımı",
      "Danışmanlık ile yazılım düşüncesini birleştiren kurumsal bakış",
    ],
  },

  erpFit: {
    title: "ERP yazılımları karşılaştırma ve ihtiyaç uyumu",
    description1:
      "ERP yazılımları karşılaştırma süreci sadece fiyat veya marka üzerinden ilerlememelidir. ERP sistemi seçimi; süreç yapısı, şirket büyüklüğü, organizasyon kültürü ve kullanım hedefleri ile uyumlu olmalıdır.",
    description2:
      "Bu nedenle ERP programı değerlendirmesinde şirketin gerçekten neye ihtiyaç duyduğunu netleştirir, sonra sistem konuşuruz.",
  },

  sadi: {
    title: "Sadi ile doğal bağlantı",
    description1:
      "Sadi, ERP öncesi süreç görünürlüğünü ve süreç olgunluğu seviyesini daha ölçülebilir hale getiren önemli ürün katmanıdır. Bu sayede hangi süreçlerin daha hazır, hangi alanların daha riskli olduğu daha net okunur.",
    description2:
      "Yani bu hizmet, danışmanlık tarafında hazırlığı kurarken; Sadi bu hazırlığı görünür ve sürdürülebilir hale getiren yazılım desteğini sunar.",
  },

  useCases: {
    title: "Kimler için uygundur?",
    description:
      "Bu hizmet; ERP’ye geçmek isteyen, mevcut ERP kurulumundan yeterli verim alamayan ya da ERP uzmanı / ERP danışmanı desteği arayan kurumlar için uygundur.",
    items: [
      "ERP’ye geçmeyi planlayan ancak süreçlerini önce netleştirmek isteyen şirketler",
      "Mevcut ERP sistemi olan ama verim alamayan kurumlar",
      "SAP ERP veya IFS ERP tarafında değerlendirme yapmak isteyen işletmeler",
      "ERP danışmanı veya ERP uzmanı desteği arayan firmalar",
      "Kurumsal kaynak planlaması yatırımını daha sağlam zemine oturtmak isteyen yönetimler",
      "ERP projesinden önce süreç standardizasyonu kurmak isteyen yapılar",
    ],
  },

  faq: {
    title: "Sık sorulan sorular",
    description:
      "Bu bölüm, hem kullanıcıların hızlı cevap almasına hem de sayfanın answer engine ve AI aramaları için daha net okunmasına yardımcı olur.",
    items: [
      {
        question: "ERP danışmanlığı nedir?",
        answer:
          "ERP danışmanlığı; şirketin süreçlerini, organizasyon yapısını, rol dağılımlarını ve sistem ihtiyaçlarını değerlendirerek ERP yatırımının daha doğru kurgulanmasını sağlayan danışmanlık yaklaşımıdır.",
      },
      {
        question: "ERP hazırlık neden önemlidir?",
        answer:
          "ERP hazırlık yapılmadan başlanan projelerde süreç belirsizliği, rol karışıklığı, veri problemi ve zayıf kullanıcı sahipliği daha sık görülür. Bu nedenle ERP öncesi hazırlık kritik adımdır.",
      },
      {
        question: "SAP ERP ve IFS ERP konusunda destek veriyor musunuz?",
        answer:
          "Evet. Ekip bilgi birikimi içinde SAP ERP ve IFS ERP tecrübesi bulunduğu için bu alanlarda değerlendirme, hazırlık ve süreç danışmanlığı desteği verilebilir.",
      },
      {
        question:
          "ERP programı seçimi ve ERP yazılımları karşılaştırma desteği sağlıyor musunuz?",
        answer:
          "Evet. ERP programı veya ERP çözümleri değerlendirilirken, işletmenin süreç yapısı ve ihtiyaçları ile uyumlu seçim yapılmasına destek oluruz.",
      },
      {
        question: "Bu hizmet Sadi ile nasıl bağlanır?",
        answer:
          "Sadi, ERP öncesi süreç görünürlüğü, süreç olgunluğu, risk alanları ve gelişim önceliklerini daha ölçülebilir hale getiren ürün katmanı olarak bu hizmeti destekler.",
      },
    ],
  },

  cta: {
    title: "ERP’ye geçmeden önce süreçlerinizi ve organizasyonunuzu hazırlayın",
    description:
      "ERP danışmanlığı ve ERP hazırlık hizmetleri ile süreçlerinizi daha net, daha görünür ve daha uygulanabilir hale getirmek için bizimle iletişime geçin.",
    primaryButton: "İletişime Geçin",
    secondaryButton: "Sadi’yi İncele",
  },

  schema: {
    serviceName: "ERP Danışmanlığı ve ERP Hazırlık Hizmetleri",
    serviceType:
      "ERP Danışmanlığı, ERP Hazırlık, ERP Süreç Danışmanlığı, Kurumsal Kaynak Planlaması Hazırlık",
    serviceDescription:
      "ERP danışmanlığı ve ERP hazırlık hizmetleri ile süreçlerin netleştirilmesi, organizasyonun hazırlanması, ERP geçiş risklerinin görünür hale getirilmesi ve SAP ERP / IFS ERP odaklı değerlendirme desteği sunulur.",
  },
} as const;

const en = {
  meta: {
    title: "ERP Consulting and ERP Readiness Services | Tage Yazılım",
    description:
      "Clarify your processes and place your ERP transition on a stronger foundation with ERP consulting and ERP readiness services. A process-focused approach around SAP ERP, IFS ERP, ERP systems, and enterprise resource planning.",
    keywords: [
      "erp",
      "erp consulting",
      "erp consultant",
      "erp solutions",
      "erp system",
      "erp software",
      "enterprise resource planning",
      "erp expert",
      "sap erp",
      "sap erp system",
      "ifs erp",
      "erp software comparison",
      "erp manager",
      "erp readiness",
      "erp process consulting",
      "erp transition readiness",
    ],
    ogDescription:
      "Build a healthier ERP readiness structure by clarifying your processes, roles, and workflows before ERP transition.",
    twitterDescription:
      "A service approach focused on ERP consulting, ERP readiness, and process clarification.",
  },

  breadcrumb: {
    home: "Home",
    services: "Services",
    current: "ERP Consulting and ERP Readiness Services",
  },

  hero: {
    badge: "Our Services",
    title: "ERP Consulting and ERP Readiness Services",
    description1:
      "ERP consulting is an approach that accepts ERP investment is not only software selection; process, organization, responsibilities, and readiness level must be handled together.",
    description2:
      "At Tage Yazılım, we strengthen companies’ pre-ERP process readiness through ERP consulting, ERP consultant support, ERP solution evaluation, ERP software readiness, enterprise resource planning perspective, and SAP ERP / IFS ERP experience.",
    primaryButton: "Request Meeting / Demo",
    secondaryButton: "Explore Sadi",
    summaryTitle: "Focus of this service",
    summaryHeading: "Strengthening readiness before ERP",
    summaryText:
      "We address process clarity, organizational readiness, role-responsibility structure, ERP transition risk, and system evaluation together.",
    summaryItems: [
      "ERP readiness visibility",
      "Process standardization",
      "SAP ERP / IFS ERP perspective",
      "A clearer foundation for ERP transition",
    ],
  },

  intro: {
    title: "Why do ERP projects often struggle?",
    description1:
      "ERP system investments are usually discussed in terms of software selection. But actual success depends on how clearly processes, roles, data needs, and organizational readiness are defined before ERP.",
    description2:
      "What we most often see in ERP consulting is that companies have high expectations from the ERP software, but low clarity in processes and low preparation level. That is why ERP readiness services become critical.",
  },

  painPoints: [
    {
      icon: "workflow",
      title: "Weak process clarity before ERP",
      description:
        "If processes, role distributions, and approval flows are unclear, the ERP project is perceived only as software installation and the expected efficiency is not achieved.",
    },
    {
      icon: "clipboard",
      title: "Undefined interdepartmental operation",
      description:
        "When transitions between production, procurement, warehouse, logistics, finance, and HR are unclear, it becomes difficult to build a healthy structure on the ERP system.",
    },
    {
      icon: "database",
      title: "Lack of visibility into readiness for ERP investment",
      description:
        "Enterprise resource planning investment is made, but questions remain open: which process is ready, which areas are risky, and what data or organizational gaps exist.",
    },
  ],

  scope: {
    title: "What structures do we address within ERP consulting?",
    description:
      "The goal of this service is not merely to provide ERP expert or ERP consultant support, but to clarify whether the company is truly ready for its enterprise resource planning investment.",
  },

  solutionBlocks: [
    {
      icon: "branch",
      title: "Current state analysis before ERP",
      description:
        "We make the current operation, main process-subprocess structure, and inter-process transitions more visible.",
    },
    {
      icon: "workflow",
      title: "Process clarification and process standardization",
      description:
        "Within the ERP consulting approach, we simplify processes, reduce repetition, and establish a more applicable corporate structure.",
    },
    {
      icon: "layers",
      title: "Clarifying roles, duties, and responsibilities",
      description:
        "We clarify process ownership, user roles, approval points, and decision areas in a way suitable for ERP transition.",
    },
    {
      icon: "building",
      title: "Department-based ERP readiness approach",
      description:
        "We prepare by addressing different functions one by one, from production to finance, from logistics to human resources.",
    },
    {
      icon: "briefcase",
      title: "ERP software comparison and needs matching",
      description:
        "When evaluating ERP software or ERP solutions, we support decision-making on which structure is more suitable based on the organization’s needs.",
    },
    {
      icon: "shield",
      title: "ERP transition risk and readiness visibility",
      description:
        "Before ERP transition, we make risky areas, preparation gaps, and priority actions more concrete and visible.",
    },
  ],

  expertise: {
    title: "SAP ERP and IFS ERP know-how",
    description1:
      "Every organization does not need the same ERP solution. Therefore, in the ERP consulting approach, not only a theoretical process perspective but also real ERP field knowledge is important.",
    description2:
      "Thanks to SAP ERP and IFS ERP know-how, it becomes possible to evaluate the organization’s needs more realistically and prepare the process, data, and organizational side on a stronger basis.",
    cardTitle: "Core strengths of this service",
    items: [
      "More than 25 years of process and ERP experience",
      "SAP ERP and IFS ERP know-how",
      "Strong command of production, finance, logistics, and HR processes",
      "Pre-ERP readiness + process clarification + management visibility approach",
      "A corporate perspective that combines consulting and software thinking",
    ],
  },

  erpFit: {
    title: "ERP software comparison and needs alignment",
    description1:
      "ERP software comparison should not progress only through price or brand. ERP system selection must align with process structure, company size, organizational culture, and usage goals.",
    description2:
      "For this reason, in ERP software evaluation we first clarify what the organization truly needs, and then discuss the system.",
  },

  sadi: {
    title: "Natural connection with Sadi",
    description1:
      "Sadi is an important product layer that makes pre-ERP process visibility and process maturity level more measurable. This allows clearer reading of which processes are more ready and which areas are riskier.",
    description2:
      "So while this service builds readiness on the consulting side, Sadi provides the software support that makes that readiness visible and sustainable.",
  },

  useCases: {
    title: "Who is it suitable for?",
    description:
      "This service is suitable for organizations planning to move to ERP, not getting enough value from an existing ERP setup, or seeking ERP expert / ERP consultant support.",
    items: [
      "Companies planning ERP but wanting to clarify their processes first",
      "Organizations with an existing ERP system but not getting enough efficiency",
      "Businesses wanting evaluation on SAP ERP or IFS ERP",
      "Firms looking for ERP consultant or ERP expert support",
      "Management teams wanting to place enterprise resource planning investment on a stronger foundation",
      "Structures wanting to establish process standardization before the ERP project",
    ],
  },

  faq: {
    title: "Frequently asked questions",
    description:
      "This section helps users get quick answers and also makes the page more clearly readable for answer engines and AI search.",
    items: [
      {
        question: "What is ERP consulting?",
        answer:
          "ERP consulting is an advisory approach that evaluates the company’s processes, organizational structure, role distribution, and system needs to help design ERP investment more accurately.",
      },
      {
        question: "Why is ERP readiness important?",
        answer:
          "In projects started without ERP readiness, process ambiguity, role confusion, data problems, and weak user ownership are seen more often. That is why pre-ERP readiness is a critical step.",
      },
      {
        question: "Do you provide support on SAP ERP and IFS ERP?",
        answer:
          "Yes. Since the team has experience in SAP ERP and IFS ERP, support can be provided in evaluation, readiness, and process consulting in these areas.",
      },
      {
        question:
          "Do you provide support for ERP software selection and ERP software comparison?",
        answer:
          "Yes. While evaluating ERP software or ERP solutions, we support making a choice aligned with the organization’s process structure and needs.",
      },
      {
        question: "How does this service connect with Sadi?",
        answer:
          "Sadi supports this service as a product layer that makes pre-ERP process visibility, process maturity, risk areas, and development priorities more measurable.",
      },
    ],
  },

  cta: {
    title: "Prepare your processes and organization before moving to ERP",
    description:
      "Contact us to make your processes clearer, more visible, and more applicable with ERP consulting and ERP readiness services.",
    primaryButton: "Contact Us",
    secondaryButton: "Explore Sadi",
  },

  schema: {
    serviceName: "ERP Consulting and ERP Readiness Services",
    serviceType:
      "ERP Consulting, ERP Readiness, ERP Process Consulting, Enterprise Resource Planning Readiness",
    serviceDescription:
      "ERP consulting and ERP readiness services provide support for clarifying processes, preparing the organization, making ERP transition risks visible, and evaluation with a SAP ERP / IFS ERP perspective.",
  },
} as const;

function getIcon(name: string) {
  if (name === "workflow") return Workflow;
  if (name === "clipboard") return ClipboardList;
  if (name === "database") return Database;
  if (name === "branch") return GitBranch;
  if (name === "layers") return Layers3;
  if (name === "building") return Building2;
  if (name === "briefcase") return BriefcaseBusiness;
  return ShieldCheck;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const copy = lang === "en" ? en : tr;
  const pagePath = `/${lang}/hizmetler/erp-danismanligi-ve-erp-hazirlik-hizmetleri`;
  const pageUrl = `${SITE_URL}${pagePath}`;

  return {
    title: copy.meta.title,
    description: copy.meta.description,
    keywords: copy.meta.keywords,
    alternates: {
      canonical: pagePath,
      languages: {
        tr: "/tr/hizmetler/erp-danismanligi-ve-erp-hazirlik-hizmetleri",
        en: "/en/hizmetler/erp-danismanligi-ve-erp-hazirlik-hizmetleri",
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

export default async function ErpDanismanligiVeErpHazirlikHizmetleriPage({
  params,
}: PageProps) {
  const { lang } = await params;

  if (lang !== "tr" && lang !== "en") {
    notFound();
  }

  const copy = lang === "en" ? en : tr;
  const withLang = (path: string) => `/${lang}${path}`;
  const pagePath = `/${lang}/hizmetler/erp-danismanligi-ve-erp-hazirlik-hizmetleri`;
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
        name: copy.breadcrumb.services,
        item: `${SITE_URL}/${lang}/hizmetler`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: copy.breadcrumb.current,
        item: pageUrl,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: copy.schema.serviceName,
    serviceType: copy.schema.serviceType,
    url: pageUrl,
    description: copy.schema.serviceDescription,
    areaServed: {
      "@type": "Country",
      name: lang === "en" ? "Turkey" : "Türkiye",
    },
    provider: {
      "@type": "Organization",
      name: "Tage Yazılım",
      url: SITE_URL,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-white text-slate-800">
        <section className="bg-gradient-to-b from-[#F3F3E0] via-white to-white pt-16 pb-14 md:pt-24 md:pb-20">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
                  <ol className="flex flex-wrap items-center gap-2">
                    <li>
                      <Link href={withLang("")} className="transition hover:text-[#133E87]">
                        {copy.breadcrumb.home}
                      </Link>
                    </li>
                    <li>/</li>
                    <li>
                      <Link
                        href={withLang("/hizmetler")}
                        className="transition hover:text-[#133E87]"
                      >
                        {copy.breadcrumb.services}
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

                <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-[#133E87] md:text-5xl">
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
                    href={withLang("/sadi")}
                    className="inline-flex items-center gap-2 rounded-full border border-[#CBDCEB] bg-white px-6 py-3 text-sm font-semibold text-[#133E87] transition hover:bg-[#F8FAFC]"
                  >
                    {copy.hero.secondaryButton}
                  </Link>
                </div>
              </div>

              <div className="rounded-[28px] border border-[#CBDCEB] bg-white p-6 shadow-[0_20px_60px_rgba(19,62,135,0.08)] md:p-8">
                <div className="rounded-2xl bg-[#F8FAFC] p-5">
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#608BC1]">
                    {copy.hero.summaryTitle}
                  </div>
                  <div className="mt-3 text-2xl font-semibold text-[#133E87]">
                    {copy.hero.summaryHeading}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {copy.hero.summaryText}
                  </p>
                </div>

                <div className="mt-5 space-y-3">
                  {copy.hero.summaryItems.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-[#E7EEF6] px-4 py-3"
                    >
                      <CheckCircle2 size={18} className="text-[#133E87]" />
                      <span className="text-sm font-medium text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-14 md:py-20">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                {copy.intro.title}
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-700">
                {copy.intro.description1}
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700">
                {copy.intro.description2}
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {copy.painPoints.map((item) => {
                const Icon = getIcon(item.icon);

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
                {copy.scope.title}
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-700">
                {copy.scope.description}
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {copy.solutionBlocks.map((item) => {
                const Icon = getIcon(item.icon);

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
                  </article>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="py-14 md:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                  {copy.expertise.title}
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-700">
                  {copy.expertise.description1}
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  {copy.expertise.description2}
                </p>
              </div>

              <div className="rounded-[28px] border border-[#E6EDF5] bg-white p-6 md:p-8">
                <h3 className="text-xl font-semibold text-[#133E87]">
                  {copy.expertise.cardTitle}
                </h3>

                <div className="mt-6 grid gap-4">
                  {copy.expertise.items.map((item) => (
                    <div key={item} className="flex gap-3">
                      <BadgeCheck
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

        <section className="bg-[#F3F3E0] py-14 md:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                  {copy.erpFit.title}
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-700">
                  {copy.erpFit.description1}
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  {copy.erpFit.description2}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                  {copy.sadi.title}
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-700">
                  {copy.sadi.description1}
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  {copy.sadi.description2}
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-14 md:py-20">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                {copy.useCases.title}
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-700">
                {copy.useCases.description}
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {copy.useCases.items.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-[22px] border border-[#E6EDF5] bg-white px-5 py-5"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-[#133E87]"
                  />
                  <p className="text-sm leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-[#F8FAFC] py-14 md:py-20">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                {copy.faq.title}
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-700">
                {copy.faq.description}
              </p>
            </div>

            <div className="mt-10 space-y-4">
              {copy.faq.items.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-[24px] border border-[#E6EDF5] bg-white shadow-sm open:shadow-md"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left">
                    <span className="text-lg font-semibold text-[#133E87]">
                      {item.question}
                    </span>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#CBDCEB] text-lg font-medium text-[#133E87] transition-transform duration-200 group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <div className="border-t border-[#EEF3F8] px-6 py-5">
                    <p className="text-sm leading-7 text-slate-600">{item.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16 md:py-24">
          <Container>
            <div className="rounded-[32px] border border-[#CBDCEB] bg-gradient-to-br from-[#F3F3E0] via-white to-[#F8FAFC] px-6 py-10 text-center shadow-sm md:px-10 md:py-14">
              <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                {copy.cta.title}
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
                {copy.cta.description}
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href={withLang("/iletisim")}
                  className="inline-flex items-center gap-2 rounded-full bg-[#133E87] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                >
                  {copy.cta.primaryButton}
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href={withLang("/sadi")}
                  className="inline-flex items-center gap-2 rounded-full border border-[#CBDCEB] bg-white px-6 py-3 text-sm font-semibold text-[#133E87] transition hover:bg-[#F8FAFC]"
                >
                  {copy.cta.secondaryButton}
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}