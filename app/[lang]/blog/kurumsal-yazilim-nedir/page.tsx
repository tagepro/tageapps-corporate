// app/[lang]/blog/kurumsal-yazilim-nedir/page.tsx

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
const SLUG = "kurumsal-yazilim-nedir";

const tr = {
  meta: {
    title: "Kurumsal Yazılım Nedir? Şirketler Neden Özel Yazılıma İhtiyaç Duyar? | Tage Yazılım",
    description: "Kurumsal yazılım nedir, hazır yazılımdan farkı nedir ve şirketler ne zaman özel yazılıma ihtiyaç duyar? Web, mobil, portal ve ERP entegrasyonu yaklaşımını öğrenin.",
  },
  breadcrumb: { home: "Anasayfa", blog: "Blog", current: "Kurumsal Yazılım Nedir?" },
  article: {
    category: "Kurumsal Yazılım", readTime: "10 dk okuma",
    title: "Kurumsal Yazılım Nedir? Şirketler Neden Özel Yazılıma İhtiyaç Duyar?",
    excerpt: "Kurumsal yazılım; bir şirketin gerçek iş ihtiyaçlarına, kullanıcılarına, süreçlerine, verisine ve mevcut sistemlerine göre geliştirilen iş uygulamalarını ifade eder. Her ihtiyaç için özel yazılım gerekli değildir; ancak standart çözümlerin karşılayamadığı iş akışları, entegrasyonlar ve kurumsal gereksinimler ortaya çıktığında kuruma özel yazılım önemli bir seçenek haline gelir.",
  },
  quickAnswer: {
    title: "Kısa cevap",
    items: [
      "Kurumsal yazılım, şirketin iş ihtiyaçlarını ve çalışma biçimini destekleyen yazılım çözümleridir.",
      "Hazır ürünler standart ihtiyaçlarda doğru tercih olabilir; özel yazılım ise kuruma özgü gereksinimlerde anlam kazanır.",
      "Kurumsal yazılım web uygulaması, mobil uygulama, portal, iş uygulaması veya entegrasyon çözümü şeklinde geliştirilebilir.",
      "Başarılı bir yazılım projesi teknoloji seçiminden önce iş ihtiyacının, kullanıcıların, süreçlerin, verinin ve mevcut sistemlerin anlaşılmasıyla başlar.",
    ],
  },
  sections: [
    { title: "Kurumsal yazılım nedir?", paragraphs: [
      "Kurumsal yazılım, şirketlerin operasyonlarını, çalışanlarını, müşterilerini, iş ortaklarını veya yönetim süreçlerini desteklemek amacıyla kullanılan yazılım çözümleridir. Bu çözümler bir web uygulaması, mobil uygulama, müşteri veya bayi portalı, kurum içi iş uygulaması, yönetim ekranı ya da mevcut sistemlerle entegre çalışan özel bir uygulama olabilir.",
      "Kurumsal yazılımın temel amacı yalnızca bir işlemi dijital ortama taşımak değildir. Asıl amaç; iş ihtiyacını daha kontrollü, izlenebilir, verimli ve sürdürülebilir biçimde destekleyen bir yapı oluşturmaktır.",
    ]},
    { title: "Kurumsal yazılım ile hazır yazılım arasındaki fark nedir?", paragraphs: [
      "Hazır yazılımlar belirli bir ihtiyacı çok sayıda şirket için ortak özelliklerle karşılamak üzere geliştirilir. Muhasebe, ofis uygulamaları, insan kaynakları veya standart iş takibi gibi alanlarda hazır çözümler çoğu zaman hızlı ve ekonomik bir başlangıç sağlayabilir.",
      "Kuruma özel yazılım ise şirketin kendi iş yapısına göre tasarlanır. Standart bir ürünün karşılayamadığı süreçler, farklı kullanıcı rolleri, özel veri yapıları, entegrasyon ihtiyaçları veya şirkete özgü operasyonel kurallar varsa özel geliştirme daha anlamlı hale gelebilir.",
      "Bu nedenle doğru soru “hazır yazılım mı, özel yazılım mı daha iyidir?” değildir. Doğru soru, iş ihtiyacının hangi çözüm modeliyle daha sağlıklı karşılanacağıdır.",
    ]},
    { title: "Şirketler ne zaman kuruma özel yazılıma ihtiyaç duyar?", paragraphs: ["Her şirketin özel yazılım geliştirmesi gerekmez. İhtiyaç, mevcut sistemlerin işin gerektirdiği çalışma biçimini yeterince destekleyemediği noktada ortaya çıkar."], bullets: [
      "Standart yazılım şirketin kritik iş akışlarını karşılamıyorsa","Aynı işlem birden fazla sistem veya Excel dosyası arasında yürütülüyorsa","Manuel veri girişi ve tekrar eden işler operasyon yükü oluşturuyorsa","Müşteri, bayi, tedarikçi veya çalışanlar için özel bir portal gerekiyorsa","ERP veya diğer kurumsal sistemlerle özel entegrasyon ihtiyacı varsa","Saha ekipleri için mobil uygulama gerekiyorsa","Yönetimin ihtiyacı olan operasyonel görünürlük mevcut sistemlerde sağlanamıyorsa","Şirkete özgü onay, kontrol veya iş akışlarının dijitalleştirilmesi gerekiyorsa",
    ]},
    { title: "Kurumsal yazılım hangi tür çözümleri kapsar?", paragraphs: ["Kurumsal yazılım tek bir uygulama türünü ifade etmez. Çözüm, iş ihtiyacına göre farklı biçimlerde tasarlanabilir. Burada önemli olan teknoloji türünden önce kullanım senaryosunun doğru tanımlanmasıdır."], bullets: [
      "Kurumsal web uygulamaları","Mobil saha ve operasyon uygulamaları","Müşteri portalları","Bayi ve iş ortağı portalları","Kurum içi iş uygulamaları","Operasyon yönetim ekranları","Yönetim dashboardları","Onay ve iş akışı uygulamaları","Veri toplama ve raporlama uygulamaları","ERP ve diğer kurumsal sistemlerle entegre uygulamalar",
    ]},
    { title: "Kuruma özel yazılımın avantajları nelerdir?", paragraphs: [
      "Özel yazılımın en önemli avantajı, şirketin gerçek çalışma biçimine göre tasarlanabilmesidir. Kullanıcıların ihtiyaçları, süreç adımları, yetkiler, veri yapısı ve diğer sistemlerle ilişkiler çözümün tasarımında birlikte ele alınabilir.",
      "Bununla birlikte özel geliştirme her zaman daha düşük maliyetli veya daha hızlı değildir. Analiz, geliştirme, test, bakım ve sürdürülebilirlik sorumluluğu gerektirir. Bu nedenle özel yazılım kararı somut bir iş ihtiyacına ve beklenen değere dayanmalıdır.",
    ], bullets: ["Kuruma özgü iş akışlarını destekleme","Gereksiz özellikler yerine gerçek ihtiyaca odaklanma","Mevcut sistemlerle entegrasyon kurabilme","Kullanıcı rollerini ve yetkileri ihtiyaca göre tasarlama","Operasyonel veriyi tek yapıda görünür hale getirme","İhtiyaç geliştikçe çözümü genişletebilme"]},
    { title: "Kurumsal yazılım ile ERP arasındaki ilişki nedir?", paragraphs: [
      "ERP sistemleri finans, satın alma, satış, stok, üretim ve insan kaynakları gibi temel kurumsal süreçlerin ortak bir yapı içinde yönetilmesini sağlar. Ancak her şirketin tüm operasyonel ihtiyacını tek başına ERP içinde çözmek her zaman mümkün veya doğru olmayabilir.",
      "Kuruma özel uygulamalar ERP'nin yerine geçmek zorunda değildir. Aksine ERP'nin kapsamadığı özel kullanıcı deneyimlerini, saha süreçlerini, portalları, veri toplama ihtiyaçlarını veya operasyonel iş akışlarını destekleyebilir ve ERP ile entegre çalışabilir.",
      "Bu nedenle yazılım mimarisi oluşturulurken hangi fonksiyonun ERP içinde, hangisinin özel uygulamada ve hangi verinin sistemler arasında paylaşılacağı açık biçimde tasarlanmalıdır.",
    ]},
    { title: "Kurumsal yazılım projesine nasıl başlanmalıdır?", paragraphs: ["Başarılı bir kurumsal yazılım projesi doğrudan ekran tasarımı veya teknoloji seçimiyle başlamamalıdır. Önce çözülecek iş problemi ve kullanıcı ihtiyacı netleştirilmelidir."], bullets: [
      "İş ihtiyacı ve beklenen sonuç tanımlanır","Kullanıcılar ve kullanıcı rolleri belirlenir","Mevcut süreç ve sorun noktaları anlaşılır","Gerekli veri ve veri kaynakları belirlenir","ERP ve diğer mevcut sistemlerle ilişkiler çıkarılır","İlk kapsam ve öncelikler netleştirilir","Uygulama, entegrasyon ve güvenlik ihtiyaçları tasarlanır","Geliştirme, test ve devreye alma adımları planlanır",
    ]},
    { title: "Yapay zekâ kurumsal yazılımlara nasıl dahil edilebilir?", paragraphs: [
      "Yapay zekâ, ayrı bir teknoloji projesi olmak zorunda değildir. Doğru kullanım alanı bulunduğunda mevcut veya yeni geliştirilen kurumsal uygulamalara destekleyici bir yetenek olarak eklenebilir.",
      "Doküman analizi, kurumsal bilgi arama, sınıflandırma, özetleme, öneri üretme veya karar desteği gibi kullanım alanları iş uygulamalarının bir parçası haline getirilebilir. Burada önemli olan yapay zekâyı yalnızca teknoloji olduğu için kullanmak değil, gerçek bir iş ihtiyacını çözmek için konumlandırmaktır.",
    ]},
    { title: "Tage Yazılım kurumsal yazılım geliştirmeye nasıl yaklaşıyor?", paragraphs: [
      "Tage Yazılım kurumsal yazılım projelerine yalnızca teknik geliştirme işi olarak yaklaşmaz. Önce iş ihtiyacını, kullanıcıları, süreçleri, veriyi ve mevcut sistemleri birlikte değerlendirir; ardından ihtiyaca uygun çözüm mimarisini oluşturur.",
      "Bu yaklaşımın temelinde yazılım geliştirme ile iş süreci ve ERP deneyimini aynı yapıda bir araya getirmek vardır. Amaç yalnızca çalışan bir uygulama geliştirmek değil, kurumun gerçek operasyonunda karşılığı olan ve gerektiğinde entegrasyon veya yapay zekâ yetenekleriyle genişleyebilen sürdürülebilir çözümler oluşturmaktır.",
    ]},
    { title: "Sonuç", paragraphs: [
      "Kurumsal yazılım, şirketlerin standart çözümlerle karşılanamayan iş ihtiyaçlarını dijital olarak desteklemek için önemli bir araçtır. Ancak başarılı sonuç, özel yazılım geliştirmekten önce doğru ihtiyacın belirlenmesine bağlıdır.",
      "İş süreci, kullanıcı, veri ve mevcut sistemler birlikte değerlendirildiğinde; web, mobil, portal, entegrasyon veya özel iş uygulaması gibi doğru çözüm modeli daha sağlıklı biçimde belirlenebilir.",
    ]},
  ],
  relatedLinks: { title: "İlgili sayfalar", items: [
    { title: "Kurumsal Yazılım Geliştirme", href: "/hizmetler/kurumsal-yazilim-gelistirme" },
    { title: "Kurumsal Yapay Zekâ Çözümleri", href: "/hizmetler/kurumsal-yapay-zeka-cozumleri" },
    { title: "Süreç Olgunluğu ve Süreç Yönetimi", href: "/hizmetler/surec-olgunlugu-ve-surec-yonetimi" },
    { title: "ERP Danışmanlığı ve ERP Hazırlık", href: "/hizmetler/erp-danismanligi-ve-erp-hazirlik-hizmetleri" },
  ]},
  faq: { title: "Sık sorulan sorular", items: [
    { question: "Kurumsal yazılım nedir?", answer: "Kurumsal yazılım, şirketlerin iş süreçlerini, kullanıcılarını, verisini ve operasyonlarını desteklemek amacıyla kullanılan web, mobil, portal, entegrasyon veya özel iş uygulamalarını kapsayan yazılım çözümleridir." },
    { question: "Her şirketin özel yazılıma ihtiyacı var mıdır?", answer: "Hayır. Standart ihtiyaçlar hazır ürünlerle karşılanabiliyorsa özel geliştirme gerekli olmayabilir. Özel yazılım, kuruma özgü süreç, entegrasyon, kullanıcı deneyimi veya operasyonel gereksinimler olduğunda daha anlamlı hale gelir." },
    { question: "Kuruma özel yazılım ERP'nin yerine geçer mi?", answer: "Her zaman değil. Özel uygulamalar çoğu durumda ERP'nin kapsamadığı ihtiyaçları tamamlar ve ERP ile entegre çalışır. Hangi fonksiyonun hangi sistemde yönetileceği iş ve sistem mimarisine göre belirlenmelidir." },
    { question: "Kurumsal yazılım projesine nereden başlanmalıdır?", answer: "İlk adım teknoloji seçmek değil; iş ihtiyacını, kullanıcıları, mevcut süreci, veriyi ve mevcut sistemleri anlamaktır. Teknik çözüm ve geliştirme kapsamı bu analizden sonra belirlenmelidir." },
    { question: "Kurumsal yazılıma yapay zekâ eklenebilir mi?", answer: "Evet. Doküman analizi, bilgi arama, sınıflandırma, özetleme, öneri ve karar desteği gibi yapay zekâ yetenekleri uygun kullanım senaryolarında kurumsal uygulamaların parçası haline getirilebilir." },
  ]},
  cta: { title: "Kurumsal yazılım ihtiyacınızı birlikte değerlendirelim", description: "İş ihtiyacınızı, kullanıcıları, süreçleri, mevcut sistemleri ve entegrasyon gereksinimlerini birlikte değerlendirerek uygun çözüm yaklaşımını netleştirelim.", primaryButton: "İletişime Geçin", secondaryButton: "Kurumsal Yazılım Hizmetini İnceleyin" },
};

