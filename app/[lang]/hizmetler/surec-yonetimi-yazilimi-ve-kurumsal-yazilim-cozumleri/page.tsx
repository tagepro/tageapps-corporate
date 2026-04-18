// app/[lang]/hizmetler/surec-yonetimi-yazilimi-ve-kurumsal-yazilim-cozumleri/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  FileBarChart2,
  Gauge,
  LayoutGrid,
  MonitorSmartphone,
  Radar,
  ShieldCheck,
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
      "Süreç Yönetimi Yazılımı ve Kurumsal Yazılım Çözümleri | Tage Yazılım",
    description:
      "Süreç yönetimi yazılımı ile süreçlerinizi dijital ortamda izleyin, puanlayın, aksiyonları takip edin ve raporlayın. Kurumsal yazılım çözümleri için Tage Yazılım.",
    keywords: [
      "süreç yönetimi yazılımı",
      "süreç yönetim yazılımı",
      "süreç yazılımı",
      "yazılım süreç yönetimi",
      "süreç yönetim sistemi",
      "dijital dönüşüm yazılımları",
      "kurumsal yazılım çözümleri",
      "süreç takibi yazılımı",
      "süreç analizi yazılımı",
      "aksiyon takip yazılımı",
      "departman bazlı süreç yönetimi",
      "sadi süreç yönetimi yazılımı",
    ],
    ogDescription:
      "Süreçleri dijital ortamda izlemek, puanlamak, aksiyonları takip etmek ve raporlamak için süreç yönetimi yazılımı yaklaşımı.",
    twitterDescription:
      "Süreç yönetim sistemi ile süreçlerinizi daha görünür, ölçülebilir ve sürdürülebilir hale getirin.",
  },

  breadcrumb: {
    home: "Anasayfa",
    services: "Hizmetler",
    current: "Süreç Yönetimi Yazılımı ve Kurumsal Yazılım Çözümleri",
  },

  hero: {
    badge: "Hizmetlerimiz",
    title: "Süreç Yönetimi Yazılımı ve Kurumsal Yazılım Çözümleri",
    description1:
      "Süreç yönetimi yazılımı, kurumsal süreçlerin yalnızca tanımlanmasını değil; dijital ortamda izlenmesini, puanlanmasını, aksiyonlarının takip edilmesini ve raporlanmasını sağlayan yapıdır.",
    description2:
      "Tage Yazılım olarak süreç yönetimi yazılımı, süreç yönetim yazılımı, süreç yazılımı, yazılım süreç yönetimi, süreç yönetim sistemi ve dijital dönüşüm yazılımları başlıklarında ürün odaklı çözümler geliştiriyoruz. Bu sayfada odak, danışmanlıktan çok yazılımın süreçleri nasıl görünür ve sürdürülebilir hale getirdiğidir.",
    primaryButton: "Sadi’yi İncele",
    secondaryButton: "Demo / Görüşme Talep Et",
    summaryTitle: "Bu sayfanın odağı",
    summaryHeading: "Süreçleri yazılım ile yönetilebilir hale getirmek",
    summaryText:
      "Dijital izleme, puanlama, aksiyon takibi, raporlama, departman bazlı yapı ve Sadi ürün bağlantısı ile süreç yönetimini kalıcı hale getirmek.",
    summaryItems: [
      "Süreçlerin dijital ortamda izlenmesi",
      "Puanlama ve analiz altyapısı",
      "Aksiyon ve takip yapısı",
      "Departman bazlı yapı",
    ],
  },

  intro: {
    title: "Süreç yönetimi yazılımı neden kritik hale geldi?",
    description1:
      "Şirketler büyüdükçe süreçleri sözlü bilgiyle, Excel dosyalarıyla veya dağınık e-posta akışlarıyla yönetmek zorlaşır. Bu noktada süreç yönetimi yazılımı, kurumsal işleyişi daha görünür, daha izlenebilir ve daha ölçülebilir hale getirir.",
    description2:
      "Süreç yönetim sistemi olmayan yapılarda kararlar geç alınabilir, aksiyonlar kaybolabilir, departmanlar aynı veriyi farklı biçimde yorumlayabilir. Yazılım süreç yönetimi yaklaşımı ise bu dağınıklığı azaltır ve süreci yaşayan bir yapıya dönüştürür.",
  },

  painPoints: [
    {
      icon: "monitor",
      title: "Süreçlerin dijital ortamda izlenememesi",
      description:
        "Süreçler Excel, e-posta veya kişisel takip yöntemiyle yürüdüğünde görünürlük zayıflar ve yönetim gecikmeleri geç fark eder.",
    },
    {
      icon: "gauge",
      title: "Puanlama ve analiz altyapısının olmaması",
      description:
        "Süreçler tanımlansa bile ölçülmüyorsa gelişim seviyesi, riskler ve öncelikler somut biçimde görülemez.",
    },
    {
      icon: "clipboard",
      title: "Aksiyon ve takip yapısının dağınık kalması",
      description:
        "İyileştirme kararları alındığında bunların kimin tarafından, ne zaman ve hangi sonuçla takip edileceği netleşmeyebilir.",
    },
  ],

  scope: {
    title: "Süreç yönetimi yazılımı kapsamında hangi yapıları sunuyoruz?",
    description:
      "Buradaki yaklaşım, kurumsal süreçleri yalnızca belgelemek değil; yazılım üzerinde yaşayan, güncellenebilen, ölçülebilen ve raporlanabilen bir yapıya dönüştürmektir. Bu nedenle süreç yazılımı yaklaşımında görünürlük, analiz, takip ve yönetim katmanı birlikte ele alınır.",
  },

  solutionBlocks: [
    {
      icon: "monitor",
      title: "Süreçlerin dijital ortamda izlenmesi",
      description:
        "Süreçleri departman bazlı ve yapılandırılmış biçimde dijital ortamda izlenebilir hale getiririz.",
    },
    {
      icon: "chart",
      title: "Puanlama ve analiz altyapısı",
      description:
        "Süreçlerin mevcut durumunu, olgunluk seviyesini, risklerini ve gelişim alanlarını ölçülebilir yapıda ele alırız.",
    },
    {
      icon: "clipboard",
      title: "Aksiyon ve takip yapısı",
      description:
        "İyileştirme ve düzeltici faaliyetlerin sahipliğini, durumunu ve ilerleme takibini görünür hale getiririz.",
    },
    {
      icon: "report",
      title: "Raporlama",
      description:
        "Yönetim için daha okunabilir özetler, analiz çıktıları ve süreç görünürlüğü sağlayan raporlama yapısı sunarız.",
    },
    {
      icon: "layout",
      title: "Departman bazlı yapı",
      description:
        "Şirket, departman, süreç ve alt süreç bazlı kırılım ile kurumsal yapıyı daha sistematik biçimde ele alırız.",
    },
    {
      icon: "radar",
      title: "Sadi ürün bağlantısı",
      description:
        "Süreç yönetimi yazılımı yaklaşımını Sadi ile ürünleştirir; ölçüm, takip ve yeniden değerlendirme mantığını aynı zeminde toplarız.",
    },
  ],

  detailSections: [
    {
      title: "Süreçlerin dijital ortamda izlenmesi",
      description1:
        "Süreçlerin dijital ortamda izlenmesi, şirket içindeki işleyişin yalnızca tarif edilmesini değil; günlük kullanım içinde görünür kalmasını sağlar. Hangi süreç hangi departmanda yürür, hangi adımda hangi durum oluşur, hangi gelişim alanı önceliklidir gibi sorular yazılım üzerinden daha net takip edilir.",
      description2:
        "Bu yaklaşım özellikle kurumsal hafıza, yönetim görünürlüğü ve ekipler arası ortak dil oluşması açısından güçlü değer üretir.",
    },
    {
      title: "Puanlama ve analiz altyapısı",
      description1:
        "Süreç yönetim yazılımı yalnızca kayıt ekranı olmamalıdır. Güçlü bir süreç yönetim sistemi, süreçlerin mevcut durumunu yorumlanabilir hale getirecek puanlama ve analiz mantığı da sunmalıdır.",
      description2:
        "Bu sayede şirket sadece süreci görmekle kalmaz; risk seviyesini, gelişim durumunu ve öncelik alanlarını da daha somut biçimde değerlendirebilir.",
    },
    {
      title: "Aksiyon ve takip yapısı",
      description1:
        "İyileştirme kararlarının etkili olabilmesi için aksiyonların da yazılım içinde yaşaması gerekir. Aksiyon ve takip yapısı, hangi sürecin hangi gelişim ihtiyacı taşıdığını, kimin sorumlu olduğunu ve ilerlemenin hangi aşamada bulunduğunu görünür hale getirir.",
      description2:
        "Bu katman, süreç yazılımını pasif kayıt alanı olmaktan çıkarıp yönetim aracı haline getirir.",
    },
    {
      title: "Raporlama ve yönetim görünürlüğü",
      description1:
        "Kurumsal yazılım çözümlerinde raporlama, yöneticinin veriyi daha hızlı anlamasını sağlayan en kritik katmanlardan biridir. Süreçlerin durumu, puanları, riskleri ve aksiyonları uygun raporlama yapısı ile daha yönetilebilir hale gelir.",
      description2:
        "PDF ve Excel gibi çıktılarla desteklenen raporlama yaklaşımı, hem yönetim sunumlarında hem de operasyonel takipte kullanışlı zemin sunar.",
    },
  ],

  structure: {
    title: "Departman bazlı yapı",
    description1:
      "Şirketlerde süreçler tek parça değil; departman bazlı farklı işleyişler üzerinden yaşar. Bu nedenle süreç yönetimi yazılımı yaklaşımında departman bazlı yapı kritik önemdedir. Böylece her bölüm kendi süreçlerini yönetirken, yönetim bütün resmi de görebilir.",
    description2:
      "Bu yapı; şirket, birim, ana süreç, alt süreç ve kişi bazlı görünürlük sağlayarak daha kurumsal bir süreç yönetim sistemi zemini oluşturur.",
    featuresTitle: "Bu hizmetin tipik yazılım yetenekleri",
    features: [
      "Departman bazlı süreç yapısı",
      "Ana süreç ve alt süreç kurgusu",
      "Puanlama ve değerlendirme mantığı",
      "Risk görünürlüğü ve analiz altyapısı",
      "Aksiyon / DÖF takip yapısı",
      "PDF ve Excel raporlama yaklaşımı",
      "Yeniden ölçüm ve gelişim takibi",
      "Yönetim için daha görünür süreç yapısı",
    ],
  },

  sadiSection: {
    title: "Sadi ürün bağlantısı",
    description1:
      "Bu sayfa doğrudan Sadi’ye bağlanır. Çünkü Sadi, süreç yönetimi yazılımı yaklaşımının ürünleşmiş halidir. Süreçlerin dijital ortamda izlenmesi, puanlanması, risklerinin görülmesi, aksiyonlarının takip edilmesi ve raporlanması aynı platform içinde ele alınabilir.",
    description2:
      "Bu nedenle Sadi yalnızca bir ürün sayfası değil; aynı zamanda süreç yönetim sistemi ihtiyacına somut cevap veren kurumsal çözüm katmanıdır.",
    useCasesTitle: "Hangi kurumlar için uygundur?",
    useCasesDescription:
      "Süreç yönetimi yazılımı ihtiyacı; yalnızca büyük kurumlara özgü değildir. Süreç görünürlüğü, aksiyon takibi, departman bazlı yapı ve raporlama ihtiyacı olan birçok şirket için bu yapı ciddi değer üretir.",
    useCases: [
      "Süreç görünürlüğünü dijital ortama taşımak isteyen şirketler",
      "Departman bazlı süreç envanteri ve süreç takibi kurmak isteyen yapılar",
      "Süreç olgunluğu ve risk seviyesini puanlamak isteyen kurumlar",
      "İyileştirme aksiyonlarını yazılım üzerinden takip etmek isteyen ekipler",
      "ERP öncesi süreç verisini daha görünür hale getirmek isteyen firmalar",
      "Dijital dönüşüm yazılımları arasında süreç odaklı çözüm arayan yönetimler",
      "Raporlama ve yönetim görünürlüğü ihtiyacı duyan organizasyonlar",
      "Danışmanlık çıktısını sürdürülebilir yazılım yapısına dönüştürmek isteyen şirketler",
    ],
  },

  fit: {
    title: "Kimler için uygundur?",
    description:
      "Bu hizmet; süreçlerini sadece danışmanlık çıktısı olarak değil, yazılım ile yaşayan bir yapıya dönüştürmek isteyen şirketler için uygundur. Özellikle süreç yönetim sistemi kurmak, departman bazlı görünürlük sağlamak ve Sadi benzeri ürün odaklı çözüm aramak isteyen kurumlarda güçlü karşılık üretir.",
    items: [
      "Süreçlerini sadece tanımlamak değil, yazılım ile yönetmek isteyen şirketler",
      "Süreç yönetim sistemi kurmak isteyen kurumlar",
      "Departman bazlı görünürlük ve raporlama ihtiyacı olan yapılar",
      "Puanlama, analiz ve aksiyon takibini tek zeminde görmek isteyen yönetimler",
      "Sadi gibi süreç odaklı kurumsal yazılım çözümü arayan firmalar",
    ],
  },

  tage: {
    title: "Tage Yazılım yaklaşımı",
    description1:
      "Tage Yazılım bu alanda yalnızca danışmanlık veren yapı değil; aynı zamanda kurumsal yazılım üreten ve süreç yönetimini ürünleştiren teknoloji şirketi yaklaşımıyla hareket eder.",
    description2:
      "Bu nedenle süreç yönetimi yazılımı, süreç yönetim sistemi, raporlama, aksiyon takibi ve departman bazlı yapı gibi alanları ürün mantığında ele alıyor; bunu da Sadi ile somutlaştırıyoruz.",
    ctaBadge: "Ürün odaklı ana CTA",
    ctaTitle: "Sadi ile süreç yönetimini dijital ortama taşıyın",
    ctaDescription:
      "Sadi; süreçlerin dijital ortamda izlenmesi, puanlanması, analiz edilmesi, aksiyonlarının takip edilmesi ve raporlanması için ürün tabanlı çözüm sunar. Bu sayfa içindeki yazılım yaklaşımının en somut karşılığı Sadi’dir.",
    primaryButton: "Sadi ürün sayfasına git",
    secondaryButton: "Demo talep et",
  },

  faq: {
    title: "Sık sorulan sorular",
    description:
      "Aşağıdaki kısa cevaplar, hem kullanıcıların hızlı bilgi almasına hem de sayfanın answer engine ve AI aramaları için daha net okunmasına yardımcı olur.",
    items: [
      {
        question: "Süreç yönetimi yazılımı nedir?",
        answer:
          "Süreç yönetimi yazılımı, şirket içindeki süreçlerin dijital ortamda tanımlanmasını, izlenmesini, değerlendirilmesini, aksiyonlarının takip edilmesini ve raporlanmasını sağlayan yazılım yapısıdır.",
      },
      {
        question: "Süreç yönetim sistemi ne sağlar?",
        answer:
          "Süreç yönetim sistemi; süreç görünürlüğü, departman bazlı takip, puanlama, analiz, risk takibi, aksiyon yönetimi ve raporlama gibi alanlarda daha sürdürülebilir bir yapı sağlar.",
      },
      {
        question: "Süreç yazılımı ile danışmanlık arasındaki fark nedir?",
        answer:
          "Danışmanlık, yapının kurulmasına ve yorumlanmasına yardımcı olur. Süreç yazılımı ise bu yapının günlük kullanımda yaşamasını, takip edilmesini ve ölçülebilir hale gelmesini sağlar.",
      },
      {
        question: "Dijital dönüşüm yazılımları içinde süreç yönetimi neden önemlidir?",
        answer:
          "Dijital dönüşüm yazılımları arasında süreç yönetimi kritik yere sahiptir; çünkü süreç görünürlüğü olmadan diğer dijital yatırımların etkisini ölçmek ve yönetmek zorlaşır.",
      },
      {
        question: "Sadi bu sayfada nasıl konumlanır?",
        answer:
          "Sadi, süreç yönetimi yazılımı yaklaşımının ürünleşmiş yüzüdür. Departman bazlı yapı, puanlama, risk görünürlüğü, aksiyon takibi ve raporlama mantığını tek platformda birleştirir.",
      },
    ],
  },

  cta: {
    title: "Süreç yönetimini yazılım ile görünür ve sürdürülebilir hale getirin",
    description:
      "Süreç yönetimi yazılımı, süreç yönetim sistemi ve Sadi ürün yaklaşımı ile kurumsal süreçlerinizi dijital ortamda yönetmek için bizimle iletişime geçin.",
    primaryButton: "Sadi’yi İncele",
    secondaryButton: "İletişime Geçin",
  },

  schema: {
    serviceName: "Süreç Yönetimi Yazılımı ve Kurumsal Yazılım Çözümleri",
    serviceType:
      "Süreç Yönetimi Yazılımı, Süreç Yönetim Sistemi ve Kurumsal Yazılım Çözümleri",
    serviceDescription:
      "Süreç yönetimi yazılımı ve kurumsal yazılım çözümleri ile süreçlerin dijital ortamda izlenmesi, puanlanması, aksiyonlarının takip edilmesi, raporlanması ve departman bazlı yönetiminin sağlanması hedeflenir.",
  },
} as const;

