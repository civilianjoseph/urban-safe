import { Upload } from 'lucide-react';
import { useRef, useState } from 'react';

export function PhotoUpload() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState('');

  return (
    <div
      onClick={() => inputRef.current?.click()}
      className="flex h-16 cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed border-slate-300 text-xs text-slate-400 transition-colors hover:border-brand-400 hover:text-brand-500"
    >
      <Upload size={18} />
      <span>{fileName || 'Clique para adicionar uma foto'}</span>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => setFileName(e.target.files?.[0]?.name ?? '')}
      />
    </div>
  );
}
