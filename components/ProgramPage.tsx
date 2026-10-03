import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SEOJsonLd from "@/components/SEOJsonLd";
import SubtleImageCard from "@/components/SubtleImageCard";
import ManualVisitGuide from "@/components/ManualVisitGuide";
import { ProgramSlug, programPages, safetyCopy } from "@/lib/data";
import { webPageJsonLd } from "@/lib/seo";

const infoCardBackgrounds = [
  "/images/generated/cards-20260902/symptom-observation.webp",
  "/images/generated/cards-20260902/functional-assessment.webp",
  "/images/generated/cards-20260902/recovery-exercise.webp",
];

const detailBackgrounds: Partial<Record<ProgramSlug, string[]>> = {
  "postoperative-recovery": [
    "/images/generated/cards-20260902/postoperative-consultation.webp",
    "/images/generated/cards-20260902/medical-records.webp",
    "/images/generated/cards-20260902/recovery-exercise.webp",
    "/images/generated/cards-20260902/spine-recovery.webp",
    "/images/generated/cards-20260902/knee-recovery.webp",
    "/images/generated/cards-20260902/shoulder-recovery.webp",
  ],
  "manual-exercise-rehab": [
    "/images/generated/cards-20260902/functional-assessment.webp",
    "/images/generated/cards-20260902/medical-records.webp",
    "/images/generated/cards-20260902/recovery-exercise.webp",
  ],
};

const relatedBackgrounds = [
  "/images/generated/cards-20260902/spine-recovery.webp",
  "/images/generated/cards-20260902/knee-recovery.webp",
  "/images/generated/cards-20260902/recovery-exercise.webp",
  "/images/generated/cards-20260902/functional-assessment.webp",
];

