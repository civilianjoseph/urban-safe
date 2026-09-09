import type { ReactNode } from 'react';

type FormFieldProps = {
  label: string;
  hint?: string;
  optional?: boolean;
  children: ReactNode;
};

export function FormField({ label, hint, optional, children }: FormFieldProps) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-semibold text-slate-600">
        {label}
        {optional && <span className="ml-1 font-normal text-slate-400">opcional</span>}
      </span>
      {children}
      {hint && <span className="text-[10px] font-normal text-slate-400">{hint}</span>}
    </label>
  );
}
