import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, MapPin } from "lucide-react";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";
import ProgramGrid from "@/components/ProgramGrid";
import SectionTitle from "@/components/SectionTitle";
import TreatmentFlow from "@/components/TreatmentFlow";
import { aiSummary, officialLinks, safetyCopy } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "새기준병원 회복재활센터 | 용인 물리치료·운동재활·도수치료",
  description:
    "새기준병원 회복재활센터는 급성 염좌, 산후·육아 통증, 직장인 생활 통증, 고령자 보행·균형, 척추·관절 수술 후 회복관리와 물리치료·운동재활 방향을 상담합니다.",
  path: "/",
  keywords: ["용인 물리치료", "용인 운동재활", "용인 도수치료", "처인구 재활치료", "새기준병원 회복재활센터"]
});

export default function HomePage() {
  return (
    <main>
      <HeroSection />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionTitle
            eyebrow="Positioning"
            title="수술 후 재활만이 아니라 생활 통증의 첫 진입 창구입니다"
            description="회복재활센터는 도수치료 단일 상품을 전면에 내세우기보다, 의사 진료와 연결되는 평가 기반 회복관리 시스템으로 설명해야 합니다. 환자는 ‘내 증상으로 가도 되는 곳인가’를 먼저 알고 싶어합니다."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {["급성 염좌·삐끗함", "산후·육아 통증", "직장인 목·어깨·허리", "고령자 보행·균형", "수술 후 회복관리", "도수·운동재활 상담"].map((item) => (
              <div key={item} className="rounded-2xl border border-line bg-white p-5 text-lg font-black text-ink shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-calm px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            align="center"
            eyebrow="Care Programs"
            title="증상별 회복재활 프로그램"
            description="페이지를 증상 의도별로 분리해 검색엔진과 AI가 새기준병원 회복재활센터의 역할을 명확히 이해하도록 설계합니다."
          />
        </div>
      </section>
      <ProgramGrid />

      <section className="bg-calm px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            align="center"
            eyebrow="Evaluation Based Care"
            title="진단 기반 회복관리 흐름"
            description="같은 통증이라도 손상 정도와 원인이 다를 수 있으므로, 증상·진찰·검사 필요성·치료 반응을 단계적으로 확인합니다."
          />
        </div>
      </section>
      <TreatmentFlow />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionTitle
            eyebrow="Safe Copy Principle"
            title="과장 표현보다 평가·상담 중심 문구로 설계합니다"
            description="통증 개선 보장, 즉시 회복, 최고 도수치료 같은 표현은 배제하고 환자 상태와 검사 결과를 함께 확인한다는 메시지를 전면에 둡니다."
          />
          <div className="grid gap-3">
            {safetyCopy.map((item) => (
              <p key={item} className="rounded-2xl border border-line bg-white p-5 text-base font-bold leading-7 text-ink shadow-sm">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-900 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-brand-100">Official Hospital Links</p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">본원·척추센터·관절센터와 연결되는 회복재활 허브</h2>
              <p className="mt-5 text-lg leading-8 text-brand-50">
                회복재활센터는 생활 통증 환자의 첫 진입 창구이면서, 필요 시 척추센터·관절센터 진료와 수술 후 회복관리로 연결되는 병원 전체 환자 흐름의 허브입니다.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {officialLinks.map((item) => (
                <Link key={item.href} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} className="group flex min-h-20 items-center justify-between rounded-2xl border border-white/12 bg-white/8 p-5 text-base font-extrabold text-white transition hover:bg-white/14">
                  {item.label}
                  <ExternalLink aria-hidden="true" size={18} className="transition group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-brand-700">AI Readable Summary</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-ink sm:text-4xl">AI와 검색엔진이 읽기 쉬운 센터 요약</h2>
            <p className="mt-5 text-lg leading-8 text-muted">llms.txt와 AI-readable 페이지에도 같은 요약을 반영해, 생성형 검색이 센터의 역할을 정확히 파악하도록 합니다.</p>
            <Link href="/ai-readable-rehab-profile" className="mt-6 inline-flex items-center gap-2 rounded-full border border-brand-200 px-5 py-3 text-sm font-extrabold text-brand-700 transition hover:bg-brand-50">
              AI-readable 페이지 보기 <ArrowRight aria-hidden="true" size={17} />
            </Link>
          </div>
          <div className="rounded-[28px] border border-line bg-white p-6 text-base leading-8 text-muted shadow-sm">
            {aiSummary.ko}
          </div>
        </div>
      </section>

      <section className="bg-calm px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionTitle
            eyebrow="Location"
            title="용인·처인구 생활권에서 반복 방문 가능한 회복관리"
            description="새기준병원은 경기도 용인시 처인구 중부대로 1539에 위치합니다. 진료 일정은 병원 상황에 따라 달라질 수 있으므로 방문 전 대표전화로 확인해 주세요."
          />
          <div className="rounded-[28px] border border-line bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
              <MapPin aria-hidden="true" size={24} />
            </div>
            <p className="mt-5 text-lg font-black text-ink">주소</p>
            <p className="mt-2 text-base leading-7 text-muted">경기도 용인시 처인구 중부대로 1539</p>
            <p className="mt-5 text-lg font-black text-ink">대표전화</p>
            <p className="mt-2 text-base leading-7 text-muted">031-328-0333</p>
          </div>
        </div>
      </section>

      <FAQSection />
      <CTASection title="통증이 반복된다면 현재 상태와 회복 단계를 먼저 확인해 보세요" description="급성 통증, 산후·육아 통증, 직장인 생활 통증, 보행 문제, 수술 후 회복은 원인과 단계가 다릅니다. 진찰과 검사 결과를 함께 확인해 치료 방향을 상담합니다." />
    </main>
  );
}
