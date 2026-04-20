// app/[lang]/hizmetler/dijital-olgunluk-ve-dijital-donusum-analizi/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  Gauge,
  LineChart,
  Radar,
  ShieldCheck,
  Sparkles,
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
      "Dijital Olgunluk ve Dijital Dönüşüm Analizi | Dijital Olgunluk Analizi | Tage Yazılım",
    description:
      "Dijital olgunluk ve dijital dönüşüm analizi hizmeti ile mevcut durumu puanlayın, süreç olgunluk seviyesini ölçün, riskleri görün ve gelişim yol haritası oluşturun.",
    keywords: [
      "dijital olgunluk",
      "dijital olgunluk analizi",
      "dijital dönüşüm olgunluk analizi",
      "dijital dönüşüm uygulamaları",
      "dijital dönüşüm yazılımları",
      "süreç olgunluk",
      "dijital dönüşüm analizi",
      "mevcut durum puanlama",
      "risk ve gelişim alanları",
      "dijital dönüşüm yol haritası",
      "sadi ile ölçüm ve raporlama",
    ],
    ogDescription:
      "Dijital olgunluk analizi, süreç olgunluk seviyesi ölçümü, mevcut durum puanlama ve dijital dönüşüm yol haritası için kurumsal yaklaşım.",
    twitterDescription:
      "Şirketinizin dijital ve süreçsel olgunluğunu ölçün, riskleri görün ve gelişim yol haritası oluşturun.",
  },

  breadcrumb: {
    home: "Anasayfa",
    services: "Hizmetler",
    current: "Dijital Olgunluk ve Dijital Dönüşüm Analizi",
  },

  hero: {
    badge: "Hizmetlerimiz",
    title: "Dijital Olgunluk ve Dijital Dönüşüm Analizi",
    description1:
      "Dijital olgunluk ve dijital dönüşüm analizi hizmeti, şirketin dijital ve süreçsel hazırlık seviyesini ölçmek, mevcut durumu puanlamak, riskleri görmek ve gelişim alanlarına göre yol haritası oluşturmak için kullanılır.",
    description2:
      "Tage Yazılım olarak dijital olgunluk, dijital olgunluk analizi, dijital dönüşüm olgunluk analizi, dijital dönüşüm uygulamaları, dijital dönüşüm yazılımları ve süreç olgunluk başlıklarını birlikte ele alıyoruz. Amacımız, dönüşüm kararlarını daha ölçülebilir ve daha uygulanabilir zemine oturtmaktır.",
    primaryButton: "Sadi’yi İncele",
    secondaryButton: "Görüşme Talep Et",
    summaryTitle: "Bu sayfanın odağı",
    summaryHeading: "Şirketin dijital ve süreçsel olgunluğunu ölçmek",
    summaryText:
      "Mevcut durumu puanlamak, riskleri görmek, gelişim alanlarını belirlemek, dijital dönüşüm yol haritası çıkarmak ve bunu Sadi ile ölçüm ve raporlama mantığına bağlamak.",
    summaryItems: [
      "Dijital olgunluk değerlendirmesi",
      "Süreç olgunluk seviyesi ölçümü",
      "Mevcut durum puanlama",
      "Sadi ile ölçüm ve raporlama",
    ],
  },

  intro: {
    title: "Dijital olgunluk neden stratejik bir konudur?",
    description1:
      "Dijitalleşme artık yalnızca teknoloji yatırımı yapmak anlamına gelmiyor. Gerçek değer, şirketin süreçlerinin, veri kullanımının, organizasyon yapısının ve yönetim yaklaşımının bu dönüşüme ne kadar hazır olduğu ile oluşur. İşte bu nedenle dijital olgunluk analizi, dönüşüm öncesi en stratejik değerlendirme alanlarından biridir.",
    description2:
      "Dijital dönüşüm uygulamaları ve dijital dönüşüm yazılımları, şirketin mevcut hazırlık seviyesine göre çok farklı sonuçlar üretir. Hazırlık seviyesi düşükse yatırım pahalı ama etkisiz kalabilir; hazırlık doğru ölçülmüşse dönüşüm daha kontrollü ve daha hızlı ilerler.",
  },

  painPoints: [
    {
      icon: "gauge",
      title: "Mevcut olgunluk seviyesinin bilinmemesi",
      description:
        "Şirketler çoğu zaman dijitalleşme yatırımı yapar; ancak dijital olgunluk ve süreç olgunluk seviyesini ölçmeden başladıkları için nerede olduklarını net göremez.",
    },
    {
      icon: "alert",
      title: "Risk ve kırılgan alanların görünmemesi",
      description:
        "Dijital dönüşüm olgunluk analizi yapılmadığında süreç, veri, insan ve teknoloji tarafındaki zayıf alanlar geç fark edilir.",
    },
    {
      icon: "sparkles",
      title: "Yol haritasının dağınık kalması",
      description:
        "Dijital dönüşüm uygulamaları ve dijital dönüşüm yazılımları doğru sırayla ele alınmadığında yatırım etkisi düşer ve dönüşüm parçalı ilerler.",
    },
  ],

  scope: {
    title: "Dijital olgunluk ve dijital dönüşüm analizi kapsamında neler yapıyoruz?",
    description:
      "Bu hizmette amaç, şirketin dijitalleşme seviyesini yalnızca genel yorumla değil; yapılandırılmış değerlendirme, puanlama ve yorumlama mantığıyla ele almaktır. Dijital dönüşüm olgunluk analizi ile süreç, organizasyon, teknoloji ve yönetim boyutları birlikte değerlendirilir.",
  },

  serviceBlocks: [
    {
      icon: "radar",
      title: "Dijital olgunluk değerlendirmesi",
      description:
        "Şirketin dijitalleşme yaklaşımını, mevcut yetkinlik seviyesini ve dönüşüm hazırlığını sistematik biçimde değerlendiririz.",
    },
    {
      icon: "workflow",
      title: "Süreç olgunluk seviyesi ölçümü",
      description:
        "Süreçlerin ne kadar tanımlı, tekrar edilebilir, izlenebilir ve geliştirilebilir olduğunu değerlendirerek süreç olgunluk seviyesini görünür hale getiririz.",
    },
    {
      icon: "chart",
      title: "Mevcut durum puanlama",
      description:
        "Şirketin bugün bulunduğu noktayı sayısal ve yorumlanabilir biçimde puanlar, güçlü ve zayıf alanları netleştiririz.",
    },
    {
      icon: "shield",
      title: "Risk ve gelişim alanlarının belirlenmesi",
      description:
        "Kritik riskleri, darboğazları, eksik hazırlık alanlarını ve gelişim fırsatlarını görünür hale getiririz.",
    },
    {
      icon: "line",
      title: "Dijital dönüşüm yol haritası",
      description:
        "Kısa, orta ve uzun vadeli öncelikleri belirleyerek daha uygulanabilir bir dönüşüm yol haritası oluştururuz.",
    },
    {
      icon: "clipboard",
      title: "Sadi ile ölçüm ve raporlama",
      description:
        "İhtiyaca göre Sadi üzerinden ölçüm, puanlama, risk takibi, yeniden değerlendirme ve raporlama yapısını destekleriz.",
    },
  ],

  detailSections: [
    {
      title: "Dijital olgunluk değerlendirmesi",
      description1:
        "Dijital olgunluk değerlendirmesi, şirketin bugün nerede olduğunu anlamaya odaklanır. Burada yalnızca kullanılan yazılımlar değil; süreçlerin standartlığı, veri kullanımı, ekiplerin hazırlığı, karar alma yapısı ve dijital dönüşüm yaklaşımı birlikte değerlendirilir.",
      description2:
        "Bu yaklaşım, şirketin dönüşüme hazır olup olmadığını ve hangi alanlarda daha fazla hazırlık gerektiğini görünür hale getirir.",
    },
    {
      title: "Süreç olgunluk seviyesi ölçümü",
      description1:
        "Süreç olgunluk ölçümü, işleyişin ne kadar tanımlı, tekrar edilebilir, kontrol edilebilir ve geliştirilebilir olduğunu anlamaya yardımcı olur. Süreç olgunluk seviyesi düşük olan yapılarda dijitalleşme yatırımları beklenen karşılığı üretmekte zorlanabilir.",
      description2:
        "Bu yüzden süreç olgunluk, dijital olgunluk analizinin ayrılmaz parçasıdır ve özellikle yönetim görünürlüğü açısından büyük önem taşır.",
    },
    {
      title: "Mevcut durum puanlama",
      description1:
        "Mevcut durum puanlama, şirketin bugün bulunduğu seviyeyi daha somut hale getirir. Böylece değerlendirme yalnızca nitel yorum olarak kalmaz; sayısal ve karşılaştırılabilir bir yapı da oluşur.",
      description2:
        "Puanlama yaklaşımı, yönetimin güçlü ve zayıf alanları daha hızlı görmesini sağlar ve ilerleyen dönemde yeniden ölçüm yapılmasına zemin oluşturur.",
    },
    {
      title: "Risk ve gelişim alanlarının belirlenmesi",
      description1:
        "Risklerin görünür hale gelmesi, dijital dönüşüm kararlarının en kritik kazanımlarından biridir. Hazırlık seviyesi düşük, süreç yapısı dağınık veya veri disiplini zayıf alanlar burada daha net görünür olur.",
      description2:
        "Gelişim alanları ise yalnızca eksikleri değil; hangi alanda hızlı kazanım elde edilebileceğini de gösterir. Bu da yol haritasını daha uygulanabilir hale getirir.",
    },
  ],

  roadmap: {
    title: "Dijital dönüşüm yol haritası",
    description1:
      "Dijital dönüşüm yol haritası, her şeyi aynı anda yapmak yerine doğru sırayla ilerlemeyi sağlar. Öncelikler belirlendiğinde hem yatırım verimliliği artar hem de değişim yönetimi daha sağlıklı ilerler.",
    description2:
      "Yol haritası kısa, orta ve uzun vadeli bakışla ele alınabilir. Böylece şirket hem hızlı kazanımlar elde eder hem de daha yapısal dönüşüm alanlarını kontrollü biçimde planlayabilir.",
    outputsTitle: "Bu hizmetin tipik çıktıları",
    outputs: [
      "Dijital olgunluk değerlendirme çıktısı",
      "Süreç olgunluk seviyesi görünürlüğü",
      "Mevcut durum puanlama yapısı",
      "Risk ve gelişim alanları listesi",
      "Dijital dönüşüm yol haritası",
      "Sadi ile ölçüm ve raporlama zemini",
    ],
  },

  sadiSection: {
    title: "Sadi ile ölçüm ve raporlama",
    description1:
      "Bu sayfanın en güçlü tarafı, danışmanlık ile yazılım arasında doğrudan köprü kurmasıdır. Sadi ile ölçüm ve raporlama yaklaşımı sayesinde dijital ve süreçsel olgunluk değerlendirmeleri yalnızca tek seferlik analiz olarak kalmaz; takip edilebilir ve yeniden ölçülebilir hale gelir.",
    description2:
      "Bu da özellikle yönetim için büyük avantaj sağlar. Çünkü puanlama, risk görünürlüğü, aksiyon takibi ve tekrar değerlendirme aynı yapıda ilerleyebilir.",
    useCasesTitle: "Dijital olgunluk analizi örnek kullanım alanları",
    useCasesDescription:
      "Dijital olgunluk analizi; üretimden hizmet sektörüne, KOBİ’lerden daha büyük yapılara kadar çok farklı kurumlarda uygulanabilir. Özellikle ERP öncesi hazırlık, dijital dönüşüm önceliklendirmesi ve yönetim görünürlüğü ihtiyacında yüksek değer üretir.",
    useCases: [
      "ERP öncesi kurumsal hazırlık ve olgunluk değerlendirmesi",
      "Dijital dönüşüm yatırımları öncesi mevcut durum analizi",
      "Üretim, operasyon ve destek süreçlerinin olgunluk ölçümü",
      "Departman bazlı süreç ve dijital yetkinlik değerlendirmeleri",
      "Yönetim için puanlama, risk görünürlüğü ve öncelik belirleme çalışmaları",
      "Dijital dönüşüm uygulamaları için yatırım sıralaması oluşturma",
      "Dijital dönüşüm yazılımları seçimi öncesi hazırlık değerlendirmesi",
      "Sadi ile periyodik ölçüm ve yeniden değerlendirme kurgusu",
    ],
  },

  fit: {
    title: "Kimler için uygundur?",
    description:
      "Bu hizmet; dijital dönüşümünü rastgele değil, ölçülebilir ve öncelikli biçimde yönetmek isteyen şirketler için uygundur. Özellikle dijital olgunluk analizi ile süreç olgunluk görünürlüğünü birlikte ele almak isteyen, danışmanlık ile yazılımı bir arada görmek isteyen kurumlar için güçlü sonuç üretir.",
    items: [
      "Dijital dönüşüm kararı öncesi mevcut durumunu net görmek isteyen şirketler",
      "Süreç olgunluk ve dijital olgunluk seviyesini ölçmek isteyen kurumlar",
      "Yatırım önceliklerini sezgi yerine veriyle belirlemek isteyen yönetimler",
      "Risk ve gelişim alanlarını görünür hale getirmek isteyen organizasyonlar",
      "Danışmanlık ile yazılımı birlikte ele alan ölçülebilir bir yaklaşım arayan firmalar",
    ],
  },

  tage: {
    title: "Tage Yazılım yaklaşımı",
    description1:
      "Tage Yazılım bu alanda yalnızca değerlendirme raporu üretmez. Amacımız, şirketin dijital ve süreçsel hazırlık seviyesini görünür hale getirmek, bunun üzerinden gelişim alanlarını netleştirmek ve ölçülebilir bir ilerleme zemini oluşturmaktır.",
    description2:
      "Bu nedenle dijital olgunluk değerlendirmesi, süreç olgunluk ölçümü, puanlama, risk görünürlüğü, yol haritası ve Sadi ile raporlama mantığını birlikte ele alıyoruz.",
    sadiBadge: "Sadi ile en güçlü bağ",
    sadiTitle: "Ölçümden ürüne, üründen takibe",
    sadiDescription:
      "Bu hizmet doğrudan Sadi’ye bağlanır. Çünkü şirketin dijital ve süreçsel olgunluğunu ölçmek, puanlamak, riskleri görmek ve gelişim alanlarını takip etmek için Sadi doğal ürün katmanı sunar. Böylece danışmanlık çıktısı sürdürülebilir takip yapısına dönüşebilir.",
    sadiButton: "Sadi ürün sayfasına git",
    meetingButton: "Demo / görüşme talep et",
  },

  faq: {
    title: "Sık sorulan sorular",
    description:
      "Aşağıdaki kısa cevaplar, hem kullanıcıların hızlı bilgi almasına hem de sayfanın answer engine ve AI aramaları için daha net okunmasına yardımcı olur.",
    items: [
      {
        question: "Dijital olgunluk nedir?",
        answer:
          "Dijital olgunluk, bir şirketin dijitalleşme yaklaşımının, süreçlerinin, veri kullanımının, organizasyon yapısının ve teknoloji hazırlığının ne kadar gelişmiş olduğunu gösteren seviyedir.",
      },
      {
        question: "Dijital olgunluk analizi ne sağlar?",
        answer:
          "Dijital olgunluk analizi, şirketin mevcut durumunu puanlamayı, güçlü ve zayıf alanları görmeyi, riskleri belirlemeyi ve daha gerçekçi bir dönüşüm yol haritası oluşturmayı sağlar.",
      },
      {
        question: "Süreç olgunluk ile dijital olgunluk arasındaki ilişki nedir?",
        answer:
          "Süreç olgunluk, işleyişin ne kadar tanımlı, ölçülebilir ve yönetilebilir olduğunu gösterir. Dijital olgunluk ise bunu teknoloji, veri ve organizasyon hazırlığı ile birlikte ele alır. İkisi birlikte değerlendirildiğinde daha doğru sonuç verir.",
      },
      {
        question: "Dijital dönüşüm olgunluk analizi neden önemlidir?",
        answer:
          "Dijital dönüşüm olgunluk analizi, şirketin dönüşüme nereden başlayacağını ve hangi alanlara öncelik vermesi gerektiğini gösterir. Böylece dijital dönüşüm uygulamaları ve yazılım yatırımları daha sağlıklı sırayla ele alınabilir.",
      },
      {
        question: "Sadi bu süreçte nasıl kullanılır?",
        answer:
          "Sadi, dijital ve süreçsel olgunluk ölçümlerinin puanlanması, risklerin görünür hale getirilmesi, gelişim alanlarının takibi, yeniden değerlendirme yapılması ve rapor üretilmesi için destekleyici ürün yapısı sunar.",
      },
    ],
  },

  cta: {
    title: "Dijital olgunluğunuzu ölçelim, dönüşüm yol haritanızı netleştirelim",
    description:
      "Dijital olgunluk analizi, süreç olgunluk değerlendirmesi ve Sadi ile ölçüm / raporlama yaklaşımı için bizimle iletişime geçin.",
    primaryButton: "Sadi’yi İncele",
    secondaryButton: "İletişime Geçin",
  },

  schema: {
    serviceName: "Dijital Olgunluk ve Dijital Dönüşüm Analizi",
    serviceType:
      "Dijital Olgunluk Analizi, Süreç Olgunluk Ölçümü ve Dijital Dönüşüm Yol Haritası Hizmeti",
    serviceDescription:
      "Dijital olgunluk ve dijital dönüşüm analizi hizmeti ile şirketin dijital ve süreçsel olgunluğunu ölçmek, mevcut durumu puanlamak, risk ve gelişim alanlarını belirlemek ve yol haritası çıkarmak hedeflenir.",
  },
} as const;

