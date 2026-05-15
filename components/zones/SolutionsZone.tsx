import Link from 'next/link';
import { ArrivalWrapper } from '@/components/primitives/ArrivalWrapper';
import { SectionHead } from '@/components/primitives/SectionHead';
import { solutions } from '@/content/solutions';

const TOTAL_SOLUTIONS = 13;

function VMark() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7 text-[var(--text)] transition-transform duration-300 group-hover:rotate-[8deg]"
      aria-hidden="true"
    >
      <path
        d="M 6 4 L 12 20 L 18 4"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

export function SolutionsZone() {
  return (
    <section id="solutions">
      <ArrivalWrapper as="div" className="zone-pad">
        <SectionHead
          title="Solutions"
          counter={`${solutions.length} of ${TOTAL_SOLUTIONS}`}
        />

        <div className="border-t border-[var(--hairline)]">
          {solutions.map((solution) => (
            <Link
              key={solution.slug}
              href={solution.hasPage ? `/solutions/${solution.slug}` : '#'}
              className="group grid grid-cols-[64px_minmax(0,3fr)_minmax(0,7fr)_32px] items-center gap-x-8 border-b border-[var(--hairline)] py-7 text-inherit no-underline"
            >
              <span>
                <VMark />
              </span>

              <span className="text-[clamp(1.15rem,1.8vw,1.55rem)] font-medium uppercase tracking-[-0.01em] text-[var(--text)]">
                {solution.name}
              </span>

              <span className="font-serif text-[clamp(0.95rem,1.05vw,1.05rem)] leading-[1.5] text-[var(--text-3)] transition-colors group-hover:text-[var(--text-2)]">
                {solution.description}
              </span>

              <span className="text-right font-mono text-sm text-[var(--text-4)] transition-transform group-hover:translate-x-1.5 group-hover:text-[var(--text)]">
                →
              </span>
            </Link>
          ))}
        </div>
      </ArrivalWrapper>
    </section>
  );
}
