import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SEOJsonLd from "@/components/SEOJsonLd";
import { createMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Operative Concepts | Biportal Endoscopic Spine Surgery",
  description:
    "Technical notes and operative concepts in biportal endoscopic spine surgery. Physician-authored educational articles on surgical approach, decompression technique, and anatomical rationale.",
  path: "/operative-concepts",
  keywords: [
    "operative concepts spine surgery",
    "biportal endoscopic technique",
    "UBE spine surgery education",
    "minimally invasive spine surgery"
  ]
});

const articles = [
  {
    href: "/operative-concepts/ube-far-lateral-l5s1",
    eyebrow: "Technical Note · Biportal Endoscopic Spine Surgery",
    title: "UBE Far-Lateral Approach and Foraminotomy with Discectomy at L5-S1",
    description:
      "A technical note on right L5-S1 foraminal disc herniation and exiting L5 root decompression via far-lateral biportal endoscopic foraminotomy and discectomy.",
    tags: ["UBE Far-Lateral", "L5-S1 Foraminotomy", "Exiting L5 Root", "Foraminal Discectomy"]
  }
];

export default function Page() {
  return (
    <main>
      <SEOJsonLd
        data={webPageJsonLd({
          title: "Operative Concepts | Biportal Endoscopic Spine Surgery",
          description:
            "Technical notes and operative concepts in biportal endoscopic spine surgery. Physician-authored educational articles on surgical approach, decompression technique, and anatomical rationale.",
          path: "/operative-concepts"
        })}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-50 via-white to-accent-100 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-brand-700">Biportal Endoscopic Spine Surgery</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-[-0.025em] text-ink sm:text-5xl">
            Operative Concepts
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
            Physician-authored technical notes on surgical approach, anatomical rationale, and decompression technique in biportal
            endoscopic spine surgery. Articles are intended as educational resources for healthcare providers.
          </p>
        </div>
      </section>

      {/* Article listing */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2">
            {articles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group flex flex-col rounded-[28px] border border-line bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-card"
              >
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-brand-700">{article.eyebrow}</p>
                <h2 className="mt-3 text-xl font-black leading-snug text-ink">{article.title}</h2>
                <p className="mt-3 flex-1 text-base leading-7 text-muted">{article.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-extrabold text-brand-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="mt-6 flex items-center gap-2 text-sm font-extrabold text-brand-700">
                  Read article <ArrowRight aria-hidden="true" size={17} className="transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related section */}
      <section className="bg-calm px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-brand-700">Related</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-ink sm:text-4xl">Biportal Endoscopic Spine Surgery</h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              An overview of the biportal endoscopic approach, clinical applications, and anatomical principles.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href="/biportal-endoscopic-spine-surgery"
              className="group rounded-2xl border border-line bg-white p-5 text-lg font-black text-ink shadow-sm transition hover:-translate-y-1 hover:shadow-card"
            >
              Biportal Endoscopic Spine Surgery
              <span className="mt-5 flex items-center gap-2 text-sm font-extrabold text-brand-700">
                Overview <ArrowRight aria-hidden="true" size={17} className="transition group-hover:translate-x-1" />
              </span>
            </Link>
            <Link
              href="/postoperative-recovery"
              className="group rounded-2xl border border-line bg-white p-5 text-lg font-black text-ink shadow-sm transition hover:-translate-y-1 hover:shadow-card"
            >
              Postoperative Recovery
              <span className="mt-5 flex items-center gap-2 text-sm font-extrabold text-brand-700">
                Recovery guide <ArrowRight aria-hidden="true" size={17} className="transition group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
