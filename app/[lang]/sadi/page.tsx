// app/[lang]/sadi/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  CircleCheckBig,
  FileSpreadsheet,
  Filter,
  Gauge,
  GitBranch,
  RefreshCcw,
  ShieldAlert,
  Users,
  LayoutGrid,
  Target,
  BadgeCheck,
  Coins,
  Wrench,
  BriefcaseBusiness,
  Handshake,
  Workflow,
} from "lucide-react";

type PageProps = {
  params: Promise<{ lang: string }>;
};

const SITE_URL = "https://www.tageapps.com";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params;

  if (lang !== "tr" && lang !== "en") {
    return {};
  }

  const isTr = lang === "tr";
  const canonical = `${SITE_URL}/${lang}/sadi`;

  return {
    title: isTr
      ? "Sadi | Süreç Analizi, Süreç Olgunluk ve Dijital Olgunluk Platformu"
      : "Sadi | Process Analysis, Process Maturity and Digital Maturity Platform",
    description: isTr
      ? "Sadi; süreç analizi, süreç olgunluk ve dijital olgunluk değerlendirmesi yaparak riskleri, darboğazları ve gelişim alanlarını görünür hale getiren bir süreç yönetimi platformudur."
      : "Sadi is a process management platform that performs process analysis, process maturity and digital maturity assessments to make risks, bottlenecks and improvement areas visible.",
    alternates: {
      canonical,
      languages: {
        tr: `${SITE_URL}/tr/sadi`,
        en: `${SITE_URL}/en/sadi`,
      },
    },
    openGraph: {
      title: isTr
        ? "Sadi | Süreç Analizi, Süreç Olgunluk ve Dijital Olgunluk Platformu"
        : "Sadi | Process Analysis, Process Maturity and Digital Maturity Platform",
      description: isTr
        ? "Süreçleri ölçülebilir hale getirin, riskleri görün, gelişim alanlarını önceliklendirin ve dijital dönüşüm hazırlığını daha güçlü zemine taşıyın."
        : "Make processes measurable, identify risks, prioritize improvement areas and strengthen digital transformation readiness.",
      url: canonical,
      siteName: "Tage Apps",
      locale: isTr ? "tr_TR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: isTr
        ? "Sadi | Süreç Analizi, Süreç Olgunluk ve Dijital Olgunluk Platformu"
        : "Sadi | Process Analysis, Process Maturity and Digital Maturity Platform",
      description: isTr
        ? "Süreçleri ölçülebilir hale getirin, riskleri görün, gelişim alanlarını önceliklendirin ve dijital dönüşüm hazırlığını daha güçlü zemine taşıyın."
        : "Make processes measurable, identify risks, prioritize improvement areas and strengthen digital transformation readiness.",
    },
  };
}

