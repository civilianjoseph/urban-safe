import { Logo } from '@/components/atoms/logo/logo';
import { Button } from '@/components/atoms/button/button';
import { useAuth } from '@/shared/context/auth-context';
import { LogOut, MapPin, Menu, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function Header({ onToggleSidebar }: { onToggleSidebar: () => void }) {
  const { user, logout } = useAuth();
  const [location] = useState('São Paulo, SP');

  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 md:px-8">
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleSidebar}
          className="grid h-9 w-9 place-items-center rounded-lg text-slate-500 hover:bg-slate-100 lg:hidden"
        >
          <Menu size={20} />
        </button>
        <Logo />
      </div>

      <div className="hidden items-center gap-2 text-sm text-slate-500 sm:flex">
        <MapPin size={16} className="text-brand-500" />
        <span>{location}</span>
        <ChevronDown size={15} className="text-slate-300" />
      </div>

      <div className="flex items-center gap-3">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-500 text-xs font-bold text-white">
          {(user?.name ?? user?.email ?? 'U').slice(0, 1).toUpperCase()}
        </span>
        <Button variant="ghost" size="sm" icon={<LogOut size={16} />} onClick={logout} className="hidden sm:inline-flex">
          Sair
        </Button>
      </div>
    </header>
  );
}