const en = {
  meta: {
    title: "What Is Enterprise Software? Why Do Companies Need Custom Software? | Tage Yazılım",
    description: "What is enterprise software, how does it differ from off-the-shelf software, and when do companies need custom solutions? Learn about web, mobile, portals, ERP integration, and custom software.",
  },
  breadcrumb: { home: "Home", blog: "Blog", current: "What Is Enterprise Software?" },
  article: {
    category: "Enterprise Software", readTime: "10 min read",
    title: "What Is Enterprise Software? Why Do Companies Need Custom Software?",
    excerpt: "Enterprise software refers to business applications designed around a company's actual needs, users, processes, data, and existing systems. Custom software is not necessary for every requirement; however, it becomes an important option when standard products cannot adequately support company-specific workflows, integrations, or operational requirements.",
  },
  quickAnswer: { title: "Short answer", items: [
    "Enterprise software supports a company's business needs and operating model.",
    "Off-the-shelf products can be the right choice for standard needs, while custom software becomes relevant for company-specific requirements.",
    "Enterprise solutions may include web applications, mobile applications, portals, business applications, and integration solutions.",
    "A successful software project starts by understanding the business need, users, processes, data, and existing systems before selecting technology.",
  ]},
  sections: [
    { title: "What is enterprise software?", paragraphs: [
      "Enterprise software includes solutions used to support a company's operations, employees, customers, business partners, or management processes. These solutions may take the form of a web application, mobile application, customer or dealer portal, internal business application, management interface, or a custom application integrated with existing systems.",
      "The purpose of enterprise software is not simply to move an activity into a digital environment. The goal is to create a structure that supports the business need in a more controlled, traceable, efficient, and sustainable way.",
    ]},
    { title: "What is the difference between enterprise software and off-the-shelf software?", paragraphs: [
      "Off-the-shelf software is designed to meet a common set of requirements across many companies. For areas such as accounting, office productivity, human resources, or standard work tracking, packaged solutions can often provide a fast and economical starting point.",
      "Custom software is designed around the company's own operating model. When standard products cannot adequately support specific processes, user roles, data structures, integrations, or operational rules, custom development may become more appropriate.",
      "The right question is therefore not whether packaged or custom software is universally better, but which solution model can meet the business requirement more effectively.",
    ]},
    { title: "When do companies need custom software?", paragraphs: ["Not every company needs custom software. The need usually emerges when existing systems no longer support the way the business needs to operate."], bullets: [
      "When standard software cannot support critical workflows","When the same activity is managed across multiple systems or spreadsheets","When manual data entry and repetitive work create operational overhead","When a dedicated customer, dealer, supplier, or employee portal is required","When custom integration with ERP or other enterprise systems is needed","When mobile applications are required for field teams","When existing systems do not provide sufficient operational visibility","When company-specific approvals, controls, or workflows need to be digitalized",
    ]},
    { title: "What types of solutions does enterprise software include?", paragraphs: ["Enterprise software does not refer to a single application type. The solution can be designed in different forms depending on the business requirement. The key is to define the use case before deciding on the technology."], bullets: [
      "Enterprise web applications","Mobile field and operations applications","Customer portals","Dealer and business partner portals","Internal business applications","Operations management interfaces","Management dashboards","Approval and workflow applications","Data collection and reporting applications","Applications integrated with ERP and other enterprise systems",
    ]},
    { title: "What are the benefits of custom enterprise software?", paragraphs: [
      "The main advantage of custom software is that it can be designed around the company's actual operating model. User needs, process steps, permissions, data structures, and relationships with other systems can be considered together.",
      "However, custom development is not always cheaper or faster. It requires analysis, development, testing, maintenance, and long-term ownership. A custom software decision should therefore be based on a clear business need and expected value.",
    ], bullets: ["Support for company-specific workflows","Focus on actual needs instead of unnecessary features","Integration with existing systems","User roles and permissions designed around requirements","Improved visibility of operational data","Ability to expand the solution as needs evolve"]},
    { title: "What is the relationship between enterprise software and ERP?", paragraphs: [
      "ERP systems provide a shared structure for managing core corporate processes such as finance, purchasing, sales, inventory, production, and human resources. However, it may not always be possible or appropriate to manage every operational requirement inside the ERP system.",
      "Custom applications do not necessarily replace ERP. Instead, they can support user experiences, field operations, portals, data collection requirements, or workflows that are not covered by the ERP and can work in integration with it.",
      "Software architecture should therefore clearly define which functions belong in ERP, which belong in custom applications, and how data should move between systems.",
    ]},
    { title: "How should an enterprise software project start?", paragraphs: ["A successful enterprise software project should not begin directly with screen design or technology selection. The business problem and user need should first be clarified."], bullets: [
      "Define the business need and expected outcome","Identify users and user roles","Understand the current process and pain points","Identify required data and data sources","Map relationships with ERP and other existing systems","Clarify the initial scope and priorities","Design application, integration, and security requirements","Plan development, testing, and deployment",
    ]},
    { title: "How can AI be included in enterprise software?", paragraphs: [
      "Artificial intelligence does not always need to be a separate technology project. When the right use case is identified, AI can be added as a supporting capability within existing or newly developed enterprise applications.",
      "Document analysis, enterprise knowledge search, classification, summarization, recommendations, and decision support can become part of business applications. The important point is not to use AI simply because the technology is available, but to apply it to a real business need.",
    ]},
    { title: "How does Tage Yazılım approach enterprise software development?", paragraphs: [
      "Tage Yazılım does not approach enterprise software projects only as technical development work. We first evaluate the business need, users, processes, data, and existing systems together, and then define an appropriate solution architecture.",
      "The approach combines software development with business process and ERP experience. The goal is not only to build a working application, but to create sustainable solutions that have a clear role in real operations and can be extended with integrations or AI capabilities when needed.",
    ]},
    { title: "Conclusion", paragraphs: [
      "Enterprise software is an important tool for digitally supporting business needs that cannot be adequately addressed by standard solutions. However, successful results depend on identifying the right need before deciding to build custom software.",
      "When processes, users, data, and existing systems are evaluated together, the right solution model — whether a web application, mobile application, portal, integration, or custom business application — can be defined more effectively.",
    ]},
  ],
  relatedLinks: { title: "Related pages", items: [
    { title: "Enterprise Software Development", href: "/hizmetler/kurumsal-yazilim-gelistirme" },
    { title: "Enterprise Artificial Intelligence Solutions", href: "/hizmetler/kurumsal-yapay-zeka-cozumleri" },
    { title: "Process Maturity and Process Management", href: "/hizmetler/surec-olgunlugu-ve-surec-yonetimi" },
    { title: "ERP Consulting and ERP Readiness", href: "/hizmetler/erp-danismanligi-ve-erp-hazirlik-hizmetleri" },
  ]},
  faq: { title: "Frequently asked questions", items: [
    { question: "What is enterprise software?", answer: "Enterprise software includes web, mobile, portal, integration, and custom business applications used to support a company's processes, users, data, and operations." },
    { question: "Does every company need custom software?", answer: "No. If standard requirements can be met effectively with packaged products, custom development may not be necessary. Custom software becomes more relevant when company-specific processes, integrations, user experiences, or operational requirements exist." },
    { question: "Does custom software replace ERP?", answer: "Not necessarily. Custom applications often complement requirements that are not covered by ERP and work in integration with the ERP system. The appropriate system for each function should be determined through business and system architecture." },
    { question: "Where should an enterprise software project start?", answer: "The first step is not selecting technology. It is understanding the business need, users, current process, data, and existing systems. The technical solution and development scope should be defined after this analysis." },
    { question: "Can AI be added to enterprise software?", answer: "Yes. AI capabilities such as document analysis, knowledge search, classification, summarization, recommendations, and decision support can be integrated into enterprise applications when they address an appropriate business use case." },
  ]},
  cta: { title: "Let’s evaluate your enterprise software needs together", description: "Let’s evaluate your business needs, users, processes, existing systems, and integration requirements to clarify the right solution approach.", primaryButton: "Contact Us", secondaryButton: "Explore Enterprise Software Service" },
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
                      href={withLang("/hizmetler/kurumsal-yazilim-gelistirme")}
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