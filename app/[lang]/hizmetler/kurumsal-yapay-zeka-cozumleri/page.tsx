import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  CheckCircle2,
  FileSearch,
  Lightbulb,
  MessageSquareText,
  Sparkles,
  Workflow,
} from "lucide-react";

import Container from "@/components/layout/Container";

type PageProps = {
  params: Promise<{ lang: string }>;
};

const content = {
  tr: {
    metadata: {
      title: "Kurumsal Yapay Zekâ Çözümleri | Tage Yazılım",
      description:
        "Tage Yazılım, kurumların gerçek iş ihtiyaçlarına yönelik AI destekli iş uygulamaları, kurumsal bilgi asistanları, doküman analizi, karar destek ve süreç otomasyonu çözümleri geliştirir.",
    },

    hero: {
      badge: "Kurumsal Yapay Zekâ Çözümleri",
      title: "Yapay zekâyı gerçek iş süreçlerine uyguluyoruz",
      description:
        "Kurumların verisini, dokümanlarını, iş süreçlerini ve mevcut sistemlerini değerlendirerek gerçek kullanım ihtiyacına yönelik yapay zekâ destekli çözümler geliştiriyoruz.",
      primaryButton: "AI İhtiyacınızı Konuşalım",
      secondaryButton: "Çözüm Alanlarını İncele",
    },

    solutions: {
      badge: "AI Çözüm Alanları",
      title: "Yapay zekâyı iş ihtiyacına dönüştürüyoruz",
      description:
        "Teknolojiden önce çözülmesi gereken problemi belirliyor, yapay zekânın anlamlı değer üretebileceği kullanım alanlarına odaklanıyoruz.",
      items: [
        {
          title: "AI Destekli İş Uygulamaları",
          description:
            "Mevcut veya yeni kurumsal uygulamalara analiz, öneri, sınıflandırma ve içerik üretimi gibi yapay zekâ yetenekleri kazandırıyoruz.",
          icon: "application",
        },
        {
          title: "Kurumsal Bilgi Asistanları",
          description:
            "Kurum içi bilgi kaynakları üzerinde çalışan, kullanıcıların ihtiyaç duyduğu bilgiye daha hızlı ulaşmasını sağlayan AI destekli asistanlar geliştiriyoruz.",
          icon: "assistant",
        },
        {
          title: "Doküman ve Bilgi Analizi",
          description:
            "Doküman, prosedür, rapor ve benzeri kurumsal içeriklerin analiz edilmesini, sınıflandırılmasını ve özetlenmesini destekleyen çözümler geliştiriyoruz.",
          icon: "document",
        },
        {
          title: "Karar Destek ve Analiz",
          description:
            "Operasyonel veriyi ve kurumsal bilgiyi kullanarak değerlendirme, özetleme ve karar süreçlerini destekleyen AI çözümleri geliştiriyoruz.",
          icon: "decision",
        },
        {
          title: "Süreç Otomasyonu",
          description:
            "Tekrarlayan bilgi işleme, kontrol, yönlendirme ve değerlendirme adımlarında yapay zekâ destekli otomasyon fırsatları oluşturuyoruz.",
          icon: "automation",
        },
      ],
    },

    examples: {
      badge: "Kullanım Örnekleri",
      title: "Yapay zekâ nerelerde kullanılabilir?",
      description:
        "Doğru kullanım alanı kurumun süreçlerine, verisine ve iş hedeflerine göre belirlenir.",
      items: [
        "Doküman ve prosedür analizi",
        "Kurumsal bilgi arama ve soru-cevap",
        "Rapor ve içerik özetleme",
        "Operasyonel karar desteği",
        "Veri ve kayıt sınıflandırma",
        "Öneri ve değerlendirme sistemleri",
        "Süreç verilerinin analizi",
        "Bilgi ve kayıt kontrolü",
        "Mevcut uygulamalara AI yetenekleri ekleme",
        "Tekrarlayan bilgi işlerinin otomasyonu",
      ],
    },

    difference: {
      badge: "Tage Yaklaşımı",
      title:
        "Yapay zekâ projesine modelden değil, iş ihtiyacından başlıyoruz.",
      description:
        "Kurumsal yapay zekâ projelerinde değer yalnızca kullanılan modelden gelmez. İş sürecinin, verinin, kullanıcı ihtiyacının ve mevcut sistemlerin birlikte değerlendirilmesi gerekir.",
      items: [
        {
          title: "İş sürecini anlama",
          description:
            "AI kullanım alanını, çözülmesi gereken iş problemi ve mevcut süreç üzerinden değerlendiriyoruz.",
        },
        {
          title: "Veri ve bilgi hazırlığını değerlendirme",
          description:
            "Çözümün ihtiyaç duyduğu veri, doküman ve kurumsal bilgi kaynaklarının kullanılabilirliğini dikkate alıyoruz.",
        },
        {
          title: "Mevcut sistemlerle birlikte çalışma",
          description:
            "AI çözümünü gerektiğinde kurumsal uygulamalar ve ERP gibi mevcut sistemlerle birlikte ele alıyoruz.",
        },
        {
          title: "Ölçülebilir kullanım alanına odaklanma",
          description:
            "Genel AI söylemleri yerine operasyonel fayda oluşturabilecek somut kullanım senaryolarına odaklanıyoruz.",
        },
      ],
    },

    cta: {
      title: "Kurumunuzdaki yapay zekâ fırsatlarını birlikte değerlendirelim",
      description:
        "Bir AI fikriniz varsa veya yapay zekânın işletmenizde nerede kullanılabileceğini değerlendirmek istiyorsanız iş ihtiyacınızı birlikte inceleyebiliriz.",
      button: "İletişime Geç",
    },
  },

  en: {
    metadata: {
      title: "Enterprise AI Solutions | Tage Yazılım",
      description:
        "Tage Yazılım develops AI-powered business applications, enterprise knowledge assistants, document analysis, decision support, and process automation solutions for real business needs.",
    },

    hero: {
      badge: "Enterprise AI Solutions",
      title: "We apply artificial intelligence to real business processes",
      description:
        "We develop AI-powered solutions for real use cases by evaluating organizational data, documents, business processes, and existing systems together.",
      primaryButton: "Discuss Your AI Needs",
      secondaryButton: "Explore Solution Areas",
    },

    solutions: {
      badge: "AI Solution Areas",
      title: "We turn artificial intelligence into business solutions",
      description:
        "We identify the problem before the technology and focus on use cases where artificial intelligence can create meaningful business value.",
      items: [
        {
          title: "AI-Powered Business Applications",
          description:
            "We add AI capabilities such as analysis, recommendations, classification, and content generation to new or existing enterprise applications.",
          icon: "application",
        },
        {
          title: "Enterprise Knowledge Assistants",
          description:
            "We develop AI-powered assistants that work with internal knowledge sources and help users access relevant organizational information more efficiently.",
          icon: "assistant",
        },
        {
          title: "Document & Knowledge Analysis",
          description:
            "We develop solutions that support the analysis, classification, and summarization of documents, procedures, reports, and other enterprise content.",
          icon: "document",
        },
        {
          title: "Decision Support & Analysis",
          description:
            "We develop AI solutions that use operational data and enterprise knowledge to support evaluation, summarization, and decision-making.",
          icon: "decision",
        },
        {
          title: "Process Automation",
          description:
            "We identify AI-supported automation opportunities for repetitive information processing, control, routing, and evaluation activities.",
          icon: "automation",
        },
      ],
    },

    examples: {
      badge: "Use Cases",
      title: "Where can artificial intelligence be used?",
      description:
        "The right use case depends on the organization's processes, data, and business objectives.",
      items: [
        "Document and procedure analysis",
        "Enterprise knowledge search and Q&A",
        "Report and content summarization",
        "Operational decision support",
        "Data and record classification",
        "Recommendation and evaluation systems",
        "Process data analysis",
        "Information and record validation",
        "Adding AI capabilities to existing applications",
        "Automation of repetitive information tasks",
      ],
    },

    difference: {
      badge: "The Tage Approach",
      title:
        "We start an AI project with the business need, not with the model.",
      description:
        "The value of enterprise AI does not come from the model alone. Business processes, data, user needs, and existing systems need to be evaluated together.",
      items: [
        {
          title: "Understanding the business process",
          description:
            "We evaluate the AI use case through the business problem to be solved and the existing process.",
        },
        {
          title: "Assessing data and knowledge readiness",
          description:
            "We consider the availability and usability of the data, documents, and enterprise knowledge required by the solution.",
        },
        {
          title: "Working with existing systems",
          description:
            "Where needed, we design the AI solution to work with existing enterprise applications and systems such as ERP.",
        },
        {
          title: "Focusing on measurable use cases",
          description:
            "Instead of broad AI claims, we focus on concrete use cases that can create operational value.",
        },
      ],
    },

    cta: {
      title: "Let's evaluate AI opportunities in your organization",
      description:
        "If you have an AI idea or want to understand where artificial intelligence can be applied in your organization, we can evaluate the business need together.",
      button: "Contact Us",
    },
  },
} as const;

