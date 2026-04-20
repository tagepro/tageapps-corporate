// app/[lang]/blog/dijital-olgunluk-analizi-nedir/page.tsx

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
const SLUG = "dijital-olgunluk-analizi-nedir";

const tr = {
  meta: {
    title:
      "Dijital Olgunluk Analizi Nedir? Şirketler Nereden Başlamalı? | Tage Yazılım",
    description:
      "Dijital olgunluk analizi nedir, neden yapılır ve şirketler nereden başlamalı? Mevcut durum puanlama, süreç olgunluk, risk alanları ve yol haritası yaklaşımını öğrenin.",
  },

  breadcrumb: {
    home: "Anasayfa",
    blog: "Blog",
    current: "Dijital Olgunluk Analizi Nedir?",
  },

  article: {
    category: "Dijital Olgunluk",
    readTime: "9 dk okuma",
    title: "Dijital Olgunluk Analizi Nedir? Şirketler Nereden Başlamalı?",
    excerpt:
      "Dijital olgunluk analizi, bir şirketin dijitalleşme seviyesini yalnızca teknoloji yatırımları üzerinden değil; süreç, veri, organizasyon ve yönetim hazırlığı üzerinden değerlendiren sistematik yaklaşımdır. Doğru yapılmadığında dijital dönüşüm parçalı ilerler; doğru yapıldığında ise öncelikler ve yol haritası netleşir.",
  },

  quickAnswer: {
    title: "Kısa cevap",
    items: [
      "Dijital olgunluk analizi, şirketin dijital dönüşüme ne kadar hazır olduğunu ölçer.",
      "Sadece kullanılan yazılımlara değil; süreçlere, veri kullanımına, organizasyona ve yönetim yaklaşımına da bakar.",
      "Amaç, mevcut durumu puanlamak, risk ve gelişim alanlarını görmek ve yol haritası oluşturmaktır.",
      "Doğru yapıldığında ERP, otomasyon ve dijital dönüşüm yatırımları daha sağlıklı sırayla planlanır.",
    ],
  },

  sections: [
    {
      title: "Dijital olgunluk analizi nedir?",
      paragraphs: [
        "Dijital olgunluk analizi, bir şirketin dijital dönüşüme ne kadar hazır olduğunu değerlendiren sistematik çalışmadır. Burada yalnızca hangi yazılımların kullanıldığına bakılmaz; süreçlerin ne kadar tanımlı olduğu, verinin nasıl kullanıldığı, ekiplerin ne kadar hazır olduğu, yönetimin dönüşüme nasıl baktığı ve organizasyonun değişime ne kadar açık olduğu da değerlendirilir.",
        "Başka bir ifadeyle dijital olgunluk analizi, şirketin bugünkü dijital seviyesini görünür hale getirir. Böylece dönüşüm kararı sezgiyle değil, daha ölçülebilir ve daha yorumlanabilir zemin üzerinden alınır.",
      ],
    },
    {
      title: "Dijital olgunluk neden önemlidir?",
      paragraphs: [
        "Birçok kurum dijitalleşmeyi teknoloji satın almak olarak görür. Oysa asıl soru, şirketin bu yatırımı kaldıracak hazırlık seviyesine sahip olup olmadığıdır. Süreç yapısı dağınık, veri disiplini zayıf ve organizasyon hazırlığı düşükse en iyi teknoloji bile beklenen etkiyi üretmeyebilir.",
        "Dijital olgunluk analizi bu nedenle önemlidir. Çünkü önce mevcut seviyeyi görür, sonra nereden başlanacağını netleştirir. Böylece yatırımın sırası, önceliği ve etkisi daha sağlıklı yönetilir.",
      ],
    },
    {
      title: "Dijital olgunluk ile dijital dönüşüm aynı şey midir?",
      paragraphs: [
        "Hayır, aynı şey değildir. Dijital olgunluk, şirketin hazır olma seviyesini anlatır. Dijital dönüşüm ise bu hazırlık üzerinden yürütülen değişim ve yatırım sürecidir.",
        "Daha basit söylersek; dijital olgunluk mevcut seviyeyi ölçer, dijital dönüşüm ise bu seviyeyi geliştirmek için atılan adımları kapsar. Bu nedenle dönüşümden önce olgunluk değerlendirmesi yapmak daha sağlıklı sonuç verir.",
      ],
    },
    {
      title: "Dijital olgunluk analizi nasıl yapılır?",
      paragraphs: [
        "Sağlıklı bir dijital olgunluk analizi, yapılandırılmış ve karşılaştırılabilir değerlendirme mantığı ile yapılır. Amaç yalnızca genel yorum vermek değil; mevcut durumu puanlayabilmek ve gelişim alanlarını somutlaştırmaktır.",
      ],
      bullets: [
        "Önce değerlendirme kapsamı belirlenir",
        "Şirketin süreç, veri, organizasyon ve teknoloji yapısı incelenir",
        "Mevcut durum puanlanır",
        "Risk ve gelişim alanları belirlenir",
        "Öncelikler çıkarılır",
        "Kısa, orta ve uzun vadeli yol haritası oluşturulur",
      ],
    },
    {
      title: "Hangi boyutlar değerlendirilir?",
      paragraphs: [
        "Dijital olgunluk analizinde tek boyutlu bakış yeterli değildir. Bir şirket teknolojik olarak güçlü görünebilir ama süreçleri zayıf olabilir. Ya da süreçleri güçlüdür ama veri kullanımı düşük olabilir. Bu yüzden değerlendirme çok boyutlu yapılmalıdır.",
      ],
      bullets: [
        "Süreç yapısı ve süreç olgunluğu",
        "Veri toplama ve veri kullanım disiplini",
        "Organizasyon ve ekip hazırlığı",
        "Yönetim yaklaşımı ve karar alma biçimi",
        "Teknoloji altyapısı ve entegrasyon seviyesi",
        "İyileştirme ve yeniden ölçüm kabiliyeti",
      ],
    },
    {
      title: "Süreç olgunluk ile dijital olgunluk arasındaki ilişki nedir?",
      paragraphs: [
        "Süreç olgunluk, işleyişin ne kadar tanımlı, tekrar edilebilir, izlenebilir ve geliştirilebilir olduğunu gösterir. Dijital olgunluk ise bunu teknoloji, veri ve organizasyon hazırlığı ile birlikte ele alır.",
        "Bu nedenle süreç olgunluğu düşük olan yapılarda dijital dönüşüm yatırımları çoğu zaman beklenen etkiyi üretmez. Süreç yeterince net değilse teknoloji yalnızca mevcut karmaşıklığı dijital ortama taşımış olur.",
      ],
    },
    {
      title: "Mevcut durum puanlama neden önemlidir?",
      paragraphs: [
        "Mevcut durum puanlama, değerlendirmeyi soyut yorum olmaktan çıkarır. Yönetim sadece 'iyi değiliz' ya da 'orta seviyedeyiz' gibi genel ifadeler yerine daha somut seviyeler görür.",
        "Bu yaklaşım; güçlü alanları, zayıf alanları, riskli noktaları ve gelişim önceliklerini daha hızlı görünür hale getirir. Aynı zamanda daha sonra yeniden ölçüm yapmaya da zemin hazırlar.",
      ],
    },
    {
      title: "Dijital olgunluk analizi sonrası ne elde edilir?",
      bullets: [
        "Mevcut dijital seviye görünürlüğü",
        "Süreç olgunluk ile dijital hazırlık ilişkisi",
        "Risk ve kırılgan alanlar listesi",
        "Gelişim fırsatları ve hızlı kazanım alanları",
        "Yatırım öncelikleri",
        "Dijital dönüşüm yol haritası",
        "Gerekirse yeniden ölçüm için temel puanlama yapısı",
      ],
    },
    {
      title: "Şirketler nereden başlamalı?",
      paragraphs: [
        "En doğru başlangıç, her şeyi aynı anda yapmaya çalışmak değildir. Önce mevcut durumu görmek, sonra en kritik alanları seçmek gerekir. Özellikle süreç görünürlüğü, veri disiplini ve organizasyon hazırlığı çoğu kurum için ilk odak alanlarıdır.",
        "Yani başlangıç noktası teknoloji satın almak değil; hangi alanın önce güçlendirilmesi gerektiğini netleştirmektir. Bu yüzden dijital olgunluk analizi, dönüşüm yolculuğunun ilk ciddi adımlarından biridir.",
      ],
    },
    {
      title: "Tage Yazılım bu konuya nasıl yaklaşıyor?",
      paragraphs: [
        "Tage Yazılım dijital olgunluk konusunu yalnızca değerlendirme raporu üretmek olarak görmez. Yaklaşım; şirketin mevcut dijital ve süreçsel hazırlık seviyesini görünür hale getirmek, risk ve gelişim alanlarını belirlemek, ardından bunu yol haritası ve gerektiğinde yazılım destekli ölçüm yapısına dönüştürmektir.",
        "Bu nedenle dijital olgunluk değerlendirmesi; süreç olgunluk, puanlama, risk görünürlüğü, ERP hazırlık ve Sadi ile ölçüm / raporlama mantığıyla birlikte ele alınır.",
      ],
    },
    {
      title: "Sonuç",
      paragraphs: [
        "Dijital olgunluk analizi, bir şirketin dijital dönüşüm yolculuğuna nereden başlaması gerektiğini netleştiren en önemli çalışmalardan biridir. Mevcut durum görünür hale geldiğinde yatırım sırası, riskler, gelişim alanları ve yol haritası daha net belirlenir.",
        "Kısacası bu analiz; sezgiyle değil, ölçümle hareket etmeyi sağlar. Bu da dijital dönüşümün daha kontrollü, daha öncelikli ve daha uygulanabilir ilerlemesine yardımcı olur.",
      ],
    },
  ],

  relatedLinks: {
    title: "İlgili sayfalar",
    items: [
      {
        title: "Dijital Olgunluk ve Dijital Dönüşüm Analizi",
        href: "/hizmetler/dijital-olgunluk-ve-dijital-donusum-analizi",
      },
      {
        title: "ERP Danışmanlığı ve ERP Hazırlık Hizmetleri",
        href: "/hizmetler/erp-danismanligi-ve-erp-hazirlik-hizmetleri",
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
        question: "Dijital olgunluk analizi nedir?",
        answer:
          "Dijital olgunluk analizi, bir şirketin dijital dönüşüme ne kadar hazır olduğunu süreç, veri, organizasyon, yönetim ve teknoloji boyutlarıyla değerlendiren çalışmadır.",
      },
      {
        question: "Dijital olgunluk ile dijital dönüşüm aynı şey midir?",
        answer:
          "Hayır. Dijital olgunluk hazır olma seviyesini ölçer. Dijital dönüşüm ise bu seviyeyi geliştirmek için yürütülen değişim ve yatırım sürecidir.",
      },
      {
        question: "Bu analiz neden yapılır?",
        answer:
          "Mevcut durumu görmek, risk ve gelişim alanlarını belirlemek, yatırım önceliklerini netleştirmek ve yol haritası oluşturmak için yapılır.",
      },
      {
        question: "Süreç olgunluk bu işin neresindedir?",
        answer:
          "Süreç olgunluk, dijital olgunluğun en önemli parçalarından biridir. Süreçler yeterince tanımlı ve ölçülebilir değilse dijital yatırımların etkisi düşebilir.",
      },
      {
        question: "Sadi bu süreçte nasıl kullanılır?",
        answer:
          "Sadi, dijital ve süreçsel değerlendirmelerin puanlanması, risklerin görünür hale gelmesi, gelişim alanlarının takibi ve yeniden ölçüm yapılması için destekleyici ürün yapısı sunar.",
      },
    ],
  },

  cta: {
    title: "Dijital olgunluğunuzu birlikte değerlendirelim",
    description:
      "Şirketinizin dijital hazırlık seviyesini, süreç olgunluğunu ve öncelikli gelişim alanlarını birlikte netleştirelim.",
    primaryButton: "İletişime Geçin",
    secondaryButton: "Dijital Olgunluk Hizmetini İnceleyin",
  },
};