const en = {
  meta: {
    title:
      "Process Management Software and Enterprise Software Solutions | Tage Yazılım",
    description:
      "Track, score, manage actions, and report your processes digitally with process management software. Enterprise software solutions by Tage Yazılım.",
    keywords: [
      "process management software",
      "process software",
      "software process management",
      "process management system",
      "digital transformation software",
      "enterprise software solutions",
      "process tracking software",
      "process analysis software",
      "action tracking software",
      "department-based process management",
      "sadi process management software",
    ],
    ogDescription:
      "A process management software approach for digitally tracking, scoring, managing actions, and reporting processes.",
    twitterDescription:
      "Make your processes more visible, measurable, and sustainable with a process management system.",
  },

  breadcrumb: {
    home: "Home",
    services: "Services",
    current: "Process Management Software and Enterprise Software Solutions",
  },

  hero: {
    badge: "Our Services",
    title: "Process Management Software and Enterprise Software Solutions",
    description1:
      "Process management software is a structure that not only defines enterprise processes, but also enables them to be tracked digitally, scored, have their actions followed, and be reported.",
    description2:
      "At Tage Yazılım, we develop product-focused solutions in process management software, process software, software process management, process management systems, and digital transformation software. The focus on this page is less about consulting and more about how software makes processes visible and sustainable.",
    primaryButton: "Explore Sadi",
    secondaryButton: "Request Demo / Meeting",
    summaryTitle: "Focus of this page",
    summaryHeading: "Making processes manageable through software",
    summaryText:
      "Making process management lasting through digital tracking, scoring, action follow-up, reporting, department-based structure, and the Sadi product connection.",
    summaryItems: [
      "Digital tracking of processes",
      "Scoring and analysis infrastructure",
      "Action and follow-up structure",
      "Department-based structure",
    ],
  },

  intro: {
    title: "Why has process management software become critical?",
    description1:
      "As companies grow, managing processes through verbal knowledge, Excel files, or scattered email flows becomes more difficult. At this point, process management software makes enterprise operations more visible, traceable, and measurable.",
    description2:
      "In structures without a process management system, decisions may be taken late, actions may get lost, and departments may interpret the same data differently. A software process management approach reduces this fragmentation and turns the process into a living structure.",
  },

  painPoints: [
    {
      icon: "monitor",
      title: "Processes cannot be tracked digitally",
      description:
        "When processes are managed through Excel, email, or personal tracking methods, visibility weakens and management notices delays too late.",
    },
    {
      icon: "gauge",
      title: "Lack of scoring and analysis infrastructure",
      description:
        "Even if processes are defined, if they are not measured, the maturity level, risks, and priorities cannot be seen concretely.",
    },
    {
      icon: "clipboard",
      title: "Action and follow-up structure remains fragmented",
      description:
        "When improvement decisions are taken, it may remain unclear who will track them, when, and with what result.",
    },
  ],

  scope: {
    title: "What structures do we offer within process management software?",
    description:
      "The approach here is not only to document enterprise processes, but to transform them into a structure that lives in software, can be updated, measured, and reported. For this reason, the process software approach addresses visibility, analysis, follow-up, and management together.",
  },

  solutionBlocks: [
    {
      icon: "monitor",
      title: "Digital tracking of processes",
      description:
        "We make processes digitally traceable in a department-based and structured way.",
    },
    {
      icon: "chart",
      title: "Scoring and analysis infrastructure",
      description:
        "We address the current state, maturity level, risks, and development areas of processes in a measurable structure.",
    },
    {
      icon: "clipboard",
      title: "Action and follow-up structure",
      description:
        "We make the ownership, status, and progress of improvement and corrective actions visible.",
    },
    {
      icon: "report",
      title: "Reporting",
      description:
        "We provide a reporting structure that offers more readable summaries, analysis outputs, and process visibility for management.",
    },
    {
      icon: "layout",
      title: "Department-based structure",
      description:
        "We address the corporate structure more systematically through company, department, process, and subprocess breakdowns.",
    },
    {
      icon: "radar",
      title: "Sadi product connection",
      description:
        "We productize the process management software approach with Sadi and bring measurement, follow-up, and reassessment logic together on the same foundation.",
    },
  ],

  detailSections: [
    {
      title: "Digital tracking of processes",
      description1:
        "Digital tracking of processes ensures not only that internal operations are described, but also that they remain visible in daily use. Questions such as which process runs in which department, what status occurs at which step, and which development area is a priority can be followed more clearly through software.",
      description2:
        "This approach creates strong value especially in terms of corporate memory, management visibility, and a common language between teams.",
    },
    {
      title: "Scoring and analysis infrastructure",
      description1:
        "Process management software should not be only a recording screen. A strong process management system must also provide a scoring and analysis logic that makes the current state of processes interpretable.",
      description2:
        "This way, the company not only sees the process, but can also evaluate the risk level, development state, and priority areas more concretely.",
    },
    {
      title: "Action and follow-up structure",
      description1:
        "For improvement decisions to be effective, actions must also live within the software. The action and follow-up structure makes visible which process has what development need, who is responsible, and what stage progress is in.",
      description2:
        "This layer turns process software from a passive recording area into a management tool.",
    },
    {
      title: "Reporting and management visibility",
      description1:
        "In enterprise software solutions, reporting is one of the most critical layers that helps managers understand data more quickly. The state, scores, risks, and actions of processes become more manageable with an appropriate reporting structure.",
      description2:
        "A reporting approach supported by outputs such as PDF and Excel provides a useful basis both for management presentations and operational follow-up.",
    },
  ],

  structure: {
    title: "Department-based structure",
    description1:
      "In companies, processes do not exist as a single whole; they live through department-based different operations. Therefore, a department-based structure is critical in the process management software approach. This allows each department to manage its own processes while management can still see the whole picture.",
    description2:
      "This structure creates a more corporate foundation for a process management system by providing visibility at company, unit, main process, subprocess, and person levels.",
    featuresTitle: "Typical software capabilities of this service",
    features: [
      "Department-based process structure",
      "Main process and subprocess setup",
      "Scoring and evaluation logic",
      "Risk visibility and analysis infrastructure",
      "Action / CAPA follow-up structure",
      "PDF and Excel reporting approach",
      "Reassessment and progress tracking",
      "More visible process structure for management",
    ],
  },

  sadiSection: {
    title: "Sadi product connection",
    description1:
      "This page connects directly to Sadi. Because Sadi is the productized form of the process management software approach. Digital tracking, scoring, risk visibility, action follow-up, and reporting of processes can all be handled within the same platform.",
    description2:
      "For this reason, Sadi is not only a product page; it is also the enterprise solution layer that provides a concrete answer to the need for a process management system.",
    useCasesTitle: "Which organizations is it suitable for?",
    useCasesDescription:
      "The need for process management software is not limited only to large institutions. This structure creates serious value for many companies needing process visibility, action follow-up, department-based structure, and reporting.",
    useCases: [
      "Companies wanting to move process visibility into a digital environment",
      "Structures wanting to establish department-based process inventory and process follow-up",
      "Organizations wanting to score process maturity and risk level",
      "Teams wanting to follow improvement actions through software",
      "Firms wanting to make process data more visible before ERP",
      "Management teams seeking a process-focused solution among digital transformation software",
      "Organizations needing reporting and management visibility",
      "Companies wanting to turn consulting output into a sustainable software structure",
    ],
  },

  fit: {
    title: "Who is it suitable for?",
    description:
      "This service is suitable for companies that want to transform their processes from a consulting output into a structure that lives through software. It creates strong value especially for organizations wanting to build a process management system, provide department-based visibility, and look for a product-focused solution like Sadi.",
    items: [
      "Companies wanting not only to define processes but also to manage them with software",
      "Organizations wanting to establish a process management system",
      "Structures needing department-based visibility and reporting",
      "Management teams wanting to see scoring, analysis, and action follow-up on a single platform",
      "Firms looking for a process-focused enterprise software solution like Sadi",
    ],
  },

  tage: {
    title: "The Tage Yazılım approach",
    description1:
      "Tage Yazılım acts in this field not only as a consulting provider, but also with the approach of a technology company that produces enterprise software and productizes process management.",
    description2:
      "For this reason, we handle process management software, process management systems, reporting, action tracking, and department-based structures with a product mindset, and we make this concrete with Sadi.",
    ctaBadge: "Product-focused main CTA",
    ctaTitle: "Move process management into the digital environment with Sadi",
    ctaDescription:
      "Sadi provides a product-based solution for digitally tracking, scoring, analyzing, following actions, and reporting processes. It is the most concrete reflection of the software approach described on this page.",
    primaryButton: "Go to Sadi product page",
    secondaryButton: "Request Demo",
  },

  faq: {
    title: "Frequently asked questions",
    description:
      "The short answers below help users get quick information and also make the page easier to read for answer engines and AI search.",
    items: [
      {
        question: "What is process management software?",
        answer:
          "Process management software is a software structure that enables internal company processes to be defined, tracked, evaluated, actioned, and reported in a digital environment.",
      },
      {
        question: "What does a process management system provide?",
        answer:
          "A process management system provides a more sustainable structure in areas such as process visibility, department-based follow-up, scoring, analysis, risk tracking, action management, and reporting.",
      },
      {
        question: "What is the difference between process software and consulting?",
        answer:
          "Consulting helps establish and interpret the structure. Process software ensures that this structure lives in daily use, is followed, and becomes measurable.",
      },
      {
        question: "Why is process management important among digital transformation software?",
        answer:
          "Process management holds a critical place among digital transformation software because without process visibility it becomes difficult to measure and manage the impact of other digital investments.",
      },
      {
        question: "How is Sadi positioned on this page?",
        answer:
          "Sadi is the productized face of the process management software approach. It brings department-based structure, scoring, risk visibility, action follow-up, and reporting logic together on a single platform.",
      },
    ],
  },

  cta: {
    title: "Make process management visible and sustainable through software",
    description:
      "Contact us to manage your enterprise processes digitally through process management software, process management systems, and the Sadi product approach.",
    primaryButton: "Explore Sadi",
    secondaryButton: "Contact Us",
  },

  schema: {
    serviceName: "Process Management Software and Enterprise Software Solutions",
    serviceType:
      "Process Management Software, Process Management System, and Enterprise Software Solutions",
    serviceDescription:
      "The goal of process management software and enterprise software solutions is to provide digital tracking, scoring, action follow-up, reporting, and department-based management of processes.",
  },
} as const;

