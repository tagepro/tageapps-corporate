// app/[lang]/hakkimizda/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Cpu,
  GraduationCap,
  Layers3,
  Workflow,
} from "lucide-react";
import Container from "@/components/layout/Container";

type PageProps = {
  params: Promise<{ lang: string }>;
};

const SITE_URL = "https://www.tageapps.com";

const tr = {
  meta: {
    title: "Hakkımızda | Tage Yazılım",
    description:
      "Tage Yazılım; kurumsal yazılım geliştirme, yapay zekâ, dijital dönüşüm, süreç yönetimi ve ERP alanlarında teknoloji ve danışmanlık çözümleri geliştiren kurumsal teknoloji şirketidir.",
    ogDescription:
      "Kurumsal yazılım, yapay zekâ, dijital dönüşüm, süreç yönetimi ve ERP deneyimini bir araya getiren Tage Yazılım’ı keşfedin.",
    twitterDescription:
      "Tage Yazılım; iş süreçleri ile teknolojiyi bir araya getiren kurumsal teknoloji şirketidir.",
    keywords: [
      "tage yazılım",
      "hakkımızda",
      "kurumsal yazılım geliştirme",
      "yapay zekâ çözümleri",
      "dijital dönüşüm",
      "süreç yönetimi",
      "süreç olgunluğu",
      "erp danışmanlığı",
      "erp hazırlık",
      "kurumsal teknoloji",
      "sadi",
    ],
  },

  breadcrumb: {
    home: "Anasayfa",
    current: "Hakkımızda",
  },

  hero: {
    badge: "Hakkımızda",
    title: "İş süreçleri ile teknolojiyi bir araya getiren kurumsal teknoloji şirketi",
    description1:
      "Tage Yazılım; kurumsal yazılım geliştirme, yapay zekâ, dijital dönüşüm, süreç yönetimi ve ERP alanlarında kurumların iş ihtiyaçlarına yönelik teknoloji ve danışmanlık çözümleri geliştirir.",
    description2:
      "Teknolojiyi iş sürecinden bağımsız ele almıyoruz. İş ihtiyacını, kullanıcıları, süreçleri, veriyi ve mevcut sistemleri birlikte değerlendirerek uygulanabilir ve sürdürülebilir çözümler geliştiriyoruz.",
    primaryButton: "Hizmetlerimizi İncele",
    secondaryButton: "Sadi’yi İncele",
    summaryTitle: "Kısa özet",
    summaryHeading: "İş ihtiyacından teknoloji çözümüne",
    summaryText:
      "Kurumsal deneyimimizi yazılım geliştirme ve yapay zekâ yetkinlikleriyle bir araya getirerek teknoloji ile iş süreçleri arasında güçlü bir bağ kuruyoruz.",
    summaryItems: [
      "Kurumsal Yazılım Geliştirme",
      "Yapay Zekâ & Dijital Dönüşüm",
      "Süreç Olgunluğu & Süreç Yönetimi",
      "ERP Danışmanlığı & ERP Hazırlık",
    ],
  },

  whyFounded: {
    title: "Tage Yazılım neden kuruldu?",
    description1:
      "Şirketlerde teknoloji yatırımlarının çoğu zaman gerçek iş ihtiyacından kopuk ele alınabildiğini gördük. Süreçler yeterince netleşmeden yazılım yatırımları yapılabiliyor, veri ve sistemler birbirinden kopuk kalabiliyor, yeni teknolojiler ise gerçek kullanım alanlarına dönüşmekte zorlanabiliyor.",
    description2:
      "Tage Yazılım, iş ihtiyacı ile teknoloji arasındaki bu boşluğu kapatmak için kuruldu. Kurumsal yazılım, yapay zekâ, süreç yönetimi ve ERP deneyimini aynı bakış açısında bir araya getiriyoruz.",
    founderTitle: "Kurucu yaklaşımımız",
    founderDescription1:
      "25 yılı aşkın IT, ERP ve iş süreçleri deneyimini; kurumsal yazılım, yapay zekâ ve dijital dönüşüm yetkinlikleriyle bir araya getiriyoruz.",
    founderDescription2:
      "İş ihtiyacını, süreçleri, veriyi, kullanıcıları ve mevcut sistemleri birlikte değerlendirerek uygulanabilir ve sürdürülebilir çözümler geliştirmeyi hedefliyoruz.",
  },

  approach: {
    title: "Teknoloji ve iş bilgisini aynı yapıda birleştiriyoruz",
    description:
      "Tage Yazılım’ın yaklaşımı üç temel yetkinliğin birlikte çalışmasına dayanır. Teknolojiyi gerçek iş ihtiyacından ve kurumsal yapıdan bağımsız ele almıyoruz.",
    items: [
      {
        icon: "cpu",
        title: "Kurumsal Yazılım",
        description:
          "İş ihtiyaçlarına özel web, mobil, portal, iş uygulamaları ve sistem entegrasyonları geliştiriyoruz.",
      },
      {
        icon: "briefcase",
        title: "Yapay Zekâ & Dijital Dönüşüm",
        description:
          "Yapay zekâyı gerçek kullanım alanlarına taşıyan çözümler geliştiriyor ve kurumların dijital dönüşüm çalışmalarını destekliyoruz.",
      },
      {
        icon: "graduation",
        title: "Süreç & ERP",
        description:
          "Süreç olgunluğu, süreç yönetimi, ERP hazırlık ve ERP danışmanlığı çalışmalarını kurumsal ihtiyaçlarla birlikte ele alıyoruz.",
      },
    ],
  },

  expertise: {
    title: "Tage’yi farklılaştıran nedir?",
    description:
      "Teknoloji üretme yetkinliğini kurumsal iş süreçleri, ERP ve operasyon deneyimiyle aynı yapıda birleştiriyoruz.",
    items: [
      {
        icon: "workflow",
        title: "İş sürecini anlayan teknoloji yaklaşımı",
        description:
          "Yazılım veya yapay zekâ çözümüne başlamadan önce gerçek iş ihtiyacını, kullanıcıları ve çalışma biçimini anlamaya odaklanıyoruz.",
      },
      {
        icon: "layers",
        title: "Kurumsal sistem deneyimi",
        description:
          "25 yılı aşkın IT, ERP ve iş süreçleri deneyimini yeni teknoloji çözümlerine taşıyoruz.",
      },
      {
        icon: "building",
        title: "Uygulanabilir teknoloji çözümleri",
        description:
          "Yazılım, yapay zekâ, veri, entegrasyon ve süreç ihtiyaçlarını birbirinden bağımsız değil, aynı kurumsal yapı içinde değerlendiriyoruz.",
      },
    ],
  },

  trust: {
    title: "Deneyimimizi teknoloji üretme yetkinliğiyle birleştiriyoruz",
    description1:
      "Kurumsal teknolojinin yalnızca yazılım geliştirmekten ibaret olmadığını biliyoruz. Çözümün çalışacağı iş sürecini, kullanıcıları, veriyi ve mevcut sistemleri birlikte değerlendiriyoruz.",
    description2:
      "Bu yaklaşım, danışmanlık deneyimi ile yazılım ve yapay zekâ yetkinliklerini aynı zeminde buluşturmamızı sağlıyor.",
    cardTitle: "Deneyim ve yetkinliklerimiz",
    items: [
      "25 yılı aşkın IT, ERP ve iş süreçleri deneyimi",
      "Üretim, finans, lojistik ve insan kaynakları süreç bilgisi",
      "Kurumsal yazılım geliştirme yetkinliği",
      "Yapay zekâyı gerçek iş ihtiyaçlarına uygulayan yaklaşım",
      "Süreç, veri, sistem ve entegrasyonu birlikte değerlendiren bakış",
      "Sadi ile ürün geliştirme ve SaaS deneyimi",
    ],
  },

  sadi: {
    title: "Sadi bu yapının neresinde durur?",
    description1:
      "Sadi, Tage Yazılım’ın süreç olgunluğu ve dijital dönüşüm alanındaki deneyiminin ürünleşmiş halidir.",
    description2:
      "Süreç görünürlüğü, olgunluk değerlendirmesi, risk önceliği, iyileştirme ve yeniden ölçüm yaklaşımını kurumsal bir yazılım ürünü altında bir araya getirir.",
    cardBadge: "Ürün",
    cardTitle: "Süreç ve dönüşüm deneyimimizi Sadi ile ürünleştiriyoruz",
    cardDescription:
      "Sadi, kurumların süreçlerini görünür hale getirmesine, olgunluk seviyelerini değerlendirmesine ve gelişim alanlarını sistematik olarak yönetmesine yardımcı olur.",
    primaryButton: "Sadi ürün sayfasına git",
    secondaryButton: "İletişime Geç",
  },

  cta: {
    title:
      "Teknoloji ve dönüşüm ihtiyacınızı birlikte değerlendirelim",
    description:
      "Kurumsal yazılım, yapay zekâ, dijital dönüşüm, süreç yönetimi veya ERP alanındaki ihtiyacınızı birlikte değerlendirelim.",
    primaryButton: "Hizmetlerimizi İncele",
    secondaryButton: "İletişime Geçin",
  },

  schema: {
    orgDescription:
      "Tage Yazılım; kurumsal yazılım geliştirme, yapay zekâ, dijital dönüşüm, süreç yönetimi ve ERP alanlarında teknoloji ve danışmanlık çözümleri geliştiren kurumsal teknoloji şirketidir.",
  },
} as const;
const en = {
  meta: {
    title: "About | Tage Yazılım",
    description:
      "Tage Yazılım is an enterprise technology company delivering software development, artificial intelligence, digital transformation, process management, and ERP solutions.",
    ogDescription:
      "Discover Tage Yazılım, bringing together enterprise software, artificial intelligence, digital transformation, process management, and ERP experience.",
    twitterDescription:
      "Tage Yazılım is an enterprise technology company bringing business processes and technology together.",
    keywords: [
      "tage yazilim",
      "about",
      "enterprise software development",
      "artificial intelligence solutions",
      "digital transformation",
      "process management",
      "process maturity",
      "erp consulting",
      "erp readiness",
      "enterprise technology",
      "sadi",
    ],
  },

  breadcrumb: {
    home: "Home",
    current: "About",
  },

  hero: {
    badge: "About",
    title: "An enterprise technology company bringing business processes and technology together",
    description1:
      "Tage Yazılım develops technology and consulting solutions for enterprise needs across software development, artificial intelligence, digital transformation, process management, and ERP.",
    description2:
      "We do not treat technology independently from business processes. We evaluate business needs, users, processes, data, and existing systems together to develop practical and sustainable solutions.",
    primaryButton: "Explore Our Services",
    secondaryButton: "Explore Sadi",
    summaryTitle: "Quick summary",
    summaryHeading: "From business need to technology solution",
    summaryText:
      "We combine enterprise experience with software development and artificial intelligence capabilities to build a strong connection between technology and business processes.",
    summaryItems: [
      "Enterprise Software Development",
      "AI & Digital Transformation",
      "Process Maturity & Process Management",
      "ERP Consulting & ERP Readiness",
    ],
  },

  whyFounded: {
    title: "Why was Tage Yazılım founded?",
    description1:
      "We saw that technology investments can often be addressed separately from real business needs. Software investments may begin before processes are sufficiently clear, data and systems may remain disconnected, and new technologies may struggle to become practical use cases.",
    description2:
      "Tage Yazılım was founded to close this gap between business needs and technology. We bring enterprise software, artificial intelligence, process management, and ERP experience together within the same perspective.",
    founderTitle: "Our founding perspective",
    founderDescription1:
      "We combine more than 25 years of IT, ERP, and business process experience with enterprise software, artificial intelligence, and digital transformation capabilities.",
    founderDescription2:
      "We aim to develop practical and sustainable solutions by evaluating business needs, processes, data, users, and existing systems together.",
  },

  approach: {
    title: "We bring technology and business knowledge together",
    description:
      "Tage Yazılım’s approach is built on three core capabilities working together. We do not treat technology independently from real business needs and the enterprise environment.",
    items: [
      {
        icon: "cpu",
        title: "Enterprise Software",
        description:
          "We develop web, mobile, portal, business applications, and system integrations tailored to enterprise needs.",
      },
      {
        icon: "briefcase",
        title: "AI & Digital Transformation",
        description:
          "We develop solutions that bring artificial intelligence into real use cases and support organizations in their digital transformation.",
      },
      {
        icon: "graduation",
        title: "Process & ERP",
        description:
          "We address process maturity, process management, ERP readiness, and ERP consulting together with enterprise needs.",
      },
    ],
  },

  expertise: {
    title: "What makes Tage different?",
    description:
      "We combine technology-building capabilities with enterprise business process, ERP, and operational experience.",
    items: [
      {
        icon: "workflow",
        title: "Technology grounded in business processes",
        description:
          "Before starting a software or AI solution, we focus on understanding the real business need, users, and ways of working.",
      },
      {
        icon: "layers",
        title: "Enterprise systems experience",
        description:
          "We bring more than 25 years of IT, ERP, and business process experience into new technology solutions.",
      },
      {
        icon: "building",
        title: "Practical technology solutions",
        description:
          "We evaluate software, artificial intelligence, data, integration, and process needs together within the same enterprise environment.",
      },
    ],
  },

  trust: {
    title: "We combine experience with technology-building capabilities",
    description1:
      "We know that enterprise technology is about more than developing software. We evaluate the business process, users, data, and existing systems in which a solution will operate.",
    description2:
      "This approach enables us to bring consulting experience together with software and artificial intelligence capabilities.",
    cardTitle: "Our experience and capabilities",
    items: [
      "More than 25 years of IT, ERP, and business process experience",
      "Business process knowledge across production, finance, logistics, and human resources",
      "Enterprise software development capabilities",
      "An approach that applies artificial intelligence to real business needs",
      "A perspective that evaluates processes, data, systems, and integrations together",
      "Product development and SaaS experience with Sadi",
    ],
  },

  sadi: {
    title: "Where does Sadi stand in this structure?",
    description1:
      "Sadi is the productized form of Tage Yazılım’s experience in process maturity and digital transformation.",
    description2:
      "It brings process visibility, maturity assessment, risk prioritization, improvement, and re-measurement together within an enterprise software product.",
    cardBadge: "Product",
    cardTitle: "We productize our process and transformation experience with Sadi",
    cardDescription:
      "Sadi helps organizations make their processes visible, assess maturity levels, and systematically manage improvement areas.",
    primaryButton: "Go to Sadi product page",
    secondaryButton: "Contact Us",
  },

  cta: {
    title:
      "Let’s evaluate your technology and transformation needs together",
    description:
      "Let’s evaluate your needs across enterprise software, artificial intelligence, digital transformation, process management, or ERP.",
    primaryButton: "Explore Our Services",
    secondaryButton: "Contact Us",
  },

  schema: {
    orgDescription:
      "Tage Yazılım is an enterprise technology company delivering software development, artificial intelligence, digital transformation, process management, and ERP solutions.",
  },
} as const;
function getIcon(name: string) {
  if (name === "cpu") return Cpu;
  if (name === "briefcase") return BriefcaseBusiness;
  if (name === "graduation") return GraduationCap;
  if (name === "workflow") return Workflow;
  if (name === "layers") return Layers3;
  return Building2;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const copy = lang === "en" ? en : tr;
  const locale = lang === "en" ? "en_US" : "tr_TR";
  const pagePath = `/${lang}/hakkimizda`;
  const pageUrl = `${SITE_URL}${pagePath}`;

  return {
    title: copy.meta.title,
    description: copy.meta.description,
    keywords: [...copy.meta.keywords],
    alternates: {
      canonical: pagePath,
      languages: {
        tr: "/tr/hakkimizda",
        en: "/en/hakkimizda",
      },
    },
    openGraph: {
      title: copy.meta.title,
      description: copy.meta.ogDescription,
      url: pageUrl,
      siteName: "Tage Yazılım",
      locale,
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

export default async function AboutPage({ params }: PageProps) {
  const { lang } = await params;

  if (lang !== "tr" && lang !== "en") {
    notFound();
  }

  const copy = lang === "en" ? en : tr;
  const withLang = (path: string) => `/${lang}${path}`;
  const pagePath = `/${lang}/hakkimizda`;
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

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tage Yazılım",
    url: SITE_URL,
    description: copy.schema.orgDescription,
    areaServed: "TR",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
                    href={withLang("/hizmetler")}
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
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                  {copy.whyFounded.title}
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-700">
                  {copy.whyFounded.description1}
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  {copy.whyFounded.description2}
                </p>
              </div>

              <div className="rounded-[28px] border border-[#E6EDF5] bg-white p-6 md:p-8">
                <h3 className="text-xl font-semibold text-[#133E87]">
                  {copy.whyFounded.founderTitle}
                </h3>

                <p className="mt-5 text-base leading-8 text-slate-700">
                  {copy.whyFounded.founderDescription1}
                </p>

                <p className="mt-4 text-base leading-8 text-slate-700">
                  {copy.whyFounded.founderDescription2}
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-[#F8FAFC] py-14 md:py-20">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                {copy.approach.title}
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-700">
                {copy.approach.description}
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {copy.approach.items.map((item) => {
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
            <div className="max-w-4xl">
              <h2 className="text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                {copy.expertise.title}
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-700">
                {copy.expertise.description}
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {copy.expertise.items.map((item) => {
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

        <section className="bg-[#F3F3E0] py-14 md:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                  {copy.trust.title}
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-700">
                  {copy.trust.description1}
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  {copy.trust.description2}
                </p>
              </div>

              <div className="rounded-[28px] border border-[#E6EDF5] bg-white p-6 md:p-8">
                <h3 className="text-xl font-semibold text-[#133E87]">
                  {copy.trust.cardTitle}
                </h3>

                <div className="mt-6 grid gap-4">
                  {copy.trust.items.map((item) => (
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

        <section className="py-14 md:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
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

              <div className="rounded-[28px] bg-[#133E87] p-8 text-white shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#CBDCEB]">
                  {copy.sadi.cardBadge}
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                  {copy.sadi.cardTitle}
                </h2>

                <p className="mt-4 text-base leading-7 text-white/85">
                  {copy.sadi.cardDescription}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={withLang("/sadi")}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#133E87] transition hover:opacity-95"
                  >
                    {copy.sadi.primaryButton}
                    <ArrowRight size={18} />
                  </Link>

                  <Link
                    href={withLang("/iletisim")}
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    {copy.sadi.secondaryButton}
                  </Link>
                </div>
              </div>
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
                  href={withLang("/hizmetler")}
                  className="inline-flex items-center gap-2 rounded-full bg-[#133E87] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                >
                  {copy.cta.primaryButton}
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href={withLang("/iletisim")}
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