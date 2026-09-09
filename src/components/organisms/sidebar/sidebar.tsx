import { SectionHeading } from '@/components/atoms/section-heading/section-heading';
import { FilterItem } from '@/components/molecules/filter-item/filter-item';
import { Button } from '@/components/atoms/button/button';
import { Crosshair, Plus, Navigation } from 'lucide-react';
import type { Category, Report } from '@/shared/types';
import { CATEGORY_CONFIG } from '@/shared/constants/categories';

type SidebarProps = {
  reports: Report[];
  categoryFilter: Category | 'all';
  onFilterChange: (filter: Category | 'all') => void;
  onReport: () => void;
  open: boolean;
  onClose: () => void;
};

export function Sidebar({ reports, categoryFilter, onFilterChange, onReport, open, onClose }: SidebarProps) {
  return (
    <>
      {open && <div className="fixed inset-0 z-30 bg-slate-900/30 lg:hidden" onClick={onClose} />}
      <aside
        className={`fixed z-40 h-[calc(100vh-4rem)] w-72 overflow-y-auto border-r border-slate-200 bg-white p-6 transition-transform lg:static lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <SectionHeading kicker="Painel da cidade" title="Visão geral" />
        <p className="mt-4 text-xs leading-relaxed text-slate-500">
          Veja os alertas mais recentes compartilhados pela sua comunidade.
        </p>

        <div className="mt-5 flex items-end justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5">
          <div>
            <span className="block text-2xl font-bold tracking-tight text-brand-600">{reports.length}</span>
            <span className="text-[10px] text-slate-500">alertas ativos</span>
          </div>
          <span className="flex items-center gap-1 font-mono text-[9px] uppercase text-brand-500">
            <Navigation size={12} /> ao vivo
          </span>
        </div>

        <div className="mt-7 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-slate-400">
          <span>Filtrar por categoria</span>
        </div>

        <div className="mt-3 grid gap-1">
          <FilterItem
            label="Todos os alertas"
            count={reports.length}
            active={categoryFilter === 'all'}
            onClick={() => onFilterChange('all')}
          />
          {CATEGORY_CONFIG.map((cat) => (
            <FilterItem
              key={cat.value}
              label={cat.label}
              count={reports.filter((r) => r.category === cat.value).length}
              active={categoryFilter === cat.value}
              onClick={() => onFilterChange(cat.value)}
              category={cat.value}
            />
          ))}
        </div>

        <div className="mt-auto pt-8">
          <div className="flex gap-3 border-t border-slate-100 pt-5">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-100 text-brand-600">
              <Crosshair size={16} />
            </span>
            <div>
              <strong className="block text-xs text-slate-700">Você está seguro?</strong>
              <span className="block text-[10px] text-slate-400">Ajude alguém perto de você.</span>
            </div>
          </div>
          <Button fullWidth size="lg" className="mt-4" icon={<Plus size={18} />} onClick={onReport}>
            Reportar ocorrência
          </Button>
        </div>
      </aside>
    </>
  );
}
