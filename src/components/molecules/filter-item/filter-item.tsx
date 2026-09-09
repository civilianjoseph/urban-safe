import type { Category } from '@/shared/types';
import { CATEGORY_CONFIG, CATEGORY_ICONS } from '@/shared/constants/categories';

const FILTER_COLORS: Record<Category, string> = {
  furto: 'bg-furto-light text-furto-dark',
  assalto: 'bg-assalto-light text-assalto-dark',
  tiroteio: 'bg-tiroteio-light text-tiroteio-dark',
};

type FilterItemProps = {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
  category?: Category | 'all';
};

export function FilterItem({ label, count, active, onClick, category = 'all' }: FilterItemProps) {
  const Icon = category === 'all' ? null : CATEGORY_ICONS[category];
  const colorClass = category === 'all'
    ? 'bg-brand-100 text-brand-600'
    : FILTER_COLORS[category] ?? 'bg-slate-100 text-slate-500';

  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center gap-2.5 rounded-lg border px-2.5 py-2 text-left text-sm transition-all ${
        active ? 'border-slate-300 bg-slate-50 text-slate-800' : 'border-transparent text-slate-500 hover:bg-slate-50'
      }`}
    >
      <span className={`grid h-7 w-7 place-items-center rounded-md ${colorClass}`}>
        {Icon ? <Icon size={14} /> : <span className="text-[10px] font-bold">{count}</span>}
      </span>
      <span className="flex-1">{label}</span>
      <b className="text-xs font-medium text-slate-400">{count}</b>
    </button>
  );
}
