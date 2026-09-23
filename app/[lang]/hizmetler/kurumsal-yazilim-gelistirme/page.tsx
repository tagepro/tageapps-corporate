import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BarChart3,
  Blocks,
  CheckCircle2,
  Database,
  GitBranch,
  LayoutDashboard,
  MonitorSmartphone,
  Network,
  Smartphone,
  Workflow,
} from "lucide-react";

import Container from "@/components/layout/Container";

type PageProps = {
  params: Promise<{ lang: string }>;
};

const content = {
  tr: {
    metadata: {
      title: "Kurumsal Yazılım Geliştirme | Tage Yazılım",
      description:
        "Tage Yazılım; kurumsal web uygulamaları, mobil uygulamalar, kuruma özel yazılım, portal ve iş uygulamaları ile sistem ve ERP entegrasyonları geliştirir.",
    },
    hero: {
      badge: "Kurumsal Yazılım Geliştirme",
      title: "İş ihtiyaçlarına özel kurumsal yazılım çözümleri",
      description:
        "Hazır bir ürünü kuruma uyarlamak yerine; gerçek iş ihtiyacını, kullanıcıları, süreçleri, veriyi ve mevcut sistemleri değerlendirerek ihtiyaca özel yazılım çözümleri geliştiriyoruz.",
      primaryButton: "Projenizi Konuşalım",
      secondaryButton: "Çözüm Alanlarını İncele",
    },
    solutions: {
      badge: "Çözüm Alanlarımız",
      title: "Web, mobil ve kurumsal uygulamaları iş ihtiyacı etrafında tasarlıyoruz",
      description:
        "Yeni bir uygulama geliştirme ihtiyacından mevcut sistemlerin birbirine bağlanmasına kadar farklı kurumsal yazılım ihtiyaçlarını tek bir çözüm yaklaşımıyla ele alıyoruz.",
      items: [
        {
          title: "Kurumsal Web Uygulamaları",
          description:
            "İş süreçlerine, kullanıcı rollerine ve operasyonel ihtiyaçlara özel web tabanlı uygulamalar geliştiriyoruz.",
          icon: "web",
        },
        {
          title: "Mobil Uygulamalar",
          description:
            "Saha ekipleri, çalışanlar, müşteriler ve iş ortakları için kurumsal sistemlerle entegre mobil uygulamalar geliştiriyoruz.",
          icon: "mobile",
        },
        {
          title: "Kuruma Özel Yazılım",
          description:
            "Standart yazılımların karşılamadığı ihtiyaçlar için kuruma ve iş modeline özel çözümler tasarlıyoruz.",
          icon: "custom",
        },
        {
          title: "Portal ve İş Uygulamaları",
          description:
            "Müşteri, bayi, tedarikçi ve kurum içi kullanıcıların işlemlerini tek noktadan yönetebileceği uygulamalar geliştiriyoruz.",
          icon: "portal",
        },
        {
          title: "Sistem & ERP Entegrasyonları",
          description:
            "ERP ve diğer kurumsal sistemler arasında veri akışını ve uygulama bütünlüğünü destekleyen entegrasyonlar geliştiriyoruz.",
          icon: "integration",
        },
      ],
    },
    examples: {
      badge: "Uygulama Örnekleri",
      title: "Neler geliştirebiliriz?",
      description:
        "Çözümün kapsamını kullanılan teknoloji değil, çözülmesi gereken iş ihtiyacı belirler.",
      items: [
        "Müşteri portalları",
        "Bayi ve iş ortağı portalları",
        "Kurum içi iş uygulamaları",
        "Operasyon yönetim ekranları",
        "Yönetim dashboardları",
        "SaaS uygulamaları",
        "Mobil saha uygulamaları",
        "ERP ile entegre uygulamalar",
        "Onay ve iş akışı uygulamaları",
        "Veri toplama ve raporlama uygulamaları",
      ],
    },
    difference: {
      badge: "Tage Yaklaşımı",
      title:
        "Sadece yazılım geliştirmiyoruz; yazılımın çalışacağı iş sürecini de anlıyoruz.",
      description:
        "Kurumsal uygulamaların başarısı yalnızca teknik geliştirmeye bağlı değildir. Sürecin, verinin, kullanıcıların ve mevcut sistemlerin birlikte ele alınması gerekir.",
      items: [
        {
          title: "İş süreci ve ERP deneyimi",
          description:
            "Yazılım ihtiyacını operasyonel süreçler ve mevcut kurumsal sistemlerle birlikte değerlendiriyoruz.",
        },
        {
          title: "Kuruma özel çözüm yaklaşımı",
          description:
            "Tek tip çözüm yerine kurumun ihtiyacına ve çalışma biçimine uygun yapı tasarlıyoruz.",
        },
        {
          title: "Web, mobil ve entegrasyon yetkinliği",
          description:
            "Farklı kullanıcı ve sistem ihtiyaçlarını aynı çözüm mimarisi içinde ele alabiliyoruz.",
        },
        {
          title: "AI ile genişleyebilen çözümler",
          description:
            "Uygun kullanım alanlarında yazılım çözümlerini yapay zekâ destekli yeteneklerle geliştirebilecek yapıda tasarlıyoruz.",
        },
      ],
    },
    cta: {
      title: "Kurumsal yazılım ihtiyacınızı birlikte değerlendirelim",
      description:
        "Yeni bir iş uygulaması, portal, mobil çözüm veya sistem entegrasyonu ihtiyacınız varsa mevcut yapınızı ve hedefinizi birlikte değerlendirebiliriz.",
      button: "İletişime Geç",
    },
  },

  en: {
    metadata: {
      title: "Enterprise Software Development | Tage Yazılım",
      description:
        "Tage Yazılım develops enterprise web applications, mobile applications, custom software, portals and business applications, and system and ERP integrations.",
    },
    hero: {
      badge: "Enterprise Software Development",
      title: "Enterprise software solutions tailored to business needs",
      description:
        "Rather than adapting a ready-made product to every organization, we develop tailored software solutions by evaluating the real business need, users, processes, data, and existing systems.",
      primaryButton: "Discuss Your Project",
      secondaryButton: "Explore Solution Areas",
    },
    solutions: {
      badge: "Our Solution Areas",
      title: "We design web, mobile, and enterprise applications around business needs",
      description:
        "From developing a new application to connecting existing systems, we address different enterprise software needs through an integrated solution approach.",
      items: [
        {
          title: "Enterprise Web Applications",
          description:
            "We develop web-based applications tailored to business processes, user roles, and operational needs.",
          icon: "web",
        },
        {
          title: "Mobile Applications",
          description:
            "We develop mobile applications integrated with enterprise systems for field teams, employees, customers, and business partners.",
          icon: "mobile",
        },
        {
          title: "Custom Software",
          description:
            "We design tailored solutions for business needs that standard software cannot adequately address.",
          icon: "custom",
        },
        {
          title: "Portals & Business Applications",
          description:
            "We develop applications that allow customers, dealers, suppliers, and internal users to manage their activities from a unified environment.",
          icon: "portal",
        },
        {
          title: "System & ERP Integrations",
          description:
            "We develop integrations that support data flow and application continuity between ERP and other enterprise systems.",
          icon: "integration",
        },
      ],
    },
    examples: {
      badge: "Application Examples",
      title: "What can we develop?",
      description:
        "The scope of the solution is determined by the business need to be solved, not by the technology itself.",
      items: [
        "Customer portals",
        "Dealer and business partner portals",
        "Internal business applications",
        "Operational management interfaces",
        "Management dashboards",
        "SaaS applications",
        "Mobile field applications",
        "ERP-integrated applications",
        "Approval and workflow applications",
        "Data collection and reporting applications",
      ],
    },
    difference: {
      badge: "The Tage Approach",
      title:
        "We do not just develop software; we also understand the business process in which it will operate.",
      description:
        "The success of enterprise applications depends on more than technical development. Processes, data, users, and existing systems need to be considered together.",
      items: [
        {
          title: "Business process and ERP experience",
          description:
            "We evaluate software requirements together with operational processes and existing enterprise systems.",
        },
        {
          title: "Tailored solution approach",
          description:
            "Instead of a one-size-fits-all solution, we design structures suited to the organization's needs and way of working.",
        },
        {
          title: "Web, mobile, and integration capabilities",
          description:
            "We can address different user and system requirements within a unified solution architecture.",
        },
        {
          title: "Solutions that can expand with AI",
          description:
            "Where appropriate, we design software solutions that can evolve with AI-powered capabilities.",
        },
      ],
    },
    cta: {
      title: "Let's evaluate your enterprise software needs together",
      description:
        "If you need a new business application, portal, mobile solution, or system integration, we can evaluate your current environment and objectives together.",
      button: "Contact Us",
    },
  },
} as const;

