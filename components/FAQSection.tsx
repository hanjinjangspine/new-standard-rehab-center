import { faqItems } from "@/lib/data";
import SectionTitle from "@/components/SectionTitle";

export default function FAQSection() {
  return (
    <section className="bg-calm px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionTitle align="center" eyebrow="FAQ" title="회복재활센터 자주 묻는 질문" description="치료 여부와 방법은 환자 상태에 따라 달라질 수 있으므로 진료 상담을 통해 확인하는 것이 좋습니다." />
        <div className="mt-10 grid gap-4">
          {faqItems.map((item) => (
            <div key={item.question} className="rounded-[24px] border border-line bg-white p-6 shadow-sm">
              <h3 className="text-xl font-black text-ink">{item.question}</h3>
              <p className="mt-3 text-base leading-7 text-muted">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
