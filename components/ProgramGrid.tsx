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
              className={`group rounded-2xl border p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[#3ABFB0] hover:shadow-md ${
                item.featured ? "border-[#B8DDD5] bg-[#F1FBF9]" : "border-[#D9E2E7] bg-white"
              }`}
            >
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded-xl border border-[#D9E2E7] bg-white px-3 py-1 text-xs font-extrabold text-[#2B7366]">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="mt-5 text-2xl font-black text-[#10283D]">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-[#5B6770]">{item.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#2B7366]">
                자세히 보기 <ArrowRight aria-hidden="true" size={17} className="transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
