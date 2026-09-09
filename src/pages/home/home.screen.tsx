import { Header } from '@/components/header/header';
import styles from './home.screen.module.css';

export function HomeScreen() {
  return (
    <div className={styles.root}>
      <Header />
    </div>
  );
}
