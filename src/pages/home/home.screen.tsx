import { Header } from '@/components/header/header';
import { Sidebar } from '@/components/sidebar/sidebar';
import { MapView } from '@/components/map-view/map-view';
import styles from './home.screen.module.css';

export function HomeScreen() {
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.content}>
        <Sidebar />
        <MapView />
      </div>
    </div>
  );
}
