import type { Metadata, Viewport } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobileBottomCTA from "@/components/MobileBottomCTA";
import PhotoOwnershipNotice from "@/components/PhotoOwnershipNotice";
import SEOJsonLd from "@/components/SEOJsonLd";
import { hospitalInfo, SITE_URL } from "@/lib/data";
import { siteJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import SiteAnalytics from "@/components/SiteAnalytics";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "용인 재활치료 | 척추·관절 수술 후 기능 회복 | 새기준병원",
    template: "%s"
  },
  description:
    "용인 새기준병원 회복재활센터는 통증뿐 아니라 보행·근력·관절가동범위·일상기능을 평가해 척추·관절 질환과 수술 후 기능 회복을 상담합니다.",
  applicationName: hospitalInfo.centerName,
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
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }]
  },
  openGraph: {
    title: "용인 재활치료 | 척추·관절 수술 후 기능 회복 | 새기준병원",
    description:
      "통증뿐 아니라 보행·근력·관절가동범위·일상기능을 평가해 척추·관절 질환과 수술 후 기능 회복을 상담합니다.",
    url: SITE_URL,
    siteName: hospitalInfo.centerName,
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/og/og-recovery-center.svg",
        width: 1200,
        height: 630,
        alt: "새기준병원 회복재활센터 대표 이미지"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "용인 재활치료 | 척추·관절 수술 후 기능 회복 | 새기준병원",
    description:
      "통증뿐 아니라 보행·근력·관절가동범위·일상기능을 평가해 척추·관절 질환과 수술 후 기능 회복을 상담합니다.",
    images: ["/og/og-recovery-center.svg"]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2B7366"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className="pb-[calc(3.5rem+env(safe-area-inset-bottom))] md:pb-0">
        <SiteAnalytics />
        <SEOJsonLd data={siteJsonLd()} />
        <PhotoOwnershipNotice />
        <Header />
        {children}
        <Footer />
        <MobileBottomCTA />
      </body>
    </html>
  );
}
