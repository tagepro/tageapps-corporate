// app/[lang]/blog/surec-olgunlugu-nedir/page.tsx

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
const SLUG = "surec-olgunlugu-nedir";

const tr = {
  meta: {
    title:
      "Süreç Olgunluğu Nedir? Şirketler Süreç Seviyesini Nasıl Ölçer? | Tage Yazılım",
    description:
      "Süreç olgunluğu nedir, neden önemlidir ve şirketler süreç seviyesini nasıl ölçer? Süreç olgunluk değerlendirmesi, puanlama, izlenebilirlik ve gelişim yaklaşımını öğrenin.",
  },

  breadcrumb: {
    home: "Anasayfa",
    blog: "Blog",
    current: "Süreç Olgunluğu Nedir?",
  },

  article: {
    category: "Süreç Olgunluğu",
    readTime: "9 dk okuma",
    title: "Süreç Olgunluğu Nedir? Şirketler Süreç Seviyesini Nasıl Ölçer?",
    excerpt:
      "Süreç olgunluğu, bir şirketin işleyişinin ne kadar tanımlı, tekrar edilebilir, ölçülebilir, izlenebilir ve geliştirilebilir olduğunu gösteren değerlendirme yaklaşımıdır. Yalnızca sürecin var olup olmadığına değil, ne kadar yönetilebilir olduğuna bakar.",
  },

  quickAnswer: {
    title: "Kısa cevap",
    items: [
      "Süreç olgunluğu, süreçlerin ne kadar tanımlı ve yönetilebilir olduğunu gösterir.",
      "Amaç yalnızca süreci tarif etmek değil; süreci ölçmek, izlemek ve geliştirebilir hale getirmektir.",
      "Olgunluk seviyesi arttıkça süreçler kişilere daha az bağımlı, daha izlenebilir ve daha sürdürülebilir hale gelir.",
      "Bu yaklaşım dijital olgunluk, ERP hazırlık ve süreç yönetimi yazılımı için güçlü bir temel oluşturur.",
    ],
  },

  sections: [
    {
      title: "Süreç olgunluğu nedir?",
      paragraphs: [
        "Süreç olgunluğu, bir işleyişin ne kadar tanımlı, tekrar edilebilir, kontrol edilebilir ve geliştirilebilir olduğunu gösteren değerlendirme yaklaşımıdır. Burada temel soru şudur: süreç sadece var mı, yoksa gerçekten yönetilebiliyor mu?",
        "Birçok şirkette süreçler vardır; ancak bu süreçlerin ne kadar standart, ne kadar izlenebilir ve ne kadar ölçülebilir olduğu farklıdır. Süreç olgunluğu değerlendirmesi, tam da bu farkı görünür hale getirir.",
      ],
    },
    {
      title: "Süreç olgunluğu neden önemlidir?",
      paragraphs: [
        "Şirketlerde süreçlerin var olması tek başına yeterli değildir. Eğer süreç kişilere bağımlıysa, takip zor yapılıyorsa, rol ve sorumluluklar net değilse ve aynı iş farklı ekiplerde farklı biçimde yürüyorsa, süreç düşük olgunluk seviyesinde kalır.",
        "Süreç olgunluğu bu yüzden önemlidir. Çünkü sadece mevcut durumu görmekle kalmaz; hangi alanın daha kırılgan, hangi alanın daha güçlü ve hangi noktalarda gelişim gerektiğini de ortaya çıkarır.",
      ],
    },
    {
      title: "Süreç olgunluğu ile süreç performansı aynı şey midir?",
      paragraphs: [
        "Hayır, aynı şey değildir. Süreç performansı daha çok sonuca odaklanır; hız, maliyet, süre veya hata oranı gibi çıktılara bakar. Süreç olgunluğu ise bu çıktıyı üreten yapının ne kadar kurumsallaşmış ve sürdürülebilir olduğunu değerlendirir.",
        "Başka bir deyişle, bir süreç bugün hızlı çalışıyor olabilir; ama kişilere bağımlıysa ve sistematik takip edilmiyorsa yine de düşük olgunluk seviyesinde olabilir.",
      ],
    },
    {
      title: "Süreç olgunluğu nasıl ölçülür?",
      paragraphs: [
        "Süreç olgunluğu ölçümü, yapısal bir değerlendirme mantığıyla yapılır. Amaç yalnızca genel yorum yapmak değil; süreçlerin hangi seviyede olduğunu daha somut biçimde puanlayabilmektir.",
      ],
      bullets: [
        "Süreç tanımı var mı?",
        "Rol ve sorumluluklar net mi?",
        "Süreç tekrar edilebilir mi?",
        "Takip ve ölçüm yapılabiliyor mu?",
        "Risk ve aksiyon alanları görünür mü?",
        "İyileştirme ve yeniden değerlendirme yapılabiliyor mu?",
      ],
    },
    {
      title: "Olgunluk seviyesi yükseldikçe ne değişir?",
      paragraphs: [
        "Olgunluk seviyesi yükseldikçe süreçler kişisel bilgiyle değil, kurumsal yapı ile yürümeye başlar. Süreçler daha net tanımlanır, rol dağılımı daha görünür olur, izleme ve raporlama güçlenir ve iyileştirme daha düzenli hale gelir.",
        "Bu da şirketin yalnızca bugünkü operasyonlarını değil, gelecekteki büyüme ve dönüşüm kapasitesini de etkiler.",
      ],
      bullets: [
        "Kişiye bağımlılık azalır",
        "Standart işleyiş artar",
        "Takip ve raporlama güçlenir",
        "İyileştirme aksiyonları netleşir",
        "Yönetim görünürlüğü artar",
        "Dijitalleşme zemini güçlenir",
      ],
    },
    {
      title: "Hangi alanlarda süreç olgunluğu düşük kalır?",
      paragraphs: [
        "Süreç olgunluğu en çok süreç tanımının zayıf, rollerin dağınık ve takip yapısının yetersiz olduğu alanlarda düşük kalır.",
      ],
      bullets: [
        "Süreçler kişilere bağımlıysa",
        "Aynı iş farklı ekiplerde farklı yürüyorsa",
        "Sorumlular net değilse",
        "Ölçüm ve raporlama yapılmıyorsa",
        "Aksiyon takibi sistemli değilse",
        "İyileştirme kültürü zayıfsa",
      ],
    },
    {
      title: "Süreç olgunluğu ile dijital olgunluk arasındaki ilişki nedir?",
      paragraphs: [
        "Süreç olgunluğu, dijital olgunluğun temel bileşenlerinden biridir. Çünkü süreç yeterince net değilse, dijital araçlar yalnızca mevcut karmaşıklığı dijital ortama taşımış olur.",
        "Bu nedenle dijital dönüşümden önce veya dijital olgunluk değerlendirmesi sırasında süreç olgunluk seviyesinin görülmesi çok önemlidir.",
      ],
    },
    {
      title: "Süreç olgunluğu ERP hazırlık için neden önemlidir?",
      paragraphs: [
        "ERP projelerinde en kritik noktalardan biri, süreçlerin ne kadar hazır olduğudur. Süreç olgunluğu düşükse ERP sistemi içinde kurulacak yapı da zayıf kalabilir.",
        "Bu nedenle süreç olgunluğu değerlendirmesi, ERP öncesi risk görünürlüğü ve hazırlık seviyesini anlamak için değerli bir araçtır.",
      ],
    },
    {
      title: "Sadi bu alanda nasıl konumlanır?",
      paragraphs: [
        "Sadi, süreç olgunluğu yaklaşımını dijital ortamda görünür hale getiren ürün katmanıdır. Süreçlerin puanlanması, risklerin işaretlenmesi, gelişim alanlarının görünür olması ve aksiyonların takip edilmesi aynı platformda desteklenebilir.",
        "Bu nedenle Sadi, süreç olgunluğu değerlendirmesini yalnızca teorik rapor olmaktan çıkarıp yaşayan bir takip yapısına dönüştürmeye yardımcı olur.",
      ],
    },
    {
      title: "Sonuç",
      paragraphs: [
        "Süreç olgunluğu, şirketlerin süreçlerini yalnızca var olan yapı olarak değil; geliştirilebilir ve yönetilebilir sistem olarak görmesini sağlar. Bu da büyüme, dijitalleşme ve ERP hazırlık gibi alanlarda daha güçlü karar zemini oluşturur.",
        "Kısacası süreç olgunluğu; görünürlük, ölçüm, sürdürülebilirlik ve gelişim kapasitesi demektir.",
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
        question: "Süreç olgunluğu nedir?",
        answer:
          "Süreç olgunluğu, bir sürecin ne kadar tanımlı, tekrar edilebilir, izlenebilir, ölçülebilir ve geliştirilebilir olduğunu gösteren değerlendirme yaklaşımıdır.",
      },
      {
        question: "Süreç olgunluğu neden önemlidir?",
        answer:
          "Çünkü süreçlerin sadece var olup olmadığını değil, ne kadar yönetilebilir ve sürdürülebilir olduğunu gösterir. Bu da gelişim alanlarını ve riskleri görünür hale getirir.",
      },
      {
        question: "Süreç olgunluğu nasıl ölçülür?",
        answer:
          "Süreç tanımı, rol ve sorumluluk netliği, tekrar edilebilirlik, ölçüm yapısı, risk görünürlüğü ve iyileştirme kabiliyeti gibi başlıklar değerlendirilerek ölçülür.",
      },
      {
        question: "Süreç olgunluğu ile dijital olgunluk ilişkili midir?",
        answer:
          "Evet. Süreç olgunluğu, dijital olgunluğun temel bileşenlerinden biridir. Süreç net değilse dijital yatırımların etkisi sınırlı kalabilir.",
      },
      {
        question: "Sadi bu değerlendirmede nasıl kullanılır?",
        answer:
          "Sadi, süreçlerin puanlanması, risk alanlarının görünür hale getirilmesi, gelişim alanlarının izlenmesi ve aksiyonların takip edilmesi için destekleyici ürün yapısı sunar.",
      },
    ],
  },

  cta: {
    title: "Süreç olgunluğu seviyenizi birlikte değerlendirelim",
    description:
      "Şirketinizde süreçlerin ne kadar tanımlı, izlenebilir ve geliştirilebilir olduğunu birlikte netleştirelim.",
    primaryButton: "İletişime Geçin",
    secondaryButton: "Dijital Olgunluk Hizmetini İnceleyin",
  },
};

