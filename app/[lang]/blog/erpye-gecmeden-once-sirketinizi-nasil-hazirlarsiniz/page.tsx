// app/[lang]/blog/erpye-gecmeden-once-sirketinizi-nasil-hazirlarsiniz/page.tsx

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
const SLUG = "erpye-gecmeden-once-sirketinizi-nasil-hazirlarsiniz";

const tr = {
  meta: {
    title:
      "ERP’ye Geçmeden Önce Şirketinizi Nasıl Hazırlarsınız? | Tage Yazılım",
    description:
      "ERP’ye geçmeden önce şirket nasıl hazırlanır? ERP hazırlık, süreç netliği, rol dağılımı, veri disiplini ve sistem seçimi için temel adımları öğrenin.",
  },

  breadcrumb: {
    home: "Anasayfa",
    blog: "Blog",
    current: "ERP’ye Geçmeden Önce Şirketinizi Nasıl Hazırlarsınız?",
  },

  article: {
    category: "ERP Hazırlık",
    readTime: "10 dk okuma",
    title: "ERP’ye Geçmeden Önce Şirketinizi Nasıl Hazırlarsınız?",
    excerpt:
      "ERP projelerinin başarısı yalnızca doğru yazılım seçimine bağlı değildir. Asıl farkı, ERP öncesinde süreçlerin, rollerin, veri yapısının ve organizasyon hazırlığının ne kadar net olduğu belirler.",
  },

  quickAnswer: {
    title: "Kısa cevap",
    items: [
      "ERP’ye geçmeden önce önce süreçlerinizi netleştirmeniz gerekir.",
      "Rol ve sorumluluklar görünür değilse ERP sistemi içinde sağlıklı kurgu kurmak zorlaşır.",
      "Veri disiplini, departman geçişleri ve onay akışları ERP hazırlığın temel parçalarıdır.",
      "Doğru hazırlık yapılırsa ERP yatırımı daha kontrollü, daha hızlı ve daha verimli ilerler.",
    ],
  },

  sections: [
    {
      title: "ERP hazırlık neden kritik bir adımdır?",
      paragraphs: [
        "Birçok şirket ERP projesine yazılım seçimiyle başlar. Oysa ERP yatırımı yalnızca program satın almak değildir. Süreçlerin netliği, departmanlar arası akışın sağlığı, kullanıcı sorumlulukları, veri yapısı ve yönetim yaklaşımı bu projenin gerçek başarısını belirler.",
        "ERP hazırlık bu yüzden kritik adımdır. Şirket önce kendi işleyişini görünür hale getirdiğinde, hangi sistemin daha uygun olduğu ve hangi alanların önce toparlanması gerektiği çok daha net anlaşılır.",
      ],
    },
    {
      title: "ERP projeleri neden zorlanır?",
      paragraphs: [
        "ERP projelerinin zorlanmasının temel nedeni çoğu zaman yazılım değil, hazırlık eksikliğidir. Süreçler tanımsızsa, aynı iş farklı ekiplerde farklı yapılıyorsa, rol dağılımı net değilse ve veri disiplini zayıfsa proje doğal olarak zorlaşır.",
      ],
      bullets: [
        "Süreçlerin yeterince net olmaması",
        "Departmanlar arası geçişlerin tanımsız kalması",
        "Rol ve sorumluluk belirsizliği",
        "Onay ve karar noktalarının karmaşık olması",
        "Veri yapısının dağınık olması",
        "ERP’den beklentinin yüksek, hazırlığın düşük olması",
      ],
    },
    {
      title: "ERP’ye geçmeden önce hangi alanlar netleştirilmelidir?",
      paragraphs: [
        "ERP öncesinde ilk bakılması gereken konu, şirketin ana süreçleri ve alt süreçleridir. Satıştan satın almaya, üretimden finansa, lojistikten insan kaynaklarına kadar hangi işin nerede başladığı ve nerede bittiği görülmelidir.",
      ],
      bullets: [
        "Ana süreç ve alt süreç yapısı",
        "Departmanlar arası iş akışları",
        "Rol, görev ve sorumluluk yapısı",
        "Onay ve karar mekanizmaları",
        "Temel veri ve kayıt disiplinleri",
        "Yönetim görünürlüğü ve raporlama ihtiyacı",
      ],
    },
    {
      title: "Süreç netliği ERP için neden önemlidir?",
      paragraphs: [
        "ERP sistemi, var olan işleyişin dijital kurguya taşınmasıdır. Eğer mevcut işleyiş net değilse ERP içinde kurulan yapı da problemli olur. Bu durumda sistem, düzen getirmek yerine karmaşıklığı dijital ortama taşıyabilir.",
        "Bu nedenle ERP’den önce süreç netliği sağlanmalıdır. Şirket hangi sürecin kime ait olduğunu, hangi bilginin nerede üretildiğini ve hangi onayların neden var olduğunu netleştirmelidir.",
      ],
    },
    {
      title: "Rol ve sorumluluklar neden bu kadar önemlidir?",
      paragraphs: [
        "ERP projelerinde en sık karşılaşılan problemlerden biri, kullanıcıların neyi neden yaptığını tam bilmemesidir. Bunun nedeni çoğu zaman rol ve sorumluluk yapısının yeterince net tanımlanmamış olmasıdır.",
        "Kim veri girer, kim kontrol eder, kim onaylar, kim raporu kullanır gibi sorular ERP öncesinde netleşirse sistem kullanımı daha sağlıklı olur ve kullanıcı sahipliği artar.",
      ],
    },
    {
      title: "Veri disiplini ve kayıt yapısı neden önemlidir?",
      paragraphs: [
        "ERP, veriye dayalı çalışan sistemdir. Eğer veri yapısı dağınıksa, aynı bilgi farklı yerlerde tutuluyorsa veya kayıt mantığı standart değilse sistemden alınan çıktı da sorunlu olur.",
        "Bu yüzden ERP öncesinde temel veri alanları, kayıt kuralları, master data yaklaşımı ve bilgi akış disiplini gözden geçirilmelidir. Hazırlık ne kadar iyi olursa geçiş sonrası sorunlar o kadar azalır.",
      ],
    },
    {
      title: "ERP yazılımı seçmeden önce neye bakılmalı?",
      paragraphs: [
        "ERP seçimi marka veya fiyat karşılaştırmasından ibaret olmamalıdır. Şirketin süreç yapısı, büyüklüğü, sektör dinamiği, kullanıcı profili ve yönetim beklentileri sistem seçimini doğrudan etkiler.",
      ],
      bullets: [
        "Şirketin süreç karmaşıklığı",
        "Üretim, ticaret veya hizmet yapısına uygunluk",
        "Departman sayısı ve organizasyon yapısı",
        "Raporlama ve yönetim görünürlüğü ihtiyacı",
        "Büyüme planı ve ölçeklenebilirlik",
        "Kullanıcı adaptasyonu ve kullanım kolaylığı",
      ],
    },
    {
      title: "ERP hazırlık çalışması sonrası ne elde edilir?",
      bullets: [
        "ERP öncesi mevcut durum görünürlüğü",
        "Süreç netliği ve süreç standardizasyonu",
        "Rol ve sorumluluk yapısında açıklık",
        "Riskli alanlar ve eksik hazırlık listesi",
        "Veri ve kayıt disiplinine dair temel çerçeve",
        "Sistem seçiminde daha doğru karar zemini",
        "ERP projesi için daha gerçekçi yol haritası",
      ],
    },
    {
      title: "Tage Yazılım bu konuya nasıl yaklaşıyor?",
      paragraphs: [
        "Tage Yazılım ERP hazırlık konusunu yalnızca yazılım seçimi olarak ele almaz. Yaklaşım; önce şirketin işleyişini, süreçlerini, departman geçişlerini, rol yapısını ve organizasyon hazırlığını anlamak, ardından ERP için daha sağlam zemin kurmaktır.",
        "Bu nedenle ERP danışmanlığı; süreç analizi, süreç standardizasyonu, dijital olgunluk ve gerektiğinde Sadi ile ölçüm / görünürlük mantığıyla birlikte düşünülür.",
      ],
    },
    {
      title: "Sonuç",
      paragraphs: [
        "ERP’ye geçmeden önce yapılacak en doğru iş, sistem satın almak değil şirketi hazırlamaktır. Süreçler görünür hale geldiğinde, roller netleştiğinde, veri disiplini kurulduğunda ve öncelikler belirlendiğinde ERP projesi çok daha sağlıklı ilerler.",
        "Kısacası ERP hazırlık, projenin ek işi değil; başarının temelidir.",
      ],
    },
  ],

  relatedLinks: {
    title: "İlgili sayfalar",
    items: [
      {
        title: "ERP Danışmanlığı ve ERP Hazırlık Hizmetleri",
        href: "/hizmetler/erp-danismanligi-ve-erp-hazirlik-hizmetleri",
      },
      {
        title: "Süreç Yönetimi Danışmanlığı",
        href: "/hizmetler/surec-yonetimi-danismanligi",
      },
      {
        title: "Süreç Analizi ve Süreç Modelleme",
        href: "/hizmetler/surec-analizi-ve-surec-modelleme",
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
        question: "ERP’ye geçmeden önce neden hazırlık yapılmalıdır?",
        answer:
          "Çünkü ERP başarısı yalnızca yazılım seçimine değil; süreç netliğine, rol dağılımına, veri disiplinine ve organizasyon hazırlığına bağlıdır.",
      },
      {
        question: "ERP hazırlıkta önce neye bakılmalıdır?",
        answer:
          "Öncelikle süreçler, departmanlar arası akış, rol ve sorumluluklar, onay mekanizmaları ve veri yapısı netleştirilmelidir.",
      },
      {
        question: "ERP yazılımı seçmeden önce süreç analizi gerekli midir?",
        answer:
          "Evet. Süreç analizi yapılmadan ERP içinde hangi akışın nasıl kurulacağı sağlıklı biçimde netleşmez.",
      },
      {
        question: "Rol ve sorumluluklar ERP projesini neden etkiler?",
        answer:
          "Çünkü sistem içinde kimin veri gireceği, kimin kontrol edeceği, kimin onay vereceği ve kimin rapor kullanacağı net değilse kullanım zayıflar.",
      },
      {
        question: "Sadi ERP hazırlıkta nasıl kullanılır?",
        answer:
          "Sadi, ERP öncesi süreç görünürlüğünü, süreç olgunluk seviyesini, risk alanlarını ve gelişim önceliklerini daha ölçülebilir hale getiren ürün katmanı sunar.",
      },
    ],
  },

  cta: {
    title: "ERP’ye geçmeden önce hazırlık seviyenizi birlikte netleştirelim",
    description:
      "Şirketinizin süreçlerini, rol yapısını ve ERP öncesi kritik hazırlık alanlarını birlikte değerlendirelim.",
    primaryButton: "İletişime Geçin",
    secondaryButton: "ERP Hazırlık Hizmetini İnceleyin",
  },
};

