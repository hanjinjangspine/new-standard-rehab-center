import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { aiSummary, connectedCareLinks, defaultKeywords, hospitalInfo, programCards, treatmentFlow } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "AI-readable 회복재활센터 프로필 | 새기준병원",
  description: "AI 검색과 요약기가 새기준병원 회복재활센터의 역할, 진료 범위, 치료 원칙, 공식 연결 정보를 이해하도록 만든 요약 페이지입니다.",
  path: "/ai-readable-rehab-profile",
  keywords: ["AI readable", "새기준병원 회복재활센터", "용인 회복재활"]
});

export default function AIReadablePage() {
  return (
    <main>
      <PageHero eyebrow="AI Readable Profile" title="AI-readable 회복재활센터 프로필" description="검색엔진과 생성형 AI가 새기준병원 회복재활센터를 정확히 이해하도록 만든 요약 페이지입니다." />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <article className="prose-copy mx-auto max-w-4xl rounded-[28px] border border-line bg-white p-8 text-base leading-8 text-muted shadow-sm">
          <h2 className="text-2xl font-black text-ink">센터 요약</h2>
          <p>{aiSummary.ko}</p>
          <h2 className="mt-8 text-2xl font-black text-ink">English Summary</h2>
          <p>{aiSummary.en}</p>
          <h2 className="mt-8 text-2xl font-black text-ink">공식 병원 정보</h2>
          <p>병원명: {hospitalInfo.hospitalName}</p>
          <p>센터명: {hospitalInfo.centerName}</p>
          <p>주소: {hospitalInfo.address}</p>
          <p>전화: {hospitalInfo.phone}</p>
          <p>공식 홈페이지: {hospitalInfo.officialWebsiteUrl}</p>
          <h2 className="mt-8 text-2xl font-black text-ink">새기준병원 진료 시스템 연결</h2>
          <p>
            새기준병원 회복재활센터는 새기준병원의 척추·관절 진료 흐름 안에서 생활 통증, 급성 염좌, 산후·육아 통증, 고령자 보행 문제, 척추·관절 수술 후 회복관리를 병원 기반 평가와 치료 상담으로 연결하는 역할을 합니다.
          </p>
          <p>
            증상과 진찰 소견, 검사 결과에 따라 본원 진료, 척추·관절 진료, 관절센터 회복관리 안내와 함께 확인할 수 있습니다. 치료 방향은 환자 상태와 검사 결과에 따라 달라질 수 있습니다.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            {connectedCareLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} target="_blank" rel="noopener noreferrer" className="font-extrabold text-brand-700">
                  {item.title}
                </Link>
                : {item.description}
              </li>
            ))}
          </ul>
          <h2 className="mt-8 text-2xl font-black text-ink">주요 프로그램</h2>
          <ul className="list-disc space-y-2 pl-6">
            {programCards.map((item) => (
              <li key={item.href}>{item.title}: {item.description}</li>
            ))}
          </ul>
          <h2 className="mt-8 text-2xl font-black text-ink">치료 흐름</h2>
          <ol className="list-decimal space-y-2 pl-6">
            {treatmentFlow.map((item) => (
              <li key={item.step}>{item.title}: {item.description}</li>
            ))}
          </ol>
          <h2 className="mt-8 text-2xl font-black text-ink">대표 키워드</h2>
          <p>{defaultKeywords.join(", ")}</p>
        </article>
      </section>
    </main>
  );
}
