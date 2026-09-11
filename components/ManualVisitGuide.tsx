import Link from "next/link";
import SEOJsonLd from "@/components/SEOJsonLd";
import { hospitalInfo, SITE_URL } from "@/lib/data";

const questions = [
  {
    question: "첫 방문부터 도수치료를 받을 수 있나요?",
    answer: "먼저 진료를 통해 통증 원인과 기능 상태, 기존 치료 반응을 확인합니다. 도수치료가 적절한지와 당일 치료 가능 여부는 진료 결과와 치료실 일정에 따라 달라지므로 내원 전 대표전화로 문의해 주세요."
  },
  {
    question: "다른 병원 검사 자료도 가져가면 되나요?",
    answer: "가지고 계신 영상검사 자료와 판독지, 수술·시술 기록, 복용약 목록이 있으면 지참해 주세요. 새 검사를 미리 받을 필요는 없으며, 추가 검사가 필요한지는 진료 후 판단합니다. 통증이 시작된 시점과 불편한 동작도 정리하면 도움이 됩니다."
  },
  {
    question: "도수치료와 운동재활은 어떻게 다른가요?",
    answer: "도수치료는 손을 이용한 치료 방법이며, 운동재활은 환자가 참여하는 움직임·근력·기능 훈련을 중심으로 합니다. 치료를 모두 받는 것이 정해진 순서는 아닙니다. 진료 결과와 회복 단계에 따라 필요한 방법과 범위를 상의합니다."
  },
  {
    question: "치료 횟수와 비용, 보험 적용은 미리 정해져 있나요?",
    answer: "필요한 치료와 횟수는 상태와 치료 반응에 따라 달라집니다. 진료 후 제안된 항목별 비용과 건강보험 적용 기준을 확인해 주세요. 실손보험 보장 여부는 가입 상품과 약관에 따라 달라질 수 있으므로 보험사에 별도로 확인해야 합니다."
  }
];

const preparation = [
  { title: "방문 전 일정 확인", description: "대표전화로 진료 일정과 접수 방법을 확인해 주세요. 진료 예약이 특정 치료나 당일 치료를 확정하는 것은 아닙니다." },
  { title: "증상과 기록 준비", description: "통증 시작 시점, 불편한 동작과 기존 치료 반응을 정리하고, 보유한 검사 자료·판독지와 복용약 목록을 챙겨 주세요." },
  { title: "진료 후 치료 계획 상담", description: "진찰 소견과 기능 평가를 바탕으로 필요한 치료, 목표, 비용을 확인하고 이후 변화에 따라 계획을 조정합니다." }
];

export default function ManualVisitGuide() {
  return (
    <section aria-labelledby="manual-visit-title" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <SEOJsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${SITE_URL}/manual-exercise-rehab#faq`,
        mainEntity: questions.map(({ question, answer }) => ({
          "@type": "Question", name: question,
          acceptedAnswer: { "@type": "Answer", text: answer }
        }))
      }} />
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-extrabold tracking-wide text-brand-700">첫 방문 안내</p>
        <h2 id="manual-visit-title" className="mt-3 text-3xl font-black leading-tight text-ink sm:text-4xl">도수치료 상담, 이렇게 준비하세요</h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">용인 처인구 중부대로 1539, 새기준병원에서 통증과 일상생활의 불편을 함께 확인합니다. 특정 치료를 먼저 선택하기보다 현재 상태를 설명하는 것부터 시작해 주세요.</p>
        <ol className="mt-8 grid gap-5 md:grid-cols-3">
          {preparation.map((item, index) => (
            <li key={item.title} className="rounded-2xl border border-line bg-calm p-6">
              <p className="text-sm font-extrabold text-brand-700">0{index + 1}</p>
              <h3 className="mt-3 text-xl font-black text-ink">{item.title}</h3>
              <p className="mt-3 leading-8 text-muted">{item.description}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={hospitalInfo.consultationPhoneHref} className="rounded-xl bg-brand-700 px-5 py-3 font-bold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-700">전화 문의 {hospitalInfo.phone}</a>
          <a href={hospitalInfo.naverReservationHref} className="rounded-xl border border-line px-5 py-3 font-bold text-ink underline underline-offset-4">네이버 진료 예약</a>
          <Link href="/contact" className="rounded-xl border border-line px-5 py-3 font-bold text-ink underline underline-offset-4">진료시간·주차·오시는 길</Link>
        </div>
        <h2 className="mt-14 text-2xl font-black text-ink sm:text-3xl">도수치료·운동재활 자주 묻는 질문</h2>
        <div className="mt-6 divide-y divide-line border-y border-line">
          {questions.map(({ question, answer }) => (
            <details key={question} className="group py-1">
              <summary className="cursor-pointer px-2 py-5 text-lg font-bold text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-700">{question}</summary>
              <p className="max-w-4xl px-2 pb-6 leading-8 text-muted">{answer}</p>
            </details>
          ))}
        </div>
        <aside aria-label="정보 제공 및 참고자료" className="mt-10 rounded-2xl bg-calm p-6 text-sm leading-7 text-muted">
          <h3 className="font-bold text-ink">정보 제공 및 참고자료</h3>
          <p>정보 제공: 새기준병원 회복재활센터 · 페이지 갱신일: <time dateTime="2026-09-11">2026년 9월 11일</time></p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li><a href="https://new-standard.co.kr/sub/r10/s1020.php" className="underline">새기준병원 진료 의료진 소개</a></li>
            <li><a href="https://www.hira.or.kr/bbsDummy.do?brdBltNo=12133&brdScnBltNo=4&pageIndex=1&pgmid=HIRAA020002000100" className="underline" target="_blank" rel="noopener noreferrer">건강보험심사평가원: 도수치료 관리급여 전환 관련 기준 안내</a></li>
            <li><a href="https://www.nice.org.uk/guidance/NG59/chapter/recommendations#manual-therapies" className="underline" target="_blank" rel="noopener noreferrer">NICE NG59: 16세 초과 요통·좌골신경통의 도수치료 권고(영문)</a></li>
          </ul>
          <p className="mt-3">NICE의 해당 권고는 요통·좌골신경통에서 도수치료를 운동을 포함한 치료 계획의 일부로 고려한다는 내용입니다. 모든 질환에 동일하게 적용하지 않으며, 개인별 치료나 보험 보장을 보장하지 않습니다.</p>
        </aside>
      </div>
    </section>
  );
}
