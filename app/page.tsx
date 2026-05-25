import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, MapPin } from "lucide-react";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";
import ProgramGrid from "@/components/ProgramGrid";
import RehabPhoto from "@/components/RehabPhoto";
import SectionTitle from "@/components/SectionTitle";
import TreatmentFlow from "@/components/TreatmentFlow";
import { aiSummary, officialLinks, rehabPhotos, safetyCopy } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "새기준병원 회복재활센터 | 생활 통증·수술 후 회복관리",
  description:
    "새기준병원 회복재활센터는 생활 통증, 물리치료, 도수치료, 운동재활, 척추·관절 수술 후 기능 회복관리를 진찰 소견과 검사 결과를 함께 확인해 상담합니다.",
  path: "/",
  keywords: ["용인 회복재활", "생활 통증", "수술 후 회복관리", "도수치료", "운동재활"]
});

const centerPrinciples = [
  {
    title: "생활 통증 진입 창구",
    description: "목·어깨·허리·손목·발목처럼 반복되는 생활 통증을 먼저 평가하고 필요한 진료 흐름을 안내합니다."
  },
  {
    title: "진단 기반 회복관리",
    description: "통증 부위, 진찰 소견, 영상검사 결과, 치료 반응을 함께 확인해 회복관리 방향을 상담합니다."
  },
  {
    title: "수술 후 기능 회복 허브",
    description: "척추·관절 수술 후 보행, 운동범위, 근력, 일상 복귀 단계를 의료진 안내와 함께 확인합니다."
  }
];

const photoCards = [
  { src: rehabPhotos.center, alt: "새기준병원 회복재활센터 소개", label: "회복재활센터 내부" },
  ...rehabPhotos.rooms
];

export default function HomePage() {
  return (
    <main>
      <HeroSection />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <SectionTitle
            eyebrow="Recovery Rehab Center"
            title="생활 통증과 수술 후 회복을 한 흐름으로 봅니다"
            description="회복재활센터는 단순히 도수치료를 안내하는 공간이 아니라, 통증의 원인과 기능 저하를 확인하고 필요한 치료 단계를 상담하는 병원형 회복관리 센터입니다."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {centerPrinciples.map((item) => (
              <div key={item.title} className="rounded-[24px] border border-line bg-white p-5 shadow-sm">
                <h3 className="text-xl font-black text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-10 grid max-w-7xl gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <RehabPhoto src={rehabPhotos.center} alt="새기준병원 회복재활센터 공간" label="센터 소개 사진" className="aspect-[16/9]" />
          <div className="rounded-[28px] border border-line bg-calm p-6">
            <h3 className="text-2xl font-black text-ink">새기준병원 회복재활센터</h3>
            <p className="mt-4 text-base leading-8 text-muted">
              급성 통증, 직장인 생활 통증, 산후·육아 통증, 고령 보행 문제, 척추·관절 수술 후 회복관리를 한 흐름에서 확인합니다. 치료 방법은 환자 상태와 검사 결과에 따라 달라질 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-calm px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            align="center"
            eyebrow="Care Programs"
            title="증상별 회복재활 프로그램"
            description="환자가 실제로 느끼는 증상에서 시작해 가능한 원인과 회복관리 방향을 확인할 수 있도록 구성했습니다."
          />
        </div>
      </section>
      <ProgramGrid />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            align="center"
            eyebrow="Treatment Rooms & Equipment"
            title="치료실과 장비는 회복 단계에 맞춰 사용합니다"
            description="물리치료, 도수치료, 운동재활, 보행 회복관리 등은 환자 상태와 치료 반응에 따라 상담합니다."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {photoCards.map((item) => (
              <RehabPhoto key={item.src} src={item.src} alt={item.alt} label={item.label} className="aspect-[4/3]" />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-calm px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            align="center"
            eyebrow="Evaluation Based Care"
            title="진단 기반 회복관리 흐름"
            description="같은 통증이라도 손상 정도와 원인이 다를 수 있으므로 증상, 진찰, 검사, 치료 반응을 단계적으로 확인합니다."
          />
        </div>
      </section>
      <TreatmentFlow />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            align="center"
            eyebrow="Gallery"
            title="회복재활센터 갤러리"
            description="실제 센터 사진 파일을 public/images/rehab 경로에 추가하면 각 영역에 자동으로 표시됩니다."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {rehabPhotos.gallery.map((item) => (
              <RehabPhoto key={item.src} src={item.src} alt={item.alt} label={item.alt} className="aspect-[4/3]" />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionTitle
            eyebrow="Safe Copy Principle"
            title="과장 표현보다 평가와 상담 중심으로 안내합니다"
            description="치료 결과를 단정하지 않고 환자 상태와 검사 결과를 함께 확인한다는 메시지를 중심에 둡니다."
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
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">본원·척추센터·관절센터와 연결되는 회복관리 허브</h2>
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
            <p className="mt-5 text-lg leading-8 text-muted">llms.txt와 AI-readable 페이지에도 같은 요약을 반영해 센터의 역할을 명확하게 이해할 수 있도록 합니다.</p>
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
            description="새기준병원은 경기도 용인시 처인구 중부대로 1539에 위치합니다. 방문 전 대표전화로 진료 일정을 확인하시면 도움이 됩니다."
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
      <CTASection title="통증이 반복된다면 현재 상태와 회복 단계를 먼저 확인해 보세요" description="급성 통증, 산후·육아 통증, 직장인 생활 통증, 보행 문제, 수술 후 회복은 원인과 단계가 다를 수 있습니다. 진찰과 검사 결과를 함께 확인해 회복관리 방향을 상담합니다." />
    </main>
  );
}
