import Link from 'next/link';
import { ArrivalWrapper } from '@/components/primitives/ArrivalWrapper';
import { SectionHead } from '@/components/primitives/SectionHead';
import { operators } from '@/content/operators';

export function PartnersZone() {
  return (
    <section id="partners">
      <ArrivalWrapper as="div" className="zone-pad">
        <SectionHead
          title="Founding Partners"
          counter="Three principals · Founded 2024"
        />

        <div className="grid grid-cols-1 border-y border-[var(--hairline)] md:grid-cols-3">
          {operators.map((op) => (
            <Link
              key={op.slug}
              href={`/operators/${op.slug}`}
              className="flex min-h-[220px] flex-col border-b border-[var(--hairline)] py-10 md:border-b-0 md:border-r md:px-8 first:md:pl-0 last:md:border-r-0 last:md:pr-0"
            >
              <h3 className="mb-4 text-[clamp(1.3rem,2vw,1.75rem)] font-medium leading-tight tracking-[-0.018em] text-[var(--text)]">
                {op.name}
              </h3>

              <p className="max-w-[30ch] font-serif text-[clamp(0.95rem,1.05vw,1.1rem)] italic leading-[1.45] text-[var(--text-strong)]">
                {op.role}
              </p>

              <span className="mt-auto pt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--text-3)]">
                Profile →
              </span>
            </Link>
          ))}
        </div>
      </ArrivalWrapper>
    </section>
  );
}
