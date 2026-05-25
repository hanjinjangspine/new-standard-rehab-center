import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { hospitalInfo } from "@/lib/data";

export default function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="bg-gradient-to-br from-brand-50 via-white to-accent-100 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-brand-700">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-[-0.025em] text-ink sm:text-5xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted sm:text-xl">{description}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href={hospitalInfo.naverReservationHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-700 px-6 py-4 text-base font-extrabold text-white shadow-card transition hover:bg-brand-800">
            진료 상담 <ArrowRight aria-hidden="true" size={18} />
          </Link>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-brand-200 bg-white px-6 py-4 text-base font-extrabold text-brand-700 transition hover:bg-brand-50">
            오시는 길
          </Link>
        </div>
      </div>
    </section>
  );
}
