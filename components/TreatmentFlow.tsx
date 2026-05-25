import { treatmentFlow } from "@/lib/data";

export default function TreatmentFlow() {
  return (
    <section className="bg-calm px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-4 lg:grid-cols-4">
          {treatmentFlow.map((item) => (
            <div key={item.step} className="rounded-[28px] border border-line bg-white p-6 shadow-sm">
              <p className="text-sm font-black text-brand-700">{item.step}</p>
              <h3 className="mt-4 text-xl font-black text-ink">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
