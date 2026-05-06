// app/[lang]/blog/surec-iyilestirme-nedir/page.tsx

// app/[lang]/blog/surec-iyilestirme-nedir/page.tsx

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
const SLUG = "surec-iyilestirme-nedir";

const tr = {
  meta: {
    title:
      "Süreç İyileştirme Nedir? Şirketlerde Nereden Başlanır? | Tage Yazılım",
    description:
      "Süreç iyileştirme nedir, neden yapılır ve şirketlerde nereden başlanır? İş akışı iyileştirme, verimlilik artışı, darboğaz giderme ve sürdürülebilir geliştirme yaklaşımını öğrenin.",
  },

  breadcrumb: {
    home: "Anasayfa",
    blog: "Blog",
    current: "Süreç İyileştirme Nedir?",
  },

  article: {
    category: "Süreç İyileştirme",
    readTime: "9 dk okuma",
    title: "Süreç İyileştirme Nedir? Şirketlerde Nereden Başlanır?",
    excerpt:
      "Süreç iyileştirme, bir şirketin mevcut işleyişini daha verimli, daha hızlı, daha izlenebilir ve daha sürdürülebilir hale getirmek için yürüttüğü sistematik geliştirme çalışmasıdır. Doğru yaklaşımla yapıldığında yalnızca operasyonel verimi değil; karar kalitesini, ekip uyumunu ve dijital dönüşüm hazırlığını da güçlendirir.",
  },

  quickAnswer: {
    title: "Kısa cevap",
    items: [
      "Süreç iyileştirme, mevcut işleyişteki darboğazları, tekrar işleri ve verimsizlikleri azaltma çalışmasıdır.",
      "Amaç yalnızca süreci hızlandırmak değil; daha net, daha ölçülebilir ve daha sürdürülebilir hale getirmektir.",
      "Süreç iyileştirme çoğu zaman süreç analizi ile başlar ve aksiyon planı ile devam eder.",
      "Doğru yapıldığında operasyonel verim, yönetim görünürlüğü ve dijital hazırlık birlikte güçlenir.",
    ],
  },

  sections: [
    {
      title: "Süreç iyileştirme nedir?",
      paragraphs: [
        "Süreç iyileştirme, bir işin mevcut akışını daha etkili hale getirmek için yapılan sistematik geliştirme çalışmasıdır. Buradaki amaç yalnızca işleri hızlandırmak değildir. Asıl amaç; gereksiz adımları azaltmak, beklemeleri düşürmek, rol karmaşasını azaltmak, verimsizlikleri ortadan kaldırmak ve işleyişi daha yönetilebilir hale getirmektir.",
        "Birçok şirkette süreçler çalışır durumda görünür; ancak bu, o süreçlerin iyi çalıştığı anlamına gelmez. Süreç iyileştirme tam da bu noktada devreye girer ve mevcut işleyişin daha iyi hale nasıl getirileceğini görünür kılar.",
      ],
    },
    {
      title: "Süreç iyileştirme neden önemlidir?",
      paragraphs: [
        "Şirketlerde birçok sorun çoğu zaman tek bir büyük problemden değil, küçük ama sürekli tekrar eden verimsizliklerden doğar. Geciken onaylar, gereksiz tekrar girişler, rol belirsizlikleri, farklı ekiplerin aynı işi farklı yapması ve takip eksikliği zamanla ciddi verim kaybı yaratır.",
        "Süreç iyileştirme bu yüzden önemlidir. Çünkü şirketin yalnızca bugünkü darboğazlarını azaltmaz; aynı zamanda büyümeye, dijitalleşmeye ve daha kurumsal çalışmaya uygun zemin oluşturur.",
      ],
    },
    {
      title: "Süreç iyileştirme ile süreç analizi arasındaki fark nedir?",
      paragraphs: [
        "Süreç analizi, mevcut işleyişin nasıl çalıştığını anlamaya odaklanır. Süreç iyileştirme ise bu analizden çıkan bulgular üzerinden neyin nasıl geliştirileceğini belirler.",
        "Daha sade anlatırsak; süreç analizi mevcut durumu görünür hale getirir, süreç iyileştirme ise bu görünürlük üzerinden yeni ve daha güçlü işleyiş kurgusunu oluşturur. Bu nedenle çoğu doğru iyileştirme çalışması, önce analiz sonra geliştirme mantığıyla ilerler.",
      ],
    },
    {
      title: "Şirketlerde süreç iyileştirme nereden başlamalı?",
      paragraphs: [
        "En doğru başlangıç, her süreci aynı anda değiştirmeye çalışmak değildir. Önce en kritik, en çok aksayan, en fazla departman etkileyen veya en fazla tekrar iş üreten alanlar belirlenmelidir.",
        "Özellikle satıştan siparişe, satın almadan sevkiyata, üretim planlamadan kaliteye kadar birçok alanda ilk adım; mevcut akışın nerede zorlandığını açıkça görmek ve öncelikli darboğazları seçmektir.",
      ],
      bullets: [
        "Önce kritik süreç belirlenir",
        "Mevcut işleyiş gözden geçirilir",
        "Darboğazlar ve tekrar işler tespit edilir",
        "Rol ve sorumluluklar netleştirilir",
        "Yeni akış daha sade biçimde tasarlanır",
        "İyileştirme aksiyonları sıraya konur",
      ],
    },
    {
      title: "En sık görülen süreç iyileştirme alanları nelerdir?",
      paragraphs: [
        "Şirketlerde süreç iyileştirme ihtiyacı en çok iş akışının uzadığı, tekrarların arttığı ve sorumlulukların net olmadığı alanlarda ortaya çıkar.",
      ],
      bullets: [
        "Gereksiz onay adımlarının azaltılması",
        "Aynı verinin tekrar tekrar girilmesinin önlenmesi",
        "Departmanlar arası geçişlerin netleştirilmesi",
        "Takip ve aksiyon yapısının görünür hale getirilmesi",
        "Raporlama ve yönetim görünürlüğünün güçlendirilmesi",
        "Standart iş akışlarının oluşturulması",
      ],
    },
    {
      title: "Süreç iyileştirme şirketlere ne kazandırır?",
      paragraphs: [
        "Doğru yürütülen bir süreç iyileştirme çalışması yalnızca zaman tasarrufu sağlamaz. Aynı zamanda ekipler arası uyumu artırır, karar kalitesini yükseltir ve yönetime daha net bir görünürlük sunar.",
        "İyileştirilmiş süreçler sayesinde işlerin kişilere bağımlılığı azalır, tekrar iş düşer, beklemeler kısalır ve ölçülebilirlik artar. Bu da hem operasyonel verim hem de kurumsal olgunluk açısından önemli katkı sağlar.",
      ],
      bullets: [
        "Daha az tekrar iş",
        "Daha kısa işlem süresi",
        "Daha net sorumluluk yapısı",
        "Daha yüksek verimlilik",
        "Daha güçlü yönetim görünürlüğü",
        "Daha sağlıklı dijital dönüşüm zemini",
      ],
    },
    {
      title: "İş akışı yönetimi ile süreç iyileştirme ilişkisi nedir?",
      paragraphs: [
        "Süreç iyileştirme ile iş akışı yönetimi doğrudan bağlantılıdır. Çünkü süreçte yapılan her iyileştirme, sonunda iş akışının daha sade, daha kontrollü ve daha izlenebilir çalışmasını hedefler.",
        "Bu nedenle birçok kurum için süreç iyileştirme yalnızca bir operasyon projesi değil; aynı zamanda iş akışı yönetimini kurumsallaştırma çalışmasıdır.",
      ],
    },
    {
      title: "Süreç iyileştirme dijital dönüşüm için neden önemlidir?",
      paragraphs: [
        "Dijital dönüşüm projelerinde en sık yapılan hata, mevcut verimsiz yapıyı olduğu gibi dijital ortama taşımaktır. Oysa süreç iyileştirme yapılmadan teknoloji yatırımı yapmak çoğu zaman sorunu çözmez; sadece görünümünü değiştirir.",
        "Süreç iyileştirme bu yüzden dijital dönüşüm için kritik bir ön adımdır. Çünkü teknolojiye geçmeden önce işleyişin ne kadar net, sade ve yönetilebilir olduğunu güçlendirir.",
      ],
    },
    {
      title: "Tage Yazılım bu konuya nasıl yaklaşıyor?",
      paragraphs: [
        "Tage Yazılım süreç iyileştirmeyi yalnızca birkaç adımı hızlandırmak olarak görmez. Yaklaşım; mevcut işleyişi anlamak, süreç analizini yapmak, darboğazları görünür kılmak, yeni akışı daha sade ve daha güçlü tasarlamak ve gerekirse bunu yazılım ile sürdürülebilir hale getirmek üzerine kuruludur.",
        "Bu nedenle süreç iyileştirme çalışmaları; süreç analizi, iş akışı yönetimi, dijital olgunluk, ERP hazırlık ve Sadi ile ölçüm / takip yapısı ile birlikte ele alınır.",
      ],
    },
    {
      title: "Sonuç",
      paragraphs: [
        "Süreç iyileştirme, şirketlerde büyümeyi, verimliliği ve yönetilebilirliği güçlendiren temel çalışmalardan biridir. Mevcut işleyiş görünür hale geldikten sonra yapılan iyileştirme çalışmaları, sadece bugünkü sorunları azaltmaz; gelecekteki dijital ve kurumsal gelişimin temelini de oluşturur.",
        "Kısacası süreç iyileştirme; daha net işleyiş, daha az kayıp, daha güçlü kontrol ve daha sürdürülebilir büyüme demektir.",
      ],
    },
  ],

  relatedLinks: {
    title: "İlgili sayfalar",
    items: [
      {
        title: "Süreç İyileştirme ve İş Akışı Yönetimi",
        href: "/hizmetler/surec-iyilestirme-ve-is-akisi-yonetimi",
      },
      {
        title: "Süreç Analizi ve Süreç Modelleme",
        href: "/hizmetler/surec-analizi-ve-surec-modelleme",
      },
      {
        title: "Süreç Yönetimi Danışmanlığı",
        href: "/hizmetler/surec-yonetimi-danismanligi",
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
        question: "Süreç iyileştirme nedir?",
        answer:
          "Süreç iyileştirme, mevcut iş akışını daha verimli, daha hızlı, daha net ve daha sürdürülebilir hale getirmek için yapılan geliştirme çalışmasıdır.",
      },
      {
        question: "Süreç iyileştirme neden yapılır?",
        answer:
          "Darboğazları azaltmak, tekrar işleri düşürmek, rol belirsizliğini azaltmak, iş akışını sadeleştirmek ve operasyonel verimi artırmak için yapılır.",
      },
      {
        question: "Süreç analizi ile süreç iyileştirme aynı şey midir?",
        answer:
          "Hayır. Süreç analizi mevcut durumu anlamaya odaklanır. Süreç iyileştirme ise bu mevcut durum üzerinden neyin nasıl geliştirileceğini belirler.",
      },
      {
        question: "Süreç iyileştirme hangi alanlarda uygulanabilir?",
        answer:
          "Satış, satın alma, üretim, kalite, depo, lojistik, finans, insan kaynakları ve müşteri destek süreçleri dahil birçok alanda uygulanabilir.",
      },
      {
        question: "Süreç iyileştirme dijital dönüşümden önce gerekli midir?",
        answer:
          "Evet. Çünkü verimsiz ve karmaşık bir yapıyı olduğu gibi dijital ortama taşımak dönüşümün etkisini azaltabilir. İyileştirme önce yapılırsa teknoloji yatırımı daha sağlıklı sonuç verir.",
      },
    ],
  },

  cta: {
    title: "Süreçlerinizi birlikte iyileştirelim",
    description:
      "Şirketinizde hangi süreçlerin aksadığını, nerede darboğaz oluştuğunu ve hangi alanlarda hızlı iyileştirme yapılabileceğini birlikte değerlendirelim.",
    primaryButton: "İletişime Geçin",
    secondaryButton: "Süreç İyileştirme Hizmetini İnceleyin",
  },
};