function getIcon(name: string) {
  if (name === "monitor") return MonitorSmartphone;
  if (name === "gauge") return Gauge;
  if (name === "clipboard") return ClipboardList;
  if (name === "chart") return BarChart3;
  if (name === "report") return FileBarChart2;
  if (name === "layout") return LayoutGrid;
  if (name === "radar") return Radar;
  return Workflow;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const copy = lang === "en" ? en : tr;
  const pagePath = `/${lang}/hizmetler/surec-yonetimi-yazilimi-ve-kurumsal-yazilim-cozumleri`;
  const pageUrl = `${SITE_URL}${pagePath}`;

  return {
    title: copy.meta.title,
    description: copy.meta.description,
    keywords: copy.meta.keywords,
    alternates: {
      canonical: pagePath,
      languages: {
        tr: "/tr/hizmetler/surec-yonetimi-yazilimi-ve-kurumsal-yazilim-cozumleri",
        en: "/en/hizmetler/surec-yonetimi-yazilimi-ve-kurumsal-yazilim-cozumleri",
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

export default async function SurecYonetimiYazilimiVeKurumsalYazilimCozumleriPage({
  params,
}: PageProps) {
  const { lang } = await params;

  if (lang !== "tr" && lang !== "en") {
    notFound();
  }

  const copy = lang === "en" ? en : tr;
  const withLang = (path: string) => `/${lang}${path}`;
  const pagePath = `/${lang}/hizmetler/surec-yonetimi-yazilimi-ve-kurumsal-yazilim-cozumleri`;
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
                    href={withLang("/sadi")}
                    className="inline-flex items-center gap-2 rounded-full bg-[#133E87] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                  >
                    {copy.hero.primaryButton}
                    <ArrowRight size={18} />
                  </Link>

                  <Link
                    href={withLang("/iletisim")}
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
              {copy.solutionBlocks.map((item) => {
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
                  {copy.structure.title}
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-700">
                  {copy.structure.description1}
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  {copy.structure.description2}
                </p>
              </div>

              <div className="rounded-[28px] border border-[#E6EDF5] bg-white p-6 md:p-8">
                <h3 className="text-xl font-semibold text-[#133E87]">
                  {copy.structure.featuresTitle}
                </h3>

                <div className="mt-6 grid gap-4">
                  {copy.structure.features.map((item) => (
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
                  {copy.sadiSection.title}
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-700">
                  {copy.sadiSection.description1}
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  {copy.sadiSection.description2}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-[#133E87] md:text-4xl">
                  {copy.sadiSection.useCasesTitle}
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-700">
                  {copy.sadiSection.useCasesDescription}
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {copy.sadiSection.useCases.map((item) => (
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
                  {copy.tage.ctaBadge}
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                  {copy.tage.ctaTitle}
                </h2>

                <p className="mt-4 text-base leading-7 text-white/85">
                  {copy.tage.ctaDescription}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={withLang("/sadi")}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#133E87] transition hover:opacity-95"
                  >
                    {copy.tage.primaryButton}
                    <ArrowRight size={18} />
                  </Link>

                  <Link
                    href={withLang("/iletisim")}
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    {copy.tage.secondaryButton}
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
                  href={withLang("/sadi")}
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