const en = {
  meta: {
    title:
      "Digital Maturity and Digital Transformation Analysis | Digital Maturity Analysis | Tage Yazılım",
    description:
      "Score your current state, measure process maturity, identify risks, and build a development roadmap with our digital maturity and digital transformation analysis service.",
    keywords: [
      "digital maturity",
      "digital maturity analysis",
      "digital transformation maturity analysis",
      "digital transformation applications",
      "digital transformation software",
      "process maturity",
      "digital transformation analysis",
      "current state scoring",
      "risk and development areas",
      "digital transformation roadmap",
      "measurement and reporting with sadi",
    ],
    ogDescription:
      "A corporate approach for digital maturity analysis, process maturity measurement, current state scoring, and a digital transformation roadmap.",
    twitterDescription:
      "Measure your company’s digital and process maturity, identify risks, and build a development roadmap.",
  },

  breadcrumb: {
    home: "Home",
    services: "Services",
    current: "Digital Maturity and Digital Transformation Analysis",
  },

  hero: {
    badge: "Our Services",
    title: "Digital Maturity and Digital Transformation Analysis",
    description1:
      "The digital maturity and digital transformation analysis service is used to measure the company’s digital and process readiness level, score the current state, identify risks, and build a roadmap according to development areas.",
    description2:
      "At Tage Yazılım, we address digital maturity, digital maturity analysis, digital transformation maturity analysis, digital transformation applications, digital transformation software, and process maturity together. Our goal is to place transformation decisions on a more measurable and more actionable foundation.",
    primaryButton: "Explore Sadi",
    secondaryButton: "Request a Meeting",
    summaryTitle: "Focus of this page",
    summaryHeading: "Measuring the company’s digital and process maturity",
    summaryText:
      "Scoring the current state, identifying risks, determining development areas, building a digital transformation roadmap, and connecting this to measurement and reporting logic with Sadi.",
    summaryItems: [
      "Digital maturity assessment",
      "Process maturity measurement",
      "Current state scoring",
      "Measurement and reporting with Sadi",
    ],
  },

  intro: {
    title: "Why is digital maturity a strategic issue?",
    description1:
      "Digitalization no longer means only making technology investments. Real value is created by how ready the company’s processes, use of data, organizational structure, and management approach are for this transformation. That is why digital maturity analysis is one of the most strategic evaluation areas before transformation.",
    description2:
      "Digital transformation applications and digital transformation software produce very different results depending on the company’s current readiness level. If readiness is low, the investment may be expensive but ineffective; if readiness is measured correctly, transformation progresses in a more controlled and faster way.",
  },

  painPoints: [
    {
      icon: "gauge",
      title: "The current maturity level is unknown",
      description:
        "Companies often make digital investments, but because they start without measuring digital maturity and process maturity, they cannot clearly see where they stand.",
    },
    {
      icon: "alert",
      title: "Risks and fragile areas remain invisible",
      description:
        "When digital transformation maturity analysis is not carried out, weak areas in process, data, people, and technology are noticed too late.",
    },
    {
      icon: "sparkles",
      title: "The roadmap remains fragmented",
      description:
        "When digital transformation applications and digital transformation software are not handled in the right order, investment impact decreases and transformation progresses in a fragmented way.",
    },
  ],

  scope: {
    title: "What do we do within digital maturity and digital transformation analysis?",
    description:
      "The purpose of this service is to address the company’s digitalization level not only through a general opinion, but through structured evaluation, scoring, and interpretation logic. With digital transformation maturity analysis, process, organization, technology, and management dimensions are assessed together.",
  },

  serviceBlocks: [
    {
      icon: "radar",
      title: "Digital maturity assessment",
      description:
        "We systematically evaluate the company’s digitalization approach, current capability level, and transformation readiness.",
    },
    {
      icon: "workflow",
      title: "Process maturity measurement",
      description:
        "We make process maturity visible by evaluating how defined, repeatable, traceable, and improvable the processes are.",
    },
    {
      icon: "chart",
      title: "Current state scoring",
      description:
        "We score where the company stands today in a numerical and interpretable way, clarifying strong and weak areas.",
    },
    {
      icon: "shield",
      title: "Identification of risks and development areas",
      description:
        "We make critical risks, bottlenecks, preparation gaps, and development opportunities visible.",
    },
    {
      icon: "line",
      title: "Digital transformation roadmap",
      description:
        "We determine short-, medium-, and long-term priorities and build a more actionable transformation roadmap.",
    },
    {
      icon: "clipboard",
      title: "Measurement and reporting with Sadi",
      description:
        "When needed, we support measurement, scoring, risk tracking, reassessment, and reporting through Sadi.",
    },
  ],

  detailSections: [
    {
      title: "Digital maturity assessment",
      description1:
        "Digital maturity assessment focuses on understanding where the company stands today. Here, not only the software in use but also the standardization of processes, use of data, readiness of teams, decision-making structure, and digital transformation approach are evaluated together.",
      description2:
        "This approach makes visible whether the company is ready for transformation and in which areas more preparation is needed.",
    },
    {
      title: "Process maturity measurement",
      description1:
        "Process maturity measurement helps understand how defined, repeatable, controllable, and improvable the operation is. In structures with low process maturity, digitalization investments may struggle to produce the expected return.",
      description2:
        "For this reason, process maturity is an inseparable part of digital maturity analysis and is especially important for management visibility.",
    },
    {
      title: "Current state scoring",
      description1:
        "Current state scoring makes the company’s current level more concrete. Thus, the evaluation does not remain only a qualitative comment; a numerical and comparable structure also emerges.",
      description2:
        "The scoring approach helps management see strong and weak areas more quickly and creates the basis for reassessment in the future.",
    },
    {
      title: "Identification of risks and development areas",
      description1:
        "Making risks visible is one of the most critical gains of digital transformation decisions. Areas with low readiness, fragmented process structure, or weak data discipline become clearer here.",
      description2:
        "Development areas show not only deficiencies, but also where quick gains can be achieved. This makes the roadmap more actionable.",
    },
  ],

  roadmap: {
    title: "Digital transformation roadmap",
    description1:
      "A digital transformation roadmap enables progress in the right order instead of doing everything at once. When priorities are set, investment efficiency increases and change management progresses more healthily.",
    description2:
      "The roadmap can be addressed with a short-, medium-, and long-term view. Thus, the company both achieves quick wins and plans more structural transformation areas in a controlled manner.",
    outputsTitle: "Typical outputs of this service",
    outputs: [
      "Digital maturity assessment output",
      "Visibility of process maturity level",
      "Current state scoring structure",
      "List of risks and development areas",
      "Digital transformation roadmap",
      "Foundation for measurement and reporting with Sadi",
    ],
  },

  sadiSection: {
    title: "Measurement and reporting with Sadi",
    description1:
      "The strongest side of this page is that it builds a direct bridge between consulting and software. Thanks to the measurement and reporting approach with Sadi, digital and process maturity assessments do not remain only as one-time analyses; they become traceable and re-measurable.",
    description2:
      "This provides a major advantage especially for management, because scoring, risk visibility, action tracking, and reassessment can progress within the same structure.",
    useCasesTitle: "Typical use cases for digital maturity analysis",
    useCasesDescription:
      "Digital maturity analysis can be applied in very different organizations, from manufacturing to services and from SMEs to larger structures. It creates high value especially in pre-ERP readiness, digital transformation prioritization, and the need for management visibility.",
    useCases: [
      "Corporate readiness and maturity assessment before ERP",
      "Current state analysis before digital transformation investments",
      "Maturity measurement of production, operations, and support processes",
      "Department-based process and digital capability assessments",
      "Scoring, risk visibility, and prioritization studies for management",
      "Creating investment sequencing for digital transformation applications",
      "Readiness assessment before selecting digital transformation software",
      "Periodic measurement and reassessment with Sadi",
    ],
  },

  fit: {
    title: "Who is it suitable for?",
    description:
      "This service is suitable for companies that want to manage their digital transformation not randomly, but in a measurable and prioritized way. It delivers strong results especially for organizations that want to address digital maturity analysis together with process maturity visibility and want to see consulting and software together.",
    items: [
      "Companies wanting to clearly see their current state before deciding on digital transformation",
      "Organizations wanting to measure process maturity and digital maturity levels",
      "Management teams wanting to determine investment priorities based on data rather than intuition",
      "Organizations wanting to make risks and development areas visible",
      "Firms looking for a measurable approach that addresses consulting and software together",
    ],
  },

  tage: {
    title: "The Tage Yazılım approach",
    description1:
      "Tage Yazılım does not produce only an assessment report in this area. Our aim is to make the company’s digital and process readiness level visible, clarify development areas based on this, and create a measurable basis for progress.",
    description2:
      "For this reason, we address digital maturity assessment, process maturity measurement, scoring, risk visibility, roadmap creation, and reporting logic with Sadi together.",
    sadiBadge: "Strongest connection with Sadi",
    sadiTitle: "From measurement to product, from product to tracking",
    sadiDescription:
      "This service connects directly to Sadi. Because to measure, score, identify risks, and track development areas in the company’s digital and process maturity, Sadi offers a natural product layer. Thus, the consulting output can turn into a sustainable tracking structure.",
    sadiButton: "Go to Sadi product page",
    meetingButton: "Request demo / meeting",
  },

  faq: {
    title: "Frequently asked questions",
    description:
      "The short answers below help users get quick information and also make the page easier to read for answer engines and AI search.",
    items: [
      {
        question: "What is digital maturity?",
        answer:
          "Digital maturity is the level that shows how advanced a company’s digitalization approach, processes, use of data, organizational structure, and technology readiness are.",
      },
      {
        question: "What does digital maturity analysis provide?",
        answer:
          "Digital maturity analysis enables the company to score its current state, see strong and weak areas, identify risks, and build a more realistic transformation roadmap.",
      },
      {
        question: "What is the relationship between process maturity and digital maturity?",
        answer:
          "Process maturity shows how defined, measurable, and manageable the operation is. Digital maturity addresses this together with technology, data, and organizational readiness. When assessed together, they provide a more accurate result.",
      },
      {
        question: "Why is digital transformation maturity analysis important?",
        answer:
          "Digital transformation maturity analysis shows where the company should start the transformation and which areas should be prioritized. Thus, digital transformation applications and software investments can be handled in a healthier order.",
      },
      {
        question: "How is Sadi used in this process?",
        answer:
          "Sadi provides a supportive product structure for scoring digital and process maturity measurements, making risks visible, tracking development areas, carrying out reassessment, and generating reports.",
      },
    ],
  },

  cta: {
    title: "Let’s measure your digital maturity and clarify your transformation roadmap",
    description:
      "Contact us for digital maturity analysis, process maturity assessment, and a measurement/reporting approach with Sadi.",
    primaryButton: "Explore Sadi",
    secondaryButton: "Contact Us",
  },

  schema: {
    serviceName: "Digital Maturity and Digital Transformation Analysis",
    serviceType:
      "Digital Maturity Analysis, Process Maturity Measurement, and Digital Transformation Roadmap Service",
    serviceDescription:
      "The digital maturity and digital transformation analysis service aims to measure the company’s digital and process maturity, score the current state, identify risk and development areas, and build a roadmap.",
  },
} as const;

