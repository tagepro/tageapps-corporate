import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import {
  ArrowRight,
  BarChart3,
  Blocks,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  Database,
  Gauge,
  GitBranch,
  Route,
  Sparkles,
  Workflow,
} from "lucide-react";

type PageProps = {
  params: Promise<{ lang: string }>;
};

const tr = {
  hero: {
    badge: "Yazılım • Yapay Zekâ • Dijital Dönüşüm",
    title: "Kurumsal teknoloji ve dönüşüm ihtiyaçlarına bütüncül çözümler",
    description:
      "Tage Yazılım, kurumlara özel yazılım geliştirme, yapay zekâ, süreç olgunluğu, dijital dönüşüm ve ERP alanlarında iş ihtiyaçlarını teknolojiyle buluşturur.",
    primaryButton: "İletişime Geç",
    secondaryButton: "Hizmet Alanlarını İncele",
  },

  pillars: {
    badge: "Tüm Hizmetler",
    title: "Kurumsal teknoloji ve dönüşüm hizmetlerimiz",
    description:
      "Yazılım geliştirme, yapay zekâ, dijital dönüşüm, süreç yönetimi ve ERP alanlarındaki hizmetlerimizi kurumların gerçek iş ihtiyaçları etrafında sunuyoruz.",
    detailButton: "Detayları İncele",
    items: [
      {
        title: "Kurumsal Yazılım Geliştirme",
        href: "/hizmetler/kurumsal-yazilim-gelistirme",
        description:
          "İş ihtiyaçlarına özel web, mobil, portal ve kurumsal uygulamalar geliştiriyoruz.",
      },
      {
        title: "Kurumsal Yapay Zekâ Çözümleri",
        href: "/hizmetler/kurumsal-yapay-zeka-cozumleri",
        description:
          "Yapay zekâyı kurumun verisi, bilgisi ve gerçek iş süreçleriyle buluşturan çözümler geliştiriyoruz.",
      },
      {
        title: "Dijital Olgunluk ve Dijital Dönüşüm Analizi",
        href: "/hizmetler/dijital-olgunluk-ve-dijital-donusum-analizi",
        description:
          "Dijital hazırlığı değerlendiriyor, gelişim alanlarını ve dönüşüm önceliklerini görünür hale getiriyoruz.",
      },
      {
        title: "Süreç Olgunluğu ve Süreç Yönetimi",
        href: "/hizmetler/surec-olgunlugu-ve-surec-yonetimi",
        description:
          "Süreçleri görünür, ölçülebilir, standart ve dijital olarak yönetilebilir hale getiriyoruz.",
      },
      {
        title: "ERP Danışmanlığı ve ERP Hazırlık",
        href: "/hizmetler/erp-danismanligi-ve-erp-hazirlik-hizmetleri",
        description:
          "ERP yatırımı öncesinde süreçleri ve organizasyonu değerlendirerek kurumu ERP dönüşümüne hazırlıyoruz.",
      },
    ],
  },

  approach: {
    badge: "Yaklaşımımız",
    title: "Teknolojiden önce iş ihtiyacını anlıyoruz",
    description:
      "Başarılı teknoloji projeleri yalnızca doğru yazılım veya yapay zekâ aracını seçmekle oluşmaz. Süreçlerin, verinin, kullanıcı ihtiyaçlarının ve mevcut sistemlerin birlikte değerlendirilmesi gerekir.",
    items: [
      {
        title: "İş İhtiyacını Anlama",
        text: "Hedefleri, kullanıcı ihtiyaçlarını ve çözülmesi gereken iş problemini netleştiriyoruz.",
      },
      {
        title: "Süreçleri Değerlendirme",
        text: "Mevcut işleyişi, sorumlulukları, darboğazları ve süreç olgunluğunu değerlendiriyoruz.",
      },
      {
        title: "Veriyi Hazırlama",
        text: "Verinin yapısını, kalitesini, erişilebilirliğini ve çözüm için kullanılabilirliğini inceliyoruz.",
      },
      {
        title: "Doğru Teknolojiyi Belirleme",
        text: "Yazılım, yapay zekâ, entegrasyon ve otomasyon seçeneklerini gerçek ihtiyaca göre belirliyoruz.",
      },
      {
        title: "Çözümü Uygulama",
        text: "Belirlenen ihtiyaca uygun kurumsal yazılım ve teknoloji çözümlerini hayata geçiriyoruz.",
      },
      {
        title: "Sonuçları Ölçme",
        text: "Çözümün süreç, verimlilik ve yönetim görünürlüğü üzerindeki etkisini izlenebilir hale getiriyoruz.",
      },
    ],
  },

  expertise: {
    badge: "Uzmanlık Hizmetleri",
    title: "Süreç ve ERP deneyimimizi dönüşüm projelerine taşıyoruz",
    description:
      "Mevcut danışmanlık hizmetlerimiz süreçlerin görünür hale gelmesi, iyileştirilmesi, dijital dönüşüme hazırlanması ve ERP yatırımlarının daha sağlam bir zeminde ilerlemesi için kullanılır.",
    detailButton: "Detayı İncele",
    items: [
      {
        title: "Süreç Yönetimi Danışmanlığı",
        href: "/hizmetler/surec-yonetimi-danismanligi",
        description:
          "Süreçleri görünür, ölçülebilir ve yönetilebilir hale getiren kurumsal süreç yönetimi yaklaşımı.",
      },
      {
        title: "Süreç Analizi ve Süreç Modelleme",
        href: "/hizmetler/surec-analizi-ve-surec-modelleme",
        description:
          "Mevcut işleyişi analiz eden, darboğazları görünür hale getiren ve süreçleri daha net bir yapıda modelleyen çalışma.",
      },
      {
        title: "Süreç İyileştirme ve İş Akışı Yönetimi",
        href: "/hizmetler/surec-iyilestirme-ve-is-akisi-yonetimi",
        description:
          "İş akışlarını sadeleştiren, tekrarları azaltan ve süreç verimliliğini geliştiren iyileştirme yaklaşımı.",
      },
      {
        title: "Dijital Olgunluk ve Dijital Dönüşüm Analizi",
        href: "/hizmetler/dijital-olgunluk-ve-dijital-donusum-analizi",
        description:
          "Kurumun dijital hazırlığını değerlendirerek gelişim alanlarını ve dönüşüm önceliklerini görünür hale getiren analiz.",
      },
      {
        title: "ERP Danışmanlığı ve ERP Hazırlık Hizmetleri",
        href: "/hizmetler/erp-danismanligi-ve-erp-hazirlik-hizmetleri",
        description:
          "ERP yatırımı öncesinde süreçleri ve organizasyonu hazırlayan, ERP geçişinin daha sağlam temelde ilerlemesini destekleyen danışmanlık.",
      },
    ],
  },

  why: {
    badge: "Neden Tage Yazılım?",
    title: "İş süreçleri ile teknolojiyi aynı yapıda ele alıyoruz",
    description:
      "Kurumsal yazılım ve yapay zekâ projelerini yalnızca teknik geliştirme olarak görmüyoruz. İş ihtiyacını, süreçleri, veriyi, mevcut sistemleri ve dönüşüm hedeflerini birlikte değerlendiriyoruz.",
    items: [
      "25 yılı aşkın IT ve ERP deneyimi",
      "İş süreçlerini anlayan yazılım yaklaşımı",
      "Yapay zekâyı gerçek kullanım alanlarına odaklayan çözüm anlayışı",
      "Süreç olgunluğu ve dijital dönüşümü birlikte değerlendiren yapı",
    ],
  },

  bridge: {
    badge: "Ürünümüz",
    title: "Süreç olgunluğunu ve dönüşüm hazırlığını Sadi ile görünür hale getirin",
    description:
      "Sadi, süreç envanterinden olgunluk değerlendirmesine, risk ve verimlilik analizinden iyileştirme önerilerine kadar dönüşüm hazırlığını ölçülebilir hale getiren AI destekli platformdur.",
    button: "Sadi’yi İncele",
    items: [
      {
        title: "Süreç Olgunluğu",
        text: "Süreçlerin ne kadar tanımlı, standart, dijital ve yönetilebilir olduğunu görünür hale getirir.",
      },
      {
        title: "Risk ve Verimlilik",
        text: "Riskleri, verimlilik etkilerini ve gelişim alanlarını birlikte değerlendirmeyi destekler.",
      },
      {
        title: "Dönüşüm Yol Haritası",
        text: "İyileştirme önceliklerinin ve dönüşüm aksiyonlarının daha sistematik yönetilmesini destekler.",
      },
    ],
  },

  cta: {
    badge: "Birlikte Değerlendirelim",
    title: "İş ihtiyacınıza uygun çözümü birlikte netleştirelim",
    description:
      "Kurumsal yazılım, yapay zekâ, süreç olgunluğu, dijital dönüşüm veya ERP alanındaki ihtiyacınızı birlikte değerlendirelim.",
    button: "İletişime Geçin",
  },
};

