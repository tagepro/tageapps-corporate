// app/[lang]/hizmetler/surec-analizi-ve-surec-modelleme/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  GitBranch,
  Network,
  ScanSearch,
  ShieldAlert,
  Spline,
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
      "Süreç Analizi ve Süreç Modelleme | İş Süreç Analizi | Tage Yazılım",
    description:
      "Süreç analizi ve süreç modelleme hizmeti ile mevcut işleyişi görünür hale getirin, darboğazları tespit edin ve BPMN tabanlı süreç modelleme yaklaşımı kurun.",
    keywords: [
      "süreç analiz",
      "surec analizi",
      "iş süreç analizi",
      "iş süreçleri analizi",
      "iş ve süreç analizi",
      "analiz süreçleri",
      "iş analizi süreçleri",
      "süreç analizi ve yönetimi",
      "süreç analizi örnekleri",
      "bpmn süreç modelleme",
      "bpm süreç yönetimi",
      "süreç modelleme",
      "süreç haritalama",
      "darboğaz tespiti",
      "mevcut durum analizi",
    ],
    ogDescription:
      "İş süreç analizi, süreç haritalama, darboğaz tespiti ve BPMN süreç modelleme yaklaşımı ile süreçlerinizi görünür hale getirin.",
    twitterDescription:
      "İş süreçleri analizi ve BPMN tabanlı süreç modelleme için kurumsal danışmanlık yaklaşımı.",
  },

  breadcrumb: {
    home: "Anasayfa",
    services: "Hizmetler",
    current: "Süreç Analizi ve Süreç Modelleme",
  },

  hero: {
    badge: "Hizmetlerimiz",
    title: "Süreç Analizi ve Süreç Modelleme",
    description1:
      "Süreç analizi ve süreç modelleme hizmeti, işletmedeki mevcut işleyişi görünür hale getirmek, ana süreç ve alt süreç yapısını netleştirmek, darboğazları tespit etmek ve süreci standart biçimde modellemek için kullanılır.",
    description2:
      "Tage Yazılım olarak süreç analiz, surec analizi, iş süreç analizi, iş süreçleri analizi, iş ve süreç analizi, süreç analizi ve yönetimi, BPMN süreç modelleme ve BPM süreç yönetimi başlıklarını birlikte ele alıyoruz. Amacımız, süreci sadece tarif etmek değil; yönetilebilir, anlaşılabilir ve geliştirilebilir hale getirmektir.",
    primaryButton: "Görüşme Talep Et",
    secondaryButton: "Tüm Hizmetleri Gör",
    summaryTitle: "Bu sayfanın odağı",
    summaryHeading: "Süreci görünür hale getirip standart şekilde modellemek",
    summaryText:
      "Mevcut durum analizi, süreç haritalama, ana süreç-alt süreç kurgusu, darboğaz ve risk tespiti ile BPMN tabanlı modelleme yaklaşımını birlikte ele almak.",
    summaryItems: [
      "Süreç haritalama",
      "Ana süreç-alt süreç kurgusu",
      "Darboğaz ve risk tespiti",
      "BPMN süreç modelleme yaklaşımı",
    ],
  },

  intro: {
    title: "Süreç analizi nedir ve neden gereklidir?",
    description1:
      "Süreç analizi, bir işin işletme içinde gerçekte nasıl ilerlediğini adım adım görmeyi sağlayan çalışmadır. İş süreç analizi sayesinde hangi işin kim tarafından yürütüldüğü, hangi noktada karar verildiği, hangi aşamada bekleme yaşandığı ve nerede kontrol riski oluştuğu görünür hale gelir.",
    description2:
      "İş süreçleri analizi yapılmadan yürüyen operasyonlarda çoğu sorun ancak sonuç ortaya çıktıktan sonra fark edilir. Oysa iş ve süreç analizi yaklaşımı ile mevcut durum erken görünür, süreçler daha net okunur ve iyileştirme için daha sağlam bir zemin oluşur.",
  },

  painPoints: [
    {
      icon: "scan",
      title: "Mevcut işleyişin görünür olmaması",
      description:
        "İşin gerçekte nasıl yürüdüğü net değilse iş süreç analizi sağlıklı yapılamaz; kararlar varsayımla alınır.",
    },
    {
      icon: "workflow",
      title: "Ana süreç ve alt süreçlerin dağınık kalması",
      description:
        "Ana süreç-alt süreç kurgusu netleşmediğinde organizasyon içindeki iş akışı parçalı görünür ve yönetim zorlaşır.",
    },
    {
      icon: "shield",
      title: "Darboğaz ve risklerin geç fark edilmesi",
      description:
        "Süreç analizi ve yönetimi yapılmadığında gecikmeler, tekrar işler ve kontrol zafiyetleri çoğu zaman geç görünür hale gelir.",
    },
  ],

  scope: {
    title: "Süreç analizi ve süreç modelleme kapsamında neler yapıyoruz?",
    description:
      "Bu hizmette amaç, yalnızca mevcut işleyişi tarif etmek değildir. Süreci görünür hale getirmek, analiz süreçleri içindeki kritik noktaları yakalamak, süreci daha net yapılandırmak ve paylaşılabilir bir model oluşturmaktır. İş analizi süreçleri ile süreç modellemeyi birlikte ele almak, yönetime daha net görünürlük sağlar.",
  },

  serviceBlocks: [
    {
      icon: "clipboard",
      title: "Mevcut durum analizi",
      description:
        "Süreçlerin fiilen nasıl ilerlediğini, karar ve onay noktalarını, gecikme alanlarını ve kritik kırılmaları analiz ederiz.",
    },
    {
      icon: "git",
      title: "Ana süreç alt süreç kurgusu",
      description:
        "Şirket içindeki işleyişi ana süreç, alt süreç ve destek süreçler olarak yapılandırarak daha okunabilir hale getiririz.",
    },
    {
      icon: "network",
      title: "Süreç haritalama",
      description:
        "Süreçlerin adımlarını, ilişkilerini ve geçiş noktalarını haritalayarak görünür bir süreç akışı oluştururuz.",
    },
    {
      icon: "shield",
      title: "Darboğaz ve risk tespiti",
      description:
        "Zaman kaybı, tekrar iş, kontrol eksikliği, bağımlılık ve aksama yaratan alanları tespit ederiz.",
    },
    {
      icon: "spline",
      title: "BPMN tabanlı modelleme yaklaşımı",
      description:
        "BPMN süreç modelleme veya benzeri yöntemlerle süreci daha standart, net ve paylaşılabilir hale getiririz.",
    },
    {
      icon: "chart",
      title: "Süreç analizi örnek kullanım alanları",
      description:
        "Satış, satın alma, üretim, kalite, lojistik, insan kaynakları ve destek süreçlerinde analiz ve modelleme yaklaşımını uygularız.",
    },
  ],

  detailSections: [
    {
      title: "Mevcut durum analizi",
      description1:
        "Mevcut durum analizi, sürecin kağıt üzerindeki tarifinden çok, gerçekte nasıl yürüdüğünü anlamaya odaklanır. İşin kimde başladığı, hangi adımlardan geçtiği, hangi onaylara uğradığı, nerede beklediği ve hangi istisnalarla karşılaştığı detaylı biçimde incelenir.",
      description2:
        "Bu sayede süreç analizi ve yönetimi için güçlü bir temel oluşur. İyileştirme önerileri ancak mevcut durum doğru anlaşıldığında gerçek karşılık üretir.",
    },
    {
      title: "Ana süreç alt süreç kurgusu",
      description1:
        "Ana süreç-alt süreç yapısı, işletmedeki işleyişin okunabilir hale gelmesini sağlar. Birçok kurumda iş akışları vardır; ancak bunlar çoğu zaman bütünsel çerçevede görülmez. Bu nedenle süreç ilişkileri kopuk görünür.",
      description2:
        "Ana süreç alt süreç kurgusu ile süreç hiyerarşisi netleşir, organizasyon içindeki işleyiş daha kolay yorumlanır ve modelleme çalışmaları daha sağlam zemine oturur.",
    },
    {
      title: "Süreç haritalama ve modelleme",
      description1:
        "Süreç haritalama, sürecin adımlarını ve bu adımlar arasındaki ilişkiyi görünür hale getirir. Böylece ekipler aynı sürece farklı gözle değil, ortak bir akış mantığıyla bakmaya başlar.",
      description2:
        "Süreç modelleme ise bu yapıyı daha standart, anlaşılır ve tekrar kullanılabilir hale getirir. Bu yaklaşım, özellikle ekipler arası iletişimde ve kurumsal hafıza oluşturmada ciddi değer üretir.",
    },
    {
      title: "Darboğaz ve risk tespiti",
      description1:
        "Süreç analizinde en kritik çıktılardan biri, darboğaz ve risklerin görünür hale gelmesidir. Bekleme süreleri, aşırı bağımlı adımlar, tekrar iş yaratan döngüler, kontrol eksikleri ve rol belirsizlikleri burada öne çıkar.",
      description2:
        "Darboğaz ve risk tespiti, yalnızca sorun listesi üretmek için değil; hangi alanlara öncelik verileceğini belirlemek için yapılır.",
    },
  ],

  bpmn: {
    title: "BPMN tabanlı modelleme yaklaşımı",
    description1:
      "BPMN süreç modelleme, süreçlerin daha standart semboller ve akış mantığıyla gösterilmesini sağlayan güçlü bir yaklaşımdır. Her kurumda zorunlu olarak sadece BPMN kullanılmasa da, BPMN mantığı süreçlerin daha net anlatılmasını ve ortak dil oluşmasını destekler.",
    description2:
      "BPM süreç yönetimi bakışında amaç, süreci sadece belgelemek değil; yönetilebilir, tartışılabilir ve geliştirilebilir hale getirmektir. Bu nedenle modelleme yaklaşımını işletmenin yapısına göre pragmatik biçimde ele alıyoruz.",
    outputsTitle: "Bu hizmetin tipik çıktıları",
    outputs: [
      "Mevcut durum analizi çıktısı",
      "Ana süreç-alt süreç yapısı",
      "Süreç haritaları ve akış görünürlüğü",
      "Darboğaz, bekleme ve risk alanları listesi",
      "BPMN veya benzeri standart modelleme yapısı",
      "İyileştirme ve önceliklendirme için temel zemin",
    ],
  },

  useCases: {
    title: "Süreç analizi örnek kullanım alanları",
    description:
      "Süreç analizi örnekleri birçok sektörde ve farklı operasyon tiplerinde uygulanabilir. Burada önemli olan, sürecin teorik olarak değil, işletmenin gerçek çalışma biçimi üzerinden ele alınmasıdır.",
    items: [
      "Satış tekliften siparişe süreçleri",
      "Satın alma ve tedarikçi yönetimi akışları",
      "Üretim planlama ve operasyon süreçleri",
      "Kalite kontrol ve onay mekanizmaları",
      "Depo, sevkiyat ve lojistik süreçleri",
      "İnsan kaynakları işe alım ve onay akışları",
      "ERP öncesi süreç hazırlık çalışmaları",
      "Dijital dönüşüm öncesi mevcut durum netleştirme",
    ],
  },

  fit: {
    title: "Kimler için uygundur?",
    description:
      "Bu hizmet; süreçlerini sadece tarif etmek değil, sistematik biçimde anlamak ve modellemek isteyen kurumlar için uygundur. Özellikle iş süreç analizi ihtiyacı olan, BPMN süreç modelleme yaklaşımına geçmek isteyen veya yazılım öncesi mevcut işleyişini netleştirmek isteyen yapılar için yüksek değer üretir.",
    items: [
      "İş süreçlerini görünür hale getirmek isteyen şirketler",
      "ERP ya da yazılım yatırımı öncesi hazırlık yapan firmalar",
      "Süreçlerde gecikme, tekrar iş ve rol karmaşası yaşayan yapılar",
      "BPMN süreç modelleme veya standart süreç haritalama ihtiyacı olan kurumlar",
      "Süreç analizi örnekleri üzerinden kendi işleyişini netleştirmek isteyen ekipler",
    ],
  },

  tage: {
    title: "Tage Yazılım yaklaşımı",
    description1:
      "Tage Yazılım süreç analizi ve süreç modelleme çalışmalarını yalnızca çizim üretme işi olarak ele almaz. Amaç, işleyişi görünür hale getirmek, sorunlu alanları netleştirmek ve yönetimin karar verebileceği bir zemin oluşturmaktır.",
    description2:
      "Bu nedenle analiz süreçleri, süreç haritalama, BPMN tabanlı modelleme ve iyileştirme mantığını birlikte ele alıyoruz. Çıkan yapı, gerektiğinde dijitalleşme ve yazılım tarafına da bağlanabilir hale gelir.",
    sadiBadge: "Sadi bağlantısı",
    sadiTitle: "Analizden ölçülebilir yapıya geçiş",
    sadiDescription:
      "Süreç analizi ve süreç modelleme ile netleşen yapı, gerektiğinde Sadi ile daha izlenebilir hale getirilebilir. Böylece şirket sadece süreci tanımlamaz; gelişim alanlarını, riskleri ve yeniden değerlendirme ihtiyaçlarını da daha görünür şekilde takip edebilir.",
    sadiButton: "Sadi’yi İncele",
    aboutButton: "Neden Tage Yazılım?",
  },

  faq: {
    title: "Sık sorulan sorular",
    description:
      "Aşağıdaki kısa cevaplar, hem kullanıcıların hızlı bilgi almasına hem de sayfanın answer engine ve AI aramaları için daha net okunmasına yardımcı olur.",
    items: [
      {
        question: "Süreç analizi nedir?",
        answer:
          "Süreç analizi, bir işin gerçekte hangi adımlarla yürüdüğünü, hangi rollerin sürece dahil olduğunu, hangi karar ve kontrol noktalarının kritik olduğunu ve nerelerde darboğaz oluştuğunu ortaya çıkaran çalışmadır.",
      },
      {
        question: "İş süreç analizi ile süreç modelleme arasındaki fark nedir?",
        answer:
          "İş süreç analizi mevcut işleyişi anlamaya odaklanır. Süreç modelleme ise bu işleyişin görsel, standart ve paylaşılabilir biçimde ifade edilmesini sağlar. İkisi birlikte kullanıldığında daha güçlü sonuç üretir.",
      },
      {
        question: "BPMN süreç modelleme nedir?",
        answer:
          "BPMN süreç modelleme, süreçlerin ortak semboller ve akış mantığıyla daha standart şekilde gösterilmesini sağlayan modelleme yaklaşımıdır. Böylece süreçler ekipler arasında daha kolay anlaşılır hale gelir.",
      },
      {
        question: "Süreç analizi örnekleri hangi alanlarda uygulanır?",
        answer:
          "Süreç analizi örnekleri satış, satın alma, üretim, kalite, lojistik, finans, insan kaynakları ve destek süreçleri gibi birçok alanda uygulanabilir.",
      },
      {
        question: "Tage Yazılım bu hizmette nasıl çalışır?",
        answer:
          "Tage Yazılım, mevcut durum analizi, süreç haritalama, ana süreç-alt süreç kurgusu, darboğaz ve risk tespiti ile BPMN benzeri modelleme yaklaşımını birlikte ele alır. İhtiyaca göre bunu Sadi ile ölçülebilir yapıya bağlayabilir.",
      },
    ],
  },

  cta: {
    title: "Süreçlerinizi görünür hale getirelim ve birlikte modelleyelim",
    description:
      "İş süreç analizi, süreç haritalama ve BPMN süreç modelleme yaklaşımı ile mevcut işleyişinizi netleştirmek için bizimle iletişime geçin.",
    primaryButton: "İletişime Geçin",
    secondaryButton: "Hizmetler Sayfasına Dön",
  },

  schema: {
    serviceName: "Süreç Analizi ve Süreç Modelleme",
    serviceType: "İş Süreç Analizi ve BPMN Süreç Modelleme Hizmeti",
    serviceDescription:
      "Süreç analizi ve süreç modelleme hizmeti ile mevcut işleyişin görünür hale getirilmesi, ana süreç-alt süreç yapısının çıkarılması, darboğaz ve risklerin tespiti ve BPMN tabanlı modelleme yaklaşımının kurulması.",
  },
} as const;

