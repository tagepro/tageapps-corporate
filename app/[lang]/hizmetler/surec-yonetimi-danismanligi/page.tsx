// app/[lang]/hizmetler/surec-yonetimi-danismanligi/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  Network,
  ShieldCheck,
  Target,
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
      "Süreç Yönetimi Danışmanlığı | Kurumsal Süreç Yönetimi | Tage Yazılım",
    description:
      "Süreç yönetimi danışmanlığı ile iş süreç yönetimi yapınızı görünür, ölçülebilir ve sürdürülebilir hale getirin. Kurumsal süreç yönetimi için Tage Yazılım.",
    keywords: [
      "süreç yönetimi",
      "kurumsal süreç yönetimi",
      "iş süreç yönetimi",
      "organizasyon ve süreç yönetimi",
      "işletmelerde süreç yönetimi",
      "süreç danışmanlık",
      "süreç odaklı yönetim",
      "süreçlerle yönetim",
      "süreç yönetimi danışmanlığı",
      "süreç envanteri",
      "süreç sahipliği",
      "sorumluluk matrisi",
      "ölçülebilir süreç yaklaşımı",
    ],
    ogDescription:
      "İşletmelerde süreç yönetimi yaklaşımını kurmak, süreç envanteri çıkarmak ve ölçülebilir süreç yapısı oluşturmak için danışmanlık hizmeti.",
    twitterDescription:
      "Kurumsal süreç yönetimi, iş süreç yönetimi ve süreç odaklı yönetim için danışmanlık yaklaşımı.",
  },

  breadcrumb: {
    home: "Anasayfa",
    services: "Hizmetler",
    current: "Süreç Yönetimi Danışmanlığı",
  },

  hero: {
    badge: "Hizmetlerimiz",
    title: "Süreç Yönetimi Danışmanlığı",
    description1:
      "Süreç yönetimi danışmanlığı, işletmede işlerin nasıl yürüdüğünü görünür hale getiren, rolleri netleştiren, akışları standartlaştıran ve yönetim görünürlüğünü artıran kurumsal bir yaklaşımdır.",
    description2:
      "Tage Yazılım olarak kurumsal süreç yönetimi, iş süreç yönetimi, organizasyon ve süreç yönetimi, süreç odaklı yönetim ve süreçlerle yönetim başlıklarını birlikte ele alıyoruz. Amacımız yalnızca akış çizmek değil; işletmelerde süreç yönetimi yapısını daha görünür, daha ölçülebilir ve daha sürdürülebilir hale getirmektir.",
    primaryButton: "Görüşme Talep Et",
    secondaryButton: "Tüm Hizmetleri Gör",
    summaryTitle: "Bu sayfanın odağı",
    summaryHeading: "Şirketlerde süreç bazlı yönetim yapısı kurmak",
    summaryText:
      "Mevcut yapıyı netleştirmek, süreç envanteri oluşturmak, süreç sahipliği ve sorumluluk matrisini tanımlamak ve ölçülebilir süreç yaklaşımını kurmak.",
    summaryItems: [
      "Kurumsal süreç yönetimi yaklaşımı",
      "Süreç envanteri ve görünürlük",
      "Süreç sahipliği ve sorumluluk matrisi",
      "Ölçülebilir süreç yaklaşımı",
    ],
  },

  intro: {
    title: "Süreç yönetimi nedir ve neden kritik bir yönetim yaklaşımıdır?",
    description1:
      "Süreç yönetimi; işletmede işlerin hangi adımlarla yürüdüğünü, hangi rolün ne sorumluluk taşıdığını, hangi kontrol noktalarının kritik olduğunu ve hangi darboğazların performansı etkilediğini görünür hale getiren yönetim disiplinidir. Bu yaklaşım, işletmelerde süreç yönetimi yapısını kişilere bağlı olmaktan çıkarıp kurumsal hale getirir.",
    description2:
      "Kurumsal süreç yönetimi güçlü olmayan şirketlerde karar alma yavaşlar, süreçler ekipten ekibe değişir, tekrar iş artar ve dijital dönüşüm yatırımları sağlam zemin bulmakta zorlanır. Bu nedenle iş süreç yönetimi yalnızca operasyonel verimlilik konusu değil; aynı zamanda büyüme, kalite, ERP hazırlığı ve kurumsallaşma konusudur.",
  },

  painPoints: [
    {
      icon: "workflow",
      title: "Kişilere bağlı ilerleyen işler",
      description:
        "Süreçler yazılı, sahipli ve ölçülebilir olmadığında işler belirli kişilerin deneyimiyle yürür. Bu da sürdürülebilirliği zayıflatır.",
    },
    {
      icon: "network",
      title: "Departmanlar arası akış kopukluğu",
      description:
        "Aynı iş farklı ekiplerde farklı yöntemlerle ilerlediğinde gecikme, tekrar iş, hata ve iletişim yükü artar.",
    },
    {
      icon: "shield",
      title: "Yönetim görünürlüğünün zayıf olması",
      description:
        "Kurumsal süreç yönetimi kurulmadığında yönetim, darboğazları, riskleri ve gelişim alanlarını zamanında göremez.",
    },
  ],

  scope: {
    title: "Süreç yönetimi danışmanlığı kapsamında neler yapıyoruz?",
    description:
      "Süreç danışmanlık yaklaşımımız; mevcut yapıyı anlamak, süreçleri görünür hale getirmek, süreç odaklı yönetim çerçevesi kurmak ve yönetimin karar almasını kolaylaştıracak bir sistem oluşturmak üzerine kuruludur. Buradaki hedef yalnızca belge üretmek değil; süreçlerle yönetim kültürünü destekleyen uygulanabilir bir yapı oluşturmaktır.",
  },

  serviceBlocks: [
    {
      icon: "clipboard",
      title: "Mevcut süreç yapısının değerlendirilmesi",
      description:
        "Mevcut işleyişi, fiili akışları, onay noktalarını, karar alanlarını ve süreçte oluşan kırılmaları analiz ederiz.",
    },
    {
      icon: "workflow",
      title: "Süreç envanteri oluşturulması",
      description:
        "Ana süreçler, alt süreçler ve destekleyici akışlar netleştirilir; organizasyon ve süreç yönetimi zemini görünür hale getirilir.",
    },
    {
      icon: "network",
      title: "Süreç sahipliği ve sorumluluk matrisi",
      description:
        "Kim karar verir, kim yürütür, kim kontrol eder ve kim onaylar sorularını netleştirerek rol karmaşasını azaltırız.",
    },
    {
      icon: "target",
      title: "Kurumsal süreç yönetim sistemi kurulumu",
      description:
        "İşletmede süreçlerle yönetim yaklaşımını destekleyecek temel yönetim çerçevesini ve sürdürülebilir çalışma modelini oluştururuz.",
    },
    {
      icon: "chart",
      title: "Ölçülebilir süreç yaklaşımı",
      description:
        "Süreç performansını izlemeye uygun KPI mantığı, değerlendirme alanları ve gelişim öncelikleri belirlenir.",
    },
  ],

  detailSections: [
    {
      title: "Mevcut süreç yapısının değerlendirilmesi",
      description1:
        "İlk adımda işletmenin bugün nasıl çalıştığını anlamaya odaklanırız. Yazılı prosedür ile gerçek hayatın aynı olup olmadığını, işlerin kimler üzerinden yürüdüğünü, onayların nerede geciktiğini, hangi alanlarda tekrar iş oluştuğunu ve nerelerde kontrol zafiyeti bulunduğunu değerlendiririz.",
      description2:
        "Bu değerlendirme, kurumsal süreç yönetimi yolculuğunun temelidir. Çünkü doğru süreç tasarımı, ancak gerçek mevcut durum doğru görüldüğünde yapılabilir.",
    },
    {
      title: "Süreç envanteri oluşturulması",
      description1:
        "Süreç envanteri, işletmede yürüyen ana süreçlerin, alt süreçlerin, destek süreçlerinin ve kritik temas noktalarının görünür hale getirilmesidir. Bu yapı olmadan iş süreç yönetimi dağınık kalır.",
      description2:
        "Süreç envanteri sayesinde organizasyon ve süreç yönetimi aynı çatı altında daha net okunur; yönetim, hangi süreçlerin kritik olduğunu, hangi süreçlerin yeniden ele alınması gerektiğini daha kolay görür.",
    },
    {
      title: "Süreç sahipliği ve sorumluluk matrisi",
      description1:
        "Süreç yönetiminin en kritik problemlerinden biri, işin kimin sahibi olduğunun net olmamasıdır. Süreç sahipliği ve sorumluluk matrisi ile yürütme, karar alma, kontrol ve onay sorumluluklarını görünür hale getiririz.",
      description2:
        "Böylece hem rol çatışmaları azalır hem de süreç bazlı yönetim yaklaşımı somut bir yapıya kavuşur. Bu adım, süreç odaklı yönetim kültürünün işletmede yerleşmesi için belirleyicidir.",
    },
    {
      title: "Kurumsal süreç yönetim sistemi kurulumu",
      description1:
        "Kurumsal süreç yönetim sistemi, şirketin işleri kişisel deneyimle değil tanımlı süreç mantığıyla yönetmesini sağlayan çerçevedir. Burada amaç ağır bir teorik yapı kurmak değil; işletmenin ölçeğine uygun, sade, sürdürülebilir ve karar destekleyici bir sistem kurmaktır.",
      description2:
        "Bu sistem; süreç hiyerarşisini, sahiplik yapısını, temel izleme mantığını, iyileştirme önceliklerini ve gerektiğinde yazılım destekli takibi birlikte ele alır.",
    },
  ],

  measurable: {
    title: "Ölçülebilir süreç yaklaşımı",
    description1:
      "Ölçemediğiniz süreci yönetmek zordur. Bu nedenle süreç yönetimi danışmanlığı içinde yalnızca mevcut akışı tanımlamakla kalmayız; hangi alanların izlenmesi gerektiğini ve hangi süreçlerde performans mantığının kurulacağını da netleştiririz.",
    description2:
      "Ölçülebilir süreç yaklaşımı; yönetimin öncelikleri görmesini, süreç iyileştirme çalışmalarının takip edilmesini ve zaman içinde daha veri temelli karar alınmasını destekler.",
    outputsTitle: "Bu hizmetin tipik çıktıları",
    outputs: [
      "Mevcut süreç yapısına ilişkin değerlendirme",
      "Süreç envanteri ve süreç hiyerarşisi",
      "Süreç sahipliği ve sorumluluk yapısı",
      "Darboğaz, tekrar iş ve kontrol zafiyetleri listesi",
      "Öncelikli iyileştirme alanları",
      "Ölçülebilir süreç yaklaşımı için yol haritası",
    ],
  },

  fit: {
    title: "Kimler için uygundur?",
    description:
      "Bu hizmet; şirketini daha görünür, daha düzenli ve daha yönetilebilir hale getirmek isteyen yapılar için uygundur. Özellikle iş süreç yönetimi yapısını kurmak, süreçlerle yönetim yaklaşımına geçmek ve gelecekteki yazılım yatırımlarını daha sağlam zemine oturtmak isteyen işletmeler için güçlü sonuç üretir.",
    items: [
      "Büyüyen ve operasyonu karmaşıklaşan şirketler",
      "ERP öncesi hazırlık yapmak isteyen firmalar",
      "Departmanlar arası koordinasyon problemi yaşayan yapılar",
      "Süreç sahipliği ve rol dağılımını netleştirmek isteyen kurumlar",
      "Dijital dönüşüm öncesinde mevcut durumunu görünür hale getirmek isteyen işletmeler",
    ],
  },

  tage: {
    title: "Tage Yazılım yaklaşımı",
    description1:
      "Tage Yazılım bu alana yalnızca teorik süreç danışmanlık bakışıyla yaklaşmaz. Danışmanlık, yazılım ve eğitim boyutunu birlikte ele alır. Bu sayede ortaya sadece analiz raporu değil; uygulanabilir, yönetilebilir ve gerektiğinde dijital araçlarla desteklenebilir bir yapı çıkar.",
    description2:
      "Bu yaklaşım, kurumsal süreç yönetimi ile dijitalleşme arasında net köprü kurar. Süreç görünürlüğü, ölçülebilirlik, aksiyon takibi ve yeniden değerlendirme mantığı bu köprünün temel parçalarıdır.",
    sadiBadge: "Sadi bağlantısı",
    sadiTitle: "Danışmanlıktan ölçülebilir yapıya geçiş",
    sadiDescription:
      "Süreç yönetimi danışmanlığı ile netleşen yapı, gerektiğinde Sadi ile daha görünür ve takip edilebilir hale getirilebilir. Böylece şirket; süreçlerini sadece tanımlamakla kalmaz, gelişim alanlarını izleyebilir, riskleri daha erken görebilir ve yeniden ölçüm mantığı kurabilir.",
    sadiButton: "Sadi’yi İncele",
    aboutButton: "Neden Tage Yazılım?",
  },

  faq: {
    title: "Sık sorulan sorular",
    description:
      "Aşağıdaki kısa cevaplar, hem kullanıcıların hızlı bilgi almasına hem de sayfanın answer engine ve AI aramaları için daha net okunmasına yardımcı olur.",
    items: [
      {
        question: "Süreç yönetimi danışmanlığı nedir?",
        answer:
          "Süreç yönetimi danışmanlığı, bir işletmede işlerin nasıl yürüdüğünü görünür hale getiren, süreçleri tanımlayan, sahiplik ve sorumlulukları netleştiren ve daha ölçülebilir bir yönetim yapısı kuran danışmanlık hizmetidir.",
      },
      {
        question: "Kurumsal süreç yönetimi neden önemlidir?",
        answer:
          "Kurumsal süreç yönetimi; kişiye bağlı işleyişi azaltır, departmanlar arası akışı netleştirir, yönetim görünürlüğünü artırır ve büyüme, ERP, kalite ve dijital dönüşüm çalışmalarına daha sağlam bir zemin oluşturur.",
      },
      {
        question: "İş süreç yönetimi ile ERP ilişkisi nedir?",
        answer:
          "ERP projeleri, tanımlı ve olgun iş süreç yönetimi yapısı üzerine kurulduğunda daha sağlıklı ilerler. Süreçler net değilse yazılım yatırımı beklenen verimi üretmekte zorlanır.",
      },
      {
        question: "Süreç envanteri nedir?",
        answer:
          "Süreç envanteri, işletmede yürüyen ana süreçleri, alt süreçleri ve bunların ilişkilerini gösteren yapıdır. Kurumsal süreç yönetimi için temel görünürlük araçlarından biridir.",
      },
      {
        question: "Tage Yazılım bu hizmeti nasıl ele alıyor?",
        answer:
          "Tage Yazılım, danışmanlık yaklaşımını yalnızca analizle sınırlamaz; süreç görünürlüğü, ölçümleme, iyileştirme ve gerektiğinde Sadi ile yazılım destekli takip mantığını birlikte ele alır.",
      },
    ],
  },

  cta: {
    title: "Süreç bazlı yönetim yapınızı birlikte kuralım",
    description:
      "Şirketinizde süreç yönetimi, kurumsal süreç yönetimi ve ölçülebilir iş süreç yönetimi yapısını netleştirmek için bizimle iletişime geçin.",
    primaryButton: "İletişime Geçin",
    secondaryButton: "Hizmetler Sayfasına Dön",
  },

  schema: {
    serviceName: "Süreç Yönetimi Danışmanlığı",
    serviceType: "Kurumsal Süreç Yönetimi ve İş Süreç Yönetimi Danışmanlığı",
    serviceDescription:
      "Süreç yönetimi danışmanlığı ile işletmelerde süreç yönetimi yaklaşımını kurmak, süreç envanteri oluşturmak, süreç sahipliği ve sorumluluk yapısını netleştirmek ve ölçülebilir süreç yaklaşımı geliştirmek için sunulan hizmet.",
  },
} as const;

