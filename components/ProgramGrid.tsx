import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { programCards } from "@/lib/data";

export default function ProgramGrid() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {programCards.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group rounded-[28px] border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-card ${
                item.featured ? "border-brand-200 bg-brand-50" : "border-line bg-white"
              }`}
            >
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-white px-3 py-1 text-xs font-extrabold text-brand-700">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="mt-5 text-2xl font-black text-ink">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-muted">{item.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-brand-700">
                자세히 보기 <ArrowRight aria-hidden="true" size={17} className="transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