const en = {
  meta: {
    title:
      "Process Analysis and Process Modeling | Business Process Analysis | Tage Yazılım",
    description:
      "Make your current operations visible, identify bottlenecks, and establish a BPMN-based process modeling approach with our process analysis and process modeling service.",
    keywords: [
      "process analysis",
      "business process analysis",
      "business processes analysis",
      "business and process analysis",
      "analysis processes",
      "business analysis processes",
      "process analysis and management",
      "process analysis examples",
      "bpmn process modeling",
      "bpm process management",
      "process modeling",
      "process mapping",
      "bottleneck detection",
      "current state analysis",
    ],
    ogDescription:
      "Make your processes visible through business process analysis, process mapping, bottleneck detection, and a BPMN-based process modeling approach.",
    twitterDescription:
      "An enterprise consulting approach for business process analysis and BPMN-based process modeling.",
  },

  breadcrumb: {
    home: "Home",
    services: "Services",
    current: "Process Analysis and Process Modeling",
  },

  hero: {
    badge: "Our Services",
    title: "Process Analysis and Process Modeling",
    description1:
      "The process analysis and process modeling service is used to make the current operation visible, clarify the main process and subprocess structure, identify bottlenecks, and model the process in a standard form.",
    description2:
      "At Tage Yazılım, we address process analysis, business process analysis, business processes analysis, business and process analysis, process analysis and management, BPMN process modeling, and BPM process management together. Our goal is not only to describe the process, but to make it manageable, understandable, and improvable.",
    primaryButton: "Request a Meeting",
    secondaryButton: "View All Services",
    summaryTitle: "Focus of this page",
    summaryHeading: "Making the process visible and modeling it in a standard way",
    summaryText:
      "Addressing current state analysis, process mapping, main process-subprocess structure, bottleneck and risk detection, and BPMN-based modeling together.",
    summaryItems: [
      "Process mapping",
      "Main process-subprocess structure",
      "Bottleneck and risk detection",
      "BPMN process modeling approach",
    ],
  },

  intro: {
    title: "What is process analysis and why is it necessary?",
    description1:
      "Process analysis is a study that enables you to see step by step how a task actually progresses within the business. Through business process analysis, it becomes visible who performs which work, where decisions are made, at which stage waiting occurs, and where control risks arise.",
    description2:
      "In operations running without business processes analysis, many issues are noticed only after the result appears. However, with a business and process analysis approach, the current state becomes visible earlier, processes are read more clearly, and a stronger basis for improvement is formed.",
  },

  painPoints: [
    {
      icon: "scan",
      title: "The current operation is not visible",
      description:
        "If it is not clear how work is actually carried out, business process analysis cannot be done properly and decisions are made based on assumptions.",
    },
    {
      icon: "workflow",
      title: "Main processes and subprocesses remain fragmented",
      description:
        "When the main process-subprocess structure is not clarified, the workflow within the organization appears fragmented and management becomes harder.",
    },
    {
      icon: "shield",
      title: "Bottlenecks and risks are noticed too late",
      description:
        "When process analysis and management are not performed, delays, rework, and control weaknesses often become visible too late.",
    },
  ],

  scope: {
    title: "What do we do within process analysis and process modeling?",
    description:
      "The aim of this service is not merely to describe the current operation. It is to make the process visible, capture critical points within analysis processes, structure the process more clearly, and create a shareable model. Addressing business analysis processes together with process modeling provides management with clearer visibility.",
  },

  serviceBlocks: [
    {
      icon: "clipboard",
      title: "Current state analysis",
      description:
        "We analyze how processes actually progress, decision and approval points, delay areas, and critical breakdowns.",
    },
    {
      icon: "git",
      title: "Main process-subprocess structure",
      description:
        "We make internal operations more readable by structuring them as main processes, subprocesses, and supporting processes.",
    },
    {
      icon: "network",
      title: "Process mapping",
      description:
        "We create a visible process flow by mapping process steps, relationships, and transition points.",
    },
    {
      icon: "shield",
      title: "Bottleneck and risk detection",
      description:
        "We identify areas that create time loss, rework, lack of control, dependency, and disruption.",
    },
    {
      icon: "spline",
      title: "BPMN-based modeling approach",
      description:
        "We make the process more standard, clear, and shareable through BPMN process modeling or similar methods.",
    },
    {
      icon: "chart",
      title: "Typical use cases for process analysis",
      description:
        "We apply the analysis and modeling approach in sales, procurement, production, quality, logistics, human resources, and support processes.",
    },
  ],

  detailSections: [
    {
      title: "Current state analysis",
      description1:
        "Current state analysis focuses not on the written description of the process, but on understanding how it actually works. It examines in detail where work starts, which steps it passes through, which approvals it goes through, where it waits, and which exceptions it encounters.",
      description2:
        "This creates a strong foundation for process analysis and management. Improvement suggestions can only produce real value when the current state is understood correctly.",
    },
    {
      title: "Main process-subprocess structure",
      description1:
        "The main process-subprocess structure makes the operation within the business readable. Many organizations have workflows, but these are often not seen within a holistic framework. Therefore, process relationships appear disconnected.",
      description2:
        "With the main process-subprocess structure, the process hierarchy becomes clear, operations within the organization are interpreted more easily, and modeling efforts rest on a stronger foundation.",
    },
    {
      title: "Process mapping and modeling",
      description1:
        "Process mapping makes the steps of the process and the relationships between those steps visible. Thus, teams begin to look at the same process not from different perspectives, but with a common flow logic.",
      description2:
        "Process modeling then makes this structure more standard, understandable, and reusable. This approach creates significant value especially in inter-team communication and in building organizational memory.",
    },
    {
      title: "Bottleneck and risk detection",
      description1:
        "One of the most critical outputs of process analysis is the visibility of bottlenecks and risks. Waiting times, overly dependent steps, loops creating rework, control deficiencies, and role ambiguities come to the fore here.",
      description2:
        "Bottleneck and risk detection is not done only to generate a list of problems, but to determine which areas should be prioritized.",
    },
  ],

  bpmn: {
    title: "BPMN-based modeling approach",
    description1:
      "BPMN process modeling is a powerful approach that enables processes to be shown through more standard symbols and flow logic. Even if every organization does not exclusively use BPMN, BPMN logic supports processes being explained more clearly and helps build a common language.",
    description2:
      "In the BPM process management perspective, the aim is not only to document the process, but to make it manageable, discussable, and improvable. Therefore, we handle the modeling approach pragmatically according to the structure of the business.",
    outputsTitle: "Typical outputs of this service",
    outputs: [
      "Current state analysis output",
      "Main process-subprocess structure",
      "Process maps and flow visibility",
      "List of bottlenecks, waiting points, and risk areas",
      "BPMN or similar standard modeling structure",
      "A foundation for improvement and prioritization",
    ],
  },

  useCases: {
    title: "Typical use cases for process analysis",
    description:
      "Process analysis examples can be applied in many sectors and different types of operations. What matters here is that the process is addressed not theoretically, but based on the real way the business operates.",
    items: [
      "Sales processes from quotation to order",
      "Procurement and supplier management flows",
      "Production planning and operational processes",
      "Quality control and approval mechanisms",
      "Warehouse, shipment, and logistics processes",
      "HR recruitment and approval flows",
      "Pre-ERP process readiness studies",
      "Clarifying the current state before digital transformation",
    ],
  },

  fit: {
    title: "Who is it suitable for?",
    description:
      "This service is suitable for organizations that want not only to describe their processes, but to understand and model them systematically. It creates high value especially for structures needing business process analysis, wanting to move to a BPMN process modeling approach, or wishing to clarify their current operation before software investment.",
    items: [
      "Companies wanting to make business processes visible",
      "Firms preparing before ERP or software investments",
      "Structures experiencing delays, rework, and role confusion in processes",
      "Organizations needing BPMN process modeling or standard process mapping",
      "Teams wanting to clarify their own operation through process analysis examples",
    ],
  },

  tage: {
    title: "The Tage Yazılım approach",
    description1:
      "Tage Yazılım does not treat process analysis and process modeling merely as drawing production. The purpose is to make the operation visible, clarify problem areas, and create a basis on which management can make decisions.",
    description2:
      "For this reason, we handle analysis processes, process mapping, BPMN-based modeling, and improvement logic together. The resulting structure can, when needed, also be connected to digitalization and software.",
    sadiBadge: "Sadi connection",
    sadiTitle: "Transition from analysis to a measurable structure",
    sadiDescription:
      "The structure clarified through process analysis and process modeling can, when needed, be made more traceable with Sadi. Thus, the company not only defines the process, but can also track development areas, risks, and reassessment needs more visibly.",
    sadiButton: "Explore Sadi",
    aboutButton: "Why Tage Yazılım?",
  },

  faq: {
    title: "Frequently asked questions",
    description:
      "The short answers below help users get quick information and also make the page easier to read for answer engines and AI search.",
    items: [
      {
        question: "What is process analysis?",
        answer:
          "Process analysis is the study that reveals which steps a job actually goes through, which roles are involved, which decision and control points are critical, and where bottlenecks occur.",
      },
      {
        question: "What is the difference between business process analysis and process modeling?",
        answer:
          "Business process analysis focuses on understanding the current operation. Process modeling, on the other hand, expresses that operation in a visual, standard, and shareable form. When used together, they produce stronger results.",
      },
      {
        question: "What is BPMN process modeling?",
        answer:
          "BPMN process modeling is a modeling approach that enables processes to be represented in a more standard way through common symbols and flow logic. This makes processes easier to understand across teams.",
      },
      {
        question: "In which areas can process analysis examples be applied?",
        answer:
          "Process analysis examples can be applied in many areas such as sales, procurement, production, quality, logistics, finance, human resources, and support processes.",
      },
      {
        question: "How does Tage Yazılım work in this service?",
        answer:
          "Tage Yazılım addresses current state analysis, process mapping, main process-subprocess structure, bottleneck and risk detection, and a BPMN-like modeling approach together. Depending on the need, it can connect this to a measurable structure with Sadi.",
      },
    ],
  },

  cta: {
    title: "Let’s make your processes visible and model them together",
    description:
      "Contact us to clarify your current operation through business process analysis, process mapping, and a BPMN process modeling approach.",
    primaryButton: "Contact Us",
    secondaryButton: "Back to Services Page",
  },

  schema: {
    serviceName: "Process Analysis and Process Modeling",
    serviceType: "Business Process Analysis and BPMN Process Modeling Service",
    serviceDescription:
      "A service for making the current operation visible through process analysis and process modeling, extracting the main process-subprocess structure, identifying bottlenecks and risks, and establishing a BPMN-based modeling approach.",
  },
} as const;

