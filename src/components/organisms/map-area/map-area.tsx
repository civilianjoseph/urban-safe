import type { Report } from '@/shared/types';
import { Plus, LocateFixed } from 'lucide-react';
import { Button } from '@/components/atoms/button/button';

type MapAreaProps = {
  reports: Report[];
  onSelectReport: (report: Report) => void;
  onReport: () => void;
};

const MARKER_POSITIONS = [
  { left: '45%', top: '26%' },
  { left: '66%', top: '49%' },
  { left: '30%', top: '56%' },
  { left: '76%', top: '27%' },
  { left: '16%', top: '32%' },
  { left: '55%', top: '65%' },
  { left: '38%', top: '38%' },
];

const MARKER_COLORS: Record<string, string> = {
  furto: 'text-furto',
  assalto: 'text-assalto',
  tiroteio: 'text-tiroteio',
};

export function MapArea({ reports, onSelectReport, onReport }: MapAreaProps) {
  return (
    <main className="flex flex-1 flex-col overflow-hidden p-6 md:p-9">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">Mapa de ocorrências</span>
          <h1 className="mt-1.5 text-2xl font-bold tracking-tight text-slate-800">O que está acontecendo por perto?</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" size="md" icon={<LocateFixed size={16} />} className="sm:hidden">
            <span className="sr-only">Minha localização</span>
          </Button>
          <Button variant="secondary" size="md" icon={<LocateFixed size={16} />} className="hidden sm:inline-flex">
            Minha localização
          </Button>
          <Button size="md" icon={<Plus size={17} />} onClick={onReport}>
            Reportar
          </Button>
        </div>
      </div>

      <div className="map-surface relative flex-1 overflow-hidden rounded-xl border border-slate-200 shadow-lg">
        <div className="map-river" />
        <div className="map-road map-road--one" />
        <div className="map-road map-road--two" />
        <div className="map-road map-road--three" />

        <div className="absolute left-[55%] top-[39%] font-mono text-[10px] tracking-widest text-slate-400/70">CENTRO</div>
        <div className="absolute left-[20%] top-[70%] font-mono text-[10px] tracking-widest text-slate-400/70">BELA VISTA</div>
        <div className="absolute right-[12%] bottom-[25%] font-mono text-[10px] tracking-widest text-slate-400/70">LIBERDADE</div>

        {reports.map((report, i) => {
          const pos = MARKER_POSITIONS[i % MARKER_POSITIONS.length];
          return (
            <button
              key={report.id}
              onClick={() => onSelectReport(report)}
              className={`marker-pulse absolute grid h-7 w-7 place-items-center rounded-full ${MARKER_COLORS[report.category]}`}
              style={pos}
            >
              <span className="h-2.5 w-2.5 rounded-full border-2 border-white bg-current shadow-md" />
            </button>
          );
        })}

        <div className="absolute left-[53%] top-[54%] grid h-5 w-5 place-items-center rounded-full bg-brand-400/30">
          <span className="h-2 w-2 rounded-full border-2 border-white bg-brand-500 shadow-lg" />
        </div>

        <div className="absolute bottom-4 left-4 flex gap-3.5 rounded-lg border border-slate-200/60 bg-white/90 px-3 py-2.5 text-[10px] text-slate-600 backdrop-blur">
          <span className="flex items-center gap-1.5"><i className="h-1.5 w-1.5 rounded-full bg-tiroteio" /> Tiroteio</span>
          <span className="flex items-center gap-1.5"><i className="h-1.5 w-1.5 rounded-full bg-assalto" /> Assalto</span>
          <span className="flex items-center gap-1.5"><i className="h-1.5 w-1.5 rounded-full bg-furto" /> Furto</span>
        </div>

        <div className="absolute bottom-4 right-4 grid overflow-hidden rounded-lg border border-slate-200 bg-white/90">
          <button className="flex h-8 w-8 items-center justify-center border-b border-slate-200 text-lg text-slate-600 hover:bg-slate-50">+</button>
          <button className="flex h-8 w-8 items-center justify-center text-lg text-slate-600 hover:bg-slate-50">−</button>
        </div>
      </div>

      <div className="mt-3 flex justify-between font-mono text-[10px] text-slate-400">
        <span className="flex items-center gap-2 text-brand-500"><span className="h-1.5 w-1.5 rounded-full bg-brand-400" /> Atualizado agora</span>
        <span>{reports.length} alertas nesta área</span>
      </div>
    </main>
  );
}
