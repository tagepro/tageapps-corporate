// app/[lang]/blog/is-surec-analizi-nedir/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  HelpCircle,
  SearchCheck,
} from "lucide-react";
import Container from "@/components/layout/Container";

type PageProps = {
  params: Promise<{ lang: string }>;
};

const SITE_URL = "https://www.tageapps.com";
const SLUG = "is-surec-analizi-nedir";

const tr = {
  meta: {
    title:
      "İş Süreç Analizi Nedir? Şirketlerde Süreç Analizi Nasıl Yapılır? | Tage Yazılım",
    description:
      "İş süreç analizi nedir, neden yapılır ve şirketlerde nasıl uygulanır? Süreç analizi, süreç haritalama, darboğaz tespiti ve iyileştirme yaklaşımını adım adım öğrenin.",
  },

  breadcrumb: {
    home: "Anasayfa",
    blog: "Blog",
    current: "İş Süreç Analizi Nedir?",
  },

  article: {
    category: "Süreç Analizi",
    readTime: "8 dk okuma",
    title: "İş Süreç Analizi Nedir? Şirketlerde Süreç Analizi Nasıl Yapılır?",
    excerpt:
      "İş süreç analizi, bir şirketin işlerinin gerçekte nasıl yürüdüğünü anlamasını sağlayan temel çalışmalardan biridir. Süreçler görünür hale gelmeden darboğazları görmek, verimsizlikleri azaltmak ve dijital dönüşüm ya da ERP gibi yatırımları sağlıklı zemine oturtmak zordur.",
  },

  quickAnswer: {
    title: "Kısa cevap",
    items: [
      "İş süreç analizi, işin şirkette gerçekte nasıl yürüdüğünü görünür hale getirir.",
      "Amaç sadece akış çizmek değil; darboğazları, tekrar işleri, riskleri ve gelişim alanlarını belirlemektir.",
      "Süreç analizi; süreç haritalama, süreç iyileştirme, ERP hazırlık ve dijital dönüşüm için temel adımdır.",
      "Doğru yapıldığında süreçler standartlaşır, öncelikler netleşir ve aksiyon planı oluşur.",
    ],
  },

  sections: [
    {
      title: "İş süreç analizi nedir?",
      paragraphs: [
        "İş süreç analizi, bir işin kurum içinde gerçekte nasıl ilerlediğini adım adım inceleyen çalışmadır. Buradaki amaç yalnızca süreci tarif etmek değildir. Asıl amaç; işin kim tarafından başlatıldığını, hangi adımlardan geçtiğini, nerede beklediğini, hangi onaylara uğradığını, hangi noktalarda tekrar iş oluştuğunu ve hangi alanlarda risk bulunduğunu görünür hale getirmektir.",
        "Birçok işletmede süreçler aslında vardır, ancak çoğu zaman yazılı değildir ya da yazılı olsa bile gerçek hayattaki işleyişi tam yansıtmaz. Bu nedenle yöneticiler, ekipler ve departmanlar aynı süreci farklı biçimde tarif edebilir. İş süreç analizi bu dağınık tabloyu netleştirir.",
      ],
    },
    {
      title: "Neden iş süreç analizi yapılmalıdır?",
      paragraphs: [
        "Şirketlerde sorunların önemli bir kısmı, sürecin kendisinden çok sürecin görünür olmamasından kaynaklanır. İşler yavaşlar, tekrar eden adımlar artar, onaylar uzar, ekipler birbirini bekler ve yönetim çoğu zaman gerçek problemi geç fark eder.",
      ],
      bullets: [
        "Mevcut durumu net görmek",
        "Darboğazları tespit etmek",
        "Süreçleri standartlaştırmak",
        "İyileştirme alanlarını belirlemek",
        "ERP ve dijital dönüşüm hazırlığını güçlendirmek",
      ],
    },
    {
      title: "İş süreç analizi nasıl yapılır?",
      paragraphs: [
        "Sağlıklı bir süreç analizi çalışması sistematik ilerlemelidir. Önce analiz edilecek süreç seçilir, sonra mevcut durum anlaşılır, ardından süreç haritası çıkarılır, darboğaz ve riskler belirlenir, hedef süreç kurgulanır ve son aşamada iyileştirme aksiyonları netleştirilir.",
      ],
      bullets: [
        "Analiz edilecek süreci seç",
        "Mevcut durumu anlamaya odaklan",
        "Süreç haritasını çıkar",
        "Darboğaz ve riskleri tespit et",
        "Hedef süreci tasarla",
        "İyileştirme aksiyonlarını netleştir",
      ],
    },
    {
      title: "Süreç analizi ile süreç haritalama aynı şey midir?",
      paragraphs: [
        "Hayır. Süreç analizi işleyişi anlamaya ve yorumlamaya odaklanır. Süreç haritalama ise bu işleyişi görünür hale getiren görsel veya yapısal ifadedir.",
        "Güçlü çalışma, analiz ve haritalamanın birlikte yapılmasıyla oluşur. Sadece harita çizmek gerçek problemi çözmez; sadece analiz yapmak da ortak görünürlük sağlamaz.",
      ],
    },
    {
      title: "Şirketlerde en sık görülen süreç analizi problemleri",
      bullets: [
        "Süreçlerin kişilere bağlı olması",
        "Aynı işin farklı ekiplerde farklı yapılması",
        "Onay mekanizmalarının gereğinden ağır olması",
        "Ölçüm eksikliği",
        "ERP öncesi hazırlık eksikliği",
      ],
    },
    {
      title: "İş süreç analizi hangi alanlarda uygulanabilir?",
      bullets: [
        "Satış ve tekliften siparişe süreçleri",
        "Satın alma ve tedarikçi yönetimi",
        "Üretim planlama ve operasyon akışları",
        "Kalite kontrol ve uygunsuzluk yönetimi",
        "Depo ve sevkiyat süreçleri",
        "Finans onay ve kontrol akışları",
        "İnsan kaynakları işe alım ve izin süreçleri",
        "Müşteri talep ve destek yönetimi",
      ],
    },
    {
      title: "Süreç analizi sonrası hangi çıktılar oluşur?",
      bullets: [
        "Mevcut durum görünürlüğü",
        "Süreç haritası",
        "Ana süreç ve alt süreç yapısı",
        "Darboğaz ve risk alanları listesi",
        "Rol ve sorumluluk netliği",
        "Öncelikli iyileştirme alanları",
        "Hedef süreç yaklaşımı",
        "Aksiyon planı",
      ],
    },
    {
      title: "Süreç analizi ile dijital dönüşüm ve ERP ilişkisi",
      paragraphs: [
        "Birçok şirket dijital dönüşümü teknoloji yatırımı, ERP’yi ise yazılım kurulumu gibi görür. Oysa her iki konu da süreç netliği ister.",
        "Süreç analizi yapılmadan hangi alanın dijitalleşeceği, hangi sürecin öncelikli olduğu, hangi verinin kritik olduğu ve ERP sistemi içinde hangi akışın nasıl kurgulanacağı belirsiz kalır.",
      ],
    },
    {
      title: "Tage Yazılım bu konuya nasıl yaklaşıyor?",
      paragraphs: [
        "Tage Yazılım süreç analizi konusunu yalnızca şema çizme işi olarak ele almaz. Yaklaşım; mevcut durumu anlamak, darboğazları görmek, süreçleri daha net yapılandırmak, iyileştirme alanlarını belirlemek ve gerekirse bu yapıyı yazılım ile sürdürülebilir hale getirmek üzerine kuruludur.",
        "Bu nedenle süreç analizi çalışmaları; süreç modelleme, süreç iyileştirme, dijital olgunluk değerlendirmesi, ERP hazırlık ve gerektiğinde Sadi ile ölçüm/takip yapısı ile birlikte düşünülür.",
      ],
    },
    {
      title: "Sonuç",
      paragraphs: [
        "İş süreç analizi, bir işletmenin kendi çalışma biçimini netleştirmesi için en güçlü başlangıç noktalarından biridir. Süreçler görünür hale geldiğinde sorunlar daha erken fark edilir, öncelikler daha net belirlenir ve iyileştirme çalışmaları daha sağlıklı ilerler.",
        "Kısacası süreç analizi; mevcut durumu netleştirir, darboğazları görünür hale getirir, iyileştirme için zemin hazırlar ve dijital dönüşüm ile ERP yatırımlarını daha doğru noktaya taşır.",
      ],
    },
  ],

  relatedLinks: {
    title: "İlgili sayfalar",
    items: [
      {
        title: "Süreç Analizi ve Süreç Modelleme",
        href: "/hizmetler/surec-analizi-ve-surec-modelleme",
      },
      {
        title: "Süreç İyileştirme ve İş Akışı Yönetimi",
        href: "/hizmetler/surec-iyilestirme-ve-is-akisi-yonetimi",
      },
      {
        title: "ERP Danışmanlığı ve ERP Hazırlık Hizmetleri",
        href: "/hizmetler/erp-danismanligi-ve-erp-hazirlik-hizmetleri",
      },
      {
        title: "Sadi",
        href: "/sadi",
      },
    ],
  },

  faq: {
    title: "Sık sorulan sorular",
    items: [
      {
        question: "İş süreç analizi nedir?",
        answer:
          "İş süreç analizi, bir işin şirket içinde gerçekte nasıl ilerlediğini, hangi adımlardan geçtiğini, nerede sorun oluştuğunu ve hangi alanlarda iyileştirme gerektiğini ortaya çıkaran çalışmadır.",
      },
      {
        question: "Süreç analizi neden yapılır?",
        answer:
          "Süreçleri görünür hale getirmek, darboğazları tespit etmek, tekrar işleri azaltmak, rol ve sorumlulukları netleştirmek ve iyileştirme alanlarını belirlemek için yapılır.",
      },
      {
        question: "Süreç haritalama ile süreç analizi aynı şey midir?",
        answer:
          "Hayır. Süreç analizi işleyişi anlamaya odaklanır. Süreç haritalama ise bu işleyişi görünür hale getiren yapıdır. Birlikte kullanıldığında daha güçlü sonuç verir.",
      },
      {
        question: "Süreç analizi hangi departmanlarda uygulanır?",
        answer:
          "Satış, satın alma, üretim, kalite, depo, lojistik, finans, insan kaynakları ve destek süreçleri dahil birçok alanda uygulanabilir.",
      },
      {
        question: "Süreç analizi ERP’den önce gerekli midir?",
        answer:
          "Evet. ERP öncesinde süreçlerin netleşmesi, rol dağılımlarının görünür olması ve darboğazların bilinmesi proje başarısını ciddi şekilde etkiler.",
      },
    ],
  },

  cta: {
    title: "Süreçlerinizi birlikte analiz edelim",
    description:
      "Şirketinizde süreçler nasıl ilerliyor, hangi alanlarda darboğaz oluşuyor ve nereden başlamak gerekiyor birlikte değerlendirelim.",
    primaryButton: "İletişime Geçin",
    secondaryButton: "Süreç Analizi Hizmetini İnceleyin",
  },
};