const iconMap = {
  application: BrainCircuit,
  assistant: MessageSquareText,
  document: FileSearch,
  decision: BarChart3,
  automation: Workflow,
} as const;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params;

  if (lang !== "tr" && lang !== "en") {
    return {};
  }

  const page = content[lang];
  const canonical = `https://www.tageapps.com/${lang}/hizmetler/kurumsal-yapay-zeka-cozumleri`;

  return {
    title: page.metadata.title,
    description: page.metadata.description,
    alternates: {
      canonical,
      languages: {
        tr: "https://www.tageapps.com/tr/hizmetler/kurumsal-yapay-zeka-cozumleri",
        en: "https://www.tageapps.com/en/hizmetler/kurumsal-yapay-zeka-cozumleri",
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

export default async function EnterpriseAiSolutionsPage({
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
        ? "Kurumsal Yapay Zekâ Çözümleri"
        : "Enterprise AI Solutions",
    url: `https://www.tageapps.com/${lang}/hizmetler/kurumsal-yapay-zeka-cozumleri`,
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
                  href="#ai-cozum-alanlari"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-[#608BC1]"
                >
                  {page.hero.secondaryButton}
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#CBDCEB]/60 text-[#133E87]">
                  <Bot className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-slate-950">
                    {page.hero.badge}
                  </p>
                  <p className="text-sm text-slate-500">
                    AI • Data • Business
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

      {/* AI Solution Areas */}
      <section id="ai-cozum-alanlari" className="bg-white">
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

      {/* Use Cases */}
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
                const icons = [
                  Lightbulb,
                  FileSearch,
                  Workflow,
                  Sparkles,
                ];

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