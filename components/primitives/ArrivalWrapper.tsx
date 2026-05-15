'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeUp, fadeIn } from '@/lib/motion';
import { cn } from '@/lib/utils';

interface ArrivalWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** 'up' = fadeUp (default), 'fade' = opacity only */
  variant?: 'up' | 'fade';
  /** Fraction of element that must be visible before triggering. */
  threshold?: number;
  /** CSS: once in view, always stay visible. Default: true. */
  once?: boolean;
  as?: React.ElementType;
}

/**
 * Scroll-triggered arrival wrapper using Framer Motion.
 * Wraps any content in a motion.div that fades in on viewport entry.
 *
 * Usage:
 *   <ArrivalWrapper>
 *     <SectionHead ... />
 *   </ArrivalWrapper>
 *
 * Only mark 'use client' components — server components use this via
 * their own client boundary (the zones themselves are server-rendered
 * by default; only ArrivalWrapper and interactive components are client).
 */
export function ArrivalWrapper({
  children,
  className,
  delay = 0,
  variant = 'up',
  threshold = 0.12,
  once = true,
  as: Tag = 'div',
}: ArrivalWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once,
    margin: '0px 0px -8% 0px',
    amount: threshold,
  });

  const MotionTag = motion[Tag as keyof typeof motion] as typeof motion.div;
  const vars = variant === 'fade' ? fadeIn : fadeUp;

  return (
    <MotionTag
      ref={ref}
      variants={vars}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}
