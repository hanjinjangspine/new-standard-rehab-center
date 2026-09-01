import { faqItems } from "@/lib/data";
import SectionTitle from "@/components/SectionTitle";
import SubtleImageCard from "@/components/SubtleImageCard";

const faqBackgrounds = [
  "/images/hospital/rehab-tour-01.jpg",
  "/images/rehab/manual-therapy-01.jpg",
  "/images/rehab/equipment-01.jpg",
  "/images/generated/visit-prep-background-20260901.webp",
  "/images/generated/acute-sprain-kit-20260901.webp",
  "/images/generated/postoperative-prep-20260901.webp",
  "/images/hospital/rehab-tour-04.jpg",
  "/images/generated/senior-balance-room-20260901.webp",
  "/images/generated/parenting-recovery-corner-20260901.webp",
  "/images/rehab/rehab-room-02.jpg"
];

export default function FAQSection() {
  return (
    <section className="bg-calm px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionTitle align="center" eyebrow="FAQ" title="회복재활센터 자주 묻는 질문" description="치료 여부와 방법은 환자 상태에 따라 달라질 수 있으므로 진료 상담을 통해 확인하는 것이 좋습니다." />
        <div className="mt-10 grid gap-4">
          {faqItems.map((item, index) => (
            <SubtleImageCard key={item.question} image={faqBackgrounds[index]} className="rounded-[24px] border border-line p-6 shadow-sm" sizes="(min-width: 1024px) 960px, calc(100vw - 2rem)">
              <h3 className="text-xl font-black text-ink">{item.question}</h3>
              <p className="mt-3 text-base leading-7 text-muted">{item.answer}</p>
            </SubtleImageCard>
          ))}
        </div>
      </div>
    </section>
  );
}
