import Link from "next/link";
import { ArrowRight, CalendarCheck, ShieldCheck } from "lucide-react";
import RehabPhoto from "@/components/RehabPhoto";
import { hospitalInfo, rehabPhotos, targetGroups } from "@/lib/data";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-600 px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
      <div className="absolute right-[-7rem] top-[-7rem] h-80 w-80 rounded-full bg-brand-500/30 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-[-9rem] left-[-5rem] h-96 w-96 rounded-full bg-accent-300/25 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
        <div>
          <p className="inline-flex rounded-full bg-white/12 px-4 py-2 text-sm font-extrabold text-brand-50 ring-1 ring-white/18">
            {hospitalInfo.centerName}
          </p>
          <h1 className="mt-6 text-4xl font-black leading-[1.16] tracking-[-0.025em] sm:text-5xl lg:text-[4.25rem]">
            일상 통증부터
            <br />
            수술 후 회복까지
            <br />
            새기준병원이 함께합니다
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-brand-50 sm:text-xl">
            통증 부위, 진찰 소견, 영상검사 결과, 치료 반응을 함께 확인해 물리치료, 도수치료, 운동재활, 회복관리 방향을 상담합니다.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={hospitalInfo.naverReservationHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-base font-extrabold text-brand-800 shadow-card transition hover:bg-brand-50">
              진료 상담 문의 <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link href="/manual-exercise-rehab" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/24 bg-white/10 px-6 py-4 text-base font-extrabold text-white transition hover:bg-white/16">
              치료 안내 <CalendarCheck aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>
        <div className="grid gap-4">
          <RehabPhoto
            src={rehabPhotos.hero}
            alt="새기준병원 회복재활센터 내부"
            label="진단 기반 회복관리 공간"
            className="aspect-[4/3] lg:aspect-[5/4]"
            priority
          />
          <div className="rounded-[28px] border border-white/14 bg-white/10 p-5 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-brand-700">
                <ShieldCheck aria-hidden="true" size={23} />
              </div>
              <div>
                <p className="text-sm font-extrabold text-brand-50">생활 통증 진입 창구</p>
                <p className="text-base font-black">어떤 회복 단계가 필요한지 먼저 확인합니다</p>
              </div>
            </div>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {targetGroups.slice(0, 4).map((item) => (
                <div key={item} className="rounded-2xl bg-white/12 px-4 py-3 text-sm font-bold text-white">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
