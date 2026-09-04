import { FadeInSection } from "@/components/FadeInSection";
import { ServiceCard } from "@/components/ServiceCard";
import { serviceClusters, services } from "@/lib/data/services";

export default function ServicesPage() {
  return (
    <main className="page-shell section-padding">
      <FadeInSection className="mb-12 max-w-3xl">
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1E9BE0]">Services</div>
        <h1 className="text-h1 mt-3 text-[#1B2A4A]">Practical support where business pressure hits hardest.</h1>
        <p className="text-body mt-5 text-slate-600">
          River Learning works across strategy, operations, people, and systems to turn complexity into a clear path for execution and growth.
        </p>
      </FadeInSection>

      <div className="space-y-10">
        {serviceClusters.map((cluster) => (
          <section key={cluster}>
            <FadeInSection>
              <div className="mb-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-[#1E9BE0] to-[#7C5CFC]" />
                <h2 className="text-h2 text-[#1B2A4A]">{cluster}</h2>
                <div className="h-px flex-1 bg-gradient-to-r from-[#7C5CFC] to-transparent" />
              </div>
            </FadeInSection>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.filter((service) => service.cluster === cluster).map((service) => (
                <FadeInSection key={service.title}>
                  <ServiceCard {...service} />
                </FadeInSection>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
