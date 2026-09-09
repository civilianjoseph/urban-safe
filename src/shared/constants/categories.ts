import { Target, AlertTriangle, Flame } from 'lucide-react';
import type { CategoryConfig } from '@/shared/types';

export const CATEGORY_CONFIG: CategoryConfig[] = [
  { value: 'furto', label: 'Furto', color: 'furto' },
  { value: 'assalto', label: 'Assalto', color: 'assalto' },
  { value: 'tiroteio', label: 'Tiroteio', color: 'tiroteio' },
];

export const CATEGORY_ICONS = {
  furto: Target,
  assalto: AlertTriangle,
  tiroteio: Flame,
} as const;

export const CATEGORY_LABELS: Record<string, string> = {
  furto: 'Furto',
  assalto: 'Assalto',
  tiroteio: 'Tiroteio',
};
