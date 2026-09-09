import type { ReactNode } from 'react';

type IconBadgeProps = {
  children: ReactNode;
  color?: 'brand' | 'furto' | 'assalto' | 'tiroteio' | 'neutral';
  size?: 'sm' | 'md' | 'lg';
};

const COLORS = {
  brand: 'bg-brand-100 text-brand-600',
  furto: 'bg-furto-light text-furto-dark',
  assalto: 'bg-assalto-light text-assalto-dark',
  tiroteio: 'bg-tiroteio-light text-tiroteio-dark',
  neutral: 'bg-slate-100 text-slate-500',
};

const SIZES = {
  sm: 'w-7 h-7 rounded-md',
  md: 'w-9 h-9 rounded-lg',
  lg: 'w-12 h-12 rounded-xl',
};

export function IconBadge({ children, color = 'neutral', size = 'md' }: IconBadgeProps) {
  return <span className={`grid place-items-center ${COLORS[color]} ${SIZES[size]}`}>{children}</span>;
}
