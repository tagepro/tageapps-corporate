// app/[lang]/blog/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BookOpen, Clock3 } from "lucide-react";
import Container from "@/components/layout/Container";

type PageProps = {
  params: Promise<{ lang: string }>;
};

const SITE_URL = "https://www.tageapps.com";
const SOFTWARE_POST_SLUG = "kurumsal-yazilim-nedir";
const AI_POST_SLUG = "kurumsal-yapay-zeka-nedir";
const PROCESS_ANALYSIS_POST_SLUG = "is-surec-analizi-nedir";
const DIGITAL_MATURITY_POST_SLUG = "dijital-olgunluk-analizi-nedir";
const ERP_POST_SLUG = "erpye-gecmeden-once-sirketinizi-nasil-hazirlarsiniz";
const PROCESS_IMPROVEMENT_POST_SLUG = "surec-iyilestirme-nedir";
const PROCESS_SOFTWARE_POST_SLUG = "surec-yonetimi-yazilimi-nedir";
const PROCESS_MATURITY_POST_SLUG = "surec-olgunlugu-nedir";

const tr = {
  meta: {
    title:
      "Blog | Kurumsal Yazılım, Yapay Zekâ, Dijital Dönüşüm ve ERP | Tage Yazılım",
    description:
      "Tage Yazılım blogunda kurumsal yazılım, yapay zekâ, dijital dönüşüm, süreç yönetimi ve ERP alanlarında rehberler, analizler ve uygulamaya yönelik içerikleri inceleyin.",
  },

  breadcrumb: {
    home: "Anasayfa",
    blog: "Blog",
  },

  hero: {
    badge: "Blog",
    title: "Kurumsal Teknoloji, Yapay Zekâ ve Dijital Dönüşüm İçerikleri",
    description:
      "Kurumsal yazılım, yapay zekâ, dijital dönüşüm, süreç yönetimi ve ERP alanlarında rehberler, analizler ve uygulamaya yönelik içerikler.",
  },

  postsTitle: "Öne çıkan yazılar",

  posts: [
    {
      label: "Yeni yazı",
      category: "Kurumsal Yazılım",
      readTime: "10 dk okuma",
      title:
        "Kurumsal Yazılım Nedir? Şirketler Neden Özel Yazılıma İhtiyaç Duyar?",
      excerpt:
        "Kurumsal yazılım nedir, hazır yazılımdan farkı nedir ve şirketler ne zaman özel yazılıma ihtiyaç duyar? Web, mobil, portal ve ERP entegrasyonu yaklaşımını öğrenin.",
      href: `/blog/${SOFTWARE_POST_SLUG}`,
      button: "Yazıyı Oku",
    },
    {
      label: "Yeni yazı",
      category: "Yapay Zekâ",
      readTime: "10 dk okuma",
      title:
        "Kurumsal Yapay Zekâ Nedir? Şirketler Yapay Zekâyı Nasıl Kullanabilir?",
      excerpt:
        "Kurumsal yapay zekâ nedir, şirketlerde hangi alanlarda kullanılabilir ve AI projesine nasıl başlanır? Veri, doküman, süreç ve entegrasyon yaklaşımını öğrenin.",
      href: `/blog/${AI_POST_SLUG}`,
      button: "Yazıyı Oku",
    },
    {
      label: "Rehber",
      category: "Dijital Olgunluk",
      readTime: "9 dk okuma",
      title: "Dijital Olgunluk Analizi Nedir? Şirketler Nereden Başlamalı?",
      excerpt:
        "Dijital olgunluk nasıl ölçülür, süreç olgunluk neden önemlidir ve dönüşüm yatırımlarından önce nereden başlanmalıdır?",
      href: `/blog/${DIGITAL_MATURITY_POST_SLUG}`,
      button: "Yazıyı Oku",
    },
    {
      label: "Rehber",
      category: "ERP Hazırlık",
      readTime: "10 dk okuma",
      title: "ERP’ye Geçmeden Önce Şirketinizi Nasıl Hazırlarsınız?",
      excerpt:
        "ERP’ye geçmeden önce süreçler, roller, veri yapısı ve organizasyon hazırlığı neden netleştirilmelidir? Temel hazırlık adımlarını öğrenin.",
      href: `/blog/${ERP_POST_SLUG}`,
      button: "Yazıyı Oku",
    },
    {
      label: "Rehber",
      category: "Süreç Analizi",
      readTime: "8 dk okuma",
      title: "İş Süreç Analizi Nedir? Şirketlerde Süreç Analizi Nasıl Yapılır?",
      excerpt:
        "İş süreç analizi nedir, neden yapılır, darboğazlar nasıl bulunur ve süreç analizi ERP ile dijital dönüşüm hazırlığında neden kritik rol oynar?",
      href: `/blog/${PROCESS_ANALYSIS_POST_SLUG}`,
      button: "Yazıyı Oku",
    },
    {
      label: "Rehber",
      category: "Süreç İyileştirme",
      readTime: "9 dk okuma",
      title: "Süreç İyileştirme Nedir? Şirketlerde Nereden Başlanır?",
      excerpt:
        "Süreç iyileştirme nedir, neden yapılır ve şirketlerde hangi alanlardan başlanmalıdır? Darboğaz azaltma, iş akışı geliştirme ve verimlilik artışı yaklaşımını öğrenin.",
      href: `/blog/${PROCESS_IMPROVEMENT_POST_SLUG}`,
      button: "Yazıyı Oku",
    },
    {
      label: "Rehber",
      category: "Süreç Yönetimi Yazılımı",
      readTime: "9 dk okuma",
      title: "Süreç Yönetimi Yazılımı Nedir? Şirketlere Ne Kazandırır?",
      excerpt:
        "Süreç yönetimi yazılımı nedir, ne işe yarar ve şirketlere ne kazandırır? Süreç takibi, puanlama, aksiyon yönetimi ve raporlama yaklaşımını öğrenin.",
      href: `/blog/${PROCESS_SOFTWARE_POST_SLUG}`,
      button: "Yazıyı Oku",
    },
    {
      label: "Rehber",
      category: "Süreç Olgunluğu",
      readTime: "9 dk okuma",
      title: "Süreç Olgunluğu Nedir? Şirketler Süreç Seviyesini Nasıl Ölçer?",
      excerpt:
        "Süreç olgunluğu nedir, neden önemlidir ve şirketler süreç seviyesini nasıl ölçer? Puanlama, izlenebilirlik ve gelişim yaklaşımını öğrenin.",
      href: `/blog/${PROCESS_MATURITY_POST_SLUG}`,
      button: "Yazıyı Oku",
    },
  ],

  cta: {
    title: "İçerikten uygulamaya geçelim",
    description:
      "Kurumsal yazılım, yapay zekâ, dijital dönüşüm, süreç yönetimi veya ERP ihtiyacınızı birlikte değerlendirelim.",
    primaryButton: "İletişime Geçin",
    secondaryButton: "Hizmetlerimizi İnceleyin",
  },
};