function getIcon(name: string) {
  if (name === "scan") return ScanSearch;
  if (name === "workflow") return Workflow;
  if (name === "shield") return ShieldAlert;
  if (name === "clipboard") return ClipboardList;
  if (name === "git") return GitBranch;
  if (name === "network") return Network;
  if (name === "spline") return Spline;
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
  const pagePath = `/${lang}/hizmetler/surec-analizi-ve-surec-modelleme`;
  const pageUrl = `${SITE_URL}${pagePath}`;

  return {
    title: copy.meta.title,
    description: copy.meta.description,
    keywords: [...copy.meta.keywords],
    alternates: {
      canonical: pageUrl,
      languages: {
        tr: `${SITE_URL}/tr/hizmetler/surec-analizi-ve-surec-modelleme`,
        en: `${SITE_URL}/en/hizmetler/surec-analizi-ve-surec-modelleme`,
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

export default async function SurecAnaliziVeSurecModellemePage({
  params,
}: PageProps) {
  const { lang } = await params;

  if (lang !== "tr" && lang !== "en") {
    notFound();
  }

  const copy = lang === "en" ? en : tr;
  const withLang = (path: string) => `/${lang}${path}`;
  const pagePath = `/${lang}/hizmetler/surec-analizi-ve-surec-modelleme`;
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
                  {copy.bpmn.title}
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-700">
                  {copy.bpmn.description1}
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  {copy.bpmn.description2}
                </p>
              </div>

              <div className="rounded-[28px] border border-[#E6EDF5] bg-white p-6 md:p-8">
                <h3 className="text-xl font-semibold text-[#133E87]">
                  {copy.bpmn.outputsTitle}
                </h3>

                <div className="mt-6 grid gap-4">
                  {copy.bpmn.outputs.map((item) => (
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
                {copy.useCases.title}
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-700">
                {copy.useCases.description}
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {copy.useCases.items.map((item) => (
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