const en = {
  meta: {
    title:
      "What Is Process Improvement? Where Should Companies Start? | Tage Yazılım",
    description:
      "What is process improvement, why is it done, and where should companies start? Learn the approach to workflow improvement, efficiency gain, bottleneck removal, and sustainable operational development.",
  },

  breadcrumb: {
    home: "Home",
    blog: "Blog",
    current: "What Is Process Improvement?",
  },

  article: {
    category: "Process Improvement",
    readTime: "9 min read",
    title: "What Is Process Improvement? Where Should Companies Start?",
    excerpt:
      "Process improvement is the systematic effort to make a company’s existing operations more efficient, faster, more traceable, and more sustainable. When handled correctly, it strengthens not only operational productivity, but also decision quality, team alignment, and digital transformation readiness.",
  },

  quickAnswer: {
    title: "Short answer",
    items: [
      "Process improvement is the effort to reduce bottlenecks, rework, and inefficiencies in the current workflow.",
      "The aim is not only to make the process faster, but to make it clearer, more measurable, and more sustainable.",
      "Process improvement usually starts with process analysis and continues with an action plan.",
      "When done correctly, operational efficiency, management visibility, and digital readiness improve together.",
    ],
  },

  sections: [
    {
      title: "What is process improvement?",
      paragraphs: [
        "Process improvement is the systematic work carried out to make an existing workflow more effective. The goal is not only to speed work up. The real purpose is to reduce unnecessary steps, lower waiting times, decrease role confusion, remove inefficiencies, and make operations more manageable.",
        "In many companies, processes may appear to function, but that does not mean they function well. Process improvement addresses exactly this point and makes visible how current operations can be made stronger.",
      ],
    },
    {
      title: "Why is process improvement important?",
      paragraphs: [
        "In companies, many problems do not arise from one major issue, but from small yet repeated inefficiencies. Delayed approvals, repeated data entry, unclear responsibilities, different teams doing the same job in different ways, and lack of follow-up create serious productivity loss over time.",
        "That is why process improvement matters. It not only reduces today’s bottlenecks, but also creates a foundation for growth, digitalization, and more institutional working practices.",
      ],
    },
    {
      title: "What is the difference between process analysis and process improvement?",
      paragraphs: [
        "Process analysis focuses on understanding how current operations work. Process improvement determines what should be developed and how, based on the findings of that analysis.",
        "Put more simply: process analysis makes the current state visible, while process improvement builds a stronger future workflow based on that visibility. That is why most effective improvement work proceeds with analysis first and development second.",
      ],
    },
    {
      title: "Where should companies start with process improvement?",
      paragraphs: [
        "The right starting point is not trying to change every process at once. First, the most critical areas should be identified: those that fail most often, affect the most departments, or create the highest amount of rework.",
        "In many organizations, the first step is to clearly see where current flow struggles, especially in areas such as sales-to-order, procurement-to-supply, production planning, quality, and fulfillment.",
      ],
      bullets: [
        "Select the critical process first",
        "Review the current workflow",
        "Identify bottlenecks and rework",
        "Clarify roles and responsibilities",
        "Design a simpler target workflow",
        "Prioritize improvement actions",
      ],
    },
    {
      title: "What are the most common process improvement areas?",
      paragraphs: [
        "The need for process improvement most often appears where workflows become long, repetitive work increases, and responsibilities are unclear.",
      ],
      bullets: [
        "Reducing unnecessary approval steps",
        "Preventing repeated entry of the same data",
        "Clarifying interdepartmental transitions",
        "Making follow-up and action ownership visible",
        "Strengthening reporting and management visibility",
        "Creating standard workflows",
      ],
    },
    {
      title: "What does process improvement add to companies?",
      paragraphs: [
        "A well-executed process improvement effort does not only save time. It also improves cross-team alignment, increases decision quality, and provides stronger management visibility.",
        "With improved processes, dependency on individuals decreases, rework drops, waiting times are shortened, and measurability increases. This contributes both to operational productivity and institutional maturity.",
      ],
      bullets: [
        "Less rework",
        "Shorter processing time",
        "Clearer responsibility structure",
        "Higher efficiency",
        "Stronger management visibility",
        "A healthier foundation for digital transformation",
      ],
    },
    {
      title: "What is the relationship between workflow management and process improvement?",
      paragraphs: [
        "Process improvement and workflow management are directly connected. Because every improvement effort ultimately aims to make the workflow simpler, more controlled, and more traceable.",
        "For this reason, for many organizations process improvement is not only an operational project, but also a way of institutionalizing workflow management.",
      ],
    },
    {
      title: "Why is process improvement important for digital transformation?",
      paragraphs: [
        "One of the most common mistakes in digital transformation projects is moving an inefficient structure into a digital environment without improving it first. Technology alone often does not solve the problem; it may only change its appearance.",
        "That is why process improvement is a critical pre-step for digital transformation. It strengthens how clear, simple, and manageable the workflow is before technology investment begins.",
      ],
    },
    {
      title: "How does Tage Yazılım approach this topic?",
      paragraphs: [
        "Tage Yazılım does not see process improvement as simply speeding up a few steps. The approach is built on understanding the current operation, conducting process analysis, making bottlenecks visible, designing a simpler and stronger future workflow, and when needed, making this structure sustainable through software.",
        "For this reason, process improvement is handled together with process analysis, workflow management, digital maturity, ERP readiness, and measurement / follow-up through Sadi.",
      ],
    },
    {
      title: "Conclusion",
      paragraphs: [
        "Process improvement is one of the core efforts that strengthens growth, productivity, and manageability in companies. Once the current workflow becomes visible, improvement work not only reduces today’s problems, but also builds the basis for future digital and institutional development.",
        "In short, process improvement means clearer operations, less waste, stronger control, and more sustainable growth.",
      ],
    },
  ],

  relatedLinks: {
    title: "Related pages",
    items: [
      {
        title: "Process Improvement and Workflow Management",
        href: "/hizmetler/surec-iyilestirme-ve-is-akisi-yonetimi",
      },
      {
        title: "Process Analysis and Process Modeling",
        href: "/hizmetler/surec-analizi-ve-surec-modelleme",
      },
      {
        title: "Process Management Consulting",
        href: "/hizmetler/surec-yonetimi-danismanligi",
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
        question: "What is process improvement?",
        answer:
          "Process improvement is the effort to make an existing workflow more efficient, faster, clearer, and more sustainable.",
      },
      {
        question: "Why is process improvement done?",
        answer:
          "It is done to reduce bottlenecks, lower rework, clarify roles, simplify workflows, and increase operational productivity.",
      },
      {
        question: "Are process analysis and process improvement the same?",
        answer:
          "No. Process analysis focuses on understanding the current state, while process improvement focuses on how that current state should be improved.",
      },
      {
        question: "In which areas can process improvement be applied?",
        answer:
          "It can be applied in sales, procurement, production, quality, warehouse, logistics, finance, HR, and customer support processes.",
      },
      {
        question: "Is process improvement necessary before digital transformation?",
        answer:
          "Yes. Moving an inefficient and overly complex structure directly into a digital environment may reduce the impact of transformation. Improvement first usually leads to healthier technology outcomes.",
      },
    ],
  },

  cta: {
    title: "Let’s improve your processes together",
    description:
      "Let’s evaluate which processes are struggling in your company, where bottlenecks occur, and where quick improvements can be made.",
    primaryButton: "Contact Us",
    secondaryButton: "Explore Process Improvement Service",
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
                      href={withLang("/hizmetler/surec-iyilestirme-ve-is-akisi-yonetimi")}
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