import type { Category } from '@/shared/types';
import { CATEGORY_CONFIG, CATEGORY_ICONS } from '@/shared/constants/categories';
import { Check } from 'lucide-react';

type CategorySelectorProps = {
  value: Category;
  onChange: (category: Category) => void;
};

const COLOR_CLASSES: Record<Category, string> = {
  furto: 'border-furto bg-furto-light text-furto-dark',
  assalto: 'border-assalto bg-assalto-light text-assalto-dark',
  tiroteio: 'border-tiroteio bg-tiroteio-light text-tiroteio-dark',
};

export function CategorySelector({ value, onChange }: CategorySelectorProps) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {CATEGORY_CONFIG.map((cat) => {
        const Icon = CATEGORY_ICONS[cat.value];
        const selected = value === cat.value;
        return (
          <button
            key={cat.value}
            type="button"
            onClick={() => onChange(cat.value)}
            className={`relative grid h-20 place-content-center gap-1.5 rounded-lg border text-xs font-medium transition-all ${
              selected ? COLOR_CLASSES[cat.value] : 'border-slate-200 bg-white text-slate-500 hover:border-slate-300'
            }`}
          >
            <Icon size={20} className="mx-auto" />
            <span>{cat.label}</span>
            {selected && <Check size={14} className="absolute right-2 top-2" />}
          </button>
        );
      })}
    </div>
  );
}
