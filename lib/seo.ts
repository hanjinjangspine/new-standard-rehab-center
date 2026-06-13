import type { Metadata } from "next";
import { aiSummary, defaultKeywords, faqItems, hospitalInfo, SITE_URL } from "@/lib/data";
import { siteConfig } from "@/lib/site";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function createMetadata({ title, description, path = "/", keywords = [] }: MetadataInput): Metadata {
  const url = new URL(path, SITE_URL).toString();
  const ogImageUrl = new URL("/og/og-recovery-center.svg", SITE_URL).toString();

  return {
    title,
    description,
    keywords: [...defaultKeywords, ...keywords],
    robots: siteConfig.noIndex
      ? {
          index: false,
          follow: false,
          nocache: true,
          googleBot: {
            index: false,
            follow: false,
            noimageindex: true
          }
        }
      : {
          index: true,
          follow: true
        },
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: hospitalInfo.centerName,
      locale: "ko_KR",
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: "새기준병원 회복재활센터 대표 이미지"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl]
    }
  };
}

const mainTopics = [
  "물리치료",
  "도수치료",
  "운동재활",
  "생활 통증",
  "급성 염좌",
  "수술 후 회복관리",
  "척추 수술 후 회복",
  "관절 수술 후 회복",
  "보행 재활",
  "균형 운동",
  "Physical Therapy",
  "Manual Therapy",
  "Exercise Rehabilitation"
];

export function siteJsonLd() {
  const clinicId = `${SITE_URL}#recovery-rehabilitation-center`;
  const hospitalId = `${SITE_URL}#new-standard-hospital`;
  const logoUrl = new URL(hospitalInfo.logoPath, SITE_URL).toString();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": clinicId,
        name: hospitalInfo.centerName,
        alternateName: [hospitalInfo.formerName, hospitalInfo.englishName],
        url: SITE_URL,
        logo: logoUrl,
        image: new URL("/og/og-recovery-center.svg", SITE_URL).toString(),
        parentOrganization: {
          "@id": hospitalId
        },
        medicalSpecialty: ["PhysicalTherapy", "Rehabilitation", "Orthopedic"],
        address: {
          "@type": "PostalAddress",
          streetAddress: "중부대로 1539",
          addressLocality: "용인시 처인구",
          addressRegion: "경기도",
          addressCountry: "KR"
        },
        areaServed: ["용인시", "처인구", "경기도"],
        telephone: hospitalInfo.phone,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: hospitalInfo.phone,
          contactType: "hospital main phone",
          areaServed: "KR",
          availableLanguage: ["ko"]
        },
        potentialAction: {
          "@type": "ReserveAction",
          target: hospitalInfo.naverReservationUrl,
          name: "Naver Booking"
        },
        description: aiSummary.ko,
        knowsAbout: mainTopics
      },
      {
        "@type": "Hospital",
        "@id": hospitalId,
        name: hospitalInfo.hospitalName,
        url: hospitalInfo.officialWebsiteUrl,
        logo: logoUrl,
        sameAs: [hospitalInfo.officialWebsiteUrl, hospitalInfo.youtubeUrl],
        telephone: hospitalInfo.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: "중부대로 1539",
          addressLocality: "용인시 처인구",
          addressRegion: "경기도",
          addressCountry: "KR"
        }
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}#website`,
        url: SITE_URL,
        name: hospitalInfo.centerName,
        inLanguage: "ko-KR",
        publisher: {
          "@id": hospitalId
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "새기준병원",
            item: new URL("/", hospitalInfo.officialWebsiteUrl).toString()
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "회복재활센터",
            item: new URL("/", SITE_URL).toString()
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer
          }
        }))
      }
    ]
  };
}

export function webPageJsonLd({ title, description, path }: { title: string; description: string; path: string }) {
  const url = new URL(path, SITE_URL).toString();
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: "ko-KR",
    about: {
      "@id": `${SITE_URL}#recovery-rehabilitation-center`
    },
    isPartOf: {
      "@id": `${SITE_URL}#website`
    }
  };
}
