import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  GitBranch,
  Gauge,
  Network,
  Workflow,
} from "lucide-react";

import Container from "@/components/layout/Container";

type PageProps = {
  params: Promise<{ lang: string }>;
};

const SITE_URL = "https://www.tageapps.com";
const SLUG = "/hizmetler/surec-olgunlugu-ve-surec-yonetimi";

const content = {
  tr: {
    meta: {
      title: "Süreç Olgunluğu ve Süreç Yönetimi | Tage Yazılım",
      description:
        "Süreç olgunluğu, süreç yönetimi, süreç analizi, modelleme, iyileştirme, iş akışı ve süreç dijitalleştirme ihtiyaçlarınızı bütüncül olarak değerlendirin.",
      keywords: [
        "süreç olgunluğu",
        "süreç yönetimi",
        "iş süreç yönetimi",
        "kurumsal süreç yönetimi",
        "süreç analizi",
        "süreç modelleme",
        "BPMN",
        "süreç iyileştirme",
        "iş akışı yönetimi",
        "süreç dijitalleştirme",
        "süreç yönetimi yazılımı",
      ],
    },

    breadcrumb: {
      home: "Anasayfa",
      services: "Hizmetler",
      current: "Süreç Olgunluğu ve Süreç Yönetimi",
    },

    hero: {
      badge: "Süreç Olgunluğu & Süreç Yönetimi",
      title: "Süreç Olgunluğu ve Süreç Yönetimi",
      description:
        "İş süreçlerini görünür, ölçülebilir, standart ve dijital olarak yönetilebilir hale getiriyoruz.",
      detail:
        "Mevcut süreç yapısını değerlendiriyor; süreç envanteri, sahiplik, analiz, modelleme, iyileştirme, iş akışları ve dijitalleşme ihtiyaçlarını aynı çerçevede ele alıyoruz.",
      primaryButton: "Süreçlerinizi Birlikte Değerlendirelim",
      secondaryButton: "Çalışma Alanlarını İncele",
      summaryBadge: "Bütüncül yaklaşım",
      summaryTitle: "Süreçten ölçülebilir yönetime",
      summaryText:
        "Süreçlerin yalnızca dokümante edilmesini değil; olgunluk seviyesinin görülmesini, iyileştirme alanlarının belirlenmesini ve uygun noktalarda dijital olarak desteklenmesini hedefliyoruz.",
      summaryItems: [
        "Süreç olgunluğu ve mevcut durum",
        "Süreç envanteri ve sahiplik",
        "Analiz, modelleme ve iyileştirme",
        "İş akışı, dijitalleşme ve entegrasyon",
      ],
    },

    areas: {
      eyebrow: "Çalışma Alanları",
      title: "Süreç yönetimini dört tamamlayıcı alanda ele alıyoruz",
      description:
        "Kurumun mevcut durumuna göre süreçlerin yönetim, olgunluk, iyileştirme ve dijitalleşme boyutlarını birlikte değerlendiriyoruz.",
      items: [
        {
          icon: "gauge",
          title: "Süreç Olgunluğu",
          description:
            "Süreçlerin tanımlılık, standardizasyon, sahiplik, ölçüm, dijitalleşme ve entegrasyon açısından mevcut seviyesini değerlendiriyoruz.",
          points: [
            "Mevcut olgunluk seviyesinin değerlendirilmesi",
            "Tanımlılık ve standardizasyon",
            "Sahiplik ve ölçülebilirlik",
            "Dijitalleşme ve entegrasyon seviyesi",
          ],
        },
        {
          icon: "network",
          title: "Süreç Yönetimi ve İş Süreçleri Yönetimi",
          description:
            "Süreç envanterini, ana ve alt süreç yapısını, süreç sahipliğini, sorumlulukları ve performans yaklaşımını görünür hale getiriyoruz.",
          points: [
            "Süreç envanteri ve süreç hiyerarşisi",
            "Süreç sahipliği",
            "Rol ve sorumluluk yapısı",
            "KPI ve performans yaklaşımı",
          ],
        },
        {
          icon: "branch",
          title: "Süreç Analizi, Modelleme ve İyileştirme",
          description:
            "Mevcut akışları analiz ediyor; süreç haritaları ve gerektiğinde BPMN ile darboğazları, tekrar işleri, kontrol noktalarını ve iyileştirme fırsatlarını belirliyoruz.",
          points: [
            "Mevcut durum analizi",
            "Süreç haritalama ve BPMN",
            "Darboğaz ve tekrar iş analizi",
            "İyileştirme fırsatlarının belirlenmesi",
          ],
        },
        {
          icon: "workflow",
          title: "İş Akışı, Dijitalleşme ve Süreç Yönetimi Yazılımı",
          description:
            "Mevcut süreçlerin hangi noktalarda yazılım, iş akışı, entegrasyon veya otomasyon ile desteklenmesi gerektiğini belirliyoruz.",
          points: [
            "Onay ve iş akışlarının değerlendirilmesi",
            "Otomasyon fırsatları",
            "ERP ve diğer sistemlerle entegrasyon",
            "Süreç yönetimi yazılımı ihtiyacının değerlendirilmesi",
          ],
        },
      ],
    },

    outputs: {
      eyebrow: "Çalışmanın Çıktıları",
      title: "Süreçlerinizi yönetilebilir bir yapıya dönüştürüyoruz",
      description:
        "Çalışmanın kapsamı kurumun ihtiyacına göre şekillenir. Amaç yalnızca süreç dokümanı üretmek değil, yönetimin kullanabileceği uygulanabilir bir gelişim çerçevesi oluşturmaktır.",
      items: [
        "Süreç envanteri ve süreç hiyerarşisi",
        "Süreç olgunluğu ve mevcut durum görünümü",
        "Süreç sahipliği, rol ve sorumluluk yapısı",
        "Süreç haritaları ve gerektiğinde BPMN modelleri",
        "Darboğaz, tekrar iş, risk ve kontrol noktaları",
        "Öncelikli süreç iyileştirme alanları",
        "Dijitalleşme, otomasyon ve entegrasyon fırsatları",
        "Süreç gelişim ve dönüşüm yol haritası",
      ],
    },

    approach: {
      eyebrow: "Tage Yaklaşımı",
      title: "Süreçleri yalnızca çizmekle kalmıyor, nasıl yönetileceğini de ele alıyoruz",
      description:
        "Tage Yazılım; süreç danışmanlığı, ERP deneyimi, yazılım geliştirme ve yapay zekâ yetkinliğini birlikte değerlendirir. Böylece süreç analizi yalnızca bir dokümantasyon çalışması olarak kalmaz; iyileştirme ve dijital dönüşüm kararlarına zemin oluşturur.",
      cards: [
        {
          title: "İş sürecini anlama",
          description:
            "Fiili işleyişi, kullanıcıları, sorumlulukları ve sistem temas noktalarını birlikte değerlendiriyoruz.",
        },
        {
          title: "Ölçülebilirlik",
          description:
            "Süreç sahipliği, performans göstergeleri ve gelişim alanlarını görünür hale getiriyoruz.",
        },
        {
          title: "ERP ve entegrasyon bakışı",
          description:
            "Süreçlerin mevcut ve gelecekteki kurumsal sistemlerle ilişkisini dikkate alıyoruz.",
        },
        {
          title: "Dijital dönüşüme geçiş",
          description:
            "İyileştirme alanlarını yazılım, otomasyon, entegrasyon ve gerektiğinde yapay zekâ fırsatlarıyla ilişkilendiriyoruz.",
        },
      ],
    },

    sadi: {
      badge: "Sadi ile ölçülebilir süreç yaklaşımı",
      title: "Süreç olgunluğunu görünür ve takip edilebilir hale getirin",
      description:
        "Sadi; süreç envanteri, dijital olgunluk değerlendirmesi, riskler ve iyileştirme alanlarının sistematik olarak ele alınmasını destekler. Danışmanlık çalışmasının ölçülebilir ve tekrar değerlendirilebilir bir yapıya dönüşmesine yardımcı olur.",
      button: "Sadi'yi İncele",
    },

    cta: {
      title: "Süreçlerinizi birlikte değerlendirelim",
      description:
        "Süreç olgunluğu, süreç yönetimi, analiz, iyileştirme veya dijitalleşme ihtiyacınızı birlikte değerlendirelim ve kurumunuz için doğru çalışma kapsamını belirleyelim.",
      primaryButton: "Görüşme Talep Et",
      secondaryButton: "Tüm Hizmetler",
    },

    schema: {
      name: "Süreç Olgunluğu ve Süreç Yönetimi",
      type: "Süreç Olgunluğu ve Kurumsal Süreç Yönetimi Danışmanlığı",
      description:
        "Süreç olgunluğu, süreç yönetimi, süreç analizi, modelleme, iyileştirme, iş akışı ve süreç dijitalleştirme ihtiyaçlarını bütüncül olarak ele alan danışmanlık hizmeti.",
    },
  },

  en: {
    meta: {
      title: "Process Maturity and Process Management | Tage Yazılım",
      description:
        "Assess process maturity, business process management, process analysis, modeling, improvement, workflows, and process digitalization with an integrated approach.",
      keywords: [
        "process maturity",
        "process management",
        "business process management",
        "enterprise process management",
        "process analysis",
        "process modeling",
        "BPMN",
        "process improvement",
        "workflow management",
        "process digitalization",
        "process management software",
      ],
    },

    breadcrumb: {
      home: "Home",
      services: "Services",
      current: "Process Maturity and Process Management",
    },

    hero: {
      badge: "Process Maturity & Process Management",
      title: "Process Maturity and Process Management",
      description:
        "We make business processes visible, measurable, standardized, and digitally manageable.",
      detail:
        "We assess the current process structure and address process inventory, ownership, analysis, modeling, improvement, workflows, and digitalization needs within a single framework.",
      primaryButton: "Let's Assess Your Processes",
      secondaryButton: "Explore Our Focus Areas",
      summaryBadge: "Integrated approach",
      summaryTitle: "From processes to measurable management",
      summaryText:
        "Our goal is not only to document processes, but also to reveal their maturity level, identify improvement areas, and support them digitally where appropriate.",
      summaryItems: [
        "Process maturity and current state",
        "Process inventory and ownership",
        "Analysis, modeling, and improvement",
        "Workflow, digitalization, and integration",
      ],
    },

    areas: {
      eyebrow: "Focus Areas",
      title: "We address process management across four complementary areas",
      description:
        "Depending on the organization's current state, we evaluate the management, maturity, improvement, and digitalization dimensions of its processes together.",
      items: [
        {
          icon: "gauge",
          title: "Process Maturity",
          description:
            "We assess the current level of processes in terms of definition, standardization, ownership, measurement, digitalization, and integration.",
          points: [
            "Current maturity assessment",
            "Definition and standardization",
            "Ownership and measurability",
            "Digitalization and integration level",
          ],
        },
        {
          icon: "network",
          title: "Process and Business Process Management",
          description:
            "We make the process inventory, main and subprocess structure, process ownership, responsibilities, and performance approach visible.",
          points: [
            "Process inventory and hierarchy",
            "Process ownership",
            "Roles and responsibilities",
            "KPI and performance approach",
          ],
        },
        {
          icon: "branch",
          title: "Process Analysis, Modeling and Improvement",
          description:
            "We analyze current flows and use process maps and BPMN where appropriate to identify bottlenecks, rework, control points, and improvement opportunities.",
          points: [
            "Current-state analysis",
            "Process mapping and BPMN",
            "Bottleneck and rework analysis",
            "Identification of improvement opportunities",
          ],
        },
        {
          icon: "workflow",
          title: "Workflow, Digitalization and Process Management Software",
          description:
            "We determine where existing processes should be supported by software, workflows, integrations, or automation.",
          points: [
            "Approval and workflow assessment",
            "Automation opportunities",
            "ERP and other system integrations",
            "Assessment of process management software needs",
          ],
        },
      ],
    },

    outputs: {
      eyebrow: "Typical Outputs",
      title: "We turn processes into a manageable structure",
      description:
        "The scope is shaped according to the organization's needs. The goal is not simply to produce process documents, but to create an actionable development framework that management can use.",
      items: [
        "Process inventory and process hierarchy",
        "Process maturity and current-state view",
        "Process ownership, roles, and responsibilities",
        "Process maps and BPMN models where appropriate",
        "Bottlenecks, rework, risks, and control points",
        "Priority process improvement areas",
        "Digitalization, automation, and integration opportunities",
        "Process development and transformation roadmap",
      ],
    },

    approach: {
      eyebrow: "The Tage Approach",
      title: "We do not only map processes; we address how they should be managed",
      description:
        "Tage Yazılım combines process consulting, ERP experience, software development, and artificial intelligence capabilities. This allows process analysis to become a foundation for improvement and digital transformation decisions rather than remaining a documentation exercise.",
      cards: [
        {
          title: "Understanding the business process",
          description:
            "We evaluate actual operations, users, responsibilities, and system touchpoints together.",
        },
        {
          title: "Measurability",
          description:
            "We make process ownership, performance indicators, and development areas visible.",
        },
        {
          title: "ERP and integration perspective",
          description:
            "We consider how processes relate to current and future enterprise systems.",
        },
        {
          title: "Transition to digital transformation",
          description:
            "We connect improvement areas with software, automation, integration, and, where appropriate, AI opportunities.",
        },
      ],
    },

    sadi: {
      badge: "Measurable processes with Sadi",
      title: "Make process maturity visible and trackable",
      description:
        "Sadi supports a systematic approach to process inventory, digital maturity assessment, risks, and improvement areas. It helps turn consulting work into a measurable structure that can be reassessed over time.",
      button: "Explore Sadi",
    },

    cta: {
      title: "Let's assess your processes together",
      description:
        "Let's evaluate your process maturity, process management, analysis, improvement, or digitalization needs and define the right scope for your organization.",
      primaryButton: "Request a Meeting",
      secondaryButton: "All Services",
    },

    schema: {
      name: "Process Maturity and Process Management",
      type: "Process Maturity and Enterprise Process Management Consulting",
      description:
        "An integrated consulting service covering process maturity, process management, process analysis, modeling, improvement, workflow management, and process digitalization.",
    },
  },
} as const;