const tr = {
  hero: {
    badge: "Ürün • Süreç Olgunluk • Dijital Olgunluk",
    productName: "sadi",
    title: "Süreç Analizi, Süreç Olgunluk ve Dijital Olgunluk Platformu",
    description:
      "Sadi, işletmelerin departman bazlı süreçlerini standart bir yapıda değerlendirir; riskleri, darboğazları ve gelişim alanlarını görünür hale getirerek süreç yönetimi, dijital dönüşüm ve ERP hazırlık çalışmalarını destekler.",
    demoButton: "Demo İste",
    checks: [
      "Süreçler kişilere bağlı ilerliyor",
      "Riskler ve darboğazlar net görünmüyor",
      "İyileştirme alanları sistematik biçimde izlenemiyor",
      "Süreç değerlendirmeleri tekrar ölçülemiyor",
    ],
    panel: {
      title: "Analiz / Özet (örnek)",
      subtitle: "Süreç olgunluk görünürlüğü ve risk odaklı özet ekran",
      badge: "Sadi Paneli",
      averageScoreLabel: "Ortalama Skor:",
      averageScoreValue: "3.8 / 7",
      comparable: "Kıyaslanabilir",
      risk: "Risk: Kritik",
      filters: ["Departman filtresi", "Kategori filtresi", "Risk filtresi"],
      tableHeaders: {
        subProcess: "Alt Süreç",
        score: "Skor",
        risk: "Risk",
      },
      rows: [
        {
          name: "Satınalma onay akışı",
          score: "2.5",
          risk: "Kritik",
          tone: "critical",
        },
        {
          name: "Tedarikçi değerlendirme",
          score: "3.0",
          risk: "Yüksek",
          tone: "high",
        },
        {
          name: "Stok min/max yönetimi",
          score: "4.0",
          risk: "Orta",
          tone: "medium",
        },
      ],
      note: "v+1 ile yeniden ölçüm: aynı süreç seti → yeni versiyon → gelişim kanıtı",
    },
  },

  problems: {
    title: "Bugün işletmelerin yaşadığı temel problemler",
    demoButton: "Demo İste",
    cards: [
      {
        title: "Süreç bilgisi parçalı ve kişilere bağımlı",
        description:
          "Bilgi dağınık kaldığında ekipler zamanını iş üretmek yerine süreç bilgisine ulaşmaya harcar.",
        stat: "Liderler zamanlarının %25 zamanını cevap aramakla geçiriyor.",
        source: "Atlassian, 2025",
        icon: "branch",
      },
      {
        title: "Ölçüm yok, öncelik net değil",
        description:
          "Sorun hissedilir; ancak hangi sürecin önce iyileştirileceği veriyle ve skorla netleşmez.",
        stat: "%30 strateji-performans boşluğu görülüyor.",
        source: "McKinsey",
        icon: "chart",
      },
      {
        title: "İyileştirme çalışmaları dağınık, riskler geç görülüyor",
        description:
          "Departmanlar arası kopukluk ve zayıf takip, darboğazların ve kritik alanların geç fark edilmesine yol açar.",
        stat: "%86 süreç görünürlüğünü değerli görüyor.",
        source: "Deloitte, 2025",
        icon: "risk",
      },
    ],
    bottomText:
      "ERP ve dijital dönüşüm yatırımları yapılır; ancak süreç olgunluğu yeterince görünmediğinde öncelikler netleşmez.",
  },

  solves: {
    title: "Sadi Neyi Çözer?",
    sideCard: {
      title: "Dijitalleşme durumu",
      processCount: "42 süreç",
      bars: [
        {
          label: "Evrak ağırlıklı",
          value: "43%",
          width: "43%",
          color: "bg-[#EF4444]",
        },
        {
          label: "Karma (evrak + sistem)",
          value: "38%",
          width: "38%",
          color: "bg-[#F59E0B]",
        },
        {
          label: "Sistem ağırlıklı",
          value: "19%",
          width: "19%",
          color: "bg-[#22C55E]",
        },
      ],
      summary:
        "Süreç olgunluğunu görünür hale getirerek dijital dönüşüm ve ERP hazırlığını daha güçlü zemine taşır.",
    },
    cards: [
      {
        title: "Sadi, süreç bilgisini kişiden alıp kurumsal sisteme taşır.",
        description:
          "Bu sayede kurum “kim biliyor?” sorusundan çıkıp “hangi süreç nasıl işliyor?” seviyesine gelir.",
        stat: "Liderler zamanlarının %25’ini sadece cevap aramakla geçiriyor.",
        source: "Atlassian, 2025",
        icon: "branch",
      },
      {
        title: "Süreçleri ölçülebilir hale getirir, önceliği netleştirir.",
        description:
          "Kurum artık sadece “sorun var” demez; hangi süreç düşük olgunlukta, hangi alan riskli, önce nereye müdahale edilmeli bunu görür.",
        stat: "%30 strateji-performans boşluğu görülüyor.",
        source: "McKinsey, 2025",
        icon: "chart",
      },
      {
        title: "İyileştirmeyi aksiyona ve sürekli gelişime dönüştürür.",
        description:
          "Sadi, ölçümü raporda bırakmaz; aksiyona, takibe ve gelişim döngüsüne çevirir. Kurum sadece sorunları görmekle kalmaz, onları sistematik olarak iyileştirmeye başlar.",
        stat: "Yöneticilerin %86’sı süreç görünürlüğünü değerli görüyor.",
        source: "Deloitte, 2025",
        icon: "clipboard",
      },
    ],
  },

  howItWorks: {
    badge: "Ürün Nasıl Çalışır?",
    title: "Bir kılavuz gibi basit çalışır. Tanımdan gelişime adım adım ilerler.",
    intro:
      "6 adımda tüm sürecinizi ölçüyor, dijital olgunluğunuzu hızlandırıyor.",
    steps: [
      {
        no: "1",
        title: "Tanımla",
        text: "Şirket, departmanlar, kişiler ve süreçler sisteme tanımlanır.",
        icon: "clipboard",
      },
      {
        no: "2",
        title: "Değerlendir",
        text: "Süreçler 0–7 skor metodolojisi ile olgunluk seviyesinde değerlendirilir.",
        icon: "gauge",
      },
      {
        no: "3",
        title: "Önceliklendir",
        text: "Mevcut durum çıkar, risk ve iyileştirme alanları görünür hale gelir, öncelikler netleşir.",
        icon: "chart",
      },
      {
        no: "4",
        title: "Aksiyon al",
        text: "Tanımlanan aksiyonlar ve DÖF adımları sisteme girilir, takip edilir.",
        icon: "checkbig",
      },
      {
        no: "5",
        title: "Raporla",
        text: "Yönetim ekranları, özet görünüm ve raporlar üretilir.",
        icon: "sheet",
      },
      {
        no: "6",
        title: "Yeniden ölç",
        text: "Periyodik ölçümlerle süreç gelişimi izlenir ve raporlanır.",
        icon: "refresh",
      },
    ],
  },

  market: {
    title: "Pazar Analizi",
    subtitle: "Hedef müşteri, kullanım alanı ve konumlandırma çerçevesi",
    targetProfileTitle: "Hedef müşteri profili",
    targetItems: [
      "ERP kullanan veya ERP’ye geçecek işletmeler",
      "Süreçlerini standardize etmek isteyen firmalar",
      "Dijital dönüşüm hazırlığı yapan şirketler",
      "Operasyonel büyüme yaşayan KOBİ’ler",
      "Çok departmanlı orta ve büyük ölçekli firmalar",
    ],
    firstFocus:
      "İlk odak: ERP hazırlığı ve süreç standardizasyonu ihtiyacı olan kurumlar",
    useCasesTitle: "Kullanım alanı",
    useCases: [
      "Süreç olgunluk analizi",
      "Dijital dönüşüm hazırlığı",
      "ERP öncesi hazırlık",
      "İç iyileştirme programları",
      "Yönetim raporlama ve önceliklendirme",
    ],
    positionTitle: "Pazar konumu",
    positionDescription:
      "Sadi, süreç yönetimi, dijital dönüşüm hazırlığı ve ERP hazırlık alanlarının kesişiminde konumlanır.",
    positionLabels: {
      left: "Süreç yönetimi",
      center: "Sadi",
      right: "Dijital dönüşüm hazırlığı",
      bottom: "ERP hazırlık alanı",
    },
  },

  competitors: {
    title: "Rakip Analizi",
    subtitle:
      "Sadi’nin erişilebilir fiyat, süreç derinliği ve uygulama odağı açısından pazardaki konumunu özetleyen karşılaştırma",
    advantage: "Sadi avantajı: yıllık lisans + odaklı süreç derinliği",
    note:
      "Not: Bu tablo pazarlama ve konumlandırma amaçlı özet bir karşılaştırmadır. Rakip ürünlerin lisanslama ve modül kapsamları müşteri, kurgu ve sözleşme yapısına göre değişebilir.",
    headers: [
      { name: "sadi", price: "$3.5K / yıl" },
      { name: "SAP Signavio", price: "Custom" },
      { name: "ARIS", price: "Custom" },
      { name: "IBM PM", price: "$51K / yıl" },
      { name: "UiPath PM", price: "Custom / PU" },
    ],
    rows: [
      {
        label: "Fiyat erişilebilirliği",
        values: ["good", "mid", "mid", "bad", "mid"],
      },
      {
        label: "Süreç olgunluk skorlama",
        values: ["good", "mid", "mid", "bad", "bad"],
      },
      {
        label: "Risk görünürlüğü",
        values: ["good", "mid", "good", "good", "good"],
      },
      {
        label: "Aksiyon / DÖF takibi",
        values: ["good", "mid", "mid", "mid", "mid"],
      },
      {
        label: "Tekrar ölçüm / versiyonlama",
        values: ["good", "mid", "mid", "mid", "mid"],
      },
      {
        label: "ERP / dijital dönüşüm hazırlığı",
        values: ["good", "good", "good", "mid", "mid"],
      },
      {
        label: "Hızlı devreye alma",
        values: ["good", "mid", "mid", "bad", "mid"],
      },
      {
        label: "Kurumsal odak",
        values: ["good", "good", "good", "good", "good"],
      },
    ],
  },

  revenue: {
    title: "Gelir Modeli",
    subtitle:
      "Sadi’nin ölçeklenebilir gelir yapısı, tekrar eden lisans modeli ile destek ve proje bazlı gelir katmanlarını birlikte içerir.",
    items: [
      {
        title: "Lisans Geliri",
        text: "Sadi’nin ana geliri, şirket bazlı yıllık platform lisansıdır.",
        icon: "coins",
      },
      {
        title: "Destek ve Bakım Geliri",
        text: "Yıllık bakım, güncelleme ve destek hizmetleriyle tekrar eden ek gelir oluşur.",
        icon: "wrench",
      },
      {
        title: "Profesyonel Hizmet Geliri",
        text: "Kurulum, uyumlandırma, eğitim, özel raporlama ve özel geliştirme ihtiyaçlarından proje bazlı gelir elde edilir.",
        icon: "briefcase",
      },
      {
        title: "İş Ortağı / Kanal Geliri",
        text: "Danışmanlık ve çözüm ortakları üzerinden lisans satışı, yönlendirme ve gelir paylaşımı modeli oluşturulur.",
        icon: "handshake",
      },
    ],
  },

  cta: {
    badge: "Son adım",
    title:
      "Sadi’yi kurumunuza uyarlayalım, süreçlerinizi ölçülebilir ve yönetilebilir hale getirelim",
    description:
      "Sadi’yi kurumunuza nasıl uyarlayabileceğimizi birlikte değerlendirelim. Süreçlerinizi daha görünür, ölçülebilir ve yönetilebilir hale getirecek yaklaşımı sizin yapınıza göre netleştirelim.",
    tags: [
      "Süreç Görünürlüğü",
      "Olgunluk Değerlendirmesi",
      "Risk ve Öncelik",
      "Aksiyon Takibi",
      "Yeniden Ölçüm",
    ],
    button: "Demo İste",
  },
} as const;

