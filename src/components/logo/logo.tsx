import { Shield } from 'lucide-react';
import styles from './logo.module.css';

export function Logo() {
  return (
    <div className={styles.root}>
      <span className={styles.icon}>
        <Shield size={20} />
      </span>
      <span className={styles.text}>
        Alerta<span className={styles.dot}>.</span>
      </span>
    </div>
  );
}
