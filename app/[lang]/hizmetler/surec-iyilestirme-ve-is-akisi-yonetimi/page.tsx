// app/[lang]/hizmetler/surec-iyilestirme-ve-is-akisi-yonetimi/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock3,
  ClipboardList,
  GitCompareArrows,
  MoveRight,
  ShieldAlert,
  TrendingUp,
  Workflow,
} from "lucide-react";
import Container from "@/components/layout/Container";

type PageProps = {
  params: Promise<{ lang: string }>;
};

const SITE_URL = "https://www.tageapps.com";

const tr = {
  meta: {
    title:
      "Süreç İyileştirme ve İş Akışı Yönetimi | Proses İyileştirme | Tage Yazılım",
    description:
      "Süreç iyileştirme ve iş akışı yönetimi hizmeti ile gereksiz adımları azaltın, onay akışlarını sadeleştirin, süreç performansını artırın ve daha etkin süreç yönetimi kurun.",
    keywords: [
      "süreç iyileştirme",
      "proses iyileştirme",
      "süreç geliştirme",
      "iş süreçlerinde iyileştirme çalışmaları",
      "süreç yönetimi ve iyileştirme",
      "süreç yönetimi ve süreç iyileştirme",
      "iş akış yönetimi",
      "iş akışı yönetimi",
      "iş akışı ve süreç yönetimi",
      "etkin süreç yönetimi",
      "onay akışlarının sadeleştirilmesi",
      "tekrarlı adımların azaltılması",
      "süreç performansının artırılması",
      "iyileştirme aksiyon planı",
    ],
    ogDescription:
      "Süreç iyileştirme, proses iyileştirme ve iş akışı yönetimi ile daha hızlı, sade ve ölçülebilir operasyon yapısı kurun.",
    twitterDescription:
      "İş akışı ve süreç yönetimi yaklaşımı ile süreçleri sadeleştirin, hızlandırın ve verimliliği artırın.",
  },

  breadcrumb: {
    home: "Anasayfa",
    services: "Hizmetler",
    current: "Süreç İyileştirme ve İş Akışı Yönetimi",
  },

  hero: {
    badge: "Hizmetlerimiz",
    title: "Süreç İyileştirme ve İş Akışı Yönetimi",
    description1:
      "Süreç iyileştirme ve iş akışı yönetimi hizmeti, mevcut süreçleri daha verimli hale getirmek, gereksiz adımları azaltmak, onay akışlarını sadeleştirmek ve hız ile kaliteyi birlikte artırmak için kullanılır.",
    description2:
      "Tage Yazılım olarak süreç iyileştirme, proses iyileştirme, süreç geliştirme, iş süreçlerinde iyileştirme çalışmaları, süreç yönetimi ve iyileştirme, süreç yönetimi ve süreç iyileştirme, iş akış yönetimi, iş akışı yönetimi, iş akışı ve süreç yönetimi ve etkin süreç yönetimi başlıklarını birlikte ele alıyoruz.",
    primaryButton: "Görüşme Talep Et",
    secondaryButton: "Tüm Hizmetleri Gör",
    summaryTitle: "Bu sayfanın odağı",
    summaryHeading: "Var olan süreci daha etkin ve daha verimli hale getirmek",
    summaryText:
      "Süreçlerin sadeleştirilmesi, tekrarlı adımların azaltılması, onay akışlarının kısaltılması, süreç performansının artırılması ve iyileştirme aksiyon planı oluşturulması.",
    summaryItems: [
      "İş akışlarının yeniden tasarlanması",
      "Onay ve karar noktalarının sadeleştirilmesi",
      "Tekrarlı adımların azaltılması",
      "Öncesi sonrası yaklaşımı",
    ],
  },

  intro: {
    title: "Süreç iyileştirme neden kritik bir ihtiyaçtır?",
    description1:
      "Birçok işletmede süreç vardır; ancak süreçlerin var olması tek başına yeterli değildir. Süreç iyileştirme yapılmadığında zaman kaybı, bekleme, mükerrer iş, ağır onay akışları ve görünmeyen verimsizlikler zamanla büyür. Bu nedenle süreç yönetimi ve iyileştirme birlikte ele alınmalıdır.",
    description2:
      "Etkin süreç yönetimi, yalnızca süreci tanımlamak değil; aynı zamanda sürecin daha iyi çalışmasını sağlamak anlamına gelir. Bu da proses iyileştirme ve iş akışı yönetimi yaklaşımını doğal olarak gündeme getirir.",
  },

  painPoints: [
    {
      icon: "clock",
      title: "Yavaşlayan ve uzayan akışlar",
      description:
        "İş akışı yönetimi net değilse görev geçişleri yavaşlar, onaylar uzar ve süreçler gereksiz bekleme süreleri üretir.",
    },
    {
      icon: "compare",
      title: "Tekrarlı adımlar ve gereksiz iş yükü",
      description:
        "Süreç iyileştirme yapılmadığında aynı bilgi tekrar girilir, aynı iş birden fazla kez kontrol edilir ve verimlilik düşer.",
    },
    {
      icon: "shield",
      title: "Karar ve kontrol noktalarında karmaşa",
      description:
        "İş akışı ve süreç yönetimi birlikte ele alınmadığında sorumluluklar netleşmez, karar noktaları ağırlaşır ve süreç görünürlüğü zayıflar.",
    },
  ],

  scope: {
    title: "Süreç iyileştirme ve iş akışı yönetimi kapsamında neler yapıyoruz?",
    description:
      "Bu hizmetin amacı, mevcut süreci baştan kurmak değil; çalışan yapıyı daha iyi hale getirmektir. İş süreçlerinde iyileştirme çalışmaları ile akışı yavaşlatan, karmaşıklaştıran ve maliyet artıran alanlar görünür hale getirilir; ardından daha etkin bir hedef yapı oluşturulur.",
  },

  serviceBlocks: [
    {
      icon: "workflow",
      title: "İş akışlarının yeniden tasarlanması",
      description:
        "Mevcut akışı analiz eder, daha sade, daha hızlı ve daha uygulanabilir hedef iş akışı yapısını oluştururuz.",
    },
    {
      icon: "move",
      title: "Onay ve karar noktalarının sadeleştirilmesi",
      description:
        "Süreci yavaşlatan fazla onay, gereksiz kontrol ve karmaşık karar adımlarını azaltarak akışı netleştiririz.",
    },
    {
      icon: "compare",
      title: "Tekrarlı adımların azaltılması",
      description:
        "Mükerrer veri girişi, tekrar kontrol, gereksiz devralma ve tekrar iş üreten alanları görünür hale getirip azaltırız.",
    },
    {
      icon: "trend",
      title: "Süreç performansının artırılması",
      description:
        "Süreç performansını etkileyen bekleme, rol çakışması ve akış kopukluklarını önceliklendirerek iyileştirme alanları oluştururuz.",
    },
    {
      icon: "clipboard",
      title: "İyileştirme aksiyon planı",
      description:
        "Hangi iyileştirmenin ne sırayla yapılacağını, hangi ekibin sorumlu olacağını ve hangi aksiyonların öncelikli olduğunu netleştiririz.",
    },
    {
      icon: "chart",
      title: "Öncesi sonrası yaklaşımı",
      description:
        "Mevcut durum ile hedef durum arasındaki farkı görünür hale getirir, süreç geliştirme etkisini daha somut izlenebilir kılmaya çalışırız.",
    },
  ],

  detailSections: [
    {
      title: "İş akışlarının yeniden tasarlanması",
      description1:
        "İş akışlarının yeniden tasarlanması, mevcut akışı tamamen silmek anlamına gelmez. Amaç, çalışan yapıyı daha sade, daha hızlı ve daha net hale getirmektir. Burada görev geçişleri, işlem sırası ve akış mantığı yeniden değerlendirilir.",
      description2:
        "İş akışı ve süreç yönetimi birlikte düşünülürse, hedef yapı sadece teorik değil; ekiplerin gerçekten kullanabileceği kadar uygulanabilir hale gelir.",
    },
    {
      title: "Onay ve karar noktalarının sadeleştirilmesi",
      description1:
        "Birçok süreçte asıl gecikme, işin kendisinden değil; fazla onay ve karmaşık karar akışından kaynaklanır. Bu nedenle süreç yönetimi ve süreç iyileştirme çalışmalarında onay ve karar noktalarını ayrı incelemek gerekir.",
      description2:
        "Gereksiz onay katmanlarının azaltılması, karar alanlarının netleştirilmesi ve akışın daha kısa hale getirilmesi süreç hızını doğrudan etkiler.",
    },
    {
      title: "Tekrarlı adımların azaltılması",
      description1:
        "Süreç geliştirme çalışmalarında en sık karşılaşılan alanlardan biri, aynı bilginin tekrar girilmesi, aynı evrağın tekrar kontrol edilmesi veya aynı işin birden fazla ekip tarafından farklı biçimde yapılmasıdır.",
      description2:
        "Tekrarlı adımların azaltılması, sadece hız kazandırmaz; aynı zamanda hata oranını ve operasyon maliyetini de düşürür.",
    },
    {
      title: "Süreç performansının artırılması",
      description1:
        "Süreç performansının artırılması, sürecin daha hızlı ilerlemesi kadar daha öngörülebilir ve daha kontrollü ilerlemesini de kapsar. Burada amaç yalnızca hız değil; kalite, süre, iş yükü ve görünürlük arasında daha iyi denge kurmaktır.",
      description2:
        "Etkin süreç yönetimi için performans boyutunu izlemek, iyileştirmenin kalıcı hale gelmesi açısından kritik önemdedir.",
    },
  ],

  actionPlan: {
    title: "İyileştirme aksiyon planı",
    description1:
      "İyileştirme aksiyon planı, hangi geliştirme adımının önce yapılacağını, hangi sorumlunun devreye gireceğini ve hangi kazanımın hedeflendiğini netleştirir. Böylece öneriler raporda kalmaz, uygulamaya taşınabilir.",
    description2:
      "İş süreçlerinde iyileştirme çalışmaları sürdürülebilir olacaksa, aksiyon planının sade, öncelikli ve sahipliği net biçimde kurulması gerekir.",
    outputsTitle: "Bu hizmetin tipik çıktıları",
    outputs: [
      "Mevcut akıştaki darboğaz ve tekrar iş alanları listesi",
      "İş akışlarının yeniden tasarlanmasına ilişkin hedef yapı",
      "Onay ve karar noktalarının sadeleştirilmiş görünümü",
      "Tekrarlı adımların azaltılmasına yönelik öneriler",
      "Süreç performansını artıracak öncelikli geliştirme alanları",
      "İyileştirme aksiyon planı ve takip çerçevesi",
    ],
  },

  beforeAfter: {
    title: "Öncesi sonrası yaklaşımı",
    description1:
      "Öncesi sonrası yaklaşımı, mevcut durum ile iyileştirilmiş hedef durum arasındaki farkı görünür hale getirir. Böylece süreç iyileştirme çalışmasının neyi değiştirdiği daha somut biçimde anlaşılır.",
    description2:
      "Bu yaklaşım özellikle yönetim tarafında ikna gücü yaratır; çünkü sadece öneri değil, fark yaratan yeni akış mantığı açık biçimde görünür olur.",
    useCasesTitle: "Süreç iyileştirme örnek kullanım alanları",
    useCasesDescription:
      "Proses iyileştirme ve iş akışı yönetimi çalışmaları; satış, satın alma, üretim, kalite, lojistik, insan kaynakları ve destek süreçleri gibi birçok alanda uygulanabilir. Önemli olan, iyileştirme ihtiyacını gerçek iş yükü ve gerçek darboğazlar üzerinden okumaktır.",
    useCases: [
      "Satış ve tekliften siparişe uzanan onay akışları",
      "Satın alma talep, teklif, sipariş ve onay süreçleri",
      "Üretim planlama, iş emri ve operasyon geçiş akışları",
      "Kalite kontrol, uygunsuzluk ve aksiyon süreçleri",
      "Depo, sevkiyat ve teslimat iş akışları",
      "İnsan kaynakları izin, işe alım ve onay süreçleri",
      "Destek, servis ve müşteri talep yönetimi akışları",
      "ERP ve otomasyon öncesi süreç sadeleştirme çalışmaları",
    ],
  },

  fit: {
    title: "Kimler için uygundur?",
    description:
      "Bu hizmet; mevcut süreci olan ama bu süreci daha hızlı, daha sade ve daha verimli hale getirmek isteyen kurumlar için uygundur. Özellikle süreç yönetimi ve iyileştirme yaklaşımını birlikte kurmak isteyen, etkin süreç yönetimi hedefleyen ve iş akışı yönetiminde netlik arayan yapılar için yüksek değer üretir.",
    items: [
      "Mevcut süreçleri var olan ama daha verimli hale getirmek isteyen şirketler",
      "İş süreçlerinde iyileştirme çalışmaları yapmak isteyen kurumlar",
      "Onay akışları uzayan ve karar süreçleri yavaşlayan yapılar",
      "Süreç yönetimi ve iyileştirme yaklaşımını birlikte kurmak isteyen ekipler",
      "Etkin süreç yönetimi ile hız, verimlilik ve görünürlük kazanmak isteyen firmalar",
    ],
  },

  tage: {
    title: "Tage Yazılım yaklaşımı",
    description1:
      "Tage Yazılım süreç iyileştirme çalışmalarını yalnızca öneri listesi üretmek için yapmaz. Amacımız, iş akışını sadeleştirmek, hızlandırmak ve gerçekten uygulanabilir bir hedef yapı oluşturmaktır.",
    description2:
      "Bu nedenle süreç geliştirme, iş akışı yönetimi, aksiyon planı ve ölçülebilir takip mantığını birlikte ele alıyoruz. Böylece ortaya çıkan yapı hem günlük operasyonu hem de dijitalleşme hazırlığını güçlendirebilir.",
    sadiBadge: "Sadi bağlantısı",
    sadiTitle: "İyileştirmeden ölçülebilir takibe geçiş",
    sadiDescription:
      "Süreç iyileştirme ve iş akışı yönetimi ile netleşen yapı, gerektiğinde Sadi ile daha görünür hale getirilebilir. Böylece şirket sadece iyileştirme kararı almakla kalmaz; aksiyonları, riskleri ve yeniden değerlendirme ihtiyacını da daha izlenebilir biçimde takip edebilir.",
    sadiButton: "Sadi’yi İncele",
    aboutButton: "Neden Tage Yazılım?",
  },

  faq: {
    title: "Sık sorulan sorular",
    description:
      "Aşağıdaki kısa cevaplar, hem kullanıcıların hızlı bilgi almasına hem de sayfanın answer engine ve AI aramaları için daha net okunmasına yardımcı olur.",
    items: [
      {
        question: "Süreç iyileştirme nedir?",
        answer:
          "Süreç iyileştirme, mevcut bir sürecin daha hızlı, daha sade, daha az hatalı ve daha verimli çalışması için gereksiz adımların, tekrar işlerin ve darboğazların azaltılması çalışmasıdır.",
      },
      {
        question: "Proses iyileştirme ile süreç geliştirme aynı şey midir?",
        answer:
          "Benzer amaç taşırlar. Proses iyileştirme daha çok operasyonel akışın verimliliğini artırmaya odaklanırken, süreç geliştirme ifadesi mevcut yapının daha iyi hale getirilmesini daha geniş kapsamda anlatır.",
      },
      {
        question: "İş akışı yönetimi neden önemlidir?",
        answer:
          "İş akışı yönetimi, görevlerin kimden kime geçtiğini, hangi noktada karar ve onay gerektiğini ve sürecin nerede yavaşladığını görünür hale getirir. Bu da etkin süreç yönetimi için kritik zemin oluşturur.",
      },
      {
        question: "Süreç yönetimi ve süreç iyileştirme birlikte neden ele alınmalıdır?",
        answer:
          "Süreç yönetimi mevcut yapıyı görünür ve yönetilebilir hale getirir. Süreç iyileştirme ise bu yapının daha verimli çalışmasını sağlar. Birlikte ele alındığında daha kalıcı sonuç üretir.",
      },
      {
        question: "İyileştirme aksiyon planı ne sağlar?",
        answer:
          "İyileştirme aksiyon planı, hangi geliştirme adımının ne zaman, kim tarafından ve hangi öncelikle yapılacağını netleştirir. Böylece öneriler uygulamaya dönüşebilir.",
      },
    ],
  },

  cta: {
    title: "Mevcut süreçlerinizi daha verimli hale getirelim",
    description:
      "Süreç iyileştirme, proses iyileştirme ve iş akışı yönetimi yaklaşımı ile akışlarınızı sadeleştirmek ve hızlandırmak için bizimle iletişime geçin.",
    primaryButton: "İletişime Geçin",
    secondaryButton: "Hizmetler Sayfasına Dön",
  },

  schema: {
    serviceName: "Süreç İyileştirme ve İş Akışı Yönetimi",
    serviceType:
      "Süreç İyileştirme, Proses İyileştirme ve İş Akışı Yönetimi Hizmeti",
    serviceDescription:
      "Süreç iyileştirme ve iş akışı yönetimi hizmeti ile süreçlerin sadeleştirilmesi, gereksiz adımların azaltılması, onay akışlarının kısaltılması, süreç performansının artırılması ve iyileştirme aksiyon planının oluşturulması hedeflenir.",
  },
} as const;

