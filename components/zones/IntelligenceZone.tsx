import { ArrivalWrapper } from '@/components/primitives/ArrivalWrapper';
import { SectionHead } from '@/components/primitives/SectionHead';
import { intelligenceSystems } from '@/content/intelligence';

export function IntelligenceZone() {
  return (
    <section id="intelligence">
      <ArrivalWrapper as="div" className="zone-pad">
        <SectionHead
          title="Intelligence Systems"
          counter={`${intelligenceSystems.length} systems`}
        />

        <div className="grid grid-cols-1 border-t border-[var(--hairline)] md:grid-cols-2 xl:grid-cols-4">
          {intelligenceSystems.map((system) => (
            <article
              key={system.ref}
              className="border-b border-[var(--hairline)] py-9 pr-8 md:border-r xl:border-b-0"
            >
              <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--text-3)]">
                {system.ref}
              </div>

              <h3 className="mb-4 text-[clamp(1.15rem,1.6vw,1.5rem)] font-medium leading-tight tracking-[-0.015em] text-[var(--text)]">
                {system.name}
              </h3>

              <p className="mb-6 max-w-[36ch] font-serif text-[clamp(0.95rem,1.05vw,1.05rem)] leading-[1.6] text-[var(--text-2)]">
                {system.description}
              </p>

              <dl className="space-y-3 font-mono">
                {system.meta.map((item) => (
                  <div key={item.label}>
                    <dt className="mb-1 text-[10px] uppercase tracking-[0.22em] text-[var(--text-3)]">
                      {item.label}
                    </dt>
                    <dd className="text-[12px] tracking-[0.06em] text-[var(--text-2)]">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </ArrivalWrapper>
    </section>
  );
}
