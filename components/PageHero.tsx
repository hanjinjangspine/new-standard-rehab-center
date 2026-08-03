import Link from "next/link";
import { ArrowRight } from "lucide-react";
import RehabPhoto from "@/components/RehabPhoto";
import { hospitalInfo } from "@/lib/data";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  imageSrc = "/images/rehab/hero-rehab-center.jpg",
  imageAlt = "새기준병원 회복재활센터 치료 공간"
}: PageHeroProps) {
  return (
    <section className="overflow-hidden border-b border-line bg-gradient-to-br from-brand-50 via-white to-accent-100 px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
      <div className="mx-auto grid max-w-[1180px] gap-7 md:gap-9 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] lg:items-center lg:gap-12">
        <div className="order-1 min-w-0 md:order-2 lg:order-1">
          <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-brand-700">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl break-keep text-4xl font-black leading-tight tracking-[-0.025em] text-ink sm:text-5xl lg:text-[3rem]">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">{description}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href={hospitalInfo.naverReservationHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-700 px-6 py-3.5 text-base font-extrabold text-white shadow-card transition hover:bg-brand-800">
              진료 상담 <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-brand-200 bg-white px-6 py-3.5 text-base font-extrabold text-brand-700 transition hover:bg-brand-50">
              오시는 길
            </Link>
          </div>
        </div>
        <div className="order-2 md:order-1 lg:order-2">
          <RehabPhoto
            src={imageSrc}
            alt={imageAlt}
            className="aspect-[3/2] w-full"
            imageClassName="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
