import Link from "next/link";
import { ArrowRight, CalendarCheck, MapPin } from "lucide-react";
import { hospitalInfo } from "@/lib/data";

export default function CTASection({ title, description }: { title: string; description: string }) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[32px] bg-brand-900 p-8 text-white shadow-card sm:p-10 lg:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-3xl font-black leading-tight sm:text-4xl">{title}</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-brand-50">{description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link href={hospitalInfo.naverReservationHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-base font-extrabold text-brand-800 transition hover:bg-brand-50">
              진료 상담 <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link href="/manual-exercise-rehab" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-4 text-base font-extrabold text-white transition hover:bg-white/10">
              <CalendarCheck aria-hidden="true" size={18} /> 치료실 안내
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-4 text-base font-extrabold text-white transition hover:bg-white/10">
              <MapPin aria-hidden="true" size={18} /> 오시는 길
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