function getIcon(name: string) {
  if (name === "gauge") return Gauge;
  if (name === "network") return Network;
  if (name === "branch") return GitBranch;
  return Workflow;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params;

  if (lang !== "tr" && lang !== "en") {
    return {};
  }

  const copy = content[lang];
  const pageUrl = `${SITE_URL}/${lang}${SLUG}`;

  return {
    title: copy.meta.title,
    description: copy.meta.description,
    keywords: [...copy.meta.keywords],
    alternates: {
      canonical: pageUrl,
      languages: {
        tr: `${SITE_URL}/tr${SLUG}`,
        en: `${SITE_URL}/en${SLUG}`,
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

export default async function ProcessMaturityManagementPage({
  params,
}: PageProps) {
  const { lang } = await params;

  if (lang !== "tr" && lang !== "en") {
    notFound();
  }

  const copy = content[lang];
  const withLang = (path: string) => `/${lang}${path}`;
  const pageUrl = `${SITE_URL}/${lang}${SLUG}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: copy.schema.name,
    serviceType: copy.schema.type,
    description: copy.schema.description,
    url: pageUrl,
    provider: {
      "@type": "Organization",
      name: "Tage Yazılım",
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: lang === "en" ? "Turkey" : "Türkiye",
    },
  };

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
        name: copy.breadcrumb.services,
        item: `${SITE_URL}/${lang}/hizmetler`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: copy.breadcrumb.current,
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <main className="bg-white text-slate-800">
        <section className="border-b border-slate-200 bg-gradient-to-b from-white to-slate-50">
          <Container>
            <div className="grid gap-10 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-24">
              <div>
                <nav
                  aria-label="Breadcrumb"
                  className="mb-6 text-sm text-slate-500"
                >
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
                    <li>
                      <Link
                        href={withLang("/hizmetler")}
                        className="transition hover:text-[#133E87]"
                      >
                        {copy.breadcrumb.services}
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
                  {copy.hero.description}
                </p>

                <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
                  {copy.hero.detail}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={withLang("/iletisim")}
                    className="inline-flex items-center gap-2 rounded-full bg-[#133E87] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                  >
                    {copy.hero.primaryButton}
                    <ArrowRight size={18} />
                  </Link>

                  <a
                    href="#calisma-alanlari"
                    className="inline-flex items-center rounded-full border border-[#CBDCEB] bg-white px-6 py-3 text-sm font-semibold text-[#133E87] transition hover:bg-slate-50"
                  >
                    {copy.hero.secondaryButton}
                  </a>
                </div>
              </div>

              <div className="rounded-[28px] border border-[#CBDCEB] bg-white p-6 shadow-[0_20px_60px_rgba(19,62,135,0.08)] md:p-8">
                <div className="rounded-2xl bg-[#F8FAFC] p-5">
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#608BC1]">
                    {copy.hero.summaryBadge}
                  </div>

                  <h2 className="mt-3 text-2xl font-semibold text-[#133E87]">
                    {copy.hero.summaryTitle}
                  </h2>

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
                      <CheckCircle2
                        size={18}
                        className="shrink-0 text-[#133E87]"
                      />
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

        <section id="calisma-alanlari" className="bg-white py-16 md:py-20">
          <Container>
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#608BC1]">
                {copy.areas.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                {copy.areas.title}
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                {copy.areas.description}
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {copy.areas.items.map((item) => {
                const Icon = getIcon(item.icon);

                return (
                  <article
                    key={item.title}
                    className="rounded-[26px] border border-[#E6EDF5] bg-white p-6 shadow-sm md:p-7"
                  >
                    <div className="inline-flex rounded-2xl bg-[#F3F7FB] p-3 text-[#133E87]">
                      <Icon size={23} />
                    </div>

                    <h3 className="mt-5 text-xl font-semibold text-[#133E87]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>

                    <div className="mt-5 space-y-3">
                      {item.points.map((point) => (
                        <div key={point} className="flex gap-3">
                          <CheckCircle2
                            size={18}
                            className="mt-0.5 shrink-0 text-[#608BC1]"
                          />
                          <span className="text-sm leading-6 text-slate-700">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="border-y border-slate-200 bg-slate-50 py-16 md:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#608BC1]">
                  {copy.outputs.eyebrow}
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                  {copy.outputs.title}
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-600">
                  {copy.outputs.description}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {copy.outputs.items.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-[20px] border border-[#E6EDF5] bg-white p-5"
                  >
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-[#133E87]"
                    />
                    <span className="text-sm font-medium leading-6 text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white py-16 md:py-20">
          <Container>
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#608BC1]">
                {copy.approach.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                {copy.approach.title}
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                {copy.approach.description}
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {copy.approach.cards.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[24px] border border-[#E6EDF5] bg-white p-6"
                >
                  <BarChart3 size={22} className="text-[#133E87]" />
                  <h3 className="mt-5 text-lg font-semibold text-[#133E87]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-[#133E87] py-16 text-white md:py-20">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-4xl">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#CBDCEB]">
                  {copy.sadi.badge}
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                  {copy.sadi.title}
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-8 text-white/80">
                  {copy.sadi.description}
                </p>
              </div>

              <Link
                href={withLang("/sadi")}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#133E87] transition hover:opacity-95"
              >
                {copy.sadi.button}
                <ArrowRight size={18} />
              </Link>
            </div>
          </Container>
        </section>

        <section className="bg-white py-16 md:py-24">
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
                  className="inline-flex items-center rounded-full border border-[#CBDCEB] bg-white px-6 py-3 text-sm font-semibold text-[#133E87] transition hover:bg-slate-50"
                >
                  {copy.cta.secondaryButton}
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c"),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}