const en = {
  meta: {
    title:
      "Process Management Consulting | Enterprise Process Management | Tage Yazılım",
    description:
      "Make your business process management structure visible, measurable, and sustainable with process management consulting. Enterprise process management by Tage Yazılım.",
    keywords: [
      "process management",
      "enterprise process management",
      "business process management",
      "organization and process management",
      "process management in businesses",
      "process consulting",
      "process-oriented management",
      "management by processes",
      "process management consulting",
      "process inventory",
      "process ownership",
      "responsibility matrix",
      "measurable process approach",
    ],
    ogDescription:
      "Consulting service to establish a process management approach in businesses, create a process inventory, and build a measurable process structure.",
    twitterDescription:
      "A consulting approach for enterprise process management, business process management, and process-oriented management.",
  },

  breadcrumb: {
    home: "Home",
    services: "Services",
    current: "Process Management Consulting",
  },

  hero: {
    badge: "Our Services",
    title: "Process Management Consulting",
    description1:
      "Process management consulting is a corporate approach that makes how work is carried out visible, clarifies roles, standardizes flows, and improves management visibility.",
    description2:
      "At Tage Yazılım, we address enterprise process management, business process management, organization and process management, process-oriented management, and management by processes together. Our goal is not merely to draw flows, but to make the process management structure in businesses more visible, measurable, and sustainable.",
    primaryButton: "Request a Meeting",
    secondaryButton: "View All Services",
    summaryTitle: "Focus of this page",
    summaryHeading: "Building a process-based management structure in companies",
    summaryText:
      "Clarifying the current structure, creating a process inventory, defining process ownership and responsibility matrices, and establishing a measurable process approach.",
    summaryItems: [
      "Enterprise process management approach",
      "Process inventory and visibility",
      "Process ownership and responsibility matrix",
      "Measurable process approach",
    ],
  },

  intro: {
    title: "What is process management and why is it a critical management approach?",
    description1:
      "Process management is the management discipline that makes visible which steps work follows in a business, which role carries which responsibility, which control points are critical, and which bottlenecks affect performance. This approach transforms process management in businesses from being person-dependent into a corporate structure.",
    description2:
      "In companies where enterprise process management is weak, decision-making slows down, processes vary from team to team, rework increases, and digital transformation investments struggle to find a strong foundation. For this reason, business process management is not only an operational efficiency issue; it is also about growth, quality, ERP readiness, and institutionalization.",
  },

  painPoints: [
    {
      icon: "workflow",
      title: "Work progressing depending on individuals",
      description:
        "When processes are not documented, owned, and measurable, work is carried out through the experience of specific individuals. This weakens sustainability.",
    },
    {
      icon: "network",
      title: "Disconnected interdepartmental flow",
      description:
        "When the same work progresses in different ways across teams, delays, rework, errors, and communication burden increase.",
    },
    {
      icon: "shield",
      title: "Weak management visibility",
      description:
        "When enterprise process management is not established, management cannot see bottlenecks, risks, and development areas in time.",
    },
  ],

  scope: {
    title: "What do we do within process management consulting?",
    description:
      "Our process consulting approach is built on understanding the current structure, making processes visible, establishing a process-oriented management framework, and creating a system that facilitates management decision-making. The goal here is not only to produce documents, but to create an applicable structure that supports a culture of management by processes.",
  },

  serviceBlocks: [
    {
      icon: "clipboard",
      title: "Assessment of the current process structure",
      description:
        "We analyze the current operation, actual flows, approval points, decision areas, and breakdowns occurring within processes.",
    },
    {
      icon: "workflow",
      title: "Creation of the process inventory",
      description:
        "Main processes, subprocesses, and supporting flows are clarified; the foundation of organization and process management becomes visible.",
    },
    {
      icon: "network",
      title: "Process ownership and responsibility matrix",
      description:
        "We reduce role confusion by clarifying who decides, who executes, who controls, and who approves.",
    },
    {
      icon: "target",
      title: "Establishing an enterprise process management system",
      description:
        "We create the basic management framework and sustainable operating model that supports a management-by-processes approach in the business.",
    },
    {
      icon: "chart",
      title: "Measurable process approach",
      description:
        "KPI logic, evaluation areas, and development priorities suitable for monitoring process performance are determined.",
    },
  ],

  detailSections: [
    {
      title: "Assessment of the current process structure",
      description1:
        "At the first step, we focus on understanding how the business operates today. We evaluate whether written procedures match real life, through whom work is carried out, where approvals are delayed, in which areas rework occurs, and where control weaknesses exist.",
      description2:
        "This assessment is the foundation of the enterprise process management journey. Because correct process design can only be made when the real current state is seen correctly.",
    },
    {
      title: "Creation of the process inventory",
      description1:
        "A process inventory is the visibility of the main processes, subprocesses, support processes, and critical touchpoints running in the business. Without this structure, business process management remains fragmented.",
      description2:
        "Thanks to the process inventory, organization and process management can be read more clearly under the same roof; management can more easily see which processes are critical and which need to be reconsidered.",
    },
    {
      title: "Process ownership and responsibility matrix",
      description1:
        "One of the most critical problems in process management is that ownership of the work is unclear. With the process ownership and responsibility matrix, we make execution, decision-making, control, and approval responsibilities visible.",
      description2:
        "This reduces role conflicts and gives the process-based management approach a concrete structure. This step is decisive for embedding a process-oriented management culture in the business.",
    },
    {
      title: "Establishing an enterprise process management system",
      description1:
        "An enterprise process management system is the framework that ensures the company manages work not through personal experience but through defined process logic. The goal is not to build a heavy theoretical structure, but to establish a simple, sustainable, and decision-supporting system appropriate to the scale of the business.",
      description2:
        "This system addresses the process hierarchy, ownership structure, core monitoring logic, improvement priorities, and when needed, software-supported tracking together.",
    },
  ],

  measurable: {
    title: "Measurable process approach",
    description1:
      "It is difficult to manage a process you cannot measure. Therefore, within process management consulting, we do not only define the current flow; we also clarify which areas should be monitored and in which processes performance logic should be established.",
    description2:
      "A measurable process approach supports management in seeing priorities, tracking improvement efforts, and making more data-driven decisions over time.",
    outputsTitle: "Typical outputs of this service",
    outputs: [
      "Assessment of the current process structure",
      "Process inventory and process hierarchy",
      "Process ownership and responsibility structure",
      "List of bottlenecks, rework, and control weaknesses",
      "Priority improvement areas",
      "Roadmap for a measurable process approach",
    ],
  },

  fit: {
    title: "Who is it suitable for?",
    description:
      "This service is suitable for organizations that want to make their company more visible, more organized, and more manageable. It delivers strong results especially for businesses that want to establish a business process management structure, transition to a management-by-processes approach, and place future software investments on a stronger foundation.",
    items: [
      "Companies growing and facing increasing operational complexity",
      "Firms wanting to prepare before ERP",
      "Structures experiencing interdepartmental coordination problems",
      "Organizations wanting to clarify process ownership and role distribution",
      "Businesses wanting to make their current state visible before digital transformation",
    ],
  },

  tage: {
    title: "The Tage Yazılım approach",
    description1:
      "Tage Yazılım does not approach this field only from a theoretical process consulting perspective. It addresses consulting, software, and training together. This way, what emerges is not just an analysis report, but a structure that is applicable, manageable, and when needed, supportable by digital tools.",
    description2:
      "This approach builds a clear bridge between enterprise process management and digitalization. Process visibility, measurability, action tracking, and reassessment logic are the core parts of this bridge.",
    sadiBadge: "Sadi connection",
    sadiTitle: "Transition from consulting to measurable structure",
    sadiDescription:
      "The structure clarified through process management consulting can, when needed, be made more visible and traceable with Sadi. Thus, the company not only defines its processes, but can also track development areas, see risks earlier, and establish a reassessment logic.",
    sadiButton: "Explore Sadi",
    aboutButton: "Why Tage Yazılım?",
  },

  faq: {
    title: "Frequently asked questions",
    description:
      "The short answers below help both users get quick information and make the page more clearly readable for answer engines and AI search.",
    items: [
      {
        question: "What is process management consulting?",
        answer:
          "Process management consulting is a service that makes how work is carried out in a business visible, defines processes, clarifies ownership and responsibilities, and establishes a more measurable management structure.",
      },
      {
        question: "Why is enterprise process management important?",
        answer:
          "Enterprise process management reduces person-dependent execution, clarifies interdepartmental flow, increases management visibility, and creates a stronger foundation for growth, ERP, quality, and digital transformation efforts.",
      },
      {
        question: "What is the relationship between business process management and ERP?",
        answer:
          "ERP projects progress more healthily when they are built on a defined and mature business process management structure. If processes are unclear, the software investment struggles to produce the expected efficiency.",
      },
      {
        question: "What is a process inventory?",
        answer:
          "A process inventory is the structure that shows the main processes, subprocesses, and their relationships in a business. It is one of the core visibility tools for enterprise process management.",
      },
      {
        question: "How does Tage Yazılım approach this service?",
        answer:
          "Tage Yazılım does not limit the consulting approach to analysis alone; it addresses process visibility, measurement, improvement, and, when needed, software-supported tracking with Sadi together.",
      },
    ],
  },

  cta: {
    title: "Let’s build your process-based management structure together",
    description:
      "Contact us to clarify the process management, enterprise process management, and measurable business process management structure in your company.",
    primaryButton: "Contact Us",
    secondaryButton: "Back to Services Page",
  },

  schema: {
    serviceName: "Process Management Consulting",
    serviceType:
      "Enterprise Process Management and Business Process Management Consulting",
    serviceDescription:
      "A service offered to establish a process management approach in businesses, create a process inventory, clarify process ownership and responsibility structures, and develop a measurable process approach through process management consulting.",
  },
} as const;

