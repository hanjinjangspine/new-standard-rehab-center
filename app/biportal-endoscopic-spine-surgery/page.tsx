import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SEOJsonLd from "@/components/SEOJsonLd";
import { createMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Biportal Endoscopic Spine Surgery | Operative Overview",
  description:
    "An overview of unilateral biportal endoscopic (UBE) spine surgery: anatomical rationale, clinical applications, approach variants, and decompression principles.",
  path: "/biportal-endoscopic-spine-surgery",
  keywords: [
    "biportal endoscopic spine surgery",
    "UBE spine surgery",
    "minimally invasive spine surgery",
    "endoscopic foraminotomy",
    "endoscopic discectomy"
  ]
});

export default function Page() {
  return (
    <main>
      <SEOJsonLd
        data={webPageJsonLd({
          title: "Biportal Endoscopic Spine Surgery | Operative Overview",
          description:
            "An overview of unilateral biportal endoscopic (UBE) spine surgery: anatomical rationale, clinical applications, approach variants, and decompression principles.",
          path: "/biportal-endoscopic-spine-surgery"
        })}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-50 via-white to-accent-100 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-brand-700">Operative Overview</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-[-0.025em] text-ink sm:text-5xl">
            Biportal Endoscopic Spine Surgery
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
            Unilateral biportal endoscopic (UBE) spine surgery uses two separate portals — a viewing portal and a working portal — within a
            continuously irrigated operative field. This configuration provides the visualization quality of open surgery with a
            minimally invasive working corridor.
          </p>
        </div>
      </section>

      {/* Overview sections */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Two-Portal Configuration",
                body: "The biportal technique separates the viewing and working functions into independent portals. This decoupling allows full range of instrument movement without the axis constraint of single-portal systems, enabling complex maneuvers within the same working corridor."
              },
              {
                title: "Continuous Irrigation Field",
                body: "The operative field is maintained under continuous saline irrigation, providing consistent visualization, hemostasis, and working space. The irrigated environment is central to endoscopic visualization quality throughout the procedure."
              },
              {
                title: "Fluoroscopic Level Confirmation",
                body: "Level confirmation and portal trajectory are established under fluoroscopic guidance before portal placement. Accurate trajectory planning is particularly important at L5-S1, where anatomical constraints narrow the accessible working corridor."
              }
            ].map(({ title, body }) => (
              <div key={title} className="rounded-[28px] border border-line bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-black leading-tight text-ink">{title}</h2>
                <p className="mt-4 text-base leading-8 text-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical applications */}
      <section className="bg-calm px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-brand-700">Clinical Applications</p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-ink sm:text-4xl">Approach Variants and Targets</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
            The biportal endoscopic platform supports multiple approach variants, each suited to a specific anatomical target and clinical
            indication. Approach selection is determined by the location of pathology, the nerve root affected, and the planned extent of
            decompression.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
            {[
              {
                variant: "Interlaminar Approach",
                target: "Central canal, subarticular zone, lateral recess",
                root: "Traversing root (e.g., S1 at L5-S1)"
              },
              {
                variant: "Far-Lateral Approach",
                target: "Foraminal and extraforaminal zone",
                root: "Exiting root (e.g., L5 at L5-S1)"
              },
              {
                variant: "ULBD (Unilateral Laminotomy Bilateral Decompression)",
                target: "Bilateral central and lateral recess decompression via unilateral access",
                root: "Both traversing roots"
              },
              {
                variant: "UBE-TLIF",
                target: "Interbody fusion with endoscopic visualization; combined with posterior fixation",
                root: "Applicable when decompression alone is insufficient"
              }
            ].map(({ variant, target, root }) => (
              <div key={variant} className="rounded-2xl border border-line bg-white p-6">
                <h3 className="text-lg font-black text-ink">{variant}</h3>
                <div className="mt-3 space-y-1">
                  <p className="text-sm leading-6 text-muted">
                    <span className="font-extrabold text-ink">Target: </span>
                    {target}
                  </p>
                  <p className="text-sm leading-6 text-muted">
                    <span className="font-extrabold text-ink">Root: </span>
                    {root}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* L5-S1 anatomical note */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-brand-700">Anatomical Note</p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-ink sm:text-4xl">L5-S1: Level-Specific Considerations</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="space-y-4 text-base leading-8 text-ink">
              <p>
                The L5-S1 level presents constraints absent at higher lumbar segments: the iliac crest position, reduced foraminal height,
                the L5 transverse process–sacral ala relationship, and the L5-S1 disc angulation all affect approach trajectory and portal
                placement.
              </p>
              <p>
                These constraints determine which approach variant is appropriate for a given L5-S1 pathology. Foraminal disc herniation
                compressing the exiting L5 root requires a far-lateral approach directed at the foraminal zone, not an interlaminar
                approach targeting the central canal.
              </p>
            </div>
            <div className="rounded-[28px] border border-brand-200 bg-brand-50 p-6">
              <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-brand-700">Exiting vs. Traversing Root at L5-S1</p>
              <div className="mt-4 grid gap-3">
                {[
                  "Exiting L5 root: traverses the L5-S1 foramen and extraforaminal zone",
                  "Traversing S1 root: descends through the central canal to the S1 foramen",
                  "Foraminal herniation → L5 root compression → far-lateral approach",
                  "Central canal herniation → S1 root compression → interlaminar approach"
                ].map((item) => (
                  <p key={item} className="flex gap-3 text-sm leading-6 text-ink">
                    <CheckCircle2 aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-brand-700" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Technical Note — link to UBE article */}
      <section className="bg-calm px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-brand-700">Related Technical Note</p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-ink sm:text-4xl">Far-Lateral Approach at L5-S1</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
            A detailed technical note on the far-lateral biportal endoscopic approach for right L5-S1 foraminal disc herniation and exiting
            L5 root decompression is available in the Operative Concepts series.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:max-w-3xl">
            <Link
              href="/operative-concepts/ube-far-lateral-l5s1"
              className="group flex flex-col rounded-[28px] border border-brand-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-card"
            >
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-brand-700">Technical Note</p>
              <h3 className="mt-2 text-lg font-black leading-snug text-ink">
                UBE Far-Lateral Approach and Foraminotomy with Discectomy at L5-S1
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                Exiting L5 root decompression via biportal endoscopic far-lateral foraminotomy and discectomy
              </p>
              <span className="mt-5 flex items-center gap-2 text-sm font-extrabold text-brand-700">
                Read article <ArrowRight aria-hidden="true" size={17} className="transition group-hover:translate-x-1" />
              </span>
            </Link>
            <Link
              href="/operative-concepts"
              className="group flex flex-col rounded-[28px] border border-line bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-card"
            >
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-brand-700">Article Index</p>
              <h3 className="mt-2 text-lg font-black leading-snug text-ink">Operative Concepts</h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                All technical notes and operative concepts articles in biportal endoscopic spine surgery
              </p>
              <span className="mt-5 flex items-center gap-2 text-sm font-extrabold text-brand-700">
                Browse articles <ArrowRight aria-hidden="true" size={17} className="transition group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Safety notice */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[28px] border border-accent-300 bg-accent-100 p-6 sm:p-8">
          <h2 className="text-2xl font-black text-ink">Educational Use Notice</h2>
          <div className="mt-5 grid gap-3">
            {[
              "Content on this page is intended as an educational overview for healthcare providers, not as a clinical treatment protocol or patient-specific surgical recommendation.",
              "Approach selection, operative planning, and decompression strategy require individualized evaluation by a qualified spine surgeon.",
              "Clinical outcomes vary based on patient anatomy, pathology severity, and individual surgical factors."
            ].map((item) => (
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
