import Link from "next/link";
import { ArrowRight, CalendarCheck, MapPin, ShieldCheck } from "lucide-react";
import RehabPhoto from "@/components/RehabPhoto";
import { hospitalInfo, rehabPhotos, targetGroups } from "@/lib/data";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-600 px-4 py-12 text-white sm:px-6 sm:py-14 lg:px-8 lg:py-24">
      <div className="absolute right-[-7rem] top-[-7rem] h-80 w-80 rounded-full bg-brand-500/30 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-[-9rem] left-[-5rem] h-96 w-96 rounded-full bg-accent-300/25 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.9fr)] lg:items-center lg:gap-10 xl:gap-14">
        <div className="min-w-0">
          <p className="inline-flex rounded-full bg-white/12 px-4 py-2 text-sm font-extrabold text-brand-50 ring-1 ring-white/18 md:px-5 md:py-2.5 md:text-base">
            {hospitalInfo.centerName}
          </p>
          <h1 className="mt-6 max-w-[42rem] break-keep whitespace-normal text-4xl font-black leading-[1.08] tracking-[-0.01em] sm:text-5xl lg:text-[3.25rem] xl:text-6xl">
            <span className="block">일상 통증부터</span>
            <span className="block">수술 후 회복관리까지</span>
            <span className="block">진단 기반 회복관리</span>
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-brand-50 sm:text-lg sm:leading-8 lg:mt-6 lg:text-xl">
            급성 염좌, 산후·육아 통증, 직장인 목·어깨·허리 통증, 고령자 보행 문제, 척추·관절 수술 후 회복관리까지 진찰 소견과 검사 결과를 함께 확인해 물리치료·도수치료·운동재활 방향을 상담합니다.
          </p>
          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:gap-3 lg:mt-8">
            <Link href={hospitalInfo.naverReservationHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-extrabold text-brand-800 shadow-card transition hover:bg-brand-50 sm:px-6 sm:py-4 sm:text-base">
              진료 상담 <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link href="/manual-exercise-rehab" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/24 bg-white/10 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-white/16 sm:px-6 sm:py-4 sm:text-base">
              치료실 안내 <CalendarCheck aria-hidden="true" size={18} />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/24 bg-white/10 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-white/16 sm:px-6 sm:py-4 sm:text-base">
              오시는 길 <MapPin aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>
        <div className="grid gap-4">
          <RehabPhoto
            src={rehabPhotos.hero}
            alt="새기준병원 회복재활센터 내부"
            label="진단 기반 회복관리 공간"
            className="h-[280px] w-full sm:h-[320px] lg:h-auto lg:aspect-[5/4]"
            priority
          />
          <div className="rounded-[28px] border border-white/14 bg-white/10 p-5 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-brand-700">
                <ShieldCheck aria-hidden="true" size={23} />
              </div>
              <div>
                <p className="text-sm font-extrabold text-brand-50">이런 증상이 있을 때 상담해보세요</p>
                <p className="text-base font-black">증상과 검사 결과를 함께 확인합니다</p>
              </div>
            </div>
            <div className="mt-4 grid gap-2">
              {targetGroups.map((item) => (
                <div key={item} className="rounded-2xl bg-white/12 px-4 py-3 text-sm font-bold text-white">
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-4 rounded-2xl bg-white/12 px-4 py-3 text-xs font-bold leading-6 text-brand-50">
              치료 방법은 증상, 진찰 소견, 검사 결과, 치료 반응에 따라 달라질 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
