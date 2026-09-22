import { AuthProvider, useAuth } from '@/shared/context/auth-context';
import { AuthScreen } from '@/pages/auth/auth.screen';
import { HomeScreen } from '@/pages/home/home.screen'; // Certifique-se de que o João já criou esse arquivo, mesmo que vazio!

function AppContent() {
  const { user } = useAuth();
  return user ? <HomeScreen /> : <AuthScreen />;
}

export function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;