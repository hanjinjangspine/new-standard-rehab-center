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
import { aiSummary, connectedCareLinks, officialLinks, rehabPhotos, safetyCopy } from "@/lib/data";
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

const rehabDirectorProfile = {
  careers: [
    "새기준병원 치료실장",
    "대한내과 통증클리닉 도수치료실장",
    "명 가정의학과 물리치료실장",
    "오재활의학과 물리치료실",
    "한마음신경외과 물리치료실",
    "스포츠마사지·체형관리/재활 센터 운영",
    "한국GM 군산공장 산업보건센터 물리/재활치료실",
    "국군계룡대지구병원 내과·물리치료실"
  ],
  credentials: [
    "물리치료사 면허",
    "BLS Provider 이수",
    "Bobath Introductory Course 이수",
    "스포츠테이핑 교육 이수",
    "MKC 경근학회 이수",
    "Jera Thai Massage School Basic Course",
    "Watpo Traditional Medical Massage School",
    "Ong's Traditional Massage Professional Course"
  ],
  activities: ["남사읍 노인대학 건강강좌", "한국GM 임직원 대상 스트레칭 건강강좌"],
  fields: [
    "도수치료",
    "통증관리",
    "수술 전후 재활",
    "스포츠 재활",
    "근막이완",
    "체형관리",
    "산업보건 재활",
    "척추·관절 재활",
    "산후·육아 관련 근골격계 회복관리"
  ]
};

const officialRehabLinks = [
  {
    href: "https://new-standard.co.kr/sub/r50/s5010.php",
    label: "본원 물리치료·운동재활센터 안내"
  },
  {
    href: "https://new-standard.co.kr/sub/r50/s5020.php",
    label: "본원 체외충격파 치료 안내"
  }
];

const patientNeedCards = [
  {
    title: "수술 후 회복 지연",
    description: "수술 후 통증·저림·보행 불안이 남아 있다면 기존 영상자료와 현재 기능 상태를 함께 확인합니다."
  },
  {
    title: "척추관협착증·허리디스크 보행 제한",
    description: "걷는 거리, 다리저림 위치, 쉬면 완화되는지 여부, 기존 치료 반응을 확인해 상담합니다."
  },
  {
    title: "고령자 보행·균형",
    description: "부모님의 보행 불안, 근력 저하, 낙상 위험, 보호자 동행 필요성을 함께 살펴봅니다."
  },
  {
    title: "산후·육아 통증",
    description: "아기 안기, 수유 자세, 반복되는 손목·허리·골반·목어깨 부담을 생활 동작과 함께 확인합니다."
  },
  {
    title: "직장인 생활 통증",
    description: "오래 앉는 자세, 목어깨 결림, 허리 통증, 손목 통증처럼 반복되는 생활 통증을 상담합니다."
  },
  {
    title: "급성 염좌·삐끗함",
    description: "발목 염좌, 허리 삐끗함, 급성 목어깨 통증은 손상 정도와 움직임 제한을 확인합니다."
  }
];

