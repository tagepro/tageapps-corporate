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
  Sparkles,
  UploadCloud,
  ShieldCheck,
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
      ? "Sadi | AI Destekli Süreç Olgunluk ve Dijital Dönüşüm Hazırlık Platformu"
      : "Sadi | AI-Powered Process Maturity and Digital Transformation Readiness Platform",
    description: isTr
      ? "Sadi, işletmelerin departman bazlı süreçlerini ölçerek riskleri ve darboğazları görünür kılar, iş süreçlerinin yönetimini ve iyileştirilmesini sağlar."
      : "Sadi measures department-based business processes, makes risks and bottlenecks visible, and enables organizations to manage and improve their business processes.",
    alternates: {
      canonical,
      languages: {
        tr: `${SITE_URL}/tr/sadi`,
        en: `${SITE_URL}/en/sadi`,
      },
    },
    openGraph: {
      title: isTr
        ? "Sadi | AI Destekli Süreç Olgunluk ve Dijital Dönüşüm Hazırlık Platformu"
        : "Sadi | AI-Powered Process Maturity and Digital Transformation Readiness Platform",
      description: isTr
        ? "Süreçlerin mevcut durumunu ölçün, riskleri ve darboğazları görünür hale getirin, iş süreçlerinin yönetimini ve iyileştirilmesini destekleyin."
        : "Measure the current state of processes, make risks and bottlenecks visible, and support the management and improvement of business processes.",
      url: canonical,
      siteName: "Tage Apps",
      locale: isTr ? "tr_TR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: isTr
        ? "Sadi | AI Destekli Süreç Olgunluk ve Dijital Dönüşüm Hazırlık Platformu"
        : "Sadi | AI-Powered Process Maturity and Digital Transformation Readiness Platform",
      description: isTr
        ? "Süreçlerin mevcut durumunu ölçün, riskleri ve darboğazları görünür hale getirin, iş süreçlerinin yönetimini ve iyileştirilmesini destekleyin."
        : "Measure the current state of processes, make risks and bottlenecks visible, and support the management and improvement of business processes.",
    },
  };
}