const en = {
  meta: {
    title:
      "Process Improvement and Workflow Management | Process Improvement | Tage Yazılım",
    description:
      "Reduce unnecessary steps, simplify approval flows, improve process performance, and build more effective process management with our process improvement and workflow management service.",
    keywords: [
      "process improvement",
      "process enhancement",
      "workflow management",
      "improvement studies in business processes",
      "process management and improvement",
      "workflow and process management",
      "effective process management",
      "simplification of approval flows",
      "reducing repetitive steps",
      "improving process performance",
      "improvement action plan",
    ],
    ogDescription:
      "Build a faster, simpler, and more measurable operational structure through process improvement and workflow management.",
    twitterDescription:
      "Simplify, accelerate, and improve efficiency in processes through workflow and process management.",
  },

  breadcrumb: {
    home: "Home",
    services: "Services",
    current: "Process Improvement and Workflow Management",
  },

  hero: {
    badge: "Our Services",
    title: "Process Improvement and Workflow Management",
    description1:
      "The process improvement and workflow management service is used to make existing processes more efficient, reduce unnecessary steps, simplify approval flows, and improve both speed and quality together.",
    description2:
      "At Tage Yazılım, we address process improvement, process enhancement, improvement studies in business processes, process management and improvement, workflow management, workflow and process management, and effective process management together.",
    primaryButton: "Request a Meeting",
    secondaryButton: "View All Services",
    summaryTitle: "Focus of this page",
    summaryHeading: "Making the existing process more effective and efficient",
    summaryText:
      "Simplifying processes, reducing repetitive steps, shortening approval flows, improving process performance, and creating an improvement action plan.",
    summaryItems: [
      "Redesigning workflows",
      "Simplifying approval and decision points",
      "Reducing repetitive steps",
      "Before-and-after approach",
    ],
  },

  intro: {
    title: "Why is process improvement a critical need?",
    description1:
      "Many businesses have processes, but having processes alone is not enough. When process improvement is not carried out, time loss, waiting, duplicate work, heavy approval flows, and invisible inefficiencies grow over time. For this reason, process management and improvement must be addressed together.",
    description2:
      "Effective process management means not only defining the process, but also ensuring that it works better. This naturally brings the process improvement and workflow management approach to the agenda.",
  },

  painPoints: [
    {
      icon: "clock",
      title: "Slowing and prolonged flows",
      description:
        "If workflow management is not clear, task handovers slow down, approvals take longer, and processes generate unnecessary waiting times.",
    },
    {
      icon: "compare",
      title: "Repetitive steps and unnecessary workload",
      description:
        "When process improvement is not carried out, the same information is entered again, the same work is checked multiple times, and efficiency decreases.",
    },
    {
      icon: "shield",
      title: "Confusion at decision and control points",
      description:
        "When workflow and process management are not addressed together, responsibilities remain unclear, decision points become heavier, and process visibility weakens.",
    },
  ],

  scope: {
    title: "What do we do within process improvement and workflow management?",
    description:
      "The goal of this service is not to rebuild the current process from scratch, but to improve the existing structure. Through improvement studies in business processes, areas that slow down, complicate, and increase the cost of the flow are made visible; then a more effective target structure is created.",
  },

  serviceBlocks: [
    {
      icon: "workflow",
      title: "Redesigning workflows",
      description:
        "We analyze the current flow and create a target workflow structure that is simpler, faster, and more applicable.",
    },
    {
      icon: "move",
      title: "Simplifying approval and decision points",
      description:
        "We clarify the flow by reducing excessive approvals, unnecessary controls, and complex decision steps that slow the process down.",
    },
    {
      icon: "compare",
      title: "Reducing repetitive steps",
      description:
        "We make visible and reduce duplicate data entry, repeated checks, unnecessary handoffs, and areas generating rework.",
    },
    {
      icon: "trend",
      title: "Improving process performance",
      description:
        "We identify improvement areas by prioritizing waiting, role conflicts, and flow disruptions affecting process performance.",
    },
    {
      icon: "clipboard",
      title: "Improvement action plan",
      description:
        "We clarify which improvement should be made in what order, which team will be responsible, and which actions are priority.",
    },
    {
      icon: "chart",
      title: "Before-and-after approach",
      description:
        "We make the difference between the current state and the target state visible and make the impact of process enhancement more concretely traceable.",
    },
  ],

  detailSections: [
    {
      title: "Redesigning workflows",
      description1:
        "Redesigning workflows does not mean deleting the current flow entirely. The goal is to make the working structure simpler, faster, and clearer. Here, task handovers, the order of operations, and the flow logic are reassessed.",
      description2:
        "When workflow and process management are considered together, the target structure becomes not only theoretical, but applicable enough for teams to actually use.",
    },
    {
      title: "Simplifying approval and decision points",
      description1:
        "In many processes, the main delay comes not from the work itself, but from excessive approvals and complex decision flows. Therefore, in process management and process improvement efforts, approval and decision points need to be examined separately.",
      description2:
        "Reducing unnecessary approval layers, clarifying decision areas, and shortening the flow directly affect process speed.",
    },
    {
      title: "Reducing repetitive steps",
      description1:
        "One of the most common areas encountered in process enhancement efforts is the repeated entry of the same information, repeated checking of the same document, or the same work being carried out by multiple teams in different ways.",
      description2:
        "Reducing repetitive steps not only increases speed, but also lowers the error rate and operational cost.",
    },
    {
      title: "Improving process performance",
      description1:
        "Improving process performance includes not only making the process move faster, but also making it progress more predictably and under better control. The goal here is not only speed, but also building a better balance among quality, time, workload, and visibility.",
      description2:
        "Monitoring the performance dimension is critical for making improvement permanent in effective process management.",
    },
  ],

  actionPlan: {
    title: "Improvement action plan",
    description1:
      "The improvement action plan clarifies which improvement step will be taken first, which responsible party will be involved, and what gain is targeted. Thus, recommendations do not remain in the report, but can be carried into implementation.",
    description2:
      "If improvement studies in business processes are to be sustainable, the action plan must be simple, prioritized, and clearly owned.",
    outputsTitle: "Typical outputs of this service",
    outputs: [
      "List of bottlenecks and rework areas in the current flow",
      "Target structure for redesigning workflows",
      "Simplified view of approval and decision points",
      "Recommendations for reducing repetitive steps",
      "Priority improvement areas to increase process performance",
      "Improvement action plan and tracking framework",
    ],
  },

  beforeAfter: {
    title: "Before-and-after approach",
    description1:
      "The before-and-after approach makes the difference between the current state and the improved target state visible. This makes it more concrete what the process improvement effort changes.",
    description2:
      "This approach creates persuasive power especially for management, because not only suggestions but also the new flow logic that creates difference becomes clearly visible.",
    useCasesTitle: "Typical use cases for process improvement",
    useCasesDescription:
      "Process improvement and workflow management efforts can be applied in many areas such as sales, procurement, production, quality, logistics, human resources, and support processes. What matters is reading the need for improvement through real workloads and real bottlenecks.",
    useCases: [
      "Approval flows from sales and quotation to order",
      "Procurement request, quotation, order, and approval processes",
      "Production planning, work order, and operational transition flows",
      "Quality control, nonconformity, and action processes",
      "Warehouse, shipment, and delivery workflows",
      "HR leave, recruitment, and approval processes",
      "Support, service, and customer request management flows",
      "Process simplification before ERP and automation",
    ],
  },

  fit: {
    title: "Who is it suitable for?",
    description:
      "This service is suitable for organizations that already have processes but want to make them faster, simpler, and more efficient. It creates high value especially for structures wanting to build process management and improvement together, aiming for effective process management, and seeking clarity in workflow management.",
    items: [
      "Companies that already have processes but want to make them more efficient",
      "Organizations wanting to carry out improvement studies in business processes",
      "Structures where approval flows are prolonged and decision processes slow down",
      "Teams wanting to establish process management and improvement together",
      "Firms wanting to gain speed, efficiency, and visibility through effective process management",
    ],
  },

  tage: {
    title: "The Tage Yazılım approach",
    description1:
      "Tage Yazılım does not conduct process improvement efforts merely to produce a list of recommendations. Our goal is to simplify and accelerate the workflow and create a target structure that is truly applicable.",
    description2:
      "For this reason, we address process enhancement, workflow management, action planning, and measurable tracking together. Thus, the resulting structure can strengthen both daily operations and digitalization readiness.",
    sadiBadge: "Sadi connection",
    sadiTitle: "Transition from improvement to measurable tracking",
    sadiDescription:
      "The structure clarified through process improvement and workflow management can, when needed, be made more visible with Sadi. Thus, the company not only makes improvement decisions, but can also track actions, risks, and reassessment needs in a more traceable way.",
    sadiButton: "Explore Sadi",
    aboutButton: "Why Tage Yazılım?",
  },

  faq: {
    title: "Frequently asked questions",
    description:
      "The short answers below help users get quick information and also make the page easier to read for answer engines and AI search.",
    items: [
      {
        question: "What is process improvement?",
        answer:
          "Process improvement is the effort to reduce unnecessary steps, rework, and bottlenecks so that an existing process works faster, simpler, with fewer errors, and more efficiently.",
      },
      {
        question: "Are process improvement and process enhancement the same thing?",
        answer:
          "They have similar goals. Process improvement focuses more on increasing the efficiency of the operational flow, while process enhancement describes the broader improvement of the current structure.",
      },
      {
        question: "Why is workflow management important?",
        answer:
          "Workflow management makes visible who hands work over to whom, where decisions and approvals are needed, and where the process slows down. This creates a critical foundation for effective process management.",
      },
      {
        question: "Why should process management and process improvement be addressed together?",
        answer:
          "Process management makes the current structure visible and manageable. Process improvement ensures that this structure works more efficiently. Addressed together, they create more lasting results.",
      },
      {
        question: "What does an improvement action plan provide?",
        answer:
          "An improvement action plan clarifies which development step will be taken when, by whom, and with what priority. Thus, recommendations can be turned into implementation.",
      },
    ],
  },

  cta: {
    title: "Let’s make your existing processes more efficient",
    description:
      "Contact us to simplify and accelerate your flows through process improvement, process enhancement, and workflow management.",
    primaryButton: "Contact Us",
    secondaryButton: "Back to Services Page",
  },

  schema: {
    serviceName: "Process Improvement and Workflow Management",
    serviceType:
      "Process Improvement, Process Enhancement, and Workflow Management Service",
    serviceDescription:
      "The process improvement and workflow management service aims to simplify processes, reduce unnecessary steps, shorten approval flows, improve process performance, and create an improvement action plan.",
  },
} as const;