const en = {
  meta: {
    title:
      "Blog | Enterprise Software, AI, Digital Transformation & ERP | Tage Yazılım",
    description:
      "Explore Tage Yazılım guides, analyses, and practical insights on enterprise software, artificial intelligence, digital transformation, process management, and ERP.",
  },

  breadcrumb: {
    home: "Home",
    blog: "Blog",
  },

  hero: {
    badge: "Blog",
    title: "Enterprise Technology, AI & Digital Transformation Insights",
    description:
      "Guides, analyses, and practical insights on enterprise software, artificial intelligence, digital transformation, process management, and ERP.",
  },

  postsTitle: "Featured articles",

  posts: [
    {
      label: "New article",
      category: "Enterprise Software",
      readTime: "10 min read",
      title:
        "What Is Enterprise Software? Why Do Companies Need Custom Software?",
      excerpt:
        "What is enterprise software, how does it differ from off-the-shelf software, and when do companies need custom solutions? Learn about web, mobile, portals, and ERP integration.",
      href: `/blog/${SOFTWARE_POST_SLUG}`,
      button: "Read Article",
    },
    {
      label: "New article",
      category: "Artificial Intelligence",
      readTime: "10 min read",
      title:
        "What Is Enterprise AI? How Can Companies Use Artificial Intelligence?",
      excerpt:
        "What is enterprise AI, where can companies use it, and how should an AI project begin? Learn about data, documents, processes, and integration.",
      href: `/blog/${AI_POST_SLUG}`,
      button: "Read Article",
    },
    {
      label: "Guide",
      category: "Digital Maturity",
      readTime: "9 min read",
      title: "What Is Digital Maturity Analysis? Where Should Companies Start?",
      excerpt:
        "How is digital maturity measured, why does process maturity matter, and where should companies start before transformation investments?",
      href: `/blog/${DIGITAL_MATURITY_POST_SLUG}`,
      button: "Read Article",
    },
    {
      label: "Guide",
      category: "ERP Readiness",
      readTime: "10 min read",
      title: "How Should You Prepare Your Company Before Moving to ERP?",
      excerpt:
        "Why should processes, roles, data structure, and organizational readiness be clarified before ERP? Learn the core preparation steps.",
      href: `/blog/${ERP_POST_SLUG}`,
      button: "Read Article",
    },
    {
      label: "Guide",
      category: "Process Analysis",
      readTime: "8 min read",
      title: "What Is Business Process Analysis? How Is It Done in Companies?",
      excerpt:
        "What is business process analysis, why is it done, how are bottlenecks identified, and why is process analysis critical for ERP and digital transformation readiness?",
      href: `/blog/${PROCESS_ANALYSIS_POST_SLUG}`,
      button: "Read Article",
    },
    {
      label: "Guide",
      category: "Process Improvement",
      readTime: "9 min read",
      title: "What Is Process Improvement? Where Should Companies Start?",
      excerpt:
        "What is process improvement, why is it done, and where should companies start? Learn the approach to workflow improvement, bottleneck reduction, and efficiency gain.",
      href: `/blog/${PROCESS_IMPROVEMENT_POST_SLUG}`,
      button: "Read Article",
    },
    {
      label: "Guide",
      category: "Process Management Software",
      readTime: "9 min read",
      title: "What Is Process Management Software? What Does It Add to Companies?",
      excerpt:
        "What is process management software, what does it do, and what value does it add to companies? Learn the approach to process visibility, scoring, action tracking, and reporting.",
      href: `/blog/${PROCESS_SOFTWARE_POST_SLUG}`,
      button: "Read Article",
    },
    {
      label: "Guide",
      category: "Process Maturity",
      readTime: "9 min read",
      title: "What Is Process Maturity? How Do Companies Measure Process Level?",
      excerpt:
        "What is process maturity, why does it matter, and how do companies measure process level? Learn the approach to scoring, traceability, and improvement.",
      href: `/blog/${PROCESS_MATURITY_POST_SLUG}`,
      button: "Read Article",
    },
  ],

  cta: {
    title: "Let’s move from content to action",
    description:
      "Let’s evaluate your enterprise software, AI, digital transformation, process management, or ERP needs together.",
    primaryButton: "Contact Us",
    secondaryButton: "Explore Our Services",
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
  const pageUrl = `${SITE_URL}/${lang}/blog`;

  return {
    title: copy.meta.title,
    description: copy.meta.description,
    alternates: {
      canonical: pageUrl,
      languages: {
        tr: `${SITE_URL}/tr/blog`,
        en: `${SITE_URL}/en/blog`,
      },
    },
    openGraph: {
      title: copy.meta.title,
      description: copy.meta.description,
      url: pageUrl,
      siteName: "Tage Yazılım",
      locale: lang === "en" ? "en_US" : "tr_TR",
      type: "website",
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

export default async function BlogIndexPage({ params }: PageProps) {
  const { lang } = await params;

  if (lang !== "tr" && lang !== "en") {
    notFound();
  }

  const copy = lang === "en" ? en : tr;
  const withLang = (path: string) => `/${lang}${path}`;
  const pageUrl = `${SITE_URL}/${lang}/blog`;

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
        item: pageUrl,
      },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: copy.meta.title,
    description: copy.meta.description,
    url: pageUrl,
    inLanguage: lang === "en" ? "en" : "tr",
    isPartOf: {
      "@type": "WebSite",
      name: "Tage Yazılım",
      url: SITE_URL,
    },
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: copy.posts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}/${lang}${post.href}`,
      name: post.title,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
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
                <li className="font-medium text-[#133E87]">
                  {copy.breadcrumb.blog}
                </li>
              </ol>
            </nav>

            <div className="max-w-4xl">
              <span className="inline-flex rounded-full border border-[#CBDCEB] bg-white px-4 py-1.5 text-sm font-medium text-[#133E87]">
                {copy.hero.badge}
              </span>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[#133E87] md:text-5xl">
                {copy.hero.title}
              </h1>


            </div>
          </Container>
        </section>

        <section className="pb-16 pt-4 md:pb-20 md:pt-6">
          <Container>
            <div className="mb-8">
              <h2 className="text-3xl font-semibold tracking-tight text-[#133E87]">
                {copy.postsTitle}
              </h2>
            </div>

            <div className="grid gap-6 xl:grid-cols-3 lg:grid-cols-2">
              {copy.posts.map((post) => (
                <article
                  key={post.title}
                  className="rounded-[28px] border border-[#CBDCEB] bg-white p-6 shadow-[0_20px_60px_rgba(19,62,135,0.08)] md:p-8"
                >
                  <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                    <span className="rounded-full bg-[#EFF5FB] px-3 py-1 font-medium text-[#133E87]">
                      {post.label}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <BookOpen size={16} />
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock3 size={16} />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold tracking-tight text-[#133E87]">
                    {post.title}
                  </h3>

                  <p className="mt-4 text-base leading-8 text-slate-700">
                    {post.excerpt}
                  </p>

                  <div className="mt-8">
                    <Link
                      href={withLang(post.href)}
                      className="inline-flex items-center gap-2 rounded-full bg-[#133E87] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                    >
                      {post.button}
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </article>
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
                  href={withLang("/hizmetler")}
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