const en = {
  meta: {
    title:
      "What Is Process Maturity? How Do Companies Measure Process Level? | Tage Yazılım",
    description:
      "What is process maturity, why does it matter, and how do companies measure process level? Learn the approach to process maturity assessment, scoring, traceability, and improvement.",
  },

  breadcrumb: {
    home: "Home",
    blog: "Blog",
    current: "What Is Process Maturity?",
  },

  article: {
    category: "Process Maturity",
    readTime: "9 min read",
    title: "What Is Process Maturity? How Do Companies Measure Process Level?",
    excerpt:
      "Process maturity is the assessment approach that shows how defined, repeatable, measurable, traceable, and improvable a company’s operations are. It does not only ask whether a process exists, but how manageable it really is.",
  },

  quickAnswer: {
    title: "Short answer",
    items: [
      "Process maturity shows how defined and manageable processes are.",
      "The goal is not only to describe the process, but to make it measurable, trackable, and improvable.",
      "As maturity level rises, processes become less dependent on individuals and more sustainable.",
      "This approach creates a strong foundation for digital maturity, ERP readiness, and process management software.",
    ],
  },

  sections: [
    {
      title: "What is process maturity?",
      paragraphs: [
        "Process maturity is the assessment approach that shows how defined, repeatable, controllable, and improvable a workflow is. The main question here is this: does the process merely exist, or can it truly be managed?",
        "In many companies, processes exist, but the level of standardization, traceability, and measurability differs widely. Process maturity assessment makes that difference visible.",
      ],
    },
    {
      title: "Why is process maturity important?",
      paragraphs: [
        "It is not enough for companies to simply have processes. If a process depends on individuals, is hard to track, has unclear roles, and is executed differently by different teams, it remains at a low maturity level.",
        "That is why process maturity matters. It not only shows the current state, but also reveals which areas are fragile, which are stronger, and where development is needed.",
      ],
    },
    {
      title: "Is process maturity the same as process performance?",
      paragraphs: [
        "No, they are not the same. Process performance focuses more on outcomes such as speed, cost, duration, or error rate. Process maturity evaluates how institutionalized and sustainable the structure behind those outcomes is.",
        "In other words, a process may work fast today; but if it depends on individuals and is not followed systematically, it may still have low maturity.",
      ],
    },
    {
      title: "How is process maturity measured?",
      paragraphs: [
        "Process maturity measurement is carried out through a structured evaluation logic. The goal is not only to make general comments, but to score more concretely which level a process stands at.",
      ],
      bullets: [
        "Is there a process definition?",
        "Are roles and responsibilities clear?",
        "Is the process repeatable?",
        "Can follow-up and measurement be done?",
        "Are risks and action areas visible?",
        "Can improvement and reassessment be carried out?",
      ],
    },
    {
      title: "What changes as maturity level increases?",
      paragraphs: [
        "As maturity level rises, processes begin to run through institutional structure rather than personal knowledge. Processes become more clearly defined, role distribution becomes more visible, monitoring and reporting improve, and improvement becomes more systematic.",
        "This affects not only today’s operations, but also the company’s future growth and transformation capacity.",
      ],
      bullets: [
        "Less dependency on individuals",
        "More standardized operations",
        "Stronger monitoring and reporting",
        "Clearer improvement actions",
        "Higher management visibility",
        "A stronger digital foundation",
      ],
    },
    {
      title: "Where does process maturity remain low?",
      paragraphs: [
        "Process maturity usually remains low where process definition is weak, roles are fragmented, and tracking structures are insufficient.",
      ],
      bullets: [
        "If processes depend on individuals",
        "If the same work is done differently by different teams",
        "If ownership is unclear",
        "If measurement and reporting are missing",
        "If action follow-up is not systematic",
        "If the improvement culture is weak",
      ],
    },
    {
      title: "What is the relationship between process maturity and digital maturity?",
      paragraphs: [
        "Process maturity is one of the core components of digital maturity. If the process is not clear enough, digital tools may only move existing complexity into a digital environment.",
        "For this reason, seeing process maturity level is very important before digital transformation or during a digital maturity assessment.",
      ],
    },
    {
      title: "Why is process maturity important for ERP readiness?",
      paragraphs: [
        "One of the most critical issues in ERP projects is how ready the processes are. If process maturity is low, the structure built inside the ERP system may remain weak as well.",
        "That is why process maturity assessment is valuable for understanding readiness level and risk visibility before ERP.",
      ],
    },
    {
      title: "How is Sadi positioned in this area?",
      paragraphs: [
        "Sadi is the product layer that makes the process maturity approach visible in a digital environment. Process scoring, risk visibility, development areas, and action follow-up can all be supported on the same platform.",
        "For this reason, Sadi helps turn process maturity assessment from a theoretical report into a living follow-up structure.",
      ],
    },
    {
      title: "Conclusion",
      paragraphs: [
        "Process maturity enables companies to see their processes not only as existing structures, but as manageable and improvable systems. This creates a stronger decision basis for growth, digitalization, and ERP readiness.",
        "In short, process maturity means visibility, measurement, sustainability, and development capacity.",
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
        question: "What is process maturity?",
        answer:
          "Process maturity is the assessment approach that shows how defined, repeatable, traceable, measurable, and improvable a process is.",
      },
      {
        question: "Why is process maturity important?",
        answer:
          "Because it shows not only whether processes exist, but how manageable and sustainable they are. That makes development areas and risks more visible.",
      },
      {
        question: "How is process maturity measured?",
        answer:
          "It is measured by evaluating factors such as process definition, role clarity, repeatability, measurement structure, risk visibility, and improvement capability.",
      },
      {
        question: "Is process maturity related to digital maturity?",
        answer:
          "Yes. Process maturity is one of the core components of digital maturity. If processes are unclear, the impact of digital investments may remain limited.",
      },
      {
        question: "How is Sadi used in this assessment?",
        answer:
          "Sadi provides a supporting structure for process scoring, risk visibility, development tracking, and action follow-up.",
      },
    ],
  },

  cta: {
    title: "Let’s assess your process maturity level together",
    description:
      "Let’s clarify how defined, traceable, and improvable your company’s processes are.",
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