const tr = {
  hero: {
    badge: "Ürün • AI Destekli • Süreç Olgunluk • Dijital Dönüşüm",
    productName: "sadi",
    title: "AI Destekli Süreç Olgunluk ve Dijital Dönüşüm Hazırlık Platformu",
    description:
      "Sadi, işletmelerin departman bazlı süreçlerini ölçerek riskleri ve darboğazları görünür kılar, iş süreçlerinin yönetimini ve iyileştirilmesini sağlar.",
    demoButton: "Demo İste",
    checks: [
      "ERP ve dijital dönüşüm yatırımları yapılıyor, ancak süreçlerdeki mevcut durum yeterince görünmediği için öncelikler netleşmiyor.",
      "Süreç Bilgisi Parçalı ve Kişilere Bağımlı",
      "Süreçlerde Ölçüm Yok, Öncelik Net Değil",
      "İyileştirme Çalışmaları Dağınık, Riskler Geç Görülüyor",
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
      note:
        "v+1 ile yeniden ölçüm: aynı süreç seti → yeni versiyon → gelişim kanıtı",
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
    title:
      "Bir kılavuz gibi basit çalışır. Tanımdan gelişime adım adım ilerler.",
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

  aiImprovement: {
    title: "AI ile Süreçleri İyileştir.",
    subtitle:
      "Sadi’de yapay zeka desteği, süreç bilgisinden ve ölçüm sonuçlarından uygulanabilir dönüşüm önerileri üretir.",
    badge: "SÜREÇLERDE AI DESTEĞİ",
    heading:
      "Sadi, süreç bilgisini yapılandırır ve sürece özgü iyileştirme önerileri üretir.",
    bullets: [
      "Yapay Zeka Süreç Envanteri, PDF, Word, Excel, PowerPoint veya metin dosyalarını inceleyerek departman, ana süreç, alt süreç ve kategori önerileri oluşturur.",
      "Yapay Zeka Dönüşüm Önerileri, olgunluk, risk, sistem uyumu ve verimlilik sonuçlarını birlikte değerlendirerek sürece özel iyileştirme önerileri üretir.",
      "Kullanıcılar neyin aktarılacağına karar verir. Yapay zeka otomatik olarak kayıt oluşturmaz.",
    ],
    result:
      "Sonuç: daha hızlı keşif, izlenebilir öneriler, insan kontrollü",

    inventory: {
      badge: "AI ile Süreç Envanteri",
      title: "Kurumsal dokümanı süreç envanterine dönüştür",
      description:
        "Prosedür, görev tanımı veya süreç dokümanınızı inceler. Seçtiğiniz şirket için departman, ana süreç, alt süreç ve kategori önerileri oluşturur.",
      company: "Şirket",
      companyValue: "01.01 – Grup Şirketi A",
      department: "Departman filtresi",
      departmentValue: "Tedarik Zinciri ve Satın Alma",
      uploadTitle: "Doküman dosyası yükle",
      uploadText: "PDF, Word, Excel, PowerPoint veya metin dosyası • En fazla 4 MB",
      uploadButton: "Dosya seç",
      documentTitle: "Doküman başlığı",
      documentText: "Doküman metni",
      placeholder:
        "Prosedür, görev tanımı veya süreç dokümanı metnini buraya yapıştırın...",
      notice:
        "AI yalnızca öneri oluşturur. Siz seçip aktarımı onaylamadan hiçbir kayıt oluşturulmaz.",
    },

    recommendations: {
      company: "Şirket",
      companyValue: "01.02 — Grup Şirketi B",
      department: "Departman",
      departmentValue: "Tümü",
      person: "Kişi",
      personValue: "Seçiniz",
      year: "Yıl",
      yearValue: "Örn: 2025",
      processSet: "Süreç Seti Adı",
      processSetValue: "01.02-Satış ve Ticari Operasyonlar-20-08-2026-Q3",
      category: "Kategori",
      categoryValue: "Tümü",
      risk: "Risk seviyesi",
      risks: ["Kritik", "Yüksek", "Orta", "Düşük"],
      title: "AI Dönüşüm Önerileri",
      approval: "İnsan onayı gerekli",
      description:
        "Seçili değerlendirme setindeki olgunluk, risk, sistem uyumu ve verimlilik sonuçlarını birlikte inceleyerek sürece özel iyileştirme önerileri oluşturur.",
      assessment: "Değerlendirme seti:",
      preparing: "Öneriler hazırlanıyor...",
      analysing: "Süreç sonuçları yapay zeka tarafından inceleniyor",
      note: "Öneriler yalnızca karar desteğidir ve otomatik olarak kaydedilmez.",
    },
  },


  managementSnapshot: {
    title: "Bir Bakışta Süreç Sağlığınız",
    subtitle:
      "Yönetim için genel skor, risk, dijitalleşme durumu ve KPI seviyesi tek ekranda",
    badge: "YÖNETİM DEĞERİ",
    heading:
      "Sadi, kurumun süreç fotoğrafını üst yönetime tek bakışta gösterir.",
    bullets: [
      "Genel skor ve tamamlanma oranı birlikte görünür.",
      "Risk, onay, dijitalleşme ve KPI seviyesi aynı ekranda değerlendirilir.",
      "Yönetimin “neredeyiz?” sorusuna hızlı ve net cevap verir.",
    ],
    result: "Karar: Bugün en çok nereye odaklanmalıyız?",
    score: {
      title: "SÜREÇ OLGUNLUK SKORU",
      value: "3.48",
      max: "/ 7",
      position: "Sektör pozisyonu: Orta",
      note:
        "Skor, Mevcut Durum & Skor (0–7) ekranındaki değerlere göre hesaplanır.",
    },
    assessed: {
      title: "Değerlendirilen süreçler",
      value: "444 / 507 süreç",
      completion: "Tamamlanma oranı",
      percent: "88%",
      note:
        "Sürece Başla ekranında en az bir kez skor verilen süreçler değerlendirilmiş kabul edilir.",
    },
    improvement: {
      title: "Açık iyileştirme sayısı",
      value: "444",
      note: "İyileştirme notu girilmiş süreçler",
    },
    approval: {
      title: "Onay tanımı olan süreçler",
      value: "444",
      note: "RACI / onay detayı girilmiş süreçler",
    },
    risk: {
      title: "Risk dağılımı",
      subtitle: "Süreçlerin risk seviyesine göre dağılımı",
      total: "Toplam 444 süreç",
      rows: [
        { label: "Kritik", value: "35 süreç · %8", width: "8%", tone: "red" },
        { label: "Yüksek", value: "177 süreç · %40", width: "40%", tone: "orange" },
        { label: "Orta", value: "230 süreç · %52", width: "52%", tone: "yellow" },
        { label: "Düşük", value: "2 süreç · %0", width: "2%", tone: "gray" },
      ],
    },
    digital: {
      title: "Dijitalleşme durumu",
      total: "444 süreç",
      rows: [
        { label: "Evrak ağırlıklı", value: "18%", width: "18%", tone: "red" },
        {
          label: "Karma (evrak + sistem)",
          value: "64%",
          width: "64%",
          tone: "yellow",
        },
        {
          label: "Sistem ağırlıklı",
          value: "17%",
          width: "17%",
          tone: "green",
        },
      ],
    },
    approvalMethod: {
      title: "Onay yöntemi",
      total: "445 süreç",
      rows: [
        {
          label: "Evrak / manuel onay",
          value: "63%",
          width: "63%",
          tone: "red",
        },
        {
          label: "Dijital onay",
          value: "37%",
          width: "37%",
          tone: "blue",
        },
        {
          label: "Mobil onay",
          value: "0%",
          width: "1%",
          tone: "green",
        },
      ],
    },
    kpi: {
      title: "KPI / raporlama seviyesi",
      total: "444 süreç",
      rows: [
        { label: "KPI yok", value: "82", width: "20%", tone: "gray" },
        { label: "Temel KPI", value: "361", width: "85%", tone: "yellow" },
        { label: "Gelişmiş KPI", value: "1", width: "1%", tone: "green" },
      ],
      note:
        "KPI seviyesi, Mevcut Durum & Skor ekranındaki KPI alanından hesaplanır.",
    },
  },


  digitalRoadmap: {
    title: "Dijitalleşme Yol Haritasını Veriye Dayandırır",
    subtitle:
      "ERP / Sistem uyumu ve dijitalleşme adayları birlikte değerlendirilir",
    badge: "DİJİTAL DÖNÜŞÜM DEĞERİ",
    heading:
      "Sadi, dijitalleşme için en uygun süreç adaylarını görünür hale getirir.",
    bullets: [
      "ERP / sistem uyumu düşük alanlar kolayca fark edilir.",
      "Sistem dışı veya kısmi kalan süreçler önceliklendirilir.",
      "Dijitalleşme yatırımı için net bir yol haritası üretir.",
    ],
    result: "Karar: Hangi süreçleri dijitalleştirelim?",
    systemOutside: {
      title: "Sistem Dışı / Kısmi Süreçler",
      subtitle:
        "ERP veya mevcut sistemlerin dışında kalan, öncelikli incelenmesi gereken süreçler.",
      badge: "İlk 6",
      status: "Sistem Dışı",
      fit: "Uyum: 1/100",
      maturity: "Olgunluk: 1/7",
      risk: "Risk: Kritik",
      recommendation:
        "Süreç dijital forma, sistem kaydına ve mümkünse ERP/iş uygulaması içindeki standart akışa alınmalıdır.",
      items: [
        {
          title: "1. Görev ayrılığı ihlal raporu",
          area: "ERP · Yetki, Kontrol ve Uyum",
        },
        {
          title: "2. Yetkinlik eksikliği raporu",
          area: "İnsan Kaynakları · Eğitim ve Yetkinlik Yönetimi",
        },
        {
          title: "3. Yetki revizyon geçmişi raporu",
          area: "Bilgi İşlem · Kullanıcı ve Yetki Yönetimi",
        },
        {
          title: "4. Periyodik yetki gözden geçirme",
          area: "Bilgi İşlem · Kullanıcı ve Yetki Yönetimi",
        },
        {
          title: "5. Güvenlik uyum raporu",
          area: "Bilgi İşlem · Bilgi Güvenliği",
        },
        {
          title: "6. İyileştirme sonrası etki ölçümü",
          area: "ERP · ERP Süreç İyileştirme",
        },
      ],
    },
    productivity: {
      title: "Verimlilik Etkisi",
      subtitle: "Zaman kaybı, hata riski, maliyet etkisi ve kişi bağımlılığı",
      total: "444 süreç",
      averageLabel: "ORTALAMA ETKİ SKORU",
      averageValue: "57.28",
      averageMax: "/100",
      capaLabel: "DÖF ÖNERİLEN",
      capaValue: "290",
      capaUnit: "süreç",
      capaNote:
        "Yüksek/Kritik verimlilik etkisi olan süreçler aksiyona dönüştürülebilir.",
      distributionTitle: "Verimlilik seviyesi dağılımı",
      distributionTotal: "444 süreç",
      rows: [
        { label: "Kritik", value: "63 süreç · 14%", width: "14%", tone: "red" },
        { label: "Yüksek", value: "227 süreç · 51%", width: "51%", tone: "orange" },
        { label: "Orta", value: "151 süreç · 34%", width: "34%", tone: "yellow" },
        { label: "Düşük", value: "3 süreç · 1%", width: "1%", tone: "green" },
      ],
      lossTitle: "EN YAYGIN KAYIP TİPİ",
      lossValue: "Raporlama gecikmesi",
      lossTags: [
        "Raporlama gecikmesi: 68",
        "Kontrol / izleme eksikliği: 58",
        "Bekleme / gecikme: 47",
        "Hata riski: 45",
      ],
    },
  },


  privacySecurity: {
    title: "Gizlilik & Veri Güvenliği",
    subtitle:
      "Müşteri verisini sade, kontrollü ve güvenilir şekilde yönetmek için",
    intro:
      "Sadi’de amaç, veriyi sadece toplamak değil, yetkili kişiler tarafından kontrollü, güvenli ve düzenli biçimde yönetilebilir hale getirmektir.",
    cards: [
      {
        title: "Yetkili erişim",
        text:
          "Her kullanıcı yalnızca kendi rolüne ve yetkisine uygun alanları görür.",
        tone: "blue",
      },
      {
        title: "Müşteri verisinin ayrılığı",
        text:
          "Her şirketin verisi kendi yapısı içinde yönetilir, farklı müşteri verileri birbirine karışmaz.",
        tone: "green",
      },
      {
        title: "Güvenli kullanım",
        text:
          "Düzenli yedekleme, kontrollü erişim ve kayıt altına alınan işlemlerle veri güvenliği desteklenir.",
        tone: "amber",
      },
      {
        title: "Kolay devreye alma",
        text:
          "Ek bir karmaşık kurulum ihtiyacı olmadan, web üzerinden hızlı şekilde kullanıma alınabilir.",
        tone: "slate",
      },
    ],
    result:
      "Sadi, verinizi erişim kontrollü, düzenli ve güvenle yönetebileceğiniz sade bir SaaS ortamı sunar.",
  },

  market: {
    title: "Pazar Analizi",
    subtitle: "Hedef müşteri, kullanım alanı ve konumlandırma çerçevesi",
    targetProfileTitle: "Hedef müşteri profili",
    targetItems: [
      "ERP dönüşümü planlayan veya ERP yapısını güçlendirmek isteyen kurumlar",
      "Süreçlerini standardize etmek, ölçülebilir hale getirmek ve görünür kılmak isteyen şirketler",
      "Operasyonel verimlilik artışı hedefleyen orta ve büyük ölçekli organizasyonlar",
      "Denetime giren firmalar",
      "Yönetim için önceliklendirme, karar destek ve iyileştirme yol haritası ihtiyacı olan kurumlar",
    ],
    firstFocus:
      "İlk odak: ERP dönüşümü, süreç standardizasyonu ve operasyonel verimlilik ihtiyacı olan kurumlar",
    useCasesTitle: "Kullanım alanı",
    useCases: [
      "Süreç olgunluk analizi",
      "Dijital dönüşüm hazırlığı",
      "ERP hazırlık ve geçiş öncesi değerlendirme",
      "Operasyonel verimlilik",
      "Yönetim raporlama, önceliklendirme ve iyileştirme yol haritası",
    ],
    positionTitle: "Pazar konumu",
    positionDescription:
      "Sadi, süreç olgunluğu, ERP dönüşüm hazırlığı ve operasyonel karar destek alanlarının kesişiminde konumlanır.",
    positionLabels: {
      left: "Süreç yönetimi",
      center: "Sadi",
      right: "Dijital dönüşüm hazırlığı",
      bottom: "ERP hazırlık alanı",
    },
  },

  competitors: {
    title: "Rakip Analizi?",
    subtitle: "",
    advantage: "Sadi avantajı: yıllık lisans + odaklı süreç derinliği",
    note: "",
    legend: {
      good: "Var",
      mid: "Kısmen var",
      bad: "Yok",
    },
    headers: [
      { name: "sadi", price: "" },
      { name: "IBM PM", price: "$51K / yıl" },
      { name: "SAP Signavio", price: "Custom" },
      { name: "UiPath PM", price: "Custom" },
      { name: "ARIS", price: "Custom" },
      { name: "Bimser Ensemble", price: "Custom" },
    ],
    rows: [
      {
        label: "Fiyat erişilebilirliği",
        values: ["good", "bad", "mid", "mid", "mid", "mid"],
      },
      {
        label: "Süreç olgunluk skorlama",
        values: ["good", "bad", "mid", "bad", "mid", "good"],
      },
      {
        label: "Risk görünürlüğü",
        values: ["good", "good", "mid", "good", "good", "mid"],
      },
      {
        label: "Aksiyon / DÖF takibi",
        values: ["good", "mid", "mid", "mid", "mid", "mid"],
      },
      {
        label: "Tekrar ölçüm / versiyonlama",
        values: ["good", "mid", "mid", "mid", "mid", "good"],
      },
      {
        label: "AI destekli süreç keşfi ve iyileştirme önerileri",
        values: ["good", "good", "good", "good", "good", "mid"],
      },
      {
        label: "ERP / dijital dönüşüm hazırlığı",
        values: ["good", "mid", "good", "mid", "good", "mid"],
      },
      {
        label: "Hızlı devreye alma",
        values: ["good", "bad", "mid", "mid", "mid", "mid"],
      },
      {
        label: "Kurumsal odak",
        values: ["good", "good", "good", "good", "good", "good"],
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
    badge: "Product • AI-Powered • Process Maturity • Digital Transformation",
    productName: "sadi",
    title:
      "AI-Powered Process Maturity and Digital Transformation Readiness Platform",
    description:
      "Sadi measures department-based business processes, makes risks and bottlenecks visible, and enables organizations to manage and improve their business processes.",
    demoButton: "Request Demo",
    checks: [
      "ERP and digital transformation investments are being made, but priorities remain unclear because the current state of processes is not sufficiently visible.",
      "Process Knowledge Is Fragmented and Dependent on Individuals",
      "Processes Are Not Measured and Priorities Are Unclear",
      "Improvement Efforts Are Fragmented and Risks Are Identified Too Late",
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
      note:
        "Re-measurement with v+1: same process set → new version → proof of improvement",
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
        title:
          "Sadi moves process knowledge from individuals into the corporate system.",
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
    title:
      "It works as simply as a guide. Step by step from definition to development.",
    intro:
      "It measures your entire process in 6 steps and accelerates your digital maturity.",
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

  aiImprovement: {
    title: "Improve Processes with AI.",
    subtitle:
      "Sadi uses artificial intelligence to turn process knowledge and assessment results into actionable transformation recommendations.",
    badge: "AI SUPPORT FOR PROCESSES",
    heading:
      "Sadi structures process knowledge and generates process-specific improvement recommendations.",
    bullets: [
      "AI Process Inventory reviews PDF, Word, Excel, PowerPoint or text files and suggests departments, main processes, sub-processes and categories.",
      "AI Transformation Recommendations evaluate maturity, risk, system alignment and efficiency results together to generate process-specific recommendations.",
      "Users decide what should be transferred. AI does not automatically create records.",
    ],
    result:
      "Result: faster discovery, traceable recommendations, human-controlled",

    inventory: {
      badge: "AI Process Inventory",
      title: "Turn corporate documents into a process inventory",
      description:
        "Reviews procedures, job descriptions or process documents and generates department, main process, sub-process and category suggestions.",
      company: "Company",
      companyValue: "01.01 – Group Company A",
      department: "Department filter",
      departmentValue: "Supply Chain and Procurement",
      uploadTitle: "Upload document",
      uploadText: "PDF, Word, Excel, PowerPoint or text file • Maximum 4 MB",
      uploadButton: "Choose file",
      documentTitle: "Document title",
      documentText: "Document text",
      placeholder: "Paste the procedure, job description or process document here...",
      notice:
        "AI only generates recommendations. No records are created until you review and approve the transfer.",
    },

    recommendations: {
      company: "Company",
      companyValue: "01.02 — Group Company B",
      department: "Department",
      departmentValue: "All",
      person: "Person",
      personValue: "Select",
      year: "Year",
      yearValue: "e.g. 2025",
      processSet: "Process Set Name",
      processSetValue: "01.02-Sales and Commercial Operations-20-08-2026-Q3",
      category: "Category",
      categoryValue: "All",
      risk: "Risk level",
      risks: ["Critical", "High", "Medium", "Low"],
      title: "AI Transformation Recommendations",
      approval: "Human approval required",
      description:
        "Reviews maturity, risk, system alignment and efficiency results in the selected assessment set to generate process-specific improvement recommendations.",
      assessment: "Assessment set:",
      preparing: "Preparing recommendations...",
      analysing: "Process results are being analysed by AI",
      note: "Recommendations are decision support only and are not saved automatically.",
    },
  },


  managementSnapshot: {
    title: "Your Process Health at a Glance",
    subtitle:
      "Overall score, risk, digitalization status and KPI level on a single management screen",
    badge: "MANAGEMENT VALUE",
    heading:
      "Sadi gives senior management a clear snapshot of the organization’s process health at a glance.",
    bullets: [
      "Overall score and completion rate are visible together.",
      "Risk, approval, digitalization and KPI levels are evaluated on the same screen.",
      "It provides a fast and clear answer to management’s “where are we?” question.",
    ],
    result: "Decision: Where should we focus most today?",
    score: {
      title: "PROCESS MATURITY SCORE",
      value: "3.48",
      max: "/ 7",
      position: "Sector position: Medium",
      note:
        "The score is calculated from the values in the Current State & Score (0–7) screen.",
    },
    assessed: {
      title: "Assessed processes",
      value: "444 / 507 processes",
      completion: "Completion rate",
      percent: "88%",
      note:
        "Processes that have been scored at least once are considered assessed.",
    },
    improvement: {
      title: "Open improvement count",
      value: "444",
      note: "Processes with improvement notes",
    },
    approval: {
      title: "Processes with approval definition",
      value: "444",
      note: "Processes with RACI / approval details",
    },
    risk: {
      title: "Risk distribution",
      subtitle: "Distribution of processes by risk level",
      total: "Total 444 processes",
      rows: [
        { label: "Critical", value: "35 processes · 8%", width: "8%", tone: "red" },
        { label: "High", value: "177 processes · 40%", width: "40%", tone: "orange" },
        { label: "Medium", value: "230 processes · 52%", width: "52%", tone: "yellow" },
        { label: "Low", value: "2 processes · 0%", width: "2%", tone: "gray" },
      ],
    },
    digital: {
      title: "Digitalization status",
      total: "444 processes",
      rows: [
        { label: "Paper-heavy", value: "18%", width: "18%", tone: "red" },
        {
          label: "Hybrid (paper + system)",
          value: "64%",
          width: "64%",
          tone: "yellow",
        },
        {
          label: "System-heavy",
          value: "17%",
          width: "17%",
          tone: "green",
        },
      ],
    },
    approvalMethod: {
      title: "Approval method",
      total: "445 processes",
      rows: [
        {
          label: "Paper / manual approval",
          value: "63%",
          width: "63%",
          tone: "red",
        },
        {
          label: "Digital approval",
          value: "37%",
          width: "37%",
          tone: "blue",
        },
        {
          label: "Mobile approval",
          value: "0%",
          width: "1%",
          tone: "green",
        },
      ],
    },
    kpi: {
      title: "KPI / reporting level",
      total: "444 processes",
      rows: [
        { label: "No KPI", value: "82", width: "20%", tone: "gray" },
        { label: "Basic KPI", value: "361", width: "85%", tone: "yellow" },
        { label: "Advanced KPI", value: "1", width: "1%", tone: "green" },
      ],
      note:
        "KPI level is calculated from the KPI field in the Current State & Score screen.",
    },
  },


  digitalRoadmap: {
    title: "Build the Digitalization Roadmap on Data",
    subtitle:
      "ERP / system alignment and digitalization candidates are evaluated together",
    badge: "DIGITAL TRANSFORMATION VALUE",
    heading:
      "Sadi makes the most suitable process candidates for digitalization visible.",
    bullets: [
      "Areas with low ERP / system alignment can be identified easily.",
      "Processes that remain outside systems or are only partially digitized are prioritized.",
      "It creates a clear roadmap for digitalization investments.",
    ],
    result: "Decision: Which processes should we digitize?",
    systemOutside: {
      title: "Outside-System / Partially Digitized Processes",
      subtitle:
        "Processes outside ERP or existing systems that should be reviewed with priority.",
      badge: "Top 6",
      status: "Outside System",
      fit: "Fit: 1/100",
      maturity: "Maturity: 1/7",
      risk: "Risk: Critical",
      recommendation:
        "The process should be moved to a digital form, system record and, where possible, a standard flow within the ERP/business application.",
      items: [
        {
          title: "1. Segregation of duties violation report",
          area: "ERP · Authorization, Control and Compliance",
        },
        {
          title: "2. Competency gap report",
          area: "Human Resources · Training and Competency Management",
        },
        {
          title: "3. Authorization revision history report",
          area: "IT · User and Authorization Management",
        },
        {
          title: "4. Periodic authorization review",
          area: "IT · User and Authorization Management",
        },
        {
          title: "5. Security compliance report",
          area: "IT · Information Security",
        },
        {
          title: "6. Post-improvement impact measurement",
          area: "ERP · ERP Process Improvement",
        },
      ],
    },
    productivity: {
      title: "Productivity Impact",
      subtitle: "Time loss, error risk, cost impact and dependency on individuals",
      total: "444 processes",
      averageLabel: "AVERAGE IMPACT SCORE",
      averageValue: "57.28",
      averageMax: "/100",
      capaLabel: "CAPA RECOMMENDED",
      capaValue: "290",
      capaUnit: "processes",
      capaNote:
        "Processes with high/critical productivity impact can be converted into actions.",
      distributionTitle: "Productivity level distribution",
      distributionTotal: "444 processes",
      rows: [
        { label: "Critical", value: "63 processes · 14%", width: "14%", tone: "red" },
        { label: "High", value: "227 processes · 51%", width: "51%", tone: "orange" },
        { label: "Medium", value: "151 processes · 34%", width: "34%", tone: "yellow" },
        { label: "Low", value: "3 processes · 1%", width: "1%", tone: "green" },
      ],
      lossTitle: "MOST COMMON LOSS TYPE",
      lossValue: "Reporting delay",
      lossTags: [
        "Reporting delay: 68",
        "Control / monitoring gap: 58",
        "Waiting / delay: 47",
        "Error risk: 45",
      ],
    },
  },


  privacySecurity: {
    title: "Privacy & Data Security",
    subtitle:
      "A simple, controlled and reliable way to manage customer data",
    intro:
      "Sadi is designed not only to collect data, but to make it manageable in a controlled, secure and organized way by authorized users.",
    cards: [
      {
        title: "Authorized access",
        text:
          "Each user only sees the areas permitted by their role and authorization.",
        tone: "blue",
      },
      {
        title: "Customer data separation",
        text:
          "Each company’s data is managed within its own structure, and data from different customers does not mix.",
        tone: "green",
      },
      {
        title: "Secure usage",
        text:
          "Data security is supported through regular backups, controlled access and recorded operations.",
        tone: "amber",
      },
      {
        title: "Easy deployment",
        text:
          "It can be put into use quickly over the web without requiring a complex additional installation.",
        tone: "slate",
      },
    ],
    result:
      "Sadi provides a simple SaaS environment where your data can be managed with controlled access, consistency and security.",
  },

  market: {
    title: "Market Analysis",
    subtitle: "Target customer, use case, and positioning framework",
    targetProfileTitle: "Target customer profile",
    targetItems: [
      "Organizations planning ERP transformation or strengthening their existing ERP structure",
      "Companies aiming to standardize, measure and make their processes more visible",
      "Mid-sized and large organizations targeting higher operational efficiency",
      "Companies subject to audits",
      "Organizations needing management prioritization, decision support and an improvement roadmap",
    ],
    firstFocus:
      "Initial focus: organizations needing ERP transformation, process standardization and operational efficiency",
    useCasesTitle: "Use cases",
    useCases: [
      "Process maturity analysis",
      "Digital transformation readiness",
      "ERP readiness and pre-transition assessment",
      "Operational efficiency",
      "Management reporting, prioritization and improvement roadmap",
    ],
    positionTitle: "Market position",
    positionDescription:
      "Sadi is positioned at the intersection of process maturity, ERP transformation readiness, and operational decision support.",
    positionLabels: {
      left: "Process management",
      center: "Sadi",
      right: "Digital transformation readiness",
      bottom: "ERP readiness area",
    },
  },

  competitors: {
    title: "Competitive Analysis?",
    subtitle: "",
    advantage: "Sadi advantage: annual license + focused process depth",
    note: "",
    legend: {
      good: "Available",
      mid: "Partially available",
      bad: "Not available",
    },
    headers: [
      { name: "sadi", price: "" },
      { name: "IBM PM", price: "$51K / year" },
      { name: "SAP Signavio", price: "Custom" },
      { name: "UiPath PM", price: "Custom" },
      { name: "ARIS", price: "Custom" },
      { name: "Bimser Ensemble", price: "Custom" },
    ],
    rows: [
      {
        label: "Price accessibility",
        values: ["good", "bad", "mid", "mid", "mid", "mid"],
      },
      {
        label: "Process maturity scoring",
        values: ["good", "bad", "mid", "bad", "mid", "good"],
      },
      {
        label: "Risk visibility",
        values: ["good", "good", "mid", "good", "good", "mid"],
      },
      {
        label: "Action / CAPA tracking",
        values: ["good", "mid", "mid", "mid", "mid", "mid"],
      },
      {
        label: "Re-measurement / versioning",
        values: ["good", "mid", "mid", "mid", "mid", "good"],
      },
      {
        label: "AI-supported process discovery and improvement recommendations",
        values: ["good", "good", "good", "good", "good", "mid"],
      },
      {
        label: "ERP / digital transformation readiness",
        values: ["good", "mid", "good", "mid", "good", "mid"],
      },
      {
        label: "Fast deployment",
        values: ["good", "bad", "mid", "mid", "mid", "mid"],
      },
      {
        label: "Enterprise focus",
        values: ["good", "good", "good", "good", "good", "good"],
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


function getSnapshotBarClass(tone: string) {
  if (tone === "red") return "bg-[#FF4565]";
  if (tone === "orange") return "bg-[#FF8A00]";
  if (tone === "yellow") return "bg-[#FFB800]";
  if (tone === "green") return "bg-[#18BF7A]";
  if (tone === "blue") return "bg-[#17AFE5]";
  return "bg-[#CBD5E1]";
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

              <div className="mt-8 grid auto-rows-fr gap-3 sm:grid-cols-2">
                {copy.hero.checks.map((item, index) => (
                  <div
                    key={item}
                    className="flex h-full min-h-[88px] items-start gap-3 rounded-2xl border border-slate-200 bg-[#F8FBFF] px-4 py-3.5 shadow-sm"
                  >
                    <CheckCircle2
                      size={18}
                      strokeWidth={2}
                      color="#608BC1"
                      className="mt-0.5 shrink-0"
                    />

                    <span
                      className={[
                        "text-slate-700",
                        index === 0
                          ? "text-[13px] leading-5 sm:text-[13px] sm:leading-[1.35rem]"
                          : "text-sm font-medium leading-6",
                      ].join(" ")}
                    >
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
                        <BarChart3
                          size={16}
                          strokeWidth={2}
                          color="#608BC1"
                        />
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

      {/* AI IMPROVEMENT */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div
            className="relative overflow-hidden rounded-[32px] border border-[#CBDCEB] bg-white p-6 shadow-[0_12px_40px_rgba(19,62,135,0.08)] sm:p-8 lg:p-10"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(96,139,193,0.16) 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
          >
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight text-[#1E316D] sm:text-4xl lg:text-5xl">
                {copy.aiImprovement.title}
              </h2>

              <p className="mt-2 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">
                {copy.aiImprovement.subtitle}
              </p>

              <div className="mt-8 grid gap-8 xl:grid-cols-[1.55fr_0.85fr] xl:items-center">
                {/* LEFT - PRODUCT UI */}
                <div className="space-y-5">
                  {/* AI PROCESS INVENTORY CARD */}
                  <div className="overflow-hidden rounded-[24px] border border-[#B8CBE4] bg-white shadow-[0_14px_40px_rgba(19,62,135,0.10)]">
                    <div className="p-5 sm:p-6">
                      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                        <div className="max-w-2xl">
                          <div className="inline-flex items-center gap-2 rounded-full bg-[#EAF2FB] px-3 py-1.5 text-xs font-semibold text-[#133E87]">
                            <Sparkles size={14} strokeWidth={2} />
                            {copy.aiImprovement.inventory.badge}
                          </div>

                          <h3 className="mt-4 text-lg font-bold text-slate-900 sm:text-xl">
                            {copy.aiImprovement.inventory.title}
                          </h3>

                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            {copy.aiImprovement.inventory.description}
                          </p>
                        </div>

                        <div className="max-w-sm rounded-2xl border border-[#F5D378] bg-[#FFF9E9] px-4 py-3">
                          <div className="flex items-start gap-3">
                            <ShieldCheck
                              size={18}
                              strokeWidth={2}
                              className="mt-0.5 shrink-0 text-[#A74B00]"
                            />
                            <p className="text-xs leading-5 text-[#9A4A00]">
                              {copy.aiImprovement.inventory.notice}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 grid gap-4 md:grid-cols-2">
                        <div>
                          <p className="mb-2 text-xs font-medium text-slate-700">
                            {copy.aiImprovement.inventory.company}
                            <span className="text-red-500"> *</span>
                          </p>

                          <div className="flex h-11 items-center justify-between rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-800">
                            <span>
                              {copy.aiImprovement.inventory.companyValue}
                            </span>
                            <span className="text-slate-500">⌄</span>
                          </div>
                        </div>

                        <div>
                          <p className="mb-2 text-xs font-medium text-slate-700">
                            {copy.aiImprovement.inventory.department}
                          </p>

                          <div className="flex h-11 items-center justify-between rounded-xl border border-[#608BC1] bg-white px-4 text-sm text-slate-800">
                            <span>
                              {copy.aiImprovement.inventory.departmentValue}
                            </span>
                            <span className="text-slate-500">⌄</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-5 rounded-[20px] border-2 border-dashed border-[#93B7E5] bg-[#F8FBFF] p-5">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <p className="text-sm font-semibold text-slate-900">
                              {copy.aiImprovement.inventory.uploadTitle}
                            </p>

                            <p className="mt-1 text-xs leading-5 text-slate-600">
                              {copy.aiImprovement.inventory.uploadText}
                            </p>
                          </div>

                          <button
                            type="button"
                            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-[#608BC1] bg-white px-4 py-2 text-sm font-semibold text-[#133E87] shadow-sm"
                          >
                            <UploadCloud size={17} strokeWidth={2} />
                            {copy.aiImprovement.inventory.uploadButton}
                          </button>
                        </div>
                      </div>

                      <div className="mt-5">
                        <p className="mb-2 text-xs font-medium text-slate-700">
                          {copy.aiImprovement.inventory.documentTitle}
                        </p>

                        <div className="h-11 rounded-xl border border-slate-200 bg-white" />
                      </div>

                      <div className="mt-4">
                        <p className="mb-2 text-xs font-medium text-slate-700">
                          {copy.aiImprovement.inventory.documentText}
                        </p>

                        <div className="min-h-[86px] rounded-xl border border-slate-200 bg-white px-4 py-3">
                          <p className="text-sm text-slate-400">
                            {copy.aiImprovement.inventory.placeholder}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* AI TRANSFORMATION RECOMMENDATIONS CARD */}
                  <div className="overflow-hidden rounded-[24px] border border-[#AAB8CC] bg-white shadow-[0_14px_40px_rgba(19,62,135,0.10)]">
                    <div className="p-5 sm:p-6">
                      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                        <div>
                          <p className="mb-2 text-xs font-medium text-slate-600">
                            {copy.aiImprovement.recommendations.company}
                          </p>
                          <div className="flex h-10 items-center justify-between rounded-lg border border-slate-200 px-3 text-xs text-slate-700">
                            <span>
                              {
                                copy.aiImprovement.recommendations
                                  .companyValue
                              }
                            </span>
                            <span>⌄</span>
                          </div>
                        </div>

                        <div>
                          <p className="mb-2 text-xs font-medium text-slate-600">
                            {copy.aiImprovement.recommendations.department}
                          </p>
                          <div className="flex h-10 items-center justify-between rounded-lg border border-slate-200 px-3 text-xs text-slate-700">
                            <span>
                              {
                                copy.aiImprovement.recommendations
                                  .departmentValue
                              }
                            </span>
                            <span>⌄</span>
                          </div>
                        </div>

                        <div>
                          <p className="mb-2 text-xs font-medium text-slate-600">
                            {copy.aiImprovement.recommendations.person}
                          </p>
                          <div className="flex h-10 items-center justify-between rounded-lg border border-slate-200 px-3 text-xs text-slate-700">
                            <span>
                              {copy.aiImprovement.recommendations.personValue}
                            </span>
                            <span>⌄</span>
                          </div>
                        </div>

                        <div>
                          <p className="mb-2 text-xs font-medium text-slate-600">
                            {copy.aiImprovement.recommendations.year}
                          </p>
                          <div className="flex h-10 items-center rounded-lg border border-slate-200 px-3 text-xs text-slate-400">
                            {copy.aiImprovement.recommendations.yearValue}
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 grid gap-4 lg:grid-cols-2">
                        <div>
                          <p className="mb-2 text-xs font-medium text-slate-600">
                            {copy.aiImprovement.recommendations.processSet}
                          </p>

                          <div className="flex min-h-10 items-center rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-700">
                            {
                              copy.aiImprovement.recommendations
                                .processSetValue
                            }
                          </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <p className="mb-2 text-xs font-medium text-slate-600">
                              {copy.aiImprovement.recommendations.category}
                            </p>

                            <div className="flex h-10 items-center justify-between rounded-lg border border-slate-200 px-3 text-xs text-slate-700">
                              <span>
                                {
                                  copy.aiImprovement.recommendations
                                    .categoryValue
                                }
                              </span>
                              <span>⌄</span>
                            </div>
                          </div>

                          <div>
                            <p className="mb-2 text-xs font-medium text-slate-600">
                              {copy.aiImprovement.recommendations.risk}
                            </p>

                            <div className="flex flex-wrap gap-1.5">
                              {copy.aiImprovement.recommendations.risks.map(
                                (risk) => (
                                  <span
                                    key={risk}
                                    className="rounded-full border border-slate-200 bg-white px-2.5 py-1.5 text-[11px] text-slate-700"
                                  >
                                    {risk}
                                  </span>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="my-5 h-px bg-slate-200" />

                      <div className="rounded-[20px] border border-[#BBD0EA] bg-gradient-to-r from-[#F8FBFF] via-white to-[#FFFDF3] p-4 sm:p-5">
                        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                          <div className="flex items-start gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#133E87] text-white">
                              <Sparkles size={19} strokeWidth={2} />
                            </div>

                            <div>
                              <div className="flex flex-wrap items-center gap-2">
                                <p className="text-sm font-semibold text-slate-900">
                                  {
                                    copy.aiImprovement.recommendations
                                      .title
                                  }
                                </p>

                                <span className="rounded-full border border-[#F4D37A] bg-[#FFF8DF] px-2 py-1 text-[10px] font-medium text-[#9A5A00]">
                                  {
                                    copy.aiImprovement.recommendations
                                      .approval
                                  }
                                </span>
                              </div>

                              <p className="mt-2 max-w-3xl text-xs leading-5 text-slate-600">
                                {
                                  copy.aiImprovement.recommendations
                                    .description
                                }
                              </p>

                              <div className="mt-3 inline-flex rounded-lg border border-[#BBD0EA] bg-[#EEF5FC] px-3 py-2 text-[11px] font-medium text-[#133E87]">
                                <span className="mr-1 font-semibold">
                                  {
                                    copy.aiImprovement.recommendations
                                      .assessment
                                  }
                                </span>
                                {
                                  copy.aiImprovement.recommendations
                                    .processSetValue
                                }
                              </div>
                            </div>
                          </div>

                          <div className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#CBD9E8] px-4 py-2.5 text-xs font-semibold text-white">
                            <RefreshCcw size={15} strokeWidth={2} />
                            {
                              copy.aiImprovement.recommendations
                                .preparing
                            }
                          </div>
                        </div>

                        <div className="mt-4 rounded-xl border border-slate-200 bg-white px-4 py-4">
                          <div className="flex items-start gap-3">
                            <RefreshCcw
                              size={18}
                              strokeWidth={2}
                              className="mt-0.5 shrink-0 text-[#133E87]"
                            />

                            <div>
                              <p className="text-xs font-medium text-slate-700">
                                {
                                  copy.aiImprovement.recommendations
                                    .analysing
                                }
                              </p>

                              <p className="mt-1 text-[11px] leading-5 text-slate-500">
                                {copy.aiImprovement.recommendations.note}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT - EXPLANATION */}
                <div className="rounded-[40px] border border-[#CBDCEB] bg-white px-6 py-8 shadow-[0_14px_40px_rgba(19,62,135,0.06)] sm:px-8 sm:py-10">
                  <div className="flex justify-center">
                    <span className="inline-flex rounded-lg bg-[#608BC1] px-5 py-2.5 text-sm font-bold text-white sm:text-base">
                      {copy.aiImprovement.badge}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold leading-7 text-[#1E316D] sm:text-2xl sm:leading-8">
                    {copy.aiImprovement.heading}
                  </h3>

                  <div className="mt-8 space-y-5">
                    {copy.aiImprovement.bullets.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-800" />

                        <p className="text-base leading-7 text-slate-700">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-xl bg-[#EAF2FB] px-5 py-4 text-center">
                    <p className="text-base font-bold leading-6 text-[#133E87]">
                      {copy.aiImprovement.result}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>


      {/* MANAGEMENT PROCESS SNAPSHOT */}
      <section className="bg-[#f8fbff] py-16 sm:py-20">
        <Container>
          <div
            className="relative overflow-hidden rounded-[32px] border border-[#CBDCEB] bg-white p-6 shadow-[0_12px_40px_rgba(19,62,135,0.08)] sm:p-8 lg:p-10"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(96,139,193,0.16) 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
          >
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight text-[#1E316D] sm:text-4xl lg:text-5xl">
                {copy.managementSnapshot.title}
              </h2>

              <p className="mt-2 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">
                {copy.managementSnapshot.subtitle}
              </p>

              <div className="mt-10 grid gap-8 xl:grid-cols-[1.6fr_0.85fr] xl:items-stretch">
                <div className="rounded-[38px] border border-[#CBDCEB] bg-white p-4 shadow-[0_14px_40px_rgba(19,62,135,0.07)] sm:p-5">
                  <div className="grid gap-4 lg:grid-cols-[1fr_1.35fr_1fr]">
                    <div className="relative overflow-hidden rounded-[24px] border border-[#D8E2EE] bg-gradient-to-br from-[#EDF5FC] via-[#FFFDF5] to-white p-5">
                      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#CBDCEB]/40" />

                      <p className="relative text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
                        {copy.managementSnapshot.score.title}
                      </p>

                      <div className="relative mt-4 flex items-end gap-2">
                        <Gauge
                          size={34}
                          strokeWidth={2}
                          className="mb-1 text-[#133E87]"
                        />
                        <span className="text-4xl font-bold tracking-tight text-slate-900">
                          {copy.managementSnapshot.score.value}
                        </span>
                        <span className="mb-1 text-lg font-semibold text-slate-500">
                          {copy.managementSnapshot.score.max}
                        </span>
                      </div>

                      <div className="relative mt-4 inline-flex rounded-full border border-[#F2D68E] bg-[#FFF4D8] px-3 py-1.5 text-xs font-semibold text-[#A75A00]">
                        {copy.managementSnapshot.score.position}
                      </div>

                      <p className="relative mt-4 text-[11px] leading-5 text-slate-500">
                        {copy.managementSnapshot.score.note}
                      </p>
                    </div>

                    <div className="rounded-[24px] border border-[#D8E2EE] bg-white p-5">
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F1F7FD] text-[#178FE5]">
                          <BarChart3 size={20} strokeWidth={2} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-600">
                            {copy.managementSnapshot.assessed.title}
                          </p>
                          <p className="mt-1 text-xl font-bold text-slate-900">
                            {copy.managementSnapshot.assessed.value}
                          </p>
                        </div>
                      </div>

                      <div className="mt-8 flex items-center justify-between text-xs text-slate-500">
                        <span>{copy.managementSnapshot.assessed.completion}</span>
                        <span className="font-semibold">
                          {copy.managementSnapshot.assessed.percent}
                        </span>
                      </div>

                      <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-slate-100">
                        <div className="h-full w-[88%] rounded-full bg-[#608BC1]" />
                      </div>

                      <p className="mt-4 text-[11px] leading-5 text-slate-500">
                        {copy.managementSnapshot.assessed.note}
                      </p>
                    </div>

                    <div className="grid gap-4">
                      <div className="rounded-[22px] border border-[#F4D99F] bg-[#FFF9EC] p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF0C7] text-[#D26400]">
                            <Wrench size={19} strokeWidth={2} />
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-[#B75A00]">
                              {copy.managementSnapshot.improvement.title}
                            </p>
                            <p className="mt-1 text-xl font-bold text-[#9A3F00]">
                              {copy.managementSnapshot.improvement.value}
                            </p>
                          </div>
                        </div>
                        <p className="mt-3 text-right text-[11px] text-[#B26820]">
                          {copy.managementSnapshot.improvement.note}
                        </p>
                      </div>

                      <div className="rounded-[22px] border border-[#BFE9D5] bg-[#F0FCF7] p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D7F8E9] text-[#159B68]">
                            <CircleCheckBig size={19} strokeWidth={2} />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-[#13895C]">
                              {copy.managementSnapshot.approval.title}
                            </p>
                            <p className="mt-1 text-xl font-bold text-[#137A55]">
                              {copy.managementSnapshot.approval.value}
                            </p>
                          </div>
                        </div>
                        <p className="mt-3 text-right text-[11px] text-[#25866A]">
                          {copy.managementSnapshot.approval.note}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-4 lg:grid-cols-4">
                    <div className="rounded-[24px] border border-[#D8E2EE] bg-white p-4">
                      <div className="flex items-start gap-2">
                        <ShieldAlert
                          size={20}
                          strokeWidth={2}
                          className="mt-0.5 text-[#EF4565]"
                        />
                        <div>
                          <p className="text-sm font-semibold text-slate-700">
                            {copy.managementSnapshot.risk.title}
                          </p>
                          <p className="text-[10px] leading-4 text-slate-400">
                            {copy.managementSnapshot.risk.subtitle}
                          </p>
                        </div>
                      </div>

                      <p className="mt-2 text-right text-[10px] text-slate-500">
                        {copy.managementSnapshot.risk.total}
                      </p>

                      <div className="mt-4 space-y-3">
                        {copy.managementSnapshot.risk.rows.map((row) => (
                          <div key={row.label}>
                            <div className="flex items-center justify-between gap-2 text-[11px]">
                              <span className="font-medium text-slate-700">
                                {row.label}
                              </span>
                              <span className="text-slate-500">{row.value}</span>
                            </div>
                            <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-slate-100">
                              <div
                                className={`h-full rounded-full ${getSnapshotBarClass(
                                  row.tone
                                )}`}
                                style={{ width: row.width }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[24px] border border-[#D8E2EE] bg-gradient-to-br from-white to-[#FFF9E9] p-4">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <GitBranch
                            size={20}
                            strokeWidth={2}
                            className="text-[#133E87]"
                          />
                          <p className="text-sm font-semibold text-slate-700">
                            {copy.managementSnapshot.digital.title}
                          </p>
                        </div>
                        <span className="rounded-full border border-slate-200 bg-white px-2 py-1 text-[10px] text-slate-500">
                          {copy.managementSnapshot.digital.total}
                        </span>
                      </div>

                      <div className="mt-6 space-y-4">
                        {copy.managementSnapshot.digital.rows.map((row) => (
                          <div key={row.label}>
                            <div className="flex items-center justify-between gap-2 text-[11px]">
                              <span className="font-medium text-slate-700">
                                {row.label}
                              </span>
                              <span className="font-semibold text-slate-700">
                                {row.value}
                              </span>
                            </div>
                            <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-slate-100">
                              <div
                                className={`h-full rounded-full ${getSnapshotBarClass(
                                  row.tone
                                )}`}
                                style={{ width: row.width }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[24px] border border-[#D8E2EE] bg-gradient-to-br from-white to-[#EEF6FF] p-4">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <CircleCheckBig
                            size={20}
                            strokeWidth={2}
                            className="text-[#133E87]"
                          />
                          <p className="text-sm font-semibold text-slate-700">
                            {copy.managementSnapshot.approvalMethod.title}
                          </p>
                        </div>
                        <span className="rounded-full border border-slate-200 bg-white px-2 py-1 text-[10px] text-slate-500">
                          {copy.managementSnapshot.approvalMethod.total}
                        </span>
                      </div>

                      <div className="mt-6 space-y-4">
                        {copy.managementSnapshot.approvalMethod.rows.map(
                          (row) => (
                            <div key={row.label}>
                              <div className="flex items-center justify-between gap-2 text-[11px]">
                                <span className="font-medium text-slate-700">
                                  {row.label}
                                </span>
                                <span className="font-semibold text-slate-700">
                                  {row.value}
                                </span>
                              </div>
                              <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-slate-100">
                                <div
                                  className={`h-full rounded-full ${getSnapshotBarClass(
                                    row.tone
                                  )}`}
                                  style={{ width: row.width }}
                                />
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    <div className="rounded-[24px] border border-[#D8E2EE] bg-gradient-to-br from-white to-[#EEF6FF] p-4">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <BarChart3
                            size={20}
                            strokeWidth={2}
                            className="text-[#608BC1]"
                          />
                          <p className="text-sm font-semibold text-slate-700">
                            {copy.managementSnapshot.kpi.title}
                          </p>
                        </div>
                        <span className="rounded-full border border-slate-200 bg-white px-2 py-1 text-[10px] text-slate-500">
                          {copy.managementSnapshot.kpi.total}
                        </span>
                      </div>

                      <div className="mt-6 space-y-4">
                        {copy.managementSnapshot.kpi.rows.map((row) => (
                          <div key={row.label}>
                            <div className="flex items-center justify-between gap-2 text-[11px]">
                              <span className="font-medium text-slate-700">
                                {row.label}
                              </span>
                              <span className="font-semibold text-slate-700">
                                {row.value}
                              </span>
                            </div>
                            <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-slate-100">
                              <div
                                className={`h-full rounded-full ${getSnapshotBarClass(
                                  row.tone
                                )}`}
                                style={{ width: row.width }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      <p className="mt-5 text-[10px] leading-4 text-slate-400">
                        {copy.managementSnapshot.kpi.note}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[42px] border border-[#CBDCEB] bg-white px-6 py-8 shadow-[0_14px_40px_rgba(19,62,135,0.06)] sm:px-8 sm:py-10">
                  <div className="flex justify-center">
                    <span className="inline-flex min-w-[230px] justify-center rounded-lg bg-[#608BC1] px-5 py-3 text-sm font-bold text-white sm:text-base">
                      {copy.managementSnapshot.badge}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-bold leading-7 text-[#1E316D] sm:text-2xl sm:leading-8">
                    {copy.managementSnapshot.heading}
                  </h3>

                  <div className="mt-8 space-y-5">
                    {copy.managementSnapshot.bullets.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-800" />
                        <p className="text-base leading-7 text-slate-700">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 rounded-xl bg-[#EAF2FB] px-5 py-4 text-center">
                    <p className="text-base font-bold leading-6 text-[#133E87]">
                      {copy.managementSnapshot.result}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>


      {/* DIGITAL ROADMAP */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div
            className="relative overflow-hidden rounded-[32px] border border-[#CBDCEB] bg-white p-6 shadow-[0_12px_40px_rgba(19,62,135,0.08)] sm:p-8 lg:p-10"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(96,139,193,0.16) 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
          >
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight text-[#1E316D] sm:text-4xl lg:text-5xl">
                {copy.digitalRoadmap.title}
              </h2>

              <p className="mt-2 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">
                {copy.digitalRoadmap.subtitle}
              </p>

              <div className="mt-10 grid gap-8 xl:grid-cols-[1.6fr_0.85fr] xl:items-stretch">
                {/* LEFT - DIGITALIZATION EVIDENCE */}
                <div className="relative rounded-[38px] border border-[#CBDCEB] bg-white p-4 shadow-[0_14px_40px_rgba(19,62,135,0.07)] sm:p-5">
                  {/* SYSTEM OUTSIDE / PARTIAL PROCESSES */}
                  <div className="rounded-[26px] border border-[#D7E1EC] bg-white p-4 sm:p-5">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-start gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#608BC1] text-white shadow-sm">
                          <ShieldAlert size={21} strokeWidth={2} />
                        </div>

                        <div>
                          <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                            {copy.digitalRoadmap.systemOutside.title}
                          </h3>
                          <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                            {copy.digitalRoadmap.systemOutside.subtitle}
                          </p>
                        </div>
                      </div>

                      <span className="inline-flex shrink-0 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-500">
                        {copy.digitalRoadmap.systemOutside.badge}
                      </span>
                    </div>

                    <div className="mt-4 grid gap-3 md:grid-cols-2">
                      {copy.digitalRoadmap.systemOutside.items.map((item) => (
                        <div
                          key={item.title}
                          className="rounded-[20px] border border-slate-200 bg-white p-4 shadow-sm"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <p className="text-sm font-semibold leading-6 text-slate-900">
                                {item.title}
                              </p>
                              <p className="mt-1 text-xs leading-5 text-[#608BC1]">
                                {item.area}
                              </p>
                            </div>

                            <span className="shrink-0 rounded-full border border-[#F7B7B7] bg-[#FFF5F5] px-2.5 py-1 text-[10px] font-semibold text-[#D72828]">
                              {copy.digitalRoadmap.systemOutside.status}
                            </span>
                          </div>

                          <div className="mt-3 flex flex-wrap gap-2">
                            <span className="rounded-full border border-[#CBDCEB] bg-white px-2.5 py-1 text-[10px] text-[#133E87]">
                              {copy.digitalRoadmap.systemOutside.fit}
                            </span>
                            <span className="rounded-full border border-[#CBDCEB] bg-white px-2.5 py-1 text-[10px] text-[#133E87]">
                              {copy.digitalRoadmap.systemOutside.maturity}
                            </span>
                            <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[10px] text-slate-700">
                              {copy.digitalRoadmap.systemOutside.risk}
                            </span>
                          </div>

                          <p className="mt-3 text-[11px] leading-5 text-slate-500">
                            {copy.digitalRoadmap.systemOutside.recommendation}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* PRODUCTIVITY IMPACT */}
                  <div className="relative mt-5 rounded-[26px] border border-[#D7E1EC] bg-gradient-to-br from-white via-white to-[#F3F8FD] p-4 shadow-[0_12px_35px_rgba(19,62,135,0.08)] sm:p-5 xl:-mt-64 xl:ml-20 xl:mr-4">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#133E87] text-white">
                          <BarChart3 size={19} strokeWidth={2} />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                            {copy.digitalRoadmap.productivity.title}
                          </h3>
                          <p className="mt-1 text-[11px] leading-5 text-slate-500">
                            {copy.digitalRoadmap.productivity.subtitle}
                          </p>
                        </div>
                      </div>

                      <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] text-slate-500">
                        {copy.digitalRoadmap.productivity.total}
                      </span>
                    </div>

                    <div className="mt-4 grid gap-3 md:grid-cols-2">
                      <div className="rounded-[18px] border border-slate-200 bg-white p-4">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-slate-400">
                          {copy.digitalRoadmap.productivity.averageLabel}
                        </p>
                        <div className="mt-3 flex items-end gap-2">
                          <span className="text-3xl font-bold text-[#133E87]">
                            {copy.digitalRoadmap.productivity.averageValue}
                          </span>
                          <span className="mb-1 text-sm font-medium text-slate-500">
                            {copy.digitalRoadmap.productivity.averageMax}
                          </span>
                        </div>
                        <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-slate-100">
                          <div className="h-full w-[57.28%] rounded-full bg-[#133E87]" />
                        </div>
                      </div>

                      <div className="rounded-[18px] border border-slate-200 bg-white p-4">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-slate-400">
                          {copy.digitalRoadmap.productivity.capaLabel}
                        </p>
                        <div className="mt-3 flex items-end gap-2">
                          <span className="text-3xl font-bold text-[#F25A00]">
                            {copy.digitalRoadmap.productivity.capaValue}
                          </span>
                          <span className="mb-1 text-sm text-slate-500">
                            {copy.digitalRoadmap.productivity.capaUnit}
                          </span>
                        </div>
                        <p className="mt-3 text-[10px] leading-4 text-slate-500">
                          {copy.digitalRoadmap.productivity.capaNote}
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 rounded-[18px] border border-slate-200 bg-white p-3.5">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-xs font-semibold text-slate-700">
                          {copy.digitalRoadmap.productivity.distributionTitle}
                        </p>
                        <span className="text-[10px] text-slate-500">
                          {copy.digitalRoadmap.productivity.distributionTotal}
                        </span>
                      </div>

                      <div className="mt-4 space-y-3">
                        {copy.digitalRoadmap.productivity.rows.map((row) => (
                          <div key={row.label}>
                            <div className="flex items-center justify-between gap-3 text-[10px]">
                              <span className="font-medium text-slate-600">
                                {row.label}
                              </span>
                              <span className="text-slate-500">{row.value}</span>
                            </div>
                            <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-slate-100">
                              <div
                                className={`h-full rounded-full ${getSnapshotBarClass(
                                  row.tone
                                )}`}
                                style={{ width: row.width }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-3 rounded-[18px] border border-slate-200 bg-white p-3.5">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-slate-400">
                        {copy.digitalRoadmap.productivity.lossTitle}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-slate-900">
                        {copy.digitalRoadmap.productivity.lossValue}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {copy.digitalRoadmap.productivity.lossTags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-[#CBDCEB] bg-white px-2.5 py-1 text-[10px] text-slate-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT - DIGITAL TRANSFORMATION VALUE */}
                <div className="rounded-[42px] border border-[#CBDCEB] bg-white px-6 py-8 shadow-[0_14px_40px_rgba(19,62,135,0.06)] sm:px-8 sm:py-10">
                  <div className="flex justify-center">
                    <span className="inline-flex min-w-[250px] justify-center rounded-lg bg-[#608BC1] px-5 py-3 text-sm font-bold text-white sm:text-base">
                      {copy.digitalRoadmap.badge}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-bold leading-7 text-[#1E316D] sm:text-2xl sm:leading-8">
                    {copy.digitalRoadmap.heading}
                  </h3>

                  <div className="mt-8 space-y-5">
                    {copy.digitalRoadmap.bullets.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-800" />
                        <p className="text-base leading-7 text-slate-700">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 rounded-xl bg-[#EAF2FB] px-5 py-4 text-center">
                    <p className="text-base font-bold leading-6 text-[#133E87]">
                      {copy.digitalRoadmap.result}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>


      {/* PRIVACY & DATA SECURITY */}
      <section className="bg-[#f8fbff] py-16 sm:py-20">
        <Container>
          <div
            className="relative overflow-hidden rounded-[32px] border border-[#CBDCEB] bg-white p-6 shadow-[0_12px_40px_rgba(19,62,135,0.08)] sm:p-8 lg:p-10"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(96,139,193,0.16) 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
          >
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight text-[#1E316D] sm:text-4xl lg:text-5xl">
                {copy.privacySecurity.title}
              </h2>

              <p className="mt-2 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">
                {copy.privacySecurity.subtitle}
              </p>

              <div className="mt-10 rounded-[24px] border border-[#CBDCEB] bg-white px-6 py-6 shadow-sm sm:px-8">
                <p className="text-base font-semibold leading-8 text-[#1E316D] sm:text-lg">
                  {copy.privacySecurity.intro}
                </p>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {copy.privacySecurity.cards.map((card) => {
                  const toneClass =
                    card.tone === "blue"
                      ? "bg-[#EAF2FB] text-[#133E87]"
                      : card.tone === "green"
                      ? "bg-[#EAF8F2] text-[#176B55]"
                      : card.tone === "amber"
                      ? "bg-[#FFF6EA] text-[#8A5A19]"
                      : "bg-[#F3F5F8] text-[#334155]";

                  return (
                    <div
                      key={card.title}
                      className="rounded-[28px] border border-[#CBDCEB] bg-white p-6 shadow-sm sm:p-7"
                    >
                      <div
                        className={`inline-flex rounded-lg px-4 py-2 text-base font-bold ${toneClass}`}
                      >
                        {card.title}
                      </div>

                      <p className="mt-5 text-base leading-7 text-slate-700 sm:text-lg">
                        {card.text}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 rounded-xl bg-[#EAF8F2] px-6 py-4 text-center">
                <p className="text-base font-bold leading-7 text-[#133E87] sm:text-lg">
                  {copy.privacySecurity.result}
                </p>
              </div>
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
                    <p className="text-lg leading-8 text-slate-700">
                      {item}
                    </p>
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
                    <LayoutGrid
                      size={22}
                      strokeWidth={2}
                      color="#608BC1"
                    />
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
            <h2 className="text-3xl font-bold tracking-tight text-[#24195F] sm:text-4xl lg:text-5xl">
              {copy.competitors.title}
            </h2>

            {copy.competitors.subtitle ? (
              <p className="mt-3 text-base leading-8 text-slate-600 sm:text-lg">
                {copy.competitors.subtitle}
              </p>
            ) : null}
          </div>

          <div className="mt-8 overflow-hidden rounded-[28px] border border-[#CBDCEB] bg-white shadow-sm">
            <div className="overflow-x-auto">
              <div className="min-w-[1180px]">
                <div className="grid grid-cols-[2.35fr_repeat(6,1.02fr)] border-b border-slate-200 bg-[#F4F7FB]">
                  <div className="flex items-center justify-center bg-white px-4 py-3">
                    <div className="w-full rounded-xl border border-[#BFE7D0] bg-[#ECF9F0] px-4 py-2 text-center">
                      <p className="text-sm font-semibold leading-5 text-[#18764E]">
                        {copy.competitors.advantage}
                      </p>
                    </div>
                  </div>

                  {copy.competitors.headers.map((header, index) => (
                    <div
                      key={header.name}
                      className="flex min-h-[82px] flex-col items-center justify-center border-l border-slate-200 px-3 py-3 text-center"
                    >
                      <div
                        className={[
                          "font-bold leading-5",
                          index === 0
                            ? "text-xl text-slate-800 underline decoration-[#CBDCEB] underline-offset-4"
                            : "text-base text-[#29244F]",
                        ].join(" ")}
                      >
                        {header.name}
                      </div>

                      {header.price ? (
                        <div className="mt-1 text-base font-semibold leading-5 text-[#6B6B84]">
                          {header.price}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>

                {copy.competitors.rows.map((row, rowIndex) => (
                  <div
                    key={row.label}
                    className={[
                      "grid grid-cols-[2.35fr_repeat(6,1.02fr)] border-b border-slate-200",
                      rowIndex % 2 === 0 ? "bg-white" : "bg-slate-50/40",
                    ].join(" ")}
                  >
                    <div className="flex min-h-[58px] items-center px-7 py-3 text-base font-medium leading-6 text-slate-700">
                      {row.label}
                    </div>

                    {row.values.map((value, index) => (
                      <div
                        key={`${row.label}-${index}`}
                        className="flex min-h-[58px] items-center justify-center border-l border-slate-200 px-3 py-3"
                      >
                        {getCompetitorCell(value)}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-7 gap-y-3 px-2">
            <div className="flex items-center gap-2">
              {getCompetitorCell("good")}
              <span className="text-sm text-slate-600">
                {copy.competitors.legend.good}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {getCompetitorCell("mid")}
              <span className="text-sm text-slate-600">
                {copy.competitors.legend.mid}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {getCompetitorCell("bad")}
              <span className="text-sm text-slate-600">
                {copy.competitors.legend.bad}
              </span>
            </div>
          </div>

          {copy.competitors.note ? (
            <div className="mt-5 rounded-[20px] border border-[#CBDCEB] bg-white px-5 py-4 shadow-sm">
              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                {copy.competitors.note}
              </p>
            </div>
          ) : null}
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