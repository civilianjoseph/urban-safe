import { Modal } from '@/components/atoms/modal/modal';
import { ReportDetails } from '@/components/molecules/report-details/report-details';
import type { Report } from '@/shared/types';

type ReportDetailsModalProps = {
  report: Report | null;
  onClose: () => void;
};

export function ReportDetailsModal({ report, onClose }: ReportDetailsModalProps) {
  return (
    <Modal open={!!report} onClose={onClose}>
      {report && <ReportDetails report={report} />}
    </Modal>
  );
}
