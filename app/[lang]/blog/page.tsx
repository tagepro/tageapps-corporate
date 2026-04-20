// app/[lang]/blog/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BookOpen,
  Clock3,
} from "lucide-react";
import Container from "@/components/layout/Container";

type PageProps = {
  params: Promise<{ lang: string }>;
};

const SITE_URL = "https://www.tageapps.com";
const FIRST_POST_SLUG = "is-surec-analizi-nedir";
const SECOND_POST_SLUG = "dijital-olgunluk-analizi-nedir";
const THIRD_POST_SLUG = "erpye-gecmeden-once-sirketinizi-nasil-hazirlarsiniz";

const tr = {
  meta: {
    title: "Blog | Süreç Analizi, Dijital Dönüşüm ve ERP İçerikleri | Tage Yazılım",
    description:
      "Tage Yazılım blogunda süreç analizi, dijital olgunluk, ERP hazırlık, süreç iyileştirme ve Sadi odaklı kurumsal içerikleri inceleyin.",
  },

  breadcrumb: {
    home: "Anasayfa",
    blog: "Blog",
  },

  hero: {
    badge: "Blog",
    title: "Süreç yönetimi, Dijital Dönüşüm ve ERP Üzerine İçerikler",
    description:
      "Tage Yazılım blogunda süreç analizi, dijital olgunluk, ERP hazırlık, süreç iyileştirme ve Sadi ile ilgili kurumsal içerikleri bulabilirsiniz.",
  },

  postsTitle: "Öne çıkan yazılar",

  posts: [
    {
      label: "İlk yazı",
      category: "Süreç Analizi",
      readTime: "8 dk okuma",
      title: "İş Süreç Analizi Nedir? Şirketlerde Süreç Analizi Nasıl Yapılır?",
      excerpt:
        "İş süreç analizi nedir, neden yapılır, darboğazlar nasıl bulunur ve süreç analizi ERP ile dijital dönüşüm hazırlığında neden kritik rol oynar?",
      href: `/blog/${FIRST_POST_SLUG}`,
      button: "Yazıyı Oku",
    },
    {
      label: "Yeni yazı",
      category: "Dijital Olgunluk",
      readTime: "9 dk okuma",
      title: "Dijital Olgunluk Analizi Nedir? Şirketler Nereden Başlamalı?",
      excerpt:
        "Dijital olgunluk nasıl ölçülür, süreç olgunluk neden önemlidir ve dönüşüm yatırımlarından önce nereden başlanmalıdır?",
      href: `/blog/${SECOND_POST_SLUG}`,
      button: "Yazıyı Oku",
    },
    {
      label: "Yeni yazı",
      category: "ERP Hazırlık",
      readTime: "10 dk okuma",
      title: "ERP’ye Geçmeden Önce Şirketinizi Nasıl Hazırlarsınız?",
      excerpt:
        "ERP’ye geçmeden önce süreçler, roller, veri yapısı ve organizasyon hazırlığı neden netleştirilmelidir? Temel hazırlık adımlarını öğrenin.",
      href: `/blog/${THIRD_POST_SLUG}`,
      button: "Yazıyı Oku",
    },
  ],

  cta: {
    title: "İçerikten uygulamaya geçelim",
    description:
      "Süreç analizi, dijital olgunluk veya ERP hazırlık konularında şirketiniz için en doğru yaklaşımı birlikte değerlendirelim.",
    primaryButton: "İletişime Geçin",
    secondaryButton: "Hizmetlerimizi İnceleyin",
  },
};

const en = {
  meta: {
    title: "Blog | Process Analysis, Digital Transformation and ERP Insights | Tage Yazılım",
    description:
      "Explore Tage Yazılım blog content on process analysis, digital maturity, ERP readiness, process improvement, and Sadi.",
  },

  breadcrumb: {
    home: "Home",
    blog: "Blog",
  },

  hero: {
    badge: "Blog",
    title: "Insights on Process, Digital Transformation, and ERP",
    description:
      "On the Tage Yazılım blog, you can find corporate content about process analysis, digital maturity, ERP readiness, process improvement, and Sadi.",
  },

  postsTitle: "Featured articles",

  posts: [
    {
      label: "First article",
      category: "Process Analysis",
      readTime: "8 min read",
      title: "What Is Business Process Analysis? How Is It Done in Companies?",
      excerpt:
        "What is business process analysis, why is it done, how are bottlenecks identified, and why is process analysis critical for ERP and digital transformation readiness?",
      href: `/blog/${FIRST_POST_SLUG}`,
      button: "Read Article",
    },
    {
      label: "New article",
      category: "Digital Maturity",
      readTime: "9 min read",
      title: "What Is Digital Maturity Analysis? Where Should Companies Start?",
      excerpt:
        "How is digital maturity measured, why does process maturity matter, and where should companies start before transformation investments?",
      href: `/blog/${SECOND_POST_SLUG}`,
      button: "Read Article",
    },
    {
      label: "New article",
      category: "ERP Readiness",
      readTime: "10 min read",
      title: "How Should You Prepare Your Company Before Moving to ERP?",
      excerpt:
        "Why should processes, roles, data structure, and organizational readiness be clarified before ERP? Learn the core preparation steps.",
      href: `/blog/${THIRD_POST_SLUG}`,
      button: "Read Article",
    },
  ],

  cta: {
    title: "Let’s move from content to action",
    description:
      "Let’s evaluate the right approach for your company in process analysis, digital maturity, or ERP readiness.",
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

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
                {copy.hero.description}
              </p>
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