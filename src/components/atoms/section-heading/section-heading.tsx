import type { ReactNode } from 'react';

type SectionHeadingProps = {
  kicker?: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ kicker, title, subtitle }: SectionHeadingProps) {
  return (
    <div>
      {kicker && <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">{kicker}</span>}
      <h2 className="mt-1.5 text-xl font-bold tracking-tight text-slate-800">{title}</h2>
      {subtitle && <p className="mt-1 text-sm text-slate-500">{subtitle}</p>}
    </div>
  );
}
