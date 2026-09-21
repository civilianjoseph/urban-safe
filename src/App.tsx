import { AuthProvider } from '@/shared/context/auth-context';
import * as AuthModule from '@/pages/auth/auth.screen';

// Obtém o componente quer ele venha como named export ou default export
const ComponenteAuth = (AuthModule as any).AuthScreen || (AuthModule as any).default;

export function App() {
  return (
    <AuthProvider>
      <ComponenteAuth />
    </AuthProvider>
  );
}

export default App;