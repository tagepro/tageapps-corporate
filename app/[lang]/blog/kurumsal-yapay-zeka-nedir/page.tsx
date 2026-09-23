// app/[lang]/blog/kurumsal-yapay-zeka-nedir/page.tsx

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
const SLUG = "kurumsal-yapay-zeka-nedir";

const tr = {
  meta: {
    title: "Kurumsal Yapay Zekâ Nedir? Şirketler Yapay Zekâyı Nasıl Kullanabilir? | Tage Yazılım",
    description:
      "Kurumsal yapay zekâ nedir, şirketlerde hangi alanlarda kullanılabilir ve AI projesine nasıl başlanır? Veri, doküman, süreç, entegrasyon ve kullanım senaryolarını öğrenin.",
  },
  breadcrumb: {
    home: "Anasayfa",
    blog: "Blog",
    current: "Kurumsal Yapay Zekâ Nedir?",
  },
  article: {
    category: "Yapay Zekâ",
    readTime: "10 dk okuma",
    title: "Kurumsal Yapay Zekâ Nedir? Şirketler Yapay Zekâyı Nasıl Kullanabilir?",
    excerpt:
      "Kurumsal yapay zekâ, yapay zekâ teknolojilerinin şirketin gerçek iş ihtiyaçları, verisi, dokümanları, süreçleri ve mevcut sistemleriyle birlikte kullanılmasıdır. Değer, yalnızca bir AI modeli kullanmaktan değil; doğru kullanım alanını belirleyip teknolojiyi işin doğal bir parçası haline getirmekten doğar.",
  },
  quickAnswer: {
    title: "Kısa cevap",
    items: [
      "Kurumsal yapay zekâ, AI teknolojilerinin gerçek bir iş ihtiyacını çözmek için kullanılmasıdır.",
      "Doküman analizi, kurumsal bilgi arama, sınıflandırma, özetleme, öneri ve karar desteği gibi alanlarda kullanılabilir.",
      "Başarılı bir AI projesi yalnızca teknoloji seçimiyle değil; veri, süreç, kullanıcı ve mevcut sistem hazırlığıyla birlikte ele alınmalıdır.",
      "En sağlıklı başlangıç, büyük bir dönüşüm projesi yerine ölçülebilir bir kullanım alanını seçip kontrollü biçimde ilerlemektir.",
    ],
  },
  sections: [
    {
      title: "Kurumsal yapay zekâ nedir?",
      paragraphs: [
        "Kurumsal yapay zekâ, yapay zekâ teknolojilerinin bir şirketin operasyonlarını, çalışanlarını, müşterilerini veya karar süreçlerini desteklemek amacıyla kullanılmasıdır. Burada amaç yalnızca bir yapay zekâ aracı kullanmak değil; teknolojiyi kurumun gerçek verisi, bilgisi ve iş süreçleriyle ilişkilendirmektir.",
        "Bu nedenle kurumsal yapay zekâ; bağımsız bir sohbet ekranından çok daha geniş bir kavramdır. Mevcut iş uygulamalarına eklenen bir özellik, dokümanları analiz eden bir yardımcı, kurumsal bilgiye erişimi kolaylaştıran bir asistan veya operasyonel kararları destekleyen bir yapı şeklinde uygulanabilir.",
      ],
    },
    {
      title: "Şirketler yapay zekâyı hangi alanlarda kullanabilir?",
      paragraphs: [
        "Yapay zekânın kullanım alanı sektör ve iş ihtiyacına göre değişir. En doğru kullanım alanları genellikle yoğun bilgi, doküman, veri veya tekrarlayan değerlendirme işlerinin bulunduğu noktalarda ortaya çıkar.",
      ],
      bullets: [
        "Doküman, prosedür ve sözleşme analizi",
        "Kurumsal bilgi arama ve soru-cevap",
        "Rapor ve içerik özetleme",
        "Veri ve kayıt sınıflandırma",
        "Operasyonel karar desteği",
        "Öneri ve değerlendirme sistemleri",
        "Süreç verilerinin analizi",
        "Bilgi ve kayıt kontrolü",
        "Mevcut uygulamalara AI yetenekleri ekleme",
        "Tekrarlayan bilgi işlerinin otomasyonu",
      ],
    },
    {
      title: "Kurumsal yapay zekâ ile genel amaçlı AI araçları arasındaki fark nedir?",
      paragraphs: [
        "Genel amaçlı yapay zekâ araçları çok farklı kullanıcıların ortak ihtiyaçlarına yönelik geniş yetenekler sunar. Kurumsal kullanımda ise cevapların ve işlemlerin şirketin kendi bağlamı, yetkileri, verisi, dokümanları ve iş kurallarıyla uyumlu olması gerekir.",
        "Bu nedenle kurumsal AI projelerinde yalnızca modelin ne yapabildiği değil; hangi bilgiye erişeceği, hangi kullanıcıya ne göstereceği, mevcut sistemlerle nasıl çalışacağı ve çıktının iş sürecinde nasıl kullanılacağı da tasarlanmalıdır.",
      ],
    },
    {
      title: "Yapay zekâ projesine nereden başlanmalıdır?",
      paragraphs: [
        "İlk adım teknoloji veya model seçmek değil, çözülecek iş problemini tanımlamaktır. Kurum için değer üretmeyen bir kullanım senaryosu, teknik olarak başarılı olsa bile sürdürülebilir bir AI çözümüne dönüşmeyebilir.",
      ],
      bullets: [
        "Çözülecek iş problemi netleştirilir",
        "Kullanıcılar ve beklenen fayda belirlenir",
        "Gerekli veri ve doküman kaynakları çıkarılır",
        "Mevcut süreç ve sistemlerle ilişki değerlendirilir",
        "Güvenlik, erişim ve yetki ihtiyaçları belirlenir",
        "Başarı kriterleri ve ölçülebilir çıktı tanımlanır",
        "Sınırlı kapsamlı bir ilk kullanım alanı seçilir",
        "Sonuçlara göre kapsam kontrollü biçimde genişletilir",
      ],
    },
    {
      title: "Veri ve doküman hazırlığı neden önemlidir?",
      paragraphs: [
        "Yapay zekâ çözümünün kalitesi yalnızca kullanılan teknolojiye bağlı değildir. Eksik, güncel olmayan, tutarsız veya erişim kuralları belirsiz veri ve dokümanlar sonuçların güvenilirliğini doğrudan etkileyebilir.",
        "Bu nedenle proje öncesinde hangi kaynakların kullanılacağı, bilginin güncelliği, veri sahipliği, erişim yetkileri ve gerekli kalite kontrolleri değerlendirilmelidir. Kurumsal AI hazırlığının önemli bir bölümü bu bilgi altyapısının anlaşılmasıdır.",
      ],
    },
    {
      title: "Yapay zekâ mevcut kurumsal sistemlerle nasıl çalışır?",
      paragraphs: [
        "Kurumsal yapay zekâ çözümleri çoğu zaman ERP, CRM, doküman yönetimi, portal veya kuruma özel uygulamalar gibi mevcut sistemlerden bağımsız düşünülmemelidir. Gerçek değer, ihtiyaç olduğunda bu sistemlerdeki bilgi ve süreçlerle kontrollü biçimde birlikte çalışabilmesinden doğar.",
        "AI çözümü mevcut uygulamaya bir özellik olarak eklenebilir, ayrı bir kurumsal asistan olarak konumlandırılabilir veya belirli bir süreç adımında analiz ve karar desteği sağlayabilir. Doğru mimari, kullanım senaryosuna ve sistem yapısına göre belirlenmelidir.",
      ],
    },
    {
      title: "Yapay zekâ süreç otomasyonunda nasıl kullanılabilir?",
      paragraphs: [
        "Yapay zekâ, özellikle yorumlama veya bilgi işleme gerektiren adımlarda klasik otomasyonu tamamlayabilir. Bir dokümandan bilgi çıkarma, gelen kaydı sınıflandırma, içeriği özetleme veya kullanıcıya sonraki adım için öneri sunma buna örnektir.",
        "Ancak her süreç adımını AI ile otomatikleştirmek doğru değildir. Kritik kararlar, onaylar ve kontrol noktaları için insan sorumluluğu, iş kuralları ve gerekli doğrulamalar açık biçimde tasarlanmalıdır.",
      ],
    },
    {
      title: "Kurumsal yapay zekâ projesinin başarısı nasıl değerlendirilir?",
      paragraphs: [
        "AI projesinin başarısı yalnızca teknik doğrulukla ölçülmemelidir. Çözümün gerçek kullanımda zaman kazandırması, bilgiye erişimi kolaylaştırması, tekrar eden işleri azaltması veya karar kalitesini desteklemesi gibi iş sonuçları da değerlendirilmelidir.",
      ],
      bullets: [
        "Kullanıcı tarafından benimsenme",
        "İşlem veya araştırma süresindeki değişim",
        "Tekrarlayan iş yükündeki azalma",
        "Bilgiye erişim hızındaki iyileşme",
        "Çıktıların doğruluk ve kullanılabilirlik seviyesi",
        "Operasyonel süreçte sağlanan ölçülebilir fayda",
      ],
    },
    {
      title: "Tage Yazılım kurumsal yapay zekâya nasıl yaklaşıyor?",
      paragraphs: [
        "Tage Yazılım yapay zekâ projesine modelden değil, iş ihtiyacından başlar. Önce çözülmek istenen problemi, kullanıcıları, süreci, veriyi, dokümanları ve mevcut sistemleri birlikte değerlendirir; ardından uygun çözüm yaklaşımını oluşturur.",
        "Amaç yapay zekâyı bağımsız bir teknoloji gösterisi olarak konumlandırmak değil, kurumun gerçek işleyişinde karşılığı olan bir yeteneğe dönüştürmektir. Gerektiğinde kurumsal yazılım, entegrasyon, süreç ve ERP deneyimi aynı çözüm içinde birlikte ele alınır.",
      ],
    },
    {
      title: "Sonuç",
      paragraphs: [
        "Kurumsal yapay zekâ, şirketlerin bilgiye erişimden doküman analizine, karar desteğinden süreç otomasyonuna kadar birçok alanda yeni yetenekler kazanmasını sağlayabilir. Ancak başarılı uygulama, doğru kullanım alanının seçilmesine ve kurumsal hazırlığın birlikte değerlendirilmesine bağlıdır.",
        "Bu nedenle en sağlıklı yaklaşım, önce gerçek iş ihtiyacını tanımlamak, veri ve sistem hazırlığını görmek, ölçülebilir bir kullanım alanıyla başlamak ve elde edilen sonuçlara göre çözümü kontrollü biçimde genişletmektir.",
      ],
    },
  ],
  relatedLinks: {
    title: "İlgili sayfalar",
    items: [
      { title: "Kurumsal Yapay Zekâ Çözümleri", href: "/hizmetler/kurumsal-yapay-zeka-cozumleri" },
      { title: "Kurumsal Yazılım Geliştirme", href: "/hizmetler/kurumsal-yazilim-gelistirme" },
      { title: "Dijital Olgunluk ve Dijital Dönüşüm Analizi", href: "/hizmetler/dijital-olgunluk-ve-dijital-donusum-analizi" },
      { title: "Süreç Olgunluğu ve Süreç Yönetimi", href: "/hizmetler/surec-olgunlugu-ve-surec-yonetimi" },
    ],
  },
  faq: {
    title: "Sık sorulan sorular",
    items: [
      {
        question: "Kurumsal yapay zekâ nedir?",
        answer:
          "Kurumsal yapay zekâ, AI teknolojilerinin şirketin gerçek iş ihtiyaçları, verisi, dokümanları, süreçleri ve mevcut sistemleriyle birlikte kullanılmasıdır.",
      },
      {
        question: "Şirketler yapay zekâyı nerelerde kullanabilir?",
        answer:
          "Doküman analizi, kurumsal bilgi arama, özetleme, sınıflandırma, öneri, karar desteği, süreç analizi ve tekrarlayan bilgi işlerinin otomasyonu yaygın kullanım alanları arasındadır.",
      },
      {
        question: "Yapay zekâ projesine başlamak için çok büyük veri gerekir mi?",
        answer:
          "Her kullanım alanı için çok büyük veri gerekmez. İhtiyaç duyulan veri miktarı ve türü kullanım senaryosuna bağlıdır. Daha önemli olan, gerekli bilginin uygun kalitede, erişilebilir ve doğru şekilde yönetiliyor olmasıdır.",
      },
      {
        question: "Yapay zekâ ERP ve diğer sistemlerle entegre olabilir mi?",
        answer:
          "Evet. Uygun mimari ve yetkilendirme ile AI çözümleri ERP, CRM, doküman yönetimi, portallar ve kuruma özel uygulamalarla birlikte çalışabilir.",
      },
      {
        question: "AI projesinin başarısı nasıl ölçülür?",
        answer:
          "Teknik doğruluğun yanında kullanıcı benimsemesi, zaman kazancı, iş yükündeki azalma, bilgiye erişim hızı ve operasyonel fayda gibi ölçülebilir iş sonuçları değerlendirilmelidir.",
      },
    ],
  },
  cta: {
    title: "Kurumunuzdaki yapay zekâ fırsatlarını birlikte değerlendirelim",
    description:
      "İş ihtiyaçlarınızı, verinizi, dokümanlarınızı, süreçlerinizi ve mevcut sistemlerinizi birlikte değerlendirerek uygulanabilir AI kullanım alanlarını netleştirelim.",
    primaryButton: "İletişime Geçin",
    secondaryButton: "Yapay Zekâ Hizmetini İnceleyin",
  },
};