function getIcon(name: string) {
  if (name === "gauge") return Gauge;
  if (name === "alert") return AlertTriangle;
  if (name === "sparkles") return Sparkles;
  if (name === "radar") return Radar;
  if (name === "workflow") return Workflow;
  if (name === "chart") return BarChart3;
  if (name === "shield") return ShieldCheck;
  if (name === "line") return LineChart;
  return ClipboardList;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params;

  if (lang !== "tr" && lang !== "en") {
    return {};
  }

  const copy = lang === "en" ? en : tr;
  const pagePath = `/${lang}/hizmetler/dijital-olgunluk-ve-dijital-donusum-analizi`;
  const pageUrl = `${SITE_URL}${pagePath}`;

  return {
    title: copy.meta.title,
    description: copy.meta.description,
    keywords: [...copy.meta.keywords],
    alternates: {
      canonical: pageUrl,
      languages: {
        tr: `${SITE_URL}/tr/hizmetler/dijital-olgunluk-ve-dijital-donusum-analizi`,
        en: `${SITE_URL}/en/hizmetler/dijital-olgunluk-ve-dijital-donusum-analizi`,
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

export default async function DijitalOlgunlukVeDijitalDonusumAnaliziPage({
  params,
}: PageProps) {
  const { lang } = await params;

  if (lang !== "tr" && lang !== "en") {
    notFound();
  }

  const copy = lang === "en" ? en : tr;
  const withLang = (path: string) => `/${lang}${path}`;
  const pagePath = `/${lang}/hizmetler/dijital-olgunluk-ve-dijital-donusum-analizi`;
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
                  {copy.roadmap.title}
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-700">
                  {copy.roadmap.description1}
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  {copy.roadmap.description2}
                </p>
              </div>

              <div className="rounded-[28px] border border-[#E6EDF5] bg-white p-6 md:p-8">
                <h3 className="text-xl font-semibold text-[#133E87]">
                  {copy.roadmap.outputsTitle}
                </h3>

                <div className="mt-6 grid gap-4">
                  {copy.roadmap.outputs.map((item) => (
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
                    href={withLang("/iletisim")}
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    {copy.tage.meetingButton}
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