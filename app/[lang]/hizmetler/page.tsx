// app/[lang]/hizmetler/page.tsx

import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import {
  ArrowRight,
  BarChart3,
  Blocks,
  BriefcaseBusiness,
  CheckCircle2,
  Gauge,
  GitBranch,
  Route,
  Workflow,
} from "lucide-react";

type PageProps = {
  params: Promise<{ lang: string }>;
};

const tr = {
  hero: {
    badge: "Yazılım • Danışmanlık • Eğitim",
    title: "Hizmetlerimiz",
    description:
      "Tage Yazılım, süreç yönetimi, süreç analizi, süreç iyileştirme, süreç olgunluk, dijital olgunluk ve kurumsal yazılım alanlarında işletmelere yazılım, danışmanlık ve eğitim çözümleri sunar.",
    primaryButton: "İletişime Geç",
    secondaryButton: "Sadi’yi İncele",
    approachTitle: "Tage Yazılım yaklaşımı",
    approachItems: [
      "Süreç Yönetimi",
      "Analiz ve Modelleme",
      "İyileştirme",
      "Dijital Olgunluk",
      "Kurumsal Yazılım",
    ],
    flowTitle: "Süreç Akışı",
    flowText:
      "Süreçlerinizi görünür, sade ve yönetilebilir hale getiren yaklaşım.",
    modulesTitle: "Modül Yapısı",
    modules: ["Analiz", "Ölçüm", "İyileştirme", "Yazılım"],
    chartTitle: "Analiz ve Yazılım Hissi",
    chartText:
      "Danışmanlık çıktılarınızı ölçülebilir ve sürdürülebilir yazılım yaklaşımı ile destekler.",
  },

  intro: {
    badge: "Tage Yazılım yaklaşımı",
    title:
      "Süreçleri sadece değerlendiren değil, geliştiren ve yazılım ile destekleyen hizmet modeli",
    description1:
      "Tage Yazılım; süreç yönetimi, süreç analizi, süreç iyileştirme, süreç olgunluk, dijital olgunluk ve kurumsal yazılım alanlarında işletmelere danışmanlık, yazılım ve eğitim çözümleri sunar.",
    description2:
      "Amaç; yalnızca mevcut yapıyı değerlendirmek değil, süreçleri görünür hale getirmek, gelişim alanlarını netleştirmek, dijital dönüşüm için daha sağlam bir zemin oluşturmak ve ihtiyaç halinde bu yapıyı yazılım ile sürdürülebilir hale getirmektir.",
    focusItems: [
      "Süreç Yönetimi",
      "Süreç Analizi",
      "Süreç İyileştirme",
      "Süreç Olgunluk",
      "Dijital Olgunluk",
      "Kurumsal Yazılım",
    ],
    highlightCards: [
      {
        title: "Danışmanlık",
        text: "Mevcut yapıyı görünür hale getirir, süreçleri netleştirir ve gelişim alanlarını ortaya çıkarır.",
      },
      {
        title: "Yazılım",
        text: "İhtiyaç halinde süreçleri ölçülebilir, izlenebilir ve sürdürülebilir hale getiren yazılım yapısı kurar.",
      },
      {
        title: "Eğitim",
        text: "Kurulan yaklaşımın kurum içinde benimsenmesini ve uygulanabilir hale gelmesini destekler.",
      },
    ],
    tag: "Tage Yazılım",
  },

  cards: {
    badge: "Hizmet alanlarımız",
    title: "Süreçten yazılıma uzanan hizmet yapısı",
    description:
      "Tage Yazılım; süreç yönetimi, analiz, iyileştirme, dijital olgunluk, kurumsal yazılım ve ERP hazırlık alanlarında birbirini tamamlayan hizmetler sunar.",
    detailButton: "Detayı İncele",
    items: [
      {
        title: "Süreç Yönetimi Danışmanlığı",
        href: "/hizmetler/surec-yonetimi-danismanligi",
        description:
          "Tage Yazılım, işletmelerde süreçleri görünür, ölçülebilir ve yönetilebilir hale getirmek için kurumsal süreç yönetimi yaklaşımı sunar.",
        benefits: ["Süreç envanteri", "Süreç sahipliği", "Ölçülebilir yapı"],
      },
      {
        title: "Süreç Analizi ve Süreç Modelleme",
        href: "/hizmetler/surec-analizi-ve-surec-modelleme",
        description:
          "Mevcut işleyişin görünür hale getirilmesi, darboğazların tespiti ve süreçlerin daha net bir yapıda modellenmesi için analiz odaklı hizmet sunar.",
        benefits: [
          "Mevcut durum analizi",
          "Darboğaz görünürlüğü",
          "Süreç modelleme",
        ],
      },
      {
        title: "Süreç İyileştirme ve İş Akışı Yönetimi",
        href: "/hizmetler/surec-iyilestirme-ve-is-akisi-yonetimi",
        description:
          "İş akışlarını sadeleştirmek, tekrar eden adımları azaltmak ve süreçleri daha verimli hale getirmek için iyileştirme odaklı çalışmalar yürütür.",
        benefits: [
          "İş akışı sadeleştirme",
          "Verimlilik artışı",
          "Aksiyon odaklı iyileştirme",
        ],
      },
      {
        title: "Dijital Olgunluk ve Dijital Dönüşüm Analizi",
        href: "/hizmetler/dijital-olgunluk-ve-dijital-donusum-analizi",
        description:
          "İşletmenin mevcut dijital ve süreçsel olgunluk seviyesini değerlendirir, gelişim alanlarını görünür hale getirir ve yol haritası oluşturur.",
        benefits: [
          "Olgunluk değerlendirmesi",
          "Önceliklendirme",
          "Yol haritası",
        ],
      },
      {
        title: "Süreç Yönetimi Yazılımı ve Kurumsal Yazılım Çözümleri",
        href: "/hizmetler/surec-yonetimi-yazilimi-ve-kurumsal-yazilim-cozumleri",
        description:
          "Süreçlerin dijital ortamda izlenebilir, puanlanabilir, raporlanabilir ve sürdürülebilir hale gelmesi için kurumsal yazılım çözümleri sunar.",
        benefits: [
          "Dijital süreç takibi",
          "Skor ve görünürlük",
          "Raporlama ve aksiyon",
        ],
      },
      {
        title: "ERP Danışmanlığı ve ERP Hazırlık Hizmetleri",
        href: "/hizmetler/erp-danismanligi-ve-erp-hazirlik-hizmetleri",
        description:
          "ERP yatırımı öncesinde süreçlerin netleştirilmesi, organizasyonun hazırlanması ve ERP geçişine uygun yapının oluşturulması için danışmanlık sunar.",
        benefits: [
          "ERP hazırlık",
          "Süreç netleştirme",
          "ERP geçiş desteği",
        ],
      },
    ],
  },

  why: {
    badge: "Neden Tage Yazılım?",
    title: "Süreçten yazılıma uzanan, sade ve uygulanabilir hizmet yaklaşımı",
    description:
      "Tage Yazılım, işletmelerin mevcut yapısını yalnızca analiz etmekle kalmaz; süreçleri görünür hale getirir, gelişim alanlarını belirler, iyileştirme yaklaşımı oluşturur ve ihtiyaç halinde bu yapıyı yazılım ile desteklenebilir hale getirir.",
    items: [
      "Kurumsal ihtiyaçlara yakın danışmanlık yaklaşımı",
      "Süreç analizi, iyileştirme ve ölçüm odaklı yapı",
      "Yazılım ile desteklenebilen sürdürülebilir çözüm anlayışı",
      "Danışmanlık, eğitim ve ürün yaklaşımını birlikte sunan model",
    ],
  },

  bridge: {
    badge: "Ürün desteği",
    title: "Hizmetleri yazılım ile daha görünür ve sürdürülebilir hale getirin",
    description:
      "Tage Yazılım’ın danışmanlık yaklaşımı, gerektiğinde Sadi ile ölçülebilir, izlenebilir ve raporlanabilir bir yapıya taşınabilir. Böylece süreçler yalnızca tanımlanmaz; takip edilebilir ve yeniden değerlendirilebilir hale gelir.",
    button: "Sadi Ürün Sayfası",
    items: [
      {
        title: "Süreç görünürlüğü",
        text: "Süreçleri dijital ortamda daha görünür hale getirir.",
      },
      {
        title: "Ölçüm ve analiz",
        text: "Puanlama, risk ve gelişim alanlarını daha net takip etmeyi sağlar.",
      },
      {
        title: "Aksiyon takibi",
        text: "İyileştirme aksiyonlarının sahipliğini ve ilerlemesini görünür kılar.",
      },
    ],
  },

  cta: {
    badge: "Son adım",
    title: "İşletmeniz için en doğru hizmet yapısını birlikte netleştirelim",
    description:
      "Süreç yönetimi, analiz, iyileştirme, dijital olgunluk ve yazılım çözümleri içinde sizin için en doğru yaklaşımı birlikte belirleyelim.",
    primaryButton: "İletişime Geçin",
    secondaryButton: "Sadi’yi İncele",
  },
};

