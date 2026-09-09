import { useMemo, useState } from 'react';
import { Header } from '@/components/organisms/header/header';
import { Sidebar } from '@/components/organisms/sidebar/sidebar';
import { MapArea } from '@/components/organisms/map-area/map-area';
import { ReportModal } from '@/components/organisms/report-modal/report-modal';
import { ReportDetailsModal } from '@/components/organisms/report-details-modal/report-details-modal';
import { MOCK_REPORTS } from '@/shared/data/mock-reports';
import type { Category, Report } from '@/shared/types';

export function HomeScreen() {
  const [reports, setReports] = useState<Report[]>(MOCK_REPORTS);
  const [categoryFilter, setCategoryFilter] = useState<Category | 'all'>('all');
  const [reportOpen, setReportOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const visibleReports = useMemo(
    () => (categoryFilter === 'all' ? reports : reports.filter((r) => r.category === categoryFilter)),
    [categoryFilter, reports]
  );

  function handleReportCreated(report: Report) {
    setReports((prev) => [report, ...prev]);
    setReportOpen(false);
  }

  return (
    <div className="flex h-screen flex-col bg-slate-50">
      <Header onToggleSidebar={() => setSidebarOpen((v) => !v)} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          reports={reports}
          categoryFilter={categoryFilter}
          onFilterChange={setCategoryFilter}
          onReport={() => setReportOpen(true)}
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <MapArea
          reports={visibleReports}
          onSelectReport={setSelectedReport}
          onReport={() => setReportOpen(true)}
        />
      </div>

      <ReportModal open={reportOpen} onClose={() => setReportOpen(false)} onCreated={handleReportCreated} />
      <ReportDetailsModal report={selectedReport} onClose={() => setSelectedReport(null)} />
    </div>
  );
}
