export function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
  cluster?: string;
}) {
  return (
    <article className="group h-full rounded-xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(27,42,74,0.04)] transition-all duration-200 hover:-translate-y-1 hover:border-[#7C5CFC]/40 hover:shadow-[0_18px_40px_rgba(124,92,252,0.12)]">
      <h3 className="mb-3 text-xl font-semibold text-[#1B2A4A]">{title}</h3>
      <p className="text-base leading-7 text-slate-600">{description}</p>
    </article>
  );
}
