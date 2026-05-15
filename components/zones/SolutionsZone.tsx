import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrivalWrapper } from '@/components/primitives/ArrivalWrapper';
import { SectionHead } from '@/components/primitives/SectionHead';
import { VMarkIcon } from '@/components/solutions/VMarks';
import { solutions, TOTAL_SOLUTIONS } from '@/content/solutions';
import { vMarkHover, arrowHover } from '@/lib/motion';
import { cn } from '@/lib/utils';

export function SolutionsZone() {
  return (
    <ArrivalWrapper as="section" className="zone-pad" id="solutions">
      <SectionHead
        title="Solutions"
        counter={`${solutions.length} of ${TOTAL_SOLUTIONS}`}
      />

      <div>
        {solutions.map((sol) => {
          const Tag = sol.href ? Link : 'div';
          const props = sol.href ? { href: sol.href } : {};

          return (
            <motion.div
              key={sol.slug}
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              {/* @ts-expect-error dynamic tag */}
              <Tag
                {...props}
                className={cn(
                  'grid items-center gap-x-[clamp(24px,4vw,56px)]',
                  'grid-cols-[64px_minmax(0,3fr)_minmax(0,7fr)_32px]',
                  'py-7 border-b border-hairline first:border-t',
                  'no-underline text-inherit',
                  sol.href ? 'cursor-pointer' : 'cursor-default'
                )}
              >
                {/* V mark */}
                <motion.span
                  className="text-ink"
                  variants={vMarkHover}
                  style={{ transformOrigin: '50% 60%' }}
                >
                  <VMarkIcon variant={sol.vMark} />
                </motion.span>

                {/* Name */}
                <span className="t-solution text-ink">{sol.name}</span>

                {/* Description */}
                <span className="font-serif text-[clamp(0.95rem,1.05vw,1.05rem)] leading-relaxed text-ink-3 hidden md:block">
                  {sol.description}
                </span>

                {/* Arrow */}
                <motion.span
                  className="font-mono text-[14px] text-ink-4 text-right"
                  variants={arrowHover}
                >
                  →
                </motion.span>
              </Tag>
            </motion.div>
          );
        })}
      </div>
    </ArrivalWrapper>
  );
}