const en = {
  hero: {
    badge: "Product • Process Maturity • Digital Maturity",
    productName: "sadi",
    title: "Process Analysis, Process Maturity and Digital Maturity Platform",
    description:
      "Sadi evaluates department-based processes in a standard structure, makes risks, bottlenecks and improvement areas visible, and supports process management, digital transformation and ERP readiness initiatives.",
    demoButton: "Request Demo",
    checks: [
      "Processes depend on individuals",
      "Risks and bottlenecks are not clearly visible",
      "Improvement areas cannot be tracked systematically",
      "Process assessments cannot be re-measured",
    ],
    panel: {
      title: "Analysis / Summary (sample)",
      subtitle: "Process maturity visibility and risk-focused summary screen",
      badge: "Sadi Dashboard",
      averageScoreLabel: "Average Score:",
      averageScoreValue: "3.8 / 7",
      comparable: "Comparable",
      risk: "Risk: Critical",
      filters: ["Department filter", "Category filter", "Risk filter"],
      tableHeaders: {
        subProcess: "Sub-process",
        score: "Score",
        risk: "Risk",
      },
      rows: [
        {
          name: "Procurement approval flow",
          score: "2.5",
          risk: "Critical",
          tone: "critical",
        },
        {
          name: "Supplier evaluation",
          score: "3.0",
          risk: "High",
          tone: "high",
        },
        {
          name: "Stock min/max management",
          score: "4.0",
          risk: "Medium",
          tone: "medium",
        },
      ],
      note: "Re-measurement with v+1: same process set → new version → proof of improvement",
    },
  },

  problems: {
    title: "The core problems businesses face today",
    demoButton: "Request Demo",
    cards: [
      {
        title: "Process knowledge is fragmented and person-dependent",
        description:
          "When knowledge is scattered, teams spend time looking for process information instead of producing work.",
        stat: "Leaders spend 25% of their time just looking for answers.",
        source: "Atlassian, 2025",
        icon: "branch",
      },
      {
        title: "There is no measurement, priorities are unclear",
        description:
          "A problem is felt, but data and scoring do not clearly show which process should be improved first.",
        stat: "A 30% strategy-performance gap is observed.",
        source: "McKinsey",
        icon: "chart",
      },
      {
        title: "Improvement efforts are scattered, risks are seen late",
        description:
          "Interdepartmental disconnect and weak follow-up cause bottlenecks and critical areas to be noticed late.",
        stat: "86% value process visibility.",
        source: "Deloitte, 2025",
        icon: "risk",
      },
    ],
    bottomText:
      "ERP and digital transformation investments are made; however, when process maturity is not visible enough, priorities remain unclear.",
  },

  solves: {
    title: "What Does Sadi Solve?",
    sideCard: {
      title: "Digitalization status",
      processCount: "42 processes",
      bars: [
        {
          label: "Paper-heavy",
          value: "43%",
          width: "43%",
          color: "bg-[#EF4444]",
        },
        {
          label: "Hybrid (paper + system)",
          value: "38%",
          width: "38%",
          color: "bg-[#F59E0B]",
        },
        {
          label: "System-heavy",
          value: "19%",
          width: "19%",
          color: "bg-[#22C55E]",
        },
      ],
      summary:
        "By making process maturity visible, it creates a stronger foundation for digital transformation and ERP readiness.",
    },
    cards: [
      {
        title: "Sadi moves process knowledge from individuals into the corporate system.",
        description:
          "This enables the organization to move from “who knows?” to “how does each process work?”",
        stat: "Leaders spend 25% of their time just looking for answers.",
        source: "Atlassian, 2025",
        icon: "branch",
      },
      {
        title: "It makes processes measurable and clarifies priorities.",
        description:
          "The organization no longer just says “there is a problem”; it sees which process has low maturity, which area is risky, and where to intervene first.",
        stat: "A 30% strategy-performance gap is observed.",
        source: "McKinsey, 2025",
        icon: "chart",
      },
      {
        title: "It turns improvement into action and continuous development.",
        description:
          "Sadi does not leave measurement in the report; it turns it into action, follow-up, and a development cycle. The organization not only sees problems, but also starts improving them systematically.",
        stat: "86% of managers value process visibility.",
        source: "Deloitte, 2025",
        icon: "clipboard",
      },
    ],
  },

  howItWorks: {
    badge: "How Does the Product Work?",
    title: "It works as simply as a guide. Step by step from definition to development.",
    intro: "It measures your entire process in 6 steps and accelerates your digital maturity.",
    steps: [
      {
        no: "1",
        title: "Define",
        text: "Company, departments, people, and processes are defined in the system.",
        icon: "clipboard",
      },
      {
        no: "2",
        title: "Assess",
        text: "Processes are evaluated in maturity level with the 0–7 scoring methodology.",
        icon: "gauge",
      },
      {
        no: "3",
        title: "Prioritize",
        text: "The current state is revealed, risks and improvement areas become visible, and priorities become clear.",
        icon: "chart",
      },
      {
        no: "4",
        title: "Take action",
        text: "Defined actions and CAPA steps are entered into the system and tracked.",
        icon: "checkbig",
      },
      {
        no: "5",
        title: "Report",
        text: "Management dashboards, summary views, and reports are generated.",
        icon: "sheet",
      },
      {
        no: "6",
        title: "Re-measure",
        text: "Process development is monitored and reported with periodic assessments.",
        icon: "refresh",
      },
    ],
  },

  market: {
    title: "Market Analysis",
    subtitle: "Target customer, use case, and positioning framework",
    targetProfileTitle: "Target customer profile",
    targetItems: [
      "Businesses using ERP or preparing to adopt ERP",
      "Companies aiming to standardize their processes",
      "Companies preparing for digital transformation",
      "SMEs experiencing operational growth",
      "Mid-sized and large organizations with multiple departments",
    ],
    firstFocus:
      "Initial focus: organizations needing ERP readiness and process standardization",
    useCasesTitle: "Use cases",
    useCases: [
      "Process maturity analysis",
      "Digital transformation readiness",
      "Pre-ERP preparation",
      "Internal improvement programs",
      "Management reporting and prioritization",
    ],
    positionTitle: "Market position",
    positionDescription:
      "Sadi is positioned at the intersection of process management, digital transformation readiness, and ERP readiness.",
    positionLabels: {
      left: "Process management",
      center: "Sadi",
      right: "Digital transformation readiness",
      bottom: "ERP readiness area",
    },
  },

  competitors: {
    title: "Competitive Analysis",
    subtitle:
      "A comparison summarizing Sadi’s position in the market in terms of accessible pricing, process depth, and implementation focus",
    advantage: "Sadi advantage: annual license + focused process depth",
    note:
      "Note: This table is a summary comparison for marketing and positioning purposes. Competitor products’ licensing and module scope may vary by customer, setup, and contract structure.",
    headers: [
      { name: "sadi", price: "$3.5K / year" },
      { name: "SAP Signavio", price: "Custom" },
      { name: "ARIS", price: "Custom" },
      { name: "IBM PM", price: "$51K / year" },
      { name: "UiPath PM", price: "Custom / PU" },
    ],
    rows: [
      {
        label: "Price accessibility",
        values: ["good", "mid", "mid", "bad", "mid"],
      },
      {
        label: "Process maturity scoring",
        values: ["good", "mid", "mid", "bad", "bad"],
      },
      {
        label: "Risk visibility",
        values: ["good", "mid", "good", "good", "good"],
      },
      {
        label: "Action / CAPA tracking",
        values: ["good", "mid", "mid", "mid", "mid"],
      },
      {
        label: "Re-measurement / versioning",
        values: ["good", "mid", "mid", "mid", "mid"],
      },
      {
        label: "ERP / digital transformation readiness",
        values: ["good", "good", "good", "mid", "mid"],
      },
      {
        label: "Fast deployment",
        values: ["good", "mid", "mid", "bad", "mid"],
      },
      {
        label: "Enterprise focus",
        values: ["good", "good", "good", "good", "good"],
      },
    ],
  },

  revenue: {
    title: "Revenue Model",
    subtitle:
      "Sadi’s scalable revenue structure combines a recurring license model with support and project-based revenue layers.",
    items: [
      {
        title: "License Revenue",
        text: "Sadi’s main revenue comes from the annual platform license per company.",
        icon: "coins",
      },
      {
        title: "Support and Maintenance Revenue",
        text: "Annual maintenance, updates, and support services generate recurring additional revenue.",
        icon: "wrench",
      },
      {
        title: "Professional Services Revenue",
        text: "Project-based revenue is generated from setup, adaptation, training, custom reporting, and custom development needs.",
        icon: "briefcase",
      },
      {
        title: "Partner / Channel Revenue",
        text: "A revenue-sharing model is created through partners and consulting channels for license sales and referrals.",
        icon: "handshake",
      },
    ],
  },

  cta: {
    badge: "Final step",
    title:
      "Let’s adapt Sadi to your organization and make your processes measurable and manageable",
    description:
      "Let’s evaluate together how we can adapt Sadi to your organization. Let’s clarify the approach that will make your processes more visible, measurable, and manageable according to your structure.",
    tags: [
      "Process Visibility",
      "Maturity Assessment",
      "Risk and Priority",
      "Action Tracking",
      "Re-measurement",
    ],
    button: "Request Demo",
  },
} as const;

