import type { ReactNode } from 'react';

type BadgeProps = {
  children: ReactNode;
  color?: 'brand' | 'furto' | 'assalto' | 'tiroteio' | 'neutral';
};

const COLORS = {
  brand: 'bg-brand-50 text-brand-700 border-brand-100',
  furto: 'bg-furto-light text-furto-dark border-cyan-100',
  assalto: 'bg-assalto-light text-assalto-dark border-amber-100',
  tiroteio: 'bg-tiroteio-light text-tiroteio-dark border-red-100',
  neutral: 'bg-slate-50 text-slate-600 border-slate-200',
};

export function Badge({ children, color = 'neutral' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider ${COLORS[color]}`}>
      {children}
    </span>
  );
}
