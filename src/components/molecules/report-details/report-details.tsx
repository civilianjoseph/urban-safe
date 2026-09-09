import type { Report } from '@/shared/types';
import { CATEGORY_CONFIG, CATEGORY_ICONS, CATEGORY_LABELS } from '@/shared/constants/categories';
import { Badge } from '@/components/atoms/badge/badge';
import { IconBadge } from '@/components/atoms/icon-badge/icon-badge';
import { MapPin, Navigation, Shield } from 'lucide-react';

type ReportDetailsProps = {
  report: Report;
};

export function ReportDetails({ report }: ReportDetailsProps) {
  const Icon = CATEGORY_ICONS[report.category];
  const color = CATEGORY_CONFIG.find((c) => c.value === report.category)?.color ?? 'neutral';

  return (
    <div className="p-7">
      <IconBadge color={color} size="lg">
        <Icon size={24} />
      </IconBadge>
      <div className="mt-4">
        <Badge color={color}>{CATEGORY_LABELS[report.category]}</Badge>
      </div>
      <h2 className="mt-3 text-xl font-bold leading-snug text-slate-800">{report.description}</h2>
      <div className="mt-6 space-y-3">
        <div className="flex items-center gap-2.5 text-sm text-slate-600">
          <MapPin size={16} className="text-brand-500" />
          <span>{report.address || `${report.latitude.toFixed(4)}, ${report.longitude.toFixed(4)}`}</span>
        </div>
        <div className="flex items-center gap-2.5 text-sm text-slate-600">
          <Navigation size={16} className="text-brand-500" />
          <span>Reportado recentemente</span>
        </div>
      </div>
      <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-4 text-[10px] text-slate-400">
        <Shield size={14} className="text-brand-400" />
        Compartilhado pela comunidade Alerta.
      </div>
    </div>
  );
}
