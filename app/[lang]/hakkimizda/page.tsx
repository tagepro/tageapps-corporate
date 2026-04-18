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
      "Tage Yazılım; süreç yönetimi, ERP danışmanlığı, ERP hazırlık, dijital olgunluk ve kurumsal yazılım alanlarında çalışan teknoloji ve danışmanlık şirketidir.",
    ogDescription:
      "Süreç yönetimi, ERP hazırlık, dijital olgunluk ve kurumsal yazılım odaklı yaklaşımımızı keşfedin.",
    twitterDescription:
      "Tage Yazılım; süreç, ERP ve kurumsal yazılım odağında çalışan teknoloji ve danışmanlık şirketidir.",
    keywords: [
      "tage yazılım",
      "hakkımızda",
      "süreç yönetimi danışmanlığı",
      "erp danışmanlığı",
      "erp hazırlık",
      "kurumsal yazılım",
      "dijital olgunluk",
      "sap erp",
      "ifs erp",
      "süreç analizi",
      "sadi",
    ],
  },

  breadcrumb: {
    home: "Anasayfa",
    current: "Hakkımızda",
  },

  hero: {
    badge: "Hakkımızda",
    title: "Süreç, ERP ve kurumsal yazılım odağında çalışan teknoloji şirketi",
    description1:
      "Tage Yazılım; süreç yönetimi, ERP danışmanlığı, ERP hazırlık, dijital olgunluk ve kurumsal yazılım alanlarında çalışan teknoloji ve danışmanlık şirketidir.",
    description2:
      "Amacımız yalnızca teknoloji sunmak değil; işletmelerin üretimden finansa, lojistikten insan kaynaklarına kadar uzanan süreçlerini daha verimli, daha şeffaf ve daha yönetilebilir hale getirmektir.",
    primaryButton: "Hizmetlerimizi İncele",
    secondaryButton: "Sadi’yi İncele",
    summaryTitle: "Kısa özet",
    summaryHeading: "Süreçten yazılıma uzanan yaklaşım",
    summaryText:
      "Süreçleri anlamadan yazılımın yeterli olmayacağını, yazılım ile desteklenmeyen danışmanlığın da kalıcı etki üretmekte zorlanacağını biliyoruz. Bu yüzden iki alanı birlikte ele alıyoruz.",
    summaryItems: [
      "Süreç yönetimi ve süreç analizi",
      "ERP danışmanlığı ve ERP hazırlık",
      "Dijital olgunluk ve dönüşüm hazırlığı",
      "Sadi ile ürünleşmiş yapı",
    ],
  },

  whyFounded: {
    title: "Tage Yazılım neden kuruldu?",
    description1:
      "Şirketlerde en sık gördüğümüz konu şuydu: süreçler konuşuluyor ama netleşmiyor, yazılım yatırımları yapılıyor ama kurumsal yapı tam hazır olmuyor, iyileştirme çalışmaları yapılıyor ama sürdürülebilir hale gelmiyor.",
    description2:
      "Tage Yazılım, bu boşluğu kapatmak için kuruldu. Süreçleri daha net, yönetimi daha görünür ve yazılımı daha anlamlı hale getiren yaklaşımı bir araya getirmek istedik.",
    founderTitle: "Kurucu yaklaşımımız",
    founderDescription1:
      "25 yılı aşkın süredir iş süreçleri ve ERP alanında çalışmış birikimle, işletmelerin süreçlerini sadece belgeleyen değil; anlayan, sadeleştiren, ölçen ve yönetime taşıyan bir yaklaşım geliştiriyoruz.",
    founderDescription2:
      "SAP ERP ve IFS ERP deneyimi, süreç yönetimi bakışı ve yazılım üretme yaklaşımı bu yapının temelini oluşturuyor.",
  },

  approach: {
    title: "Yazılım + danışmanlık + eğitim yaklaşımı",
    description:
      "Bizim yaklaşımımız tek boyutlu değil. Sadece danışmanlık vermek ya da sadece yazılım geliştirmek yerine, kurumların gerçekten ihtiyaç duyduğu üç alanı birlikte ele alıyoruz.",
    items: [
      {
        icon: "cpu",
        title: "Yazılım",
        description:
          "Kurumsal süreçlerin görünür, ölçülebilir ve sürdürülebilir hale gelmesini destekleyen ürün ve yazılım çözümleri geliştiririz.",
      },
      {
        icon: "briefcase",
        title: "Danışmanlık",
        description:
          "Süreç yönetimi, süreç analizi, ERP hazırlık, dijital dönüşüm ve yönetim görünürlüğü alanlarında kurumsal destek sunarız.",
      },
      {
        icon: "graduation",
        title: "Eğitim",
        description:
          "Şirket içi ekiplerin yeni yapıyı anlayabilmesi, sahiplenebilmesi ve sürdürebilmesi için bilgi aktarımı ve uygulama desteği veririz.",
      },
    ],
  },

  expertise: {
    title: "Uzmanlık alanlarımız",
    description:
      "Tage Yazılım’ın gücü, yalnızca bir yazılım şirketi olmasından değil; süreç, ERP ve yönetim bakışını aynı yerde birleştirmesinden gelir.",
    items: [
      {
        icon: "workflow",
        title: "Süreç yönetimi odağı",
        description:
          "İşletmelerin süreçlerini daha görünür, daha net ve daha yönetilebilir hale getirmeyi hedefleriz.",
      },
      {
        icon: "layers",
        title: "ERP hazırlık ve ERP danışmanlığı",
        description:
          "ERP öncesi süreç netliği, rol ve sorumluluk yapısı, departman geçişleri ve organizasyon hazırlığı üzerinde çalışırız.",
      },
      {
        icon: "building",
        title: "Kurumsal yapı ve yönetim görünürlüğü",
        description:
          "Karar almayı kolaylaştıran, öncelikleri netleştiren ve yönetim bakışını güçlendiren yapılar kurarız.",
      },
    ],
  },

  trust: {
    title: "Neden güveniliriz?",
    description1:
      "Çünkü yalnızca teori anlatmıyoruz. Şirketlerin gerçek işleyişini, ERP öncesi hazırlık ihtiyacını, süreç dağınıklığını ve yönetim görünürlüğü ihtiyacını sahadan biliyoruz.",
    description2:
      "Bu yüzden önerdiğimiz yapı hem kurumsal hem uygulanabilir hem de gerektiğinde yazılım ile desteklenebilir bir yapıdır.",
    cardTitle: "Güven oluşturan temel unsurlar",
    items: [
      "25 yılı aşkın süreç ve ERP deneyimi",
      "SAP ERP ve IFS ERP bilgi birikimi",
      "Üretim, finans, lojistik ve insan kaynakları süreçlerine hakimiyet",
      "Süreç yönetimi ile ERP hazırlığını birlikte ele alan yaklaşım",
      "Danışmanlık ile yazılım düşüncesini aynı zeminde birleştiren yapı",
      "Sadi ile ürünleşmiş ve sürdürülebilir çözüm yaklaşımı",
    ],
  },

  sadi: {
    title: "Sadi bu yapının neresinde durur?",
    description1:
      "Sadi, Tage Yazılım’ın süreç ve dijital olgunluk odağının ürünleşmiş halidir. Danışmanlıkla kurulan görünürlük ve netlik, Sadi ile daha ölçülebilir ve sürdürülebilir hale gelir.",
    description2:
      "Bu nedenle Sadi yalnızca bir yazılım ürünü değil; aynı zamanda bizim süreç, ERP hazırlık ve dijital dönüşüm yaklaşımımızın somut uzantısıdır.",
    cardBadge: "Ürün bağlantısı",
    cardTitle: "Sadi ile yaklaşımımızı ürünleştiriyoruz",
    cardDescription:
      "Süreç görünürlüğü, olgunluk değerlendirmesi, risk önceliği, aksiyon takibi ve yeniden ölçüm yaklaşımı Sadi ile daha somut hale gelir.",
    primaryButton: "Sadi ürün sayfasına git",
    secondaryButton: "İletişime Geç",
  },

  cta: {
    title:
      "Süreçlerinizi, ERP hazırlığınızı ve kurumsal yapınızı birlikte güçlendirelim",
    description:
      "Tage Yazılım’ın yaklaşımını daha yakından tanımak, hizmetlerimizi görmek veya Sadi ürününü incelemek için ilgili sayfalara geçebilirsiniz.",
    primaryButton: "Hizmetlerimizi İncele",
    secondaryButton: "İletişime Geçin",
  },

  schema: {
    orgDescription:
      "Tage Yazılım; süreç yönetimi, ERP danışmanlığı, ERP hazırlık, dijital olgunluk ve kurumsal yazılım alanlarında çalışan teknoloji ve danışmanlık şirketidir.",
  },
} as const;

