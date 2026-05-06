// app/[lang]/blog/surec-yonetimi-yazilimi-nedir/page.tsx

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
const SLUG = "surec-yonetimi-yazilimi-nedir";

const tr = {
  meta: {
    title:
      "Süreç Yönetimi Yazılımı Nedir? Şirketlere Ne Kazandırır? | Tage Yazılım",
    description:
      "Süreç yönetimi yazılımı nedir, ne işe yarar ve şirketlere ne kazandırır? Süreç takibi, puanlama, aksiyon yönetimi ve raporlama yaklaşımını öğrenin.",
  },

  breadcrumb: {
    home: "Anasayfa",
    blog: "Blog",
    current: "Süreç Yönetimi Yazılımı Nedir?",
  },

  article: {
    category: "Süreç Yönetimi Yazılımı",
    readTime: "9 dk okuma",
    title: "Süreç Yönetimi Yazılımı Nedir? Şirketlere Ne Kazandırır?",
    excerpt:
      "Süreç yönetimi yazılımı, şirket içindeki süreçlerin yalnızca tanımlanmasını değil; dijital ortamda izlenmesini, puanlanmasını, aksiyonlarının takip edilmesini ve raporlanmasını sağlayan yapıdır. Doğru kullanıldığında süreç görünürlüğünü artırır, dağınık takibi azaltır ve yönetim için daha güçlü karar zemini oluşturur.",
  },

  quickAnswer: {
    title: "Kısa cevap",
    items: [
      "Süreç yönetimi yazılımı, süreçleri dijital ortamda görünür ve yönetilebilir hale getirir.",
      "Amaç yalnızca süreç tanımı yapmak değil; süreçleri izlemek, ölçmek, aksiyonları takip etmek ve raporlamaktır.",
      "Özellikle departman bazlı yapı, süreç puanlama, risk görünürlüğü ve iyileştirme takibi için güçlü katkı sağlar.",
      "Doğru kurulduğunda danışmanlık çıktısını sürdürülebilir yazılım yapısına dönüştürür.",
    ],
  },

  sections: [
    {
      title: "Süreç yönetimi yazılımı nedir?",
      paragraphs: [
        "Süreç yönetimi yazılımı, bir şirket içindeki işleyişin dijital ortamda tanımlanmasını, izlenmesini, değerlendirilmesini ve geliştirilmesini sağlayan yazılım yapısıdır. Buradaki amaç yalnızca akış çizmek değildir. Asıl amaç; süreci yaşayan bir yapıya dönüştürmek, görünürlük sağlamak ve yönetilebilirliği artırmaktır.",
        "Birçok kurumda süreçler Excel dosyaları, e-postalar, kişisel takip notları veya sözlü bilgi ile yönetilir. Süreç yönetimi yazılımı bu dağınık yapıyı daha kurumsal, daha izlenebilir ve daha sürdürülebilir hale getirir.",
      ],
    },
    {
      title: "Süreç yönetimi yazılımı neden önemlidir?",
      paragraphs: [
        "Şirketler büyüdükçe süreçleri sözlü bilgiyle veya dağınık dosyalarla yönetmek zorlaşır. Özellikle farklı departmanların aynı sürece dahil olduğu yapılarda görünürlük kaybı, takip eksikliği ve karar gecikmesi daha sık görülür.",
        "Süreç yönetimi yazılımı bu nedenle önemlidir. Çünkü süreçleri yalnızca tanımlı hale getirmez; onları dijital ortamda izlenebilir, ölçülebilir ve geliştirilebilir hale getirir.",
      ],
    },
    {
      title: "Süreç yönetimi yazılımı ne işe yarar?",
      paragraphs: [
        "Bu tür yazılımlar, süreçleri departman bazlı yapıda toplar, süreçlerin mevcut durumunu görünür hale getirir, gerektiğinde puanlama ve değerlendirme yapar, aksiyonların takibini sağlar ve raporlama üretir.",
        "Yani süreç yönetimi yazılımı yalnızca kayıt alanı değildir; aynı zamanda yönetim için karar destek ve gelişim takibi katmanı da sunar.",
      ],
      bullets: [
        "Süreçleri dijital ortamda toplar",
        "Departman bazlı görünürlük sağlar",
        "Süreçlerin durumunu ve seviyesini izler",
        "Aksiyon ve iyileştirme takibini destekler",
        "Raporlama ve yönetim görünürlüğü sağlar",
        "Kurumsal hafızayı güçlendirir",
      ],
    },
    {
      title: "Hangi şirketler süreç yönetimi yazılımına ihtiyaç duyar?",
      paragraphs: [
        "Süreçleri karmaşıklaşan, departmanlar arası işleyişi yoğunlaşan, iyileştirme ve takip ihtiyacı artan her şirket bu tür yapıya ihtiyaç duyabilir. Bu yalnızca büyük şirketlere özgü değildir.",
        "Özellikle süreç görünürlüğü düşük olan, iş akışları kişilere bağımlı kalan veya iyileştirme aksiyonları sistemli biçimde takip edilemeyen yapılarda süreç yönetimi yazılımı ciddi değer üretir.",
      ],
      bullets: [
        "Departman bazlı süreç görünürlüğü isteyen şirketler",
        "İş akışlarını dijital ortamda toplamak isteyen kurumlar",
        "Süreç puanlama ve risk görünürlüğü arayan yapılar",
        "Aksiyon ve DÖF takibini sistemli yapmak isteyen ekipler",
        "ERP öncesi süreç verisini görünür kılmak isteyen firmalar",
        "Danışmanlık çıktısını sürdürülebilir hale getirmek isteyen kurumlar",
      ],
    },
    {
      title: "Süreç yönetimi yazılımı şirketlere ne kazandırır?",
      paragraphs: [
        "Doğru kurgulanan bir süreç yönetimi yazılımı, süreçlerin yalnızca kayıt altına alınmasını değil; zaman içinde gelişiminin izlenmesini sağlar. Bu da yönetime daha güçlü görünürlük, ekiplere daha net sorumluluk ve organizasyona daha yüksek kurumsallık kazandırır.",
      ],
      bullets: [
        "Daha net süreç görünürlüğü",
        "Daha az dağınık takip",
        "Daha güçlü aksiyon yönetimi",
        "Daha okunabilir raporlama",
        "Daha sürdürülebilir süreç geliştirme",
        "Daha güçlü dijital dönüşüm zemini",
      ],
    },
    {
      title: "Süreç yönetimi yazılımı ile danışmanlık arasındaki ilişki nedir?",
      paragraphs: [
        "Danışmanlık, sürecin nasıl kurulacağını, nasıl yorumlanacağını ve hangi alanlarda iyileştirme gerektiğini belirler. Süreç yönetimi yazılımı ise bu yapının günlük kullanım içinde yaşamasını sağlar.",
        "Bu nedenle en güçlü sonuç, danışmanlık ile yazılımın birlikte düşünülmesiyle oluşur. Sadece analiz yapmak yeterli olmayabilir; sadece yazılım kurmak da doğru yapıyı üretmeyebilir.",
      ],
    },
    {
      title: "Puanlama, risk ve aksiyon takibi neden önemlidir?",
      paragraphs: [
        "Bir süreç yönetimi yazılımını güçlü yapan şey, yalnızca süreç listesini tutması değildir. Süreçlerin seviyesini, riskini, darboğazını ve gelişim alanlarını da görünür hale getirebilmesidir.",
        "Aynı şekilde aksiyon ve takip yapısı da kritiktir. Çünkü iyileştirme kararları alındığında bunların kim tarafından, ne zaman ve hangi sonuçla takip edileceği net olmalıdır.",
      ],
    },
    {
      title: "Süreç yönetimi yazılımı ERP ve dijital dönüşüm için neden önemlidir?",
      paragraphs: [
        "ERP ve dijital dönüşüm projelerinde en büyük sorunlardan biri, mevcut süreçlerin yeterince görünür olmamasıdır. Hangi alanın hazır olduğu, hangi sürecin daha riskli olduğu ve hangi iyileştirme aksiyonunun öncelikli olduğu net değilse yatırımın etkisi zayıflayabilir.",
        "Süreç yönetimi yazılımı bu yüzden yalnızca operasyonel araç değil; aynı zamanda dijital dönüşüm ve ERP hazırlığı için de stratejik destek katmanıdır.",
      ],
    },
    {
      title: "Sadi bu alanda nasıl konumlanır?",
      paragraphs: [
        "Sadi, süreç yönetimi yazılımı yaklaşımının ürünleşmiş halidir. Süreçlerin dijital ortamda izlenmesi, puanlanması, risk görünürlüğü, aksiyon takibi ve raporlama mantığı aynı platformda bir araya gelir.",
        "Bu nedenle Sadi yalnızca ürün değil; süreç yönetim sistemine ihtiyaç duyan kurumlar için danışmanlık ve yazılım yaklaşımını birleştiren çözüm katmanıdır.",
      ],
    },
    {
      title: "Sonuç",
      paragraphs: [
        "Süreç yönetimi yazılımı, şirketlerin süreçlerini yalnızca tanımlı hale getirmek için değil; gerçekten yönetilebilir, ölçülebilir ve geliştirilebilir kılmak için önemlidir.",
        "Kısacası doğru süreç yönetimi yazılımı; görünürlük, takip, puanlama, aksiyon yönetimi ve sürdürülebilir gelişim demektir.",
      ],
    },
  ],

  relatedLinks: {
    title: "İlgili sayfalar",
    items: [
      {
        title: "Süreç Yönetimi Yazılımı ve Kurumsal Yazılım Çözümleri",
        href: "/hizmetler/surec-yonetimi-yazilimi-ve-kurumsal-yazilim-cozumleri",
      },
      {
        title: "Süreç Yönetimi Danışmanlığı",
        href: "/hizmetler/surec-yonetimi-danismanligi",
      },
      {
        title: "Sadi",
        href: "/sadi",
      },
      {
        title: "İletişim",
        href: "/iletisim",
      },
    ],
  },

  faq: {
    title: "Sık sorulan sorular",
    items: [
      {
        question: "Süreç yönetimi yazılımı nedir?",
        answer:
          "Süreç yönetimi yazılımı, süreçlerin dijital ortamda tanımlanmasını, izlenmesini, değerlendirilmesini, aksiyonlarının takip edilmesini ve raporlanmasını sağlayan yazılım yapısıdır.",
      },
      {
        question: "Süreç yönetimi yazılımı ne işe yarar?",
        answer:
          "Süreç görünürlüğü sağlar, departman bazlı izleme sunar, puanlama ve risk değerlendirmesini destekler, aksiyonların takibini kolaylaştırır ve raporlama üretir.",
      },
      {
        question: "Bu yazılımlar kimler için uygundur?",
        answer:
          "Süreçleri karmaşıklaşan, iş akışlarını dijital ortamda toplamak isteyen, iyileştirme ve aksiyon takibi ihtiyacı duyan şirketler için uygundur.",
      },
      {
        question: "Danışmanlık olmadan süreç yönetimi yazılımı yeterli olur mu?",
        answer:
          "Bazı temel durumlarda yardımcı olabilir; ancak en güçlü sonuç, danışmanlık ve yazılımın birlikte düşünülmesiyle oluşur. Çünkü doğru yapı kurulmadan yalnızca yazılım yeterli olmayabilir.",
      },
      {
        question: "Sadi bu alanda ne sunar?",
        answer:
          "Sadi; süreç görünürlüğü, puanlama, risk izleme, aksiyon takibi ve raporlama yapısını tek platformda birleştiren süreç yönetimi yazılımı yaklaşımı sunar.",
      },
    ],
  },

  cta: {
    title: "Süreç yönetimini yazılım ile görünür hale getirelim",
    description:
      "Şirketinizde süreçleri dijital ortamda izlemek, aksiyonları takip etmek ve daha güçlü raporlama yapmak için birlikte en doğru yapıyı değerlendirelim.",
    primaryButton: "İletişime Geçin",
    secondaryButton: "Süreç Yönetimi Yazılımı Hizmetini İnceleyin",
  },
};

