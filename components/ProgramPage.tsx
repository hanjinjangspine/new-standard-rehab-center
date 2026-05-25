import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import SEOJsonLd from "@/components/SEOJsonLd";
import { ProgramSlug, programPages, safetyCopy } from "@/lib/data";
import { webPageJsonLd } from "@/lib/seo";

export default function ProgramPage({ slug }: { slug: ProgramSlug }) {
  const page = programPages[slug];
  const h1 = page.title.replace(" | 새기준병원 회복재활센터", "");

  return (
    <main>
      <SEOJsonLd data={webPageJsonLd({ title: page.title, description: page.description, path: page.path })} />
      <PageHero eyebrow={page.eyebrow} title={h1} description={page.heroLead} />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <InfoCard title="이런 증상이 있을 때" items={page.symptoms} />
          <InfoCard title="진료에서 확인하는 것" items={page.checks} />
          <InfoCard title="회복관리 방향" items={page.care} />
        </div>
      </section>
      <section className="bg-calm px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-brand-700">Related Care Path</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-ink sm:text-4xl">연결해서 보면 좋은 진료 흐름</h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              증상의 원인과 회복 단계에 따라 회복재활센터 안에서 관리하거나, 척추센터·관절센터 진료와 함께 확인할 수 있습니다.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {page.related.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group rounded-2xl border border-line bg-white p-5 text-lg font-black text-ink shadow-sm transition hover:-translate-y-1 hover:shadow-card"
              >
                {item.label}
                <span className="mt-5 flex items-center gap-2 text-sm font-extrabold text-brand-700">
                  확인하기 <ArrowRight aria-hidden="true" size={17} className="transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[28px] border border-accent-300 bg-accent-100 p-6 sm:p-8">
          <h2 className="text-2xl font-black text-ink">치료 전 안내</h2>
          <div className="mt-5 grid gap-3">
            {safetyCopy.map((item) => (
              <p key={item} className="flex gap-3 text-base leading-7 text-ink">
                <CheckCircle2 aria-hidden="true" size={20} className="mt-1 shrink-0 text-brand-700" />
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-[28px] border border-line bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-black text-ink">{title}</h2>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <p key={item} className="flex gap-3 text-base leading-7 text-muted">
            <CheckCircle2 aria-hidden="true" size={20} className="mt-1 shrink-0 text-brand-700" />
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
