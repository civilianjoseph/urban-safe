import { Logo } from '@/components/atoms/logo/logo';
import { AuthForm } from '@/components/molecules/auth-form/auth-form';
import { useAuth } from '@/shared/context/auth-context';
import { Shield, MapPin } from 'lucide-react';
import { useState, type ReactNode } from 'react';
import type { AuthMode } from '@/shared/types';

export function AuthScreen() {
  const { loading } = useAuth();
  const [mode, setMode] = useState<AuthMode>('login');

  if (loading) {
    return (
      <div className="grid min-h-screen place-content-center gap-4 text-slate-400">
        <Shield size={30} className="mx-auto text-brand-500" />
        <span className="text-sm">Preparando o mapa seguro...</span>
      </div>
    );
  }

  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">
      <AuthVisual />
      <AuthPanel mode={mode} onToggleMode={() => setMode(mode === 'login' ? 'signup' : 'login')} />
    </div>
  );
}

function AuthVisual() {
  return (
    <section className="hidden flex-col justify-between bg-gradient-to-br from-brand-50 to-slate-50 p-10 lg:flex xl:p-14">
      <Logo />
      <div className="max-w-xl">
        <div className="mb-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-brand-500">
          <span className="h-2 w-2 rounded-full bg-brand-400" /> Segurança colaborativa
        </div>
        <h1 className="text-5xl font-bold leading-none tracking-tight text-slate-800 xl:text-7xl">
          Mais atentos.<br />
          <em className="text-brand-500 not-italic">Mais seguros.</em>
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-500">
          Compartilhe alertas da sua região e ajude sua comunidade a se mover com mais segurança.
        </p>
      </div>
      <div className="flex justify-between font-mono text-[11px] text-slate-400">
        <span className="flex items-center gap-2"><MapPin size={14} /> Feito para sua cidade</span>
        <span>© 2026 Alerta</span>
      </div>
    </section>
  );
}

function AuthPanel({ mode, onToggleMode }: { mode: AuthMode; onToggleMode: () => void }) {
  return (
    <section className="grid place-items-center bg-white p-8">
      <div className="w-full max-w-sm">
        <div className="mb-10 lg:hidden">
          <Logo />
        </div>
        <div className="mb-8">
          <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">Bem-vindo de volta</span>
          <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-slate-800">
            {mode === 'login' ? 'Entre na sua conta' : 'Crie sua conta'}
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            {mode === 'login' ? 'Acompanhe os alertas perto de você.' : 'Comece a cuidar melhor da sua região.'}
          </p>
        </div>

        <AuthForm mode={mode} onToggleMode={onToggleMode} />

        <div className="mt-6 text-center text-xs text-slate-500">
          {mode === 'login' ? 'Ainda não tem uma conta?' : 'Já possui uma conta?'}{' '}
          <button onClick={onToggleMode} className="font-bold text-brand-600">
            {mode === 'login' ? 'Cadastre-se' : 'Entrar'}
          </button>
        </div>

        <div className="mt-8 flex items-center gap-2 text-[10px] leading-relaxed text-slate-400">
          <Shield size={14} className="flex-shrink-0 text-brand-400" />
          Seus dados são protegidos e usados apenas para manter a comunidade segura.
        </div>
      </div>
    </section>
  );
}
