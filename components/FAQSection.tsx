import { faqItems } from "@/lib/data";
import SectionTitle from "@/components/SectionTitle";
export default function FAQSection() {
  return (
    <section className="bg-calm px-5 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionTitle eyebrow="자주 묻는 질문" title="방문 전 궁금한 점" />
        <div className="mt-8 divide-y divide-line rounded-2xl border border-line bg-white px-5">
          {faqItems.map((item) => (
            <details key={item.question}>
              <summary className="cursor-pointer py-5 text-lg font-bold text-ink">
                {item.question}
              </summary>
              <p className="max-w-3xl pb-6 text-base leading-7 text-muted">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
