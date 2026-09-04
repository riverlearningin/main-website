import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { FadeInSection } from "@/components/FadeInSection";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/data/products";

export default function ProductsPage() {
  const featured = products.filter((product) => product.featured);
  const supporting = products.filter((product) => !product.featured);

  return (
    <main className="page-shell section-padding">
      <FadeInSection className="mb-12 max-w-3xl">
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1E9BE0]">Products</div>
        <h1 className="text-h1 mt-3 text-[#1B2A4A]">Digital systems designed to replace guesswork with clarity.</h1>
        <p className="text-body mt-5 text-slate-600">
          Purpose-built digital tools that bring the same discipline, structure, and clarity we bring to every consulting engagement — directly into your day-to-day operations.
        </p>
      </FadeInSection>

      <div className="space-y-8">
        {featured.map((product) => (
          <FadeInSection key={product.name}>
            <ProductCard {...product} featured />
          </FadeInSection>
        ))}

        <div className="grid gap-6 md:grid-cols-2">
          {supporting.map((product) => (
            <FadeInSection key={product.name}>
              <ProductCard {...product} />
            </FadeInSection>
          ))}
        </div>
      </div>

      <FadeInSection className="mt-12">
        <div className="rounded-[28px] border border-slate-200 bg-white p-8 text-center shadow-[0_12px_30px_rgba(27,42,74,0.04)]">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1E9BE0]">Need a live demo?</div>
          <h2 className="text-h2 mt-3 text-[#1B2A4A]">Request a Demo</h2>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-gradient-to-r from-[#1E9BE0] to-[#7C5CFC] px-6 py-3 text-base font-semibold text-white shadow-[0_12px_30px_rgba(30,155,224,0.2)] transition hover:scale-[1.03]"
          >
            Get in Touch
          </Link>
        </div>
      </FadeInSection>
    </main>
  );
}