const iconMap = {
  web: MonitorSmartphone,
  mobile: Smartphone,
  custom: Blocks,
  portal: LayoutDashboard,
  integration: Network,
} as const;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params;

  if (lang !== "tr" && lang !== "en") {
    return {};
  }

  const page = content[lang];

  const canonical =
    lang === "tr"
      ? "https://www.tageapps.com/tr/hizmetler/kurumsal-yazilim-gelistirme"
      : "https://www.tageapps.com/en/hizmetler/kurumsal-yazilim-gelistirme";

  return {
    title: page.metadata.title,
    description: page.metadata.description,
    alternates: {
      canonical,
      languages: {
        tr: "https://www.tageapps.com/tr/hizmetler/kurumsal-yazilim-gelistirme",
        en: "https://www.tageapps.com/en/hizmetler/kurumsal-yazilim-gelistirme",
      },
    },
    openGraph: {
      title: page.metadata.title,
      description: page.metadata.description,
      url: canonical,
      type: "website",
    },
  };
}

export default async function EnterpriseSoftwareDevelopmentPage({
  params,
}: PageProps) {
  const { lang } = await params;

  if (lang !== "tr" && lang !== "en") {
    notFound();
  }

  const page = content[lang];
  const withLang = (path: string) => `/${lang}${path}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.hero.badge,
    description: page.metadata.description,
    provider: {
      "@type": "Organization",
      name: "Tage Yazılım",
      url: "https://www.tageapps.com",
    },
    areaServed: "TR",
    serviceType:
      lang === "tr"
        ? "Kurumsal Yazılım Geliştirme"
        : "Enterprise Software Development",
    url: `https://www.tageapps.com/${lang}/hizmetler/kurumsal-yazilim-gelistirme`,
  };

  return (
    <main>
      {/* Hero */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-white to-slate-50">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <span className="inline-flex rounded-full border border-[#CBDCEB] bg-[#F3F3E0] px-4 py-2 text-sm font-semibold text-[#133E87]">
                {page.hero.badge}
              </span>

              <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                {page.hero.title}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                {page.hero.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={withLang("/iletisim")}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#133E87] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  {page.hero.primaryButton}
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="#cozum-alanlari"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-[#608BC1]"
                >
                  {page.hero.secondaryButton}
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#CBDCEB]/60 text-[#133E87]">
                  <Blocks className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-slate-950">
                    {page.solutions.items[2].title}
                  </p>
                  <p className="text-sm text-slate-500">
                    Web • Mobile • Integration
                  </p>
                </div>
              </div>

              <div className="mt-7 space-y-3">
                {page.solutions.items.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#608BC1]" />
                    <span className="text-sm font-medium text-slate-700">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Solution Areas */}
      <section id="cozum-alanlari" className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#608BC1]">
              {page.solutions.badge}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {page.solutions.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {page.solutions.description}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {page.solutions.items.map((item) => {
              const Icon = iconMap[item.icon];

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#CBDCEB]/50 text-[#133E87]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Application Examples */}
      <section className="border-y border-slate-200 bg-slate-50">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#608BC1]">
                {page.examples.badge}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                {page.examples.title}
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                {page.examples.description}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {page.examples.items.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-4"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#608BC1]" />
                  <span className="font-medium text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>


      {/* Tage Difference */}
      <section className="bg-[#133E87] text-white">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#CBDCEB]">
                {page.difference.badge}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                {page.difference.title}
              </h2>
              <p className="mt-5 leading-7 text-[#CBDCEB]">
                {page.difference.description}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {page.difference.items.map((item, index) => {
                const icons = [Workflow, Database, GitBranch, BarChart3];
                const Icon = icons[index];

                return (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-white/15 bg-white/10 p-5"
                  >
                    <Icon className="h-5 w-5 text-[#CBDCEB]" />
                    <h3 className="mt-4 font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#CBDCEB]">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                  {page.cta.title}
                </h2>
                <p className="mt-4 leading-7 text-slate-600">
                  {page.cta.description}
                </p>
              </div>

              <Link
                href={withLang("/iletisim")}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#133E87] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                {page.cta.button}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c"),
        }}
      />
    </main>
  );
}