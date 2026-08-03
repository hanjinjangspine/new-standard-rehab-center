import Link from "next/link";
import { ArrowRight, CalendarCheck, MapPin } from "lucide-react";
import RehabPhoto from "@/components/RehabPhoto";
import { hospitalInfo, rehabPhotos } from "@/lib/data";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-[#D9E2E7] bg-[#F8FAFB] px-4 py-10 text-[#10283D] sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="relative mx-auto grid max-w-[1180px] gap-7 md:gap-9 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] lg:items-center lg:gap-12">
        <div className="order-1 min-w-0 md:order-2 lg:order-1">
          <p className="inline-flex rounded-xl border border-[#D9E2E7] bg-white px-4 py-2 text-sm font-extrabold text-[#2B7366] shadow-sm md:px-5 md:py-2.5 md:text-base">
            {hospitalInfo.centerName}
          </p>
          <h1 className="mt-6 max-w-[42rem] break-keep whitespace-normal text-4xl font-black leading-[1.08] tracking-[-0.01em] sm:text-5xl lg:text-[3rem] xl:text-[3.35rem]">
            <span className="block">일상 통증부터</span>
            <span className="block">수술 후 회복관리까지</span>
            <span className="block">진단 기반 회복관리</span>
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#5B6770] sm:text-lg sm:leading-8 lg:mt-6 lg:text-xl">
            급성 염좌, 산후·육아 통증, 직장인 목·어깨·허리 통증, 고령자 보행 문제, 척추·관절 수술 후 회복관리까지 진찰 소견과 검사 결과를 함께 확인해 물리치료·도수치료·운동재활 방향을 상담합니다.
          </p>
          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:gap-3 lg:mt-8">
            <Link href={hospitalInfo.naverReservationHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2B7366] px-5 py-3 text-sm font-extrabold text-white shadow-sm transition hover:bg-[#245F55] sm:px-6 sm:py-4 sm:text-base">
              진료 상담 <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link href="/manual-exercise-rehab" className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#D9E2E7] bg-white px-5 py-3 text-sm font-extrabold text-[#10283D] transition hover:border-[#3ABFB0] hover:bg-[#F1FBF9] sm:px-6 sm:py-4 sm:text-base">
              치료실 안내 <CalendarCheck aria-hidden="true" size={18} />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#D9E2E7] bg-white px-5 py-3 text-sm font-extrabold text-[#10283D] transition hover:border-[#3ABFB0] hover:bg-[#F1FBF9] sm:px-6 sm:py-4 sm:text-base">
              오시는 길 <MapPin aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>
        <div className="order-2 md:order-1 lg:order-2">
          <RehabPhoto
            src={rehabPhotos.hero}
            alt="새기준병원 회복재활센터 내부"
            className="mx-auto aspect-[3/2] max-h-[520px] w-full max-w-[920px]"
            imageClassName="object-contain"
            sizes="(min-width: 1024px) 50vw, (min-width: 640px) calc(100vw - 3rem), calc(100vw - 2rem)"
            priority
          />
        </div>
      </div>
    </section>
  );
}