export default function ProgramPage({ slug }: { slug: ProgramSlug }) {
  const page = programPages[slug];
  const h1 = page.h1 ?? page.title.replace(" | 새기준병원 회복재활센터", "");

  return (
    <main>
      <SEOJsonLd
        data={webPageJsonLd({
          title: page.title,
          description: page.description,
          path: page.path,
        })}
      />
      <PageHero
        path={page.path}
        eyebrow={page.eyebrow}
        title={h1}
        description={page.heroLead}
        imageSrc={page.heroImage}
        imageAlt={page.heroImageAlt}
        hideImageOnMobile={page.heroImageAlt?.includes("연출 이미지")}
        ctaLabel={page.ctaLabel}
      />
      <aside
        aria-label="먼저 확인할 증상"
        className="border-b border-amber-200 bg-amber-50 px-5 py-5"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="text-base font-bold text-ink">
            재활 상담보다 먼저 의사 진료가 필요한 변화
          </h2>
          <p className="mt-2 max-w-4xl text-base leading-7 text-ink">
            {safetyCopy[3]}
          </p>
        </div>
      </aside>
      <nav
        aria-label="이 페이지 안내"
        className="border-b border-line bg-white px-5 py-3"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2">
          {[
            { href: "#symptoms", label: "증상·평가" },
            ...(page.consultationGuide
              ? [{ href: "#consultation-questions", label: "상담 질문" }]
              : []),
            { href: "#visit-preparation", label: "방문 준비" },
            { href: "#related-care", label: "관련 진료" },
            { href: "#safety", label: "치료 전 확인" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex min-h-11 items-center rounded-xl bg-calm px-4 text-sm font-bold text-brand-700"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
      <section
        id="symptoms"
        className="program-card-section px-4 py-12 sm:px-6 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <InfoCard
            title="이런 증상이 있을 때"
            items={page.symptoms}
            image={infoCardBackgrounds[0]}
          />
          <InfoCard
            title="진료에서 확인하는 것"
            items={page.checks}
            image={infoCardBackgrounds[1]}
          />
          <InfoCard
            title="회복관리 방향"
            items={page.care}
            image={infoCardBackgrounds[2]}
          />
        </div>
      </section>
      {page.consultationGuide && (
        <section
          id="consultation-questions"
          className="px-5 py-12 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <h2 className="text-2xl font-black text-ink">
              진료 전에 생각해 볼 질문
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-2xl border border-line bg-white p-6">
                <h3 className="text-xl font-bold text-ink">
                  {page.consultationGuide.title}
                </h3>
                <p className="mt-3 max-w-3xl leading-7 text-muted">
                  {page.consultationGuide.description}
                </p>
                <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-ink">
                  {page.consultationGuide.questions.map((q) => (
                    <li key={q}>{q}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-brand-50 p-6">
                <h3 className="text-xl font-bold text-ink">
                  {page.consultationGuide.goalTitle}
                </h3>
                <p className="mt-3 leading-7 text-muted">
                  {page.consultationGuide.goal}
                </p>
                <p className="mt-4 text-sm leading-6 text-muted">
                  기억나는 범위에서 편하게 정리해 주세요. 질문에
                  해당하는지만으로 질환이나 치료 필요성을 판단하지 않습니다.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
      {page.detailSections ? (
        <section className="program-detail-section px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
            {page.detailSections.map((item, index) => (
              <SubtleImageCard
                key={item.title}
                image={
                  detailBackgrounds[slug]?.[index] ??
                  infoCardBackgrounds[index % infoCardBackgrounds.length]
                }
                intensity="present"
                className="rounded-[28px] border border-line p-6 shadow-sm"
              >
                <h2 className="text-2xl font-black leading-tight text-ink">
                  {item.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-muted">
                  {item.description}
                </p>
                {item.items ? (
                  <div className="mt-5 grid gap-3">
                    {item.items.map((subItem) => (
                      <p
                        key={subItem}
                        className="flex gap-3 text-base leading-7 text-ink"
                      >
                        <span
                          aria-hidden="true"
                          className="shrink-0 text-brand-700"
                        >
                          •
                        </span>
                        {subItem}
                      </p>
                    ))}
                  </div>
                ) : null}
              </SubtleImageCard>
            ))}
          </div>
        </section>
      ) : null}
      {slug === "manual-exercise-rehab" && (
        <div id="visit-preparation">
          <ManualVisitGuide />
        </div>
      )}
      {slug !== "manual-exercise-rehab" && (
        <section id="visit-preparation" className="bg-white px-5 py-12">
          <div className="mx-auto max-w-7xl rounded-2xl border border-line p-6">
            <h2 className="text-2xl font-black text-ink">
              방문 전 준비해 주세요
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-muted">
              {slug === "postoperative-recovery"
                ? "다른 병원에서 수술받은 경우에도 보유한 영상·판독지, 수술기록지와 복용약 정보를 가져오시면 상담에 도움이 됩니다. 수술 의료진에게 안내받은 운동 제한·보조기·체중부하 지침도 함께 확인합니다."
                : "통증이 시작된 시점, 불편한 동작과 기존 치료 반응을 정리해 주세요. 가지고 계신 검사 자료·판독지와 복용약 목록이 있으면 상담에 도움이 됩니다."}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="flex min-h-11 items-center rounded-xl bg-brand-700 px-4 font-bold text-white"
              >
                진료 일정·오시는 길
              </Link>
              {slug !== "treatment-before-check" && (
                <Link
                  href="/treatment-before-check"
                  className="flex min-h-11 items-center px-4 font-bold text-brand-700 underline"
                >
                  치료 전 확인할 증상
                </Link>
              )}
            </div>
          </div>
        </section>
      )}
      <section id="related-care" className="bg-calm px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-brand-700">
              연관 진료 안내
            </p>
            <h2 className="mt-3 text-2xl font-black leading-tight text-ink sm:text-3xl">
              다음으로 확인할 안내
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              회복재활센터에서 받을 관리와 척추센터·관절센터 진료가 필요한지는 증상의 원인과 회복 단계에 따라 상의합니다. 아래에서 관련 안내를 찾아보세요.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {page.related.map((item, index) => (
              <SubtleImageCard
                key={item.href}
                image={relatedBackgrounds[index % relatedBackgrounds.length]}
                intensity="present"
                className="rounded-2xl border border-line shadow-sm transition hover:-translate-y-1 hover:shadow-card"
              >
                <Link
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group block p-5 text-lg font-black text-ink"
                >
                  {item.label}
                  <span className="mt-5 flex items-center gap-2 text-sm font-extrabold text-brand-700">
                    확인하기{" "}
                    <ArrowRight
                      aria-hidden="true"
                      size={17}
                      className="transition group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </SubtleImageCard>
            ))}
          </div>
        </div>
      </section>
      <section id="safety" className="px-4 py-12 sm:px-6 lg:px-8">
        <SubtleImageCard
          image="/images/generated/cards-20260902/symptom-observation.webp"
          intensity="present"
          className="mx-auto max-w-5xl rounded-[28px] border border-accent-300 p-6 shadow-sm sm:p-8"
          sizes="(min-width: 1024px) 960px, calc(100vw - 2rem)"
        >
          <h2 className="text-2xl font-black text-ink">치료 전 안내</h2>
          <div className="mt-5 grid gap-3">
            {safetyCopy
              .filter(
                (_, index) =>
                  index === 0 ||
                  (index === 1 && slug === "manual-exercise-rehab") ||
                  (index === 2 &&
                    ["acute-sprain", "treatment-before-check"].includes(
                      slug,
                    )) ||
                  (index === 4 && slug === "postoperative-recovery"),
              )
              .map((item) => (
                <p
                  key={item}
                  className="flex gap-3 text-base leading-7 text-ink"
                >
                  <span aria-hidden="true" className="shrink-0 text-brand-700">
                    •
                  </span>
                  {item}
                </p>
              ))}
          </div>
        </SubtleImageCard>
      </section>
      {slug === "postoperative-recovery" && (
        <section
          aria-label="정보 제공 및 참고자료"
          className="mx-auto max-w-5xl px-4 py-8 text-sm leading-7 text-muted sm:px-6 lg:px-8"
        >
          <h2 className="font-bold text-ink">정보 제공 및 참고자료</h2>
          <p>
            정보 제공: 새기준병원 회복재활센터 ·{" "}
            <a
              href="https://new-standard.co.kr/sub/r10/s1020.php"
              className="underline"
            >
              진료 의료진 소개
            </a>
          </p>
          <p>
            페이지 갱신일: <time dateTime="2026-09-29">2026년 9월 29일</time>
          </p>
          <p>
            <a
              href="https://www.orthoinfo.org/recovery/total-knee-replacement-exercise-guide/"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              미국정형외과학회(AAOS): 인공무릎관절 수술 후 운동 안내(영문)
            </a>
          </p>
          <p>
            무릎 수술 후 회복을 이해하기 위한 참고자료입니다. 다른 수술에 그대로
            적용하지 않으며, 운동 종류와 시작 시점은 수술한 의료진의 지시를
            따릅니다.
          </p>
        </section>
      )}
    </main>
  );
}

function InfoCard({
  title,
  items,
  image,
}: {
  title: string;
  items: string[];
  image: string;
}) {
  return (
    <SubtleImageCard
      image={image}
      className="rounded-2xl border border-line p-6 shadow-sm"
    >
      <h2 className="text-xl font-bold text-ink">{title}</h2>
      <ul className="mt-4 list-disc space-y-3 pl-5 text-base leading-7 text-muted">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </SubtleImageCard>
  );
}
