import Link from "next/link";
import Image from "next/image";
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
              className={`group relative min-h-[360px] overflow-hidden rounded-[28px] border shadow-sm transition hover:-translate-y-1 hover:border-[#3ABFB0] hover:shadow-xl ${
                item.featured ? "border-[#8FD1C5]" : "border-[#D9E2E7]"
              }`}
            >
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, calc(100vw - 2rem)"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071D2C]/95 via-[#0B2638]/58 to-[#071D2C]/8" />
              <div className="relative flex min-h-[360px] flex-col justify-end p-6 text-white sm:p-7">
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-xl border border-white/35 bg-white/16 px-3 py-1 text-xs font-extrabold text-white backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mt-5 text-2xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-white/86">{item.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-[#B9F1E8]">
                  자세히 보기 <ArrowRight aria-hidden="true" size={17} className="transition group-hover:translate-x-1" />
                  </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