const en = {
  meta: {
    title:
      "What Is Digital Maturity Analysis? Where Should Companies Start? | Tage Yazılım",
    description:
      "What is digital maturity analysis, why is it done, and where should companies start? Learn the current state scoring, process maturity, risk areas, and roadmap approach.",
  },

  breadcrumb: {
    home: "Home",
    blog: "Blog",
    current: "What Is Digital Maturity Analysis?",
  },

  article: {
    category: "Digital Maturity",
    readTime: "9 min read",
    title: "What Is Digital Maturity Analysis? Where Should Companies Start?",
    excerpt:
      "Digital maturity analysis is a systematic approach that evaluates a company’s level of digitalization not only through technology investments, but also through process, data, organization, and management readiness. If done poorly, digital transformation becomes fragmented; if done correctly, priorities and the roadmap become clear.",
  },

  quickAnswer: {
    title: "Short answer",
    items: [
      "Digital maturity analysis measures how ready a company is for digital transformation.",
      "It looks not only at software, but also at processes, data usage, organizational readiness, and management perspective.",
      "The goal is to score the current state, identify risks and development areas, and create a roadmap.",
      "When done correctly, ERP, automation, and digital transformation investments can be prioritized in a healthier order.",
    ],
  },

  sections: [
    {
      title: "What is digital maturity analysis?",
      paragraphs: [
        "Digital maturity analysis is a systematic study that evaluates how ready a company is for digital transformation. It does not only look at which software tools are used; it also assesses how well processes are defined, how data is used, how prepared teams are, how management approaches change, and how open the organization is to transformation.",
        "In other words, digital maturity analysis makes the company’s current digital level visible. This allows transformation decisions to be made not through intuition, but on a more measurable and interpretable basis.",
      ],
    },
    {
      title: "Why is digital maturity important?",
      paragraphs: [
        "Many organizations see digitalization as buying technology. But the real question is whether the company has the readiness level to absorb that investment. If the process structure is fragmented, data discipline is weak, and organizational readiness is low, even the best technology may fail to create the expected impact.",
        "That is why digital maturity analysis matters. It first reveals the current level, then clarifies where to start. This makes the order, priority, and impact of investments much healthier to manage.",
      ],
    },
    {
      title: "Is digital maturity the same as digital transformation?",
      paragraphs: [
        "No, they are not the same. Digital maturity describes the organization’s level of readiness. Digital transformation is the change and investment journey carried out on top of that readiness.",
        "Put simply: digital maturity measures the current state, while digital transformation covers the steps taken to improve that state. For this reason, assessing maturity before transformation leads to stronger results.",
      ],
    },
    {
      title: "How is digital maturity analysis performed?",
      paragraphs: [
        "A healthy digital maturity analysis is carried out with a structured and comparable evaluation logic. The purpose is not only to make general comments, but to score the current state and make development areas concrete.",
      ],
      bullets: [
        "First, the assessment scope is defined",
        "The company’s process, data, organization, and technology structure is reviewed",
        "The current state is scored",
        "Risks and development areas are identified",
        "Priorities are determined",
        "A short-, medium-, and long-term roadmap is created",
      ],
    },
    {
      title: "Which dimensions should be assessed?",
      paragraphs: [
        "A single-dimensional perspective is not enough in digital maturity analysis. A company may look strong technologically but weak in processes. Or it may have strong processes but weak data usage. For this reason, the assessment must be multi-dimensional.",
      ],
      bullets: [
        "Process structure and process maturity",
        "Data collection and data usage discipline",
        "Organizational and team readiness",
        "Management perspective and decision-making style",
        "Technology infrastructure and integration level",
        "Improvement and reassessment capability",
      ],
    },
    {
      title: "What is the relationship between process maturity and digital maturity?",
      paragraphs: [
        "Process maturity shows how defined, repeatable, traceable, and improvable operations are. Digital maturity addresses this together with technology, data, and organizational readiness.",
        "For this reason, in organizations with low process maturity, digital transformation investments often struggle to produce the expected impact. If the process is not clear enough, technology may only move existing complexity into a digital environment.",
      ],
    },
    {
      title: "Why is current state scoring important?",
      paragraphs: [
        "Current state scoring prevents the assessment from remaining a vague opinion. Management sees more concrete levels instead of only saying 'we are not strong enough' or 'we are at a medium level.'",
        "This approach makes strong areas, weak areas, risky points, and development priorities visible faster. It also creates the basis for reassessment later on.",
      ],
    },
    {
      title: "What do you gain after digital maturity analysis?",
      bullets: [
        "Visibility of the current digital level",
        "Relationship between process maturity and digital readiness",
        "List of risks and fragile areas",
        "Development opportunities and quick-win areas",
        "Investment priorities",
        "Digital transformation roadmap",
        "A scoring structure that can support reassessment later",
      ],
    },
    {
      title: "Where should companies start?",
      paragraphs: [
        "The right starting point is not trying to do everything at once. First, the current state should be understood, and then the most critical areas should be selected. For many organizations, process visibility, data discipline, and organizational readiness are the first areas to focus on.",
        "So the starting point is not buying technology, but clarifying which areas need to be strengthened first. That is why digital maturity analysis is one of the first serious steps in the transformation journey.",
      ],
    },
    {
      title: "How does Tage Yazılım approach this topic?",
      paragraphs: [
        "Tage Yazılım does not see digital maturity as only producing an assessment report. The approach is to make the company’s current digital and process readiness visible, identify risks and development areas, and then turn this into a roadmap and, when needed, a software-supported measurement structure.",
        "For this reason, digital maturity assessment is handled together with process maturity, scoring, risk visibility, ERP readiness, and measurement/reporting logic through Sadi.",
      ],
    },
    {
      title: "Conclusion",
      paragraphs: [
        "Digital maturity analysis is one of the most important studies that clarifies where a company should start its digital transformation journey. When the current state becomes visible, investment order, risks, development areas, and the roadmap become much clearer.",
        "In short, this analysis enables the company to move not by intuition, but by measurement. That helps digital transformation progress in a more controlled, prioritized, and actionable way.",
      ],
    },
  ],

  relatedLinks: {
    title: "Related pages",
    items: [
      {
        title: "Digital Maturity and Digital Transformation Analysis",
        href: "/hizmetler/dijital-olgunluk-ve-dijital-donusum-analizi",
      },
      {
        title: "ERP Consulting and ERP Readiness Services",
        href: "/hizmetler/erp-danismanligi-ve-erp-hazirlik-hizmetleri",
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
        question: "What is digital maturity analysis?",
        answer:
          "Digital maturity analysis is a study that evaluates how ready a company is for digital transformation through process, data, organization, management, and technology dimensions.",
      },
      {
        question: "Is digital maturity the same as digital transformation?",
        answer:
          "No. Digital maturity measures readiness, while digital transformation is the change and investment journey carried out to improve that readiness.",
      },
      {
        question: "Why is this analysis done?",
        answer:
          "It is done to understand the current state, identify risks and development areas, clarify investment priorities, and create a roadmap.",
      },
      {
        question: "Where does process maturity fit into this?",
        answer:
          "Process maturity is one of the most important components of digital maturity. If processes are not clearly defined and measurable, digital investments may create limited impact.",
      },
      {
        question: "How is Sadi used in this process?",
        answer:
          "Sadi provides a supporting product structure for scoring digital and process-related assessments, making risks visible, tracking development areas, and enabling reassessment.",
      },
    ],
  },

  cta: {
    title: "Let’s evaluate your digital maturity together",
    description:
      "Let’s clarify your company’s digital readiness level, process maturity, and priority development areas together.",
    primaryButton: "Contact Us",
    secondaryButton: "Explore Digital Maturity Service",
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
                      href={withLang("/hizmetler/dijital-olgunluk-ve-dijital-donusum-analizi")}
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