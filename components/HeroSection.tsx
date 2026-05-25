import Link from "next/link";
import { ArrowRight, CalendarCheck, ShieldCheck } from "lucide-react";
import { hospitalInfo, targetGroups } from "@/lib/data";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-accent-100 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="absolute right-[-7rem] top-[-7rem] h-80 w-80 rounded-full bg-brand-100 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-[-9rem] left-[-5rem] h-96 w-96 rounded-full bg-accent-100 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-extrabold text-brand-700 shadow-sm">
            {hospitalInfo.centerName}
          </p>
          <h1 className="mt-6 text-4xl font-black leading-[1.12] tracking-[-0.03em] text-ink sm:text-5xl lg:text-6xl">
            삐끗한 통증부터 산후·육아 통증,
            <br className="hidden sm:block" /> 척추·관절 수술 후 회복관리까지
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
            통증 부위, 진찰 소견, 영상검사 결과, 치료 반응을 함께 확인해 물리치료, 도수치료, 운동재활, 회복관리 방향을 상담합니다.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={hospitalInfo.consultationPhoneHref} className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-700 px-6 py-4 text-base font-extrabold text-white shadow-card transition hover:bg-brand-800">
              진료 상담 <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link href="/manual-exercise-rehab" className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-200 bg-white px-6 py-4 text-base font-extrabold text-brand-700 transition hover:bg-brand-50">
              치료실 안내 <CalendarCheck aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>
        <div className="rounded-[32px] border border-white bg-white/78 p-6 shadow-card backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-700 text-white">
              <ShieldCheck aria-hidden="true" size={24} />
            </div>
            <div>
              <p className="text-sm font-extrabold text-brand-700">생활권 회복관리 허브</p>
              <p className="text-lg font-black text-ink">어떤 환자가 와도 되는지 먼저 보여줍니다</p>
            </div>
          </div>
          <div className="mt-6 grid gap-3">
            {targetGroups.map((item) => (
              <div key={item} className="rounded-2xl border border-line bg-white px-4 py-3 text-base font-bold text-ink">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-6 rounded-2xl bg-brand-50 p-4 text-sm leading-7 text-brand-800">
            “도수치료 판매형”보다 “진단 기반 회복관리 시스템”으로 포지셔닝합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