function getIcon(name: string) {
  if (name === "clock") return Clock3;
  if (name === "compare") return GitCompareArrows;
  if (name === "shield") return ShieldAlert;
  if (name === "workflow") return Workflow;
  if (name === "move") return MoveRight;
  if (name === "trend") return TrendingUp;
  if (name === "clipboard") return ClipboardList;
  return BarChart3;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const copy = lang === "en" ? en : tr;
  const pagePath = `/${lang}/hizmetler/surec-iyilestirme-ve-is-akisi-yonetimi`;
  const pageUrl = `${SITE_URL}${pagePath}`;

  return {
    title: copy.meta.title,
    description: copy.meta.description,
    keywords: [...copy.meta.keywords],
    alternates: {
      canonical: pagePath,
      languages: {
        tr: "/tr/hizmetler/surec-iyilestirme-ve-is-akisi-yonetimi",
        en: "/en/hizmetler/surec-iyilestirme-ve-is-akisi-yonetimi",
      },
    },
    openGraph: {
      title: copy.meta.title,
      description: copy.meta.ogDescription,
      url: pageUrl,
      siteName: "Tage Yazılım",
      locale: lang === "en" ? "en_US" : "tr_TR",
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

export default async function SurecIyilestirmeVeIsAkisiYonetimiPage({
  params,
}: PageProps) {
  const { lang } = await params;

  if (lang !== "tr" && lang !== "en") {
    notFound();
  }

  const copy = lang === "en" ? en : tr;
  const withLang = (path: string) => `/${lang}${path}`;
  const pagePath = `/${lang}/hizmetler/surec-iyilestirme-ve-is-akisi-yonetimi`;
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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: copy.schema.serviceName,
    serviceType: copy.schema.serviceType,
    url: pageUrl,
    description: copy.schema.serviceDescription,
    areaServed: {
      "@type": "Country",
      name: lang === "en" ? "Turkey" : "Türkiye",
    },
    provider: {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="bg-white text-slate-800">
        <section className="bg-gradient-to-b from-[#F3F3E0] via-white to-white pt-16 pb-14 md:pt-24 md:pb-20">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
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
                  {copy.hero.description1}
                </p>

                <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
                  {copy.hero.description2}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={withLang("/iletisim")}
                    className="inline-flex items-center gap-2 rounded-full bg-[#133E87] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                  >
                    {copy.hero.primaryButton}
                    <ArrowRight size={18} />
                  </Link>

                  <Link
                    href={withLang("/hizmetler")}
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
            <div className="max-w-4xl">
              <h2 className="text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                {copy.intro.title}
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-700">
                {copy.intro.description1}
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700">
                {copy.intro.description2}
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {copy.painPoints.map((item) => {
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

        <section className="bg-[#F8FAFC] py-14 md:py-20">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                {copy.scope.title}
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-700">
                {copy.scope.description}
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {copy.serviceBlocks.map((item) => {
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
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                  {copy.detailSections[0].title}
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-700">
                  {copy.detailSections[0].description1}
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  {copy.detailSections[0].description2}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                  {copy.detailSections[1].title}
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-700">
                  {copy.detailSections[1].description1}
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  {copy.detailSections[1].description2}
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-[#F3F3E0] py-14 md:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                  {copy.detailSections[2].title}
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-700">
                  {copy.detailSections[2].description1}
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  {copy.detailSections[2].description2}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                  {copy.detailSections[3].title}
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-700">
                  {copy.detailSections[3].description1}
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  {copy.detailSections[3].description2}
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-14 md:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                  {copy.actionPlan.title}
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-700">
                  {copy.actionPlan.description1}
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  {copy.actionPlan.description2}
                </p>
              </div>

              <div className="rounded-[28px] border border-[#E6EDF5] bg-white p-6 md:p-8">
                <h3 className="text-xl font-semibold text-[#133E87]">
                  {copy.actionPlan.outputsTitle}
                </h3>

                <div className="mt-6 grid gap-4">
                  {copy.actionPlan.outputs.map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle2
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

        <section className="bg-[#F8FAFC] py-14 md:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                  {copy.beforeAfter.title}
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-700">
                  {copy.beforeAfter.description1}
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  {copy.beforeAfter.description2}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                  {copy.beforeAfter.useCasesTitle}
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-700">
                  {copy.beforeAfter.useCasesDescription}
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {copy.beforeAfter.useCases.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-[22px] border border-[#E6EDF5] bg-white px-5 py-5"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-[#133E87]"
                  />
                  <p className="text-sm leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-14 md:py-20">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                {copy.fit.title}
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-700">
                {copy.fit.description}
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {copy.fit.items.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-[22px] border border-[#E6EDF5] bg-white px-5 py-5"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-[#133E87]"
                  />
                  <p className="text-sm leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-14 md:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                  {copy.tage.title}
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-700">
                  {copy.tage.description1}
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  {copy.tage.description2}
                </p>
              </div>

              <div className="rounded-[28px] bg-[#133E87] p-8 text-white shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#CBDCEB]">
                  {copy.tage.sadiBadge}
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                  {copy.tage.sadiTitle}
                </h2>

                <p className="mt-4 text-base leading-7 text-white/85">
                  {copy.tage.sadiDescription}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={withLang("/sadi")}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#133E87] transition hover:opacity-95"
                  >
                    {copy.tage.sadiButton}
                    <ArrowRight size={18} />
                  </Link>

                  <Link
                    href={withLang("/hakkimizda")}
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    {copy.tage.aboutButton}
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-[#F8FAFC] py-14 md:py-20">
          <Container>
            <div className="max-w-4xl">
              <h2 className="text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                {copy.faq.title}
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-700">
                {copy.faq.description}
              </p>
            </div>

            <div className="mt-10 space-y-4">
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
                    <p className="text-sm leading-7 text-slate-600">{item.answer}</p>
                  </div>
                </details>
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