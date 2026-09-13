import Link from "next/link";
import SEOJsonLd from "@/components/SEOJsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

export default function Breadcrumb({ title, path }: { title: string; path: string }) {
  return (
    <>
      <SEOJsonLd data={breadcrumbJsonLd(title, path)} />
      <nav aria-label="현재 위치" className="mb-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm leading-6 text-muted">
        <Link href="https://new-standard.co.kr/" className="font-semibold text-brand-700">새기준병원</Link>
        <span aria-hidden="true">›</span>
        <Link href="/" className="font-semibold text-brand-700">회복재활센터</Link>
        <span aria-hidden="true">›</span>
        <span aria-current="page">{title}</span>
      </nav>
    </>
  );
}