function getStatusClass(tone: string) {
  if (tone === "critical") return "bg-[#B91C1C]";
  if (tone === "high") return "bg-[#DC2626]";
  if (tone === "medium") return "bg-[#F59E0B]";
  return "bg-[#16A34A]";
}

function getCompetitorCell(value: string) {
  if (value === "good") {
    return (
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#22C55E] text-[#16A34A]">
        <CheckCircle2 size={24} strokeWidth={2.4} />
      </span>
    );
  }

  if (value === "mid") {
    return (
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#E0C100] text-[#D4B000]">
        <ShieldAlert size={22} strokeWidth={2.2} />
      </span>
    );
  }

  return (
    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-[#EF4444] text-[#DC2626]">
      <span className="text-2xl font-bold leading-none">–</span>
    </span>
  );
}

function getProblemIcon(name: string) {
  if (name === "branch") return GitBranch;
  if (name === "chart") return BarChart3;
  return ShieldAlert;
}

function getSolveIcon(name: string) {
  if (name === "branch") return GitBranch;
  if (name === "chart") return BarChart3;
  return ClipboardList;
}

function getStepIcon(name: string) {
  if (name === "clipboard") return ClipboardList;
  if (name === "gauge") return Gauge;
  if (name === "chart") return BarChart3;
  if (name === "checkbig") return CircleCheckBig;
  if (name === "sheet") return FileSpreadsheet;
  return RefreshCcw;
}

function getRevenueIcon(name: string) {
  if (name === "coins") return Coins;
  if (name === "wrench") return Wrench;
  if (name === "briefcase") return BriefcaseBusiness;
  return Handshake;
}

export default async function SadiPage({ params }: PageProps) {
  const { lang } = await params;

  if (lang !== "tr" && lang !== "en") {
    notFound();
  }

  const copy = lang === "en" ? en : tr;
  const withLang = (path: string) => `/${lang}${path}`;

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <Container className="grid gap-12 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16 lg:py-24">
          <div className="relative">
            <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-[#CBDCEB]/20 blur-3xl" />
            <div className="absolute left-24 top-20 h-32 w-32 rounded-full bg-[#608BC1]/10 blur-3xl" />

            <div className="relative">
              <div className="inline-flex rounded-full border border-[#CBDCEB] bg-[#EFF5FB] px-4 py-2 text-sm font-medium text-[#133E87]">
                {copy.hero.badge}
              </div>

              <p className="mt-6 text-5xl font-light tracking-tight text-[#133E87] sm:text-6xl lg:text-7xl">
                {copy.hero.productName}
              </p>

              <h1 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
                {copy.hero.title}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                {copy.hero.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={withLang("/iletisim")}
                  className="rounded-xl bg-[#133E87] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#0f3270]"
                >
                  {copy.hero.demoButton}
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {copy.hero.checks.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-[#F8FBFF] px-4 py-3 shadow-sm"
                  >
                    <CheckCircle2
                      size={18}
                      strokeWidth={2}
                      color="#608BC1"
                      className="mt-0.5"
                    />
                    <span className="text-sm leading-6 text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-8 top-0 h-40 w-40 rounded-full bg-[#CBDCEB]/25 blur-3xl" />
            <div className="absolute -bottom-8 left-0 h-32 w-32 rounded-full bg-[#608BC1]/10 blur-3xl" />

            <div className="relative rounded-[32px] border border-[#CBDCEB] bg-gradient-to-br from-[#f8fbff] via-white to-[#eef5fb] p-5 shadow-[0_22px_60px_rgba(19,62,135,0.12)] sm:p-6">
              <div className="overflow-hidden rounded-[24px] border border-[#CBDCEB] bg-white shadow-sm">
                <div className="border-b border-[#CBDCEB] px-5 py-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-[#133E87]">
                        <BarChart3 size={16} strokeWidth={2} color="#608BC1" />
                        <span>{copy.hero.panel.title}</span>
                      </div>
                      <p className="mt-1 text-xs text-slate-500">
                        {copy.hero.panel.subtitle}
                      </p>
                    </div>

                    <span className="rounded-full border border-[#CBDCEB] bg-[#F8FBFF] px-3 py-1 text-xs font-medium text-[#133E87]">
                      {copy.hero.panel.badge}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-[#CBDCEB] bg-white px-3 py-1 text-xs text-slate-700">
                      {copy.hero.panel.averageScoreLabel}{" "}
                      <b>{copy.hero.panel.averageScoreValue}</b>
                    </span>
                    <span className="rounded-full border border-[#CBDCEB] bg-white px-3 py-1 text-xs text-slate-700">
                      {copy.hero.panel.comparable}
                    </span>
                    <span className="rounded-full bg-[#B91C1C] px-3 py-1 text-xs font-medium text-white">
                      {copy.hero.panel.risk}
                    </span>
                  </div>
                </div>

                <div className="grid gap-3 px-5 py-4 md:grid-cols-3">
                  {copy.hero.panel.filters.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-xl border border-[#CBDCEB] bg-[#F8FBFF] px-3 py-2 text-xs text-slate-600"
                    >
                      <Filter size={14} strokeWidth={2} color="#608BC1" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="px-5 pb-5">
                  <div className="overflow-hidden rounded-2xl border border-[#CBDCEB] bg-white">
                    <div className="grid grid-cols-12 gap-2 border-b border-[#CBDCEB] bg-[#CBDCEB]/35 px-4 py-2 text-xs font-semibold text-slate-700">
                      <div className="col-span-8">
                        {copy.hero.panel.tableHeaders.subProcess}
                      </div>
                      <div className="col-span-2 text-right">
                        {copy.hero.panel.tableHeaders.score}
                      </div>
                      <div className="col-span-2 text-right">
                        {copy.hero.panel.tableHeaders.risk}
                      </div>
                    </div>

                    {copy.hero.panel.rows.map((row, i) => (
                      <div
                        key={row.name}
                        className={[
                          "grid grid-cols-12 gap-2 px-4 py-3 text-sm",
                          i % 2 === 0 ? "bg-white" : "bg-slate-50",
                        ].join(" ")}
                      >
                        <div className="col-span-8 text-slate-800">
                          {row.name}
                        </div>
                        <div className="col-span-2 text-right font-medium text-slate-800">
                          {row.score}
                        </div>
                        <div className="col-span-2 flex justify-end">
                          <span
                            className={[
                              "rounded-full px-2.5 py-1 text-xs font-medium text-white",
                              getStatusClass(row.tone),
                            ].join(" ")}
                          >
                            {row.risk}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-2xl border border-[#E5EEF7] bg-gradient-to-r from-[#F8FBFF] to-white px-4 py-4">
                    <p className="text-sm leading-7 text-slate-600">
                      {copy.hero.panel.note}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* PROBLEMS */}
      <section className="bg-[#f8fbff] py-16 sm:py-20">
        <Container>
          <div className="relative overflow-hidden rounded-[32px] border border-[#CBDCEB] bg-white p-6 shadow-[0_12px_40px_rgba(19,62,135,0.08)] sm:p-8 lg:p-10">
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-[#eff5fb] via-white to-[#f7fbff]" />
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#CBDCEB]/20 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-[#608BC1]/10 blur-3xl" />

            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                {copy.problems.title}
              </h2>

              <div className="mt-8 grid gap-4 lg:grid-cols-2">
                {copy.problems.cards.map((card, idx) => {
                  const Icon = getProblemIcon(card.icon);
                  const wide = idx === 0 ? "lg:col-span-2" : "";

                  return (
                    <div
                      key={card.title}
                      className={`rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm ${wide}`}
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#CBDCEB] bg-[#F7FAFD]">
                        <Icon size={22} strokeWidth={2} color="#608BC1" />
                      </div>

                      <h3 className="mt-4 text-xl font-semibold leading-8 text-slate-900 sm:text-2xl">
                        {card.title}
                      </h3>

                      <p className="mt-3 text-base leading-8 text-slate-600 sm:text-lg">
                        {card.description}
                      </p>

                      <div className="mt-5 rounded-2xl border border-[#CBDCEB] bg-[#F8FBFF] px-5 py-4">
                        <p className="text-base leading-8 text-slate-700 sm:text-lg">
                          {card.stat}
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                          {card.source}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 rounded-[24px] border border-[#CBDCEB] bg-gradient-to-r from-[#F8FBFF] to-white px-6 py-5">
                <p className="text-base font-medium leading-8 text-slate-700 sm:text-lg">
                  {copy.problems.bottomText}
                </p>
              </div>

              <div className="mt-8 flex">
                <Link
                  href={withLang("/iletisim")}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#133E87] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0f3270]"
                >
                  {copy.problems.demoButton}
                  <ArrowRight size={16} strokeWidth={2.25} />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* WHAT SADI SOLVES */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div className="rounded-[28px] border border-[#CBDCEB] bg-gradient-to-br from-[#f8fbff] to-white p-6 shadow-[0_12px_40px_rgba(19,62,135,0.06)] sm:p-8">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                {copy.solves.title}
              </h2>

              <div className="mt-8 rounded-[24px] border border-[#CBDCEB] bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#133E87]">
                    <Gauge size={16} strokeWidth={2} color="#608BC1" />
                    <span>{copy.solves.sideCard.title}</span>
                  </div>
                  <span className="rounded-full border border-[#CBDCEB] bg-white px-3 py-1 text-xs text-slate-600">
                    {copy.solves.sideCard.processCount}
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  {copy.solves.sideCard.bars.map((item) => (
                    <div key={item.label}>
                      <div className="mb-1 flex items-center justify-between text-sm text-slate-700">
                        <span>{item.label}</span>
                        <span className="font-medium">{item.value}</span>
                      </div>
                      <div className="h-2.5 rounded-full bg-slate-100">
                        <div
                          className={`h-2.5 rounded-full ${item.color}`}
                          style={{ width: item.width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex items-start gap-3 rounded-[20px] border border-slate-200 bg-white px-4 py-4 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#22C55E] text-white">
                  <BarChart3 size={18} strokeWidth={2.2} />
                </div>
                <p className="text-base leading-7 text-slate-700">
                  {copy.solves.sideCard.summary}
                </p>
              </div>
            </div>

            <div className="rounded-[28px] border border-[#CBDCEB] bg-gradient-to-br from-[#f8fbff] via-white to-[#eef5fb] p-5 shadow-sm">
              <div className="space-y-5">
                {copy.solves.cards.map((card) => {
                  const Icon = getSolveIcon(card.icon);

                  return (
                    <div
                      key={card.title}
                      className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#CBDCEB] bg-[#F7FAFD]">
                          <Icon size={24} strokeWidth={2} color="#608BC1" />
                        </div>

                        <div className="flex-1">
                          <h3 className="text-xl font-semibold leading-8 text-slate-900 sm:text-2xl">
                            {card.title}
                          </h3>
                          <p className="mt-3 text-base leading-8 text-slate-600 sm:text-lg">
                            {card.description}
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 rounded-2xl border border-[#CBDCEB] bg-[#F8FBFF] px-5 py-4">
                        <p className="text-base leading-8 text-slate-700 sm:text-lg">
                          {card.stat}
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                          {card.source}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#f8fbff] py-16 sm:py-20">
        <Container>
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#608BC1]">
              {copy.howItWorks.badge}
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {copy.howItWorks.title}
            </h2>
          </div>

          <div className="mt-8 rounded-[24px] border border-[#CBDCEB] bg-white px-6 py-5 shadow-sm">
            <p className="text-lg font-semibold leading-8 text-slate-900 sm:text-xl">
              {copy.howItWorks.intro}
            </p>
          </div>

          <div className="relative mt-10">
            <div className="pointer-events-none absolute left-[8%] right-[8%] top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[#CBDCEB] to-transparent xl:block" />
            <div className="pointer-events-none absolute left-1/2 top-[18%] hidden h-[64%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#CBDCEB] to-transparent xl:block" />

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {copy.howItWorks.steps.map((item) => {
                const Icon = getStepIcon(item.icon);

                return (
                  <div
                    key={item.no}
                    className="relative rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="absolute -top-4 left-6 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-[#608BC1] text-xl font-bold text-white shadow-sm">
                      {item.no}
                    </div>

                    <div className="pt-7">
                      <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#CBDCEB] bg-[#F7FAFD] shadow-sm">
                          <Icon size={24} strokeWidth={2} color="#608BC1" />
                        </div>

                        <h3 className="border-b border-[#CBDCEB] pb-1 text-xl font-semibold leading-8 text-slate-900 sm:text-2xl">
                          {item.title}
                        </h3>
                      </div>

                      <p className="mt-4 max-w-md text-base leading-8 text-slate-600">
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

      {/* MARKET ANALYSIS */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {copy.market.title}
            </h2>
            <p className="mt-3 text-base leading-8 text-slate-600 sm:text-lg">
              {copy.market.subtitle}
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[28px] border border-slate-200 bg-[#F8FBFF] p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#CBDCEB] bg-white">
                  <Users size={22} strokeWidth={2} color="#608BC1" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-900">
                  {copy.market.targetProfileTitle}
                </h3>
              </div>

              <div className="mt-5 h-px bg-[#CBDCEB]" />

              <div className="mt-6 space-y-5">
                {copy.market.targetItems.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-4 w-4 shrink-0 rounded-full bg-[#5B3FA8]" />
                    <p className="text-lg leading-8 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[20px] border border-[#D9D5F2] bg-[#F3F0FF] px-5 py-4">
                <p className="text-center text-base font-semibold leading-7 text-[#4C3A99]">
                  {copy.market.firstFocus}
                </p>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#CBDCEB] bg-[#F7FAFD]">
                    <LayoutGrid size={22} strokeWidth={2} color="#608BC1" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900">
                    {copy.market.useCasesTitle}
                  </h3>
                </div>

                <div className="mt-5 h-px bg-[#CBDCEB]" />

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {copy.market.useCases.slice(0, 4).map((item, index) => (
                    <div
                      key={item}
                      className={`rounded-[18px] px-5 py-4 text-center text-lg ${
                        index === 1
                          ? "border border-[#D9D5F2] bg-[#F3F0FF] font-semibold text-[#4C3A99]"
                          : "border border-slate-200 bg-[#FAFAFA] font-medium text-slate-700"
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex justify-center">
                  <div className="rounded-[18px] border border-slate-200 bg-[#FAFAFA] px-5 py-4 text-center text-lg font-medium text-slate-700">
                    {copy.market.useCases[4]}
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#CBDCEB] bg-[#F7FAFD]">
                    <Target size={22} strokeWidth={2} color="#608BC1" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900">
                    {copy.market.positionTitle}
                  </h3>
                </div>

                <div className="mt-5 h-px bg-[#CBDCEB]" />

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  {copy.market.positionDescription}
                </p>

                <div className="mt-8 flex flex-col items-center gap-3 lg:flex-row lg:justify-center">
                  <div className="rounded-[18px] border border-[#CFC8F1] bg-[#F5F2FF] px-6 py-4 text-center text-xl font-semibold text-[#4C3A99]">
                    {copy.market.positionLabels.left}
                  </div>

                  <div className="text-2xl font-bold text-[#B9B3D9]">→</div>

                  <div className="rounded-[18px] border border-[#D9D5F2] bg-white px-6 py-4 text-center text-2xl font-bold text-[#5B3FA8] shadow-sm">
                    {copy.market.positionLabels.center}
                  </div>

                  <div className="text-2xl font-bold text-[#B9B3D9]">→</div>

                  <div className="rounded-[18px] border border-[#BFE7E0] bg-[#EAF9F6] px-6 py-4 text-center text-xl font-semibold text-[#1E6F63]">
                    {copy.market.positionLabels.right}
                  </div>
                </div>

                <div className="mt-4 flex justify-center">
                  <div className="rounded-[18px] border border-[#F0D8A8] bg-[#FFF6E5] px-6 py-4 text-center text-lg font-semibold text-[#8A6116]">
                    {copy.market.positionLabels.bottom}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* COMPETITORS */}
      <section className="bg-[#f8fbff] py-16 sm:py-20">
        <Container>
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {copy.competitors.title}
            </h2>
            <p className="mt-3 text-base leading-8 text-slate-600 sm:text-lg">
              {copy.competitors.subtitle}
            </p>
          </div>

          <div className="mt-8 rounded-[20px] border border-[#BFE7D0] bg-[#ECF9F0] px-5 py-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-[#16A34A] shadow-sm">
                <BadgeCheck size={18} strokeWidth={2.2} />
              </div>
              <p className="text-base font-semibold leading-7 text-[#166534] sm:text-lg">
                {copy.competitors.advantage}
              </p>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <div className="min-w-[980px]">
                <div className="grid grid-cols-[2.2fr_repeat(5,1.1fr)] border-b border-slate-200 bg-[#F4F7FB]">
                  <div className="px-6 py-5" />

                  {copy.competitors.headers.map((header, index) => (
                    <div
                      key={header.name}
                      className="border-l border-slate-200 px-4 py-5 text-center"
                    >
                      <div
                        className={`text-xl font-bold ${index === 0 ? "text-2xl text-slate-900" : "text-slate-900"}`}
                      >
                        {header.name}
                      </div>
                      <div
                        className={`mt-1 font-semibold ${index === 0 ? "text-2xl text-[#16A34A]" : "text-xl text-slate-500"}`}
                      >
                        {header.price}
                      </div>
                    </div>
                  ))}
                </div>

                {copy.competitors.rows.map((row, rowIndex) => (
                  <div
                    key={row.label}
                    className={[
                      "grid grid-cols-[2.2fr_repeat(5,1.1fr)] border-b border-slate-200",
                      rowIndex % 2 === 0 ? "bg-white" : "bg-slate-50/70",
                    ].join(" ")}
                  >
                    <div className="px-6 py-5 text-lg font-medium leading-7 text-slate-800">
                      {row.label}
                    </div>

                    {row.values.map((value, index) => (
                      <div
                        key={`${row.label}-${index}`}
                        className="flex items-center justify-center border-l border-slate-200 px-4 py-5"
                      >
                        {getCompetitorCell(value)}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-[20px] border border-[#CBDCEB] bg-white px-5 py-4 shadow-sm">
            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              {copy.competitors.note}
            </p>
          </div>
        </Container>
      </section>

      {/* REVENUE */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {copy.revenue.title}
            </h2>
            <p className="mt-3 text-base leading-8 text-slate-600 sm:text-lg">
              {copy.revenue.subtitle}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {copy.revenue.items.map((item) => {
              const Icon = getRevenueIcon(item.icon);

              return (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-slate-200 bg-[#F8FBFF] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#CBDCEB] bg-white text-[#608BC1] shadow-sm">
                    <Icon size={30} strokeWidth={2.2} />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold leading-8 text-slate-900 underline decoration-[#CBDCEB] underline-offset-4">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-base leading-8 text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#133E87] py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.10),transparent_24%)]" />

        <Container className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#CBDCEB]">
              {copy.cta.badge}
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {copy.cta.title}
            </h2>

            <p className="mt-4 text-base leading-7 text-[#E7EFF7]">
              {copy.cta.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {copy.cta.tags.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex">
            <Link
              href={withLang("/iletisim")}
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-center text-sm font-semibold text-[#133E87] transition hover:bg-slate-100"
            >
              {copy.cta.button}
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}