import { AuthProvider, useAuth } from '@/shared/context/auth-context';
import { AuthScreen } from '@/pages/auth/auth.screen';
import { HomeScreen } from '@/pages/home/home.screen';

function AppContent() {
  const { user } = useAuth();
  return user ? <HomeScreen /> : <AuthScreen />;
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
