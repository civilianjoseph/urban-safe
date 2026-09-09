import { Button } from '@/components/atoms/button/button';
import { Input } from '@/components/atoms/input/input';
import { FormField } from '@/components/molecules/form-field/form-field';
import { useAuth } from '@/shared/context/auth-context';
import { useState, type FormEvent } from 'react';
import { Mail, Lock, User } from 'lucide-react';
import type { AuthMode } from '@/shared/types';

type AuthFormProps = {
  mode: AuthMode;
  onToggleMode: () => void;
};

export function AuthForm({ mode, onToggleMode }: AuthFormProps) {
  const { login, signup } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      if (mode === 'login') {
        await login(email, password);
      } else {
        await signup(name, email, password);
      }
    } catch {
      setError(mode === 'login' ? 'E-mail ou senha incorretos.' : 'Não foi possível criar seu cadastro.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      {mode === 'signup' && (
        <FormField label="Nome completo">
          <Input
            icon={<User size={16} />}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Como podemos te chamar?"
            required
          />
        </FormField>
      )}
      <FormField label="E-mail">
        <Input
          type="email"
          icon={<Mail size={16} />}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="voce@email.com"
          required
        />
      </FormField>
      <FormField label="Senha">
        <Input
          type="password"
          icon={<Lock size={16} />}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          minLength={6}
          required
        />
      </FormField>
      {error && <p className="rounded-lg bg-red-50 px-3 py-2.5 text-xs text-red-600">{error}</p>}
      <Button type="submit" size="lg" fullWidth disabled={loading}>
        {loading ? 'Aguarde...' : mode === 'login' ? 'Entrar na conta' : 'Criar minha conta'}
      </Button>
    </form>
  );
}