function getIcon(name: string) {
  if (name === "workflow") return Workflow;
  if (name === "network") return Network;
  if (name === "shield") return ShieldCheck;
  if (name === "clipboard") return ClipboardList;
  if (name === "target") return Target;
  return BarChart3;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params;

  if (lang !== "tr" && lang !== "en") {
    return {};
  }

  const copy = lang === "en" ? en : tr;
  const pagePath = `/${lang}/hizmetler/surec-yonetimi-danismanligi`;
  const pageUrl = `${SITE_URL}${pagePath}`;

  return {
    title: copy.meta.title,
    description: copy.meta.description,
    keywords: [...copy.meta.keywords],
    alternates: {
      canonical: pageUrl,
      languages: {
        tr: `${SITE_URL}/tr/hizmetler/surec-yonetimi-danismanligi`,
        en: `${SITE_URL}/en/hizmetler/surec-yonetimi-danismanligi`,
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

export default async function SurecYonetimiDanismanligiPage({
  params,
}: PageProps) {
  const { lang } = await params;

  if (lang !== "tr" && lang !== "en") {
    notFound();
  }

  const copy = lang === "en" ? en : tr;
  const withLang = (path: string) => `/${lang}${path}`;
  const pagePath = `/${lang}/hizmetler/surec-yonetimi-danismanligi`;
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
                  {copy.measurable.title}
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-700">
                  {copy.measurable.description1}
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  {copy.measurable.description2}
                </p>
              </div>

              <div className="rounded-[28px] border border-[#E6EDF5] bg-white p-6 md:p-8">
                <h3 className="text-xl font-semibold text-[#133E87]">
                  {copy.measurable.outputsTitle}
                </h3>

                <div className="mt-6 grid gap-4">
                  {copy.measurable.outputs.map((item) => (
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