const policyGuideCards = [
  {
    title: "도수치료 관리기준 안내",
    description:
      "도수치료 관련 관리기준 변화가 예정되어 있어 진찰 소견, 기능 상태, 기존 치료 반응을 함께 확인하는 과정이 중요해질 수 있습니다. 가입 보험의 보장 여부와 금액은 상품과 보험사 기준에 따라 달라질 수 있습니다."
  },
  {
    title: "체외충격파 치료 안내",
    description:
      "체외충격파 치료는 도수치료 관리기준과 다른 치료군입니다. 통증 부위와 손상 양상, 기존 치료 반응을 확인해 필요한 경우 본원 체외충격파 안내와 함께 상담합니다."
  },
  {
    title: "IVNT·IVMT 보조 상담",
    description:
      "수술 전후 회복 과정에서 전신 컨디션 저하, 식사 저하, 피로감이 동반되는 경우 진료 후 필요한 범위에서 보조적으로 상담할 수 있습니다. 수액치료는 질환 진단이나 회복재활을 대체하지 않습니다."
  }
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
            eyebrow="Patient Needs"
            title="생활 통증부터 수술 후 회복관리까지 함께 확인합니다"
            description="회복재활센터는 특정 치료를 먼저 정해두기보다 환자 상태, 진찰 소견, 검사 결과, 기존 치료 반응을 함께 확인해 필요한 치료 단계를 상담합니다."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {patientNeedCards.map((item) => (
              <div key={item.title} className="rounded-[28px] border border-line bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-black leading-tight text-ink">{item.title}</h3>
                <p className="mt-4 text-base leading-8 text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-calm px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            align="center"
            eyebrow="Policy & Treatment Guide"
            title="도수치료·체외충격파·수액 상담은 역할을 구분해 안내합니다"
            description="치료군을 혼동하지 않고, 비용이나 보험 보장 여부를 병원이 단정하지 않으며, 진료 후 필요한 범위에서 상담할 수 있도록 정리합니다."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {policyGuideCards.map((item) => (
              <div key={item.title} className="rounded-[28px] border border-line bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-black leading-tight text-ink">{item.title}</h3>
                <p className="mt-4 text-base leading-8 text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            align="center"
            eyebrow="Connected Care"
            title="새기준병원 진료 시스템과 함께 연결됩니다"
            description="회복재활센터는 생활 통증과 수술 후 회복관리의 입구입니다. 증상과 진찰 소견에 따라 본원 진료, 척추·관절 전문 진료, 관절센터 회복관리와 자연스럽게 연결될 수 있습니다."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {connectedCareLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[240px] flex-col rounded-[28px] border border-line bg-calm p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-card"
              >
                <h3 className="text-2xl font-black text-ink">{item.title}</h3>
                <p className="mt-4 flex-1 text-base leading-7 text-muted">{item.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-brand-700">
                  {item.buttonText}
                  <ExternalLink aria-hidden="true" size={17} className="transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
            eyebrow="Rehabilitation Director"
            title="재활치료실장 프로필"
            description="회복재활센터의 물리치료·도수치료·운동재활은 의사 진료와 연결해 환자 상태, 진찰 소견, 치료 반응을 함께 확인하며 상담합니다."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="rounded-[28px] border border-line bg-calm p-6 shadow-sm">
              <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-brand-700">Physical Therapist</p>
              <h3 className="mt-3 text-3xl font-black leading-tight text-ink">사준호 재활치료실장</h3>
              <p className="mt-2 text-lg font-bold text-brand-700">새기준병원 재활치료실장 / 물리치료사</p>
              <p className="mt-5 text-base leading-8 text-muted">
                2005년 물리치료사로 임상 현장에 참여한 이후 신경외과, 재활의학, 통증클리닉, 산업보건, 재활센터 등 다양한 현장에서 근골격계 재활 경험을 쌓아왔습니다.
              </p>
              <p className="mt-4 text-base leading-8 text-muted">
                새기준병원 회복재활센터에서는 환자의 증상, 진찰 소견, 치료 반응을 함께 확인하며 물리치료·도수치료·운동재활·수술 전후 회복관리 방향을 돕습니다.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-[28px] border border-line bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-black text-ink">주요 임상 경력</h3>
                <ul className="mt-4 grid gap-2 text-base leading-7 text-muted">
                  {rehabDirectorProfile.careers.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[28px] border border-line bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-black text-ink">자격 및 이수</h3>
                <ul className="mt-4 grid gap-2 text-base leading-7 text-muted">
                  {rehabDirectorProfile.credentials.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[28px] border border-line bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-black text-ink">강좌 및 대외활동</h3>
                <ul className="mt-4 grid gap-2 text-base leading-7 text-muted">
                  {rehabDirectorProfile.activities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[28px] border border-line bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-black text-ink">담당 분야</h3>
                <ul className="mt-4 grid gap-2 text-base leading-7 text-muted">
                  {rehabDirectorProfile.fields.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <p className="mt-4 text-base leading-7 text-brand-100">
                새기준병원 본원에서는 물리치료·운동재활센터와 체외충격파 치료 안내를 함께 확인하실 수 있습니다. 생활 통증, 급성 염좌, 수술 후 회복관리, 운동재활 방향은 진찰 소견과 검사 결과를 함께 확인해 상담합니다.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {officialLinks.map((item) => (
                <Link key={item.href} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} className="group flex min-h-20 items-center justify-between rounded-2xl border border-white/12 bg-white/8 p-5 text-base font-extrabold text-white transition hover:bg-white/14">
                  {item.label}
                  <ExternalLink aria-hidden="true" size={18} className="transition group-hover:translate-x-1" />
                </Link>
              ))}
              {officialRehabLinks.map((item) => (
                <Link key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className="group flex min-h-20 items-center justify-between rounded-2xl border border-white/12 bg-white/8 p-5 text-base font-extrabold text-white transition hover:bg-white/14">
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
