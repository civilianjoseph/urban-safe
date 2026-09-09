import { X } from 'lucide-react';
import type { ReactNode } from 'react';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

export function Modal({ open, onClose, children }: ModalProps) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-slate-900/40 p-5 backdrop-blur-sm animate-fade-in"
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative w-full max-w-lg max-h-[calc(100vh-2.5rem)] overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl animate-slide-up">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600"
        >
          <X size={18} />
        </button>
        {children}
      </div>
    </div>
  );
}
