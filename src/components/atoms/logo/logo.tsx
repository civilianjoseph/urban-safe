import { Shield } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-500 text-white">
        <Shield size={20} />
      </span>
      <span className="text-lg font-extrabold tracking-tight text-slate-800">
        Alerta<span className="text-brand-500">.</span>
      </span>
    </div>
  );
}
