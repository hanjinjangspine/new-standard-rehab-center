import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { programImage } from "@/lib/semantic-images";
import { explanatoryImageAlt } from "@/lib/visual-image-labels";
import { programCards } from "@/lib/data";

export default function ProgramGrid() {
  return (
    <section className="px-5 pb-12 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {programCards.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative flex flex-col bg-white min-h-[250px] overflow-hidden rounded-[28px] border shadow-sm transition hover:-translate-y-1 hover:border-[#3ABFB0] hover:shadow-xl ${
                item.featured ? "border-[#8FD1C5]" : "border-[#D9E2E7]"
              }`}
            >
              <div className="relative aspect-[16/9] bg-brand-50">
                <Image src={programImage(item.href)} alt={explanatoryImageAlt(programImage(item.href), "새기준병원 도수치료실과 물리치료실 입구")} fill className="object-cover" sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw" />
              </div>
              <p className="px-6 pt-3 text-xs text-muted">{programImage(item.href).includes("content-images") ? "AI 설명용 연출 이미지" : "새기준병원 실제 치료 공간"}</p>
              <div className="relative flex flex-1 min-h-[250px] flex-col justify-start p-6 text-ink sm:p-7">
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-xl border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-extrabold text-ink backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mt-5 text-2xl font-black text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-muted">
                  {item.description}
                </p>
                <span className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-extrabold text-brand-700">
                  자세히 보기{" "}
                  <ArrowRight
                    aria-hidden="true"
                    size={17}
                    className="transition group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