const en = {
  hero: {
    badge: "Software • Consulting • Training",
    title: "Our Services",
    description:
      "Tage Yazılım provides software, consulting, and training solutions in process management, process analysis, process improvement, process maturity, digital maturity, and enterprise software.",
    primaryButton: "Contact Us",
    secondaryButton: "Explore Sadi",
    approachTitle: "Tage Yazılım approach",
    approachItems: [
      "Process Management",
      "Analysis and Modeling",
      "Improvement",
      "Digital Maturity",
      "Enterprise Software",
    ],
    flowTitle: "Process Flow",
    flowText:
      "An approach that makes your processes visible, simple, and manageable.",
    modulesTitle: "Module Structure",
    modules: ["Analysis", "Measurement", "Improvement", "Software"],
    chartTitle: "Analysis and Software Feel",
    chartText:
      "Supports your consulting outputs with a measurable and sustainable software approach.",
  },

  intro: {
    badge: "Tage Yazılım approach",
    title:
      "A service model that not only evaluates processes, but also improves and supports them with software",
    description1:
      "Tage Yazılım provides consulting, software, and training solutions in process management, process analysis, process improvement, process maturity, digital maturity, and enterprise software.",
    description2:
      "The goal is not only to evaluate the current structure, but to make processes visible, clarify improvement areas, build a stronger foundation for digital transformation, and, when needed, make this structure sustainable through software.",
    focusItems: [
      "Process Management",
      "Process Analysis",
      "Process Improvement",
      "Process Maturity",
      "Digital Maturity",
      "Enterprise Software",
    ],
    highlightCards: [
      {
        title: "Consulting",
        text: "Makes the current structure visible, clarifies processes, and reveals development areas.",
      },
      {
        title: "Software",
        text: "Builds a software structure that makes processes measurable, traceable, and sustainable when needed.",
      },
      {
        title: "Training",
        text: "Supports the adoption of the established approach within the organization and makes it applicable.",
      },
    ],
    tag: "Tage Yazılım",
  },

  cards: {
    badge: "Our service areas",
    title: "A service structure extending from process to software",
    description:
      "Tage Yazılım offers complementary services in process management, analysis, improvement, digital maturity, enterprise software, and ERP readiness.",
    detailButton: "View Details",
    items: [
      {
        title: "Process Management Consulting",
        href: "/hizmetler/surec-yonetimi-danismanligi",
        description:
          "Tage Yazılım provides an enterprise process management approach to make processes visible, measurable, and manageable.",
        benefits: [
          "Process inventory",
          "Process ownership",
          "Measurable structure",
        ],
      },
      {
        title: "Process Analysis and Process Modeling",
        href: "/hizmetler/surec-analizi-ve-surec-modelleme",
        description:
          "Provides an analysis-focused service to make the current operation visible, identify bottlenecks, and model processes in a clearer structure.",
        benefits: [
          "Current state analysis",
          "Bottleneck visibility",
          "Process modeling",
        ],
      },
      {
        title: "Process Improvement and Workflow Management",
        href: "/hizmetler/surec-iyilestirme-ve-is-akisi-yonetimi",
        description:
          "Carries out improvement-focused work to simplify workflows, reduce repetitive steps, and make processes more efficient.",
        benefits: [
          "Workflow simplification",
          "Efficiency increase",
          "Action-oriented improvement",
        ],
      },
      {
        title: "Digital Maturity and Digital Transformation Analysis",
        href: "/hizmetler/dijital-olgunluk-ve-dijital-donusum-analizi",
        description:
          "Evaluates the company’s current digital and process maturity level, makes improvement areas visible, and creates a roadmap.",
        benefits: [
          "Maturity assessment",
          "Prioritization",
          "Roadmap",
        ],
      },
      {
        title: "Process Management Software and Enterprise Software Solutions",
        href: "/hizmetler/surec-yonetimi-yazilimi-ve-kurumsal-yazilim-cozumleri",
        description:
          "Provides enterprise software solutions so processes can become traceable, scored, reported, and sustainable in a digital environment.",
        benefits: [
          "Digital process tracking",
          "Scoring and visibility",
          "Reporting and actions",
        ],
      },
      {
        title: "ERP Consulting and ERP Readiness Services",
        href: "/hizmetler/erp-danismanligi-ve-erp-hazirlik-hizmetleri",
        description:
          "Provides consulting before ERP investment to clarify processes, prepare the organization, and build a structure suitable for ERP transition.",
        benefits: [
          "ERP readiness",
          "Process clarification",
          "ERP transition support",
        ],
      },
    ],
  },

  why: {
    badge: "Why Tage Yazılım?",
    title: "A simple and practical service approach extending from process to software",
    description:
      "Tage Yazılım does not only analyze the current structure of businesses; it makes processes visible, identifies improvement areas, builds an improvement approach, and when needed, makes this structure supportable by software.",
    items: [
      "A consulting approach close to enterprise needs",
      "A structure focused on process analysis, improvement, and measurement",
      "A sustainable solution mindset that can be supported by software",
      "A model that offers consulting, training, and product approach together",
    ],
  },

  bridge: {
    badge: "Product support",
    title: "Make services more visible and sustainable with software",
    description:
      "Tage Yazılım’s consulting approach can, when needed, be turned into a measurable, traceable, and reportable structure with Sadi. This way, processes are not only defined, but also become trackable and reassessable.",
    button: "Sadi Product Page",
    items: [
      {
        title: "Process visibility",
        text: "Makes processes more visible in a digital environment.",
      },
      {
        title: "Measurement and analysis",
        text: "Enables clearer tracking of scoring, risk, and improvement areas.",
      },
      {
        title: "Action tracking",
        text: "Makes the ownership and progress of improvement actions visible.",
      },
    ],
  },

  cta: {
    badge: "Final step",
    title: "Let’s clarify the right service structure for your business together",
    description:
      "Let’s define the most suitable approach for you among process management, analysis, improvement, digital maturity, and software solutions.",
    primaryButton: "Contact Us",
    secondaryButton: "Explore Sadi",
  },
};

