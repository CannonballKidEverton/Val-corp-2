import type { VMark } from '@/content/solutions';

const STROKE = { stroke: 'currentColor', strokeWidth: '1.5', fill: 'none', strokeLinecap: 'square' as const, strokeLinejoin: 'miter' as const };

const MARKS: Record<VMark, React.ReactNode> = {
  standard: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M 6 4 L 12 20 L 18 4" {...STROKE} />
    </svg>
  ),
  extended: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M 6 4 L 12 20 L 20 2" {...STROKE} />
    </svg>
  ),
  capped: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M 6 4 L 12 20 L 18 4 M 6 4 L 18 4" {...STROKE} />
    </svg>
  ),
  tilted: (
    <svg viewBox="0 0 24 24" style={{ transform: 'rotate(7deg)' }} aria-hidden="true">
      <path d="M 6 4 L 12 20 L 18 4" {...STROKE} />
    </svg>
  ),
  wide: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M 3 6 L 12 20 L 21 6" {...STROKE} />
    </svg>
  ),
  underlined: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M 6 4 L 12 18 L 18 4 M 6 22 L 18 22" {...STROKE} />
    </svg>
  ),
};

interface VMarkProps {
  variant: VMark;
  className?: string;
}

export function VMarkIcon({ variant, className }: VMarkProps) {
  return (
    <span
      className={className}
      style={{ display: 'block', width: 28, height: 28, color: 'inherit', flexShrink: 0 }}
    >
      {MARKS[variant]}
    </span>
  );
}