const en = {
  meta: {
    title:
      "What Is Process Management Software? What Does It Add to Companies? | Tage Yazılım",
    description:
      "What is process management software, what does it do, and what value does it add to companies? Learn the approach to process visibility, scoring, action tracking, and reporting.",
  },

  breadcrumb: {
    home: "Home",
    blog: "Blog",
    current: "What Is Process Management Software?",
  },

  article: {
    category: "Process Management Software",
    readTime: "9 min read",
    title: "What Is Process Management Software? What Does It Add to Companies?",
    excerpt:
      "Process management software is a structure that not only defines internal company processes, but also makes them digitally trackable, scorable, actionable, and reportable. When used correctly, it increases process visibility, reduces fragmented follow-up, and creates a stronger decision basis for management.",
  },

  quickAnswer: {
    title: "Short answer",
    items: [
      "Process management software makes processes visible and manageable in a digital environment.",
      "Its purpose is not only to document processes, but to monitor them, measure them, track actions, and report outcomes.",
      "It is especially valuable for department-based structure, process scoring, risk visibility, and improvement follow-up.",
      "When set up correctly, it turns consulting output into a sustainable software structure.",
    ],
  },

  sections: [
    {
      title: "What is process management software?",
      paragraphs: [
        "Process management software is a software structure that enables internal company operations to be defined, monitored, evaluated, and improved in a digital environment. The goal is not only to draw flows. The real purpose is to turn the process into a living structure, create visibility, and improve manageability.",
        "In many organizations, processes are managed through Excel files, emails, personal notes, or verbal knowledge. Process management software transforms this fragmented structure into something more institutional, more traceable, and more sustainable.",
      ],
    },
    {
      title: "Why is process management software important?",
      paragraphs: [
        "As companies grow, it becomes harder to manage processes through verbal knowledge or scattered files. Especially in structures where multiple departments are involved in the same workflow, visibility loss, follow-up weakness, and decision delays become more common.",
        "That is why process management software matters. It not only makes processes defined; it makes them digitally trackable, measurable, and improvable.",
      ],
    },
    {
      title: "What does process management software do?",
      paragraphs: [
        "These systems collect processes in a department-based structure, make the current state of processes visible, support scoring and evaluation when needed, enable action follow-up, and produce reporting.",
        "So process management software is not only a recording area; it also provides a decision-support and development-tracking layer for management.",
      ],
      bullets: [
        "Collects processes in a digital environment",
        "Provides department-based visibility",
        "Tracks process state and maturity",
        "Supports actions and improvement follow-up",
        "Provides reporting and management visibility",
        "Strengthens institutional memory",
      ],
    },
    {
      title: "Which companies need process management software?",
      paragraphs: [
        "Any company whose processes are becoming complex, whose interdepartmental workflows are intensifying, or whose need for improvement and follow-up is increasing may benefit from such a structure. This is not limited only to large enterprises.",
        "It creates serious value especially in organizations where process visibility is weak, workflows depend on individuals, or improvement actions cannot be followed systematically.",
      ],
      bullets: [
        "Companies that need department-based process visibility",
        "Organizations that want to gather workflows in a digital environment",
        "Structures looking for process scoring and risk visibility",
        "Teams that want systematic action and CAPA follow-up",
        "Firms that want to make pre-ERP process data visible",
        "Organizations that want to make consulting output sustainable",
      ],
    },
    {
      title: "What does process management software add to companies?",
      paragraphs: [
        "A well-designed process management software structure does not only document processes; it also allows their development over time to be tracked. This gives management stronger visibility, gives teams clearer accountability, and gives the organization higher institutional maturity.",
      ],
      bullets: [
        "Clearer process visibility",
        "Less fragmented follow-up",
        "Stronger action management",
        "More readable reporting",
        "More sustainable process development",
        "A stronger foundation for digital transformation",
      ],
    },
    {
      title: "What is the relationship between software and consulting?",
      paragraphs: [
        "Consulting defines how the structure should be established, interpreted, and improved. Process management software ensures that this structure lives in daily use.",
        "That is why the strongest outcome appears when consulting and software are considered together. Analysis alone may not be enough; software alone may not create the right structure.",
      ],
    },
    {
      title: "Why are scoring, risk visibility, and action tracking important?",
      paragraphs: [
        "What makes a process management software solution powerful is not only keeping a process list. It is the ability to make maturity, risk, bottlenecks, and improvement areas visible.",
        "Action and follow-up are equally important. When improvement decisions are made, it must be clear who follows them, when, and with what result.",
      ],
    },
    {
      title: "Why is process management software important for ERP and digital transformation?",
      paragraphs: [
        "One of the biggest problems in ERP and digital transformation projects is the lack of process visibility. If it is unclear which areas are ready, which processes are riskier, and which improvement actions are priority, the impact of investment may remain weak.",
        "For this reason, process management software is not only an operational tool; it is also a strategic support layer for digital transformation and ERP readiness.",
      ],
    },
    {
      title: "How is Sadi positioned in this area?",
      paragraphs: [
        "Sadi is the productized form of the process management software approach. Digital process tracking, scoring, risk visibility, action follow-up, and reporting come together on the same platform.",
        "For this reason, Sadi is not only a product; it is also a solution layer that combines consulting and software for organizations that need a process management system.",
      ],
    },
    {
      title: "Conclusion",
      paragraphs: [
        "Process management software is important not only to make company processes documented, but to make them truly manageable, measurable, and improvable.",
        "In short, the right process management software means visibility, follow-up, scoring, action management, and sustainable improvement.",
      ],
    },
  ],

  relatedLinks: {
    title: "Related pages",
    items: [
      {
        title: "Process Management Software and Enterprise Software Solutions",
        href: "/hizmetler/surec-yonetimi-yazilimi-ve-kurumsal-yazilim-cozumleri",
      },
      {
        title: "Process Management Consulting",
        href: "/hizmetler/surec-yonetimi-danismanligi",
      },
      {
        title: "Sadi",
        href: "/sadi",
      },
      {
        title: "Contact",
        href: "/iletisim",
      },
    ],
  },

  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "What is process management software?",
        answer:
          "Process management software is a software structure that enables processes to be defined, tracked, evaluated, actioned, and reported in a digital environment.",
      },
      {
        question: "What does process management software do?",
        answer:
          "It provides process visibility, department-based tracking, scoring and risk evaluation, action follow-up, and reporting support.",
      },
      {
        question: "Who is this type of software suitable for?",
        answer:
          "It is suitable for companies whose processes are getting more complex, that want to collect workflows digitally, and that need stronger improvement and action follow-up.",
      },
      {
        question: "Is process management software enough without consulting?",
        answer:
          "It can help in some basic situations, but the strongest outcome comes when consulting and software are considered together. Software alone may not be enough to create the right structure.",
      },
      {
        question: "What does Sadi offer in this area?",
        answer:
          "Sadi offers a process management software approach that brings together process visibility, scoring, risk tracking, action follow-up, and reporting on a single platform.",
      },
    ],
  },

  cta: {
    title: "Let’s make process management visible through software",
    description:
      "Let’s evaluate the right structure together to digitally track processes, manage actions, and produce stronger reporting in your company.",
    primaryButton: "Contact Us",
    secondaryButton: "Explore Process Management Software Service",
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
                      href={withLang("/hizmetler/surec-yonetimi-yazilimi-ve-kurumsal-yazilim-cozumleri")}
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