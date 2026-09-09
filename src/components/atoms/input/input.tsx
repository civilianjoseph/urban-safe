import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: ReactNode;
  action?: ReactNode;
};

export function Input({ icon, action, className = '', ...props }: InputProps) {
  return (
    <div className="relative flex items-center">
      {icon && <span className="absolute left-3 text-slate-400">{icon}</span>}
      <input
        className={`w-full rounded-lg border border-slate-200 bg-white py-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 ${icon ? 'pl-10' : 'pl-3.5'} ${action ? 'pr-11' : 'pr-3.5'} ${className}`}
        {...props}
      />
      {action && <span className="absolute right-2">{action}</span>}
    </div>
  );
}

export function Textarea({ className = '', ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={`w-full resize-vertical rounded-lg border border-slate-200 bg-white px-3.5 py-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 ${className}`}
      rows={3}
      {...props}
    />
  );
}