const en = {
  meta: {
    title: "About | Tage Yazılım",
    description:
      "Tage Yazılım is a technology and consulting company working in process management, ERP consulting, ERP readiness, digital maturity, and enterprise software.",
    ogDescription:
      "Discover our approach focused on process management, ERP readiness, digital maturity, and enterprise software.",
    twitterDescription:
      "Tage Yazılım is a technology and consulting company focused on process, ERP, and enterprise software.",
    keywords: [
      "tage yazilim",
      "about",
      "process management consulting",
      "erp consulting",
      "erp readiness",
      "enterprise software",
      "digital maturity",
      "sap erp",
      "ifs erp",
      "process analysis",
      "sadi",
    ],
  },

  breadcrumb: {
    home: "Home",
    current: "About",
  },

  hero: {
    badge: "About",
    title:
      "A technology company focused on process, ERP, and enterprise software",
    description1:
      "Tage Yazılım is a technology and consulting company working in process management, ERP consulting, ERP readiness, digital maturity, and enterprise software.",
    description2:
      "Our goal is not only to provide technology, but to make business processes extending from production to finance, logistics, and human resources more efficient, transparent, and manageable.",
    primaryButton: "Explore Our Services",
    secondaryButton: "Explore Sadi",
    summaryTitle: "Quick summary",
    summaryHeading: "An approach extending from process to software",
    summaryText:
      "We know that software alone is not enough without understanding processes, and consulting unsupported by software struggles to create lasting impact. That is why we address both together.",
    summaryItems: [
      "Process management and process analysis",
      "ERP consulting and ERP readiness",
      "Digital maturity and transformation readiness",
      "A productized structure with Sadi",
    ],
  },

  whyFounded: {
    title: "Why was Tage Yazılım founded?",
    description1:
      "What we most often saw in companies was this: processes were being discussed but not clarified, software investments were being made but the corporate structure was not fully ready, and improvement efforts were being carried out but not made sustainable.",
    description2:
      "Tage Yazılım was founded to close this gap. We wanted to bring together an approach that makes processes clearer, management more visible, and software more meaningful.",
    founderTitle: "Our founding perspective",
    founderDescription1:
      "With more than 25 years of experience in business processes and ERP, we build an approach that does not merely document processes, but understands, simplifies, measures, and carries them to management.",
    founderDescription2:
      "SAP ERP and IFS ERP experience, a process management perspective, and a software-building mindset form the foundation of this structure.",
  },

  approach: {
    title: "Software + consulting + training approach",
    description:
      "Our approach is not one-dimensional. Instead of only providing consulting or only developing software, we address the three areas that organizations truly need together.",
    items: [
      {
        icon: "cpu",
        title: "Software",
        description:
          "We develop products and software solutions that support enterprise processes in becoming visible, measurable, and sustainable.",
      },
      {
        icon: "briefcase",
        title: "Consulting",
        description:
          "We provide enterprise support in process management, process analysis, ERP readiness, digital transformation, and management visibility.",
      },
      {
        icon: "graduation",
        title: "Training",
        description:
          "We provide knowledge transfer and practical support so internal teams can understand, adopt, and sustain the new structure.",
      },
    ],
  },

  expertise: {
    title: "Our areas of expertise",
    description:
      "The strength of Tage Yazılım comes not only from being a software company, but from bringing process, ERP, and management perspective together in one place.",
    items: [
      {
        icon: "workflow",
        title: "Process management focus",
        description:
          "We aim to make business processes more visible, clearer, and more manageable.",
      },
      {
        icon: "layers",
        title: "ERP readiness and ERP consulting",
        description:
          "We work on pre-ERP process clarity, role and responsibility structures, interdepartmental transitions, and organizational readiness.",
      },
      {
        icon: "building",
        title: "Corporate structure and management visibility",
        description:
          "We build structures that make decision-making easier, clarify priorities, and strengthen the management perspective.",
      },
    ],
  },

  trust: {
    title: "Why are we trustworthy?",
    description1:
      "Because we do not only talk theory. We know from the field the real way companies operate, their pre-ERP readiness needs, process fragmentation, and the need for management visibility.",
    description2:
      "That is why the structure we recommend is corporate, practical, and, when needed, supportable by software.",
    cardTitle: "Core elements that build trust",
    items: [
      "More than 25 years of process and ERP experience",
      "SAP ERP and IFS ERP know-how",
      "Strong understanding of production, finance, logistics, and HR processes",
      "An approach that addresses process management together with ERP readiness",
      "A structure combining consulting and software thinking on the same ground",
      "A productized and sustainable solution approach with Sadi",
    ],
  },

  sadi: {
    title: "Where does Sadi stand in this structure?",
    description1:
      "Sadi is the productized form of Tage Yazılım’s focus on process and digital maturity. The visibility and clarity built through consulting become more measurable and sustainable with Sadi.",
    description2:
      "For this reason, Sadi is not only a software product; it is also the concrete extension of our process, ERP readiness, and digital transformation approach.",
    cardBadge: "Product connection",
    cardTitle: "We productize our approach with Sadi",
    cardDescription:
      "Process visibility, maturity assessment, risk prioritization, action tracking, and re-measurement become more concrete with Sadi.",
    primaryButton: "Go to Sadi product page",
    secondaryButton: "Contact Us",
  },

  cta: {
    title:
      "Let’s strengthen your processes, ERP readiness, and corporate structure together",
    description:
      "You can visit the relevant pages to get to know Tage Yazılım’s approach more closely, explore our services, or review the Sadi product.",
    primaryButton: "Explore Our Services",
    secondaryButton: "Contact Us",
  },

  schema: {
    orgDescription:
      "Tage Yazılım is a technology and consulting company working in process management, ERP consulting, ERP readiness, digital maturity, and enterprise software.",
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
    keywords: copy.meta.keywords,
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