const en = {
  hero: {
    badge: "Software • Artificial Intelligence • Digital Transformation",
    title: "Integrated solutions for enterprise technology and transformation needs",
    description:
      "Tage Yazılım connects business needs with technology through custom software development, artificial intelligence, process maturity, digital transformation, and ERP expertise.",
    primaryButton: "Contact Us",
    secondaryButton: "Explore Service Areas",
  },

  pillars: {
    badge: "All Services",
    title: "Our enterprise technology and transformation services",
    description:
      "We deliver software development, artificial intelligence, digital transformation, process management, and ERP services around real enterprise needs.",
    detailButton: "View Details",
    items: [
      {
        title: "Enterprise Software Development",
        href: "/hizmetler/kurumsal-yazilim-gelistirme",
        description:
          "We develop web, mobile, portal, and enterprise applications tailored to business needs.",
      },
      {
        title: "Enterprise AI Solutions",
        href: "/hizmetler/kurumsal-yapay-zeka-cozumleri",
        description:
          "We develop AI-enabled solutions around enterprise data, knowledge, and real business processes.",
      },
      {
        title: "Digital Maturity and Digital Transformation Analysis",
        href: "/hizmetler/dijital-olgunluk-ve-dijital-donusum-analizi",
        description:
          "We assess digital readiness and make improvement areas and transformation priorities visible.",
      },
      {
        title: "Process Maturity and Process Management",
        href: "/hizmetler/surec-olgunlugu-ve-surec-yonetimi",
        description:
          "We make processes visible, measurable, standardized, and digitally manageable.",
      },
      {
        title: "ERP Consulting and ERP Readiness",
        href: "/hizmetler/erp-danismanligi-ve-erp-hazirlik-hizmetleri",
        description:
          "We assess processes and the organization before ERP investments and prepare enterprises for ERP transformation.",
      },
    ],
  },

  approach: {
    badge: "Our Approach",
    title: "We understand the business need before the technology",
    description:
      "Successful technology projects require more than selecting the right software or AI tool. Processes, data, user needs, and existing systems need to be evaluated together.",
    items: [
      {
        title: "Understand the Business Need",
        text: "We clarify business objectives, user needs, and the problem that needs to be solved.",
      },
      {
        title: "Assess the Processes",
        text: "We evaluate current operations, responsibilities, bottlenecks, and process maturity.",
      },
      {
        title: "Prepare the Data",
        text: "We examine data structure, quality, accessibility, and readiness for the intended solution.",
      },
      {
        title: "Select the Right Technology",
        text: "We determine software, AI, integration, and automation options based on the actual business need.",
      },
      {
        title: "Implement the Solution",
        text: "We deliver enterprise software and technology solutions designed around the identified need.",
      },
      {
        title: "Measure the Outcomes",
        text: "We make the solution's impact on processes, efficiency, and management visibility measurable.",
      },
    ],
  },

  expertise: {
    badge: "Expertise Services",
    title: "We bring our process and ERP experience into transformation projects",
    description:
      "Our consulting services help organizations make processes visible, improve operations, prepare for digital transformation, and build a stronger foundation for ERP investments.",
    detailButton: "View Details",
    items: [
      {
        title: "Process Management Consulting",
        href: "/hizmetler/surec-yonetimi-danismanligi",
        description:
          "An enterprise process management approach that makes processes visible, measurable, and manageable.",
      },
      {
        title: "Process Analysis and Process Modeling",
        href: "/hizmetler/surec-analizi-ve-surec-modelleme",
        description:
          "An analysis-focused service that makes current operations visible, identifies bottlenecks, and models processes more clearly.",
      },
      {
        title: "Process Improvement and Workflow Management",
        href: "/hizmetler/surec-iyilestirme-ve-is-akisi-yonetimi",
        description:
          "An improvement approach that simplifies workflows, reduces repetitive work, and improves process efficiency.",
      },
      {
        title: "Digital Maturity and Digital Transformation Analysis",
        href: "/hizmetler/dijital-olgunluk-ve-dijital-donusum-analizi",
        description:
          "An assessment that evaluates digital readiness and makes transformation priorities and improvement areas visible.",
      },
      {
        title: "ERP Consulting and ERP Readiness Services",
        href: "/hizmetler/erp-danismanligi-ve-erp-hazirlik-hizmetleri",
        description:
          "Consulting that prepares processes and the organization before an ERP investment and supports a stronger ERP transition.",
      },
    ],
  },

  why: {
    badge: "Why Tage Yazılım?",
    title: "We address business processes and technology together",
    description:
      "We do not treat enterprise software and AI projects as technical development alone. We evaluate the business need, processes, data, existing systems, and transformation goals together.",
    items: [
      "More than 25 years of IT and ERP experience",
      "A software approach grounded in business processes",
      "An AI approach focused on real business use cases",
      "A structure that considers process maturity and digital transformation together",
    ],
  },

  bridge: {
    badge: "Our Product",
    title: "Make process maturity and transformation readiness visible with Sadi",
    description:
      "Sadi is an AI-powered platform that makes transformation readiness measurable from process inventory and maturity assessment to risk, efficiency, and improvement analysis.",
    button: "Explore Sadi",
    items: [
      {
        title: "Process Maturity",
        text: "Makes visible how defined, standardized, digital, and manageable processes are.",
      },
      {
        title: "Risk and Efficiency",
        text: "Supports the joint assessment of risks, efficiency impacts, and improvement areas.",
      },
      {
        title: "Transformation Roadmap",
        text: "Supports more systematic management of improvement priorities and transformation actions.",
      },
    ],
  },

  cta: {
    badge: "Let’s Evaluate Together",
    title: "Let’s clarify the right solution for your business need",
    description:
      "Let’s evaluate your needs in enterprise software, artificial intelligence, process maturity, digital transformation, or ERP.",
    button: "Contact Us",
  },
};

