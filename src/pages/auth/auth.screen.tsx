import { Button } from '@/components/button/button';
import { Input } from '@/components/input/input';
import { Logo } from '@/components/logo/logo';
import { useAuth } from '@/shared/context/auth-context';
import { Shield } from 'lucide-react';
import { FormEvent, useState } from 'react';
import styles from './auth.screen.module.css';

export function AuthScreen() {
  const [email, setEmail] = useState('teste@gmail.com');
  const [password, setPassword] = useState('Teste@123');
  const { login, loading } = useAuth();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await login(email, password);
  }

  if (loading) {
    return (
      <div className={styles.loading}>
        <Shield size={30} className={styles.loadingIcon} />
        <span className={styles.loadingText}>Preparando o mapa seguro...</span>
      </div>
    );
  }

  return (
    <div className={styles.root}>
      <div className={styles.kicker}>
        <span className={styles.kickerDot} /> Lorem ipsum
      </div>

      <Logo />
      <h1 className={styles.title}>Tela de login</h1>
      <p className={styles.subtitle}>Lorem ipsum</p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <Input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit" size="lg" fullWidth>
          Entrar na conta
        </Button>
      </form>
    </div>
  );
}