const en = {
  meta: {
    title: "What Is Enterprise AI? How Can Companies Use Artificial Intelligence? | Tage Yazılım",
    description:
      "What is enterprise AI, where can companies use it, and how should an AI project begin? Learn about data, documents, processes, integration, and practical AI use cases.",
  },
  breadcrumb: {
    home: "Home",
    blog: "Blog",
    current: "What Is Enterprise AI?",
  },
  article: {
    category: "Artificial Intelligence",
    readTime: "10 min read",
    title: "What Is Enterprise AI? How Can Companies Use Artificial Intelligence?",
    excerpt:
      "Enterprise AI is the use of artificial intelligence together with a company's real business needs, data, documents, processes, and existing systems. Value comes not simply from using an AI model, but from identifying the right use case and making the technology a natural part of the business.",
  },
  quickAnswer: {
    title: "Short answer",
    items: [
      "Enterprise AI means applying AI technologies to solve a real business need.",
      "It can support document analysis, enterprise knowledge search, classification, summarization, recommendations, and decision support.",
      "A successful AI project requires more than technology selection; data, processes, users, and existing-system readiness should be considered together.",
      "A practical starting point is to select a measurable use case, validate it in a controlled scope, and expand based on results.",
    ],
  },
  sections: [
    {
      title: "What is enterprise AI?",
      paragraphs: [
        "Enterprise AI is the use of artificial intelligence technologies to support a company's operations, employees, customers, or decision-making processes. The goal is not simply to use an AI tool, but to connect the technology with the organization's real data, knowledge, and business processes.",
        "Enterprise AI is therefore broader than a standalone chat interface. It may be implemented as a capability within an existing business application, an assistant that analyzes documents, a tool that improves access to enterprise knowledge, or a structure that supports operational decisions.",
      ],
    },
    {
      title: "Where can companies use artificial intelligence?",
      paragraphs: [
        "AI use cases vary by industry and business need. Strong opportunities often appear where organizations handle large amounts of information, documents, data, or repetitive evaluation work.",
      ],
      bullets: [
        "Document, procedure, and contract analysis",
        "Enterprise knowledge search and question answering",
        "Report and content summarization",
        "Data and record classification",
        "Operational decision support",
        "Recommendation and evaluation systems",
        "Process data analysis",
        "Information and record controls",
        "Adding AI capabilities to existing applications",
        "Automation of repetitive knowledge work",
      ],
    },
    {
      title: "How is enterprise AI different from general-purpose AI tools?",
      paragraphs: [
        "General-purpose AI tools provide broad capabilities for many different users. In enterprise environments, however, responses and actions often need to align with the company's own context, permissions, data, documents, and business rules.",
        "An enterprise AI project must therefore consider not only what the model can do, but also which information it may access, what each user is allowed to see, how it works with existing systems, and how its output will be used in the business process.",
      ],
    },
    {
      title: "Where should an AI project start?",
      paragraphs: [
        "The first step is not choosing a technology or model, but defining the business problem to be solved. A use case that does not create business value may fail to become a sustainable AI solution even if it works technically.",
      ],
      bullets: [
        "Clarify the business problem",
        "Identify users and expected value",
        "Identify required data and document sources",
        "Evaluate the relationship with current processes and systems",
        "Define security, access, and authorization requirements",
        "Define success criteria and measurable outcomes",
        "Select a limited first use case",
        "Expand the scope gradually based on results",
      ],
    },
    {
      title: "Why do data and document readiness matter?",
      paragraphs: [
        "The quality of an AI solution does not depend only on the technology being used. Incomplete, outdated, inconsistent, or poorly governed data and documents can directly affect the reliability of results.",
        "Before implementation, organizations should understand which sources will be used, how current the information is, who owns it, who may access it, and what quality controls are required. Understanding this information foundation is an important part of enterprise AI readiness.",
      ],
    },
    {
      title: "How does AI work with existing enterprise systems?",
      paragraphs: [
        "Enterprise AI solutions should often be considered together with existing systems such as ERP, CRM, document management, portals, and custom applications. Practical value increases when AI can work with the relevant information and processes in those systems in a controlled manner.",
        "AI can be embedded as a capability within an existing application, positioned as a separate enterprise assistant, or used to provide analysis and decision support at a specific process step. The right architecture depends on the use case and system landscape.",
      ],
    },
    {
      title: "How can AI support process automation?",
      paragraphs: [
        "AI can complement traditional automation in steps that require interpretation or information processing. Examples include extracting information from a document, classifying an incoming record, summarizing content, or suggesting a next action to a user.",
        "However, not every process step should be automated with AI. Human accountability, business rules, approvals, and appropriate validation should remain clearly designed for critical decisions and control points.",
      ],
    },
    {
      title: "How should enterprise AI success be measured?",
      paragraphs: [
        "AI success should not be measured only by technical accuracy. Business outcomes such as time saved, easier access to information, reduced repetitive work, or improved decision support should also be evaluated in real use.",
      ],
      bullets: [
        "User adoption",
        "Change in processing or research time",
        "Reduction in repetitive workload",
        "Improvement in access to information",
        "Accuracy and usability of outputs",
        "Measurable operational value",
      ],
    },
    {
      title: "How does Tage Yazılım approach enterprise AI?",
      paragraphs: [
        "Tage Yazılım starts an AI project with the business need, not the model. We evaluate the problem, users, process, data, documents, and existing systems together before defining the appropriate solution approach.",
        "The goal is not to position AI as a standalone technology showcase, but to turn it into a capability with a clear role in real operations. When needed, enterprise software, integration, process, and ERP experience are considered together within the same solution.",
      ],
    },
    {
      title: "Conclusion",
      paragraphs: [
        "Enterprise AI can help companies build new capabilities across knowledge access, document analysis, decision support, and process automation. Successful implementation, however, depends on selecting the right use case and evaluating organizational readiness together with the technology.",
        "A practical approach is to define the real business need first, understand data and system readiness, begin with a measurable use case, and expand the solution gradually based on demonstrated results.",
      ],
    },
  ],
  relatedLinks: {
    title: "Related pages",
    items: [
      { title: "Enterprise Artificial Intelligence Solutions", href: "/hizmetler/kurumsal-yapay-zeka-cozumleri" },
      { title: "Enterprise Software Development", href: "/hizmetler/kurumsal-yazilim-gelistirme" },
      { title: "Digital Maturity and Digital Transformation Analysis", href: "/hizmetler/dijital-olgunluk-ve-dijital-donusum-analizi" },
      { title: "Process Maturity and Process Management", href: "/hizmetler/surec-olgunlugu-ve-surec-yonetimi" },
    ],
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "What is enterprise AI?",
        answer:
          "Enterprise AI is the use of artificial intelligence technologies together with a company's real business needs, data, documents, processes, and existing systems.",
      },
      {
        question: "Where can companies use AI?",
        answer:
          "Common use cases include document analysis, enterprise knowledge search, summarization, classification, recommendations, decision support, process analysis, and automation of repetitive knowledge work.",
      },
      {
        question: "Do companies need very large datasets to start an AI project?",
        answer:
          "Not for every use case. The amount and type of data required depend on the scenario. More important is whether the necessary information is suitable, accessible, appropriately governed, and of sufficient quality.",
      },
      {
        question: "Can AI integrate with ERP and other enterprise systems?",
        answer:
          "Yes. With appropriate architecture and authorization, AI solutions can work with ERP, CRM, document management, portals, and custom applications.",
      },
      {
        question: "How is AI project success measured?",
        answer:
          "In addition to technical accuracy, measurable business outcomes such as user adoption, time savings, reduced workload, faster access to information, and operational value should be evaluated.",
      },
    ],
  },
  cta: {
    title: "Let’s evaluate AI opportunities in your organization",
    description:
      "Let’s evaluate your business needs, data, documents, processes, and existing systems to identify practical AI use cases.",
    primaryButton: "Contact Us",
    secondaryButton: "Explore Artificial Intelligence Service",
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
                      href={withLang("/hizmetler/kurumsal-yapay-zeka-cozumleri")}
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