const en = {
  meta: {
    title:
      "How Should You Prepare Your Company Before Moving to ERP? | Tage Yazılım",
    description:
      "How should a company prepare before moving to ERP? Learn the key steps for ERP readiness, process clarity, role structure, data discipline, and system selection.",
  },

  breadcrumb: {
    home: "Home",
    blog: "Blog",
    current: "How Should You Prepare Your Company Before Moving to ERP?",
  },

  article: {
    category: "ERP Readiness",
    readTime: "10 min read",
    title: "How Should You Prepare Your Company Before Moving to ERP?",
    excerpt:
      "The success of ERP projects does not depend only on selecting the right software. What truly makes the difference is how clearly processes, roles, data structure, and organizational readiness are defined before the ERP transition.",
  },

  quickAnswer: {
    title: "Short answer",
    items: [
      "Before moving to ERP, you should first clarify your processes.",
      "If roles and responsibilities are not visible, it becomes difficult to build a healthy structure inside the ERP system.",
      "Data discipline, interdepartmental flows, and approval logic are core parts of ERP readiness.",
      "When the right preparation is done, ERP investment progresses in a more controlled, faster, and more efficient way.",
    ],
  },

  sections: [
    {
      title: "Why is ERP readiness a critical step?",
      paragraphs: [
        "Many companies start ERP projects with software selection. But ERP investment is not only about buying software. The clarity of processes, the health of interdepartmental flows, user responsibilities, data structure, and management perspective determine the real success of the project.",
        "That is why ERP readiness is a critical step. When a company first makes its own way of working visible, it becomes much clearer which system is more suitable and which areas should be strengthened first.",
      ],
    },
    {
      title: "Why do ERP projects struggle?",
      paragraphs: [
        "The main reason ERP projects struggle is often not the software, but the lack of preparation. If processes are undefined, the same work is done differently across teams, role distribution is unclear, and data discipline is weak, the project naturally becomes difficult.",
      ],
      bullets: [
        "Insufficient process clarity",
        "Undefined interdepartmental transitions",
        "Unclear roles and responsibilities",
        "Complex approval and decision points",
        "Fragmented data structure",
        "High expectations from ERP with low preparation level",
      ],
    },
    {
      title: "Which areas should be clarified before moving to ERP?",
      paragraphs: [
        "Before ERP, the first thing to review is the company’s main and subprocess structure. From sales to procurement, from production to finance, from logistics to HR, it should be clear where each workflow starts and where it ends.",
      ],
      bullets: [
        "Main process and subprocess structure",
        "Interdepartmental workflows",
        "Role, duty, and responsibility structure",
        "Approval and decision mechanisms",
        "Core data and record discipline",
        "Management visibility and reporting needs",
      ],
    },
    {
      title: "Why is process clarity important for ERP?",
      paragraphs: [
        "An ERP system is essentially the digital configuration of the company’s existing operations. If the current operation is not clear, the structure built inside ERP will also be problematic. In that case, the system may carry complexity into a digital environment instead of creating order.",
        "That is why process clarity should be established before ERP. The company should clearly understand which process belongs to whom, where each piece of information is created, and why each approval exists.",
      ],
    },
    {
      title: "Why are roles and responsibilities so important?",
      paragraphs: [
        "One of the most common problems in ERP projects is that users do not clearly understand what they do and why they do it. The reason is often that the role and responsibility structure has not been clearly defined.",
        "If questions such as who enters data, who checks it, who approves it, and who uses the reports are clarified before ERP, system usage becomes healthier and user ownership increases.",
      ],
    },
    {
      title: "Why do data discipline and record structure matter?",
      paragraphs: [
        "ERP is a system driven by data. If the data structure is fragmented, the same information is stored in multiple places, or the recording logic is not standardized, the output taken from the system will also be problematic.",
        "That is why before ERP, core data fields, record rules, master data logic, and information flow discipline should be reviewed. The better the preparation, the fewer the post-go-live issues.",
      ],
    },
    {
      title: "What should be considered before selecting ERP software?",
      paragraphs: [
        "ERP selection should not be reduced to brand or price comparison. The company’s process structure, size, sector dynamics, user profile, and management expectations directly affect system selection.",
      ],
      bullets: [
        "Process complexity of the company",
        "Fit for manufacturing, trading, or service structure",
        "Number of departments and organizational model",
        "Reporting and management visibility needs",
        "Growth plan and scalability",
        "User adoption and ease of use",
      ],
    },
    {
      title: "What do you gain after ERP readiness work?",
      bullets: [
        "Visibility of the current state before ERP",
        "Process clarity and process standardization",
        "Clearer role and responsibility structure",
        "List of risky areas and readiness gaps",
        "A core framework for data and record discipline",
        "A better decision basis for system selection",
        "A more realistic roadmap for the ERP project",
      ],
    },
    {
      title: "How does Tage Yazılım approach this topic?",
      paragraphs: [
        "Tage Yazılım does not treat ERP readiness only as software selection. The approach is to first understand the company’s operations, processes, interdepartmental transitions, role structure, and organizational readiness, and then build a stronger foundation for ERP.",
        "For this reason, ERP consulting is considered together with process analysis, process standardization, digital maturity, and when needed, measurement/visibility through Sadi.",
      ],
    },
    {
      title: "Conclusion",
      paragraphs: [
        "The smartest thing to do before moving to ERP is not buying software first, but preparing the company. When processes become visible, roles are clarified, data discipline is established, and priorities are set, the ERP project progresses much more smoothly.",
        "In short, ERP readiness is not extra work for the project; it is the foundation of success.",
      ],
    },
  ],

  relatedLinks: {
    title: "Related pages",
    items: [
      {
        title: "ERP Consulting and ERP Readiness Services",
        href: "/hizmetler/erp-danismanligi-ve-erp-hazirlik-hizmetleri",
      },
      {
        title: "Process Management Consulting",
        href: "/hizmetler/surec-yonetimi-danismanligi",
      },
      {
        title: "Process Analysis and Process Modeling",
        href: "/hizmetler/surec-analizi-ve-surec-modelleme",
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
        question: "Why should preparation be done before moving to ERP?",
        answer:
          "Because ERP success depends not only on software selection, but also on process clarity, role structure, data discipline, and organizational readiness.",
      },
      {
        question: "What should be reviewed first in ERP readiness?",
        answer:
          "First, processes, interdepartmental flows, roles and responsibilities, approval mechanisms, and the data structure should be clarified.",
      },
      {
        question: "Is process analysis necessary before selecting ERP software?",
        answer:
          "Yes. Without process analysis, it is difficult to clearly define how workflows should be configured inside the ERP system.",
      },
      {
        question: "Why do roles and responsibilities affect ERP projects?",
        answer:
          "Because if it is unclear who enters data, who checks it, who approves it, and who uses reports, adoption and system usage remain weak.",
      },
      {
        question: "How is Sadi used in ERP readiness?",
        answer:
          "Sadi provides a product layer that makes pre-ERP process visibility, process maturity level, risk areas, and development priorities more measurable.",
      },
    ],
  },

  cta: {
    title: "Let’s clarify your ERP readiness together before the transition",
    description:
      "Let’s evaluate your company’s processes, role structure, and critical readiness areas before ERP together.",
    primaryButton: "Contact Us",
    secondaryButton: "Explore ERP Readiness Service",
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
                      href={withLang("/hizmetler/erp-danismanligi-ve-erp-hazirlik-hizmetleri")}
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