export default async function ServicesPage({ params }: PageProps) {
  const { lang } = await params;

  if (lang !== "tr" && lang !== "en") {
    notFound();
  }

  const copy = lang === "en" ? en : tr;
  const withLang = (path: string) => `/${lang}${path}`;

  const serviceIcons = [
    Workflow,
    GitBranch,
    Route,
    Gauge,
    Blocks,
    BriefcaseBusiness,
  ];

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <Container className="grid gap-12 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
          <div>
            <div className="inline-flex rounded-full border border-[#CBDCEB] bg-[#EFF5FB] px-4 py-2 text-sm font-medium text-[#133E87]">
              {copy.hero.badge}
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {copy.hero.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {copy.hero.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={withLang("/iletisim")}
                className="rounded-xl bg-[#133E87] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#0f3270]"
              >
                {copy.hero.primaryButton}
              </Link>

              <Link
                href={withLang("/sadi")}
                className="rounded-xl border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-[#133E87] hover:text-[#133E87]"
              >
                {copy.hero.secondaryButton}
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-[#f8fbff] to-[#eef5fb] p-6 shadow-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:col-span-2">
                  <p className="text-sm font-medium text-slate-500">
                    {copy.hero.approachTitle}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {copy.hero.approachItems.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#CBDCEB] bg-white px-4 py-2 text-sm font-medium text-[#133E87]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="text-sm font-medium text-slate-500">
                    {copy.hero.flowTitle}
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-[#608BC1]" />
                    <div className="h-[2px] flex-1 bg-[#CBDCEB]" />
                    <div className="h-3 w-3 rounded-full bg-[#133E87]" />
                    <div className="h-[2px] flex-1 bg-[#CBDCEB]" />
                    <div className="h-3 w-3 rounded-full bg-[#608BC1]" />
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {copy.hero.flowText}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="text-sm font-medium text-slate-500">
                    {copy.hero.modulesTitle}
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {copy.hero.modules.map((item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-[#CBDCEB] bg-[#F7FAFD] px-3 py-4 text-center text-xs font-medium text-[#133E87]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:col-span-2">
                  <p className="text-sm font-medium text-slate-500">
                    {copy.hero.chartTitle}
                  </p>
                  <div className="mt-4 grid grid-cols-4 items-end gap-3">
                    <div className="h-12 rounded-t-xl bg-[#CBDCEB]" />
                    <div className="h-20 rounded-t-xl bg-[#9DBBDA]" />
                    <div className="h-28 rounded-t-xl bg-[#608BC1]" />
                    <div className="h-36 rounded-t-xl bg-[#133E87]" />
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {copy.hero.chartText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Intro */}
      <section className="bg-[#f8fbff] py-20">
        <Container>
          <div className="relative overflow-hidden rounded-[32px] border border-[#CBDCEB] bg-white p-8 shadow-[0_12px_40px_rgba(19,62,135,0.08)] sm:p-10 lg:p-12">
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-[#eff5fb] via-white to-[#f7fbff]" />
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#CBDCEB]/20 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-[#608BC1]/10 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <div>
                <div className="inline-flex rounded-full border border-[#CBDCEB] bg-[#EFF5FB] px-4 py-2 text-sm font-medium text-[#133E87]">
                  {copy.intro.badge}
                </div>

                <h2 className="mt-6 max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                  {copy.intro.title}
                </h2>

                <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                  {copy.intro.description1}
                </p>

                <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                  {copy.intro.description2}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {copy.intro.focusItems.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#CBDCEB] bg-[#F7FAFD] px-4 py-2 text-sm font-medium text-[#133E87] transition hover:border-[#608BC1] hover:bg-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-4">
                {copy.intro.highlightCards.map((card, index) => (
                  <div
                    key={card.title}
                    className={`rounded-[24px] border p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
                      index === 0
                        ? "border-[#CBDCEB] bg-gradient-to-br from-[#f8fbff] to-[#eef5fb]"
                        : "border-slate-200 bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-lg font-semibold text-slate-900">
                        {card.title}
                      </h3>
                      <span className="rounded-full border border-[#CBDCEB] bg-white px-3 py-1 text-xs font-semibold text-[#608BC1]">
                        {copy.intro.tag}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                      {card.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Service Cards */}
      <section className="bg-white py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#608BC1]">
              {copy.cards.badge}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {copy.cards.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              {copy.cards.description}
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {copy.cards.items.map((service, index) => {
              const Icon = serviceIcons[index];

              return (
                <div
                  key={service.title}
                  className="flex h-full flex-col rounded-[24px] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#CBDCEB] bg-[#F7FAFD]">
                      <Icon size={22} strokeWidth={2} color="#608BC1" />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-base leading-7 text-slate-600">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {service.benefits.map((benefit) => (
                      <div
                        key={benefit}
                        className="flex items-center gap-3 text-sm font-medium text-slate-700"
                      >
                        <CheckCircle2 size={18} strokeWidth={2} color="#608BC1" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-2">
                    <Link
                      href={withLang(service.href)}
                      className="inline-flex items-center gap-2 rounded-xl bg-[#133E87] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0f3270]"
                    >
                      {copy.cards.detailButton}
                      <ArrowRight size={16} strokeWidth={2.25} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Why */}
      <section className="bg-white py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#608BC1]">
              {copy.why.badge}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {copy.why.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
              {copy.why.description}
            </p>
          </div>

          <div className="grid gap-4">
            {copy.why.items.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-[#F8FBFF] px-5 py-4 text-base font-medium text-slate-800"
              >
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Product Bridge */}
      <section className="bg-[#133E87] py-20 text-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#CBDCEB]">
                {copy.bridge.badge}
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                {copy.bridge.title}
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-white/85">
                {copy.bridge.description}
              </p>

              <div className="mt-8">
                <Link
                  href={withLang("/sadi")}
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#133E87] transition hover:bg-slate-100"
                >
                  {copy.bridge.button}
                  <ArrowRight size={16} strokeWidth={2.25} />
                </Link>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/15 bg-white/10 p-7 backdrop-blur-sm">
              <div className="grid gap-4">
                <div className="flex items-start gap-3 rounded-2xl bg-white/10 p-4">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15">
                    <Workflow size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold">
                      {copy.bridge.items[0].title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-white/80">
                      {copy.bridge.items[0].text}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl bg-white/10 p-4">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15">
                    <BarChart3 size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold">
                      {copy.bridge.items[1].title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-white/80">
                      {copy.bridge.items[1].text}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl bg-white/10 p-4">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold">
                      {copy.bridge.items[2].title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-white/80">
                      {copy.bridge.items[2].text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <Container>
          <div className="rounded-[32px] border border-[#CBDCEB] bg-gradient-to-br from-[#F3F3E0] via-white to-[#F8FAFC] px-6 py-10 text-center shadow-sm md:px-10 md:py-14">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#608BC1]">
              {copy.cta.badge}
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {copy.cta.title}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
              {copy.cta.description}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href={withLang("/iletisim")}
                className="inline-flex items-center gap-2 rounded-xl bg-[#133E87] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0f3270]"
              >
                {copy.cta.primaryButton}
                <ArrowRight size={16} strokeWidth={2.25} />
              </Link>

              <Link
                href={withLang("/sadi")}
                className="inline-flex items-center gap-2 rounded-xl border border-[#CBDCEB] bg-white px-5 py-3 text-sm font-semibold text-[#133E87] transition hover:bg-[#F7FAFD]"
              >
                {copy.cta.secondaryButton}
                <ArrowRight size={16} strokeWidth={2.25} />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}