export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  inverse = false
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverse?: boolean;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className={`text-sm font-extrabold uppercase tracking-[0.14em] ${inverse ? "text-brand-100" : "text-brand-700"}`}>{eyebrow}</p> : null}
      <h2 className={`mt-3 text-3xl font-extrabold leading-tight sm:text-4xl ${inverse ? "text-white" : "text-ink"}`}>{title}</h2>
      {description ? <p className={`mt-5 text-lg leading-8 ${inverse ? "text-white/78" : "text-muted"}`}>{description}</p> : null}
    </div>
  );
}