const en = {
  meta: {
    title:
      "What Is Business Process Analysis? How Is It Done in Companies? | Tage Yazılım",
    description:
      "What is business process analysis, why is it done, and how is it applied in companies? Learn process analysis, process mapping, bottleneck detection, and the improvement approach step by step.",
  },

  breadcrumb: {
    home: "Home",
    blog: "Blog",
    current: "What Is Business Process Analysis?",
  },

  article: {
    category: "Process Analysis",
    readTime: "8 min read",
    title: "What Is Business Process Analysis? How Is It Done in Companies?",
    excerpt:
      "Business process analysis is one of the core studies that helps a company understand how its work actually runs. Without making processes visible, it is difficult to identify bottlenecks, reduce inefficiencies, and create a solid foundation for digital transformation or ERP investments.",
  },

  quickAnswer: {
    title: "Short answer",
    items: [
      "Business process analysis makes visible how work actually runs inside a company.",
      "The goal is not only to draw flows, but to identify bottlenecks, rework, risks, and development areas.",
      "Process analysis is a core step before process mapping, process improvement, ERP readiness, and digital transformation.",
      "When done correctly, processes become standardized, priorities become clear, and action plans can be created.",
    ],
  },

  sections: [
    {
      title: "What is business process analysis?",
      paragraphs: [
        "Business process analysis is the study of examining step by step how a job actually progresses within an organization. The goal is not only to describe the process. The real purpose is to make visible who starts the work, which steps it goes through, where it waits, which approvals it passes through, where rework occurs, and in which areas risk exists.",
        "In many businesses, processes do exist, but they are often undocumented or do not fully reflect real-life operations. For this reason, managers, teams, and departments may describe the same process differently. Business process analysis clarifies this fragmented picture.",
      ],
    },
    {
      title: "Why should business process analysis be done?",
      paragraphs: [
        "A significant part of corporate problems stems not from the process itself, but from the lack of process visibility. Work slows down, repetitive steps increase, approvals take longer, teams wait for each other, and management often notices the real problem too late.",
      ],
      bullets: [
        "To clearly see the current state",
        "To identify bottlenecks",
        "To standardize processes",
        "To determine improvement areas",
        "To strengthen ERP and digital transformation readiness",
      ],
    },
    {
      title: "How is business process analysis carried out?",
      paragraphs: [
        "A healthy process analysis study should move systematically. First, the process to be analyzed is selected, then the current state is understood, a process map is created, bottlenecks and risks are identified, the target process is designed, and finally improvement actions are clarified.",
      ],
      bullets: [
        "Select the process to analyze",
        "Focus on understanding the current state",
        "Create the process map",
        "Identify bottlenecks and risks",
        "Design the target process",
        "Clarify improvement actions",
      ],
    },
    {
      title: "Are process analysis and process mapping the same thing?",
      paragraphs: [
        "No. Process analysis focuses on understanding and interpreting how the work runs. Process mapping is the visual or structural representation that makes that workflow visible.",
        "A strong study is created when analysis and mapping are carried out together. Only drawing maps does not solve the real problem; only analyzing without mapping does not provide shared visibility.",
      ],
    },
    {
      title: "Most common process analysis problems in companies",
      bullets: [
        "Processes depending on individuals",
        "The same work being done differently by different teams",
        "Approval mechanisms being heavier than necessary",
        "Lack of measurement",
        "Lack of readiness before ERP",
      ],
    },
    {
      title: "Where can business process analysis be applied?",
      bullets: [
        "Sales and quotation-to-order processes",
        "Procurement and supplier management",
        "Production planning and operational flows",
        "Quality control and nonconformity management",
        "Warehouse and shipment processes",
        "Finance approval and control flows",
        "HR recruitment and leave processes",
        "Customer request and support management",
      ],
    },
    {
      title: "What outputs are produced after process analysis?",
      bullets: [
        "Current state visibility",
        "Process map",
        "Main process and subprocess structure",
        "List of bottlenecks and risk areas",
        "Role and responsibility clarity",
        "Priority improvement areas",
        "Target process approach",
        "Action plan",
      ],
    },
    {
      title: "The relationship between process analysis, digital transformation, and ERP",
      paragraphs: [
        "Many companies see digital transformation as a technology investment and ERP as a software installation. In reality, both require process clarity.",
        "Without process analysis, it remains unclear which area should be digitalized, which process should be prioritized, which data is critical, and how workflows should be configured inside the ERP system.",
      ],
    },
    {
      title: "How does Tage Yazılım approach this topic?",
      paragraphs: [
        "Tage Yazılım does not treat process analysis as merely drawing diagrams. The approach is built on understanding the current state, seeing bottlenecks, structuring processes more clearly, identifying improvement areas, and, when needed, making this structure sustainable through software.",
        "For this reason, process analysis studies are considered together with process modeling, process improvement, digital maturity assessment, ERP readiness, and, when needed, a measurement/tracking structure through Sadi.",
      ],
    },
    {
      title: "Conclusion",
      paragraphs: [
        "Business process analysis is one of the strongest starting points for a company to clarify its own way of working. When processes become visible, problems are noticed earlier, priorities become clearer, and improvement efforts progress in a healthier way.",
        "In short, process analysis clarifies the current state, makes bottlenecks visible, creates the basis for improvement, and places digital transformation and ERP investments on a stronger foundation.",
      ],
    },
  ],

  relatedLinks: {
    title: "Related pages",
    items: [
      {
        title: "Process Analysis and Process Modeling",
        href: "/hizmetler/surec-analizi-ve-surec-modelleme",
      },
      {
        title: "Process Improvement and Workflow Management",
        href: "/hizmetler/surec-iyilestirme-ve-is-akisi-yonetimi",
      },
      {
        title: "ERP Consulting and ERP Readiness Services",
        href: "/hizmetler/erp-danismanligi-ve-erp-hazirlik-hizmetleri",
      },
      {
        title: "Sadi",
        href: "/sadi",
      },
    ],
  },

  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "What is business process analysis?",
        answer:
          "Business process analysis is the study that shows how a task actually progresses within a company, which steps it goes through, where problems occur, and where improvement is needed.",
      },
      {
        question: "Why is process analysis done?",
        answer:
          "It is done to make processes visible, identify bottlenecks, reduce rework, clarify roles and responsibilities, and define improvement areas.",
      },
      {
        question: "Are process mapping and process analysis the same?",
        answer:
          "No. Process analysis focuses on understanding the operation. Process mapping is the structure that makes that operation visible. Together, they create stronger results.",
      },
      {
        question: "In which departments can process analysis be applied?",
        answer:
          "It can be applied across many areas including sales, procurement, production, quality, warehouse, logistics, finance, HR, and support processes.",
      },
      {
        question: "Is process analysis necessary before ERP?",
        answer:
          "Yes. Clarifying processes, making role distribution visible, and understanding bottlenecks before ERP strongly affects project success.",
      },
    ],
  },

  cta: {
    title: "Let’s analyze your processes together",
    description:
      "Let’s evaluate how your processes run, where bottlenecks occur, and where to start.",
    primaryButton: "Contact Us",
    secondaryButton: "Explore Process Analysis Service",
  },
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params;

  if (lang !== "tr" && lang !== "en") {
    return {};
  }

  const copy = lang === "en" ? en : tr;
  const pageUrl = `${SITE_URL}/${lang}/blog/${SLUG}`;

  return {
    title: copy.meta.title,
    description: copy.meta.description,
    alternates: {
      canonical: pageUrl,
      languages: {
        tr: `${SITE_URL}/tr/blog/${SLUG}`,
        en: `${SITE_URL}/en/blog/${SLUG}`,
      },
    },
    openGraph: {
      title: copy.meta.title,
      description: copy.meta.description,
      url: pageUrl,
      siteName: "Tage Yazılım",
      locale: lang === "en" ? "en_US" : "tr_TR",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: copy.meta.title,
      description: copy.meta.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { lang } = await params;

  if (lang !== "tr" && lang !== "en") {
    notFound();
  }

  const copy = lang === "en" ? en : tr;
  const withLang = (path: string) => `/${lang}${path}`;
  const pageUrl = `${SITE_URL}/${lang}/blog/${SLUG}`;

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
        name: copy.breadcrumb.blog,
        item: `${SITE_URL}/${lang}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: copy.breadcrumb.current,
        item: pageUrl,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: copy.article.title,
    description: copy.article.excerpt,
    mainEntityOfPage: pageUrl,
    inLanguage: lang === "en" ? "en" : "tr",
    author: {
      "@type": "Organization",
      name: "Tage Yazılım",
    },
    publisher: {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-white text-slate-800">
        <section className="bg-gradient-to-b from-[#F3F3E0] via-white to-white pt-16 pb-14 md:pt-24 md:pb-20">
          <Container>
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
                    href={withLang("/blog")}
                    className="transition hover:text-[#133E87]"
                  >
                    {copy.breadcrumb.blog}
                  </Link>
                </li>
                <li>/</li>
                <li className="font-medium text-[#133E87]">
                  {copy.breadcrumb.current}
                </li>
              </ol>
            </nav>

            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                <span className="rounded-full bg-white px-3 py-1 font-medium text-[#133E87]">
                  {copy.article.category}
                </span>
                <span className="inline-flex items-center gap-1">
                  <BookOpen size={16} />
                  Blog
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock3 size={16} />
                  {copy.article.readTime}
                </span>
              </div>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[#133E87] md:text-5xl">
                {copy.article.title}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
                {copy.article.excerpt}
              </p>
            </div>
          </Container>
        </section>

        <section className="py-14 md:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
              <article className="min-w-0">
                <section className="rounded-[28px] border border-[#CBDCEB] bg-[#F8FAFC] p-6 shadow-sm md:p-8">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex rounded-2xl bg-white p-3 text-[#133E87]">
                      <SearchCheck size={22} />
                    </div>
                    <h2 className="text-2xl font-semibold text-[#133E87]">
                      {copy.quickAnswer.title}
                    </h2>
                  </div>

                  <div className="mt-6 grid gap-4">
                    {copy.quickAnswer.items.map((item) => (
                      <div key={item} className="flex gap-3">
                        <CheckCircle2
                          size={20}
                          className="mt-1 shrink-0 text-[#133E87]"
                        />
                        <p className="text-base leading-7 text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <div className="mt-12 space-y-12">
                  {copy.sections.map((section) => (
                    <section key={section.title}>
                      <h2 className="text-3xl font-semibold tracking-tight text-[#133E87]">
                        {section.title}
                      </h2>

                      {"paragraphs" in section && section.paragraphs && (
                        <div className="mt-5 space-y-4">
                          {section.paragraphs.map((paragraph) => (
                            <p
                              key={paragraph}
                              className="text-base leading-8 text-slate-700"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      )}

                      {"bullets" in section && section.bullets && (
                        <div className="mt-6 grid gap-4">
                          {section.bullets.map((item) => (
                            <div key={item} className="flex gap-3">
                              <CheckCircle2
                                size={20}
                                className="mt-1 shrink-0 text-[#133E87]"
                              />
                              <p className="text-base leading-7 text-slate-700">
                                {item}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </section>
                  ))}
                </div>

                <section className="mt-16">
                  <h2 className="text-3xl font-semibold tracking-tight text-[#133E87]">
                    {copy.relatedLinks.title}
                  </h2>

                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {copy.relatedLinks.items.map((item) => (
                      <Link
                        key={item.title}
                        href={withLang(item.href)}
                        className="rounded-[22px] border border-[#E6EDF5] bg-white px-5 py-5 text-base font-medium text-slate-700 transition hover:border-[#CBDCEB] hover:bg-[#F8FAFC]"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </section>

                <section className="mt-16">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="text-[#133E87]" size={24} />
                    <h2 className="text-3xl font-semibold tracking-tight text-[#133E87]">
                      {copy.faq.title}
                    </h2>
                  </div>

                  <div className="mt-6 space-y-4">
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
                          <p className="text-sm leading-7 text-slate-600">
                            {item.answer}
                          </p>
                        </div>
                      </details>
                    ))}
                  </div>
                </section>
              </article>

              <aside className="lg:sticky lg:top-24 lg:self-start">
                <div className="rounded-[28px] border border-[#CBDCEB] bg-[#F8FAFC] p-6 shadow-sm">
                  <h2 className="text-2xl font-semibold text-[#133E87]">
                    {copy.cta.title}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {copy.cta.description}
                  </p>

                  <div className="mt-6 flex flex-col gap-3">
                    <Link
                      href={withLang("/iletisim")}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#133E87] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                    >
                      {copy.cta.primaryButton}
                      <ArrowRight size={18} />
                    </Link>

                    <Link
                      href={withLang("/hizmetler/surec-analizi-ve-surec-modelleme")}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-[#CBDCEB] bg-white px-5 py-3 text-sm font-semibold text-[#133E87] transition hover:bg-[#F8FAFC]"
                    >
                      {copy.cta.secondaryButton}
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}