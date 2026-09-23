import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import SEOJsonLd from "@/components/SEOJsonLd";
import { createMetadata, webPageJsonLd } from "@/lib/seo";

const ARTICLE_PATH = "/operative-concepts/ube-far-lateral-l5s1";

export const metadata: Metadata = createMetadata({
  title: "UBE Far-Lateral Approach and Foraminotomy with Discectomy at L5-S1 | Operative Concepts",
  description:
    "A technical note on biportal endoscopic far-lateral foraminotomy and discectomy for right L5-S1 foraminal disc herniation with exiting L5 nerve root decompression.",
  path: ARTICLE_PATH,
  keywords: [
    "UBE far-lateral approach",
    "L5-S1 foraminotomy",
    "biportal endoscopic spine surgery",
    "exiting L5 root decompression",
    "foraminal discectomy",
    "extraforaminal disc herniation"
  ]
});

export default function Page() {
  return (
    <main>
      <SEOJsonLd
        data={webPageJsonLd({
          title: "UBE Far-Lateral Approach and Foraminotomy with Discectomy at L5-S1",
          description:
            "A technical note on biportal endoscopic far-lateral foraminotomy and discectomy for right L5-S1 foraminal disc herniation with exiting L5 nerve root decompression.",
          path: ARTICLE_PATH
        })}
      />

      {/* Article Hero */}
      <header className="bg-gradient-to-br from-brand-50 via-white to-accent-100 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/operative-concepts"
            className="inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.14em] text-brand-700 transition hover:text-brand-800"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            Operative Concepts
          </Link>
          <p className="mt-5 text-sm font-extrabold uppercase tracking-[0.14em] text-brand-700">
            Technical Note · Biportal Endoscopic Spine Surgery
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight tracking-[-0.025em] text-ink sm:text-5xl">
            UBE Far-Lateral Approach and Foraminotomy with Discectomy at L5-S1
          </h1>
          <p className="mt-5 text-xl leading-8 text-muted">
            A technical note on right L5-S1 foraminal disc herniation and exiting L5 root decompression
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["UBE Far-Lateral", "L5-S1 Foraminotomy", "Exiting L5 Root", "Foraminal Discectomy", "Biportal Endoscopic"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-extrabold text-brand-700"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </header>

      {/* Disambiguation notice */}
      <div className="bg-white px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-line bg-calm px-6 py-5">
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-brand-700">Scope of this Article</p>
            <p className="mt-2 text-base leading-7 text-ink">
              This article addresses right-sided L5-S1 <strong>foraminal</strong> disc pathology and decompression of the{" "}
              <strong>exiting right L5 nerve root</strong> via a far-lateral biportal endoscopic approach. It does not describe ULBD,
              central canal decompression, bilateral decompression, UBE-TLIF, fusion procedures, or approaches targeting the traversing S1
              root.
            </p>
          </div>
        </div>
      </div>

      {/* Article body */}
      <article className="px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-14">

          {/* Section 1 — Technical Focus */}
          <section>
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-brand-700">01</p>
            <h2 className="mt-2 text-3xl font-black leading-tight text-ink">Technical Focus</h2>
            <div className="mt-5 space-y-4 text-base leading-8 text-ink">
              <p>
                This article describes the unilateral biportal endoscopic (UBE) far-lateral approach applied to right-sided L5-S1 foraminal
                pathology. The operative target is the exiting right L5 nerve root, compressed by foraminal disc herniation at the L5-S1
                level. The technique encompasses biportal endoscopic foraminotomy and discectomy via a laterally directed working corridor,
                distinct from standard posterior interlaminar approaches.
              </p>
              <p>
                The procedure is defined by three technical elements: far-lateral portal placement directed at the foraminal and
                extraforaminal zone, targeted foraminotomy to enlarge the bony corridor, and discectomy to remove the compressive disc
                fragment. Decompression adequacy is confirmed by direct endoscopic visualization of the free exiting L5 root.
              </p>
            </div>
          </section>

          <hr className="border-line" />

          {/* Section 2 — Clinical Context */}
          <section>
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-brand-700">02</p>
            <h2 className="mt-2 text-3xl font-black leading-tight text-ink">Clinical Context</h2>
            <div className="mt-5 space-y-4 text-base leading-8 text-ink">
              <p>
                The L5-S1 foraminal zone presents anatomical constraints not encountered at higher lumbar levels. The position of the iliac
                crest, reduced foraminal height, convergence of the L5 pedicle and sacral ala, and the angulation of the L5-S1 disc space
                collectively narrow the accessible corridor for lateral decompression.
              </p>
              <p>
                Foraminal and extraforaminal disc herniations at L5-S1 preferentially compress the exiting L5 nerve root as it traverses
                the foraminal zone, rather than the traversing S1 root within the central canal. This anatomical distinction carries
                significant implications for clinical diagnosis, approach selection, and operative targeting. A standard posterior
                interlaminar approach directed at S1 root decompression is not the appropriate operative response to foraminal L5 root
                compression at this level.
              </p>
            </div>
          </section>

          <hr className="border-line" />

          {/* Section 3 — Imaging-Symptom Concordance */}
          <section>
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-brand-700">03</p>
            <h2 className="mt-2 text-3xl font-black leading-tight text-ink">Imaging-Symptom Concordance</h2>
            <div className="mt-5 space-y-4 text-base leading-8 text-ink">
              <p>
                Preoperative planning requires confirmed concordance between clinical findings and imaging. For exiting L5 root compression
                at L5-S1, the expected clinical profile includes radicular pain distributing from the buttock to the dorsum of the foot,
                L5 dermatome dysesthesia, motor deficit involving ankle dorsiflexion and great toe extension, and associated gait
                disturbance.
              </p>
              <p>
                MRI should demonstrate a foraminal or extraforaminal disc abnormality at the right L5-S1 level with morphological
                compression of the exiting L5 root. Central canal findings alone are insufficient to confirm this diagnosis. Foraminal
                zone pathology must be specifically identified and correlated with the clinical presentation before operative planning
                proceeds.
              </p>
            </div>
            <div className="mt-6 rounded-2xl border border-line bg-calm p-6">
              <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-brand-700">Expected L5 Root Distribution</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  "Radicular pain: buttock → lateral leg → dorsum of foot",
                  "L5 dermatome dysesthesia",
                  "Ankle dorsiflexion weakness",
                  "Great toe dorsiflexion (EHL) weakness"
                ].map((item) => (
                  <p key={item} className="flex gap-3 text-base leading-7 text-ink">
                    <CheckCircle2 aria-hidden="true" size={20} className="mt-1 shrink-0 text-brand-700" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </section>

          <hr className="border-line" />

          {/* Section 4 — Why a Far-Lateral Biportal Approach */}
          <section>
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-brand-700">04</p>
            <h2 className="mt-2 text-3xl font-black leading-tight text-ink">Why a Far-Lateral Biportal Approach</h2>
            <div className="mt-5 space-y-4 text-base leading-8 text-ink">
              <p>
                Standard posterior interlaminar biportal endoscopic approaches are optimized for central canal, subarticular, and lateral
                recess pathology. Access to the foraminal and extraforaminal zone at L5-S1 via an interlaminar corridor is constrained by
                the L5-S1 facet joint complex, the narrow interlaminar window at this level, and the depth of approach required to reach
                the far lateral foramen.
              </p>
              <p>
                A dedicated far-lateral approach — with portals placed laterally to align directly with the foraminal and extraforaminal
                zone — provides a more direct working trajectory to the exiting L5 root. The angle of approach avoids central canal
                structures and permits targeted decompression without requiring extensive medial bony removal, facetectomy, or fusion.
              </p>
            </div>
            <div className="mt-6 rounded-2xl border border-line bg-calm p-6">
              <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-brand-700">Indications for Far-Lateral Approach Selection</p>
              <div className="mt-4 grid gap-3">
                {[
                  "Pathology localized to the foraminal or extraforaminal zone",
                  "Exiting root (L5) is the decompression target, not the traversing root (S1)",
                  "Imaging-symptom concordance confirmed for L5 distribution",
                  "Fusion not indicated as part of the operative plan"
                ].map((item) => (
                  <p key={item} className="flex gap-3 text-base leading-7 text-ink">
                    <CheckCircle2 aria-hidden="true" size={20} className="mt-1 shrink-0 text-brand-700" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </section>

          <hr className="border-line" />

          {/* Section 5 — Surgical Objective */}
          <section>
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-brand-700">05</p>
            <h2 className="mt-2 text-3xl font-black leading-tight text-ink">Surgical Objective</h2>
            <div className="mt-5 space-y-4 text-base leading-8 text-ink">
              <p>
                The surgical objective in right L5-S1 far-lateral biportal endoscopic foraminotomy and discectomy is complete
                decompression of the exiting right L5 nerve root at the foraminal and extraforaminal level. This requires foraminotomy to
                enlarge the bony foraminal corridor, removal of the compressive disc fragment, and endoscopic confirmation of adequate
                decompression with free root excursion.
              </p>
              <p>
                The traversing S1 root, the central canal, and bilateral structures are not operative targets in this procedure. Operative
                planning, portal trajectory, and intraoperative decision-making are all directed at the exiting L5 root and its
                foraminal-extraforaminal compression.
              </p>
            </div>
          </section>

          <hr className="border-line" />

          {/* Section 6 — Technical Points */}
          <section>
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-brand-700">06</p>
            <h2 className="mt-2 text-3xl font-black leading-tight text-ink">Technical Points</h2>
            <div className="mt-6 space-y-6">
              {[
                {
                  heading: "Patient Positioning and Fluoroscopic Planning",
                  body: "The patient is positioned prone with fluoroscopic monitoring to confirm level and portal trajectory. The right L5-S1 foraminal zone is identified on anteroposterior and lateral fluoroscopic views before incision. Portal angles differ from standard interlaminar approaches and should be confirmed fluoroscopically."
                },
                {
                  heading: "Portal Placement",
                  body: "Viewing and working portals are placed more laterally than in an interlaminar approach, aligned with the right L5-S1 foraminal and extraforaminal zone. Correct portal trajectory is critical to achieving direct access without traversing the central canal territory."
                },
                {
                  heading: "Far-Lateral Corridor Development",
                  body: "The working corridor is developed toward the L5-S1 foramen via the far-lateral trajectory. The working space is bounded by the L5 transverse process superiorly, the sacral ala inferiorly, and the foraminal exit zone laterally. Careful tissue dissection preserves the surrounding structural integrity."
                },
                {
                  heading: "Foraminotomy",
                  body: "Bony decompression is performed to enlarge the foraminal corridor, relieving extrinsic bony compression of the exiting L5 root. Decompression is limited to the structures directly implicated in root compression; the medial wall of the foramen and the pedicle are preserved unless specifically involved."
                },
                {
                  heading: "Discectomy",
                  body: "The compressive disc material is identified and removed under endoscopic visualization. The exiting L5 root is protected throughout disc manipulation. Adequate disc fragment removal is confirmed before decompression is assessed."
                },
                {
                  heading: "Decompression Confirmation",
                  body: "Adequate decompression is confirmed by direct endoscopic observation of the free exiting L5 root without residual compressive elements. This step is required before closure and is not replaced by fluoroscopic assessment alone."
                },
                {
                  heading: "Hemostasis",
                  body: "Hemostasis is achieved in the continuously irrigated endoscopic field. The biportal irrigation environment supports visualization throughout the procedure and facilitates hemostasis before portal closure."
                }
              ].map(({ heading, body }) => (
                <div key={heading} className="rounded-2xl border border-line bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-black text-ink">{heading}</h3>
                  <p className="mt-3 text-base leading-8 text-muted">{body}</p>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-line" />

          {/* Section 7 — Educational Point */}
          <section>
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-brand-700">07</p>
            <h2 className="mt-2 text-3xl font-black leading-tight text-ink">Educational Point</h2>
            <div className="mt-5 space-y-4 text-base leading-8 text-ink">
              <p>
                The most important educational distinction in L5-S1 foraminal pathology is precise identification of which nerve root is
                compressed and which approach trajectory directly targets that root. Approach mismatch — selecting an interlaminar
                trajectory for foraminal pathology, or vice versa — is a preventable technical error with direct implications for
                decompression adequacy.
              </p>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-line bg-calm p-6">
                <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-brand-700">L5-S1 Root Identification</p>
                <div className="mt-4 space-y-3">
                  <p className="text-base leading-7 text-ink">
                    <strong>Foraminal / extraforaminal herniation</strong>
                    <br />
                    → Compresses <strong>exiting L5 root</strong>
                    <br />
                    → Far-lateral approach
                  </p>
                  <p className="text-base leading-7 text-ink">
                    <strong>Central canal / subarticular herniation</strong>
                    <br />
                    → Compresses <strong>traversing S1 root</strong>
                    <br />
                    → Interlaminar approach
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-line bg-calm p-6">
                <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-brand-700">This Approach Is Not</p>
                <div className="mt-4 grid gap-2">
                  {[
                    "Standard interlaminar UBE decompression",
                    "ULBD (unilateral laminotomy bilateral decompression)",
                    "UBE-TLIF or fusion procedure",
                    "Central canal decompression",
                    "Bilateral decompression technique"
                  ].map((item) => (
                    <p key={item} className="flex gap-3 text-sm leading-6 text-muted">
                      <AlertCircle aria-hidden="true" size={16} className="mt-0.5 shrink-0 text-accent-600" />
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <hr className="border-line" />

          {/* Section 8 — De-identified Illustrative Case */}
          <section>
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-brand-700">08</p>
            <h2 className="mt-2 text-3xl font-black leading-tight text-ink">De-identified Illustrative Case</h2>
            <div className="mt-6 rounded-[28px] border border-brand-200 bg-brand-50 p-6 sm:p-8">
              <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-brand-700">De-identified Educational Summary</p>
              <p className="mt-4 text-base leading-8 text-ink">
                A de-identified illustrative case involved acute right-sided buttock-to-dorsum foot radicular pain, gait disturbance, right
                L5 dermatome dysesthesia, and weakness of ankle dorsiflexion and great toe dorsiflexion. Lumbar MRI demonstrated right
                L5-S1 foraminal disc pathology consistent with exiting L5 root compression. The patient underwent right L5-S1 far-lateral
                biportal endoscopic foraminotomy and discectomy for decompression of the exiting L5 nerve root.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  { label: "Presentation", value: "Acute right-sided radicular pain, gait disturbance" },
                  { label: "Distribution", value: "Buttock → dorsum of foot (L5)" },
                  { label: "Neurological", value: "Ankle dorsiflexion and great toe dorsiflexion weakness" },
                  { label: "MRI finding", value: "Right L5-S1 foraminal disc pathology, exiting L5 root compression" },
                  { label: "Procedure", value: "Right L5-S1 far-lateral biportal endoscopic foraminotomy and discectomy" },
                  { label: "Target", value: "Exiting right L5 nerve root decompression" }
                ].map(({ label, value }) => (
                  <div key={label} className="rounded-xl bg-white px-4 py-3">
                    <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-brand-700">{label}</p>
                    <p className="mt-1 text-sm leading-6 text-ink">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <hr className="border-line" />

          {/* Section 9 — Operative Note Summary */}
          <section>
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-brand-700">09</p>
            <h2 className="mt-2 text-3xl font-black leading-tight text-ink">Operative Note Summary</h2>
            <div className="mt-6 rounded-[28px] border border-brand-200 bg-brand-50 p-6 sm:p-8">
              <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-brand-700">
                De-identified Operative Summary — Educational Use Only
              </p>
              <p className="mt-4 text-base leading-8 text-ink">
                A right-sided unilateral biportal endoscopic far-lateral approach was performed at L5-S1. After fluoroscopic confirmation
                of the target level and trajectory, viewing and working portals were established for access to the right foraminal and
                extraforaminal region.
              </p>
              <p className="mt-4 text-base leading-8 text-ink">
                The far-lateral working corridor was developed toward the right L5-S1 foramen. Targeted foraminotomy was performed to
                decompress the exiting L5 nerve root. The disc-related compressive component was identified and removed under endoscopic
                visualization. Adequate decompression of the exiting L5 nerve root was confirmed endoscopically. Hemostasis was achieved
                in the irrigated field before closure.
              </p>
            </div>
          </section>

          <hr className="border-line" />

          {/* Section 10 — Editorial Notice */}
          <section>
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-brand-700">10</p>
            <h2 className="mt-2 text-3xl font-black leading-tight text-ink">Editorial Notice</h2>
            <div className="mt-6 rounded-[28px] border border-accent-300 bg-accent-100 p-6 sm:p-8">
              <div className="grid gap-3">
                {[
                  "All clinical information in this article has been de-identified for educational purposes. No patient-identifiable information — including dates, institution names, geographic identifiers, or personal data — is included.",
                  "This article is intended as a technical educational resource for healthcare providers. It does not constitute a clinical treatment protocol, individualized patient guidance, or a guarantee of specific surgical outcomes.",
                  "Surgical decisions require individualized evaluation by a qualified surgeon. The techniques described may not be appropriate for all patients or clinical scenarios.",
                  "This article is part of the Operative Concepts series on biportal endoscopic spine surgery education."
                ].map((item) => (
                  <p key={item} className="flex gap-3 text-base leading-7 text-ink">
                    <CheckCircle2 aria-hidden="true" size={20} className="mt-1 shrink-0 text-brand-700" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </section>

        </div>
      </article>

      {/* Related links */}
      <section className="bg-calm px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-brand-700">Related</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-ink sm:text-4xl">Further Reading</h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              Explore related operative concepts and the biportal endoscopic spine surgery overview.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { label: "Operative Concepts", href: "/operative-concepts" },
              { label: "Biportal Endoscopic Spine Surgery", href: "/biportal-endoscopic-spine-surgery" }
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-2xl border border-line bg-white p-5 text-lg font-black text-ink shadow-sm transition hover:-translate-y-1 hover:shadow-card"
              >
                {item.label}
                <span className="mt-5 flex items-center gap-2 text-sm font-extrabold text-brand-700">
                  View <ArrowRight aria-hidden="true" size={17} className="transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