export default async function ServicesPage({ params }: PageProps) {
  const { lang } = await params;

  if (lang !== "tr" && lang !== "en") {
    notFound();
  }

  const copy = lang === "en" ? en : tr;
  const withLang = (path: string) => `/${lang}${path}`;

  const pillarIcons = [BriefcaseBusiness, Bot, Gauge, Workflow, Database];
  const approachIcons = [Sparkles, GitBranch, Database, Blocks, Workflow, BarChart3];
  const expertiseIcons = [Workflow, GitBranch, Route, Gauge, BriefcaseBusiness];

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <Container className="grid gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
          <div>
            <div className="inline-flex rounded-full border border-[#CBDCEB] bg-[#EFF5FB] px-4 py-2 text-sm font-medium text-[#133E87]">
              {copy.hero.badge}
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
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

              <a
                href="#hizmet-alanlari"
                className="rounded-xl border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-[#133E87] hover:text-[#133E87]"
              >
                {copy.hero.secondaryButton}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[30px] border border-[#CBDCEB] bg-gradient-to-br from-[#F7FAFD] via-white to-[#EFF5FB] p-6 shadow-[0_14px_45px_rgba(19,62,135,0.08)]">
              <div className="grid gap-4">
                {copy.pillars.items.map((item, index) => {
                  const Icon = pillarIcons[index];

                  return (
                    <div
                      key={item.title}
                      className="rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#CBDCEB] bg-[#F7FAFD]">
                          <Icon size={20} strokeWidth={2} color="#608BC1" />
                        </div>

                        <div>
                          <h2 className="text-lg font-semibold text-slate-900">
                            {item.title}
                          </h2>
                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Service Pillars */}
      <section id="hizmet-alanlari" className="bg-[#F8FBFF] py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#608BC1]">
              {copy.pillars.badge}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {copy.pillars.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              {copy.pillars.description}
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {copy.pillars.items.map((item, index) => {
              const Icon = pillarIcons[index];

              return (
                <Link
                  key={item.title}
                  href={withLang(item.href)}
                  className="group flex h-full flex-col rounded-[26px] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#CBDCEB] hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#CBDCEB] bg-[#F7FAFD]">
                    <Icon size={22} strokeWidth={2} color="#608BC1" />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 flex-1 text-base leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#133E87]">
                    {copy.pillars.detailButton}
                    <ArrowRight
                      size={16}
                      strokeWidth={2.25}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>


      {/* Sadi */}
      <section className="bg-[#133E87] py-20 text-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
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

            <div className="grid gap-4">
              {copy.bridge.items.map((item, index) => {
                const icons = [Gauge, BarChart3, Route];
                const Icon = icons[index];

                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 rounded-2xl border border-white/15 bg-white/10 p-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-white/80">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
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

            <div className="mt-8">
              <Link
                href={withLang("/iletisim")}
                className="inline-flex items-center gap-2 rounded-xl bg-[#133E87] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0f3270]"
              >
                {copy.cta.button}
                <ArrowRight size={16} strokeWidth={2.25} />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}