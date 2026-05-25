import type { Metadata, Viewport } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobileBottomCTA from "@/components/MobileBottomCTA";
import SEOJsonLd from "@/components/SEOJsonLd";
import { hospitalInfo, SITE_URL } from "@/lib/data";
import { siteJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "새기준병원 회복재활센터 | 용인 물리치료·도수치료·운동재활",
    template: "%s"
  },
  description:
    "새기준병원 회복재활센터는 급성 염좌, 산후·육아 통증, 직장인 통증, 고령자 보행 문제, 척추·관절 수술 후 회복관리를 진찰 소견과 검사 결과를 함께 확인해 상담합니다.",
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
    icon: "/favicon.ico"
  },
  openGraph: {
    title: "새기준병원 회복재활센터 | 용인 물리치료·도수치료·운동재활",
    description:
      "급성 염좌, 산후·육아 통증, 직장인 통증, 고령자 보행 문제, 척추·관절 수술 후 회복관리까지 진찰 소견과 검사 결과를 함께 확인해 상담합니다.",
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
      <body className="pb-14 md:pb-0">
        <SEOJsonLd data={siteJsonLd()} />
        <Header />
        {children}
        <Footer />
        <MobileBottomCTA />
      </body>
    </html>
  );
}
